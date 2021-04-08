// @flow
/** @jsx jsx */

import { BlogAuthor } from "@modules/blog";
import { useTranslation } from "@modules/localization";
import { Link } from "@modules/navigation";
import { jsx } from "theme-ui";
import type { TFrontmatter } from "@modules-types";
import type { Node } from "react";

type TBlogResultProps = {
  frontmatter: TFrontmatter,
  excerpt: string,
  fileAbsolutePath: string,
  url: string,
};

export default function BlogResult({
  frontmatter,
  excerpt,
  fileAbsolutePath,
  url,
}: TBlogResultProps): Node {
  const { t } = useTranslation();
  const { authors, date, description, title, type } = frontmatter;

  const resultPath = url || fileAbsolutePath;

  const postLink = resultPath
    .slice(resultPath.indexOf("/blogPosts/") + 10, resultPath.length)
    .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "");

  return (
    <div
      sx={{
        px: [0, 0, "32px"],
        pt: "34px",
        pb: "50px",
        borderBottom: "1px solid",
        borderColor: "muted",
      }}
    >
      {type && (
        <Link
          to={`/blog?section=${type}`}
          sx={{
            fontWeight: 400,
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          {t(type)}
        </Link>
      )}
      <Link to={postLink} sx={{ color: "text" }}>
        <h2
          sx={{
            fontWeight: 500,
            fontSize: "32px",
            mb: "28px",
          }}
        >
          {title}
        </h2>
      </Link>
      {authors && <BlogAuthor authors={authors} date={date} />}
      <p sx={{ mt: "26px" }}>{description || excerpt}</p>
    </div>
  );
}
