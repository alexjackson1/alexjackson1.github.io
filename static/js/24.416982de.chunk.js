(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{975:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),l=n(385),i=n(437),c=(n(459),n(0)),s=n(104),u=Object(r.lazy)(function(){return n.e(23).then(n.bind(null,978))}),o=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(3),n.e(15)]).then(n.bind(null,965))}),d=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,968))}),p=function(e){var t=e.children,n=e.dark,l=e.suspenseText;return a.a.createElement("div",{style:{padding:"5px",backgroundColor:n?"#30404d":"white",overflow:"auto",display:"flex",flexDirection:"column",width:"100%",height:"100%"}},a.a.createElement(r.Suspense,{fallback:a.a.createElement(s.a,{text:l})},t))},m=function(e,t){var n=t.dark,r=t.suspenseText;return function(t){return a.a.createElement(p,{dark:n,suspenseText:r},a.a.createElement(l.g,{style:{padding:"7px",paddingBottom:0}},e),a.a.createElement(t,null))}},f=function(e){return function(t){switch(t){case"selector":return m(c.lb,{dark:e,suspenseText:"Loading Graph Selector"})(u);case"project":return a.a.createElement(p,{dark:e,suspenseText:"Loading Gantt Chart"},a.a.createElement(d,null));case"result":return m(c.sc,{dark:e,suspenseText:"Loading Analysis Pane"})(o);default:return a.a.createElement("div",null)}}},b=function(e){var t=e.dark;return a.a.createElement(i.Mosaic,{className:t?"mosaic-blueprint-theme bp3-dark":"mosaic-blueprint-theme",renderTile:f(t),resize:{minimumPaneSizePercentage:10},initialValue:{direction:"row",first:"selector",second:{direction:"column",first:"project",second:"result",splitPercentage:40},splitPercentage:20}})};t.default=b}}]);
//# sourceMappingURL=24.416982de.chunk.js.map