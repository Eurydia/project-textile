const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaVaunIV.js","assets/useTypesetOnLoad-CbsLOdij.js","assets/index-B9C3RKT8.js","assets/ImageListItem-B-9up7Ty.js","assets/index-DdIPRNDy.js","assets/_-PQvTRBd0.js","assets/_-ZGbaJ6N-.js"])))=>i.map(i=>d[i]);
function m1(n,r){for(var l=0;l<r.length;l++){const o=r[l];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in n)){const f=Object.getOwnPropertyDescriptor(o,u);f&&Object.defineProperty(n,u,f.get?f:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function jb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lf={exports:{}},il={};var _g;function h1(){if(_g)return il;_g=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:n,type:o,key:d,ref:u!==void 0?u:null,props:f}}return il.Fragment=r,il.jsx=l,il.jsxs=l,il}var Cg;function p1(){return Cg||(Cg=1,lf.exports=h1()),lf.exports}var F=p1();const Bf=new WeakMap,g1=new WeakMap,ps={current:[]};let of=!1,hl=0;const fl=new Set,Io=new Map;function Ub(n){for(const r of n){if(ps.current.includes(r))continue;ps.current.push(r),r.recompute();const l=g1.get(r);if(l)for(const o of l){const u=Bf.get(o);u?.length&&Ub(u)}}}function b1(n){const r={prevVal:n.prevState,currentVal:n.state};for(const l of n.listeners)l(r)}function y1(n){const r={prevVal:n.prevState,currentVal:n.state};for(const l of n.listeners)l(r)}function Gb(n){if(hl>0&&!Io.has(n)&&Io.set(n,n.prevState),fl.add(n),!(hl>0)&&!of)try{for(of=!0;fl.size>0;){const r=Array.from(fl);fl.clear();for(const l of r){const o=Io.get(l)??l.prevState;l.prevState=o,b1(l)}for(const l of r){const o=Bf.get(l);o&&(ps.current.push(l),Ub(o))}for(const l of r){const o=Bf.get(l);if(o)for(const u of o)y1(u)}}}finally{of=!1,ps.current=[],Io.clear()}}function pl(n){hl++;try{n()}finally{if(hl--,hl===0){const r=fl.values().next().value;r&&Gb(r)}}}function v1(n){return typeof n=="function"}class S1{constructor(r,l){this.listeners=new Set,this.subscribe=o=>{var u,f;this.listeners.add(o);const d=(f=(u=this.options)==null?void 0:u.onSubscribe)==null?void 0:f.call(u,o,this);return()=>{this.listeners.delete(o),d?.()}},this.prevState=r,this.state=r,this.options=l}setState(r){var l,o,u;this.prevState=this.state,(l=this.options)!=null&&l.updateFn?this.state=this.options.updateFn(this.prevState)(r):v1(r)?this.state=r(this.prevState):this.state=r,(u=(o=this.options)==null?void 0:o.onUpdate)==null||u.call(o),Gb(this)}}const Aa="__TSR_index",Ag="popstate",Tg="beforeunload";function x1(n){let r=n.getLocation();const l=new Set,o=d=>{r=n.getLocation(),l.forEach(m=>m({location:r,action:d}))},u=d=>{n.notifyOnIndexChange??!0?o(d):r=n.getLocation()},f=async({task:d,navigateOpts:m,...g})=>{if(m?.ignoreBlocker??!1){d();return}const v=n.getBlockers?.()??[],b=g.type==="PUSH"||g.type==="REPLACE";if(typeof document<"u"&&v.length&&b)for(const S of v){const w=vl(g.path,g.state);if(await S.blockerFn({currentLocation:r,nextLocation:w,action:g.type})){n.onBlocked?.();return}}d()};return{get location(){return r},get length(){return n.getLength()},subscribers:l,subscribe:d=>(l.add(d),()=>{l.delete(d)}),push:(d,m,g)=>{const p=r.state[Aa];m=Mg(p+1,m),f({task:()=>{n.pushState(d,m),o({type:"PUSH"})},navigateOpts:g,type:"PUSH",path:d,state:m})},replace:(d,m,g)=>{const p=r.state[Aa];m=Mg(p,m),f({task:()=>{n.replaceState(d,m),o({type:"REPLACE"})},navigateOpts:g,type:"REPLACE",path:d,state:m})},go:(d,m)=>{f({task:()=>{n.go(d),u({type:"GO",index:d})},navigateOpts:m,type:"GO"})},back:d=>{f({task:()=>{n.back(d?.ignoreBlocker??!1),u({type:"BACK"})},navigateOpts:d,type:"BACK"})},forward:d=>{f({task:()=>{n.forward(d?.ignoreBlocker??!1),u({type:"FORWARD"})},navigateOpts:d,type:"FORWARD"})},canGoBack:()=>r.state[Aa]!==0,createHref:d=>n.createHref(d),block:d=>{if(!n.setBlockers)return()=>{};const m=n.getBlockers?.()??[];return n.setBlockers([...m,d]),()=>{const g=n.getBlockers?.()??[];n.setBlockers?.(g.filter(p=>p!==d))}},flush:()=>n.flush?.(),destroy:()=>n.destroy?.(),notify:o}}function Mg(n,r){r||(r={});const l=Wf();return{...r,key:l,__TSR_key:l,[Aa]:n}}function Hb(n){const r=n?.window??(typeof document<"u"?window:void 0),l=r.history.pushState,o=r.history.replaceState;let u=[];const f=()=>u,d=G=>u=G,m=n?.createHref??(G=>G),g=n?.parseLocation??(()=>vl(`${r.location.pathname}${r.location.search}${r.location.hash}`,r.history.state));if(!r.history.state?.__TSR_key&&!r.history.state?.key){const G=Wf();r.history.replaceState({[Aa]:0,key:G,__TSR_key:G},"")}let p=g(),v,b=!1,S=!1,w=!1,C=!1;const _=()=>p;let R,L;const H=()=>{R&&(z._ignoreSubscribers=!0,(R.isPush?r.history.pushState:r.history.replaceState)(R.state,"",R.href),z._ignoreSubscribers=!1,R=void 0,L=void 0,v=void 0)},U=(G,Q,ee)=>{const I=m(Q);L||(v=p),p=vl(Q,ee),R={href:I,state:ee,isPush:R?.isPush||G==="push"},L||(L=Promise.resolve().then(()=>H()))},$=G=>{p=g(),z.notify({type:G})},B=async()=>{if(S){S=!1;return}const G=g(),Q=G.state[Aa]-p.state[Aa],ee=Q===1,I=Q===-1,x=!ee&&!I||b;b=!1;const ne=x?"GO":I?"BACK":"FORWARD",Z=x?{type:"GO",index:Q}:{type:I?"BACK":"FORWARD"};if(w)w=!1;else{const re=f();if(typeof document<"u"&&re.length){for(const D of re)if(await D.blockerFn({currentLocation:p,nextLocation:G,action:ne})){S=!0,r.history.go(1),z.notify(Z);return}}}p=g(),z.notify(Z)},q=G=>{if(C){C=!1;return}let Q=!1;const ee=f();if(typeof document<"u"&&ee.length)for(const I of ee){const x=I.enableBeforeUnload??!0;if(x===!0){Q=!0;break}if(typeof x=="function"&&x()===!0){Q=!0;break}}if(Q)return G.preventDefault(),G.returnValue=""},z=x1({getLocation:_,getLength:()=>r.history.length,pushState:(G,Q)=>U("push",G,Q),replaceState:(G,Q)=>U("replace",G,Q),back:G=>(G&&(w=!0),C=!0,r.history.back()),forward:G=>{G&&(w=!0),C=!0,r.history.forward()},go:G=>{b=!0,r.history.go(G)},createHref:G=>m(G),flush:H,destroy:()=>{r.history.pushState=l,r.history.replaceState=o,r.removeEventListener(Tg,q,{capture:!0}),r.removeEventListener(Ag,B)},onBlocked:()=>{v&&p!==v&&(p=v)},getBlockers:f,setBlockers:d,notifyOnIndexChange:!1});return r.addEventListener(Tg,q,{capture:!0}),r.addEventListener(Ag,B),r.history.pushState=function(...G){const Q=l.apply(r.history,G);return z._ignoreSubscribers||$("PUSH"),Q},r.history.replaceState=function(...G){const Q=o.apply(r.history,G);return z._ignoreSubscribers||$("REPLACE"),Q},z}function w1(n){const r=typeof document<"u"?window:void 0;return Hb({window:r,parseLocation:()=>{const l=r.location.hash.split("#").slice(1),o=l[0]??"/",u=r.location.search,f=l.slice(1),d=f.length===0?"":`#${f.join("#")}`,m=`${o}${u}${d}`;return vl(m,r.history.state)},createHref:l=>`${r.location.pathname}${r.location.search}#${l}`})}function vl(n,r){const l=n.indexOf("#"),o=n.indexOf("?"),u=Wf();return{href:n,pathname:n.substring(0,l>0?o>0?Math.min(l,o):l:o>0?o:n.length),hash:l>-1?n.substring(l):"",search:o>-1?n.slice(o,l===-1?void 0:l):"",state:r||{[Aa]:0,key:u,__TSR_key:u}}}function Wf(){return(Math.random()+1).toString(36).substring(7)}function gs(n){return n[n.length-1]}function _1(n){return typeof n=="function"}function _a(n,r){return _1(n)?n(r):n}const C1=Object.prototype.hasOwnProperty;function rn(n,r){if(n===r)return n;const l=r,o=qg(n)&&qg(l);if(!o&&!(bs(n)&&bs(l)))return l;const u=o?n:Rg(n);if(!u)return l;const f=o?l:Rg(l);if(!f)return l;const d=u.length,m=f.length,g=o?new Array(m):{};let p=0;for(let v=0;v<m;v++){const b=o?v:f[v],S=n[b],w=l[b];if(S===w){g[b]=S,(o?v<d:C1.call(n,b))&&p++;continue}if(S===null||w===null||typeof S!="object"||typeof w!="object"){g[b]=w;continue}const C=rn(S,w);g[b]=C,C===S&&p++}return d===m&&p===d?n:g}function Rg(n){const r=[],l=Object.getOwnPropertyNames(n);for(const u of l){if(!Object.prototype.propertyIsEnumerable.call(n,u))return!1;r.push(u)}const o=Object.getOwnPropertySymbols(n);for(const u of o){if(!Object.prototype.propertyIsEnumerable.call(n,u))return!1;r.push(u)}return r}function bs(n){if(!Eg(n))return!1;const r=n.constructor;if(typeof r>"u")return!0;const l=r.prototype;return!(!Eg(l)||!l.hasOwnProperty("isPrototypeOf"))}function Eg(n){return Object.prototype.toString.call(n)==="[object Object]"}function qg(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Wa(n,r,l){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;for(let o=0,u=n.length;o<u;o++)if(!Wa(n[o],r[o],l))return!1;return!0}if(bs(n)&&bs(r)){const o=l?.ignoreUndefined??!0;if(l?.partial){for(const d in r)if((!o||r[d]!==void 0)&&!Wa(n[d],r[d],l))return!1;return!0}let u=0;if(!o)u=Object.keys(n).length;else for(const d in n)n[d]!==void 0&&u++;let f=0;for(const d in r)if((!o||r[d]!==void 0)&&(f++,f>u||!Wa(n[d],r[d],l)))return!1;return u===f}return!1}function rr(n){let r,l;const o=new Promise((u,f)=>{r=u,l=f});return o.status="pending",o.resolve=u=>{o.status="resolved",o.value=u,r(u),n?.(u)},o.reject=u=>{o.status="rejected",l(u)},o}function A1(n){return typeof n?.message!="string"?!1:n.message.startsWith("Failed to fetch dynamically imported module")||n.message.startsWith("error loading dynamically imported module")||n.message.startsWith("Importing a module script failed")}function Ta(n){return!!(n&&typeof n=="object"&&typeof n.then=="function")}function Lg(n){try{return decodeURI(n)}catch{return n.replaceAll(/%[0-9A-F]{2}/gi,r=>{try{return decodeURI(r)}catch{return r}})}}function Og(n,r){if(!n)return n;const l=/%25|%5C/gi;let o=0,u="",f;for(;(f=l.exec(n))!==null;)u+=Lg(n.slice(o,f.index))+f[0],o=l.lastIndex;return u+Lg(o?n.slice(o):n)}var T1="Invariant failed";function Qn(n,r){if(!n)throw new Error(T1)}function ys(n){const r=new Map;let l,o;const u=f=>{f.next&&(f.prev?(f.prev.next=f.next,f.next.prev=f.prev,f.next=void 0,o&&(o.next=f,f.prev=o)):(f.next.prev=void 0,l=f.next,f.next=void 0,o&&(f.prev=o,o.next=f)),o=f)};return{get(f){const d=r.get(f);if(d)return u(d),d.value},set(f,d){if(r.size>=n&&l){const g=l;r.delete(g.key),g.next&&(l=g.next,g.next.prev=void 0),g===o&&(o=void 0)}const m=r.get(f);if(m)m.value=d,u(m);else{const g={key:f,value:d,prev:o};o&&(o.next=g),o=g,l||(l=g),r.set(f,g)}},clear(){r.clear(),l=void 0,o=void 0}}}const lr=0,ti=1,ni=2,Sl=3,M1=/^([^{]*)\{\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,R1=/^([^{]*)\{-\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,E1=/^([^{]*)\{\$\}([^}]*)$/;function If(n,r,l=new Uint16Array(6)){const o=n.indexOf("/",r),u=o===-1?n.length:o,f=n.substring(r,u);if(!f||!f.includes("$"))return l[0]=lr,l[1]=r,l[2]=r,l[3]=u,l[4]=u,l[5]=u,l;if(f==="$"){const p=n.length;return l[0]=ni,l[1]=r,l[2]=r,l[3]=p,l[4]=p,l[5]=p,l}if(f.charCodeAt(0)===36)return l[0]=ti,l[1]=r,l[2]=r+1,l[3]=u,l[4]=u,l[5]=u,l;const d=f.match(E1);if(d){const v=d[1].length;return l[0]=ni,l[1]=r+v,l[2]=r+v+1,l[3]=r+v+2,l[4]=r+v+3,l[5]=n.length,l}const m=f.match(R1);if(m){const p=m[1],v=m[2],b=m[3],S=p.length;return l[0]=Sl,l[1]=r+S,l[2]=r+S+3,l[3]=r+S+3+v.length,l[4]=u-b.length,l[5]=u,l}const g=f.match(M1);if(g){const p=g[1],v=g[2],b=g[3],S=p.length;return l[0]=ti,l[1]=r+S,l[2]=r+S+2,l[3]=r+S+2+v.length,l[4]=u-b.length,l[5]=u,l}return l[0]=lr,l[1]=r,l[2]=r,l[3]=u,l[4]=u,l[5]=u,l}function Ms(n,r,l,o,u,f,d){d?.(l);let m=o;{const g=l.fullPath??l.from,p=g.length,v=l.options?.caseSensitive??n;for(;m<p;){const b=If(g,m,r);let S;const w=m,C=b[5];switch(m=C+1,f++,b[0]){case lr:{const R=g.substring(b[2],b[3]);if(v){const L=u.static?.get(R);if(L)S=L;else{u.static??=new Map;const H=xl(l.fullPath??l.from);H.parent=u,H.depth=f,S=H,u.static.set(R,H)}}else{const L=R.toLowerCase(),H=u.staticInsensitive?.get(L);if(H)S=H;else{u.staticInsensitive??=new Map;const U=xl(l.fullPath??l.from);U.parent=u,U.depth=f,S=U,u.staticInsensitive.set(L,U)}}break}case ti:{const R=g.substring(w,b[1]),L=g.substring(b[4],C),H=v&&!!(R||L),U=R?H?R:R.toLowerCase():void 0,$=L?H?L:L.toLowerCase():void 0,B=u.dynamic?.find(q=>q.caseSensitive===H&&q.prefix===U&&q.suffix===$);if(B)S=B;else{const q=uf(ti,l.fullPath??l.from,H,U,$);S=q,q.depth=f,q.parent=u,u.dynamic??=[],u.dynamic.push(q)}break}case Sl:{const R=g.substring(w,b[1]),L=g.substring(b[4],C),H=v&&!!(R||L),U=R?H?R:R.toLowerCase():void 0,$=L?H?L:L.toLowerCase():void 0,B=u.optional?.find(q=>q.caseSensitive===H&&q.prefix===U&&q.suffix===$);if(B)S=B;else{const q=uf(Sl,l.fullPath??l.from,H,U,$);S=q,q.parent=u,q.depth=f,u.optional??=[],u.optional.push(q)}break}case ni:{const R=g.substring(w,b[1]),L=g.substring(b[4],C),H=v&&!!(R||L),U=R?H?R:R.toLowerCase():void 0,$=L?H?L:L.toLowerCase():void 0,B=uf(ni,l.fullPath??l.from,H,U,$);S=B,B.parent=u,B.depth=f,u.wildcard??=[],u.wildcard.push(B)}}u=S}if((l.path||!l.children)&&!l.isRoot){const b=g.endsWith("/");b||(u.notFound=l),(!u.route||!u.isIndex&&b)&&(u.route=l,u.fullPath=l.fullPath??l.from),u.isIndex||=b}}if(l.children)for(const g of l.children)Ms(n,r,g,m,u,f,d)}function sf(n,r){if(n.prefix&&r.prefix&&n.prefix!==r.prefix){if(n.prefix.startsWith(r.prefix))return-1;if(r.prefix.startsWith(n.prefix))return 1}if(n.suffix&&r.suffix&&n.suffix!==r.suffix){if(n.suffix.endsWith(r.suffix))return-1;if(r.suffix.endsWith(n.suffix))return 1}return n.prefix&&!r.prefix?-1:!n.prefix&&r.prefix?1:n.suffix&&!r.suffix?-1:!n.suffix&&r.suffix?1:n.caseSensitive&&!r.caseSensitive?-1:!n.caseSensitive&&r.caseSensitive?1:0}function Fa(n){if(n.static)for(const r of n.static.values())Fa(r);if(n.staticInsensitive)for(const r of n.staticInsensitive.values())Fa(r);if(n.dynamic?.length){n.dynamic.sort(sf);for(const r of n.dynamic)Fa(r)}if(n.optional?.length){n.optional.sort(sf);for(const r of n.optional)Fa(r)}if(n.wildcard?.length){n.wildcard.sort(sf);for(const r of n.wildcard)Fa(r)}}function xl(n){return{kind:lr,depth:0,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:n,parent:null,isIndex:!1,notFound:null}}function uf(n,r,l,o,u){return{kind:n,depth:0,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:r,parent:null,isIndex:!1,notFound:null,caseSensitive:l,prefix:o,suffix:u}}function q1(n,r){const l=xl("/"),o=new Uint16Array(6);for(const u of n)Ms(!1,o,u,1,l,0);Fa(l),r.masksTree=l,r.flatCache=ys(1e3)}function L1(n,r){n||="/";const l=r.flatCache.get(n);if(l)return l;const o=ed(n,r.masksTree);return r.flatCache.set(n,o),o}function O1(n,r,l,o,u){n||="/",o||="/";const f=r?`case\0${n}`:n;let d=u.singleCache.get(f);if(!d){d=xl("/");const m=new Uint16Array(6);Ms(r,m,{from:n},1,d,0),u.singleCache.set(f,d)}return ed(o,d,l)}function k1(n,r,l=!1){const o=l?n:`nofuzz\0${n}`,u=r.matchCache.get(o);if(u!==void 0)return u;n||="/";const f=ed(n,r.segmentTree,l);return f&&(f.branch=N1(f.route)),r.matchCache.set(o,f),f}function z1(n){return n==="/"?n:n.replace(/\/{1,}$/,"")}function D1(n,r=!1,l){const o=xl(n.fullPath),u=new Uint16Array(6),f={},d={};let m=0;return Ms(r,u,n,1,o,0,p=>{if(l?.(p,m),Qn(!(p.id in f),`Duplicate routes found with id: ${String(p.id)}`),f[p.id]=p,m!==0&&p.path){const v=z1(p.fullPath);(!d[v]||p.fullPath.endsWith("/"))&&(d[v]=p)}m++}),Fa(o),{processedTree:{segmentTree:o,singleCache:ys(1e3),matchCache:ys(1e3),flatCache:null,masksTree:null},routesById:f,routesByPath:d}}function ed(n,r,l=!1){const o=n.split("/"),u=U1(n,o,r,l);if(!u)return null;const f=B1(n,o,u),d="**"in u;return d&&(f["**"]=u["**"]),{route:d?u.node.notFound??u.node.route:u.node.route,params:f}}function B1(n,r,l){const o=j1(l.node);let u=null;const f={};for(let d=0,m=0,g=0;m<o.length;d++,m++,g++){const p=o[m],v=r[d],b=g;if(v&&(g+=v.length),p.kind===ti){u??=l.node.fullPath.split("/");const S=u[m],w=p.prefix?.length??0;if(S.charCodeAt(w)===123){const _=p.suffix?.length??0,R=S.substring(w+2,S.length-_-1),L=v.substring(w,v.length-_);f[R]=decodeURIComponent(L)}else{const _=S.substring(1);f[_]=decodeURIComponent(v)}}else if(p.kind===Sl){if(l.skipped&1<<m){d--;continue}u??=l.node.fullPath.split("/");const S=u[m],w=p.prefix?.length??0,C=p.suffix?.length??0,_=S.substring(w+3,S.length-C-1),R=p.suffix||p.prefix?v.substring(w,v.length-C):v;R&&(f[_]=decodeURIComponent(R))}else if(p.kind===ni){const S=p,w=n.substring(b+(S.prefix?.length??0),n.length-(S.suffix?.length??0)),C=decodeURIComponent(w);f["*"]=C,f._splat=C;break}}return f}function N1(n){const r=[n];for(;n.parentRoute;)n=n.parentRoute,r.push(n);return r.reverse(),r}function j1(n){const r=Array(n.depth+1);do r[n.depth]=n,n=n.parent;while(n);return r}function U1(n,r,l,o){const u=!gs(r),f=u&&n!=="/",d=r.length-(u?1:0),m=[{node:l,index:1,skipped:0,depth:1,statics:1,dynamics:0,optionals:0}];let g=null,p=null,v=null;for(;m.length;){const b=m.pop();let{node:S,index:w,skipped:C,depth:_,statics:R,dynamics:L,optionals:H}=b;o&&S.notFound&&es(p,b)&&(p=b);const U=w===d;if(U){if(S.route&&(!f||S.isIndex)&&(es(v,b)&&(v=b),R===d&&S.isIndex))return v;if(!S.optional&&!S.wildcard)continue}const $=U?void 0:r[w];let B;if(S.wildcard&&es(g,b))for(const q of S.wildcard){const{prefix:z,suffix:G}=q;if(!(z&&(U||!(q.caseSensitive?$:B??=$.toLowerCase()).startsWith(z)))){if(G){if(U)continue;const Q=r.slice(w).join("/").slice(-G.length);if((q.caseSensitive?Q:Q.toLowerCase())!==G)continue}g={node:q,index:w,skipped:C,depth:_,statics:R,dynamics:L,optionals:H};break}}if(S.optional){const q=C|1<<_,z=_+1;for(let G=S.optional.length-1;G>=0;G--){const Q=S.optional[G];m.push({node:Q,index:w,skipped:q,depth:z,statics:R,dynamics:L,optionals:H})}if(!U)for(let G=S.optional.length-1;G>=0;G--){const Q=S.optional[G],{prefix:ee,suffix:I}=Q;if(ee||I){const x=Q.caseSensitive?$:B??=$.toLowerCase();if(ee&&!x.startsWith(ee)||I&&!x.endsWith(I))continue}m.push({node:Q,index:w+1,skipped:C,depth:z,statics:R,dynamics:L,optionals:H+1})}}if(!U&&S.dynamic&&$)for(let q=S.dynamic.length-1;q>=0;q--){const z=S.dynamic[q],{prefix:G,suffix:Q}=z;if(G||Q){const ee=z.caseSensitive?$:B??=$.toLowerCase();if(G&&!ee.startsWith(G)||Q&&!ee.endsWith(Q))continue}m.push({node:z,index:w+1,skipped:C,depth:_+1,statics:R,dynamics:L+1,optionals:H})}if(!U&&S.staticInsensitive){const q=S.staticInsensitive.get(B??=$.toLowerCase());q&&m.push({node:q,index:w+1,skipped:C,depth:_+1,statics:R+1,dynamics:L,optionals:H})}if(!U&&S.static){const q=S.static.get($);q&&m.push({node:q,index:w+1,skipped:C,depth:_+1,statics:R+1,dynamics:L,optionals:H})}}if(v&&g)return es(g,v)?v:g;if(v)return v;if(g)return g;if(o&&p){let b=p.index;for(let w=0;w<p.index;w++)b+=r[w].length;const S=b===n.length?"/":n.slice(b);return{node:p.node,skipped:p.skipped,"**":decodeURIComponent(S)}}return null}function es(n,r){return n?r.statics>n.statics||r.statics===n.statics&&(r.dynamics>n.dynamics||r.dynamics===n.dynamics&&(r.optionals>n.optionals||r.optionals===n.optionals&&(r.node.isIndex>n.node.isIndex||r.node.isIndex===n.node.isIndex&&r.depth>n.depth))):!0}function os(n){return td(n.filter(r=>r!==void 0).join("/"))}function td(n){return n.replace(/\/{2,}/g,"/")}function $b(n){return n==="/"?n:n.replace(/^\/{1,}/,"")}function Ia(n){const r=n.length;return r>1&&n[r-1]==="/"?n.replace(/\/{1,}$/,""):n}function ss(n){return Ia($b(n))}function vs(n,r){return n?.endsWith("/")&&n!=="/"&&n!==`${r}/`?n.slice(0,-1):n}function G1(n,r,l){return vs(n,l)===vs(r,l)}function H1({base:n,to:r,trailingSlash:l="never",cache:o}){const u=r.startsWith("/"),f=!u&&r===".";let d;if(o){d=u?r:f?n:n+"\0"+r;const b=o.get(d);if(b)return b}let m;if(f)m=n.split("/");else if(u)m=r.split("/");else{for(m=n.split("/");m.length>1&&gs(m)==="";)m.pop();const b=r.split("/");for(let S=0,w=b.length;S<w;S++){const C=b[S];C===""?S?S===w-1&&m.push(C):m=[C]:C===".."?m.pop():C==="."||m.push(C)}}m.length>1&&(gs(m)===""?l==="never"&&m.pop():l==="always"&&m.push(""));let g,p="";for(let b=0;b<m.length;b++){b>0&&(p+="/");const S=m[b];if(!S)continue;g=If(S,0,g);const w=g[0];if(w===lr){p+=S;continue}const C=g[5],_=S.substring(0,g[1]),R=S.substring(g[4],C),L=S.substring(g[2],g[3]);w===ti?p+=_||R?`${_}{$${L}}${R}`:`$${L}`:w===ni?p+=_||R?`${_}{$}${R}`:"$":p+=`${_}{-$${L}}${R}`}p=td(p);const v=p||"/";return d&&o&&o.set(d,v),v}function cf(n,r,l){const o=r[n];return typeof o!="string"?o:n==="_splat"?encodeURI(o):$1(o,l)}function ff({path:n,params:r,decodeCharMap:l}){let o=!1;const u={};if(!n||n==="/")return{interpolatedPath:"/",usedParams:u,isMissingParams:o};if(!n.includes("$"))return{interpolatedPath:n,usedParams:u,isMissingParams:o};const f=n.length;let d=0,m,g="";for(;d<f;){const v=d;m=If(n,v,m);const b=m[5];if(d=b+1,v===b)continue;const S=m[0];if(S===lr){g+="/"+n.substring(v,b);continue}if(S===ni){const w=r._splat;u._splat=w,u["*"]=w;const C=n.substring(v,m[1]),_=n.substring(m[4],b);if(!w){o=!0,(C||_)&&(g+="/"+C+_);continue}const R=cf("_splat",r,l);g+="/"+C+R+_;continue}if(S===ti){const w=n.substring(m[2],m[3]);!o&&!(w in r)&&(o=!0),u[w]=r[w];const C=n.substring(v,m[1]),_=n.substring(m[4],b),R=cf(w,r,l)??"undefined";g+="/"+C+R+_;continue}if(S===Sl){const w=n.substring(m[2],m[3]),C=r[w];if(C==null)continue;u[w]=C;const _=n.substring(v,m[1]),R=n.substring(m[4],b),L=cf(w,r,l)??"";g+="/"+_+L+R;continue}}return n.endsWith("/")&&(g+="/"),{usedParams:u,interpolatedPath:g||"/",isMissingParams:o}}function $1(n,r){let l=encodeURIComponent(n);if(r)for(const[o,u]of r)l=l.replaceAll(o,u);return l}function on(n){return!!n?.isNotFound}function P1(){try{if(typeof window<"u"&&typeof window.sessionStorage=="object")return window.sessionStorage}catch{}}const Ss="tsr-scroll-restoration-v1_3",V1=(n,r)=>{let l;return(...o)=>{l||(l=setTimeout(()=>{n(...o),l=null},r))}};function Y1(){const n=P1();if(!n)return null;const r=n.getItem(Ss);let l=r?JSON.parse(r):{};return{state:l,set:o=>(l=_a(o,l)||l,n.setItem(Ss,JSON.stringify(l)))}}const ts=Y1(),Nf=n=>n.state.__TSR_key||n.href;function X1(n){const r=[];let l;for(;l=n.parentNode;)r.push(`${n.tagName}:nth-child(${Array.prototype.indexOf.call(l.children,n)+1})`),n=l;return`${r.reverse().join(" > ")}`.toLowerCase()}let xs=!1;function Pb({storageKey:n,key:r,behavior:l,shouldScrollRestoration:o,scrollToTopSelectors:u,location:f}){let d;try{d=JSON.parse(sessionStorage.getItem(n)||"{}")}catch(p){console.error(p);return}const m=r||window.history.state?.__TSR_key,g=d[m];xs=!0;e:{if(o&&g&&Object.keys(g).length>0){for(const b in g){const S=g[b];if(b==="window")window.scrollTo({top:S.scrollY,left:S.scrollX,behavior:l});else if(b){const w=document.querySelector(b);w&&(w.scrollLeft=S.scrollX,w.scrollTop=S.scrollY)}}break e}const p=(f??window.location).hash.split("#",2)[1];if(p){const b=window.history.state?.__hashScrollIntoViewOptions??!0;if(b){const S=document.getElementById(p);S&&S.scrollIntoView(b)}break e}const v={top:0,left:0,behavior:l};if(window.scrollTo(v),u)for(const b of u){if(b==="window")continue;const S=typeof b=="function"?b():document.querySelector(b);S&&S.scrollTo(v)}}xs=!1}function J1(n,r){if(!ts&&!n.isServer||((n.options.scrollRestoration??!1)&&(n.isScrollRestoring=!0),n.isServer||n.isScrollRestorationSetup||!ts))return;n.isScrollRestorationSetup=!0,xs=!1;const o=n.options.getScrollRestorationKey||Nf;window.history.scrollRestoration="manual";const u=f=>{if(xs||!n.isScrollRestoring)return;let d="";if(f.target===document||f.target===window)d="window";else{const g=f.target.getAttribute("data-scroll-restoration-id");g?d=`[data-scroll-restoration-id="${g}"]`:d=X1(f.target)}const m=o(n.state.location);ts.set(g=>{const p=g[m]||={},v=p[d]||={};if(d==="window")v.scrollX=window.scrollX||0,v.scrollY=window.scrollY||0;else if(d){const b=document.querySelector(d);b&&(v.scrollX=b.scrollLeft||0,v.scrollY=b.scrollTop||0)}return g})};typeof document<"u"&&document.addEventListener("scroll",V1(u,100),!0),n.subscribe("onRendered",f=>{const d=o(f.toLocation);if(!n.resetNextScroll){n.resetNextScroll=!0;return}typeof n.options.scrollRestoration=="function"&&!n.options.scrollRestoration({location:n.latestLocation})||(Pb({storageKey:Ss,key:d,behavior:n.options.scrollRestorationBehavior,shouldScrollRestoration:n.isScrollRestoring,scrollToTopSelectors:n.options.scrollToTopSelectors,location:n.history.location}),n.isScrollRestoring&&ts.set(m=>(m[d]||={},m)))})}function K1(n){if(typeof document<"u"&&document.querySelector){const r=n.state.location.state.__hashScrollIntoViewOptions??!0;if(r&&n.state.location.hash!==""){const l=document.getElementById(n.state.location.hash);l&&l.scrollIntoView(r)}}}function Q1(n,r=String){const l=new URLSearchParams;for(const o in n){const u=n[o];u!==void 0&&l.set(o,r(u))}return l.toString()}function df(n){return n?n==="false"?!1:n==="true"?!0:+n*0===0&&+n+""===n?+n:n:""}function F1(n){const r=new URLSearchParams(n),l={};for(const[o,u]of r.entries()){const f=l[o];f==null?l[o]=df(u):Array.isArray(f)?f.push(df(u)):l[o]=[f,df(u)]}return l}const Z1=I1(JSON.parse),W1=eS(JSON.stringify,JSON.parse);function I1(n){return r=>{r[0]==="?"&&(r=r.substring(1));const l=F1(r);for(const o in l){const u=l[o];if(typeof u=="string")try{l[o]=n(u)}catch{}}return l}}function eS(n,r){const l=typeof r=="function";function o(u){if(typeof u=="object"&&u!==null)try{return n(u)}catch{}else if(l&&typeof u=="string")try{return r(u),n(u)}catch{}return u}return u=>{const f=Q1(u,o);return f?`?${f}`:""}}const Pt="__root__";function tS(n){if(n.statusCode=n.statusCode||n.code||307,!n.reloadDocument&&typeof n.href=="string")try{new URL(n.href),n.reloadDocument=!0}catch{}const r=new Headers(n.headers);n.href&&r.get("Location")===null&&r.set("Location",n.href);const l=new Response(null,{status:n.statusCode,headers:r});if(l.options=n,n.throw)throw l;return l}function mn(n){return n instanceof Response&&!!n.options}const us=n=>{if(!n.rendered)return n.rendered=!0,n.onReady?.()},Rs=(n,r)=>!!(n.preload&&!n.router.state.matches.some(l=>l.id===r)),Vb=(n,r)=>{const l=n.router.routesById[r.routeId??""]??n.router.routeTree;!l.options.notFoundComponent&&n.router.options?.defaultNotFoundComponent&&(l.options.notFoundComponent=n.router.options.defaultNotFoundComponent),Qn(l.options.notFoundComponent);const o=n.matches.find(u=>u.routeId===l.id);Qn(o,"Could not find match for route: "+l.id),n.updateMatch(o.id,u=>({...u,status:"notFound",error:r,isFetching:!1})),r.routerCode==="BEFORE_LOAD"&&l.parentRoute&&(r.routeId=l.parentRoute.id,Vb(n,r))},Ca=(n,r,l)=>{if(!(!mn(l)&&!on(l))){if(mn(l)&&l.redirectHandled&&!l.options.reloadDocument)throw l;if(r){r._nonReactive.beforeLoadPromise?.resolve(),r._nonReactive.loaderPromise?.resolve(),r._nonReactive.beforeLoadPromise=void 0,r._nonReactive.loaderPromise=void 0;const o=mn(l)?"redirected":"notFound";r._nonReactive.error=l,n.updateMatch(r.id,u=>({...u,status:o,isFetching:!1,error:l})),on(l)&&!l.routeId&&(l.routeId=r.routeId),r._nonReactive.loadPromise?.resolve()}throw mn(l)?(n.rendered=!0,l.options._fromLocation=n.location,l.redirectHandled=!0,l=n.router.resolveRedirect(l),l):(Vb(n,l),l)}},Yb=(n,r)=>{const l=n.router.getMatch(r);return!!(!n.router.isServer&&l._nonReactive.dehydrated||n.router.isServer&&l.ssr===!1)},rl=(n,r,l,o)=>{const{id:u,routeId:f}=n.matches[r],d=n.router.looseRoutesById[f];if(l instanceof Promise)throw l;l.routerCode=o,n.firstBadMatchIndex??=r,Ca(n,n.router.getMatch(u),l);try{d.options.onError?.(l)}catch(m){l=m,Ca(n,n.router.getMatch(u),l)}n.updateMatch(u,m=>(m._nonReactive.beforeLoadPromise?.resolve(),m._nonReactive.beforeLoadPromise=void 0,m._nonReactive.loadPromise?.resolve(),{...m,error:l,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController}))},nS=(n,r,l,o)=>{const u=n.router.getMatch(r),f=n.matches[l-1]?.id,d=f?n.router.getMatch(f):void 0;if(n.router.isShell()){u.ssr=o.id===Pt;return}if(d?.ssr===!1){u.ssr=!1;return}const m=w=>w===!0&&d?.ssr==="data-only"?"data-only":w,g=n.router.options.defaultSsr??!0;if(o.options.ssr===void 0){u.ssr=m(g);return}if(typeof o.options.ssr!="function"){u.ssr=m(o.options.ssr);return}const{search:p,params:v}=u,b={search:ns(p,u.searchError),params:ns(v,u.paramsError),location:n.location,matches:n.matches.map(w=>({index:w.index,pathname:w.pathname,fullPath:w.fullPath,staticData:w.staticData,id:w.id,routeId:w.routeId,search:ns(w.search,w.searchError),params:ns(w.params,w.paramsError),ssr:w.ssr}))},S=o.options.ssr(b);if(Ta(S))return S.then(w=>{u.ssr=m(w??g)});u.ssr=m(S??g)},Xb=(n,r,l,o)=>{if(o._nonReactive.pendingTimeout!==void 0)return;const u=l.options.pendingMs??n.router.options.defaultPendingMs;if(!!(n.onReady&&!n.router.isServer&&!Rs(n,r)&&(l.options.loader||l.options.beforeLoad||Qb(l))&&typeof u=="number"&&u!==1/0&&(l.options.pendingComponent??n.router.options?.defaultPendingComponent))){const d=setTimeout(()=>{us(n)},u);o._nonReactive.pendingTimeout=d}},aS=(n,r,l)=>{const o=n.router.getMatch(r);if(!o._nonReactive.beforeLoadPromise&&!o._nonReactive.loaderPromise)return;Xb(n,r,l,o);const u=()=>{const f=n.router.getMatch(r);f.preload&&(f.status==="redirected"||f.status==="notFound")&&Ca(n,f,f.error)};return o._nonReactive.beforeLoadPromise?o._nonReactive.beforeLoadPromise.then(u):u()},iS=(n,r,l,o)=>{const u=n.router.getMatch(r),f=u._nonReactive.loadPromise;u._nonReactive.loadPromise=rr(()=>{f?.resolve()});const{paramsError:d,searchError:m}=u;d&&rl(n,l,d,"PARSE_PARAMS"),m&&rl(n,l,m,"VALIDATE_SEARCH"),Xb(n,r,o,u);const g=new AbortController,p=n.matches[l-1]?.id,S={...(p?n.router.getMatch(p):void 0)?.context??n.router.options.context??void 0,...u.__routeContext};let w=!1;const C=()=>{w||(w=!0,n.updateMatch(r,z=>({...z,isFetching:"beforeLoad",fetchCount:z.fetchCount+1,abortController:g,context:S})))},_=()=>{u._nonReactive.beforeLoadPromise?.resolve(),u._nonReactive.beforeLoadPromise=void 0,n.updateMatch(r,z=>({...z,isFetching:!1}))};if(!o.options.beforeLoad){pl(()=>{C(),_()});return}u._nonReactive.beforeLoadPromise=rr();const{search:R,params:L,cause:H}=u,U=Rs(n,r),$={search:R,abortController:g,params:L,preload:U,context:S,location:n.location,navigate:z=>n.router.navigate({...z,_fromLocation:n.location}),buildLocation:n.router.buildLocation,cause:U?"preload":H,matches:n.matches,...n.router.options.additionalContext},B=z=>{if(z===void 0){pl(()=>{C(),_()});return}(mn(z)||on(z))&&(C(),rl(n,l,z,"BEFORE_LOAD")),pl(()=>{C(),n.updateMatch(r,G=>({...G,__beforeLoadContext:z,context:{...G.context,...z}})),_()})};let q;try{if(q=o.options.beforeLoad($),Ta(q))return C(),q.catch(z=>{rl(n,l,z,"BEFORE_LOAD")}).then(B)}catch(z){C(),rl(n,l,z,"BEFORE_LOAD")}B(q)},rS=(n,r)=>{const{id:l,routeId:o}=n.matches[r],u=n.router.looseRoutesById[o],f=()=>{if(n.router.isServer){const g=nS(n,l,r,u);if(Ta(g))return g.then(m)}return m()},d=()=>iS(n,l,r,u),m=()=>{if(Yb(n,l))return;const g=aS(n,l,u);return Ta(g)?g.then(d):d()};return f()},gl=(n,r,l)=>{const o=n.router.getMatch(r);if(!o||!l.options.head&&!l.options.scripts&&!l.options.headers)return;const u={matches:n.matches,match:o,params:o.params,loaderData:o.loaderData};return Promise.all([l.options.head?.(u),l.options.scripts?.(u),l.options.headers?.(u)]).then(([f,d,m])=>{const g=f?.meta,p=f?.links,v=f?.scripts,b=f?.styles;return{meta:g,links:p,headScripts:v,headers:m,scripts:d,styles:b}})},Jb=(n,r,l,o)=>{const u=n.matchPromises[l-1],{params:f,loaderDeps:d,abortController:m,cause:g}=n.router.getMatch(r);let p=n.router.options.context??{};for(let b=0;b<=l;b++){const S=n.matches[b];if(!S)continue;const w=n.router.getMatch(S.id);w&&(p={...p,...w.__routeContext??{},...w.__beforeLoadContext??{}})}const v=Rs(n,r);return{params:f,deps:d,preload:!!v,parentMatchPromise:u,abortController:m,context:p,location:n.location,navigate:b=>n.router.navigate({...b,_fromLocation:n.location}),cause:v?"preload":g,route:o,...n.router.options.additionalContext}},kg=async(n,r,l,o)=>{try{const u=n.router.getMatch(r);try{(!n.router.isServer||u.ssr===!0)&&Kb(o);const f=o.options.loader?.(Jb(n,r,l,o)),d=o.options.loader&&Ta(f);if(!!(d||o._lazyPromise||o._componentsPromise||o.options.head||o.options.scripts||o.options.headers||u._nonReactive.minPendingPromise)&&n.updateMatch(r,b=>({...b,isFetching:"loader"})),o.options.loader){const b=d?await f:f;Ca(n,n.router.getMatch(r),b),b!==void 0&&n.updateMatch(r,S=>({...S,loaderData:b}))}o._lazyPromise&&await o._lazyPromise;const g=gl(n,r,o),p=g?await g:void 0,v=u._nonReactive.minPendingPromise;v&&await v,o._componentsPromise&&await o._componentsPromise,n.updateMatch(r,b=>({...b,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),...p}))}catch(f){let d=f;const m=u._nonReactive.minPendingPromise;m&&await m,on(f)&&await o.options.notFoundComponent?.preload?.(),Ca(n,n.router.getMatch(r),f);try{o.options.onError?.(f)}catch(v){d=v,Ca(n,n.router.getMatch(r),v)}const g=gl(n,r,o),p=g?await g:void 0;n.updateMatch(r,v=>({...v,error:d,status:"error",isFetching:!1,...p}))}}catch(u){const f=n.router.getMatch(r);if(f){const d=gl(n,r,o);if(d){const m=await d;n.updateMatch(r,g=>({...g,...m}))}f._nonReactive.loaderPromise=void 0}Ca(n,f,u)}},lS=async(n,r)=>{const{id:l,routeId:o}=n.matches[r];let u=!1,f=!1;const d=n.router.looseRoutesById[o];if(Yb(n,l)){if(n.router.isServer){const p=gl(n,l,d);if(p){const v=await p;n.updateMatch(l,b=>({...b,...v}))}return n.router.getMatch(l)}}else{const p=n.router.getMatch(l);if(p._nonReactive.loaderPromise){if(p.status==="success"&&!n.sync&&!p.preload)return p;await p._nonReactive.loaderPromise;const v=n.router.getMatch(l),b=v._nonReactive.error||v.error;b&&Ca(n,v,b)}else{const v=Date.now()-p.updatedAt,b=Rs(n,l),S=b?d.options.preloadStaleTime??n.router.options.defaultPreloadStaleTime??3e4:d.options.staleTime??n.router.options.defaultStaleTime??0,w=d.options.shouldReload,C=typeof w=="function"?w(Jb(n,l,r,d)):w,_=!!b&&!n.router.state.matches.some(U=>U.id===l),R=n.router.getMatch(l);R._nonReactive.loaderPromise=rr(),_!==R.preload&&n.updateMatch(l,U=>({...U,preload:_}));const{status:L,invalid:H}=R;if(u=L==="success"&&(H||(C??v>S)),!(b&&d.options.preload===!1))if(u&&!n.sync)f=!0,(async()=>{try{await kg(n,l,r,d);const U=n.router.getMatch(l);U._nonReactive.loaderPromise?.resolve(),U._nonReactive.loadPromise?.resolve(),U._nonReactive.loaderPromise=void 0}catch(U){mn(U)&&await n.router.navigate(U.options)}})();else if(L!=="success"||u&&n.sync)await kg(n,l,r,d);else{const U=gl(n,l,d);if(U){const $=await U;n.updateMatch(l,B=>({...B,...$}))}}}}const m=n.router.getMatch(l);f||(m._nonReactive.loaderPromise?.resolve(),m._nonReactive.loadPromise?.resolve()),clearTimeout(m._nonReactive.pendingTimeout),m._nonReactive.pendingTimeout=void 0,f||(m._nonReactive.loaderPromise=void 0),m._nonReactive.dehydrated=void 0;const g=f?m.isFetching:!1;return g!==m.isFetching||m.invalid!==!1?(n.updateMatch(l,p=>({...p,isFetching:g,invalid:!1})),n.router.getMatch(l)):m};async function zg(n){const r=Object.assign(n,{matchPromises:[]});!r.router.isServer&&r.router.state.matches.some(l=>l._forcePending)&&us(r);try{for(let u=0;u<r.matches.length;u++){const f=rS(r,u);Ta(f)&&await f}const l=r.firstBadMatchIndex??r.matches.length;for(let u=0;u<l;u++)r.matchPromises.push(lS(r,u));await Promise.all(r.matchPromises);const o=us(r);Ta(o)&&await o}catch(l){if(on(l)&&!r.preload){const o=us(r);throw Ta(o)&&await o,l}if(mn(l))throw l}return r.matches}async function Kb(n){if(!n._lazyLoaded&&n._lazyPromise===void 0&&(n.lazyFn?n._lazyPromise=n.lazyFn().then(r=>{const{id:l,...o}=r.options;Object.assign(n.options,o),n._lazyLoaded=!0,n._lazyPromise=void 0}):n._lazyLoaded=!0),!n._componentsLoaded&&n._componentsPromise===void 0){const r=()=>{const l=[];for(const o of Fb){const u=n.options[o]?.preload;u&&l.push(u())}if(l.length)return Promise.all(l).then(()=>{n._componentsLoaded=!0,n._componentsPromise=void 0});n._componentsLoaded=!0,n._componentsPromise=void 0};n._componentsPromise=n._lazyPromise?n._lazyPromise.then(r):r()}return n._componentsPromise}function ns(n,r){return r?{status:"error",error:r}:{status:"success",value:n}}function Qb(n){for(const r of Fb)if(n.options[r]?.preload)return!0;return!1}const Fb=["component","errorComponent","pendingComponent","notFoundComponent"];function oS(n){return{input:({url:r})=>{for(const l of n)r=Zb(l,r);return r},output:({url:r})=>{for(let l=n.length-1;l>=0;l--)r=Wb(n[l],r);return r}}}function sS(n){const r=ss(n.basepath),l=`/${r}`,o=`${l}/`,u=n.caseSensitive?l:l.toLowerCase(),f=n.caseSensitive?o:o.toLowerCase();return{input:({url:d})=>{const m=n.caseSensitive?d.pathname:d.pathname.toLowerCase();return m===u?d.pathname="/":m.startsWith(f)&&(d.pathname=d.pathname.slice(l.length)),d},output:({url:d})=>(d.pathname=os(["/",r,d.pathname]),d)}}function Zb(n,r){const l=n?.input?.({url:r});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return r}function Wb(n,r){const l=n?.output?.({url:r});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return r}function ei(n){const r=n.resolvedLocation,l=n.location,o=r?.pathname!==l.pathname,u=r?.href!==l.href,f=r?.hash!==l.hash;return{fromLocation:r,toLocation:l,pathChanged:o,hrefChanged:u,hashChanged:f}}class uS{constructor(r){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=l=>l(),this.update=l=>{l.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");const o=this.options,u=this.basepath??o?.basepath??"/",f=this.basepath===void 0,d=o?.rewrite;this.options={...o,...l},this.isServer=this.options.isServer??typeof document>"u",this.pathParamsDecodeCharMap=this.options.pathParamsAllowedCharacters?new Map(this.options.pathParamsAllowedCharacters.map(S=>[encodeURIComponent(S),S])):void 0,(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.isServer||(this.history=Hb())),this.origin=this.options.origin,this.origin||(!this.isServer&&window?.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),!this.__store&&this.latestLocation&&(this.__store=new S1(fS(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(S=>!["redirected"].includes(S.status))}}}),J1(this));let m=!1;const g=this.options.basepath??"/",p=this.options.rewrite;if(f||u!==g||d!==p){this.basepath=g;const S=[];ss(g)!==""&&S.push(sS({basepath:g})),p&&S.push(p),this.rewrite=S.length===0?void 0:S.length===1?S[0]:oS(S),this.history&&this.updateLatestLocation(),m=!0}m&&this.__store&&(this.__store.state={...this.state,location:this.latestLocation}),typeof window<"u"&&"CSS"in window&&typeof window.CSS?.supports=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const{routesById:l,routesByPath:o,processedTree:u}=D1(this.routeTree,this.options.caseSensitive,(d,m)=>{d.init({originalIndex:m})});this.options.routeMasks&&q1(this.options.routeMasks,u),this.routesById=l,this.routesByPath=o,this.processedTree=u;const f=this.options.notFoundRoute;f&&(f.init({originalIndex:99999999999}),this.routesById[f.id]=f)},this.subscribe=(l,o)=>{const u={eventType:l,fn:o};return this.subscribers.add(u),()=>{this.subscribers.delete(u)}},this.emit=l=>{this.subscribers.forEach(o=>{o.eventType===l.type&&o.fn(l)})},this.parseLocation=(l,o)=>{const u=({href:g,state:p})=>{const v=new URL(g,this.origin),b=Zb(this.rewrite,v),S=this.options.parseSearch(b.search),w=this.options.stringifySearch(S);b.search=w;const C=b.href.replace(b.origin,""),{pathname:_,hash:R}=b;return{href:C,publicHref:g,url:b.href,pathname:Og(_),searchStr:w,search:rn(o?.search,S),hash:R.split("#").reverse()[0]??"",state:rn(o?.state,p)}},f=u(l),{__tempLocation:d,__tempKey:m}=f.state;if(d&&(!m||m===this.tempLocationKey)){const g=u(d);return g.state.key=f.state.key,g.state.__TSR_key=f.state.__TSR_key,delete g.state.__tempLocation,{...g,maskedLocation:f}}return f},this.resolvePathCache=ys(1e3),this.resolvePathWithBase=(l,o)=>H1({base:l,to:td(o),trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(l,o,u)=>typeof l=="string"?this.matchRoutesInternal({pathname:l,search:o},u):this.matchRoutesInternal(l,o),this.getMatchedRoutes=l=>dS({pathname:l,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=l=>{const o=this.getMatch(l);o&&(o.abortController.abort(),clearTimeout(o._nonReactive.pendingTimeout),o._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{const l=this.state.matches.filter(f=>f.status==="pending"),o=this.state.matches.filter(f=>f.isFetching==="loader");new Set([...this.state.pendingMatches??[],...l,...o]).forEach(f=>{this.cancelMatch(f.id)})},this.buildLocation=l=>{const o=(f={})=>{const d=f._fromLocation||this.pendingBuiltLocation||this.latestLocation,m=this.matchRoutes(d,{_buildLocation:!0}),g=gs(m);f.from;const p=f.unsafeRelative==="path"?d.pathname:f.from??g.fullPath,v=this.resolvePathWithBase(p,"."),b=g.search,S={...g.params},w=f.to?this.resolvePathWithBase(v,`${f.to}`):this.resolvePathWithBase(v,"."),C=f.params===!1||f.params===null?{}:(f.params??!0)===!0?S:Object.assign(S,_a(f.params,S)),_=ff({path:w,params:C}).interpolatedPath,R=this.matchRoutes(_,void 0,{_buildLocation:!0}).map(ee=>this.looseRoutesById[ee.routeId]);if(Object.keys(C).length>0)for(const ee of R){const I=ee.options.params?.stringify??ee.options.stringifyParams;I&&Object.assign(C,I(C))}const L=l.leaveParams?w:Og(ff({path:w,params:C,decodeCharMap:this.pathParamsDecodeCharMap}).interpolatedPath);let H=b;if(l._includeValidateSearch&&this.options.search?.strict){const ee={};R.forEach(I=>{if(I.options.validateSearch)try{Object.assign(ee,jf(I.options.validateSearch,{...ee,...H}))}catch{}}),H=ee}H=mS({search:H,dest:f,destRoutes:R,_includeValidateSearch:l._includeValidateSearch}),H=rn(b,H);const U=this.options.stringifySearch(H),$=f.hash===!0?d.hash:f.hash?_a(f.hash,d.hash):void 0,B=$?`#${$}`:"";let q=f.state===!0?d.state:f.state?_a(f.state,d.state):{};q=rn(d.state,q);const z=`${L}${U}${B}`,G=new URL(z,this.origin),Q=Wb(this.rewrite,G);return{publicHref:Q.pathname+Q.search+Q.hash,href:z,url:Q.href,pathname:L,search:H,searchStr:U,state:q,hash:$??"",unmaskOnReload:f.unmaskOnReload}},u=(f={},d)=>{const m=o(f);let g=d?o(d):void 0;if(!g){const p={};if(this.options.routeMasks){const v=L1(m.pathname,this.processedTree);if(v){Object.assign(p,v.params);const{from:b,params:S,...w}=v.route,C=S===!1||S===null?{}:(S??!0)===!0?p:Object.assign(p,_a(S,p));d={from:l.from,...w,params:C},g=o(d)}}}return g&&(m.maskedLocation=g),m};return l.mask?u(l,{from:l.from,...l.mask}):u(l)},this.commitLocation=({viewTransition:l,ignoreBlocker:o,...u})=>{const f=()=>{const g=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];g.forEach(v=>{u.state[v]=this.latestLocation.state[v]});const p=Wa(u.state,this.latestLocation.state);return g.forEach(v=>{delete u.state[v]}),p},d=Ia(this.latestLocation.href)===Ia(u.href),m=this.commitLocationPromise;if(this.commitLocationPromise=rr(()=>{m?.resolve()}),d&&f())this.load();else{let{maskedLocation:g,hashScrollIntoView:p,...v}=u;g&&(v={...g,state:{...g.state,__tempKey:void 0,__tempLocation:{...v,search:v.searchStr,state:{...v.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(v.unmaskOnReload??this.options.unmaskOnReload??!1)&&(v.state.__tempKey=this.tempLocationKey)),v.state.__hashScrollIntoViewOptions=p??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=l,this.history[u.replace?"replace":"push"](v.publicHref,v.state,{ignoreBlocker:o})}return this.resetNextScroll=u.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:l,resetScroll:o,hashScrollIntoView:u,viewTransition:f,ignoreBlocker:d,href:m,...g}={})=>{if(m){const b=this.history.location.state.__TSR_index,S=vl(m,{__TSR_index:l?b:b+1});g.to=S.pathname,g.search=this.options.parseSearch(S.search),g.hash=S.hash.slice(1)}const p=this.buildLocation({...g,_includeValidateSearch:!0});this.pendingBuiltLocation=p;const v=this.commitLocation({...p,viewTransition:f,replace:l,resetScroll:o,hashScrollIntoView:u,ignoreBlocker:d});return Promise.resolve().then(()=>{this.pendingBuiltLocation===p&&(this.pendingBuiltLocation=void 0)}),v},this.navigate=async({to:l,reloadDocument:o,href:u,...f})=>{if(!o&&u)try{new URL(`${u}`),o=!0}catch{}if(o){if(u||(u=this.buildLocation({to:l,...f}).url),!f.ignoreBlocker){const m=this.history.getBlockers?.()??[];for(const g of m)if(g?.blockerFn&&await g.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return f.replace?window.location.replace(u):window.location.href=u,Promise.resolve()}return this.buildAndCommitLocation({...f,href:u,to:l,_isNavigate:!0})},this.beforeLoad=()=>{if(this.cancelMatches(),this.updateLatestLocation(),this.isServer){const o=this.buildLocation({to:this.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0}),u=f=>{try{return encodeURI(decodeURI(f))}catch{return f}};if(ss(u(this.latestLocation.href))!==ss(u(o.href))){let f=o.url;throw this.origin&&f.startsWith(this.origin)&&(f=f.replace(this.origin,"")||"/"),tS({href:f})}}const l=this.matchRoutes(this.latestLocation);this.__store.setState(o=>({...o,status:"pending",statusCode:200,isLoading:!0,location:this.latestLocation,pendingMatches:l,cachedMatches:o.cachedMatches.filter(u=>!l.some(f=>f.id===u.id))}))},this.load=async l=>{let o,u,f;for(f=new Promise(m=>{this.startTransition(async()=>{try{this.beforeLoad();const g=this.latestLocation,p=this.state.resolvedLocation;this.state.redirect||this.emit({type:"onBeforeNavigate",...ei({resolvedLocation:p,location:g})}),this.emit({type:"onBeforeLoad",...ei({resolvedLocation:p,location:g})}),await zg({router:this,sync:l?.sync,matches:this.state.pendingMatches,location:g,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let v=[],b=[],S=[];pl(()=>{this.__store.setState(w=>{const C=w.matches,_=w.pendingMatches||w.matches;return v=C.filter(R=>!_.some(L=>L.id===R.id)),b=_.filter(R=>!C.some(L=>L.id===R.id)),S=_.filter(R=>C.some(L=>L.id===R.id)),{...w,isLoading:!1,loadedAt:Date.now(),matches:_,pendingMatches:void 0,cachedMatches:[...w.cachedMatches,...v.filter(R=>R.status!=="error"&&R.status!=="notFound")]}}),this.clearExpiredCache()}),[[v,"onLeave"],[b,"onEnter"],[S,"onStay"]].forEach(([w,C])=>{w.forEach(_=>{this.looseRoutesById[_.routeId].options[C]?.(_)})})})})}})}catch(g){mn(g)?(o=g,this.isServer||this.navigate({...o.options,replace:!0,ignoreBlocker:!0})):on(g)&&(u=g),this.__store.setState(p=>({...p,statusCode:o?o.status:u?404:p.matches.some(v=>v.status==="error")?500:200,redirect:o}))}this.latestLoadPromise===f&&(this.commitLocationPromise?.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),m()})}),this.latestLoadPromise=f,await f;this.latestLoadPromise&&f!==this.latestLoadPromise;)await this.latestLoadPromise;let d;this.hasNotFoundMatch()?d=404:this.__store.state.matches.some(m=>m.status==="error")&&(d=500),d!==void 0&&this.__store.setState(m=>({...m,statusCode:d}))},this.startViewTransition=l=>{const o=this.shouldViewTransition??this.options.defaultViewTransition;if(delete this.shouldViewTransition,o&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let u;if(typeof o=="object"&&this.isViewTransitionTypesSupported){const f=this.latestLocation,d=this.state.resolvedLocation,m=typeof o.types=="function"?o.types(ei({resolvedLocation:d,location:f})):o.types;if(m===!1){l();return}u={update:l,types:m}}else u=l;document.startViewTransition(u)}else l()},this.updateMatch=(l,o)=>{this.startTransition(()=>{const u=this.state.pendingMatches?.some(f=>f.id===l)?"pendingMatches":this.state.matches.some(f=>f.id===l)?"matches":this.state.cachedMatches.some(f=>f.id===l)?"cachedMatches":"";u&&this.__store.setState(f=>({...f,[u]:f[u]?.map(d=>d.id===l?o(d):d)}))})},this.getMatch=l=>{const o=u=>u.id===l;return this.state.cachedMatches.find(o)??this.state.pendingMatches?.find(o)??this.state.matches.find(o)},this.invalidate=l=>{const o=u=>l?.filter?.(u)??!0?{...u,invalid:!0,...l?.forcePending||u.status==="error"||u.status==="notFound"?{status:"pending",error:void 0}:void 0}:u;return this.__store.setState(u=>({...u,matches:u.matches.map(o),cachedMatches:u.cachedMatches.map(o),pendingMatches:u.pendingMatches?.map(o)})),this.shouldViewTransition=!1,this.load({sync:l?.sync})},this.resolveRedirect=l=>{if(!l.options.href){const o=this.buildLocation(l.options);let u=o.url;this.origin&&u.startsWith(this.origin)&&(u=u.replace(this.origin,"")||"/"),l.options.href=o.href,l.headers.set("Location",u)}return l.headers.get("Location")||l.headers.set("Location",l.options.href),l},this.clearCache=l=>{const o=l?.filter;o!==void 0?this.__store.setState(u=>({...u,cachedMatches:u.cachedMatches.filter(f=>!o(f))})):this.__store.setState(u=>({...u,cachedMatches:[]}))},this.clearExpiredCache=()=>{const l=o=>{const u=this.looseRoutesById[o.routeId];if(!u.options.loader)return!0;const f=(o.preload?u.options.preloadGcTime??this.options.defaultPreloadGcTime:u.options.gcTime??this.options.defaultGcTime)??300*1e3;return o.status==="error"?!0:Date.now()-o.updatedAt>=f};this.clearCache({filter:l})},this.loadRouteChunk=Kb,this.preloadRoute=async l=>{const o=this.buildLocation(l);let u=this.matchRoutes(o,{throwOnError:!0,preload:!0,dest:l});const f=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(m=>m.id)),d=new Set([...f,...this.state.cachedMatches.map(m=>m.id)]);pl(()=>{u.forEach(m=>{d.has(m.id)||this.__store.setState(g=>({...g,cachedMatches:[...g.cachedMatches,m]}))})});try{return u=await zg({router:this,matches:u,location:o,preload:!0,updateMatch:(m,g)=>{f.has(m)?u=u.map(p=>p.id===m?g(p):p):this.updateMatch(m,g)}}),u}catch(m){if(mn(m))return m.options.reloadDocument?void 0:await this.preloadRoute({...m.options,_fromLocation:o});on(m)||console.error(m);return}},this.matchRoute=(l,o)=>{const u={...l,to:l.to?this.resolvePathWithBase(l.from||"",l.to):void 0,params:l.params||{},leaveParams:!0},f=this.buildLocation(u);if(o?.pending&&this.state.status!=="pending")return!1;const m=(o?.pending===void 0?!this.state.isLoading:o.pending)?this.latestLocation:this.state.resolvedLocation||this.state.location,g=O1(f.pathname,o?.caseSensitive??!1,o?.fuzzy??!1,m.pathname,this.processedTree);return!g||l.params&&!Wa(g.params,l.params,{partial:!0})?!1:o?.includeSearch??!0?Wa(m.search,f.search,{partial:!0})?g.params:!1:g.params},this.hasNotFoundMatch=()=>this.__store.state.matches.some(l=>l.status==="notFound"||l.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...r,caseSensitive:r.caseSensitive??!1,notFoundMode:r.notFoundMode??"fuzzy",stringifySearch:r.stringifySearch??W1,parseSearch:r.parseSearch??Z1}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}matchRoutesInternal(r,l){const o=this.getMatchedRoutes(r.pathname),{foundRoute:u,routeParams:f}=o;let{matchedRoutes:d}=o,m=!1;(u?u.path!=="/"&&f["**"]:Ia(r.pathname))&&(this.options.notFoundRoute?d=[...d,this.options.notFoundRoute]:m=!0);const g=(()=>{if(m){if(this.options.notFoundMode!=="root")for(let b=d.length-1;b>=0;b--){const S=d[b];if(S.children)return S.id}return Pt}})(),p=[],v=b=>b?.id?b.context??this.options.context??void 0:this.options.context??void 0;return d.forEach((b,S)=>{const w=p[S-1],[C,_,R]=(()=>{const ne=w?.search??r.search,Z=w?._strictSearch??void 0;try{const re=jf(b.options.validateSearch,{...ne})??void 0;return[{...ne,...re},{...Z,...re},void 0]}catch(re){let D=re;if(re instanceof ws||(D=new ws(re.message,{cause:re})),l?.throwOnError)throw D;return[ne,{},D]}})(),L=b.options.loaderDeps?.({search:C})??"",H=L?JSON.stringify(L):"",{interpolatedPath:U,usedParams:$}=ff({path:b.fullPath,params:f,decodeCharMap:this.pathParamsDecodeCharMap}),B=b.id+U+H,q=this.getMatch(B),z=this.state.matches.find(ne=>ne.routeId===b.id),G=q?._strictParams??$;let Q;if(!q){const ne=b.options.params?.parse??b.options.parseParams;if(ne)try{Object.assign(G,ne(G))}catch(Z){if(on(Z)||mn(Z)?Q=Z:Q=new cS(Z.message,{cause:Z}),l?.throwOnError)throw Q}}Object.assign(f,G);const ee=z?"stay":"enter";let I;if(q)I={...q,cause:ee,params:z?rn(z.params,f):f,_strictParams:G,search:rn(z?z.search:q.search,C),_strictSearch:_};else{const ne=b.options.loader||b.options.beforeLoad||b.lazyFn||Qb(b)?"pending":"success";I={id:B,ssr:this.isServer?void 0:b.options.ssr,index:S,routeId:b.id,params:z?rn(z.params,f):f,_strictParams:G,pathname:U,updatedAt:Date.now(),search:z?rn(z.search,C):C,_strictSearch:_,searchError:void 0,status:ne,isFetching:!1,error:void 0,paramsError:Q,__routeContext:void 0,_nonReactive:{loadPromise:rr()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:ee,loaderDeps:z?rn(z.loaderDeps,L):L,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:b.options.staticData||{},fullPath:b.fullPath}}l?.preload||(I.globalNotFound=g===b.id),I.searchError=R;const x=v(w);I.context={...x,...I.__routeContext,...I.__beforeLoadContext},p.push(I)}),p.forEach((b,S)=>{const w=this.looseRoutesById[b.routeId];if(!this.getMatch(b.id)&&l?._buildLocation!==!0){const _=p[S-1],R=v(_);if(w.options.context){const L={deps:b.loaderDeps,params:b.params,context:R??{},location:r,navigate:H=>this.navigate({...H,_fromLocation:r}),buildLocation:this.buildLocation,cause:b.cause,abortController:b.abortController,preload:!!b.preload,matches:p};b.__routeContext=w.options.context(L)??void 0}b.context={...R,...b.__routeContext,...b.__beforeLoadContext}}}),p}}class ws extends Error{}class cS extends Error{}function fS(n){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:n,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function jf(n,r){if(n==null)return{};if("~standard"in n){const l=n["~standard"].validate(r);if(l instanceof Promise)throw new ws("Async validation not supported");if(l.issues)throw new ws(JSON.stringify(l.issues,void 0,2),{cause:l});return l.value}return"parse"in n?n.parse(r):typeof n=="function"?n(r):{}}function dS({pathname:n,routesById:r,processedTree:l}){const o={},u=Ia(n);let f;const d=k1(u,l,!0);return d&&(f=d.route,Object.assign(o,d.params)),{matchedRoutes:d?.branch||[r[Pt]],routeParams:o,foundRoute:f}}function mS({search:n,dest:r,destRoutes:l,_includeValidateSearch:o}){const u=l.reduce((m,g)=>{const p=[];if("search"in g.options)g.options.search?.middlewares&&p.push(...g.options.search.middlewares);else if(g.options.preSearchFilters||g.options.postSearchFilters){const v=({search:b,next:S})=>{let w=b;"preSearchFilters"in g.options&&g.options.preSearchFilters&&(w=g.options.preSearchFilters.reduce((_,R)=>R(_),b));const C=S(w);return"postSearchFilters"in g.options&&g.options.postSearchFilters?g.options.postSearchFilters.reduce((_,R)=>R(_),C):C};p.push(v)}if(o&&g.options.validateSearch){const v=({search:b,next:S})=>{const w=S(b);try{return{...w,...jf(g.options.validateSearch,w)??void 0}}catch{return w}};p.push(v)}return m.concat(p)},[])??[],f=({search:m})=>r.search?r.search===!0?m:_a(r.search,m):{};u.push(f);const d=(m,g)=>{if(m>=u.length)return g;const p=u[m];return p({search:g,next:b=>d(m+1,b)})};return d(0,n)}const hS="Error preloading route! ☝️";class Ib{constructor(r){if(this.init=l=>{this.originalIndex=l.originalIndex;const o=this.options,u=!o?.path&&!o?.id;this.parentRoute=this.options.getParentRoute?.(),u?this._path=Pt:this.parentRoute||Qn(!1);let f=u?Pt:o?.path;f&&f!=="/"&&(f=$b(f));const d=o?.id||f;let m=u?Pt:os([this.parentRoute.id===Pt?"":this.parentRoute.id,d]);f===Pt&&(f="/"),m!==Pt&&(m=os(["/",m]));const g=m===Pt?"/":os([this.parentRoute.fullPath,f]);this._path=f,this._id=m,this._fullPath=g,this._to=g},this.addChildren=l=>this._addFileChildren(l),this._addFileChildren=l=>(Array.isArray(l)&&(this.children=l),typeof l=="object"&&l!==null&&(this.children=Object.values(l)),this),this._addFileTypes=()=>this,this.updateLoader=l=>(Object.assign(this.options,l),this),this.update=l=>(Object.assign(this.options,l),this),this.lazy=l=>(this.lazyFn=l,this),this.options=r||{},this.isRoot=!r?.getParentRoute,r?.id&&r?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}}class pS extends Ib{constructor(r){super(r)}}var mf={exports:{}},de={};var Dg;function gS(){if(Dg)return de;Dg=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,R={};function L(M,P,te){this.props=M,this.context=P,this.refs=R,this.updater=te||C}L.prototype.isReactComponent={},L.prototype.setState=function(M,P){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,P,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function H(){}H.prototype=L.prototype;function U(M,P,te){this.props=M,this.context=P,this.refs=R,this.updater=te||C}var $=U.prototype=new H;$.constructor=U,_($,L.prototype),$.isPureReactComponent=!0;var B=Array.isArray;function q(){}var z={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function Q(M,P,te){var ae=te.ref;return{$$typeof:n,type:M,key:P,ref:ae!==void 0?ae:null,props:te}}function ee(M,P){return Q(M.type,P,M.props)}function I(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function x(M){var P={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(te){return P[te]})}var ne=/\/+/g;function Z(M,P){return typeof M=="object"&&M!==null&&M.key!=null?x(""+M.key):P.toString(36)}function re(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(q,q):(M.status="pending",M.then(function(P){M.status==="pending"&&(M.status="fulfilled",M.value=P)},function(P){M.status==="pending"&&(M.status="rejected",M.reason=P)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function D(M,P,te,ae,ue){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var me=!1;if(M===null)me=!0;else switch(fe){case"bigint":case"string":case"number":me=!0;break;case"object":switch(M.$$typeof){case n:case r:me=!0;break;case v:return me=M._init,D(me(M._payload),P,te,ae,ue)}}if(me)return ue=ue(M),me=ae===""?"."+Z(M,0):ae,B(ue)?(te="",me!=null&&(te=me.replace(ne,"$&/")+"/"),D(ue,P,te,"",function(un){return un})):ue!=null&&(I(ue)&&(ue=ee(ue,te+(ue.key==null||M&&M.key===ue.key?"":(""+ue.key).replace(ne,"$&/")+"/")+me)),P.push(ue)),1;me=0;var Xe=ae===""?".":ae+":";if(B(M))for(var Te=0;Te<M.length;Te++)ae=M[Te],fe=Xe+Z(ae,Te),me+=D(ae,P,te,fe,ue);else if(Te=w(M),typeof Te=="function")for(M=Te.call(M),Te=0;!(ae=M.next()).done;)ae=ae.value,fe=Xe+Z(ae,Te++),me+=D(ae,P,te,fe,ue);else if(fe==="object"){if(typeof M.then=="function")return D(re(M),P,te,ae,ue);throw P=String(M),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return me}function W(M,P,te){if(M==null)return M;var ae=[],ue=0;return D(M,ae,"","",function(fe){return P.call(te,fe,ue++)}),ae}function oe(M){if(M._status===-1){var P=M._result;P=P(),P.then(function(te){(M._status===0||M._status===-1)&&(M._status=1,M._result=te)},function(te){(M._status===0||M._status===-1)&&(M._status=2,M._result=te)}),M._status===-1&&(M._status=0,M._result=P)}if(M._status===1)return M._result.default;throw M._result}var we=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Ae={map:W,forEach:function(M,P,te){W(M,function(){P.apply(this,arguments)},te)},count:function(M){var P=0;return W(M,function(){P++}),P},toArray:function(M){return W(M,function(P){return P})||[]},only:function(M){if(!I(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return de.Activity=b,de.Children=Ae,de.Component=L,de.Fragment=l,de.Profiler=u,de.PureComponent=U,de.StrictMode=o,de.Suspense=g,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(M){return z.H.useMemoCache(M)}},de.cache=function(M){return function(){return M.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(M,P,te){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ae=_({},M.props),ue=M.key;if(P!=null)for(fe in P.key!==void 0&&(ue=""+P.key),P)!G.call(P,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&P.ref===void 0||(ae[fe]=P[fe]);var fe=arguments.length-2;if(fe===1)ae.children=te;else if(1<fe){for(var me=Array(fe),Xe=0;Xe<fe;Xe++)me[Xe]=arguments[Xe+2];ae.children=me}return Q(M.type,ue,ae)},de.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:f,_context:M},M},de.createElement=function(M,P,te){var ae,ue={},fe=null;if(P!=null)for(ae in P.key!==void 0&&(fe=""+P.key),P)G.call(P,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ue[ae]=P[ae]);var me=arguments.length-2;if(me===1)ue.children=te;else if(1<me){for(var Xe=Array(me),Te=0;Te<me;Te++)Xe[Te]=arguments[Te+2];ue.children=Xe}if(M&&M.defaultProps)for(ae in me=M.defaultProps,me)ue[ae]===void 0&&(ue[ae]=me[ae]);return Q(M,fe,ue)},de.createRef=function(){return{current:null}},de.forwardRef=function(M){return{$$typeof:m,render:M}},de.isValidElement=I,de.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:oe}},de.memo=function(M,P){return{$$typeof:p,type:M,compare:P===void 0?null:P}},de.startTransition=function(M){var P=z.T,te={};z.T=te;try{var ae=M(),ue=z.S;ue!==null&&ue(te,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(q,we)}catch(fe){we(fe)}finally{P!==null&&te.types!==null&&(P.types=te.types),z.T=P}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(M){return z.H.use(M)},de.useActionState=function(M,P,te){return z.H.useActionState(M,P,te)},de.useCallback=function(M,P){return z.H.useCallback(M,P)},de.useContext=function(M){return z.H.useContext(M)},de.useDebugValue=function(){},de.useDeferredValue=function(M,P){return z.H.useDeferredValue(M,P)},de.useEffect=function(M,P){return z.H.useEffect(M,P)},de.useEffectEvent=function(M){return z.H.useEffectEvent(M)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(M,P,te){return z.H.useImperativeHandle(M,P,te)},de.useInsertionEffect=function(M,P){return z.H.useInsertionEffect(M,P)},de.useLayoutEffect=function(M,P){return z.H.useLayoutEffect(M,P)},de.useMemo=function(M,P){return z.H.useMemo(M,P)},de.useOptimistic=function(M,P){return z.H.useOptimistic(M,P)},de.useReducer=function(M,P,te){return z.H.useReducer(M,P,te)},de.useRef=function(M){return z.H.useRef(M)},de.useState=function(M){return z.H.useState(M)},de.useSyncExternalStore=function(M,P,te){return z.H.useSyncExternalStore(M,P,te)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.1",de}var Bg;function Tl(){return Bg||(Bg=1,mf.exports=gS()),mf.exports}var K=Tl();const or=jb(K),Uf=m1({__proto__:null,default:or},[K]);function nd(n){const r=n.errorComponent??Es;return F.jsx(bS,{getResetKey:n.getResetKey,onCatch:n.onCatch,children:({error:l,reset:o})=>l?K.createElement(r,{error:l,reset:o}):n.children})}class bS extends K.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(r){return{resetKey:r.getResetKey()}}static getDerivedStateFromError(r){return{error:r}}reset(){this.setState({error:null})}componentDidUpdate(r,l){l.error&&l.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(r,l){this.props.onCatch&&this.props.onCatch(r,l)}render(){return this.props.children({error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{this.reset()}})}}function Es({error:n}){const[r,l]=K.useState(!1);return F.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[F.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),F.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>l(o=>!o),children:r?"Hide Error":"Show Error"})]}),F.jsx("div",{style:{height:".25rem"}}),r?F.jsx("div",{children:F.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:n.message?F.jsx("code",{children:n.message}):null})}):null]})}function yS({children:n,fallback:r=null}){return vS()?F.jsx(or.Fragment,{children:n}):F.jsx(or.Fragment,{children:r})}function vS(){return or.useSyncExternalStore(SS,()=>!0,()=>!1)}function SS(){return()=>{}}var hf={exports:{}},pf={},gf={exports:{}},bf={};var Ng;function xS(){if(Ng)return bf;Ng=1;var n=Tl();function r(b,S){return b===S&&(b!==0||1/b===1/S)||b!==b&&S!==S}var l=typeof Object.is=="function"?Object.is:r,o=n.useState,u=n.useEffect,f=n.useLayoutEffect,d=n.useDebugValue;function m(b,S){var w=S(),C=o({inst:{value:w,getSnapshot:S}}),_=C[0].inst,R=C[1];return f(function(){_.value=w,_.getSnapshot=S,g(_)&&R({inst:_})},[b,w,S]),u(function(){return g(_)&&R({inst:_}),b(function(){g(_)&&R({inst:_})})},[b]),d(w),w}function g(b){var S=b.getSnapshot;b=b.value;try{var w=S();return!l(b,w)}catch{return!0}}function p(b,S){return S()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:m;return bf.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:v,bf}var jg;function wS(){return jg||(jg=1,gf.exports=xS()),gf.exports}var Ug;function _S(){if(Ug)return pf;Ug=1;var n=Tl(),r=wS();function l(p,v){return p===v&&(p!==0||1/p===1/v)||p!==p&&v!==v}var o=typeof Object.is=="function"?Object.is:l,u=r.useSyncExternalStore,f=n.useRef,d=n.useEffect,m=n.useMemo,g=n.useDebugValue;return pf.useSyncExternalStoreWithSelector=function(p,v,b,S,w){var C=f(null);if(C.current===null){var _={hasValue:!1,value:null};C.current=_}else _=C.current;C=m(function(){function L(q){if(!H){if(H=!0,U=q,q=S(q),w!==void 0&&_.hasValue){var z=_.value;if(w(z,q))return $=z}return $=q}if(z=$,o(U,q))return z;var G=S(q);return w!==void 0&&w(z,G)?(U=q,z):(U=q,$=G)}var H=!1,U,$,B=b===void 0?null:b;return[function(){return L(v())},B===null?void 0:function(){return L(B())}]},[v,b,S,w]);var R=u(p,C[0],C[1]);return d(function(){_.hasValue=!0,_.value=R},[R]),g(R),R},pf}var Gg;function CS(){return Gg||(Gg=1,hf.exports=_S()),hf.exports}var AS=CS();function TS(n,r=o=>o,l={}){const o=l.equal??MS;return AS.useSyncExternalStoreWithSelector(n.subscribe,()=>n.state,()=>n.state,r,o)}function MS(n,r){if(Object.is(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;if(n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(const[o,u]of n)if(!r.has(o)||!Object.is(u,r.get(o)))return!1;return!0}if(n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(const o of n)if(!r.has(o))return!1;return!0}if(n instanceof Date&&r instanceof Date)return n.getTime()===r.getTime();const l=Hg(n);if(l.length!==Hg(r).length)return!1;for(let o=0;o<l.length;o++)if(!Object.prototype.hasOwnProperty.call(r,l[o])||!Object.is(n[l[o]],r[l[o]]))return!1;return!0}function Hg(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}const yf=K.createContext(null);function ey(){return typeof document>"u"?yf:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=yf,yf)}function xt(n){const r=K.useContext(ey());return n?.warn,r}function ot(n){const r=xt({warn:n?.router===void 0}),l=n?.router||r,o=K.useRef(void 0);return TS(l.__store,u=>{if(n?.select){if(n.structuralSharing??l.options.defaultStructuralSharing){const f=rn(o.current,n.select(u));return o.current=f,f}return n.select(u)}return u})}const qs=K.createContext(void 0),RS=K.createContext(void 0);function Mn(n){const r=K.useContext(n.from?RS:qs);return ot({select:o=>{const u=o.matches.find(f=>n.from?n.from===f.routeId:f.id===r);if(Qn(!((n.shouldThrow??!0)&&!u),`Could not find ${n.from?`an active match from "${n.from}"`:"a nearest match!"}`),u!==void 0)return n.select?n.select(u):u},structuralSharing:n.structuralSharing})}function ad(n){return Mn({from:n.from,strict:n.strict,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.loaderData):r.loaderData})}function id(n){const{select:r,...l}=n;return Mn({...l,select:o=>r?r(o.loaderDeps):o.loaderDeps})}function rd(n){return Mn({from:n.from,shouldThrow:n.shouldThrow,structuralSharing:n.structuralSharing,strict:n.strict,select:r=>{const l=n.strict===!1?r.params:r._strictParams;return n.select?n.select(l):l}})}function ld(n){return Mn({from:n.from,strict:n.strict,shouldThrow:n.shouldThrow,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.search):r.search})}const as=typeof window<"u"?K.useLayoutEffect:K.useEffect;function vf(n){const r=K.useRef({value:n,prev:null}),l=r.current.value;return n!==l&&(r.current={value:n,prev:l}),r.current.prev}function ES(n,r,l={},o={}){K.useEffect(()=>{if(!n.current||o.disabled||typeof IntersectionObserver!="function")return;const u=new IntersectionObserver(([f])=>{r(f)},l);return u.observe(n.current),()=>{u.disconnect()}},[r,l,o.disabled,n])}function qS(n){const r=K.useRef(null);return K.useImperativeHandle(n,()=>r.current,[]),r}function od(n){const r=xt();return K.useCallback(l=>r.navigate({...l,from:l.from??n?.from}),[n?.from,r])}var Sf={exports:{}},vt={};var $g;function LS(){if($g)return vt;$g=1;var n=Tl();function r(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(g,p,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:g,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,vt.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return f(g,p,null,v)},vt.flushSync=function(g){var p=d.T,v=o.p;try{if(d.T=null,o.p=2,g)return g()}finally{d.T=p,o.p=v,o.d.f()}},vt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},vt.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},vt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:w}):v==="script"&&o.d.X(g,{crossOrigin:b,integrity:S,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},vt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},vt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin);o.d.L(g,v,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},vt.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=m(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},vt.requestFormReset=function(g){o.d.r(g)},vt.unstable_batchedUpdates=function(g,p){return g(p)},vt.useFormState=function(g,p,v){return d.H.useFormState(g,p,v)},vt.useFormStatus=function(){return d.H.useHostTransitionStatus()},vt.version="19.2.1",vt}var Pg;function ty(){if(Pg)return Sf.exports;Pg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Sf.exports=LS(),Sf.exports}var OS=ty();function kS(n,r){const l=xt(),[o,u]=K.useState(!1),f=K.useRef(!1),d=qS(r),{activeProps:m,inactiveProps:g,activeOptions:p,to:v,preload:b,preloadDelay:S,hashScrollIntoView:w,replace:C,startTransition:_,resetScroll:R,viewTransition:L,children:H,target:U,disabled:$,style:B,className:q,onClick:z,onFocus:G,onMouseEnter:Q,onMouseLeave:ee,onTouchStart:I,ignoreBlocker:x,params:ne,search:Z,hash:re,state:D,mask:W,reloadDocument:oe,unsafeRelative:we,from:Ae,_fromLocation:M,...P}=n,te=ot({select:qe=>qe.location.search,structuralSharing:!0}),ae=n.from,ue=K.useMemo(()=>({...n,from:ae}),[l,te,ae,n._fromLocation,n.hash,n.to,n.search,n.params,n.state,n.mask,n.unsafeRelative]),fe=K.useMemo(()=>l.buildLocation({...ue}),[l,ue]),me=K.useMemo(()=>{if($)return;let qe=fe.maskedLocation?fe.maskedLocation.url:fe.url,xe=!1;return l.origin&&(qe.startsWith(l.origin)?qe=l.history.createHref(qe.replace(l.origin,""))||"/":xe=!0),{href:qe,external:xe}},[$,fe.maskedLocation,fe.url,l.origin,l.history]),Xe=K.useMemo(()=>{if(me?.external)return me.href;try{return new URL(v),v}catch{}},[v,me]),Te=n.reloadDocument||Xe?!1:b??l.options.defaultPreload,un=S??l.options.defaultPreloadDelay??0,pn=ot({select:qe=>{if(Xe)return!1;if(p?.exact){if(!G1(qe.location.pathname,fe.pathname,l.basepath))return!1}else{const xe=vs(qe.location.pathname,l.basepath),yt=vs(fe.pathname,l.basepath);if(!(xe.startsWith(yt)&&(xe.length===yt.length||xe[yt.length]==="/")))return!1}return(p?.includeSearch??!0)&&!Wa(qe.location.search,fe.search,{partial:!p?.exact,ignoreUndefined:!p?.explicitUndefined})?!1:p?.includeHash?qe.location.hash===fe.hash:!0}}),Ct=K.useCallback(()=>{l.preloadRoute({...ue}).catch(qe=>{console.warn(qe),console.warn(hS)})},[l,ue]),Ea=K.useCallback(qe=>{qe?.isIntersecting&&Ct()},[Ct]);ES(d,Ea,jS,{disabled:!!$||Te!=="viewport"}),K.useEffect(()=>{f.current||!$&&Te==="render"&&(Ct(),f.current=!0)},[$,Ct,Te]);const Xt=qe=>{const xe=qe.currentTarget.getAttribute("target"),yt=U!==void 0?U:xe;if(!$&&!US(qe)&&!qe.defaultPrevented&&(!yt||yt==="_self")&&qe.button===0){qe.preventDefault(),OS.flushSync(()=>{u(!0)});const st=l.subscribe("onResolved",()=>{st(),u(!1)});l.navigate({...ue,replace:C,resetScroll:R,hashScrollIntoView:w,startTransition:_,viewTransition:L,ignoreBlocker:x})}};if(Xe)return{...P,ref:d,href:Xe,...H&&{children:H},...U&&{target:U},...$&&{disabled:$},...B&&{style:B},...q&&{className:q},...z&&{onClick:z},...G&&{onFocus:G},...Q&&{onMouseEnter:Q},...ee&&{onMouseLeave:ee},...I&&{onTouchStart:I}};const Rn=qe=>{$||Te&&Ct()},qa=Rn,fi=qe=>{if(!($||!Te))if(!un)Ct();else{const xe=qe.target;if(ll.has(xe))return;const yt=setTimeout(()=>{ll.delete(xe),Ct()},un);ll.set(xe,yt)}},Zn=qe=>{if($||!Te||!un)return;const xe=qe.target,yt=ll.get(xe);yt&&(clearTimeout(yt),ll.delete(xe))},et=pn?_a(m,{})??zS:xf,kt=pn?xf:_a(g,{})??xf,gn=[q,et.className,kt.className].filter(Boolean).join(" "),bn=(B||et.style||kt.style)&&{...B,...et.style,...kt.style};return{...P,...et,...kt,href:me?.href,ref:d,onClick:ol([z,Xt]),onFocus:ol([G,Rn]),onMouseEnter:ol([Q,fi]),onMouseLeave:ol([ee,Zn]),onTouchStart:ol([I,qa]),disabled:!!$,target:U,...bn&&{style:bn},...gn&&{className:gn},...$&&DS,...pn&&BS,...o&&NS}}const xf={},zS={className:"active"},DS={role:"link","aria-disabled":!0},BS={"data-status":"active","aria-current":"page"},NS={"data-transitioning":"transitioning"},ll=new WeakMap,jS={rootMargin:"100px"},ol=n=>r=>{for(const l of n)if(l){if(r.defaultPrevented)return;l(r)}},bl=K.forwardRef((n,r)=>{const{_asChild:l,...o}=n,{type:u,ref:f,...d}=kS(o,r),m=typeof o.children=="function"?o.children({isActive:d["data-status"]==="active"}):o.children;return l===void 0&&delete d.disabled,K.createElement(l||"a",{...d,ref:f},m)});function US(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}let GS=class extends Ib{constructor(r){super(r),this.useMatch=l=>Mn({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Mn({...l,from:this.id,select:o=>l?.select?l.select(o.context):o.context}),this.useSearch=l=>ld({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>rd({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>id({...l,from:this.id}),this.useLoaderData=l=>ad({...l,from:this.id}),this.useNavigate=()=>od({from:this.fullPath}),this.Link=or.forwardRef((l,o)=>F.jsx(bl,{ref:o,from:this.fullPath,...l})),this.$$typeof=Symbol.for("react.memo")}};function HS(n){return new GS(n)}class $S extends pS{constructor(r){super(r),this.useMatch=l=>Mn({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Mn({...l,from:this.id,select:o=>l?.select?l.select(o.context):o.context}),this.useSearch=l=>ld({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>rd({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>id({...l,from:this.id}),this.useLoaderData=l=>ad({...l,from:this.id}),this.useNavigate=()=>od({from:this.fullPath}),this.Link=or.forwardRef((l,o)=>F.jsx(bl,{ref:o,from:this.fullPath,...l})),this.$$typeof=Symbol.for("react.memo")}}function PS(n){return new $S(n)}function ai(n){return typeof n=="object"?new Vg(n,{silent:!0}).createRoute(n):new Vg(n,{silent:!0}).createRoute}class Vg{constructor(r,l){this.path=r,this.createRoute=o=>{this.silent;const u=HS(o);return u.isRoot=!1,u},this.silent=l?.silent}}class Yg{constructor(r){this.useMatch=l=>Mn({select:l?.select,from:this.options.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Mn({from:this.options.id,select:o=>l?.select?l.select(o.context):o.context}),this.useSearch=l=>ld({select:l?.select,structuralSharing:l?.structuralSharing,from:this.options.id}),this.useParams=l=>rd({select:l?.select,structuralSharing:l?.structuralSharing,from:this.options.id}),this.useLoaderDeps=l=>id({...l,from:this.options.id}),this.useLoaderData=l=>ad({...l,from:this.options.id}),this.useNavigate=()=>{const l=xt();return od({from:l.routesById[this.options.id].fullPath})},this.options=r,this.$$typeof=Symbol.for("react.memo")}}function Xg(n){return typeof n=="object"?new Yg(n):r=>new Yg({id:n,...r})}function Ml(n,r){let l,o,u,f;const d=()=>(l||(l=n().then(g=>{l=void 0,o=g[r]}).catch(g=>{if(u=g,A1(u)&&u instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const p=`tanstack_router_reload:${u.message}`;sessionStorage.getItem(p)||(sessionStorage.setItem(p,"1"),f=!0)}})),l),m=function(p){if(f)throw window.location.reload(),new Promise(()=>{});if(u)throw u;if(!o)throw d();return K.createElement(o,p)};return m.preload=d,m}function VS(){const n=xt(),r=K.useRef({router:n,mounted:!1}),[l,o]=K.useState(!1),{hasPendingMatches:u,isLoading:f}=ot({select:b=>({isLoading:b.isLoading,hasPendingMatches:b.matches.some(S=>S.status==="pending")}),structuralSharing:!0}),d=vf(f),m=f||l||u,g=vf(m),p=f||u,v=vf(p);return n.startTransition=b=>{o(!0),K.startTransition(()=>{b(),o(!1)})},K.useEffect(()=>{const b=n.history.subscribe(n.load),S=n.buildLocation({to:n.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return Ia(n.latestLocation.href)!==Ia(S.href)&&n.commitLocation({...S,replace:!0}),()=>{b()}},[n,n.history]),as(()=>{if(typeof window<"u"&&n.ssr||r.current.router===n&&r.current.mounted)return;r.current={router:n,mounted:!0},(async()=>{try{await n.load()}catch(S){console.error(S)}})()},[n]),as(()=>{d&&!f&&n.emit({type:"onLoad",...ei(n.state)})},[d,n,f]),as(()=>{v&&!p&&n.emit({type:"onBeforeRouteMount",...ei(n.state)})},[p,v,n]),as(()=>{if(g&&!m){const b=ei(n.state);n.emit({type:"onResolved",...b}),n.__store.setState(S=>({...S,status:"idle",resolvedLocation:S.location})),b.hrefChanged&&K1(n)}},[m,g,n]),null}function YS(n){const r=ot({select:l=>`not-found-${l.location.pathname}-${l.status}`});return F.jsx(nd,{getResetKey:()=>r,onCatch:(l,o)=>{if(on(l))n.onCatch?.(l,o);else throw l},errorComponent:({error:l})=>{if(on(l))return n.fallback?.(l);throw l},children:n.children})}function XS(){return F.jsx("p",{children:"Not Found"})}function nr(n){return F.jsx(F.Fragment,{children:n.children})}function ny(n,r,l){return r.options.notFoundComponent?F.jsx(r.options.notFoundComponent,{...l}):n.options.defaultNotFoundComponent?F.jsx(n.options.defaultNotFoundComponent,{...l}):F.jsx(XS,{})}function JS({children:n}){const r=xt();return r.isServer?F.jsx("script",{nonce:r.options.ssr?.nonce,className:"$tsr",dangerouslySetInnerHTML:{__html:n+';typeof $_TSR !== "undefined" && $_TSR.c()'}}):null}function KS(){const n=xt();if(!n.isScrollRestoring||!n.isServer||typeof n.options.scrollRestoration=="function"&&!n.options.scrollRestoration({location:n.latestLocation}))return null;const l=(n.options.getScrollRestorationKey||Nf)(n.latestLocation),o=l!==Nf(n.latestLocation)?l:void 0,u={storageKey:Ss,shouldScrollRestoration:!0};return o&&(u.key=o),F.jsx(JS,{children:`(${Pb.toString()})(${JSON.stringify(u)})`})}const ay=K.memo(function({matchId:r}){const l=xt(),o=ot({select:L=>{const H=L.matches.find(U=>U.id===r);return Qn(H),{routeId:H.routeId,ssr:H.ssr,_displayPending:H._displayPending}},structuralSharing:!0}),u=l.routesById[o.routeId],f=u.options.pendingComponent??l.options.defaultPendingComponent,d=f?F.jsx(f,{}):null,m=u.options.errorComponent??l.options.defaultErrorComponent,g=u.options.onCatch??l.options.defaultOnCatch,p=u.isRoot?u.options.notFoundComponent??l.options.notFoundRoute?.options.component:u.options.notFoundComponent,v=o.ssr===!1||o.ssr==="data-only",b=(!u.isRoot||u.options.wrapInSuspense||v)&&(u.options.wrapInSuspense??f??(u.options.errorComponent?.preload||v))?K.Suspense:nr,S=m?nd:nr,w=p?YS:nr,C=ot({select:L=>L.loadedAt}),_=ot({select:L=>{const H=L.matches.findIndex(U=>U.id===r);return L.matches[H-1]?.routeId}}),R=u.isRoot?u.options.shellComponent??nr:nr;return F.jsxs(R,{children:[F.jsx(qs.Provider,{value:r,children:F.jsx(b,{fallback:d,children:F.jsx(S,{getResetKey:()=>C,errorComponent:m||Es,onCatch:(L,H)=>{if(on(L))throw L;g?.(L,H)},children:F.jsx(w,{fallback:L=>{if(!p||L.routeId&&L.routeId!==o.routeId||!L.routeId&&!u.isRoot)throw L;return K.createElement(p,L)},children:v||o._displayPending?F.jsx(yS,{fallback:d,children:F.jsx(Jg,{matchId:r})}):F.jsx(Jg,{matchId:r})})})})}),_===Pt&&l.options.scrollRestoration?F.jsxs(F.Fragment,{children:[F.jsx(QS,{}),F.jsx(KS,{})]}):null]})});function QS(){const n=xt(),r=K.useRef(void 0);return F.jsx("script",{suppressHydrationWarning:!0,ref:l=>{l&&(r.current===void 0||r.current.href!==n.latestLocation.href)&&(n.emit({type:"onRendered",...ei(n.state)}),r.current=n.latestLocation)}},n.latestLocation.state.__TSR_key)}const Jg=K.memo(function({matchId:r}){const l=xt(),{match:o,key:u,routeId:f}=ot({select:g=>{const p=g.matches.find(C=>C.id===r),v=p.routeId,S=(l.routesById[v].options.remountDeps??l.options.defaultRemountDeps)?.({routeId:v,loaderDeps:p.loaderDeps,params:p._strictParams,search:p._strictSearch});return{key:S?JSON.stringify(S):void 0,routeId:v,match:{id:p.id,status:p.status,error:p.error,_forcePending:p._forcePending,_displayPending:p._displayPending}}},structuralSharing:!0}),d=l.routesById[f],m=K.useMemo(()=>{const g=d.options.component??l.options.defaultComponent;return g?F.jsx(g,{},u):F.jsx(iy,{})},[u,d.options.component,l.options.defaultComponent]);if(o._displayPending)throw l.getMatch(o.id)?._nonReactive.displayPendingPromise;if(o._forcePending)throw l.getMatch(o.id)?._nonReactive.minPendingPromise;if(o.status==="pending"){const g=d.options.pendingMinMs??l.options.defaultPendingMinMs;if(g){const p=l.getMatch(o.id);if(p&&!p._nonReactive.minPendingPromise&&!l.isServer){const v=rr();p._nonReactive.minPendingPromise=v,setTimeout(()=>{v.resolve(),p._nonReactive.minPendingPromise=void 0},g)}}throw l.getMatch(o.id)?._nonReactive.loadPromise}if(o.status==="notFound")return Qn(on(o.error)),ny(l,d,o.error);if(o.status==="redirected")throw Qn(mn(o.error)),l.getMatch(o.id)?._nonReactive.loadPromise;if(o.status==="error"){if(l.isServer){const g=(d.options.errorComponent??l.options.defaultErrorComponent)||Es;return F.jsx(g,{error:o.error,reset:void 0,info:{componentStack:""}})}throw o.error}return m}),iy=K.memo(function(){const r=xt(),l=K.useContext(qs),o=ot({select:p=>p.matches.find(v=>v.id===l)?.routeId}),u=r.routesById[o],f=ot({select:p=>{const b=p.matches.find(S=>S.id===l);return Qn(b),b.globalNotFound}}),d=ot({select:p=>{const v=p.matches,b=v.findIndex(S=>S.id===l);return v[b+1]?.id}}),m=r.options.defaultPendingComponent?F.jsx(r.options.defaultPendingComponent,{}):null;if(f)return ny(r,u,void 0);if(!d)return null;const g=F.jsx(ay,{matchId:d});return o===Pt?F.jsx(K.Suspense,{fallback:m,children:g}):g});function FS(){const n=xt(),l=n.routesById[Pt].options.pendingComponent??n.options.defaultPendingComponent,o=l?F.jsx(l,{}):null,u=n.isServer||typeof document<"u"&&n.ssr?nr:K.Suspense,f=F.jsxs(u,{fallback:o,children:[!n.isServer&&F.jsx(VS,{}),F.jsx(ZS,{})]});return n.options.InnerWrap?F.jsx(n.options.InnerWrap,{children:f}):f}function ZS(){const n=xt(),r=ot({select:u=>u.matches[0]?.id}),l=ot({select:u=>u.loadedAt}),o=r?F.jsx(ay,{matchId:r}):null;return F.jsx(qs.Provider,{value:r,children:n.options.disableGlobalCatchBoundary?o:F.jsx(nd,{getResetKey:()=>l,errorComponent:Es,onCatch:u=>{u.message||u.toString()},children:o})})}const WS=n=>new IS(n);class IS extends uS{constructor(r){super(r)}}typeof globalThis<"u"?(globalThis.createFileRoute=ai,globalThis.createLazyFileRoute=Xg):typeof window<"u"&&(window.createFileRoute=ai,window.createLazyFileRoute=Xg);function ex({router:n,children:r,...l}){Object.keys(l).length>0&&n.update({...n.options,...l,context:{...n.options.context,...l.context}});const o=ey(),u=F.jsx(o.Provider,{value:n,children:r});return n.options.Wrap?F.jsx(n.options.Wrap,{children:u}):u}function tx({router:n,...r}){return F.jsx(ex,{router:n,...r,children:F.jsx(FS,{})})}function nx({tag:n,attrs:r,children:l,nonce:o}){switch(n){case"title":return F.jsx("title",{...r,suppressHydrationWarning:!0,children:l});case"meta":return F.jsx("meta",{...r,suppressHydrationWarning:!0});case"link":return F.jsx("link",{...r,nonce:o,suppressHydrationWarning:!0});case"style":return F.jsx("style",{...r,dangerouslySetInnerHTML:{__html:l},nonce:o});case"script":return F.jsx(ax,{attrs:r,children:l});default:return null}}function ax({attrs:n,children:r}){const l=xt();if(K.useEffect(()=>{if(n?.src){const o=(()=>{try{const d=document.baseURI||window.location.href;return new URL(n.src,d).href}catch{return n.src}})();if(Array.from(document.querySelectorAll("script[src]")).find(d=>d.src===o))return;const f=document.createElement("script");for(const[d,m]of Object.entries(n))d!=="suppressHydrationWarning"&&m!==void 0&&m!==!1&&f.setAttribute(d,typeof m=="boolean"?"":String(m));return document.head.appendChild(f),()=>{f.parentNode&&f.parentNode.removeChild(f)}}if(typeof r=="string"){const o=typeof n?.type=="string"?n.type:"text/javascript",u=typeof n?.nonce=="string"?n.nonce:void 0;if(Array.from(document.querySelectorAll("script:not([src])")).find(m=>{if(!(m instanceof HTMLScriptElement))return!1;const g=m.getAttribute("type")??"text/javascript",p=m.getAttribute("nonce")??void 0;return m.textContent===r&&g===o&&p===u}))return;const d=document.createElement("script");if(d.textContent=r,n)for(const[m,g]of Object.entries(n))m!=="suppressHydrationWarning"&&g!==void 0&&g!==!1&&d.setAttribute(m,typeof g=="boolean"?"":String(g));return document.head.appendChild(d),()=>{d.parentNode&&d.parentNode.removeChild(d)}}},[n,r]),!l.isServer){const{src:o,...u}=n||{};return F.jsx("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""},...u})}return n?.src&&typeof n.src=="string"?F.jsx("script",{...n,suppressHydrationWarning:!0}):typeof r=="string"?F.jsx("script",{...n,dangerouslySetInnerHTML:{__html:r},suppressHydrationWarning:!0}):null}const ix=()=>{const n=xt(),r=n.options.ssr?.nonce,l=ot({select:g=>g.matches.map(p=>p.meta).filter(Boolean)}),o=K.useMemo(()=>{const g=[],p={};let v;for(let b=l.length-1;b>=0;b--){const S=l[b];for(let w=S.length-1;w>=0;w--){const C=S[w];if(C)if(C.title)v||(v={tag:"title",children:C.title});else{const _=C.name??C.property;if(_){if(p[_])continue;p[_]=!0}g.push({tag:"meta",attrs:{...C,nonce:r}})}}}return v&&g.push(v),r&&g.push({tag:"meta",attrs:{property:"csp-nonce",content:r}}),g.reverse(),g},[l,r]),u=ot({select:g=>{const p=g.matches.map(S=>S.links).filter(Boolean).flat(1).map(S=>({tag:"link",attrs:{...S,nonce:r}})),v=n.ssr?.manifest,b=g.matches.map(S=>v?.routes[S.routeId]?.assets??[]).filter(Boolean).flat(1).filter(S=>S.tag==="link").map(S=>({tag:"link",attrs:{...S.attrs,suppressHydrationWarning:!0,nonce:r}}));return[...p,...b]},structuralSharing:!0}),f=ot({select:g=>{const p=[];return g.matches.map(v=>n.looseRoutesById[v.routeId]).forEach(v=>n.ssr?.manifest?.routes[v.id]?.preloads?.filter(Boolean).forEach(b=>{p.push({tag:"link",attrs:{rel:"modulepreload",href:b,nonce:r}})})),p},structuralSharing:!0}),d=ot({select:g=>g.matches.map(p=>p.styles).flat(1).filter(Boolean).map(({children:p,...v})=>({tag:"style",attrs:v,children:p,nonce:r})),structuralSharing:!0}),m=ot({select:g=>g.matches.map(p=>p.headScripts).flat(1).filter(Boolean).map(({children:p,...v})=>({tag:"script",attrs:{...v,nonce:r},children:p})),structuralSharing:!0});return lx([...o,...f,...u,...d,...m],g=>JSON.stringify(g))};function rx(){const n=ix(),l=xt().options.ssr?.nonce;return n.map(o=>K.createElement(nx,{...o,key:`tsr-meta-${JSON.stringify(o)}`,nonce:l}))}function lx(n,r){const l=new Set;return n.filter(o=>{const u=r(o);return l.has(u)?!1:(l.add(u),!0)})}var wf={exports:{}},sl={},_f={exports:{}},Cf={};var Kg;function ox(){return Kg||(Kg=1,(function(n){function r(D,W){var oe=D.length;D.push(W);e:for(;0<oe;){var we=oe-1>>>1,Ae=D[we];if(0<u(Ae,W))D[we]=W,D[oe]=Ae,oe=we;else break e}}function l(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var W=D[0],oe=D.pop();if(oe!==W){D[0]=oe;e:for(var we=0,Ae=D.length,M=Ae>>>1;we<M;){var P=2*(we+1)-1,te=D[P],ae=P+1,ue=D[ae];if(0>u(te,oe))ae<Ae&&0>u(ue,te)?(D[we]=ue,D[ae]=oe,we=ae):(D[we]=te,D[P]=oe,we=P);else if(ae<Ae&&0>u(ue,oe))D[we]=ue,D[ae]=oe,we=ae;else break e}}return W}function u(D,W){var oe=D.sortIndex-W.sortIndex;return oe!==0?oe:D.id-W.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var g=[],p=[],v=1,b=null,S=3,w=!1,C=!1,_=!1,R=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function $(D){for(var W=l(p);W!==null;){if(W.callback===null)o(p);else if(W.startTime<=D)o(p),W.sortIndex=W.expirationTime,r(g,W);else break;W=l(p)}}function B(D){if(_=!1,$(D),!C)if(l(g)!==null)C=!0,q||(q=!0,x());else{var W=l(p);W!==null&&re(B,W.startTime-D)}}var q=!1,z=-1,G=5,Q=-1;function ee(){return R?!0:!(n.unstable_now()-Q<G)}function I(){if(R=!1,q){var D=n.unstable_now();Q=D;var W=!0;try{e:{C=!1,_&&(_=!1,H(z),z=-1),w=!0;var oe=S;try{t:{for($(D),b=l(g);b!==null&&!(b.expirationTime>D&&ee());){var we=b.callback;if(typeof we=="function"){b.callback=null,S=b.priorityLevel;var Ae=we(b.expirationTime<=D);if(D=n.unstable_now(),typeof Ae=="function"){b.callback=Ae,$(D),W=!0;break t}b===l(g)&&o(g),$(D)}else o(g);b=l(g)}if(b!==null)W=!0;else{var M=l(p);M!==null&&re(B,M.startTime-D),W=!1}}break e}finally{b=null,S=oe,w=!1}W=void 0}}finally{W?x():q=!1}}}var x;if(typeof U=="function")x=function(){U(I)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,Z=ne.port2;ne.port1.onmessage=I,x=function(){Z.postMessage(null)}}else x=function(){L(I,0)};function re(D,W){z=L(function(){D(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(D){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var oe=S;S=W;try{return D()}finally{S=oe}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var oe=S;S=D;try{return W()}finally{S=oe}},n.unstable_scheduleCallback=function(D,W,oe){var we=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?we+oe:we):oe=we,D){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=oe+Ae,D={id:v++,callback:W,priorityLevel:D,startTime:oe,expirationTime:Ae,sortIndex:-1},oe>we?(D.sortIndex=oe,r(p,D),l(g)===null&&D===l(p)&&(_?(H(z),z=-1):_=!0,re(B,oe-we))):(D.sortIndex=Ae,r(g,D),C||w||(C=!0,q||(q=!0,x()))),D},n.unstable_shouldYield=ee,n.unstable_wrapCallback=function(D){var W=S;return function(){var oe=S;S=W;try{return D.apply(this,arguments)}finally{S=oe}}}})(Cf)),Cf}var Qg;function sx(){return Qg||(Qg=1,_f.exports=ox()),_f.exports}var Fg;function ux(){if(Fg)return sl;Fg=1;var n=sx(),r=Tl(),l=ty();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){a=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return g(s),e;if(c===i)return g(s),t;c=c.sibling}throw Error(o(188))}if(a.return!==i.return)a=s,i=c;else{for(var h=!1,y=s.child;y;){if(y===a){h=!0,a=s,i=c;break}if(y===i){h=!0,i=s,a=c;break}y=y.sibling}if(!h){for(y=c.child;y;){if(y===a){h=!0,a=c,i=s;break}if(y===i){h=!0,i=c,a=s;break}y=y.sibling}if(!h)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),U=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function x(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case L:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case q:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case U:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}var re=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},we=[],Ae=-1;function M(e){return{current:e}}function P(e){0>Ae||(e.current=we[Ae],we[Ae]=null,Ae--)}function te(e,t){Ae++,we[Ae]=e.current,e.current=t}var ae=M(null),ue=M(null),fe=M(null),me=M(null);function Xe(e,t){switch(te(fe,t),te(ue,e),te(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xp(t),e=Jp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ae),te(ae,e)}function Te(){P(ae),P(ue),P(fe)}function un(e){e.memoizedState!==null&&te(me,e);var t=ae.current,a=Jp(t,e.type);t!==a&&(te(ue,e),te(ae,a))}function pn(e){ue.current===e&&(P(ae),P(ue)),me.current===e&&(P(me),el._currentValue=oe)}var Ct,Ea;function Xt(e){if(Ct===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ct=t&&t[1]||"",Ea=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+e+Ea}var Rn=!1;function qa(e,t){if(!e||Rn)return"";Rn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(j){var N=j}Reflect.construct(e,[],J)}else{try{J.call()}catch(j){N=j}e.call(J.prototype)}}else{try{throw Error()}catch(j){N=j}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(j){if(j&&N&&typeof j.stack=="string")return[j.stack,N.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),h=c[0],y=c[1];if(h&&y){var A=h.split(`
`),k=y.split(`
`);for(s=i=0;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;for(;s<k.length&&!k[s].includes("DetermineComponentFrameRoot");)s++;if(i===A.length||s===k.length)for(i=A.length-1,s=k.length-1;1<=i&&0<=s&&A[i]!==k[s];)s--;for(;1<=i&&0<=s;i--,s--)if(A[i]!==k[s]){if(i!==1||s!==1)do if(i--,s--,0>s||A[i]!==k[s]){var V=`
`+A[i].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=i&&0<=s);break}}}finally{Rn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function fi(e,t){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return e.child!==t&&t!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return qa(e.type,!1);case 11:return qa(e.type.render,!1);case 1:return qa(e.type,!0);case 31:return Xt("Activity");default:return""}}function Zn(e){try{var t="",a=null;do t+=fi(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var et=Object.prototype.hasOwnProperty,kt=n.unstable_scheduleCallback,gn=n.unstable_cancelCallback,bn=n.unstable_shouldYield,qe=n.unstable_requestPaint,xe=n.unstable_now,yt=n.unstable_getCurrentPriorityLevel,st=n.unstable_ImmediatePriority,Pe=n.unstable_UserBlockingPriority,ft=n.unstable_NormalPriority,Jt=n.unstable_LowPriority,di=n.unstable_IdlePriority,Xs=n.log,Fy=n.unstable_setDisableYieldValue,dr=null,zt=null;function Wn(e){if(typeof Xs=="function"&&Fy(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(dr,e)}catch{}}var Dt=Math.clz32?Math.clz32:Iy,Zy=Math.log,Wy=Math.LN2;function Iy(e){return e>>>=0,e===0?32:31-(Zy(e)/Wy|0)|0}var Bl=256,Nl=262144,jl=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ul(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=i&134217727;return y!==0?(i=y&~c,i!==0?s=La(i):(h&=y,h!==0?s=La(h):a||(a=y&~e,a!==0&&(s=La(a))))):(y=i&~c,y!==0?s=La(y):h!==0?s=La(h):a||(a=i&~e,a!==0&&(s=La(a)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:s}function mr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function e0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(){var e=jl;return jl<<=1,(jl&62914560)===0&&(jl=4194304),e}function Js(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function hr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,t,a,i,s,c){var h=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,A=e.expirationTimes,k=e.hiddenUpdates;for(a=h&~a;0<a;){var V=31-Dt(a),J=1<<V;y[V]=0,A[V]=-1;var N=k[V];if(N!==null)for(k[V]=null,V=0;V<N.length;V++){var j=N[V];j!==null&&(j.lane&=-536870913)}a&=~J}i!==0&&Rd(e,i,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function Rd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Dt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Ed(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Dt(a),s=1<<i;s&t|e[i]&t&&(e[i]|=t),a&=~s}}function qd(e,t){var a=t&-t;return a=(a&42)!==0?1:Ks(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ld(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:gg(e.type))}function Od(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var In=Math.random().toString(36).slice(2),dt="__reactFiber$"+In,At="__reactProps$"+In,mi="__reactContainer$"+In,Fs="__reactEvents$"+In,n0="__reactListeners$"+In,a0="__reactHandles$"+In,kd="__reactResources$"+In,pr="__reactMarker$"+In;function Zs(e){delete e[dt],delete e[At],delete e[Fs],delete e[n0],delete e[a0]}function hi(e){var t=e[dt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[mi]||a[dt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=eg(e);e!==null;){if(a=e[dt])return a;e=eg(e)}return t}e=a,a=e.parentNode}return null}function pi(e){if(e=e[dt]||e[mi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function gi(e){var t=e[kd];return t||(t=e[kd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[pr]=!0}var zd=new Set,Dd={};function Oa(e,t){bi(e,t),bi(e+"Capture",t)}function bi(e,t){for(Dd[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var i0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bd={},Nd={};function r0(e){return et.call(Nd,e)?!0:et.call(Bd,e)?!1:i0.test(e)?Nd[e]=!0:(Bd[e]=!0,!1)}function Gl(e,t,a){if(r0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Hl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function En(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l0(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ws(e){if(!e._valueTracker){var t=jd(e)?"checked":"value";e._valueTracker=l0(e,t,""+e[t])}}function Ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=jd(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o0=/[\n"\\]/g;function Qt(e){return e.replace(o0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Is(e,t,a,i,s,c,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?eu(e,h,Kt(t)):a!=null?eu(e,h,Kt(a)):i!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Kt(y):e.removeAttribute("name")}function Gd(e,t,a,i,s,c,h,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ws(e);return}a=a!=null?""+Kt(a):"",t=t!=null?""+Kt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Ws(e)}function eu(e,t,a){t==="number"&&$l(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yi(e,t,a,i){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Kt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Hd(e,t,a){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Kt(a):""}function $d(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(re(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Kt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ws(e)}function vi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||s0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vd(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&a[s]!==i&&Pd(e,s,i)}else for(var c in t)t.hasOwnProperty(c)&&Pd(e,c,t[c])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(e){return c0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qn(){}var nu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,xi=null;function Yd(e){var t=pi(e);if(t&&(e=t.stateNode)){var a=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(Is(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var s=i[At]||null;if(!s)throw Error(o(90));Is(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Ud(i)}break e;case"textarea":Hd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&yi(e,!!a.multiple,t,!1)}}}var iu=!1;function Xd(e,t,a){if(iu)return e(t,a);iu=!0;try{var i=e(t);return i}finally{if(iu=!1,(Si!==null||xi!==null)&&(Lo(),Si&&(t=Si,e=xi,xi=Si=null,Yd(t),e)))for(t=0;t<e.length;t++)Yd(e[t])}}function br(e,t){var a=e.stateNode;if(a===null)return null;var i=a[At]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Ln)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ru=!1}var ea=null,lu=null,Vl=null;function Jd(){if(Vl)return Vl;var e,t=lu,a=t.length,i,s="value"in ea?ea.value:ea.textContent,c=s.length;for(e=0;e<a&&t[e]===s[e];e++);var h=a-e;for(i=1;i<=h&&t[a-i]===s[c-i];i++);return Vl=s.slice(e,1<i?1-i:void 0)}function Yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xl(){return!0}function Kd(){return!1}function Tt(e){function t(a,i,s,c,h){this._reactName=a,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Xl:Kd,this.isPropagationStopped=Kd,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Tt(ka),vr=b({},ka,{view:0,detail:0}),f0=Tt(vr),ou,su,Sr,Kl=b({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(ou=e.screenX-Sr.screenX,su=e.screenY-Sr.screenY):su=ou=0,Sr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:su}}),Qd=Tt(Kl),d0=b({},Kl,{dataTransfer:0}),m0=Tt(d0),h0=b({},vr,{relatedTarget:0}),uu=Tt(h0),p0=b({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Tt(p0),b0=b({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=Tt(b0),v0=b({},ka,{data:0}),Fd=Tt(v0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w0[e])?!!t[e]:!1}function cu(){return _0}var C0=b({},vr,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=Tt(C0),T0=b({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=Tt(T0),M0=b({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),R0=Tt(M0),E0=b({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=Tt(E0),L0=b({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=Tt(L0),k0=b({},ka,{newState:0,oldState:0}),z0=Tt(k0),D0=[9,13,27,32],fu=Ln&&"CompositionEvent"in window,xr=null;Ln&&"documentMode"in document&&(xr=document.documentMode);var B0=Ln&&"TextEvent"in window&&!xr,Wd=Ln&&(!fu||xr&&8<xr&&11>=xr),Id=" ",em=!1;function tm(e,t){switch(e){case"keyup":return D0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wi=!1;function N0(e,t){switch(e){case"compositionend":return nm(t);case"keypress":return t.which!==32?null:(em=!0,Id);case"textInput":return e=t.data,e===Id&&em?null:e;default:return null}}function j0(e,t){if(wi)return e==="compositionend"||!fu&&tm(e,t)?(e=Jd(),Vl=lu=ea=null,wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wd&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function im(e,t,a,i){Si?xi?xi.push(i):xi=[i]:Si=i,t=jo(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var wr=null,_r=null;function G0(e){Gp(e,0)}function Ql(e){var t=gr(e);if(Ud(t))return e}function rm(e,t){if(e==="change")return t}var lm=!1;if(Ln){var du;if(Ln){var mu="oninput"in document;if(!mu){var om=document.createElement("div");om.setAttribute("oninput","return;"),mu=typeof om.oninput=="function"}du=mu}else du=!1;lm=du&&(!document.documentMode||9<document.documentMode)}function sm(){wr&&(wr.detachEvent("onpropertychange",um),_r=wr=null)}function um(e){if(e.propertyName==="value"&&Ql(_r)){var t=[];im(t,_r,e,au(e)),Xd(G0,t)}}function H0(e,t,a){e==="focusin"?(sm(),wr=t,_r=a,wr.attachEvent("onpropertychange",um)):e==="focusout"&&sm()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(_r)}function P0(e,t){if(e==="click")return Ql(t)}function V0(e,t){if(e==="input"||e==="change")return Ql(t)}function Y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:Y0;function Cr(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var s=a[i];if(!et.call(t,s)||!Bt(e[s],t[s]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,t){var a=cm(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cm(a)}}function dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$l(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$l(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var X0=Ln&&"documentMode"in document&&11>=document.documentMode,_i=null,pu=null,Ar=null,gu=!1;function hm(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||_i==null||_i!==$l(i)||(i=_i,"selectionStart"in i&&hu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ar&&Cr(Ar,i)||(Ar=i,i=jo(pu,"onSelect"),0<i.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=_i)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ci={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},bu={},pm={};Ln&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function Da(e){if(bu[e])return bu[e];if(!Ci[e])return e;var t=Ci[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in pm)return bu[e]=t[a];return e}var gm=Da("animationend"),bm=Da("animationiteration"),ym=Da("animationstart"),J0=Da("transitionrun"),K0=Da("transitionstart"),Q0=Da("transitioncancel"),vm=Da("transitionend"),Sm=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function cn(e,t){Sm.set(e,t),Oa(t,[e])}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ft=[],Ai=0,vu=0;function Zl(){for(var e=Ai,t=vu=Ai=0;t<e;){var a=Ft[t];Ft[t++]=null;var i=Ft[t];Ft[t++]=null;var s=Ft[t];Ft[t++]=null;var c=Ft[t];if(Ft[t++]=null,i!==null&&s!==null){var h=i.pending;h===null?s.next=s:(s.next=h.next,h.next=s),i.pending=s}c!==0&&xm(a,s,c)}}function Wl(e,t,a,i){Ft[Ai++]=e,Ft[Ai++]=t,Ft[Ai++]=a,Ft[Ai++]=i,vu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Su(e,t,a,i){return Wl(e,t,a,i),Il(e)}function Ba(e,t){return Wl(e,null,null,t),Il(e)}function xm(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var s=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-Dt(a),e=c.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=a|536870912),c):null}function Il(e){if(50<Jr)throw Jr=0,Ec=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ti={};function F0(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,i){return new F0(e,t,a,i)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function On(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function eo(e,t,a,i,s,c){var h=0;if(i=e,typeof e=="function")xu(e)&&(h=1);else if(typeof e=="string")h=t1(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=Nt(31,a,t,s),e.elementType=Q,e.lanes=c,e;case _:return Na(a.children,s,c,t);case R:h=8,s|=24;break;case L:return e=Nt(12,a,t,s|2),e.elementType=L,e.lanes=c,e;case B:return e=Nt(13,a,t,s),e.elementType=B,e.lanes=c,e;case q:return e=Nt(19,a,t,s),e.elementType=q,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:h=10;break e;case H:h=9;break e;case $:h=11;break e;case z:h=14;break e;case G:h=16,i=null;break e}h=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Nt(h,a,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function Na(e,t,a,i){return e=Nt(7,e,i,t),e.lanes=a,e}function wu(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function _m(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function _u(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Cm=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var a=Cm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Zn(t)},Cm.set(e,t),t)}return{value:e,source:t,stack:Zn(t)}}var Mi=[],Ri=0,to=null,Tr=0,Wt=[],It=0,ta=null,yn=1,vn="";function kn(e,t){Mi[Ri++]=Tr,Mi[Ri++]=to,to=e,Tr=t}function Am(e,t,a){Wt[It++]=yn,Wt[It++]=vn,Wt[It++]=ta,ta=e;var i=yn;e=vn;var s=32-Dt(i)-1;i&=~(1<<s),a+=1;var c=32-Dt(t)+s;if(30<c){var h=s-s%5;c=(i&(1<<h)-1).toString(32),i>>=h,s-=h,yn=1<<32-Dt(t)+s|a<<s|i,vn=c+e}else yn=1<<c|a<<s|i,vn=e}function Cu(e){e.return!==null&&(kn(e,1),Am(e,1,0))}function Au(e){for(;e===to;)to=Mi[--Ri],Mi[Ri]=null,Tr=Mi[--Ri],Mi[Ri]=null;for(;e===ta;)ta=Wt[--It],Wt[It]=null,vn=Wt[--It],Wt[It]=null,yn=Wt[--It],Wt[It]=null}function Tm(e,t){Wt[It++]=yn,Wt[It++]=vn,Wt[It++]=ta,yn=t.id,vn=t.overflow,ta=e}var mt=null,He=null,Se=!1,na=null,en=!1,Tu=Error(o(519));function aa(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mr(Zt(t,e)),Tu}function Mm(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[dt]=e,t[At]=i,a){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(a=0;a<Qr.length;a++)be(Qr[a],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),Gd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),$d(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Vp(t.textContent,a)?(i.popover!=null&&(be("beforetoggle",t),be("toggle",t)),i.onScroll!=null&&be("scroll",t),i.onScrollEnd!=null&&be("scrollend",t),i.onClick!=null&&(t.onclick=qn),t=!0):t=!1,t||aa(e,!0)}function Rm(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:mt=mt.return}}function Ei(e){if(e!==mt)return!1;if(!Se)return Rm(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vc(e.type,e.memoizedProps)),a=!a),a&&He&&aa(e),Rm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=Ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=Ip(e)}else t===27?(t=He,ba(e.type)?(e=Qc,Qc=null,He=e):He=t):He=mt?nn(e.stateNode.nextSibling):null;return!0}function ja(){He=mt=null,Se=!1}function Mu(){var e=na;return e!==null&&(qt===null?qt=e:qt.push.apply(qt,e),na=null),e}function Mr(e){na===null?na=[e]:na.push(e)}var Ru=M(null),Ua=null,zn=null;function ia(e,t,a){te(Ru,t._currentValue),t._currentValue=a}function Dn(e){e._currentValue=Ru.current,P(Ru)}function Eu(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function qu(e,t,a,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var h=s.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=s;for(var A=0;A<t.length;A++)if(y.context===t[A]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),Eu(c.return,a,e),i||(h=null);break e}c=y.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(o(341));h.lanes|=a,c=h.alternate,c!==null&&(c.lanes|=a),Eu(h,a,e),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===e){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function qi(e,t,a,i){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var y=s.type;Bt(s.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(s===me.current){if(h=s.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(el):e=[el])}s=s.return}e!==null&&qu(t,e,a,i),t.flags|=262144}function no(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ua=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Em(Ua,e)}function ao(e,t){return Ua===null&&Ga(e),Em(e,t)}function Em(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},zn===null){if(e===null)throw Error(o(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return a}var Z0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},W0=n.unstable_scheduleCallback,I0=n.unstable_NormalPriority,tt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Z0,data:new Map,refCount:0}}function Rr(e){e.refCount--,e.refCount===0&&W0(I0,function(){e.controller.abort()})}var Er=null,Ou=0,Li=0,Oi=null;function ev(e,t){if(Er===null){var a=Er=[];Ou=0,Li=Dc(),Oi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Ou++,t.then(qm,qm),t}function qm(){if(--Ou===0&&Er!==null){Oi!==null&&(Oi.status="fulfilled");var e=Er;Er=null,Li=0,Oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tv(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),i}var Lm=D.S;D.S=function(e,t){hp=xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ev(e,t),Lm!==null&&Lm(e,t)};var Ha=M(null);function ku(){var e=Ha.current;return e!==null?e:Ge.pooledCache}function io(e,t){t===null?te(Ha,Ha.current):te(Ha,t.pool)}function Om(){var e=ku();return e===null?null:{parent:tt._currentValue,pool:e}}var ki=Error(o(460)),zu=Error(o(474)),ro=Error(o(542)),lo={then:function(){}};function km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qn,qn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e;default:if(typeof t.status=="string")t.then(qn,qn);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e}throw Pa=t,ki}}function $a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Pa=a,ki):a}}var Pa=null;function Dm(){if(Pa===null)throw Error(o(459));var e=Pa;return Pa=null,e}function Bm(e){if(e===ki||e===ro)throw Error(o(483))}var zi=null,qr=0;function oo(e){var t=qr;return qr+=1,zi===null&&(zi=[]),zm(zi,e,t)}function Lr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function so(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nm(e){function t(E,T){if(e){var O=E.deletions;O===null?(E.deletions=[T],E.flags|=16):O.push(T)}}function a(E,T){if(!e)return null;for(;T!==null;)t(E,T),T=T.sibling;return null}function i(E){for(var T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function s(E,T){return E=On(E,T),E.index=0,E.sibling=null,E}function c(E,T,O){return E.index=O,e?(O=E.alternate,O!==null?(O=O.index,O<T?(E.flags|=67108866,T):O):(E.flags|=67108866,T)):(E.flags|=1048576,T)}function h(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function y(E,T,O,X){return T===null||T.tag!==6?(T=wu(O,E.mode,X),T.return=E,T):(T=s(T,O),T.return=E,T)}function A(E,T,O,X){var se=O.type;return se===_?V(E,T,O.props.children,X,O.key):T!==null&&(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===G&&$a(se)===T.type)?(T=s(T,O.props),Lr(T,O),T.return=E,T):(T=eo(O.type,O.key,O.props,null,E.mode,X),Lr(T,O),T.return=E,T)}function k(E,T,O,X){return T===null||T.tag!==4||T.stateNode.containerInfo!==O.containerInfo||T.stateNode.implementation!==O.implementation?(T=_u(O,E.mode,X),T.return=E,T):(T=s(T,O.children||[]),T.return=E,T)}function V(E,T,O,X,se){return T===null||T.tag!==7?(T=Na(O,E.mode,X,se),T.return=E,T):(T=s(T,O),T.return=E,T)}function J(E,T,O){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=wu(""+T,E.mode,O),T.return=E,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return O=eo(T.type,T.key,T.props,null,E.mode,O),Lr(O,T),O.return=E,O;case C:return T=_u(T,E.mode,O),T.return=E,T;case G:return T=$a(T),J(E,T,O)}if(re(T)||x(T))return T=Na(T,E.mode,O,null),T.return=E,T;if(typeof T.then=="function")return J(E,oo(T),O);if(T.$$typeof===U)return J(E,ao(E,T),O);so(E,T)}return null}function N(E,T,O,X){var se=T!==null?T.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return se!==null?null:y(E,T,""+O,X);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return O.key===se?A(E,T,O,X):null;case C:return O.key===se?k(E,T,O,X):null;case G:return O=$a(O),N(E,T,O,X)}if(re(O)||x(O))return se!==null?null:V(E,T,O,X,null);if(typeof O.then=="function")return N(E,T,oo(O),X);if(O.$$typeof===U)return N(E,T,ao(E,O),X);so(E,O)}return null}function j(E,T,O,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return E=E.get(O)||null,y(T,E,""+X,se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return E=E.get(X.key===null?O:X.key)||null,A(T,E,X,se);case C:return E=E.get(X.key===null?O:X.key)||null,k(T,E,X,se);case G:return X=$a(X),j(E,T,O,X,se)}if(re(X)||x(X))return E=E.get(O)||null,V(T,E,X,se,null);if(typeof X.then=="function")return j(E,T,O,oo(X),se);if(X.$$typeof===U)return j(E,T,O,ao(T,X),se);so(T,X)}return null}function ie(E,T,O,X){for(var se=null,_e=null,le=T,pe=T=0,ve=null;le!==null&&pe<O.length;pe++){le.index>pe?(ve=le,le=null):ve=le.sibling;var Ce=N(E,le,O[pe],X);if(Ce===null){le===null&&(le=ve);break}e&&le&&Ce.alternate===null&&t(E,le),T=c(Ce,T,pe),_e===null?se=Ce:_e.sibling=Ce,_e=Ce,le=ve}if(pe===O.length)return a(E,le),Se&&kn(E,pe),se;if(le===null){for(;pe<O.length;pe++)le=J(E,O[pe],X),le!==null&&(T=c(le,T,pe),_e===null?se=le:_e.sibling=le,_e=le);return Se&&kn(E,pe),se}for(le=i(le);pe<O.length;pe++)ve=j(le,E,pe,O[pe],X),ve!==null&&(e&&ve.alternate!==null&&le.delete(ve.key===null?pe:ve.key),T=c(ve,T,pe),_e===null?se=ve:_e.sibling=ve,_e=ve);return e&&le.forEach(function(wa){return t(E,wa)}),Se&&kn(E,pe),se}function ce(E,T,O,X){if(O==null)throw Error(o(151));for(var se=null,_e=null,le=T,pe=T=0,ve=null,Ce=O.next();le!==null&&!Ce.done;pe++,Ce=O.next()){le.index>pe?(ve=le,le=null):ve=le.sibling;var wa=N(E,le,Ce.value,X);if(wa===null){le===null&&(le=ve);break}e&&le&&wa.alternate===null&&t(E,le),T=c(wa,T,pe),_e===null?se=wa:_e.sibling=wa,_e=wa,le=ve}if(Ce.done)return a(E,le),Se&&kn(E,pe),se;if(le===null){for(;!Ce.done;pe++,Ce=O.next())Ce=J(E,Ce.value,X),Ce!==null&&(T=c(Ce,T,pe),_e===null?se=Ce:_e.sibling=Ce,_e=Ce);return Se&&kn(E,pe),se}for(le=i(le);!Ce.done;pe++,Ce=O.next())Ce=j(le,E,pe,Ce.value,X),Ce!==null&&(e&&Ce.alternate!==null&&le.delete(Ce.key===null?pe:Ce.key),T=c(Ce,T,pe),_e===null?se=Ce:_e.sibling=Ce,_e=Ce);return e&&le.forEach(function(d1){return t(E,d1)}),Se&&kn(E,pe),se}function je(E,T,O,X){if(typeof O=="object"&&O!==null&&O.type===_&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case w:e:{for(var se=O.key;T!==null;){if(T.key===se){if(se=O.type,se===_){if(T.tag===7){a(E,T.sibling),X=s(T,O.props.children),X.return=E,E=X;break e}}else if(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===G&&$a(se)===T.type){a(E,T.sibling),X=s(T,O.props),Lr(X,O),X.return=E,E=X;break e}a(E,T);break}else t(E,T);T=T.sibling}O.type===_?(X=Na(O.props.children,E.mode,X,O.key),X.return=E,E=X):(X=eo(O.type,O.key,O.props,null,E.mode,X),Lr(X,O),X.return=E,E=X)}return h(E);case C:e:{for(se=O.key;T!==null;){if(T.key===se)if(T.tag===4&&T.stateNode.containerInfo===O.containerInfo&&T.stateNode.implementation===O.implementation){a(E,T.sibling),X=s(T,O.children||[]),X.return=E,E=X;break e}else{a(E,T);break}else t(E,T);T=T.sibling}X=_u(O,E.mode,X),X.return=E,E=X}return h(E);case G:return O=$a(O),je(E,T,O,X)}if(re(O))return ie(E,T,O,X);if(x(O)){if(se=x(O),typeof se!="function")throw Error(o(150));return O=se.call(O),ce(E,T,O,X)}if(typeof O.then=="function")return je(E,T,oo(O),X);if(O.$$typeof===U)return je(E,T,ao(E,O),X);so(E,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,T!==null&&T.tag===6?(a(E,T.sibling),X=s(T,O),X.return=E,E=X):(a(E,T),X=wu(O,E.mode,X),X.return=E,E=X),h(E)):a(E,T)}return function(E,T,O,X){try{qr=0;var se=je(E,T,O,X);return zi=null,se}catch(le){if(le===ki||le===ro)throw le;var _e=Nt(29,le,null,E.mode);return _e.lanes=X,_e.return=E,_e}finally{}}}var Va=Nm(!0),jm=Nm(!1),ra=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Me&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Il(e),xm(e,null,a),t}return Wl(e,i,t,a),Il(e)}function Or(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Ed(e,a)}}function Nu(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=h:c=c.next=h,a=a.next}while(a!==null);c===null?s=c=t:c=c.next=t}else s=c=t;a={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ju=!1;function kr(){if(ju){var e=Oi;if(e!==null)throw e}}function zr(e,t,a,i){ju=!1;var s=e.updateQueue;ra=!1;var c=s.firstBaseUpdate,h=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var A=y,k=A.next;A.next=null,h===null?c=k:h.next=k,h=A;var V=e.alternate;V!==null&&(V=V.updateQueue,y=V.lastBaseUpdate,y!==h&&(y===null?V.firstBaseUpdate=k:y.next=k,V.lastBaseUpdate=A))}if(c!==null){var J=s.baseState;h=0,V=k=A=null,y=c;do{var N=y.lane&-536870913,j=N!==y.lane;if(j?(ye&N)===N:(i&N)===N){N!==0&&N===Li&&(ju=!0),V!==null&&(V=V.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ie=e,ce=y;N=t;var je=a;switch(ce.tag){case 1:if(ie=ce.payload,typeof ie=="function"){J=ie.call(je,J,N);break e}J=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ce.payload,N=typeof ie=="function"?ie.call(je,J,N):ie,N==null)break e;J=b({},J,N);break e;case 2:ra=!0}}N=y.callback,N!==null&&(e.flags|=64,j&&(e.flags|=8192),j=s.callbacks,j===null?s.callbacks=[N]:j.push(N))}else j={lane:N,tag:y.tag,payload:y.payload,callback:y.callback,next:null},V===null?(k=V=j,A=J):V=V.next=j,h|=N;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;j=y,y=j.next,j.next=null,s.lastBaseUpdate=j,s.shared.pending=null}}while(!0);V===null&&(A=J),s.baseState=A,s.firstBaseUpdate=k,s.lastBaseUpdate=V,c===null&&(s.shared.lanes=0),da|=h,e.lanes=h,e.memoizedState=J}}function Um(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Gm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Um(a[e],t)}var Di=M(null),uo=M(0);function Hm(e,t){e=Vn,te(uo,e),te(Di,t),Vn=e|t.baseLanes}function Uu(){te(uo,Vn),te(Di,Di.current)}function Gu(){Vn=uo.current,P(Di),P(uo)}var jt=M(null),tn=null;function sa(e){var t=e.alternate;te(Ze,Ze.current&1),te(jt,e),tn===null&&(t===null||Di.current!==null||t.memoizedState!==null)&&(tn=e)}function Hu(e){te(Ze,Ze.current),te(jt,e),tn===null&&(tn=e)}function $m(e){e.tag===22?(te(Ze,Ze.current),te(jt,e),tn===null&&(tn=e)):ua()}function ua(){te(Ze,Ze.current),te(jt,jt.current)}function Ut(e){P(jt),tn===e&&(tn=null),P(Ze)}var Ze=M(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jc(a)||Kc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bn=0,he=null,Be=null,nt=null,fo=!1,Bi=!1,Ya=!1,mo=0,Dr=0,Ni=null,nv=0;function Je(){throw Error(o(321))}function $u(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Bt(e[a],t[a]))return!1;return!0}function Pu(e,t,a,i,s,c){return Bn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ah:ic,Ya=!1,c=a(i,s),Ya=!1,Bi&&(c=Vm(t,a,i,s)),Pm(e),c}function Pm(e){D.H=jr;var t=Be!==null&&Be.next!==null;if(Bn=0,nt=Be=he=null,fo=!1,Dr=0,Ni=null,t)throw Error(o(300));e===null||at||(e=e.dependencies,e!==null&&no(e)&&(at=!0))}function Vm(e,t,a,i){he=e;var s=0;do{if(Bi&&(Ni=null),Dr=0,Bi=!1,25<=s)throw Error(o(301));if(s+=1,nt=Be=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=Th,c=t(a,i)}while(Bi);return c}function av(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Br(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(he.flags|=1024),t}function Vu(){var e=mo!==0;return mo=0,e}function Yu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xu(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}Bn=0,nt=Be=he=null,Bi=!1,Dr=mo=0,Ni=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?he.memoizedState=nt=e:nt=nt.next=e,nt}function We(){if(Be===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=nt===null?he.memoizedState:nt.next;if(t!==null)nt=t,Be=e;else{if(e===null)throw he.alternate===null?Error(o(467)):Error(o(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},nt===null?he.memoizedState=nt=e:nt=nt.next=e}return nt}function ho(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Br(e){var t=Dr;return Dr+=1,Ni===null&&(Ni=[]),e=zm(Ni,e,t),t=he,(nt===null?t.memoizedState:nt.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ah:ic),e}function po(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Br(e);if(e.$$typeof===U)return ht(e)}throw Error(o(438,String(e)))}function Ju(e){var t=null,a=he.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=he.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ho(),he.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ee;return t.index++,a}function Nn(e,t){return typeof t=="function"?t(e):t}function go(e){var t=We();return Ku(t,Be,e)}function Ku(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var s=e.baseQueue,c=i.pending;if(c!==null){if(s!==null){var h=s.next;s.next=c.next,c.next=h}t.baseQueue=s=c,i.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var y=h=null,A=null,k=t,V=!1;do{var J=k.lane&-536870913;if(J!==k.lane?(ye&J)===J:(Bn&J)===J){var N=k.revertLane;if(N===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),J===Li&&(V=!0);else if((Bn&N)===N){k=k.next,N===Li&&(V=!0);continue}else J={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},A===null?(y=A=J,h=c):A=A.next=J,he.lanes|=N,da|=N;J=k.action,Ya&&a(c,J),c=k.hasEagerState?k.eagerState:a(c,J)}else N={lane:J,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},A===null?(y=A=N,h=c):A=A.next=N,he.lanes|=J,da|=J;k=k.next}while(k!==null&&k!==t);if(A===null?h=c:A.next=y,!Bt(c,e.memoizedState)&&(at=!0,V&&(a=Oi,a!==null)))throw a;e.memoizedState=c,e.baseState=h,e.baseQueue=A,i.lastRenderedState=c}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Qu(e){var t=We(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,s=a.pending,c=t.memoizedState;if(s!==null){a.pending=null;var h=s=s.next;do c=e(c,h.action),h=h.next;while(h!==s);Bt(c,t.memoizedState)||(at=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,i]}function Ym(e,t,a){var i=he,s=We(),c=Se;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=t();var h=!Bt((Be||s).memoizedState,a);if(h&&(s.memoizedState=a,at=!0),s=s.queue,Wu(Km.bind(null,i,s,e),[e]),s.getSnapshot!==t||h||nt!==null&&nt.memoizedState.tag&1){if(i.flags|=2048,ji(9,{destroy:void 0},Jm.bind(null,i,s,a,t),null),Ge===null)throw Error(o(349));c||(Bn&127)!==0||Xm(i,t,a)}return a}function Xm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=he.updateQueue,t===null?(t=ho(),he.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Jm(e,t,a,i){t.value=a,t.getSnapshot=i,Qm(t)&&Fm(e)}function Km(e,t,a){return a(function(){Qm(t)&&Fm(e)})}function Qm(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Bt(e,a)}catch{return!0}}function Fm(e){var t=Ba(e,2);t!==null&&Lt(t,e,2)}function Fu(e){var t=wt();if(typeof e=="function"){var a=e;if(e=a(),Ya){Wn(!0);try{a()}finally{Wn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:e},t}function Zm(e,t,a,i){return e.baseState=a,Ku(e,Be,typeof i=="function"?i:Nn)}function iv(e,t,a,i,s){if(vo(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};D.T!==null?a(!0):c.isTransition=!1,i(c),a=t.pending,a===null?(c.next=t.pending=c,Wm(t,c)):(c.next=a.next,t.pending=a.next=c)}}function Wm(e,t){var a=t.action,i=t.payload,s=e.state;if(t.isTransition){var c=D.T,h={};D.T=h;try{var y=a(s,i),A=D.S;A!==null&&A(h,y),Im(e,t,y)}catch(k){Zu(e,t,k)}finally{c!==null&&h.types!==null&&(c.types=h.types),D.T=c}}else try{c=a(s,i),Im(e,t,c)}catch(k){Zu(e,t,k)}}function Im(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){eh(e,t,i)},function(i){return Zu(e,t,i)}):eh(e,t,a)}function eh(e,t,a){t.status="fulfilled",t.value=a,th(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wm(e,a)))}function Zu(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,th(t),t=t.next;while(t!==i)}e.action=null}function th(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nh(e,t){return t}function ah(e,t){if(Se){var a=Ge.formState;if(a!==null){e:{var i=he;if(Se){if(He){t:{for(var s=He,c=en;s.nodeType!==8;){if(!c){s=null;break t}if(s=nn(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){He=nn(s.nextSibling),i=s.data==="F!";break e}}aa(i)}i=!1}i&&(t=a[0])}}return a=wt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nh,lastRenderedState:t},a.queue=i,a=wh.bind(null,he,i),i.dispatch=a,i=Fu(!1),c=ac.bind(null,he,!1,i.queue),i=wt(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,a=iv.bind(null,he,s,c,a),s.dispatch=a,i.memoizedState=e,[t,a,!1]}function ih(e){var t=We();return rh(t,Be,e)}function rh(e,t,a){if(t=Ku(e,t,nh)[0],e=go(Nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Br(t)}catch(h){throw h===ki?ro:h}else i=t;t=We();var s=t.queue,c=s.dispatch;return a!==t.memoizedState&&(he.flags|=2048,ji(9,{destroy:void 0},rv.bind(null,s,a),null)),[i,c,e]}function rv(e,t){e.action=t}function lh(e){var t=We(),a=Be;if(a!==null)return rh(t,a,e);We(),t=t.memoizedState,a=We();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ji(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=he.updateQueue,t===null&&(t=ho(),he.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function oh(){return We().memoizedState}function bo(e,t,a,i){var s=wt();he.flags|=e,s.memoizedState=ji(1|t,{destroy:void 0},a,i===void 0?null:i)}function yo(e,t,a,i){var s=We();i=i===void 0?null:i;var c=s.memoizedState.inst;Be!==null&&i!==null&&$u(i,Be.memoizedState.deps)?s.memoizedState=ji(t,c,a,i):(he.flags|=e,s.memoizedState=ji(1|t,c,a,i))}function sh(e,t){bo(8390656,8,e,t)}function Wu(e,t){yo(2048,8,e,t)}function lv(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=ho(),he.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function uh(e){var t=We().memoizedState;return lv({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function ch(e,t){return yo(4,2,e,t)}function fh(e,t){return yo(4,4,e,t)}function dh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mh(e,t,a){a=a!=null?a.concat([e]):null,yo(4,4,dh.bind(null,t,e),a)}function Iu(){}function hh(e,t){var a=We();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&$u(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function ph(e,t){var a=We();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&$u(t,i[1]))return i[0];if(i=e(),Ya){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[i,t],i}function ec(e,t,a){return a===void 0||(Bn&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=gp(),he.lanes|=e,da|=e,a)}function gh(e,t,a,i){return Bt(a,t)?a:Di.current!==null?(e=ec(e,a,i),Bt(e,t)||(at=!0),e):(Bn&42)===0||(Bn&1073741824)!==0&&(ye&261930)===0?(at=!0,e.memoizedState=a):(e=gp(),he.lanes|=e,da|=e,t)}function bh(e,t,a,i,s){var c=W.p;W.p=c!==0&&8>c?c:8;var h=D.T,y={};D.T=y,ac(e,!1,t,a);try{var A=s(),k=D.S;if(k!==null&&k(y,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var V=tv(A,i);Nr(e,t,V,$t(e))}else Nr(e,t,i,$t(e))}catch(J){Nr(e,t,{then:function(){},status:"rejected",reason:J},$t())}finally{W.p=c,h!==null&&y.types!==null&&(h.types=y.types),D.T=h}}function ov(){}function tc(e,t,a,i){if(e.tag!==5)throw Error(o(476));var s=yh(e).queue;bh(e,s,t,oe,a===null?ov:function(){return vh(e),a(i)})}function yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vh(e){var t=yh(e);t.next===null&&(t=e.alternate.memoizedState),Nr(e,t.next.queue,{},$t())}function nc(){return ht(el)}function Sh(){return We().memoizedState}function xh(){return We().memoizedState}function sv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=$t();e=la(a);var i=oa(t,e,a);i!==null&&(Lt(i,t,a),Or(i,t,a)),t={cache:Lu()},e.payload=t;return}t=t.return}}function uv(e,t,a){var i=$t();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vo(e)?_h(t,a):(a=Su(e,t,a,i),a!==null&&(Lt(a,e,i),Ch(a,t,i)))}function wh(e,t,a){var i=$t();Nr(e,t,a,i)}function Nr(e,t,a,i){var s={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vo(e))_h(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,y=c(h,a);if(s.hasEagerState=!0,s.eagerState=y,Bt(y,h))return Wl(e,t,s,0),Ge===null&&Zl(),!1}catch{}finally{}if(a=Su(e,t,s,i),a!==null)return Lt(a,e,i),Ch(a,t,i),!0}return!1}function ac(e,t,a,i){if(i={lane:2,revertLane:Dc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},vo(e)){if(t)throw Error(o(479))}else t=Su(e,a,i,2),t!==null&&Lt(t,e,2)}function vo(e){var t=e.alternate;return e===he||t!==null&&t===he}function _h(e,t){Bi=fo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ch(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Ed(e,a)}}var jr={readContext:ht,use:po,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};jr.useEffectEvent=Je;var Ah={readContext:ht,use:po,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:sh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bo(4194308,4,dh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){bo(4,2,e,t)},useMemo:function(e,t){var a=wt();t=t===void 0?null:t;var i=e();if(Ya){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=wt();if(a!==void 0){var s=a(t);if(Ya){Wn(!0);try{a(t)}finally{Wn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=uv.bind(null,he,e),[i.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,a=wh.bind(null,he,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,t){var a=wt();return ec(a,e,t)},useTransition:function(){var e=Fu(!1);return e=bh.bind(null,he,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=he,s=wt();if(Se){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ge===null)throw Error(o(349));(ye&127)!==0||Xm(i,t,a)}s.memoizedState=a;var c={value:a,getSnapshot:t};return s.queue=c,sh(Km.bind(null,i,c,e),[e]),i.flags|=2048,ji(9,{destroy:void 0},Jm.bind(null,i,c,a,t),null),a},useId:function(){var e=wt(),t=Ge.identifierPrefix;if(Se){var a=vn,i=yn;a=(i&~(1<<32-Dt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=mo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=nv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:ah,useActionState:ah,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ac.bind(null,he,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ju,useCacheRefresh:function(){return wt().memoizedState=sv.bind(null,he)},useEffectEvent:function(e){var t=wt(),a={impl:e};return t.memoizedState=a,function(){if((Me&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},ic={readContext:ht,use:po,useCallback:hh,useContext:ht,useEffect:Wu,useImperativeHandle:mh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:ph,useReducer:go,useRef:oh,useState:function(){return go(Nn)},useDebugValue:Iu,useDeferredValue:function(e,t){var a=We();return gh(a,Be.memoizedState,e,t)},useTransition:function(){var e=go(Nn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:Ym,useId:Sh,useHostTransitionStatus:nc,useFormState:ih,useActionState:ih,useOptimistic:function(e,t){var a=We();return Zm(a,Be,e,t)},useMemoCache:Ju,useCacheRefresh:xh};ic.useEffectEvent=uh;var Th={readContext:ht,use:po,useCallback:hh,useContext:ht,useEffect:Wu,useImperativeHandle:mh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:ph,useReducer:Qu,useRef:oh,useState:function(){return Qu(Nn)},useDebugValue:Iu,useDeferredValue:function(e,t){var a=We();return Be===null?ec(a,e,t):gh(a,Be.memoizedState,e,t)},useTransition:function(){var e=Qu(Nn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:Ym,useId:Sh,useHostTransitionStatus:nc,useFormState:lh,useActionState:lh,useOptimistic:function(e,t){var a=We();return Be!==null?Zm(a,Be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:xh};Th.useEffectEvent=uh;function rc(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lc={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=$t(),s=la(i);s.payload=t,a!=null&&(s.callback=a),t=oa(e,s,i),t!==null&&(Lt(t,e,i),Or(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=$t(),s=la(i);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=oa(e,s,i),t!==null&&(Lt(t,e,i),Or(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=$t(),i=la(a);i.tag=2,t!=null&&(i.callback=t),t=oa(e,i,a),t!==null&&(Lt(t,e,a),Or(t,e,a))}};function Mh(e,t,a,i,s,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,h):t.prototype&&t.prototype.isPureReactComponent?!Cr(a,i)||!Cr(s,c):!0}function Rh(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function Xa(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function Eh(e){Fl(e)}function qh(e){console.error(e)}function Lh(e){Fl(e)}function So(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Oh(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function oc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){So(e,t)},a}function kh(e){return e=la(e),e.tag=3,e}function zh(e,t,a,i){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;e.payload=function(){return s(c)},e.callback=function(){Oh(t,a,i)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Oh(t,a,i),typeof s!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function cv(e,t,a,i,s){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&qi(t,a,s,!0),a=jt.current,a!==null){switch(a.tag){case 31:case 13:return tn===null?Oo():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=s,i===lo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Oc(e,i,s)),!1;case 22:return a.flags|=65536,i===lo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Oc(e,i,s)),!1}throw Error(o(435,a.tag))}return Oc(e,i,s),Oo(),!1}if(Se)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Tu&&(e=Error(o(422),{cause:i}),Mr(Zt(e,a)))):(i!==Tu&&(t=Error(o(423),{cause:i}),Mr(Zt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Zt(i,a),s=oc(e.stateNode,i,s),Nu(e,s),Ke!==4&&(Ke=2)),!1;var c=Error(o(520),{cause:i});if(c=Zt(c,a),Xr===null?Xr=[c]:Xr.push(c),Ke!==4&&(Ke=2),t===null)return!0;i=Zt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=oc(a.stateNode,i,e),Nu(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ma===null||!ma.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=kh(s),zh(s,e,a,i),Nu(a,s),!1}a=a.return}while(a!==null);return!1}var sc=Error(o(461)),at=!1;function pt(e,t,a,i){t.child=e===null?jm(t,null,a,i):Va(t,e.child,a,i)}function Dh(e,t,a,i,s){a=a.render;var c=t.ref;if("ref"in i){var h={};for(var y in i)y!=="ref"&&(h[y]=i[y])}else h=i;return Ga(t),i=Pu(e,t,a,h,c,s),y=Vu(),e!==null&&!at?(Yu(e,t,s),jn(e,t,s)):(Se&&y&&Cu(t),t.flags|=1,pt(e,t,i,s),t.child)}function Bh(e,t,a,i,s){if(e===null){var c=a.type;return typeof c=="function"&&!xu(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,Nh(e,t,c,i,s)):(e=eo(a.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!gc(e,s)){var h=c.memoizedProps;if(a=a.compare,a=a!==null?a:Cr,a(h,i)&&e.ref===t.ref)return jn(e,t,s)}return t.flags|=1,e=On(c,i),e.ref=t.ref,e.return=t,t.child=e}function Nh(e,t,a,i,s){if(e!==null){var c=e.memoizedProps;if(Cr(c,i)&&e.ref===t.ref)if(at=!1,t.pendingProps=i=c,gc(e,s))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,jn(e,t,s)}return uc(e,t,a,i,s)}function jh(e,t,a,i){var s=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,t.child=null;return Uh(e,t,c,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&io(t,c!==null?c.cachePool:null),c!==null?Hm(t,c):Uu(),$m(t);else return i=t.lanes=536870912,Uh(e,t,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(io(t,c.cachePool),Hm(t,c),ua(),t.memoizedState=null):(e!==null&&io(t,null),Uu(),ua());return pt(e,t,s,a),t.child}function Ur(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uh(e,t,a,i,s){var c=ku();return c=c===null?null:{parent:tt._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&io(t,null),Uu(),$m(t),e!==null&&qi(e,t,i,!0),t.childLanes=s,null}function xo(e,t){return t=_o({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gh(e,t,a){return Va(t,e.child,null,a),e=xo(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function fv(e,t,a){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(i.mode==="hidden")return e=xo(t,i),t.lanes=536870912,Ur(null,e);if(Hu(t),(e=He)?(e=Wp(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:yn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=t,t.child=a,mt=t,He=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return xo(t,i)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(Hu(t),s)if(t.flags&256)t.flags&=-257,t=Gh(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(at||qi(e,t,a,!1),s=(a&e.childLanes)!==0,at||s){if(i=Ge,i!==null&&(h=qd(i,a),h!==0&&h!==c.retryLane))throw c.retryLane=h,Ba(e,h),Lt(i,e,h),sc;Oo(),t=Gh(e,t,a)}else e=c.treeContext,He=nn(h.nextSibling),mt=t,Se=!0,na=null,en=!1,e!==null&&Tm(t,e),t=xo(t,i),t.flags|=4096;return t}return e=On(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function uc(e,t,a,i,s){return Ga(t),a=Pu(e,t,a,i,void 0,s),i=Vu(),e!==null&&!at?(Yu(e,t,s),jn(e,t,s)):(Se&&i&&Cu(t),t.flags|=1,pt(e,t,a,s),t.child)}function Hh(e,t,a,i,s,c){return Ga(t),t.updateQueue=null,a=Vm(t,i,a,s),Pm(e),i=Vu(),e!==null&&!at?(Yu(e,t,c),jn(e,t,c)):(Se&&i&&Cu(t),t.flags|=1,pt(e,t,a,c),t.child)}function $h(e,t,a,i,s){if(Ga(t),t.stateNode===null){var c=Ti,h=a.contextType;typeof h=="object"&&h!==null&&(c=ht(h)),c=new a(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=lc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},Du(t),h=a.contextType,c.context=typeof h=="object"&&h!==null?ht(h):Ti,c.state=t.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(rc(t,a,h,i),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&lc.enqueueReplaceState(c,c.state,null),zr(t,i,c,s),kr(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,A=Xa(a,y);c.props=A;var k=c.context,V=a.contextType;h=Ti,typeof V=="object"&&V!==null&&(h=ht(V));var J=a.getDerivedStateFromProps;V=typeof J=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,V||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||k!==h)&&Rh(t,c,i,h),ra=!1;var N=t.memoizedState;c.state=N,zr(t,i,c,s),kr(),k=t.memoizedState,y||N!==k||ra?(typeof J=="function"&&(rc(t,a,J,i),k=t.memoizedState),(A=ra||Mh(t,a,A,i,N,k,h))?(V||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=k),c.props=i,c.state=k,c.context=h,i=A):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Bu(e,t),h=t.memoizedProps,V=Xa(a,h),c.props=V,J=t.pendingProps,N=c.context,k=a.contextType,A=Ti,typeof k=="object"&&k!==null&&(A=ht(k)),y=a.getDerivedStateFromProps,(k=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==J||N!==A)&&Rh(t,c,i,A),ra=!1,N=t.memoizedState,c.state=N,zr(t,i,c,s),kr();var j=t.memoizedState;h!==J||N!==j||ra||e!==null&&e.dependencies!==null&&no(e.dependencies)?(typeof y=="function"&&(rc(t,a,y,i),j=t.memoizedState),(V=ra||Mh(t,a,V,i,N,j,A)||e!==null&&e.dependencies!==null&&no(e.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,j,A),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,j,A)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),c.props=i,c.state=j,c.context=A,i=V):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,wo(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Va(t,e.child,null,s),t.child=Va(t,null,a,s)):pt(e,t,a,s),t.memoizedState=c.state,e=t.child):e=jn(e,t,s),e}function Ph(e,t,a,i){return ja(),t.flags|=256,pt(e,t,a,i),t.child}var cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:Om()}}function dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ht),e}function Vh(e,t,a){var i=t.pendingProps,s=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),h&&(s=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(s?sa(t):ua(),(e=He)?(e=Wp(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:yn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=t,t.child=a,mt=t,He=null)):e=null,e===null)throw aa(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var y=i.children;return i=i.fallback,s?(ua(),s=t.mode,y=_o({mode:"hidden",children:y},s),i=Na(i,s,a,null),y.return=t,i.return=t,y.sibling=i,t.child=y,i=t.child,i.memoizedState=fc(a),i.childLanes=dc(e,h,a),t.memoizedState=cc,Ur(null,i)):(sa(t),mc(t,y))}var A=e.memoizedState;if(A!==null&&(y=A.dehydrated,y!==null)){if(c)t.flags&256?(sa(t),t.flags&=-257,t=hc(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),y=i.fallback,s=t.mode,i=_o({mode:"visible",children:i.children},s),y=Na(y,s,a,null),y.flags|=2,i.return=t,y.return=t,i.sibling=y,t.child=i,Va(t,e.child,null,a),i=t.child,i.memoizedState=fc(a),i.childLanes=dc(e,h,a),t.memoizedState=cc,t=Ur(null,i));else if(sa(t),Kc(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var k=h.dgst;h=k,i=Error(o(419)),i.stack="",i.digest=h,Mr({value:i,source:null,stack:null}),t=hc(e,t,a)}else if(at||qi(e,t,a,!1),h=(a&e.childLanes)!==0,at||h){if(h=Ge,h!==null&&(i=qd(h,a),i!==0&&i!==A.retryLane))throw A.retryLane=i,Ba(e,i),Lt(h,e,i),sc;Jc(y)||Oo(),t=hc(e,t,a)}else Jc(y)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,He=nn(y.nextSibling),mt=t,Se=!0,na=null,en=!1,e!==null&&Tm(t,e),t=mc(t,i.children),t.flags|=4096);return t}return s?(ua(),y=i.fallback,s=t.mode,A=e.child,k=A.sibling,i=On(A,{mode:"hidden",children:i.children}),i.subtreeFlags=A.subtreeFlags&65011712,k!==null?y=On(k,y):(y=Na(y,s,a,null),y.flags|=2),y.return=t,i.return=t,i.sibling=y,t.child=i,Ur(null,i),i=t.child,y=e.child.memoizedState,y===null?y=fc(a):(s=y.cachePool,s!==null?(A=tt._currentValue,s=s.parent!==A?{parent:A,pool:A}:s):s=Om(),y={baseLanes:y.baseLanes|a,cachePool:s}),i.memoizedState=y,i.childLanes=dc(e,h,a),t.memoizedState=cc,Ur(e.child,i)):(sa(t),a=e.child,e=a.sibling,a=On(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=a,t.memoizedState=null,a)}function mc(e,t){return t=_o({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _o(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function hc(e,t,a){return Va(t,e.child,null,a),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Eu(e.return,t,a)}function pc(e,t,a,i,s,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:s,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=a,h.tailMode=s,h.treeForkCount=c)}function Xh(e,t,a){var i=t.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var h=Ze.current,y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,te(Ze,h),pt(e,t,i,a),i=Se?Tr:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,a,t);else if(e.tag===19)Yh(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&co(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),pc(t,!1,s,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&co(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}pc(t,!0,a,null,c,i);break;case"together":pc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function jn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(qi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=On(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=On(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&no(e)))}function dv(e,t,a){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),ia(t,tt,e.memoizedState.cache),ja();break;case 27:case 5:un(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hu(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vh(e,t,a):(sa(t),e=jn(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var s=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(qi(e,t,a,!1),i=(a&t.childLanes)!==0),s){if(i)return Xh(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(Ze,Ze.current),i)break;return null;case 22:return t.lanes=0,jh(e,t,a,t.pendingProps);case 24:ia(t,tt,e.memoizedState.cache)}return jn(e,t,a)}function Jh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!gc(e,a)&&(t.flags&128)===0)return at=!1,dv(e,t,a);at=(e.flags&131072)!==0}else at=!1,Se&&(t.flags&1048576)!==0&&Am(t,Tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")xu(e)?(i=Xa(e,i),t.tag=1,t=$h(null,t,e,i,a)):(t.tag=0,t=uc(null,t,e,i,a));else{if(e!=null){var s=e.$$typeof;if(s===$){t.tag=11,t=Dh(null,t,e,i,a);break e}else if(s===z){t.tag=14,t=Bh(null,t,e,i,a);break e}}throw t=Z(e)||e,Error(o(306,t,""))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,s=Xa(i,t.pendingProps),$h(e,t,i,s,a);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;s=c.element,Bu(e,t),zr(t,i,null,a);var h=t.memoizedState;if(i=h.cache,ia(t,tt,i),i!==c.cache&&qu(t,[tt],a,!0),kr(),i=h.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Ph(e,t,i,a);break e}else if(i!==s){s=Zt(Error(o(424)),t),Mr(s),t=Ph(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=nn(e.firstChild),mt=t,Se=!0,na=null,en=!0,a=jm(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ja(),i===s){t=jn(e,t,a);break e}pt(e,t,i,a)}t=t.child}return t;case 26:return wo(e,t),e===null?(a=ig(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,i=Uo(fe.current).createElement(a),i[dt]=t,i[At]=e,gt(i,a,e),ut(i),t.stateNode=i):t.memoizedState=ig(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return un(t),e===null&&Se&&(i=t.stateNode=tg(t.type,t.pendingProps,fe.current),mt=t,en=!0,s=He,ba(t.type)?(Qc=s,He=nn(i.firstChild)):He=s),pt(e,t,t.pendingProps.children,a),wo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((s=i=He)&&(i=$v(i,t.type,t.pendingProps,en),i!==null?(t.stateNode=i,mt=t,He=nn(i.firstChild),en=!1,s=!0):s=!1),s||aa(t)),un(t),s=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,i=c.children,Vc(s,c)?i=null:h!==null&&Vc(s,h)&&(t.flags|=32),t.memoizedState!==null&&(s=Pu(e,t,av,null,null,a),el._currentValue=s),wo(e,t),pt(e,t,i,a),t.child;case 6:return e===null&&Se&&((e=a=He)&&(a=Pv(a,t.pendingProps,en),a!==null?(t.stateNode=a,mt=t,He=null,e=!0):e=!1),e||aa(t)),null;case 13:return Vh(e,t,a);case 4:return Xe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Va(t,null,i,a):pt(e,t,i,a),t.child;case 11:return Dh(e,t,t.type,t.pendingProps,a);case 7:return pt(e,t,t.pendingProps,a),t.child;case 8:return pt(e,t,t.pendingProps.children,a),t.child;case 12:return pt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,ia(t,t.type,i.value),pt(e,t,i.children,a),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ga(t),s=ht(s),i=i(s),t.flags|=1,pt(e,t,i,a),t.child;case 14:return Bh(e,t,t.type,t.pendingProps,a);case 15:return Nh(e,t,t.type,t.pendingProps,a);case 19:return Xh(e,t,a);case 31:return fv(e,t,a);case 22:return jh(e,t,a,t.pendingProps);case 24:return Ga(t),i=ht(tt),e===null?(s=ku(),s===null&&(s=Ge,c=Lu(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),t.memoizedState={parent:i,cache:s},Du(t),ia(t,tt,s)):((e.lanes&a)!==0&&(Bu(e,t),zr(t,null,null,a),kr()),s=e.memoizedState,c=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ia(t,tt,i)):(i=c.cache,ia(t,tt,i),i!==s.cache&&qu(t,[tt],a,!0))),pt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Un(e){e.flags|=4}function bc(e,t,a,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Sp())e.flags|=8192;else throw Pa=lo,zu}else e.flags&=-16777217}function Kh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ug(t))if(Sp())e.flags|=8192;else throw Pa=lo,zu}function Co(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Md():536870912,e.lanes|=t,$i|=t)}function Gr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function mv(e,t,a){var i=t.pendingProps;switch(Au(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Dn(tt),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mu())),$e(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Un(t),c!==null?($e(t),Kh(t,c)):($e(t),bc(t,s,null,i,a))):c?c!==e.memoizedState?(Un(t),$e(t),Kh(t,c)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Un(t),$e(t),bc(t,s,e,i,a)),null;case 27:if(pn(t),a=fe.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=ae.current,Ei(t)?Mm(t):(e=tg(s,i,a),t.stateNode=e,Un(t))}return $e(t),null;case 5:if(pn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(c=ae.current,Ei(t))Mm(t);else{var h=Uo(fe.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?h.createElement("select",{is:i.is}):h.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?h.createElement(s,{is:i.is}):h.createElement(s)}}c[dt]=t,c[At]=i;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(gt(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Un(t)}}return $e(t),bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=fe.current,Ei(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,s=mt,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[dt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Vp(e.nodeValue,a)),e||aa(t,!0)}else e=Uo(e).createTextNode(i),e[dt]=t,t.stateNode=e}return $e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ei(t),a!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[dt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[dt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),s=!1}else s=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Co(t,t.updateQueue),$e(t),null);case 4:return Te(),e===null&&Uc(t.stateNode.containerInfo),$e(t),null;case 10:return Dn(t.type),$e(t),null;case 19:if(P(Ze),i=t.memoizedState,i===null)return $e(t),null;if(s=(t.flags&128)!==0,c=i.rendering,c===null)if(s)Gr(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=co(e),c!==null){for(t.flags|=128,Gr(i,!1),e=c.updateQueue,t.updateQueue=e,Co(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wm(a,e),a=a.sibling;return te(Ze,Ze.current&1|2),Se&&kn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&xe()>Eo&&(t.flags|=128,s=!0,Gr(i,!1),t.lanes=4194304)}else{if(!s)if(e=co(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Co(t,e),Gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Se)return $e(t),null}else 2*xe()-i.renderingStartTime>Eo&&a!==536870912&&(t.flags|=128,s=!0,Gr(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=xe(),e.sibling=null,a=Ze.current,te(Ze,s?a&1|2:a&1),Se&&kn(t,i.treeForkCount),e):($e(t),null);case 22:case 23:return Ut(t),Gu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),a=t.updateQueue,a!==null&&Co(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&P(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dn(tt),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function hv(e,t){switch(Au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(tt),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pn(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ze),null;case 4:return Te(),null;case 10:return Dn(t.type),null;case 22:case 23:return Ut(t),Gu(),e!==null&&P(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dn(tt),null;case 25:return null;default:return null}}function Qh(e,t){switch(Au(t),t.tag){case 3:Dn(tt),Te();break;case 26:case 27:case 5:pn(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:P(Ze);break;case 10:Dn(t.type);break;case 22:case 23:Ut(t),Gu(),e!==null&&P(Ha);break;case 24:Dn(tt)}}function Hr(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){i=void 0;var c=a.create,h=a.inst;i=c(),h.destroy=i}a=a.next}while(a!==s)}}catch(y){ke(t,t.return,y)}}function ca(e,t,a){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){var h=i.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,s=t;var A=a,k=y;try{k()}catch(V){ke(s,A,V)}}}i=i.next}while(i!==c)}}catch(V){ke(t,t.return,V)}}function Fh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Gm(t,a)}catch(i){ke(e,e.return,i)}}}function Zh(e,t,a){a.props=Xa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ke(e,t,i)}}function $r(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(s){ke(e,t,s)}}function Sn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(s){ke(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){ke(e,t,s)}else a.current=null}function Wh(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(s){ke(e,e.return,s)}}function yc(e,t,a){try{var i=e.stateNode;Bv(i,e.type,a,t),i[At]=t}catch(s){ke(e,e.return,s)}}function Ih(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qn));else if(i!==4&&(i===27&&ba(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function Ao(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ao(e,t,a),e=e.sibling;e!==null;)Ao(e,t,a),e=e.sibling}function ep(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);gt(t,i,a),t[dt]=e,t[At]=a}catch(c){ke(e,e.return,c)}}var Gn=!1,it=!1,xc=!1,tp=typeof WeakSet=="function"?WeakSet:Set,ct=null;function pv(e,t){if(e=e.containerInfo,$c=Xo,e=mm(e),hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var h=0,y=-1,A=-1,k=0,V=0,J=e,N=null;t:for(;;){for(var j;J!==a||s!==0&&J.nodeType!==3||(y=h+s),J!==c||i!==0&&J.nodeType!==3||(A=h+i),J.nodeType===3&&(h+=J.nodeValue.length),(j=J.firstChild)!==null;)N=J,J=j;for(;;){if(J===e)break t;if(N===a&&++k===s&&(y=h),N===c&&++V===i&&(A=h),(j=J.nextSibling)!==null)break;J=N,N=J.parentNode}J=j}a=y===-1||A===-1?null:{start:y,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:e,selectionRange:a},Xo=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,s=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var ie=Xa(a.type,s);e=i.getSnapshotBeforeUpdate(ie,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ce){ke(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function np(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:$n(e,a),i&4&&Hr(5,a);break;case 1:if($n(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){ke(a,a.return,h)}else{var s=Xa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){ke(a,a.return,h)}}i&64&&Fh(a),i&512&&$r(a,a.return);break;case 3:if($n(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Gm(e,t)}catch(h){ke(a,a.return,h)}}break;case 27:t===null&&i&4&&ep(a);case 26:case 5:$n(e,a),t===null&&i&4&&Wh(a),i&512&&$r(a,a.return);break;case 12:$n(e,a);break;case 31:$n(e,a),i&4&&rp(e,a);break;case 13:$n(e,a),i&4&&lp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Cv.bind(null,a),Vv(e,a))));break;case 22:if(i=a.memoizedState!==null||Gn,!i){t=t!==null&&t.memoizedState!==null||it,s=Gn;var c=it;Gn=i,(it=t)&&!c?Pn(e,a,(a.subtreeFlags&8772)!==0):$n(e,a),Gn=s,it=c}break;case 30:break;default:$n(e,a)}}function ap(e){var t=e.alternate;t!==null&&(e.alternate=null,ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Mt=!1;function Hn(e,t,a){for(a=a.child;a!==null;)ip(e,t,a),a=a.sibling}function ip(e,t,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(dr,a)}catch{}switch(a.tag){case 26:it||Sn(a,t),Hn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:it||Sn(a,t);var i=Ve,s=Mt;ba(a.type)&&(Ve=a.stateNode,Mt=!1),Hn(e,t,a),Zr(a.stateNode),Ve=i,Mt=s;break;case 5:it||Sn(a,t);case 6:if(i=Ve,s=Mt,Ve=null,Hn(e,t,a),Ve=i,Mt=s,Ve!==null)if(Mt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(c){ke(a,t,c)}else try{Ve.removeChild(a.stateNode)}catch(c){ke(a,t,c)}break;case 18:Ve!==null&&(Mt?(e=Ve,Fp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fi(e)):Fp(Ve,a.stateNode));break;case 4:i=Ve,s=Mt,Ve=a.stateNode.containerInfo,Mt=!0,Hn(e,t,a),Ve=i,Mt=s;break;case 0:case 11:case 14:case 15:ca(2,a,t),it||ca(4,a,t),Hn(e,t,a);break;case 1:it||(Sn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Zh(a,t,i)),Hn(e,t,a);break;case 21:Hn(e,t,a);break;case 22:it=(i=it)||a.memoizedState!==null,Hn(e,t,a),it=i;break;default:Hn(e,t,a)}}function rp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fi(e)}catch(a){ke(t,t.return,a)}}}function lp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fi(e)}catch(a){ke(t,t.return,a)}}function gv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tp),t;default:throw Error(o(435,e.tag))}}function To(e,t){var a=gv(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var s=Av.bind(null,e,i);i.then(s,s)}})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var s=a[i],c=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(ba(y.type)){Ve=y.stateNode,Mt=!1;break e}break;case 5:Ve=y.stateNode,Mt=!1;break e;case 3:case 4:Ve=y.stateNode.containerInfo,Mt=!0;break e}y=y.return}if(Ve===null)throw Error(o(160));ip(c,h,s),Ve=null,Mt=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)op(t,e),t=t.sibling}var fn=null;function op(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Et(e),i&4&&(ca(3,e,e.return),Hr(3,e),ca(5,e,e.return));break;case 1:Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),i&64&&Gn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var s=fn;if(Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[pr]||c[dt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),gt(c,i,a),c[dt]=e,ut(c),i=c;break e;case"link":var h=og("link","href",s).get(i+(a.href||""));if(h){for(var y=0;y<h.length;y++)if(c=h[y],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(y,1);break t}}c=s.createElement(i),gt(c,i,a),s.head.appendChild(c);break;case"meta":if(h=og("meta","content",s).get(i+(a.content||""))){for(y=0;y<h.length;y++)if(c=h[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(y,1);break t}}c=s.createElement(i),gt(c,i,a),s.head.appendChild(c);break;default:throw Error(o(468,i))}c[dt]=e,ut(c),i=c}e.stateNode=i}else sg(s,e.type,e.stateNode);else e.stateNode=lg(s,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?sg(s,e.type,e.stateNode):lg(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),a!==null&&i&4&&yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rt(t,e),Et(e),i&512&&(it||a===null||Sn(a,a.return)),e.flags&32){s=e.stateNode;try{vi(s,"")}catch(ie){ke(e,e.return,ie)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,yc(e,s,a!==null?a.memoizedProps:s)),i&1024&&(xc=!0);break;case 6:if(Rt(t,e),Et(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(ie){ke(e,e.return,ie)}}break;case 3:if($o=null,s=fn,fn=Go(t.containerInfo),Rt(t,e),fn=s,Et(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(ie){ke(e,e.return,ie)}xc&&(xc=!1,sp(e));break;case 4:i=fn,fn=Go(e.stateNode.containerInfo),Rt(t,e),Et(e),fn=i;break;case 12:Rt(t,e),Et(e);break;case 31:Rt(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,To(e,i)));break;case 13:Rt(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ro=xe()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,To(e,i)));break;case 22:s=e.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,k=Gn,V=it;if(Gn=k||s,it=V||A,Rt(t,e),it=V,Gn=k,Et(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||A||Gn||it||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){A=a=t;try{if(c=A.stateNode,s)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=A.stateNode;var J=A.memoizedProps.style,N=J!=null&&J.hasOwnProperty("display")?J.display:null;y.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(ie){ke(A,A.return,ie)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=s?"":A.memoizedProps}catch(ie){ke(A,A.return,ie)}}}else if(t.tag===18){if(a===null){A=t;try{var j=A.stateNode;s?Zp(j,!0):Zp(A.stateNode,!1)}catch(ie){ke(A,A.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,To(e,a))));break;case 19:Rt(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,To(e,i)));break;case 30:break;case 21:break;default:Rt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Ih(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,c=vc(e);Ao(e,c,s);break;case 5:var h=a.stateNode;a.flags&32&&(vi(h,""),a.flags&=-33);var y=vc(e);Ao(e,y,h);break;case 3:case 4:var A=a.stateNode.containerInfo,k=vc(e);Sc(e,k,A);break;default:throw Error(o(161))}}catch(V){ke(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)np(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ja(t);break;case 1:Sn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zh(t,t.return,a),Ja(t);break;case 27:Zr(t.stateNode);case 26:case 5:Sn(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function Pn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:Pn(s,c,a),Hr(4,c);break;case 1:if(Pn(s,c,a),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(k){ke(i,i.return,k)}if(i=c,s=i.updateQueue,s!==null){var y=i.stateNode;try{var A=s.shared.hiddenCallbacks;if(A!==null)for(s.shared.hiddenCallbacks=null,s=0;s<A.length;s++)Um(A[s],y)}catch(k){ke(i,i.return,k)}}a&&h&64&&Fh(c),$r(c,c.return);break;case 27:ep(c);case 26:case 5:Pn(s,c,a),a&&i===null&&h&4&&Wh(c),$r(c,c.return);break;case 12:Pn(s,c,a);break;case 31:Pn(s,c,a),a&&h&4&&rp(s,c);break;case 13:Pn(s,c,a),a&&h&4&&lp(s,c);break;case 22:c.memoizedState===null&&Pn(s,c,a),$r(c,c.return);break;case 30:break;default:Pn(s,c,a)}t=t.sibling}}function wc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Rr(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e))}function dn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)up(e,t,a,i),t=t.sibling}function up(e,t,a,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:dn(e,t,a,i),s&2048&&Hr(9,t);break;case 1:dn(e,t,a,i);break;case 3:dn(e,t,a,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e)));break;case 12:if(s&2048){dn(e,t,a,i),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,y=c.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){ke(t,t.return,A)}}else dn(e,t,a,i);break;case 31:dn(e,t,a,i);break;case 13:dn(e,t,a,i);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?dn(e,t,a,i):Pr(e,t):c._visibility&2?dn(e,t,a,i):(c._visibility|=2,Ui(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&wc(h,t);break;case 24:dn(e,t,a,i),s&2048&&_c(t.alternate,t);break;default:dn(e,t,a,i)}}function Ui(e,t,a,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,y=a,A=i,k=h.flags;switch(h.tag){case 0:case 11:case 15:Ui(c,h,y,A,s),Hr(8,h);break;case 23:break;case 22:var V=h.stateNode;h.memoizedState!==null?V._visibility&2?Ui(c,h,y,A,s):Pr(c,h):(V._visibility|=2,Ui(c,h,y,A,s)),s&&k&2048&&wc(h.alternate,h);break;case 24:Ui(c,h,y,A,s),s&&k&2048&&_c(h.alternate,h);break;default:Ui(c,h,y,A,s)}t=t.sibling}}function Pr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,s=i.flags;switch(i.tag){case 22:Pr(a,i),s&2048&&wc(i.alternate,i);break;case 24:Pr(a,i),s&2048&&_c(i.alternate,i);break;default:Pr(a,i)}t=t.sibling}}var Vr=8192;function Gi(e,t,a){if(e.subtreeFlags&Vr)for(e=e.child;e!==null;)cp(e,t,a),e=e.sibling}function cp(e,t,a){switch(e.tag){case 26:Gi(e,t,a),e.flags&Vr&&e.memoizedState!==null&&n1(a,fn,e.memoizedState,e.memoizedProps);break;case 5:Gi(e,t,a);break;case 3:case 4:var i=fn;fn=Go(e.stateNode.containerInfo),Gi(e,t,a),fn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Vr,Vr=16777216,Gi(e,t,a),Vr=i):Gi(e,t,a));break;default:Gi(e,t,a)}}function fp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,mp(i,e)}fp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dp(e),e=e.sibling}function dp(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mo(e)):Yr(e);break;default:Yr(e)}}function Mo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,mp(i,e)}fp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Mo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mo(t));break;default:Mo(t)}e=e.sibling}}function mp(e,t){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Rr(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ct=i;else e:for(a=e;ct!==null;){i=ct;var s=i.sibling,c=i.return;if(ap(i),i===a){ct=null;break e}if(s!==null){s.return=c,ct=s;break e}ct=c}}}var bv={getCacheForType:function(e){var t=ht(tt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ht(tt).controller.signal}},yv=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ge=null,ge=null,ye=0,Oe=0,Gt=null,fa=!1,Hi=!1,Cc=!1,Vn=0,Ke=0,da=0,Ka=0,Ac=0,Ht=0,$i=0,Xr=null,qt=null,Tc=!1,Ro=0,hp=0,Eo=1/0,qo=null,ma=null,lt=0,ha=null,Pi=null,Yn=0,Mc=0,Rc=null,pp=null,Jr=0,Ec=null;function $t(){return(Me&2)!==0&&ye!==0?ye&-ye:D.T!==null?Dc():Ld()}function gp(){if(Ht===0)if((ye&536870912)===0||Se){var e=Nl;Nl<<=1,(Nl&3932160)===0&&(Nl=262144),Ht=e}else Ht=536870912;return e=jt.current,e!==null&&(e.flags|=32),Ht}function Lt(e,t,a){(e===Ge&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Vi(e,0),pa(e,ye,Ht,!1)),hr(e,a),((Me&2)===0||e!==Ge)&&(e===Ge&&((Me&2)===0&&(Ka|=a),Ke===4&&pa(e,ye,Ht,!1)),xn(e))}function bp(e,t,a){if((Me&6)!==0)throw Error(o(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||mr(e,t),s=i?xv(e,t):Lc(e,t,!0),c=i;do{if(s===0){Hi&&!i&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!vv(a)){s=Lc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;s=Xr;var A=y.current.memoizedState.isDehydrated;if(A&&(Vi(y,h).flags|=256),h=Lc(y,h,!1),h!==2){if(Cc&&!A){y.errorRecoveryDisabledLanes|=c,Ka|=c,s=4;break e}c=qt,qt=s,c!==null&&(qt===null?qt=c:qt.push.apply(qt,c))}s=h}if(c=!1,s!==2)continue}}if(s===1){Vi(e,0),pa(e,t,0,!0);break}e:{switch(i=e,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:pa(i,t,Ht,!fa);break e;case 2:qt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=Ro+300-xe(),10<s)){if(pa(i,t,Ht,!fa),Ul(i,0,!0)!==0)break e;Yn=t,i.timeoutHandle=Kp(yp.bind(null,i,a,qt,qo,Tc,t,Ht,Ka,$i,fa,c,"Throttled",-0,0),s);break e}yp(i,a,qt,qo,Tc,t,Ht,Ka,$i,fa,c,null,-0,0)}}break}while(!0);xn(e)}function yp(e,t,a,i,s,c,h,y,A,k,V,J,N,j){if(e.timeoutHandle=-1,J=t.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qn},cp(t,c,J);var ie=(c&62914560)===c?Ro-xe():(c&4194048)===c?hp-xe():0;if(ie=a1(J,ie),ie!==null){Yn=c,e.cancelPendingCommit=ie(Tp.bind(null,e,t,c,a,i,s,h,y,A,V,J,null,N,j)),pa(e,c,h,!k);return}}Tp(e,t,c,a,i,s,h,y,A)}function vv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var s=a[i],c=s.getSnapshot;s=s.value;try{if(!Bt(c(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,i){t&=~Ac,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var c=31-Dt(s),h=1<<c;i[c]=-1,s&=~h}a!==0&&Rd(e,a,t)}function Lo(){return(Me&6)===0?(Kr(0),!1):!0}function qc(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,zn=Ua=null,Xu(e),zi=null,qr=0,e=ge;for(;e!==null;)Qh(e.alternate,e),e=e.return;ge=null}}function Vi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Uv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yn=0,qc(),Ge=e,ge=a=On(e.current,null),ye=t,Oe=0,Gt=null,fa=!1,Hi=mr(e,t),Cc=!1,$i=Ht=Ac=Ka=da=Ke=0,qt=Xr=null,Tc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Dt(i),c=1<<s;t|=e[s],i&=~c}return Vn=t,Zl(),a}function vp(e,t){he=null,D.H=jr,t===ki||t===ro?(t=Dm(),Oe=3):t===zu?(t=Dm(),Oe=4):Oe=t===sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,ge===null&&(Ke=1,So(e,Zt(t,e.current)))}function Sp(){var e=jt.current;return e===null?!0:(ye&4194048)===ye?tn===null:(ye&62914560)===ye||(ye&536870912)!==0?e===tn:!1}function xp(){var e=D.H;return D.H=jr,e===null?jr:e}function wp(){var e=D.A;return D.A=bv,e}function Oo(){Ke=4,fa||(ye&4194048)!==ye&&jt.current!==null||(Hi=!0),(da&134217727)===0&&(Ka&134217727)===0||Ge===null||pa(Ge,ye,Ht,!1)}function Lc(e,t,a){var i=Me;Me|=2;var s=xp(),c=wp();(Ge!==e||ye!==t)&&(qo=null,Vi(e,t)),t=!1;var h=Ke;e:do try{if(Oe!==0&&ge!==null){var y=ge,A=Gt;switch(Oe){case 8:qc(),h=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var k=Oe;if(Oe=0,Gt=null,Yi(e,y,A,k),a&&Hi){h=0;break e}break;default:k=Oe,Oe=0,Gt=null,Yi(e,y,A,k)}}Sv(),h=Ke;break}catch(V){vp(e,V)}while(!0);return t&&e.shellSuspendCounter++,zn=Ua=null,Me=i,D.H=s,D.A=c,ge===null&&(Ge=null,ye=0,Zl()),h}function Sv(){for(;ge!==null;)_p(ge)}function xv(e,t){var a=Me;Me|=2;var i=xp(),s=wp();Ge!==e||ye!==t?(qo=null,Eo=xe()+500,Vi(e,t)):Hi=mr(e,t);e:do try{if(Oe!==0&&ge!==null){t=ge;var c=Gt;t:switch(Oe){case 1:Oe=0,Gt=null,Yi(e,t,c,1);break;case 2:case 9:if(km(c)){Oe=0,Gt=null,Cp(t);break}t=function(){Oe!==2&&Oe!==9||Ge!==e||(Oe=7),xn(e)},c.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:km(c)?(Oe=0,Gt=null,Cp(t)):(Oe=0,Gt=null,Yi(e,t,c,7));break;case 5:var h=null;switch(ge.tag){case 26:h=ge.memoizedState;case 5:case 27:var y=ge;if(h?ug(h):y.stateNode.complete){Oe=0,Gt=null;var A=y.sibling;if(A!==null)ge=A;else{var k=y.return;k!==null?(ge=k,ko(k)):ge=null}break t}}Oe=0,Gt=null,Yi(e,t,c,5);break;case 6:Oe=0,Gt=null,Yi(e,t,c,6);break;case 8:qc(),Ke=6;break e;default:throw Error(o(462))}}wv();break}catch(V){vp(e,V)}while(!0);return zn=Ua=null,D.H=i,D.A=s,Me=a,ge!==null?0:(Ge=null,ye=0,Zl(),Ke)}function wv(){for(;ge!==null&&!bn();)_p(ge)}function _p(e){var t=Jh(e.alternate,e,Vn);e.memoizedProps=e.pendingProps,t===null?ko(e):ge=t}function Cp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hh(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Hh(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Xu(t);default:Qh(a,t),t=ge=wm(t,Vn),t=Jh(a,t,Vn)}e.memoizedProps=e.pendingProps,t===null?ko(e):ge=t}function Yi(e,t,a,i){zn=Ua=null,Xu(t),zi=null,qr=0;var s=t.return;try{if(cv(e,s,t,a,ye)){Ke=1,So(e,Zt(a,e.current)),ge=null;return}}catch(c){if(s!==null)throw ge=s,c;Ke=1,So(e,Zt(a,e.current)),ge=null;return}t.flags&32768?(Se||i===1?e=!0:Hi||(ye&536870912)!==0?e=!1:(fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=jt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ap(t,e)):ko(t)}function ko(e){var t=e;do{if((t.flags&32768)!==0){Ap(t,fa);return}e=t.return;var a=mv(t.alternate,t,Vn);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ke===0&&(Ke=5)}function Ap(e,t){do{var a=hv(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Ke=6,ge=null}function Tp(e,t,a,i,s,c,h,y,A){e.cancelPendingCommit=null;do zo();while(lt!==0);if((Me&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=vu,t0(e,a,c,h,y,A),e===Ge&&(ge=Ge=null,ye=0),Pi=t,ha=e,Yn=a,Mc=c,Rc=s,pp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tv(ft,function(){return Lp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,s=W.p,W.p=2,h=Me,Me|=4;try{pv(e,t,a)}finally{Me=h,W.p=s,D.T=i}}lt=1,Mp(),Rp(),Ep()}}function Mp(){if(lt===1){lt=0;var e=ha,t=Pi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var i=W.p;W.p=2;var s=Me;Me|=4;try{op(t,e);var c=Pc,h=mm(e.containerInfo),y=c.focusedElem,A=c.selectionRange;if(h!==y&&y&&y.ownerDocument&&dm(y.ownerDocument.documentElement,y)){if(A!==null&&hu(y)){var k=A.start,V=A.end;if(V===void 0&&(V=k),"selectionStart"in y)y.selectionStart=k,y.selectionEnd=Math.min(V,y.value.length);else{var J=y.ownerDocument||document,N=J&&J.defaultView||window;if(N.getSelection){var j=N.getSelection(),ie=y.textContent.length,ce=Math.min(A.start,ie),je=A.end===void 0?ce:Math.min(A.end,ie);!j.extend&&ce>je&&(h=je,je=ce,ce=h);var E=fm(y,ce),T=fm(y,je);if(E&&T&&(j.rangeCount!==1||j.anchorNode!==E.node||j.anchorOffset!==E.offset||j.focusNode!==T.node||j.focusOffset!==T.offset)){var O=J.createRange();O.setStart(E.node,E.offset),j.removeAllRanges(),ce>je?(j.addRange(O),j.extend(T.node,T.offset)):(O.setEnd(T.node,T.offset),j.addRange(O))}}}}for(J=[],j=y;j=j.parentNode;)j.nodeType===1&&J.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<J.length;y++){var X=J[y];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Xo=!!$c,Pc=$c=null}finally{Me=s,W.p=i,D.T=a}}e.current=t,lt=2}}function Rp(){if(lt===2){lt=0;var e=ha,t=Pi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var i=W.p;W.p=2;var s=Me;Me|=4;try{np(e,t.alternate,t)}finally{Me=s,W.p=i,D.T=a}}lt=3}}function Ep(){if(lt===4||lt===3){lt=0,qe();var e=ha,t=Pi,a=Yn,i=pp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,Pi=ha=null,qp(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ma=null),Qs(a),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(dr,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=D.T,s=W.p,W.p=2,D.T=null;try{for(var c=e.onRecoverableError,h=0;h<i.length;h++){var y=i[h];c(y.value,{componentStack:y.stack})}}finally{D.T=t,W.p=s}}(Yn&3)!==0&&zo(),xn(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Ec?Jr++:(Jr=0,Ec=e):Jr=0,Kr(0)}}function qp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rr(t)))}function zo(){return Mp(),Rp(),Ep(),Lp()}function Lp(){if(lt!==5)return!1;var e=ha,t=Mc;Mc=0;var a=Qs(Yn),i=D.T,s=W.p;try{W.p=32>a?32:a,D.T=null,a=Rc,Rc=null;var c=ha,h=Yn;if(lt=0,Pi=ha=null,Yn=0,(Me&6)!==0)throw Error(o(331));var y=Me;if(Me|=4,dp(c.current),up(c,c.current,h,a),Me=y,Kr(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(dr,c)}catch{}return!0}finally{W.p=s,D.T=i,qp(e,t)}}function Op(e,t,a){t=Zt(a,t),t=oc(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(hr(e,2),xn(e))}function ke(e,t,a){if(e.tag===3)Op(e,e,a);else for(;t!==null;){if(t.tag===3){Op(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=Zt(a,e),a=kh(2),i=oa(t,a,2),i!==null&&(zh(a,i,t,e),hr(i,2),xn(i));break}}t=t.return}}function Oc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new yv;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(a)||(Cc=!0,s.add(a),e=_v.bind(null,e,t,a),t.then(e,e))}function _v(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(ye&a)===a&&(Ke===4||Ke===3&&(ye&62914560)===ye&&300>xe()-Ro?(Me&2)===0&&Vi(e,0):Ac|=a,$i===ye&&($i=0)),xn(e)}function kp(e,t){t===0&&(t=Md()),e=Ba(e,t),e!==null&&(hr(e,t),xn(e))}function Cv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),kp(e,a)}function Av(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),kp(e,a)}function Tv(e,t){return kt(e,t)}var Do=null,Xi=null,kc=!1,Bo=!1,zc=!1,ga=0;function xn(e){e!==Xi&&e.next===null&&(Xi===null?Do=Xi=e:Xi=Xi.next=e),Bo=!0,kc||(kc=!0,Rv())}function Kr(e,t){if(!zc&&Bo){zc=!0;do for(var a=!1,i=Do;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var h=i.suspendedLanes,y=i.pingedLanes;c=(1<<31-Dt(42|e)+1)-1,c&=s&~(h&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Np(i,c))}else c=ye,c=Ul(i,i===Ge?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||mr(i,c)||(a=!0,Np(i,c));i=i.next}while(a);zc=!1}}function Mv(){zp()}function zp(){Bo=kc=!1;var e=0;ga!==0&&jv()&&(e=ga);for(var t=xe(),a=null,i=Do;i!==null;){var s=i.next,c=Dp(i,t);c===0?(i.next=null,a===null?Do=s:a.next=s,s===null&&(Xi=a)):(a=i,(e!==0||(c&3)!==0)&&(Bo=!0)),i=s}lt!==0&&lt!==5||Kr(e),ga!==0&&(ga=0)}function Dp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-Dt(c),y=1<<h,A=s[h];A===-1?((y&a)===0||(y&i)!==0)&&(s[h]=e0(y,t)):A<=t&&(e.expiredLanes|=y),c&=~y}if(t=Ge,a=ye,a=Ul(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&gn(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||mr(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&gn(i),Qs(a)){case 2:case 8:a=Pe;break;case 32:a=ft;break;case 268435456:a=di;break;default:a=ft}return i=Bp.bind(null,e),a=kt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&gn(i),e.callbackPriority=2,e.callbackNode=null,2}function Bp(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zo()&&e.callbackNode!==a)return null;var i=ye;return i=Ul(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(bp(e,i,t),Dp(e,xe()),e.callbackNode!=null&&e.callbackNode===a?Bp.bind(null,e):null)}function Np(e,t){if(zo())return null;bp(e,t,!0)}function Rv(){Gv(function(){(Me&6)!==0?kt(st,Mv):zp()})}function Dc(){if(ga===0){var e=Li;e===0&&(e=Bl,Bl<<=1,(Bl&261888)===0&&(Bl=256)),ga=e}return ga}function jp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pl(""+e)}function Up(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ev(e,t,a,i,s){if(t==="submit"&&a&&a.stateNode===s){var c=jp((s[At]||null).action),h=i.submitter;h&&(t=(t=h[At]||null)?jp(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var y=new Jl("action","action",null,i,s);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ga!==0){var A=h?Up(s,h):new FormData(s);tc(a,{pending:!0,data:A,method:s.method,action:c},null,A)}}else typeof c=="function"&&(y.preventDefault(),A=h?Up(s,h):new FormData(s),tc(a,{pending:!0,data:A,method:s.method,action:c},c,A))},currentTarget:s}]})}}for(var Bc=0;Bc<yu.length;Bc++){var Nc=yu[Bc],qv=Nc.toLowerCase(),Lv=Nc[0].toUpperCase()+Nc.slice(1);cn(qv,"on"+Lv)}cn(gm,"onAnimationEnd"),cn(bm,"onAnimationIteration"),cn(ym,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(J0,"onTransitionRun"),cn(K0,"onTransitionStart"),cn(Q0,"onTransitionCancel"),cn(vm,"onTransitionEnd"),bi("onMouseEnter",["mouseout","mouseover"]),bi("onMouseLeave",["mouseout","mouseover"]),bi("onPointerEnter",["pointerout","pointerover"]),bi("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Gp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var h=i.length-1;0<=h;h--){var y=i[h],A=y.instance,k=y.currentTarget;if(y=y.listener,A!==c&&s.isPropagationStopped())break e;c=y,s.currentTarget=k;try{c(s)}catch(V){Fl(V)}s.currentTarget=null,c=A}else for(h=0;h<i.length;h++){if(y=i[h],A=y.instance,k=y.currentTarget,y=y.listener,A!==c&&s.isPropagationStopped())break e;c=y,s.currentTarget=k;try{c(s)}catch(V){Fl(V)}s.currentTarget=null,c=A}}}}function be(e,t){var a=t[Fs];a===void 0&&(a=t[Fs]=new Set);var i=e+"__bubble";a.has(i)||(Hp(t,e,2,!1),a.add(i))}function jc(e,t,a){var i=0;t&&(i|=4),Hp(a,e,i,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[No]){e[No]=!0,zd.forEach(function(a){a!=="selectionchange"&&(Ov.has(a)||jc(a,!1,e),jc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,jc("selectionchange",!1,t))}}function Hp(e,t,a,i){switch(gg(t)){case 2:var s=l1;break;case 8:s=o1;break;default:s=ef}a=s.bind(null,t,a,e),s=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Gc(e,t,a,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var y=i.stateNode.containerInfo;if(y===s)break;if(h===4)for(h=i.return;h!==null;){var A=h.tag;if((A===3||A===4)&&h.stateNode.containerInfo===s)return;h=h.return}for(;y!==null;){if(h=hi(y),h===null)return;if(A=h.tag,A===5||A===6||A===26||A===27){i=c=h;continue e}y=y.parentNode}}i=i.return}Xd(function(){var k=c,V=au(a),J=[];e:{var N=Sm.get(e);if(N!==void 0){var j=Jl,ie=e;switch(e){case"keypress":if(Yl(a)===0)break e;case"keydown":case"keyup":j=A0;break;case"focusin":ie="focus",j=uu;break;case"focusout":ie="blur",j=uu;break;case"beforeblur":case"afterblur":j=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=R0;break;case gm:case bm:case ym:j=g0;break;case vm:j=q0;break;case"scroll":case"scrollend":j=f0;break;case"wheel":j=O0;break;case"copy":case"cut":case"paste":j=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Zd;break;case"toggle":case"beforetoggle":j=z0}var ce=(t&4)!==0,je=!ce&&(e==="scroll"||e==="scrollend"),E=ce?N!==null?N+"Capture":null:N;ce=[];for(var T=k,O;T!==null;){var X=T;if(O=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||O===null||E===null||(X=br(T,E),X!=null&&ce.push(Fr(T,X,O))),je)break;T=T.return}0<ce.length&&(N=new j(N,ie,null,a,V),J.push({event:N,listeners:ce}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",N&&a!==nu&&(ie=a.relatedTarget||a.fromElement)&&(hi(ie)||ie[mi]))break e;if((j||N)&&(N=V.window===V?V:(N=V.ownerDocument)?N.defaultView||N.parentWindow:window,j?(ie=a.relatedTarget||a.toElement,j=k,ie=ie?hi(ie):null,ie!==null&&(je=f(ie),ce=ie.tag,ie!==je||ce!==5&&ce!==27&&ce!==6)&&(ie=null)):(j=null,ie=k),j!==ie)){if(ce=Qd,X="onMouseLeave",E="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Zd,X="onPointerLeave",E="onPointerEnter",T="pointer"),je=j==null?N:gr(j),O=ie==null?N:gr(ie),N=new ce(X,T+"leave",j,a,V),N.target=je,N.relatedTarget=O,X=null,hi(V)===k&&(ce=new ce(E,T+"enter",ie,a,V),ce.target=O,ce.relatedTarget=je,X=ce),je=X,j&&ie)t:{for(ce=kv,E=j,T=ie,O=0,X=E;X;X=ce(X))O++;X=0;for(var se=T;se;se=ce(se))X++;for(;0<O-X;)E=ce(E),O--;for(;0<X-O;)T=ce(T),X--;for(;O--;){if(E===T||T!==null&&E===T.alternate){ce=E;break t}E=ce(E),T=ce(T)}ce=null}else ce=null;j!==null&&$p(J,N,j,ce,!1),ie!==null&&je!==null&&$p(J,je,ie,ce,!0)}}e:{if(N=k?gr(k):window,j=N.nodeName&&N.nodeName.toLowerCase(),j==="select"||j==="input"&&N.type==="file")var _e=rm;else if(am(N))if(lm)_e=V0;else{_e=$0;var le=H0}else j=N.nodeName,!j||j.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?k&&tu(k.elementType)&&(_e=rm):_e=P0;if(_e&&(_e=_e(e,k))){im(J,_e,a,V);break e}le&&le(e,N,k),e==="focusout"&&k&&N.type==="number"&&k.memoizedProps.value!=null&&eu(N,"number",N.value)}switch(le=k?gr(k):window,e){case"focusin":(am(le)||le.contentEditable==="true")&&(_i=le,pu=k,Ar=null);break;case"focusout":Ar=pu=_i=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,hm(J,a,V);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":hm(J,a,V)}var pe;if(fu)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else wi?tm(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Wd&&a.locale!=="ko"&&(wi||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&wi&&(pe=Jd()):(ea=V,lu="value"in ea?ea.value:ea.textContent,wi=!0)),le=jo(k,ve),0<le.length&&(ve=new Fd(ve,e,null,a,V),J.push({event:ve,listeners:le}),pe?ve.data=pe:(pe=nm(a),pe!==null&&(ve.data=pe)))),(pe=B0?N0(e,a):j0(e,a))&&(ve=jo(k,"onBeforeInput"),0<ve.length&&(le=new Fd("onBeforeInput","beforeinput",null,a,V),J.push({event:le,listeners:ve}),le.data=pe)),Ev(J,e,k,a,V)}Gp(J,t)})}function Fr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function jo(e,t){for(var a=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=br(e,a),s!=null&&i.unshift(Fr(e,s,c)),s=br(e,t),s!=null&&i.push(Fr(e,s,c))),e.tag===3)return i;e=e.return}return[]}function kv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $p(e,t,a,i,s){for(var c=t._reactName,h=[];a!==null&&a!==i;){var y=a,A=y.alternate,k=y.stateNode;if(y=y.tag,A!==null&&A===i)break;y!==5&&y!==26&&y!==27||k===null||(A=k,s?(k=br(a,c),k!=null&&h.unshift(Fr(a,k,A))):s||(k=br(a,c),k!=null&&h.push(Fr(a,k,A)))),a=a.return}h.length!==0&&e.push({event:t,listeners:h})}var zv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Pp(e){return(typeof e=="string"?e:""+e).replace(zv,`
`).replace(Dv,"")}function Vp(e,t){return t=Pp(t),Pp(e)===t}function Ne(e,t,a,i,s,c){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||vi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&vi(e,""+i);break;case"className":Hl(e,"class",i);break;case"tabIndex":Hl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(e,a,i);break;case"style":Vd(e,i,c);break;case"data":if(t!=="object"){Hl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Pl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",s.name,s,null),Ne(e,t,"formEncType",s.formEncType,s,null),Ne(e,t,"formMethod",s.formMethod,s,null),Ne(e,t,"formTarget",s.formTarget,s,null)):(Ne(e,t,"encType",s.encType,s,null),Ne(e,t,"method",s.method,s,null),Ne(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Pl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=qn);break;case"onScroll":i!=null&&be("scroll",e);break;case"onScrollEnd":i!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Pl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":be("beforetoggle",e),be("toggle",e),Gl(e,"popover",i);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u0.get(a)||a,Gl(e,a,i))}}function Hc(e,t,a,i,s,c){switch(a){case"style":Vd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?vi(e,i):(typeof i=="number"||typeof i=="bigint")&&vi(e,""+i);break;case"onScroll":i!=null&&be("scroll",e);break;case"onScrollEnd":i!=null&&be("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),c=e[At]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,s);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Gl(e,a,i)}}}function gt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var i=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var h=a[c];if(h!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,c,h,a,null)}}s&&Ne(e,t,"srcSet",a.srcSet,a,null),i&&Ne(e,t,"src",a.src,a,null);return;case"input":be("invalid",e);var y=c=h=s=null,A=null,k=null;for(i in a)if(a.hasOwnProperty(i)){var V=a[i];if(V!=null)switch(i){case"name":s=V;break;case"type":h=V;break;case"checked":A=V;break;case"defaultChecked":k=V;break;case"value":c=V;break;case"defaultValue":y=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,t));break;default:Ne(e,t,i,V,a,null)}}Gd(e,c,y,A,k,h,s,!1);return;case"select":be("invalid",e),i=h=c=null;for(s in a)if(a.hasOwnProperty(s)&&(y=a[s],y!=null))switch(s){case"value":c=y;break;case"defaultValue":h=y;break;case"multiple":i=y;default:Ne(e,t,s,y,a,null)}t=c,a=h,e.multiple=!!i,t!=null?yi(e,!!i,t,!1):a!=null&&yi(e,!!i,a,!0);return;case"textarea":be("invalid",e),c=s=i=null;for(h in a)if(a.hasOwnProperty(h)&&(y=a[h],y!=null))switch(h){case"value":i=y;break;case"defaultValue":s=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Ne(e,t,h,y,a,null)}$d(e,i,s,c);return;case"option":for(A in a)if(a.hasOwnProperty(A)&&(i=a[A],i!=null))switch(A){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ne(e,t,A,i,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(i=0;i<Qr.length;i++)be(Qr[i],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(i=a[k],i!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,k,i,a,null)}return;default:if(tu(t)){for(V in a)a.hasOwnProperty(V)&&(i=a[V],i!==void 0&&Hc(e,t,V,i,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(i=a[y],i!=null&&Ne(e,t,y,i,a,null))}function Bv(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,h=null,y=null,A=null,k=null,V=null;for(j in a){var J=a[j];if(a.hasOwnProperty(j)&&J!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":A=J;default:i.hasOwnProperty(j)||Ne(e,t,j,null,i,J)}}for(var N in i){var j=i[N];if(J=a[N],i.hasOwnProperty(N)&&(j!=null||J!=null))switch(N){case"type":c=j;break;case"name":s=j;break;case"checked":k=j;break;case"defaultChecked":V=j;break;case"value":h=j;break;case"defaultValue":y=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:j!==J&&Ne(e,t,N,j,i,J)}}Is(e,h,y,A,k,V,c,s);return;case"select":j=h=y=N=null;for(c in a)if(A=a[c],a.hasOwnProperty(c)&&A!=null)switch(c){case"value":break;case"multiple":j=A;default:i.hasOwnProperty(c)||Ne(e,t,c,null,i,A)}for(s in i)if(c=i[s],A=a[s],i.hasOwnProperty(s)&&(c!=null||A!=null))switch(s){case"value":N=c;break;case"defaultValue":y=c;break;case"multiple":h=c;default:c!==A&&Ne(e,t,s,c,i,A)}t=y,a=h,i=j,N!=null?yi(e,!!a,N,!1):!!i!=!!a&&(t!=null?yi(e,!!a,t,!0):yi(e,!!a,a?[]:"",!1));return;case"textarea":j=N=null;for(y in a)if(s=a[y],a.hasOwnProperty(y)&&s!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ne(e,t,y,null,i,s)}for(h in i)if(s=i[h],c=a[h],i.hasOwnProperty(h)&&(s!=null||c!=null))switch(h){case"value":N=s;break;case"defaultValue":j=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Ne(e,t,h,s,i,c)}Hd(e,N,j);return;case"option":for(var ie in a)if(N=a[ie],a.hasOwnProperty(ie)&&N!=null&&!i.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ne(e,t,ie,null,i,N)}for(A in i)if(N=i[A],j=a[A],i.hasOwnProperty(A)&&N!==j&&(N!=null||j!=null))switch(A){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ne(e,t,A,N,i,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)N=a[ce],a.hasOwnProperty(ce)&&N!=null&&!i.hasOwnProperty(ce)&&Ne(e,t,ce,null,i,N);for(k in i)if(N=i[k],j=a[k],i.hasOwnProperty(k)&&N!==j&&(N!=null||j!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:Ne(e,t,k,N,i,j)}return;default:if(tu(t)){for(var je in a)N=a[je],a.hasOwnProperty(je)&&N!==void 0&&!i.hasOwnProperty(je)&&Hc(e,t,je,void 0,i,N);for(V in i)N=i[V],j=a[V],!i.hasOwnProperty(V)||N===j||N===void 0&&j===void 0||Hc(e,t,V,N,i,j);return}}for(var E in a)N=a[E],a.hasOwnProperty(E)&&N!=null&&!i.hasOwnProperty(E)&&Ne(e,t,E,null,i,N);for(J in i)N=i[J],j=a[J],!i.hasOwnProperty(J)||N===j||N==null&&j==null||Ne(e,t,J,N,i,j)}function Yp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var s=a[i],c=s.transferSize,h=s.initiatorType,y=s.duration;if(c&&y&&Yp(h)){for(h=0,y=s.responseEnd,i+=1;i<a.length;i++){var A=a[i],k=A.startTime;if(k>y)break;var V=A.transferSize,J=A.initiatorType;V&&Yp(J)&&(A=A.responseEnd,h+=V*(A<y?1:(y-k)/(A-k)))}if(--i,t+=8*(c+h)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $c=null,Pc=null;function Uo(e){return e.nodeType===9?e:e.ownerDocument}function Xp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yc=null;function jv(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var Kp=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,Gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(e){return Qp.resolve(null).then(e).catch(Hv)}:Kp;function Hv(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Fp(e,t){var a=t,i=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(s),Fi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Zr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Zr(a);for(var c=a.firstChild;c;){var h=c.nextSibling,y=c.nodeName;c[pr]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=h}}else a==="body"&&Zr(e.ownerDocument.body);a=s}while(a);Fi(t)}function Zp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xc(a),Zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $v(e,t,a,i){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function Pv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=nn(e.nextSibling),e===null))return null;return e}function Wp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=nn(e.nextSibling),e===null))return null;return e}function Jc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vv(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qc=null;function Ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return nn(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function eg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function tg(e,t,a){switch(t=Uo(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Zr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zs(e)}var an=new Map,ng=new Set;function Go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xn=W.d;W.d={f:Yv,r:Xv,D:Jv,C:Kv,L:Qv,m:Fv,X:Wv,S:Zv,M:Iv};function Yv(){var e=Xn.f(),t=Lo();return e||t}function Xv(e){var t=pi(e);t!==null&&t.tag===5&&t.type==="form"?vh(t):Xn.r(e)}var Ji=typeof document>"u"?null:document;function ag(e,t,a){var i=Ji;if(i&&typeof t=="string"&&t){var s=Qt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),ng.has(s)||(ng.add(s),e={rel:e,crossOrigin:a,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),gt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Jv(e){Xn.D(e),ag("dns-prefetch",e,null)}function Kv(e,t){Xn.C(e,t),ag("preconnect",e,t)}function Qv(e,t,a){Xn.L(e,t,a);var i=Ji;if(i&&e&&t){var s='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Qt(a.imageSizes)+'"]')):s+='[href="'+Qt(e)+'"]';var c=s;switch(t){case"style":c=Ki(e);break;case"script":c=Qi(e)}an.has(c)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),an.set(c,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Wr(c))||t==="script"&&i.querySelector(Ir(c))||(t=i.createElement("link"),gt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Fv(e,t){Xn.m(e,t);var a=Ji;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Qt(i)+'"][href="'+Qt(e)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Qi(e)}if(!an.has(c)&&(e=b({rel:"modulepreload",href:e},t),an.set(c,e),a.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ir(c)))return}i=a.createElement("link"),gt(i,"link",e),ut(i),a.head.appendChild(i)}}}function Zv(e,t,a){Xn.S(e,t,a);var i=Ji;if(i&&e){var s=gi(i).hoistableStyles,c=Ki(e);t=t||"default";var h=s.get(c);if(!h){var y={loading:0,preload:null};if(h=i.querySelector(Wr(c)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=an.get(c))&&Fc(e,a);var A=h=i.createElement("link");ut(A),gt(A,"link",e),A._p=new Promise(function(k,V){A.onload=k,A.onerror=V}),A.addEventListener("load",function(){y.loading|=1}),A.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Ho(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:y},s.set(c,h)}}}function Wv(e,t){Xn.X(e,t);var a=Ji;if(a&&e){var i=gi(a).hoistableScripts,s=Qi(e),c=i.get(s);c||(c=a.querySelector(Ir(s)),c||(e=b({src:e,async:!0},t),(t=an.get(s))&&Zc(e,t),c=a.createElement("script"),ut(c),gt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Iv(e,t){Xn.M(e,t);var a=Ji;if(a&&e){var i=gi(a).hoistableScripts,s=Qi(e),c=i.get(s);c||(c=a.querySelector(Ir(s)),c||(e=b({src:e,async:!0,type:"module"},t),(t=an.get(s))&&Zc(e,t),c=a.createElement("script"),ut(c),gt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function ig(e,t,a,i){var s=(s=fe.current)?Go(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ki(a.href),a=gi(s).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ki(a.href);var c=gi(s).hoistableStyles,h=c.get(e);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=s.querySelector(Wr(e)))&&!c._p&&(h.instance=c,h.state.loading=5),an.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},an.set(e,a),c||e1(s,e,a,h.state))),t&&i===null)throw Error(o(528,""));return h}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qi(a),a=gi(s).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ki(e){return'href="'+Qt(e)+'"'}function Wr(e){return'link[rel="stylesheet"]['+e+"]"}function rg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function e1(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gt(t,"link",a),ut(t),e.head.appendChild(t))}function Qi(e){return'[src="'+Qt(e)+'"]'}function Ir(e){return"script[async]"+e}function lg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qt(a.href)+'"]');if(i)return t.instance=i,ut(i),i;var s=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ut(i),gt(i,"style",s),Ho(i,a.precedence,e),t.instance=i;case"stylesheet":s=Ki(a.href);var c=e.querySelector(Wr(s));if(c)return t.state.loading|=4,t.instance=c,ut(c),c;i=rg(a),(s=an.get(s))&&Fc(i,s),c=(e.ownerDocument||e).createElement("link"),ut(c);var h=c;return h._p=new Promise(function(y,A){h.onload=y,h.onerror=A}),gt(c,"link",i),t.state.loading|=4,Ho(c,a.precedence,e),t.instance=c;case"script":return c=Qi(a.src),(s=e.querySelector(Ir(c)))?(t.instance=s,ut(s),s):(i=a,(s=an.get(c))&&(i=b({},a),Zc(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),ut(s),gt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ho(i,a.precedence,e));return t.instance}function Ho(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,h=0;h<i.length;h++){var y=i[h];if(y.dataset.precedence===t)c=y;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $o=null;function og(e,t,a){if($o===null){var i=new Map,s=$o=new Map;s.set(a,i)}else s=$o,i=s.get(a),i||(i=new Map,s.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var c=a[s];if(!(c[pr]||c[dt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var y=i.get(h);y?y.push(c):i.set(h,[c])}}return i}function sg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function t1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function n1(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=Ki(i.href),c=t.querySelector(Wr(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Po.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,ut(c);return}c=t.ownerDocument||t,i=rg(i),(s=an.get(s))&&Fc(i,s),c=c.createElement("link"),ut(c);var h=c;h._p=new Promise(function(y,A){h.onload=y,h.onerror=A}),gt(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Po.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wc=0;function a1(e,t){return e.stylesheets&&e.count===0&&Yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Yo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Wc===0&&(Wc=62500*Nv());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Wc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vo=null;function Yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vo=new Map,t.forEach(i1,e),Vo=null,Po.call(e))}function i1(e,t){if(!(t.state.loading&4)){var a=Vo.get(e);if(a)var i=a.get(null);else{a=new Map,Vo.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var h=s[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),i=h)}i&&a.set(null,i)}s=t.instance,h=s.getAttribute("data-precedence"),c=a.get(h)||i,c===i&&a.set(null,s),a.set(h,s),this.count++,i=Po.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var el={$$typeof:U,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function r1(e,t,a,i,s,c,h,y,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.hiddenUpdates=Js(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function cg(e,t,a,i,s,c,h,y,A,k,V,J){return e=new r1(e,t,a,h,A,k,V,J,y),t=1,c===!0&&(t|=24),c=Nt(3,null,null,t),e.current=c,c.stateNode=e,t=Lu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:t},Du(c),e}function fg(e){return e?(e=Ti,e):Ti}function dg(e,t,a,i,s,c){s=fg(s),i.context===null?i.context=s:i.pendingContext=s,i=la(t),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=oa(e,i,t),a!==null&&(Lt(a,e,t),Or(a,e,t))}function mg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ic(e,t){mg(e,t),(e=e.alternate)&&mg(e,t)}function hg(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&Lt(t,e,67108864),Ic(e,67108864)}}function pg(e){if(e.tag===13||e.tag===31){var t=$t();t=Ks(t);var a=Ba(e,t);a!==null&&Lt(a,e,t),Ic(e,t)}}var Xo=!0;function l1(e,t,a,i){var s=D.T;D.T=null;var c=W.p;try{W.p=2,ef(e,t,a,i)}finally{W.p=c,D.T=s}}function o1(e,t,a,i){var s=D.T;D.T=null;var c=W.p;try{W.p=8,ef(e,t,a,i)}finally{W.p=c,D.T=s}}function ef(e,t,a,i){if(Xo){var s=tf(i);if(s===null)Gc(e,t,i,Jo,a),bg(e,i);else if(u1(s,e,t,a,i))i.stopPropagation();else if(bg(e,i),t&4&&-1<s1.indexOf(e)){for(;s!==null;){var c=pi(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=La(c.pendingLanes);if(h!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var A=1<<31-Dt(h);y.entanglements[1]|=A,h&=~A}xn(c),(Me&6)===0&&(Eo=xe()+500,Kr(0))}}break;case 31:case 13:y=Ba(c,2),y!==null&&Lt(y,c,2),Lo(),Ic(c,2)}if(c=tf(i),c===null&&Gc(e,t,i,Jo,a),c===s)break;s=c}s!==null&&i.stopPropagation()}else Gc(e,t,i,null,a)}}function tf(e){return e=au(e),nf(e)}var Jo=null;function nf(e){if(Jo=null,e=hi(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=m(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jo=e,null}function gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case st:return 2;case Pe:return 8;case ft:case Jt:return 32;case di:return 268435456;default:return 32}default:return 32}}var af=!1,ya=null,va=null,Sa=null,tl=new Map,nl=new Map,xa=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,t){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":tl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(t.pointerId)}}function al(e,t,a,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=pi(t),t!==null&&hg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function u1(e,t,a,i,s){switch(t){case"focusin":return ya=al(ya,e,t,a,i,s),!0;case"dragenter":return va=al(va,e,t,a,i,s),!0;case"mouseover":return Sa=al(Sa,e,t,a,i,s),!0;case"pointerover":var c=s.pointerId;return tl.set(c,al(tl.get(c)||null,e,t,a,i,s)),!0;case"gotpointercapture":return c=s.pointerId,nl.set(c,al(nl.get(c)||null,e,t,a,i,s)),!0}return!1}function yg(e){var t=hi(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Od(e.priority,function(){pg(a)});return}}else if(t===31){if(t=m(a),t!==null){e.blockedOn=t,Od(e.priority,function(){pg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tf(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);nu=i,a.target.dispatchEvent(i),nu=null}else return t=pi(a),t!==null&&hg(t),e.blockedOn=a,!1;t.shift()}return!0}function vg(e,t,a){Ko(e)&&a.delete(t)}function c1(){af=!1,ya!==null&&Ko(ya)&&(ya=null),va!==null&&Ko(va)&&(va=null),Sa!==null&&Ko(Sa)&&(Sa=null),tl.forEach(vg),nl.forEach(vg)}function Qo(e,t){e.blockedOn===t&&(e.blockedOn=null,af||(af=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,c1)))}var Fo=null;function Sg(e){Fo!==e&&(Fo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Fo===e&&(Fo=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(nf(i||a)===null)continue;break}var c=pi(a);c!==null&&(e.splice(t,3),t-=3,tc(c,{pending:!0,data:s,method:a.method,action:i},i,s))}}))}function Fi(e){function t(A){return Qo(A,e)}ya!==null&&Qo(ya,e),va!==null&&Qo(va,e),Sa!==null&&Qo(Sa,e),tl.forEach(t),nl.forEach(t);for(var a=0;a<xa.length;a++){var i=xa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)yg(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var s=a[i],c=a[i+1],h=s[At]||null;if(typeof c=="function")h||Sg(a);else if(h){var y=null;if(c&&c.hasAttribute("formAction")){if(s=c,h=c[At]||null)y=h.formAction;else if(nf(s)!==null)continue}else y=h.action;typeof y=="function"?a[i+1]=y:(a.splice(i,3),i-=3),Sg(a)}}}function xg(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return s=h})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function rf(e){this._internalRoot=e}Zo.prototype.render=rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=$t();dg(a,i,e,t,null,null)},Zo.prototype.unmount=rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dg(e.current,2,null,e,null,null),Lo(),t[mi]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&yg(e)}};var wg=r.version;if(wg!=="19.2.1")throw Error(o(527,wg,"19.2.1"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var f1={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{dr=Wo.inject(f1),zt=Wo}catch{}}return sl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var a=!1,i="",s=Eh,c=qh,h=Lh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=cg(e,1,!1,null,null,a,i,null,s,c,h,xg),e[mi]=t.current,Uc(e),new rf(t)},sl.hydrateRoot=function(e,t,a){if(!u(e))throw Error(o(299));var i=!1,s="",c=Eh,h=qh,y=Lh,A=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.formState!==void 0&&(A=a.formState)),t=cg(e,1,!0,t,a??null,i,s,A,c,h,y,xg),t.context=fg(null),a=t.current,i=$t(),i=Ks(i),s=la(i),s.callback=null,oa(a,s,i),a=i,t.current.lanes=a,hr(t,a),xn(t),e[mi]=t.current,Uc(e),new Zo(t)},sl.version="19.2.1",sl}var Zg;function cx(){if(Zg)return wf.exports;Zg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),wf.exports=ux(),wf.exports}var fx=cx();const dx=jb(fx),mx="/project-textile/assets/placeholder1-JcdSYIv8.png",Wg=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),hx="/project-textile/assets/placeholder1-B8hzmm9Y.jpg",Ig=Object.freeze(Object.defineProperty({__proto__:null,default:hx},Symbol.toStringTag,{value:"Module"})),px="/project-textile/assets/placeholder1-JcdSYIv8.png",eb=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),gx=[{path:["index.html"],title:"Equation Playground and Log Page",abstract:`
Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa
ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec et mi. Nam vulputate metus eu enim.
Vestibulum pellentesque felis eu massa.
`},{path:["ongoing","index.html"],title:"Ongoing Research Index Page",abstract:`
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
`}],wl={black:"#000",white:"#fff"},Zi={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Wi={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Ii={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},er={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},tr={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ul={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},bx={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function ii(n,...r){const l=new URL(`https://mui.com/production-error/?code=${n}`);return r.forEach(o=>l.searchParams.append("args[]",o)),`Minified MUI error #${n}; visit ${l} for the full message.`}const Kn="$$material";function Gf(){return Gf=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var o in l)({}).hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},Gf.apply(null,arguments)}function yx(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function vx(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Sx=(function(){function n(l){var o=this;this._insertTag=function(u){var f;o.tags.length===0?o.insertionPoint?f=o.insertionPoint.nextSibling:o.prepend?f=o.container.firstChild:f=o.before:f=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(u,f),o.tags.push(u)},this.isSpeedy=l.speedy===void 0?!0:l.speedy,this.tags=[],this.ctr=0,this.nonce=l.nonce,this.key=l.key,this.container=l.container,this.prepend=l.prepend,this.insertionPoint=l.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(o){o.forEach(this._insertTag)},r.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vx(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var f=yx(u);try{f.insertRule(o,f.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(o));this.ctr++},r.flush=function(){this.tags.forEach(function(o){var u;return(u=o.parentNode)==null?void 0:u.removeChild(o)}),this.tags=[],this.ctr=0},n})(),St="-ms-",_s="-moz-",Re="-webkit-",ry="comm",sd="rule",ud="decl",xx="@import",ly="@keyframes",wx="@layer",_x=Math.abs,Ls=String.fromCharCode,Cx=Object.assign;function Ax(n,r){return bt(n,0)^45?(((r<<2^bt(n,0))<<2^bt(n,1))<<2^bt(n,2))<<2^bt(n,3):0}function oy(n){return n.trim()}function Tx(n,r){return(n=r.exec(n))?n[0]:n}function Ee(n,r,l){return n.replace(r,l)}function Hf(n,r){return n.indexOf(r)}function bt(n,r){return n.charCodeAt(r)|0}function _l(n,r,l){return n.slice(r,l)}function _n(n){return n.length}function cd(n){return n.length}function is(n,r){return r.push(n),n}function Mx(n,r){return n.map(r).join("")}var Os=1,sr=1,sy=0,Ot=0,rt=0,ur="";function ks(n,r,l,o,u,f,d){return{value:n,root:r,parent:l,type:o,props:u,children:f,line:Os,column:sr,length:d,return:""}}function cl(n,r){return Cx(ks("",null,null,"",null,null,0),n,{length:-n.length},r)}function Rx(){return rt}function Ex(){return rt=Ot>0?bt(ur,--Ot):0,sr--,rt===10&&(sr=1,Os--),rt}function Yt(){return rt=Ot<sy?bt(ur,Ot++):0,sr++,rt===10&&(sr=1,Os++),rt}function Tn(){return bt(ur,Ot)}function cs(){return Ot}function Rl(n,r){return _l(ur,n,r)}function Cl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uy(n){return Os=sr=1,sy=_n(ur=n),Ot=0,[]}function cy(n){return ur="",n}function fs(n){return oy(Rl(Ot-1,$f(n===91?n+2:n===40?n+1:n)))}function qx(n){for(;(rt=Tn())&&rt<33;)Yt();return Cl(n)>2||Cl(rt)>3?"":" "}function Lx(n,r){for(;--r&&Yt()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Rl(n,cs()+(r<6&&Tn()==32&&Yt()==32))}function $f(n){for(;Yt();)switch(rt){case n:return Ot;case 34:case 39:n!==34&&n!==39&&$f(rt);break;case 40:n===41&&$f(n);break;case 92:Yt();break}return Ot}function Ox(n,r){for(;Yt()&&n+rt!==57;)if(n+rt===84&&Tn()===47)break;return"/*"+Rl(r,Ot-1)+"*"+Ls(n===47?n:Yt())}function kx(n){for(;!Cl(Tn());)Yt();return Rl(n,Ot)}function zx(n){return cy(ds("",null,null,null,[""],n=uy(n),0,[0],n))}function ds(n,r,l,o,u,f,d,m,g){for(var p=0,v=0,b=d,S=0,w=0,C=0,_=1,R=1,L=1,H=0,U="",$=u,B=f,q=o,z=U;R;)switch(C=H,H=Yt()){case 40:if(C!=108&&bt(z,b-1)==58){Hf(z+=Ee(fs(H),"&","&\f"),"&\f")!=-1&&(L=-1);break}case 34:case 39:case 91:z+=fs(H);break;case 9:case 10:case 13:case 32:z+=qx(C);break;case 92:z+=Lx(cs()-1,7);continue;case 47:switch(Tn()){case 42:case 47:is(Dx(Ox(Yt(),cs()),r,l),g);break;default:z+="/"}break;case 123*_:m[p++]=_n(z)*L;case 125*_:case 59:case 0:switch(H){case 0:case 125:R=0;case 59+v:L==-1&&(z=Ee(z,/\f/g,"")),w>0&&_n(z)-b&&is(w>32?nb(z+";",o,l,b-1):nb(Ee(z," ","")+";",o,l,b-2),g);break;case 59:z+=";";default:if(is(q=tb(z,r,l,p,v,u,m,U,$=[],B=[],b),f),H===123)if(v===0)ds(z,r,q,q,$,f,b,m,B);else switch(S===99&&bt(z,3)===110?100:S){case 100:case 108:case 109:case 115:ds(n,q,q,o&&is(tb(n,q,q,0,0,u,m,U,u,$=[],b),B),u,B,b,m,o?$:B);break;default:ds(z,q,q,q,[""],B,0,m,B)}}p=v=w=0,_=L=1,U=z="",b=d;break;case 58:b=1+_n(z),w=C;default:if(_<1){if(H==123)--_;else if(H==125&&_++==0&&Ex()==125)continue}switch(z+=Ls(H),H*_){case 38:L=v>0?1:(z+="\f",-1);break;case 44:m[p++]=(_n(z)-1)*L,L=1;break;case 64:Tn()===45&&(z+=fs(Yt())),S=Tn(),v=b=_n(U=z+=kx(cs())),H++;break;case 45:C===45&&_n(z)==2&&(_=0)}}return f}function tb(n,r,l,o,u,f,d,m,g,p,v){for(var b=u-1,S=u===0?f:[""],w=cd(S),C=0,_=0,R=0;C<o;++C)for(var L=0,H=_l(n,b+1,b=_x(_=d[C])),U=n;L<w;++L)(U=oy(_>0?S[L]+" "+H:Ee(H,/&\f/g,S[L])))&&(g[R++]=U);return ks(n,r,l,u===0?sd:m,g,p,v)}function Dx(n,r,l){return ks(n,r,l,ry,Ls(Rx()),_l(n,2,-2),0)}function nb(n,r,l,o){return ks(n,r,l,ud,_l(n,0,o),_l(n,o+1,-1),o)}function ar(n,r){for(var l="",o=cd(n),u=0;u<o;u++)l+=r(n[u],u,n,r)||"";return l}function Bx(n,r,l,o){switch(n.type){case wx:if(n.children.length)break;case xx:case ud:return n.return=n.return||n.value;case ry:return"";case ly:return n.return=n.value+"{"+ar(n.children,o)+"}";case sd:n.value=n.props.join(",")}return _n(l=ar(n.children,o))?n.return=n.value+"{"+l+"}":""}function Nx(n){var r=cd(n);return function(l,o,u,f){for(var d="",m=0;m<r;m++)d+=n[m](l,o,u,f)||"";return d}}function jx(n){return function(r){r.root||(r=r.return)&&n(r)}}function fy(n){var r=Object.create(null);return function(l){return r[l]===void 0&&(r[l]=n(l)),r[l]}}var Ux=function(r,l,o){for(var u=0,f=0;u=f,f=Tn(),u===38&&f===12&&(l[o]=1),!Cl(f);)Yt();return Rl(r,Ot)},Gx=function(r,l){var o=-1,u=44;do switch(Cl(u)){case 0:u===38&&Tn()===12&&(l[o]=1),r[o]+=Ux(Ot-1,l,o);break;case 2:r[o]+=fs(u);break;case 4:if(u===44){r[++o]=Tn()===58?"&\f":"",l[o]=r[o].length;break}default:r[o]+=Ls(u)}while(u=Yt());return r},Hx=function(r,l){return cy(Gx(uy(r),l))},ab=new WeakMap,$x=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var l=r.value,o=r.parent,u=r.column===o.column&&r.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(r.props.length===1&&l.charCodeAt(0)!==58&&!ab.get(o))&&!u){ab.set(r,!0);for(var f=[],d=Hx(l,f),m=o.props,g=0,p=0;g<d.length;g++)for(var v=0;v<m.length;v++,p++)r.props[p]=f[g]?d[g].replace(/&\f/g,m[v]):m[v]+" "+d[g]}}},Px=function(r){if(r.type==="decl"){var l=r.value;l.charCodeAt(0)===108&&l.charCodeAt(2)===98&&(r.return="",r.value="")}};function dy(n,r){switch(Ax(n,r)){case 5103:return Re+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+n+_s+n+St+n+n;case 6828:case 4268:return Re+n+St+n+n;case 6165:return Re+n+St+"flex-"+n+n;case 5187:return Re+n+Ee(n,/(\w+).+(:[^]+)/,Re+"box-$1$2"+St+"flex-$1$2")+n;case 5443:return Re+n+St+"flex-item-"+Ee(n,/flex-|-self/,"")+n;case 4675:return Re+n+St+"flex-line-pack"+Ee(n,/align-content|flex-|-self/,"")+n;case 5548:return Re+n+St+Ee(n,"shrink","negative")+n;case 5292:return Re+n+St+Ee(n,"basis","preferred-size")+n;case 6060:return Re+"box-"+Ee(n,"-grow","")+Re+n+St+Ee(n,"grow","positive")+n;case 4554:return Re+Ee(n,/([^-])(transform)/g,"$1"+Re+"$2")+n;case 6187:return Ee(Ee(Ee(n,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),n,"")+n;case 5495:case 3959:return Ee(n,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Ee(Ee(n,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+n+n;case 4095:case 3583:case 4068:case 2532:return Ee(n,/(.+)-inline(.+)/,Re+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(n)-1-r>6)switch(bt(n,r+1)){case 109:if(bt(n,r+4)!==45)break;case 102:return Ee(n,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+_s+(bt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Hf(n,"stretch")?dy(Ee(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(bt(n,r+1)!==115)break;case 6444:switch(bt(n,_n(n)-3-(~Hf(n,"!important")&&10))){case 107:return Ee(n,":",":"+Re)+n;case 101:return Ee(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(bt(n,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+St+"$2box$3")+n}break;case 5936:switch(bt(n,r+11)){case 114:return Re+n+St+Ee(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Re+n+St+Ee(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Re+n+St+Ee(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Re+n+St+n+n}return n}var Vx=function(r,l,o,u){if(r.length>-1&&!r.return)switch(r.type){case ud:r.return=dy(r.value,r.length);break;case ly:return ar([cl(r,{value:Ee(r.value,"@","@"+Re)})],u);case sd:if(r.length)return Mx(r.props,function(f){switch(Tx(f,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ar([cl(r,{props:[Ee(f,/:(read-\w+)/,":"+_s+"$1")]})],u);case"::placeholder":return ar([cl(r,{props:[Ee(f,/:(plac\w+)/,":"+Re+"input-$1")]}),cl(r,{props:[Ee(f,/:(plac\w+)/,":"+_s+"$1")]}),cl(r,{props:[Ee(f,/:(plac\w+)/,St+"input-$1")]})],u)}return""})}},Yx=[Vx],Xx=function(r){var l=r.key;if(l==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(_){var R=_.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var u=r.stylisPlugins||Yx,f={},d,m=[];d=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+l+' "]'),function(_){for(var R=_.getAttribute("data-emotion").split(" "),L=1;L<R.length;L++)f[R[L]]=!0;m.push(_)});var g,p=[$x,Px];{var v,b=[Bx,jx(function(_){v.insert(_)})],S=Nx(p.concat(u,b)),w=function(R){return ar(zx(R),S)};g=function(R,L,H,U){v=H,w(R?R+"{"+L.styles+"}":L.styles),U&&(C.inserted[L.name]=!0)}}var C={key:l,sheet:new Sx({key:l,container:d,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:f,registered:{},insert:g};return C.sheet.hydrate(m),C},Af={exports:{}},Le={};var ib;function Jx(){if(ib)return Le;ib=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,g=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,v=n?Symbol.for("react.forward_ref"):60112,b=n?Symbol.for("react.suspense"):60113,S=n?Symbol.for("react.suspense_list"):60120,w=n?Symbol.for("react.memo"):60115,C=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.block"):60121,R=n?Symbol.for("react.fundamental"):60117,L=n?Symbol.for("react.responder"):60118,H=n?Symbol.for("react.scope"):60119;function U(B){if(typeof B=="object"&&B!==null){var q=B.$$typeof;switch(q){case r:switch(B=B.type,B){case g:case p:case o:case f:case u:case b:return B;default:switch(B=B&&B.$$typeof,B){case m:case v:case C:case w:case d:return B;default:return q}}case l:return q}}}function $(B){return U(B)===p}return Le.AsyncMode=g,Le.ConcurrentMode=p,Le.ContextConsumer=m,Le.ContextProvider=d,Le.Element=r,Le.ForwardRef=v,Le.Fragment=o,Le.Lazy=C,Le.Memo=w,Le.Portal=l,Le.Profiler=f,Le.StrictMode=u,Le.Suspense=b,Le.isAsyncMode=function(B){return $(B)||U(B)===g},Le.isConcurrentMode=$,Le.isContextConsumer=function(B){return U(B)===m},Le.isContextProvider=function(B){return U(B)===d},Le.isElement=function(B){return typeof B=="object"&&B!==null&&B.$$typeof===r},Le.isForwardRef=function(B){return U(B)===v},Le.isFragment=function(B){return U(B)===o},Le.isLazy=function(B){return U(B)===C},Le.isMemo=function(B){return U(B)===w},Le.isPortal=function(B){return U(B)===l},Le.isProfiler=function(B){return U(B)===f},Le.isStrictMode=function(B){return U(B)===u},Le.isSuspense=function(B){return U(B)===b},Le.isValidElementType=function(B){return typeof B=="string"||typeof B=="function"||B===o||B===p||B===f||B===u||B===b||B===S||typeof B=="object"&&B!==null&&(B.$$typeof===C||B.$$typeof===w||B.$$typeof===d||B.$$typeof===m||B.$$typeof===v||B.$$typeof===R||B.$$typeof===L||B.$$typeof===H||B.$$typeof===_)},Le.typeOf=U,Le}var rb;function Kx(){return rb||(rb=1,Af.exports=Jx()),Af.exports}var Tf,lb;function Qx(){if(lb)return Tf;lb=1;var n=Kx(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};f[n.ForwardRef]=o,f[n.Memo]=u;function d(C){return n.isMemo(C)?u:f[C.$$typeof]||r}var m=Object.defineProperty,g=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,S=Object.prototype;function w(C,_,R){if(typeof _!="string"){if(S){var L=b(_);L&&L!==S&&w(C,L,R)}var H=g(_);p&&(H=H.concat(p(_)));for(var U=d(C),$=d(_),B=0;B<H.length;++B){var q=H[B];if(!l[q]&&!(R&&R[q])&&!($&&$[q])&&!(U&&U[q])){var z=v(_,q);try{m(C,q,z)}catch{}}}}return C}return Tf=w,Tf}Qx();var Fx=!0;function my(n,r,l){var o="";return l.split(" ").forEach(function(u){n[u]!==void 0?r.push(n[u]+";"):u&&(o+=u+" ")}),o}var fd=function(r,l,o){var u=r.key+"-"+l.name;(o===!1||Fx===!1)&&r.registered[u]===void 0&&(r.registered[u]=l.styles)},dd=function(r,l,o){fd(r,l,o);var u=r.key+"-"+l.name;if(r.inserted[l.name]===void 0){var f=l;do r.insert(l===f?"."+u:"",f,r.sheet,!0),f=f.next;while(f!==void 0)}};function Zx(n){for(var r=0,l,o=0,u=n.length;u>=4;++o,u-=4)l=n.charCodeAt(o)&255|(n.charCodeAt(++o)&255)<<8|(n.charCodeAt(++o)&255)<<16|(n.charCodeAt(++o)&255)<<24,l=(l&65535)*1540483477+((l>>>16)*59797<<16),l^=l>>>24,r=(l&65535)*1540483477+((l>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(u){case 3:r^=(n.charCodeAt(o+2)&255)<<16;case 2:r^=(n.charCodeAt(o+1)&255)<<8;case 1:r^=n.charCodeAt(o)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Wx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ix=/[A-Z]|^ms/g,e2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hy=function(r){return r.charCodeAt(1)===45},ob=function(r){return r!=null&&typeof r!="boolean"},Mf=fy(function(n){return hy(n)?n:n.replace(Ix,"-$&").toLowerCase()}),sb=function(r,l){switch(r){case"animation":case"animationName":if(typeof l=="string")return l.replace(e2,function(o,u,f){return Cn={name:u,styles:f,next:Cn},u})}return Wx[r]!==1&&!hy(r)&&typeof l=="number"&&l!==0?l+"px":l};function Al(n,r,l){if(l==null)return"";var o=l;if(o.__emotion_styles!==void 0)return o;switch(typeof l){case"boolean":return"";case"object":{var u=l;if(u.anim===1)return Cn={name:u.name,styles:u.styles,next:Cn},u.name;var f=l;if(f.styles!==void 0){var d=f.next;if(d!==void 0)for(;d!==void 0;)Cn={name:d.name,styles:d.styles,next:Cn},d=d.next;var m=f.styles+";";return m}return t2(n,r,l)}case"function":{if(n!==void 0){var g=Cn,p=l(n);return Cn=g,Al(n,r,p)}break}}var v=l;if(r==null)return v;var b=r[v];return b!==void 0?b:v}function t2(n,r,l){var o="";if(Array.isArray(l))for(var u=0;u<l.length;u++)o+=Al(n,r,l[u])+";";else for(var f in l){var d=l[f];if(typeof d!="object"){var m=d;r!=null&&r[m]!==void 0?o+=f+"{"+r[m]+"}":ob(m)&&(o+=Mf(f)+":"+sb(f,m)+";")}else if(Array.isArray(d)&&typeof d[0]=="string"&&(r==null||r[d[0]]===void 0))for(var g=0;g<d.length;g++)ob(d[g])&&(o+=Mf(f)+":"+sb(f,d[g])+";");else{var p=Al(n,r,d);switch(f){case"animation":case"animationName":{o+=Mf(f)+":"+p+";";break}default:o+=f+"{"+p+"}"}}}return o}var ub=/label:\s*([^\s;{]+)\s*(;|$)/g,Cn;function El(n,r,l){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var o=!0,u="";Cn=void 0;var f=n[0];if(f==null||f.raw===void 0)o=!1,u+=Al(l,r,f);else{var d=f;u+=d[0]}for(var m=1;m<n.length;m++)if(u+=Al(l,r,n[m]),o){var g=f;u+=g[m]}ub.lastIndex=0;for(var p="",v;(v=ub.exec(u))!==null;)p+="-"+v[1];var b=Zx(u)+p;return{name:b,styles:u,next:Cn}}var n2=function(r){return r()},py=Uf.useInsertionEffect?Uf.useInsertionEffect:!1,gy=py||n2,cb=py||K.useLayoutEffect,by=K.createContext(typeof HTMLElement<"u"?Xx({key:"css"}):null);by.Provider;var md=function(r){return K.forwardRef(function(l,o){var u=K.useContext(by);return r(l,u,o)})},ql=K.createContext({}),hd={}.hasOwnProperty,Pf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",a2=function(r,l){var o={};for(var u in l)hd.call(l,u)&&(o[u]=l[u]);return o[Pf]=r,o},i2=function(r){var l=r.cache,o=r.serialized,u=r.isStringTag;return fd(l,o,u),gy(function(){return dd(l,o,u)}),null},r2=md(function(n,r,l){var o=n.css;typeof o=="string"&&r.registered[o]!==void 0&&(o=r.registered[o]);var u=n[Pf],f=[o],d="";typeof n.className=="string"?d=my(r.registered,f,n.className):n.className!=null&&(d=n.className+" ");var m=El(f,void 0,K.useContext(ql));d+=r.key+"-"+m.name;var g={};for(var p in n)hd.call(n,p)&&p!=="css"&&p!==Pf&&(g[p]=n[p]);return g.className=d,l&&(g.ref=l),K.createElement(K.Fragment,null,K.createElement(i2,{cache:r,serialized:m,isStringTag:typeof u=="string"}),K.createElement(u,g))}),l2=r2,fb=function(r,l){var o=arguments;if(l==null||!hd.call(l,"css"))return K.createElement.apply(void 0,o);var u=o.length,f=new Array(u);f[0]=l2,f[1]=a2(r,l);for(var d=2;d<u;d++)f[d]=o[d];return K.createElement.apply(null,f)};(function(n){var r;r||(r=n.JSX||(n.JSX={}))})(fb||(fb={}));var o2=md(function(n,r){var l=n.styles,o=El([l],void 0,K.useContext(ql)),u=K.useRef();return cb(function(){var f=r.key+"-global",d=new r.sheet.constructor({key:f,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),m=!1,g=document.querySelector('style[data-emotion="'+f+" "+o.name+'"]');return r.sheet.tags.length&&(d.before=r.sheet.tags[0]),g!==null&&(m=!0,g.setAttribute("data-emotion",f),d.hydrate([g])),u.current=[d,m],function(){d.flush()}},[r]),cb(function(){var f=u.current,d=f[0],m=f[1];if(m){f[1]=!1;return}if(o.next!==void 0&&dd(r,o.next,!0),d.tags.length){var g=d.tags[d.tags.length-1].nextElementSibling;d.before=g,d.flush()}r.insert("",o,d,!1)},[r,o.name]),null});function s2(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return El(r)}function oA(){var n=s2.apply(void 0,arguments),r="animation-"+n.name;return{name:r,styles:"@keyframes "+r+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var u2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c2=fy(function(n){return u2.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),f2=c2,d2=function(r){return r!=="theme"},db=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?f2:d2},mb=function(r,l,o){var u;if(l){var f=l.shouldForwardProp;u=r.__emotion_forwardProp&&f?function(d){return r.__emotion_forwardProp(d)&&f(d)}:f}return typeof u!="function"&&o&&(u=r.__emotion_forwardProp),u},m2=function(r){var l=r.cache,o=r.serialized,u=r.isStringTag;return fd(l,o,u),gy(function(){return dd(l,o,u)}),null},h2=function n(r,l){var o=r.__emotion_real===r,u=o&&r.__emotion_base||r,f,d;l!==void 0&&(f=l.label,d=l.target);var m=mb(r,l,o),g=m||db(u),p=!g("as");return function(){var v=arguments,b=o&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(f!==void 0&&b.push("label:"+f+";"),v[0]==null||v[0].raw===void 0)b.push.apply(b,v);else{var S=v[0];b.push(S[0]);for(var w=v.length,C=1;C<w;C++)b.push(v[C],S[C])}var _=md(function(R,L,H){var U=p&&R.as||u,$="",B=[],q=R;if(R.theme==null){q={};for(var z in R)q[z]=R[z];q.theme=K.useContext(ql)}typeof R.className=="string"?$=my(L.registered,B,R.className):R.className!=null&&($=R.className+" ");var G=El(b.concat(B),L.registered,q);$+=L.key+"-"+G.name,d!==void 0&&($+=" "+d);var Q=p&&m===void 0?db(U):g,ee={};for(var I in R)p&&I==="as"||Q(I)&&(ee[I]=R[I]);return ee.className=$,H&&(ee.ref=H),K.createElement(K.Fragment,null,K.createElement(m2,{cache:L,serialized:G,isStringTag:typeof U=="string"}),K.createElement(U,ee))});return _.displayName=f!==void 0?f:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",_.defaultProps=r.defaultProps,_.__emotion_real=_,_.__emotion_base=u,_.__emotion_styles=b,_.__emotion_forwardProp=m,Object.defineProperty(_,"toString",{value:function(){return"."+d}}),_.withComponent=function(R,L){var H=n(R,Gf({},l,L,{shouldForwardProp:mb(_,L,!0)}));return H.apply(void 0,b)},_}},p2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Vf=h2.bind(null);p2.forEach(function(n){Vf[n]=Vf(n)});function g2(n){return n==null||Object.keys(n).length===0}function yy(n){const{styles:r,defaultTheme:l={}}=n,o=typeof r=="function"?u=>r(g2(u)?l:u):r;return F.jsx(o2,{styles:o})}function b2(n,r){return Vf(n,r)}function y2(n,r){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=r(n.__emotion_styles))}const hb=[];function Ma(n){return hb[0]=n,El(hb)}var Rf={exports:{}},Ue={};var pb;function v2(){if(pb)return Ue;pb=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.for("react.view_transition"),w=Symbol.for("react.client.reference");function C(_){if(typeof _=="object"&&_!==null){var R=_.$$typeof;switch(R){case n:switch(_=_.type,_){case l:case u:case o:case g:case p:case S:return _;default:switch(_=_&&_.$$typeof,_){case d:case m:case b:case v:return _;case f:return _;default:return R}}case r:return R}}}return Ue.ContextConsumer=f,Ue.ContextProvider=d,Ue.Element=n,Ue.ForwardRef=m,Ue.Fragment=l,Ue.Lazy=b,Ue.Memo=v,Ue.Portal=r,Ue.Profiler=u,Ue.StrictMode=o,Ue.Suspense=g,Ue.SuspenseList=p,Ue.isContextConsumer=function(_){return C(_)===f},Ue.isContextProvider=function(_){return C(_)===d},Ue.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===n},Ue.isForwardRef=function(_){return C(_)===m},Ue.isFragment=function(_){return C(_)===l},Ue.isLazy=function(_){return C(_)===b},Ue.isMemo=function(_){return C(_)===v},Ue.isPortal=function(_){return C(_)===r},Ue.isProfiler=function(_){return C(_)===u},Ue.isStrictMode=function(_){return C(_)===o},Ue.isSuspense=function(_){return C(_)===g},Ue.isSuspenseList=function(_){return C(_)===p},Ue.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===l||_===u||_===o||_===g||_===p||typeof _=="object"&&_!==null&&(_.$$typeof===b||_.$$typeof===v||_.$$typeof===d||_.$$typeof===f||_.$$typeof===m||_.$$typeof===w||_.getModuleId!==void 0)},Ue.typeOf=C,Ue}var gb;function S2(){return gb||(gb=1,Rf.exports=v2()),Rf.exports}var vy=S2();function An(n){if(typeof n!="object"||n===null)return!1;const r=Object.getPrototypeOf(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Sy(n){if(K.isValidElement(n)||vy.isValidElementType(n)||!An(n))return n;const r={};return Object.keys(n).forEach(l=>{r[l]=Sy(n[l])}),r}function _t(n,r,l={clone:!0}){const o=l.clone?{...n}:n;return An(n)&&An(r)&&Object.keys(r).forEach(u=>{K.isValidElement(r[u])||vy.isValidElementType(r[u])?o[u]=r[u]:An(r[u])&&Object.prototype.hasOwnProperty.call(n,u)&&An(n[u])?o[u]=_t(n[u],r[u],l):l.clone?o[u]=An(r[u])?Sy(r[u]):r[u]:o[u]=r[u]}),o}const x2=n=>{const r=Object.keys(n).map(l=>({key:l,val:n[l]}))||[];return r.sort((l,o)=>l.val-o.val),r.reduce((l,o)=>({...l,[o.key]:o.val}),{})};function w2(n){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:l="px",step:o=5,...u}=n,f=x2(r),d=Object.keys(f);function m(S){return`@media (min-width:${typeof r[S]=="number"?r[S]:S}${l})`}function g(S){return`@media (max-width:${(typeof r[S]=="number"?r[S]:S)-o/100}${l})`}function p(S,w){const C=d.indexOf(w);return`@media (min-width:${typeof r[S]=="number"?r[S]:S}${l}) and (max-width:${(C!==-1&&typeof r[d[C]]=="number"?r[d[C]]:w)-o/100}${l})`}function v(S){return d.indexOf(S)+1<d.length?p(S,d[d.indexOf(S)+1]):m(S)}function b(S){const w=d.indexOf(S);return w===0?m(d[1]):w===d.length-1?g(d[w]):p(S,d[d.indexOf(S)+1]).replace("@media","@media not all and")}return{keys:d,values:f,up:m,down:g,between:p,only:v,not:b,unit:l,...u}}function bb(n,r){if(!n.containerQueries)return r;const l=Object.keys(r).filter(o=>o.startsWith("@container")).sort((o,u)=>{const f=/min-width:\s*([0-9.]+)/;return+(o.match(f)?.[1]||0)-+(u.match(f)?.[1]||0)});return l.length?l.reduce((o,u)=>{const f=r[u];return delete o[u],o[u]=f,o},{...r}):r}function _2(n,r){return r==="@"||r.startsWith("@")&&(n.some(l=>r.startsWith(`@${l}`))||!!r.match(/^@\d/))}function C2(n,r){const l=r.match(/^@([^/]+)?\/?(.+)?$/);if(!l)return null;const[,o,u]=l,f=Number.isNaN(+o)?o||0:+o;return n.containerQueries(u).up(f)}function A2(n){const r=(f,d)=>f.replace("@media",d?`@container ${d}`:"@container");function l(f,d){f.up=(...m)=>r(n.breakpoints.up(...m),d),f.down=(...m)=>r(n.breakpoints.down(...m),d),f.between=(...m)=>r(n.breakpoints.between(...m),d),f.only=(...m)=>r(n.breakpoints.only(...m),d),f.not=(...m)=>{const g=r(n.breakpoints.not(...m),d);return g.includes("not all and")?g.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):g}}const o={},u=f=>(l(o,f),o);return l(u),{...n,containerQueries:u}}const T2={borderRadius:4};function yl(n,r){return r?_t(n,r,{clone:!1}):n}const zs={xs:0,sm:600,md:900,lg:1200,xl:1536},yb={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${zs[n]}px)`},M2={containerQueries:n=>({up:r=>{let l=typeof r=="number"?r:zs[r]||r;return typeof l=="number"&&(l=`${l}px`),n?`@container ${n} (min-width:${l})`:`@container (min-width:${l})`}})};function hn(n,r,l){const o=n.theme||{};if(Array.isArray(r)){const f=o.breakpoints||yb;return r.reduce((d,m,g)=>(d[f.up(f.keys[g])]=l(r[g]),d),{})}if(typeof r=="object"){const f=o.breakpoints||yb;return Object.keys(r).reduce((d,m)=>{if(_2(f.keys,m)){const g=C2(o.containerQueries?o:M2,m);g&&(d[g]=l(r[m],m))}else if(Object.keys(f.values||zs).includes(m)){const g=f.up(m);d[g]=l(r[m],m)}else{const g=m;d[g]=r[g]}return d},{})}return l(r)}function xy(n={}){return n.keys?.reduce((l,o)=>{const u=n.up(o);return l[u]={},l},{})||{}}function Yf(n,r){return n.reduce((l,o)=>{const u=l[o];return(!u||Object.keys(u).length===0)&&delete l[o],l},r)}function R2(n,...r){const l=xy(n),o=[l,...r].reduce((u,f)=>_t(u,f),{});return Yf(Object.keys(l),o)}function E2(n,r){if(typeof n!="object")return{};const l={},o=Object.keys(r);return Array.isArray(n)?o.forEach((u,f)=>{f<n.length&&(l[u]=!0)}):o.forEach(u=>{n[u]!=null&&(l[u]=!0)}),l}function Ef({values:n,breakpoints:r,base:l}){const o=l||E2(n,r),u=Object.keys(o);if(u.length===0)return n;let f;return u.reduce((d,m,g)=>(Array.isArray(n)?(d[m]=n[g]!=null?n[g]:n[f],f=g):typeof n=="object"?(d[m]=n[m]!=null?n[m]:n[f],f=m):d[m]=n,d),{})}function Fn(n){if(typeof n!="string")throw new Error(ii(7));return n.charAt(0).toUpperCase()+n.slice(1)}function Ds(n,r,l=!0){if(!r||typeof r!="string")return null;if(n&&n.vars&&l){const o=`vars.${r}`.split(".").reduce((u,f)=>u&&u[f]?u[f]:null,n);if(o!=null)return o}return r.split(".").reduce((o,u)=>o&&o[u]!=null?o[u]:null,n)}function Cs(n,r,l,o=l){let u;return typeof n=="function"?u=n(l):Array.isArray(n)?u=n[l]||o:u=Ds(n,l)||o,r&&(u=r(u,o,n)),u}function Ie(n){const{prop:r,cssProperty:l=n.prop,themeKey:o,transform:u}=n,f=d=>{if(d[r]==null)return null;const m=d[r],g=d.theme,p=Ds(g,o)||{};return hn(d,m,b=>{let S=Cs(p,u,b);return b===S&&typeof b=="string"&&(S=Cs(p,u,`${r}${b==="default"?"":Fn(b)}`,b)),l===!1?S:{[l]:S}})};return f.propTypes={},f.filterProps=[r],f}function q2(n){const r={};return l=>(r[l]===void 0&&(r[l]=n(l)),r[l])}const L2={m:"margin",p:"padding"},O2={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},vb={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},k2=q2(n=>{if(n.length>2)if(vb[n])n=vb[n];else return[n];const[r,l]=n.split(""),o=L2[r],u=O2[l]||"";return Array.isArray(u)?u.map(f=>o+f):[o+u]}),pd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],gd=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...pd,...gd];function Ll(n,r,l,o){const u=Ds(n,r,!0)??l;return typeof u=="number"||typeof u=="string"?f=>typeof f=="string"?f:typeof u=="string"?u.startsWith("var(")&&f===0?0:u.startsWith("var(")&&f===1?u:`calc(${f} * ${u})`:u*f:Array.isArray(u)?f=>{if(typeof f=="string")return f;const d=Math.abs(f),m=u[d];return f>=0?m:typeof m=="number"?-m:typeof m=="string"&&m.startsWith("var(")?`calc(-1 * ${m})`:`-${m}`}:typeof u=="function"?u:()=>{}}function Bs(n){return Ll(n,"spacing",8)}function ri(n,r){return typeof r=="string"||r==null?r:n(r)}function z2(n,r){return l=>n.reduce((o,u)=>(o[u]=ri(r,l),o),{})}function D2(n,r,l,o){if(!r.includes(l))return null;const u=k2(l),f=z2(u,o),d=n[l];return hn(n,d,f)}function wy(n,r){const l=Bs(n.theme);return Object.keys(n).map(o=>D2(n,r,o,l)).reduce(yl,{})}function Qe(n){return wy(n,pd)}Qe.propTypes={};Qe.filterProps=pd;function Fe(n){return wy(n,gd)}Fe.propTypes={};Fe.filterProps=gd;function _y(n=8,r=Bs({spacing:n})){if(n.mui)return n;const l=(...o)=>(o.length===0?[1]:o).map(f=>{const d=r(f);return typeof d=="number"?`${d}px`:d}).join(" ");return l.mui=!0,l}function Ns(...n){const r=n.reduce((o,u)=>(u.filterProps.forEach(f=>{o[f]=u}),o),{}),l=o=>Object.keys(o).reduce((u,f)=>r[f]?yl(u,r[f](o)):u,{});return l.propTypes={},l.filterProps=n.reduce((o,u)=>o.concat(u.filterProps),[]),l}function ln(n){return typeof n!="number"?n:`${n}px solid`}function sn(n,r){return Ie({prop:n,themeKey:"borders",transform:r})}const B2=sn("border",ln),N2=sn("borderTop",ln),j2=sn("borderRight",ln),U2=sn("borderBottom",ln),G2=sn("borderLeft",ln),H2=sn("borderColor"),$2=sn("borderTopColor"),P2=sn("borderRightColor"),V2=sn("borderBottomColor"),Y2=sn("borderLeftColor"),X2=sn("outline",ln),J2=sn("outlineColor"),js=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const r=Ll(n.theme,"shape.borderRadius",4),l=o=>({borderRadius:ri(r,o)});return hn(n,n.borderRadius,l)}return null};js.propTypes={};js.filterProps=["borderRadius"];Ns(B2,N2,j2,U2,G2,H2,$2,P2,V2,Y2,js,X2,J2);const Us=n=>{if(n.gap!==void 0&&n.gap!==null){const r=Ll(n.theme,"spacing",8),l=o=>({gap:ri(r,o)});return hn(n,n.gap,l)}return null};Us.propTypes={};Us.filterProps=["gap"];const Gs=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const r=Ll(n.theme,"spacing",8),l=o=>({columnGap:ri(r,o)});return hn(n,n.columnGap,l)}return null};Gs.propTypes={};Gs.filterProps=["columnGap"];const Hs=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const r=Ll(n.theme,"spacing",8),l=o=>({rowGap:ri(r,o)});return hn(n,n.rowGap,l)}return null};Hs.propTypes={};Hs.filterProps=["rowGap"];const K2=Ie({prop:"gridColumn"}),Q2=Ie({prop:"gridRow"}),F2=Ie({prop:"gridAutoFlow"}),Z2=Ie({prop:"gridAutoColumns"}),W2=Ie({prop:"gridAutoRows"}),I2=Ie({prop:"gridTemplateColumns"}),ew=Ie({prop:"gridTemplateRows"}),tw=Ie({prop:"gridTemplateAreas"}),nw=Ie({prop:"gridArea"});Ns(Us,Gs,Hs,K2,Q2,F2,Z2,W2,I2,ew,tw,nw);function ir(n,r){return r==="grey"?r:n}const aw=Ie({prop:"color",themeKey:"palette",transform:ir}),iw=Ie({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ir}),rw=Ie({prop:"backgroundColor",themeKey:"palette",transform:ir});Ns(aw,iw,rw);function Vt(n){return n<=1&&n!==0?`${n*100}%`:n}const lw=Ie({prop:"width",transform:Vt}),bd=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const r=l=>{const o=n.theme?.breakpoints?.values?.[l]||zs[l];return o?n.theme?.breakpoints?.unit!=="px"?{maxWidth:`${o}${n.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Vt(l)}};return hn(n,n.maxWidth,r)}return null};bd.filterProps=["maxWidth"];const ow=Ie({prop:"minWidth",transform:Vt}),sw=Ie({prop:"height",transform:Vt}),uw=Ie({prop:"maxHeight",transform:Vt}),cw=Ie({prop:"minHeight",transform:Vt});Ie({prop:"size",cssProperty:"width",transform:Vt});Ie({prop:"size",cssProperty:"height",transform:Vt});const fw=Ie({prop:"boxSizing"});Ns(lw,bd,ow,sw,uw,cw,fw);const Ol={border:{themeKey:"borders",transform:ln},borderTop:{themeKey:"borders",transform:ln},borderRight:{themeKey:"borders",transform:ln},borderBottom:{themeKey:"borders",transform:ln},borderLeft:{themeKey:"borders",transform:ln},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ln},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:js},color:{themeKey:"palette",transform:ir},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ir},backgroundColor:{themeKey:"palette",transform:ir},p:{style:Fe},pt:{style:Fe},pr:{style:Fe},pb:{style:Fe},pl:{style:Fe},px:{style:Fe},py:{style:Fe},padding:{style:Fe},paddingTop:{style:Fe},paddingRight:{style:Fe},paddingBottom:{style:Fe},paddingLeft:{style:Fe},paddingX:{style:Fe},paddingY:{style:Fe},paddingInline:{style:Fe},paddingInlineStart:{style:Fe},paddingInlineEnd:{style:Fe},paddingBlock:{style:Fe},paddingBlockStart:{style:Fe},paddingBlockEnd:{style:Fe},m:{style:Qe},mt:{style:Qe},mr:{style:Qe},mb:{style:Qe},ml:{style:Qe},mx:{style:Qe},my:{style:Qe},margin:{style:Qe},marginTop:{style:Qe},marginRight:{style:Qe},marginBottom:{style:Qe},marginLeft:{style:Qe},marginX:{style:Qe},marginY:{style:Qe},marginInline:{style:Qe},marginInlineStart:{style:Qe},marginInlineEnd:{style:Qe},marginBlock:{style:Qe},marginBlockStart:{style:Qe},marginBlockEnd:{style:Qe},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Us},rowGap:{style:Hs},columnGap:{style:Gs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Vt},maxWidth:{style:bd},minWidth:{transform:Vt},height:{transform:Vt},maxHeight:{transform:Vt},minHeight:{transform:Vt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function dw(...n){const r=n.reduce((o,u)=>o.concat(Object.keys(u)),[]),l=new Set(r);return n.every(o=>l.size===Object.keys(o).length)}function mw(n,r){return typeof n=="function"?n(r):n}function hw(){function n(l,o,u,f){const d={[l]:o,theme:u},m=f[l];if(!m)return{[l]:o};const{cssProperty:g=l,themeKey:p,transform:v,style:b}=m;if(o==null)return null;if(p==="typography"&&o==="inherit")return{[l]:o};const S=Ds(u,p)||{};return b?b(d):hn(d,o,C=>{let _=Cs(S,v,C);return C===_&&typeof C=="string"&&(_=Cs(S,v,`${l}${C==="default"?"":Fn(C)}`,C)),g===!1?_:{[g]:_}})}function r(l){const{sx:o,theme:u={},nested:f}=l||{};if(!o)return null;const d=u.unstable_sxConfig??Ol;function m(g){let p=g;if(typeof g=="function")p=g(u);else if(typeof g!="object")return g;if(!p)return null;const v=xy(u.breakpoints),b=Object.keys(v);let S=v;return Object.keys(p).forEach(w=>{const C=mw(p[w],u);if(C!=null)if(typeof C=="object")if(d[w])S=yl(S,n(w,C,u,d));else{const _=hn({theme:u},C,R=>({[w]:R}));dw(_,C)?S[w]=r({sx:C,theme:u,nested:!0}):S=yl(S,_)}else S=yl(S,n(w,C,u,d))}),!f&&u.modularCssLayers?{"@layer sx":bb(u,Yf(b,S))}:bb(u,Yf(b,S))}return Array.isArray(o)?o.map(m):m(o)}return r}const li=hw();li.filterProps=["sx"];function pw(n,r){const l=this;if(l.vars){if(!l.colorSchemes?.[n]||typeof l.getColorSchemeSelector!="function")return{};let o=l.getColorSchemeSelector(n);return o==="&"?r:((o.includes("data-")||o.includes("."))&&(o=`*:where(${o.replace(/\s*&$/,"")}) &`),{[o]:r})}return l.palette.mode===n?r:{}}function kl(n={},...r){const{breakpoints:l={},palette:o={},spacing:u,shape:f={},...d}=n,m=w2(l),g=_y(u);let p=_t({breakpoints:m,direction:"ltr",components:{},palette:{mode:"light",...o},spacing:g,shape:{...T2,...f}},d);return p=A2(p),p.applyStyles=pw,p=r.reduce((v,b)=>_t(v,b),p),p.unstable_sxConfig={...Ol,...d?.unstable_sxConfig},p.unstable_sx=function(b){return li({sx:b,theme:this})},p}function gw(n){return Object.keys(n).length===0}function yd(n=null){const r=K.useContext(ql);return!r||gw(r)?n:r}const bw=kl();function vd(n=bw){return yd(n)}function qf(n){const r=Ma(n);return n!==r&&r.styles?(r.styles.match(/^@layer\s+[^{]*$/)||(r.styles=`@layer global{${r.styles}}`),r):n}function Cy({styles:n,themeId:r,defaultTheme:l={}}){const o=vd(l),u=r&&o[r]||o;let f=typeof n=="function"?n(u):n;return u.modularCssLayers&&(Array.isArray(f)?f=f.map(d=>qf(typeof d=="function"?d(u):d)):f=qf(f)),F.jsx(yy,{styles:f})}const yw=n=>{const r={systemProps:{},otherProps:{}},l=n?.theme?.unstable_sxConfig??Ol;return Object.keys(n).forEach(o=>{l[o]?r.systemProps[o]=n[o]:r.otherProps[o]=n[o]}),r};function Ay(n){const{sx:r,...l}=n,{systemProps:o,otherProps:u}=yw(l);let f;return Array.isArray(r)?f=[o,...r]:typeof r=="function"?f=(...d)=>{const m=r(...d);return An(m)?{...o,...m}:o}:f={...o,...r},{...u,sx:f}}const Sb=n=>n,vw=()=>{let n=Sb;return{configure(r){n=r},generate(r){return n(r)},reset(){n=Sb}}},Sw=vw();function Ty(n){var r,l,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(r=0;r<u;r++)n[r]&&(l=Ty(n[r]))&&(o&&(o+=" "),o+=l)}else for(l in n)n[l]&&(o&&(o+=" "),o+=l);return o}function oi(){for(var n,r,l=0,o="",u=arguments.length;l<u;l++)(n=arguments[l])&&(r=Ty(n))&&(o&&(o+=" "),o+=r);return o}const xw={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function si(n,r,l="Mui"){const o=xw[r];return o?`${l}-${o}`:`${Sw.generate(n)}-${r}`}function $s(n,r,l="Mui"){const o={};return r.forEach(u=>{o[u]=si(n,u,l)}),o}function My(n){const{variants:r,...l}=n,o={variants:r,style:Ma(l),isProcessed:!0};return o.style===l||r&&r.forEach(u=>{typeof u.style!="function"&&(u.style=Ma(u.style))}),o}const ww=kl();function Lf(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function Za(n,r){return r&&n&&typeof n=="object"&&n.styles&&!n.styles.startsWith("@layer")&&(n.styles=`@layer ${r}{${String(n.styles)}}`),n}function _w(n){return n?(r,l)=>l[n]:null}function Cw(n,r,l){n.theme=Tw(n.theme)?l:n.theme[r]||n.theme}function ms(n,r,l){const o=typeof r=="function"?r(n):r;if(Array.isArray(o))return o.flatMap(u=>ms(n,u,l));if(Array.isArray(o?.variants)){let u;if(o.isProcessed)u=l?Za(o.style,l):o.style;else{const{variants:f,...d}=o;u=l?Za(Ma(d),l):d}return Ry(n,o.variants,[u],l)}return o?.isProcessed?l?Za(Ma(o.style),l):o.style:l?Za(Ma(o),l):o}function Ry(n,r,l=[],o=void 0){let u;e:for(let f=0;f<r.length;f+=1){const d=r[f];if(typeof d.props=="function"){if(u??={...n,...n.ownerState,ownerState:n.ownerState},!d.props(u))continue}else for(const m in d.props)if(n[m]!==d.props[m]&&n.ownerState?.[m]!==d.props[m])continue e;typeof d.style=="function"?(u??={...n,...n.ownerState,ownerState:n.ownerState},l.push(o?Za(Ma(d.style(u)),o):d.style(u))):l.push(o?Za(Ma(d.style),o):d.style)}return l}function Ey(n={}){const{themeId:r,defaultTheme:l=ww,rootShouldForwardProp:o=Lf,slotShouldForwardProp:u=Lf}=n;function f(m){Cw(m,r,l)}return(m,g={})=>{y2(m,q=>q.filter(z=>z!==li));const{name:p,slot:v,skipVariantsResolver:b,skipSx:S,overridesResolver:w=_w(Rw(v)),...C}=g,_=p&&p.startsWith("Mui")||v?"components":"custom",R=b!==void 0?b:v&&v!=="Root"&&v!=="root"||!1,L=S||!1;let H=Lf;v==="Root"||v==="root"?H=o:v?H=u:Mw(m)&&(H=void 0);const U=b2(m,{shouldForwardProp:H,label:Aw(),...C}),$=q=>{if(q.__emotion_real===q)return q;if(typeof q=="function")return function(G){return ms(G,q,G.theme.modularCssLayers?_:void 0)};if(An(q)){const z=My(q);return function(Q){return z.variants?ms(Q,z,Q.theme.modularCssLayers?_:void 0):Q.theme.modularCssLayers?Za(z.style,_):z.style}}return q},B=(...q)=>{const z=[],G=q.map($),Q=[];if(z.push(f),p&&w&&Q.push(function(ne){const re=ne.theme.components?.[p]?.styleOverrides;if(!re)return null;const D={};for(const W in re)D[W]=ms(ne,re[W],ne.theme.modularCssLayers?"theme":void 0);return w(ne,D)}),p&&!R&&Q.push(function(ne){const re=ne.theme?.components?.[p]?.variants;return re?Ry(ne,re,[],ne.theme.modularCssLayers?"theme":void 0):null}),L||Q.push(li),Array.isArray(G[0])){const x=G.shift(),ne=new Array(z.length).fill(""),Z=new Array(Q.length).fill("");let re;re=[...ne,...x,...Z],re.raw=[...ne,...x.raw,...Z],z.unshift(re)}const ee=[...z,...G,...Q],I=U(...ee);return m.muiName&&(I.muiName=m.muiName),I};return U.withConfig&&(B.withConfig=U.withConfig),B}}function Aw(n,r){return void 0}function Tw(n){for(const r in n)return!1;return!0}function Mw(n){return typeof n=="string"&&n.charCodeAt(0)>96}function Rw(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}const qy=Ey();function As(n,r,l=!1){const o={...r};for(const u in n)if(Object.prototype.hasOwnProperty.call(n,u)){const f=u;if(f==="components"||f==="slots")o[f]={...n[f],...o[f]};else if(f==="componentsProps"||f==="slotProps"){const d=n[f],m=r[f];if(!m)o[f]=d||{};else if(!d)o[f]=m;else{o[f]={...m};for(const g in d)if(Object.prototype.hasOwnProperty.call(d,g)){const p=g;o[f][p]=As(d[p],m[p],l)}}}else f==="className"&&l&&r.className?o.className=oi(n?.className,r?.className):f==="style"&&l&&r.style?o.style={...n?.style,...r?.style}:o[f]===void 0&&(o[f]=n[f])}return o}function Ew(n){const{theme:r,name:l,props:o}=n;return!r||!r.components||!r.components[l]||!r.components[l].defaultProps?o:As(r.components[l].defaultProps,o)}function Ly({props:n,name:r,defaultTheme:l,themeId:o}){let u=vd(l);return o&&(u=u[o]||u),Ew({theme:u,name:r,props:n})}const Oy=typeof window<"u"?K.useLayoutEffect:K.useEffect;function qw(n,r=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(n,l))}function Sd(n,r=0,l=1){return qw(n,r,l)}function Lw(n){n=n.slice(1);const r=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let l=n.match(r);return l&&l[0].length===1&&(l=l.map(o=>o+o)),l?`rgb${l.length===4?"a":""}(${l.map((o,u)=>u<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function Ra(n){if(n.type)return n;if(n.charAt(0)==="#")return Ra(Lw(n));const r=n.indexOf("("),l=n.substring(0,r);if(!["rgb","rgba","hsl","hsla","color"].includes(l))throw new Error(ii(9,n));let o=n.substring(r+1,n.length-1),u;if(l==="color"){if(o=o.split(" "),u=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(u))throw new Error(ii(10,u))}else o=o.split(",");return o=o.map(f=>parseFloat(f)),{type:l,values:o,colorSpace:u}}const Ow=n=>{const r=Ra(n);return r.values.slice(0,3).map((l,o)=>r.type.includes("hsl")&&o!==0?`${l}%`:l).join(" ")},dl=(n,r)=>{try{return Ow(n)}catch{return n}};function Ps(n){const{type:r,colorSpace:l}=n;let{values:o}=n;return r.includes("rgb")?o=o.map((u,f)=>f<3?parseInt(u,10):u):r.includes("hsl")&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),r.includes("color")?o=`${l} ${o.join(" ")}`:o=`${o.join(", ")}`,`${r}(${o})`}function ky(n){n=Ra(n);const{values:r}=n,l=r[0],o=r[1]/100,u=r[2]/100,f=o*Math.min(u,1-u),d=(p,v=(p+l/30)%12)=>u-f*Math.max(Math.min(v-3,9-v,1),-1);let m="rgb";const g=[Math.round(d(0)*255),Math.round(d(8)*255),Math.round(d(4)*255)];return n.type==="hsla"&&(m+="a",g.push(r[3])),Ps({type:m,values:g})}function Xf(n){n=Ra(n);let r=n.type==="hsl"||n.type==="hsla"?Ra(ky(n)).values:n.values;return r=r.map(l=>(n.type!=="color"&&(l/=255),l<=.03928?l/12.92:((l+.055)/1.055)**2.4)),Number((.2126*r[0]+.7152*r[1]+.0722*r[2]).toFixed(3))}function kw(n,r){const l=Xf(n),o=Xf(r);return(Math.max(l,o)+.05)/(Math.min(l,o)+.05)}function Ts(n,r){return n=Ra(n),r=Sd(r),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${r}`:n.values[3]=r,Ps(n)}function Qa(n,r,l){try{return Ts(n,r)}catch{return n}}function Vs(n,r){if(n=Ra(n),r=Sd(r),n.type.includes("hsl"))n.values[2]*=1-r;else if(n.type.includes("rgb")||n.type.includes("color"))for(let l=0;l<3;l+=1)n.values[l]*=1-r;return Ps(n)}function ze(n,r,l){try{return Vs(n,r)}catch{return n}}function Ys(n,r){if(n=Ra(n),r=Sd(r),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*r;else if(n.type.includes("rgb"))for(let l=0;l<3;l+=1)n.values[l]+=(255-n.values[l])*r;else if(n.type.includes("color"))for(let l=0;l<3;l+=1)n.values[l]+=(1-n.values[l])*r;return Ps(n)}function De(n,r,l){try{return Ys(n,r)}catch{return n}}function zw(n,r=.15){return Xf(n)>.5?Vs(n,r):Ys(n,r)}function rs(n,r,l){try{return zw(n,r)}catch{return n}}const zy=K.createContext(null);function xd(){return K.useContext(zy)}const Dw=typeof Symbol=="function"&&Symbol.for,Bw=Dw?Symbol.for("mui.nested"):"__THEME_NESTED__";function Nw(n,r){return typeof r=="function"?r(n):{...n,...r}}function jw(n){const{children:r,theme:l}=n,o=xd(),u=K.useMemo(()=>{const f=o===null?{...l}:Nw(o,l);return f!=null&&(f[Bw]=o!==null),f},[l,o]);return F.jsx(zy.Provider,{value:u,children:r})}const Uw=K.createContext();function Gw({value:n,...r}){return F.jsx(Uw.Provider,{value:n??!0,...r})}const Dy=K.createContext(void 0);function Hw({value:n,children:r}){return F.jsx(Dy.Provider,{value:n,children:r})}function $w(n){const{theme:r,name:l,props:o}=n;if(!r||!r.components||!r.components[l])return o;const u=r.components[l];return u.defaultProps?As(u.defaultProps,o,r.components.mergeClassNameAndStyle):!u.styleOverrides&&!u.variants?As(u,o,r.components.mergeClassNameAndStyle):o}function Pw({props:n,name:r}){const l=K.useContext(Dy);return $w({props:n,name:r,theme:{components:l}})}let xb=0;function Vw(n){const[r,l]=K.useState(n),o=n||r;return K.useEffect(()=>{r==null&&(xb+=1,l(`mui-${xb}`))},[r]),o}const Yw={...Uf},wb=Yw.useId;function Xw(n){return wb!==void 0?wb():Vw(n)}function Jw(n){const r=yd(),l=Xw()||"",{modularCssLayers:o}=n;let u="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!o||r!==null?u="":typeof o=="string"?u=o.replace(/mui(?!\.)/g,u):u=`@layer ${u};`,Oy(()=>{const f=document.querySelector("head");if(!f)return;const d=f.firstChild;if(u){if(d&&d.hasAttribute?.("data-mui-layer-order")&&d.getAttribute("data-mui-layer-order")===l)return;const m=document.createElement("style");m.setAttribute("data-mui-layer-order",l),m.textContent=u,f.prepend(m)}else f.querySelector(`style[data-mui-layer-order="${l}"]`)?.remove()},[u,l]),u?F.jsx(Cy,{styles:u}):null}const _b={};function Cb(n,r,l,o=!1){return K.useMemo(()=>{const u=n&&r[n]||r;if(typeof l=="function"){const f=l(u),d=n?{...r,[n]:f}:f;return o?()=>d:d}return n?{...r,[n]:l}:{...r,...l}},[n,r,l,o])}function By(n){const{children:r,theme:l,themeId:o}=n,u=yd(_b),f=xd()||_b,d=Cb(o,u,l),m=Cb(o,f,l,!0),g=(o?d[o]:d).direction==="rtl",p=Jw(d);return F.jsx(jw,{theme:m,children:F.jsx(ql.Provider,{value:d,children:F.jsx(Gw,{value:g,children:F.jsxs(Hw,{value:o?d[o].components:d.components,children:[p,r]})})})})}const Ab={theme:void 0};function Kw(n){let r,l;return function(u){let f=r;return(f===void 0||u.theme!==l)&&(Ab.theme=u.theme,f=My(n(Ab)),r=f,l=u.theme),f}}const wd="mode",_d="color-scheme",Qw="data-color-scheme";function Fw(n){const{defaultMode:r="system",defaultLightColorScheme:l="light",defaultDarkColorScheme:o="dark",modeStorageKey:u=wd,colorSchemeStorageKey:f=_d,attribute:d=Qw,colorSchemeNode:m="document.documentElement",nonce:g}=n||{};let p="",v=d;if(d==="class"&&(v=".%s"),d==="data"&&(v="[data-%s]"),v.startsWith(".")){const S=v.substring(1);p+=`${m}.classList.remove('${S}'.replace('%s', light), '${S}'.replace('%s', dark));
      ${m}.classList.add('${S}'.replace('%s', colorScheme));`}const b=v.match(/\[([^[\]]+)\]/);if(b){const[S,w]=b[1].split("=");w||(p+=`${m}.removeAttribute('${S}'.replace('%s', light));
      ${m}.removeAttribute('${S}'.replace('%s', dark));`),p+=`
      ${m}.setAttribute('${S}'.replace('%s', colorScheme), ${w?`${w}.replace('%s', colorScheme)`:'""'});`}else v!==".%s"&&(p+=`${m}.setAttribute('${v}', colorScheme);`);return F.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?g:"",dangerouslySetInnerHTML:{__html:`(function() {
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
} catch(e){}})();`}},"mui-color-scheme-init")}function Zw(){}const Ww=({key:n,storageWindow:r})=>(!r&&typeof window<"u"&&(r=window),{get(l){if(typeof window>"u")return;if(!r)return l;let o;try{o=r.localStorage.getItem(n)}catch{}return o||l},set:l=>{if(r)try{r.localStorage.setItem(n,l)}catch{}},subscribe:l=>{if(!r)return Zw;const o=u=>{const f=u.newValue;u.key===n&&l(f)};return r.addEventListener("storage",o),()=>{r.removeEventListener("storage",o)}}});function Of(){}function Tb(n){if(typeof window<"u"&&typeof window.matchMedia=="function"&&n==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Ny(n,r){if(n.mode==="light"||n.mode==="system"&&n.systemMode==="light")return r("light");if(n.mode==="dark"||n.mode==="system"&&n.systemMode==="dark")return r("dark")}function Iw(n){return Ny(n,r=>{if(r==="light")return n.lightColorScheme;if(r==="dark")return n.darkColorScheme})}function e_(n){const{defaultMode:r="light",defaultLightColorScheme:l,defaultDarkColorScheme:o,supportedColorSchemes:u=[],modeStorageKey:f=wd,colorSchemeStorageKey:d=_d,storageWindow:m=typeof window>"u"?void 0:window,storageManager:g=Ww,noSsr:p=!1}=n,v=u.join(","),b=u.length>1,S=K.useMemo(()=>g?.({key:f,storageWindow:m}),[g,f,m]),w=K.useMemo(()=>g?.({key:`${d}-light`,storageWindow:m}),[g,d,m]),C=K.useMemo(()=>g?.({key:`${d}-dark`,storageWindow:m}),[g,d,m]),[_,R]=K.useState(()=>{const G=S?.get(r)||r,Q=w?.get(l)||l,ee=C?.get(o)||o;return{mode:G,systemMode:Tb(G),lightColorScheme:Q,darkColorScheme:ee}}),[L,H]=K.useState(p||!b);K.useEffect(()=>{H(!0)},[]);const U=Iw(_),$=K.useCallback(G=>{R(Q=>{if(G===Q.mode)return Q;const ee=G??r;return S?.set(ee),{...Q,mode:ee,systemMode:Tb(ee)}})},[S,r]),B=K.useCallback(G=>{G?typeof G=="string"?G&&!v.includes(G)?console.error(`\`${G}\` does not exist in \`theme.colorSchemes\`.`):R(Q=>{const ee={...Q};return Ny(Q,I=>{I==="light"&&(w?.set(G),ee.lightColorScheme=G),I==="dark"&&(C?.set(G),ee.darkColorScheme=G)}),ee}):R(Q=>{const ee={...Q},I=G.light===null?l:G.light,x=G.dark===null?o:G.dark;return I&&(v.includes(I)?(ee.lightColorScheme=I,w?.set(I)):console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)),x&&(v.includes(x)?(ee.darkColorScheme=x,C?.set(x)):console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`)),ee}):R(Q=>(w?.set(l),C?.set(o),{...Q,lightColorScheme:l,darkColorScheme:o}))},[v,w,C,l,o]),q=K.useCallback(G=>{_.mode==="system"&&R(Q=>{const ee=G?.matches?"dark":"light";return Q.systemMode===ee?Q:{...Q,systemMode:ee}})},[_.mode]),z=K.useRef(q);return z.current=q,K.useEffect(()=>{if(typeof window.matchMedia!="function"||!b)return;const G=(...ee)=>z.current(...ee),Q=window.matchMedia("(prefers-color-scheme: dark)");return Q.addListener(G),G(Q),()=>{Q.removeListener(G)}},[b]),K.useEffect(()=>{if(b){const G=S?.subscribe(I=>{(!I||["light","dark","system"].includes(I))&&$(I||r)})||Of,Q=w?.subscribe(I=>{(!I||v.match(I))&&B({light:I})})||Of,ee=C?.subscribe(I=>{(!I||v.match(I))&&B({dark:I})})||Of;return()=>{G(),Q(),ee()}}},[B,$,v,r,m,b,S,w,C]),{..._,mode:L?_.mode:void 0,systemMode:L?_.systemMode:void 0,colorScheme:L?U:void 0,setMode:$,setColorScheme:B}}const t_="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function n_(n){const{themeId:r,theme:l={},modeStorageKey:o=wd,colorSchemeStorageKey:u=_d,disableTransitionOnChange:f=!1,defaultColorScheme:d,resolveTheme:m}=n,g={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},p=K.createContext(void 0),v=()=>K.useContext(p)||g,b={},S={};function w(L){const{children:H,theme:U,modeStorageKey:$=o,colorSchemeStorageKey:B=u,disableTransitionOnChange:q=f,storageManager:z,storageWindow:G=typeof window>"u"?void 0:window,documentNode:Q=typeof document>"u"?void 0:document,colorSchemeNode:ee=typeof document>"u"?void 0:document.documentElement,disableNestedContext:I=!1,disableStyleSheetGeneration:x=!1,defaultMode:ne="system",forceThemeRerender:Z=!1,noSsr:re}=L,D=K.useRef(!1),W=xd(),oe=K.useContext(p),we=!!oe&&!I,Ae=K.useMemo(()=>U||(typeof l=="function"?l():l),[U]),M=Ae[r],P=M||Ae,{colorSchemes:te=b,components:ae=S,cssVarPrefix:ue}=P,fe=Object.keys(te).filter(st=>!!te[st]).join(","),me=K.useMemo(()=>fe.split(","),[fe]),Xe=typeof d=="string"?d:d.light,Te=typeof d=="string"?d:d.dark,un=te[Xe]&&te[Te]?ne:te[P.defaultColorScheme]?.palette?.mode||P.palette?.mode,{mode:pn,setMode:Ct,systemMode:Ea,lightColorScheme:Xt,darkColorScheme:Rn,colorScheme:qa,setColorScheme:fi}=e_({supportedColorSchemes:me,defaultLightColorScheme:Xe,defaultDarkColorScheme:Te,modeStorageKey:$,colorSchemeStorageKey:B,defaultMode:un,storageManager:z,storageWindow:G,noSsr:re});let Zn=pn,et=qa;we&&(Zn=oe.mode,et=oe.colorScheme);let kt=et||P.defaultColorScheme;P.vars&&!Z&&(kt=P.defaultColorScheme);const gn=K.useMemo(()=>{const st=P.generateThemeVars?.()||P.vars,Pe={...P,components:ae,colorSchemes:te,cssVarPrefix:ue,vars:st};if(typeof Pe.generateSpacing=="function"&&(Pe.spacing=Pe.generateSpacing()),kt){const ft=te[kt];ft&&typeof ft=="object"&&Object.keys(ft).forEach(Jt=>{ft[Jt]&&typeof ft[Jt]=="object"?Pe[Jt]={...Pe[Jt],...ft[Jt]}:Pe[Jt]=ft[Jt]})}return m?m(Pe):Pe},[P,kt,ae,te,ue]),bn=P.colorSchemeSelector;Oy(()=>{if(et&&ee&&bn&&bn!=="media"){const st=bn;let Pe=bn;if(st==="class"&&(Pe=".%s"),st==="data"&&(Pe="[data-%s]"),st?.startsWith("data-")&&!st.includes("%s")&&(Pe=`[${st}="%s"]`),Pe.startsWith("."))ee.classList.remove(...me.map(ft=>Pe.substring(1).replace("%s",ft))),ee.classList.add(Pe.substring(1).replace("%s",et));else{const ft=Pe.replace("%s",et).match(/\[([^\]]+)\]/);if(ft){const[Jt,di]=ft[1].split("=");di||me.forEach(Xs=>{ee.removeAttribute(Jt.replace(et,Xs))}),ee.setAttribute(Jt,di?di.replace(/"|'/g,""):"")}else ee.setAttribute(Pe,et)}}},[et,bn,ee,me]),K.useEffect(()=>{let st;if(q&&D.current&&Q){const Pe=Q.createElement("style");Pe.appendChild(Q.createTextNode(t_)),Q.head.appendChild(Pe),window.getComputedStyle(Q.body),st=setTimeout(()=>{Q.head.removeChild(Pe)},1)}return()=>{clearTimeout(st)}},[et,q,Q]),K.useEffect(()=>(D.current=!0,()=>{D.current=!1}),[]);const qe=K.useMemo(()=>({allColorSchemes:me,colorScheme:et,darkColorScheme:Rn,lightColorScheme:Xt,mode:Zn,setColorScheme:fi,setMode:Ct,systemMode:Ea}),[me,et,Rn,Xt,Zn,fi,Ct,Ea,gn.colorSchemeSelector]);let xe=!0;(x||P.cssVariables===!1||we&&W?.cssVarPrefix===ue)&&(xe=!1);const yt=F.jsxs(K.Fragment,{children:[F.jsx(By,{themeId:M?r:void 0,theme:gn,children:H}),xe&&F.jsx(yy,{styles:gn.generateStyleSheets?.()||[]})]});return we?yt:F.jsx(p.Provider,{value:qe,children:yt})}const C=typeof d=="string"?d:d.light,_=typeof d=="string"?d:d.dark;return{CssVarsProvider:w,useColorScheme:v,getInitColorSchemeScript:L=>Fw({colorSchemeStorageKey:u,defaultLightColorScheme:C,defaultDarkColorScheme:_,modeStorageKey:o,...L})}}function a_(n=""){function r(...o){if(!o.length)return"";const u=o[0];return typeof u=="string"&&!u.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${u}${r(...o.slice(1))})`:`, ${u}`}return(o,...u)=>`var(--${n?`${n}-`:""}${o}${r(...u)})`}const Mb=(n,r,l,o=[])=>{let u=n;r.forEach((f,d)=>{d===r.length-1?Array.isArray(u)?u[Number(f)]=l:u&&typeof u=="object"&&(u[f]=l):u&&typeof u=="object"&&(u[f]||(u[f]=o.includes(f)?[]:{}),u=u[f])})},i_=(n,r,l)=>{function o(u,f=[],d=[]){Object.entries(u).forEach(([m,g])=>{(!l||l&&!l([...f,m]))&&g!=null&&(typeof g=="object"&&Object.keys(g).length>0?o(g,[...f,m],Array.isArray(g)?[...d,m]:d):r([...f,m],g,d))})}o(n)},r_=(n,r)=>typeof r=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(o=>n.includes(o))||n[n.length-1].toLowerCase().includes("opacity")?r:`${r}px`:r;function kf(n,r){const{prefix:l,shouldSkipGeneratingVar:o}=r||{},u={},f={},d={};return i_(n,(m,g,p)=>{if((typeof g=="string"||typeof g=="number")&&(!o||!o(m,g))){const v=`--${l?`${l}-`:""}${m.join("-")}`,b=r_(m,g);Object.assign(u,{[v]:b}),Mb(f,m,`var(${v})`,p),Mb(d,m,`var(${v}, ${b})`,p)}},m=>m[0]==="vars"),{css:u,vars:f,varsWithDefaults:d}}function l_(n,r={}){const{getSelector:l=L,disableCssColorScheme:o,colorSchemeSelector:u,enableContrastVars:f}=r,{colorSchemes:d={},components:m,defaultColorScheme:g="light",...p}=n,{vars:v,css:b,varsWithDefaults:S}=kf(p,r);let w=S;const C={},{[g]:_,...R}=d;if(Object.entries(R||{}).forEach(([$,B])=>{const{vars:q,css:z,varsWithDefaults:G}=kf(B,r);w=_t(w,G),C[$]={css:z,vars:q}}),_){const{css:$,vars:B,varsWithDefaults:q}=kf(_,r);w=_t(w,q),C[g]={css:$,vars:B}}function L($,B){let q=u;if(u==="class"&&(q=".%s"),u==="data"&&(q="[data-%s]"),u?.startsWith("data-")&&!u.includes("%s")&&(q=`[${u}="%s"]`),$){if(q==="media")return n.defaultColorScheme===$?":root":{[`@media (prefers-color-scheme: ${d[$]?.palette?.mode||$})`]:{":root":B}};if(q)return n.defaultColorScheme===$?`:root, ${q.replace("%s",String($))}`:q.replace("%s",String($))}return":root"}return{vars:w,generateThemeVars:()=>{let $={...v};return Object.entries(C).forEach(([,{vars:B}])=>{$=_t($,B)}),$},generateStyleSheets:()=>{const $=[],B=n.defaultColorScheme||"light";function q(Q,ee){Object.keys(ee).length&&$.push(typeof Q=="string"?{[Q]:{...ee}}:Q)}q(l(void 0,{...b}),b);const{[B]:z,...G}=C;if(z){const{css:Q}=z,ee=d[B]?.palette?.mode,I=!o&&ee?{colorScheme:ee,...Q}:{...Q};q(l(B,{...I}),I)}return Object.entries(G).forEach(([Q,{css:ee}])=>{const I=d[Q]?.palette?.mode,x=!o&&I?{colorScheme:I,...ee}:{...ee};q(l(Q,{...x}),x)}),f&&$.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),$}}}function o_(n){return function(l){return n==="media"?`@media (prefers-color-scheme: ${l})`:n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${l}"] &`:n==="class"?`.${l} &`:n==="data"?`[data-${l}] &`:`${n.replace("%s",l)} &`:"&"}}function cr(n,r,l=void 0){const o={};for(const u in n){const f=n[u];let d="",m=!0;for(let g=0;g<f.length;g+=1){const p=f[g];p&&(d+=(m===!0?"":" ")+r(p),m=!1,l&&l[p]&&(d+=" "+l[p]))}o[u]=d}return o}const s_=kl(),u_=qy("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[`maxWidth${Fn(String(l.maxWidth))}`],l.fixed&&r.fixed,l.disableGutters&&r.disableGutters]}}),c_=n=>Ly({props:n,name:"MuiContainer",defaultTheme:s_}),f_=(n,r)=>{const l=g=>si(r,g),{classes:o,fixed:u,disableGutters:f,maxWidth:d}=n,m={root:["root",d&&`maxWidth${Fn(String(d))}`,u&&"fixed",f&&"disableGutters"]};return cr(m,l,o)};function d_(n={}){const{createStyledComponent:r=u_,useThemeProps:l=c_,componentName:o="MuiContainer"}=n,u=r(({theme:d,ownerState:m})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!m.disableGutters&&{paddingLeft:d.spacing(2),paddingRight:d.spacing(2),[d.breakpoints.up("sm")]:{paddingLeft:d.spacing(3),paddingRight:d.spacing(3)}}}),({theme:d,ownerState:m})=>m.fixed&&Object.keys(d.breakpoints.values).reduce((g,p)=>{const v=p,b=d.breakpoints.values[v];return b!==0&&(g[d.breakpoints.up(v)]={maxWidth:`${b}${d.breakpoints.unit}`}),g},{}),({theme:d,ownerState:m})=>({...m.maxWidth==="xs"&&{[d.breakpoints.up("xs")]:{maxWidth:Math.max(d.breakpoints.values.xs,444)}},...m.maxWidth&&m.maxWidth!=="xs"&&{[d.breakpoints.up(m.maxWidth)]:{maxWidth:`${d.breakpoints.values[m.maxWidth]}${d.breakpoints.unit}`}}}));return K.forwardRef(function(m,g){const p=l(m),{className:v,component:b="div",disableGutters:S=!1,fixed:w=!1,maxWidth:C="lg",classes:_,...R}=p,L={...p,component:b,disableGutters:S,fixed:w,maxWidth:C},H=f_(L,o);return F.jsx(u,{as:b,ownerState:L,className:oi(H.root,v),ref:g,...R})})}const m_=kl(),h_=qy("div",{name:"MuiStack",slot:"Root"});function p_(n){return Ly({props:n,name:"MuiStack",defaultTheme:m_})}function g_(n,r){const l=K.Children.toArray(n).filter(Boolean);return l.reduce((o,u,f)=>(o.push(u),f<l.length-1&&o.push(K.cloneElement(r,{key:`separator-${f}`})),o),[])}const b_=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],y_=({ownerState:n,theme:r})=>{let l={display:"flex",flexDirection:"column",...hn({theme:r},Ef({values:n.direction,breakpoints:r.breakpoints.values}),o=>({flexDirection:o}))};if(n.spacing){const o=Bs(r),u=Object.keys(r.breakpoints.values).reduce((g,p)=>((typeof n.spacing=="object"&&n.spacing[p]!=null||typeof n.direction=="object"&&n.direction[p]!=null)&&(g[p]=!0),g),{}),f=Ef({values:n.direction,base:u}),d=Ef({values:n.spacing,base:u});typeof f=="object"&&Object.keys(f).forEach((g,p,v)=>{if(!f[g]){const S=p>0?f[v[p-1]]:"column";f[g]=S}}),l=_t(l,hn({theme:r},d,(g,p)=>n.useFlexGap?{gap:ri(o,g)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${b_(p?f[p]:n.direction)}`]:ri(o,g)}}))}return l=R2(r.breakpoints,l),l};function v_(n={}){const{createStyledComponent:r=h_,useThemeProps:l=p_,componentName:o="MuiStack"}=n,u=()=>cr({root:["root"]},g=>si(o,g),{}),f=r(y_);return K.forwardRef(function(g,p){const v=l(g),b=Ay(v),{component:S="div",direction:w="column",spacing:C=0,divider:_,children:R,className:L,useFlexGap:H=!1,...U}=b,$={direction:w,spacing:C,useFlexGap:H},B=u();return F.jsx(f,{as:S,ownerState:$,ref:p,className:oi(B.root,L),...U,children:_?g_(R,_):R})})}function jy(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:wl.white,default:wl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const Uy=jy();function Gy(){return{text:{primary:wl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:wl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Jf=Gy();function Rb(n,r,l,o){const u=o.light||o,f=o.dark||o*1.5;n[r]||(n.hasOwnProperty(l)?n[r]=n[l]:r==="light"?n.light=Ys(n.main,u):r==="dark"&&(n.dark=Vs(n.main,f)))}function Eb(n,r,l,o,u){const f=u.light||u,d=u.dark||u*1.5;r[l]||(r.hasOwnProperty(o)?r[l]=r[o]:l==="light"?r.light=`color-mix(in ${n}, ${r.main}, #fff ${(f*100).toFixed(0)}%)`:l==="dark"&&(r.dark=`color-mix(in ${n}, ${r.main}, #000 ${(d*100).toFixed(0)}%)`))}function S_(n="light"){return n==="dark"?{main:Ii[200],light:Ii[50],dark:Ii[400]}:{main:Ii[700],light:Ii[400],dark:Ii[800]}}function x_(n="light"){return n==="dark"?{main:Wi[200],light:Wi[50],dark:Wi[400]}:{main:Wi[500],light:Wi[300],dark:Wi[700]}}function w_(n="light"){return n==="dark"?{main:Zi[500],light:Zi[300],dark:Zi[700]}:{main:Zi[700],light:Zi[400],dark:Zi[800]}}function __(n="light"){return n==="dark"?{main:er[400],light:er[300],dark:er[700]}:{main:er[700],light:er[500],dark:er[900]}}function C_(n="light"){return n==="dark"?{main:tr[400],light:tr[300],dark:tr[700]}:{main:tr[800],light:tr[500],dark:tr[900]}}function A_(n="light"){return n==="dark"?{main:ul[400],light:ul[300],dark:ul[700]}:{main:"#ed6c02",light:ul[500],dark:ul[900]}}function T_(n){return`oklch(from ${n} var(--__l) 0 h / var(--__a))`}function Cd(n){const{mode:r="light",contrastThreshold:l=3,tonalOffset:o=.2,colorSpace:u,...f}=n,d=n.primary||S_(r),m=n.secondary||x_(r),g=n.error||w_(r),p=n.info||__(r),v=n.success||C_(r),b=n.warning||A_(r);function S(R){return u?T_(R):kw(R,Jf.text.primary)>=l?Jf.text.primary:Uy.text.primary}const w=({color:R,name:L,mainShade:H=500,lightShade:U=300,darkShade:$=700})=>{if(R={...R},!R.main&&R[H]&&(R.main=R[H]),!R.hasOwnProperty("main"))throw new Error(ii(11,L?` (${L})`:"",H));if(typeof R.main!="string")throw new Error(ii(12,L?` (${L})`:"",JSON.stringify(R.main)));return u?(Eb(u,R,"light",U,o),Eb(u,R,"dark",$,o)):(Rb(R,"light",U,o),Rb(R,"dark",$,o)),R.contrastText||(R.contrastText=S(R.main)),R};let C;return r==="light"?C=jy():r==="dark"&&(C=Gy()),_t({common:{...wl},mode:r,primary:w({color:d,name:"primary"}),secondary:w({color:m,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:w({color:g,name:"error"}),warning:w({color:b,name:"warning"}),info:w({color:p,name:"info"}),success:w({color:v,name:"success"}),grey:bx,contrastThreshold:l,getContrastText:S,augmentColor:w,tonalOffset:o,...C},f)}function M_(n){const r={};return Object.entries(n).forEach(o=>{const[u,f]=o;typeof f=="object"&&(r[u]=`${f.fontStyle?`${f.fontStyle} `:""}${f.fontVariant?`${f.fontVariant} `:""}${f.fontWeight?`${f.fontWeight} `:""}${f.fontStretch?`${f.fontStretch} `:""}${f.fontSize||""}${f.lineHeight?`/${f.lineHeight} `:""}${f.fontFamily||""}`)}),r}function R_(n,r){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...r}}function E_(n){return Math.round(n*1e5)/1e5}const qb={textTransform:"uppercase"},Lb='"Roboto", "Helvetica", "Arial", sans-serif';function Hy(n,r){const{fontFamily:l=Lb,fontSize:o=14,fontWeightLight:u=300,fontWeightRegular:f=400,fontWeightMedium:d=500,fontWeightBold:m=700,htmlFontSize:g=16,allVariants:p,pxToRem:v,...b}=typeof r=="function"?r(n):r,S=o/14,w=v||(R=>`${R/g*S}rem`),C=(R,L,H,U,$)=>({fontFamily:l,fontWeight:R,fontSize:w(L),lineHeight:H,...l===Lb?{letterSpacing:`${E_(U/L)}em`}:{},...$,...p}),_={h1:C(u,96,1.167,-1.5),h2:C(u,60,1.2,-.5),h3:C(f,48,1.167,0),h4:C(f,34,1.235,.25),h5:C(f,24,1.334,0),h6:C(d,20,1.6,.15),subtitle1:C(f,16,1.75,.15),subtitle2:C(d,14,1.57,.1),body1:C(f,16,1.5,.15),body2:C(f,14,1.43,.15),button:C(d,14,1.75,.4,qb),caption:C(f,12,1.66,.4),overline:C(f,12,2.66,1,qb),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _t({htmlFontSize:g,pxToRem:w,fontFamily:l,fontSize:o,fontWeightLight:u,fontWeightRegular:f,fontWeightMedium:d,fontWeightBold:m,..._},b,{clone:!1})}const q_=.2,L_=.14,O_=.12;function Ye(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${q_})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${L_})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${O_})`].join(",")}const k_=["none",Ye(0,2,1,-1,0,1,1,0,0,1,3,0),Ye(0,3,1,-2,0,2,2,0,0,1,5,0),Ye(0,3,3,-2,0,3,4,0,0,1,8,0),Ye(0,2,4,-1,0,4,5,0,0,1,10,0),Ye(0,3,5,-1,0,5,8,0,0,1,14,0),Ye(0,3,5,-1,0,6,10,0,0,1,18,0),Ye(0,4,5,-2,0,7,10,1,0,2,16,1),Ye(0,5,5,-3,0,8,10,1,0,3,14,2),Ye(0,5,6,-3,0,9,12,1,0,3,16,2),Ye(0,6,6,-3,0,10,14,1,0,4,18,3),Ye(0,6,7,-4,0,11,15,1,0,4,20,3),Ye(0,7,8,-4,0,12,17,2,0,5,22,4),Ye(0,7,8,-4,0,13,19,2,0,5,24,4),Ye(0,7,9,-4,0,14,21,2,0,5,26,4),Ye(0,8,9,-5,0,15,22,2,0,6,28,5),Ye(0,8,10,-5,0,16,24,2,0,6,30,5),Ye(0,8,11,-5,0,17,26,2,0,6,32,5),Ye(0,9,11,-5,0,18,28,2,0,7,34,6),Ye(0,9,12,-6,0,19,29,2,0,7,36,6),Ye(0,10,13,-6,0,20,31,3,0,8,38,7),Ye(0,10,13,-6,0,21,33,3,0,8,40,7),Ye(0,10,14,-6,0,22,35,3,0,8,42,7),Ye(0,11,14,-7,0,23,36,3,0,9,44,8),Ye(0,11,15,-7,0,24,38,3,0,9,46,8)],z_={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},D_={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ob(n){return`${Math.round(n)}ms`}function B_(n){if(!n)return 0;const r=n/36;return Math.min(Math.round((4+15*r**.25+r/5)*10),3e3)}function N_(n){const r={...z_,...n.easing},l={...D_,...n.duration};return{getAutoHeightDuration:B_,create:(u=["all"],f={})=>{const{duration:d=l.standard,easing:m=r.easeInOut,delay:g=0,...p}=f;return(Array.isArray(u)?u:[u]).map(v=>`${v} ${typeof d=="string"?d:Ob(d)} ${m} ${typeof g=="string"?g:Ob(g)}`).join(",")},...n,easing:r,duration:l}}const j_={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function U_(n){return An(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function $y(n={}){const r={...n};function l(o){const u=Object.entries(o);for(let f=0;f<u.length;f++){const[d,m]=u[f];!U_(m)||d.startsWith("unstable_")?delete o[d]:An(m)&&(o[d]={...m},l(o[d]))}}return l(r),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function kb(n){return typeof n=="number"?`${(n*100).toFixed(0)}%`:`calc((${n}) * 100%)`}const G_=n=>{if(!Number.isNaN(+n))return+n;const r=n.match(/\d*\.?\d+/g);if(!r)return 0;let l=0;for(let o=0;o<r.length;o+=1)l+=+r[o];return l};function H_(n){Object.assign(n,{alpha(r,l){const o=this||n;return o.colorSpace?`oklch(from ${r} l c h / ${typeof l=="string"?`calc(${l})`:l})`:o.vars?`rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof l=="string"?`calc(${l})`:l})`:Ts(r,G_(l))},lighten(r,l){const o=this||n;return o.colorSpace?`color-mix(in ${o.colorSpace}, ${r}, #fff ${kb(l)})`:Ys(r,l)},darken(r,l){const o=this||n;return o.colorSpace?`color-mix(in ${o.colorSpace}, ${r}, #000 ${kb(l)})`:Vs(r,l)}})}function Kf(n={},...r){const{breakpoints:l,mixins:o={},spacing:u,palette:f={},transitions:d={},typography:m={},shape:g,colorSpace:p,...v}=n;if(n.vars&&n.generateThemeVars===void 0)throw new Error(ii(20));const b=Cd({...f,colorSpace:p}),S=kl(n);let w=_t(S,{mixins:R_(S.breakpoints,o),palette:b,shadows:k_.slice(),typography:Hy(b,m),transitions:N_(d),zIndex:{...j_}});return w=_t(w,v),w=r.reduce((C,_)=>_t(C,_),w),w.unstable_sxConfig={...Ol,...v?.unstable_sxConfig},w.unstable_sx=function(_){return li({sx:_,theme:this})},w.toRuntimeSource=$y,H_(w),w}function Qf(n){let r;return n<1?r=5.11916*n**2:r=4.5*Math.log(n+1)+2,Math.round(r*10)/1e3}const $_=[...Array(25)].map((n,r)=>{if(r===0)return"none";const l=Qf(r);return`linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`});function Py(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function Vy(n){return n==="dark"?$_:[]}function P_(n){const{palette:r={mode:"light"},opacity:l,overlays:o,colorSpace:u,...f}=n,d=Cd({...r,colorSpace:u});return{palette:d,opacity:{...Py(d.mode),...l},overlays:o||Vy(d.mode),...f}}function V_(n){return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const Y_=n=>[...[...Array(25)].map((r,l)=>`--${n?`${n}-`:""}overlays-${l}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],X_=n=>(r,l)=>{const o=n.rootSelector||":root",u=n.colorSchemeSelector;let f=u;if(u==="class"&&(f=".%s"),u==="data"&&(f="[data-%s]"),u?.startsWith("data-")&&!u.includes("%s")&&(f=`[${u}="%s"]`),n.defaultColorScheme===r){if(r==="dark"){const d={};return Y_(n.cssVarPrefix).forEach(m=>{d[m]=l[m],delete l[m]}),f==="media"?{[o]:l,"@media (prefers-color-scheme: dark)":{[o]:d}}:f?{[f.replace("%s",r)]:d,[`${o}, ${f.replace("%s",r)}`]:l}:{[o]:{...l,...d}}}if(f&&f!=="media")return`${o}, ${f.replace("%s",String(r))}`}else if(r){if(f==="media")return{[`@media (prefers-color-scheme: ${String(r)})`]:{[o]:l}};if(f)return f.replace("%s",String(r))}return o};function J_(n,r){r.forEach(l=>{n[l]||(n[l]={})})}function Y(n,r,l){!n[r]&&l&&(n[r]=l)}function ml(n){return typeof n!="string"||!n.startsWith("hsl")?n:ky(n)}function Jn(n,r){`${r}Channel`in n||(n[`${r}Channel`]=dl(ml(n[r])))}function K_(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const wn=n=>{try{return n()}catch{}},Q_=(n="mui")=>a_(n);function zf(n,r,l,o,u){if(!l)return;l=l===!0?{}:l;const f=u==="dark"?"dark":"light";if(!o){r[u]=P_({...l,palette:{mode:f,...l?.palette},colorSpace:n});return}const{palette:d,...m}=Kf({...o,palette:{mode:f,...l?.palette},colorSpace:n});return r[u]={...l,palette:d,opacity:{...Py(f),...l?.opacity},overlays:l?.overlays||Vy(f)},m}function F_(n={},...r){const{colorSchemes:l={light:!0},defaultColorScheme:o,disableCssColorScheme:u=!1,cssVarPrefix:f="mui",nativeColor:d=!1,shouldSkipGeneratingVar:m=V_,colorSchemeSelector:g=l.light&&l.dark?"media":void 0,rootSelector:p=":root",...v}=n,b=Object.keys(l)[0],S=o||(l.light&&b!=="light"?"light":b),w=Q_(f),{[S]:C,light:_,dark:R,...L}=l,H={...L};let U=C;if((S==="dark"&&!("dark"in l)||S==="light"&&!("light"in l))&&(U=!0),!U)throw new Error(ii(21,S));let $;d&&($="oklch");const B=zf($,H,U,v,S);_&&!H.light&&zf($,H,_,void 0,"light"),R&&!H.dark&&zf($,H,R,void 0,"dark");let q={defaultColorScheme:S,...B,cssVarPrefix:f,colorSchemeSelector:g,rootSelector:p,getCssVar:w,colorSchemes:H,font:{...M_(B.typography),...B.font},spacing:K_(v.spacing)};Object.keys(q.colorSchemes).forEach(I=>{const x=q.colorSchemes[I].palette,ne=re=>{const D=re.split("-"),W=D[1],oe=D[2];return w(re,x[W][oe])};x.mode==="light"&&(Y(x.common,"background","#fff"),Y(x.common,"onBackground","#000")),x.mode==="dark"&&(Y(x.common,"background","#000"),Y(x.common,"onBackground","#fff"));function Z(re,D,W){if($){let oe;return re===Qa&&(oe=`transparent ${((1-W)*100).toFixed(0)}%`),re===ze&&(oe=`#000 ${(W*100).toFixed(0)}%`),re===De&&(oe=`#fff ${(W*100).toFixed(0)}%`),`color-mix(in ${$}, ${D}, ${oe})`}return re(D,W)}if(J_(x,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),x.mode==="light"){Y(x.Alert,"errorColor",Z(ze,x.error.light,.6)),Y(x.Alert,"infoColor",Z(ze,x.info.light,.6)),Y(x.Alert,"successColor",Z(ze,x.success.light,.6)),Y(x.Alert,"warningColor",Z(ze,x.warning.light,.6)),Y(x.Alert,"errorFilledBg",ne("palette-error-main")),Y(x.Alert,"infoFilledBg",ne("palette-info-main")),Y(x.Alert,"successFilledBg",ne("palette-success-main")),Y(x.Alert,"warningFilledBg",ne("palette-warning-main")),Y(x.Alert,"errorFilledColor",wn(()=>x.getContrastText(x.error.main))),Y(x.Alert,"infoFilledColor",wn(()=>x.getContrastText(x.info.main))),Y(x.Alert,"successFilledColor",wn(()=>x.getContrastText(x.success.main))),Y(x.Alert,"warningFilledColor",wn(()=>x.getContrastText(x.warning.main))),Y(x.Alert,"errorStandardBg",Z(De,x.error.light,.9)),Y(x.Alert,"infoStandardBg",Z(De,x.info.light,.9)),Y(x.Alert,"successStandardBg",Z(De,x.success.light,.9)),Y(x.Alert,"warningStandardBg",Z(De,x.warning.light,.9)),Y(x.Alert,"errorIconColor",ne("palette-error-main")),Y(x.Alert,"infoIconColor",ne("palette-info-main")),Y(x.Alert,"successIconColor",ne("palette-success-main")),Y(x.Alert,"warningIconColor",ne("palette-warning-main")),Y(x.AppBar,"defaultBg",ne("palette-grey-100")),Y(x.Avatar,"defaultBg",ne("palette-grey-400")),Y(x.Button,"inheritContainedBg",ne("palette-grey-300")),Y(x.Button,"inheritContainedHoverBg",ne("palette-grey-A100")),Y(x.Chip,"defaultBorder",ne("palette-grey-400")),Y(x.Chip,"defaultAvatarColor",ne("palette-grey-700")),Y(x.Chip,"defaultIconColor",ne("palette-grey-700")),Y(x.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),Y(x.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),Y(x.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),Y(x.LinearProgress,"primaryBg",Z(De,x.primary.main,.62)),Y(x.LinearProgress,"secondaryBg",Z(De,x.secondary.main,.62)),Y(x.LinearProgress,"errorBg",Z(De,x.error.main,.62)),Y(x.LinearProgress,"infoBg",Z(De,x.info.main,.62)),Y(x.LinearProgress,"successBg",Z(De,x.success.main,.62)),Y(x.LinearProgress,"warningBg",Z(De,x.warning.main,.62)),Y(x.Skeleton,"bg",$?Z(Qa,x.text.primary,.11):`rgba(${ne("palette-text-primaryChannel")} / 0.11)`),Y(x.Slider,"primaryTrack",Z(De,x.primary.main,.62)),Y(x.Slider,"secondaryTrack",Z(De,x.secondary.main,.62)),Y(x.Slider,"errorTrack",Z(De,x.error.main,.62)),Y(x.Slider,"infoTrack",Z(De,x.info.main,.62)),Y(x.Slider,"successTrack",Z(De,x.success.main,.62)),Y(x.Slider,"warningTrack",Z(De,x.warning.main,.62));const re=$?Z(ze,x.background.default,.6825):rs(x.background.default,.8);Y(x.SnackbarContent,"bg",re),Y(x.SnackbarContent,"color",wn(()=>$?Jf.text.primary:x.getContrastText(re))),Y(x.SpeedDialAction,"fabHoverBg",rs(x.background.paper,.15)),Y(x.StepConnector,"border",ne("palette-grey-400")),Y(x.StepContent,"border",ne("palette-grey-400")),Y(x.Switch,"defaultColor",ne("palette-common-white")),Y(x.Switch,"defaultDisabledColor",ne("palette-grey-100")),Y(x.Switch,"primaryDisabledColor",Z(De,x.primary.main,.62)),Y(x.Switch,"secondaryDisabledColor",Z(De,x.secondary.main,.62)),Y(x.Switch,"errorDisabledColor",Z(De,x.error.main,.62)),Y(x.Switch,"infoDisabledColor",Z(De,x.info.main,.62)),Y(x.Switch,"successDisabledColor",Z(De,x.success.main,.62)),Y(x.Switch,"warningDisabledColor",Z(De,x.warning.main,.62)),Y(x.TableCell,"border",Z(De,Z(Qa,x.divider,1),.88)),Y(x.Tooltip,"bg",Z(Qa,x.grey[700],.92))}if(x.mode==="dark"){Y(x.Alert,"errorColor",Z(De,x.error.light,.6)),Y(x.Alert,"infoColor",Z(De,x.info.light,.6)),Y(x.Alert,"successColor",Z(De,x.success.light,.6)),Y(x.Alert,"warningColor",Z(De,x.warning.light,.6)),Y(x.Alert,"errorFilledBg",ne("palette-error-dark")),Y(x.Alert,"infoFilledBg",ne("palette-info-dark")),Y(x.Alert,"successFilledBg",ne("palette-success-dark")),Y(x.Alert,"warningFilledBg",ne("palette-warning-dark")),Y(x.Alert,"errorFilledColor",wn(()=>x.getContrastText(x.error.dark))),Y(x.Alert,"infoFilledColor",wn(()=>x.getContrastText(x.info.dark))),Y(x.Alert,"successFilledColor",wn(()=>x.getContrastText(x.success.dark))),Y(x.Alert,"warningFilledColor",wn(()=>x.getContrastText(x.warning.dark))),Y(x.Alert,"errorStandardBg",Z(ze,x.error.light,.9)),Y(x.Alert,"infoStandardBg",Z(ze,x.info.light,.9)),Y(x.Alert,"successStandardBg",Z(ze,x.success.light,.9)),Y(x.Alert,"warningStandardBg",Z(ze,x.warning.light,.9)),Y(x.Alert,"errorIconColor",ne("palette-error-main")),Y(x.Alert,"infoIconColor",ne("palette-info-main")),Y(x.Alert,"successIconColor",ne("palette-success-main")),Y(x.Alert,"warningIconColor",ne("palette-warning-main")),Y(x.AppBar,"defaultBg",ne("palette-grey-900")),Y(x.AppBar,"darkBg",ne("palette-background-paper")),Y(x.AppBar,"darkColor",ne("palette-text-primary")),Y(x.Avatar,"defaultBg",ne("palette-grey-600")),Y(x.Button,"inheritContainedBg",ne("palette-grey-800")),Y(x.Button,"inheritContainedHoverBg",ne("palette-grey-700")),Y(x.Chip,"defaultBorder",ne("palette-grey-700")),Y(x.Chip,"defaultAvatarColor",ne("palette-grey-300")),Y(x.Chip,"defaultIconColor",ne("palette-grey-300")),Y(x.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),Y(x.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),Y(x.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),Y(x.LinearProgress,"primaryBg",Z(ze,x.primary.main,.5)),Y(x.LinearProgress,"secondaryBg",Z(ze,x.secondary.main,.5)),Y(x.LinearProgress,"errorBg",Z(ze,x.error.main,.5)),Y(x.LinearProgress,"infoBg",Z(ze,x.info.main,.5)),Y(x.LinearProgress,"successBg",Z(ze,x.success.main,.5)),Y(x.LinearProgress,"warningBg",Z(ze,x.warning.main,.5)),Y(x.Skeleton,"bg",$?Z(Qa,x.text.primary,.13):`rgba(${ne("palette-text-primaryChannel")} / 0.13)`),Y(x.Slider,"primaryTrack",Z(ze,x.primary.main,.5)),Y(x.Slider,"secondaryTrack",Z(ze,x.secondary.main,.5)),Y(x.Slider,"errorTrack",Z(ze,x.error.main,.5)),Y(x.Slider,"infoTrack",Z(ze,x.info.main,.5)),Y(x.Slider,"successTrack",Z(ze,x.success.main,.5)),Y(x.Slider,"warningTrack",Z(ze,x.warning.main,.5));const re=$?Z(De,x.background.default,.985):rs(x.background.default,.98);Y(x.SnackbarContent,"bg",re),Y(x.SnackbarContent,"color",wn(()=>$?Uy.text.primary:x.getContrastText(re))),Y(x.SpeedDialAction,"fabHoverBg",rs(x.background.paper,.15)),Y(x.StepConnector,"border",ne("palette-grey-600")),Y(x.StepContent,"border",ne("palette-grey-600")),Y(x.Switch,"defaultColor",ne("palette-grey-300")),Y(x.Switch,"defaultDisabledColor",ne("palette-grey-600")),Y(x.Switch,"primaryDisabledColor",Z(ze,x.primary.main,.55)),Y(x.Switch,"secondaryDisabledColor",Z(ze,x.secondary.main,.55)),Y(x.Switch,"errorDisabledColor",Z(ze,x.error.main,.55)),Y(x.Switch,"infoDisabledColor",Z(ze,x.info.main,.55)),Y(x.Switch,"successDisabledColor",Z(ze,x.success.main,.55)),Y(x.Switch,"warningDisabledColor",Z(ze,x.warning.main,.55)),Y(x.TableCell,"border",Z(ze,Z(Qa,x.divider,1),.68)),Y(x.Tooltip,"bg",Z(Qa,x.grey[700],.92))}Jn(x.background,"default"),Jn(x.background,"paper"),Jn(x.common,"background"),Jn(x.common,"onBackground"),Jn(x,"divider"),Object.keys(x).forEach(re=>{const D=x[re];re!=="tonalOffset"&&D&&typeof D=="object"&&(D.main&&Y(x[re],"mainChannel",dl(ml(D.main))),D.light&&Y(x[re],"lightChannel",dl(ml(D.light))),D.dark&&Y(x[re],"darkChannel",dl(ml(D.dark))),D.contrastText&&Y(x[re],"contrastTextChannel",dl(ml(D.contrastText))),re==="text"&&(Jn(x[re],"primary"),Jn(x[re],"secondary")),re==="action"&&(D.active&&Jn(x[re],"active"),D.selected&&Jn(x[re],"selected")))})}),q=r.reduce((I,x)=>_t(I,x),q);const z={prefix:f,disableCssColorScheme:u,shouldSkipGeneratingVar:m,getSelector:X_(q),enableContrastVars:d},{vars:G,generateThemeVars:Q,generateStyleSheets:ee}=l_(q,z);return q.vars=G,Object.entries(q.colorSchemes[q.defaultColorScheme]).forEach(([I,x])=>{q[I]=x}),q.generateThemeVars=Q,q.generateStyleSheets=ee,q.generateSpacing=function(){return _y(v.spacing,Bs(this))},q.getColorSchemeSelector=o_(g),q.spacing=q.generateSpacing(),q.shouldSkipGeneratingVar=m,q.unstable_sxConfig={...Ol,...v?.unstable_sxConfig},q.unstable_sx=function(x){return li({sx:x,theme:this})},q.toRuntimeSource=$y,q}function zb(n,r,l){n.colorSchemes&&l&&(n.colorSchemes[r]={...l!==!0&&l,palette:Cd({...l===!0?{}:l.palette,mode:r})})}function Ad(n={},...r){const{palette:l,cssVariables:o=!1,colorSchemes:u=l?void 0:{light:!0},defaultColorScheme:f=l?.mode,...d}=n,m=f||"light",g=u?.[m],p={...u,...l?{[m]:{...typeof g!="boolean"&&g,palette:l}}:void 0};if(o===!1){if(!("colorSchemes"in n))return Kf(n,...r);let v=l;"palette"in n||p[m]&&(p[m]!==!0?v=p[m].palette:m==="dark"&&(v={mode:"dark"}));const b=Kf({...n,palette:v},...r);return b.defaultColorScheme=m,b.colorSchemes=p,b.palette.mode==="light"&&(b.colorSchemes.light={...p.light!==!0&&p.light,palette:b.palette},zb(b,"dark",p.dark)),b.palette.mode==="dark"&&(b.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:b.palette},zb(b,"light",p.light)),b}return!l&&!("light"in p)&&m==="light"&&(p.light=!0),F_({...d,colorSchemes:p,defaultColorScheme:m,...typeof o!="boolean"&&o},...r)}const Td=Ad();function Z_(){const n=vd(Td);return n[Kn]||n}function W_(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const I_=n=>W_(n)&&n!=="classes",ui=Ey({themeId:Kn,defaultTheme:Td,rootShouldForwardProp:I_});function eC({theme:n,...r}){const l=Kn in n?n[Kn]:void 0;return F.jsx(By,{...r,themeId:l?Kn:void 0,theme:l||n})}const ls={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:tC}=n_({themeId:Kn,theme:()=>Ad({cssVariables:!0}),colorSchemeStorageKey:ls.colorSchemeStorageKey,modeStorageKey:ls.modeStorageKey,defaultColorScheme:{light:ls.defaultLightColorScheme,dark:ls.defaultDarkColorScheme},resolveTheme:n=>{const r={...n,typography:Hy(n.palette,n.typography)};return r.unstable_sx=function(o){return li({sx:o,theme:this})},r}}),nC=tC;function aC({theme:n,...r}){const l=K.useMemo(()=>{if(typeof n=="function")return n;const o=Kn in n?n[Kn]:n;return"colorSchemes"in o?null:"vars"in o?n:{...n,vars:null}},[n]);return l?F.jsx(eC,{theme:l,...r}):F.jsx(nC,{theme:n,...r})}function iC(n){return F.jsx(Cy,{...n,defaultTheme:Td,themeId:Kn})}function Yy(n){return function(l){return F.jsx(iC,{styles:typeof n=="function"?o=>n({theme:o,...l}):n})}}function sA(){return Ay}const zl=Kw;function ci(n){return Pw(n)}function rC(n){return si("MuiPaper",n)}$s("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const lC=n=>{const{square:r,elevation:l,variant:o,classes:u}=n,f={root:["root",o,!r&&"rounded",o==="elevation"&&`elevation${l}`]};return cr(f,rC,u)},oC=ui("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[l.variant],!l.square&&r.rounded,l.variant==="elevation"&&r[`elevation${l.elevation}`]]}})(zl(({theme:n})=>({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow"),variants:[{props:({ownerState:r})=>!r.square,style:{borderRadius:n.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(n.vars||n).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),sC=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiPaper"}),u=Z_(),{className:f,component:d="div",elevation:m=1,square:g=!1,variant:p="elevation",...v}=o,b={...o,component:d,elevation:m,square:g,variant:p},S=lC(b);return F.jsx(oC,{as:d,ownerState:b,className:oi(S.root,f),ref:l,...v,style:{...p==="elevation"&&{"--Paper-shadow":(u.vars||u).shadows[m],...u.vars&&{"--Paper-overlay":u.vars.overlays?.[m]},...!u.vars&&u.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Ts("#fff",Qf(m))}, ${Ts("#fff",Qf(m))})`}},...v.style}})});function uC(n){return typeof n.main=="string"}function cC(n,r=[]){if(!uC(n))return!1;for(const l of r)if(!n.hasOwnProperty(l)||typeof n[l]!="string")return!1;return!0}function fC(n=[]){return([,r])=>r&&cC(r,n)}function dC(n){return si("MuiAppBar",n)}$s("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const mC=n=>{const{color:r,position:l,classes:o}=n,u={root:["root",`color${Fn(r)}`,`position${Fn(l)}`]};return cr(u,dC,o)},Db=(n,r)=>n?`${n?.replace(")","")}, ${r})`:r,hC=ui(sC,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[`position${Fn(l.position)}`],r[`color${Fn(l.color)}`]]}})(zl(({theme:n})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":n.vars?n.vars.palette.AppBar.defaultBg:n.palette.grey[100],"--AppBar-color":n.vars?n.vars.palette.text.primary:n.palette.getContrastText(n.palette.grey[100]),...n.applyStyles("dark",{"--AppBar-background":n.vars?n.vars.palette.AppBar.defaultBg:n.palette.grey[900],"--AppBar-color":n.vars?n.vars.palette.text.primary:n.palette.getContrastText(n.palette.grey[900])})}},...Object.entries(n.palette).filter(fC(["contrastText"])).map(([r])=>({props:{color:r},style:{"--AppBar-background":(n.vars??n).palette[r].main,"--AppBar-color":(n.vars??n).palette[r].contrastText}})),{props:r=>r.enableColorOnDark===!0&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:r=>r.enableColorOnDark===!1&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...n.applyStyles("dark",{backgroundColor:n.vars?Db(n.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:n.vars?Db(n.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...n.applyStyles("dark",{backgroundImage:"none"})}}]}))),pC=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiAppBar"}),{className:u,color:f="primary",enableColorOnDark:d=!1,position:m="fixed",...g}=o,p={...o,color:f,position:m,enableColorOnDark:d},v=mC(p);return F.jsx(hC,{square:!0,component:"header",ownerState:p,elevation:4,className:oi(v.root,u,m==="fixed"&&"mui-fixed"),ref:l,...g})}),gC=d_({createStyledComponent:ui("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,r[`maxWidth${Fn(String(l.maxWidth))}`],l.fixed&&r.fixed,l.disableGutters&&r.disableGutters]}}),useThemeProps:n=>ci({props:n,name:"MuiContainer"})}),Ff=typeof Yy({})=="function",bC=(n,r)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...r&&!n.vars&&{colorScheme:n.palette.mode}}),yC=n=>({color:(n.vars||n).palette.text.primary,...n.typography.body1,backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),Xy=(n,r=!1)=>{const l={};r&&n.colorSchemes&&typeof n.getColorSchemeSelector=="function"&&Object.entries(n.colorSchemes).forEach(([f,d])=>{const m=n.getColorSchemeSelector(f);m.startsWith("@")?l[m]={":root":{colorScheme:d.palette?.mode}}:l[m.replace(/\s*&/,"")]={colorScheme:d.palette?.mode}});let o={html:bC(n,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:{margin:0,...yC(n),"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}},...l};const u=n.components?.MuiCssBaseline?.styleOverrides;return u&&(o=[o,u]),o},hs="mui-ecs",vC=n=>{const r=Xy(n,!1),l=Array.isArray(r)?r[0]:r;return!n.vars&&l&&(l.html[`:root:has(${hs})`]={colorScheme:n.palette.mode}),n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([o,u])=>{const f=n.getColorSchemeSelector(o);f.startsWith("@")?l[f]={[`:root:not(:has(.${hs}))`]:{colorScheme:u.palette?.mode}}:l[f.replace(/\s*&/,"")]={[`&:not(:has(.${hs}))`]:{colorScheme:u.palette?.mode}}}),r},SC=Yy(Ff?({theme:n,enableColorScheme:r})=>Xy(n,r):({theme:n})=>vC(n));function xC(n){const r=ci({props:n,name:"MuiCssBaseline"}),{children:l,enableColorScheme:o=!1}=r;return F.jsxs(K.Fragment,{children:[Ff&&F.jsx(SC,{enableColorScheme:o}),!Ff&&!o&&F.jsx("span",{className:hs,style:{display:"none"}}),l]})}function wC(n){return si("MuiDivider",n)}$s("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const _C=n=>{const{absolute:r,children:l,classes:o,flexItem:u,light:f,orientation:d,textAlign:m,variant:g}=n;return cr({root:["root",r&&"absolute",g,f&&"light",d==="vertical"&&"vertical",u&&"flexItem",l&&"withChildren",l&&d==="vertical"&&"withChildrenVertical",m==="right"&&d!=="vertical"&&"textAlignRight",m==="left"&&d!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",d==="vertical"&&"wrapperVertical"]},wC,o)},CC=ui("div",{name:"MuiDivider",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,l.absolute&&r.absolute,r[l.variant],l.light&&r.light,l.orientation==="vertical"&&r.vertical,l.flexItem&&r.flexItem,l.children&&r.withChildren,l.children&&l.orientation==="vertical"&&r.withChildrenVertical,l.textAlign==="right"&&l.orientation!=="vertical"&&r.textAlignRight,l.textAlign==="left"&&l.orientation!=="vertical"&&r.textAlignLeft]}})(zl(({theme:n})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(n.vars||n).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:n.alpha((n.vars||n).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:n.spacing(2),marginRight:n.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:n.spacing(1),marginBottom:n.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:r})=>!!r.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:r})=>r.children&&r.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(n.vars||n).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:r})=>r.orientation==="vertical"&&r.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(n.vars||n).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:r})=>r.textAlign==="right"&&r.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:r})=>r.textAlign==="left"&&r.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),AC=ui("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.wrapper,l.orientation==="vertical"&&r.wrapperVertical]}})(zl(({theme:n})=>({display:"inline-block",paddingLeft:`calc(${n.spacing(1)} * 1.2)`,paddingRight:`calc(${n.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${n.spacing(1)} * 1.2)`,paddingBottom:`calc(${n.spacing(1)} * 1.2)`}}]}))),Zf=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiDivider"}),{absolute:u=!1,children:f,className:d,orientation:m="horizontal",component:g=f||m==="vertical"?"div":"hr",flexItem:p=!1,light:v=!1,role:b=g!=="hr"?"separator":void 0,textAlign:S="center",variant:w="fullWidth",...C}=o,_={...o,absolute:u,component:g,flexItem:p,light:v,orientation:m,role:b,textAlign:S,variant:w},R=_C(_);return F.jsx(CC,{as:g,className:oi(R.root,d),role:b,ref:l,ownerState:_,"aria-orientation":b==="separator"&&(g!=="hr"||m==="vertical")?m:void 0,...C,children:f?F.jsx(AC,{className:R.wrapper,ownerState:_,children:f}):null})});Zf&&(Zf.muiSkipListHighlight=!0);const TC=v_({createStyledComponent:ui("div",{name:"MuiStack",slot:"Root"}),useThemeProps:n=>ci({props:n,name:"MuiStack"})});function MC(n){return si("MuiToolbar",n)}$s("MuiToolbar",["root","gutters","regular","dense"]);const RC=n=>{const{classes:r,disableGutters:l,variant:o}=n;return cr({root:["root",!l&&"gutters",o]},MC,r)},EC=ui("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:l}=n;return[r.root,!l.disableGutters&&r.gutters,r[l.variant]]}})(zl(({theme:n})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:n.mixins.toolbar}]}))),qC=K.forwardRef(function(r,l){const o=ci({props:r,name:"MuiToolbar"}),{className:u,component:f="div",disableGutters:d=!1,variant:m="regular",...g}=o,p={...o,component:f,disableGutters:d,variant:m},v=RC(p);return F.jsx(EC,{as:f,className:oi(v.root,u),ref:l,ownerState:p,...g})}),LC=Ad({typography:{fontFamily:"'DejaVu Serif', serif",fontSize:20,htmlFontSize:20}}),Bb=gx,OC=n=>{if(!n)return"";const o=new DOMParser().parseFromString(n,"text/html").querySelector("body");return o?(o.querySelectorAll("a > img").forEach(u=>{const f=u;if(!f.src)return;const d=Object.assign({"/src/site/content/figures/other/placeholder1.png":Wg,"/src/site/content/figures/placeholder1.jpg":Ig,"/src/site/content/figures/profile-placeholder.png":eb}),g=new URL(f.src).pathname;f.src=d[`/src/site/content${g}`].default}),o.querySelectorAll("a").forEach(u=>{if(u.href)if(u.matches("a:has(> img)")){const f=Object.assign({"/src/site/content/figures/other/placeholder1.png":Wg,"/src/site/content/figures/placeholder1.jpg":Ig,"/src/site/content/figures/profile-placeholder.png":eb}),m=new URL(u.href).pathname;u.href=f[`/src/site/content${m}`].default}else{const f=new URL(u.href),d=Qy.buildLocation({hash:`/${f.hash}`});u.setAttribute("href",d.url)}}),o.innerHTML):""},fr=PS({beforeLoad:async()=>({siteMap:Object.fromEntries(Bb.map(r=>["/"+r.path.join("/"),r])),siteBlogs:Bb,getBodyContent:OC}),component:()=>F.jsxs(F.Fragment,{children:[F.jsx(rx,{}),F.jsxs(aC,{theme:LC,children:[F.jsx(xC,{}),F.jsx(pC,{position:"relative",variant:"outlined",color:"default",sx:{paddingY:0},children:F.jsx(qC,{disableGutters:!0,children:F.jsxs(TC,{direction:"row",spacing:2,useFlexGap:!0,flexWrap:"nowrap",divider:F.jsx(Zf,{flexItem:!0,orientation:"vertical"}),children:[F.jsx(bl,{to:"/",children:"Home"}),F.jsx(bl,{to:"/ongoing",children:"Ongoing research"}),F.jsx(bl,{to:"/publications",children:"Publications"})]})})}),F.jsx(gC,{maxWidth:"md",sx:{paddingTop:8,paddingBottom:4},children:F.jsx(iy,{})})]})]})}),kC="modulepreload",zC=function(n){return"/project-textile/"+n},Nb={},Dl=function(r,l,o){let u=Promise.resolve();if(l&&l.length>0){let g=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");u=g(l.map(p=>{if(p=zC(p),p in Nb)return;Nb[p]=!0;const v=p.endsWith(".css"),b=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":kC,v||(S.as="script"),S.crossOrigin="",S.href=p,m&&S.setAttribute("nonce",m),document.head.appendChild(S),v)return new Promise((w,C)=>{S.addEventListener("load",w),S.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${p}`)))})}))}function f(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return u.then(d=>{for(const m of d||[])m.status==="rejected"&&f(m.reason);return r().catch(f)})},DC=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Equation Playground and Log Page</title>
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

</div>

<a id="index-autopage-1"></a>
<div class="titlepage">

<h1>Equation Playground and Log Page</h1>


<div class="author">


<div class="oneauthor">

</div>

</div>


<div class="titledate">

<p>
December 7, 2025
</p>
</div>

</div>
<!--
...... section Contents ......
-->
<h4 id="autosec-3">Contents</h4>
<a id="index-autopage-3"></a>



<nav class="toc">

<p>
<a href="index-0.html#autosec-6" class="tocsection" >
<span class="sectionnumber">1</span>&#x2003;Basic Algebra</a>
</p>


<p>
<a href="index-0.html#autosec-7" class="tocsection" >
<span class="sectionnumber">2</span>&#x2003;Calculus</a>
</p>


<p>
<a href="index-0.html#autosec-8" class="tocsection" >
<span class="sectionnumber">3</span>&#x2003;Linear Algebra</a>
</p>


<p>
<a href="index-0.html#autosec-9" class="tocsection" >
<span class="sectionnumber">4</span>&#x2003;Probability and Statistics</a>
</p>


<p>
<a href="index-0.html#autosec-10" class="tocsection" >
<span class="sectionnumber">5</span>&#x2003;Logarithms (Log Page)</a>
</p>


<p>
<a href="index-0.html#autosec-11" class="tocsubsection" >
<span class="sectionnumber">5.1</span>&#x2003;Logarithm Identities</a>
</p>


<p>
<a href="index-0.html#autosec-12" class="tocsubsection" >
<span class="sectionnumber">5.2</span>&#x2003;Logarithmic Equations</a>
</p>


<p>
<a href="index-0.html#autosec-13" class="tocsubsection" >
<span class="sectionnumber">5.3</span>&#x2003;Logarithmic Series</a>
</p>


<p>
<a href="index-0.html#autosec-14" class="tocsubsection" >
<span class="sectionnumber">5.4</span>&#x2003;A Long Log Page Filler</a>
</p>
</nav>

<figure id="autoid-1" class="figure ">
<div class="center">

<p>

<a href="./figures/placeholder1.jpg" target="_blank" ><img
     src="./figures/placeholder1.jpg"
     style="
     width:434pt;
     "
     class="inlineimage"
     alt="(image)"
></a>
</p>

<div class="figurecaption">
<p>
Figure&nbsp;1:&nbsp;System overview of the proposed method’s pipeline
</p>
</div>

<a id="fig:systemoverview"></a>

</div>

</figure>
<div class="abstract">


<div class="abstracttitle">Abstract</div>

<p>
Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa
ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec et mi. Nam vulputate metus eu enim.
Vestibulum pellentesque felis eu massa.
</p>
Hello </div>
<!--
...... section Basic Algebra ......
-->
<h4 id="autosec-6"><span class="sectionnumber">1&#x2003;</span>Basic Algebra</h4>
<a id="index-autopage-6"></a>


<p>
A simple quadratic equation:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{0}\\)</span>

<!--


                                                                                              ax2 + bx + c = 0,                (1)

-->

<p>

\\begin{equation}
ax^2 + bx + c = 0,
\\end{equation}

</p>

<p>
with solutions
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{1}\\)</span>

<!--

                                                                                                        √
                                                                                                 −b ±        b2 − 4ac
                                                                                          x=                          .        (2)
                                                                                                            2a

-->

<p>

\\begin{equation}
x = \\frac {-b \\pm \\sqrt {b^2 - 4ac}}{2a}.
\\end{equation}

</p>

<p>
Binomial theorem:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{2}\\)</span>

<!--

                                                                                                     n  
                                                                                                     X  n
                                                                                    (x + y)n =                    xn−k y k .   (3)
                                                                                                              k
                                                                                                     k=0


-->

<p>

\\begin{equation}
(x + y)^n = \\sum _{k=0}^{n} \\binom {n}{k} x^{n-k} y^k.
\\end{equation}

</p>

<p>
Geometric series:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{3}\\)</span>

<!--

                                                                                    n
                                                                                    X            1 − rn+1
                                                                                          rk =            ,          r ̸= 1.   (4)
                                                                                                   1−r
                                                                                    k=0


-->

<p>

\\begin{equation}
\\sum _{k=0}^{n} r^k = \\frac {1 - r^{n+1}}{1 - r}, \\qquad r \\neq 1.
\\end{equation}

</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{4}\\)</span>


<!--



                                                                                      (a + b)2 = a2 + 2ab + b2 ,               (5)
                                                                                                 2      2              2
                                                                                      (a − b) = a − 2ab + b ,                  (6)
                                                                                          2      2
                                                                                      a − b = (a − b)(a + b).                  (7)



-->


<p>

\\begin{align}
(a + b)^2 &amp; = a^2 + 2ab + b^2, \\\\ (a - b)^2 &amp; = a^2 - 2ab + b^2, \\\\ a^2 - b^2 &amp; = (a - b)(a + b).
\\end{align}

</p>
<!--
...... section Calculus ......
-->
<h4 id="autosec-7"><span class="sectionnumber">2&#x2003;</span>Calculus</h4>
<a id="index-autopage-7"></a>


<p>
Definition of the derivative:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{7}\\)</span>

<!--

                                                                                                           f (x + h) − f (x)
                                                                                     f ′ (x) = lim                           .                                                            (8)
                                                                                                  h→0              h

-->

<p>

\\begin{equation}
f&apos;(x) = \\lim _{h \\to 0} \\frac {f(x + h) - f(x)}{h}.
\\end{equation}

</p>

<p>
Fundamental theorem of calculus:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{8}\\)</span>

<!--

                                                                                         Z b
                                                                                               f ′ (x) dx = f (b) − f (a).                                                                (9)
                                                                                          a


-->

<p>

\\begin{equation}
\\int _{a}^{b} f&apos;(x)\\,dx = f(b) - f(a).
\\end{equation}

</p>

<p>
Some common derivatives:
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{9}\\)</span>


<!--


                                                                                                   d n
                                                                                                     x = nxn−1 ,                                                                         (10)
                                                                                                  dx
                                                                                                   d x
                                                                                                     e = ex ,                                                                            (11)
                                                                                                  dx
                                                                                                d
                                                                                                  sin x = cos x,                                                                         (12)
                                                                                               dx
                                                                                                d
                                                                                                  cos x = − sin x.                                                                       (13)
                                                                                               dx


-->


<p>

\\begin{align}
\\frac {d}{dx} x^n &amp; = n x^{n-1}, \\\\ \\frac {d}{dx} e^x &amp; = e^x, \\\\ \\frac {d}{dx} \\sin x &amp; = \\cos x, \\\\ \\frac {d}{dx} \\cos x &amp; = -\\sin x.
\\end{align}

</p>

<p>
Some common integrals:
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{13}\\)</span>


<!--


                                                                                                         xn+1
                                                                                     Z
                                                                                         xn dx =              + C,        n ̸= −1,                                                       (14)
                                                                                                         n+1
                                                                                     Z
                                                                                          1
                                                                                            dx = ln |x| + C,                                                                             (15)
                                                                                          x
                                                                                     Z
                                                                                         ex dx = ex + C,                                                                                 (16)
                                                                                 Z
                                                                                     sin x dx = − cos x + C.                                                                             (17)



-->


<p>

\\begin{align}
\\int x^n\\,dx &amp; = \\frac {x^{n+1}}{n+1} + C, \\quad n \\neq -1, \\\\ \\int \\frac {1}{x}\\,dx &amp; = \\ln |x| + C, \\\\ \\int e^x\\,dx &amp; = e^x + C, \\\\ \\int \\sin x\\,dx &amp; = -\\cos x + C.
\\end{align}

</p>

<p>
A multivariable integral:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{17}\\)</span>

<!--

                                                                                                ZZ
                                                                                                         (x2 + y 2 ) dA                                                                  (18)
                                                                                                     D


-->

<p>

\\begin{equation}
\\iint _{D} (x^2 + y^2)\\,dA
\\end{equation}

</p>

<p>
over some domain \\(D \\subset \\mathbb {R}^2\\).
</p>
<!--
...... section Linear Algebra ......
-->
<h4 id="autosec-8"><span class="sectionnumber">3&#x2003;</span>Linear Algebra</h4>
<a id="index-autopage-8"></a>


<p>
Matrix equation:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{18}\\)</span>

<!--


                                                                                                     Ax = b,                                                                                 (19)

-->

<p>

\\begin{equation}
A \\mathbf {x} = \\mathbf {b},
\\end{equation}

</p>

<p>
where
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{19}\\)</span>

<!--

                                                                                                                             
                                                                             a11     a12   ···    a1n             x1           b1
                                                                            a21     a22   ···    a2n           x2         b2 
                                                                         A= .                     ..  ,   x =  . ,   b =  . .                                                          (20)
                                                                                                                          
                                                                                      ..   ..
                                                                            ..        .      .     .           ..         .. 
                                                                               am1   am2   ···    amn              xn         bm

-->

<p>

\\begin{equation}
A = \\begin{bmatrix} a_{11} &amp; a_{12} &amp; \\cdots &amp; a_{1n} \\\\ a_{21} &amp; a_{22} &amp; \\cdots &amp; a_{2n} \\\\ \\vdots &amp; \\vdots &amp; \\ddots &amp; \\vdots \\\\ a_{m1} &amp; a_{m2} &amp;
\\cdots &amp; a_{mn} \\end {bmatrix}, \\quad \\mathbf {x} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end {bmatrix}, \\quad \\mathbf {b} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ \\vdots \\\\ b_m \\end
{bmatrix}.
\\end{equation}

</p>

<p>
Determinant of a \\(2 \\times 2\\) matrix:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{20}\\)</span>

<!--

                                                                                                       
                                                                                                a     b
                                                                                           det            = ad − bc.                                                                         (21)
                                                                                                 c    d

-->

<p>

\\begin{equation}
\\det \\begin{bmatrix} a &amp; b \\\\ c &amp; d \\end {bmatrix} = ad - bc.
\\end{equation}

</p>

<p>
Eigenvalue equation:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{21}\\)</span>

<!--


                                                                                                     Av = λv.                                                                                (22)

-->

<p>

\\begin{equation}
A \\mathbf {v} = \\lambda \\mathbf {v}.
\\end{equation}

</p>
<!--
...... section Probability and Statistics ......
-->
<h4 id="autosec-9"><span class="sectionnumber">4&#x2003;</span>Probability and Statistics</h4>
<a id="index-autopage-9"></a>


<p>
Probability of event \\(A\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{22}\\)</span>

<!--

                                                                                              number of favorable outcomes
                                                                                    P (A) =                                .           (23)
                                                                                                total number of outcomes

-->

<p>

\\begin{equation}
P(A) = \\frac {\\text {number of favorable outcomes}}{\\text {total number of outcomes}}.
\\end{equation}

</p>

<p>
Linearity of expectation:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{23}\\)</span>

<!--

                                                                                                  " n    #     n
                                                                                                   X           X
                                                                                              E         Xi =         E[Xi ].           (24)
                                                                                                  i=1          i=1


-->

<p>

\\begin{equation}
\\mathbb {E}\\left [\\sum _{i=1}^{n} X_i\\right ] = \\sum _{i=1}^{n} \\mathbb {E}[X_i].
\\end{equation}

</p>

<p>
Variance:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{24}\\)</span>

<!--

                                                                                                                2
                                                                                         Var(X) = E[X 2 ] − E[X] .                     (25)

-->

<p>

\\begin{equation}
\\operatorname {Var}(X) = \\mathbb {E}[X^2] - \\big (\\mathbb {E}[X]\\big )^2.
\\end{equation}

</p>

<p>
Normal distribution pdf:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{25}\\)</span>

<!--

                                                                                                            (x − µ)2
                                                                                                                              
                                                                                                    1
                                                                                      f (x) = √       exp −                        .   (26)
                                                                                                2πσ 2         2σ 2

-->

<p>

\\begin{equation}
f(x) = \\frac {1}{\\sqrt {2\\pi \\sigma ^2}} \\exp \\left ( -\\frac {(x - \\mu )^2}{2\\sigma ^2} \\right ).
\\end{equation}

</p>

<p>
Bayes’ theorem:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{26}\\)</span>

<!--

                                                                                                          P (B | A)P (A)
                                                                                         P (A | B) =                     .             (27)
                                                                                                              P (B)

-->

<p>

\\begin{equation}
P(A \\mid B) = \\frac {P(B \\mid A) P(A)}{P(B)}.
\\end{equation}

</p>
<!--
...... section Logarithms (Log Page) ......
-->
<h4 id="autosec-10"><span class="sectionnumber">5&#x2003;</span>Logarithms (Log Page)</h4>
<a id="index-autopage-10"></a>


<p>
Basic definition:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{27}\\)</span>

<!--


                                                                                       loga b = c   ⇐⇒        ac = b,   (28)

-->

<p>

\\begin{equation}
\\log _a b = c \\quad \\Longleftrightarrow \\quad a^c = b,
\\end{equation}

</p>

<p>
for \\(a &gt; 0\\), \\(a \\neq 1\\), and \\(b &gt; 0\\).
</p>

<p>
Change of base:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{28}\\)</span>

<!--

                                                                                                        logc b
                                                                                             loga b =          .        (29)
                                                                                                        logc a

-->

<p>

\\begin{equation}
\\log _a b = \\frac {\\log _c b}{\\log _c a}.
\\end{equation}

</p>
<!--
...... subsection Logarithm Identities ......
-->
<h5 id="autosec-11"><span class="sectionnumber">5.1&#x2003;</span>Logarithm Identities</h5>
<a id="index-autopage-11"></a>


<p>
For \\(a &gt; 0\\), \\(a \\neq 1\\), and \\(x,y &gt; 0\\):
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{29}\\)</span>


<!--



                                                                                          loga (xy) = loga x + loga y,                                                                         (30)
                                                                                              
                                                                                                x
                                                                                        loga        = loga x − loga y,                                                                         (31)
                                                                                                y
                                                                                         loga (xk ) = k loga x,                                                                                (32)
                                                                                              loga a = 1,                                                                                      (33)
                                                                                              loga 1 = 0.                                                                                      (34)



-->


<p>

\\begin{align}
\\log _a (xy) &amp; = \\log _a x + \\log _a y, \\\\ \\log _a \\left (\\frac {x}{y}\\right ) &amp; = \\log _a x - \\log _a y, \\\\ \\log _a (x^k) &amp; = k \\log _a x, \\\\ \\log _a a &amp; = 1, \\\\ \\log _a 1
&amp; = 0.
\\end{align}

</p>

<p>
Natural logarithm:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{34}\\)</span>

<!--


                                                                                                 ln x = loge x.                                                                                (35)

-->

<p>

\\begin{equation}
\\ln x = \\log _e x.
\\end{equation}

</p>

<p>
Derivative of the natural logarithm:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{35}\\)</span>

<!--

                                                                                                  d       1
                                                                                                    ln x = .                                                                                   (36)
                                                                                                 dx       x

-->

<p>

\\begin{equation}
\\frac {d}{dx} \\ln x = \\frac {1}{x}.
\\end{equation}

</p>

<p>
Derivative of a general logarithm:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{36}\\)</span>

<!--

                                                                                               d             1
                                                                                                 loga x =        .                                                                             (37)
                                                                                              dx          x ln a

-->

<p>

\\begin{equation}
\\frac {d}{dx} \\log _a x = \\frac {1}{x \\ln a}.
\\end{equation}

</p>

<p>
An integral involving logarithms:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{37}\\)</span>

<!--

                                                                                        Z
                                                                                            ln x dx = x ln x − x + C.                                                                          (38)

-->

<p>

\\begin{equation}
\\int \\ln x\\,dx = x \\ln x - x + C.
\\end{equation}

</p>
<!--
...... subsection Logarithmic Equations ......
-->
<h5 id="autosec-12"><span class="sectionnumber">5.2&#x2003;</span>Logarithmic Equations</h5>
<a id="index-autopage-12"></a>


<p>
Solve
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{38}\\)</span>

<!--


                                                                                      log2 (x − 1) + log2 (x + 3) = 4.                (39)

-->

<p>

\\begin{equation}
\\log _2 (x - 1) + \\log _2 (x + 3) = 4.
\\end{equation}

</p>

<p>
Using the product rule:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{39}\\)</span>

<!--


                                                                                                          (x − 1)(x + 3) = 24 = 16.
                                                                                            
                                                                         log2 (x − 1)(x + 3) = 4   =⇒                                 (40)

-->

<p>

\\begin{equation}
\\log _2 \\big ((x - 1)(x + 3)\\big ) = 4 \\quad \\Longrightarrow \\quad (x - 1)(x + 3) = 2^4 = 16.
\\end{equation}

</p>

<p>
Thus
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{40}\\)</span>

<!--


                                                                                x2 + 2x − 3 = 16   =⇒     x2 + 2x − 19 = 0.           (41)

-->

<p>

\\begin{equation}
x^2 + 2x - 3 = 16 \\quad \\Longrightarrow \\quad x^2 + 2x - 19 = 0.
\\end{equation}

</p>
<!--
...... subsection Logarithmic Series ......
-->
<h5 id="autosec-13"><span class="sectionnumber">5.3&#x2003;</span>Logarithmic Series</h5>
<a id="index-autopage-13"></a>


<p>
For \\(|x| &lt; 1\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{41}\\)</span>

<!--

                                                                                                      ∞
                                                                                                      X               xn
                                                                                        ln(1 + x) =         (−1)n+1      .        (42)
                                                                                                      n=1
                                                                                                                      n

-->

<p>

\\begin{equation}
\\ln (1 + x) = \\sum _{n=1}^{\\infty } (-1)^{n+1} \\frac {x^n}{n}.
\\end{equation}

</p>

<p>
For \\(x &gt; -1\\), \\(x \\neq 0\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{42}\\)</span>

<!--

                                                                                            ∞                        2n+1
                                                                                            X        1          x−1
                                                                                     ln x = 2                                 .   (43)
                                                                                              n=0
                                                                                                  2n +1         x+1

-->

<p>

\\begin{equation}
\\ln x = 2 \\sum _{n=0}^{\\infty } \\frac {1}{2n+1} \\left (\\frac {x-1}{x+1}\\right )^{2n+1}.
\\end{equation}

</p>
<!--
...... subsection A Long Log Page Filler ......
-->
<h5 id="autosec-14"><span class="sectionnumber">5.4&#x2003;</span>A Long Log Page Filler</h5>
<a id="index-autopage-14"></a>


<p>
Here is some filler text to make this a long page:
</p>

<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna.
Donec vehicula augue eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices.
Phasellus eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis
ac, nulla. Curabitur auctor semper nulla. Donec varius orci eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
</p>


<p>
Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet
magna, vitae ornare odio metus a mi. Morbi ac orci et nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aliquam tincidunt urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.
</p>


<p>
Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa
ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec et mi. Nam vulputate metus eu enim.
Vestibulum pellentesque felis eu massa.
</p>


<a id="index-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,BC=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"})),NC=()=>Dl(()=>import("./index-CaVaunIV.js"),__vite__mapDeps([0,1])),jC=ai("/")({component:Ml(NC,"component"),loader:async({context:{getBodyContent:n}})=>({body:n(Object.values(Object.assign({"/src/site/content/index.html":BC}))[0].default)}),head:()=>({meta:[{title:"Home | Textile"}]})}),UC=`<!DOCTYPE html>
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
`,Jy=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),GC=()=>Dl(()=>import("./index-B9C3RKT8.js"),__vite__mapDeps([2,1,3])),HC=ai("/publications/")({component:Ml(GC,"component"),loader:async({context:{getBodyContent:n}})=>({body:n(Object.assign({"/src/site/content/publications/index.html":Jy})["/src/site/content/publications/index.html"]?.default)}),head:()=>({meta:[{title:"Publications | Textile"}]})}),$C=`<!DOCTYPE html>
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

<figure id="autoid-1" class="figure ">
<div class="center">

<p>

<a href="./figures/placeholder1.jpg" target="_blank" ><img
    src="./figures/placeholder1.jpg"
    style="
    width:434pt;
    "
    class="inlineimage"
    alt="(image)"
></a>
</p>

<div class="figurecaption">
<p>
Figure&nbsp;1:&nbsp;System overview of the proposed method’s pipeline
</p>
</div>

<a id="fig:systemoverview"></a>

</div>

</figure>

<a id="index-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,Ky=Object.freeze(Object.defineProperty({__proto__:null,default:$C},Symbol.toStringTag,{value:"Module"})),PC=()=>Dl(()=>import("./index-DdIPRNDy.js"),__vite__mapDeps([4,1,3])),VC=ai("/ongoing/")({component:Ml(PC,"component"),loader:async({context:{getBodyContent:n}})=>({body:n(Object.assign({"/src/site/content/ongoing/index.html":Ky})["/src/site/content/ongoing/index.html"]?.default)}),head:()=>({meta:[{title:"Ongoing Research | Textile"}]})}),YC=`<!DOCTYPE html>
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
`,XC=Object.freeze(Object.defineProperty({__proto__:null,default:YC},Symbol.toStringTag,{value:"Module"})),JC=()=>Dl(()=>import("./_-PQvTRBd0.js"),__vite__mapDeps([5,1])),KC=ai("/publications/$")({component:Ml(JC,"component"),loader:async({context:{getBodyContent:n,siteMap:r},params:{_splat:l}})=>({body:n(Object.assign({"/src/site/content/publications/index.html":Jy,"/src/site/content/publications/pub-1.html":XC})[`/src/site/content/publications/${l}`]?.default),title:r[`/publications/${l}`].title}),head:({loaderData:n})=>({meta:[{title:`${n?.title} | Publications | Textile`}]})}),QC=`<!DOCTYPE html>
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
`,FC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),ZC=()=>Dl(()=>import("./_-ZGbaJ6N-.js"),__vite__mapDeps([6,1])),WC=ai("/ongoing/$")({component:Ml(ZC,"component"),loader:async({context:{getBodyContent:n,siteMap:r},params:{_splat:l}})=>({body:n(Object.assign({"/src/site/content/ongoing/index.html":Ky,"/src/site/content/ongoing/project-1.html":FC})[`/src/site/content/ongoing/${l}`]?.default),title:r[`/ongoing/${l}`]}),head:({loaderData:n})=>({meta:[{title:`${n?.title.title} | Ongoing Research | Textile`}]})}),IC=jC.update({id:"/",path:"/",getParentRoute:()=>fr}),eA=HC.update({id:"/publications/",path:"/publications/",getParentRoute:()=>fr}),tA=VC.update({id:"/ongoing/",path:"/ongoing/",getParentRoute:()=>fr}),nA=KC.update({id:"/publications/$",path:"/publications/$",getParentRoute:()=>fr}),aA=WC.update({id:"/ongoing/$",path:"/ongoing/$",getParentRoute:()=>fr}),iA={IndexRoute:IC,OngoingSplatRoute:aA,PublicationsSplatRoute:nA,OngoingIndexRoute:tA,PublicationsIndexRoute:eA},rA=fr._addFileChildren(iA)._addFileTypes(),Qy=WS({routeTree:rA,context:{},defaultPreload:"intent",scrollRestoration:!0,defaultStructuralSharing:!0,defaultPreloadStaleTime:0,history:w1(),basepath:"/project-textile/"}),Df=document.getElementById("app");Df&&!Df.innerHTML&&dx.createRoot(Df).render(F.jsx(K.StrictMode,{children:F.jsx(tx,{router:Qy})}));export{Sw as C,Zf as D,sC as P,jC as R,TC as S,Kn as T,Gf as _,HC as a,$s as b,oi as c,Fn as d,cr as e,fC as f,si as g,VC as h,Oy as i,F as j,or as k,oA as l,zl as m,sA as n,KC as o,WC as p,b2 as q,K as r,ui as s,li as t,ci as u,vd as v,Ay as w,Ad as x};
