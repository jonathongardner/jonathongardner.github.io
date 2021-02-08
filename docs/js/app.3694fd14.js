(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,h=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9f3f9436","chunk-2d0aeaf5":"1762baaf"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19db":function(e,t,a){},"2fc4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"app"}},[a("div",{staticClass:"hero is-fullheight is-default is-bold"},[a("nav-bar"),a("router-view",{staticClass:"hero-body"}),a("footer-bar")],1)])},o=[],s=(a("ac1f"),a("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-head"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{attrs:{src:"img/icons/android-chrome-512x512.png",alt:"Logo"}})]),a("a",{staticClass:"navbar-burger burger",class:{"is-active":e.showNavbar},attrs:{role:"button","data-target":"navbarMenu"},on:{click:e.toggleNavbar}},[a("span"),a("span"),a("span")])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":e.showNavbar},attrs:{id:"navbarMenu"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"tabs is-right"},[a("ul",e._l(e.links,(function(t){return a("li",{key:t.name,class:{"is-active":e.isRoute(t.name)}},[a("router-link",{attrs:{to:t.path}},[e._v(e._s(t.label))])],1)})),0)])])])])])])}),i=[],l=(a("b0c0"),{name:"NavBar",data:function(){return{showNavbar:!1,links:[{name:"home",path:"/",label:"Home"},{name:"resume",path:"/resume",label:"Resume"}]}},methods:{toggleNavbar:function(){this.showNavbar=!this.showNavbar},isRoute:function(e){return this.$route.name===e}},watch:{$route:function(){this.showNavbar=!1}}}),c=l,u=a("2877"),f=Object(u["a"])(c,s,i,!1,null,"0a09f79d",null),h=f.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container contact-list"},e._l(e.footers,(function(t){return a("div",{key:t.label},[a("a",{staticClass:"is-link",attrs:{href:t.href,target:"_blank"}},[a("i",{class:t.icon}),e._v(" "+e._s(t.label)+" ")])])})),0)])},p=[],b={name:"FooterBar",data:function(){return{footers:[{label:"Github",icon:"fab fa-github",href:"https://github.com/jonathongardner"},{label:"LinkedIn",icon:"fab fa-linkedin",href:"https://www.linkedin.com/in/jonathongardner35"},{label:"Contact",icon:"fa fa-paper-plane",href:"https://docs.google.com/forms/d/e/1FAIpQLSef3-zTIniC_gD29zRZvVwsMfpmhOsqONd7dFj9EywcD0oAEA/viewform"}]}}},m=b,v=(a("68fb"),Object(u["a"])(m,d,p,!1,null,"640e1a0a",null)),g=v.exports,_={name:"App",components:{NavBar:h,FooterBar:g},mounted:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace({path:e}))}},w=_,y=(a("5c0b"),Object(u["a"])(w,r,o,!1,null,null,null)),k=y.exports,j=a("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("2fc4"),a("d3b7");var C=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}})},L=[],O={name:"Home"},x=O,E=(a("bf6d"),Object(u["a"])(x,S,L,!1,null,null,null)),I=E.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10 is-offset-1 content is-medium has-text-left"},[a("h1",[e._v("Skills")]),e._l(e.allSkills,(function(t,n){return a("p",{key:n,staticClass:"tags are-medium"},e._l(t,(function(t){return a("span",{key:t.label,staticClass:"tag",style:e.skillColor(n)},[e._v(e._s(t.label))])})),0)})),a("h1",[e._v("About")]),e._m(1),a("h2",[e._v("Personal Projects")]),e._m(2),e._m(3),a("h2",[e._v("Showcase Projects")]),a("p",[a("ul",e._l(e.projects,(function(t){return a("li",{key:t.label},[a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.label))]),e._v(" - "+e._s(t.desc))])})),0)])],2)])])])},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column is-5"},[a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"/img/icons/android-chrome-512x512.png",alt:"Description"}})])]),a("div",{staticClass:"column is-6 is-offset-1"},[a("h1",{staticClass:"title is-2"},[e._v(" Jonathon Gardner ")]),a("h2",{staticClass:"subtitle is-4"},[e._v(" Full Stack Developer ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" I am a full stack developer currently working at Cisco. I work with a variety of technologies including Ruby on Rails, Sinatra, GraphQL, Sidekiq (with Redis), MariaDB (MySQL), MongoDB and React. I mostly work on the backend (APIs/DBs) but will occasionally help with the UI when needed. My preferred and strongest UI framework is VueJS though. One of my passions in programming is perfomance and I enjoy doing that through optimizing database models/structures. You can see my full resume "),a("a",{attrs:{href:"/content/JonathonGardnerResume.pdf",target:"_blank"}},[e._v("here")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" I am currently working on "),a("a",{attrs:{href:"https://ath-ex.app/",target:"_blank"}},[e._v("AthEx")]),e._v(" which is a fantasy sports site. It is done using VueJS and Ruby on Rails with GraphQL. To support this project I created two gems "),a("a",{attrs:{href:"https://github.com/jonathongardner/slots-jwt",target:"_blank"}},[e._v("slots-jwt")]),e._v(" and "),a("a",{attrs:{href:"https://github.com/jonathongardner/graphql_lazy_load",target:"_blank"}},[e._v("GraphQL Lazy Load")]),e._v(". slots-jwt is a rails engine to help with authentication by using JSON Web Tokens. The benifit of using JWT is that most request can be authenticated without touching the database. GraphQL Lazy Load is a gem that can be integrated with ruby GraphQL to help reduce N+1 queries. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Another project I am working on is "),a("a",{attrs:{href:"https://hisscript.firebaseapp.com/",target:"_blank"}},[e._v("HisScript")]),e._v(" which is a progressive web app to help memorize scripture. It's written in Javascript and VueJS using firebase. ")])}],J={name:"Resume",data:function(){return{allSkills:{lang:[{label:"Ruby"},{label:"GraphQL"},{label:"Javascript"}],framework:[{label:"Ruby on Rails"},{label:"Sinatra"},{label:"ReactJS"},{label:"Vue.js"}],db:[{label:"PostgreSQL"},{label:"MongoDB"},{label:"MySQL"},{label:"MariaDB"}],test:[{label:"MiniTest"},{label:"Jest"}],other:[{label:"git"},{label:"Linux"}]},projects:[{label:"AthEx",desc:"fantasy sports",href:"https://ath-ex.app/"},{label:"HisScript",desc:"scripture memory",href:"https://hisscript.firebaseapp.com/"},{label:"Slots JWT",desc:"rails JWT authentication gem",href:"https://github.com/jonathongardner/slots-jwt"},{label:"GraphQL Lazy Load",desc:"rails GraphQL performance gem",href:"https://github.com/jonathongardner/graphql_lazy_load"},{label:"EasyNCRYPTION",desc:"VueJS app for encrypting files",href:"https://jonathongardner.github.io/easyncryption#/"}]}},methods:{skillColor:function(e){var t={"background-color":"#ffd1b3"};return"lang"===e&&(t["background-color"]="#dba7a7"),"db"===e&&(t["background-color"]="#e2e5ff"),"framework"===e&&(t["background-color"]="#fffeb8"),"test"===e&&(t["background-color"]="#cae8cd"),t}}},M=J,P=Object(u["a"])(M,N,R,!1,null,null,null),T=P.exports;n["a"].use(C["a"]);var A=[{path:"/",name:"home",component:I},{path:"/resume",name:"resume",component:T},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"bc6e"))}},{path:"/not-found",name:"not-found",component:function(){return a.e("chunk-2d0aeaf5").then(a.bind(null,"0ab0"))}},{path:"*",redirect:"not-found"}],$=new C["a"]({mode:"history",base:"/",routes:A}),Q=$,G=a("2f62");n["a"].use(G["a"]);var B=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:Q,store:B,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"68fb":function(e,t,a){"use strict";var n=a("19db"),r=a.n(n);r.a},"9c0c":function(e,t,a){},bf6d:function(e,t,a){"use strict";var n=a("ca90"),r=a.n(n);r.a},ca90:function(e,t,a){}});
//# sourceMappingURL=app.3694fd14.js.map