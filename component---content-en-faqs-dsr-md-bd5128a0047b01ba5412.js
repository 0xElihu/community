(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{It0o:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return h}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("z1h2"),r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",t)}},c=s("StatusBanner"),l=s("Button"),d={_frontmatter:r},m=i.a;function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.mdx)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c,{sticky:!0,mdxType:"StatusBanner"},Object(o.mdx)("p",null,"These are legacy guides and will not be maintened. You may be looking for the ",Object(o.mdx)(l,{secondary:!0,inline:!0,to:"/learn/Dai/dsr/",mdxType:"Button"},"DSR page"))),Object(o.mdx)("h1",null,"Dai Savings Rate"),Object(o.mdx)("h2",null,"What is the Dai Savings Rate?"),Object(o.mdx)("p",null,"The Dai Savings Rate (DSR) is a variable rate of accrual earned by locking Dai in the DSR smart contract. Dai holders can earn savings automatically and natively while retaining control of their Dai. The DSR smart contract has no withdrawal limits, deposit limits, or liquidity constraints. The rate is actively set by MKR token holders through ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/governance/on-chain-gov/"}),"on-chain governance.")),Object(o.mdx)("p",null,"The DSR is also a monetary policy tool used by Maker governance to influence demand for Dai."),Object(o.mdx)("h2",null,"How does the DSR work?"),Object(o.mdx)("p",null,"Dai holders can lock their Dai into the DSR smart contract at any time. Once locked, Dai continuously accrues to the users balance, based on the current DSR."),Object(o.mdx)("p",null,"For more technical details on how the DSR works, visit ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation"}),"Pot - Detailed Documentation")," on our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation.")),Object(o.mdx)("h2",null,"Are there any range limits to the DSR, can it be negative or zero?"),Object(o.mdx)("p",null,"There are no hard limits to what the DSR can be set to. The exception being that it is not possible for the DSR to be set to a negative rate with the current code-base. In theory, it’s possible for MKR governors to commission a rewrite of the code to be able to support negative rates. Whether this would make sense is another question. Negative rates on the DSR might not be effective, since users would simply withdraw their Dai."),Object(o.mdx)("h2",null,"Does Dai automatically earn the DSR?"),Object(o.mdx)("p",null,"No. Dai only earns the rate if it is deposited into the DSR smart-contract."),Object(o.mdx)("h2",null,"Is the DSR its own smart contract?"),Object(o.mdx)("p",null,"Yes, the DSR is a part of the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module.")," This module is responsible for collecting Stability Fees and distributing Dai to DSR users. For a better understanding of the smart-contract structure of the Maker Protocol, visit our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal.")),Object(o.mdx)("h2",null,"When users lock Dai into the DSR, is that Dai pooled?"),Object(o.mdx)("p",null,"Yes, all Dai locked into the DSR is technically pooled together. However, the system tracks deposits on an individual basis."),Object(o.mdx)("h2",null,"Do DSR accruals compound or are they only earned on the principal?"),Object(o.mdx)("p",null,"In the code, DSR is continuously compounding at a growth rate of x% per second. For example, when the DSR is set to 2%, it will be accumulating at 1.0000000006279371924910298109948‬% per second. Practically, users experience an annual compounding of the displayed rate. For example, if the DSR was 2%, assuming the user put in 100 Dai, at the end of the first year they would have 102.00, and at the end of the second year they would have 104.04."),Object(o.mdx)("p",null,"Technical documentation about how Rates work in the Maker Protocol can be found in our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," documentation."),Object(o.mdx)("h2",null,"What is the formula for the expected accruals earned through the DSR?"),Object(o.mdx)("p",null,"Although the DSR compounds at a growth rate of x% per second, in practice the user experiences an annual compounding of the displayed rate. The easiest way to calculate how much one would earn using the DSR is to use an Annual Compounding interest formula. A ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php"}),"Compound Interest Calculator")," can serve this purpose, simply make sure ",Object(o.mdx)("inlineCode",{parentName:"p"},"Compound (n)")," is set to ",Object(o.mdx)("inlineCode",{parentName:"p"},"Annually (1/yr)"),"."),Object(o.mdx)("p",null,"Formula:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),"A = P(1 + r)^t\n")),Object(o.mdx)("p",null,"Where:"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(o.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"A"),Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"ending value of your deposit")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"P"),Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"the principal deposit amount")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"r"),Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"the annual interest rate ","(","decimal",")")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"t"),Object(o.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"the number of years the principal amount will stay in the DSR")))),Object(o.mdx)("h2",null,"Will there be any constraints, like minimum lockup time or withdrawal limits?"),Object(o.mdx)("p",null,"Dai in DSR has no liquidity or time constraints. There is no minimum lockup time and no withdrawal limit for Dai in the DSR. Users can freely enter into and out of the DSR, only needing to pay the Ethereum transaction fee."),Object(o.mdx)("h2",null,"Does Dai earned by the DSR get calculated and paid out at the time of withdrawal, or is it continuously added to the user’s balance?"),Object(o.mdx)("p",null,"The amount earned is recalculated and counted towards each user’s balance multiple times a day. In practice, the DSR compounds once a year and is paid out pro-rata at the time of withdrawal. The displayed rate is what a user would earn on their principal in one-year using a simple interest calculation. For example, if the DSR is 2% and a user deposits 100 Dai they can expect to have 102 Dai in exactly 1 year."),Object(o.mdx)("p",null,"Technical documentation about how Rates work in the Maker Protocol can be found in our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," documentation."),Object(o.mdx)("h2",null,"How is the DSR being used by MKR token holders as a monetary policy tool?"),Object(o.mdx)("p",null,"The DSR is a global parameter that can be raised or lowered to influence demand for Dai. Raising the DSR incentivizes users to hold more Dai, leading to higher demand for Dai, whereas lowering the DSR has the opposite effect of reducing demand for Dai. This is reflected in the spot market price of Dai; if Dai is trading below a dollar, then the DSR can be raised to increase demand for Dai which would bring up the price of Dai. Conversely, if Dai is trading above a dollar, then the DSR can be lowered to reduce the demand for holding Dai which may help bring down the price of Dai."),Object(o.mdx)("h2",null,"Where can someone find information to better understand the economic impact of the DSR?"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#in-depth-analysis"}),"In-Depth Analysis")," section of the Awesome-MakerDAO resource library offers comprehensive literature on this topic. This section is always expanding as more information becomes available."),Object(o.mdx)("h2",null,"Does the DSR reduce the MKR burn rate?"),Object(o.mdx)("p",null,"To answer this question accurately, one must understand what the value of the DSR is. The DSR is a cost to the system, but it is also one of the most important drivers of demand for Dai. The value that it brings as a monetary policy tool and source of Dai demand largely outweighs its cost."),Object(o.mdx)("h2",null,"Are Stability Fees structurally higher due to the existence of the DSR?"),Object(o.mdx)("p",null,"Yes."),Object(o.mdx)("h2",null,"Where can I find more technical information about the DSR?"),Object(o.mdx)("p",null,"Visit our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol. Technical documentation of the DSR is included in the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation"}),"Pot - Detailed Documentation")," subsection. And documentation about how Rates work in the Maker Protocol is located in the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," section."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-faqs-dsr-md-bd5128a0047b01ba5412.js.map