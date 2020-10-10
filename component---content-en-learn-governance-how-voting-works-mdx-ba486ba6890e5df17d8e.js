(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"4INY":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return r})),o.d(t,"default",(function(){return p}));var a=o("zLVn"),n=(o("q1tI"),o("7ljp")),l=o("z1h2"),r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.mdx)("div",t)}},c=s("CTA"),i=s("Callout"),m={_frontmatter:r},d=l.a;function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.mdx)(d,Object.assign({},m,o,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"Voting"),Object(n.mdx)("h2",null,"A guide to participation in MakerDAO governance"),Object(n.mdx)("p",null,"Voting requires ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/mkr-token"}),"Maker (MKR) tokens")," and takes place in the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/"}),"Governance Portal"),"."),Object(n.mdx)("p",null,"The Governance Portal lists Governance Polls and Executive Votes and the Voting Contract section lets users set up and manage their voting contracts."),Object(n.mdx)("p",null,"This guide describes the Voting Contract responsible for facilitating on-chain voting in the form of Governance Polls and Executive Votes conducted to maintain the Maker Protocol."),Object(n.mdx)("h2",null,"The Voting Contract"),Object(n.mdx)("p",null,'To vote, MKR owners must "lock-up" tokens by transferring them into the Voting Contract. Votes are weighted based on the quantity of MKR locked in the contract. "Locked" MKR can be withdrawn at any time.'),Object(n.mdx)("p",null,"MKR token holders have the option to set up their Voting Contract with a single hot or cold wallet, or, as a linked wallet, for more secure voting."),Object(n.mdx)("p",null,"The linked wallet setup allows users to vote using a hot wallet, with MKR stored on a cold wallet."),Object(n.mdx)("h3",null,"Voting Wallet Setup"),Object(n.mdx)("p",null,"Maker (MKR) token holders can set up their Voting Contract using a single hot or cold wallet or a linked-wallet setup for greater security."),Object(n.mdx)("h4",null,"Linked-Wallet Voting"),Object(n.mdx)("p",null,"With linked-wallet voting, MKR holders can use their wallet to vote with MKR safely stored on their cold wallet."),Object(n.mdx)("p",null,"The hot wallet has permission to manage the voting contract but not to transfer tokens. If the hot wallet is compromised, the link can be broken from the cold wallet so MKR stored on the cold wallet will remain safe and unaffected if a hot wallet is compromised."),Object(n.mdx)("p",null,"Users can avoid the Vote Proxy by depositing Maker (MKR) tokens directly into the voting contract. While single wallet voting is less secure, the initial setup is more convenient. Users who store MKR on MetaMask or other web wallets may find it to be the easiest way to start voting."),Object(n.mdx)(c,{mdxType:"CTA"},Object(n.mdx)("p",null,"Please see our guide to ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/governance/voting-setup/"}),"Voting Wallet Setup."))),Object(n.mdx)("h3",null,"Contract Setup and Voting Costs"),Object(n.mdx)("p",null,"Voting requires a single transaction and typically costs a few cents per vote. The total amount varies depending on network congestion."),Object(n.mdx)("p",null,"Setting up a linked-wallet Voting Contract takes four transactions for a total of approximately 1M gas. The cost of setting up a linked-wallet Voting Contract is split between the hot and cold wallets so please ensure both wallets contain Ether (ETH)."),Object(n.mdx)(i,{mdxType:"Callout"},Object(n.mdx)("p",null,"Find more information in the Maker Foundation’s blog post on the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://blog.makerdao.com/the-makerdao-voting-proxy-contract/"}),"MakerDAO Voting Proxy Contract"),".")),Object(n.mdx)("h2",null,"Governance Polls and Executive Votes"),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"How is the voting calculated?")),Object(n.mdx)("p",null,"Voting is weighted by the amount of MKR that votes for a proposal."),Object(n.mdx)("p",null,"For example, if 50 stakeholders hold a total of 600 MKR and vote for proposal A, while 100 stakeholders hold a total of 400 MKR and vote for proposal B, then Proposal A would win with 60% of the vote."),Object(n.mdx)("p",null,"Notice that the number of voters is irrelevant, only the amount of MKR tokens voting for each proposal."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"What happens to my MKR when I am voting?")),Object(n.mdx)("p",null,"MKR is locked in the Voting Contract that was set up by the voter. This MKR is only accessible with the wallet used to set up the voting contract. For a single-wallet setup, only that wallet can withdraw MKR out of the system. For a linked-wallet setup, either of the linked wallets can be used to withdraw MKR to the linked cold wallet."),Object(n.mdx)("h3",null,"Governance Polls"),Object(n.mdx)("p",null,"Governance Polls occur on-chain and are used to measure the sentiment of MKR voters. They can be accessed through the Maker Foundation's ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling"}),"Voting Portal- Polling tab"),"."),Object(n.mdx)("p",null,Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling"}),"Polls")," often run concurrently, allowing voters to participate in any number of them at the same time and some use ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://ballotpedia.org/Ranked-choice_voting_(RCV)"}),"instant run-off")," so you can select multiple options.z"),Object(n.mdx)("p",null,"The current schedule calls for polls to 'go live' on a weekly basis every Monday at 16:00 UTC."),Object(n.mdx)(c,{mdxType:"CTA"},Object(n.mdx)("p",null,"MKR holders may be asked to:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Determine governance and DAO processes outside the technical layer of the Maker Protocol.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Form consensus on important community goals and targets.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Measure sentiment on potential Executive Vote proposals.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Ratify governance proposals originating from the MakerDAO forum signal threads.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Determine which values certain system parameters should be set to before those values are then confirmed in an executive vote.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Ratify risk parameters for new collateral types as presented by Risk Teams.")))),Object(n.mdx)("p",null,"Here is an example of voting in action in the Governance Portal:"),Object(n.mdx)("p",null,Object(n.mdx)("img",Object.assign({parentName:"p"},{src:"/images/voter-58.png",alt:"An example of Governance Polling"}))),Object(n.mdx)("h4",null,"How long is the voting period of a Governance Poll?"),Object(n.mdx)("p",null,"The voting period of a given Governance Poll varies. Recurring polls of the same type are usually standardized and have the same duration."),Object(n.mdx)("p",null,"The most common are three and seven day periods. Concurrently running polls do not necessarily have the same voting periods."),Object(n.mdx)("h4",null,"Where can I find on-chain Governance Polls?"),Object(n.mdx)("p",null,"Live polls can be found on the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling"}),'"Polling" tab')," in the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/"}),"Governance Portal"),". Historic poll data can be found at the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://mkrgov.science/"}),"Maker Governance Analytics Dashboard"),"."),Object(n.mdx)("p",null,"User risks can be mitigated by using small test amounts beforehand and by thoroughly checking which addresses one is interacting with."),Object(n.mdx)("h4",null,"How to create an on-chain Governance Poll?"),Object(n.mdx)("p",null,"Anyone can create an on-chain Governance Poll using the polling smart contract, however, there is no UI provided to do this yet."),Object(n.mdx)("p",null,"Currently, only the elected Governance Facilitator","(","s",")"," are able to put up polls that display on the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com"}),"Governance Portal"),", polls created by arbitrary Ethereum addresses ",Object(n.mdx)("strong",{parentName:"p"},"are not")," displayed."),Object(n.mdx)("p",null,"In the future, the MKR token holders or any third parties may want to develop special UIs or other voting frontends."),Object(n.mdx)("h3",null,"Executive Votes"),Object(n.mdx)("p",null,"Executive Votes occur on-chain and can be accessed through the Maker Foundation's ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling"}),"Voting Portal"),"."),Object(n.mdx)("p",null,'Executive Votes "execute" technical changes to the Maker Protocol. When active, each Executive Vote has a proposed set of changes being made on the Maker Protocol\'s smart-contracts.'),Object(n.mdx)("p",null,"Unlike the other types of votes, Executive Votes use a 'Continuous Approval Voting' model."),Object(n.mdx)("p",null,"Executive Vote can occur at any time, however the current schedule calls for Executive Votes to go live on Fridays 12pm EST/9am PST/14:00 UTC"),Object(n.mdx)(c,{mdxType:"CTA"},Object(n.mdx)("p",null,"Executive Votes can be used to:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Add or remove collateral types.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Add or remove Vault types.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Adjust global system parameters.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Adjust Vault-specific parameters.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Replace modular smart contracts.")))),Object(n.mdx)("p",null,"Anyone can create an on-chain Executive Vote using the MakerDAO governance contracts, however, there is no non-technical UI available to do this."),Object(n.mdx)("p",null,'Users can create proposals, also known as "',Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/governance-module/chief-detailed-documentation"}),"Slates"),'," through this ',Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://chief.makerdao.com/"}),"experimental portal"),", or by interacting directly with the smart contracts."),Object(n.mdx)("p",null,"Here is an example of an executive vote on the Governance Portal:"),Object(n.mdx)("p",null,Object(n.mdx)("img",Object.assign({parentName:"p"},{src:"/images/voter-59.png",alt:"An example of Executive Vote"}))),Object(n.mdx)("h4",null,"Continuous Approval Voting"),Object(n.mdx)("p",null,"Continuous Approval Voting means that competing proposals may be introduced any time."),Object(n.mdx)("p",null,"The Executive Vote represents the current state of the system and is therefore continuously active."),Object(n.mdx)(c,{mdxType:"CTA"},Object(n.mdx)("p",null,"There are three aspects to consider with regard to Continuous Approval Voting:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"A vote creates a barrier for new proposals, since new proposals need to surpass the voting weight of the last successful proposal.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},"Votes are meant to remain in the system continuously in order to prevent bad proposals from passing easily.")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("p",{parentName:"li"},'The more votes there are on the current state of the system, the more secure the system generally is from any "rogue" proposals.')))),Object(n.mdx)("p",null,"With Continuous Approval Voting, the continuity of staked votes challenges and reinforces the status quo of the system through movements of the majority of votes between the most recent successful proposal and new proposals."),Object(n.mdx)("p",null,"If MKR token holders do not agree with a new proposal, then they may cast their votes for the current state of the system (or leave MKR there if they were already voting for the current state), implying that they do not want to see anything changed."),Object(n.mdx)("p",null,"To revert a change in the system an entirely new proposal must be put forth. It is impossible to reactivate an old proposal."),Object(n.mdx)("h4",null,"Auditability"),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"With regard to new votes")),Object(n.mdx)("p",null,"The public is encouraged to self-audit the code for each vote."),Object(n.mdx)("p",null,"There is a guide on how to do so found ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/governance/audit-exec-spells/"}),"here.")),Object(n.mdx)("p",null,"The team creating these votes has been putting in significant effort to make it easy for non-technical people to audit the code by adding many explanatory notes within the code itself."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"With regard to a user's voting record")),Object(n.mdx)("p",null,"The voter's current vote is displayed on a given proposal page in the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/"}),"voting portal"),". Another alternative is to check third-party tools like ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://mkrgov.science"}),"mkrgov.science")," that collect voting data and even offer a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://mkrgov.science/voting-history"}),"voting history lookup tool"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-learn-governance-how-voting-works-mdx-ba486ba6890e5df17d8e.js.map