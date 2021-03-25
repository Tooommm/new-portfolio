(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(15),i=c.n(a),n=c(16),r=c(17),o=c(20),l=c(19),j=c(1),b=c(7),d=c(2),h=(c(26),c(10));c(27);function u(){var e=Object(j.useState)(!1),t=Object(h.a)(e,2),c=t[0],a=t[1],i=function(){return a(!1)};return Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsxs)(b.b,{to:"/",className:"navbar-logo",onClick:i,children:[Object(s.jsx)("i",{className:"fas fa-code"}),"TOOOMMM"]}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(s.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.b,{to:"/",className:"nav-links",onClick:i,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.b,{to:"/projects",className:"nav-links",onClick:i,children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.b,{to:"/about",className:"nav-links",onClick:i,children:"About"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"mailto:tom@thomasbrouillet.com",className:"nav-links",onClick:i,target:"_blank",rel:"noreferrer",children:"Contact"})})]})]})}c(36);var m=function(){return Object(s.jsx)("div",{className:"footer",children:Object(s.jsxs)("div",{className:"links",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/thomas-brouillet/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-linkedin-in",title:"LinkedIn"})}),Object(s.jsx)("a",{href:"https://github.com/Tooommm",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-fw fa-github",title:"GitHub"})}),Object(s.jsx)("a",{href:"https://twitter.com/BrouilletThomas",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-fw fa-twitter",title:"Twitter"})}),Object(s.jsxs)("p",{children:["This website was coded with ",Object(s.jsx)("i",{className:"fas fa-heart",title:"Love"})," & ",Object(s.jsx)("i",{className:"fab fa-react",title:"React"})," by Tooommm."]})]})})},O=(c(37),c(38),function(){var e=Object(j.useState)(!1),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(j.useEffect)((function(){return a(!0),function(){!function(e,t,c){if("/"===window.location.pathname){void 0===c&&(c=["#fff"]);var s=!0,a=document.getElementById("console"),i=1,n=1,r=!1,o=document.getElementById(t);o.setAttribute("style","color:"+c[0]),window.setInterval((function(){0===i&&!1===r?(r=!0,o.innerHTML=e[0].substring(0,i),window.setTimeout((function(){var t=c.shift();c.push(t);var s=e.shift();e.push(s),n=1,o.setAttribute("style","color:"+c[0]),i+=n,r=!1}),1e3)):i===e[0].length+1&&!1===r?(r=!0,window.setTimeout((function(){i+=n=-1,r=!1}),1e3)):!1===r&&(o.innerHTML=e[0].substring(0,i),i+=n)}),120),window.setInterval((function(){!0===s?(a.className="console-underscore hidden",s=!1):(a.className="console-underscore",s=!0)}),400)}}(["hello, world","I'm Thomas","A french developer."],"text",["white"])}}),[c]),Object(s.jsx)("div",{className:"home",children:Object(s.jsxs)("div",{className:"console-container",children:[Object(s.jsx)("span",{id:"text"}),Object(s.jsx)("div",{className:"console-underscore",id:"console",children:"_"})]})})}),p=function(){return Object(s.jsx)("div",{className:"home",children:Object(s.jsx)(O,{})})},x=(c(39),c(40),function(e){var t=e.text;return Object(s.jsx)("div",{className:"button",children:Object(s.jsx)("span",{children:t})})}),f=function(e){var t=e.items.map((function(e,t){return Object(s.jsxs)("div",{className:"card-holder",children:[Object(s.jsxs)("div",{className:"card-title",children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("div",{className:"stacks",children:e.stacks.map((function(e){return Object(s.jsx)("i",{className:"logo bounce ".concat(e),title:e},e)}))})]}),Object(s.jsx)("div",{className:"description",children:Object(s.jsx)("p",{children:e.description})}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsx)("a",{href:e.url,className:"button-project",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(x,{text:"Visit"})}),Object(s.jsx)("a",{href:e.github,className:"button-project",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(x,{text:"GitHub"})})]})]},e.title)}));return Object(s.jsx)("div",{className:"project-card",children:t})},v=[{title:"Coach Me",stacks:["ruby","rubyonrails","javascript","heroku"],description:"Cette application web qui vise \xe0 mettre en relation des coachs sportifs \xe0 domicile et des particuliers.",url:"http://www.coach-me.best/",github:"https://github.com/nlabrazi/coachme"},{title:"React Widgets",stacks:["react","javascript","node-dot-js","heroku"],description:"This a collection of widgets with the Youtube and Wikipedia apis",url:"https://tom-react-app.herokuapp.com/",github:"https://github.com/Tooommm/widgets"},{title:"To-Do List",stacks:["ruby","rubyonrails","react","heroku"],description:"Your new app to create To-Do-List. Create With Rail and React. Interracting with a custom API",url:"https://todo-tooommm-app.herokuapp.com/",github:"https://github.com/Tooommm/todo-application-react"}],N=function(){return Object(s.jsx)("div",{className:"projects",children:Object(s.jsx)(f,{items:v})})},g=(c(41),c.p+"static/media/profilepic.6fd2c3d4.png"),w=c.p+"static/media/react.7cfdaeed.svg",k=c.p+"static/media/javascript.438c2825.svg",y=c.p+"static/media/ruby.9d0f78bd.svg",T=c.p+"static/media/rubyonrails.bd90bad5.svg",R=function(){return Object(s.jsxs)("div",{className:"profile-card",children:[Object(s.jsxs)("div",{className:"profilepic-holder",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/thomas-brouillet/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{className:"profilepic",src:g,alt:"Thomas Brouillet"})}),Object(s.jsxs)("div",{className:"infos",children:[Object(s.jsx)("h4",{children:"Thomas Brouillet"}),Object(s.jsx)("p",{children:"Paris, France"})]})]}),Object(s.jsx)("div",{className:"text",children:Object(s.jsx)("h3",{children:"Stacks"})}),Object(s.jsxs)("div",{className:"stacks-holder",children:[Object(s.jsx)("img",{className:"logo-profile bounce ruby",src:y,alt:"Ruby",title:"Ruby"}),Object(s.jsx)("img",{className:"logo-profile bounce rubyonrails",src:T,alt:"RubyOnRails",title:"RubyOnRails"}),Object(s.jsx)("img",{className:"logo-profile bounce react",src:w,alt:"React",title:"React"}),Object(s.jsx)("img",{className:"logo-profile bounce javascript",src:k,alt:"Javascript",title:"Javascript"})]})]})},C=(c(42),c.p+"static/media/CV_Thomas_Brouillet.2542b57b.pdf"),_=function(){return Object(s.jsxs)("a",{class:"face-button",href:C,download:!0,children:[Object(s.jsxs)("div",{class:"face-primary",children:[Object(s.jsx)("span",{class:"icon fa fa-cloud"}),"Mon CV"]}),Object(s.jsxs)("div",{class:"face-secondary",children:[Object(s.jsx)("span",{class:"icon fa fa-hdd-o"}),"Size: 154 ko"]})]})},J=(c(43),function(){return Object(s.jsx)("div",{className:"about",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(R,{}),Object(s.jsxs)("div",{className:"text-description",children:[Object(s.jsx)("h2",{children:"Salut! Moi c'est Thomas."}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Passionn\xe9 par le code, je suis un tout jeune d\xe9veloppeur \xe0 la recherche de nouveaux projets incroyables! J\u2019ai suivi r\xe9cemment la formation du Wagon et je suis maintenant totalement op\xe9rationnel."}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:["J\u2019ai \xe9t\xe9 form\xe9 avec ",Object(s.jsx)("strong",{children:"Ruby"}),", ",Object(s.jsx)("strong",{children:"Ruby On Rails"})," et ",Object(s.jsx)("strong",{children:"Javascript"}),". Je d\xe9veloppe \xe9galement des applications extraordinaires avec ",Object(s.jsx)("strong",{children:"React"})," et ",Object(s.jsx)("strong",{children:"Node.js"}),". Je recherche un poste de d\xe9veloppeur et suis \xe0 l'\xe9coute des opportunit\xe9s ! N\u2019h\xe9sitez pas \xe0 me contacter ou t\xe9l\xe9charger mon CV ci-dessous."]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"resume",children:Object(s.jsx)(_,{})})]})]})})}),I=function(){return Object(s.jsx)("div",{className:"contact",children:"Contact"})},M=(c(44),function(){return Object(s.jsx)("div",{className:"no-match",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h1",{children:"You're lost! "})}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Nothing to do with the TV show..."}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("code",{children:window.location.href})," ",Object(s.jsx)("br",{}),"Does not exist on thomasbrouillet.com or not yet!"]})]})]})})}),B=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(s.jsxs)(b.a,{children:[Object(s.jsx)(u,{}),Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{path:"/",exact:!0,component:p}),Object(s.jsx)(d.a,{path:"/projects",component:N}),Object(s.jsx)(d.a,{path:"/about",component:J}),Object(s.jsx)(d.a,{path:"/contact",component:I}),Object(s.jsx)(d.a,{path:"*",component:M})]}),Object(s.jsx)(m,{})]})}}]),c}(j.Component);i.a.render(Object(s.jsx)(B,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bb4fa591.chunk.js.map