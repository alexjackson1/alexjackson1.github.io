(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{977:function(e,n,t){"use strict";t.r(n);var r=t(61),a=t(62),i=t(3),c=t.n(i),u=t(437),s=(t(459),t(104)),l=Object(i.lazy)(function(){return t.e(20).then(t.bind(null,972))}),o=Object(i.lazy)(function(){return Promise.all([t.e(6),t.e(12)]).then(t.bind(null,966))}),d=Object(i.lazy)(function(){return Promise.all([t.e(0),t.e(4),t.e(5)]).then(t.bind(null,968))}),p=function(e){var n=e.children,t=e.dark,r=e.suspenseText;return c.a.createElement("div",{style:{padding:"5px",backgroundColor:t?"#30404d":"white",overflow:"auto"}},c.a.createElement(i.Suspense,{fallback:c.a.createElement(s.a,{text:"".concat(r)})},n))},f=function(e){var n=e.suspenseText,t=Object(a.a)(e,["suspenseText"]);return function(e){return c.a.createElement(p,{dark:t.dark,suspenseText:n},c.a.createElement(e,t))}},m=function(e){return function(n){switch(n){case"explorer":return f({dark:e,suspenseText:"Loading Strategy Map"})(l);case"project":return f({dark:e,suspenseText:"Loading Gantt Chart"})(d);case"interface":return f({dark:e,suspenseText:"Loading Certainty Editor"})(o);default:return c.a.createElement("div",null)}}},b=function(e){var n=e.dark;return c.a.createElement(u.Mosaic,{className:n?"mosaic-blueprint-theme bp3-dark":"mosaic-blueprint-theme",renderTile:m(n),resize:{minimumPaneSizePercentage:10},initialValue:{direction:"row",first:"explorer",second:{direction:"column",first:"project",second:"interface",splitPercentage:40},splitPercentage:20}})};n.default=Object(r.b)(function(e){return{dark:e.editor.dark}},null)(b)}}]);
//# sourceMappingURL=26.9c0d32ee.chunk.js.map