(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(9025)}])},9025:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return Z},default:function(){return Blog},getPosts:function(){return getPosts}});var n=r(5893),i=r(3565),o=r(3918),l=r(7294),a=r(679);let[s,c]=(0,a.R)("Timeline component was not found in tree");var u={root:"m-43657ece",itemTitle:"m-2ebe8099",item:"m-436178ff",itemBullet:"m-8affcee1",itemBody:"m-540e8f41"},f=r(9535),d=r(987),h=r(5984),m=r(7731),p=r(9429),_=r(2979),g=Object.defineProperty,v=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&__defNormalProp(e,r,t[r]);if(y)for(var r of y(t))P.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>v(e,b(t)),__objRest=(e,t)=>{var r={};for(var n in e)T.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))0>t.indexOf(n)&&P.call(e,n)&&(r[n]=e[n]);return r};let w={},O=(0,f.d)((e,t)=>{let r=(0,d.w)("TimelineItem",w,e),{classNames:n,className:i,style:o,styles:a,vars:s,__active:u,__align:f,__lineActive:g,__vars:v,bullet:b,radius:y,color:T,lineVariant:P,children:O,title:x}=r,j=__objRest(r,["classNames","className","style","styles","vars","__active","__align","__lineActive","__vars","bullet","radius","color","lineVariant","children","title"]),C=c(),A=(0,h.rZ)(),N={classNames:n,styles:a};return l.createElement(m.x,__spreadValues(__spreadProps(__spreadValues({},C.getStyles("item",__spreadProps(__spreadValues({},N),{className:i,style:o}))),{mod:{"line-active":g,active:u},ref:t,__vars:{"--tli-radius":y?(0,p.H5)(y):void 0,"--tli-color":T?(0,_.p)(T,A):void 0,"--tli-border-style":P||void 0}}),j),l.createElement(m.x,__spreadProps(__spreadValues({},C.getStyles("itemBullet",N)),{mod:{"with-child":!!b,align:f,active:u}}),b),l.createElement("div",__spreadValues({},C.getStyles("itemBody",N)),x&&l.createElement("div",__spreadValues({},C.getStyles("itemTitle",N)),x),l.createElement("div",__spreadValues({},C.getStyles("itemContent",N)),O)))});O.classes=u,O.displayName="@mantine/core/TimelineItem";var x=r(9581),j=r(3637),C=r(8565),A=Object.defineProperty,N=Object.defineProperties,S=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,Timeline_defNormalProp=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Timeline_spreadValues=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&Timeline_defNormalProp(e,r,t[r]);if(k)for(var r of k(t))z.call(t,r)&&Timeline_defNormalProp(e,r,t[r]);return e},Timeline_spreadProps=(e,t)=>N(e,S(t)),Timeline_objRest=(e,t)=>{var r={};for(var n in e)E.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))0>t.indexOf(n)&&z.call(e,n)&&(r[n]=e[n]);return r};let V={active:-1,align:"left",reverseActive:!1},I=(0,j.Z)((e,{bulletSize:t,lineWidth:r,radius:n,color:i})=>({root:{"--tl-bullet-size":(0,C.h)(t),"--tl-line-width":(0,C.h)(r),"--tl-radius":void 0===n?void 0:(0,p.H5)(n),"--tl-color":i?(0,_.p)(i,e):void 0}})),B=(0,f.d)((e,t)=>{let r=(0,d.w)("Timeline",V,e),{classNames:n,className:i,style:o,styles:a,unstyled:c,vars:f,children:h,active:p,color:_,radius:g,bulletSize:v,align:b,lineWidth:y,reverseActive:T}=r,P=Timeline_objRest(r,["classNames","className","style","styles","unstyled","vars","children","active","color","radius","bulletSize","align","lineWidth","reverseActive"]),w=(0,x.y)({name:"Timeline",classes:u,props:r,className:i,style:o,classNames:n,styles:a,unstyled:c,vars:f,varsResolver:I}),O=l.Children.toArray(h),j=O.map((e,t)=>{var r,n;return(0,l.cloneElement)(e,{unstyled:c,__align:b,__active:(null==(r=e.props)?void 0:r.active)||(T?p>=O.length-t-1:p>=t),__lineActive:(null==(n=e.props)?void 0:n.lineActive)||(T?p>=O.length-t-1:p-1>=t)})});return l.createElement(s,{value:{getStyles:w}},l.createElement(m.x,Timeline_spreadValues(Timeline_spreadProps(Timeline_spreadValues({},w("root")),{mod:{align:b},ref:t}),P),j))});B.classes=u,B.displayName="@mantine/core/Timeline",B.Item=O;var R=r(2197),D=r(1864),L=r.n(D),$=r(9255),H=r.n($),W=r(3970),q=r.n(W),Q=r(4155),Z=!0;async function getPosts(){let e=L().join(Q.cwd(),"blogposts"),t=H().readFileSync(L().join(e,"db.json"),"utf8"),r=JSON.parse(t);return r}function Blog(e){let{posts:t}=e;return(0,n.jsxs)(i.W,{children:[(0,n.jsx)(o.D,{order:1,children:"Blog"}),(0,n.jsx)(B,{mt:32,children:t.posts.map(e=>(0,n.jsx)(B.Item,{title:new Date(e.date).toLocaleDateString(),color:"blue",style:{marginBottom:20},className:q().hoverclick,onClick:()=>{window.location.href="/blog/".concat(e.slug)},children:(0,n.jsx)(R.x,{component:"a",href:"/blog/".concat(e.slug),children:e.name})},e.slug))})]})}},3970:function(e){e.exports={hoverclick:"Blog_hoverclick__o_8hM"}},1864:function(e){!function(){"use strict";var t={114:function(e){function assertPath(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function normalizeStringPosix(e,t){for(var r,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else if(47===r)break;else r=47;if(47===r){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",i=0):i=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===r&&-1!==l?++l:l=-1}return n}function _format(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}var t={resolve:function(){for(var e,t,r="",n=!1,i=arguments.length-1;i>=-1&&!n;i--)i>=0?t=arguments[i]:(void 0===e&&(e=""),t=e),assertPath(t),0!==t.length&&(r=t+"/"+r,n=47===t.charCodeAt(0));return(r=normalizeStringPosix(r,!n),n)?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(assertPath(e),0===e.length)return".";var t=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return(0!==(e=normalizeStringPosix(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t)?"/"+e:e},isAbsolute:function(e){return assertPath(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];assertPath(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":t.normalize(e)},relative:function(e,r){if(assertPath(e),assertPath(r),e===r||(e=t.resolve(e))===(r=t.resolve(r)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var i=e.length,o=i-n,l=1;l<r.length&&47===r.charCodeAt(l);++l);for(var a=r.length-l,s=o<a?o:a,c=-1,u=0;u<=s;++u){if(u===s){if(a>s){if(47===r.charCodeAt(l+u))return r.slice(l+u+1);if(0===u)return r.slice(l+u)}else o>s&&(47===e.charCodeAt(n+u)?c=u:0===u&&(c=0));break}var f=e.charCodeAt(n+u);if(f!==r.charCodeAt(l+u))break;47===f&&(c=u)}var d="";for(u=n+c+1;u<=i;++u)(u===i||47===e.charCodeAt(u))&&(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(l+c):(l+=c,47===r.charCodeAt(l)&&++l,r.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(assertPath(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return -1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');assertPath(e);var r,n=0,i=-1,o=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,a=-1;for(r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47===s){if(!o){n=r+1;break}}else -1===a&&(o=!1,a=r+1),l>=0&&(s===t.charCodeAt(l)?-1==--l&&(i=r):(l=-1,i=a))}return n===i?i=a:-1===i&&(i=e.length),e.slice(n,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){n=r+1;break}}else -1===i&&(o=!1,i=r+1);return -1===i?"":e.slice(n,i)},extname:function(e){assertPath(e);for(var t=-1,r=0,n=-1,i=!0,o=0,l=e.length-1;l>=0;--l){var a=e.charCodeAt(l);if(47===a){if(!i){r=l+1;break}continue}-1===n&&(i=!1,n=l+1),46===a?-1===t?t=l:1!==o&&(o=1):-1!==t&&(o=-1)}return -1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return _format("/",e)},parse:function(e){assertPath(e);var t,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n=e.charCodeAt(0),i=47===n;i?(r.root="/",t=1):t=0;for(var o=-1,l=0,a=-1,s=!0,c=e.length-1,u=0;c>=t;--c){if(47===(n=e.charCodeAt(c))){if(!s){l=c+1;break}continue}-1===a&&(s=!1,a=c+1),46===n?-1===o?o=c:1!==u&&(u=1):-1!==o&&(u=-1)}return -1===o||-1===a||0===u||1===u&&o===a-1&&o===l+1?-1!==a&&(0===l&&i?r.base=r.name=e.slice(1,a):r.base=r.name=e.slice(l,a)):(0===l&&i?(r.name=e.slice(1,o),r.base=e.slice(1,a)):(r.name=e.slice(l,o),r.base=e.slice(l,a)),r.ext=e.slice(o,a)),l>0?r.dir=e.slice(0,l-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};t.posix=t,e.exports=t}},r={};function __nccwpck_require__(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,__nccwpck_require__),o=!1}finally{o&&delete r[e]}return i.exports}__nccwpck_require__.ab="//";var n=__nccwpck_require__(114);e.exports=n}()},4155:function(e){var t,r,n,i=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}function runClearTimeout(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var o=[],l=!1,a=-1;function cleanUpNextTick(){l&&n&&(l=!1,n.length?o=n.concat(o):a=-1,o.length&&drainQueue())}function drainQueue(){if(!l){var e=runTimeout(cleanUpNextTick);l=!0;for(var t=o.length;t;){for(n=o,o=[];++a<t;)n&&n[a].run();a=-1,t=o.length}n=null,l=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new Item(e,t)),1!==o.length||l||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},9255:function(){},3918:function(e,t,r){"use strict";r.d(t,{D:function(){return y}});var n=r(7294),i=r(8565);let o=["h1","h2","h3","h4","h5","h6"];function getTitleSize(e,t){let r=void 0!==t?t:`h${e}`;return o.includes(r)?{fontSize:`var(--mantine-${r}-font-size)`,fontWeight:`var(--mantine-${r}-font-weight)`,lineHeight:`var(--mantine-${r}-line-height)`}:{fontSize:(0,i.h)(r),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var l={root:"m-8a5d1357"},a=r(9535),s=r(987),c=r(9581),u=r(7731),f=r(3637),d=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&__defNormalProp(e,r,t[r]);if(p)for(var r of p(t))g.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>h(e,m(t)),__objRest=(e,t)=>{var r={};for(var n in e)_.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))0>t.indexOf(n)&&g.call(e,n)&&(r[n]=e[n]);return r};let v={order:1},b=(0,f.Z)((e,{order:t,size:r})=>{let n=getTitleSize(t,r);return{root:{"--title-fw":n.fontWeight,"--title-lh":n.lineHeight,"--title-fz":n.fontSize}}}),y=(0,a.d)((e,t)=>{let r=(0,s.w)("Title",v,e),{classNames:i,className:o,style:a,styles:f,unstyled:d,order:h,vars:m,size:p,variant:_}=r,g=__objRest(r,["classNames","className","style","styles","unstyled","order","vars","size","variant"]),y=(0,c.y)({name:"Title",props:r,classes:l,className:o,style:a,classNames:i,styles:f,unstyled:d,vars:m,varsResolver:b});return[1,2,3,4,5,6].includes(h)?n.createElement(u.x,__spreadValues(__spreadProps(__spreadValues({},y("root")),{component:`h${h}`,variant:_,ref:t,mod:{order:h},size:p}),g)):null});y.classes=l,y.displayName="@mantine/core/Title"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);