(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("cf81850e",content,!0,{sourceMap:!1})},244:function(t,e,r){"use strict";r(38),r(20),r(39),r(51),r(52);var n=r(13),o=(r(53),r(206),r(34),r(12),r(8),r(29),r(125),r(201),r(0)),l=r(197),c=r(7);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f=["sm","md","lg","xl"],d=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=f.reduce((function(t,e){return t["offset"+Object(c.m)(e)]={type:[String,Number],default:null},t}),{}),m=f.reduce((function(t,e){return t["order"+Object(c.m)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(d),offset:Object.keys(_),order:Object.keys(m)};function C(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},_,{order:{type:[String,Number],default:null}},m,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var v in r)c+=String(r[v]);var f=x.get(c);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var n=r[t],o=C(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(c,f)}(),t(r.tag,Object(l.a)(data,{class:f}),o)}})},256:function(t,e,r){"use strict";var n=r(209);r.n(n).a},257:function(t,e,r){(e=r(71)(!1)).push([t.i,"#externalLinks[data-v-e60e4596]:hover{color:#16b7bd}#img[data-v-e60e4596]{height:280px;width:300px}@media (max-width:425px){#button[data-v-e60e4596]{display:none}#name[data-v-e60e4596]{text-align:center}}",""]),t.exports=e},272:function(t,e,r){"use strict";r.r(e);var n={components:{}},o=(r(256),r(35)),l=r(196),c=r.n(l),v=r(262),f=r(268),d=r(273),_=r(244),m=r(263),h=r(259),C=r(264),x=r(265),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app",{staticClass:"secondary"},[r("head",[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossorigin:"anonymous"}})]),t._v(" "),r("v-app-bar",[r("h1",{staticClass:"pa-2",attrs:{id:"name"}},[t._v("Austen Cote")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{id:"button",to:"/about",rounded:"",color:"info"}},[t._v("Contact")]),t._v(" "),r("v-btn",{attrs:{id:"button",to:"/projects",rounded:"",color:"info"}},[t._v("Projects")])],1),t._v(" "),r("v-container",{staticClass:"pa-2 info",attrs:{fluid:"","justify-center":""}},[r("v-row",{staticClass:"justify-center",attrs:{color:"blue-grey darken-2"}},[r("div",{attrs:{id:"img1"}},[r("v-img",{attrs:{id:"img",src:"tetons.JPG",alt:"Image 1"}})],1),t._v(" "),r("div",{staticClass:"ml-12 mr-12",attrs:{id:"img2"}},[r("v-img",{attrs:{id:"img",src:"little.jpg",alt:"Image 2"}})],1),t._v(" "),r("div",{attrs:{id:"img3"}},[r("v-img",{attrs:{id:"img",src:"smith.jpg",alt:"Image 3"}})],1)])],1),t._v(" "),r("p",{staticClass:"text-center pt-6"},[t._v("\n      Hello! I'm Austen, a software developer based in Portland, OR. I love\n      building things that provide people with enjoyable internet experiences.\n    ")]),t._v(" "),r("p",{staticClass:"text-center "},[t._v("\n      I am a Veteran that is striving to make a seamless transition from\n      Marine to Software Developer.\n    ")]),t._v(" "),r("v-container",{},[r("h2",[r("strong",[r("em",[t._v("Technical Skills")])])]),t._v(" "),r("v-row",[r("v-col",[r("strong",[t._v("Programming Languages:")]),t._v(" "),r("v-col",[r("p",{staticClass:"text-left ml-5 pt-2"},[t._v("- JavaScript")]),t._v(" "),r("p",{staticClass:"text-left ml-5"},[t._v("- Python")]),t._v(" "),r("p",{staticClass:"text-left ml-5"},[t._v("- HTML5")]),t._v(" "),r("p",{staticClass:"text-left ml-5"},[t._v("- CSS3")])])],1),t._v(" "),r("v-col",[r("strong",[t._v("Libraries:")]),t._v(" "),r("v-col",[r("p",{staticClass:"text-left pt-2"},[t._v("- Vue Cli")]),t._v(" "),r("p",{staticClass:"text-left"},[t._v("- Vuex")]),t._v(" "),r("p",{staticClass:"text-left"},[t._v("- Vue Router")]),t._v(" "),r("p",{staticClass:"text-left"},[t._v("- Django")]),t._v(" "),r("p",{staticClass:"text-left"},[t._v("- Django Rest Api")]),t._v(" "),r("p",{staticClass:"text-left"},[t._v("- Vuetify")])])],1),t._v(" "),r("v-col",[r("strong",[t._v("Misc:")]),t._v(" "),r("v-col",[r("p",{staticClass:"text-left pt-2 pl-4"},[t._v("- Git")]),t._v(" "),r("p",{staticClass:"text-left pl-4"},[t._v("- Github")]),t._v(" "),r("p",{staticClass:"text-left pl-4 "},[t._v("- SQLite3")]),t._v(" "),r("p",{staticClass:"text-left pl-4 "},[t._v("- JWT Authorization")]),t._v(" "),r("p",{staticClass:"text-left pl-4 "},[t._v("- Windows/Mac")]),t._v(" "),r("p",{staticClass:"text-left pl-4 "},[t._v("- Data Visualization")])])],1)],1)],1),t._v(" "),r("v-container",{staticClass:"text-center"},[r("h2",{staticClass:"pt-3"},[r("strong",[t._v("Contact Information:")])]),t._v(" "),r("h4",{staticClass:"email"},[t._v("Email: coteausten@gmail.com")]),t._v(" "),r("a",{attrs:{id:"externalLinks",href:"https://www.linkedin.com/in/austen-cote-8ba6aa169/"}},[r("i",{staticClass:" pt-3 p-3 fab fa-linkedin fa-5x"})]),t._v(" "),r("a",{attrs:{id:"externalLinks",href:"https://github.com/aust10"}},[r("i",{staticClass:"fab fa-github fa-5x"})])]),t._v(" "),r("nav",{staticClass:"navbar sticky-bottom navbar-light bg-secondary"},[r("p",[t._v("\n        Produced by:"),r("a",{staticClass:"navbar-brand text-white pl-4",attrs:{href:"#"}},[t._v("Austen Cote")])])])],1)],1)}),[],!1,null,"e60e4596",null);e.default=component.exports;c()(component,{VApp:v.a,VAppBar:f.a,VBtn:d.a,VCol:_.a,VContainer:m.a,VImg:h.a,VRow:C.a,VSpacer:x.a})}}]);