(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2448:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(1635)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),c=n(387),i=n(7190);var u={};function s(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=r(l.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?l.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,x=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,g=r(i.useIntersection({rootMargin:"200px"}),2),w=g[0],E=g[1],_=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=E&&n&&l.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,E,m,n,o]);var j={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}))}(e,o,d,p,v,y,x,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof m?m:o&&o.locale,L=o&&o.isLocaleDomain&&l.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);j.href=L||l.addBasePath(l.addLocale(p,N,o&&o.defaultLocale))}return a.default.cloneElement(t,j)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,i=o.useRef(),u=r(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||s||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!l&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},1635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),o=n(9008),a=n(1664);function l(e){e.allPosts;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"404: Not Found"})}),(0,r.jsx)("section",{className:"flex items-center h-full p-16 bg-coolGray-900 text-coolGray-100",children:(0,r.jsx)("div",{className:"container flex flex-col items-center justify-center px-5 mx-auto my-8",children:(0,r.jsxs)("div",{className:"max-w-md text-center",children:[(0,r.jsxs)("h2",{className:"mb-8 text-9xl text-gray-200 ",children:[(0,r.jsx)("span",{className:"sr-only",children:"Error"}),"404"]}),(0,r.jsx)("p",{className:"text-2xl text-gray-400 md:text-3xl",children:"\u1c90\u1ca1\u1c94 \u1c95\u1c94\u1ca0 \u1c92\u1c90\u1c95\u1ca4\u1ca0\u1c98\u1c9c\u1c93\u1c94\u1c91\u1c98\u1c97"}),(0,r.jsx)("p",{className:"mt-4 mb-8 text-gray-400",children:"\u10d2\u10d5\u10d4\u10e0\u10d3\u10d8 \u10e0\u10dd\u10db\u10da\u10d8\u10e1 \u10db\u10dd\u10dc\u10d0\u10ee\u10e3\u10da\u10d4\u10d1\u10d0\u10e1\u10d0\u10ea \u10ea\u10d3\u10d8\u10da\u10dd\u10d1\u10d7 \u10d0\u10e6\u10d0\u10e0 \u10d0\u10e0\u10e1\u10d4\u10d1\u10dd\u10d1\u10e1 \u10d0\u10dc \u10e1\u10e3\u10da \u10d0\u10e0\u10ea \u10d0\u10e0\u10e1\u10d4\u10d1\u10dd\u10d1\u10d3\u10d0."}),(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{href:"#",className:"px-8 py-3 rounded rounded-full bg-indigo-400 text-white hover:bg-indigo-500 hover:shadow-md",children:"\u10d3\u10d0\u10d1\u10e0\u10e3\u10dc\u10d3\u10d8\u10d7 \u10db\u10d7\u10d0\u10d5\u10d0\u10e0 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4"})})]})})})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=2448,e(e.s=t);var t}));var t=e.O();_N_E=t}]);