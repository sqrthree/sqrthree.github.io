webpackJsonp([0xc1d74b0851a0],{319:function(e,t){},320:function(e,t){},314:function(e,t){e.exports={"post-heading":"src-styles----post-module---post-heading---3XY_J","post-heading__title":"src-styles----post-module---post-heading__title---1-9YQ","post-heading__meta":"src-styles----post-module---post-heading__meta---3katd",donation:"src-styles----post-module---donation---1rPSR",pager:"src-styles----post-module---pager---3ag2f",pager__item:"src-styles----post-module---pager__item---vNI-Q",pager__title:"src-styles----post-module---pager__title---2ZGsj",pager__tips:"src-styles----post-module---pager__tips---R2YkG","pager__item--disabled":"src-styles----post-module---pager__item--disabled---XSQC6"}},230:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var o=a(1),c=l(o),i=a(21),d=l(i),m=a(27),u=l(m),f=a(48),p=l(f),h=a(18),_=l(h),g=a(314),E=l(g);a(319),a(320);var y=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.addShareSupport=function(){var e=document.querySelector("head"),t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css",e.appendChild(t);var a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js",e.appendChild(a)},t.prototype.addHighlightSupport=function(){var e=document.querySelector("head"),t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.11.0/themes/prism-okaidia.min.css",e.appendChild(t)},t.prototype.componentDidMount=function(){this.addHighlightSupport(),this.addShareSupport()},t.prototype.render=function(){return c.default.createElement("div",{className:"social-share","data-disabled":"diandian"})},t}(c.default.Component),b=function(e){var t,a,l=e.prev,n=e.next,r=(0,u.default)((t={},t[E.default.pager__item]=!0,t[E.default["pager__item--prev"]]=!0,t[E.default["pager__item--disabled"]]=!l,t)),s=(0,u.default)((a={},a[E.default.pager__item]=!0,a[E.default["pager__item--next"]]=!0,a[E.default["pager__item--disabled"]]=!n,a));return c.default.createElement("ul",{className:E.default.pager+" row justify-content-between text-center list-inline"},c.default.createElement("li",{className:"col list-inline-item"},c.default.createElement(_.default,{className:r,to:l?"/articles"+l.fields.slug:null,title:l?l.frontmatter.title:"已经是第一篇啦 ^_^"},c.default.createElement("div",{className:""+E.default.pager__title},"Previous"),c.default.createElement("p",{className:""+E.default.pager__tips},l?l.frontmatter.title:"已经是第一篇啦 ^_^ "))),c.default.createElement("li",{className:"col list-inline-item"},c.default.createElement(_.default,{className:s,to:n?"/articles"+n.fields.slug:null,title:n?n.frontmatter.title:"已经是最后一篇啦 ^_^"},c.default.createElement("div",{className:""+E.default.pager__title},"Next"),c.default.createElement("p",{className:""+E.default.pager__tips},n?n.frontmatter.title:"已经是最后一篇啦 ^_^"))))},v=function(e){var t=e.data,a=e.pathContext,l=t.markdownRemark,n=t.site.siteMetadata,r=l.frontmatter.tags||[],s=l.frontmatter.author||n.defaultAuthor,o={};l.frontmatter.cover&&(o.backgroundImage="url("+l.frontmatter.cover+")");var i=l.frontmatter.title+" - 由作者"+s+"发布于 "+l.frontmatter.date;return c.default.createElement("div",null,c.default.createElement(d.default,null,c.default.createElement("title",null,i),c.default.createElement("link",{rel:"stylesheet",href:"https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css"}),c.default.createElement("meta",{itemprop:"name",content:i}),c.default.createElement("meta",{itemprop:"description",content:a.excerpt}),c.default.createElement("meta",{itemprop:"image",content:l.frontmatter.cover||n.thumbnail}),c.default.createElement("meta",{property:"og:url",content:n.url+"/articles"+a.slug}),c.default.createElement("meta",{property:"og:type",content:"website"}),c.default.createElement("meta",{property:"og:title",content:i}),c.default.createElement("meta",{property:"og:description",content:a.excerpt}),c.default.createElement("meta",{property:"og:image",content:l.frontmatter.cover||n.thumbnail}),c.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.default.createElement("meta",{name:"twitter:title",content:i}),c.default.createElement("meta",{name:"twitter:description",content:a.excerpt}),c.default.createElement("meta",{name:"twitter:image",content:l.frontmatter.cover||n.thumbnail})),c.default.createElement("div",{className:E.default["post-heading"],style:o},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row justify-content-md-center"},c.default.createElement("div",{className:"col-10"},c.default.createElement("div",{className:"tags ghost-tags"},r.map(function(e){return c.default.createElement(p.default,{key:e,to:"/tags#"+e,theme:"white",full:!0},e)})),c.default.createElement("h1",{className:E.default["post-heading__title"]},l.frontmatter.title),c.default.createElement("p",{className:E.default["post-heading__meta"]},s," · ",l.frontmatter.date))))),c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row justify-content-md-center"},c.default.createElement("div",{className:"col-10"},c.default.createElement("article",{className:"markdown-body "+n.language,dangerouslySetInnerHTML:{__html:l.html}}),n.donation.status&&c.default.createElement("div",{className:E.default.donation},c.default.createElement("h3",{className:"mb-3"},"您的鼓励是作者写作最大的动力"),c.default.createElement("p",null,"如果您认为本网站的文章质量不错，读后觉得收获很大，不妨请我喝杯咖啡，让我有动力继续写出高质量的文章。"),n.donation.channel.alipay&&c.default.createElement("a",{href:n.donation.channel.alipay,className:"btn btn-primary mr-2",target:"_blank"},"支付宝打赏"),n.donation.channel.wechat&&c.default.createElement("a",{href:n.donation.channel.wechat,className:"btn btn-success",target:"_blank"},"微信打赏")),n.share&&c.default.createElement(y,null),c.default.createElement("hr",null),c.default.createElement(b,{prev:a.prev,next:a.next})))))};t.default=v;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-jsx-e43738fb749a9be89f94.js.map