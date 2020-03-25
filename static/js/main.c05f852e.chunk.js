(this.webpackJsonpcommodity=this.webpackJsonpcommodity||[]).push([[0],{140:function(e,a,t){e.exports=t(253)},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},252:function(e,a,t){},253:function(e,a,t){"use strict";t.r(a);var o=t(1),n=t.n(o),r=t(125),s=t.n(r),i=(t(145),t(42)),l=(t(146),t(70)),c=t(264),u=t(266),m=t(270),h=t(265),p=t(271),d=t(261),f=t(268),b=(t(147),function(e){return function(a){return e(Number(a.target.value))}});function v(e){var a=n.a.useState(6),t=Object(l.a)(a,2),o=t[0],r=t[1],s=n.a.useState(6),v=Object(l.a)(s,2),y=v[0],g=v[1],E=n.a.useState(12),w=Object(l.a)(E,2),N=w[0],x=w[1];return n.a.createElement("div",{className:"Plotting"},n.a.createElement("div",{className:"Plotting-params"},n.a.createElement("div",{className:"Plotting-inputs"},n.a.createElement("input",{onChange:b(r),value:o,name:"c",type:"number",min:0,step:.1}),n.a.createElement("input",{onChange:b(g),value:y,namax:N,me:"v",type:"range",min:0,max:N,step:.1}),n.a.createElement("input",{onChange:b(x),value:N,name:"w",type:"range",min:y,max:24,step:.1})),n.a.createElement("div",{className:"Plotting-labels"},n.a.createElement("label",{htmlFor:"c"},"Constant capital (",o," hours)"),n.a.createElement("label",{htmlFor:"v"},"Necessary Labour (",y," hours)"),n.a.createElement("label",{htmlFor:"w"},"Working day (",N," hours)"))),n.a.createElement("div",{className:"Plotting-results"},n.a.createElement("div",{className:"Plotting-chart"},n.a.createElement(c.a,{theme:u.a.material,animate:{duration:1e3}},n.a.createElement(m.a,{label:"Days"}),n.a.createElement(m.a,{dependentAxis:!0,label:"Labour Time (hrs)",axisLabelComponent:n.a.createElement(h.a,{dy:-30})}),n.a.createElement(p.a,{colourScale:"blue"},function(){var e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];return[e.map((function(e){return{x:e,y:e*o,label:"Constant Capital (Means of Production)"}})),e.map((function(e){return{x:e,y:e*y,label:"Variable Capital (Wages or Necessary Labour)"}})),e.map((function(e){return{x:e,y:e*(N-y),label:"Surplus Value"}}))]}().map((function(e,a){return n.a.createElement(d.a,{key:a,data:e,interpolation:"basis",labelComponent:n.a.createElement(f.a,null),labels:function(e){return e.datum.label}})}))))),n.a.createElement("div",{className:"Plotting-equations"},n.a.createElement("h3",null,"Rate of Surplus"),n.a.createElement(i.b,{value:"s/v",variables:{s:{type:"number",value:N-y},v:{type:"number",value:y}}}),n.a.createElement("h3",null,"Rate of Profit"),n.a.createElement(i.b,{value:"s/(c+v)",variables:{c:{type:"number",value:o},s:{type:"number",value:N-y},v:{type:"number",value:y}}}))))}t(252);function y(e){return n.a.createElement("section",{className:"Notes-section"},n.a.createElement("p",null,"These are some rough notes on Marx, presented with an aim to contextualise some of his equations."),n.a.createElement("p",null,"Marx's Capital is a critique of existing economic theories. He is influenced in particular by J.S. Mill, Smith & Ricardo, and heavily critical of Malthus, Bentham & others. His approach emphasises the need to take the system as a whole, rather than analysing only partial elements removed from context. Unlike his contemporaries, Marx puts a lot of work into establishing the history and development of the phenomena he analyses, going beyond their superfical, present-day form to investigate how they change. He investigates key characteristics of each historical mode of production in Europe, and explains how each transitioned into the next."),n.a.createElement("p",null,'Capital is not present throughout history, and economic activity is more than just a series of exchanges. Production and distribution are related. Private property determines distribution. Relations of production shape the legal & cultural system. Unique to capitalism is the emergence of labour as a commodity. As a commodity, it has an apparent equality with respect to buyers and sellers. The buyers pay a given price without distinction as to the political character of the labour recieved. The same labour can be sold to one buyer or another for the same price. This "equality" is capitalist "freedom".'),n.a.createElement("p",null,"Marx identifies the dual character of commodities - the separation of use value (an object's useful purpose) and exchange value (the proportion at which the commodity can be exchanged for another). Money develops out of the need for a universal equivalent, and in particular circumstances money forms part of Capital. All commodities are produced by human labour. Use values are qualitative, and can't be compared directly - the usefulness of a coat can't be measured in terms of how useful a chair is, and so use is an unsuitable basis for exchange value. Exchange values must quantitative and thus comparable - in a given time and place, coats and chairs may be exchanged for each other in a given proportion. This proportion is determined by the average quantity of labour necessary for the production of each commodity."),n.a.createElement("p",null,"The Marxist theory of value diverges from other economists. Value corresponds to the labour socially embedded in a commodity, every other consideration is secondary. Marx discusses 'useful labour', which is labour that produces particular use values - the production of things in order to use them. In contrast with 'abstract labour', which is labour that produces exchange values - the production of things in order to sell them. A commodity is anything that is to be exchanged - not used immediately by those involved in its production. Workers purchasing commodities from capitalists leads to the capitalists' economic power becoming greater than the economic power of the workers. A commodity producing society must:"),n.a.createElement("ol",null,n.a.createElement("li",null,"Specialise"),n.a.createElement("li",null,"Seperate use value from exchange value (by producing for exchange & fulfilling use values by acquiring commodities from other producers)"),n.a.createElement("li",null,"Have an extensive, well developed market utilising money as a means of exchange")),n.a.createElement("p",null,"The social relationship among producers is characterised as follows: the producer's livelihood depends on commodities, but the value is not controlled by producers but by the economic relations of the whole society expressed through the market. Thus relations between producers appear to be relations between things. This produces a false belief in value being created by exchange."),n.a.createElement("p",null,"The exchange of commodities can be viewed from two perspectives. ",n.a.createElement("span",{className:"Notes-formula"},"C\u2192M\u2192C")," represents selling a commodity in order to buy another commodity. ",n.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2192M'")," represents buying a commodity in order to sell it, transforming money into commodities to make more money. In the sphere of circulation, ",n.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2192M'")," is the general formula for ",n.a.createElement("span",{className:"Notes-term"},"Capital"),". The difference between M and M' is ",n.a.createElement("span",{className:"Notes-term"},"surplus value"),". The extraction of surplus value is what drives capitalism. Capital is personified in the capitalist, who is compelled to obey the laws of capital. Acquiring use values is not the aim of a capitalist - the sole aim is profit. Profit making is a never ending process."),n.a.createElement("p",null,"The market does not determine value. In particular, the market is not the source of value. The relations between all buyers and sellers, represented in the market, is a window through which we can view the totality of the relations of a given society that together determine the socially-average quantity of labour necessary for the production of a commodity. It is these relations, and the socially-average necessary quantity of labour in particular, that determine a commodity's value. Labour is the source of all value."),n.a.createElement("p",null,"The circulation of capital follows three stages. In the first stage, ",n.a.createElement("span",{className:"Notes-formula"},"M\u2192C"),", the capitalist acquires commodities in the market - a ",n.a.createElement("span",{className:"Notes-term"},"'circulation act'"),". In the second stage, ",n.a.createElement("span",{className:"Notes-formula"},"P"),", the purchased commodities are consumed productively, resulting in a commodity of more value than the commodity inputs. In the third stage, ",n.a.createElement("span",{className:"Notes-formula"},"C\u2192M"),", the capitalist returns to the market and transforms the commodity back into money in another circulation act."),n.a.createElement("p",null,"Marx's formula for the whole circuit is ",n.a.createElement("span",{className:"Notes-formula"},"M\u2192C\u2026P\u2026C'\u2192M'"),". The ellipsis indicates that the process of circulation is interrupted, and ",n.a.createElement("span",{className:"Notes-formula"},"C' & M'")," designate ",n.a.createElement("span",{className:"Notes-formula"},"C & M")," increased by ",n.a.createElement("span",{className:"Notes-term"},"surplus-value"),". "),n.a.createElement("p",null,"Labour is found as a commodity on the market when the possessors of labour power put it up for sale. Labour is sold when the sellers have nothing else left to sell, as owning no means of production or subsistance leaves the labourer without a way to exchange commodities for necessary goods, nor to survive or reproduce alone. In this unnatural condition, the labourer has two choices - starve, or sell labour power. Like any commodity, the value of labour power (wages) is determined by the value needed to produce it. For the continuous reproduction of the labourer, this is the value necessary for subsistance, such as food, water, shelter and payment of debts. For labour that requires some degree of education, the value of subsistance incorporates the value of the education. Unique to labour power as a commodity, unlike any other commodity, is that its employment can add more value than it takes to reproduce - this is why it is termed ",n.a.createElement("span",{className:"Notes-term"}," variable capital"),". In contrast, all other commodities involved in the production process \u2014 the ",n.a.createElement("span",{className:"Notes-term"},"means of production")," \u2014 are termed ",n.a.createElement("span",{className:"Notes-term"},"constant capital"),". "),n.a.createElement("p",null,"For example, imagine in a particular job it takes 4 hours of labour to produce the value equivalent to the labourers's daily reproduction. This is ",n.a.createElement("span",{className:"Notes-term"},"necessary labour"),". Any additional labour beyond this is ",n.a.createElement("span",{className:"Notes-term"},"surplus labour"),". "))}var g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Some notes on Marx")),n.a.createElement("div",{className:"App-body"},n.a.createElement(y,null),n.a.createElement("section",null,n.a.createElement(i.a,{value:"c+v+s"}),n.a.createElement("h2",null,"Rate of Surplus-Value"),n.a.createElement(i.a,{value:"s/v = (surplus value) / (variable capital) = (surplus labour) / (necessary labour) = (surplus value) / (value of labour power)"}),n.a.createElement(v,{className:"App-plot"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.c05f852e.chunk.js.map