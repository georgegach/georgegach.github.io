(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{3714:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/art",function(){return n(5854)}])},5789:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(5893),a=n(2660);function i(t){var e=t.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex flex-col h-screen ",children:(0,r.jsx)(a.E.div,{className:"relative flex-grow isolate",initial:"initial",animate:"animate",variants:{initial:{opacity:0},animate:{opacity:1}},children:(0,r.jsx)("main",{className:"isolate h-full dotgrid",children:e})})})})}},7800:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(5893),a=n(7294),i=n(1664);function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o={"rounded-tl-full":1,"rounded-tr-full":1,"rounded-bl-full":4,"rounded-br-full":4,"rounded-full":10},u={yellow:16,emerald:32,indigo:8,rose:64,slate:1},s={300:1,400:1,500:1,600:30};function d(t){var e=Object.keys(t),n=e.reduce((function(e,n){return e+t[n]}),0),r=c(Array(e.length).keys()).map((function(r){var a=t[e[r]],i=Math.floor(n/a);return Array(i).fill(r)})).flat(),a=e[r[Math.floor(Math.random()*r.length)]];return{nuc:a,value:t[a]}}function f(t){return Array.from(Array(t).keys()).map((function(t){var e=d(u),n=d(s),r=d(o);return{strand:"h-20 w-20 bg-".concat(e.nuc,"-").concat(n.nuc," ").concat(r.nuc),value:e.value+n.value+r.value}}))}function m(){var t=(0,a.useState)([]),e=t[0],n=t[1],l=(0,a.useState)(""),c=l[0],m=l[1],h=function(){var t=e.reduce((function(t,e){return t+e.value}),0),n=parseInt(t/10);return"\u2b50\ufe0f".repeat(n)};(0,a.useEffect)((function(){n(f(12)),m(h())}),[]),(0,a.useEffect)((function(){m(h())}),[e]);Object.keys(u).map((function(t){return Object.keys(s).map((function(e){return" bg-".concat(t,"-").concat(e," ")}))}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-col justify-center items-center h-full pt-6 print:p-0 ",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 px-8 py-4 my-2 drop-shadow-xl",children:"Back to Home Page"})}),(0,r.jsx)("button",{className:" print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 p-4 my-2 drop-shadow-xl",onClick:function(t){n(f(12))},children:"\u2728"})]}),(0,r.jsx)("div",{className:"border-8 m-4 sm:m-0 sm:border-[30px] border-secondary-800 grid grid-cols-3 grid-rows-4 bg-white shadow-lg p-8 sm:p-20",children:e.map((function(t,a){return(0,r.jsx)("span",{onClick:function(t){return function(t,e,n){var r=d(u),a=d(s),i=d(o),l="h-20 w-20 bg-".concat(r.nuc,"-").concat(a.nuc," ").concat(i.nuc),c=JSON.parse(JSON.stringify(e));c[t]={strand:l,value:r.value+a.value+i.value},n(c)}(a,e,n)},className:t.strand+" transition-all"},a)}))}),(0,r.jsx)("div",{className:"print:hidden text-xl pt-4 font-bold w-32 text-center break-words",children:c})]})})}},5854:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var r=n(5893),a=n(9008),i=(n(1664),n(7800)),l=n(5789),c=n(2660);function o(t){t.allPosts;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"George Gach"})}),(0,r.jsx)(c.E.div,{className:"relative flex-grow isolate",initial:"initial",animate:"animate",variants:{initial:{opacity:0},animate:{opacity:1}},children:(0,r.jsx)(i.Z,{})})]})})}}},function(t){t.O(0,[441,774,888,179],(function(){return e=3714,t(t.s=e);var e}));var e=t.O();_N_E=e}]);