(self.webpackChunkblog=self.webpackChunkblog||[]).push([[582],{1857:function(e,t,r){"use strict";var a=r(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=(0,a.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,m=n(e,["color","size"]);return a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},m),a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.createElement("polyline",{points:"12 16 16 12 12 8"}),a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));o.displayName="ArrowRightCircle",t.Z=o},6763:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a=r(7294);function l(e){var t=e.title,r=e.description,l=e.cover,n=e.mini;return a.createElement("div",{className:"header relative bg-gray-50 dark:bg-gray-900"},l?a.createElement("div",{className:"absolute left-0 top-0 w-full h-full"},a.createElement("img",{className:"w-full h-full object-cover",src:l,alt:l})):null,a.createElement("div",{className:"relative container mx-auto px-2 md:px-10 lg:px-40 text-center text-gray-900 dark:text-white "+(n?"py-24 pb-10 md:py-32":"py-56")},a.createElement("h1",{className:"py-8 "+(n?"text-4xl":"text-6xl")},t),a.createElement("h2",{className:"font-normal "+(n?"text-xl":"text-3xl")},r)))}l.defaultProps={title:"",description:"",cover:"",mini:!1}},3504:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(2571),l=r.n(a),n=r(7294),o=r(5444),c=r(4392),s=r(6763),m=r(3217),i=r.n(m),d=r(8804),u=r.n(d),f=r(1857),g=r(319);function x(e){var t=e.posts,r=u()(t),a=i()(t);return n.createElement("div",{className:"dark:bg-gray-900"},n.createElement("div",{className:"container mx-auto px-6 py-6 md:py-20"},n.createElement("div",{className:"lg:flex"},n.createElement("div",{className:"flex-none mb-4 lg:mb-0 lg:w-2/3"},r?n.createElement(o.rU,{className:"block relative",to:(0,g.t)(r)},n.createElement("figure",{className:"lg:mr-10 lg:transform lg:rotate-1"},n.createElement("div",{className:"h-48 md:h-96 bg-gray-100 dark:bg-gray-800 rounded-t-md overflow-hidden"},r.frontmatter.cover?n.createElement("img",{className:"w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110",src:r.frontmatter.cover,alt:""}):null),n.createElement("div",{className:"relative flex-auto py-4 mx-4"},n.createElement("figcaption",{className:"text-sm"},n.createElement("p",{className:"text-gray-600 dark:text-gray-500 text-right"},r.frontmatter.date)),n.createElement("h3",{className:"my-2 text-2xl dark:text-gray-100"},r.frontmatter.title),n.createElement("p",{className:"h-12 md:h-12 overflow-hidden mt-2 mb-12 text-base text-gray-600 dark:text-gray-300"},r.excerpt,r.excerpt,r.excerpt,r.excerpt),n.createElement("div",{className:"absolute bottom-4 right-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"},n.createElement(f.Z,null))))):null),n.createElement("div",{className:"flex-none lg:w-1/3 flex flex-col space-y-10"},a.map((function(e){return n.createElement(o.rU,{key:e.id,to:(0,g.t)(e)},n.createElement("figure",{className:"relative"},n.createElement("div",{className:"absolute w-full h-full rounded-md transform -rotate-1 bg-gradient-to-br from-gray-100 dark:from-gray-800 to-yellow-200 dark:to-yellow-400"}),n.createElement("div",{className:"absolute w-full h-full rounded-md bg-gray-50 dark:bg-gray-800"}),n.createElement("div",{className:"flex h-40"},n.createElement("div",{className:"relative flex-auto py-4 mx-6"},n.createElement("h3",{className:"my-2 text-xl max-h-28 overflow-hidden dark:text-gray-100"},e.frontmatter.title),n.createElement("div",{className:"absolute bottom-4 left-0"},n.createElement("span",{className:"text-sm text-gray-600 dark:text-gray-500"},e.frontmatter.date))),n.createElement("div",{className:"flex-none\tw-32 h-full bg-gray-100 dark:bg-gray-800 rounded-r-md overflow-hidden"},e.frontmatter.cover?n.createElement("img",{className:"w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110",src:e.frontmatter.cover,alt:""}):null))))}))))))}x.defaultProps={posts:[]};var v=r(3761);function p(e){var t=e.id,r=e.title,a=e.tags,l=e.cover,c=e.date,s=e.excerpt,m=e.path;return n.createElement("figure",{id:t,className:"md:flex rounded shadow bg-white dark:bg-gray-900 select-none"},n.createElement(o.rU,{className:"flex-none block",to:m},n.createElement("div",{className:"w-full md:w-72 h-full bg-yellow-300 rounded-t-md md:rounded-t-none md:rounded-l-md overflow-hidden"},l?n.createElement("img",{className:"w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110",src:l,alt:l}):null)),n.createElement("div",{className:"relative flex-auto pt-5 pb-4 mx-4 md:mx-8"},n.createElement("div",{className:"flex items-center\tjustify-between flex-wrap"},n.createElement(v.Z,{tags:a}),n.createElement("figcaption",{className:"text-sm my-1"},n.createElement("p",{className:"text-gray-600 dark:text-gray-500 text-right"},c))),n.createElement(o.rU,{className:"block pb-12",to:m},n.createElement("h3",{className:"my-5 text-xl md:text-2xl dark:text-gray-100"},r),n.createElement("p",{className:"mt-2 h-12 overflow-hidden text-base text-gray-600 dark:text-gray-300"},s)),n.createElement(o.rU,{className:"absolute w-full bottom-4 right-0",to:m},n.createElement("div",{className:"flex justify-end text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"},n.createElement(f.Z,null)))))}function y(e){var t=e.posts;return n.createElement("div",{className:"flex flex-col space-y-10"},t.map((function(e){return n.createElement(p,{key:e.id,id:e.id,title:e.frontmatter.title,tags:e.frontmatter.tags||[],cover:e.frontmatter.cover,date:e.frontmatter.date,excerpt:e.excerpt,path:(0,g.t)(e)})})))}p.defaultProps={id:"",title:"",tags:"",cover:"",date:"",excerpt:"",path:""},y.defaultProps={posts:[]};function h(e){var t=e.data,r=e.pageContext,a=t.site.siteMetadata,m=t.allMarkdownRemark.pageInfo,i=r.nodes||t.allMarkdownRemark.nodes,d=r.nodes?r.hasNextPage:m.hasNextPage,u=r.nodes?r.currentPage:m.currentPage,f=l()(t.allMarkdownRemark.nodes,0,4),g=l()(i,4);return n.createElement(c.Z,null,n.createElement(s.Z,{title:a.name,description:a.bio,cover:a.cover}),n.createElement(x,{posts:f}),n.createElement("div",{className:"px-6 py-24 lg:py-40 bg-yellow-50 dark:bg-gray-800 bg-opacity-50"},n.createElement("div",{className:"container mx-auto"},n.createElement(y,{posts:g}),d?n.createElement("div",{className:"mt-8 flex justify-center"},n.createElement(o.rU,{className:"py-2 px-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",to:"/pages/"+(u+1)+"#page-"+(u+1)},n.createElement("svg",{className:"animate-bounce w-6 h-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"})))):null)))}},8804:function(e,t,r){e.exports=r(1175)},1175:function(e){e.exports=function(e){return e&&e.length?e[0]:void 0}},2571:function(e,t,r){var a=r(4259),l=r(6612),n=r(554);e.exports=function(e,t,r){var o=null==e?0:e.length;return o?(r&&"number"!=typeof r&&l(e,t,r)?(t=0,r=o):(t=null==t?0:n(t),r=void 0===r?o:n(r)),a(e,t,r)):[]}},3217:function(e,t,r){var a=r(4259);e.exports=function(e){var t=null==e?0:e.length;return t?a(e,1,t):[]}},8601:function(e,t,r){var a=r(4841),l=1/0;e.exports=function(e){return e?(e=a(e))===l||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:function(e,t,r){var a=r(8601);e.exports=function(e){var t=a(e),r=t%1;return t==t?r?t-r:t:0}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-mini-src-pages-index-jsx-320c564630b1fc313267.js.map