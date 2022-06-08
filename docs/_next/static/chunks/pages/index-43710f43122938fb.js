(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1038)}])},5789:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(5893),n=a(2660);function s(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex flex-col h-screen ",children:(0,r.jsx)(n.E.div,{className:"relative flex-grow isolate",initial:"initial",animate:"animate",variants:{initial:{opacity:0},animate:{opacity:1}},children:(0,r.jsx)("main",{className:"isolate h-full dotgrid",children:t})})})})}},7800:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(5893),n=a(7294),s=a(1664);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o={"rounded-tl-full":1,"rounded-tr-full":1,"rounded-bl-full":4,"rounded-br-full":4,"rounded-full":10},c={yellow:16,emerald:32,indigo:8,rose:64,slate:1},d={300:1,400:1,500:1,600:30};function u(e){var t=Object.keys(e),a=t.reduce((function(t,a){return t+e[a]}),0),r=l(Array(t.length).keys()).map((function(r){var n=e[t[r]],s=Math.floor(a/n);return Array(s).fill(r)})).flat(),n=t[r[Math.floor(Math.random()*r.length)]];return{nuc:n,value:e[n]}}function h(e){return Array.from(Array(e).keys()).map((function(e){var t=u(c),a=u(d),r=u(o);return{strand:"h-20 w-20 bg-".concat(t.nuc,"-").concat(a.nuc," ").concat(r.nuc),value:t.value+a.value+r.value}}))}function m(){var e=(0,n.useState)([]),t=e[0],a=e[1],i=(0,n.useState)(""),l=i[0],m=i[1],g=function(){var e=t.reduce((function(e,t){return e+t.value}),0),a=parseInt(e/10);return"\u2b50\ufe0f".repeat(a)};(0,n.useEffect)((function(){a(h(12)),m(g())}),[]),(0,n.useEffect)((function(){m(g())}),[t]);Object.keys(c).map((function(e){return Object.keys(d).map((function(t){return" bg-".concat(e,"-").concat(t," ")}))}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-col justify-center items-center h-full pt-6 print:p-0 ",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 px-8 py-4 my-2 drop-shadow-xl",children:"Back to Home Page"})}),(0,r.jsx)("button",{className:" print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 p-4 my-2 drop-shadow-xl",onClick:function(e){a(h(12))},children:"\u2728"})]}),(0,r.jsx)("div",{className:"border-8 m-4 sm:m-0 sm:border-[30px] border-secondary-800 grid grid-cols-3 grid-rows-4 bg-white shadow-lg p-8 sm:p-20",children:t.map((function(e,n){return(0,r.jsx)("span",{onClick:function(e){return function(e,t,a){var r=u(c),n=u(d),s=u(o),i="h-20 w-20 bg-".concat(r.nuc,"-").concat(n.nuc," ").concat(s.nuc),l=JSON.parse(JSON.stringify(t));l[e]={strand:i,value:r.value+n.value+s.value},a(l)}(n,t,a)},className:e.strand+" transition-all"},n)}))}),(0,r.jsx)("div",{className:"print:hidden text-xl pt-4 font-bold w-32 text-center break-words",children:l})]})})}},1038:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(5893),n=a(9008),s=a(1664),i=[{name:"Anbani.ge",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"Educational platform promoting every iteration of Georgian alphabet into the digital world of today."},url:"http://anbani.ge",img:"/assets/projects/anbani-thumb.jpg",tags:["Next.js","React","Tailwind","TensorFlow.js","Firebase"]},{name:"flowiz",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"Leading open-source project for optical flow visualization. Written in Python with web GUI"},url:"http://github.com/georgegach/flowiz",img:"/assets/projects/flowiz-thumb.jpg",tags:["Python","Numpy","Flask","JavaScript","Materialize"]},{name:"bestofbog.ge",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"Branding website showcasing some of the finest songs composed exclusively for Bank of Georgia"},url:"http://bestofbog.ge",img:"/assets/projects/bestofbog-thumb.jpg",tags:["JavaScript","Mobile-first","Progressive SPA"]},{name:"covid dashboard",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"COVID-19 dashboard optimized for video streaming with multiple live data feeds visualized in D3."},url:"http://gach.ml",img:"/assets/projects/covid-vid.gif",tags:["Javascript","D3"]},{name:"word embeddings",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"High-dimensional visualization of Georgian Wikipedia word embeddings trained with FastText and word2vec."},url:"http://words.anbani.ge/",img:"/assets/projects/words-vid.gif",tags:["Python","Javascript","word2vec","FastText"]},{name:"UNIX Wallpaper",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"Wallhaven's favorite UNIX wallpaper showcasing family of unix-like distros with iconic code fragments in the back."},url:"https://www.deviantart.com/georgegach/art/Unix-Cloud-818259008",img:"/assets/projects/unix-thumb.jpg",tags:["Photoshop","Python"]},{name:"Anbani Fonts",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"Currated collection of freely available high-quality Georgian fonts with bleeding edge UI/UX."},url:"http://anbani.ge/fonts",img:"/assets/projects/fonts-thumb.jpg",tags:["React","Tailwind","Python"]},{name:"Saati",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"First android watchface to support every Georgian script."},url:"https://m.apkpure.com/saati-%E1%83%BB-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98/ge.anbani.saati",img:"/assets/projects/saati-thumb.jpg",tags:["Android","Java"]},{name:"Georgian Keyboard",desc:{ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d0\u10d3",en:"First android keyboard to support every Georgian script."},url:"https://m.apkpure.com/georgian-keyboard-%E1%83%BB-anbani-ge/ge.anbani.georgiankeyboard",img:"/assets/projects/kbd-thumb.jpg",tags:["Android","Java"]}];function l(e){var t=e.name,a=e.descEn,n=(e.descKa,e.img),s=e.tags,i=void 0===s?[]:s,l=e.url;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:l,target:"_blank",children:(0,r.jsxs)("div",{className:"max-w-sm overflow-hidden shadow-md pb-4 flex flex-col gap-4 border-brand-600 font-anbanisans rounded-3xl cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-xl bg-secondary-100 ",children:[(0,r.jsxs)("div",{className:"relative overflow-hidden rounded-b-3xl shadow-md",children:[(0,r.jsx)("img",{className:"w-full aspect-video object-cover ",src:n,alt:"Black Marble"}),(0,r.jsx)("div",{className:"flex flex-col justify-end text-3xl px-4 absolute bottom-0 text-secondary-100 pb-4 w-full h-full bg-gradient-to-b from-transparent via-transparent to-secondary-900/90 gradient-sto",children:t})]}),(0,r.jsx)("div",{className:"text-lg px-4 text-secondary-500 ",children:a}),(0,r.jsx)("div",{className:"text-lg px-4 flex flex-row gap-2 text-secondary-100 flex-wrap",children:i.map((function(e,t){return(0,r.jsx)("span",{className:"bg-slate-400 rounded-full px-3 py-1",children:e},t)}))})]})})})}function o(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"max-w-screen-xl grid grid-cols-1 px-4 gap-8 md:grid-cols-2 lg:grid-cols-3",children:i.map((function(e,t){return(0,r.jsx)(l,{name:e.name,descEn:e.desc.en,descKa:e.desc.ka,img:e.img,tags:e.tags,url:e.url},e.name)}))})})}a(7800);var c=a(7294),d=["rounded-tl-full","rounded-tr-full","rounded-bl-full","rounded-br-full"],u=["slate","indigo","rose","indigo"],h=[300,400,500,600];function m(){var e=function(e){return e[Math.floor(Math.random(1)*e.length)]},t=function(t){for(var a=u,r=[],n=0;n<a.length;n++)for(var s=Math.floor(t/2/(n+1)),i=0;i<s;i++)r.push("h-14 w-14 md:h-20 md:w-20 bg-".concat(a[n],"-").concat(e(h)," ").concat(e(d)));return function(e){for(var t,a=e.length;0!=a;){var r;t=Math.floor(Math.random()*a),a--,r=[e[t],e[a]],e[a]=r[0],e[t]=r[1]}return e}(r).slice(0,t)},a=(0,c.useState)([]),n=a[0],s=a[1];(0,c.useEffect)((function(){s(t(12))}),[]);u.map((function(e){return h.map((function(t){return" bg-".concat(e,"-").concat(t," ")}))}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container mx-auto flex flex-col justify-center items-center h-full",children:(0,r.jsx)("div",{className:"border-[20px] md:border-[40px] cursor-pointer border-secondary-800 grid grid-cols-3 grid-rows-4 bg-secondary-200 p-5 md:p-10 shadow-lg shadow-slate-900/50 shadow-inner drop-shadow-xl ",onClick:function(e){s(t(12))},children:n.map((function(e,t){return(0,r.jsx)("span",{className:e+" transition-all"},t)}))})})})}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function x(e){e.children;var t=g(e,["children"]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full ".concat(t.className),children:[(0,r.jsx)("svg",{preserveAspectRatio:"xMinYMax meet",className:"fill-slate-200 opacity-70 absolute -scale-x-100",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,r.jsx)("path",{d:"M0,224L34.3,202.7C68.6,181,137,139,206,133.3C274.3,128,343,160,411,181.3C480,203,549,213,617,229.3C685.7,245,754,267,823,245.3C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,266.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"})}),(0,r.jsx)("svg",{preserveAspectRatio:"xMinYMax meet",className:"fill-slate-200 opacity-50 absolute -scale-x-100 ",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,r.jsx)("path",{d:"M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})}),(0,r.jsx)("svg",{preserveAspectRatio:"xMinYMax meet",className:"fill-slate-200 opacity-90 absolute",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,r.jsx)("path",{d:"M0,224L34.3,202.7C68.6,181,137,139,206,133.3C274.3,128,343,160,411,181.3C480,203,549,213,617,229.3C685.7,245,754,267,823,245.3C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,266.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"})}),(0,r.jsx)("svg",{preserveAspectRatio:"xMinYMax meet",className:"fill-slate-200 absolute ",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,r.jsx)("path",{d:"M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})}),(0,r.jsx)("svg",{preserveAspectRatio:"xMinYMax meet",className:"fill-transparent",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,r.jsx)("path",{d:""})})]})})}function f(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("div",{className:"mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center select-none mb-8 md:mb-2",children:[(0,r.jsx)("p",{className:"text-9xl text-slate-100 font-relishlight tracking-tighter mt-44",children:"Hi"}),(0,r.jsxs)("div",{className:"text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter",children:[(0,r.jsx)("span",{children:"I'm "})," ",(0,r.jsx)("h1",{className:"inline-flex",children:"George"})]}),(0,r.jsx)("h2",{className:"text-xl md:text-4xl text-slate-100 text-center",children:"Machine Learning and Web Engineer"})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(x,{className:"translate-y-1"}),(0,r.jsxs)("div",{className:"flex flex-col bg-slate-200 relative w-full items-center justify-between py-16 md:py-32 gap-8 ",children:[(0,r.jsx)("img",{className:"rounded-full absolute z-10 top-0 -translate-y-3/4 w-1/3 md:w-1/4 max-w-xs cursor-move shadow-md shadow-slate-500/40",src:"/assets/profile-512.jpg",alt:"George's profle picture"}),(0,r.jsxs)("div",{className:"prose flex-col flex space-y-2 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between",children:[(0,r.jsxs)("div",{className:"socitem flex flex-row space-x-2 text-sm ",children:[(0,r.jsx)("div",{className:"socicon",children:(0,r.jsx)("a",{href:"https://github.com/anbani",target:"_blank",rel:"noopener noreferrer nofollow",title:"Github",className:"flex items-center ",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5 fillCurrent",children:(0,r.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})})}),(0,r.jsx)("a",{href:"https://github.com/georgegach",target:"_blank",className:"socvalue",children:"github.com/georgegach"})]}),(0,r.jsxs)("div",{className:"socitem flex flex-row space-x-2 items-center text-sm ",children:[(0,r.jsx)("div",{className:"socicon",children:(0,r.jsx)("a",{href:"https://github.com/anbani",target:"_blank",rel:"noopener noreferrer nofollow",title:"Github",className:"flex items-center ",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:"w-5 h-5 fillCurrent",children:(0,r.jsx)("path",{d:"M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"})})})}),(0,r.jsx)("a",{href:"https://linkedin.com/in/georgegach/",target:"_blank",className:"socvalue",children:"linkedin.com/in/georgegach"})]})]}),(0,r.jsxs)("div",{className:"font-firago text-sm text-justify prose px-6 text-secondary-700 drop-shadow-sm",children:[(0,r.jsxs)("div",{className:"bg-slate-100 p-4 -mx-4 mb-4",children:[(0,r.jsx)("b",{children:" Available for hire!"})," Feel free to reach out on my socials or via ",(0,r.jsx)("a",{href:"mailto:georgegach@outlook.com",children:"email"}),". Recruiters, you may obtain my resume ",(0,r.jsx)(s.default,{href:"/resume",children:(0,r.jsx)("a",{children:"here"})}),"."]}),"For the past decade, I've had the pleasure to work in various fields of software engineering. It all started out with the delight of building awesome web and mobile apps almost a decade ago. Later on, as a Fulbright Scholar in the US, I've had the pleasure to rediscover my long-time passion for all things Data which inevitably nudged to me delve into the rich world of modern AI during my graduate studies. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"The field I'm practicing is called Machine Learning which concerns itself with solving conventionally unprogrammable tasks with a bunch of clever algorithms abstracted as iterative learning tasks. For the past decade, researchers armed with ML tools have been exceeding super-human comprehension every year in a range of fields be it vision, speech recognition, machine translation, playing GO or Starcraft!",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"At this point, it's beyond a doubt that ML is the software development 2.0, or at least a big chunk of it, and I'm excited to be part of that journey going forward.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"On this website, you'll find some of the projects I worked on spanning but not limited to Data Science,  Machine Learning, Web & Mobile apps, Music, Design, Typography, and so on. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsx)(o,{})]}),(0,r.jsx)(x,{className:"-scale-y-100 -translate-y-1"})]})]}),(0,r.jsxs)("div",{className:"mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center lg:-mt-20 mb-16",children:[(0,r.jsx)("p",{className:"text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter text-center",children:"Thanks for visiting!"}),(0,r.jsx)("p",{className:"text-xl md:text-2xl text-slate-100 font-relishlight text-center mb-2 md:mb-10 px-8",children:"Here's a unique generative art I just made for you."}),(0,r.jsx)(m,{}),(0,r.jsx)("p",{className:"text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter mt-2 md:mt-10",children:"Farewell"})]})]})}var p=a(5789);function b(e){e.allPosts;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(n.default,{children:(0,r.jsx)("title",{children:"George Gach"})}),(0,r.jsx)(f,{})]})})}}},function(e){e.O(0,[441,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);