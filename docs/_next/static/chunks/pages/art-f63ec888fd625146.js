(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{3714:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/art",function(){return n(5854)}])},5789:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(2660);function i(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex flex-col h-screen ",children:(0,r.jsx)(a.E.div,{className:"relative flex-grow isolate",initial:"initial",animate:"animate",variants:{initial:{opacity:0},animate:{opacity:1}},children:(0,r.jsx)("main",{className:"isolate h-full dotgrid ",children:t})})})})}},7800:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),a=n(7294),i=n(1664);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l={"rounded-tl-full":1,"rounded-tr-full":1,"rounded-bl-full":4,"rounded-br-full":4,"rounded-full":10},o={yellow:16,emerald:32,indigo:8,rose:64,slate:1},s={300:1,400:1,500:1,600:30};function u(e){var t=Object.keys(e),n=t.reduce((function(t,n){return t+e[n]}),0),r=c(Array(t.length).keys()).map((function(r){var a=e[t[r]],i=Math.floor(n/a);return Array(i).fill(r)})).flat(),a=t[r[Math.floor(Math.random()*r.length)]];return{nuc:a,value:e[a]}}function d(e){return Array.from(Array(e).keys()).map((function(e){var t=u(o),n=u(s),r=u(l);return{strand:"h-20 w-20 bg-".concat(t.nuc,"-").concat(n.nuc," ").concat(r.nuc),value:t.value+n.value+r.value}}))}function f(){var e=(0,a.useState)([]),t=e[0],n=e[1],c=(0,a.useState)(""),f=c[0],h=c[1],m=function(){var e=t.reduce((function(e,t){return e+t.value}),0),n=parseInt(e/10);return"\u2b50\ufe0f".repeat(n)};(0,a.useEffect)((function(){n(d(12)),h(m())}),[]),(0,a.useEffect)((function(){h(m())}),[t]);Object.keys(o).map((function(e){return Object.keys(s).map((function(t){return" bg-".concat(e,"-").concat(t," ")}))}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-col justify-center items-center h-full pt-6 print:p-0 ",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 px-8 py-4 my-2 drop-shadow-xl",children:"Back to Home Page"})}),(0,r.jsx)("button",{className:" print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 p-4 my-2 drop-shadow-xl",onClick:function(e){n(d(12))},children:"\u2728"})]}),(0,r.jsx)("div",{className:"border-8 m-4 sm:m-0 sm:border-[30px] border-secondary-800 grid grid-cols-3 grid-rows-4 bg-white shadow-lg p-8 sm:p-20",children:t.map((function(e,a){return(0,r.jsx)("span",{onClick:function(e){return function(e,t,n){var r=u(o),a=u(s),i=u(l),c="h-20 w-20 bg-".concat(r.nuc,"-").concat(a.nuc," ").concat(i.nuc),d=JSON.parse(JSON.stringify(t));d[e]={strand:c,value:r.value+a.value+i.value},n(d)}(a,t,n)},className:e.strand+" transition-all"},a)}))}),(0,r.jsx)("div",{className:"print:hidden text-xl pt-4 font-bold w-32 text-center break-words",children:f})]})})}},5854:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),a=n(9008),i=(n(1664),n(7800)),c=n(5789),l=n(2660);function o(e){e.allPosts;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"George Gach"})}),(0,r.jsx)(l.E.div,{className:"relative flex-grow isolate",initial:"initial",animate:"animate",variants:{initial:{opacity:0},animate:{opacity:1}},children:(0,r.jsx)(i.Z,{})})]})})}}},function(e){e.O(0,[441,774,888,179],(function(){return t=3714,e(e.s=t);var t}));var t=e.O();_N_E=t}]);