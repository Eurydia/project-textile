const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D2sXnh1T.js","assets/useTypesetOnLoad-m8gPT5nn.js","assets/index-DkgBwl6h.js","assets/ImageListItem-ETXEqhhk.js","assets/index-Vud9R5r8.js","assets/_-D3Qc3gPz.js","assets/_-CXUteaoS.js"])))=>i.map(i=>d[i]);
function mS(n,r){for(var l=0;l<r.length;l++){const o=r[l];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in n)){const f=Object.getOwnPropertyDescriptor(o,u);f&&Object.defineProperty(n,u,f.get?f:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function Ny(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lf={exports:{}},il={};var _g;function hS(){if(_g)return il;_g=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:n,type:o,key:d,ref:u!==void 0?u:null,props:f}}return il.Fragment=r,il.jsx=l,il.jsxs=l,il}var wg;function pS(){return wg||(wg=1,lf.exports=hS()),lf.exports}var Z=pS();const Bf=new WeakMap,gS=new WeakMap,ps={current:[]};let of=!1,hl=0;const fl=new Set,Io=new Map;function Uy(n){for(const r of n){if(ps.current.includes(r))continue;ps.current.push(r),r.recompute();const l=gS.get(r);if(l)for(const o of l){const u=Bf.get(o);u?.length&&Uy(u)}}}function yS(n){const r={prevVal:n.prevState,currentVal:n.state};for(const l of n.listeners)l(r)}function bS(n){const r={prevVal:n.prevState,currentVal:n.state};for(const l of n.listeners)l(r)}function Hy(n){if(hl>0&&!Io.has(n)&&Io.set(n,n.prevState),fl.add(n),!(hl>0)&&!of)try{for(of=!0;fl.size>0;){const r=Array.from(fl);fl.clear();for(const l of r){const o=Io.get(l)??l.prevState;l.prevState=o,yS(l)}for(const l of r){const o=Bf.get(l);o&&(ps.current.push(l),Uy(o))}for(const l of r){const o=Bf.get(l);if(o)for(const u of o)bS(u)}}}finally{of=!1,ps.current=[],Io.clear()}}function pl(n){hl++;try{n()}finally{if(hl--,hl===0){const r=fl.values().next().value;r&&Hy(r)}}}function vS(n){return typeof n=="function"}class SS{constructor(r,l){this.listeners=new Set,this.subscribe=o=>{var u,f;this.listeners.add(o);const d=(f=(u=this.options)==null?void 0:u.onSubscribe)==null?void 0:f.call(u,o,this);return()=>{this.listeners.delete(o),d?.()}},this.prevState=r,this.state=r,this.options=l}setState(r){var l,o,u;this.prevState=this.state,(l=this.options)!=null&&l.updateFn?this.state=this.options.updateFn(this.prevState)(r):vS(r)?this.state=r(this.prevState):this.state=r,(u=(o=this.options)==null?void 0:o.onUpdate)==null||u.call(o),Hy(this)}}const Ta="__TSR_index",Tg="popstate",Ag="beforeunload";function xS(n){let r=n.getLocation();const l=new Set,o=d=>{r=n.getLocation(),l.forEach(m=>m({location:r,action:d}))},u=d=>{n.notifyOnIndexChange??!0?o(d):r=n.getLocation()},f=async({task:d,navigateOpts:m,...g})=>{if(m?.ignoreBlocker??!1){d();return}const v=n.getBlockers?.()??[],y=g.type==="PUSH"||g.type==="REPLACE";if(typeof document<"u"&&v.length&&y)for(const S of v){const C=vl(g.path,g.state);if(await S.blockerFn({currentLocation:r,nextLocation:C,action:g.type})){n.onBlocked?.();return}}d()};return{get location(){return r},get length(){return n.getLength()},subscribers:l,subscribe:d=>(l.add(d),()=>{l.delete(d)}),push:(d,m,g)=>{const p=r.state[Ta];m=Mg(p+1,m),f({task:()=>{n.pushState(d,m),o({type:"PUSH"})},navigateOpts:g,type:"PUSH",path:d,state:m})},replace:(d,m,g)=>{const p=r.state[Ta];m=Mg(p,m),f({task:()=>{n.replaceState(d,m),o({type:"REPLACE"})},navigateOpts:g,type:"REPLACE",path:d,state:m})},go:(d,m)=>{f({task:()=>{n.go(d),u({type:"GO",index:d})},navigateOpts:m,type:"GO"})},back:d=>{f({task:()=>{n.back(d?.ignoreBlocker??!1),u({type:"BACK"})},navigateOpts:d,type:"BACK"})},forward:d=>{f({task:()=>{n.forward(d?.ignoreBlocker??!1),u({type:"FORWARD"})},navigateOpts:d,type:"FORWARD"})},canGoBack:()=>r.state[Ta]!==0,createHref:d=>n.createHref(d),block:d=>{if(!n.setBlockers)return()=>{};const m=n.getBlockers?.()??[];return n.setBlockers([...m,d]),()=>{const g=n.getBlockers?.()??[];n.setBlockers?.(g.filter(p=>p!==d))}},flush:()=>n.flush?.(),destroy:()=>n.destroy?.(),notify:o}}function Mg(n,r){r||(r={});const l=Wf();return{...r,key:l,__TSR_key:l,[Ta]:n}}function Gy(n){const r=n?.window??(typeof document<"u"?window:void 0),l=r.history.pushState,o=r.history.replaceState;let u=[];const f=()=>u,d=H=>u=H,m=n?.createHref??(H=>H),g=n?.parseLocation??(()=>vl(`${r.location.pathname}${r.location.search}${r.location.hash}`,r.history.state));if(!r.history.state?.__TSR_key&&!r.history.state?.key){const H=Wf();r.history.replaceState({[Ta]:0,key:H,__TSR_key:H},"")}let p=g(),v,y=!1,S=!1,C=!1,w=!1;const _=()=>p;let R,L;const G=()=>{R&&(k._ignoreSubscribers=!0,(R.isPush?r.history.pushState:r.history.replaceState)(R.state,"",R.href),k._ignoreSubscribers=!1,R=void 0,L=void 0,v=void 0)},U=(H,Q,ee)=>{const I=m(Q);L||(v=p),p=vl(Q,ee),R={href:I,state:ee,isPush:R?.isPush||H==="push"},L||(L=Promise.resolve().then(()=>G()))},$=H=>{p=g(),k.notify({type:H})},B=async()=>{if(S){S=!1;return}const H=g(),Q=H.state[Ta]-p.state[Ta],ee=Q===1,I=Q===-1,x=!ee&&!I||y;y=!1;const ne=x?"GO":I?"BACK":"FORWARD",F=x?{type:"GO",index:Q}:{type:I?"BACK":"FORWARD"};if(C)C=!1;else{const re=f();if(typeof document<"u"&&re.length){for(const q of re)if(await q.blockerFn({currentLocation:p,nextLocation:H,action:ne})){S=!0,r.history.go(1),k.notify(F);return}}}p=g(),k.notify(F)},O=H=>{if(w){w=!1;return}let Q=!1;const ee=f();if(typeof document<"u"&&ee.length)for(const I of ee){const x=I.enableBeforeUnload??!0;if(x===!0){Q=!0;break}if(typeof x=="function"&&x()===!0){Q=!0;break}}if(Q)return H.preventDefault(),H.returnValue=""},k=xS({getLocation:_,getLength:()=>r.history.length,pushState:(H,Q)=>U("push",H,Q),replaceState:(H,Q)=>U("replace",H,Q),back:H=>(H&&(C=!0),w=!0,r.history.back()),forward:H=>{H&&(C=!0),w=!0,r.history.forward()},go:H=>{y=!0,r.history.go(H)},createHref:H=>m(H),flush:G,destroy:()=>{r.history.pushState=l,r.history.replaceState=o,r.removeEventListener(Ag,O,{capture:!0}),r.removeEventListener(Tg,B)},onBlocked:()=>{v&&p!==v&&(p=v)},getBlockers:f,setBlockers:d,notifyOnIndexChange:!1});return r.addEventListener(Ag,O,{capture:!0}),r.addEventListener(Tg,B),r.history.pushState=function(...H){const Q=l.apply(r.history,H);return k._ignoreSubscribers||$("PUSH"),Q},r.history.replaceState=function(...H){const Q=o.apply(r.history,H);return k._ignoreSubscribers||$("REPLACE"),Q},k}function CS(n){const r=typeof document<"u"?window:void 0;return Gy({window:r,parseLocation:()=>{const l=r.location.hash.split("#").slice(1),o=l[0]??"/",u=r.location.search,f=l.slice(1),d=f.length===0?"":`#${f.join("#")}`,m=`${o}${u}${d}`;return vl(m,r.history.state)},createHref:l=>`${r.location.pathname}${r.location.search}#${l}`})}function vl(n,r){const l=n.indexOf("#"),o=n.indexOf("?"),u=Wf();return{href:n,pathname:n.substring(0,l>0?o>0?Math.min(l,o):l:o>0?o:n.length),hash:l>-1?n.substring(l):"",search:o>-1?n.slice(o,l===-1?void 0:l):"",state:r||{[Ta]:0,key:u,__TSR_key:u}}}function Wf(){return(Math.random()+1).toString(36).substring(7)}function gs(n){return n[n.length-1]}function _S(n){return typeof n=="function"}function _a(n,r){return _S(n)?n(r):n}const wS=Object.prototype.hasOwnProperty;function rn(n,r){if(n===r)return n;const l=r,o=Og(n)&&Og(l);if(!o&&!(ys(n)&&ys(l)))return l;const u=o?n:Rg(n);if(!u)return l;const f=o?l:Rg(l);if(!f)return l;const d=u.length,m=f.length,g=o?new Array(m):{};let p=0;for(let v=0;v<m;v++){const y=o?v:f[v],S=n[y],C=l[y];if(S===C){g[y]=S,(o?v<d:wS.call(n,y))&&p++;continue}if(S===null||C===null||typeof S!="object"||typeof C!="object"){g[y]=C;continue}const w=rn(S,C);g[y]=w,w===S&&p++}return d===m&&p===d?n:g}function Rg(n){const r=[],l=Object.getOwnPropertyNames(n);for(const u of l){if(!Object.prototype.propertyIsEnumerable.call(n,u))return!1;r.push(u)}const o=Object.getOwnPropertySymbols(n);for(const u of o){if(!Object.prototype.propertyIsEnumerable.call(n,u))return!1;r.push(u)}return r}function ys(n){if(!Eg(n))return!1;const r=n.constructor;if(typeof r>"u")return!0;const l=r.prototype;return!(!Eg(l)||!l.hasOwnProperty("isPrototypeOf"))}function Eg(n){return Object.prototype.toString.call(n)==="[object Object]"}function Og(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Wa(n,r,l){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;for(let o=0,u=n.length;o<u;o++)if(!Wa(n[o],r[o],l))return!1;return!0}if(ys(n)&&ys(r)){const o=l?.ignoreUndefined??!0;if(l?.partial){for(const d in r)if((!o||r[d]!==void 0)&&!Wa(n[d],r[d],l))return!1;return!0}let u=0;if(!o)u=Object.keys(n).length;else for(const d in n)n[d]!==void 0&&u++;let f=0;for(const d in r)if((!o||r[d]!==void 0)&&(f++,f>u||!Wa(n[d],r[d],l)))return!1;return u===f}return!1}function rr(n){let r,l;const o=new Promise((u,f)=>{r=u,l=f});return o.status="pending",o.resolve=u=>{o.status="resolved",o.value=u,r(u),n?.(u)},o.reject=u=>{o.status="rejected",l(u)},o}function TS(n){return typeof n?.message!="string"?!1:n.message.startsWith("Failed to fetch dynamically imported module")||n.message.startsWith("error loading dynamically imported module")||n.message.startsWith("Importing a module script failed")}function Aa(n){return!!(n&&typeof n=="object"&&typeof n.then=="function")}function Lg(n){try{return decodeURI(n)}catch{return n.replaceAll(/%[0-9A-F]{2}/gi,r=>{try{return decodeURI(r)}catch{return r}})}}function zg(n,r){if(!n)return n;const l=/%25|%5C/gi;let o=0,u="",f;for(;(f=l.exec(n))!==null;)u+=Lg(n.slice(o,f.index))+f[0],o=l.lastIndex;return u+Lg(o?n.slice(o):n)}var AS="Invariant failed";function Qn(n,r){if(!n)throw new Error(AS)}function bs(n){const r=new Map;let l,o;const u=f=>{f.next&&(f.prev?(f.prev.next=f.next,f.next.prev=f.prev,f.next=void 0,o&&(o.next=f,f.prev=o)):(f.next.prev=void 0,l=f.next,f.next=void 0,o&&(f.prev=o,o.next=f)),o=f)};return{get(f){const d=r.get(f);if(d)return u(d),d.value},set(f,d){if(r.size>=n&&l){const g=l;r.delete(g.key),g.next&&(l=g.next,g.next.prev=void 0),g===o&&(o=void 0)}const m=r.get(f);if(m)m.value=d,u(m);else{const g={key:f,value:d,prev:o};o&&(o.next=g),o=g,l||(l=g),r.set(f,g)}},clear(){r.clear(),l=void 0,o=void 0}}}const lr=0,ti=1,ni=2,Sl=3,MS=/^([^{]*)\{\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,RS=/^([^{]*)\{-\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,ES=/^([^{]*)\{\$\}([^}]*)$/;function If(n,r,l=new Uint16Array(6)){const o=n.indexOf("/",r),u=o===-1?n.length:o,f=n.substring(r,u);if(!f||!f.includes("$"))return l[0]=lr,l[1]=r,l[2]=r,l[3]=u,l[4]=u,l[5]=u,l;if(f==="$"){const p=n.length;return l[0]=ni,l[1]=r,l[2]=r,l[3]=p,l[4]=p,l[5]=p,l}if(f.charCodeAt(0)===36)return l[0]=ti,l[1]=r,l[2]=r+1,l[3]=u,l[4]=u,l[5]=u,l;const d=f.match(ES);if(d){const v=d[1].length;return l[0]=ni,l[1]=r+v,l[2]=r+v+1,l[3]=r+v+2,l[4]=r+v+3,l[5]=n.length,l}const m=f.match(RS);if(m){const p=m[1],v=m[2],y=m[3],S=p.length;return l[0]=Sl,l[1]=r+S,l[2]=r+S+3,l[3]=r+S+3+v.length,l[4]=u-y.length,l[5]=u,l}const g=f.match(MS);if(g){const p=g[1],v=g[2],y=g[3],S=p.length;return l[0]=ti,l[1]=r+S,l[2]=r+S+2,l[3]=r+S+2+v.length,l[4]=u-y.length,l[5]=u,l}return l[0]=lr,l[1]=r,l[2]=r,l[3]=u,l[4]=u,l[5]=u,l}function Ms(n,r,l,o,u,f,d){d?.(l);let m=o;{const g=l.fullPath??l.from,p=g.length,v=l.options?.caseSensitive??n;for(;m<p;){const y=If(g,m,r);let S;const C=m,w=y[5];switch(m=w+1,f++,y[0]){case lr:{const R=g.substring(y[2],y[3]);if(v){const L=u.static?.get(R);if(L)S=L;else{u.static??=new Map;const G=xl(l.fullPath??l.from);G.parent=u,G.depth=f,S=G,u.static.set(R,G)}}else{const L=R.toLowerCase(),G=u.staticInsensitive?.get(L);if(G)S=G;else{u.staticInsensitive??=new Map;const U=xl(l.fullPath??l.from);U.parent=u,U.depth=f,S=U,u.staticInsensitive.set(L,U)}}break}case ti:{const R=g.substring(C,y[1]),L=g.substring(y[4],w),G=v&&!!(R||L),U=R?G?R:R.toLowerCase():void 0,$=L?G?L:L.toLowerCase():void 0,B=u.dynamic?.find(O=>O.caseSensitive===G&&O.prefix===U&&O.suffix===$);if(B)S=B;else{const O=uf(ti,l.fullPath??l.from,G,U,$);S=O,O.depth=f,O.parent=u,u.dynamic??=[],u.dynamic.push(O)}break}case Sl:{const R=g.substring(C,y[1]),L=g.substring(y[4],w),G=v&&!!(R||L),U=R?G?R:R.toLowerCase():void 0,$=L?G?L:L.toLowerCase():void 0,B=u.optional?.find(O=>O.caseSensitive===G&&O.prefix===U&&O.suffix===$);if(B)S=B;else{const O=uf(Sl,l.fullPath??l.from,G,U,$);S=O,O.parent=u,O.depth=f,u.optional??=[],u.optional.push(O)}break}case ni:{const R=g.substring(C,y[1]),L=g.substring(y[4],w),G=v&&!!(R||L),U=R?G?R:R.toLowerCase():void 0,$=L?G?L:L.toLowerCase():void 0,B=uf(ni,l.fullPath??l.from,G,U,$);S=B,B.parent=u,B.depth=f,u.wildcard??=[],u.wildcard.push(B)}}u=S}if((l.path||!l.children)&&!l.isRoot){const y=g.endsWith("/");y||(u.notFound=l),(!u.route||!u.isIndex&&y)&&(u.route=l,u.fullPath=l.fullPath??l.from),u.isIndex||=y}}if(l.children)for(const g of l.children)Ms(n,r,g,m,u,f,d)}function sf(n,r){if(n.prefix&&r.prefix&&n.prefix!==r.prefix){if(n.prefix.startsWith(r.prefix))return-1;if(r.prefix.startsWith(n.prefix))return 1}if(n.suffix&&r.suffix&&n.suffix!==r.suffix){if(n.suffix.endsWith(r.suffix))return-1;if(r.suffix.endsWith(n.suffix))return 1}return n.prefix&&!r.prefix?-1:!n.prefix&&r.prefix?1:n.suffix&&!r.suffix?-1:!n.suffix&&r.suffix?1:n.caseSensitive&&!r.caseSensitive?-1:!n.caseSensitive&&r.caseSensitive?1:0}function Za(n){if(n.static)for(const r of n.static.values())Za(r);if(n.staticInsensitive)for(const r of n.staticInsensitive.values())Za(r);if(n.dynamic?.length){n.dynamic.sort(sf);for(const r of n.dynamic)Za(r)}if(n.optional?.length){n.optional.sort(sf);for(const r of n.optional)Za(r)}if(n.wildcard?.length){n.wildcard.sort(sf);for(const r of n.wildcard)Za(r)}}function xl(n){return{kind:lr,depth:0,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:n,parent:null,isIndex:!1,notFound:null}}function uf(n,r,l,o,u){return{kind:n,depth:0,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:r,parent:null,isIndex:!1,notFound:null,caseSensitive:l,prefix:o,suffix:u}}function OS(n,r){const l=xl("/"),o=new Uint16Array(6);for(const u of n)Ms(!1,o,u,1,l,0);Za(l),r.masksTree=l,r.flatCache=bs(1e3)}function LS(n,r){n||="/";const l=r.flatCache.get(n);if(l)return l;const o=ed(n,r.masksTree);return r.flatCache.set(n,o),o}function zS(n,r,l,o,u){n||="/",o||="/";const f=r?`case\0${n}`:n;let d=u.singleCache.get(f);if(!d){d=xl("/");const m=new Uint16Array(6);Ms(r,m,{from:n},1,d,0),u.singleCache.set(f,d)}return ed(o,d,l)}function DS(n,r,l=!1){const o=l?n:`nofuzz\0${n}`,u=r.matchCache.get(o);if(u!==void 0)return u;n||="/";const f=ed(n,r.segmentTree,l);return f&&(f.branch=jS(f.route)),r.matchCache.set(o,f),f}function kS(n){return n==="/"?n:n.replace(/\/{1,}$/,"")}function qS(n,r=!1,l){const o=xl(n.fullPath),u=new Uint16Array(6),f={},d={};let m=0;return Ms(r,u,n,1,o,0,p=>{if(l?.(p,m),Qn(!(p.id in f),`Duplicate routes found with id: ${String(p.id)}`),f[p.id]=p,m!==0&&p.path){const v=kS(p.fullPath);(!d[v]||p.fullPath.endsWith("/"))&&(d[v]=p)}m++}),Za(o),{processedTree:{segmentTree:o,singleCache:bs(1e3),matchCache:bs(1e3),flatCache:null,masksTree:null},routesById:f,routesByPath:d}}function ed(n,r,l=!1){const o=n.split("/"),u=US(n,o,r,l);if(!u)return null;const f=BS(n,o,u),d="**"in u;return d&&(f["**"]=u["**"]),{route:d?u.node.notFound??u.node.route:u.node.route,params:f}}function BS(n,r,l){const o=NS(l.node);let u=null;const f={};for(let d=0,m=0,g=0;m<o.length;d++,m++,g++){const p=o[m],v=r[d],y=g;if(v&&(g+=v.length),p.kind===ti){u??=l.node.fullPath.split("/");const S=u[m],C=p.prefix?.length??0;if(S.charCodeAt(C)===123){const _=p.suffix?.length??0,R=S.substring(C+2,S.length-_-1),L=v.substring(C,v.length-_);f[R]=decodeURIComponent(L)}else{const _=S.substring(1);f[_]=decodeURIComponent(v)}}else if(p.kind===Sl){if(l.skipped&1<<m){d--;continue}u??=l.node.fullPath.split("/");const S=u[m],C=p.prefix?.length??0,w=p.suffix?.length??0,_=S.substring(C+3,S.length-w-1),R=p.suffix||p.prefix?v.substring(C,v.length-w):v;R&&(f[_]=decodeURIComponent(R))}else if(p.kind===ni){const S=p,C=n.substring(y+(S.prefix?.length??0),n.length-(S.suffix?.length??0)),w=decodeURIComponent(C);f["*"]=w,f._splat=w;break}}return f}function jS(n){const r=[n];for(;n.parentRoute;)n=n.parentRoute,r.push(n);return r.reverse(),r}function NS(n){const r=Array(n.depth+1);do r[n.depth]=n,n=n.parent;while(n);return r}function US(n,r,l,o){const u=!gs(r),f=u&&n!=="/",d=r.length-(u?1:0),m=[{node:l,index:1,skipped:0,depth:1,statics:1,dynamics:0,optionals:0}];let g=null,p=null,v=null;for(;m.length;){const y=m.pop();let{node:S,index:C,skipped:w,depth:_,statics:R,dynamics:L,optionals:G}=y;o&&S.notFound&&es(p,y)&&(p=y);const U=C===d;if(U){if(S.route&&(!f||S.isIndex)&&(es(v,y)&&(v=y),R===d&&S.isIndex))return v;if(!S.optional&&!S.wildcard)continue}const $=U?void 0:r[C];let B;if(S.wildcard&&es(g,y))for(const O of S.wildcard){const{prefix:k,suffix:H}=O;if(!(k&&(U||!(O.caseSensitive?$:B??=$.toLowerCase()).startsWith(k)))){if(H){if(U)continue;const Q=r.slice(C).join("/").slice(-H.length);if((O.caseSensitive?Q:Q.toLowerCase())!==H)continue}g={node:O,index:C,skipped:w,depth:_,statics:R,dynamics:L,optionals:G};break}}if(S.optional){const O=w|1<<_,k=_+1;for(let H=S.optional.length-1;H>=0;H--){const Q=S.optional[H];m.push({node:Q,index:C,skipped:O,depth:k,statics:R,dynamics:L,optionals:G})}if(!U)for(let H=S.optional.length-1;H>=0;H--){const Q=S.optional[H],{prefix:ee,suffix:I}=Q;if(ee||I){const x=Q.caseSensitive?$:B??=$.toLowerCase();if(ee&&!x.startsWith(ee)||I&&!x.endsWith(I))continue}m.push({node:Q,index:C+1,skipped:w,depth:k,statics:R,dynamics:L,optionals:G+1})}}if(!U&&S.dynamic&&$)for(let O=S.dynamic.length-1;O>=0;O--){const k=S.dynamic[O],{prefix:H,suffix:Q}=k;if(H||Q){const ee=k.caseSensitive?$:B??=$.toLowerCase();if(H&&!ee.startsWith(H)||Q&&!ee.endsWith(Q))continue}m.push({node:k,index:C+1,skipped:w,depth:_+1,statics:R,dynamics:L+1,optionals:G})}if(!U&&S.staticInsensitive){const O=S.staticInsensitive.get(B??=$.toLowerCase());O&&m.push({node:O,index:C+1,skipped:w,depth:_+1,statics:R+1,dynamics:L,optionals:G})}if(!U&&S.static){const O=S.static.get($);O&&m.push({node:O,index:C+1,skipped:w,depth:_+1,statics:R+1,dynamics:L,optionals:G})}}if(v&&g)return es(g,v)?v:g;if(v)return v;if(g)return g;if(o&&p){let y=p.index;for(let C=0;C<p.index;C++)y+=r[C].length;const S=y===n.length?"/":n.slice(y);return{node:p.node,skipped:p.skipped,"**":decodeURIComponent(S)}}return null}function es(n,r){return n?r.statics>n.statics||r.statics===n.statics&&(r.dynamics>n.dynamics||r.dynamics===n.dynamics&&(r.optionals>n.optionals||r.optionals===n.optionals&&(r.node.isIndex>n.node.isIndex||r.node.isIndex===n.node.isIndex&&r.depth>n.depth))):!0}function os(n){return td(n.filter(r=>r!==void 0).join("/"))}function td(n){return n.replace(/\/{2,}/g,"/")}function $y(n){return n==="/"?n:n.replace(/^\/{1,}/,"")}function Ia(n){const r=n.length;return r>1&&n[r-1]==="/"?n.replace(/\/{1,}$/,""):n}function ss(n){return Ia($y(n))}function vs(n,r){return n?.endsWith("/")&&n!=="/"&&n!==`${r}/`?n.slice(0,-1):n}function HS(n,r,l){return vs(n,l)===vs(r,l)}function GS({base:n,to:r,trailingSlash:l="never",cache:o}){const u=r.startsWith("/"),f=!u&&r===".";let d;if(o){d=u?r:f?n:n+"\0"+r;const y=o.get(d);if(y)return y}let m;if(f)m=n.split("/");else if(u)m=r.split("/");else{for(m=n.split("/");m.length>1&&gs(m)==="";)m.pop();const y=r.split("/");for(let S=0,C=y.length;S<C;S++){const w=y[S];w===""?S?S===C-1&&m.push(w):m=[w]:w===".."?m.pop():w==="."||m.push(w)}}m.length>1&&(gs(m)===""?l==="never"&&m.pop():l==="always"&&m.push(""));let g,p="";for(let y=0;y<m.length;y++){y>0&&(p+="/");const S=m[y];if(!S)continue;g=If(S,0,g);const C=g[0];if(C===lr){p+=S;continue}const w=g[5],_=S.substring(0,g[1]),R=S.substring(g[4],w),L=S.substring(g[2],g[3]);C===ti?p+=_||R?`${_}{$${L}}${R}`:`$${L}`:C===ni?p+=_||R?`${_}{$}${R}`:"$":p+=`${_}{-$${L}}${R}`}p=td(p);const v=p||"/";return d&&o&&o.set(d,v),v}function cf(n,r,l){const o=r[n];return typeof o!="string"?o:n==="_splat"?encodeURI(o):$S(o,l)}function ff({path:n,params:r,decodeCharMap:l}){let o=!1;const u={};if(!n||n==="/")return{interpolatedPath:"/",usedParams:u,isMissingParams:o};if(!n.includes("$"))return{interpolatedPath:n,usedParams:u,isMissingParams:o};const f=n.length;let d=0,m,g="";for(;d<f;){const v=d;m=If(n,v,m);const y=m[5];if(d=y+1,v===y)continue;const S=m[0];if(S===lr){g+="/"+n.substring(v,y);continue}if(S===ni){const C=r._splat;u._splat=C,u["*"]=C;const w=n.substring(v,m[1]),_=n.substring(m[4],y);if(!C){o=!0,(w||_)&&(g+="/"+w+_);continue}const R=cf("_splat",r,l);g+="/"+w+R+_;continue}if(S===ti){const C=n.substring(m[2],m[3]);!o&&!(C in r)&&(o=!0),u[C]=r[C];const w=n.substring(v,m[1]),_=n.substring(m[4],y),R=cf(C,r,l)??"undefined";g+="/"+w+R+_;continue}if(S===Sl){const C=n.substring(m[2],m[3]),w=r[C];if(w==null)continue;u[C]=w;const _=n.substring(v,m[1]),R=n.substring(m[4],y),L=cf(C,r,l)??"";g+="/"+_+L+R;continue}}return n.endsWith("/")&&(g+="/"),{usedParams:u,interpolatedPath:g||"/",isMissingParams:o}}function $S(n,r){let l=encodeURIComponent(n);if(r)for(const[o,u]of r)l=l.replaceAll(o,u);return l}function on(n){return!!n?.isNotFound}function VS(){try{if(typeof window<"u"&&typeof window.sessionStorage=="object")return window.sessionStorage}catch{}}const Ss="tsr-scroll-restoration-v1_3",YS=(n,r)=>{let l;return(...o)=>{l||(l=setTimeout(()=>{n(...o),l=null},r))}};function PS(){const n=VS();if(!n)return null;const r=n.getItem(Ss);let l=r?JSON.parse(r):{};return{state:l,set:o=>(l=_a(o,l)||l,n.setItem(Ss,JSON.stringify(l)))}}const ts=PS(),jf=n=>n.state.__TSR_key||n.href;function XS(n){const r=[];let l;for(;l=n.parentNode;)r.push(`${n.tagName}:nth-child(${Array.prototype.indexOf.call(l.children,n)+1})`),n=l;return`${r.reverse().join(" > ")}`.toLowerCase()}let xs=!1;function Vy({storageKey:n,key:r,behavior:l,shouldScrollRestoration:o,scrollToTopSelectors:u,location:f}){let d;try{d=JSON.parse(sessionStorage.getItem(n)||"{}")}catch(p){console.error(p);return}const m=r||window.history.state?.__TSR_key,g=d[m];xs=!0;e:{if(o&&g&&Object.keys(g).length>0){for(const y in g){const S=g[y];if(y==="window")window.scrollTo({top:S.scrollY,left:S.scrollX,behavior:l});else if(y){const C=document.querySelector(y);C&&(C.scrollLeft=S.scrollX,C.scrollTop=S.scrollY)}}break e}const p=(f??window.location).hash.split("#",2)[1];if(p){const y=window.history.state?.__hashScrollIntoViewOptions??!0;if(y){const S=document.getElementById(p);S&&S.scrollIntoView(y)}break e}const v={top:0,left:0,behavior:l};if(window.scrollTo(v),u)for(const y of u){if(y==="window")continue;const S=typeof y=="function"?y():document.querySelector(y);S&&S.scrollTo(v)}}xs=!1}function JS(n,r){if(!ts&&!n.isServer||((n.options.scrollRestoration??!1)&&(n.isScrollRestoring=!0),n.isServer||n.isScrollRestorationSetup||!ts))return;n.isScrollRestorationSetup=!0,xs=!1;const o=n.options.getScrollRestorationKey||jf;window.history.scrollRestoration="manual";const u=f=>{if(xs||!n.isScrollRestoring)return;let d="";if(f.target===document||f.target===window)d="window";else{const g=f.target.getAttribute("data-scroll-restoration-id");g?d=`[data-scroll-restoration-id="${g}"]`:d=XS(f.target)}const m=o(n.state.location);ts.set(g=>{const p=g[m]||={},v=p[d]||={};if(d==="window")v.scrollX=window.scrollX||0,v.scrollY=window.scrollY||0;else if(d){const y=document.querySelector(d);y&&(v.scrollX=y.scrollLeft||0,v.scrollY=y.scrollTop||0)}return g})};typeof document<"u"&&document.addEventListener("scroll",YS(u,100),!0),n.subscribe("onRendered",f=>{const d=o(f.toLocation);if(!n.resetNextScroll){n.resetNextScroll=!0;return}typeof n.options.scrollRestoration=="function"&&!n.options.scrollRestoration({location:n.latestLocation})||(Vy({storageKey:Ss,key:d,behavior:n.options.scrollRestorationBehavior,shouldScrollRestoration:n.isScrollRestoring,scrollToTopSelectors:n.options.scrollToTopSelectors,location:n.history.location}),n.isScrollRestoring&&ts.set(m=>(m[d]||={},m)))})}function KS(n){if(typeof document<"u"&&document.querySelector){const r=n.state.location.state.__hashScrollIntoViewOptions??!0;if(r&&n.state.location.hash!==""){const l=document.getElementById(n.state.location.hash);l&&l.scrollIntoView(r)}}}function QS(n,r=String){const l=new URLSearchParams;for(const o in n){const u=n[o];u!==void 0&&l.set(o,r(u))}return l.toString()}function df(n){return n?n==="false"?!1:n==="true"?!0:+n*0===0&&+n+""===n?+n:n:""}function ZS(n){const r=new URLSearchParams(n),l={};for(const[o,u]of r.entries()){const f=l[o];f==null?l[o]=df(u):Array.isArray(f)?f.push(df(u)):l[o]=[f,df(u)]}return l}const FS=IS(JSON.parse),WS=e1(JSON.stringify,JSON.parse);function IS(n){return r=>{r[0]==="?"&&(r=r.substring(1));const l=ZS(r);for(const o in l){const u=l[o];if(typeof u=="string")try{l[o]=n(u)}catch{}}return l}}function e1(n,r){const l=typeof r=="function";function o(u){if(typeof u=="object"&&u!==null)try{return n(u)}catch{}else if(l&&typeof u=="string")try{return r(u),n(u)}catch{}return u}return u=>{const f=QS(u,o);return f?`?${f}`:""}}const Vt="__root__";function t1(n){if(n.statusCode=n.statusCode||n.code||307,!n.reloadDocument&&typeof n.href=="string")try{new URL(n.href),n.reloadDocument=!0}catch{}const r=new Headers(n.headers);n.href&&r.get("Location")===null&&r.set("Location",n.href);const l=new Response(null,{status:n.statusCode,headers:r});if(l.options=n,n.throw)throw l;return l}function mn(n){return n instanceof Response&&!!n.options}const us=n=>{if(!n.rendered)return n.rendered=!0,n.onReady?.()},Rs=(n,r)=>!!(n.preload&&!n.router.state.matches.some(l=>l.id===r)),Yy=(n,r)=>{const l=n.router.routesById[r.routeId??""]??n.router.routeTree;!l.options.notFoundComponent&&n.router.options?.defaultNotFoundComponent&&(l.options.notFoundComponent=n.router.options.defaultNotFoundComponent),Qn(l.options.notFoundComponent);const o=n.matches.find(u=>u.routeId===l.id);Qn(o,"Could not find match for route: "+l.id),n.updateMatch(o.id,u=>({...u,status:"notFound",error:r,isFetching:!1})),r.routerCode==="BEFORE_LOAD"&&l.parentRoute&&(r.routeId=l.parentRoute.id,Yy(n,r))},wa=(n,r,l)=>{if(!(!mn(l)&&!on(l))){if(mn(l)&&l.redirectHandled&&!l.options.reloadDocument)throw l;if(r){r._nonReactive.beforeLoadPromise?.resolve(),r._nonReactive.loaderPromise?.resolve(),r._nonReactive.beforeLoadPromise=void 0,r._nonReactive.loaderPromise=void 0;const o=mn(l)?"redirected":"notFound";r._nonReactive.error=l,n.updateMatch(r.id,u=>({...u,status:o,isFetching:!1,error:l})),on(l)&&!l.routeId&&(l.routeId=r.routeId),r._nonReactive.loadPromise?.resolve()}throw mn(l)?(n.rendered=!0,l.options._fromLocation=n.location,l.redirectHandled=!0,l=n.router.resolveRedirect(l),l):(Yy(n,l),l)}},Py=(n,r)=>{const l=n.router.getMatch(r);return!!(!n.router.isServer&&l._nonReactive.dehydrated||n.router.isServer&&l.ssr===!1)},rl=(n,r,l,o)=>{const{id:u,routeId:f}=n.matches[r],d=n.router.looseRoutesById[f];if(l instanceof Promise)throw l;l.routerCode=o,n.firstBadMatchIndex??=r,wa(n,n.router.getMatch(u),l);try{d.options.onError?.(l)}catch(m){l=m,wa(n,n.router.getMatch(u),l)}n.updateMatch(u,m=>(m._nonReactive.beforeLoadPromise?.resolve(),m._nonReactive.beforeLoadPromise=void 0,m._nonReactive.loadPromise?.resolve(),{...m,error:l,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController}))},n1=(n,r,l,o)=>{const u=n.router.getMatch(r),f=n.matches[l-1]?.id,d=f?n.router.getMatch(f):void 0;if(n.router.isShell()){u.ssr=o.id===Vt;return}if(d?.ssr===!1){u.ssr=!1;return}const m=C=>C===!0&&d?.ssr==="data-only"?"data-only":C,g=n.router.options.defaultSsr??!0;if(o.options.ssr===void 0){u.ssr=m(g);return}if(typeof o.options.ssr!="function"){u.ssr=m(o.options.ssr);return}const{search:p,params:v}=u,y={search:ns(p,u.searchError),params:ns(v,u.paramsError),location:n.location,matches:n.matches.map(C=>({index:C.index,pathname:C.pathname,fullPath:C.fullPath,staticData:C.staticData,id:C.id,routeId:C.routeId,search:ns(C.search,C.searchError),params:ns(C.params,C.paramsError),ssr:C.ssr}))},S=o.options.ssr(y);if(Aa(S))return S.then(C=>{u.ssr=m(C??g)});u.ssr=m(S??g)},Xy=(n,r,l,o)=>{if(o._nonReactive.pendingTimeout!==void 0)return;const u=l.options.pendingMs??n.router.options.defaultPendingMs;if(!!(n.onReady&&!n.router.isServer&&!Rs(n,r)&&(l.options.loader||l.options.beforeLoad||Qy(l))&&typeof u=="number"&&u!==1/0&&(l.options.pendingComponent??n.router.options?.defaultPendingComponent))){const d=setTimeout(()=>{us(n)},u);o._nonReactive.pendingTimeout=d}},a1=(n,r,l)=>{const o=n.router.getMatch(r);if(!o._nonReactive.beforeLoadPromise&&!o._nonReactive.loaderPromise)return;Xy(n,r,l,o);const u=()=>{const f=n.router.getMatch(r);f.preload&&(f.status==="redirected"||f.status==="notFound")&&wa(n,f,f.error)};return o._nonReactive.beforeLoadPromise?o._nonReactive.beforeLoadPromise.then(u):u()},i1=(n,r,l,o)=>{const u=n.router.getMatch(r),f=u._nonReactive.loadPromise;u._nonReactive.loadPromise=rr(()=>{f?.resolve()});const{paramsError:d,searchError:m}=u;d&&rl(n,l,d,"PARSE_PARAMS"),m&&rl(n,l,m,"VALIDATE_SEARCH"),Xy(n,r,o,u);const g=new AbortController,p=n.matches[l-1]?.id,S={...(p?n.router.getMatch(p):void 0)?.context??n.router.options.context??void 0,...u.__routeContext};let C=!1;const w=()=>{C||(C=!0,n.updateMatch(r,k=>({...k,isFetching:"beforeLoad",fetchCount:k.fetchCount+1,abortController:g,context:S})))},_=()=>{u._nonReactive.beforeLoadPromise?.resolve(),u._nonReactive.beforeLoadPromise=void 0,n.updateMatch(r,k=>({...k,isFetching:!1}))};if(!o.options.beforeLoad){pl(()=>{w(),_()});return}u._nonReactive.beforeLoadPromise=rr();const{search:R,params:L,cause:G}=u,U=Rs(n,r),$={search:R,abortController:g,params:L,preload:U,context:S,location:n.location,navigate:k=>n.router.navigate({...k,_fromLocation:n.location}),buildLocation:n.router.buildLocation,cause:U?"preload":G,matches:n.matches,...n.router.options.additionalContext},B=k=>{if(k===void 0){pl(()=>{w(),_()});return}(mn(k)||on(k))&&(w(),rl(n,l,k,"BEFORE_LOAD")),pl(()=>{w(),n.updateMatch(r,H=>({...H,__beforeLoadContext:k,context:{...H.context,...k}})),_()})};let O;try{if(O=o.options.beforeLoad($),Aa(O))return w(),O.catch(k=>{rl(n,l,k,"BEFORE_LOAD")}).then(B)}catch(k){w(),rl(n,l,k,"BEFORE_LOAD")}B(O)},r1=(n,r)=>{const{id:l,routeId:o}=n.matches[r],u=n.router.looseRoutesById[o],f=()=>{if(n.router.isServer){const g=n1(n,l,r,u);if(Aa(g))return g.then(m)}return m()},d=()=>i1(n,l,r,u),m=()=>{if(Py(n,l))return;const g=a1(n,l,u);return Aa(g)?g.then(d):d()};return f()},gl=(n,r,l)=>{const o=n.router.getMatch(r);if(!o||!l.options.head&&!l.options.scripts&&!l.options.headers)return;const u={matches:n.matches,match:o,params:o.params,loaderData:o.loaderData};return Promise.all([l.options.head?.(u),l.options.scripts?.(u),l.options.headers?.(u)]).then(([f,d,m])=>{const g=f?.meta,p=f?.links,v=f?.scripts,y=f?.styles;return{meta:g,links:p,headScripts:v,headers:m,scripts:d,styles:y}})},Jy=(n,r,l,o)=>{const u=n.matchPromises[l-1],{params:f,loaderDeps:d,abortController:m,cause:g}=n.router.getMatch(r);let p=n.router.options.context??{};for(let y=0;y<=l;y++){const S=n.matches[y];if(!S)continue;const C=n.router.getMatch(S.id);C&&(p={...p,...C.__routeContext??{},...C.__beforeLoadContext??{}})}const v=Rs(n,r);return{params:f,deps:d,preload:!!v,parentMatchPromise:u,abortController:m,context:p,location:n.location,navigate:y=>n.router.navigate({...y,_fromLocation:n.location}),cause:v?"preload":g,route:o,...n.router.options.additionalContext}},Dg=async(n,r,l,o)=>{try{const u=n.router.getMatch(r);try{(!n.router.isServer||u.ssr===!0)&&Ky(o);const f=o.options.loader?.(Jy(n,r,l,o)),d=o.options.loader&&Aa(f);if(!!(d||o._lazyPromise||o._componentsPromise||o.options.head||o.options.scripts||o.options.headers||u._nonReactive.minPendingPromise)&&n.updateMatch(r,y=>({...y,isFetching:"loader"})),o.options.loader){const y=d?await f:f;wa(n,n.router.getMatch(r),y),y!==void 0&&n.updateMatch(r,S=>({...S,loaderData:y}))}o._lazyPromise&&await o._lazyPromise;const g=gl(n,r,o),p=g?await g:void 0,v=u._nonReactive.minPendingPromise;v&&await v,o._componentsPromise&&await o._componentsPromise,n.updateMatch(r,y=>({...y,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),...p}))}catch(f){let d=f;const m=u._nonReactive.minPendingPromise;m&&await m,on(f)&&await o.options.notFoundComponent?.preload?.(),wa(n,n.router.getMatch(r),f);try{o.options.onError?.(f)}catch(v){d=v,wa(n,n.router.getMatch(r),v)}const g=gl(n,r,o),p=g?await g:void 0;n.updateMatch(r,v=>({...v,error:d,status:"error",isFetching:!1,...p}))}}catch(u){const f=n.router.getMatch(r);if(f){const d=gl(n,r,o);if(d){const m=await d;n.updateMatch(r,g=>({...g,...m}))}f._nonReactive.loaderPromise=void 0}wa(n,f,u)}},l1=async(n,r)=>{const{id:l,routeId:o}=n.matches[r];let u=!1,f=!1;const d=n.router.looseRoutesById[o];if(Py(n,l)){if(n.router.isServer){const p=gl(n,l,d);if(p){const v=await p;n.updateMatch(l,y=>({...y,...v}))}return n.router.getMatch(l)}}else{const p=n.router.getMatch(l);if(p._nonReactive.loaderPromise){if(p.status==="success"&&!n.sync&&!p.preload)return p;await p._nonReactive.loaderPromise;const v=n.router.getMatch(l),y=v._nonReactive.error||v.error;y&&wa(n,v,y)}else{const v=Date.now()-p.updatedAt,y=Rs(n,l),S=y?d.options.preloadStaleTime??n.router.options.defaultPreloadStaleTime??3e4:d.options.staleTime??n.router.options.defaultStaleTime??0,C=d.options.shouldReload,w=typeof C=="function"?C(Jy(n,l,r,d)):C,_=!!y&&!n.router.state.matches.some(U=>U.id===l),R=n.router.getMatch(l);R._nonReactive.loaderPromise=rr(),_!==R.preload&&n.updateMatch(l,U=>({...U,preload:_}));const{status:L,invalid:G}=R;if(u=L==="success"&&(G||(w??v>S)),!(y&&d.options.preload===!1))if(u&&!n.sync)f=!0,(async()=>{try{await Dg(n,l,r,d);const U=n.router.getMatch(l);U._nonReactive.loaderPromise?.resolve(),U._nonReactive.loadPromise?.resolve(),U._nonReactive.loaderPromise=void 0}catch(U){mn(U)&&await n.router.navigate(U.options)}})();else if(L!=="success"||u&&n.sync)await Dg(n,l,r,d);else{const U=gl(n,l,d);if(U){const $=await U;n.updateMatch(l,B=>({...B,...$}))}}}}const m=n.router.getMatch(l);f||(m._nonReactive.loaderPromise?.resolve(),m._nonReactive.loadPromise?.resolve()),clearTimeout(m._nonReactive.pendingTimeout),m._nonReactive.pendingTimeout=void 0,f||(m._nonReactive.loaderPromise=void 0),m._nonReactive.dehydrated=void 0;const g=f?m.isFetching:!1;return g!==m.isFetching||m.invalid!==!1?(n.updateMatch(l,p=>({...p,isFetching:g,invalid:!1})),n.router.getMatch(l)):m};async function kg(n){const r=Object.assign(n,{matchPromises:[]});!r.router.isServer&&r.router.state.matches.some(l=>l._forcePending)&&us(r);try{for(let u=0;u<r.matches.length;u++){const f=r1(r,u);Aa(f)&&await f}const l=r.firstBadMatchIndex??r.matches.length;for(let u=0;u<l;u++)r.matchPromises.push(l1(r,u));await Promise.all(r.matchPromises);const o=us(r);Aa(o)&&await o}catch(l){if(on(l)&&!r.preload){const o=us(r);throw Aa(o)&&await o,l}if(mn(l))throw l}return r.matches}async function Ky(n){if(!n._lazyLoaded&&n._lazyPromise===void 0&&(n.lazyFn?n._lazyPromise=n.lazyFn().then(r=>{const{id:l,...o}=r.options;Object.assign(n.options,o),n._lazyLoaded=!0,n._lazyPromise=void 0}):n._lazyLoaded=!0),!n._componentsLoaded&&n._componentsPromise===void 0){const r=()=>{const l=[];for(const o of Zy){const u=n.options[o]?.preload;u&&l.push(u())}if(l.length)return Promise.all(l).then(()=>{n._componentsLoaded=!0,n._componentsPromise=void 0});n._componentsLoaded=!0,n._componentsPromise=void 0};n._componentsPromise=n._lazyPromise?n._lazyPromise.then(r):r()}return n._componentsPromise}function ns(n,r){return r?{status:"error",error:r}:{status:"success",value:n}}function Qy(n){for(const r of Zy)if(n.options[r]?.preload)return!0;return!1}const Zy=["component","errorComponent","pendingComponent","notFoundComponent"];function o1(n){return{input:({url:r})=>{for(const l of n)r=Fy(l,r);return r},output:({url:r})=>{for(let l=n.length-1;l>=0;l--)r=Wy(n[l],r);return r}}}function s1(n){const r=ss(n.basepath),l=`/${r}`,o=`${l}/`,u=n.caseSensitive?l:l.toLowerCase(),f=n.caseSensitive?o:o.toLowerCase();return{input:({url:d})=>{const m=n.caseSensitive?d.pathname:d.pathname.toLowerCase();return m===u?d.pathname="/":m.startsWith(f)&&(d.pathname=d.pathname.slice(l.length)),d},output:({url:d})=>(d.pathname=os(["/",r,d.pathname]),d)}}function Fy(n,r){const l=n?.input?.({url:r});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return r}function Wy(n,r){const l=n?.output?.({url:r});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return r}function ei(n){const r=n.resolvedLocation,l=n.location,o=r?.pathname!==l.pathname,u=r?.href!==l.href,f=r?.hash!==l.hash;return{fromLocation:r,toLocation:l,pathChanged:o,hrefChanged:u,hashChanged:f}}class u1{constructor(r){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=l=>l(),this.update=l=>{l.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");const o=this.options,u=this.basepath??o?.basepath??"/",f=this.basepath===void 0,d=o?.rewrite;this.options={...o,...l},this.isServer=this.options.isServer??typeof document>"u",this.pathParamsDecodeCharMap=this.options.pathParamsAllowedCharacters?new Map(this.options.pathParamsAllowedCharacters.map(S=>[encodeURIComponent(S),S])):void 0,(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.isServer||(this.history=Gy())),this.origin=this.options.origin,this.origin||(!this.isServer&&window?.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),!this.__store&&this.latestLocation&&(this.__store=new SS(f1(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(S=>!["redirected"].includes(S.status))}}}),JS(this));let m=!1;const g=this.options.basepath??"/",p=this.options.rewrite;if(f||u!==g||d!==p){this.basepath=g;const S=[];ss(g)!==""&&S.push(s1({basepath:g})),p&&S.push(p),this.rewrite=S.length===0?void 0:S.length===1?S[0]:o1(S),this.history&&this.updateLatestLocation(),m=!0}m&&this.__store&&(this.__store.state={...this.state,location:this.latestLocation}),typeof window<"u"&&"CSS"in window&&typeof window.CSS?.supports=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const{routesById:l,routesByPath:o,processedTree:u}=qS(this.routeTree,this.options.caseSensitive,(d,m)=>{d.init({originalIndex:m})});this.options.routeMasks&&OS(this.options.routeMasks,u),this.routesById=l,this.routesByPath=o,this.processedTree=u;const f=this.options.notFoundRoute;f&&(f.init({originalIndex:99999999999}),this.routesById[f.id]=f)},this.subscribe=(l,o)=>{const u={eventType:l,fn:o};return this.subscribers.add(u),()=>{this.subscribers.delete(u)}},this.emit=l=>{this.subscribers.forEach(o=>{o.eventType===l.type&&o.fn(l)})},this.parseLocation=(l,o)=>{const u=({href:g,state:p})=>{const v=new URL(g,this.origin),y=Fy(this.rewrite,v),S=this.options.parseSearch(y.search),C=this.options.stringifySearch(S);y.search=C;const w=y.href.replace(y.origin,""),{pathname:_,hash:R}=y;return{href:w,publicHref:g,url:y.href,pathname:zg(_),searchStr:C,search:rn(o?.search,S),hash:R.split("#").reverse()[0]??"",state:rn(o?.state,p)}},f=u(l),{__tempLocation:d,__tempKey:m}=f.state;if(d&&(!m||m===this.tempLocationKey)){const g=u(d);return g.state.key=f.state.key,g.state.__TSR_key=f.state.__TSR_key,delete g.state.__tempLocation,{...g,maskedLocation:f}}return f},this.resolvePathCache=bs(1e3),this.resolvePathWithBase=(l,o)=>GS({base:l,to:td(o),trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(l,o,u)=>typeof l=="string"?this.matchRoutesInternal({pathname:l,search:o},u):this.matchRoutesInternal(l,o),this.getMatchedRoutes=l=>d1({pathname:l,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=l=>{const o=this.getMatch(l);o&&(o.abortController.abort(),clearTimeout(o._nonReactive.pendingTimeout),o._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{const l=this.state.matches.filter(f=>f.status==="pending"),o=this.state.matches.filter(f=>f.isFetching==="loader");new Set([...this.state.pendingMatches??[],...l,...o]).forEach(f=>{this.cancelMatch(f.id)})},this.buildLocation=l=>{const o=(f={})=>{const d=f._fromLocation||this.pendingBuiltLocation||this.latestLocation,m=this.matchRoutes(d,{_buildLocation:!0}),g=gs(m);f.from;const p=f.unsafeRelative==="path"?d.pathname:f.from??g.fullPath,v=this.resolvePathWithBase(p,"."),y=g.search,S={...g.params},C=f.to?this.resolvePathWithBase(v,`${f.to}`):this.resolvePathWithBase(v,"."),w=f.params===!1||f.params===null?{}:(f.params??!0)===!0?S:Object.assign(S,_a(f.params,S)),_=ff({path:C,params:w}).interpolatedPath,R=this.matchRoutes(_,void 0,{_buildLocation:!0}).map(ee=>this.looseRoutesById[ee.routeId]);if(Object.keys(w).length>0)for(const ee of R){const I=ee.options.params?.stringify??ee.options.stringifyParams;I&&Object.assign(w,I(w))}const L=l.leaveParams?C:zg(ff({path:C,params:w,decodeCharMap:this.pathParamsDecodeCharMap}).interpolatedPath);let G=y;if(l._includeValidateSearch&&this.options.search?.strict){const ee={};R.forEach(I=>{if(I.options.validateSearch)try{Object.assign(ee,Nf(I.options.validateSearch,{...ee,...G}))}catch{}}),G=ee}G=m1({search:G,dest:f,destRoutes:R,_includeValidateSearch:l._includeValidateSearch}),G=rn(y,G);const U=this.options.stringifySearch(G),$=f.hash===!0?d.hash:f.hash?_a(f.hash,d.hash):void 0,B=$?`#${$}`:"";let O=f.state===!0?d.state:f.state?_a(f.state,d.state):{};O=rn(d.state,O);const k=`${L}${U}${B}`,H=new URL(k,this.origin),Q=Wy(this.rewrite,H);return{publicHref:Q.pathname+Q.search+Q.hash,href:k,url:Q.href,pathname:L,search:G,searchStr:U,state:O,hash:$??"",unmaskOnReload:f.unmaskOnReload}},u=(f={},d)=>{const m=o(f);let g=d?o(d):void 0;if(!g){const p={};if(this.options.routeMasks){const v=LS(m.pathname,this.processedTree);if(v){Object.assign(p,v.params);const{from:y,params:S,...C}=v.route,w=S===!1||S===null?{}:(S??!0)===!0?p:Object.assign(p,_a(S,p));d={from:l.from,...C,params:w},g=o(d)}}}return g&&(m.maskedLocation=g),m};return l.mask?u(l,{from:l.from,...l.mask}):u(l)},this.commitLocation=({viewTransition:l,ignoreBlocker:o,...u})=>{const f=()=>{const g=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];g.forEach(v=>{u.state[v]=this.latestLocation.state[v]});const p=Wa(u.state,this.latestLocation.state);return g.forEach(v=>{delete u.state[v]}),p},d=Ia(this.latestLocation.href)===Ia(u.href),m=this.commitLocationPromise;if(this.commitLocationPromise=rr(()=>{m?.resolve()}),d&&f())this.load();else{let{maskedLocation:g,hashScrollIntoView:p,...v}=u;g&&(v={...g,state:{...g.state,__tempKey:void 0,__tempLocation:{...v,search:v.searchStr,state:{...v.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(v.unmaskOnReload??this.options.unmaskOnReload??!1)&&(v.state.__tempKey=this.tempLocationKey)),v.state.__hashScrollIntoViewOptions=p??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=l,this.history[u.replace?"replace":"push"](v.publicHref,v.state,{ignoreBlocker:o})}return this.resetNextScroll=u.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:l,resetScroll:o,hashScrollIntoView:u,viewTransition:f,ignoreBlocker:d,href:m,...g}={})=>{if(m){const y=this.history.location.state.__TSR_index,S=vl(m,{__TSR_index:l?y:y+1});g.to=S.pathname,g.search=this.options.parseSearch(S.search),g.hash=S.hash.slice(1)}const p=this.buildLocation({...g,_includeValidateSearch:!0});this.pendingBuiltLocation=p;const v=this.commitLocation({...p,viewTransition:f,replace:l,resetScroll:o,hashScrollIntoView:u,ignoreBlocker:d});return Promise.resolve().then(()=>{this.pendingBuiltLocation===p&&(this.pendingBuiltLocation=void 0)}),v},this.navigate=async({to:l,reloadDocument:o,href:u,...f})=>{if(!o&&u)try{new URL(`${u}`),o=!0}catch{}if(o){if(u||(u=this.buildLocation({to:l,...f}).url),!f.ignoreBlocker){const m=this.history.getBlockers?.()??[];for(const g of m)if(g?.blockerFn&&await g.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return f.replace?window.location.replace(u):window.location.href=u,Promise.resolve()}return this.buildAndCommitLocation({...f,href:u,to:l,_isNavigate:!0})},this.beforeLoad=()=>{if(this.cancelMatches(),this.updateLatestLocation(),this.isServer){const o=this.buildLocation({to:this.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0}),u=f=>{try{return encodeURI(decodeURI(f))}catch{return f}};if(ss(u(this.latestLocation.href))!==ss(u(o.href))){let f=o.url;throw this.origin&&f.startsWith(this.origin)&&(f=f.replace(this.origin,"")||"/"),t1({href:f})}}const l=this.matchRoutes(this.latestLocation);this.__store.setState(o=>({...o,status:"pending",statusCode:200,isLoading:!0,location:this.latestLocation,pendingMatches:l,cachedMatches:o.cachedMatches.filter(u=>!l.some(f=>f.id===u.id))}))},this.load=async l=>{let o,u,f;for(f=new Promise(m=>{this.startTransition(async()=>{try{this.beforeLoad();const g=this.latestLocation,p=this.state.resolvedLocation;this.state.redirect||this.emit({type:"onBeforeNavigate",...ei({resolvedLocation:p,location:g})}),this.emit({type:"onBeforeLoad",...ei({resolvedLocation:p,location:g})}),await kg({router:this,sync:l?.sync,matches:this.state.pendingMatches,location:g,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let v=[],y=[],S=[];pl(()=>{this.__store.setState(C=>{const w=C.matches,_=C.pendingMatches||C.matches;return v=w.filter(R=>!_.some(L=>L.id===R.id)),y=_.filter(R=>!w.some(L=>L.id===R.id)),S=_.filter(R=>w.some(L=>L.id===R.id)),{...C,isLoading:!1,loadedAt:Date.now(),matches:_,pendingMatches:void 0,cachedMatches:[...C.cachedMatches,...v.filter(R=>R.status!=="error"&&R.status!=="notFound")]}}),this.clearExpiredCache()}),[[v,"onLeave"],[y,"onEnter"],[S,"onStay"]].forEach(([C,w])=>{C.forEach(_=>{this.looseRoutesById[_.routeId].options[w]?.(_)})})})})}})}catch(g){mn(g)?(o=g,this.isServer||this.navigate({...o.options,replace:!0,ignoreBlocker:!0})):on(g)&&(u=g),this.__store.setState(p=>({...p,statusCode:o?o.status:u?404:p.matches.some(v=>v.status==="error")?500:200,redirect:o}))}this.latestLoadPromise===f&&(this.commitLocationPromise?.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),m()})}),this.latestLoadPromise=f,await f;this.latestLoadPromise&&f!==this.latestLoadPromise;)await this.latestLoadPromise;let d;this.hasNotFoundMatch()?d=404:this.__store.state.matches.some(m=>m.status==="error")&&(d=500),d!==void 0&&this.__store.setState(m=>({...m,statusCode:d}))},this.startViewTransition=l=>{const o=this.shouldViewTransition??this.options.defaultViewTransition;if(delete this.shouldViewTransition,o&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let u;if(typeof o=="object"&&this.isViewTransitionTypesSupported){const f=this.latestLocation,d=this.state.resolvedLocation,m=typeof o.types=="function"?o.types(ei({resolvedLocation:d,location:f})):o.types;if(m===!1){l();return}u={update:l,types:m}}else u=l;document.startViewTransition(u)}else l()},this.updateMatch=(l,o)=>{this.startTransition(()=>{const u=this.state.pendingMatches?.some(f=>f.id===l)?"pendingMatches":this.state.matches.some(f=>f.id===l)?"matches":this.state.cachedMatches.some(f=>f.id===l)?"cachedMatches":"";u&&this.__store.setState(f=>({...f,[u]:f[u]?.map(d=>d.id===l?o(d):d)}))})},this.getMatch=l=>{const o=u=>u.id===l;return this.state.cachedMatches.find(o)??this.state.pendingMatches?.find(o)??this.state.matches.find(o)},this.invalidate=l=>{const o=u=>l?.filter?.(u)??!0?{...u,invalid:!0,...l?.forcePending||u.status==="error"||u.status==="notFound"?{status:"pending",error:void 0}:void 0}:u;return this.__store.setState(u=>({...u,matches:u.matches.map(o),cachedMatches:u.cachedMatches.map(o),pendingMatches:u.pendingMatches?.map(o)})),this.shouldViewTransition=!1,this.load({sync:l?.sync})},this.resolveRedirect=l=>{if(!l.options.href){const o=this.buildLocation(l.options);let u=o.url;this.origin&&u.startsWith(this.origin)&&(u=u.replace(this.origin,"")||"/"),l.options.href=o.href,l.headers.set("Location",u)}return l.headers.get("Location")||l.headers.set("Location",l.options.href),l},this.clearCache=l=>{const o=l?.filter;o!==void 0?this.__store.setState(u=>({...u,cachedMatches:u.cachedMatches.filter(f=>!o(f))})):this.__store.setState(u=>({...u,cachedMatches:[]}))},this.clearExpiredCache=()=>{const l=o=>{const u=this.looseRoutesById[o.routeId];if(!u.options.loader)return!0;const f=(o.preload?u.options.preloadGcTime??this.options.defaultPreloadGcTime:u.options.gcTime??this.options.defaultGcTime)??300*1e3;return o.status==="error"?!0:Date.now()-o.updatedAt>=f};this.clearCache({filter:l})},this.loadRouteChunk=Ky,this.preloadRoute=async l=>{const o=this.buildLocation(l);let u=this.matchRoutes(o,{throwOnError:!0,preload:!0,dest:l});const f=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(m=>m.id)),d=new Set([...f,...this.state.cachedMatches.map(m=>m.id)]);pl(()=>{u.forEach(m=>{d.has(m.id)||this.__store.setState(g=>({...g,cachedMatches:[...g.cachedMatches,m]}))})});try{return u=await kg({router:this,matches:u,location:o,preload:!0,updateMatch:(m,g)=>{f.has(m)?u=u.map(p=>p.id===m?g(p):p):this.updateMatch(m,g)}}),u}catch(m){if(mn(m))return m.options.reloadDocument?void 0:await this.preloadRoute({...m.options,_fromLocation:o});on(m)||console.error(m);return}},this.matchRoute=(l,o)=>{const u={...l,to:l.to?this.resolvePathWithBase(l.from||"",l.to):void 0,params:l.params||{},leaveParams:!0},f=this.buildLocation(u);if(o?.pending&&this.state.status!=="pending")return!1;const m=(o?.pending===void 0?!this.state.isLoading:o.pending)?this.latestLocation:this.state.resolvedLocation||this.state.location,g=zS(f.pathname,o?.caseSensitive??!1,o?.fuzzy??!1,m.pathname,this.processedTree);return!g||l.params&&!Wa(g.params,l.params,{partial:!0})?!1:o?.includeSearch??!0?Wa(m.search,f.search,{partial:!0})?g.params:!1:g.params},this.hasNotFoundMatch=()=>this.__store.state.matches.some(l=>l.status==="notFound"||l.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...r,caseSensitive:r.caseSensitive??!1,notFoundMode:r.notFoundMode??"fuzzy",stringifySearch:r.stringifySearch??WS,parseSearch:r.parseSearch??FS}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}matchRoutesInternal(r,l){const o=this.getMatchedRoutes(r.pathname),{foundRoute:u,routeParams:f}=o;let{matchedRoutes:d}=o,m=!1;(u?u.path!=="/"&&f["**"]:Ia(r.pathname))&&(this.options.notFoundRoute?d=[...d,this.options.notFoundRoute]:m=!0);const g=(()=>{if(m){if(this.options.notFoundMode!=="root")for(let y=d.length-1;y>=0;y--){const S=d[y];if(S.children)return S.id}return Vt}})(),p=[],v=y=>y?.id?y.context??this.options.context??void 0:this.options.context??void 0;return d.forEach((y,S)=>{const C=p[S-1],[w,_,R]=(()=>{const ne=C?.search??r.search,F=C?._strictSearch??void 0;try{const re=Nf(y.options.validateSearch,{...ne})??void 0;return[{...ne,...re},{...F,...re},void 0]}catch(re){let q=re;if(re instanceof Cs||(q=new Cs(re.message,{cause:re})),l?.throwOnError)throw q;return[ne,{},q]}})(),L=y.options.loaderDeps?.({search:w})??"",G=L?JSON.stringify(L):"",{interpolatedPath:U,usedParams:$}=ff({path:y.fullPath,params:f,decodeCharMap:this.pathParamsDecodeCharMap}),B=y.id+U+G,O=this.getMatch(B),k=this.state.matches.find(ne=>ne.routeId===y.id),H=O?._strictParams??$;let Q;if(!O){const ne=y.options.params?.parse??y.options.parseParams;if(ne)try{Object.assign(H,ne(H))}catch(F){if(on(F)||mn(F)?Q=F:Q=new c1(F.message,{cause:F}),l?.throwOnError)throw Q}}Object.assign(f,H);const ee=k?"stay":"enter";let I;if(O)I={...O,cause:ee,params:k?rn(k.params,f):f,_strictParams:H,search:rn(k?k.search:O.search,w),_strictSearch:_};else{const ne=y.options.loader||y.options.beforeLoad||y.lazyFn||Qy(y)?"pending":"success";I={id:B,ssr:this.isServer?void 0:y.options.ssr,index:S,routeId:y.id,params:k?rn(k.params,f):f,_strictParams:H,pathname:U,updatedAt:Date.now(),search:k?rn(k.search,w):w,_strictSearch:_,searchError:void 0,status:ne,isFetching:!1,error:void 0,paramsError:Q,__routeContext:void 0,_nonReactive:{loadPromise:rr()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:ee,loaderDeps:k?rn(k.loaderDeps,L):L,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:y.options.staticData||{},fullPath:y.fullPath}}l?.preload||(I.globalNotFound=g===y.id),I.searchError=R;const x=v(C);I.context={...x,...I.__routeContext,...I.__beforeLoadContext},p.push(I)}),p.forEach((y,S)=>{const C=this.looseRoutesById[y.routeId];if(!this.getMatch(y.id)&&l?._buildLocation!==!0){const _=p[S-1],R=v(_);if(C.options.context){const L={deps:y.loaderDeps,params:y.params,context:R??{},location:r,navigate:G=>this.navigate({...G,_fromLocation:r}),buildLocation:this.buildLocation,cause:y.cause,abortController:y.abortController,preload:!!y.preload,matches:p};y.__routeContext=C.options.context(L)??void 0}y.context={...R,...y.__routeContext,...y.__beforeLoadContext}}}),p}}class Cs extends Error{}class c1 extends Error{}function f1(n){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:n,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function Nf(n,r){if(n==null)return{};if("~standard"in n){const l=n["~standard"].validate(r);if(l instanceof Promise)throw new Cs("Async validation not supported");if(l.issues)throw new Cs(JSON.stringify(l.issues,void 0,2),{cause:l});return l.value}return"parse"in n?n.parse(r):typeof n=="function"?n(r):{}}function d1({pathname:n,routesById:r,processedTree:l}){const o={},u=Ia(n);let f;const d=DS(u,l,!0);return d&&(f=d.route,Object.assign(o,d.params)),{matchedRoutes:d?.branch||[r[Vt]],routeParams:o,foundRoute:f}}function m1({search:n,dest:r,destRoutes:l,_includeValidateSearch:o}){const u=l.reduce((m,g)=>{const p=[];if("search"in g.options)g.options.search?.middlewares&&p.push(...g.options.search.middlewares);else if(g.options.preSearchFilters||g.options.postSearchFilters){const v=({search:y,next:S})=>{let C=y;"preSearchFilters"in g.options&&g.options.preSearchFilters&&(C=g.options.preSearchFilters.reduce((_,R)=>R(_),y));const w=S(C);return"postSearchFilters"in g.options&&g.options.postSearchFilters?g.options.postSearchFilters.reduce((_,R)=>R(_),w):w};p.push(v)}if(o&&g.options.validateSearch){const v=({search:y,next:S})=>{const C=S(y);try{return{...C,...Nf(g.options.validateSearch,C)??void 0}}catch{return C}};p.push(v)}return m.concat(p)},[])??[],f=({search:m})=>r.search?r.search===!0?m:_a(r.search,m):{};u.push(f);const d=(m,g)=>{if(m>=u.length)return g;const p=u[m];return p({search:g,next:y=>d(m+1,y)})};return d(0,n)}const h1="Error preloading route! ☝️";class Iy{constructor(r){if(this.init=l=>{this.originalIndex=l.originalIndex;const o=this.options,u=!o?.path&&!o?.id;this.parentRoute=this.options.getParentRoute?.(),u?this._path=Vt:this.parentRoute||Qn(!1);let f=u?Vt:o?.path;f&&f!=="/"&&(f=$y(f));const d=o?.id||f;let m=u?Vt:os([this.parentRoute.id===Vt?"":this.parentRoute.id,d]);f===Vt&&(f="/"),m!==Vt&&(m=os(["/",m]));const g=m===Vt?"/":os([this.parentRoute.fullPath,f]);this._path=f,this._id=m,this._fullPath=g,this._to=g},this.addChildren=l=>this._addFileChildren(l),this._addFileChildren=l=>(Array.isArray(l)&&(this.children=l),typeof l=="object"&&l!==null&&(this.children=Object.values(l)),this),this._addFileTypes=()=>this,this.updateLoader=l=>(Object.assign(this.options,l),this),this.update=l=>(Object.assign(this.options,l),this),this.lazy=l=>(this.lazyFn=l,this),this.options=r||{},this.isRoot=!r?.getParentRoute,r?.id&&r?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}}class p1 extends Iy{constructor(r){super(r)}}var mf={exports:{}},de={};var qg;function g1(){if(qg)return de;qg=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function C(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,R={};function L(M,V,te){this.props=M,this.context=V,this.refs=R,this.updater=te||w}L.prototype.isReactComponent={},L.prototype.setState=function(M,V){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,V,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function G(){}G.prototype=L.prototype;function U(M,V,te){this.props=M,this.context=V,this.refs=R,this.updater=te||w}var $=U.prototype=new G;$.constructor=U,_($,L.prototype),$.isPureReactComponent=!0;var B=Array.isArray;function O(){}var k={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function Q(M,V,te){var ae=te.ref;return{$$typeof:n,type:M,key:V,ref:ae!==void 0?ae:null,props:te}}function ee(M,V){return Q(M.type,V,M.props)}function I(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function x(M){var V={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(te){return V[te]})}var ne=/\/+/g;function F(M,V){return typeof M=="object"&&M!==null&&M.key!=null?x(""+M.key):V.toString(36)}function re(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(O,O):(M.status="pending",M.then(function(V){M.status==="pending"&&(M.status="fulfilled",M.value=V)},function(V){M.status==="pending"&&(M.status="rejected",M.reason=V)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function q(M,V,te,ae,ue){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var me=!1;if(M===null)me=!0;else switch(fe){case"bigint":case"string":case"number":me=!0;break;case"object":switch(M.$$typeof){case n:case r:me=!0;break;case v:return me=M._init,q(me(M._payload),V,te,ae,ue)}}if(me)return ue=ue(M),me=ae===""?"."+F(M,0):ae,B(ue)?(te="",me!=null&&(te=me.replace(ne,"$&/")+"/"),q(ue,V,te,"",function(un){return un})):ue!=null&&(I(ue)&&(ue=ee(ue,te+(ue.key==null||M&&M.key===ue.key?"":(""+ue.key).replace(ne,"$&/")+"/")+me)),V.push(ue)),1;me=0;var Xe=ae===""?".":ae+":";if(B(M))for(var Ae=0;Ae<M.length;Ae++)ae=M[Ae],fe=Xe+F(ae,Ae),me+=q(ae,V,te,fe,ue);else if(Ae=C(M),typeof Ae=="function")for(M=Ae.call(M),Ae=0;!(ae=M.next()).done;)ae=ae.value,fe=Xe+F(ae,Ae++),me+=q(ae,V,te,fe,ue);else if(fe==="object"){if(typeof M.then=="function")return q(re(M),V,te,ae,ue);throw V=String(M),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return me}function W(M,V,te){if(M==null)return M;var ae=[],ue=0;return q(M,ae,"","",function(fe){return V.call(te,fe,ue++)}),ae}function oe(M){if(M._status===-1){var V=M._result;V=V(),V.then(function(te){(M._status===0||M._status===-1)&&(M._status=1,M._result=te)},function(te){(M._status===0||M._status===-1)&&(M._status=2,M._result=te)}),M._status===-1&&(M._status=0,M._result=V)}if(M._status===1)return M._result.default;throw M._result}var Ce=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Te={map:W,forEach:function(M,V,te){W(M,function(){V.apply(this,arguments)},te)},count:function(M){var V=0;return W(M,function(){V++}),V},toArray:function(M){return W(M,function(V){return V})||[]},only:function(M){if(!I(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return de.Activity=y,de.Children=Te,de.Component=L,de.Fragment=l,de.Profiler=u,de.PureComponent=U,de.StrictMode=o,de.Suspense=g,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,de.__COMPILER_RUNTIME={__proto__:null,c:function(M){return k.H.useMemoCache(M)}},de.cache=function(M){return function(){return M.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(M,V,te){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ae=_({},M.props),ue=M.key;if(V!=null)for(fe in V.key!==void 0&&(ue=""+V.key),V)!H.call(V,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&V.ref===void 0||(ae[fe]=V[fe]);var fe=arguments.length-2;if(fe===1)ae.children=te;else if(1<fe){for(var me=Array(fe),Xe=0;Xe<fe;Xe++)me[Xe]=arguments[Xe+2];ae.children=me}return Q(M.type,ue,ae)},de.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:f,_context:M},M},de.createElement=function(M,V,te){var ae,ue={},fe=null;if(V!=null)for(ae in V.key!==void 0&&(fe=""+V.key),V)H.call(V,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ue[ae]=V[ae]);var me=arguments.length-2;if(me===1)ue.children=te;else if(1<me){for(var Xe=Array(me),Ae=0;Ae<me;Ae++)Xe[Ae]=arguments[Ae+2];ue.children=Xe}if(M&&M.defaultProps)for(ae in me=M.defaultProps,me)ue[ae]===void 0&&(ue[ae]=me[ae]);return Q(M,fe,ue)},de.createRef=function(){return{current:null}},de.forwardRef=function(M){return{$$typeof:m,render:M}},de.isValidElement=I,de.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:oe}},de.memo=function(M,V){return{$$typeof:p,type:M,compare:V===void 0?null:V}},de.startTransition=function(M){var V=k.T,te={};k.T=te;try{var ae=M(),ue=k.S;ue!==null&&ue(te,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(O,Ce)}catch(fe){Ce(fe)}finally{V!==null&&te.types!==null&&(V.types=te.types),k.T=V}},de.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},de.use=function(M){return k.H.use(M)},de.useActionState=function(M,V,te){return k.H.useActionState(M,V,te)},de.useCallback=function(M,V){return k.H.useCallback(M,V)},de.useContext=function(M){return k.H.useContext(M)},de.useDebugValue=function(){},de.useDeferredValue=function(M,V){return k.H.useDeferredValue(M,V)},de.useEffect=function(M,V){return k.H.useEffect(M,V)},de.useEffectEvent=function(M){return k.H.useEffectEvent(M)},de.useId=function(){return k.H.useId()},de.useImperativeHandle=function(M,V,te){return k.H.useImperativeHandle(M,V,te)},de.useInsertionEffect=function(M,V){return k.H.useInsertionEffect(M,V)},de.useLayoutEffect=function(M,V){return k.H.useLayoutEffect(M,V)},de.useMemo=function(M,V){return k.H.useMemo(M,V)},de.useOptimistic=function(M,V){return k.H.useOptimistic(M,V)},de.useReducer=function(M,V,te){return k.H.useReducer(M,V,te)},de.useRef=function(M){return k.H.useRef(M)},de.useState=function(M){return k.H.useState(M)},de.useSyncExternalStore=function(M,V,te){return k.H.useSyncExternalStore(M,V,te)},de.useTransition=function(){return k.H.useTransition()},de.version="19.2.1",de}var Bg;function Al(){return Bg||(Bg=1,mf.exports=g1()),mf.exports}var K=Al();const or=Ny(K),Uf=mS({__proto__:null,default:or},[K]);function nd(n){const r=n.errorComponent??Es;return Z.jsx(y1,{getResetKey:n.getResetKey,onCatch:n.onCatch,children:({error:l,reset:o})=>l?K.createElement(r,{error:l,reset:o}):n.children})}class y1 extends K.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(r){return{resetKey:r.getResetKey()}}static getDerivedStateFromError(r){return{error:r}}reset(){this.setState({error:null})}componentDidUpdate(r,l){l.error&&l.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(r,l){this.props.onCatch&&this.props.onCatch(r,l)}render(){return this.props.children({error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{this.reset()}})}}function Es({error:n}){const[r,l]=K.useState(!1);return Z.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[Z.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),Z.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>l(o=>!o),children:r?"Hide Error":"Show Error"})]}),Z.jsx("div",{style:{height:".25rem"}}),r?Z.jsx("div",{children:Z.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:n.message?Z.jsx("code",{children:n.message}):null})}):null]})}function b1({children:n,fallback:r=null}){return v1()?Z.jsx(or.Fragment,{children:n}):Z.jsx(or.Fragment,{children:r})}function v1(){return or.useSyncExternalStore(S1,()=>!0,()=>!1)}function S1(){return()=>{}}var hf={exports:{}},pf={},gf={exports:{}},yf={};var jg;function x1(){if(jg)return yf;jg=1;var n=Al();function r(y,S){return y===S&&(y!==0||1/y===1/S)||y!==y&&S!==S}var l=typeof Object.is=="function"?Object.is:r,o=n.useState,u=n.useEffect,f=n.useLayoutEffect,d=n.useDebugValue;function m(y,S){var C=S(),w=o({inst:{value:C,getSnapshot:S}}),_=w[0].inst,R=w[1];return f(function(){_.value=C,_.getSnapshot=S,g(_)&&R({inst:_})},[y,C,S]),u(function(){return g(_)&&R({inst:_}),y(function(){g(_)&&R({inst:_})})},[y]),d(C),C}function g(y){var S=y.getSnapshot;y=y.value;try{var C=S();return!l(y,C)}catch{return!0}}function p(y,S){return S()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:m;return yf.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:v,yf}var Ng;function C1(){return Ng||(Ng=1,gf.exports=x1()),gf.exports}var Ug;function _1(){if(Ug)return pf;Ug=1;var n=Al(),r=C1();function l(p,v){return p===v&&(p!==0||1/p===1/v)||p!==p&&v!==v}var o=typeof Object.is=="function"?Object.is:l,u=r.useSyncExternalStore,f=n.useRef,d=n.useEffect,m=n.useMemo,g=n.useDebugValue;return pf.useSyncExternalStoreWithSelector=function(p,v,y,S,C){var w=f(null);if(w.current===null){var _={hasValue:!1,value:null};w.current=_}else _=w.current;w=m(function(){function L(O){if(!G){if(G=!0,U=O,O=S(O),C!==void 0&&_.hasValue){var k=_.value;if(C(k,O))return $=k}return $=O}if(k=$,o(U,O))return k;var H=S(O);return C!==void 0&&C(k,H)?(U=O,k):(U=O,$=H)}var G=!1,U,$,B=y===void 0?null:y;return[function(){return L(v())},B===null?void 0:function(){return L(B())}]},[v,y,S,C]);var R=u(p,w[0],w[1]);return d(function(){_.hasValue=!0,_.value=R},[R]),g(R),R},pf}var Hg;function w1(){return Hg||(Hg=1,hf.exports=_1()),hf.exports}var T1=w1();function A1(n,r=o=>o,l={}){const o=l.equal??M1;return T1.useSyncExternalStoreWithSelector(n.subscribe,()=>n.state,()=>n.state,r,o)}function M1(n,r){if(Object.is(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;if(n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(const[o,u]of n)if(!r.has(o)||!Object.is(u,r.get(o)))return!1;return!0}if(n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(const o of n)if(!r.has(o))return!1;return!0}if(n instanceof Date&&r instanceof Date)return n.getTime()===r.getTime();const l=Gg(n);if(l.length!==Gg(r).length)return!1;for(let o=0;o<l.length;o++)if(!Object.prototype.hasOwnProperty.call(r,l[o])||!Object.is(n[l[o]],r[l[o]]))return!1;return!0}function Gg(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}const bf=K.createContext(null);function eb(){return typeof document>"u"?bf:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=bf,bf)}function xt(n){const r=K.useContext(eb());return n?.warn,r}function ot(n){const r=xt({warn:n?.router===void 0}),l=n?.router||r,o=K.useRef(void 0);return A1(l.__store,u=>{if(n?.select){if(n.structuralSharing??l.options.defaultStructuralSharing){const f=rn(o.current,n.select(u));return o.current=f,f}return n.select(u)}return u})}const Os=K.createContext(void 0),R1=K.createContext(void 0);function Mn(n){const r=K.useContext(n.from?R1:Os);return ot({select:o=>{const u=o.matches.find(f=>n.from?n.from===f.routeId:f.id===r);if(Qn(!((n.shouldThrow??!0)&&!u),`Could not find ${n.from?`an active match from "${n.from}"`:"a nearest match!"}`),u!==void 0)return n.select?n.select(u):u},structuralSharing:n.structuralSharing})}function ad(n){return Mn({from:n.from,strict:n.strict,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.loaderData):r.loaderData})}function id(n){const{select:r,...l}=n;return Mn({...l,select:o=>r?r(o.loaderDeps):o.loaderDeps})}function rd(n){return Mn({from:n.from,shouldThrow:n.shouldThrow,structuralSharing:n.structuralSharing,strict:n.strict,select:r=>{const l=n.strict===!1?r.params:r._strictParams;return n.select?n.select(l):l}})}function ld(n){return Mn({from:n.from,strict:n.strict,shouldThrow:n.shouldThrow,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.search):r.search})}const as=typeof window<"u"?K.useLayoutEffect:K.useEffect;function vf(n){const r=K.useRef({value:n,prev:null}),l=r.current.value;return n!==l&&(r.current={value:n,prev:l}),r.current.prev}function E1(n,r,l={},o={}){K.useEffect(()=>{if(!n.current||o.disabled||typeof IntersectionObserver!="function")return;const u=new IntersectionObserver(([f])=>{r(f)},l);return u.observe(n.current),()=>{u.disconnect()}},[r,l,o.disabled,n])}function O1(n){const r=K.useRef(null);return K.useImperativeHandle(n,()=>r.current,[]),r}function od(n){const r=xt();return K.useCallback(l=>r.navigate({...l,from:l.from??n?.from}),[n?.from,r])}var Sf={exports:{}},vt={};var $g;function L1(){if($g)return vt;$g=1;var n=Al();function r(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(g,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:g,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,vt.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return f(g,p,null,v)},vt.flushSync=function(g){var p=d.T,v=o.p;try{if(d.T=null,o.p=2,g)return g()}finally{d.T=p,o.p=v,o.d.f()}},vt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},vt.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},vt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,y=m(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:C}):v==="script"&&o.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},vt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},vt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=m(v,p.crossOrigin);o.d.L(g,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},vt.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=m(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},vt.requestFormReset=function(g){o.d.r(g)},vt.unstable_batchedUpdates=function(g,p){return g(p)},vt.useFormState=function(g,p,v){return d.H.useFormState(g,p,v)},vt.useFormStatus=function(){return d.H.useHostTransitionStatus()},vt.version="19.2.1",vt}var Vg;function tb(){if(Vg)return Sf.exports;Vg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Sf.exports=L1(),Sf.exports}var z1=tb();function D1(n,r){const l=xt(),[o,u]=K.useState(!1),f=K.useRef(!1),d=O1(r),{activeProps:m,inactiveProps:g,activeOptions:p,to:v,preload:y,preloadDelay:S,hashScrollIntoView:C,replace:w,startTransition:_,resetScroll:R,viewTransition:L,children:G,target:U,disabled:$,style:B,className:O,onClick:k,onFocus:H,onMouseEnter:Q,onMouseLeave:ee,onTouchStart:I,ignoreBlocker:x,params:ne,search:F,hash:re,state:q,mask:W,reloadDocument:oe,unsafeRelative:Ce,from:Te,_fromLocation:M,...V}=n,te=ot({select:Oe=>Oe.location.search,structuralSharing:!0}),ae=n.from,ue=K.useMemo(()=>({...n,from:ae}),[l,te,ae,n._fromLocation,n.hash,n.to,n.search,n.params,n.state,n.mask,n.unsafeRelative]),fe=K.useMemo(()=>l.buildLocation({...ue}),[l,ue]),me=K.useMemo(()=>{if($)return;let Oe=fe.maskedLocation?fe.maskedLocation.url:fe.url,xe=!1;return l.origin&&(Oe.startsWith(l.origin)?Oe=l.history.createHref(Oe.replace(l.origin,""))||"/":xe=!0),{href:Oe,external:xe}},[$,fe.maskedLocation,fe.url,l.origin,l.history]),Xe=K.useMemo(()=>{if(me?.external)return me.href;try{return new URL(v),v}catch{}},[v,me]),Ae=n.reloadDocument||Xe?!1:y??l.options.defaultPreload,un=S??l.options.defaultPreloadDelay??0,pn=ot({select:Oe=>{if(Xe)return!1;if(p?.exact){if(!HS(Oe.location.pathname,fe.pathname,l.basepath))return!1}else{const xe=vs(Oe.location.pathname,l.basepath),bt=vs(fe.pathname,l.basepath);if(!(xe.startsWith(bt)&&(xe.length===bt.length||xe[bt.length]==="/")))return!1}return(p?.includeSearch??!0)&&!Wa(Oe.location.search,fe.search,{partial:!p?.exact,ignoreUndefined:!p?.explicitUndefined})?!1:p?.includeHash?Oe.location.hash===fe.hash:!0}}),wt=K.useCallback(()=>{l.preloadRoute({...ue}).catch(Oe=>{console.warn(Oe),console.warn(h1)})},[l,ue]),Ea=K.useCallback(Oe=>{Oe?.isIntersecting&&wt()},[wt]);E1(d,Ea,N1,{disabled:!!$||Ae!=="viewport"}),K.useEffect(()=>{f.current||!$&&Ae==="render"&&(wt(),f.current=!0)},[$,wt,Ae]);const Xt=Oe=>{const xe=Oe.currentTarget.getAttribute("target"),bt=U!==void 0?U:xe;if(!$&&!U1(Oe)&&!Oe.defaultPrevented&&(!bt||bt==="_self")&&Oe.button===0){Oe.preventDefault(),z1.flushSync(()=>{u(!0)});const st=l.subscribe("onResolved",()=>{st(),u(!1)});l.navigate({...ue,replace:w,resetScroll:R,hashScrollIntoView:C,startTransition:_,viewTransition:L,ignoreBlocker:x})}};if(Xe)return{...V,ref:d,href:Xe,...G&&{children:G},...U&&{target:U},...$&&{disabled:$},...B&&{style:B},...O&&{className:O},...k&&{onClick:k},...H&&{onFocus:H},...Q&&{onMouseEnter:Q},...ee&&{onMouseLeave:ee},...I&&{onTouchStart:I}};const Rn=Oe=>{$||Ae&&wt()},Oa=Rn,fi=Oe=>{if(!($||!Ae))if(!un)wt();else{const xe=Oe.target;if(ll.has(xe))return;const bt=setTimeout(()=>{ll.delete(xe),wt()},un);ll.set(xe,bt)}},Fn=Oe=>{if($||!Ae||!un)return;const xe=Oe.target,bt=ll.get(xe);bt&&(clearTimeout(bt),ll.delete(xe))},et=pn?_a(m,{})??k1:xf,Dt=pn?xf:_a(g,{})??xf,gn=[O,et.className,Dt.className].filter(Boolean).join(" "),yn=(B||et.style||Dt.style)&&{...B,...et.style,...Dt.style};return{...V,...et,...Dt,href:me?.href,ref:d,onClick:ol([k,Xt]),onFocus:ol([H,Rn]),onMouseEnter:ol([Q,fi]),onMouseLeave:ol([ee,Fn]),onTouchStart:ol([I,Oa]),disabled:!!$,target:U,...yn&&{style:yn},...gn&&{className:gn},...$&&q1,...pn&&B1,...o&&j1}}const xf={},k1={className:"active"},q1={role:"link","aria-disabled":!0},B1={"data-status":"active","aria-current":"page"},j1={"data-transitioning":"transitioning"},ll=new WeakMap,N1={rootMargin:"100px"},ol=n=>r=>{for(const l of n)if(l){if(r.defaultPrevented)return;l(r)}},yl=K.forwardRef((n,r)=>{const{_asChild:l,...o}=n,{type:u,ref:f,...d}=D1(o,r),m=typeof o.children=="function"?o.children({isActive:d["data-status"]==="active"}):o.children;return l===void 0&&delete d.disabled,K.createElement(l||"a",{...d,ref:f},m)});function U1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}let H1=class extends Iy{constructor(r){super(r),this.useMatch=l=>Mn({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Mn({...l,from:this.id,select:o=>l?.select?l.select(o.context):o.context}),this.useSearch=l=>ld({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>rd({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>id({...l,from:this.id}),this.useLoaderData=l=>ad({...l,from:this.id}),this.useNavigate=()=>od({from:this.fullPath}),this.Link=or.forwardRef((l,o)=>Z.jsx(yl,{ref:o,from:this.fullPath,...l})),this.$$typeof=Symbol.for("react.memo")}};function G1(n){return new H1(n)}class $1 extends p1{constructor(r){super(r),this.useMatch=l=>Mn({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Mn({...l,from:this.id,select:o=>l?.select?l.select(o.context):o.context}),this.useSearch=l=>ld({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>rd({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>id({...l,from:this.id}),this.useLoaderData=l=>ad({...l,from:this.id}),this.useNavigate=()=>od({from:this.fullPath}),this.Link=or.forwardRef((l,o)=>Z.jsx(yl,{ref:o,from:this.fullPath,...l})),this.$$typeof=Symbol.for("react.memo")}}function V1(n){return new $1(n)}function ai(n){return typeof n=="object"?new Yg(n,{silent:!0}).createRoute(n):new Yg(n,{silent:!0}).createRoute}class Yg{constructor(r,l){this.path=r,this.createRoute=o=>{this.silent;const u=G1(o);return u.isRoot=!1,u},this.silent=l?.silent}}class Pg{constructor(r){this.useMatch=l=>Mn({select:l?.select,from:this.options.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Mn({from:this.options.id,select:o=>l?.select?l.select(o.context):o.context}),this.useSearch=l=>ld({select:l?.select,structuralSharing:l?.structuralSharing,from:this.options.id}),this.useParams=l=>rd({select:l?.select,structuralSharing:l?.structuralSharing,from:this.options.id}),this.useLoaderDeps=l=>id({...l,from:this.options.id}),this.useLoaderData=l=>ad({...l,from:this.options.id}),this.useNavigate=()=>{const l=xt();return od({from:l.routesById[this.options.id].fullPath})},this.options=r,this.$$typeof=Symbol.for("react.memo")}}function Xg(n){return typeof n=="object"?new Pg(n):r=>new Pg({id:n,...r})}function Ml(n,r){let l,o,u,f;const d=()=>(l||(l=n().then(g=>{l=void 0,o=g[r]}).catch(g=>{if(u=g,TS(u)&&u instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const p=`tanstack_router_reload:${u.message}`;sessionStorage.getItem(p)||(sessionStorage.setItem(p,"1"),f=!0)}})),l),m=function(p){if(f)throw window.location.reload(),new Promise(()=>{});if(u)throw u;if(!o)throw d();return K.createElement(o,p)};return m.preload=d,m}function Y1(){const n=xt(),r=K.useRef({router:n,mounted:!1}),[l,o]=K.useState(!1),{hasPendingMatches:u,isLoading:f}=ot({select:y=>({isLoading:y.isLoading,hasPendingMatches:y.matches.some(S=>S.status==="pending")}),structuralSharing:!0}),d=vf(f),m=f||l||u,g=vf(m),p=f||u,v=vf(p);return n.startTransition=y=>{o(!0),K.startTransition(()=>{y(),o(!1)})},K.useEffect(()=>{const y=n.history.subscribe(n.load),S=n.buildLocation({to:n.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return Ia(n.latestLocation.href)!==Ia(S.href)&&n.commitLocation({...S,replace:!0}),()=>{y()}},[n,n.history]),as(()=>{if(typeof window<"u"&&n.ssr||r.current.router===n&&r.current.mounted)return;r.current={router:n,mounted:!0},(async()=>{try{await n.load()}catch(S){console.error(S)}})()},[n]),as(()=>{d&&!f&&n.emit({type:"onLoad",...ei(n.state)})},[d,n,f]),as(()=>{v&&!p&&n.emit({type:"onBeforeRouteMount",...ei(n.state)})},[p,v,n]),as(()=>{if(g&&!m){const y=ei(n.state);n.emit({type:"onResolved",...y}),n.__store.setState(S=>({...S,status:"idle",resolvedLocation:S.location})),y.hrefChanged&&KS(n)}},[m,g,n]),null}function P1(n){const r=ot({select:l=>`not-found-${l.location.pathname}-${l.status}`});return Z.jsx(nd,{getResetKey:()=>r,onCatch:(l,o)=>{if(on(l))n.onCatch?.(l,o);else throw l},errorComponent:({error:l})=>{if(on(l))return n.fallback?.(l);throw l},children:n.children})}function X1(){return Z.jsx("p",{children:"Not Found"})}function nr(n){return Z.jsx(Z.Fragment,{children:n.children})}function nb(n,r,l){return r.options.notFoundComponent?Z.jsx(r.options.notFoundComponent,{...l}):n.options.defaultNotFoundComponent?Z.jsx(n.options.defaultNotFoundComponent,{...l}):Z.jsx(X1,{})}function J1({children:n}){const r=xt();return r.isServer?Z.jsx("script",{nonce:r.options.ssr?.nonce,className:"$tsr",dangerouslySetInnerHTML:{__html:n+';typeof $_TSR !== "undefined" && $_TSR.c()'}}):null}function K1(){const n=xt();if(!n.isScrollRestoring||!n.isServer||typeof n.options.scrollRestoration=="function"&&!n.options.scrollRestoration({location:n.latestLocation}))return null;const l=(n.options.getScrollRestorationKey||jf)(n.latestLocation),o=l!==jf(n.latestLocation)?l:void 0,u={storageKey:Ss,shouldScrollRestoration:!0};return o&&(u.key=o),Z.jsx(J1,{children:`(${Vy.toString()})(${JSON.stringify(u)})`})}const ab=K.memo(function({matchId:r}){const l=xt(),o=ot({select:L=>{const G=L.matches.find(U=>U.id===r);return Qn(G),{routeId:G.routeId,ssr:G.ssr,_displayPending:G._displayPending}},structuralSharing:!0}),u=l.routesById[o.routeId],f=u.options.pendingComponent??l.options.defaultPendingComponent,d=f?Z.jsx(f,{}):null,m=u.options.errorComponent??l.options.defaultErrorComponent,g=u.options.onCatch??l.options.defaultOnCatch,p=u.isRoot?u.options.notFoundComponent??l.options.notFoundRoute?.options.component:u.options.notFoundComponent,v=o.ssr===!1||o.ssr==="data-only",y=(!u.isRoot||u.options.wrapInSuspense||v)&&(u.options.wrapInSuspense??f??(u.options.errorComponent?.preload||v))?K.Suspense:nr,S=m?nd:nr,C=p?P1:nr,w=ot({select:L=>L.loadedAt}),_=ot({select:L=>{const G=L.matches.findIndex(U=>U.id===r);return L.matches[G-1]?.routeId}}),R=u.isRoot?u.options.shellComponent??nr:nr;return Z.jsxs(R,{children:[Z.jsx(Os.Provider,{value:r,children:Z.jsx(y,{fallback:d,children:Z.jsx(S,{getResetKey:()=>w,errorComponent:m||Es,onCatch:(L,G)=>{if(on(L))throw L;g?.(L,G)},children:Z.jsx(C,{fallback:L=>{if(!p||L.routeId&&L.routeId!==o.routeId||!L.routeId&&!u.isRoot)throw L;return K.createElement(p,L)},children:v||o._displayPending?Z.jsx(b1,{fallback:d,children:Z.jsx(Jg,{matchId:r})}):Z.jsx(Jg,{matchId:r})})})})}),_===Vt&&l.options.scrollRestoration?Z.jsxs(Z.Fragment,{children:[Z.jsx(Q1,{}),Z.jsx(K1,{})]}):null]})});function Q1(){const n=xt(),r=K.useRef(void 0);return Z.jsx("script",{suppressHydrationWarning:!0,ref:l=>{l&&(r.current===void 0||r.current.href!==n.latestLocation.href)&&(n.emit({type:"onRendered",...ei(n.state)}),r.current=n.latestLocation)}},n.latestLocation.state.__TSR_key)}const Jg=K.memo(function({matchId:r}){const l=xt(),{match:o,key:u,routeId:f}=ot({select:g=>{const p=g.matches.find(w=>w.id===r),v=p.routeId,S=(l.routesById[v].options.remountDeps??l.options.defaultRemountDeps)?.({routeId:v,loaderDeps:p.loaderDeps,params:p._strictParams,search:p._strictSearch});return{key:S?JSON.stringify(S):void 0,routeId:v,match:{id:p.id,status:p.status,error:p.error,_forcePending:p._forcePending,_displayPending:p._displayPending}}},structuralSharing:!0}),d=l.routesById[f],m=K.useMemo(()=>{const g=d.options.component??l.options.defaultComponent;return g?Z.jsx(g,{},u):Z.jsx(ib,{})},[u,d.options.component,l.options.defaultComponent]);if(o._displayPending)throw l.getMatch(o.id)?._nonReactive.displayPendingPromise;if(o._forcePending)throw l.getMatch(o.id)?._nonReactive.minPendingPromise;if(o.status==="pending"){const g=d.options.pendingMinMs??l.options.defaultPendingMinMs;if(g){const p=l.getMatch(o.id);if(p&&!p._nonReactive.minPendingPromise&&!l.isServer){const v=rr();p._nonReactive.minPendingPromise=v,setTimeout(()=>{v.resolve(),p._nonReactive.minPendingPromise=void 0},g)}}throw l.getMatch(o.id)?._nonReactive.loadPromise}if(o.status==="notFound")return Qn(on(o.error)),nb(l,d,o.error);if(o.status==="redirected")throw Qn(mn(o.error)),l.getMatch(o.id)?._nonReactive.loadPromise;if(o.status==="error"){if(l.isServer){const g=(d.options.errorComponent??l.options.defaultErrorComponent)||Es;return Z.jsx(g,{error:o.error,reset:void 0,info:{componentStack:""}})}throw o.error}return m}),ib=K.memo(function(){const r=xt(),l=K.useContext(Os),o=ot({select:p=>p.matches.find(v=>v.id===l)?.routeId}),u=r.routesById[o],f=ot({select:p=>{const y=p.matches.find(S=>S.id===l);return Qn(y),y.globalNotFound}}),d=ot({select:p=>{const v=p.matches,y=v.findIndex(S=>S.id===l);return v[y+1]?.id}}),m=r.options.defaultPendingComponent?Z.jsx(r.options.defaultPendingComponent,{}):null;if(f)return nb(r,u,void 0);if(!d)return null;const g=Z.jsx(ab,{matchId:d});return o===Vt?Z.jsx(K.Suspense,{fallback:m,children:g}):g});function Z1(){const n=xt(),l=n.routesById[Vt].options.pendingComponent??n.options.defaultPendingComponent,o=l?Z.jsx(l,{}):null,u=n.isServer||typeof document<"u"&&n.ssr?nr:K.Suspense,f=Z.jsxs(u,{fallback:o,children:[!n.isServer&&Z.jsx(Y1,{}),Z.jsx(F1,{})]});return n.options.InnerWrap?Z.jsx(n.options.InnerWrap,{children:f}):f}function F1(){const n=xt(),r=ot({select:u=>u.matches[0]?.id}),l=ot({select:u=>u.loadedAt}),o=r?Z.jsx(ab,{matchId:r}):null;return Z.jsx(Os.Provider,{value:r,children:n.options.disableGlobalCatchBoundary?o:Z.jsx(nd,{getResetKey:()=>l,errorComponent:Es,onCatch:u=>{u.message||u.toString()},children:o})})}const W1=n=>new I1(n);class I1 extends u1{constructor(r){super(r)}}typeof globalThis<"u"?(globalThis.createFileRoute=ai,globalThis.createLazyFileRoute=Xg):typeof window<"u"&&(window.createFileRoute=ai,window.createLazyFileRoute=Xg);function ex({router:n,children:r,...l}){Object.keys(l).length>0&&n.update({...n.options,...l,context:{...n.options.context,...l.context}});const o=eb(),u=Z.jsx(o.Provider,{value:n,children:r});return n.options.Wrap?Z.jsx(n.options.Wrap,{children:u}):u}function tx({router:n,...r}){return Z.jsx(ex,{router:n,...r,children:Z.jsx(Z1,{})})}function nx({tag:n,attrs:r,children:l,nonce:o}){switch(n){case"title":return Z.jsx("title",{...r,suppressHydrationWarning:!0,children:l});case"meta":return Z.jsx("meta",{...r,suppressHydrationWarning:!0});case"link":return Z.jsx("link",{...r,nonce:o,suppressHydrationWarning:!0});case"style":return Z.jsx("style",{...r,dangerouslySetInnerHTML:{__html:l},nonce:o});case"script":return Z.jsx(ax,{attrs:r,children:l});default:return null}}function ax({attrs:n,children:r}){const l=xt();if(K.useEffect(()=>{if(n?.src){const o=(()=>{try{const d=document.baseURI||window.location.href;return new URL(n.src,d).href}catch{return n.src}})();if(Array.from(document.querySelectorAll("script[src]")).find(d=>d.src===o))return;const f=document.createElement("script");for(const[d,m]of Object.entries(n))d!=="suppressHydrationWarning"&&m!==void 0&&m!==!1&&f.setAttribute(d,typeof m=="boolean"?"":String(m));return document.head.appendChild(f),()=>{f.parentNode&&f.parentNode.removeChild(f)}}if(typeof r=="string"){const o=typeof n?.type=="string"?n.type:"text/javascript",u=typeof n?.nonce=="string"?n.nonce:void 0;if(Array.from(document.querySelectorAll("script:not([src])")).find(m=>{if(!(m instanceof HTMLScriptElement))return!1;const g=m.getAttribute("type")??"text/javascript",p=m.getAttribute("nonce")??void 0;return m.textContent===r&&g===o&&p===u}))return;const d=document.createElement("script");if(d.textContent=r,n)for(const[m,g]of Object.entries(n))m!=="suppressHydrationWarning"&&g!==void 0&&g!==!1&&d.setAttribute(m,typeof g=="boolean"?"":String(g));return document.head.appendChild(d),()=>{d.parentNode&&d.parentNode.removeChild(d)}}},[n,r]),!l.isServer){const{src:o,...u}=n||{};return Z.jsx("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""},...u})}return n?.src&&typeof n.src=="string"?Z.jsx("script",{...n,suppressHydrationWarning:!0}):typeof r=="string"?Z.jsx("script",{...n,dangerouslySetInnerHTML:{__html:r},suppressHydrationWarning:!0}):null}const ix=()=>{const n=xt(),r=n.options.ssr?.nonce,l=ot({select:g=>g.matches.map(p=>p.meta).filter(Boolean)}),o=K.useMemo(()=>{const g=[],p={};let v;for(let y=l.length-1;y>=0;y--){const S=l[y];for(let C=S.length-1;C>=0;C--){const w=S[C];if(w)if(w.title)v||(v={tag:"title",children:w.title});else{const _=w.name??w.property;if(_){if(p[_])continue;p[_]=!0}g.push({tag:"meta",attrs:{...w,nonce:r}})}}}return v&&g.push(v),r&&g.push({tag:"meta",attrs:{property:"csp-nonce",content:r}}),g.reverse(),g},[l,r]),u=ot({select:g=>{const p=g.matches.map(S=>S.links).filter(Boolean).flat(1).map(S=>({tag:"link",attrs:{...S,nonce:r}})),v=n.ssr?.manifest,y=g.matches.map(S=>v?.routes[S.routeId]?.assets??[]).filter(Boolean).flat(1).filter(S=>S.tag==="link").map(S=>({tag:"link",attrs:{...S.attrs,suppressHydrationWarning:!0,nonce:r}}));return[...p,...y]},structuralSharing:!0}),f=ot({select:g=>{const p=[];return g.matches.map(v=>n.looseRoutesById[v.routeId]).forEach(v=>n.ssr?.manifest?.routes[v.id]?.preloads?.filter(Boolean).forEach(y=>{p.push({tag:"link",attrs:{rel:"modulepreload",href:y,nonce:r}})})),p},structuralSharing:!0}),d=ot({select:g=>g.matches.map(p=>p.styles).flat(1).filter(Boolean).map(({children:p,...v})=>({tag:"style",attrs:v,children:p,nonce:r})),structuralSharing:!0}),m=ot({select:g=>g.matches.map(p=>p.headScripts).flat(1).filter(Boolean).map(({children:p,...v})=>({tag:"script",attrs:{...v,nonce:r},children:p})),structuralSharing:!0});return lx([...o,...f,...u,...d,...m],g=>JSON.stringify(g))};function rx(){const n=ix(),l=xt().options.ssr?.nonce;return n.map(o=>K.createElement(nx,{...o,key:`tsr-meta-${JSON.stringify(o)}`,nonce:l}))}function lx(n,r){const l=new Set;return n.filter(o=>{const u=r(o);return l.has(u)?!1:(l.add(u),!0)})}var Cf={exports:{}},sl={},_f={exports:{}},wf={};var Kg;function ox(){return Kg||(Kg=1,(function(n){function r(q,W){var oe=q.length;q.push(W);e:for(;0<oe;){var Ce=oe-1>>>1,Te=q[Ce];if(0<u(Te,W))q[Ce]=W,q[oe]=Te,oe=Ce;else break e}}function l(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var W=q[0],oe=q.pop();if(oe!==W){q[0]=oe;e:for(var Ce=0,Te=q.length,M=Te>>>1;Ce<M;){var V=2*(Ce+1)-1,te=q[V],ae=V+1,ue=q[ae];if(0>u(te,oe))ae<Te&&0>u(ue,te)?(q[Ce]=ue,q[ae]=oe,Ce=ae):(q[Ce]=te,q[V]=oe,Ce=V);else if(ae<Te&&0>u(ue,oe))q[Ce]=ue,q[ae]=oe,Ce=ae;else break e}}return W}function u(q,W){var oe=q.sortIndex-W.sortIndex;return oe!==0?oe:q.id-W.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var g=[],p=[],v=1,y=null,S=3,C=!1,w=!1,_=!1,R=!1,L=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function $(q){for(var W=l(p);W!==null;){if(W.callback===null)o(p);else if(W.startTime<=q)o(p),W.sortIndex=W.expirationTime,r(g,W);else break;W=l(p)}}function B(q){if(_=!1,$(q),!w)if(l(g)!==null)w=!0,O||(O=!0,x());else{var W=l(p);W!==null&&re(B,W.startTime-q)}}var O=!1,k=-1,H=5,Q=-1;function ee(){return R?!0:!(n.unstable_now()-Q<H)}function I(){if(R=!1,O){var q=n.unstable_now();Q=q;var W=!0;try{e:{w=!1,_&&(_=!1,G(k),k=-1),C=!0;var oe=S;try{t:{for($(q),y=l(g);y!==null&&!(y.expirationTime>q&&ee());){var Ce=y.callback;if(typeof Ce=="function"){y.callback=null,S=y.priorityLevel;var Te=Ce(y.expirationTime<=q);if(q=n.unstable_now(),typeof Te=="function"){y.callback=Te,$(q),W=!0;break t}y===l(g)&&o(g),$(q)}else o(g);y=l(g)}if(y!==null)W=!0;else{var M=l(p);M!==null&&re(B,M.startTime-q),W=!1}}break e}finally{y=null,S=oe,C=!1}W=void 0}}finally{W?x():O=!1}}}var x;if(typeof U=="function")x=function(){U(I)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,F=ne.port2;ne.port1.onmessage=I,x=function(){F.postMessage(null)}}else x=function(){L(I,0)};function re(q,W){k=L(function(){q(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(q){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var oe=S;S=W;try{return q()}finally{S=oe}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var oe=S;S=q;try{return W()}finally{S=oe}},n.unstable_scheduleCallback=function(q,W,oe){var Ce=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ce+oe:Ce):oe=Ce,q){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=oe+Te,q={id:v++,callback:W,priorityLevel:q,startTime:oe,expirationTime:Te,sortIndex:-1},oe>Ce?(q.sortIndex=oe,r(p,q),l(g)===null&&q===l(p)&&(_?(G(k),k=-1):_=!0,re(B,oe-Ce))):(q.sortIndex=Te,r(g,q),w||C||(w=!0,O||(O=!0,x()))),q},n.unstable_shouldYield=ee,n.unstable_wrapCallback=function(q){var W=S;return function(){var oe=S;S=W;try{return q.apply(this,arguments)}finally{S=oe}}}})(wf)),wf}var Qg;function sx(){return Qg||(Qg=1,_f.exports=ox()),_f.exports}var Zg;function ux(){if(Zg)return sl;Zg=1;var n=sx(),r=Al(),l=tb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){a=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return g(s),e;if(c===i)return g(s),t;c=c.sibling}throw Error(o(188))}if(a.return!==i.return)a=s,i=c;else{for(var h=!1,b=s.child;b;){if(b===a){h=!0,a=s,i=c;break}if(b===i){h=!0,i=s,a=c;break}b=b.sibling}if(!h){for(b=c.child;b;){if(b===a){h=!0,a=c,i=s;break}if(b===i){h=!0,i=c,a=s;break}b=b.sibling}if(!h)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),U=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function x(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Symbol.for("react.client.reference");function F(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case L:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case O:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case U:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:F(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}var re=Array.isArray,q=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Ce=[],Te=-1;function M(e){return{current:e}}function V(e){0>Te||(e.current=Ce[Te],Ce[Te]=null,Te--)}function te(e,t){Te++,Ce[Te]=e.current,e.current=t}var ae=M(null),ue=M(null),fe=M(null),me=M(null);function Xe(e,t){switch(te(fe,t),te(ue,e),te(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xp(t),e=Jp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ae),te(ae,e)}function Ae(){V(ae),V(ue),V(fe)}function un(e){e.memoizedState!==null&&te(me,e);var t=ae.current,a=Jp(t,e.type);t!==a&&(te(ue,e),te(ae,a))}function pn(e){ue.current===e&&(V(ae),V(ue)),me.current===e&&(V(me),el._currentValue=oe)}var wt,Ea;function Xt(e){if(wt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);wt=t&&t[1]||"",Ea=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wt+e+Ea}var Rn=!1;function Oa(e,t){if(!e||Rn)return"";Rn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(N){var j=N}Reflect.construct(e,[],J)}else{try{J.call()}catch(N){j=N}e.call(J.prototype)}}else{try{throw Error()}catch(N){j=N}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(N){if(N&&j&&typeof N.stack=="string")return[N.stack,j.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),h=c[0],b=c[1];if(h&&b){var T=h.split(`
`),D=b.split(`
`);for(s=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;if(i===T.length||s===D.length)for(i=T.length-1,s=D.length-1;1<=i&&0<=s&&T[i]!==D[s];)s--;for(;1<=i&&0<=s;i--,s--)if(T[i]!==D[s]){if(i!==1||s!==1)do if(i--,s--,0>s||T[i]!==D[s]){var Y=`
`+T[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=s);break}}}finally{Rn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function fi(e,t){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return e.child!==t&&t!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Oa(e.type,!1);case 11:return Oa(e.type.render,!1);case 1:return Oa(e.type,!0);case 31:return Xt("Activity");default:return""}}function Fn(e){try{var t="",a=null;do t+=fi(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var et=Object.prototype.hasOwnProperty,Dt=n.unstable_scheduleCallback,gn=n.unstable_cancelCallback,yn=n.unstable_shouldYield,Oe=n.unstable_requestPaint,xe=n.unstable_now,bt=n.unstable_getCurrentPriorityLevel,st=n.unstable_ImmediatePriority,Ve=n.unstable_UserBlockingPriority,ft=n.unstable_NormalPriority,Jt=n.unstable_LowPriority,di=n.unstable_IdlePriority,Xs=n.log,Zb=n.unstable_setDisableYieldValue,dr=null,kt=null;function Wn(e){if(typeof Xs=="function"&&Zb(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(dr,e)}catch{}}var qt=Math.clz32?Math.clz32:Ib,Fb=Math.log,Wb=Math.LN2;function Ib(e){return e>>>=0,e===0?32:31-(Fb(e)/Wb|0)|0}var Bl=256,jl=262144,Nl=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ul(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~c,i!==0?s=La(i):(h&=b,h!==0?s=La(h):a||(a=b&~e,a!==0&&(s=La(a))))):(b=i&~c,b!==0?s=La(b):h!==0?s=La(h):a||(a=i&~e,a!==0&&(s=La(a)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:s}function mr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function e0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(){var e=Nl;return Nl<<=1,(Nl&62914560)===0&&(Nl=4194304),e}function Js(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function hr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,t,a,i,s,c){var h=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,D=e.hiddenUpdates;for(a=h&~a;0<a;){var Y=31-qt(a),J=1<<Y;b[Y]=0,T[Y]=-1;var j=D[Y];if(j!==null)for(D[Y]=null,Y=0;Y<j.length;Y++){var N=j[Y];N!==null&&(N.lane&=-536870913)}a&=~J}i!==0&&Rd(e,i,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function Rd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-qt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Ed(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-qt(a),s=1<<i;s&t|e[i]&t&&(e[i]|=t),a&=~s}}function Od(e,t){var a=t&-t;return a=(a&42)!==0?1:Ks(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ld(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:gg(e.type))}function zd(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var In=Math.random().toString(36).slice(2),dt="__reactFiber$"+In,Tt="__reactProps$"+In,mi="__reactContainer$"+In,Zs="__reactEvents$"+In,n0="__reactListeners$"+In,a0="__reactHandles$"+In,Dd="__reactResources$"+In,pr="__reactMarker$"+In;function Fs(e){delete e[dt],delete e[Tt],delete e[Zs],delete e[n0],delete e[a0]}function hi(e){var t=e[dt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[mi]||a[dt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=eg(e);e!==null;){if(a=e[dt])return a;e=eg(e)}return t}e=a,a=e.parentNode}return null}function pi(e){if(e=e[dt]||e[mi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function gi(e){var t=e[Dd];return t||(t=e[Dd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[pr]=!0}var kd=new Set,qd={};function za(e,t){yi(e,t),yi(e+"Capture",t)}function yi(e,t){for(qd[e]=t,e=0;e<t.length;e++)kd.add(t[e])}var i0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bd={},jd={};function r0(e){return et.call(jd,e)?!0:et.call(Bd,e)?!1:i0.test(e)?jd[e]=!0:(Bd[e]=!0,!1)}function Hl(e,t,a){if(r0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function En(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l0(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ws(e){if(!e._valueTracker){var t=Nd(e)?"checked":"value";e._valueTracker=l0(e,t,""+e[t])}}function Ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Nd(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o0=/[\n"\\]/g;function Qt(e){return e.replace(o0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Is(e,t,a,i,s,c,h,b){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?eu(e,h,Kt(t)):a!=null?eu(e,h,Kt(a)):i!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Kt(b):e.removeAttribute("name")}function Hd(e,t,a,i,s,c,h,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ws(e);return}a=a!=null?""+Kt(a):"",t=t!=null?""+Kt(t):a,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Ws(e)}function eu(e,t,a){t==="number"&&$l(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bi(e,t,a,i){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Kt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Gd(e,t,a){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Kt(a):""}function $d(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(re(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Kt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ws(e)}function vi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vd(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||s0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yd(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&a[s]!==i&&Vd(e,s,i)}else for(var c in t)t.hasOwnProperty(c)&&Vd(e,c,t[c])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return c0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function On(){}var nu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,xi=null;function Pd(e){var t=pi(e);if(t&&(e=t.stateNode)){var a=e[Tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Is(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var s=i[Tt]||null;if(!s)throw Error(o(90));Is(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Ud(i)}break e;case"textarea":Gd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&bi(e,!!a.multiple,t,!1)}}}var iu=!1;function Xd(e,t,a){if(iu)return e(t,a);iu=!0;try{var i=e(t);return i}finally{if(iu=!1,(Si!==null||xi!==null)&&(Lo(),Si&&(t=Si,e=xi,xi=Si=null,Pd(t),e)))for(t=0;t<e.length;t++)Pd(e[t])}}function yr(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Tt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Ln)try{var br={};Object.defineProperty(br,"passive",{get:function(){ru=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{ru=!1}var ea=null,lu=null,Yl=null;function Jd(){if(Yl)return Yl;var e,t=lu,a=t.length,i,s="value"in ea?ea.value:ea.textContent,c=s.length;for(e=0;e<a&&t[e]===s[e];e++);var h=a-e;for(i=1;i<=h&&t[a-i]===s[c-i];i++);return Yl=s.slice(e,1<i?1-i:void 0)}function Pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xl(){return!0}function Kd(){return!1}function At(e){function t(a,i,s,c,h){this._reactName=a,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Xl:Kd,this.isPropagationStopped=Kd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=At(Da),vr=y({},Da,{view:0,detail:0}),f0=At(vr),ou,su,Sr,Kl=y({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(ou=e.screenX-Sr.screenX,su=e.screenY-Sr.screenY):su=ou=0,Sr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:su}}),Qd=At(Kl),d0=y({},Kl,{dataTransfer:0}),m0=At(d0),h0=y({},vr,{relatedTarget:0}),uu=At(h0),p0=y({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=At(p0),y0=y({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b0=At(y0),v0=y({},Da,{data:0}),Zd=At(v0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C0[e])?!!t[e]:!1}function cu(){return _0}var w0=y({},vr,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=At(w0),A0=y({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=At(A0),M0=y({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),R0=At(M0),E0=y({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=At(E0),L0=y({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=At(L0),D0=y({},Da,{newState:0,oldState:0}),k0=At(D0),q0=[9,13,27,32],fu=Ln&&"CompositionEvent"in window,xr=null;Ln&&"documentMode"in document&&(xr=document.documentMode);var B0=Ln&&"TextEvent"in window&&!xr,Wd=Ln&&(!fu||xr&&8<xr&&11>=xr),Id=" ",em=!1;function tm(e,t){switch(e){case"keyup":return q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ci=!1;function j0(e,t){switch(e){case"compositionend":return nm(t);case"keypress":return t.which!==32?null:(em=!0,Id);case"textInput":return e=t.data,e===Id&&em?null:e;default:return null}}function N0(e,t){if(Ci)return e==="compositionend"||!fu&&tm(e,t)?(e=Jd(),Yl=lu=ea=null,Ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wd&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function im(e,t,a,i){Si?xi?xi.push(i):xi=[i]:Si=i,t=No(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Cr=null,_r=null;function H0(e){Hp(e,0)}function Ql(e){var t=gr(e);if(Ud(t))return e}function rm(e,t){if(e==="change")return t}var lm=!1;if(Ln){var du;if(Ln){var mu="oninput"in document;if(!mu){var om=document.createElement("div");om.setAttribute("oninput","return;"),mu=typeof om.oninput=="function"}du=mu}else du=!1;lm=du&&(!document.documentMode||9<document.documentMode)}function sm(){Cr&&(Cr.detachEvent("onpropertychange",um),_r=Cr=null)}function um(e){if(e.propertyName==="value"&&Ql(_r)){var t=[];im(t,_r,e,au(e)),Xd(H0,t)}}function G0(e,t,a){e==="focusin"?(sm(),Cr=t,_r=a,Cr.attachEvent("onpropertychange",um)):e==="focusout"&&sm()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(_r)}function V0(e,t){if(e==="click")return Ql(t)}function Y0(e,t){if(e==="input"||e==="change")return Ql(t)}function P0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:P0;function wr(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var s=a[i];if(!et.call(t,s)||!Bt(e[s],t[s]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,t){var a=cm(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cm(a)}}function dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$l(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$l(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var X0=Ln&&"documentMode"in document&&11>=document.documentMode,_i=null,pu=null,Tr=null,gu=!1;function hm(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||_i==null||_i!==$l(i)||(i=_i,"selectionStart"in i&&hu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tr&&wr(Tr,i)||(Tr=i,i=No(pu,"onSelect"),0<i.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=_i)))}function ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var wi={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},yu={},pm={};Ln&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function qa(e){if(yu[e])return yu[e];if(!wi[e])return e;var t=wi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in pm)return yu[e]=t[a];return e}var gm=qa("animationend"),ym=qa("animationiteration"),bm=qa("animationstart"),J0=qa("transitionrun"),K0=qa("transitionstart"),Q0=qa("transitioncancel"),vm=qa("transitionend"),Sm=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function cn(e,t){Sm.set(e,t),za(t,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],Ti=0,vu=0;function Fl(){for(var e=Ti,t=vu=Ti=0;t<e;){var a=Zt[t];Zt[t++]=null;var i=Zt[t];Zt[t++]=null;var s=Zt[t];Zt[t++]=null;var c=Zt[t];if(Zt[t++]=null,i!==null&&s!==null){var h=i.pending;h===null?s.next=s:(s.next=h.next,h.next=s),i.pending=s}c!==0&&xm(a,s,c)}}function Wl(e,t,a,i){Zt[Ti++]=e,Zt[Ti++]=t,Zt[Ti++]=a,Zt[Ti++]=i,vu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Su(e,t,a,i){return Wl(e,t,a,i),Il(e)}function Ba(e,t){return Wl(e,null,null,t),Il(e)}function xm(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var s=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-qt(a),e=c.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=a|536870912),c):null}function Il(e){if(50<Jr)throw Jr=0,Ec=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ai={};function Z0(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,i){return new Z0(e,t,a,i)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zn(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function eo(e,t,a,i,s,c){var h=0;if(i=e,typeof e=="function")xu(e)&&(h=1);else if(typeof e=="string")h=tS(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=jt(31,a,t,s),e.elementType=Q,e.lanes=c,e;case _:return ja(a.children,s,c,t);case R:h=8,s|=24;break;case L:return e=jt(12,a,t,s|2),e.elementType=L,e.lanes=c,e;case B:return e=jt(13,a,t,s),e.elementType=B,e.lanes=c,e;case O:return e=jt(19,a,t,s),e.elementType=O,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:h=10;break e;case G:h=9;break e;case $:h=11;break e;case k:h=14;break e;case H:h=16,i=null;break e}h=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=jt(h,a,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function ja(e,t,a,i){return e=jt(7,e,i,t),e.lanes=a,e}function Cu(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function _m(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function _u(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wm=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var a=wm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Fn(t)},wm.set(e,t),t)}return{value:e,source:t,stack:Fn(t)}}var Mi=[],Ri=0,to=null,Ar=0,Wt=[],It=0,ta=null,bn=1,vn="";function Dn(e,t){Mi[Ri++]=Ar,Mi[Ri++]=to,to=e,Ar=t}function Tm(e,t,a){Wt[It++]=bn,Wt[It++]=vn,Wt[It++]=ta,ta=e;var i=bn;e=vn;var s=32-qt(i)-1;i&=~(1<<s),a+=1;var c=32-qt(t)+s;if(30<c){var h=s-s%5;c=(i&(1<<h)-1).toString(32),i>>=h,s-=h,bn=1<<32-qt(t)+s|a<<s|i,vn=c+e}else bn=1<<c|a<<s|i,vn=e}function wu(e){e.return!==null&&(Dn(e,1),Tm(e,1,0))}function Tu(e){for(;e===to;)to=Mi[--Ri],Mi[Ri]=null,Ar=Mi[--Ri],Mi[Ri]=null;for(;e===ta;)ta=Wt[--It],Wt[It]=null,vn=Wt[--It],Wt[It]=null,bn=Wt[--It],Wt[It]=null}function Am(e,t){Wt[It++]=bn,Wt[It++]=vn,Wt[It++]=ta,bn=t.id,vn=t.overflow,ta=e}var mt=null,Ge=null,Se=!1,na=null,en=!1,Au=Error(o(519));function aa(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mr(Ft(t,e)),Au}function Mm(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[dt]=e,t[Tt]=i,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<Qr.length;a++)ye(Qr[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),Hd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),$d(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Yp(t.textContent,a)?(i.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),i.onScroll!=null&&ye("scroll",t),i.onScrollEnd!=null&&ye("scrollend",t),i.onClick!=null&&(t.onclick=On),t=!0):t=!1,t||aa(e,!0)}function Rm(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:mt=mt.return}}function Ei(e){if(e!==mt)return!1;if(!Se)return Rm(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yc(e.type,e.memoizedProps)),a=!a),a&&Ge&&aa(e),Rm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=Ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=Ip(e)}else t===27?(t=Ge,ya(e.type)?(e=Qc,Qc=null,Ge=e):Ge=t):Ge=mt?nn(e.stateNode.nextSibling):null;return!0}function Na(){Ge=mt=null,Se=!1}function Mu(){var e=na;return e!==null&&(Ot===null?Ot=e:Ot.push.apply(Ot,e),na=null),e}function Mr(e){na===null?na=[e]:na.push(e)}var Ru=M(null),Ua=null,kn=null;function ia(e,t,a){te(Ru,t._currentValue),t._currentValue=a}function qn(e){e._currentValue=Ru.current,V(Ru)}function Eu(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Ou(e,t,a,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var h=s.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=s;for(var T=0;T<t.length;T++)if(b.context===t[T]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Eu(c.return,a,e),i||(h=null);break e}c=b.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(o(341));h.lanes|=a,c=h.alternate,c!==null&&(c.lanes|=a),Eu(h,a,e),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===e){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function Oi(e,t,a,i){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var b=s.type;Bt(s.pendingProps.value,h.value)||(e!==null?e.push(b):e=[b])}}else if(s===me.current){if(h=s.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(el):e=[el])}s=s.return}e!==null&&Ou(t,e,a,i),t.flags|=262144}function no(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ua=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Em(Ua,e)}function ao(e,t){return Ua===null&&Ha(e),Em(e,t)}function Em(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kn===null){if(e===null)throw Error(o(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return a}var F0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},W0=n.unstable_scheduleCallback,I0=n.unstable_NormalPriority,tt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new F0,data:new Map,refCount:0}}function Rr(e){e.refCount--,e.refCount===0&&W0(I0,function(){e.controller.abort()})}var Er=null,zu=0,Li=0,zi=null;function ev(e,t){if(Er===null){var a=Er=[];zu=0,Li=qc(),zi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return zu++,t.then(Om,Om),t}function Om(){if(--zu===0&&Er!==null){zi!==null&&(zi.status="fulfilled");var e=Er;Er=null,Li=0,zi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tv(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),i}var Lm=q.S;q.S=function(e,t){hp=xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ev(e,t),Lm!==null&&Lm(e,t)};var Ga=M(null);function Du(){var e=Ga.current;return e!==null?e:He.pooledCache}function io(e,t){t===null?te(Ga,Ga.current):te(Ga,t.pool)}function zm(){var e=Du();return e===null?null:{parent:tt._currentValue,pool:e}}var Di=Error(o(460)),ku=Error(o(474)),ro=Error(o(542)),lo={then:function(){}};function Dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function km(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(On,On),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e;default:if(typeof t.status=="string")t.then(On,On);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e}throw Va=t,Di}}function $a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,Di):a}}var Va=null;function qm(){if(Va===null)throw Error(o(459));var e=Va;return Va=null,e}function Bm(e){if(e===Di||e===ro)throw Error(o(483))}var ki=null,Or=0;function oo(e){var t=Or;return Or+=1,ki===null&&(ki=[]),km(ki,e,t)}function Lr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function so(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jm(e){function t(E,A){if(e){var z=E.deletions;z===null?(E.deletions=[A],E.flags|=16):z.push(A)}}function a(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function i(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function s(E,A){return E=zn(E,A),E.index=0,E.sibling=null,E}function c(E,A,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<A?(E.flags|=67108866,A):z):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function h(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function b(E,A,z,X){return A===null||A.tag!==6?(A=Cu(z,E.mode,X),A.return=E,A):(A=s(A,z),A.return=E,A)}function T(E,A,z,X){var se=z.type;return se===_?Y(E,A,z.props.children,X,z.key):A!==null&&(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===H&&$a(se)===A.type)?(A=s(A,z.props),Lr(A,z),A.return=E,A):(A=eo(z.type,z.key,z.props,null,E.mode,X),Lr(A,z),A.return=E,A)}function D(E,A,z,X){return A===null||A.tag!==4||A.stateNode.containerInfo!==z.containerInfo||A.stateNode.implementation!==z.implementation?(A=_u(z,E.mode,X),A.return=E,A):(A=s(A,z.children||[]),A.return=E,A)}function Y(E,A,z,X,se){return A===null||A.tag!==7?(A=ja(z,E.mode,X,se),A.return=E,A):(A=s(A,z),A.return=E,A)}function J(E,A,z){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Cu(""+A,E.mode,z),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return z=eo(A.type,A.key,A.props,null,E.mode,z),Lr(z,A),z.return=E,z;case w:return A=_u(A,E.mode,z),A.return=E,A;case H:return A=$a(A),J(E,A,z)}if(re(A)||x(A))return A=ja(A,E.mode,z,null),A.return=E,A;if(typeof A.then=="function")return J(E,oo(A),z);if(A.$$typeof===U)return J(E,ao(E,A),z);so(E,A)}return null}function j(E,A,z,X){var se=A!==null?A.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return se!==null?null:b(E,A,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return z.key===se?T(E,A,z,X):null;case w:return z.key===se?D(E,A,z,X):null;case H:return z=$a(z),j(E,A,z,X)}if(re(z)||x(z))return se!==null?null:Y(E,A,z,X,null);if(typeof z.then=="function")return j(E,A,oo(z),X);if(z.$$typeof===U)return j(E,A,ao(E,z),X);so(E,z)}return null}function N(E,A,z,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return E=E.get(z)||null,b(A,E,""+X,se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case C:return E=E.get(X.key===null?z:X.key)||null,T(A,E,X,se);case w:return E=E.get(X.key===null?z:X.key)||null,D(A,E,X,se);case H:return X=$a(X),N(E,A,z,X,se)}if(re(X)||x(X))return E=E.get(z)||null,Y(A,E,X,se,null);if(typeof X.then=="function")return N(E,A,z,oo(X),se);if(X.$$typeof===U)return N(E,A,z,ao(A,X),se);so(A,X)}return null}function ie(E,A,z,X){for(var se=null,_e=null,le=A,pe=A=0,ve=null;le!==null&&pe<z.length;pe++){le.index>pe?(ve=le,le=null):ve=le.sibling;var we=j(E,le,z[pe],X);if(we===null){le===null&&(le=ve);break}e&&le&&we.alternate===null&&t(E,le),A=c(we,A,pe),_e===null?se=we:_e.sibling=we,_e=we,le=ve}if(pe===z.length)return a(E,le),Se&&Dn(E,pe),se;if(le===null){for(;pe<z.length;pe++)le=J(E,z[pe],X),le!==null&&(A=c(le,A,pe),_e===null?se=le:_e.sibling=le,_e=le);return Se&&Dn(E,pe),se}for(le=i(le);pe<z.length;pe++)ve=N(le,E,pe,z[pe],X),ve!==null&&(e&&ve.alternate!==null&&le.delete(ve.key===null?pe:ve.key),A=c(ve,A,pe),_e===null?se=ve:_e.sibling=ve,_e=ve);return e&&le.forEach(function(Ca){return t(E,Ca)}),Se&&Dn(E,pe),se}function ce(E,A,z,X){if(z==null)throw Error(o(151));for(var se=null,_e=null,le=A,pe=A=0,ve=null,we=z.next();le!==null&&!we.done;pe++,we=z.next()){le.index>pe?(ve=le,le=null):ve=le.sibling;var Ca=j(E,le,we.value,X);if(Ca===null){le===null&&(le=ve);break}e&&le&&Ca.alternate===null&&t(E,le),A=c(Ca,A,pe),_e===null?se=Ca:_e.sibling=Ca,_e=Ca,le=ve}if(we.done)return a(E,le),Se&&Dn(E,pe),se;if(le===null){for(;!we.done;pe++,we=z.next())we=J(E,we.value,X),we!==null&&(A=c(we,A,pe),_e===null?se=we:_e.sibling=we,_e=we);return Se&&Dn(E,pe),se}for(le=i(le);!we.done;pe++,we=z.next())we=N(le,E,pe,we.value,X),we!==null&&(e&&we.alternate!==null&&le.delete(we.key===null?pe:we.key),A=c(we,A,pe),_e===null?se=we:_e.sibling=we,_e=we);return e&&le.forEach(function(dS){return t(E,dS)}),Se&&Dn(E,pe),se}function Ne(E,A,z,X){if(typeof z=="object"&&z!==null&&z.type===_&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case C:e:{for(var se=z.key;A!==null;){if(A.key===se){if(se=z.type,se===_){if(A.tag===7){a(E,A.sibling),X=s(A,z.props.children),X.return=E,E=X;break e}}else if(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===H&&$a(se)===A.type){a(E,A.sibling),X=s(A,z.props),Lr(X,z),X.return=E,E=X;break e}a(E,A);break}else t(E,A);A=A.sibling}z.type===_?(X=ja(z.props.children,E.mode,X,z.key),X.return=E,E=X):(X=eo(z.type,z.key,z.props,null,E.mode,X),Lr(X,z),X.return=E,E=X)}return h(E);case w:e:{for(se=z.key;A!==null;){if(A.key===se)if(A.tag===4&&A.stateNode.containerInfo===z.containerInfo&&A.stateNode.implementation===z.implementation){a(E,A.sibling),X=s(A,z.children||[]),X.return=E,E=X;break e}else{a(E,A);break}else t(E,A);A=A.sibling}X=_u(z,E.mode,X),X.return=E,E=X}return h(E);case H:return z=$a(z),Ne(E,A,z,X)}if(re(z))return ie(E,A,z,X);if(x(z)){if(se=x(z),typeof se!="function")throw Error(o(150));return z=se.call(z),ce(E,A,z,X)}if(typeof z.then=="function")return Ne(E,A,oo(z),X);if(z.$$typeof===U)return Ne(E,A,ao(E,z),X);so(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,A!==null&&A.tag===6?(a(E,A.sibling),X=s(A,z),X.return=E,E=X):(a(E,A),X=Cu(z,E.mode,X),X.return=E,E=X),h(E)):a(E,A)}return function(E,A,z,X){try{Or=0;var se=Ne(E,A,z,X);return ki=null,se}catch(le){if(le===Di||le===ro)throw le;var _e=jt(29,le,null,E.mode);return _e.lanes=X,_e.return=E,_e}finally{}}}var Ya=jm(!0),Nm=jm(!1),ra=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Me&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Il(e),xm(e,null,a),t}return Wl(e,i,t,a),Il(e)}function zr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Ed(e,a)}}function ju(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=h:c=c.next=h,a=a.next}while(a!==null);c===null?s=c=t:c=c.next=t}else s=c=t;a={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nu=!1;function Dr(){if(Nu){var e=zi;if(e!==null)throw e}}function kr(e,t,a,i){Nu=!1;var s=e.updateQueue;ra=!1;var c=s.firstBaseUpdate,h=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var T=b,D=T.next;T.next=null,h===null?c=D:h.next=D,h=T;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==h&&(b===null?Y.firstBaseUpdate=D:b.next=D,Y.lastBaseUpdate=T))}if(c!==null){var J=s.baseState;h=0,Y=D=T=null,b=c;do{var j=b.lane&-536870913,N=j!==b.lane;if(N?(be&j)===j:(i&j)===j){j!==0&&j===Li&&(Nu=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ie=e,ce=b;j=t;var Ne=a;switch(ce.tag){case 1:if(ie=ce.payload,typeof ie=="function"){J=ie.call(Ne,J,j);break e}J=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ce.payload,j=typeof ie=="function"?ie.call(Ne,J,j):ie,j==null)break e;J=y({},J,j);break e;case 2:ra=!0}}j=b.callback,j!==null&&(e.flags|=64,N&&(e.flags|=8192),N=s.callbacks,N===null?s.callbacks=[j]:N.push(j))}else N={lane:j,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(D=Y=N,T=J):Y=Y.next=N,h|=j;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;N=b,b=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);Y===null&&(T=J),s.baseState=T,s.firstBaseUpdate=D,s.lastBaseUpdate=Y,c===null&&(s.shared.lanes=0),da|=h,e.lanes=h,e.memoizedState=J}}function Um(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Hm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Um(a[e],t)}var qi=M(null),uo=M(0);function Gm(e,t){e=Yn,te(uo,e),te(qi,t),Yn=e|t.baseLanes}function Uu(){te(uo,Yn),te(qi,qi.current)}function Hu(){Yn=uo.current,V(qi),V(uo)}var Nt=M(null),tn=null;function sa(e){var t=e.alternate;te(Fe,Fe.current&1),te(Nt,e),tn===null&&(t===null||qi.current!==null||t.memoizedState!==null)&&(tn=e)}function Gu(e){te(Fe,Fe.current),te(Nt,e),tn===null&&(tn=e)}function $m(e){e.tag===22?(te(Fe,Fe.current),te(Nt,e),tn===null&&(tn=e)):ua()}function ua(){te(Fe,Fe.current),te(Nt,Nt.current)}function Ut(e){V(Nt),tn===e&&(tn=null),V(Fe)}var Fe=M(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jc(a)||Kc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bn=0,he=null,Be=null,nt=null,fo=!1,Bi=!1,Pa=!1,mo=0,qr=0,ji=null,nv=0;function Je(){throw Error(o(321))}function $u(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Bt(e[a],t[a]))return!1;return!0}function Vu(e,t,a,i,s,c){return Bn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?Th:ic,Pa=!1,c=a(i,s),Pa=!1,Bi&&(c=Ym(t,a,i,s)),Vm(e),c}function Vm(e){q.H=Nr;var t=Be!==null&&Be.next!==null;if(Bn=0,nt=Be=he=null,fo=!1,qr=0,ji=null,t)throw Error(o(300));e===null||at||(e=e.dependencies,e!==null&&no(e)&&(at=!0))}function Ym(e,t,a,i){he=e;var s=0;do{if(Bi&&(ji=null),qr=0,Bi=!1,25<=s)throw Error(o(301));if(s+=1,nt=Be=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}q.H=Ah,c=t(a,i)}while(Bi);return c}function av(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?Br(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(he.flags|=1024),t}function Yu(){var e=mo!==0;return mo=0,e}function Pu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xu(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}Bn=0,nt=Be=he=null,Bi=!1,qr=mo=0,ji=null}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?he.memoizedState=nt=e:nt=nt.next=e,nt}function We(){if(Be===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=nt===null?he.memoizedState:nt.next;if(t!==null)nt=t,Be=e;else{if(e===null)throw he.alternate===null?Error(o(467)):Error(o(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},nt===null?he.memoizedState=nt=e:nt=nt.next=e}return nt}function ho(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Br(e){var t=qr;return qr+=1,ji===null&&(ji=[]),e=km(ji,e,t),t=he,(nt===null?t.memoizedState:nt.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?Th:ic),e}function po(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Br(e);if(e.$$typeof===U)return ht(e)}throw Error(o(438,String(e)))}function Ju(e){var t=null,a=he.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=he.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ho(),he.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ee;return t.index++,a}function jn(e,t){return typeof t=="function"?t(e):t}function go(e){var t=We();return Ku(t,Be,e)}function Ku(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var s=e.baseQueue,c=i.pending;if(c!==null){if(s!==null){var h=s.next;s.next=c.next,c.next=h}t.baseQueue=s=c,i.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var b=h=null,T=null,D=t,Y=!1;do{var J=D.lane&-536870913;if(J!==D.lane?(be&J)===J:(Bn&J)===J){var j=D.revertLane;if(j===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),J===Li&&(Y=!0);else if((Bn&j)===j){D=D.next,j===Li&&(Y=!0);continue}else J={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(b=T=J,h=c):T=T.next=J,he.lanes|=j,da|=j;J=D.action,Pa&&a(c,J),c=D.hasEagerState?D.eagerState:a(c,J)}else j={lane:J,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(b=T=j,h=c):T=T.next=j,he.lanes|=J,da|=J;D=D.next}while(D!==null&&D!==t);if(T===null?h=c:T.next=b,!Bt(c,e.memoizedState)&&(at=!0,Y&&(a=zi,a!==null)))throw a;e.memoizedState=c,e.baseState=h,e.baseQueue=T,i.lastRenderedState=c}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Qu(e){var t=We(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,s=a.pending,c=t.memoizedState;if(s!==null){a.pending=null;var h=s=s.next;do c=e(c,h.action),h=h.next;while(h!==s);Bt(c,t.memoizedState)||(at=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,i]}function Pm(e,t,a){var i=he,s=We(),c=Se;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=t();var h=!Bt((Be||s).memoizedState,a);if(h&&(s.memoizedState=a,at=!0),s=s.queue,Wu(Km.bind(null,i,s,e),[e]),s.getSnapshot!==t||h||nt!==null&&nt.memoizedState.tag&1){if(i.flags|=2048,Ni(9,{destroy:void 0},Jm.bind(null,i,s,a,t),null),He===null)throw Error(o(349));c||(Bn&127)!==0||Xm(i,t,a)}return a}function Xm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=he.updateQueue,t===null?(t=ho(),he.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Jm(e,t,a,i){t.value=a,t.getSnapshot=i,Qm(t)&&Zm(e)}function Km(e,t,a){return a(function(){Qm(t)&&Zm(e)})}function Qm(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Bt(e,a)}catch{return!0}}function Zm(e){var t=Ba(e,2);t!==null&&Lt(t,e,2)}function Zu(e){var t=Ct();if(typeof e=="function"){var a=e;if(e=a(),Pa){Wn(!0);try{a()}finally{Wn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function Fm(e,t,a,i){return e.baseState=a,Ku(e,Be,typeof i=="function"?i:jn)}function iv(e,t,a,i,s){if(vo(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};q.T!==null?a(!0):c.isTransition=!1,i(c),a=t.pending,a===null?(c.next=t.pending=c,Wm(t,c)):(c.next=a.next,t.pending=a.next=c)}}function Wm(e,t){var a=t.action,i=t.payload,s=e.state;if(t.isTransition){var c=q.T,h={};q.T=h;try{var b=a(s,i),T=q.S;T!==null&&T(h,b),Im(e,t,b)}catch(D){Fu(e,t,D)}finally{c!==null&&h.types!==null&&(c.types=h.types),q.T=c}}else try{c=a(s,i),Im(e,t,c)}catch(D){Fu(e,t,D)}}function Im(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){eh(e,t,i)},function(i){return Fu(e,t,i)}):eh(e,t,a)}function eh(e,t,a){t.status="fulfilled",t.value=a,th(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wm(e,a)))}function Fu(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,th(t),t=t.next;while(t!==i)}e.action=null}function th(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nh(e,t){return t}function ah(e,t){if(Se){var a=He.formState;if(a!==null){e:{var i=he;if(Se){if(Ge){t:{for(var s=Ge,c=en;s.nodeType!==8;){if(!c){s=null;break t}if(s=nn(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Ge=nn(s.nextSibling),i=s.data==="F!";break e}}aa(i)}i=!1}i&&(t=a[0])}}return a=Ct(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nh,lastRenderedState:t},a.queue=i,a=Ch.bind(null,he,i),i.dispatch=a,i=Zu(!1),c=ac.bind(null,he,!1,i.queue),i=Ct(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,a=iv.bind(null,he,s,c,a),s.dispatch=a,i.memoizedState=e,[t,a,!1]}function ih(e){var t=We();return rh(t,Be,e)}function rh(e,t,a){if(t=Ku(e,t,nh)[0],e=go(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Br(t)}catch(h){throw h===Di?ro:h}else i=t;t=We();var s=t.queue,c=s.dispatch;return a!==t.memoizedState&&(he.flags|=2048,Ni(9,{destroy:void 0},rv.bind(null,s,a),null)),[i,c,e]}function rv(e,t){e.action=t}function lh(e){var t=We(),a=Be;if(a!==null)return rh(t,a,e);We(),t=t.memoizedState,a=We();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Ni(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=he.updateQueue,t===null&&(t=ho(),he.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function oh(){return We().memoizedState}function yo(e,t,a,i){var s=Ct();he.flags|=e,s.memoizedState=Ni(1|t,{destroy:void 0},a,i===void 0?null:i)}function bo(e,t,a,i){var s=We();i=i===void 0?null:i;var c=s.memoizedState.inst;Be!==null&&i!==null&&$u(i,Be.memoizedState.deps)?s.memoizedState=Ni(t,c,a,i):(he.flags|=e,s.memoizedState=Ni(1|t,c,a,i))}function sh(e,t){yo(8390656,8,e,t)}function Wu(e,t){bo(2048,8,e,t)}function lv(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=ho(),he.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function uh(e){var t=We().memoizedState;return lv({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function ch(e,t){return bo(4,2,e,t)}function fh(e,t){return bo(4,4,e,t)}function dh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mh(e,t,a){a=a!=null?a.concat([e]):null,bo(4,4,dh.bind(null,t,e),a)}function Iu(){}function hh(e,t){var a=We();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&$u(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function ph(e,t){var a=We();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&$u(t,i[1]))return i[0];if(i=e(),Pa){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[i,t],i}function ec(e,t,a){return a===void 0||(Bn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=gp(),he.lanes|=e,da|=e,a)}function gh(e,t,a,i){return Bt(a,t)?a:qi.current!==null?(e=ec(e,a,i),Bt(e,t)||(at=!0),e):(Bn&42)===0||(Bn&1073741824)!==0&&(be&261930)===0?(at=!0,e.memoizedState=a):(e=gp(),he.lanes|=e,da|=e,t)}function yh(e,t,a,i,s){var c=W.p;W.p=c!==0&&8>c?c:8;var h=q.T,b={};q.T=b,ac(e,!1,t,a);try{var T=s(),D=q.S;if(D!==null&&D(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var Y=tv(T,i);jr(e,t,Y,$t(e))}else jr(e,t,i,$t(e))}catch(J){jr(e,t,{then:function(){},status:"rejected",reason:J},$t())}finally{W.p=c,h!==null&&b.types!==null&&(h.types=b.types),q.T=h}}function ov(){}function tc(e,t,a,i){if(e.tag!==5)throw Error(o(476));var s=bh(e).queue;yh(e,s,t,oe,a===null?ov:function(){return vh(e),a(i)})}function bh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vh(e){var t=bh(e);t.next===null&&(t=e.alternate.memoizedState),jr(e,t.next.queue,{},$t())}function nc(){return ht(el)}function Sh(){return We().memoizedState}function xh(){return We().memoizedState}function sv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=$t();e=la(a);var i=oa(t,e,a);i!==null&&(Lt(i,t,a),zr(i,t,a)),t={cache:Lu()},e.payload=t;return}t=t.return}}function uv(e,t,a){var i=$t();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vo(e)?_h(t,a):(a=Su(e,t,a,i),a!==null&&(Lt(a,e,i),wh(a,t,i)))}function Ch(e,t,a){var i=$t();jr(e,t,a,i)}function jr(e,t,a,i){var s={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vo(e))_h(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,b=c(h,a);if(s.hasEagerState=!0,s.eagerState=b,Bt(b,h))return Wl(e,t,s,0),He===null&&Fl(),!1}catch{}finally{}if(a=Su(e,t,s,i),a!==null)return Lt(a,e,i),wh(a,t,i),!0}return!1}function ac(e,t,a,i){if(i={lane:2,revertLane:qc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},vo(e)){if(t)throw Error(o(479))}else t=Su(e,a,i,2),t!==null&&Lt(t,e,2)}function vo(e){var t=e.alternate;return e===he||t!==null&&t===he}function _h(e,t){Bi=fo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function wh(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Ed(e,a)}}var Nr={readContext:ht,use:po,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Nr.useEffectEvent=Je;var Th={readContext:ht,use:po,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:sh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yo(4194308,4,dh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){yo(4,2,e,t)},useMemo:function(e,t){var a=Ct();t=t===void 0?null:t;var i=e();if(Pa){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Ct();if(a!==void 0){var s=a(t);if(Pa){Wn(!0);try{a(t)}finally{Wn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=uv.bind(null,he,e),[i.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Zu(e);var t=e.queue,a=Ch.bind(null,he,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,t){var a=Ct();return ec(a,e,t)},useTransition:function(){var e=Zu(!1);return e=yh.bind(null,he,e.queue,!0,!1),Ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=he,s=Ct();if(Se){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),He===null)throw Error(o(349));(be&127)!==0||Xm(i,t,a)}s.memoizedState=a;var c={value:a,getSnapshot:t};return s.queue=c,sh(Km.bind(null,i,c,e),[e]),i.flags|=2048,Ni(9,{destroy:void 0},Jm.bind(null,i,c,a,t),null),a},useId:function(){var e=Ct(),t=He.identifierPrefix;if(Se){var a=vn,i=bn;a=(i&~(1<<32-qt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=mo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=nv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:ah,useActionState:ah,useOptimistic:function(e){var t=Ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ac.bind(null,he,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ju,useCacheRefresh:function(){return Ct().memoizedState=sv.bind(null,he)},useEffectEvent:function(e){var t=Ct(),a={impl:e};return t.memoizedState=a,function(){if((Me&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},ic={readContext:ht,use:po,useCallback:hh,useContext:ht,useEffect:Wu,useImperativeHandle:mh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:ph,useReducer:go,useRef:oh,useState:function(){return go(jn)},useDebugValue:Iu,useDeferredValue:function(e,t){var a=We();return gh(a,Be.memoizedState,e,t)},useTransition:function(){var e=go(jn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:Pm,useId:Sh,useHostTransitionStatus:nc,useFormState:ih,useActionState:ih,useOptimistic:function(e,t){var a=We();return Fm(a,Be,e,t)},useMemoCache:Ju,useCacheRefresh:xh};ic.useEffectEvent=uh;var Ah={readContext:ht,use:po,useCallback:hh,useContext:ht,useEffect:Wu,useImperativeHandle:mh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:ph,useReducer:Qu,useRef:oh,useState:function(){return Qu(jn)},useDebugValue:Iu,useDeferredValue:function(e,t){var a=We();return Be===null?ec(a,e,t):gh(a,Be.memoizedState,e,t)},useTransition:function(){var e=Qu(jn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:Pm,useId:Sh,useHostTransitionStatus:nc,useFormState:lh,useActionState:lh,useOptimistic:function(e,t){var a=We();return Be!==null?Fm(a,Be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:xh};Ah.useEffectEvent=uh;function rc(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lc={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=$t(),s=la(i);s.payload=t,a!=null&&(s.callback=a),t=oa(e,s,i),t!==null&&(Lt(t,e,i),zr(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=$t(),s=la(i);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=oa(e,s,i),t!==null&&(Lt(t,e,i),zr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=$t(),i=la(a);i.tag=2,t!=null&&(i.callback=t),t=oa(e,i,a),t!==null&&(Lt(t,e,a),zr(t,e,a))}};function Mh(e,t,a,i,s,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,h):t.prototype&&t.prototype.isPureReactComponent?!wr(a,i)||!wr(s,c):!0}function Rh(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function Xa(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function Eh(e){Zl(e)}function Oh(e){console.error(e)}function Lh(e){Zl(e)}function So(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function zh(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function oc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){So(e,t)},a}function Dh(e){return e=la(e),e.tag=3,e}function kh(e,t,a,i){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;e.payload=function(){return s(c)},e.callback=function(){zh(t,a,i)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){zh(t,a,i),typeof s!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function cv(e,t,a,i,s){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Oi(t,a,s,!0),a=Nt.current,a!==null){switch(a.tag){case 31:case 13:return tn===null?zo():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=s,i===lo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),zc(e,i,s)),!1;case 22:return a.flags|=65536,i===lo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),zc(e,i,s)),!1}throw Error(o(435,a.tag))}return zc(e,i,s),zo(),!1}if(Se)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Au&&(e=Error(o(422),{cause:i}),Mr(Ft(e,a)))):(i!==Au&&(t=Error(o(423),{cause:i}),Mr(Ft(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ft(i,a),s=oc(e.stateNode,i,s),ju(e,s),Ke!==4&&(Ke=2)),!1;var c=Error(o(520),{cause:i});if(c=Ft(c,a),Xr===null?Xr=[c]:Xr.push(c),Ke!==4&&(Ke=2),t===null)return!0;i=Ft(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=oc(a.stateNode,i,e),ju(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ma===null||!ma.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Dh(s),kh(s,e,a,i),ju(a,s),!1}a=a.return}while(a!==null);return!1}var sc=Error(o(461)),at=!1;function pt(e,t,a,i){t.child=e===null?Nm(t,null,a,i):Ya(t,e.child,a,i)}function qh(e,t,a,i,s){a=a.render;var c=t.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return Ha(t),i=Vu(e,t,a,h,c,s),b=Yu(),e!==null&&!at?(Pu(e,t,s),Nn(e,t,s)):(Se&&b&&wu(t),t.flags|=1,pt(e,t,i,s),t.child)}function Bh(e,t,a,i,s){if(e===null){var c=a.type;return typeof c=="function"&&!xu(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,jh(e,t,c,i,s)):(e=eo(a.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!gc(e,s)){var h=c.memoizedProps;if(a=a.compare,a=a!==null?a:wr,a(h,i)&&e.ref===t.ref)return Nn(e,t,s)}return t.flags|=1,e=zn(c,i),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,a,i,s){if(e!==null){var c=e.memoizedProps;if(wr(c,i)&&e.ref===t.ref)if(at=!1,t.pendingProps=i=c,gc(e,s))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Nn(e,t,s)}return uc(e,t,a,i,s)}function Nh(e,t,a,i){var s=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,t.child=null;return Uh(e,t,c,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&io(t,c!==null?c.cachePool:null),c!==null?Gm(t,c):Uu(),$m(t);else return i=t.lanes=536870912,Uh(e,t,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(io(t,c.cachePool),Gm(t,c),ua(),t.memoizedState=null):(e!==null&&io(t,null),Uu(),ua());return pt(e,t,s,a),t.child}function Ur(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uh(e,t,a,i,s){var c=Du();return c=c===null?null:{parent:tt._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&io(t,null),Uu(),$m(t),e!==null&&Oi(e,t,i,!0),t.childLanes=s,null}function xo(e,t){return t=_o({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hh(e,t,a){return Ya(t,e.child,null,a),e=xo(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function fv(e,t,a){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(i.mode==="hidden")return e=xo(t,i),t.lanes=536870912,Ur(null,e);if(Gu(t),(e=Ge)?(e=Wp(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:bn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=t,t.child=a,mt=t,Ge=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return xo(t,i)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(Gu(t),s)if(t.flags&256)t.flags&=-257,t=Hh(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(at||Oi(e,t,a,!1),s=(a&e.childLanes)!==0,at||s){if(i=He,i!==null&&(h=Od(i,a),h!==0&&h!==c.retryLane))throw c.retryLane=h,Ba(e,h),Lt(i,e,h),sc;zo(),t=Hh(e,t,a)}else e=c.treeContext,Ge=nn(h.nextSibling),mt=t,Se=!0,na=null,en=!1,e!==null&&Am(t,e),t=xo(t,i),t.flags|=4096;return t}return e=zn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Co(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function uc(e,t,a,i,s){return Ha(t),a=Vu(e,t,a,i,void 0,s),i=Yu(),e!==null&&!at?(Pu(e,t,s),Nn(e,t,s)):(Se&&i&&wu(t),t.flags|=1,pt(e,t,a,s),t.child)}function Gh(e,t,a,i,s,c){return Ha(t),t.updateQueue=null,a=Ym(t,i,a,s),Vm(e),i=Yu(),e!==null&&!at?(Pu(e,t,c),Nn(e,t,c)):(Se&&i&&wu(t),t.flags|=1,pt(e,t,a,c),t.child)}function $h(e,t,a,i,s){if(Ha(t),t.stateNode===null){var c=Ai,h=a.contextType;typeof h=="object"&&h!==null&&(c=ht(h)),c=new a(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=lc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},qu(t),h=a.contextType,c.context=typeof h=="object"&&h!==null?ht(h):Ai,c.state=t.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(rc(t,a,h,i),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&lc.enqueueReplaceState(c,c.state,null),kr(t,i,c,s),Dr(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,T=Xa(a,b);c.props=T;var D=c.context,Y=a.contextType;h=Ai,typeof Y=="object"&&Y!==null&&(h=ht(Y));var J=a.getDerivedStateFromProps;Y=typeof J=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||D!==h)&&Rh(t,c,i,h),ra=!1;var j=t.memoizedState;c.state=j,kr(t,i,c,s),Dr(),D=t.memoizedState,b||j!==D||ra?(typeof J=="function"&&(rc(t,a,J,i),D=t.memoizedState),(T=ra||Mh(t,a,T,i,j,D,h))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=D),c.props=i,c.state=D,c.context=h,i=T):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Bu(e,t),h=t.memoizedProps,Y=Xa(a,h),c.props=Y,J=t.pendingProps,j=c.context,D=a.contextType,T=Ai,typeof D=="object"&&D!==null&&(T=ht(D)),b=a.getDerivedStateFromProps,(D=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==J||j!==T)&&Rh(t,c,i,T),ra=!1,j=t.memoizedState,c.state=j,kr(t,i,c,s),Dr();var N=t.memoizedState;h!==J||j!==N||ra||e!==null&&e.dependencies!==null&&no(e.dependencies)?(typeof b=="function"&&(rc(t,a,b,i),N=t.memoizedState),(Y=ra||Mh(t,a,Y,i,j,N,T)||e!==null&&e.dependencies!==null&&no(e.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,N,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,N,T)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),c.props=i,c.state=N,c.context=T,i=Y):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Co(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Ya(t,e.child,null,s),t.child=Ya(t,null,a,s)):pt(e,t,a,s),t.memoizedState=c.state,e=t.child):e=Nn(e,t,s),e}function Vh(e,t,a,i){return Na(),t.flags|=256,pt(e,t,a,i),t.child}var cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:zm()}}function dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Gt),e}function Yh(e,t,a){var i=t.pendingProps,s=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),h&&(s=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(s?sa(t):ua(),(e=Ge)?(e=Wp(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:bn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=t,t.child=a,mt=t,Ge=null)):e=null,e===null)throw aa(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,s?(ua(),s=t.mode,b=_o({mode:"hidden",children:b},s),i=ja(i,s,a,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=fc(a),i.childLanes=dc(e,h,a),t.memoizedState=cc,Ur(null,i)):(sa(t),mc(t,b))}var T=e.memoizedState;if(T!==null&&(b=T.dehydrated,b!==null)){if(c)t.flags&256?(sa(t),t.flags&=-257,t=hc(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),b=i.fallback,s=t.mode,i=_o({mode:"visible",children:i.children},s),b=ja(b,s,a,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Ya(t,e.child,null,a),i=t.child,i.memoizedState=fc(a),i.childLanes=dc(e,h,a),t.memoizedState=cc,t=Ur(null,i));else if(sa(t),Kc(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var D=h.dgst;h=D,i=Error(o(419)),i.stack="",i.digest=h,Mr({value:i,source:null,stack:null}),t=hc(e,t,a)}else if(at||Oi(e,t,a,!1),h=(a&e.childLanes)!==0,at||h){if(h=He,h!==null&&(i=Od(h,a),i!==0&&i!==T.retryLane))throw T.retryLane=i,Ba(e,i),Lt(h,e,i),sc;Jc(b)||zo(),t=hc(e,t,a)}else Jc(b)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ge=nn(b.nextSibling),mt=t,Se=!0,na=null,en=!1,e!==null&&Am(t,e),t=mc(t,i.children),t.flags|=4096);return t}return s?(ua(),b=i.fallback,s=t.mode,T=e.child,D=T.sibling,i=zn(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,D!==null?b=zn(D,b):(b=ja(b,s,a,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,Ur(null,i),i=t.child,b=e.child.memoizedState,b===null?b=fc(a):(s=b.cachePool,s!==null?(T=tt._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=zm(),b={baseLanes:b.baseLanes|a,cachePool:s}),i.memoizedState=b,i.childLanes=dc(e,h,a),t.memoizedState=cc,Ur(e.child,i)):(sa(t),a=e.child,e=a.sibling,a=zn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=a,t.memoizedState=null,a)}function mc(e,t){return t=_o({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _o(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function hc(e,t,a){return Ya(t,e.child,null,a),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ph(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Eu(e.return,t,a)}function pc(e,t,a,i,s,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:s,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=a,h.tailMode=s,h.treeForkCount=c)}function Xh(e,t,a){var i=t.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var h=Fe.current,b=(h&2)!==0;if(b?(h=h&1|2,t.flags|=128):h&=1,te(Fe,h),pt(e,t,i,a),i=Se?Ar:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ph(e,a,t);else if(e.tag===19)Ph(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&co(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),pc(t,!1,s,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&co(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}pc(t,!0,a,null,c,i);break;case"together":pc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Nn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Oi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=zn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&no(e)))}function dv(e,t,a){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),ia(t,tt,e.memoizedState.cache),Na();break;case 27:case 5:un(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gu(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Yh(e,t,a):(sa(t),e=Nn(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var s=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Oi(e,t,a,!1),i=(a&t.childLanes)!==0),s){if(i)return Xh(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(Fe,Fe.current),i)break;return null;case 22:return t.lanes=0,Nh(e,t,a,t.pendingProps);case 24:ia(t,tt,e.memoizedState.cache)}return Nn(e,t,a)}function Jh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!gc(e,a)&&(t.flags&128)===0)return at=!1,dv(e,t,a);at=(e.flags&131072)!==0}else at=!1,Se&&(t.flags&1048576)!==0&&Tm(t,Ar,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")xu(e)?(i=Xa(e,i),t.tag=1,t=$h(null,t,e,i,a)):(t.tag=0,t=uc(null,t,e,i,a));else{if(e!=null){var s=e.$$typeof;if(s===$){t.tag=11,t=qh(null,t,e,i,a);break e}else if(s===k){t.tag=14,t=Bh(null,t,e,i,a);break e}}throw t=F(e)||e,Error(o(306,t,""))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,s=Xa(i,t.pendingProps),$h(e,t,i,s,a);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;s=c.element,Bu(e,t),kr(t,i,null,a);var h=t.memoizedState;if(i=h.cache,ia(t,tt,i),i!==c.cache&&Ou(t,[tt],a,!0),Dr(),i=h.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Vh(e,t,i,a);break e}else if(i!==s){s=Ft(Error(o(424)),t),Mr(s),t=Vh(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=nn(e.firstChild),mt=t,Se=!0,na=null,en=!0,a=Nm(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Na(),i===s){t=Nn(e,t,a);break e}pt(e,t,i,a)}t=t.child}return t;case 26:return Co(e,t),e===null?(a=ig(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,i=Uo(fe.current).createElement(a),i[dt]=t,i[Tt]=e,gt(i,a,e),ut(i),t.stateNode=i):t.memoizedState=ig(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return un(t),e===null&&Se&&(i=t.stateNode=tg(t.type,t.pendingProps,fe.current),mt=t,en=!0,s=Ge,ya(t.type)?(Qc=s,Ge=nn(i.firstChild)):Ge=s),pt(e,t,t.pendingProps.children,a),Co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((s=i=Ge)&&(i=$v(i,t.type,t.pendingProps,en),i!==null?(t.stateNode=i,mt=t,Ge=nn(i.firstChild),en=!1,s=!0):s=!1),s||aa(t)),un(t),s=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,i=c.children,Yc(s,c)?i=null:h!==null&&Yc(s,h)&&(t.flags|=32),t.memoizedState!==null&&(s=Vu(e,t,av,null,null,a),el._currentValue=s),Co(e,t),pt(e,t,i,a),t.child;case 6:return e===null&&Se&&((e=a=Ge)&&(a=Vv(a,t.pendingProps,en),a!==null?(t.stateNode=a,mt=t,Ge=null,e=!0):e=!1),e||aa(t)),null;case 13:return Yh(e,t,a);case 4:return Xe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ya(t,null,i,a):pt(e,t,i,a),t.child;case 11:return qh(e,t,t.type,t.pendingProps,a);case 7:return pt(e,t,t.pendingProps,a),t.child;case 8:return pt(e,t,t.pendingProps.children,a),t.child;case 12:return pt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,ia(t,t.type,i.value),pt(e,t,i.children,a),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ha(t),s=ht(s),i=i(s),t.flags|=1,pt(e,t,i,a),t.child;case 14:return Bh(e,t,t.type,t.pendingProps,a);case 15:return jh(e,t,t.type,t.pendingProps,a);case 19:return Xh(e,t,a);case 31:return fv(e,t,a);case 22:return Nh(e,t,a,t.pendingProps);case 24:return Ha(t),i=ht(tt),e===null?(s=Du(),s===null&&(s=He,c=Lu(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),t.memoizedState={parent:i,cache:s},qu(t),ia(t,tt,s)):((e.lanes&a)!==0&&(Bu(e,t),kr(t,null,null,a),Dr()),s=e.memoizedState,c=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ia(t,tt,i)):(i=c.cache,ia(t,tt,i),i!==s.cache&&Ou(t,[tt],a,!0))),pt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Un(e){e.flags|=4}function yc(e,t,a,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Sp())e.flags|=8192;else throw Va=lo,ku}else e.flags&=-16777217}function Kh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ug(t))if(Sp())e.flags|=8192;else throw Va=lo,ku}function wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Md():536870912,e.lanes|=t,$i|=t)}function Hr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function mv(e,t,a){var i=t.pendingProps;switch(Tu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qn(tt),Ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mu())),$e(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Un(t),c!==null?($e(t),Kh(t,c)):($e(t),yc(t,s,null,i,a))):c?c!==e.memoizedState?(Un(t),$e(t),Kh(t,c)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Un(t),$e(t),yc(t,s,e,i,a)),null;case 27:if(pn(t),a=fe.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=ae.current,Ei(t)?Mm(t):(e=tg(s,i,a),t.stateNode=e,Un(t))}return $e(t),null;case 5:if(pn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(c=ae.current,Ei(t))Mm(t);else{var h=Uo(fe.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?h.createElement(s,{is:i.is}):h.createElement(s)}}c[dt]=t,c[Tt]=i;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(gt(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Un(t)}}return $e(t),yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=fe.current,Ei(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,s=mt,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[dt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Yp(e.nodeValue,a)),e||aa(t,!0)}else e=Uo(e).createTextNode(i),e[dt]=t,t.stateNode=e}return $e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ei(t),a!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[dt]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[dt]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),s=!1}else s=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),wo(t,t.updateQueue),$e(t),null);case 4:return Ae(),e===null&&Uc(t.stateNode.containerInfo),$e(t),null;case 10:return qn(t.type),$e(t),null;case 19:if(V(Fe),i=t.memoizedState,i===null)return $e(t),null;if(s=(t.flags&128)!==0,c=i.rendering,c===null)if(s)Hr(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=co(e),c!==null){for(t.flags|=128,Hr(i,!1),e=c.updateQueue,t.updateQueue=e,wo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cm(a,e),a=a.sibling;return te(Fe,Fe.current&1|2),Se&&Dn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&xe()>Eo&&(t.flags|=128,s=!0,Hr(i,!1),t.lanes=4194304)}else{if(!s)if(e=co(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,wo(t,e),Hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Se)return $e(t),null}else 2*xe()-i.renderingStartTime>Eo&&a!==536870912&&(t.flags|=128,s=!0,Hr(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=xe(),e.sibling=null,a=Fe.current,te(Fe,s?a&1|2:a&1),Se&&Dn(t,i.treeForkCount),e):($e(t),null);case 22:case 23:return Ut(t),Hu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),a=t.updateQueue,a!==null&&wo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&V(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qn(tt),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function hv(e,t){switch(Tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(tt),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pn(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(o(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Fe),null;case 4:return Ae(),null;case 10:return qn(t.type),null;case 22:case 23:return Ut(t),Hu(),e!==null&&V(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(tt),null;case 25:return null;default:return null}}function Qh(e,t){switch(Tu(t),t.tag){case 3:qn(tt),Ae();break;case 26:case 27:case 5:pn(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:V(Fe);break;case 10:qn(t.type);break;case 22:case 23:Ut(t),Hu(),e!==null&&V(Ga);break;case 24:qn(tt)}}function Gr(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){i=void 0;var c=a.create,h=a.inst;i=c(),h.destroy=i}a=a.next}while(a!==s)}}catch(b){De(t,t.return,b)}}function ca(e,t,a){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,s=t;var T=a,D=b;try{D()}catch(Y){De(s,T,Y)}}}i=i.next}while(i!==c)}}catch(Y){De(t,t.return,Y)}}function Zh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hm(t,a)}catch(i){De(e,e.return,i)}}}function Fh(e,t,a){a.props=Xa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){De(e,t,i)}}function $r(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(s){De(e,t,s)}}function Sn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(s){De(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){De(e,t,s)}else a.current=null}function Wh(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(s){De(e,e.return,s)}}function bc(e,t,a){try{var i=e.stateNode;Bv(i,e.type,a,t),i[Tt]=t}catch(s){De(e,e.return,s)}}function Ih(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=On));else if(i!==4&&(i===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function To(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(To(e,t,a),e=e.sibling;e!==null;)To(e,t,a),e=e.sibling}function ep(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);gt(t,i,a),t[dt]=e,t[Tt]=a}catch(c){De(e,e.return,c)}}var Hn=!1,it=!1,xc=!1,tp=typeof WeakSet=="function"?WeakSet:Set,ct=null;function pv(e,t){if(e=e.containerInfo,$c=Xo,e=mm(e),hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var h=0,b=-1,T=-1,D=0,Y=0,J=e,j=null;t:for(;;){for(var N;J!==a||s!==0&&J.nodeType!==3||(b=h+s),J!==c||i!==0&&J.nodeType!==3||(T=h+i),J.nodeType===3&&(h+=J.nodeValue.length),(N=J.firstChild)!==null;)j=J,J=N;for(;;){if(J===e)break t;if(j===a&&++D===s&&(b=h),j===c&&++Y===i&&(T=h),(N=J.nextSibling)!==null)break;J=j,j=J.parentNode}J=N}a=b===-1||T===-1?null:{start:b,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:e,selectionRange:a},Xo=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,s=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var ie=Xa(a.type,s);e=i.getSnapshotBeforeUpdate(ie,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ce){De(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function np(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:$n(e,a),i&4&&Gr(5,a);break;case 1:if($n(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){De(a,a.return,h)}else{var s=Xa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){De(a,a.return,h)}}i&64&&Zh(a),i&512&&$r(a,a.return);break;case 3:if($n(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hm(e,t)}catch(h){De(a,a.return,h)}}break;case 27:t===null&&i&4&&ep(a);case 26:case 5:$n(e,a),t===null&&i&4&&Wh(a),i&512&&$r(a,a.return);break;case 12:$n(e,a);break;case 31:$n(e,a),i&4&&rp(e,a);break;case 13:$n(e,a),i&4&&lp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wv.bind(null,a),Yv(e,a))));break;case 22:if(i=a.memoizedState!==null||Hn,!i){t=t!==null&&t.memoizedState!==null||it,s=Hn;var c=it;Hn=i,(it=t)&&!c?Vn(e,a,(a.subtreeFlags&8772)!==0):$n(e,a),Hn=s,it=c}break;case 30:break;default:$n(e,a)}}function ap(e){var t=e.alternate;t!==null&&(e.alternate=null,ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Mt=!1;function Gn(e,t,a){for(a=a.child;a!==null;)ip(e,t,a),a=a.sibling}function ip(e,t,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(dr,a)}catch{}switch(a.tag){case 26:it||Sn(a,t),Gn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:it||Sn(a,t);var i=Ye,s=Mt;ya(a.type)&&(Ye=a.stateNode,Mt=!1),Gn(e,t,a),Fr(a.stateNode),Ye=i,Mt=s;break;case 5:it||Sn(a,t);case 6:if(i=Ye,s=Mt,Ye=null,Gn(e,t,a),Ye=i,Mt=s,Ye!==null)if(Mt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(c){De(a,t,c)}else try{Ye.removeChild(a.stateNode)}catch(c){De(a,t,c)}break;case 18:Ye!==null&&(Mt?(e=Ye,Zp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Zi(e)):Zp(Ye,a.stateNode));break;case 4:i=Ye,s=Mt,Ye=a.stateNode.containerInfo,Mt=!0,Gn(e,t,a),Ye=i,Mt=s;break;case 0:case 11:case 14:case 15:ca(2,a,t),it||ca(4,a,t),Gn(e,t,a);break;case 1:it||(Sn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Fh(a,t,i)),Gn(e,t,a);break;case 21:Gn(e,t,a);break;case 22:it=(i=it)||a.memoizedState!==null,Gn(e,t,a),it=i;break;default:Gn(e,t,a)}}function rp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zi(e)}catch(a){De(t,t.return,a)}}}function lp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zi(e)}catch(a){De(t,t.return,a)}}function gv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tp),t;default:throw Error(o(435,e.tag))}}function Ao(e,t){var a=gv(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var s=Tv.bind(null,e,i);i.then(s,s)}})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var s=a[i],c=e,h=t,b=h;e:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){Ye=b.stateNode,Mt=!1;break e}break;case 5:Ye=b.stateNode,Mt=!1;break e;case 3:case 4:Ye=b.stateNode.containerInfo,Mt=!0;break e}b=b.return}if(Ye===null)throw Error(o(160));ip(c,h,s),Ye=null,Mt=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)op(t,e),t=t.sibling}var fn=null;function op(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Et(e),i&4&&(ca(3,e,e.return),Gr(3,e),ca(5,e,e.return));break;case 1:Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),i&64&&Hn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var s=fn;if(Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[pr]||c[dt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),gt(c,i,a),c[dt]=e,ut(c),i=c;break e;case"link":var h=og("link","href",s).get(i+(a.href||""));if(h){for(var b=0;b<h.length;b++)if(c=h[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(b,1);break t}}c=s.createElement(i),gt(c,i,a),s.head.appendChild(c);break;case"meta":if(h=og("meta","content",s).get(i+(a.content||""))){for(b=0;b<h.length;b++)if(c=h[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(b,1);break t}}c=s.createElement(i),gt(c,i,a),s.head.appendChild(c);break;default:throw Error(o(468,i))}c[dt]=e,ut(c),i=c}e.stateNode=i}else sg(s,e.type,e.stateNode);else e.stateNode=lg(s,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?sg(s,e.type,e.stateNode):lg(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&bc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),a!==null&&i&4&&bc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),e.flags&32){s=e.stateNode;try{vi(s,"")}catch(ie){De(e,e.return,ie)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,bc(e,s,a!==null?a.memoizedProps:s)),i&1024&&(xc=!0);break;case 6:if(Rt(t,e),Et(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(ie){De(e,e.return,ie)}}break;case 3:if($o=null,s=fn,fn=Ho(t.containerInfo),Rt(t,e),fn=s,Et(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(ie){De(e,e.return,ie)}xc&&(xc=!1,sp(e));break;case 4:i=fn,fn=Ho(e.stateNode.containerInfo),Rt(t,e),Et(e),fn=i;break;case 12:Rt(t,e),Et(e);break;case 31:Rt(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ao(e,i)));break;case 13:Rt(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ro=xe()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ao(e,i)));break;case 22:s=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,D=Hn,Y=it;if(Hn=D||s,it=Y||T,Rt(t,e),it=Y,Hn=D,Et(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||T||Hn||it||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(c=T.stateNode,s)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=T.stateNode;var J=T.memoizedProps.style,j=J!=null&&J.hasOwnProperty("display")?J.display:null;b.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ie){De(T,T.return,ie)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(ie){De(T,T.return,ie)}}}else if(t.tag===18){if(a===null){T=t;try{var N=T.stateNode;s?Fp(N,!0):Fp(T.stateNode,!1)}catch(ie){De(T,T.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Ao(e,a))));break;case 19:Rt(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ao(e,i)));break;case 30:break;case 21:break;default:Rt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Ih(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,c=vc(e);To(e,c,s);break;case 5:var h=a.stateNode;a.flags&32&&(vi(h,""),a.flags&=-33);var b=vc(e);To(e,b,h);break;case 3:case 4:var T=a.stateNode.containerInfo,D=vc(e);Sc(e,D,T);break;default:throw Error(o(161))}}catch(Y){De(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)np(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ja(t);break;case 1:Sn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fh(t,t.return,a),Ja(t);break;case 27:Fr(t.stateNode);case 26:case 5:Sn(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function Vn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:Vn(s,c,a),Gr(4,c);break;case 1:if(Vn(s,c,a),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(D){De(i,i.return,D)}if(i=c,s=i.updateQueue,s!==null){var b=i.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)Um(T[s],b)}catch(D){De(i,i.return,D)}}a&&h&64&&Zh(c),$r(c,c.return);break;case 27:ep(c);case 26:case 5:Vn(s,c,a),a&&i===null&&h&4&&Wh(c),$r(c,c.return);break;case 12:Vn(s,c,a);break;case 31:Vn(s,c,a),a&&h&4&&rp(s,c);break;case 13:Vn(s,c,a),a&&h&4&&lp(s,c);break;case 22:c.memoizedState===null&&Vn(s,c,a),$r(c,c.return);break;case 30:break;default:Vn(s,c,a)}t=t.sibling}}function Cc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Rr(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e))}function dn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)up(e,t,a,i),t=t.sibling}function up(e,t,a,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:dn(e,t,a,i),s&2048&&Gr(9,t);break;case 1:dn(e,t,a,i);break;case 3:dn(e,t,a,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e)));break;case 12:if(s&2048){dn(e,t,a,i),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,b=c.onPostCommit;typeof b=="function"&&b(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){De(t,t.return,T)}}else dn(e,t,a,i);break;case 31:dn(e,t,a,i);break;case 13:dn(e,t,a,i);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?dn(e,t,a,i):Vr(e,t):c._visibility&2?dn(e,t,a,i):(c._visibility|=2,Ui(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Cc(h,t);break;case 24:dn(e,t,a,i),s&2048&&_c(t.alternate,t);break;default:dn(e,t,a,i)}}function Ui(e,t,a,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,b=a,T=i,D=h.flags;switch(h.tag){case 0:case 11:case 15:Ui(c,h,b,T,s),Gr(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Ui(c,h,b,T,s):Vr(c,h):(Y._visibility|=2,Ui(c,h,b,T,s)),s&&D&2048&&Cc(h.alternate,h);break;case 24:Ui(c,h,b,T,s),s&&D&2048&&_c(h.alternate,h);break;default:Ui(c,h,b,T,s)}t=t.sibling}}function Vr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,s=i.flags;switch(i.tag){case 22:Vr(a,i),s&2048&&Cc(i.alternate,i);break;case 24:Vr(a,i),s&2048&&_c(i.alternate,i);break;default:Vr(a,i)}t=t.sibling}}var Yr=8192;function Hi(e,t,a){if(e.subtreeFlags&Yr)for(e=e.child;e!==null;)cp(e,t,a),e=e.sibling}function cp(e,t,a){switch(e.tag){case 26:Hi(e,t,a),e.flags&Yr&&e.memoizedState!==null&&nS(a,fn,e.memoizedState,e.memoizedProps);break;case 5:Hi(e,t,a);break;case 3:case 4:var i=fn;fn=Ho(e.stateNode.containerInfo),Hi(e,t,a),fn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Yr,Yr=16777216,Hi(e,t,a),Yr=i):Hi(e,t,a));break;default:Hi(e,t,a)}}function fp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,mp(i,e)}fp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dp(e),e=e.sibling}function dp(e){switch(e.tag){case 0:case 11:case 15:Pr(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Pr(e);break;case 12:Pr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mo(e)):Pr(e);break;default:Pr(e)}}function Mo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,mp(i,e)}fp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Mo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mo(t));break;default:Mo(t)}e=e.sibling}}function mp(e,t){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Rr(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ct=i;else e:for(a=e;ct!==null;){i=ct;var s=i.sibling,c=i.return;if(ap(i),i===a){ct=null;break e}if(s!==null){s.return=c,ct=s;break e}ct=c}}}var yv={getCacheForType:function(e){var t=ht(tt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ht(tt).controller.signal}},bv=typeof WeakMap=="function"?WeakMap:Map,Me=0,He=null,ge=null,be=0,ze=0,Ht=null,fa=!1,Gi=!1,wc=!1,Yn=0,Ke=0,da=0,Ka=0,Tc=0,Gt=0,$i=0,Xr=null,Ot=null,Ac=!1,Ro=0,hp=0,Eo=1/0,Oo=null,ma=null,lt=0,ha=null,Vi=null,Pn=0,Mc=0,Rc=null,pp=null,Jr=0,Ec=null;function $t(){return(Me&2)!==0&&be!==0?be&-be:q.T!==null?qc():Ld()}function gp(){if(Gt===0)if((be&536870912)===0||Se){var e=jl;jl<<=1,(jl&3932160)===0&&(jl=262144),Gt=e}else Gt=536870912;return e=Nt.current,e!==null&&(e.flags|=32),Gt}function Lt(e,t,a){(e===He&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Yi(e,0),pa(e,be,Gt,!1)),hr(e,a),((Me&2)===0||e!==He)&&(e===He&&((Me&2)===0&&(Ka|=a),Ke===4&&pa(e,be,Gt,!1)),xn(e))}function yp(e,t,a){if((Me&6)!==0)throw Error(o(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||mr(e,t),s=i?xv(e,t):Lc(e,t,!0),c=i;do{if(s===0){Gi&&!i&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!vv(a)){s=Lc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var b=e;s=Xr;var T=b.current.memoizedState.isDehydrated;if(T&&(Yi(b,h).flags|=256),h=Lc(b,h,!1),h!==2){if(wc&&!T){b.errorRecoveryDisabledLanes|=c,Ka|=c,s=4;break e}c=Ot,Ot=s,c!==null&&(Ot===null?Ot=c:Ot.push.apply(Ot,c))}s=h}if(c=!1,s!==2)continue}}if(s===1){Yi(e,0),pa(e,t,0,!0);break}e:{switch(i=e,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:pa(i,t,Gt,!fa);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=Ro+300-xe(),10<s)){if(pa(i,t,Gt,!fa),Ul(i,0,!0)!==0)break e;Pn=t,i.timeoutHandle=Kp(bp.bind(null,i,a,Ot,Oo,Ac,t,Gt,Ka,$i,fa,c,"Throttled",-0,0),s);break e}bp(i,a,Ot,Oo,Ac,t,Gt,Ka,$i,fa,c,null,-0,0)}}break}while(!0);xn(e)}function bp(e,t,a,i,s,c,h,b,T,D,Y,J,j,N){if(e.timeoutHandle=-1,J=t.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:On},cp(t,c,J);var ie=(c&62914560)===c?Ro-xe():(c&4194048)===c?hp-xe():0;if(ie=aS(J,ie),ie!==null){Pn=c,e.cancelPendingCommit=ie(Ap.bind(null,e,t,c,a,i,s,h,b,T,Y,J,null,j,N)),pa(e,c,h,!D);return}}Ap(e,t,c,a,i,s,h,b,T)}function vv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var s=a[i],c=s.getSnapshot;s=s.value;try{if(!Bt(c(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,i){t&=~Tc,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var c=31-qt(s),h=1<<c;i[c]=-1,s&=~h}a!==0&&Rd(e,a,t)}function Lo(){return(Me&6)===0?(Kr(0),!1):!0}function Oc(){if(ge!==null){if(ze===0)var e=ge.return;else e=ge,kn=Ua=null,Xu(e),ki=null,Or=0,e=ge;for(;e!==null;)Qh(e.alternate,e),e=e.return;ge=null}}function Yi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Uv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pn=0,Oc(),He=e,ge=a=zn(e.current,null),be=t,ze=0,Ht=null,fa=!1,Gi=mr(e,t),wc=!1,$i=Gt=Tc=Ka=da=Ke=0,Ot=Xr=null,Ac=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-qt(i),c=1<<s;t|=e[s],i&=~c}return Yn=t,Fl(),a}function vp(e,t){he=null,q.H=Nr,t===Di||t===ro?(t=qm(),ze=3):t===ku?(t=qm(),ze=4):ze=t===sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,ge===null&&(Ke=1,So(e,Ft(t,e.current)))}function Sp(){var e=Nt.current;return e===null?!0:(be&4194048)===be?tn===null:(be&62914560)===be||(be&536870912)!==0?e===tn:!1}function xp(){var e=q.H;return q.H=Nr,e===null?Nr:e}function Cp(){var e=q.A;return q.A=yv,e}function zo(){Ke=4,fa||(be&4194048)!==be&&Nt.current!==null||(Gi=!0),(da&134217727)===0&&(Ka&134217727)===0||He===null||pa(He,be,Gt,!1)}function Lc(e,t,a){var i=Me;Me|=2;var s=xp(),c=Cp();(He!==e||be!==t)&&(Oo=null,Yi(e,t)),t=!1;var h=Ke;e:do try{if(ze!==0&&ge!==null){var b=ge,T=Ht;switch(ze){case 8:Oc(),h=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var D=ze;if(ze=0,Ht=null,Pi(e,b,T,D),a&&Gi){h=0;break e}break;default:D=ze,ze=0,Ht=null,Pi(e,b,T,D)}}Sv(),h=Ke;break}catch(Y){vp(e,Y)}while(!0);return t&&e.shellSuspendCounter++,kn=Ua=null,Me=i,q.H=s,q.A=c,ge===null&&(He=null,be=0,Fl()),h}function Sv(){for(;ge!==null;)_p(ge)}function xv(e,t){var a=Me;Me|=2;var i=xp(),s=Cp();He!==e||be!==t?(Oo=null,Eo=xe()+500,Yi(e,t)):Gi=mr(e,t);e:do try{if(ze!==0&&ge!==null){t=ge;var c=Ht;t:switch(ze){case 1:ze=0,Ht=null,Pi(e,t,c,1);break;case 2:case 9:if(Dm(c)){ze=0,Ht=null,wp(t);break}t=function(){ze!==2&&ze!==9||He!==e||(ze=7),xn(e)},c.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Dm(c)?(ze=0,Ht=null,wp(t)):(ze=0,Ht=null,Pi(e,t,c,7));break;case 5:var h=null;switch(ge.tag){case 26:h=ge.memoizedState;case 5:case 27:var b=ge;if(h?ug(h):b.stateNode.complete){ze=0,Ht=null;var T=b.sibling;if(T!==null)ge=T;else{var D=b.return;D!==null?(ge=D,Do(D)):ge=null}break t}}ze=0,Ht=null,Pi(e,t,c,5);break;case 6:ze=0,Ht=null,Pi(e,t,c,6);break;case 8:Oc(),Ke=6;break e;default:throw Error(o(462))}}Cv();break}catch(Y){vp(e,Y)}while(!0);return kn=Ua=null,q.H=i,q.A=s,Me=a,ge!==null?0:(He=null,be=0,Fl(),Ke)}function Cv(){for(;ge!==null&&!yn();)_p(ge)}function _p(e){var t=Jh(e.alternate,e,Yn);e.memoizedProps=e.pendingProps,t===null?Do(e):ge=t}function wp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gh(a,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Gh(a,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Xu(t);default:Qh(a,t),t=ge=Cm(t,Yn),t=Jh(a,t,Yn)}e.memoizedProps=e.pendingProps,t===null?Do(e):ge=t}function Pi(e,t,a,i){kn=Ua=null,Xu(t),ki=null,Or=0;var s=t.return;try{if(cv(e,s,t,a,be)){Ke=1,So(e,Ft(a,e.current)),ge=null;return}}catch(c){if(s!==null)throw ge=s,c;Ke=1,So(e,Ft(a,e.current)),ge=null;return}t.flags&32768?(Se||i===1?e=!0:Gi||(be&536870912)!==0?e=!1:(fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Nt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Tp(t,e)):Do(t)}function Do(e){var t=e;do{if((t.flags&32768)!==0){Tp(t,fa);return}e=t.return;var a=mv(t.alternate,t,Yn);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ke===0&&(Ke=5)}function Tp(e,t){do{var a=hv(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Ke=6,ge=null}function Ap(e,t,a,i,s,c,h,b,T){e.cancelPendingCommit=null;do ko();while(lt!==0);if((Me&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=vu,t0(e,a,c,h,b,T),e===He&&(ge=He=null,be=0),Vi=t,ha=e,Pn=a,Mc=c,Rc=s,pp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Av(ft,function(){return Lp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=q.T,q.T=null,s=W.p,W.p=2,h=Me,Me|=4;try{pv(e,t,a)}finally{Me=h,W.p=s,q.T=i}}lt=1,Mp(),Rp(),Ep()}}function Mp(){if(lt===1){lt=0;var e=ha,t=Vi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var i=W.p;W.p=2;var s=Me;Me|=4;try{op(t,e);var c=Vc,h=mm(e.containerInfo),b=c.focusedElem,T=c.selectionRange;if(h!==b&&b&&b.ownerDocument&&dm(b.ownerDocument.documentElement,b)){if(T!==null&&hu(b)){var D=T.start,Y=T.end;if(Y===void 0&&(Y=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(Y,b.value.length);else{var J=b.ownerDocument||document,j=J&&J.defaultView||window;if(j.getSelection){var N=j.getSelection(),ie=b.textContent.length,ce=Math.min(T.start,ie),Ne=T.end===void 0?ce:Math.min(T.end,ie);!N.extend&&ce>Ne&&(h=Ne,Ne=ce,ce=h);var E=fm(b,ce),A=fm(b,Ne);if(E&&A&&(N.rangeCount!==1||N.anchorNode!==E.node||N.anchorOffset!==E.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var z=J.createRange();z.setStart(E.node,E.offset),N.removeAllRanges(),ce>Ne?(N.addRange(z),N.extend(A.node,A.offset)):(z.setEnd(A.node,A.offset),N.addRange(z))}}}}for(J=[],N=b;N=N.parentNode;)N.nodeType===1&&J.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<J.length;b++){var X=J[b];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Xo=!!$c,Vc=$c=null}finally{Me=s,W.p=i,q.T=a}}e.current=t,lt=2}}function Rp(){if(lt===2){lt=0;var e=ha,t=Vi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var i=W.p;W.p=2;var s=Me;Me|=4;try{np(e,t.alternate,t)}finally{Me=s,W.p=i,q.T=a}}lt=3}}function Ep(){if(lt===4||lt===3){lt=0,Oe();var e=ha,t=Vi,a=Pn,i=pp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,Vi=ha=null,Op(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ma=null),Qs(a),t=t.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(dr,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=q.T,s=W.p,W.p=2,q.T=null;try{for(var c=e.onRecoverableError,h=0;h<i.length;h++){var b=i[h];c(b.value,{componentStack:b.stack})}}finally{q.T=t,W.p=s}}(Pn&3)!==0&&ko(),xn(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Ec?Jr++:(Jr=0,Ec=e):Jr=0,Kr(0)}}function Op(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rr(t)))}function ko(){return Mp(),Rp(),Ep(),Lp()}function Lp(){if(lt!==5)return!1;var e=ha,t=Mc;Mc=0;var a=Qs(Pn),i=q.T,s=W.p;try{W.p=32>a?32:a,q.T=null,a=Rc,Rc=null;var c=ha,h=Pn;if(lt=0,Vi=ha=null,Pn=0,(Me&6)!==0)throw Error(o(331));var b=Me;if(Me|=4,dp(c.current),up(c,c.current,h,a),Me=b,Kr(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(dr,c)}catch{}return!0}finally{W.p=s,q.T=i,Op(e,t)}}function zp(e,t,a){t=Ft(a,t),t=oc(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(hr(e,2),xn(e))}function De(e,t,a){if(e.tag===3)zp(e,e,a);else for(;t!==null;){if(t.tag===3){zp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=Ft(a,e),a=Dh(2),i=oa(t,a,2),i!==null&&(kh(a,i,t,e),hr(i,2),xn(i));break}}t=t.return}}function zc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new bv;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(a)||(wc=!0,s.add(a),e=_v.bind(null,e,t,a),t.then(e,e))}function _v(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(be&a)===a&&(Ke===4||Ke===3&&(be&62914560)===be&&300>xe()-Ro?(Me&2)===0&&Yi(e,0):Tc|=a,$i===be&&($i=0)),xn(e)}function Dp(e,t){t===0&&(t=Md()),e=Ba(e,t),e!==null&&(hr(e,t),xn(e))}function wv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Dp(e,a)}function Tv(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Dp(e,a)}function Av(e,t){return Dt(e,t)}var qo=null,Xi=null,Dc=!1,Bo=!1,kc=!1,ga=0;function xn(e){e!==Xi&&e.next===null&&(Xi===null?qo=Xi=e:Xi=Xi.next=e),Bo=!0,Dc||(Dc=!0,Rv())}function Kr(e,t){if(!kc&&Bo){kc=!0;do for(var a=!1,i=qo;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var h=i.suspendedLanes,b=i.pingedLanes;c=(1<<31-qt(42|e)+1)-1,c&=s&~(h&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,jp(i,c))}else c=be,c=Ul(i,i===He?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||mr(i,c)||(a=!0,jp(i,c));i=i.next}while(a);kc=!1}}function Mv(){kp()}function kp(){Bo=Dc=!1;var e=0;ga!==0&&Nv()&&(e=ga);for(var t=xe(),a=null,i=qo;i!==null;){var s=i.next,c=qp(i,t);c===0?(i.next=null,a===null?qo=s:a.next=s,s===null&&(Xi=a)):(a=i,(e!==0||(c&3)!==0)&&(Bo=!0)),i=s}lt!==0&&lt!==5||Kr(e),ga!==0&&(ga=0)}function qp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-qt(c),b=1<<h,T=s[h];T===-1?((b&a)===0||(b&i)!==0)&&(s[h]=e0(b,t)):T<=t&&(e.expiredLanes|=b),c&=~b}if(t=He,a=be,a=Ul(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&gn(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||mr(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&gn(i),Qs(a)){case 2:case 8:a=Ve;break;case 32:a=ft;break;case 268435456:a=di;break;default:a=ft}return i=Bp.bind(null,e),a=Dt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&gn(i),e.callbackPriority=2,e.callbackNode=null,2}function Bp(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ko()&&e.callbackNode!==a)return null;var i=be;return i=Ul(e,e===He?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(yp(e,i,t),qp(e,xe()),e.callbackNode!=null&&e.callbackNode===a?Bp.bind(null,e):null)}function jp(e,t){if(ko())return null;yp(e,t,!0)}function Rv(){Hv(function(){(Me&6)!==0?Dt(st,Mv):kp()})}function qc(){if(ga===0){var e=Li;e===0&&(e=Bl,Bl<<=1,(Bl&261888)===0&&(Bl=256)),ga=e}return ga}function Np(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(""+e)}function Up(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ev(e,t,a,i,s){if(t==="submit"&&a&&a.stateNode===s){var c=Np((s[Tt]||null).action),h=i.submitter;h&&(t=(t=h[Tt]||null)?Np(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var b=new Jl("action","action",null,i,s);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ga!==0){var T=h?Up(s,h):new FormData(s);tc(a,{pending:!0,data:T,method:s.method,action:c},null,T)}}else typeof c=="function"&&(b.preventDefault(),T=h?Up(s,h):new FormData(s),tc(a,{pending:!0,data:T,method:s.method,action:c},c,T))},currentTarget:s}]})}}for(var Bc=0;Bc<bu.length;Bc++){var jc=bu[Bc],Ov=jc.toLowerCase(),Lv=jc[0].toUpperCase()+jc.slice(1);cn(Ov,"on"+Lv)}cn(gm,"onAnimationEnd"),cn(ym,"onAnimationIteration"),cn(bm,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(J0,"onTransitionRun"),cn(K0,"onTransitionStart"),cn(Q0,"onTransitionCancel"),cn(vm,"onTransitionEnd"),yi("onMouseEnter",["mouseout","mouseover"]),yi("onMouseLeave",["mouseout","mouseover"]),yi("onPointerEnter",["pointerout","pointerover"]),yi("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Hp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var h=i.length-1;0<=h;h--){var b=i[h],T=b.instance,D=b.currentTarget;if(b=b.listener,T!==c&&s.isPropagationStopped())break e;c=b,s.currentTarget=D;try{c(s)}catch(Y){Zl(Y)}s.currentTarget=null,c=T}else for(h=0;h<i.length;h++){if(b=i[h],T=b.instance,D=b.currentTarget,b=b.listener,T!==c&&s.isPropagationStopped())break e;c=b,s.currentTarget=D;try{c(s)}catch(Y){Zl(Y)}s.currentTarget=null,c=T}}}}function ye(e,t){var a=t[Zs];a===void 0&&(a=t[Zs]=new Set);var i=e+"__bubble";a.has(i)||(Gp(t,e,2,!1),a.add(i))}function Nc(e,t,a){var i=0;t&&(i|=4),Gp(a,e,i,t)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[jo]){e[jo]=!0,kd.forEach(function(a){a!=="selectionchange"&&(zv.has(a)||Nc(a,!1,e),Nc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,Nc("selectionchange",!1,t))}}function Gp(e,t,a,i){switch(gg(t)){case 2:var s=lS;break;case 8:s=oS;break;default:s=ef}a=s.bind(null,t,a,e),s=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Hc(e,t,a,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===s)break;if(h===4)for(h=i.return;h!==null;){var T=h.tag;if((T===3||T===4)&&h.stateNode.containerInfo===s)return;h=h.return}for(;b!==null;){if(h=hi(b),h===null)return;if(T=h.tag,T===5||T===6||T===26||T===27){i=c=h;continue e}b=b.parentNode}}i=i.return}Xd(function(){var D=c,Y=au(a),J=[];e:{var j=Sm.get(e);if(j!==void 0){var N=Jl,ie=e;switch(e){case"keypress":if(Pl(a)===0)break e;case"keydown":case"keyup":N=T0;break;case"focusin":ie="focus",N=uu;break;case"focusout":ie="blur",N=uu;break;case"beforeblur":case"afterblur":N=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=R0;break;case gm:case ym:case bm:N=g0;break;case vm:N=O0;break;case"scroll":case"scrollend":N=f0;break;case"wheel":N=z0;break;case"copy":case"cut":case"paste":N=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Fd;break;case"toggle":case"beforetoggle":N=k0}var ce=(t&4)!==0,Ne=!ce&&(e==="scroll"||e==="scrollend"),E=ce?j!==null?j+"Capture":null:j;ce=[];for(var A=D,z;A!==null;){var X=A;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||E===null||(X=yr(A,E),X!=null&&ce.push(Zr(A,X,z))),Ne)break;A=A.return}0<ce.length&&(j=new N(j,ie,null,a,Y),J.push({event:j,listeners:ce}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",j&&a!==nu&&(ie=a.relatedTarget||a.fromElement)&&(hi(ie)||ie[mi]))break e;if((N||j)&&(j=Y.window===Y?Y:(j=Y.ownerDocument)?j.defaultView||j.parentWindow:window,N?(ie=a.relatedTarget||a.toElement,N=D,ie=ie?hi(ie):null,ie!==null&&(Ne=f(ie),ce=ie.tag,ie!==Ne||ce!==5&&ce!==27&&ce!==6)&&(ie=null)):(N=null,ie=D),N!==ie)){if(ce=Qd,X="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Fd,X="onPointerLeave",E="onPointerEnter",A="pointer"),Ne=N==null?j:gr(N),z=ie==null?j:gr(ie),j=new ce(X,A+"leave",N,a,Y),j.target=Ne,j.relatedTarget=z,X=null,hi(Y)===D&&(ce=new ce(E,A+"enter",ie,a,Y),ce.target=z,ce.relatedTarget=Ne,X=ce),Ne=X,N&&ie)t:{for(ce=Dv,E=N,A=ie,z=0,X=E;X;X=ce(X))z++;X=0;for(var se=A;se;se=ce(se))X++;for(;0<z-X;)E=ce(E),z--;for(;0<X-z;)A=ce(A),X--;for(;z--;){if(E===A||A!==null&&E===A.alternate){ce=E;break t}E=ce(E),A=ce(A)}ce=null}else ce=null;N!==null&&$p(J,j,N,ce,!1),ie!==null&&Ne!==null&&$p(J,Ne,ie,ce,!0)}}e:{if(j=D?gr(D):window,N=j.nodeName&&j.nodeName.toLowerCase(),N==="select"||N==="input"&&j.type==="file")var _e=rm;else if(am(j))if(lm)_e=Y0;else{_e=$0;var le=G0}else N=j.nodeName,!N||N.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?D&&tu(D.elementType)&&(_e=rm):_e=V0;if(_e&&(_e=_e(e,D))){im(J,_e,a,Y);break e}le&&le(e,j,D),e==="focusout"&&D&&j.type==="number"&&D.memoizedProps.value!=null&&eu(j,"number",j.value)}switch(le=D?gr(D):window,e){case"focusin":(am(le)||le.contentEditable==="true")&&(_i=le,pu=D,Tr=null);break;case"focusout":Tr=pu=_i=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,hm(J,a,Y);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":hm(J,a,Y)}var pe;if(fu)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ci?tm(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Wd&&a.locale!=="ko"&&(Ci||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ci&&(pe=Jd()):(ea=Y,lu="value"in ea?ea.value:ea.textContent,Ci=!0)),le=No(D,ve),0<le.length&&(ve=new Zd(ve,e,null,a,Y),J.push({event:ve,listeners:le}),pe?ve.data=pe:(pe=nm(a),pe!==null&&(ve.data=pe)))),(pe=B0?j0(e,a):N0(e,a))&&(ve=No(D,"onBeforeInput"),0<ve.length&&(le=new Zd("onBeforeInput","beforeinput",null,a,Y),J.push({event:le,listeners:ve}),le.data=pe)),Ev(J,e,D,a,Y)}Hp(J,t)})}function Zr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function No(e,t){for(var a=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=yr(e,a),s!=null&&i.unshift(Zr(e,s,c)),s=yr(e,t),s!=null&&i.push(Zr(e,s,c))),e.tag===3)return i;e=e.return}return[]}function Dv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $p(e,t,a,i,s){for(var c=t._reactName,h=[];a!==null&&a!==i;){var b=a,T=b.alternate,D=b.stateNode;if(b=b.tag,T!==null&&T===i)break;b!==5&&b!==26&&b!==27||D===null||(T=D,s?(D=yr(a,c),D!=null&&h.unshift(Zr(a,D,T))):s||(D=yr(a,c),D!=null&&h.push(Zr(a,D,T)))),a=a.return}h.length!==0&&e.push({event:t,listeners:h})}var kv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function Vp(e){return(typeof e=="string"?e:""+e).replace(kv,`
`).replace(qv,"")}function Yp(e,t){return t=Vp(t),Vp(e)===t}function je(e,t,a,i,s,c){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||vi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&vi(e,""+i);break;case"className":Gl(e,"class",i);break;case"tabIndex":Gl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,i);break;case"style":Yd(e,i,c);break;case"data":if(t!=="object"){Gl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Vl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",s.name,s,null),je(e,t,"formEncType",s.formEncType,s,null),je(e,t,"formMethod",s.formMethod,s,null),je(e,t,"formTarget",s.formTarget,s,null)):(je(e,t,"encType",s.encType,s,null),je(e,t,"method",s.method,s,null),je(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Vl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=On);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Vl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Hl(e,"popover",i);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Hl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u0.get(a)||a,Hl(e,a,i))}}function Gc(e,t,a,i,s,c){switch(a){case"style":Yd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?vi(e,i):(typeof i=="number"||typeof i=="bigint")&&vi(e,""+i);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"onClick":i!=null&&(e.onclick=On);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),c=e[Tt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,s);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Hl(e,a,i)}}}function gt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var i=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var h=a[c];if(h!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:je(e,t,c,h,a,null)}}s&&je(e,t,"srcSet",a.srcSet,a,null),i&&je(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var b=c=h=s=null,T=null,D=null;for(i in a)if(a.hasOwnProperty(i)){var Y=a[i];if(Y!=null)switch(i){case"name":s=Y;break;case"type":h=Y;break;case"checked":T=Y;break;case"defaultChecked":D=Y;break;case"value":c=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:je(e,t,i,Y,a,null)}}Hd(e,c,b,T,D,h,s,!1);return;case"select":ye("invalid",e),i=h=c=null;for(s in a)if(a.hasOwnProperty(s)&&(b=a[s],b!=null))switch(s){case"value":c=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:je(e,t,s,b,a,null)}t=c,a=h,e.multiple=!!i,t!=null?bi(e,!!i,t,!1):a!=null&&bi(e,!!i,a,!0);return;case"textarea":ye("invalid",e),c=s=i=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":s=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:je(e,t,h,b,a,null)}$d(e,i,s,c);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(i=a[T],i!=null))switch(T){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:je(e,t,T,i,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(i=0;i<Qr.length;i++)ye(Qr[i],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(i=a[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:je(e,t,D,i,a,null)}return;default:if(tu(t)){for(Y in a)a.hasOwnProperty(Y)&&(i=a[Y],i!==void 0&&Gc(e,t,Y,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&je(e,t,b,i,a,null))}function Bv(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,h=null,b=null,T=null,D=null,Y=null;for(N in a){var J=a[N];if(a.hasOwnProperty(N)&&J!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":T=J;default:i.hasOwnProperty(N)||je(e,t,N,null,i,J)}}for(var j in i){var N=i[j];if(J=a[j],i.hasOwnProperty(j)&&(N!=null||J!=null))switch(j){case"type":c=N;break;case"name":s=N;break;case"checked":D=N;break;case"defaultChecked":Y=N;break;case"value":h=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==J&&je(e,t,j,N,i,J)}}Is(e,h,b,T,D,Y,c,s);return;case"select":N=h=b=j=null;for(c in a)if(T=a[c],a.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":N=T;default:i.hasOwnProperty(c)||je(e,t,c,null,i,T)}for(s in i)if(c=i[s],T=a[s],i.hasOwnProperty(s)&&(c!=null||T!=null))switch(s){case"value":j=c;break;case"defaultValue":b=c;break;case"multiple":h=c;default:c!==T&&je(e,t,s,c,i,T)}t=b,a=h,i=N,j!=null?bi(e,!!a,j,!1):!!i!=!!a&&(t!=null?bi(e,!!a,t,!0):bi(e,!!a,a?[]:"",!1));return;case"textarea":N=j=null;for(b in a)if(s=a[b],a.hasOwnProperty(b)&&s!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:je(e,t,b,null,i,s)}for(h in i)if(s=i[h],c=a[h],i.hasOwnProperty(h)&&(s!=null||c!=null))switch(h){case"value":j=s;break;case"defaultValue":N=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&je(e,t,h,s,i,c)}Gd(e,j,N);return;case"option":for(var ie in a)if(j=a[ie],a.hasOwnProperty(ie)&&j!=null&&!i.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:je(e,t,ie,null,i,j)}for(T in i)if(j=i[T],N=a[T],i.hasOwnProperty(T)&&j!==N&&(j!=null||N!=null))switch(T){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:je(e,t,T,j,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)j=a[ce],a.hasOwnProperty(ce)&&j!=null&&!i.hasOwnProperty(ce)&&je(e,t,ce,null,i,j);for(D in i)if(j=i[D],N=a[D],i.hasOwnProperty(D)&&j!==N&&(j!=null||N!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:je(e,t,D,j,i,N)}return;default:if(tu(t)){for(var Ne in a)j=a[Ne],a.hasOwnProperty(Ne)&&j!==void 0&&!i.hasOwnProperty(Ne)&&Gc(e,t,Ne,void 0,i,j);for(Y in i)j=i[Y],N=a[Y],!i.hasOwnProperty(Y)||j===N||j===void 0&&N===void 0||Gc(e,t,Y,j,i,N);return}}for(var E in a)j=a[E],a.hasOwnProperty(E)&&j!=null&&!i.hasOwnProperty(E)&&je(e,t,E,null,i,j);for(J in i)j=i[J],N=a[J],!i.hasOwnProperty(J)||j===N||j==null&&N==null||je(e,t,J,j,i,N)}function Pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var s=a[i],c=s.transferSize,h=s.initiatorType,b=s.duration;if(c&&b&&Pp(h)){for(h=0,b=s.responseEnd,i+=1;i<a.length;i++){var T=a[i],D=T.startTime;if(D>b)break;var Y=T.transferSize,J=T.initiatorType;Y&&Pp(J)&&(T=T.responseEnd,h+=Y*(T<b?1:(b-D)/(T-D)))}if(--i,t+=8*(c+h)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $c=null,Vc=null;function Uo(e){return e.nodeType===9?e:e.ownerDocument}function Xp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pc=null;function Nv(){var e=window.event;return e&&e.type==="popstate"?e===Pc?!1:(Pc=e,!0):(Pc=null,!1)}var Kp=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(e){return Qp.resolve(null).then(e).catch(Gv)}:Kp;function Gv(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Zp(e,t){var a=t,i=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(s),Zi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Fr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fr(a);for(var c=a.firstChild;c;){var h=c.nextSibling,b=c.nodeName;c[pr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=h}}else a==="body"&&Fr(e.ownerDocument.body);a=s}while(a);Zi(t)}function Fp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xc(a),Fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $v(e,t,a,i){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function Vv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=nn(e.nextSibling),e===null))return null;return e}function Wp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=nn(e.nextSibling),e===null))return null;return e}function Jc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yv(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qc=null;function Ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return nn(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function eg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function tg(e,t,a){switch(t=Uo(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Fr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fs(e)}var an=new Map,ng=new Set;function Ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xn=W.d;W.d={f:Pv,r:Xv,D:Jv,C:Kv,L:Qv,m:Zv,X:Wv,S:Fv,M:Iv};function Pv(){var e=Xn.f(),t=Lo();return e||t}function Xv(e){var t=pi(e);t!==null&&t.tag===5&&t.type==="form"?vh(t):Xn.r(e)}var Ji=typeof document>"u"?null:document;function ag(e,t,a){var i=Ji;if(i&&typeof t=="string"&&t){var s=Qt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),ng.has(s)||(ng.add(s),e={rel:e,crossOrigin:a,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),gt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Jv(e){Xn.D(e),ag("dns-prefetch",e,null)}function Kv(e,t){Xn.C(e,t),ag("preconnect",e,t)}function Qv(e,t,a){Xn.L(e,t,a);var i=Ji;if(i&&e&&t){var s='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Qt(a.imageSizes)+'"]')):s+='[href="'+Qt(e)+'"]';var c=s;switch(t){case"style":c=Ki(e);break;case"script":c=Qi(e)}an.has(c)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),an.set(c,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Wr(c))||t==="script"&&i.querySelector(Ir(c))||(t=i.createElement("link"),gt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Zv(e,t){Xn.m(e,t);var a=Ji;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Qt(i)+'"][href="'+Qt(e)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Qi(e)}if(!an.has(c)&&(e=y({rel:"modulepreload",href:e},t),an.set(c,e),a.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ir(c)))return}i=a.createElement("link"),gt(i,"link",e),ut(i),a.head.appendChild(i)}}}function Fv(e,t,a){Xn.S(e,t,a);var i=Ji;if(i&&e){var s=gi(i).hoistableStyles,c=Ki(e);t=t||"default";var h=s.get(c);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(Wr(c)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=an.get(c))&&Zc(e,a);var T=h=i.createElement("link");ut(T),gt(T,"link",e),T._p=new Promise(function(D,Y){T.onload=D,T.onerror=Y}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Go(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:b},s.set(c,h)}}}function Wv(e,t){Xn.X(e,t);var a=Ji;if(a&&e){var i=gi(a).hoistableScripts,s=Qi(e),c=i.get(s);c||(c=a.querySelector(Ir(s)),c||(e=y({src:e,async:!0},t),(t=an.get(s))&&Fc(e,t),c=a.createElement("script"),ut(c),gt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Iv(e,t){Xn.M(e,t);var a=Ji;if(a&&e){var i=gi(a).hoistableScripts,s=Qi(e),c=i.get(s);c||(c=a.querySelector(Ir(s)),c||(e=y({src:e,async:!0,type:"module"},t),(t=an.get(s))&&Fc(e,t),c=a.createElement("script"),ut(c),gt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function ig(e,t,a,i){var s=(s=fe.current)?Ho(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ki(a.href),a=gi(s).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ki(a.href);var c=gi(s).hoistableStyles,h=c.get(e);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=s.querySelector(Wr(e)))&&!c._p&&(h.instance=c,h.state.loading=5),an.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},an.set(e,a),c||eS(s,e,a,h.state))),t&&i===null)throw Error(o(528,""));return h}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qi(a),a=gi(s).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ki(e){return'href="'+Qt(e)+'"'}function Wr(e){return'link[rel="stylesheet"]['+e+"]"}function rg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gt(t,"link",a),ut(t),e.head.appendChild(t))}function Qi(e){return'[src="'+Qt(e)+'"]'}function Ir(e){return"script[async]"+e}function lg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qt(a.href)+'"]');if(i)return t.instance=i,ut(i),i;var s=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ut(i),gt(i,"style",s),Go(i,a.precedence,e),t.instance=i;case"stylesheet":s=Ki(a.href);var c=e.querySelector(Wr(s));if(c)return t.state.loading|=4,t.instance=c,ut(c),c;i=rg(a),(s=an.get(s))&&Zc(i,s),c=(e.ownerDocument||e).createElement("link"),ut(c);var h=c;return h._p=new Promise(function(b,T){h.onload=b,h.onerror=T}),gt(c,"link",i),t.state.loading|=4,Go(c,a.precedence,e),t.instance=c;case"script":return c=Qi(a.src),(s=e.querySelector(Ir(c)))?(t.instance=s,ut(s),s):(i=a,(s=an.get(c))&&(i=y({},a),Fc(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),ut(s),gt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Go(i,a.precedence,e));return t.instance}function Go(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===t)c=b;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $o=null;function og(e,t,a){if($o===null){var i=new Map,s=$o=new Map;s.set(a,i)}else s=$o,i=s.get(a),i||(i=new Map,s.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var c=a[s];if(!(c[pr]||c[dt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var b=i.get(h);b?b.push(c):i.set(h,[c])}}return i}function sg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function tS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nS(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=Ki(i.href),c=t.querySelector(Wr(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vo.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,ut(c);return}c=t.ownerDocument||t,i=rg(i),(s=an.get(s))&&Zc(i,s),c=c.createElement("link"),ut(c);var h=c;h._p=new Promise(function(b,T){h.onload=b,h.onerror=T}),gt(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vo.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wc=0;function aS(e,t){return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Wc===0&&(Wc=62500*jv());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Wc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yo=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yo=new Map,t.forEach(iS,e),Yo=null,Vo.call(e))}function iS(e,t){if(!(t.state.loading&4)){var a=Yo.get(e);if(a)var i=a.get(null);else{a=new Map,Yo.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var h=s[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),i=h)}i&&a.set(null,i)}s=t.instance,h=s.getAttribute("data-precedence"),c=a.get(h)||i,c===i&&a.set(null,s),a.set(h,s),this.count++,i=Vo.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var el={$$typeof:U,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function rS(e,t,a,i,s,c,h,b,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.hiddenUpdates=Js(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function cg(e,t,a,i,s,c,h,b,T,D,Y,J){return e=new rS(e,t,a,h,T,D,Y,J,b),t=1,c===!0&&(t|=24),c=jt(3,null,null,t),e.current=c,c.stateNode=e,t=Lu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:t},qu(c),e}function fg(e){return e?(e=Ai,e):Ai}function dg(e,t,a,i,s,c){s=fg(s),i.context===null?i.context=s:i.pendingContext=s,i=la(t),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=oa(e,i,t),a!==null&&(Lt(a,e,t),zr(a,e,t))}function mg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ic(e,t){mg(e,t),(e=e.alternate)&&mg(e,t)}function hg(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&Lt(t,e,67108864),Ic(e,67108864)}}function pg(e){if(e.tag===13||e.tag===31){var t=$t();t=Ks(t);var a=Ba(e,t);a!==null&&Lt(a,e,t),Ic(e,t)}}var Xo=!0;function lS(e,t,a,i){var s=q.T;q.T=null;var c=W.p;try{W.p=2,ef(e,t,a,i)}finally{W.p=c,q.T=s}}function oS(e,t,a,i){var s=q.T;q.T=null;var c=W.p;try{W.p=8,ef(e,t,a,i)}finally{W.p=c,q.T=s}}function ef(e,t,a,i){if(Xo){var s=tf(i);if(s===null)Hc(e,t,i,Jo,a),yg(e,i);else if(uS(s,e,t,a,i))i.stopPropagation();else if(yg(e,i),t&4&&-1<sS.indexOf(e)){for(;s!==null;){var c=pi(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=La(c.pendingLanes);if(h!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var T=1<<31-qt(h);b.entanglements[1]|=T,h&=~T}xn(c),(Me&6)===0&&(Eo=xe()+500,Kr(0))}}break;case 31:case 13:b=Ba(c,2),b!==null&&Lt(b,c,2),Lo(),Ic(c,2)}if(c=tf(i),c===null&&Hc(e,t,i,Jo,a),c===s)break;s=c}s!==null&&i.stopPropagation()}else Hc(e,t,i,null,a)}}function tf(e){return e=au(e),nf(e)}var Jo=null;function nf(e){if(Jo=null,e=hi(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=m(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jo=e,null}function gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case st:return 2;case Ve:return 8;case ft:case Jt:return 32;case di:return 268435456;default:return 32}default:return 32}}var af=!1,ba=null,va=null,Sa=null,tl=new Map,nl=new Map,xa=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yg(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":tl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(t.pointerId)}}function al(e,t,a,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=pi(t),t!==null&&hg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function uS(e,t,a,i,s){switch(t){case"focusin":return ba=al(ba,e,t,a,i,s),!0;case"dragenter":return va=al(va,e,t,a,i,s),!0;case"mouseover":return Sa=al(Sa,e,t,a,i,s),!0;case"pointerover":var c=s.pointerId;return tl.set(c,al(tl.get(c)||null,e,t,a,i,s)),!0;case"gotpointercapture":return c=s.pointerId,nl.set(c,al(nl.get(c)||null,e,t,a,i,s)),!0}return!1}function bg(e){var t=hi(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,zd(e.priority,function(){pg(a)});return}}else if(t===31){if(t=m(a),t!==null){e.blockedOn=t,zd(e.priority,function(){pg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tf(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);nu=i,a.target.dispatchEvent(i),nu=null}else return t=pi(a),t!==null&&hg(t),e.blockedOn=a,!1;t.shift()}return!0}function vg(e,t,a){Ko(e)&&a.delete(t)}function cS(){af=!1,ba!==null&&Ko(ba)&&(ba=null),va!==null&&Ko(va)&&(va=null),Sa!==null&&Ko(Sa)&&(Sa=null),tl.forEach(vg),nl.forEach(vg)}function Qo(e,t){e.blockedOn===t&&(e.blockedOn=null,af||(af=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,cS)))}var Zo=null;function Sg(e){Zo!==e&&(Zo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Zo===e&&(Zo=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(nf(i||a)===null)continue;break}var c=pi(a);c!==null&&(e.splice(t,3),t-=3,tc(c,{pending:!0,data:s,method:a.method,action:i},i,s))}}))}function Zi(e){function t(T){return Qo(T,e)}ba!==null&&Qo(ba,e),va!==null&&Qo(va,e),Sa!==null&&Qo(Sa,e),tl.forEach(t),nl.forEach(t);for(var a=0;a<xa.length;a++){var i=xa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)bg(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var s=a[i],c=a[i+1],h=s[Tt]||null;if(typeof c=="function")h||Sg(a);else if(h){var b=null;if(c&&c.hasAttribute("formAction")){if(s=c,h=c[Tt]||null)b=h.formAction;else if(nf(s)!==null)continue}else b=h.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),Sg(a)}}}function xg(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return s=h})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function rf(e){this._internalRoot=e}Fo.prototype.render=rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=$t();dg(a,i,e,t,null,null)},Fo.prototype.unmount=rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dg(e.current,2,null,e,null,null),Lo(),t[mi]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&bg(e)}};var Cg=r.version;if(Cg!=="19.2.1")throw Error(o(527,Cg,"19.2.1"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var fS={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{dr=Wo.inject(fS),kt=Wo}catch{}}return sl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var a=!1,i="",s=Eh,c=Oh,h=Lh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=cg(e,1,!1,null,null,a,i,null,s,c,h,xg),e[mi]=t.current,Uc(e),new rf(t)},sl.hydrateRoot=function(e,t,a){if(!u(e))throw Error(o(299));var i=!1,s="",c=Eh,h=Oh,b=Lh,T=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=cg(e,1,!0,t,a??null,i,s,T,c,h,b,xg),t.context=fg(null),a=t.current,i=$t(),i=Ks(i),s=la(i),s.callback=null,oa(a,s,i),a=i,t.current.lanes=a,hr(t,a),xn(t),e[mi]=t.current,Uc(e),new Fo(t)},sl.version="19.2.1",sl}var Fg;function cx(){if(Fg)return Cf.exports;Fg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Cf.exports=ux(),Cf.exports}var fx=cx();const dx=Ny(fx),mx="/project-textile/assets/placeholder1-JcdSYIv8.png",Wg=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),hx="/project-textile/assets/placeholder1-B8hzmm9Y.jpg",Ig=Object.freeze(Object.defineProperty({__proto__:null,default:hx},Symbol.toStringTag,{value:"Module"})),px="/project-textile/assets/placeholder1-JcdSYIv8.png",ey=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),gx=[{path:["ongoing","index.html"],title:"Ongoing Research Index Page",abstract:`
Optionally, use this document to provide optional information.
`},{path:["ongoing","project-1.html"],title:"Sample LATeX Document without mathtools",abstract:`
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue
eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida
placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
`},{path:["publications","index.html"],title:"Publication Index Page",abstract:`
Optionally, use this document to provide optional information.
`},{path:["publications","pub-1.html"],title:"Sample LATeX Document without mathtools",abstract:`
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue
eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida
placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
`}],Cl={black:"#000",white:"#fff"},Fi={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Wi={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Ii={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},er={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},tr={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ul={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},yx={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function ii(n,...r){const l=new URL(`https://mui.com/production-error/?code=${n}`);return r.forEach(o=>l.searchParams.append("args[]",o)),`Minified MUI error #${n}; visit ${l} for the full message.`}const Kn="$$material";function Hf(){return Hf=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var o in l)({}).hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},Hf.apply(null,arguments)}function bx(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function vx(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Sx=(function(){function n(l){var o=this;this._insertTag=function(u){var f;o.tags.length===0?o.insertionPoint?f=o.insertionPoint.nextSibling:o.prepend?f=o.container.firstChild:f=o.before:f=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(u,f),o.tags.push(u)},this.isSpeedy=l.speedy===void 0?!0:l.speedy,this.tags=[],this.ctr=0,this.nonce=l.nonce,this.key=l.key,this.container=l.container,this.prepend=l.prepend,this.insertionPoint=l.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(o){o.forEach(this._insertTag)},r.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vx(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var f=bx(u);try{f.insertRule(o,f.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(o));this.ctr++},r.flush=function(){this.tags.forEach(function(o){var u;return(u=o.parentNode)==null?void 0:u.removeChild(o)}),this.tags=[],this.ctr=0},n})(),St="-ms-",_s="-moz-",Re="-webkit-",rb="comm",sd="rule",ud="decl",xx="@import",lb="@keyframes",Cx="@layer",_x=Math.abs,Ls=String.fromCharCode,wx=Object.assign;function Tx(n,r){return yt(n,0)^45?(((r<<2^yt(n,0))<<2^yt(n,1))<<2^yt(n,2))<<2^yt(n,3):0}function ob(n){return n.trim()}function Ax(n,r){return(n=r.exec(n))?n[0]:n}function Ee(n,r,l){return n.replace(r,l)}function Gf(n,r){return n.indexOf(r)}function yt(n,r){return n.charCodeAt(r)|0}function _l(n,r,l){return n.slice(r,l)}function _n(n){return n.length}function cd(n){return n.length}function is(n,r){return r.push(n),n}function Mx(n,r){return n.map(r).join("")}var zs=1,sr=1,sb=0,zt=0,rt=0,ur="";function Ds(n,r,l,o,u,f,d){return{value:n,root:r,parent:l,type:o,props:u,children:f,line:zs,column:sr,length:d,return:""}}function cl(n,r){return wx(Ds("",null,null,"",null,null,0),n,{length:-n.length},r)}function Rx(){return rt}function Ex(){return rt=zt>0?yt(ur,--zt):0,sr--,rt===10&&(sr=1,zs--),rt}function Pt(){return rt=zt<sb?yt(ur,zt++):0,sr++,rt===10&&(sr=1,zs++),rt}function An(){return yt(ur,zt)}function cs(){return zt}function Rl(n,r){return _l(ur,n,r)}function wl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ub(n){return zs=sr=1,sb=_n(ur=n),zt=0,[]}function cb(n){return ur="",n}function fs(n){return ob(Rl(zt-1,$f(n===91?n+2:n===40?n+1:n)))}function Ox(n){for(;(rt=An())&&rt<33;)Pt();return wl(n)>2||wl(rt)>3?"":" "}function Lx(n,r){for(;--r&&Pt()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Rl(n,cs()+(r<6&&An()==32&&Pt()==32))}function $f(n){for(;Pt();)switch(rt){case n:return zt;case 34:case 39:n!==34&&n!==39&&$f(rt);break;case 40:n===41&&$f(n);break;case 92:Pt();break}return zt}function zx(n,r){for(;Pt()&&n+rt!==57;)if(n+rt===84&&An()===47)break;return"/*"+Rl(r,zt-1)+"*"+Ls(n===47?n:Pt())}function Dx(n){for(;!wl(An());)Pt();return Rl(n,zt)}function kx(n){return cb(ds("",null,null,null,[""],n=ub(n),0,[0],n))}function ds(n,r,l,o,u,f,d,m,g){for(var p=0,v=0,y=d,S=0,C=0,w=0,_=1,R=1,L=1,G=0,U="",$=u,B=f,O=o,k=U;R;)switch(w=G,G=Pt()){case 40:if(w!=108&&yt(k,y-1)==58){Gf(k+=Ee(fs(G),"&","&\f"),"&\f")!=-1&&(L=-1);break}case 34:case 39:case 91:k+=fs(G);break;case 9:case 10:case 13:case 32:k+=Ox(w);break;case 92:k+=Lx(cs()-1,7);continue;case 47:switch(An()){case 42:case 47:is(qx(zx(Pt(),cs()),r,l),g);break;default:k+="/"}break;case 123*_:m[p++]=_n(k)*L;case 125*_:case 59:case 0:switch(G){case 0:case 125:R=0;case 59+v:L==-1&&(k=Ee(k,/\f/g,"")),C>0&&_n(k)-y&&is(C>32?ny(k+";",o,l,y-1):ny(Ee(k," ","")+";",o,l,y-2),g);break;case 59:k+=";";default:if(is(O=ty(k,r,l,p,v,u,m,U,$=[],B=[],y),f),G===123)if(v===0)ds(k,r,O,O,$,f,y,m,B);else switch(S===99&&yt(k,3)===110?100:S){case 100:case 108:case 109:case 115:ds(n,O,O,o&&is(ty(n,O,O,0,0,u,m,U,u,$=[],y),B),u,B,y,m,o?$:B);break;default:ds(k,O,O,O,[""],B,0,m,B)}}p=v=C=0,_=L=1,U=k="",y=d;break;case 58:y=1+_n(k),C=w;default:if(_<1){if(G==123)--_;else if(G==125&&_++==0&&Ex()==125)continue}switch(k+=Ls(G),G*_){case 38:L=v>0?1:(k+="\f",-1);break;case 44:m[p++]=(_n(k)-1)*L,L=1;break;case 64:An()===45&&(k+=fs(Pt())),S=An(),v=y=_n(U=k+=Dx(cs())),G++;break;case 45:w===45&&_n(k)==2&&(_=0)}}return f}function ty(n,r,l,o,u,f,d,m,g,p,v){for(var y=u-1,S=u===0?f:[""],C=cd(S),w=0,_=0,R=0;w<o;++w)for(var L=0,G=_l(n,y+1,y=_x(_=d[w])),U=n;L<C;++L)(U=ob(_>0?S[L]+" "+G:Ee(G,/&\f/g,S[L])))&&(g[R++]=U);return Ds(n,r,l,u===0?sd:m,g,p,v)}function qx(n,r,l){return Ds(n,r,l,rb,Ls(Rx()),_l(n,2,-2),0)}function ny(n,r,l,o){return Ds(n,r,l,ud,_l(n,0,o),_l(n,o+1,-1),o)}function ar(n,r){for(var l="",o=cd(n),u=0;u<o;u++)l+=r(n[u],u,n,r)||"";return l}function Bx(n,r,l,o){switch(n.type){case Cx:if(n.children.length)break;case xx:case ud:return n.return=n.return||n.value;case rb:return"";case lb:return n.return=n.value+"{"+ar(n.children,o)+"}";case sd:n.value=n.props.join(",")}return _n(l=ar(n.children,o))?n.return=n.value+"{"+l+"}":""}function jx(n){var r=cd(n);return function(l,o,u,f){for(var d="",m=0;m<r;m++)d+=n[m](l,o,u,f)||"";return d}}function Nx(n){return function(r){r.root||(r=r.return)&&n(r)}}function fb(n){var r=Object.create(null);return function(l){return r[l]===void 0&&(r[l]=n(l)),r[l]}}var Ux=function(r,l,o){for(var u=0,f=0;u=f,f=An(),u===38&&f===12&&(l[o]=1),!wl(f);)Pt();return Rl(r,zt)},Hx=function(r,l){var o=-1,u=44;do switch(wl(u)){case 0:u===38&&An()===12&&(l[o]=1),r[o]+=Ux(zt-1,l,o);break;case 2:r[o]+=fs(u);break;case 4:if(u===44){r[++o]=An()===58?"&\f":"",l[o]=r[o].length;break}default:r[o]+=Ls(u)}while(u=Pt());return r},Gx=function(r,l){return cb(Hx(ub(r),l))},ay=new WeakMap,$x=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var l=r.value,o=r.parent,u=r.column===o.column&&r.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(r.props.length===1&&l.charCodeAt(0)!==58&&!ay.get(o))&&!u){ay.set(r,!0);for(var f=[],d=Gx(l,f),m=o.props,g=0,p=0;g<d.length;g++)for(var v=0;v<m.length;v++,p++)r.props[p]=f[g]?d[g].replace(/&\f/g,m[v]):m[v]+" "+d[g]}}},Vx=function(r){if(r.type==="decl"){var l=r.value;l.charCodeAt(0)===108&&l.charCodeAt(2)===98&&(r.return="",r.value="")}};function db(n,r){switch(Tx(n,r)){case 5103:return Re+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+n+_s+n+St+n+n;case 6828:case 4268:return Re+n+St+n+n;case 6165:return Re+n+St+"flex-"+n+n;case 5187:return Re+n+Ee(n,/(\w+).+(:[^]+)/,Re+"box-$1$2"+St+"flex-$1$2")+n;case 5443:return Re+n+St+"flex-item-"+Ee(n,/flex-|-self/,"")+n;case 4675:return Re+n+St+"flex-line-pack"+Ee(n,/align-content|flex-|-self/,"")+n;case 5548:return Re+n+St+Ee(n,"shrink","negative")+n;case 5292:return Re+n+St+Ee(n,"basis","preferred-size")+n;case 6060:return Re+"box-"+Ee(n,"-grow","")+Re+n+St+Ee(n,"grow","positive")+n;case 4554:return Re+Ee(n,/([^-])(transform)/g,"$1"+Re+"$2")+n;case 6187:return Ee(Ee(Ee(n,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),n,"")+n;case 5495:case 3959:return Ee(n,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Ee(Ee(n,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+n+n;case 4095:case 3583:case 4068:case 2532:return Ee(n,/(.+)-inline(.+)/,Re+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(n)-1-r>6)switch(yt(n,r+1)){case 109:if(yt(n,r+4)!==45)break;case 102:return Ee(n,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+_s+(yt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Gf(n,"stretch")?db(Ee(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(yt(n,r+1)!==115)break;case 6444:switch(yt(n,_n(n)-3-(~Gf(n,"!important")&&10))){case 107:return Ee(n,":",":"+Re)+n;case 101:return Ee(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(yt(n,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+St+"$2box$3")+n}break;case 5936:switch(yt(n,r+11)){case 114:return Re+n+St+Ee(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Re+n+St+Ee(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Re+n+St+Ee(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Re+n+St+n+n}return n}var Yx=function(r,l,o,u){if(r.length>-1&&!r.return)switch(r.type){case ud:r.return=db(r.value,r.length);break;case lb:return ar([cl(r,{value:Ee(r.value,"@","@"+Re)})],u);case sd:if(r.length)return Mx(r.props,function(f){switch(Ax(f,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ar([cl(r,{props:[Ee(f,/:(read-\w+)/,":"+_s+"$1")]})],u);case"::placeholder":return ar([cl(r,{props:[Ee(f,/:(plac\w+)/,":"+Re+"input-$1")]}),cl(r,{props:[Ee(f,/:(plac\w+)/,":"+_s+"$1")]}),cl(r,{props:[Ee(f,/:(plac\w+)/,St+"input-$1")]})],u)}return""})}},Px=[Yx],Xx=function(r){var l=r.key;if(l==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(_){var R=_.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var u=r.stylisPlugins||Px,f={},d,m=[];d=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+l+' "]'),function(_){for(var R=_.getAttribute("data-emotion").split(" "),L=1;L<R.length;L++)f[R[L]]=!0;m.push(_)});var g,p=[$x,Vx];{var v,y=[Bx,Nx(function(_){v.insert(_)})],S=jx(p.concat(u,y)),C=function(R){return ar(kx(R),S)};g=function(R,L,G,U){v=G,C(R?R+"{"+L.styles+"}":L.styles),U&&(w.inserted[L.name]=!0)}}var w={key:l,sheet:new Sx({key:l,container:d,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:f,registered:{},insert:g};return w.sheet.hydrate(m),w},Tf={exports:{}},Le={};var iy;function Jx(){if(iy)return Le;iy=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,g=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,v=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,S=n?Symbol.for("react.suspense_list"):60120,C=n?Symbol.for("react.memo"):60115,w=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.block"):60121,R=n?Symbol.for("react.fundamental"):60117,L=n?Symbol.for("react.responder"):60118,G=n?Symbol.for("react.scope"):60119;function U(B){if(typeof B=="object"&&B!==null){var O=B.$$typeof;switch(O){case r:switch(B=B.type,B){case g:case p:case o:case f:case u:case y:return B;default:switch(B=B&&B.$$typeof,B){case m:case v:case w:case C:case d:return B;default:return O}}case l:return O}}}function $(B){return U(B)===p}return Le.AsyncMode=g,Le.ConcurrentMode=p,Le.ContextConsumer=m,Le.ContextProvider=d,Le.Element=r,Le.ForwardRef=v,Le.Fragment=o,Le.Lazy=w,Le.Memo=C,Le.Portal=l,Le.Profiler=f,Le.StrictMode=u,Le.Suspense=y,Le.isAsyncMode=function(B){return $(B)||U(B)===g},Le.isConcurrentMode=$,Le.isContextConsumer=function(B){return U(B)===m},Le.isContextProvider=function(B){return U(B)===d},Le.isElement=function(B){return typeof B=="object"&&B!==null&&B.$$typeof===r},Le.isForwardRef=function(B){return U(B)===v},Le.isFragment=function(B){return U(B)===o},Le.isLazy=function(B){return U(B)===w},Le.isMemo=function(B){return U(B)===C},Le.isPortal=function(B){return U(B)===l},Le.isProfiler=function(B){return U(B)===f},Le.isStrictMode=function(B){return U(B)===u},Le.isSuspense=function(B){return U(B)===y},Le.isValidElementType=function(B){return typeof B=="string"||typeof B=="function"||B===o||B===p||B===f||B===u||B===y||B===S||typeof B=="object"&&B!==null&&(B.$$typeof===w||B.$$typeof===C||B.$$typeof===d||B.$$typeof===m||B.$$typeof===v||B.$$typeof===R||B.$$typeof===L||B.$$typeof===G||B.$$typeof===_)},Le.typeOf=U,Le}var ry;function Kx(){return ry||(ry=1,Tf.exports=Jx()),Tf.exports}var Af,ly;function Qx(){if(ly)return Af;ly=1;var n=Kx(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};f[n.ForwardRef]=o,f[n.Memo]=u;function d(w){return n.isMemo(w)?u:f[w.$$typeof]||r}var m=Object.defineProperty,g=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,S=Object.prototype;function C(w,_,R){if(typeof _!="string"){if(S){var L=y(_);L&&L!==S&&C(w,L,R)}var G=g(_);p&&(G=G.concat(p(_)));for(var U=d(w),$=d(_),B=0;B<G.length;++B){var O=G[B];if(!l[O]&&!(R&&R[O])&&!($&&$[O])&&!(U&&U[O])){var k=v(_,O);try{m(w,O,k)}catch{}}}}return w}return Af=C,Af}Qx();var Zx=!0;function mb(n,r,l){var o="";return l.split(" ").forEach(function(u){n[u]!==void 0?r.push(n[u]+";"):u&&(o+=u+" ")}),o}var fd=function(r,l,o){var u=r.key+"-"+l.name;(o===!1||Zx===!1)&&r.registered[u]===void 0&&(r.registered[u]=l.styles)},dd=function(r,l,o){fd(r,l,o);var u=r.key+"-"+l.name;if(r.inserted[l.name]===void 0){var f=l;do r.insert(l===f?"."+u:"",f,r.sheet,!0),f=f.next;while(f!==void 0)}};function Fx(n){for(var r=0,l,o=0,u=n.length;u>=4;++o,u-=4)l=n.charCodeAt(o)&255|(n.charCodeAt(++o)&255)<<8|(n.charCodeAt(++o)&255)<<16|(n.charCodeAt(++o)&255)<<24,l=(l&65535)*1540483477+((l>>>16)*59797<<16),l^=l>>>24,r=(l&65535)*1540483477+((l>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(u){case 3:r^=(n.charCodeAt(o+2)&255)<<16;case 2:r^=(n.charCodeAt(o+1)&255)<<8;case 1:r^=n.charCodeAt(o)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Wx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ix=/[A-Z]|^ms/g,e2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hb=function(r){return r.charCodeAt(1)===45},oy=function(r){return r!=null&&typeof r!="boolean"},Mf=fb(function(n){return hb(n)?n:n.replace(Ix,"-$&").toLowerCase()}),sy=function(r,l){switch(r){case"animation":case"animationName":if(typeof l=="string")return l.replace(e2,function(o,u,f){return wn={name:u,styles:f,next:wn},u})}return Wx[r]!==1&&!hb(r)&&typeof l=="number"&&l!==0?l+"px":l};function Tl(n,r,l){if(l==null)return"";var o=l;if(o.__emotion_styles!==void 0)return o;switch(typeof l){case"boolean":return"";case"object":{var u=l;if(u.anim===1)return wn={name:u.name,styles:u.styles,next:wn},u.name;var f=l;if(f.styles!==void 0){var d=f.next;if(d!==void 0)for(;d!==void 0;)wn={name:d.name,styles:d.styles,next:wn},d=d.next;var m=f.styles+";";return m}return t2(n,r,l)}case"function":{if(n!==void 0){var g=wn,p=l(n);return wn=g,Tl(n,r,p)}break}}var v=l;if(r==null)return v;var y=r[v];return y!==void 0?y:v}function t2(n,r,l){var o="";if(Array.isArray(l))for(var u=0;u<l.length;u++)o+=Tl(n,r,l[u])+";";else for(var f in l){var d=l[f];if(typeof d!="object"){var m=d;r!=null&&r[m]!==void 0?o+=f+"{"+r[m]+"}":oy(m)&&(o+=Mf(f)+":"+sy(f,m)+";")}else if(Array.isArray(d)&&typeof d[0]=="string"&&(r==null||r[d[0]]===void 0))for(var g=0;g<d.length;g++)oy(d[g])&&(o+=Mf(f)+":"+sy(f,d[g])+";");else{var p=Tl(n,r,d);switch(f){case"animation":case"animationName":{o+=Mf(f)+":"+p+";";break}default:o+=f+"{"+p+"}"}}}return o}var uy=/label:\s*([^\s;{]+)\s*(;|$)/g,wn;function El(n,r,l){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var o=!0,u="";wn=void 0;var f=n[0];if(f==null||f.raw===void 0)o=!1,u+=Tl(l,r,f);else{var d=f;u+=d[0]}for(var m=1;m<n.length;m++)if(u+=Tl(l,r,n[m]),o){var g=f;u+=g[m]}uy.lastIndex=0;for(var p="",v;(v=uy.exec(u))!==null;)p+="-"+v[1];var y=Fx(u)+p;return{name:y,styles:u,next:wn}}var n2=function(r){return r()},pb=Uf.useInsertionEffect?Uf.useInsertionEffect:!1,gb=pb||n2,cy=pb||K.useLayoutEffect,yb=K.createContext(typeof HTMLElement<"u"?Xx({key:"css"}):null);yb.Provider;var md=function(r){return K.forwardRef(function(l,o){var u=K.useContext(yb);return r(l,u,o)})},Ol=K.createContext({}),hd={}.hasOwnProperty,Vf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",a2=function(r,l){var o={};for(var u in l)hd.call(l,u)&&(o[u]=l[u]);return o[Vf]=r,o},i2=function(r){var l=r.cache,o=r.serialized,u=r.isStringTag;return fd(l,o,u),gb(function(){return dd(l,o,u)}),null},r2=md(function(n,r,l){var o=n.css;typeof o=="string"&&r.registered[o]!==void 0&&(o=r.registered[o]);var u=n[Vf],f=[o],d="";typeof n.className=="string"?d=mb(r.registered,f,n.className):n.className!=null&&(d=n.className+" ");var m=El(f,void 0,K.useContext(Ol));d+=r.key+"-"+m.name;var g={};for(var p in n)hd.call(n,p)&&p!=="css"&&p!==Vf&&(g[p]=n[p]);return g.className=d,l&&(g.ref=l),K.createElement(K.Fragment,null,K.createElement(i2,{cache:r,serialized:m,isStringTag:typeof u=="string"}),K.createElement(u,g))}),l2=r2,fy=function(r,l){var o=arguments;if(l==null||!hd.call(l,"css"))return K.createElement.apply(void 0,o);var u=o.length,f=new Array(u);f[0]=l2,f[1]=a2(r,l);for(var d=2;d<u;d++)f[d]=o[d];return K.createElement.apply(null,f)};(function(n){var r;r||(r=n.JSX||(n.JSX={}))})(fy||(fy={}));var o2=md(function(n,r){var l=n.styles,o=El([l],void 0,K.useContext(Ol)),u=K.useRef();return cy(function(){var f=r.key+"-global",d=new r.sheet.constructor({key:f,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),m=!1,g=document.querySelector('style[data-emotion="'+f+" "+o.name+'"]');return r.sheet.tags.length&&(d.before=r.sheet.tags[0]),g!==null&&(m=!0,g.setAttribute("data-emotion",f),d.hydrate([g])),u.current=[d,m],function(){d.flush()}},[r]),cy(function(){var f=u.current,d=f[0],m=f[1];if(m){f[1]=!1;return}if(o.next!==void 0&&dd(r,o.next,!0),d.tags.length){var g=d.tags[d.tags.length-1].nextElementSibling;d.before=g,d.flush()}r.insert("",o,d,!1)},[r,o.name]),null});function s2(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return El(r)}function rT(){var n=s2.apply(void 0,arguments),r="animation-"+n.name;return{name:r,styles:"@keyframes "+r+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var u2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c2=fb(function(n){return u2.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),f2=c2,d2=function(r){return r!=="theme"},dy=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?f2:d2},my=function(r,l,o){var u;if(l){var f=l.shouldForwardProp;u=r.__emotion_forwardProp&&f?function(d){return r.__emotion_forwardProp(d)&&f(d)}:f}return typeof u!="function"&&o&&(u=r.__emotion_forwardProp),u},m2=function(r){var l=r.cache,o=r.serialized,u=r.isStringTag;return fd(l,o,u),gb(function(){return dd(l,o,u)}),null},h2=function n(r,l){var o=r.__emotion_real===r,u=o&&r.__emotion_base||r,f,d;l!==void 0&&(f=l.label,d=l.target);var m=my(r,l,o),g=m||dy(u),p=!g("as");return function(){var v=arguments,y=o&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(f!==void 0&&y.push("label:"+f+";"),v[0]==null||v[0].raw===void 0)y.push.apply(y,v);else{var S=v[0];y.push(S[0]);for(var C=v.length,w=1;w<C;w++)y.push(v[w],S[w])}var _=md(function(R,L,G){var U=p&&R.as||u,$="",B=[],O=R;if(R.theme==null){O={};for(var k in R)O[k]=R[k];O.theme=K.useContext(Ol)}typeof R.className=="string"?$=mb(L.registered,B,R.className):R.className!=null&&($=R.className+" ");var H=El(y.concat(B),L.registered,O);$+=L.key+"-"+H.name,d!==void 0&&($+=" "+d);var Q=p&&m===void 0?dy(U):g,ee={};for(var I in R)p&&I==="as"||Q(I)&&(ee[I]=R[I]);return ee.className=$,G&&(ee.ref=G),K.createElement(K.Fragment,null,K.createElement(m2,{cache:L,serialized:H,isStringTag:typeof U=="string"}),K.createElement(U,ee))});return _.displayName=f!==void 0?f:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",_.defaultProps=r.defaultProps,_.__emotion_real=_,_.__emotion_base=u,_.__emotion_styles=y,_.__emotion_forwardProp=m,Object.defineProperty(_,"toString",{value:function(){return"."+d}}),_.withComponent=function(R,L){var G=n(R,Hf({},l,L,{shouldForwardProp:my(_,L,!0)}));return G.apply(void 0,y)},_}},p2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Yf=h2.bind(null);p2.forEach(function(n){Yf[n]=Yf(n)});function g2(n){return n==null||Object.keys(n).length===0}function bb(n){const{styles:r,defaultTheme:l={}}=n,o=typeof r=="function"?u=>r(g2(u)?l:u):r;return Z.jsx(o2,{styles:o})}function y2(n,r){return Yf(n,r)}function b2(n,r){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=r(n.__emotion_styles))}const hy=[];function Ma(n){return hy[0]=n,El(hy)}var Rf={exports:{}},Ue={};var py;function v2(){if(py)return Ue;py=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.view_transition"),C=Symbol.for("react.client.reference");function w(_){if(typeof _=="object"&&_!==null){var R=_.$$typeof;switch(R){case n:switch(_=_.type,_){case l:case u:case o:case g:case p:case S:return _;default:switch(_=_&&_.$$typeof,_){case d:case m:case y:case v:return _;case f:return _;default:return R}}case r:return R}}}return Ue.ContextConsumer=f,Ue.ContextProvider=d,Ue.Element=n,Ue.ForwardRef=m,Ue.Fragment=l,Ue.Lazy=y,Ue.Memo=v,Ue.Portal=r,Ue.Profiler=u,Ue.StrictMode=o,Ue.Suspense=g,Ue.SuspenseList=p,Ue.isContextConsumer=function(_){return w(_)===f},Ue.isContextProvider=function(_){return w(_)===d},Ue.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===n},Ue.isForwardRef=function(_){return w(_)===m},Ue.isFragment=function(_){return w(_)===l},Ue.isLazy=function(_){return w(_)===y},Ue.isMemo=function(_){return w(_)===v},Ue.isPortal=function(_){return w(_)===r},Ue.isProfiler=function(_){return w(_)===u},Ue.isStrictMode=function(_){return w(_)===o},Ue.isSuspense=function(_){return w(_)===g},Ue.isSuspenseList=function(_){return w(_)===p},Ue.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===l||_===u||_===o||_===g||_===p||typeof _=="object"&&_!==null&&(_.$$typeof===y||_.$$typeof===v||_.$$typeof===d||_.$$typeof===f||_.$$typeof===m||_.$$typeof===C||_.getModuleId!==void 0)},Ue.typeOf=w,Ue}var gy;function S2(){return gy||(gy=1,Rf.exports=v2()),Rf.exports}var vb=S2();function Tn(n){if(typeof n!="object"||n===null)return!1;const r=Object.getPrototypeOf(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Sb(n){if(K.isValidElement(n)||vb.isValidElementType(n)||!Tn(n))return n;const r={};return Object.keys(n).forEach(l=>{r[l]=Sb(n[l])}),r}function _t(n,r,l={clone:!0}){const o=l.clone?{...n}:n;return Tn(n)&&Tn(r)&&Object.keys(r).forEach(u=>{K.isValidElement(r[u])||vb.isValidElementType(r[u])?o[u]=r[u]:Tn(r[u])&&Object.prototype.hasOwnProperty.call(n,u)&&Tn(n[u])?o[u]=_t(n[u],r[u],l):l.clone?o[u]=Tn(r[u])?Sb(r[u]):r[u]:o[u]=r[u]}),o}const x2=n=>{const r=Object.keys(n).map(l=>({key:l,val:n[l]}))||[];return r.sort((l,o)=>l.val-o.val),r.reduce((l,o)=>({...l,[o.key]:o.val}),{})};function C2(n){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:l="px",step:o=5,...u}=n,f=x2(r),d=Object.keys(f);function m(S){return`@media (min-width:${typeof r[S]=="number"?r[S]:S}${l})`}function g(S){return`@media (max-width:${(typeof r[S]=="number"?r[S]:S)-o/100}${l})`}function p(S,C){const w=d.indexOf(C);return`@media (min-width:${typeof r[S]=="number"?r[S]:S}${l}) and (max-width:${(w!==-1&&typeof r[d[w]]=="number"?r[d[w]]:C)-o/100}${l})`}function v(S){return d.indexOf(S)+1<d.length?p(S,d[d.indexOf(S)+1]):m(S)}function y(S){const C=d.indexOf(S);return C===0?m(d[1]):C===d.length-1?g(d[C]):p(S,d[d.indexOf(S)+1]).replace("@media","@media not all and")}return{keys:d,values:f,up:m,down:g,between:p,only:v,not:y,unit:l,...u}}function yy(n,r){if(!n.containerQueries)return r;const l=Object.keys(r).filter(o=>o.startsWith("@container")).sort((o,u)=>{const f=/min-width:\s*([0-9.]+)/;return+(o.match(f)?.[1]||0)-+(u.match(f)?.[1]||0)});return l.length?l.reduce((o,u)=>{const f=r[u];return delete o[u],o[u]=f,o},{...r}):r}function _2(n,r){return r==="@"||r.startsWith("@")&&(n.some(l=>r.startsWith(`@${l}`))||!!r.match(/^@\d/))}function w2(n,r){const l=r.match(/^@([^/]+)?\/?(.+)?$/);if(!l)return null;const[,o,u]=l,f=Number.isNaN(+o)?o||0:+o;return n.containerQueries(u).up(f)}function T2(n){const r=(f,d)=>f.replace("@media",d?`@container ${d}`:"@container");function l(f,d){f.up=(...m)=>r(n.breakpoints.up(...m),d),f.down=(...m)=>r(n.breakpoints.down(...m),d),f.between=(...m)=>r(n.breakpoints.between(...m),d),f.only=(...m)=>r(n.breakpoints.only(...m),d),f.not=(...m)=>{const g=r(n.breakpoints.not(...m),d);return g.includes("not all and")?g.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):g}}const o={},u=f=>(l(o,f),o);return l(u),{...n,containerQueries:u}}const A2={borderRadius:4};function bl(n,r){return r?_t(n,r,{clone:!1}):n}const ks={xs:0,sm:600,md:900,lg:1200,xl:1536},by={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${ks[n]}px)`},M2={containerQueries:n=>({up:r=>{let l=typeof r=="number"?r:ks[r]||r;return typeof l=="number"&&(l=`${l}px`),n?`@container ${n} (min-width:${l})`:`@container (min-width:${l})`}})};function hn(n,r,l){const o=n.theme||{};if(Array.isArray(r)){const f=o.breakpoints||by;return r.reduce((d,m,g)=>(d[f.up(f.keys[g])]=l(r[g]),d),{})}if(typeof r=="object"){const f=o.breakpoints||by;return Object.keys(r).reduce((d,m)=>{if(_2(f.keys,m)){const g=w2(o.containerQueries?o:M2,m);g&&(d[g]=l(r[m],m))}else if(Object.keys(f.values||ks).includes(m)){const g=f.up(m);d[g]=l(r[m],m)}else{const g=m;d[g]=r[g]}return d},{})}return l(r)}function xb(n={}){return n.keys?.reduce((l,o)=>{const u=n.up(o);return l[u]={},l},{})||{}}function Pf(n,r){return n.reduce((l,o)=>{const u=l[o];return(!u||Object.keys(u).length===0)&&delete l[o],l},r)}function R2(n,...r){const l=xb(n),o=[l,...r].reduce((u,f)=>_t(u,f),{});return Pf(Object.keys(l),o)}function E2(n,r){if(typeof n!="object")return{};const l={},o=Object.keys(r);return Array.isArray(n)?o.forEach((u,f)=>{f<n.length&&(l[u]=!0)}):o.forEach(u=>{n[u]!=null&&(l[u]=!0)}),l}function Ef({values:n,breakpoints:r,base:l}){const o=l||E2(n,r),u=Object.keys(o);if(u.length===0)return n;let f;return u.reduce((d,m,g)=>(Array.isArray(n)?(d[m]=n[g]!=null?n[g]:n[f],f=g):typeof n=="object"?(d[m]=n[m]!=null?n[m]:n[f],f=m):d[m]=n,d),{})}function Zn(n){if(typeof n!="string")throw new Error(ii(7));return n.charAt(0).toUpperCase()+n.slice(1)}function qs(n,r,l=!0){if(!r||typeof r!="string")return null;if(n&&n.vars&&l){const o=`vars.${r}`.split(".").reduce((u,f)=>u&&u[f]?u[f]:null,n);if(o!=null)return o}return r.split(".").reduce((o,u)=>o&&o[u]!=null?o[u]:null,n)}function ws(n,r,l,o=l){let u;return typeof n=="function"?u=n(l):Array.isArray(n)?u=n[l]||o:u=qs(n,l)||o,r&&(u=r(u,o,n)),u}function Ie(n){const{prop:r,cssProperty:l=n.prop,themeKey:o,transform:u}=n,f=d=>{if(d[r]==null)return null;const m=d[r],g=d.theme,p=qs(g,o)||{};return hn(d,m,y=>{let S=ws(p,u,y);return y===S&&typeof y=="string"&&(S=ws(p,u,`${r}${y==="default"?"":Zn(y)}`,y)),l===!1?S:{[l]:S}})};return f.propTypes={},f.filterProps=[r],f}function O2(n){const r={};return l=>(r[l]===void 0&&(r[l]=n(l)),r[l])}const L2={m:"margin",p:"padding"},z2={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},vy={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},D2=O2(n=>{if(n.length>2)if(vy[n])n=vy[n];else return[n];const[r,l]=n.split(""),o=L2[r],u=z2[l]||"";return Array.isArray(u)?u.map(f=>o+f):[o+u]}),pd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],gd=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...pd,...gd];function Ll(n,r,l,o){const u=qs(n,r,!0)??l;return typeof u=="number"||typeof u=="string"?f=>typeof f=="string"?f:typeof u=="string"?u.startsWith("var(")&&f===0?0:u.startsWith("var(")&&f===1?u:`calc(${f} * ${u})`:u*f:Array.isArray(u)?f=>{if(typeof f=="string")return f;const d=Math.abs(f),m=u[d];return f>=0?m:typeof m=="number"?-m:typeof m=="string"&&m.startsWith("var(")?`calc(-1 * ${m})`:`-${m}`}:typeof u=="function"?u:()=>{}}function Bs(n){return Ll(n,"spacing",8)}function ri(n,r){return typeof r=="string"||r==null?r:n(r)}function k2(n,r){return l=>n.reduce((o,u)=>(o[u]=ri(r,l),o),{})}function q2(n,r,l,o){if(!r.includes(l))return null;const u=D2(l),f=k2(u,o),d=n[l];return hn(n,d,f)}function Cb(n,r){const l=Bs(n.theme);return Object.keys(n).map(o=>q2(n,r,o,l)).reduce(bl,{})}function Qe(n){return Cb(n,pd)}Qe.propTypes={};Qe.filterProps=pd;function Ze(n){return Cb(n,gd)}Ze.propTypes={};Ze.filterProps=gd;function _b(n=8,r=Bs({spacing:n})){if(n.mui)return n;const l=(...o)=>(o.length===0?[1]:o).map(f=>{const d=r(f);return typeof d=="number"?`${d}px`:d}).join(" ");return l.mui=!0,l}function js(...n){const r=n.reduce((o,u)=>(u.filterProps.forEach(f=>{o[f]=u}),o),{}),l=o=>Object.keys(o).reduce((u,f)=>r[f]?bl(u,r[f](o)):u,{});return l.propTypes={},l.filterProps=n.reduce((o,u)=>o.concat(u.filterProps),[]),l}function ln(n){return typeof n!="number"?n:`${n}px solid`}function sn(n,r){return Ie({prop:n,themeKey:"borders",transform:r})}const B2=sn("border",ln),j2=sn("borderTop",ln),N2=sn("borderRight",ln),U2=sn("borderBottom",ln),H2=sn("borderLeft",ln),G2=sn("borderColor"),$2=sn("borderTopColor"),V2=sn("borderRightColor"),Y2=sn("borderBottomColor"),P2=sn("borderLeftColor"),X2=sn("outline",ln),J2=sn("outlineColor"),Ns=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const r=Ll(n.theme,"shape.borderRadius",4),l=o=>({borderRadius:ri(r,o)});return hn(n,n.borderRadius,l)}return null};Ns.propTypes={};Ns.filterProps=["borderRadius"];js(B2,j2,N2,U2,H2,G2,$2,V2,Y2,P2,Ns,X2,J2);const Us=n=>{if(n.gap!==void 0&&n.gap!==null){const r=Ll(n.theme,"spacing",8),l=o=>({gap:ri(r,o)});return hn(n,n.gap,l)}return null};Us.propTypes={};Us.filterProps=["gap"];const Hs=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const r=Ll(n.theme,"spacing",8),l=o=>({columnGap:ri(r,o)});return hn(n,n.columnGap,l)}return null};Hs.propTypes={};Hs.filterProps=["columnGap"];const Gs=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const r=Ll(n.theme,"spacing",8),l=o=>({rowGap:ri(r,o)});return hn(n,n.rowGap,l)}return null};Gs.propTypes={};Gs.filterProps=["rowGap"];const K2=Ie({prop:"gridColumn"}),Q2=Ie({prop:"gridRow"}),Z2=Ie({prop:"gridAutoFlow"}),F2=Ie({prop:"gridAutoColumns"}),W2=Ie({prop:"gridAutoRows"}),I2=Ie({prop:"gridTemplateColumns"}),eC=Ie({prop:"gridTemplateRows"}),tC=Ie({prop:"gridTemplateAreas"}),nC=Ie({prop:"gridArea"});js(Us,Hs,Gs,K2,Q2,Z2,F2,W2,I2,eC,tC,nC);function ir(n,r){return r==="grey"?r:n}const aC=Ie({prop:"color",themeKey:"palette",transform:ir}),iC=Ie({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ir}),rC=Ie({prop:"backgroundColor",themeKey:"palette",transform:ir});js(aC,iC,rC);function Yt(n){return n<=1&&n!==0?`${n*100}%`:n}const lC=Ie({prop:"width",transform:Yt}),yd=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const r=l=>{const o=n.theme?.breakpoints?.values?.[l]||ks[l];return o?n.theme?.breakpoints?.unit!=="px"?{maxWidth:`${o}${n.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Yt(l)}};return hn(n,n.maxWidth,r)}return null};yd.filterProps=["maxWidth"];const oC=Ie({prop:"minWidth",transform:Yt}),sC=Ie({prop:"height",transform:Yt}),uC=Ie({prop:"maxHeight",transform:Yt}),cC=Ie({prop:"minHeight",transform:Yt});Ie({prop:"size",cssProperty:"width",transform:Yt});Ie({prop:"size",cssProperty:"height",transform:Yt});const fC=Ie({prop:"boxSizing"});js(lC,yd,oC,sC,uC,cC,fC);const zl={border:{themeKey:"borders",transform:ln},borderTop:{themeKey:"borders",transform:ln},borderRight:{themeKey:"borders",transform:ln},borderBottom:{themeKey:"borders",transform:ln},borderLeft:{themeKey:"borders",transform:ln},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ln},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ns},color:{themeKey:"palette",transform:ir},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ir},backgroundColor:{themeKey:"palette",transform:ir},p:{style:Ze},pt:{style:Ze},pr:{style:Ze},pb:{style:Ze},pl:{style:Ze},px:{style:Ze},py:{style:Ze},padding:{style:Ze},paddingTop:{style:Ze},paddingRight:{style:Ze},paddingBottom:{style:Ze},paddingLeft:{style:Ze},paddingX:{style:Ze},paddingY:{style:Ze},paddingInline:{style:Ze},paddingInlineStart:{style:Ze},paddingInlineEnd:{style:Ze},paddingBlock:{style:Ze},paddingBlockStart:{style:Ze},paddingBlockEnd:{style:Ze},m:{style:Qe},mt:{style:Qe},mr:{style:Qe},mb:{style:Qe},ml:{style:Qe},mx:{style:Qe},my:{style:Qe},margin:{style:Qe},marginTop:{style:Qe},marginRight:{style:Qe},marginBottom:{style:Qe},marginLeft:{style:Qe},marginX:{style:Qe},marginY:{style:Qe},marginInline:{style:Qe},marginInlineStart:{style:Qe},marginInlineEnd:{style:Qe},marginBlock:{style:Qe},marginBlockStart:{style:Qe},marginBlockEnd:{style:Qe},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Us},rowGap:{style:Gs},columnGap:{style:Hs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Yt},maxWidth:{style:yd},minWidth:{transform:Yt},height:{transform:Yt},maxHeight:{transform:Yt},minHeight:{transform:Yt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function dC(...n){const r=n.reduce((o,u)=>o.concat(Object.keys(u)),[]),l=new Set(r);return n.every(o=>l.size===Object.keys(o).length)}function mC(n,r){return typeof n=="function"?n(r):n}function hC(){function n(l,o,u,f){const d={[l]:o,theme:u},m=f[l];if(!m)return{[l]:o};const{cssProperty:g=l,themeKey:p,transform:v,style:y}=m;if(o==null)return null;if(p==="typography"&&o==="inherit")return{[l]:o};const S=qs(u,p)||{};return y?y(d):hn(d,o,w=>{let _=ws(S,v,w);return w===_&&typeof w=="string"&&(_=ws(S,v,`${l}${w==="default"?"":Zn(w)}`,w)),g===!1?_:{[g]:_}})}function r(l){const{sx:o,theme:u={},nested:f}=l||{};if(!o)return null;const d=u.unstable_sxConfig??zl;function m(g){let p=g;if(typeof g=="function")p=g(u);else if(typeof g!="object")return g;if(!p)return null;const v=xb(u.breakpoints),y=Object.keys(v);let S=v;return Object.keys(p).forEach(C=>{const w=mC(p[C],u);if(w!=null)if(typeof w=="object")if(d[C])S=bl(S,n(C,w,u,d));else{const _=hn({theme:u},w,R=>({[C]:R}));dC(_,w)?S[C]=r({sx:w,theme:u,nested:!0}):S=bl(S,_)}else S=bl(S,n(C,w,u,d))}),!f&&u.modularCssLayers?{"@layer sx":yy(u,Pf(y,S))}:yy(u,Pf(y,S))}return Array.isArray(o)?o.map(m):m(o)}return r}const li=hC();li.filterProps=["sx"];function pC(n,r){const l=this;if(l.vars){if(!l.colorSchemes?.[n]||typeof l.getColorSchemeSelector!="function")return{};let o=l.getColorSchemeSelector(n);return o==="&"?r:((o.includes("data-")||o.includes("."))&&(o=`*:where(${o.replace(/\s*&$/,"")}) &`),{[o]:r})}return l.palette.mode===n?r:{}}function Dl(n={},...r){const{breakpoints:l={},palette:o={},spacing:u,shape:f={},...d}=n,m=C2(l),g=_b(u);let p=_t({breakpoints:m,direction:"ltr",components:{},palette:{mode:"light",...o},spacing:g,shape:{...A2,...f}},d);return p=T2(p),p.applyStyles=pC,p=r.reduce((v,y)=>_t(v,y),p),p.unstable_sxConfig={...zl,...d?.unstable_sxConfig},p.unstable_sx=function(y){return li({sx:y,theme:this})},p}function gC(n){return Object.keys(n).length===0}function bd(n=null){const r=K.useContext(Ol);return!r||gC(r)?n:r}const yC=Dl();function vd(n=yC){return bd(n)}function Of(n){const r=Ma(n);return n!==r&&r.styles?(r.styles.match(/^@layer\s+[^{]*$/)||(r.styles=`@layer global{${r.styles}}`),r):n}function wb({styles:n,themeId:r,defaultTheme:l={}}){const o=vd(l),u=r&&o[r]||o;let f=typeof n=="function"?n(u):n;return u.modularCssLayers&&(Array.isArray(f)?f=f.map(d=>Of(typeof d=="function"?d(u):d)):f=Of(f)),Z.jsx(bb,{styles:f})}const bC=n=>{const r={systemProps:{},otherProps:{}},l=n?.theme?.unstable_sxConfig??zl;return Object.keys(n).forEach(o=>{l[o]?r.systemProps[o]=n[o]:r.otherProps[o]=n[o]}),r};function Tb(n){const{sx:r,...l}=n,{systemProps:o,otherProps:u}=bC(l);let f;return Array.isArray(r)?f=[o,...r]:typeof r=="function"?f=(...d)=>{const m=r(...d);return Tn(m)?{...o,...m}:o}:f={...o,...r},{...u,sx:f}}const Sy=n=>n,vC=()=>{let n=Sy;return{configure(r){n=r},generate(r){return n(r)},reset(){n=Sy}}},SC=vC();function Ab(n){var r,l,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(r=0;r<u;r++)n[r]&&(l=Ab(n[r]))&&(o&&(o+=" "),o+=l)}else for(l in n)n[l]&&(o&&(o+=" "),o+=l);return o}function oi(){for(var n,r,l=0,o="",u=arguments.length;l<u;l++)(n=arguments[l])&&(r=Ab(n))&&(o&&(o+=" "),o+=r);return o}const xC={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function si(n,r,l="Mui"){const o=xC[r];return o?`${l}-${o}`:`${SC.generate(n)}-${r}`}function $s(n,r,l="Mui"){const o={};return r.forEach(u=>{o[u]=si(n,u,l)}),o}function Mb(n){const{variants:r,...l}=n,o={variants:r,style:Ma(l),isProcessed:!0};return o.style===l||r&&r.forEach(u=>{typeof u.style!="function"&&(u.style=Ma(u.style))}),o}const CC=Dl();function Lf(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function Fa(n,r){return r&&n&&typeof n=="object"&&n.styles&&!n.styles.startsWith("@layer")&&(n.styles=`@layer ${r}{${String(n.styles)}}`),n}function _C(n){return n?(r,l)=>l[n]:null}function wC(n,r,l){n.theme=AC(n.theme)?l:n.theme[r]||n.theme}function ms(n,r,l){const o=typeof r=="function"?r(n):r;if(Array.isArray(o))return o.flatMap(u=>ms(n,u,l));if(Array.isArray(o?.variants)){let u;if(o.isProcessed)u=l?Fa(o.style,l):o.style;else{const{variants:f,...d}=o;u=l?Fa(Ma(d),l):d}return Rb(n,o.variants,[u],l)}return o?.isProcessed?l?Fa(Ma(o.style),l):o.style:l?Fa(Ma(o),l):o}function Rb(n,r,l=[],o=void 0){let u;e:for(let f=0;f<r.length;f+=1){const d=r[f];if(typeof d.props=="function"){if(u??={...n,...n.ownerState,ownerState:n.ownerState},!d.props(u))continue}else for(const m in d.props)if(n[m]!==d.props[m]&&n.ownerState?.[m]!==d.props[m])continue e;typeof d.style=="function"?(u??={...n,...n.ownerState,ownerState:n.ownerState},l.push(o?Fa(Ma(d.style(u)),o):d.style(u))):l.push(o?Fa(Ma(d.style),o):d.style)}return l}function Eb(n={}){const{themeId:r,defaultTheme:l=CC,rootShouldForwardProp:o=Lf,slotShouldForwardProp:u=Lf}=n;function f(m){wC(m,r,l)}return(m,g={})=>{b2(m,O=>O.filter(k=>k!==li));const{name:p,slot:v,skipVariantsResolver:y,skipSx:S,overridesResolver:C=_C(RC(v)),...w}=g,_=p&&p.startsWith("Mui")||v?"components":"custom",R=y!==void 0?y:v&&v!=="Root"&&v!=="root"||!1,L=S||!1;let G=Lf;v==="Root"||v==="root"?G=o:v?G=u:MC(m)&&(G=void 0);const U=y2(m,{shouldForwardProp:G,label:TC(),...w}),$=O=>{if(O.__emotion_real===O)return O;if(typeof O=="function")return function(H){return ms(H,O,H.theme.modularCssLayers?_:void 0)};if(Tn(O)){const k=Mb(O);return function(Q){return k.variants?ms(Q,k,Q.theme.modularCssLayers?_:void 0):Q.theme.modularCssLayers?Fa(k.style,_):k.style}}return O},B=(...O)=>{const k=[],H=O.map($),Q=[];if(k.push(f),p&&C&&Q.push(function(ne){const re=ne.theme.components?.[p]?.styleOverrides;if(!re)return null;const q={};for(const W in re)q[W]=ms(ne,re[W],ne.theme.modularCssLayers?"theme":void 0);return C(ne,q)}),p&&!R&&Q.push(function(ne){const re=ne.theme?.components?.[p]?.variants;return re?Rb(ne,re,[],ne.theme.modularCssLayers?"theme":void 0):null}),L||Q.push(li),Array.isArray(H[0])){const x=H.shift(),ne=new Array(k.length).fill(""),F=new Array(Q.length).fill("");let re;re=[...ne,...x,...F],re.raw=[...ne,...x.raw,...F],k.unshift(re)}const ee=[...k,...H,...Q],I=U(...ee);return m.muiName&&(I.muiName=m.muiName),I};return U.withConfig&&(B.withConfig=U.withConfig),B}}function TC(n,r){return void 0}function AC(n){for(const r in n)return!1;return!0}function MC(n){return typeof n=="string"&&n.charCodeAt(0)>96}function RC(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}const Ob=Eb();function Ts(n,r,l=!1){const o={...r};for(const u in n)if(Object.prototype.hasOwnProperty.call(n,u)){const f=u;if(f==="components"||f==="slots")o[f]={...n[f],...o[f]};else if(f==="componentsProps"||f==="slotProps"){const d=n[f],m=r[f];if(!m)o[f]=d||{};else if(!d)o[f]=m;else{o[f]={...m};for(const g in d)if(Object.prototype.hasOwnProperty.call(d,g)){const p=g;o[f][p]=Ts(d[p],m[p],l)}}}else f==="className"&&l&&r.className?o.className=oi(n?.className,r?.className):f==="style"&&l&&r.style?o.style={...n?.style,...r?.style}:o[f]===void 0&&(o[f]=n[f])}return o}function EC(n){const{theme:r,name:l,props:o}=n;return!r||!r.components||!r.components[l]||!r.components[l].defaultProps?o:Ts(r.components[l].defaultProps,o)}function Lb({props:n,name:r,defaultTheme:l,themeId:o}){let u=vd(l);return o&&(u=u[o]||u),EC({theme:u,name:r,props:n})}const zb=typeof window<"u"?K.useLayoutEffect:K.useEffect;function OC(n,r=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(n,l))}function Sd(n,r=0,l=1){return OC(n,r,l)}function LC(n){n=n.slice(1);const r=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let l=n.match(r);return l&&l[0].length===1&&(l=l.map(o=>o+o)),l?`rgb${l.length===4?"a":""}(${l.map((o,u)=>u<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function Ra(n){if(n.type)return n;if(n.charAt(0)==="#")return Ra(LC(n));const r=n.indexOf("("),l=n.substring(0,r);if(!["rgb","rgba","hsl","hsla","color"].includes(l))throw new Error(ii(9,n));let o=n.substring(r+1,n.length-1),u;if(l==="color"){if(o=o.split(" "),u=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(u))throw new Error(ii(10,u))}else o=o.split(",");return o=o.map(f=>parseFloat(f)),{type:l,values:o,colorSpace:u}}const zC=n=>{const r=Ra(n);return r.values.slice(0,3).map((l,o)=>r.type.includes("hsl")&&o!==0?`${l}%`:l).join(" ")},dl=(n,r)=>{try{return zC(n)}catch{return n}};function Vs(n){const{type:r,colorSpace:l}=n;let{values:o}=n;return r.includes("rgb")?o=o.map((u,f)=>f<3?parseInt(u,10):u):r.includes("hsl")&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),r.includes("color")?o=`${l} ${o.join(" ")}`:o=`${o.join(", ")}`,`${r}(${o})`}function Db(n){n=Ra(n);const{values:r}=n,l=r[0],o=r[1]/100,u=r[2]/100,f=o*Math.min(u,1-u),d=(p,v=(p+l/30)%12)=>u-f*Math.max(Math.min(v-3,9-v,1),-1);let m="rgb";const g=[Math.round(d(0)*255),Math.round(d(8)*255),Math.round(d(4)*255)];return n.type==="hsla"&&(m+="a",g.push(r[3])),Vs({type:m,values:g})}function Xf(n){n=Ra(n);let r=n.type==="hsl"||n.type==="hsla"?Ra(Db(n)).values:n.values;return r=r.map(l=>(n.type!=="color"&&(l/=255),l<=.03928?l/12.92:((l+.055)/1.055)**2.4)),Number((.2126*r[0]+.7152*r[1]+.0722*r[2]).toFixed(3))}function DC(n,r){const l=Xf(n),o=Xf(r);return(Math.max(l,o)+.05)/(Math.min(l,o)+.05)}function As(n,r){return n=Ra(n),r=Sd(r),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${r}`:n.values[3]=r,Vs(n)}function Qa(n,r,l){try{return As(n,r)}catch{return n}}function Ys(n,r){if(n=Ra(n),r=Sd(r),n.type.includes("hsl"))n.values[2]*=1-r;else if(n.type.includes("rgb")||n.type.includes("color"))for(let l=0;l<3;l+=1)n.values[l]*=1-r;return Vs(n)}function ke(n,r,l){try{return Ys(n,r)}catch{return n}}function Ps(n,r){if(n=Ra(n),r=Sd(r),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*r;else if(n.type.includes("rgb"))for(let l=0;l<3;l+=1)n.values[l]+=(255-n.values[l])*r;else if(n.type.includes("color"))for(let l=0;l<3;l+=1)n.values[l]+=(1-n.values[l])*r;return Vs(n)}function qe(n,r,l){try{return Ps(n,r)}catch{return n}}function kC(n,r=.15){return Xf(n)>.5?Ys(n,r):Ps(n,r)}function rs(n,r,l){try{return kC(n,r)}catch{return n}}const kb=K.createContext(null);function xd(){return K.useContext(kb)}const qC=typeof Symbol=="function"&&Symbol.for,BC=qC?Symbol.for("mui.nested"):"__THEME_NESTED__";function jC(n,r){return typeof r=="function"?r(n):{...n,...r}}function NC(n){const{children:r,theme:l}=n,o=xd(),u=K.useMemo(()=>{const f=o===null?{...l}:jC(o,l);return f!=null&&(f[BC]=o!==null),f},[l,o]);return Z.jsx(kb.Provider,{value:u,children:r})}const UC=K.createContext();function HC({value:n,...r}){return Z.jsx(UC.Provider,{value:n??!0,...r})}const qb=K.createContext(void 0);function GC({value:n,children:r}){return Z.jsx(qb.Provider,{value:n,children:r})}function $C(n){const{theme:r,name:l,props:o}=n;if(!r||!r.components||!r.components[l])return o;const u=r.components[l];return u.defaultProps?Ts(u.defaultProps,o,r.components.mergeClassNameAndStyle):!u.styleOverrides&&!u.variants?Ts(u,o,r.components.mergeClassNameAndStyle):o}function VC({props:n,name:r}){const l=K.useContext(qb);return $C({props:n,name:r,theme:{components:l}})}let xy=0;function YC(n){const[r,l]=K.useState(n),o=n||r;return K.useEffect(()=>{r==null&&(xy+=1,l(`mui-${xy}`))},[r]),o}const PC={...Uf},Cy=PC.useId;function XC(n){return Cy!==void 0?Cy():YC(n)}function JC(n){const r=bd(),l=XC()||"",{modularCssLayers:o}=n;let u="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!o||r!==null?u="":typeof o=="string"?u=o.replace(/mui(?!\.)/g,u):u=`@layer ${u};`,zb(()=>{const f=document.querySelector("head");if(!f)return;const d=f.firstChild;if(u){if(d&&d.hasAttribute?.("data-mui-layer-order")&&d.getAttribute("data-mui-layer-order")===l)return;const m=document.createElement("style");m.setAttribute("data-mui-layer-order",l),m.textContent=u,f.prepend(m)}else f.querySelector(`style[data-mui-layer-order="${l}"]`)?.remove()},[u,l]),u?Z.jsx(wb,{styles:u}):null}const _y={};function wy(n,r,l,o=!1){return K.useMemo(()=>{const u=n&&r[n]||r;if(typeof l=="function"){const f=l(u),d=n?{...r,[n]:f}:f;return o?()=>d:d}return n?{...r,[n]:l}:{...r,...l}},[n,r,l,o])}function Bb(n){const{children:r,theme:l,themeId:o}=n,u=bd(_y),f=xd()||_y,d=wy(o,u,l),m=wy(o,f,l,!0),g=(o?d[o]:d).direction==="rtl",p=JC(d);return Z.jsx(NC,{theme:m,children:Z.jsx(Ol.Provider,{value:d,children:Z.jsx(HC,{value:g,children:Z.jsxs(GC,{value:o?d[o].components:d.components,children:[p,r]})})})})}const Ty={theme:void 0};function KC(n){let r,l;return function(u){let f=r;return(f===void 0||u.theme!==l)&&(Ty.theme=u.theme,f=Mb(n(Ty)),r=f,l=u.theme),f}}const Cd="mode",_d="color-scheme",QC="data-color-scheme";function ZC(n){const{defaultMode:r="system",defaultLightColorScheme:l="light",defaultDarkColorScheme:o="dark",modeStorageKey:u=Cd,colorSchemeStorageKey:f=_d,attribute:d=QC,colorSchemeNode:m="document.documentElement",nonce:g}=n||{};let p="",v=d;if(d==="class"&&(v=".%s"),d==="data"&&(v="[data-%s]"),v.startsWith(".")){const S=v.substring(1);p+=`${m}.classList.remove('${S}'.replace('%s', light), '${S}'.replace('%s', dark));
      ${m}.classList.add('${S}'.replace('%s', colorScheme));`}const y=v.match(/\[([^[\]]+)\]/);if(y){const[S,C]=y[1].split("=");C||(p+=`${m}.removeAttribute('${S}'.replace('%s', light));
      ${m}.removeAttribute('${S}'.replace('%s', dark));`),p+=`
      ${m}.setAttribute('${S}'.replace('%s', colorScheme), ${C?`${C}.replace('%s', colorScheme)`:'""'});`}else v!==".%s"&&(p+=`${m}.setAttribute('${v}', colorScheme);`);return Z.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?g:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${u}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${o}';
  const light = localStorage.getItem('${f}-light') || '${l}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${p}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function FC(){}const WC=({key:n,storageWindow:r})=>(!r&&typeof window<"u"&&(r=window),{get(l){if(typeof window>"u")return;if(!r)return l;let o;try{o=r.localStorage.getItem(n)}catch{}return o||l},set:l=>{if(r)try{r.localStorage.setItem(n,l)}catch{}},subscribe:l=>{if(!r)return FC;const o=u=>{const f=u.newValue;u.key===n&&l(f)};return r.addEventListener("storage",o),()=>{r.removeEventListener("storage",o)}}});function zf(){}function Ay(n){if(typeof window<"u"&&typeof window.matchMedia=="function"&&n==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function jb(n,r){if(n.mode==="light"||n.mode==="system"&&n.systemMode==="light")return r("light");if(n.mode==="dark"||n.mode==="system"&&n.systemMode==="dark")return r("dark")}function IC(n){return jb(n,r=>{if(r==="light")return n.lightColorScheme;if(r==="dark")return n.darkColorScheme})}function e_(n){const{defaultMode:r="light",defaultLightColorScheme:l,defaultDarkColorScheme:o,supportedColorSchemes:u=[],modeStorageKey:f=Cd,colorSchemeStorageKey:d=_d,storageWindow:m=typeof window>"u"?void 0:window,storageManager:g=WC,noSsr:p=!1}=n,v=u.join(","),y=u.length>1,S=K.useMemo(()=>g?.({key:f,storageWindow:m}),[g,f,m]),C=K.useMemo(()=>g?.({key:`${d}-light`,storageWindow:m}),[g,d,m]),w=K.useMemo(()=>g?.({key:`${d}-dark`,storageWindow:m}),[g,d,m]),[_,R]=K.useState(()=>{const H=S?.get(r)||r,Q=C?.get(l)||l,ee=w?.get(o)||o;return{mode:H,systemMode:Ay(H),lightColorScheme:Q,darkColorScheme:ee}}),[L,G]=K.useState(p||!y);K.useEffect(()=>{G(!0)},[]);const U=IC(_),$=K.useCallback(H=>{R(Q=>{if(H===Q.mode)return Q;const ee=H??r;return S?.set(ee),{...Q,mode:ee,systemMode:Ay(ee)}})},[S,r]),B=K.useCallback(H=>{H?typeof H=="string"?H&&!v.includes(H)?console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`):R(Q=>{const ee={...Q};return jb(Q,I=>{I==="light"&&(C?.set(H),ee.lightColorScheme=H),I==="dark"&&(w?.set(H),ee.darkColorScheme=H)}),ee}):R(Q=>{const ee={...Q},I=H.light===null?l:H.light,x=H.dark===null?o:H.dark;return I&&(v.includes(I)?(ee.lightColorScheme=I,C?.set(I)):console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)),x&&(v.includes(x)?(ee.darkColorScheme=x,w?.set(x)):console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`)),ee}):R(Q=>(C?.set(l),w?.set(o),{...Q,lightColorScheme:l,darkColorScheme:o}))},[v,C,w,l,o]),O=K.useCallback(H=>{_.mode==="system"&&R(Q=>{const ee=H?.matches?"dark":"light";return Q.systemMode===ee?Q:{...Q,systemMode:ee}})},[_.mode]),k=K.useRef(O);return k.current=O,K.useEffect(()=>{if(typeof window.matchMedia!="function"||!y)return;const H=(...ee)=>k.current(...ee),Q=window.matchMedia("(prefers-color-scheme: dark)");return Q.addListener(H),H(Q),()=>{Q.removeListener(H)}},[y]),K.useEffect(()=>{if(y){const H=S?.subscribe(I=>{(!I||["light","dark","system"].includes(I))&&$(I||r)})||zf,Q=C?.subscribe(I=>{(!I||v.match(I))&&B({light:I})})||zf,ee=w?.subscribe(I=>{(!I||v.match(I))&&B({dark:I})})||zf;return()=>{H(),Q(),ee()}}},[B,$,v,r,m,y,S,C,w]),{..._,mode:L?_.mode:void 0,systemMode:L?_.systemMode:void 0,colorScheme:L?U:void 0,setMode:$,setColorScheme:B}}const t_="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function n_(n){const{themeId:r,theme:l={},modeStorageKey:o=Cd,colorSchemeStorageKey:u=_d,disableTransitionOnChange:f=!1,defaultColorScheme:d,resolveTheme:m}=n,g={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},p=K.createContext(void 0),v=()=>K.useContext(p)||g,y={},S={};function C(L){const{children:G,theme:U,modeStorageKey:$=o,colorSchemeStorageKey:B=u,disableTransitionOnChange:O=f,storageManager:k,storageWindow:H=typeof window>"u"?void 0:window,documentNode:Q=typeof document>"u"?void 0:document,colorSchemeNode:ee=typeof document>"u"?void 0:document.documentElement,disableNestedContext:I=!1,disableStyleSheetGeneration:x=!1,defaultMode:ne="system",forceThemeRerender:F=!1,noSsr:re}=L,q=K.useRef(!1),W=xd(),oe=K.useContext(p),Ce=!!oe&&!I,Te=K.useMemo(()=>U||(typeof l=="function"?l():l),[U]),M=Te[r],V=M||Te,{colorSchemes:te=y,components:ae=S,cssVarPrefix:ue}=V,fe=Object.keys(te).filter(st=>!!te[st]).join(","),me=K.useMemo(()=>fe.split(","),[fe]),Xe=typeof d=="string"?d:d.light,Ae=typeof d=="string"?d:d.dark,un=te[Xe]&&te[Ae]?ne:te[V.defaultColorScheme]?.palette?.mode||V.palette?.mode,{mode:pn,setMode:wt,systemMode:Ea,lightColorScheme:Xt,darkColorScheme:Rn,colorScheme:Oa,setColorScheme:fi}=e_({supportedColorSchemes:me,defaultLightColorScheme:Xe,defaultDarkColorScheme:Ae,modeStorageKey:$,colorSchemeStorageKey:B,defaultMode:un,storageManager:k,storageWindow:H,noSsr:re});let Fn=pn,et=Oa;Ce&&(Fn=oe.mode,et=oe.colorScheme);let Dt=et||V.defaultColorScheme;V.vars&&!F&&(Dt=V.defaultColorScheme);const gn=K.useMemo(()=>{const st=V.generateThemeVars?.()||V.vars,Ve={...V,components:ae,colorSchemes:te,cssVarPrefix:ue,vars:st};if(typeof Ve.generateSpacing=="function"&&(Ve.spacing=Ve.generateSpacing()),Dt){const ft=te[Dt];ft&&typeof ft=="object"&&Object.keys(ft).forEach(Jt=>{ft[Jt]&&typeof ft[Jt]=="object"?Ve[Jt]={...Ve[Jt],...ft[Jt]}:Ve[Jt]=ft[Jt]})}return m?m(Ve):Ve},[V,Dt,ae,te,ue]),yn=V.colorSchemeSelector;zb(()=>{if(et&&ee&&yn&&yn!=="media"){const st=yn;let Ve=yn;if(st==="class"&&(Ve=".%s"),st==="data"&&(Ve="[data-%s]"),st?.startsWith("data-")&&!st.includes("%s")&&(Ve=`[${st}="%s"]`),Ve.startsWith("."))ee.classList.remove(...me.map(ft=>Ve.substring(1).replace("%s",ft))),ee.classList.add(Ve.substring(1).replace("%s",et));else{const ft=Ve.replace("%s",et).match(/\[([^\]]+)\]/);if(ft){const[Jt,di]=ft[1].split("=");di||me.forEach(Xs=>{ee.removeAttribute(Jt.replace(et,Xs))}),ee.setAttribute(Jt,di?di.replace(/"|'/g,""):"")}else ee.setAttribute(Ve,et)}}},[et,yn,ee,me]),K.useEffect(()=>{let st;if(O&&q.current&&Q){const Ve=Q.createElement("style");Ve.appendChild(Q.createTextNode(t_)),Q.head.appendChild(Ve),window.getComputedStyle(Q.body),st=setTimeout(()=>{Q.head.removeChild(Ve)},1)}return()=>{clearTimeout(st)}},[et,O,Q]),K.useEffect(()=>(q.current=!0,()=>{q.current=!1}),[]);const Oe=K.useMemo(()=>({allColorSchemes:me,colorScheme:et,darkColorScheme:Rn,lightColorScheme:Xt,mode:Fn,setColorScheme:fi,setMode:wt,systemMode:Ea}),[me,et,Rn,Xt,Fn,fi,wt,Ea,gn.colorSchemeSelector]);let xe=!0;(x||V.cssVariables===!1||Ce&&W?.cssVarPrefix===ue)&&(xe=!1);const bt=Z.jsxs(K.Fragment,{children:[Z.jsx(Bb,{themeId:M?r:void 0,theme:gn,children:G}),xe&&Z.jsx(bb,{styles:gn.generateStyleSheets?.()||[]})]});return Ce?bt:Z.jsx(p.Provider,{value:Oe,children:bt})}const w=typeof d=="string"?d:d.light,_=typeof d=="string"?d:d.dark;return{CssVarsProvider:C,useColorScheme:v,getInitColorSchemeScript:L=>ZC({colorSchemeStorageKey:u,defaultLightColorScheme:w,defaultDarkColorScheme:_,modeStorageKey:o,...L})}}function a_(n=""){function r(...o){if(!o.length)return"";const u=o[0];return typeof u=="string"&&!u.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${u}${r(...o.slice(1))})`:`, ${u}`}return(o,...u)=>`var(--${n?`${n}-`:""}${o}${r(...u)})`}const My=(n,r,l,o=[])=>{let u=n;r.forEach((f,d)=>{d===r.length-1?Array.isArray(u)?u[Number(f)]=l:u&&typeof u=="object"&&(u[f]=l):u&&typeof u=="object"&&(u[f]||(u[f]=o.includes(f)?[]:{}),u=u[f])})},i_=(n,r,l)=>{function o(u,f=[],d=[]){Object.entries(u).forEach(([m,g])=>{(!l||l&&!l([...f,m]))&&g!=null&&(typeof g=="object"&&Object.keys(g).length>0?o(g,[...f,m],Array.isArray(g)?[...d,m]:d):r([...f,m],g,d))})}o(n)},r_=(n,r)=>typeof r=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(o=>n.includes(o))||n[n.length-1].toLowerCase().includes("opacity")?r:`${r}px`:r;function Df(n,r){const{prefix:l,shouldSkipGeneratingVar:o}=r||{},u={},f={},d={};return i_(n,(m,g,p)=>{if((typeof g=="string"||typeof g=="number")&&(!o||!o(m,g))){const v=`--${l?`${l}-`:""}${m.join("-")}`,y=r_(m,g);Object.assign(u,{[v]:y}),My(f,m,`var(${v})`,p),My(d,m,`var(${v}, ${y})`,p)}},m=>m[0]==="vars"),{css:u,vars:f,varsWithDefaults:d}}function l_(n,r={}){const{getSelector:l=L,disableCssColorScheme:o,colorSchemeSelector:u,enableContrastVars:f}=r,{colorSchemes:d={},components:m,defaultColorScheme:g="light",...p}=n,{vars:v,css:y,varsWithDefaults:S}=Df(p,r);let C=S;const w={},{[g]:_,...R}=d;if(Object.entries(R||{}).forEach(([$,B])=>{const{vars:O,css:k,varsWithDefaults:H}=Df(B,r);C=_t(C,H),w[$]={css:k,vars:O}}),_){const{css:$,vars:B,varsWithDefaults:O}=Df(_,r);C=_t(C,O),w[g]={css:$,vars:B}}function L($,B){let O=u;if(u==="class"&&(O=".%s"),u==="data"&&(O="[data-%s]"),u?.startsWith("data-")&&!u.includes("%s")&&(O=`[${u}="%s"]`),$){if(O==="media")return n.defaultColorScheme===$?":root":{[`@media (prefers-color-scheme: ${d[$]?.palette?.mode||$})`]:{":root":B}};if(O)return n.defaultColorScheme===$?`:root, ${O.replace("%s",String($))}`:O.replace("%s",String($))}return":root"}return{vars:C,generateThemeVars:()=>{let $={...v};return Object.entries(w).forEach(([,{vars:B}])=>{$=_t($,B)}),$},generateStyleSheets:()=>{const $=[],B=n.defaultColorScheme||"light";function O(Q,ee){Object.keys(ee).length&&$.push(typeof Q=="string"?{[Q]:{...ee}}:Q)}O(l(void 0,{...y}),y);const{[B]:k,...H}=w;if(k){const{css:Q}=k,ee=d[B]?.palette?.mode,I=!o&&ee?{colorScheme:ee,...Q}:{...Q};O(l(B,{...I}),I)}return Object.entries(H).forEach(([Q,{css:ee}])=>{const I=d[Q]?.palette?.mode,x=!o&&I?{colorScheme:I,...ee}:{...ee};O(l(Q,{...x}),x)}),f&&$.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),$}}}function o_(n){return function(l){return n==="media"?`@media (prefers-color-scheme: ${l})`:n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${l}"] &`:n==="class"?`.${l} &`:n==="data"?`[data-${l}] &`:`${n.replace("%s",l)} &`:"&"}}function cr(n,r,l=void 0){const o={};for(const u in n){const f=n[u];let d="",m=!0;for(let g=0;g<f.length;g+=1){const p=f[g];p&&(d+=(m===!0?"":" ")+r(p),m=!1,l&&l[p]&&(d+=" "+l[p]))}o[u]=d}return o}const s_=Dl(),u_=Ob("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[`maxWidth${Zn(String(l.maxWidth))}`],l.fixed&&r.fixed,l.disableGutters&&r.disableGutters]}}),c_=n=>Lb({props:n,name:"MuiContainer",defaultTheme:s_}),f_=(n,r)=>{const l=g=>si(r,g),{classes:o,fixed:u,disableGutters:f,maxWidth:d}=n,m={root:["root",d&&`maxWidth${Zn(String(d))}`,u&&"fixed",f&&"disableGutters"]};return cr(m,l,o)};function d_(n={}){const{createStyledComponent:r=u_,useThemeProps:l=c_,componentName:o="MuiContainer"}=n,u=r(({theme:d,ownerState:m})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!m.disableGutters&&{paddingLeft:d.spacing(2),paddingRight:d.spacing(2),[d.breakpoints.up("sm")]:{paddingLeft:d.spacing(3),paddingRight:d.spacing(3)}}}),({theme:d,ownerState:m})=>m.fixed&&Object.keys(d.breakpoints.values).reduce((g,p)=>{const v=p,y=d.breakpoints.values[v];return y!==0&&(g[d.breakpoints.up(v)]={maxWidth:`${y}${d.breakpoints.unit}`}),g},{}),({theme:d,ownerState:m})=>({...m.maxWidth==="xs"&&{[d.breakpoints.up("xs")]:{maxWidth:Math.max(d.breakpoints.values.xs,444)}},...m.maxWidth&&m.maxWidth!=="xs"&&{[d.breakpoints.up(m.maxWidth)]:{maxWidth:`${d.breakpoints.values[m.maxWidth]}${d.breakpoints.unit}`}}}));return K.forwardRef(function(m,g){const p=l(m),{className:v,component:y="div",disableGutters:S=!1,fixed:C=!1,maxWidth:w="lg",classes:_,...R}=p,L={...p,component:y,disableGutters:S,fixed:C,maxWidth:w},G=f_(L,o);return Z.jsx(u,{as:y,ownerState:L,className:oi(G.root,v),ref:g,...R})})}const m_=Dl(),h_=Ob("div",{name:"MuiStack",slot:"Root"});function p_(n){return Lb({props:n,name:"MuiStack",defaultTheme:m_})}function g_(n,r){const l=K.Children.toArray(n).filter(Boolean);return l.reduce((o,u,f)=>(o.push(u),f<l.length-1&&o.push(K.cloneElement(r,{key:`separator-${f}`})),o),[])}const y_=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],b_=({ownerState:n,theme:r})=>{let l={display:"flex",flexDirection:"column",...hn({theme:r},Ef({values:n.direction,breakpoints:r.breakpoints.values}),o=>({flexDirection:o}))};if(n.spacing){const o=Bs(r),u=Object.keys(r.breakpoints.values).reduce((g,p)=>((typeof n.spacing=="object"&&n.spacing[p]!=null||typeof n.direction=="object"&&n.direction[p]!=null)&&(g[p]=!0),g),{}),f=Ef({values:n.direction,base:u}),d=Ef({values:n.spacing,base:u});typeof f=="object"&&Object.keys(f).forEach((g,p,v)=>{if(!f[g]){const S=p>0?f[v[p-1]]:"column";f[g]=S}}),l=_t(l,hn({theme:r},d,(g,p)=>n.useFlexGap?{gap:ri(o,g)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${y_(p?f[p]:n.direction)}`]:ri(o,g)}}))}return l=R2(r.breakpoints,l),l};function v_(n={}){const{createStyledComponent:r=h_,useThemeProps:l=p_,componentName:o="MuiStack"}=n,u=()=>cr({root:["root"]},g=>si(o,g),{}),f=r(b_);return K.forwardRef(function(g,p){const v=l(g),y=Tb(v),{component:S="div",direction:C="column",spacing:w=0,divider:_,children:R,className:L,useFlexGap:G=!1,...U}=y,$={direction:C,spacing:w,useFlexGap:G},B=u();return Z.jsx(f,{as:S,ownerState:$,ref:p,className:oi(B.root,L),...U,children:_?g_(R,_):R})})}function Nb(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Cl.white,default:Cl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const Ub=Nb();function Hb(){return{text:{primary:Cl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Cl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Jf=Hb();function Ry(n,r,l,o){const u=o.light||o,f=o.dark||o*1.5;n[r]||(n.hasOwnProperty(l)?n[r]=n[l]:r==="light"?n.light=Ps(n.main,u):r==="dark"&&(n.dark=Ys(n.main,f)))}function Ey(n,r,l,o,u){const f=u.light||u,d=u.dark||u*1.5;r[l]||(r.hasOwnProperty(o)?r[l]=r[o]:l==="light"?r.light=`color-mix(in ${n}, ${r.main}, #fff ${(f*100).toFixed(0)}%)`:l==="dark"&&(r.dark=`color-mix(in ${n}, ${r.main}, #000 ${(d*100).toFixed(0)}%)`))}function S_(n="light"){return n==="dark"?{main:Ii[200],light:Ii[50],dark:Ii[400]}:{main:Ii[700],light:Ii[400],dark:Ii[800]}}function x_(n="light"){return n==="dark"?{main:Wi[200],light:Wi[50],dark:Wi[400]}:{main:Wi[500],light:Wi[300],dark:Wi[700]}}function C_(n="light"){return n==="dark"?{main:Fi[500],light:Fi[300],dark:Fi[700]}:{main:Fi[700],light:Fi[400],dark:Fi[800]}}function __(n="light"){return n==="dark"?{main:er[400],light:er[300],dark:er[700]}:{main:er[700],light:er[500],dark:er[900]}}function w_(n="light"){return n==="dark"?{main:tr[400],light:tr[300],dark:tr[700]}:{main:tr[800],light:tr[500],dark:tr[900]}}function T_(n="light"){return n==="dark"?{main:ul[400],light:ul[300],dark:ul[700]}:{main:"#ed6c02",light:ul[500],dark:ul[900]}}function A_(n){return`oklch(from ${n} var(--__l) 0 h / var(--__a))`}function wd(n){const{mode:r="light",contrastThreshold:l=3,tonalOffset:o=.2,colorSpace:u,...f}=n,d=n.primary||S_(r),m=n.secondary||x_(r),g=n.error||C_(r),p=n.info||__(r),v=n.success||w_(r),y=n.warning||T_(r);function S(R){return u?A_(R):DC(R,Jf.text.primary)>=l?Jf.text.primary:Ub.text.primary}const C=({color:R,name:L,mainShade:G=500,lightShade:U=300,darkShade:$=700})=>{if(R={...R},!R.main&&R[G]&&(R.main=R[G]),!R.hasOwnProperty("main"))throw new Error(ii(11,L?` (${L})`:"",G));if(typeof R.main!="string")throw new Error(ii(12,L?` (${L})`:"",JSON.stringify(R.main)));return u?(Ey(u,R,"light",U,o),Ey(u,R,"dark",$,o)):(Ry(R,"light",U,o),Ry(R,"dark",$,o)),R.contrastText||(R.contrastText=S(R.main)),R};let w;return r==="light"?w=Nb():r==="dark"&&(w=Hb()),_t({common:{...Cl},mode:r,primary:C({color:d,name:"primary"}),secondary:C({color:m,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:C({color:g,name:"error"}),warning:C({color:y,name:"warning"}),info:C({color:p,name:"info"}),success:C({color:v,name:"success"}),grey:yx,contrastThreshold:l,getContrastText:S,augmentColor:C,tonalOffset:o,...w},f)}function M_(n){const r={};return Object.entries(n).forEach(o=>{const[u,f]=o;typeof f=="object"&&(r[u]=`${f.fontStyle?`${f.fontStyle} `:""}${f.fontVariant?`${f.fontVariant} `:""}${f.fontWeight?`${f.fontWeight} `:""}${f.fontStretch?`${f.fontStretch} `:""}${f.fontSize||""}${f.lineHeight?`/${f.lineHeight} `:""}${f.fontFamily||""}`)}),r}function R_(n,r){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...r}}function E_(n){return Math.round(n*1e5)/1e5}const Oy={textTransform:"uppercase"},Ly='"Roboto", "Helvetica", "Arial", sans-serif';function Gb(n,r){const{fontFamily:l=Ly,fontSize:o=14,fontWeightLight:u=300,fontWeightRegular:f=400,fontWeightMedium:d=500,fontWeightBold:m=700,htmlFontSize:g=16,allVariants:p,pxToRem:v,...y}=typeof r=="function"?r(n):r,S=o/14,C=v||(R=>`${R/g*S}rem`),w=(R,L,G,U,$)=>({fontFamily:l,fontWeight:R,fontSize:C(L),lineHeight:G,...l===Ly?{letterSpacing:`${E_(U/L)}em`}:{},...$,...p}),_={h1:w(u,96,1.167,-1.5),h2:w(u,60,1.2,-.5),h3:w(f,48,1.167,0),h4:w(f,34,1.235,.25),h5:w(f,24,1.334,0),h6:w(d,20,1.6,.15),subtitle1:w(f,16,1.75,.15),subtitle2:w(d,14,1.57,.1),body1:w(f,16,1.5,.15),body2:w(f,14,1.43,.15),button:w(d,14,1.75,.4,Oy),caption:w(f,12,1.66,.4),overline:w(f,12,2.66,1,Oy),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _t({htmlFontSize:g,pxToRem:C,fontFamily:l,fontSize:o,fontWeightLight:u,fontWeightRegular:f,fontWeightMedium:d,fontWeightBold:m,..._},y,{clone:!1})}const O_=.2,L_=.14,z_=.12;function Pe(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${O_})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${L_})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${z_})`].join(",")}const D_=["none",Pe(0,2,1,-1,0,1,1,0,0,1,3,0),Pe(0,3,1,-2,0,2,2,0,0,1,5,0),Pe(0,3,3,-2,0,3,4,0,0,1,8,0),Pe(0,2,4,-1,0,4,5,0,0,1,10,0),Pe(0,3,5,-1,0,5,8,0,0,1,14,0),Pe(0,3,5,-1,0,6,10,0,0,1,18,0),Pe(0,4,5,-2,0,7,10,1,0,2,16,1),Pe(0,5,5,-3,0,8,10,1,0,3,14,2),Pe(0,5,6,-3,0,9,12,1,0,3,16,2),Pe(0,6,6,-3,0,10,14,1,0,4,18,3),Pe(0,6,7,-4,0,11,15,1,0,4,20,3),Pe(0,7,8,-4,0,12,17,2,0,5,22,4),Pe(0,7,8,-4,0,13,19,2,0,5,24,4),Pe(0,7,9,-4,0,14,21,2,0,5,26,4),Pe(0,8,9,-5,0,15,22,2,0,6,28,5),Pe(0,8,10,-5,0,16,24,2,0,6,30,5),Pe(0,8,11,-5,0,17,26,2,0,6,32,5),Pe(0,9,11,-5,0,18,28,2,0,7,34,6),Pe(0,9,12,-6,0,19,29,2,0,7,36,6),Pe(0,10,13,-6,0,20,31,3,0,8,38,7),Pe(0,10,13,-6,0,21,33,3,0,8,40,7),Pe(0,10,14,-6,0,22,35,3,0,8,42,7),Pe(0,11,14,-7,0,23,36,3,0,9,44,8),Pe(0,11,15,-7,0,24,38,3,0,9,46,8)],k_={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},q_={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function zy(n){return`${Math.round(n)}ms`}function B_(n){if(!n)return 0;const r=n/36;return Math.min(Math.round((4+15*r**.25+r/5)*10),3e3)}function j_(n){const r={...k_,...n.easing},l={...q_,...n.duration};return{getAutoHeightDuration:B_,create:(u=["all"],f={})=>{const{duration:d=l.standard,easing:m=r.easeInOut,delay:g=0,...p}=f;return(Array.isArray(u)?u:[u]).map(v=>`${v} ${typeof d=="string"?d:zy(d)} ${m} ${typeof g=="string"?g:zy(g)}`).join(",")},...n,easing:r,duration:l}}const N_={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function U_(n){return Tn(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function $b(n={}){const r={...n};function l(o){const u=Object.entries(o);for(let f=0;f<u.length;f++){const[d,m]=u[f];!U_(m)||d.startsWith("unstable_")?delete o[d]:Tn(m)&&(o[d]={...m},l(o[d]))}}return l(r),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Dy(n){return typeof n=="number"?`${(n*100).toFixed(0)}%`:`calc((${n}) * 100%)`}const H_=n=>{if(!Number.isNaN(+n))return+n;const r=n.match(/\d*\.?\d+/g);if(!r)return 0;let l=0;for(let o=0;o<r.length;o+=1)l+=+r[o];return l};function G_(n){Object.assign(n,{alpha(r,l){const o=this||n;return o.colorSpace?`oklch(from ${r} l c h / ${typeof l=="string"?`calc(${l})`:l})`:o.vars?`rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof l=="string"?`calc(${l})`:l})`:As(r,H_(l))},lighten(r,l){const o=this||n;return o.colorSpace?`color-mix(in ${o.colorSpace}, ${r}, #fff ${Dy(l)})`:Ps(r,l)},darken(r,l){const o=this||n;return o.colorSpace?`color-mix(in ${o.colorSpace}, ${r}, #000 ${Dy(l)})`:Ys(r,l)}})}function Kf(n={},...r){const{breakpoints:l,mixins:o={},spacing:u,palette:f={},transitions:d={},typography:m={},shape:g,colorSpace:p,...v}=n;if(n.vars&&n.generateThemeVars===void 0)throw new Error(ii(20));const y=wd({...f,colorSpace:p}),S=Dl(n);let C=_t(S,{mixins:R_(S.breakpoints,o),palette:y,shadows:D_.slice(),typography:Gb(y,m),transitions:j_(d),zIndex:{...N_}});return C=_t(C,v),C=r.reduce((w,_)=>_t(w,_),C),C.unstable_sxConfig={...zl,...v?.unstable_sxConfig},C.unstable_sx=function(_){return li({sx:_,theme:this})},C.toRuntimeSource=$b,G_(C),C}function Qf(n){let r;return n<1?r=5.11916*n**2:r=4.5*Math.log(n+1)+2,Math.round(r*10)/1e3}const $_=[...Array(25)].map((n,r)=>{if(r===0)return"none";const l=Qf(r);return`linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`});function Vb(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function Yb(n){return n==="dark"?$_:[]}function V_(n){const{palette:r={mode:"light"},opacity:l,overlays:o,colorSpace:u,...f}=n,d=wd({...r,colorSpace:u});return{palette:d,opacity:{...Vb(d.mode),...l},overlays:o||Yb(d.mode),...f}}function Y_(n){return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const P_=n=>[...[...Array(25)].map((r,l)=>`--${n?`${n}-`:""}overlays-${l}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],X_=n=>(r,l)=>{const o=n.rootSelector||":root",u=n.colorSchemeSelector;let f=u;if(u==="class"&&(f=".%s"),u==="data"&&(f="[data-%s]"),u?.startsWith("data-")&&!u.includes("%s")&&(f=`[${u}="%s"]`),n.defaultColorScheme===r){if(r==="dark"){const d={};return P_(n.cssVarPrefix).forEach(m=>{d[m]=l[m],delete l[m]}),f==="media"?{[o]:l,"@media (prefers-color-scheme: dark)":{[o]:d}}:f?{[f.replace("%s",r)]:d,[`${o}, ${f.replace("%s",r)}`]:l}:{[o]:{...l,...d}}}if(f&&f!=="media")return`${o}, ${f.replace("%s",String(r))}`}else if(r){if(f==="media")return{[`@media (prefers-color-scheme: ${String(r)})`]:{[o]:l}};if(f)return f.replace("%s",String(r))}return o};function J_(n,r){r.forEach(l=>{n[l]||(n[l]={})})}function P(n,r,l){!n[r]&&l&&(n[r]=l)}function ml(n){return typeof n!="string"||!n.startsWith("hsl")?n:Db(n)}function Jn(n,r){`${r}Channel`in n||(n[`${r}Channel`]=dl(ml(n[r])))}function K_(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const Cn=n=>{try{return n()}catch{}},Q_=(n="mui")=>a_(n);function kf(n,r,l,o,u){if(!l)return;l=l===!0?{}:l;const f=u==="dark"?"dark":"light";if(!o){r[u]=V_({...l,palette:{mode:f,...l?.palette},colorSpace:n});return}const{palette:d,...m}=Kf({...o,palette:{mode:f,...l?.palette},colorSpace:n});return r[u]={...l,palette:d,opacity:{...Vb(f),...l?.opacity},overlays:l?.overlays||Yb(f)},m}function Z_(n={},...r){const{colorSchemes:l={light:!0},defaultColorScheme:o,disableCssColorScheme:u=!1,cssVarPrefix:f="mui",nativeColor:d=!1,shouldSkipGeneratingVar:m=Y_,colorSchemeSelector:g=l.light&&l.dark?"media":void 0,rootSelector:p=":root",...v}=n,y=Object.keys(l)[0],S=o||(l.light&&y!=="light"?"light":y),C=Q_(f),{[S]:w,light:_,dark:R,...L}=l,G={...L};let U=w;if((S==="dark"&&!("dark"in l)||S==="light"&&!("light"in l))&&(U=!0),!U)throw new Error(ii(21,S));let $;d&&($="oklch");const B=kf($,G,U,v,S);_&&!G.light&&kf($,G,_,void 0,"light"),R&&!G.dark&&kf($,G,R,void 0,"dark");let O={defaultColorScheme:S,...B,cssVarPrefix:f,colorSchemeSelector:g,rootSelector:p,getCssVar:C,colorSchemes:G,font:{...M_(B.typography),...B.font},spacing:K_(v.spacing)};Object.keys(O.colorSchemes).forEach(I=>{const x=O.colorSchemes[I].palette,ne=re=>{const q=re.split("-"),W=q[1],oe=q[2];return C(re,x[W][oe])};x.mode==="light"&&(P(x.common,"background","#fff"),P(x.common,"onBackground","#000")),x.mode==="dark"&&(P(x.common,"background","#000"),P(x.common,"onBackground","#fff"));function F(re,q,W){if($){let oe;return re===Qa&&(oe=`transparent ${((1-W)*100).toFixed(0)}%`),re===ke&&(oe=`#000 ${(W*100).toFixed(0)}%`),re===qe&&(oe=`#fff ${(W*100).toFixed(0)}%`),`color-mix(in ${$}, ${q}, ${oe})`}return re(q,W)}if(J_(x,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),x.mode==="light"){P(x.Alert,"errorColor",F(ke,x.error.light,.6)),P(x.Alert,"infoColor",F(ke,x.info.light,.6)),P(x.Alert,"successColor",F(ke,x.success.light,.6)),P(x.Alert,"warningColor",F(ke,x.warning.light,.6)),P(x.Alert,"errorFilledBg",ne("palette-error-main")),P(x.Alert,"infoFilledBg",ne("palette-info-main")),P(x.Alert,"successFilledBg",ne("palette-success-main")),P(x.Alert,"warningFilledBg",ne("palette-warning-main")),P(x.Alert,"errorFilledColor",Cn(()=>x.getContrastText(x.error.main))),P(x.Alert,"infoFilledColor",Cn(()=>x.getContrastText(x.info.main))),P(x.Alert,"successFilledColor",Cn(()=>x.getContrastText(x.success.main))),P(x.Alert,"warningFilledColor",Cn(()=>x.getContrastText(x.warning.main))),P(x.Alert,"errorStandardBg",F(qe,x.error.light,.9)),P(x.Alert,"infoStandardBg",F(qe,x.info.light,.9)),P(x.Alert,"successStandardBg",F(qe,x.success.light,.9)),P(x.Alert,"warningStandardBg",F(qe,x.warning.light,.9)),P(x.Alert,"errorIconColor",ne("palette-error-main")),P(x.Alert,"infoIconColor",ne("palette-info-main")),P(x.Alert,"successIconColor",ne("palette-success-main")),P(x.Alert,"warningIconColor",ne("palette-warning-main")),P(x.AppBar,"defaultBg",ne("palette-grey-100")),P(x.Avatar,"defaultBg",ne("palette-grey-400")),P(x.Button,"inheritContainedBg",ne("palette-grey-300")),P(x.Button,"inheritContainedHoverBg",ne("palette-grey-A100")),P(x.Chip,"defaultBorder",ne("palette-grey-400")),P(x.Chip,"defaultAvatarColor",ne("palette-grey-700")),P(x.Chip,"defaultIconColor",ne("palette-grey-700")),P(x.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),P(x.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),P(x.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),P(x.LinearProgress,"primaryBg",F(qe,x.primary.main,.62)),P(x.LinearProgress,"secondaryBg",F(qe,x.secondary.main,.62)),P(x.LinearProgress,"errorBg",F(qe,x.error.main,.62)),P(x.LinearProgress,"infoBg",F(qe,x.info.main,.62)),P(x.LinearProgress,"successBg",F(qe,x.success.main,.62)),P(x.LinearProgress,"warningBg",F(qe,x.warning.main,.62)),P(x.Skeleton,"bg",$?F(Qa,x.text.primary,.11):`rgba(${ne("palette-text-primaryChannel")} / 0.11)`),P(x.Slider,"primaryTrack",F(qe,x.primary.main,.62)),P(x.Slider,"secondaryTrack",F(qe,x.secondary.main,.62)),P(x.Slider,"errorTrack",F(qe,x.error.main,.62)),P(x.Slider,"infoTrack",F(qe,x.info.main,.62)),P(x.Slider,"successTrack",F(qe,x.success.main,.62)),P(x.Slider,"warningTrack",F(qe,x.warning.main,.62));const re=$?F(ke,x.background.default,.6825):rs(x.background.default,.8);P(x.SnackbarContent,"bg",re),P(x.SnackbarContent,"color",Cn(()=>$?Jf.text.primary:x.getContrastText(re))),P(x.SpeedDialAction,"fabHoverBg",rs(x.background.paper,.15)),P(x.StepConnector,"border",ne("palette-grey-400")),P(x.StepContent,"border",ne("palette-grey-400")),P(x.Switch,"defaultColor",ne("palette-common-white")),P(x.Switch,"defaultDisabledColor",ne("palette-grey-100")),P(x.Switch,"primaryDisabledColor",F(qe,x.primary.main,.62)),P(x.Switch,"secondaryDisabledColor",F(qe,x.secondary.main,.62)),P(x.Switch,"errorDisabledColor",F(qe,x.error.main,.62)),P(x.Switch,"infoDisabledColor",F(qe,x.info.main,.62)),P(x.Switch,"successDisabledColor",F(qe,x.success.main,.62)),P(x.Switch,"warningDisabledColor",F(qe,x.warning.main,.62)),P(x.TableCell,"border",F(qe,F(Qa,x.divider,1),.88)),P(x.Tooltip,"bg",F(Qa,x.grey[700],.92))}if(x.mode==="dark"){P(x.Alert,"errorColor",F(qe,x.error.light,.6)),P(x.Alert,"infoColor",F(qe,x.info.light,.6)),P(x.Alert,"successColor",F(qe,x.success.light,.6)),P(x.Alert,"warningColor",F(qe,x.warning.light,.6)),P(x.Alert,"errorFilledBg",ne("palette-error-dark")),P(x.Alert,"infoFilledBg",ne("palette-info-dark")),P(x.Alert,"successFilledBg",ne("palette-success-dark")),P(x.Alert,"warningFilledBg",ne("palette-warning-dark")),P(x.Alert,"errorFilledColor",Cn(()=>x.getContrastText(x.error.dark))),P(x.Alert,"infoFilledColor",Cn(()=>x.getContrastText(x.info.dark))),P(x.Alert,"successFilledColor",Cn(()=>x.getContrastText(x.success.dark))),P(x.Alert,"warningFilledColor",Cn(()=>x.getContrastText(x.warning.dark))),P(x.Alert,"errorStandardBg",F(ke,x.error.light,.9)),P(x.Alert,"infoStandardBg",F(ke,x.info.light,.9)),P(x.Alert,"successStandardBg",F(ke,x.success.light,.9)),P(x.Alert,"warningStandardBg",F(ke,x.warning.light,.9)),P(x.Alert,"errorIconColor",ne("palette-error-main")),P(x.Alert,"infoIconColor",ne("palette-info-main")),P(x.Alert,"successIconColor",ne("palette-success-main")),P(x.Alert,"warningIconColor",ne("palette-warning-main")),P(x.AppBar,"defaultBg",ne("palette-grey-900")),P(x.AppBar,"darkBg",ne("palette-background-paper")),P(x.AppBar,"darkColor",ne("palette-text-primary")),P(x.Avatar,"defaultBg",ne("palette-grey-600")),P(x.Button,"inheritContainedBg",ne("palette-grey-800")),P(x.Button,"inheritContainedHoverBg",ne("palette-grey-700")),P(x.Chip,"defaultBorder",ne("palette-grey-700")),P(x.Chip,"defaultAvatarColor",ne("palette-grey-300")),P(x.Chip,"defaultIconColor",ne("palette-grey-300")),P(x.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),P(x.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),P(x.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),P(x.LinearProgress,"primaryBg",F(ke,x.primary.main,.5)),P(x.LinearProgress,"secondaryBg",F(ke,x.secondary.main,.5)),P(x.LinearProgress,"errorBg",F(ke,x.error.main,.5)),P(x.LinearProgress,"infoBg",F(ke,x.info.main,.5)),P(x.LinearProgress,"successBg",F(ke,x.success.main,.5)),P(x.LinearProgress,"warningBg",F(ke,x.warning.main,.5)),P(x.Skeleton,"bg",$?F(Qa,x.text.primary,.13):`rgba(${ne("palette-text-primaryChannel")} / 0.13)`),P(x.Slider,"primaryTrack",F(ke,x.primary.main,.5)),P(x.Slider,"secondaryTrack",F(ke,x.secondary.main,.5)),P(x.Slider,"errorTrack",F(ke,x.error.main,.5)),P(x.Slider,"infoTrack",F(ke,x.info.main,.5)),P(x.Slider,"successTrack",F(ke,x.success.main,.5)),P(x.Slider,"warningTrack",F(ke,x.warning.main,.5));const re=$?F(qe,x.background.default,.985):rs(x.background.default,.98);P(x.SnackbarContent,"bg",re),P(x.SnackbarContent,"color",Cn(()=>$?Ub.text.primary:x.getContrastText(re))),P(x.SpeedDialAction,"fabHoverBg",rs(x.background.paper,.15)),P(x.StepConnector,"border",ne("palette-grey-600")),P(x.StepContent,"border",ne("palette-grey-600")),P(x.Switch,"defaultColor",ne("palette-grey-300")),P(x.Switch,"defaultDisabledColor",ne("palette-grey-600")),P(x.Switch,"primaryDisabledColor",F(ke,x.primary.main,.55)),P(x.Switch,"secondaryDisabledColor",F(ke,x.secondary.main,.55)),P(x.Switch,"errorDisabledColor",F(ke,x.error.main,.55)),P(x.Switch,"infoDisabledColor",F(ke,x.info.main,.55)),P(x.Switch,"successDisabledColor",F(ke,x.success.main,.55)),P(x.Switch,"warningDisabledColor",F(ke,x.warning.main,.55)),P(x.TableCell,"border",F(ke,F(Qa,x.divider,1),.68)),P(x.Tooltip,"bg",F(Qa,x.grey[700],.92))}Jn(x.background,"default"),Jn(x.background,"paper"),Jn(x.common,"background"),Jn(x.common,"onBackground"),Jn(x,"divider"),Object.keys(x).forEach(re=>{const q=x[re];re!=="tonalOffset"&&q&&typeof q=="object"&&(q.main&&P(x[re],"mainChannel",dl(ml(q.main))),q.light&&P(x[re],"lightChannel",dl(ml(q.light))),q.dark&&P(x[re],"darkChannel",dl(ml(q.dark))),q.contrastText&&P(x[re],"contrastTextChannel",dl(ml(q.contrastText))),re==="text"&&(Jn(x[re],"primary"),Jn(x[re],"secondary")),re==="action"&&(q.active&&Jn(x[re],"active"),q.selected&&Jn(x[re],"selected")))})}),O=r.reduce((I,x)=>_t(I,x),O);const k={prefix:f,disableCssColorScheme:u,shouldSkipGeneratingVar:m,getSelector:X_(O),enableContrastVars:d},{vars:H,generateThemeVars:Q,generateStyleSheets:ee}=l_(O,k);return O.vars=H,Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([I,x])=>{O[I]=x}),O.generateThemeVars=Q,O.generateStyleSheets=ee,O.generateSpacing=function(){return _b(v.spacing,Bs(this))},O.getColorSchemeSelector=o_(g),O.spacing=O.generateSpacing(),O.shouldSkipGeneratingVar=m,O.unstable_sxConfig={...zl,...v?.unstable_sxConfig},O.unstable_sx=function(x){return li({sx:x,theme:this})},O.toRuntimeSource=$b,O}function ky(n,r,l){n.colorSchemes&&l&&(n.colorSchemes[r]={...l!==!0&&l,palette:wd({...l===!0?{}:l.palette,mode:r})})}function Td(n={},...r){const{palette:l,cssVariables:o=!1,colorSchemes:u=l?void 0:{light:!0},defaultColorScheme:f=l?.mode,...d}=n,m=f||"light",g=u?.[m],p={...u,...l?{[m]:{...typeof g!="boolean"&&g,palette:l}}:void 0};if(o===!1){if(!("colorSchemes"in n))return Kf(n,...r);let v=l;"palette"in n||p[m]&&(p[m]!==!0?v=p[m].palette:m==="dark"&&(v={mode:"dark"}));const y=Kf({...n,palette:v},...r);return y.defaultColorScheme=m,y.colorSchemes=p,y.palette.mode==="light"&&(y.colorSchemes.light={...p.light!==!0&&p.light,palette:y.palette},ky(y,"dark",p.dark)),y.palette.mode==="dark"&&(y.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:y.palette},ky(y,"light",p.light)),y}return!l&&!("light"in p)&&m==="light"&&(p.light=!0),Z_({...d,colorSchemes:p,defaultColorScheme:m,...typeof o!="boolean"&&o},...r)}const Ad=Td();function F_(){const n=vd(Ad);return n[Kn]||n}function W_(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const I_=n=>W_(n)&&n!=="classes",ui=Eb({themeId:Kn,defaultTheme:Ad,rootShouldForwardProp:I_});function ew({theme:n,...r}){const l=Kn in n?n[Kn]:void 0;return Z.jsx(Bb,{...r,themeId:l?Kn:void 0,theme:l||n})}const ls={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:tw}=n_({themeId:Kn,theme:()=>Td({cssVariables:!0}),colorSchemeStorageKey:ls.colorSchemeStorageKey,modeStorageKey:ls.modeStorageKey,defaultColorScheme:{light:ls.defaultLightColorScheme,dark:ls.defaultDarkColorScheme},resolveTheme:n=>{const r={...n,typography:Gb(n.palette,n.typography)};return r.unstable_sx=function(o){return li({sx:o,theme:this})},r}}),nw=tw;function aw({theme:n,...r}){const l=K.useMemo(()=>{if(typeof n=="function")return n;const o=Kn in n?n[Kn]:n;return"colorSchemes"in o?null:"vars"in o?n:{...n,vars:null}},[n]);return l?Z.jsx(ew,{theme:l,...r}):Z.jsx(nw,{theme:n,...r})}function iw(n){return Z.jsx(wb,{...n,defaultTheme:Ad,themeId:Kn})}function Pb(n){return function(l){return Z.jsx(iw,{styles:typeof n=="function"?o=>n({theme:o,...l}):n})}}function lT(){return Tb}const kl=KC;function ci(n){return VC(n)}function rw(n){return si("MuiPaper",n)}$s("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const lw=n=>{const{square:r,elevation:l,variant:o,classes:u}=n,f={root:["root",o,!r&&"rounded",o==="elevation"&&`elevation${l}`]};return cr(f,rw,u)},ow=ui("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[l.variant],!l.square&&r.rounded,l.variant==="elevation"&&r[`elevation${l.elevation}`]]}})(kl(({theme:n})=>({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow"),variants:[{props:({ownerState:r})=>!r.square,style:{borderRadius:n.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(n.vars||n).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),sw=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiPaper"}),u=F_(),{className:f,component:d="div",elevation:m=1,square:g=!1,variant:p="elevation",...v}=o,y={...o,component:d,elevation:m,square:g,variant:p},S=lw(y);return Z.jsx(ow,{as:d,ownerState:y,className:oi(S.root,f),ref:l,...v,style:{...p==="elevation"&&{"--Paper-shadow":(u.vars||u).shadows[m],...u.vars&&{"--Paper-overlay":u.vars.overlays?.[m]},...!u.vars&&u.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${As("#fff",Qf(m))}, ${As("#fff",Qf(m))})`}},...v.style}})});function uw(n){return typeof n.main=="string"}function cw(n,r=[]){if(!uw(n))return!1;for(const l of r)if(!n.hasOwnProperty(l)||typeof n[l]!="string")return!1;return!0}function fw(n=[]){return([,r])=>r&&cw(r,n)}function dw(n){return si("MuiAppBar",n)}$s("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const mw=n=>{const{color:r,position:l,classes:o}=n,u={root:["root",`color${Zn(r)}`,`position${Zn(l)}`]};return cr(u,dw,o)},qy=(n,r)=>n?`${n?.replace(")","")}, ${r})`:r,hw=ui(sw,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[`position${Zn(l.position)}`],r[`color${Zn(l.color)}`]]}})(kl(({theme:n})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":n.vars?n.vars.palette.AppBar.defaultBg:n.palette.grey[100],"--AppBar-color":n.vars?n.vars.palette.text.primary:n.palette.getContrastText(n.palette.grey[100]),...n.applyStyles("dark",{"--AppBar-background":n.vars?n.vars.palette.AppBar.defaultBg:n.palette.grey[900],"--AppBar-color":n.vars?n.vars.palette.text.primary:n.palette.getContrastText(n.palette.grey[900])})}},...Object.entries(n.palette).filter(fw(["contrastText"])).map(([r])=>({props:{color:r},style:{"--AppBar-background":(n.vars??n).palette[r].main,"--AppBar-color":(n.vars??n).palette[r].contrastText}})),{props:r=>r.enableColorOnDark===!0&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:r=>r.enableColorOnDark===!1&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...n.applyStyles("dark",{backgroundColor:n.vars?qy(n.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:n.vars?qy(n.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...n.applyStyles("dark",{backgroundImage:"none"})}}]}))),pw=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiAppBar"}),{className:u,color:f="primary",enableColorOnDark:d=!1,position:m="fixed",...g}=o,p={...o,color:f,position:m,enableColorOnDark:d},v=mw(p);return Z.jsx(hw,{square:!0,component:"header",ownerState:p,elevation:4,className:oi(v.root,u,m==="fixed"&&"mui-fixed"),ref:l,...g})}),gw=d_({createStyledComponent:ui("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[`maxWidth${Zn(String(l.maxWidth))}`],l.fixed&&r.fixed,l.disableGutters&&r.disableGutters]}}),useThemeProps:n=>ci({props:n,name:"MuiContainer"})}),Zf=typeof Pb({})=="function",yw=(n,r)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...r&&!n.vars&&{colorScheme:n.palette.mode}}),bw=n=>({color:(n.vars||n).palette.text.primary,...n.typography.body1,backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),Xb=(n,r=!1)=>{const l={};r&&n.colorSchemes&&typeof n.getColorSchemeSelector=="function"&&Object.entries(n.colorSchemes).forEach(([f,d])=>{const m=n.getColorSchemeSelector(f);m.startsWith("@")?l[m]={":root":{colorScheme:d.palette?.mode}}:l[m.replace(/\s*&/,"")]={colorScheme:d.palette?.mode}});let o={html:yw(n,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:{margin:0,...bw(n),"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}},...l};const u=n.components?.MuiCssBaseline?.styleOverrides;return u&&(o=[o,u]),o},hs="mui-ecs",vw=n=>{const r=Xb(n,!1),l=Array.isArray(r)?r[0]:r;return!n.vars&&l&&(l.html[`:root:has(${hs})`]={colorScheme:n.palette.mode}),n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([o,u])=>{const f=n.getColorSchemeSelector(o);f.startsWith("@")?l[f]={[`:root:not(:has(.${hs}))`]:{colorScheme:u.palette?.mode}}:l[f.replace(/\s*&/,"")]={[`&:not(:has(.${hs}))`]:{colorScheme:u.palette?.mode}}}),r},Sw=Pb(Zf?({theme:n,enableColorScheme:r})=>Xb(n,r):({theme:n})=>vw(n));function xw(n){const r=ci({props:n,name:"MuiCssBaseline"}),{children:l,enableColorScheme:o=!1}=r;return Z.jsxs(K.Fragment,{children:[Zf&&Z.jsx(Sw,{enableColorScheme:o}),!Zf&&!o&&Z.jsx("span",{className:hs,style:{display:"none"}}),l]})}function Cw(n){return si("MuiDivider",n)}$s("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const _w=n=>{const{absolute:r,children:l,classes:o,flexItem:u,light:f,orientation:d,textAlign:m,variant:g}=n;return cr({root:["root",r&&"absolute",g,f&&"light",d==="vertical"&&"vertical",u&&"flexItem",l&&"withChildren",l&&d==="vertical"&&"withChildrenVertical",m==="right"&&d!=="vertical"&&"textAlignRight",m==="left"&&d!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",d==="vertical"&&"wrapperVertical"]},Cw,o)},ww=ui("div",{name:"MuiDivider",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,l.absolute&&r.absolute,r[l.variant],l.light&&r.light,l.orientation==="vertical"&&r.vertical,l.flexItem&&r.flexItem,l.children&&r.withChildren,l.children&&l.orientation==="vertical"&&r.withChildrenVertical,l.textAlign==="right"&&l.orientation!=="vertical"&&r.textAlignRight,l.textAlign==="left"&&l.orientation!=="vertical"&&r.textAlignLeft]}})(kl(({theme:n})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(n.vars||n).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:n.alpha((n.vars||n).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:n.spacing(2),marginRight:n.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:n.spacing(1),marginBottom:n.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:r})=>!!r.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:r})=>r.children&&r.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(n.vars||n).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:r})=>r.orientation==="vertical"&&r.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(n.vars||n).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:r})=>r.textAlign==="right"&&r.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:r})=>r.textAlign==="left"&&r.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),Tw=ui("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.wrapper,l.orientation==="vertical"&&r.wrapperVertical]}})(kl(({theme:n})=>({display:"inline-block",paddingLeft:`calc(${n.spacing(1)} * 1.2)`,paddingRight:`calc(${n.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${n.spacing(1)} * 1.2)`,paddingBottom:`calc(${n.spacing(1)} * 1.2)`}}]}))),Ff=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiDivider"}),{absolute:u=!1,children:f,className:d,orientation:m="horizontal",component:g=f||m==="vertical"?"div":"hr",flexItem:p=!1,light:v=!1,role:y=g!=="hr"?"separator":void 0,textAlign:S="center",variant:C="fullWidth",...w}=o,_={...o,absolute:u,component:g,flexItem:p,light:v,orientation:m,role:y,textAlign:S,variant:C},R=_w(_);return Z.jsx(ww,{as:g,className:oi(R.root,d),role:y,ref:l,ownerState:_,"aria-orientation":y==="separator"&&(g!=="hr"||m==="vertical")?m:void 0,...w,children:f?Z.jsx(Tw,{className:R.wrapper,ownerState:_,children:f}):null})});Ff&&(Ff.muiSkipListHighlight=!0);const Aw=v_({createStyledComponent:ui("div",{name:"MuiStack",slot:"Root"}),useThemeProps:n=>ci({props:n,name:"MuiStack"})});function Mw(n){return si("MuiToolbar",n)}$s("MuiToolbar",["root","gutters","regular","dense"]);const Rw=n=>{const{classes:r,disableGutters:l,variant:o}=n;return cr({root:["root",!l&&"gutters",o]},Mw,r)},Ew=ui("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,!l.disableGutters&&r.gutters,r[l.variant]]}})(kl(({theme:n})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:n.mixins.toolbar}]}))),Ow=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiToolbar"}),{className:u,component:f="div",disableGutters:d=!1,variant:m="regular",...g}=o,p={...o,component:f,disableGutters:d,variant:m},v=Rw(p);return Z.jsx(Ew,{as:f,className:oi(v.root,u),ref:l,ownerState:p,...g})}),Lw=Td({typography:{fontFamily:"'DejaVu Serif', serif",fontSize:20,htmlFontSize:20}}),By=gx,zw=n=>{if(!n)return"";const o=new DOMParser().parseFromString(n,"text/html").querySelector("body");return o?(o.querySelectorAll("a > img").forEach(u=>{const f=u;if(!f.src)return;const d=Object.assign({"/src/site/content/figures/other/placeholder1.png":Wg,"/src/site/content/figures/placeholder1.jpg":Ig,"/src/site/content/figures/profile-placeholder.png":ey}),g=new URL(f.src).pathname;f.src=d[`/src/site/content${g}`].default}),o.querySelectorAll("a").forEach(u=>{if(u.href)if(u.matches("a:has(> img)")){const f=Object.assign({"/src/site/content/figures/other/placeholder1.png":Wg,"/src/site/content/figures/placeholder1.jpg":Ig,"/src/site/content/figures/profile-placeholder.png":ey}),m=new URL(u.href).pathname;u.href=f[`/src/site/content${m}`].default}else{const f=new URL(u.href),d=Qb.buildLocation({hash:`/${f.hash}`});u.setAttribute("href",d.url)}}),o.innerHTML):""},fr=V1({beforeLoad:async()=>({siteMap:Object.fromEntries(By.map(r=>["/"+r.path.join("/"),r])),siteBlogs:By,getBodyContent:zw}),component:()=>Z.jsxs(Z.Fragment,{children:[Z.jsx(rx,{}),Z.jsxs(aw,{theme:Lw,children:[Z.jsx(xw,{}),Z.jsx(pw,{position:"relative",variant:"outlined",color:"default",sx:{paddingY:0},children:Z.jsx(Ow,{disableGutters:!0,children:Z.jsxs(Aw,{direction:"row",spacing:2,useFlexGap:!0,flexWrap:"nowrap",divider:Z.jsx(Ff,{flexItem:!0,orientation:"vertical"}),children:[Z.jsx(yl,{to:"/",children:"Home"}),Z.jsx(yl,{to:"/ongoing",children:"Ongoing research"}),Z.jsx(yl,{to:"/publications",children:"Publications"})]})})}),Z.jsx(gw,{maxWidth:"md",sx:{paddingTop:8,paddingBottom:4},children:Z.jsx(ib,{})})]})]})}),Dw="modulepreload",kw=function(n){return"/project-textile/"+n},jy={},ql=function(r,l,o){let u=Promise.resolve();if(l&&l.length>0){let g=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");u=g(l.map(p=>{if(p=kw(p),p in jy)return;jy[p]=!0;const v=p.endsWith(".css"),y=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":Dw,v||(S.as="script"),S.crossOrigin="",S.href=p,m&&S.setAttribute("nonce",m),document.head.appendChild(S),v)return new Promise((C,w)=>{S.addEventListener("load",C),S.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${p}`)))})}))}function f(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return u.then(d=>{for(const m of d||[])m.status==="rejected"&&f(m.reason);return r().catch(f)})},qw=()=>ql(()=>import("./index-D2sXnh1T.js"),__vite__mapDeps([0,1])),Bw=ai("/")({component:Ml(qw,"component"),loader:async({context:{getBodyContent:n}})=>({body:n(Object.values(Object.assign({}))[0].default)}),head:()=>({meta:[{title:"Home | Textile"}]})}),jw=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Publication Index Page</title>
<link rel="stylesheet" type="text/css" href="lwarp.css" />

<script>
// Lwarp MathJax emulation code
//
// Based on code by Davide P. Cervone.
// Equation numbering: https://github.com/mathjax/MathJax/issues/2427
// Starred and ifnextchar macros: https://github.com/mathjax/MathJax/issues/2428
// \\left, \\right delimiters: https://github.com/mathjax/MathJax/issues/2535
//
// Modified by Brian Dunn to adjust equation numbering and add subequations.
//
// LaTeX can use \\seteqnumber{subequations?}{section}{number} before each equation.
// subequations? is 0 usually, 1 if inside subequations.
// section is a string printed as-is, or empty.
// number is auto-incremented by MathJax between equations.
//
MathJax = {
    subequations: "0",
    section: "",
    loader: {
        load: ['[tex]/tagformat', '[tex]/textmacros'],
    },
    startup: {
        ready() {
            //      These would be replaced by import commands if you wanted to make
            //      a proper extension.
            const Configuration = MathJax._.input.tex.Configuration.Configuration;
            const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
            const Macro = MathJax._.input.tex.Symbol.Macro;
            const TexError = MathJax._.input.tex.TexError.default;
            const ParseUtil = MathJax._.input.tex.ParseUtil.default;
            const expandable = MathJax._.util.Options.expandable;


            //      Insert the replacement string into the TeX string, and check
            //      that there haven't been too many maxro substitutions (prevents
            //      infinite loops).
            const useArgument = (parser, text) => {
                parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                parser.i = 0;
                if (++parser.macroCount > parser.configuration.options.maxMacros) {
                    throw new TexError('MaxMacroSub1',
                    'MathJax maximum macro substitution count exceeded; ' +
                    'is there a recursive macro call?');
                }
            }


            //      Create the command map for:
            //          \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
            new CommandMap('Lwarp-macros', {
                ifstar: 'IfstarFunction',
                ifnextchar: 'IfnextcharFunction',
                ifblank: 'IfblankFunction',
                ifstrequal: 'IfstrequalFunction',
                gsubstitute: 'GsubstituteFunction',
                seteqnumber: 'SeteqnumberFunction'
            }, {
                //      This function implements an ifstar macro.
                IfstarFunction(parser, name) {
                    const resultstar = parser.GetArgument(name);
                    const resultnostar = parser.GetArgument(name);
                    const star = parser.GetStar();                      // true if there is a *
                    useArgument(parser, star ? resultstar : resultnostar);
                },


                //      This function implements an ifnextchar macro.
                IfnextcharFunction(parser, name) {
                    let whichchar = parser.GetArgument(name);
                    if (whichchar.match(/^(?:0x[0-9A-F]+|[0-9]+)$/i)) {
                        // $ syntax highlighting
                        whichchar = String.fromCodePoint(parseInt(whichchar));
                    }
                    const resultnextchar = parser.GetArgument(name);
                    const resultnotnextchar = parser.GetArgument(name);
                    const gotchar = (parser.GetNext() === whichchar);
                    useArgument(parser, gotchar ? resultnextchar : resultnotnextchar);
                },


                // This function implements an ifblank macro.
                IfblankFunction(parser, name) {
                    const blankarg = parser.GetArgument(name);
                    const resultblank = parser.GetArgument(name);
                    const resultnotblank = parser.GetArgument(name);
                    const isblank = (blankarg.trim() == "");
                    useArgument(parser, isblank ? resultblank : resultnotblank);
                },


                // This function implements an ifstrequal macro.
                IfstrequalFunction(parser, name) {
                    const strequalfirst = parser.GetArgument(name);
                    const strequalsecond = parser.GetArgument(name);
                    const resultequal = parser.GetArgument(name);
                    const resultnotequal = parser.GetArgument(name);
                    const isequal = (strequalfirst == strequalsecond);
                    useArgument(parser, isequal ? resultequal : resultnotequal);
                },


                // This function implements a gsub macro.
                GsubstituteFunction(parser, name) {
                    const gsubfirst = parser.GetArgument(name);
                    const gsubsecond = parser.GetArgument(name);
                    const gsubthird = parser.GetArgument(name);
                    let gsubresult=gsubfirst.replace(gsubsecond, gsubthird);
                    useArgument(parser, gsubresult);
                },


                //      This function modifies the equation numbers.
                SeteqnumberFunction(parser, name) {
                        //   Get the macro parameters
                        const star = parser.GetStar();                    // true if there is a *
                        const optBrackets = parser.GetBrackets(name);     // contents of optional brackets
                        const newsubequations = parser.GetArgument(name);    // the subequations argument
                        const neweqsection = parser.GetArgument(name);    // the eq section argument
                        const neweqnumber = parser.GetArgument(name);     // the eq number argument
                        MathJax.config.subequations=newsubequations ;     // a string with boolean meaning
                        MathJax.config.section=neweqsection ;             // a string with numeric meaning
                        parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                }


            });


            //      Create the Lwarp-macros package
            Configuration.create('Lwarp-macros', {
                handler: {macro: ['Lwarp-macros']}
            });


            MathJax.startup.defaultReady();


            // For forward references:
            MathJax.startup.input[0].preFilters.add(({math}) => {
                if (math.inputData.recompile){
                        MathJax.config.subequations = math.inputData.recompile.subequations;
                        MathJax.config.section = math.inputData.recompile.section;
                }
            });
            MathJax.startup.input[0].postFilters.add(({math}) => {
                if (math.inputData.recompile){
                        math.inputData.recompile.subequations = MathJax.config.subequations;
                        math.inputData.recompile.section = MathJax.config.section;
                }
            });


                // For \\left, \\right with unicode-math:
                const {DelimiterMap} = MathJax._.input.tex.SymbolMap;
                const {Symbol} = MathJax._.input.tex.Symbol;
                const {MapHandler} = MathJax._.input.tex.MapHandler;
                const delimiter = MapHandler.getMap('delimiter');
                delimiter.add('\\\\lBrack', new Symbol('\\\\lBrack', '\\u27E6'));
                delimiter.add('\\\\rBrack', new Symbol('\\\\rBrack', '\\u27E7'));
                delimiter.add('\\\\lAngle', new Symbol('\\\\lAngle', '\\u27EA'));
                delimiter.add('\\\\rAngle', new Symbol('\\\\rAngle', '\\u27EB'));
                delimiter.add('\\\\lbrbrak', new Symbol('\\\\lbrbrak', '\\u2772'));
                delimiter.add('\\\\rbrbrak', new Symbol('\\\\rbrbrak', '\\u2773'));
                delimiter.add('\\\\lbag', new Symbol('\\\\lbag', '\\u27C5'));
                delimiter.add('\\\\rbag', new Symbol('\\\\rbag', '\\u27C6'));
                delimiter.add('\\\\llparenthesis', new Symbol('\\\\llparenthesis', '\\u2987'));
                delimiter.add('\\\\rrparenthesis', new Symbol('\\\\rrparenthesis', '\\u2988'));
                delimiter.add('\\\\llangle', new Symbol('\\\\llangle', '\\u2989'));
                delimiter.add('\\\\rrangle', new Symbol('\\\\rrangle', '\\u298A'));
                delimiter.add('\\\\Lbrbrak', new Symbol('\\\\Lbrbrak', '\\u27EC'));
                delimiter.add('\\\\Rbrbrak', new Symbol('\\\\Rbrbrak', '\\u27ED'));
                delimiter.add('\\\\lBrace', new Symbol('\\\\lBrace', '\\u2983'));
                delimiter.add('\\\\rBrace', new Symbol('\\\\rBrace', '\\u2984'));
                delimiter.add('\\\\lParen', new Symbol('\\\\lParen', '\\u2985'));
                delimiter.add('\\\\rParen', new Symbol('\\\\rParen', '\\u2986'));
                delimiter.add('\\\\lbrackubar', new Symbol('\\\\lbrackubar', '\\u298B'));
                delimiter.add('\\\\rbrackubar', new Symbol('\\\\rbrackubar', '\\u298C'));
                delimiter.add('\\\\lbrackultick', new Symbol('\\\\lbrackultick', '\\u298D'));
                delimiter.add('\\\\rbracklrtick', new Symbol('\\\\rbracklrtick', '\\u298E'));
                delimiter.add('\\\\lbracklltick', new Symbol('\\\\lbracklltick', '\\u298F'));
                delimiter.add('\\\\rbrackurtick', new Symbol('\\\\rbrackurtick', '\\u2990'));
                delimiter.add('\\\\langledot', new Symbol('\\\\langledot', '\\u2991'));
                delimiter.add('\\\\rangledot', new Symbol('\\\\rangledot', '\\u2992'));
                delimiter.add('\\\\lparenless', new Symbol('\\\\lparenless', '\\u2993'));
                delimiter.add('\\\\rparengtr', new Symbol('\\\\rparengtr', '\\u2994'));
                delimiter.add('\\\\Lparengtr', new Symbol('\\\\Lparengtr', '\\u2995'));
                delimiter.add('\\\\Rparenless', new Symbol('\\\\Rparenless', '\\u2996'));
                delimiter.add('\\\\lblkbrbrak', new Symbol('\\\\lblkbrbrak', '\\u2997'));
                delimiter.add('\\\\rblkbrbrak', new Symbol('\\\\rblkbrbrak', '\\u2998'));
                delimiter.add('\\\\lvzigzag', new Symbol('\\\\lvzigzag', '\\u29D8'));
                delimiter.add('\\\\rvzigzag', new Symbol('\\\\rvzigzag', '\\u29D9'));
                delimiter.add('\\\\Lvzigzag', new Symbol('\\\\Lvzigzag', '\\u29DA'));
                delimiter.add('\\\\Rvzigzag', new Symbol('\\\\Rvzigzag', '\\u29DB'));
                delimiter.add('\\\\lcurvyangle', new Symbol('\\\\lcurvyangle', '\\u29FC'));
                delimiter.add('\\\\rcurvyangle', new Symbol('\\\\rcurvyangle', '\\u29FD'));
                delimiter.add('\\\\Vvert', new Symbol('\\\\Vvert', '\\u2980'));
        }        // ready
    },           // startup


    tex: {
        packages: {'[+]': ['tagformat', 'Lwarp-macros', 'textmacros']},
        tags: "ams",
                tagformat: {
                        number: function (n) {
                             if(MathJax.config.subequations==0)
                                 return(MathJax.config.section + n);
                             else
                                 return(MathJax.config.section + String.fromCharCode(96+n));
                        },
                },
    }
}
<\/script>


<script
        id="MathJax-script"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
><\/script>

</head>
<body>


<div class="bodywithoutsidetoc">


<main class="bodycontainer">


<section class="textbody">

<a id="index-autofile-0"></a>

<!--MathJax customizations:-->
<div data-nosnippet
    style="display:none"
>

\\(\\newcommand{\\footnotename}{footnote}\\)

\\(\\def \\LWRfootnote {1}\\)

\\(\\newcommand {\\footnote }[2][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\newcommand {\\footnotemark }[1][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\let \\LWRorighspace \\hspace \\)

\\(\\renewcommand {\\hspace }{\\ifstar \\LWRorighspace \\LWRorighspace }\\)

\\(\\newcommand {\\mathnormal }[1]{{#1}}\\)

\\(\\newcommand \\ensuremath [1]{#1}\\)

\\(\\newcommand {\\LWRframebox }[2][]{\\fbox {#2}} \\newcommand {\\framebox }[1][]{\\LWRframebox } \\)

\\(\\newcommand {\\setlength }[2]{}\\)

\\(\\newcommand {\\addtolength }[2]{}\\)

\\(\\newcommand {\\setcounter }[2]{}\\)

\\(\\newcommand {\\addtocounter }[2]{}\\)

\\(\\newcommand {\\arabic }[1]{}\\)

\\(\\newcommand {\\number }[1]{}\\)

\\(\\newcommand {\\noalign }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\cline }[1]{}\\)

\\(\\newcommand {\\directlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\luatexdirectlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\protect }{}\\)

\\(\\def \\LWRabsorbnumber #1 {}\\)

\\(\\def \\LWRabsorbquotenumber &quot;#1 {}\\)

\\(\\newcommand {\\LWRabsorboption }[1][]{}\\)

\\(\\newcommand {\\LWRabsorbtwooptions }[1][]{\\LWRabsorboption }\\)

\\(\\def \\mathchar {\\ifnextchar &quot;\\LWRabsorbquotenumber \\LWRabsorbnumber }\\)

\\(\\def \\mathcode #1={\\mathchar }\\)

\\(\\let \\delcode \\mathcode \\)

\\(\\let \\delimiter \\mathchar \\)

\\(\\def \\oe {\\unicode {x0153}}\\)

\\(\\def \\OE {\\unicode {x0152}}\\)

\\(\\def \\ae {\\unicode {x00E6}}\\)

\\(\\def \\AE {\\unicode {x00C6}}\\)

\\(\\def \\aa {\\unicode {x00E5}}\\)

\\(\\def \\AA {\\unicode {x00C5}}\\)

\\(\\def \\o {\\unicode {x00F8}}\\)

\\(\\def \\O {\\unicode {x00D8}}\\)

\\(\\def \\l {\\unicode {x0142}}\\)

\\(\\def \\L {\\unicode {x0141}}\\)

\\(\\def \\ss {\\unicode {x00DF}}\\)

\\(\\def \\SS {\\unicode {x1E9E}}\\)

\\(\\def \\dag {\\unicode {x2020}}\\)

\\(\\def \\ddag {\\unicode {x2021}}\\)

\\(\\def \\P {\\unicode {x00B6}}\\)

\\(\\def \\copyright {\\unicode {x00A9}}\\)

\\(\\def \\pounds {\\unicode {x00A3}}\\)

\\(\\let \\LWRref \\ref \\)

\\(\\renewcommand {\\ref }{\\ifstar \\LWRref \\LWRref }\\)

\\( \\newcommand {\\multicolumn }[3]{#3}\\)

\\(\\require {textcomp}\\)

\\(\\newcommand {\\intertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\let \\Hat \\hat \\)

\\(\\let \\Check \\check \\)

\\(\\let \\Tilde \\tilde \\)

\\(\\let \\Acute \\acute \\)

\\(\\let \\Grave \\grave \\)

\\(\\let \\Dot \\dot \\)

\\(\\let \\Ddot \\ddot \\)

\\(\\let \\Breve \\breve \\)

\\(\\let \\Bar \\bar \\)

\\(\\let \\Vec \\vec \\)

\\(\\require {mathtools}\\)

\\(\\newenvironment {crampedsubarray}[1]{}{}\\)

\\(\\newcommand {\\smashoperator }[2][]{#2\\limits }\\)

\\(\\newcommand {\\SwapAboveDisplaySkip }{}\\)

\\(\\newcommand {\\LaTeXunderbrace }[1]{\\underbrace {#1}}\\)

\\(\\newcommand {\\LaTeXoverbrace }[1]{\\overbrace {#1}}\\)

\\(\\newcommand {\\LWRmultlined }[1][]{\\begin {multline*}}\\)

\\(\\newenvironment {multlined}[1][]{\\LWRmultlined }{\\end {multline*}}\\)

\\(\\let \\LWRorigshoveleft \\shoveleft \\)

\\(\\renewcommand {\\shoveleft }[1][]{\\LWRorigshoveleft }\\)

\\(\\let \\LWRorigshoveright \\shoveright \\)

\\(\\renewcommand {\\shoveright }[1][]{\\LWRorigshoveright }\\)

\\(\\newcommand {\\shortintertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\vcentcolon }{\\mathrel {\\unicode {x2236}}}\\)

</div>

<a id="index-autopage-1"></a>
<div class="titlepage">

<h1>Publication Index Page</h1>


<div class="author">


<div class="oneauthor">

<p>
A. U. Thor
</p>
</div>

</div>


<div class="titledate">

<p>
December 7, 2025
</p>
</div>

</div>
<div class="abstract">


<div class="abstracttitle">Abstract</div>

<p>
Optionally, use this document to provide optional information.
</p>
</div>

<a id="index-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,Jb=Object.freeze(Object.defineProperty({__proto__:null,default:jw},Symbol.toStringTag,{value:"Module"})),Nw=()=>ql(()=>import("./index-DkgBwl6h.js"),__vite__mapDeps([2,1,3])),Uw=ai("/publications/")({component:Ml(Nw,"component"),loader:async({context:{getBodyContent:n}})=>({body:n(Object.assign({"/src/site/content/publications/index.html":Jb})["/src/site/content/publications/index.html"]?.default)}),head:()=>({meta:[{title:"Publications | Textile"}]})}),Hw=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ongoing Research Index Page</title>
<link rel="stylesheet" type="text/css" href="lwarp.css" />

<script>
// Lwarp MathJax emulation code
//
// Based on code by Davide P. Cervone.
// Equation numbering: https://github.com/mathjax/MathJax/issues/2427
// Starred and ifnextchar macros: https://github.com/mathjax/MathJax/issues/2428
// \\left, \\right delimiters: https://github.com/mathjax/MathJax/issues/2535
//
// Modified by Brian Dunn to adjust equation numbering and add subequations.
//
// LaTeX can use \\seteqnumber{subequations?}{section}{number} before each equation.
// subequations? is 0 usually, 1 if inside subequations.
// section is a string printed as-is, or empty.
// number is auto-incremented by MathJax between equations.
//
MathJax = {
    subequations: "0",
    section: "",
    loader: {
        load: ['[tex]/tagformat', '[tex]/textmacros'],
    },
    startup: {
        ready() {
            //      These would be replaced by import commands if you wanted to make
            //      a proper extension.
            const Configuration = MathJax._.input.tex.Configuration.Configuration;
            const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
            const Macro = MathJax._.input.tex.Symbol.Macro;
            const TexError = MathJax._.input.tex.TexError.default;
            const ParseUtil = MathJax._.input.tex.ParseUtil.default;
            const expandable = MathJax._.util.Options.expandable;


            //      Insert the replacement string into the TeX string, and check
            //      that there haven't been too many maxro substitutions (prevents
            //      infinite loops).
            const useArgument = (parser, text) => {
                parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                parser.i = 0;
                if (++parser.macroCount > parser.configuration.options.maxMacros) {
                    throw new TexError('MaxMacroSub1',
                    'MathJax maximum macro substitution count exceeded; ' +
                    'is there a recursive macro call?');
                }
            }


            //      Create the command map for:
            //          \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
            new CommandMap('Lwarp-macros', {
                ifstar: 'IfstarFunction',
                ifnextchar: 'IfnextcharFunction',
                ifblank: 'IfblankFunction',
                ifstrequal: 'IfstrequalFunction',
                gsubstitute: 'GsubstituteFunction',
                seteqnumber: 'SeteqnumberFunction'
            }, {
                //      This function implements an ifstar macro.
                IfstarFunction(parser, name) {
                    const resultstar = parser.GetArgument(name);
                    const resultnostar = parser.GetArgument(name);
                    const star = parser.GetStar();                      // true if there is a *
                    useArgument(parser, star ? resultstar : resultnostar);
                },


                //      This function implements an ifnextchar macro.
                IfnextcharFunction(parser, name) {
                    let whichchar = parser.GetArgument(name);
                    if (whichchar.match(/^(?:0x[0-9A-F]+|[0-9]+)$/i)) {
                        // $ syntax highlighting
                        whichchar = String.fromCodePoint(parseInt(whichchar));
                    }
                    const resultnextchar = parser.GetArgument(name);
                    const resultnotnextchar = parser.GetArgument(name);
                    const gotchar = (parser.GetNext() === whichchar);
                    useArgument(parser, gotchar ? resultnextchar : resultnotnextchar);
                },


                // This function implements an ifblank macro.
                IfblankFunction(parser, name) {
                    const blankarg = parser.GetArgument(name);
                    const resultblank = parser.GetArgument(name);
                    const resultnotblank = parser.GetArgument(name);
                    const isblank = (blankarg.trim() == "");
                    useArgument(parser, isblank ? resultblank : resultnotblank);
                },


                // This function implements an ifstrequal macro.
                IfstrequalFunction(parser, name) {
                    const strequalfirst = parser.GetArgument(name);
                    const strequalsecond = parser.GetArgument(name);
                    const resultequal = parser.GetArgument(name);
                    const resultnotequal = parser.GetArgument(name);
                    const isequal = (strequalfirst == strequalsecond);
                    useArgument(parser, isequal ? resultequal : resultnotequal);
                },


                // This function implements a gsub macro.
                GsubstituteFunction(parser, name) {
                    const gsubfirst = parser.GetArgument(name);
                    const gsubsecond = parser.GetArgument(name);
                    const gsubthird = parser.GetArgument(name);
                    let gsubresult=gsubfirst.replace(gsubsecond, gsubthird);
                    useArgument(parser, gsubresult);
                },


                //      This function modifies the equation numbers.
                SeteqnumberFunction(parser, name) {
                        //   Get the macro parameters
                        const star = parser.GetStar();                    // true if there is a *
                        const optBrackets = parser.GetBrackets(name);     // contents of optional brackets
                        const newsubequations = parser.GetArgument(name);    // the subequations argument
                        const neweqsection = parser.GetArgument(name);    // the eq section argument
                        const neweqnumber = parser.GetArgument(name);     // the eq number argument
                        MathJax.config.subequations=newsubequations ;     // a string with boolean meaning
                        MathJax.config.section=neweqsection ;             // a string with numeric meaning
                        parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                }


            });


            //      Create the Lwarp-macros package
            Configuration.create('Lwarp-macros', {
                handler: {macro: ['Lwarp-macros']}
            });


            MathJax.startup.defaultReady();


            // For forward references:
            MathJax.startup.input[0].preFilters.add(({math}) => {
                if (math.inputData.recompile){
                        MathJax.config.subequations = math.inputData.recompile.subequations;
                        MathJax.config.section = math.inputData.recompile.section;
                }
            });
            MathJax.startup.input[0].postFilters.add(({math}) => {
                if (math.inputData.recompile){
                        math.inputData.recompile.subequations = MathJax.config.subequations;
                        math.inputData.recompile.section = MathJax.config.section;
                }
            });


                // For \\left, \\right with unicode-math:
                const {DelimiterMap} = MathJax._.input.tex.SymbolMap;
                const {Symbol} = MathJax._.input.tex.Symbol;
                const {MapHandler} = MathJax._.input.tex.MapHandler;
                const delimiter = MapHandler.getMap('delimiter');
                delimiter.add('\\\\lBrack', new Symbol('\\\\lBrack', '\\u27E6'));
                delimiter.add('\\\\rBrack', new Symbol('\\\\rBrack', '\\u27E7'));
                delimiter.add('\\\\lAngle', new Symbol('\\\\lAngle', '\\u27EA'));
                delimiter.add('\\\\rAngle', new Symbol('\\\\rAngle', '\\u27EB'));
                delimiter.add('\\\\lbrbrak', new Symbol('\\\\lbrbrak', '\\u2772'));
                delimiter.add('\\\\rbrbrak', new Symbol('\\\\rbrbrak', '\\u2773'));
                delimiter.add('\\\\lbag', new Symbol('\\\\lbag', '\\u27C5'));
                delimiter.add('\\\\rbag', new Symbol('\\\\rbag', '\\u27C6'));
                delimiter.add('\\\\llparenthesis', new Symbol('\\\\llparenthesis', '\\u2987'));
                delimiter.add('\\\\rrparenthesis', new Symbol('\\\\rrparenthesis', '\\u2988'));
                delimiter.add('\\\\llangle', new Symbol('\\\\llangle', '\\u2989'));
                delimiter.add('\\\\rrangle', new Symbol('\\\\rrangle', '\\u298A'));
                delimiter.add('\\\\Lbrbrak', new Symbol('\\\\Lbrbrak', '\\u27EC'));
                delimiter.add('\\\\Rbrbrak', new Symbol('\\\\Rbrbrak', '\\u27ED'));
                delimiter.add('\\\\lBrace', new Symbol('\\\\lBrace', '\\u2983'));
                delimiter.add('\\\\rBrace', new Symbol('\\\\rBrace', '\\u2984'));
                delimiter.add('\\\\lParen', new Symbol('\\\\lParen', '\\u2985'));
                delimiter.add('\\\\rParen', new Symbol('\\\\rParen', '\\u2986'));
                delimiter.add('\\\\lbrackubar', new Symbol('\\\\lbrackubar', '\\u298B'));
                delimiter.add('\\\\rbrackubar', new Symbol('\\\\rbrackubar', '\\u298C'));
                delimiter.add('\\\\lbrackultick', new Symbol('\\\\lbrackultick', '\\u298D'));
                delimiter.add('\\\\rbracklrtick', new Symbol('\\\\rbracklrtick', '\\u298E'));
                delimiter.add('\\\\lbracklltick', new Symbol('\\\\lbracklltick', '\\u298F'));
                delimiter.add('\\\\rbrackurtick', new Symbol('\\\\rbrackurtick', '\\u2990'));
                delimiter.add('\\\\langledot', new Symbol('\\\\langledot', '\\u2991'));
                delimiter.add('\\\\rangledot', new Symbol('\\\\rangledot', '\\u2992'));
                delimiter.add('\\\\lparenless', new Symbol('\\\\lparenless', '\\u2993'));
                delimiter.add('\\\\rparengtr', new Symbol('\\\\rparengtr', '\\u2994'));
                delimiter.add('\\\\Lparengtr', new Symbol('\\\\Lparengtr', '\\u2995'));
                delimiter.add('\\\\Rparenless', new Symbol('\\\\Rparenless', '\\u2996'));
                delimiter.add('\\\\lblkbrbrak', new Symbol('\\\\lblkbrbrak', '\\u2997'));
                delimiter.add('\\\\rblkbrbrak', new Symbol('\\\\rblkbrbrak', '\\u2998'));
                delimiter.add('\\\\lvzigzag', new Symbol('\\\\lvzigzag', '\\u29D8'));
                delimiter.add('\\\\rvzigzag', new Symbol('\\\\rvzigzag', '\\u29D9'));
                delimiter.add('\\\\Lvzigzag', new Symbol('\\\\Lvzigzag', '\\u29DA'));
                delimiter.add('\\\\Rvzigzag', new Symbol('\\\\Rvzigzag', '\\u29DB'));
                delimiter.add('\\\\lcurvyangle', new Symbol('\\\\lcurvyangle', '\\u29FC'));
                delimiter.add('\\\\rcurvyangle', new Symbol('\\\\rcurvyangle', '\\u29FD'));
                delimiter.add('\\\\Vvert', new Symbol('\\\\Vvert', '\\u2980'));
        }        // ready
    },           // startup


    tex: {
        packages: {'[+]': ['tagformat', 'Lwarp-macros', 'textmacros']},
        tags: "ams",
                tagformat: {
                        number: function (n) {
                             if(MathJax.config.subequations==0)
                                 return(MathJax.config.section + n);
                             else
                                 return(MathJax.config.section + String.fromCharCode(96+n));
                        },
                },
    }
}
<\/script>


<script
        id="MathJax-script"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
><\/script>

</head>
<body>


<div class="bodywithoutsidetoc">


<main class="bodycontainer">


<section class="textbody">

<a id="index-autofile-0"></a>

<!--MathJax customizations:-->
<div data-nosnippet
    style="display:none"
>

\\(\\newcommand{\\footnotename}{footnote}\\)

\\(\\def \\LWRfootnote {1}\\)

\\(\\newcommand {\\footnote }[2][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\newcommand {\\footnotemark }[1][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\let \\LWRorighspace \\hspace \\)

\\(\\renewcommand {\\hspace }{\\ifstar \\LWRorighspace \\LWRorighspace }\\)

\\(\\newcommand {\\mathnormal }[1]{{#1}}\\)

\\(\\newcommand \\ensuremath [1]{#1}\\)

\\(\\newcommand {\\LWRframebox }[2][]{\\fbox {#2}} \\newcommand {\\framebox }[1][]{\\LWRframebox } \\)

\\(\\newcommand {\\setlength }[2]{}\\)

\\(\\newcommand {\\addtolength }[2]{}\\)

\\(\\newcommand {\\setcounter }[2]{}\\)

\\(\\newcommand {\\addtocounter }[2]{}\\)

\\(\\newcommand {\\arabic }[1]{}\\)

\\(\\newcommand {\\number }[1]{}\\)

\\(\\newcommand {\\noalign }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\cline }[1]{}\\)

\\(\\newcommand {\\directlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\luatexdirectlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\protect }{}\\)

\\(\\def \\LWRabsorbnumber #1 {}\\)

\\(\\def \\LWRabsorbquotenumber &quot;#1 {}\\)

\\(\\newcommand {\\LWRabsorboption }[1][]{}\\)

\\(\\newcommand {\\LWRabsorbtwooptions }[1][]{\\LWRabsorboption }\\)

\\(\\def \\mathchar {\\ifnextchar &quot;\\LWRabsorbquotenumber \\LWRabsorbnumber }\\)

\\(\\def \\mathcode #1={\\mathchar }\\)

\\(\\let \\delcode \\mathcode \\)

\\(\\let \\delimiter \\mathchar \\)

\\(\\def \\oe {\\unicode {x0153}}\\)

\\(\\def \\OE {\\unicode {x0152}}\\)

\\(\\def \\ae {\\unicode {x00E6}}\\)

\\(\\def \\AE {\\unicode {x00C6}}\\)

\\(\\def \\aa {\\unicode {x00E5}}\\)

\\(\\def \\AA {\\unicode {x00C5}}\\)

\\(\\def \\o {\\unicode {x00F8}}\\)

\\(\\def \\O {\\unicode {x00D8}}\\)

\\(\\def \\l {\\unicode {x0142}}\\)

\\(\\def \\L {\\unicode {x0141}}\\)

\\(\\def \\ss {\\unicode {x00DF}}\\)

\\(\\def \\SS {\\unicode {x1E9E}}\\)

\\(\\def \\dag {\\unicode {x2020}}\\)

\\(\\def \\ddag {\\unicode {x2021}}\\)

\\(\\def \\P {\\unicode {x00B6}}\\)

\\(\\def \\copyright {\\unicode {x00A9}}\\)

\\(\\def \\pounds {\\unicode {x00A3}}\\)

\\(\\let \\LWRref \\ref \\)

\\(\\renewcommand {\\ref }{\\ifstar \\LWRref \\LWRref }\\)

\\( \\newcommand {\\multicolumn }[3]{#3}\\)

\\(\\require {textcomp}\\)

\\(\\newcommand {\\intertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\let \\Hat \\hat \\)

\\(\\let \\Check \\check \\)

\\(\\let \\Tilde \\tilde \\)

\\(\\let \\Acute \\acute \\)

\\(\\let \\Grave \\grave \\)

\\(\\let \\Dot \\dot \\)

\\(\\let \\Ddot \\ddot \\)

\\(\\let \\Breve \\breve \\)

\\(\\let \\Bar \\bar \\)

\\(\\let \\Vec \\vec \\)

\\(\\require {mathtools}\\)

\\(\\newenvironment {crampedsubarray}[1]{}{}\\)

\\(\\newcommand {\\smashoperator }[2][]{#2\\limits }\\)

\\(\\newcommand {\\SwapAboveDisplaySkip }{}\\)

\\(\\newcommand {\\LaTeXunderbrace }[1]{\\underbrace {#1}}\\)

\\(\\newcommand {\\LaTeXoverbrace }[1]{\\overbrace {#1}}\\)

\\(\\newcommand {\\LWRmultlined }[1][]{\\begin {multline*}}\\)

\\(\\newenvironment {multlined}[1][]{\\LWRmultlined }{\\end {multline*}}\\)

\\(\\let \\LWRorigshoveleft \\shoveleft \\)

\\(\\renewcommand {\\shoveleft }[1][]{\\LWRorigshoveleft }\\)

\\(\\let \\LWRorigshoveright \\shoveright \\)

\\(\\renewcommand {\\shoveright }[1][]{\\LWRorigshoveright }\\)

\\(\\newcommand {\\shortintertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\vcentcolon }{\\mathrel {\\unicode {x2236}}}\\)

</div>

<a id="index-autopage-1"></a>
<div class="titlepage">

<h1>Ongoing Research Index Page</h1>


<div class="author">


<div class="oneauthor">

<p>
A. U. Thor
</p>
</div>

</div>


<div class="titledate">

<p>
December 7, 2025
</p>
</div>

</div>
<div class="abstract">


<div class="abstracttitle">Abstract</div>

<p>
Optionally, use this document to provide optional information.
</p>
</div>

<p>

<a href="../figures/placeholder1.jpg" target="_blank" ><img
    src="../figures/placeholder1.jpg"
    class="inlineimage"
    alt="(image)"
></a>
</p>

<a id="index-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,Kb=Object.freeze(Object.defineProperty({__proto__:null,default:Hw},Symbol.toStringTag,{value:"Module"})),Gw=()=>ql(()=>import("./index-Vud9R5r8.js"),__vite__mapDeps([4,1,3])),$w=ai("/ongoing/")({component:Ml(Gw,"component"),loader:async({context:{getBodyContent:n}})=>({body:n(Object.assign({"/src/site/content/ongoing/index.html":Kb})["/src/site/content/ongoing/index.html"]?.default)}),head:()=>({meta:[{title:"Ongoing Research | Textile"}]})}),Vw=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Sample LATeX Document without mathtools</title>
<link rel="stylesheet" type="text/css" href="lwarp.css" />

<script>
// Lwarp MathJax emulation code
//
// Based on code by Davide P. Cervone.
// Equation numbering: https://github.com/mathjax/MathJax/issues/2427
// Starred and ifnextchar macros: https://github.com/mathjax/MathJax/issues/2428
// \\left, \\right delimiters: https://github.com/mathjax/MathJax/issues/2535
//
// Modified by Brian Dunn to adjust equation numbering and add subequations.
//
// LaTeX can use \\seteqnumber{subequations?}{section}{number} before each equation.
// subequations? is 0 usually, 1 if inside subequations.
// section is a string printed as-is, or empty.
// number is auto-incremented by MathJax between equations.
//
MathJax = {
    subequations: "0",
    section: "",
    loader: {
        load: ['[tex]/tagformat', '[tex]/textmacros'],
    },
    startup: {
        ready() {
            //      These would be replaced by import commands if you wanted to make
            //      a proper extension.
            const Configuration = MathJax._.input.tex.Configuration.Configuration;
            const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
            const Macro = MathJax._.input.tex.Symbol.Macro;
            const TexError = MathJax._.input.tex.TexError.default;
            const ParseUtil = MathJax._.input.tex.ParseUtil.default;
            const expandable = MathJax._.util.Options.expandable;


            //      Insert the replacement string into the TeX string, and check
            //      that there haven't been too many maxro substitutions (prevents
            //      infinite loops).
            const useArgument = (parser, text) => {
                parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                parser.i = 0;
                if (++parser.macroCount > parser.configuration.options.maxMacros) {
                    throw new TexError('MaxMacroSub1',
                    'MathJax maximum macro substitution count exceeded; ' +
                    'is there a recursive macro call?');
                }
            }


            //      Create the command map for:
            //          \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
            new CommandMap('Lwarp-macros', {
                ifstar: 'IfstarFunction',
                ifnextchar: 'IfnextcharFunction',
                ifblank: 'IfblankFunction',
                ifstrequal: 'IfstrequalFunction',
                gsubstitute: 'GsubstituteFunction',
                seteqnumber: 'SeteqnumberFunction'
            }, {
                //      This function implements an ifstar macro.
                IfstarFunction(parser, name) {
                    const resultstar = parser.GetArgument(name);
                    const resultnostar = parser.GetArgument(name);
                    const star = parser.GetStar();                      // true if there is a *
                    useArgument(parser, star ? resultstar : resultnostar);
                },


                //      This function implements an ifnextchar macro.
                IfnextcharFunction(parser, name) {
                    let whichchar = parser.GetArgument(name);
                    if (whichchar.match(/^(?:0x[0-9A-F]+|[0-9]+)$/i)) {
                        // $ syntax highlighting
                        whichchar = String.fromCodePoint(parseInt(whichchar));
                    }
                    const resultnextchar = parser.GetArgument(name);
                    const resultnotnextchar = parser.GetArgument(name);
                    const gotchar = (parser.GetNext() === whichchar);
                    useArgument(parser, gotchar ? resultnextchar : resultnotnextchar);
                },


                // This function implements an ifblank macro.
                IfblankFunction(parser, name) {
                    const blankarg = parser.GetArgument(name);
                    const resultblank = parser.GetArgument(name);
                    const resultnotblank = parser.GetArgument(name);
                    const isblank = (blankarg.trim() == "");
                    useArgument(parser, isblank ? resultblank : resultnotblank);
                },


                // This function implements an ifstrequal macro.
                IfstrequalFunction(parser, name) {
                    const strequalfirst = parser.GetArgument(name);
                    const strequalsecond = parser.GetArgument(name);
                    const resultequal = parser.GetArgument(name);
                    const resultnotequal = parser.GetArgument(name);
                    const isequal = (strequalfirst == strequalsecond);
                    useArgument(parser, isequal ? resultequal : resultnotequal);
                },


                // This function implements a gsub macro.
                GsubstituteFunction(parser, name) {
                    const gsubfirst = parser.GetArgument(name);
                    const gsubsecond = parser.GetArgument(name);
                    const gsubthird = parser.GetArgument(name);
                    let gsubresult=gsubfirst.replace(gsubsecond, gsubthird);
                    useArgument(parser, gsubresult);
                },


                //      This function modifies the equation numbers.
                SeteqnumberFunction(parser, name) {
                        //   Get the macro parameters
                        const star = parser.GetStar();                    // true if there is a *
                        const optBrackets = parser.GetBrackets(name);     // contents of optional brackets
                        const newsubequations = parser.GetArgument(name);    // the subequations argument
                        const neweqsection = parser.GetArgument(name);    // the eq section argument
                        const neweqnumber = parser.GetArgument(name);     // the eq number argument
                        MathJax.config.subequations=newsubequations ;     // a string with boolean meaning
                        MathJax.config.section=neweqsection ;             // a string with numeric meaning
                        parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                }


            });


            //      Create the Lwarp-macros package
            Configuration.create('Lwarp-macros', {
                handler: {macro: ['Lwarp-macros']}
            });


            MathJax.startup.defaultReady();


            // For forward references:
            MathJax.startup.input[0].preFilters.add(({math}) => {
                if (math.inputData.recompile){
                        MathJax.config.subequations = math.inputData.recompile.subequations;
                        MathJax.config.section = math.inputData.recompile.section;
                }
            });
            MathJax.startup.input[0].postFilters.add(({math}) => {
                if (math.inputData.recompile){
                        math.inputData.recompile.subequations = MathJax.config.subequations;
                        math.inputData.recompile.section = MathJax.config.section;
                }
            });


                // For \\left, \\right with unicode-math:
                const {DelimiterMap} = MathJax._.input.tex.SymbolMap;
                const {Symbol} = MathJax._.input.tex.Symbol;
                const {MapHandler} = MathJax._.input.tex.MapHandler;
                const delimiter = MapHandler.getMap('delimiter');
                delimiter.add('\\\\lBrack', new Symbol('\\\\lBrack', '\\u27E6'));
                delimiter.add('\\\\rBrack', new Symbol('\\\\rBrack', '\\u27E7'));
                delimiter.add('\\\\lAngle', new Symbol('\\\\lAngle', '\\u27EA'));
                delimiter.add('\\\\rAngle', new Symbol('\\\\rAngle', '\\u27EB'));
                delimiter.add('\\\\lbrbrak', new Symbol('\\\\lbrbrak', '\\u2772'));
                delimiter.add('\\\\rbrbrak', new Symbol('\\\\rbrbrak', '\\u2773'));
                delimiter.add('\\\\lbag', new Symbol('\\\\lbag', '\\u27C5'));
                delimiter.add('\\\\rbag', new Symbol('\\\\rbag', '\\u27C6'));
                delimiter.add('\\\\llparenthesis', new Symbol('\\\\llparenthesis', '\\u2987'));
                delimiter.add('\\\\rrparenthesis', new Symbol('\\\\rrparenthesis', '\\u2988'));
                delimiter.add('\\\\llangle', new Symbol('\\\\llangle', '\\u2989'));
                delimiter.add('\\\\rrangle', new Symbol('\\\\rrangle', '\\u298A'));
                delimiter.add('\\\\Lbrbrak', new Symbol('\\\\Lbrbrak', '\\u27EC'));
                delimiter.add('\\\\Rbrbrak', new Symbol('\\\\Rbrbrak', '\\u27ED'));
                delimiter.add('\\\\lBrace', new Symbol('\\\\lBrace', '\\u2983'));
                delimiter.add('\\\\rBrace', new Symbol('\\\\rBrace', '\\u2984'));
                delimiter.add('\\\\lParen', new Symbol('\\\\lParen', '\\u2985'));
                delimiter.add('\\\\rParen', new Symbol('\\\\rParen', '\\u2986'));
                delimiter.add('\\\\lbrackubar', new Symbol('\\\\lbrackubar', '\\u298B'));
                delimiter.add('\\\\rbrackubar', new Symbol('\\\\rbrackubar', '\\u298C'));
                delimiter.add('\\\\lbrackultick', new Symbol('\\\\lbrackultick', '\\u298D'));
                delimiter.add('\\\\rbracklrtick', new Symbol('\\\\rbracklrtick', '\\u298E'));
                delimiter.add('\\\\lbracklltick', new Symbol('\\\\lbracklltick', '\\u298F'));
                delimiter.add('\\\\rbrackurtick', new Symbol('\\\\rbrackurtick', '\\u2990'));
                delimiter.add('\\\\langledot', new Symbol('\\\\langledot', '\\u2991'));
                delimiter.add('\\\\rangledot', new Symbol('\\\\rangledot', '\\u2992'));
                delimiter.add('\\\\lparenless', new Symbol('\\\\lparenless', '\\u2993'));
                delimiter.add('\\\\rparengtr', new Symbol('\\\\rparengtr', '\\u2994'));
                delimiter.add('\\\\Lparengtr', new Symbol('\\\\Lparengtr', '\\u2995'));
                delimiter.add('\\\\Rparenless', new Symbol('\\\\Rparenless', '\\u2996'));
                delimiter.add('\\\\lblkbrbrak', new Symbol('\\\\lblkbrbrak', '\\u2997'));
                delimiter.add('\\\\rblkbrbrak', new Symbol('\\\\rblkbrbrak', '\\u2998'));
                delimiter.add('\\\\lvzigzag', new Symbol('\\\\lvzigzag', '\\u29D8'));
                delimiter.add('\\\\rvzigzag', new Symbol('\\\\rvzigzag', '\\u29D9'));
                delimiter.add('\\\\Lvzigzag', new Symbol('\\\\Lvzigzag', '\\u29DA'));
                delimiter.add('\\\\Rvzigzag', new Symbol('\\\\Rvzigzag', '\\u29DB'));
                delimiter.add('\\\\lcurvyangle', new Symbol('\\\\lcurvyangle', '\\u29FC'));
                delimiter.add('\\\\rcurvyangle', new Symbol('\\\\rcurvyangle', '\\u29FD'));
                delimiter.add('\\\\Vvert', new Symbol('\\\\Vvert', '\\u2980'));
        }        // ready
    },           // startup


    tex: {
        packages: {'[+]': ['tagformat', 'Lwarp-macros', 'textmacros']},
        tags: "ams",
                tagformat: {
                        number: function (n) {
                             if(MathJax.config.subequations==0)
                                 return(MathJax.config.section + n);
                             else
                                 return(MathJax.config.section + String.fromCharCode(96+n));
                        },
                },
    }
}
<\/script>


<script
        id="MathJax-script"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
><\/script>

</head>
<body>


<div class="bodywithoutsidetoc">


<main class="bodycontainer">


<section class="textbody">

<a id="pub-1-autofile-0"></a>

<!--MathJax customizations:-->
<div data-nosnippet
    style="display:none"
>

\\(\\newcommand{\\footnotename}{footnote}\\)

\\(\\def \\LWRfootnote {1}\\)

\\(\\newcommand {\\footnote }[2][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\newcommand {\\footnotemark }[1][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\let \\LWRorighspace \\hspace \\)

\\(\\renewcommand {\\hspace }{\\ifstar \\LWRorighspace \\LWRorighspace }\\)

\\(\\newcommand {\\mathnormal }[1]{{#1}}\\)

\\(\\newcommand \\ensuremath [1]{#1}\\)

\\(\\newcommand {\\LWRframebox }[2][]{\\fbox {#2}} \\newcommand {\\framebox }[1][]{\\LWRframebox } \\)

\\(\\newcommand {\\setlength }[2]{}\\)

\\(\\newcommand {\\addtolength }[2]{}\\)

\\(\\newcommand {\\setcounter }[2]{}\\)

\\(\\newcommand {\\addtocounter }[2]{}\\)

\\(\\newcommand {\\arabic }[1]{}\\)

\\(\\newcommand {\\number }[1]{}\\)

\\(\\newcommand {\\noalign }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\cline }[1]{}\\)

\\(\\newcommand {\\directlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\luatexdirectlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\protect }{}\\)

\\(\\def \\LWRabsorbnumber #1 {}\\)

\\(\\def \\LWRabsorbquotenumber &quot;#1 {}\\)

\\(\\newcommand {\\LWRabsorboption }[1][]{}\\)

\\(\\newcommand {\\LWRabsorbtwooptions }[1][]{\\LWRabsorboption }\\)

\\(\\def \\mathchar {\\ifnextchar &quot;\\LWRabsorbquotenumber \\LWRabsorbnumber }\\)

\\(\\def \\mathcode #1={\\mathchar }\\)

\\(\\let \\delcode \\mathcode \\)

\\(\\let \\delimiter \\mathchar \\)

\\(\\def \\oe {\\unicode {x0153}}\\)

\\(\\def \\OE {\\unicode {x0152}}\\)

\\(\\def \\ae {\\unicode {x00E6}}\\)

\\(\\def \\AE {\\unicode {x00C6}}\\)

\\(\\def \\aa {\\unicode {x00E5}}\\)

\\(\\def \\AA {\\unicode {x00C5}}\\)

\\(\\def \\o {\\unicode {x00F8}}\\)

\\(\\def \\O {\\unicode {x00D8}}\\)

\\(\\def \\l {\\unicode {x0142}}\\)

\\(\\def \\L {\\unicode {x0141}}\\)

\\(\\def \\ss {\\unicode {x00DF}}\\)

\\(\\def \\SS {\\unicode {x1E9E}}\\)

\\(\\def \\dag {\\unicode {x2020}}\\)

\\(\\def \\ddag {\\unicode {x2021}}\\)

\\(\\def \\P {\\unicode {x00B6}}\\)

\\(\\def \\copyright {\\unicode {x00A9}}\\)

\\(\\def \\pounds {\\unicode {x00A3}}\\)

\\(\\let \\LWRref \\ref \\)

\\(\\renewcommand {\\ref }{\\ifstar \\LWRref \\LWRref }\\)

\\( \\newcommand {\\multicolumn }[3]{#3}\\)

\\(\\require {textcomp}\\)

\\(\\newcommand {\\intertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\let \\Hat \\hat \\)

\\(\\let \\Check \\check \\)

\\(\\let \\Tilde \\tilde \\)

\\(\\let \\Acute \\acute \\)

\\(\\let \\Grave \\grave \\)

\\(\\let \\Dot \\dot \\)

\\(\\let \\Ddot \\ddot \\)

\\(\\let \\Breve \\breve \\)

\\(\\let \\Bar \\bar \\)

\\(\\let \\Vec \\vec \\)

\\(\\require {mathtools}\\)

\\(\\newenvironment {crampedsubarray}[1]{}{}\\)

\\(\\newcommand {\\smashoperator }[2][]{#2\\limits }\\)

\\(\\newcommand {\\SwapAboveDisplaySkip }{}\\)

\\(\\newcommand {\\LaTeXunderbrace }[1]{\\underbrace {#1}}\\)

\\(\\newcommand {\\LaTeXoverbrace }[1]{\\overbrace {#1}}\\)

\\(\\newcommand {\\LWRmultlined }[1][]{\\begin {multline*}}\\)

\\(\\newenvironment {multlined}[1][]{\\LWRmultlined }{\\end {multline*}}\\)

\\(\\let \\LWRorigshoveleft \\shoveleft \\)

\\(\\renewcommand {\\shoveleft }[1][]{\\LWRorigshoveleft }\\)

\\(\\let \\LWRorigshoveright \\shoveright \\)

\\(\\renewcommand {\\shoveright }[1][]{\\LWRorigshoveright }\\)

\\(\\newcommand {\\shortintertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\vcentcolon }{\\mathrel {\\unicode {x2236}}}\\)

</div>

<a id="pub-1-autopage-1"></a>
<div class="titlepage">

<h1>Sample <span class="latexlogofont"><span class="latexlogo">L<span class="latexlogosup">a</span>T<span class="latexlogosub">e</span>X</span></span> Document without <kbd>mathtools</kbd></h1>


<div class="author">


<div class="oneauthor">

<p>
A.&nbsp;U.&nbsp;Thor
</p>
</div>

</div>


<div class="titledate">

<p>
December 7, 2025
</p>
</div>

</div>
<div class="abstract">


<div class="abstracttitle">Abstract</div>

<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue
eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida
placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
</p>
</div>
<!--
...... section Introduction ......
-->
<h4 id="autosec-4"><span class="sectionnumber">1&#x2003;</span>Introduction</h4>
<a id="pub-1-autopage-4"></a>


<p>
Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare
odio metus a mi. Morbi ac orci et nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt urna. Nulla ullamcorper
vestibulum turpis. Pellentesque cursus luctus mauris.
</p>


<p>
We consider a function \\(f \\colon \\mathbb {R} \\to \\mathbb {R}\\). Inline examples: \\(e^{i\\pi } + 1 = 0\\) and
</p>

<p>
\\[ \\int _0^1 x^2\\,dx = \\frac {1}{3}.        \\]
</p>
<!--
...... section Basic Equations ......
-->
<h4 id="autosec-5"><span class="sectionnumber">2&#x2003;</span>Basic Equations</h4>
<a id="pub-1-autopage-5"></a>


<p>
A numbered equation:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{0}\\)</span>

<!--

                                                                                                        ρ
                                                                                            ∇·E=           .          (1)
                                                                                                        ε0

-->

<p>

\\begin{equation}
\\nabla \\cdot \\mathbf {E} = \\frac {\\rho }{\\varepsilon _0}.
\\end{equation}

</p>

<p>
An aligned system:
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{1}\\)</span>


<!--



                                                                                      a2 + b2 = c2 ,                  (2)
                                                                                            2     2               2
                                                                                      (a + b) = a + 2ab + b .         (3)



-->


<p>

\\begin{align}
a^2 + b^2 &amp;= c^2, \\\\ (a+b)^2 &amp;= a^2 + 2ab + b^2.
\\end{align}

</p>

<p>
A general \\(n\\)th-degree polynomial:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{3}\\)</span>

<!--

                                                                                                  n
                                                                                                  X
                                                                                         p(x) =         ak xk ,       (4)
                                                                                                  k=0


-->

<p>

\\begin{equation}
p(x) = \\sum _{k=0}^{n} a_k x^k,
\\end{equation}

</p>

<p>
where \\(a_k \\in \\mathbb {R}\\) for all \\(k\\).
</p>
<!--
...... section Piecewise Functions and Matrices ......
-->
<h4 id="autosec-6"><span class="sectionnumber">3&#x2003;</span>Piecewise Functions and Matrices</h4>
<a id="pub-1-autopage-6"></a>


<p>
A piecewise definition using <kbd>cases</kbd>:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{4}\\)</span>

<!--

                                                                                                                  2
                                                                                                                  x ,      x ≥ 0,
                                                                                                       f (x) =                                                                                                        (5)
                                                                                                                  −x,      x < 0.

-->

<p>

\\begin{equation}
f(x) = \\begin{cases} x^2, &amp; x \\ge 0, \\\\ -x, &amp; x &lt; 0.    \\end {cases}
\\end{equation}

</p>

<p>
A matrix and its determinant:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{5}\\)</span>

<!--

                                                                                                    "
                                                                                                  1         2    3
                                                                                                                  #
                                                                                               A= 0         1    4 ,       det(A) = 1.                                                                                (6)
                                                                                                  0         0    1

-->

<p>

\\begin{equation}
A = \\begin{bmatrix} 1 &amp; 2 &amp; 3 \\\\ 0 &amp; 1 &amp; 4 \\\\ 0 &amp; 0 &amp; 1 \\end {bmatrix}, \\qquad \\det (A) = 1.
\\end{equation}

</p>

<p>
An augmented matrix:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{6}\\)</span>

<!--

                                                                                                                                 2
                                                                                                                                        
                                                                                                1       1        2   1       0
                                                                                                                   ∼                3
                                                                                                                                    4       .                                                                         (7)
                                                                                                2      −1        0   0       1      3


-->

<p>

\\begin{equation}
\\begin{bmatrix} 1 &amp; 1 &amp; \\vline &amp; 2 \\\\ 2 &amp; -1 &amp; \\vline &amp; 0 \\end {bmatrix} \\sim \\begin{bmatrix} 1 &amp; 0 &amp; \\vline &amp; \\tfrac {2}{3} \\\\ 0 &amp; 1 &amp; \\vline &amp; \\tfrac {4}{3} \\end
{bmatrix}.
\\end{equation}

</p>
<!--
...... section Theorems and Proofs ......
-->
<h4 id="autosec-7"><span class="sectionnumber">4&#x2003;</span>Theorems and Proofs</h4>
<a id="pub-1-autopage-7"></a>
<div class="amsthmbodyplain">

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"><a id="pub-1-autopage-8"></a>
<span class="amsthmnameplain">Theorem</span><span class="amsthmnumberplain"> <span class="textup">1</span></span>. </span> For all \\(x,y \\in \\mathbb {R}\\), we have \\((x-y)^2 \\ge 0\\).
</p>

</li>

</ul>

</div>
<div class="amsthmproof">

<a id="pub-1-autopage-9"></a>

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"> <span class="amsthmproofname">Proof.</span></span> Expanding the square,
</p>

<p>
\\[ (x-y)^2 = x^2 - 2xy + y^2, \\]
</p>

<p>
which is a square of a real number and hence nonnegative. <span class="theoremendmark">&#x25A1;</span>
</p>

</li>

</ul>

</div>
<div class="amsthmbodyplain">

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"><a id="pub-1-autopage-10"></a>
<span class="amsthmnameplain">Lemma</span><span class="amsthmnumberplain"> <span class="textup">1</span></span>. </span> For all \\(x \\in \\mathbb {R}\\),
</p>

<p>
\\[ \\cos ^2 x + \\sin ^2 x = 1.   \\]
</p>

<p>


</p>

</li>

</ul>

</div>
<div class="amsthmproof">

<a id="pub-1-autopage-11"></a>

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"> <span class="amsthmproofname">Proof.</span></span> Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy
pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit
ligula feugiat magna. Nunc eleifend consequat lorem. Sed lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.
</p>
<p>
<span class="theoremendmark">&#x25A1;</span>
</p>

</li>

</ul>

</div>
<!--
...... section More Lorem Ipsum with Math ......
-->
<h4 id="autosec-12"><span class="sectionnumber">5&#x2003;</span>More Lorem Ipsum with Math</h4>
<a id="pub-1-autopage-12"></a>


<p>
Quisque ullamcorper placerat ipsum. Cras nibh. Morbi vel justo vitae lacus tincidunt ultrices. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In hac habitasse platea dictumst. Integer tempus convallis augue. Etiam facilisis. Nunc
elementum fermentum wisi. Aenean placerat. Ut imperdiet, enim sed gravida sollicitudin, felis odio placerat quam, ac pulvinar elit purus eget enim. Nunc vitae tortor. Proin tempus nibh sit amet nisl. Vivamus quis tortor vitae risus porta vehicula.
</p>


<p>
We can also show derivatives:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{7}\\)</span>

<!--


                                                                                                                  f (x) = x3 − 3x + 1,
                                                                                                                  f ′ (x) = 3x2 − 3,                                                                                                                 (8)
                                                                                                                 f ′′ (x) = 6x.

-->

<p>

\\begin{equation}
\\begin{aligned} f(x) &amp;= x^3 - 3x + 1, \\\\ f&apos;(x) &amp;= 3x^2 - 3, \\\\ f&apos;&apos;(x) &amp;= 6x.                     \\end {aligned}
\\end{equation}

</p>

<p>
And a classical limit:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{8}\\)</span>

<!--

                                                                                                                                     n
                                                                                                                                 1
                                                                                                                        
                                                                                                                  lim       1+            = e.                                                                                                       (9)
                                                                                                                  n→∞            n

-->

<p>

\\begin{equation}
\\lim _{n \\to \\infty }\\left (1 + \\frac {1}{n}\\right )^n = e.
\\end{equation}

</p>
<!--
...... section Conclusion ......
-->
<h4 id="autosec-13"><span class="sectionnumber">6&#x2003;</span>Conclusion</h4>
<a id="pub-1-autopage-13"></a>


<p>
Fusce mauris. Vestibulum luctus nibh at lectus. Sed bibendum, nulla a faucibus semper, leo velit ultricies tellus, ac venenatis arcu wisi vel nisl. Vestibulum diam. Aliquam pellentesque, augue quis sagittis posuere, turpis lacus congue quam, in
hendrerit risus eros eget felis. Maecenas eget erat in sapien mattis porttitor. Vestibulum porttitor. Nulla facilisi. Sed a turpis eu lacus commodo facilisis. Morbi fringilla, wisi in dignissim interdum, justo lectus sagittis dui, et vehicula libero dui cursus
dui. Mauris tempor ligula sed lacus. Duis cursus enim ut augue. Cras ac magna. Cras nulla. Nulla egestas. Curabitur a leo. Quisque egestas wisi eget nunc. Nam feugiat lacus vel est. Curabitur consectetuer.
</p>


<a id="pub-1-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,Yw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),Pw=()=>ql(()=>import("./_-D3Qc3gPz.js"),__vite__mapDeps([5,1])),Xw=ai("/publications/$")({component:Ml(Pw,"component"),loader:async({context:{getBodyContent:n,siteMap:r},params:{_splat:l}})=>({body:n(Object.assign({"/src/site/content/publications/index.html":Jb,"/src/site/content/publications/pub-1.html":Yw})[`/src/site/content/publications/${l}`]?.default),title:r[`/publications/${l}`].title}),head:({loaderData:n})=>({meta:[{title:`${n?.title} | Publications | Textile`}]})}),Jw=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Sample LATeX Document without mathtools</title>
<link rel="stylesheet" type="text/css" href="lwarp.css" />

<script>
// Lwarp MathJax emulation code
//
// Based on code by Davide P. Cervone.
// Equation numbering: https://github.com/mathjax/MathJax/issues/2427
// Starred and ifnextchar macros: https://github.com/mathjax/MathJax/issues/2428
// \\left, \\right delimiters: https://github.com/mathjax/MathJax/issues/2535
//
// Modified by Brian Dunn to adjust equation numbering and add subequations.
//
// LaTeX can use \\seteqnumber{subequations?}{section}{number} before each equation.
// subequations? is 0 usually, 1 if inside subequations.
// section is a string printed as-is, or empty.
// number is auto-incremented by MathJax between equations.
//
MathJax = {
    subequations: "0",
    section: "",
    loader: {
        load: ['[tex]/tagformat', '[tex]/textmacros'],
    },
    startup: {
        ready() {
            //      These would be replaced by import commands if you wanted to make
            //      a proper extension.
            const Configuration = MathJax._.input.tex.Configuration.Configuration;
            const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
            const Macro = MathJax._.input.tex.Symbol.Macro;
            const TexError = MathJax._.input.tex.TexError.default;
            const ParseUtil = MathJax._.input.tex.ParseUtil.default;
            const expandable = MathJax._.util.Options.expandable;


            //      Insert the replacement string into the TeX string, and check
            //      that there haven't been too many maxro substitutions (prevents
            //      infinite loops).
            const useArgument = (parser, text) => {
                parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                parser.i = 0;
                if (++parser.macroCount > parser.configuration.options.maxMacros) {
                    throw new TexError('MaxMacroSub1',
                    'MathJax maximum macro substitution count exceeded; ' +
                    'is there a recursive macro call?');
                }
            }


            //      Create the command map for:
            //          \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
            new CommandMap('Lwarp-macros', {
                ifstar: 'IfstarFunction',
                ifnextchar: 'IfnextcharFunction',
                ifblank: 'IfblankFunction',
                ifstrequal: 'IfstrequalFunction',
                gsubstitute: 'GsubstituteFunction',
                seteqnumber: 'SeteqnumberFunction'
            }, {
                //      This function implements an ifstar macro.
                IfstarFunction(parser, name) {
                    const resultstar = parser.GetArgument(name);
                    const resultnostar = parser.GetArgument(name);
                    const star = parser.GetStar();                      // true if there is a *
                    useArgument(parser, star ? resultstar : resultnostar);
                },


                //      This function implements an ifnextchar macro.
                IfnextcharFunction(parser, name) {
                    let whichchar = parser.GetArgument(name);
                    if (whichchar.match(/^(?:0x[0-9A-F]+|[0-9]+)$/i)) {
                        // $ syntax highlighting
                        whichchar = String.fromCodePoint(parseInt(whichchar));
                    }
                    const resultnextchar = parser.GetArgument(name);
                    const resultnotnextchar = parser.GetArgument(name);
                    const gotchar = (parser.GetNext() === whichchar);
                    useArgument(parser, gotchar ? resultnextchar : resultnotnextchar);
                },


                // This function implements an ifblank macro.
                IfblankFunction(parser, name) {
                    const blankarg = parser.GetArgument(name);
                    const resultblank = parser.GetArgument(name);
                    const resultnotblank = parser.GetArgument(name);
                    const isblank = (blankarg.trim() == "");
                    useArgument(parser, isblank ? resultblank : resultnotblank);
                },


                // This function implements an ifstrequal macro.
                IfstrequalFunction(parser, name) {
                    const strequalfirst = parser.GetArgument(name);
                    const strequalsecond = parser.GetArgument(name);
                    const resultequal = parser.GetArgument(name);
                    const resultnotequal = parser.GetArgument(name);
                    const isequal = (strequalfirst == strequalsecond);
                    useArgument(parser, isequal ? resultequal : resultnotequal);
                },


                // This function implements a gsub macro.
                GsubstituteFunction(parser, name) {
                    const gsubfirst = parser.GetArgument(name);
                    const gsubsecond = parser.GetArgument(name);
                    const gsubthird = parser.GetArgument(name);
                    let gsubresult=gsubfirst.replace(gsubsecond, gsubthird);
                    useArgument(parser, gsubresult);
                },


                //      This function modifies the equation numbers.
                SeteqnumberFunction(parser, name) {
                        //   Get the macro parameters
                        const star = parser.GetStar();                    // true if there is a *
                        const optBrackets = parser.GetBrackets(name);     // contents of optional brackets
                        const newsubequations = parser.GetArgument(name);    // the subequations argument
                        const neweqsection = parser.GetArgument(name);    // the eq section argument
                        const neweqnumber = parser.GetArgument(name);     // the eq number argument
                        MathJax.config.subequations=newsubequations ;     // a string with boolean meaning
                        MathJax.config.section=neweqsection ;             // a string with numeric meaning
                        parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                }


            });


            //      Create the Lwarp-macros package
            Configuration.create('Lwarp-macros', {
                handler: {macro: ['Lwarp-macros']}
            });


            MathJax.startup.defaultReady();


            // For forward references:
            MathJax.startup.input[0].preFilters.add(({math}) => {
                if (math.inputData.recompile){
                        MathJax.config.subequations = math.inputData.recompile.subequations;
                        MathJax.config.section = math.inputData.recompile.section;
                }
            });
            MathJax.startup.input[0].postFilters.add(({math}) => {
                if (math.inputData.recompile){
                        math.inputData.recompile.subequations = MathJax.config.subequations;
                        math.inputData.recompile.section = MathJax.config.section;
                }
            });


                // For \\left, \\right with unicode-math:
                const {DelimiterMap} = MathJax._.input.tex.SymbolMap;
                const {Symbol} = MathJax._.input.tex.Symbol;
                const {MapHandler} = MathJax._.input.tex.MapHandler;
                const delimiter = MapHandler.getMap('delimiter');
                delimiter.add('\\\\lBrack', new Symbol('\\\\lBrack', '\\u27E6'));
                delimiter.add('\\\\rBrack', new Symbol('\\\\rBrack', '\\u27E7'));
                delimiter.add('\\\\lAngle', new Symbol('\\\\lAngle', '\\u27EA'));
                delimiter.add('\\\\rAngle', new Symbol('\\\\rAngle', '\\u27EB'));
                delimiter.add('\\\\lbrbrak', new Symbol('\\\\lbrbrak', '\\u2772'));
                delimiter.add('\\\\rbrbrak', new Symbol('\\\\rbrbrak', '\\u2773'));
                delimiter.add('\\\\lbag', new Symbol('\\\\lbag', '\\u27C5'));
                delimiter.add('\\\\rbag', new Symbol('\\\\rbag', '\\u27C6'));
                delimiter.add('\\\\llparenthesis', new Symbol('\\\\llparenthesis', '\\u2987'));
                delimiter.add('\\\\rrparenthesis', new Symbol('\\\\rrparenthesis', '\\u2988'));
                delimiter.add('\\\\llangle', new Symbol('\\\\llangle', '\\u2989'));
                delimiter.add('\\\\rrangle', new Symbol('\\\\rrangle', '\\u298A'));
                delimiter.add('\\\\Lbrbrak', new Symbol('\\\\Lbrbrak', '\\u27EC'));
                delimiter.add('\\\\Rbrbrak', new Symbol('\\\\Rbrbrak', '\\u27ED'));
                delimiter.add('\\\\lBrace', new Symbol('\\\\lBrace', '\\u2983'));
                delimiter.add('\\\\rBrace', new Symbol('\\\\rBrace', '\\u2984'));
                delimiter.add('\\\\lParen', new Symbol('\\\\lParen', '\\u2985'));
                delimiter.add('\\\\rParen', new Symbol('\\\\rParen', '\\u2986'));
                delimiter.add('\\\\lbrackubar', new Symbol('\\\\lbrackubar', '\\u298B'));
                delimiter.add('\\\\rbrackubar', new Symbol('\\\\rbrackubar', '\\u298C'));
                delimiter.add('\\\\lbrackultick', new Symbol('\\\\lbrackultick', '\\u298D'));
                delimiter.add('\\\\rbracklrtick', new Symbol('\\\\rbracklrtick', '\\u298E'));
                delimiter.add('\\\\lbracklltick', new Symbol('\\\\lbracklltick', '\\u298F'));
                delimiter.add('\\\\rbrackurtick', new Symbol('\\\\rbrackurtick', '\\u2990'));
                delimiter.add('\\\\langledot', new Symbol('\\\\langledot', '\\u2991'));
                delimiter.add('\\\\rangledot', new Symbol('\\\\rangledot', '\\u2992'));
                delimiter.add('\\\\lparenless', new Symbol('\\\\lparenless', '\\u2993'));
                delimiter.add('\\\\rparengtr', new Symbol('\\\\rparengtr', '\\u2994'));
                delimiter.add('\\\\Lparengtr', new Symbol('\\\\Lparengtr', '\\u2995'));
                delimiter.add('\\\\Rparenless', new Symbol('\\\\Rparenless', '\\u2996'));
                delimiter.add('\\\\lblkbrbrak', new Symbol('\\\\lblkbrbrak', '\\u2997'));
                delimiter.add('\\\\rblkbrbrak', new Symbol('\\\\rblkbrbrak', '\\u2998'));
                delimiter.add('\\\\lvzigzag', new Symbol('\\\\lvzigzag', '\\u29D8'));
                delimiter.add('\\\\rvzigzag', new Symbol('\\\\rvzigzag', '\\u29D9'));
                delimiter.add('\\\\Lvzigzag', new Symbol('\\\\Lvzigzag', '\\u29DA'));
                delimiter.add('\\\\Rvzigzag', new Symbol('\\\\Rvzigzag', '\\u29DB'));
                delimiter.add('\\\\lcurvyangle', new Symbol('\\\\lcurvyangle', '\\u29FC'));
                delimiter.add('\\\\rcurvyangle', new Symbol('\\\\rcurvyangle', '\\u29FD'));
                delimiter.add('\\\\Vvert', new Symbol('\\\\Vvert', '\\u2980'));
        }        // ready
    },           // startup


    tex: {
        packages: {'[+]': ['tagformat', 'Lwarp-macros', 'textmacros']},
        tags: "ams",
                tagformat: {
                        number: function (n) {
                             if(MathJax.config.subequations==0)
                                 return(MathJax.config.section + n);
                             else
                                 return(MathJax.config.section + String.fromCharCode(96+n));
                        },
                },
    }
}
<\/script>


<script
        id="MathJax-script"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
><\/script>

</head>
<body>


<div class="bodywithoutsidetoc">


<main class="bodycontainer">


<section class="textbody">

<a id="project-1-autofile-0"></a>

<!--MathJax customizations:-->
<div data-nosnippet
    style="display:none"
>

\\(\\newcommand{\\footnotename}{footnote}\\)

\\(\\def \\LWRfootnote {1}\\)

\\(\\newcommand {\\footnote }[2][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\newcommand {\\footnotemark }[1][\\LWRfootnote ]{{}^{\\mathrm {#1}}}\\)

\\(\\let \\LWRorighspace \\hspace \\)

\\(\\renewcommand {\\hspace }{\\ifstar \\LWRorighspace \\LWRorighspace }\\)

\\(\\newcommand {\\mathnormal }[1]{{#1}}\\)

\\(\\newcommand \\ensuremath [1]{#1}\\)

\\(\\newcommand {\\LWRframebox }[2][]{\\fbox {#2}} \\newcommand {\\framebox }[1][]{\\LWRframebox } \\)

\\(\\newcommand {\\setlength }[2]{}\\)

\\(\\newcommand {\\addtolength }[2]{}\\)

\\(\\newcommand {\\setcounter }[2]{}\\)

\\(\\newcommand {\\addtocounter }[2]{}\\)

\\(\\newcommand {\\arabic }[1]{}\\)

\\(\\newcommand {\\number }[1]{}\\)

\\(\\newcommand {\\noalign }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\cline }[1]{}\\)

\\(\\newcommand {\\directlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\luatexdirectlua }[1]{\\text {(directlua)}}\\)

\\(\\newcommand {\\protect }{}\\)

\\(\\def \\LWRabsorbnumber #1 {}\\)

\\(\\def \\LWRabsorbquotenumber &quot;#1 {}\\)

\\(\\newcommand {\\LWRabsorboption }[1][]{}\\)

\\(\\newcommand {\\LWRabsorbtwooptions }[1][]{\\LWRabsorboption }\\)

\\(\\def \\mathchar {\\ifnextchar &quot;\\LWRabsorbquotenumber \\LWRabsorbnumber }\\)

\\(\\def \\mathcode #1={\\mathchar }\\)

\\(\\let \\delcode \\mathcode \\)

\\(\\let \\delimiter \\mathchar \\)

\\(\\def \\oe {\\unicode {x0153}}\\)

\\(\\def \\OE {\\unicode {x0152}}\\)

\\(\\def \\ae {\\unicode {x00E6}}\\)

\\(\\def \\AE {\\unicode {x00C6}}\\)

\\(\\def \\aa {\\unicode {x00E5}}\\)

\\(\\def \\AA {\\unicode {x00C5}}\\)

\\(\\def \\o {\\unicode {x00F8}}\\)

\\(\\def \\O {\\unicode {x00D8}}\\)

\\(\\def \\l {\\unicode {x0142}}\\)

\\(\\def \\L {\\unicode {x0141}}\\)

\\(\\def \\ss {\\unicode {x00DF}}\\)

\\(\\def \\SS {\\unicode {x1E9E}}\\)

\\(\\def \\dag {\\unicode {x2020}}\\)

\\(\\def \\ddag {\\unicode {x2021}}\\)

\\(\\def \\P {\\unicode {x00B6}}\\)

\\(\\def \\copyright {\\unicode {x00A9}}\\)

\\(\\def \\pounds {\\unicode {x00A3}}\\)

\\(\\let \\LWRref \\ref \\)

\\(\\renewcommand {\\ref }{\\ifstar \\LWRref \\LWRref }\\)

\\( \\newcommand {\\multicolumn }[3]{#3}\\)

\\(\\require {textcomp}\\)

\\(\\newcommand {\\intertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\let \\Hat \\hat \\)

\\(\\let \\Check \\check \\)

\\(\\let \\Tilde \\tilde \\)

\\(\\let \\Acute \\acute \\)

\\(\\let \\Grave \\grave \\)

\\(\\let \\Dot \\dot \\)

\\(\\let \\Ddot \\ddot \\)

\\(\\let \\Breve \\breve \\)

\\(\\let \\Bar \\bar \\)

\\(\\let \\Vec \\vec \\)

\\(\\require {mathtools}\\)

\\(\\newenvironment {crampedsubarray}[1]{}{}\\)

\\(\\newcommand {\\smashoperator }[2][]{#2\\limits }\\)

\\(\\newcommand {\\SwapAboveDisplaySkip }{}\\)

\\(\\newcommand {\\LaTeXunderbrace }[1]{\\underbrace {#1}}\\)

\\(\\newcommand {\\LaTeXoverbrace }[1]{\\overbrace {#1}}\\)

\\(\\newcommand {\\LWRmultlined }[1][]{\\begin {multline*}}\\)

\\(\\newenvironment {multlined}[1][]{\\LWRmultlined }{\\end {multline*}}\\)

\\(\\let \\LWRorigshoveleft \\shoveleft \\)

\\(\\renewcommand {\\shoveleft }[1][]{\\LWRorigshoveleft }\\)

\\(\\let \\LWRorigshoveright \\shoveright \\)

\\(\\renewcommand {\\shoveright }[1][]{\\LWRorigshoveright }\\)

\\(\\newcommand {\\shortintertext }[1]{\\text {#1}\\notag \\\\}\\)

\\(\\newcommand {\\vcentcolon }{\\mathrel {\\unicode {x2236}}}\\)

</div>

<a id="project-1-autopage-1"></a>
<div class="titlepage">

<h1>Sample <span class="latexlogofont"><span class="latexlogo">L<span class="latexlogosup">a</span>T<span class="latexlogosub">e</span>X</span></span> Document without <kbd>mathtools</kbd></h1>


<div class="author">


<div class="oneauthor">

<p>
A.&nbsp;U.&nbsp;Thor
</p>
</div>

</div>


<div class="titledate">

<p>
December 7, 2025
</p>
</div>

</div>
<div class="abstract">


<div class="abstracttitle">Abstract</div>

<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue
eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida
placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
</p>
</div>
<!--
...... section Introduction ......
-->
<h4 id="autosec-4"><span class="sectionnumber">1&#x2003;</span>Introduction</h4>
<a id="project-1-autopage-4"></a>


<p>
Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare
odio metus a mi. Morbi ac orci et nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt urna. Nulla ullamcorper
vestibulum turpis. Pellentesque cursus luctus mauris.
</p>


<p>
We consider a function \\(f \\colon \\mathbb {R} \\to \\mathbb {R}\\). Inline examples: \\(e^{i\\pi } + 1 = 0\\) and
</p>

<p>
\\[ \\int _0^1 x^2\\,dx = \\frac {1}{3}.        \\]
</p>
<!--
...... section Basic Equations ......
-->
<h4 id="autosec-5"><span class="sectionnumber">2&#x2003;</span>Basic Equations</h4>
<a id="project-1-autopage-5"></a>


<p>
A numbered equation:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{0}\\)</span>

<!--

                                                                                                        ρ
                                                                                            ∇·E=           .          (1)
                                                                                                        ε0

-->

<p>

\\begin{equation}
\\nabla \\cdot \\mathbf {E} = \\frac {\\rho }{\\varepsilon _0}.
\\end{equation}

</p>

<p>
An aligned system:
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{1}\\)</span>


<!--



                                                                                      a2 + b2 = c2 ,                  (2)
                                                                                            2     2               2
                                                                                      (a + b) = a + 2ab + b .         (3)



-->


<p>

\\begin{align}
a^2 + b^2 &amp;= c^2, \\\\ (a+b)^2 &amp;= a^2 + 2ab + b^2.
\\end{align}

</p>

<p>
A general \\(n\\)th-degree polynomial:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{3}\\)</span>

<!--

                                                                                                  n
                                                                                                  X
                                                                                         p(x) =         ak xk ,       (4)
                                                                                                  k=0


-->

<p>

\\begin{equation}
p(x) = \\sum _{k=0}^{n} a_k x^k,
\\end{equation}

</p>

<p>
where \\(a_k \\in \\mathbb {R}\\) for all \\(k\\).
</p>
<!--
...... section Piecewise Functions and Matrices ......
-->
<h4 id="autosec-6"><span class="sectionnumber">3&#x2003;</span>Piecewise Functions and Matrices</h4>
<a id="project-1-autopage-6"></a>


<p>
A piecewise definition using <kbd>cases</kbd>:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{4}\\)</span>

<!--

                                                                                                                  2
                                                                                                                  x ,      x ≥ 0,
                                                                                                       f (x) =                                                                                                        (5)
                                                                                                                  −x,      x < 0.

-->

<p>

\\begin{equation}
f(x) = \\begin{cases} x^2, &amp; x \\ge 0, \\\\ -x, &amp; x &lt; 0.    \\end {cases}
\\end{equation}

</p>

<p>
A matrix and its determinant:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{5}\\)</span>

<!--

                                                                                                    "
                                                                                                  1         2    3
                                                                                                                  #
                                                                                               A= 0         1    4 ,       det(A) = 1.                                                                                (6)
                                                                                                  0         0    1

-->

<p>

\\begin{equation}
A = \\begin{bmatrix} 1 &amp; 2 &amp; 3 \\\\ 0 &amp; 1 &amp; 4 \\\\ 0 &amp; 0 &amp; 1 \\end {bmatrix}, \\qquad \\det (A) = 1.
\\end{equation}

</p>

<p>
An augmented matrix:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{6}\\)</span>

<!--

                                                                                                                                 2
                                                                                                                                        
                                                                                                1       1        2   1       0
                                                                                                                   ∼                3
                                                                                                                                    4       .                                                                         (7)
                                                                                                2      −1        0   0       1      3


-->

<p>

\\begin{equation}
\\begin{bmatrix} 1 &amp; 1 &amp; \\vline &amp; 2 \\\\ 2 &amp; -1 &amp; \\vline &amp; 0 \\end {bmatrix} \\sim \\begin{bmatrix} 1 &amp; 0 &amp; \\vline &amp; \\tfrac {2}{3} \\\\ 0 &amp; 1 &amp; \\vline &amp; \\tfrac {4}{3} \\end
{bmatrix}.
\\end{equation}

</p>
<!--
...... section Theorems and Proofs ......
-->
<h4 id="autosec-7"><span class="sectionnumber">4&#x2003;</span>Theorems and Proofs</h4>
<a id="project-1-autopage-7"></a>
<div class="amsthmbodyplain">

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"><a id="project-1-autopage-8"></a>
<span class="amsthmnameplain">Theorem</span><span class="amsthmnumberplain"> <span class="textup">1</span></span>. </span> For all \\(x,y \\in \\mathbb {R}\\), we have \\((x-y)^2 \\ge 0\\).
</p>

</li>

</ul>

</div>
<div class="amsthmproof">

<a id="project-1-autopage-9"></a>

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"> <span class="amsthmproofname">Proof.</span></span> Expanding the square,
</p>

<p>
\\[ (x-y)^2 = x^2 - 2xy + y^2, \\]
</p>

<p>
which is a square of a real number and hence nonnegative. <span class="theoremendmark">&#x25A1;</span>
</p>

</li>

</ul>

</div>
<div class="amsthmbodyplain">

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"><a id="project-1-autopage-10"></a>
<span class="amsthmnameplain">Lemma</span><span class="amsthmnumberplain"> <span class="textup">1</span></span>. </span> For all \\(x \\in \\mathbb {R}\\),
</p>

<p>
\\[ \\cos ^2 x + \\sin ^2 x = 1.   \\]
</p>

<p>


</p>

</li>

</ul>

</div>
<div class="amsthmproof">

<a id="project-1-autopage-11"></a>

<ul class="list" style="list-style-type:none">



<li>
<p>
<span class="listmarker"> <span class="amsthmproofname">Proof.</span></span> Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy
pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit
ligula feugiat magna. Nunc eleifend consequat lorem. Sed lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.
</p>
<p>
<span class="theoremendmark">&#x25A1;</span>
</p>

</li>

</ul>

</div>
<!--
...... section More Lorem Ipsum with Math ......
-->
<h4 id="autosec-12"><span class="sectionnumber">5&#x2003;</span>More Lorem Ipsum with Math</h4>
<a id="project-1-autopage-12"></a>


<p>
Quisque ullamcorper placerat ipsum. Cras nibh. Morbi vel justo vitae lacus tincidunt ultrices. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In hac habitasse platea dictumst. Integer tempus convallis augue. Etiam facilisis. Nunc
elementum fermentum wisi. Aenean placerat. Ut imperdiet, enim sed gravida sollicitudin, felis odio placerat quam, ac pulvinar elit purus eget enim. Nunc vitae tortor. Proin tempus nibh sit amet nisl. Vivamus quis tortor vitae risus porta vehicula.
</p>


<p>
We can also show derivatives:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{7}\\)</span>

<!--


                                                                                                                  f (x) = x3 − 3x + 1,
                                                                                                                  f ′ (x) = 3x2 − 3,                                                                                                                 (8)
                                                                                                                 f ′′ (x) = 6x.

-->

<p>

\\begin{equation}
\\begin{aligned} f(x) &amp;= x^3 - 3x + 1, \\\\ f&apos;(x) &amp;= 3x^2 - 3, \\\\ f&apos;&apos;(x) &amp;= 6x.                     \\end {aligned}
\\end{equation}

</p>

<p>
And a classical limit:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{8}\\)</span>

<!--

                                                                                                                                     n
                                                                                                                                 1
                                                                                                                        
                                                                                                                  lim       1+            = e.                                                                                                       (9)
                                                                                                                  n→∞            n

-->

<p>

\\begin{equation}
\\lim _{n \\to \\infty }\\left (1 + \\frac {1}{n}\\right )^n = e.
\\end{equation}

</p>
<!--
...... section Conclusion ......
-->
<h4 id="autosec-13"><span class="sectionnumber">6&#x2003;</span>Conclusion</h4>
<a id="project-1-autopage-13"></a>


<p>
Fusce mauris. Vestibulum luctus nibh at lectus. Sed bibendum, nulla a faucibus semper, leo velit ultricies tellus, ac venenatis arcu wisi vel nisl. Vestibulum diam. Aliquam pellentesque, augue quis sagittis posuere, turpis lacus congue quam, in
hendrerit risus eros eget felis. Maecenas eget erat in sapien mattis porttitor. Vestibulum porttitor. Nulla facilisi. Sed a turpis eu lacus commodo facilisis. Morbi fringilla, wisi in dignissim interdum, justo lectus sagittis dui, et vehicula libero dui cursus
dui. Mauris tempor ligula sed lacus. Duis cursus enim ut augue. Cras ac magna. Cras nulla. Nulla egestas. Curabitur a leo. Quisque egestas wisi eget nunc. Nam feugiat lacus vel est. Curabitur consectetuer.
</p>


<a id="project-1-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,Kw=Object.freeze(Object.defineProperty({__proto__:null,default:Jw},Symbol.toStringTag,{value:"Module"})),Qw=()=>ql(()=>import("./_-CXUteaoS.js"),__vite__mapDeps([6,1])),Zw=ai("/ongoing/$")({component:Ml(Qw,"component"),loader:async({context:{getBodyContent:n,siteMap:r},params:{_splat:l}})=>({body:n(Object.assign({"/src/site/content/ongoing/index.html":Kb,"/src/site/content/ongoing/project-1.html":Kw})[`/src/site/content/ongoing/${l}`]?.default),title:r[`/ongoing/${l}`]}),head:({loaderData:n})=>({meta:[{title:`${n?.title.title} | Ongoing Research | Textile`}]})}),Fw=Bw.update({id:"/",path:"/",getParentRoute:()=>fr}),Ww=Uw.update({id:"/publications/",path:"/publications/",getParentRoute:()=>fr}),Iw=$w.update({id:"/ongoing/",path:"/ongoing/",getParentRoute:()=>fr}),eT=Xw.update({id:"/publications/$",path:"/publications/$",getParentRoute:()=>fr}),tT=Zw.update({id:"/ongoing/$",path:"/ongoing/$",getParentRoute:()=>fr}),nT={IndexRoute:Fw,OngoingSplatRoute:tT,PublicationsSplatRoute:eT,OngoingIndexRoute:Iw,PublicationsIndexRoute:Ww},aT=fr._addFileChildren(nT)._addFileTypes(),Qb=W1({routeTree:aT,context:{},defaultPreload:"intent",scrollRestoration:!0,defaultStructuralSharing:!0,defaultPreloadStaleTime:0,history:CS(),basepath:"/project-textile/"}),qf=document.getElementById("app");qf&&!qf.innerHTML&&dx.createRoot(qf).render(Z.jsx(K.StrictMode,{children:Z.jsx(tx,{router:Qb})}));export{SC as C,Ff as D,sw as P,Bw as R,Aw as S,Kn as T,Hf as _,Uw as a,$s as b,oi as c,Zn as d,cr as e,fw as f,si as g,$w as h,zb as i,Z as j,or as k,rT as l,kl as m,lT as n,Xw as o,Zw as p,y2 as q,K as r,ui as s,li as t,ci as u,vd as v,Tb as w,Td as x};
