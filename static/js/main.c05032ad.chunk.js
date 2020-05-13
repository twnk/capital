(this.webpackJsonpcommodity=this.webpackJsonpcommodity||[]).push([[0],{144:function(e,a,t){e.exports=t(260)},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},249:function(e,a,t){},250:function(e,a,t){},251:function(e,a,t){},259:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(130),l=t.n(r),s=(t(149),t(150),t(21)),i=t(272),c=t(276),u=t(278),m=t(9);t(151);function p(e){var a=e.onChange,t=e.value,n=e.name,r=e.min,l=e.max,s=e.step,i=e.label;return o.a.createElement("div",{className:"parameter-row"},o.a.createElement("input",{onChange:function(e){return a(Number(e.target.value))},value:t,name:n,type:"range",min:r,max:l,step:s}),o.a.createElement("label",{htmlFor:n},i))}t(95);function h(){var e=o.a.useState(6),a=Object(s.a)(e,2),t=a[0],n=a[1],r=o.a.useState(6),l=Object(s.a)(r,2),h=l[0],d=l[1],f=o.a.useState(12),v=Object(s.a)(f,2),b=v[0],E=v[1],g=[{x:"Constant Capital",y:t},{x:"Variable Capital",y:h},{x:"Surplus Value",y:b-h}];return o.a.createElement("div",{className:"Plotting"},o.a.createElement("div",{className:"parameter-list"},o.a.createElement(p,{onChange:n,value:t,name:"Plotting-c",min:0,max:1e3,step:.1,label:"Constant capital (".concat(t," hours)")}),o.a.createElement(p,{onChange:d,value:h,name:"Plotting-v",min:0,max:b,step:.1,label:"Variable capital (".concat(h," hours)")}),o.a.createElement(p,{onChange:E,value:b,name:"Plotting-w",min:h,max:24,step:.1,label:"Working day (".concat(b," hours)")})),o.a.createElement("div",{className:"Plotting-results"},o.a.createElement("div",{className:"Plotting-chart"},o.a.createElement(i.a,{theme:c.a.material,data:g,labelComponent:o.a.createElement(u.a,null),labels:function(e){return e.datum.x},animate:{duration:1e3}})),o.a.createElement("div",{className:"Plotting-equations"},o.a.createElement("h3",null,"Rate of Surplus"),o.a.createElement(m.b,{value:"s/v",variables:{s:{type:"number",value:b-h},v:{type:"number",value:h}}}),o.a.createElement("h3",null,"Rate of Profit"),o.a.createElement(m.b,{value:"s/(c+v)",variables:{c:{type:"number",value:t},s:{type:"number",value:b-h},v:{type:"number",value:h}}}))))}var d=t(273);t(249);function f(e){return o.a.createElement("div",{className:"Commodity",name:e.name})}t(250);function v(){var e=o.a.useState([1,2,3,4]),a=Object(s.a)(e,2),t=a[0],n=a[1],r=[{name:"bread",singular:"Loaf of Bread",plural:"Loaves of Bread"},{name:"corn",singular:"Ear of Corn",plural:"Ears of Corn"},{name:"brick",singular:"Brick",plural:"Bricks"},{name:"soap",singular:"Bar of Soap",plural:"Bars of Soap"}],l=function(e){return function(a){var o=Array.from(t);o[e]=a,n(o)}};return o.a.createElement("div",{className:"Exchange"},o.a.createElement("div",{className:"parameter-list"},t.map((function(e,a){return o.a.createElement(p,{onChange:l(a),value:e,name:"Exchange-".concat(r[a].name),key:a,type:"range",min:1,max:8,step:1,label:"".concat(e," hours per ").concat(r[a].singular)})}))),o.a.createElement("div",{className:"Exchange-outputs"},function(){var e=t.reduce((function(e,a){return e*a/function e(a,t){return t?e(t,a%t):a}(e,a)}));return t.map((function(a,t){return e/a}))}().map((function(e,a){return o.a.createElement("div",{className:"Exchange-pile",key:a},o.a.createElement("p",{key:a},e," ",function(e,a){return 1===a?r[e].singular:r[e].plural}(a,e)),d.a(0,e).map((function(e,t){return o.a.createElement(f,{name:r[a].name,key:t})})))}))))}t(251),t(270),t(279),t(280),t(274);t(259);function b(){return o.a.createElement("section",{className:"Notes-section"},o.a.createElement("p",null,"These are some rough notes on Marx, presented with an aim to contextualise some of his equations."),o.a.createElement("p",null,"Marx's Capital is a critique of existing economic theories. He is influenced in particular by J.S. Mill, Smith & Ricardo, and heavily critical of Malthus, Bentham & others. His approach emphasises the need to take the system as a whole, rather than analysing only partial elements removed from context. Unlike his contemporaries, Marx puts a lot of work into establishing the history and development of the phenomena he analyses, going beyond their superfical, present-day form to investigate how they change. He investigates key characteristics of each historical mode of production in Europe, and explains how each transitioned into the next."),o.a.createElement("p",null,'Capital is not present throughout history, and economic activity is more than just a series of exchanges. Production and distribution are related. Private property determines distribution. Relations of production shape the legal & cultural system. Unique to capitalism is the emergence of labour as a commodity. As a commodity, it has an apparent equality with respect to buyers and sellers. The buyers pay a given price without distinction as to the political character of the labour recieved. The same labour can be sold to one buyer or another for the same price. This "equality" is capitalist "freedom".'),o.a.createElement("p",null,"Marx identifies the dual character of commodities - the separation of use value (an object's useful purpose) and exchange value (the proportion at which the commodity can be exchanged for another). Money develops out of the need for a universal equivalent, and in particular circumstances money forms part of Capital. All commodities are produced by human labour. Use values are qualitative, and can't be compared directly - the usefulness of a coat can't be measured in terms of how useful a chair is, and so use is an unsuitable basis for exchange value. Exchange values must quantitative and thus comparable - in a given time and place, coats and chairs may be exchanged for each other in a given proportion. This proportion is determined by the average quantity of labour necessary for the production of each commodity."),o.a.createElement("p",null,"The following visualisation is one example of why trade based on exchange value creates the need for a universal equivalent. Set the value (in terms of average necessary labour) necessary to produce a whole unit of each commodity, and see the numbers required for each commodity to be 'priced' in terms of the equivalent proportion of every other commodity for sale in a single list of equivalent prices, without any fractional quantities (since trading 1.5 bricks for 3.2 loaves of bread would be irrational). Rather than have every seller maintain a daily-updated list of the relative exchange value for their commodity in terms of every other commodity, a single commodity becomes the universal equivalent that every commodity can be listed in - precious metals are ideal for this because they are difficult enough to produce that their exchange values are high, and they possess the quality of being able to be divided and recombined in fractional quantities."),o.a.createElement(v,null),o.a.createElement("p",null,"The Marxist theory of value diverges from other economists. Value corresponds to the labour socially embedded in a commodity, every other consideration is secondary. Marx discusses 'useful labour', which is labour that produces particular use values - the production of things in order to use them. In contrast with 'abstract labour', which is labour that produces exchange values - the production of things in order to sell them. A commodity is anything that is to be exchanged - not used immediately by those involved in its production. Workers purchasing commodities from capitalists leads to the capitalists' economic power becoming greater than the economic power of the workers. A commodity producing society must:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Specialise"),o.a.createElement("li",null,"Seperate use value from exchange value (by producing for exchange & fulfilling use values by acquiring commodities from other producers)"),o.a.createElement("li",null,"Have an extensive, well developed market utilising money as a means of exchange")),o.a.createElement("p",null,"The social relationship among producers is characterised as follows: the producer's livelihood depends on commodities, but the value is not controlled by producers but by the economic relations of the whole society expressed through the market. Thus relations between producers appear to be relations between things. This produces a false belief in value being created by exchange."),o.a.createElement("p",null,"The exchange of commodities can be viewed from two perspectives."," ",o.a.createElement("span",{className:"Notes-formula"},"C\u2192M\u2192C")," represents selling a commodity in order to buy another commodity."," ",o.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2192M'")," represents buying a commodity in order to sell it, transforming money into commodities to make more money. In the sphere of circulation,"," ",o.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2192M'")," is the general formula for"," ",o.a.createElement("span",{className:"Notes-term"},"Capital"),". The difference between M and M' is ",o.a.createElement("span",{className:"Notes-term"},"surplus value"),". The extraction of surplus value is what drives capitalism. Capital is personified in the capitalist, who is compelled to obey the laws of capital. Acquiring use values is not the aim of a capitalist - the sole aim is profit. Profit making is a never ending process."),o.a.createElement("p",null,"The market does not determine value. In particular, the market is not the source of value. The relations between all buyers and sellers, represented in the market, is a window through which we can view the totality of the relations of a given society that together determine the socially-average quantity of labour necessary for the production of a commodity. It is these relations, and the socially-average necessary quantity of labour in particular, that determine a commodity's value. Labour is the source of all value."),o.a.createElement("p",null,"The circulation of capital follows three stages. In the first stage,"," ",o.a.createElement("span",{className:"Notes-formula"},"M\u2192C"),", the capitalist acquires commodities in the market - a"," ",o.a.createElement("span",{className:"Notes-term"},"'circulation act'"),". In the second stage, ",o.a.createElement("span",{className:"Notes-formula"},"P"),", the purchased commodities are consumed productively, resulting in a commodity of more value than the commodity inputs. In the third stage,"," ",o.a.createElement("span",{className:"Notes-formula"},"C\u2192M"),", the capitalist returns to the market and transforms the commodity back into money in another circulation act."),o.a.createElement("p",null,"Marx's formula for the whole circuit is"," ",o.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2026P\u2026C'\u2192M'"),". The ellipsis indicates that the process of circulation is interrupted, and"," ",o.a.createElement("span",{className:"Notes-formula"},"C' & M'")," designate"," ",o.a.createElement("span",{className:"Notes-formula"},"C & M")," increased by"," ",o.a.createElement("span",{className:"Notes-term"},"surplus-value"),"."," "),o.a.createElement("p",null,"Labour is found as a commodity on the market when the possessors of labour power put it up for sale. Labour is sold when the sellers have nothing else left to sell, as owning no means of production or subsistance leaves the labourer without a way to exchange commodities for necessary goods, nor to survive or reproduce alone. In this unnatural condition, the labourer has two choices - starve, or sell labour power. Like any commodity, the value of labour power (wages) is determined by the value needed to produce it. For the continuous reproduction of the labourer, this is the value necessary for subsistance, such as food, water, shelter and payment of debts. For labour that requires some degree of education, the value of subsistance incorporates the value of the education. Unique to labour power as a commodity, unlike any other commodity, is that its employment can add more value than it takes to reproduce - this is why it is termed"," ",o.a.createElement("span",{className:"Notes-term"}," variable capital"),". In contrast, all other commodities involved in the production process \u2014 the"," ",o.a.createElement("span",{className:"Notes-term"},"means of production")," \u2014 are termed"," ",o.a.createElement("span",{className:"Notes-term"},"constant capital"),"."," "),o.a.createElement("p",null,"For example, imagine in a particular job it takes 4 hours of labour to produce the value equivalent to the labourers's daily reproduction. This is ",o.a.createElement("span",{className:"Notes-term"},"necessary labour"),". Any additional labour beyond this is ",o.a.createElement("span",{className:"Notes-term"},"surplus labour"),". Variable capital is also termed"," ",o.a.createElement("span",{className:"Notes-term"},"living labour"),", because in the production process this labour is actively present, whereas constant capital is referred to as"," ",o.a.createElement("span",{className:"Notes-term"},"dead labour")," because its value comes from the historic labour already embodied in it."),o.a.createElement("p",null,"Production is composed of constant capital (means of production), variable capital (waged or necessary labour) and surplus value (from surplus labour):"," "),o.a.createElement(m.a,{value:"P = c+v+s"}),o.a.createElement("a",{name:"surplus",href:"#surplus"},o.a.createElement("h3",null,"Rate of Surplus")),o.a.createElement(m.a,{value:"s/v = (surplus value) / (variable capital) = (surplus labour) / (necessary labour) = (surplus value) / (value of labour power)"}))}function E(){return o.a.createElement("section",{className:"Notes-section"},o.a.createElement("p",null,"Profit, interest and rent, the three forms of the non-wage income, are the divisions of surplus value among the ruling class. Interest & rent are parasitic forms of income, as they don't involve the creation of surplus value through surplus labour. In contrast to the formula for profit through production,"," ",o.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2026P\u2026C'\u2192M'"),", the formula for profit through interest or rent is simply"," ",o.a.createElement("span",{className:"Notes-formula"},"M\u2192M'"),"."),o.a.createElement("p",null,"The mode of production of a given society changes as the social relations of production change. The historical mode of production of labour interdependency is known as communalism. Mediation of productive relations through the market is a component of the capitalist mode of production. Production is oriented around abstract labour rather than useful labour, because capital only needs work to be done in a manner optimal for extracting surplus, it does not optimise for usefulness."),o.a.createElement("p",null,"Capitalism similarly redefines the reproduction process, prioritising the production of new workers above the health of people reproducing and their children. Procreation is thus not apolitical. Just as reproduction is inevitable, the social organisation of labour is an unavoidable historical trend."," "),o.a.createElement("h2",null,"Transformation Problem"),o.a.createElement("p",null,"The transformation problem is the challenge of converting the values of commodities into their prices in the market."),o.a.createElement("p",null,"We define the following terms."," ",o.a.createElement("span",{className:"Notes-formula"},"w = value; L = labour"),". We further specify:"," "),o.a.createElement("p",{className:"Notes-formula"},"L",o.a.createElement("sub",null,"l")," = living labour;"),o.a.createElement("p",{className:"Notes-formula"},"L",o.a.createElement("sub",null,"d")," = dead labour (means of production);"),o.a.createElement("p",{className:"Notes-formula"},"L",o.a.createElement("sub",null,"n")," = necessary labour;"),o.a.createElement("p",{className:"Notes-formula"},"L",o.a.createElement("sub",null,"s")," = surplus labour;"),o.a.createElement("p",null,"The value of a commodity is the sum of the dead and living labour that goes into producing it:"," "),o.a.createElement(m.a,{value:"w=L_d + L_l"}),o.a.createElement("p",null,"Living labour is composed of necessary and surplus labour: "),o.a.createElement(m.a,{value:"L_l = L_n + L_s"}),o.a.createElement("p",null,"Substituting living labour for its necessary and surplus parts, this gives:"," "),o.a.createElement(m.a,{value:"w = L_d + L_n + L_s"}),o.a.createElement("p",null,"The surplus is determined by the socially averaged rate of profit (explored later). Capitalists add a percentage 'markup' to commodity prices above the costs (constant capital & wages) to pay rents, debts, and to render a profit. But capitalists are incentivised cut their own profit margins in order to undercut competitors and expand their own market share, leading to a race to the bottom (and a greater share of labour being rendered 'necessary' vs surplus). This is why we analyse in the general case based on the socially average rate of profit."," "),o.a.createElement("section",null,o.a.createElement("h3",null,"Step 1: General Formula for Production"),o.a.createElement(m.a,{value:"P = c + v + s"}),o.a.createElement("p",null,"Where:"),o.a.createElement("p",{className:"Notes-formula"},"c = constant capital = cost of commodities used in production;"),o.a.createElement("p",{className:"Notes-formula"},"v = variable capital = cost of labour used in production = wages;"),o.a.createElement("p",{className:"Notes-formula"},"s = profit markup (determined by rate of profit);"),o.a.createElement("p",null,"We expand this as:"),o.a.createElement(m.a,{value:"P_production = c_means + v_wages + s_surplus"})),o.a.createElement("section",null,o.a.createElement("h3",null,"Step 2: Rearranging Rate of Profit"),o.a.createElement("p",null,"Recalling Rate of Profit given by:"),o.a.createElement(m.a,{value:"r = s/(c+v)"}),o.a.createElement("p",null,"Expanded:"),o.a.createElement(m.a,{value:"r_profit = s_surplus/(c_means + v_wages)"}),o.a.createElement("p",null,"We can rearrange this to give a formula for surplus in terms of the rate of profit, means and wages, by multiplying both sides of the equation by means + wages and simplifying:"),o.a.createElement("aside",{className:"Equation-multiline"},o.a.createElement("div",null,o.a.createElement(m.a,{value:"r *(c+v) = (s/(c+v)) * (c+v)"})),o.a.createElement("div",null,o.a.createElement(m.a,{value:"r*(c+v) = s * ((c+v)/(c+v))"})),o.a.createElement("div",null,o.a.createElement(m.a,{value:"r*(c+v) = s "})),o.a.createElement("div",null,o.a.createElement(m.a,{value:"s = r * (c+v)"}))),o.a.createElement("p",null,"Expanded:"),o.a.createElement(m.a,{value:"s_surplus = r_profit * (c_means+v_wages)"})),o.a.createElement("section",null,o.a.createElement("h3",null,"Step 3: Substituting Surplus"),o.a.createElement("p",null,"Take the equation for production from Step 1, and substituting"," ",o.a.createElement("span",{className:"Notes-formula"},"s",o.a.createElement("sub",null,"surplus"))," ","for the equation derived from rate of profit in Step 2:"),o.a.createElement("aside",{className:"Equation-multiline"},o.a.createElement("div",null,o.a.createElement("span",null,"Step 1:"),o.a.createElement(m.a,{value:"P = c + v + s"})),o.a.createElement("div",null,o.a.createElement("span",null,"Step 2:"),o.a.createElement(m.a,{value:"s = r * (c+v)"})),o.a.createElement("div",null,o.a.createElement("span",null,"Step 3:"),o.a.createElement(m.a,{value:"P = c + v + r(c+v)"}))),o.a.createElement("p",null,"Expanded:"),o.a.createElement(m.a,{value:"P_production = c_means + v_wages + (r_profit * (c_means + v_wages))"})),o.a.createElement("section",null,o.a.createElement("h3",null,"Step 4: Simplifying"),o.a.createElement("p",null,"We can simplify the result of Step 3 so that each term only occurs once, based on the 'distributive property'. The distributive property is important to understand for most of the following steps, so it is stated here but should be explored more deeply if the concept is unfamiliar."),o.a.createElement("aside",{className:"Equation-multiline"},o.a.createElement("div",null,o.a.createElement("span",null,"Distributative Property:"),o.a.createElement(m.a,{value:"a*(x+y) = ax + ay"})),o.a.createElement("div",null,o.a.createElement("span",null,"Step 3:"),o.a.createElement(m.a,{value:"P = c + v + r(c+v)"})),o.a.createElement("div",null,o.a.createElement("span",null,"Step 4:"),o.a.createElement(m.a,{value:"P = (1 + r)*(c + v)"}))),o.a.createElement("p",null,"Expanded:"),o.a.createElement(m.a,{value:"P_production = (1 + r_profit) * (c_means + v_wages)"})),o.a.createElement("section",null,o.a.createElement("h3",null,"Organic Composition"),o.a.createElement("p",null,"The organic composition of capital is the quantity of means of production per worker: the ratio between constant capital and variable capital. The term organic composition is used because it measures the proportion of the constituent 'organs' of capitalist production, dead and living labour."),o.a.createElement(m.a,{value:"c/v = (constant capital) / (variable capital) = (value of means) / (value of labour power) = (dead labour) / (necessary labour)"})),o.a.createElement("section",null,o.a.createElement("h3",null,"Rate of Surplus or Rate of Exploitation"),o.a.createElement(m.a,{value:"s/v = (surplus value) / (variable capital) = (surplus labour) / (necessary labour) = (surplus value) / (value of labour power)"}),o.a.createElement("p",null,"The rate of surplus is also known as the rate of exploitation, because it measures precicely how much of a worker's labour power goes to the benefit of the capitalist relative to the payment of wages.")),o.a.createElement("section",null,o.a.createElement("h3",null,"Step 5: [unfinished]"),o.a.createElement("section",{className:"Equation-multiline"},o.a.createElement("div",null,o.a.createElement("span",null,"Value Equation:"),o.a.createElement(m.a,{value:"w = l_d + l_n + l_s"})),o.a.createElement("div",null,o.a.createElement("span",null,"Production Equation:"),o.a.createElement(m.a,{value:"P = c + v + r(c+v)"})))))}var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Some notes on Marx")),o.a.createElement("div",{className:"App-body"},o.a.createElement(b,null),o.a.createElement("section",null,o.a.createElement(h,{className:"App-plot"})),o.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,a,t){}},[[144,1,2]]]);
//# sourceMappingURL=main.c05032ad.chunk.js.map