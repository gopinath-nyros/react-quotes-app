(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{50:function(e,t,c){e.exports={item:"QuoteItem_item__1jq3i"}},51:function(e,t,c){e.exports={list:"QuoteList_list__3wYm6",sorting:"QuoteList_sorting__1SUj1"}},52:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3RG-W"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),o=c(50),i=c.n(o),r=c(8),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:i.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(r.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(51),j=c.n(d),l=function(e){var t,c,o=Object(n.h)(),i=Object(n.i)(),r="asc"===new URLSearchParams(i.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){o.push({pathname:i.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["sort ",r?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(15),h=c(52),x=c.n(h),O=function(){return Object(a.jsxs)("div",{className:x.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(r.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},f=c(36),m=c(37);t.default=function(){console.log("inside component");var e=Object(f.a)(m.d,!0),t=e.sendRequest,c=e.status,n=e.data,o=e.error;return Object(s.useEffect)((function(){console.log("inside effect function..."),t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(b.a,{})}):"error"===c?Object(a.jsx)("p",{className:"centered focused",children:o}):"completed"!==c||n&&0!==n.length?Object(a.jsx)(l,{quotes:n}):Object(a.jsx)(O,{})}}}]);
//# sourceMappingURL=5.9ecbb672.chunk.js.map