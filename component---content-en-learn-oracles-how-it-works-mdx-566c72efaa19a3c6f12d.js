(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"+q0J":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return h}));var n,r=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("z1h2"),o={},c=(n="Indent",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.mdx)("div",e)}),d={_frontmatter:o},l=i.a;function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.mdx)(l,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",null,"How it Works"),Object(s.mdx)("hr",null),Object(s.mdx)("p",null,"In the Maker Protocol, each collateral type has a corresponding oracle that publishes a reference price that the system uses. Each oracle consists of an ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module")," and a ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer.")," The Medianizer is sent data through a system of Feeds and relayers."),Object(s.mdx)("p",null,"Each Feed uses a tool called ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/setzer-mcd"}),"Setzer"),", which pulls the median price from a set of exchanges and then pushes it to a ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"Secure Scuttlebutt Network")," that has relayers reading from it. Relayers aggregate the price data and send a transaction to the Medianizer."),Object(s.mdx)("p",null,"The Medianizer then takes the median of the multiple reported medians and publishes it as a queued reference price. This price is then delayed by the Oracle Security Module before it is finally used by the system."),Object(s.mdx)("p",null,"Feeds may configure Setzer to pull from any exchanges of their choosing. Relayers are able to configure parameters around when to push price data to the Medianizer. Only MKR governance can configure or change the Medianizer and Oracle Security Module."),Object(s.mdx)("h2",null,"FAQs"),Object(s.mdx)(c,{pad:2,mdxType:"Indent"},Object(s.mdx)("hr",null),Object(s.mdx)("h3",null,"Why are oracles an attack target for malicious actors?"),Object(s.mdx)(c,{pad:3,mdxType:"Indent"},Object(s.mdx)("p",null,"In the Maker Protocol, if the reference price for an asset was determined by a single party, then they could fraudulently report an incorrect price and cause severe issues."),Object(s.mdx)("p",null,"For instance, if the price of ETH was reported to be fraudulently low, say $0.01, then every single ETH ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," in the system would be ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/liquidation"}),"Liquidated.")),Object(s.mdx)("p",null,"On the other hand, if the price of ETH was reported to be artificially high, say $1,000,000.00, then any ETH Vault owner would be able to issue an excessive amount of Dai since the system thinks there is more Collateral value than there actually is."),Object(s.mdx)("p",null,"Oracle attacks can be very profitable for a successful attacker and can be very disruptive to MakerDAO and its users.")),Object(s.mdx)("h3",null,"How is privacy handled?"),Object(s.mdx)(c,{pad:3,mdxType:"Indent"},Object(s.mdx)("p",null,"From their onset, the individuals running feeds have been pseudonymous out of necessity, to protect the individuals from the risk of extortion and blackmail."),Object(s.mdx)("p",null,"Pseudonymous Feeds also have the benefit of making it harder to coordinate an Oracle attack since the Feeds don’t know who the others are. Organizations running Feeds, however, are different."),Object(s.mdx)("p",null,"Organizations are much more resilient against coercion, have the resources to combat malicious actors, and have their reputations at stake. This makes them much better equipped to be Feeds with public identities. A hybrid model is optimal, one that incorporates the benefits of both individual and organizational Feeds.")),Object(s.mdx)("h3",null,"Is the oracle system Sybil-resistant?"),Object(s.mdx)(c,{pad:3,mdxType:"Indent"},Object(s.mdx)("p",null,"Yes, the oracle system is resistant to Sybil attacks. The system uses a whitelist for feeds and becoming a feed requires approval by MKR governance. Therefore, an attacker cannot gain a majority influence by creating many pseudo-feeds."),Object(s.mdx)("p",null,'"In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence. A reputation system\'s vulnerability to a Sybil attack depends on how cheaply identities can be generated, the degree to which the reputation system accepts inputs from entities that do not have a chain of trust linking them to a trusted entity, and whether the reputation system treats all entities identically." - ',Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Sybil_attack"}),"Wikipedia"))),Object(s.mdx)("h3",null,"What happens if an exchange experiences a flash crash?"),Object(s.mdx)(c,{pad:3,mdxType:"Indent"},Object(s.mdx)("p",null,"The reference price published by the Oracles is a median of the median prices reported by at least 20 different Feeds, outliers are automatically filtered out."),Object(s.mdx)("p",null,"In practice, this means if a single exchange experiences a flash crash the set of prices will look something like this:"),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},"[0.70, 104.80, 104.82, **104.88**, 104.90, 105.02, 105.04]")),Object(s.mdx)("p",null,"The median of this set still reflects the real market price of the asset. Flash crashes on single exchanges do not affect the published reference price.")),Object(s.mdx)("h3",null,"Can MakerDAO governance change the time of the Oracle Security Module’s delay?"),Object(s.mdx)(c,{pad:3,mdxType:"Indent"},Object(s.mdx)("p",null,"Yes. This parameter is called the ",Object(s.mdx)("inlineCode",{parentName:"p"},"Oracle Security Module Delay")," and can be adjusted by MKR token holders."))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-learn-oracles-how-it-works-mdx-566c72efaa19a3c6f12d.js.map