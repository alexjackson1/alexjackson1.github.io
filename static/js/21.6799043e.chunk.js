(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{432:function(e,n,d){"use strict";var i=d(3),c=d.n(i),t=d(594);n.a=function(e){return c.a.createElement(t.a,{contents:e.nodes,onNodeClick:e.handleNodeClick,onNodeCollapse:e.handleNodeCollapse,onNodeExpand:e.handleNodeExpand})}},973:function(e,n,d){"use strict";d.r(n);var i=d(61),c=d(11),t=d(0),o=d(101),a=d(4);function r(e){var n,d=e.editor.explorer,i=d.selected,r=d.expanded,l=t.Bb,u=l.key,s=l.icon,p=e[u],f=t.rc,b=f.key,N=f.icon,h=f.children,m=Object(a.w)(p),x=function(e,n,d){return e.map(function(e){var c;return c=e.reference?"".concat(e.reference," (").concat(Object(a.e)(p,e.benefitId).name,")"):e.name?e.name:"Unknown",{id:e.id,label:c,type:n,isSelected:i&&i.id===e.id,icon:d}})},k=(n=h,[].concat(Object(c.a)(function(n){return n.filter(function(e){return o.k(e.id)||o.o(e.id)}).map(function(n){var d=n.id,c=n.name,t=n.key,o=n.icon,a=e[u][b][0][t];return{id:d,label:c,type:n,isExpanded:r[d],isSelected:i&&i.id===d,icon:o,childNodes:x(a,n,o)}})}(n)),Object(c.a)(function(e){return e.filter(function(e){return o.l(e.id)}).map(function(e){var n=e.id,d=e.name,c=e.icon;return{id:n,label:d,type:e,isExpanded:r[n],isSelected:i&&i.id===n,icon:c}})}(n)))),E=[{id:m.id,label:m.name,type:t.rc,isExpanded:r[m.id],isSelected:i&&i.id===m.id,icon:N,childNodes:k}];return[{id:p.id,label:p.name,type:t.Bb,isExpanded:r[p.id],isSelected:i&&i.id===p.id,icon:s,childNodes:E}]}var l=d(435),u=d(432),s=Object(i.b)(function(e){return{nodes:r(e)}},function(e){return{handleNodeClick:function(n,d){n.isSelected=!0,e(Object(l.c)(n,d))},handleNodeCollapse:function(n){n.isExpanded=!1,e(Object(l.b)(n.id,!1))},handleNodeExpand:function(n){n.isExpanded=!0,e(Object(l.b)(n.id,!0))}}})(u.a);n.default=s}}]);
//# sourceMappingURL=21.6799043e.chunk.js.map