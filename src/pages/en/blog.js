/** @jsx jsx */
import React, {useState, useEffect} from 'react'
import { jsx, Box, Flex, useColorMode } from "theme-ui";
import {graphql} from 'gatsby'
import {useLocation} from '@reach/router';
import queryString from 'query-string';
import { navigate } from '@reach/router';

import {Button} from '@modules/ui';
import {Link} from '@modules/navigation';
import {BlogCard, BlogResult} from '@modules/blog'
import { useTranslation } from "@modules/localization";

const postsPerPage = 4;

const BlogHome = ({data}) => {
	const {search} = useLocation();
	const { t } = useTranslation();

	const initialSection = queryString.parse(search).section || null;
	const [types, setTypes] = useState(data.allMdx.edges.map(({node}) => node.frontmatter.type).filter((value, index, self) => self.indexOf(value) === index))
	const  initialSectionExists = types.length > 0 ? types.indexOf(initialSection) !== -1 : false; //NOTE(Rejon): Checks if the section provided in query string actually exists. 
		
	const latestPosts = initialSection !== null && initialSectionExists ? 
						data.allMdx.edges.filter(({node}) => node.frontmatter.type === initialSection).slice(0,3) 
						: 
						(types.length > 0 ?
							types.map((type) => data.allMdx.edges.find(({node}, index) => node.frontmatter.type === type))
							:
							data.allMdx.edges.slice(0,3)	
						);

	const [sectionData, setSectionData] = useState({
		type: initialSectionExists ? initialSection : null, 
		allPosts: initialSection !== null && initialSectionExists ?  data.allMdx.edges.filter(({node}) => node.frontmatter.type === initialSection) : data.allMdx.edges.filter(({node}) => latestPosts.find((fNode) => node.id === fNode.node.id) === undefined),
		latestPosts,
		currentPage: 0
	})

	const availableLanguages = data.allSitePage.nodes.map(({path}) => path.split('/')[1]);

	//Update the data and local type if we click one of the category tags
	useEffect(() => {
		if (initialSection !== null && sectionData.type !== initialSection)
		{
			setBlogCategory(initialSection)
		}
	}, [initialSection])

	//Whether to show pagination button or not. 
	const showNextButton = ((sectionData.currentPage + 1) * postsPerPage < sectionData.allPosts.length);

	const setBlogCategory = (cat = null) => {
		let allPosts = [...data.allMdx.edges]; //Spread it so we don't edit the original data. 
		let latestPosts = [];

		if (cat === null) //User clicked "Home"
		{
			latestPosts = types.length > 0 ?
						types.map((type) => allPosts.find(({node}, index) => {
							const hasType = node.frontmatter.type === type; 

							if (hasType)
							{
								allPosts.splice(index, 1);
							}

							return hasType; 
						}))
						:
						allPosts.splice(0,3)
						;
		}
		else 
		{
			allPosts = data.allMdx.edges.filter(({node}) => node.frontmatter.type === cat); //allBlogPosts of a specific type
			latestPosts = allPosts.splice(0, 3);
		}

		setSectionData({
			type: cat, 
			allPosts,
			latestPosts,
			currentPage: 0
		});
	}

	return (
		<Flex sx={{
			flexDirection: 'column',
			alignItems: 'center',
			mt: '128px',
			width: '100%',
			px: '12.3%'
		}}>
			
			<h1 sx={{
				mt: 0,
				fontWeight: 500,
				fontSize: '48px',
				mb: '50px'
			}}>
			{t('Maker_Community_Blog')}
			</h1>
			
			<Flex sx={{
				mb: '98px',
				'& > *:not(:last-child)': {
					mr: '64px'
				}
			}}>
				<Link sx={{
						color: sectionData.type === null ? 'link' : 'mutedAlt',
						cursor: 'pointer',
						transition: 'all .16s',
						fontWeight: 400,
						'&:hover': {
							color: 'linkAlt'
						}
					}}
					partiallyActive={false}
					activeClassName={'null'}
					to={'/blog'}
					onClick={() => setBlogCategory(null)}
				>
					{t('Home')}
				</Link>
				{types.map((type, index) => (
					<Link sx={{
						color: sectionData.type ===  type ? 'link' : 'mutedAlt',
						cursor: 'pointer',
						transition: 'all .16s',
						fontWeight:  400,
						'&:hover':  {
							color: 'linkAlt'
						}
					}}
					to={`/blog?section=${type}`}
					key={`blogPost-type-${index}`}
					onClick={() => setBlogCategory(type)}>
					{t(type)}
					</Link>
				))}
			</Flex>

			<Flex sx={{
				justifyContent: 'space-evenly',
				width: '100%',
				mb: '80px'
			}}>
				{sectionData.latestPosts.map(({node}, index) => (
					<BlogCard isLatest {...node} key={`blog-card-latest-${index}`}/>
				))}
			</Flex>

			<Flex sx={{
				width: '100%',
				justifyContent: 'space-around',
				
			}}>
				<Flex sx={{
					flexDirection: 'column',
					flex: 1,
					mb: '48px'
				}}>
					{sectionData.allPosts.slice(0, postsPerPage * (1 + sectionData.currentPage)).map(({node}, index) => 
						<BlogResult {...node} key={`blog-result-${index}`}/>
					)}
				</Flex>
				
				<div sx={{pt: '24px'}}>
					<p sx={{textTransform: 'uppercase'}}>{t("LANGUAGES")}</p>

					<ul sx={{
						listStyleType: 'none',
						p:0
					}}>
						{availableLanguages.map((loc, index) => (
							<li key={`available-blog-lang-${index}`}>
								<Link to={`/${loc}/blog`}>
									{t("Language", null, null, loc)}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Flex>
			{showNextButton 
				&&
				<div sx={{mb: '114px'}}>

					<Button outline icon="plus" onClick={() => {
						setSectionData({
							...sectionData,
							currentPage: sectionData.currentPage + 1
						})
					}}>

						{t('See_More_Posts')}

					</Button>
				</div>
			}
		</Flex>
	)
}

 export const query = graphql`
	query BlogHomeQuery($regex: String, $locale: String) {
		allMdx(filter: {fileAbsolutePath: {regex: $regex}}, sort: {fields: frontmatter___date, order: DESC}) {
			edges {
			node {
				fileAbsolutePath
				excerpt(truncate: true, pruneLength: 200)
				frontmatter {
				type
				title
				date(formatString: "MMMM DD, YYYY", locale: $locale)
				description
				authors
				
				}
				mdxAST
				id
			}
			}
		}
		allSitePage(filter: {path: {regex: "/\/([\\w]{2})\/blog\/$/"}}) {
			nodes {
			path
			}
		}
	}
 `

export default BlogHome; 
