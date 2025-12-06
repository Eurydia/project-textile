const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dz7NlCpU.js","assets/useTypesetOnLoad-Bat3LCDe.js","assets/index-R9jqSKiZ.js","assets/ImageListItem-Bn66_W4m.js","assets/index-BSKXh1r5.js","assets/_-CavywPyc.js","assets/_-C3jox1l_.js"])))=>i.map(i=>d[i]);
function fx(t,i){for(var l=0;l<i.length;l++){const s=i[l];if(typeof s!="string"&&!Array.isArray(s)){for(const u in s)if(u!=="default"&&!(u in t)){const d=Object.getOwnPropertyDescriptor(s,u);d&&Object.defineProperty(t,u,d.get?d:{enumerable:!0,get:()=>s[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}})();function Nb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var id={exports:{}},rl={};var _g;function mx(){if(_g)return rl;_g=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:t,type:s,key:f,ref:u!==void 0?u:null,props:d}}return rl.Fragment=i,rl.jsx=l,rl.jsxs=l,rl}var Ag;function px(){return Ag||(Ag=1,id.exports=mx()),id.exports}var Q=px();const zd=new WeakMap,hx=new WeakMap,ho={current:[]};let ld=!1,pl=0;const dl=new Set,Zs=new Map;function Ub(t){for(const i of t){if(ho.current.includes(i))continue;ho.current.push(i),i.recompute();const l=hx.get(i);if(l)for(const s of l){const u=zd.get(s);u?.length&&Ub(u)}}}function gx(t){const i={prevVal:t.prevState,currentVal:t.state};for(const l of t.listeners)l(i)}function bx(t){const i={prevVal:t.prevState,currentVal:t.state};for(const l of t.listeners)l(i)}function Gb(t){if(pl>0&&!Zs.has(t)&&Zs.set(t,t.prevState),dl.add(t),!(pl>0)&&!ld)try{for(ld=!0;dl.size>0;){const i=Array.from(dl);dl.clear();for(const l of i){const s=Zs.get(l)??l.prevState;l.prevState=s,gx(l)}for(const l of i){const s=zd.get(l);s&&(ho.current.push(l),Ub(s))}for(const l of i){const s=zd.get(l);if(s)for(const u of s)bx(u)}}}finally{ld=!1,ho.current=[],Zs.clear()}}function hl(t){pl++;try{t()}finally{if(pl--,pl===0){const i=dl.values().next().value;i&&Gb(i)}}}function yx(t){return typeof t=="function"}class vx{constructor(i,l){this.listeners=new Set,this.subscribe=s=>{var u,d;this.listeners.add(s);const f=(d=(u=this.options)==null?void 0:u.onSubscribe)==null?void 0:d.call(u,s,this);return()=>{this.listeners.delete(s),f?.()}},this.prevState=i,this.state=i,this.options=l}setState(i){var l,s,u;this.prevState=this.state,(l=this.options)!=null&&l.updateFn?this.state=this.options.updateFn(this.prevState)(i):yx(i)?this.state=i(this.prevState):this.state=i,(u=(s=this.options)==null?void 0:s.onUpdate)==null||u.call(s),Gb(this)}}const Ca="__TSR_index",Cg="popstate",Mg="beforeunload";function xx(t){let i=t.getLocation();const l=new Set,s=f=>{i=t.getLocation(),l.forEach(m=>m({location:i,action:f}))},u=f=>{t.notifyOnIndexChange??!0?s(f):i=t.getLocation()},d=async({task:f,navigateOpts:m,...g})=>{if(m?.ignoreBlocker??!1){f();return}const v=t.getBlockers?.()??[],b=g.type==="PUSH"||g.type==="REPLACE";if(typeof document<"u"&&v.length&&b)for(const x of v){const w=vl(g.path,g.state);if(await x.blockerFn({currentLocation:i,nextLocation:w,action:g.type})){t.onBlocked?.();return}}f()};return{get location(){return i},get length(){return t.getLength()},subscribers:l,subscribe:f=>(l.add(f),()=>{l.delete(f)}),push:(f,m,g)=>{const h=i.state[Ca];m=Tg(h+1,m),d({task:()=>{t.pushState(f,m),s({type:"PUSH"})},navigateOpts:g,type:"PUSH",path:f,state:m})},replace:(f,m,g)=>{const h=i.state[Ca];m=Tg(h,m),d({task:()=>{t.replaceState(f,m),s({type:"REPLACE"})},navigateOpts:g,type:"REPLACE",path:f,state:m})},go:(f,m)=>{d({task:()=>{t.go(f),u({type:"GO",index:f})},navigateOpts:m,type:"GO"})},back:f=>{d({task:()=>{t.back(f?.ignoreBlocker??!1),u({type:"BACK"})},navigateOpts:f,type:"BACK"})},forward:f=>{d({task:()=>{t.forward(f?.ignoreBlocker??!1),u({type:"FORWARD"})},navigateOpts:f,type:"FORWARD"})},canGoBack:()=>i.state[Ca]!==0,createHref:f=>t.createHref(f),block:f=>{if(!t.setBlockers)return()=>{};const m=t.getBlockers?.()??[];return t.setBlockers([...m,f]),()=>{const g=t.getBlockers?.()??[];t.setBlockers?.(g.filter(h=>h!==f))}},flush:()=>t.flush?.(),destroy:()=>t.destroy?.(),notify:s}}function Tg(t,i){i||(i={});const l=Wd();return{...i,key:l,__TSR_key:l,[Ca]:t}}function Hb(t){const i=t?.window??(typeof document<"u"?window:void 0),l=i.history.pushState,s=i.history.replaceState;let u=[];const d=()=>u,f=G=>u=G,m=t?.createHref??(G=>G),g=t?.parseLocation??(()=>vl(`${i.location.pathname}${i.location.search}${i.location.hash}`,i.history.state));if(!i.history.state?.__TSR_key&&!i.history.state?.key){const G=Wd();i.history.replaceState({[Ca]:0,key:G,__TSR_key:G},"")}let h=g(),v,b=!1,x=!1,w=!1,A=!1;const _=()=>h;let q,k;const H=()=>{q&&(D._ignoreSubscribers=!0,(q.isPush?i.history.pushState:i.history.replaceState)(q.state,"",q.href),D._ignoreSubscribers=!1,q=void 0,k=void 0,v=void 0)},U=(G,K,ee)=>{const I=m(K);k||(v=h),h=vl(K,ee),q={href:I,state:ee,isPush:q?.isPush||G==="push"},k||(k=Promise.resolve().then(()=>H()))},P=G=>{h=g(),D.notify({type:G})},B=async()=>{if(x){x=!1;return}const G=g(),K=G.state[Ca]-h.state[Ca],ee=K===1,I=K===-1,S=!ee&&!I||b;b=!1;const te=S?"GO":I?"BACK":"FORWARD",W=S?{type:"GO",index:K}:{type:I?"BACK":"FORWARD"};if(w)w=!1;else{const ie=d();if(typeof document<"u"&&ie.length){for(const z of ie)if(await z.blockerFn({currentLocation:h,nextLocation:G,action:te})){x=!0,i.history.go(1),D.notify(W);return}}}h=g(),D.notify(W)},E=G=>{if(A){A=!1;return}let K=!1;const ee=d();if(typeof document<"u"&&ee.length)for(const I of ee){const S=I.enableBeforeUnload??!0;if(S===!0){K=!0;break}if(typeof S=="function"&&S()===!0){K=!0;break}}if(K)return G.preventDefault(),G.returnValue=""},D=xx({getLocation:_,getLength:()=>i.history.length,pushState:(G,K)=>U("push",G,K),replaceState:(G,K)=>U("replace",G,K),back:G=>(G&&(w=!0),A=!0,i.history.back()),forward:G=>{G&&(w=!0),A=!0,i.history.forward()},go:G=>{b=!0,i.history.go(G)},createHref:G=>m(G),flush:H,destroy:()=>{i.history.pushState=l,i.history.replaceState=s,i.removeEventListener(Mg,E,{capture:!0}),i.removeEventListener(Cg,B)},onBlocked:()=>{v&&h!==v&&(h=v)},getBlockers:d,setBlockers:f,notifyOnIndexChange:!1});return i.addEventListener(Mg,E,{capture:!0}),i.addEventListener(Cg,B),i.history.pushState=function(...G){const K=l.apply(i.history,G);return D._ignoreSubscribers||P("PUSH"),K},i.history.replaceState=function(...G){const K=s.apply(i.history,G);return D._ignoreSubscribers||P("REPLACE"),K},D}function Sx(t){const i=typeof document<"u"?window:void 0;return Hb({window:i,parseLocation:()=>{const l=i.location.hash.split("#").slice(1),s=l[0]??"/",u=i.location.search,d=l.slice(1),f=d.length===0?"":`#${d.join("#")}`,m=`${s}${u}${f}`;return vl(m,i.history.state)},createHref:l=>`${i.location.pathname}${i.location.search}#${l}`})}function vl(t,i){const l=t.indexOf("#"),s=t.indexOf("?"),u=Wd();return{href:t,pathname:t.substring(0,l>0?s>0?Math.min(l,s):l:s>0?s:t.length),hash:l>-1?t.substring(l):"",search:s>-1?t.slice(s,l===-1?void 0:l):"",state:i||{[Ca]:0,key:u,__TSR_key:u}}}function Wd(){return(Math.random()+1).toString(36).substring(7)}function go(t){return t[t.length-1]}function wx(t){return typeof t=="function"}function _a(t,i){return wx(t)?t(i):t}const _x=Object.prototype.hasOwnProperty;function it(t,i){if(t===i)return t;const l=i,s=Eg(t)&&Eg(l);if(!s&&!(bo(t)&&bo(l)))return l;const u=s?t:qg(t);if(!u)return l;const d=s?l:qg(l);if(!d)return l;const f=u.length,m=d.length,g=s?new Array(m):{};let h=0;for(let v=0;v<m;v++){const b=s?v:d[v],x=t[b],w=l[b];if(x===w){g[b]=x,(s?v<f:_x.call(t,b))&&h++;continue}if(x===null||w===null||typeof x!="object"||typeof w!="object"){g[b]=w;continue}const A=it(x,w);g[b]=A,A===x&&h++}return f===m&&h===f?t:g}function qg(t){const i=[],l=Object.getOwnPropertyNames(t);for(const u of l){if(!Object.prototype.propertyIsEnumerable.call(t,u))return!1;i.push(u)}const s=Object.getOwnPropertySymbols(t);for(const u of s){if(!Object.prototype.propertyIsEnumerable.call(t,u))return!1;i.push(u)}return i}function bo(t){if(!Rg(t))return!1;const i=t.constructor;if(typeof i>"u")return!0;const l=i.prototype;return!(!Rg(l)||!l.hasOwnProperty("isPrototypeOf"))}function Rg(t){return Object.prototype.toString.call(t)==="[object Object]"}function Eg(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Za(t,i,l){if(t===i)return!0;if(typeof t!=typeof i)return!1;if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;for(let s=0,u=t.length;s<u;s++)if(!Za(t[s],i[s],l))return!1;return!0}if(bo(t)&&bo(i)){const s=l?.ignoreUndefined??!0;if(l?.partial){for(const f in i)if((!s||i[f]!==void 0)&&!Za(t[f],i[f],l))return!1;return!0}let u=0;if(!s)u=Object.keys(t).length;else for(const f in t)t[f]!==void 0&&u++;let d=0;for(const f in i)if((!s||i[f]!==void 0)&&(d++,d>u||!Za(t[f],i[f],l)))return!1;return u===d}return!1}function ii(t){let i,l;const s=new Promise((u,d)=>{i=u,l=d});return s.status="pending",s.resolve=u=>{s.status="resolved",s.value=u,i(u),t?.(u)},s.reject=u=>{s.status="rejected",l(u)},s}function Ax(t){return typeof t?.message!="string"?!1:t.message.startsWith("Failed to fetch dynamically imported module")||t.message.startsWith("error loading dynamically imported module")||t.message.startsWith("Importing a module script failed")}function Ma(t){return!!(t&&typeof t=="object"&&typeof t.then=="function")}function kg(t){try{return decodeURI(t)}catch{return t.replaceAll(/%[0-9A-F]{2}/gi,i=>{try{return decodeURI(i)}catch{return i}})}}function Lg(t,i){if(!t)return t;const l=/%25|%5C/gi;let s=0,u="",d;for(;(d=l.exec(t))!==null;)u+=kg(t.slice(s,d.index))+d[0],s=l.lastIndex;return u+kg(s?t.slice(s):t)}var Cx="Invariant failed";function Kt(t,i){if(!t)throw new Error(Cx)}function yo(t){const i=new Map;let l,s;const u=d=>{d.next&&(d.prev?(d.prev.next=d.next,d.next.prev=d.prev,d.next=void 0,s&&(s.next=d,d.prev=s)):(d.next.prev=void 0,l=d.next,d.next=void 0,s&&(d.prev=s,s.next=d)),s=d)};return{get(d){const f=i.get(d);if(f)return u(f),f.value},set(d,f){if(i.size>=t&&l){const g=l;i.delete(g.key),g.next&&(l=g.next,g.next.prev=void 0),g===s&&(s=void 0)}const m=i.get(d);if(m)m.value=f,u(m);else{const g={key:d,value:f,prev:s};s&&(s.next=g),s=g,l||(l=g),i.set(d,g)}},clear(){i.clear(),l=void 0,s=void 0}}}const li=0,nr=1,tr=2,xl=3,Mx=/^([^{]*)\{\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,Tx=/^([^{]*)\{-\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,qx=/^([^{]*)\{\$\}([^}]*)$/;function Zd(t,i,l=new Uint16Array(6)){const s=t.indexOf("/",i),u=s===-1?t.length:s,d=t.substring(i,u);if(!d||!d.includes("$"))return l[0]=li,l[1]=i,l[2]=i,l[3]=u,l[4]=u,l[5]=u,l;if(d==="$"){const h=t.length;return l[0]=tr,l[1]=i,l[2]=i,l[3]=h,l[4]=h,l[5]=h,l}if(d.charCodeAt(0)===36)return l[0]=nr,l[1]=i,l[2]=i+1,l[3]=u,l[4]=u,l[5]=u,l;const f=d.match(qx);if(f){const v=f[1].length;return l[0]=tr,l[1]=i+v,l[2]=i+v+1,l[3]=i+v+2,l[4]=i+v+3,l[5]=t.length,l}const m=d.match(Tx);if(m){const h=m[1],v=m[2],b=m[3],x=h.length;return l[0]=xl,l[1]=i+x,l[2]=i+x+3,l[3]=i+x+3+v.length,l[4]=u-b.length,l[5]=u,l}const g=d.match(Mx);if(g){const h=g[1],v=g[2],b=g[3],x=h.length;return l[0]=nr,l[1]=i+x,l[2]=i+x+2,l[3]=i+x+2+v.length,l[4]=u-b.length,l[5]=u,l}return l[0]=li,l[1]=i,l[2]=i,l[3]=u,l[4]=u,l[5]=u,l}function To(t,i,l,s,u,d,f){f?.(l);let m=s;{const g=l.fullPath??l.from,h=g.length,v=l.options?.caseSensitive??t;for(;m<h;){const b=Zd(g,m,i);let x;const w=m,A=b[5];switch(m=A+1,d++,b[0]){case li:{const q=g.substring(b[2],b[3]);if(v){const k=u.static?.get(q);if(k)x=k;else{u.static??=new Map;const H=Sl(l.fullPath??l.from);H.parent=u,H.depth=d,x=H,u.static.set(q,H)}}else{const k=q.toLowerCase(),H=u.staticInsensitive?.get(k);if(H)x=H;else{u.staticInsensitive??=new Map;const U=Sl(l.fullPath??l.from);U.parent=u,U.depth=d,x=U,u.staticInsensitive.set(k,U)}}break}case nr:{const q=g.substring(w,b[1]),k=g.substring(b[4],A),H=v&&!!(q||k),U=q?H?q:q.toLowerCase():void 0,P=k?H?k:k.toLowerCase():void 0,B=u.dynamic?.find(E=>E.caseSensitive===H&&E.prefix===U&&E.suffix===P);if(B)x=B;else{const E=od(nr,l.fullPath??l.from,H,U,P);x=E,E.depth=d,E.parent=u,u.dynamic??=[],u.dynamic.push(E)}break}case xl:{const q=g.substring(w,b[1]),k=g.substring(b[4],A),H=v&&!!(q||k),U=q?H?q:q.toLowerCase():void 0,P=k?H?k:k.toLowerCase():void 0,B=u.optional?.find(E=>E.caseSensitive===H&&E.prefix===U&&E.suffix===P);if(B)x=B;else{const E=od(xl,l.fullPath??l.from,H,U,P);x=E,E.parent=u,E.depth=d,u.optional??=[],u.optional.push(E)}break}case tr:{const q=g.substring(w,b[1]),k=g.substring(b[4],A),H=v&&!!(q||k),U=q?H?q:q.toLowerCase():void 0,P=k?H?k:k.toLowerCase():void 0,B=od(tr,l.fullPath??l.from,H,U,P);x=B,B.parent=u,B.depth=d,u.wildcard??=[],u.wildcard.push(B)}}u=x}if((l.path||!l.children)&&!l.isRoot){const b=g.endsWith("/");b||(u.notFound=l),(!u.route||!u.isIndex&&b)&&(u.route=l,u.fullPath=l.fullPath??l.from),u.isIndex||=b}}if(l.children)for(const g of l.children)To(t,i,g,m,u,d,f)}function sd(t,i){if(t.prefix&&i.prefix&&t.prefix!==i.prefix){if(t.prefix.startsWith(i.prefix))return-1;if(i.prefix.startsWith(t.prefix))return 1}if(t.suffix&&i.suffix&&t.suffix!==i.suffix){if(t.suffix.endsWith(i.suffix))return-1;if(i.suffix.endsWith(t.suffix))return 1}return t.prefix&&!i.prefix?-1:!t.prefix&&i.prefix?1:t.suffix&&!i.suffix?-1:!t.suffix&&i.suffix?1:t.caseSensitive&&!i.caseSensitive?-1:!t.caseSensitive&&i.caseSensitive?1:0}function Qa(t){if(t.static)for(const i of t.static.values())Qa(i);if(t.staticInsensitive)for(const i of t.staticInsensitive.values())Qa(i);if(t.dynamic?.length){t.dynamic.sort(sd);for(const i of t.dynamic)Qa(i)}if(t.optional?.length){t.optional.sort(sd);for(const i of t.optional)Qa(i)}if(t.wildcard?.length){t.wildcard.sort(sd);for(const i of t.wildcard)Qa(i)}}function Sl(t){return{kind:li,depth:0,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:t,parent:null,isIndex:!1,notFound:null}}function od(t,i,l,s,u){return{kind:t,depth:0,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:i,parent:null,isIndex:!1,notFound:null,caseSensitive:l,prefix:s,suffix:u}}function Rx(t,i){const l=Sl("/"),s=new Uint16Array(6);for(const u of t)To(!1,s,u,1,l,0);Qa(l),i.masksTree=l,i.flatCache=yo(1e3)}function Ex(t,i){t||="/";const l=i.flatCache.get(t);if(l)return l;const s=Id(t,i.masksTree);return i.flatCache.set(t,s),s}function kx(t,i,l,s,u){t||="/",s||="/";const d=i?`case\0${t}`:t;let f=u.singleCache.get(d);if(!f){f=Sl("/");const m=new Uint16Array(6);To(i,m,{from:t},1,f,0),u.singleCache.set(d,f)}return Id(s,f,l)}function Lx(t,i,l=!1){const s=l?t:`nofuzz\0${t}`,u=i.matchCache.get(s);if(u!==void 0)return u;t||="/";const d=Id(t,i.segmentTree,l);return d&&(d.branch=Bx(d.route)),i.matchCache.set(s,d),d}function Ox(t){return t==="/"?t:t.replace(/\/{1,}$/,"")}function Dx(t,i=!1,l){const s=Sl(t.fullPath),u=new Uint16Array(6),d={},f={};let m=0;return To(i,u,t,1,s,0,h=>{if(l?.(h,m),Kt(!(h.id in d),`Duplicate routes found with id: ${String(h.id)}`),d[h.id]=h,m!==0&&h.path){const v=Ox(h.fullPath);(!f[v]||h.fullPath.endsWith("/"))&&(f[v]=h)}m++}),Qa(s),{processedTree:{segmentTree:s,singleCache:yo(1e3),matchCache:yo(1e3),flatCache:null,masksTree:null},routesById:d,routesByPath:f}}function Id(t,i,l=!1){const s=t.split("/"),u=Nx(t,s,i,l);if(!u)return null;const d=zx(t,s,u),f="**"in u;return f&&(d["**"]=u["**"]),{route:f?u.node.notFound??u.node.route:u.node.route,params:d}}function zx(t,i,l){const s=jx(l.node);let u=null;const d={};for(let f=0,m=0,g=0;m<s.length;f++,m++,g++){const h=s[m],v=i[f],b=g;if(v&&(g+=v.length),h.kind===nr){u??=l.node.fullPath.split("/");const x=u[m],w=h.prefix?.length??0;if(x.charCodeAt(w)===123){const _=h.suffix?.length??0,q=x.substring(w+2,x.length-_-1),k=v.substring(w,v.length-_);d[q]=decodeURIComponent(k)}else{const _=x.substring(1);d[_]=decodeURIComponent(v)}}else if(h.kind===xl){if(l.skipped&1<<m){f--;continue}u??=l.node.fullPath.split("/");const x=u[m],w=h.prefix?.length??0,A=h.suffix?.length??0,_=x.substring(w+3,x.length-A-1),q=h.suffix||h.prefix?v.substring(w,v.length-A):v;q&&(d[_]=decodeURIComponent(q))}else if(h.kind===tr){const x=h,w=t.substring(b+(x.prefix?.length??0),t.length-(x.suffix?.length??0)),A=decodeURIComponent(w);d["*"]=A,d._splat=A;break}}return d}function Bx(t){const i=[t];for(;t.parentRoute;)t=t.parentRoute,i.push(t);return i.reverse(),i}function jx(t){const i=Array(t.depth+1);do i[t.depth]=t,t=t.parent;while(t);return i}function Nx(t,i,l,s){const u=!go(i),d=u&&t!=="/",f=i.length-(u?1:0),m=[{node:l,index:1,skipped:0,depth:1,statics:1,dynamics:0,optionals:0}];let g=null,h=null,v=null;for(;m.length;){const b=m.pop();let{node:x,index:w,skipped:A,depth:_,statics:q,dynamics:k,optionals:H}=b;s&&x.notFound&&Is(h,b)&&(h=b);const U=w===f;if(U){if(x.route&&(!d||x.isIndex)&&(Is(v,b)&&(v=b),q===f&&x.isIndex))return v;if(!x.optional&&!x.wildcard)continue}const P=U?void 0:i[w];let B;if(x.wildcard&&Is(g,b))for(const E of x.wildcard){const{prefix:D,suffix:G}=E;if(!(D&&(U||!(E.caseSensitive?P:B??=P.toLowerCase()).startsWith(D)))){if(G){if(U)continue;const K=i.slice(w).join("/").slice(-G.length);if((E.caseSensitive?K:K.toLowerCase())!==G)continue}g={node:E,index:w,skipped:A,depth:_,statics:q,dynamics:k,optionals:H};break}}if(x.optional){const E=A|1<<_,D=_+1;for(let G=x.optional.length-1;G>=0;G--){const K=x.optional[G];m.push({node:K,index:w,skipped:E,depth:D,statics:q,dynamics:k,optionals:H})}if(!U)for(let G=x.optional.length-1;G>=0;G--){const K=x.optional[G],{prefix:ee,suffix:I}=K;if(ee||I){const S=K.caseSensitive?P:B??=P.toLowerCase();if(ee&&!S.startsWith(ee)||I&&!S.endsWith(I))continue}m.push({node:K,index:w+1,skipped:A,depth:D,statics:q,dynamics:k,optionals:H+1})}}if(!U&&x.dynamic&&P)for(let E=x.dynamic.length-1;E>=0;E--){const D=x.dynamic[E],{prefix:G,suffix:K}=D;if(G||K){const ee=D.caseSensitive?P:B??=P.toLowerCase();if(G&&!ee.startsWith(G)||K&&!ee.endsWith(K))continue}m.push({node:D,index:w+1,skipped:A,depth:_+1,statics:q,dynamics:k+1,optionals:H})}if(!U&&x.staticInsensitive){const E=x.staticInsensitive.get(B??=P.toLowerCase());E&&m.push({node:E,index:w+1,skipped:A,depth:_+1,statics:q+1,dynamics:k,optionals:H})}if(!U&&x.static){const E=x.static.get(P);E&&m.push({node:E,index:w+1,skipped:A,depth:_+1,statics:q+1,dynamics:k,optionals:H})}}if(v&&g)return Is(g,v)?v:g;if(v)return v;if(g)return g;if(s&&h){let b=h.index;for(let w=0;w<h.index;w++)b+=i[w].length;const x=b===t.length?"/":t.slice(b);return{node:h.node,skipped:h.skipped,"**":decodeURIComponent(x)}}return null}function Is(t,i){return t?i.statics>t.statics||i.statics===t.statics&&(i.dynamics>t.dynamics||i.dynamics===t.dynamics&&(i.optionals>t.optionals||i.optionals===t.optionals&&(i.node.isIndex>t.node.isIndex||i.node.isIndex===t.node.isIndex&&i.depth>t.depth))):!0}function lo(t){return ef(t.filter(i=>i!==void 0).join("/"))}function ef(t){return t.replace(/\/{2,}/g,"/")}function Pb(t){return t==="/"?t:t.replace(/^\/{1,}/,"")}function Ia(t){const i=t.length;return i>1&&t[i-1]==="/"?t.replace(/\/{1,}$/,""):t}function so(t){return Ia(Pb(t))}function vo(t,i){return t?.endsWith("/")&&t!=="/"&&t!==`${i}/`?t.slice(0,-1):t}function Ux(t,i,l){return vo(t,l)===vo(i,l)}function Gx({base:t,to:i,trailingSlash:l="never",cache:s}){const u=i.startsWith("/"),d=!u&&i===".";let f;if(s){f=u?i:d?t:t+"\0"+i;const b=s.get(f);if(b)return b}let m;if(d)m=t.split("/");else if(u)m=i.split("/");else{for(m=t.split("/");m.length>1&&go(m)==="";)m.pop();const b=i.split("/");for(let x=0,w=b.length;x<w;x++){const A=b[x];A===""?x?x===w-1&&m.push(A):m=[A]:A===".."?m.pop():A==="."||m.push(A)}}m.length>1&&(go(m)===""?l==="never"&&m.pop():l==="always"&&m.push(""));let g,h="";for(let b=0;b<m.length;b++){b>0&&(h+="/");const x=m[b];if(!x)continue;g=Zd(x,0,g);const w=g[0];if(w===li){h+=x;continue}const A=g[5],_=x.substring(0,g[1]),q=x.substring(g[4],A),k=x.substring(g[2],g[3]);w===nr?h+=_||q?`${_}{$${k}}${q}`:`$${k}`:w===tr?h+=_||q?`${_}{$}${q}`:"$":h+=`${_}{-$${k}}${q}`}h=ef(h);const v=h||"/";return f&&s&&s.set(f,v),v}function ud(t,i,l){const s=i[t];return typeof s!="string"?s:t==="_splat"?encodeURI(s):Hx(s,l)}function cd({path:t,params:i,decodeCharMap:l}){let s=!1;const u={};if(!t||t==="/")return{interpolatedPath:"/",usedParams:u,isMissingParams:s};if(!t.includes("$"))return{interpolatedPath:t,usedParams:u,isMissingParams:s};const d=t.length;let f=0,m,g="";for(;f<d;){const v=f;m=Zd(t,v,m);const b=m[5];if(f=b+1,v===b)continue;const x=m[0];if(x===li){g+="/"+t.substring(v,b);continue}if(x===tr){const w=i._splat;u._splat=w,u["*"]=w;const A=t.substring(v,m[1]),_=t.substring(m[4],b);if(!w){s=!0,(A||_)&&(g+="/"+A+_);continue}const q=ud("_splat",i,l);g+="/"+A+q+_;continue}if(x===nr){const w=t.substring(m[2],m[3]);!s&&!(w in i)&&(s=!0),u[w]=i[w];const A=t.substring(v,m[1]),_=t.substring(m[4],b),q=ud(w,i,l)??"undefined";g+="/"+A+q+_;continue}if(x===xl){const w=t.substring(m[2],m[3]),A=i[w];if(A==null)continue;u[w]=A;const _=t.substring(v,m[1]),q=t.substring(m[4],b),k=ud(w,i,l)??"";g+="/"+_+k+q;continue}}return t.endsWith("/")&&(g+="/"),{usedParams:u,interpolatedPath:g||"/",isMissingParams:s}}function Hx(t,i){let l=encodeURIComponent(t);if(i)for(const[s,u]of i)l=l.replaceAll(s,u);return l}function st(t){return!!t?.isNotFound}function Px(){try{if(typeof window<"u"&&typeof window.sessionStorage=="object")return window.sessionStorage}catch{}}const xo="tsr-scroll-restoration-v1_3",Jx=(t,i)=>{let l;return(...s)=>{l||(l=setTimeout(()=>{t(...s),l=null},i))}};function $x(){const t=Px();if(!t)return null;const i=t.getItem(xo);let l=i?JSON.parse(i):{};return{state:l,set:s=>(l=_a(s,l)||l,t.setItem(xo,JSON.stringify(l)))}}const eo=$x(),Bd=t=>t.state.__TSR_key||t.href;function Vx(t){const i=[];let l;for(;l=t.parentNode;)i.push(`${t.tagName}:nth-child(${Array.prototype.indexOf.call(l.children,t)+1})`),t=l;return`${i.reverse().join(" > ")}`.toLowerCase()}let So=!1;function Jb({storageKey:t,key:i,behavior:l,shouldScrollRestoration:s,scrollToTopSelectors:u,location:d}){let f;try{f=JSON.parse(sessionStorage.getItem(t)||"{}")}catch(h){console.error(h);return}const m=i||window.history.state?.__TSR_key,g=f[m];So=!0;e:{if(s&&g&&Object.keys(g).length>0){for(const b in g){const x=g[b];if(b==="window")window.scrollTo({top:x.scrollY,left:x.scrollX,behavior:l});else if(b){const w=document.querySelector(b);w&&(w.scrollLeft=x.scrollX,w.scrollTop=x.scrollY)}}break e}const h=(d??window.location).hash.split("#",2)[1];if(h){const b=window.history.state?.__hashScrollIntoViewOptions??!0;if(b){const x=document.getElementById(h);x&&x.scrollIntoView(b)}break e}const v={top:0,left:0,behavior:l};if(window.scrollTo(v),u)for(const b of u){if(b==="window")continue;const x=typeof b=="function"?b():document.querySelector(b);x&&x.scrollTo(v)}}So=!1}function Yx(t,i){if(!eo&&!t.isServer||((t.options.scrollRestoration??!1)&&(t.isScrollRestoring=!0),t.isServer||t.isScrollRestorationSetup||!eo))return;t.isScrollRestorationSetup=!0,So=!1;const s=t.options.getScrollRestorationKey||Bd;window.history.scrollRestoration="manual";const u=d=>{if(So||!t.isScrollRestoring)return;let f="";if(d.target===document||d.target===window)f="window";else{const g=d.target.getAttribute("data-scroll-restoration-id");g?f=`[data-scroll-restoration-id="${g}"]`:f=Vx(d.target)}const m=s(t.state.location);eo.set(g=>{const h=g[m]||={},v=h[f]||={};if(f==="window")v.scrollX=window.scrollX||0,v.scrollY=window.scrollY||0;else if(f){const b=document.querySelector(f);b&&(v.scrollX=b.scrollLeft||0,v.scrollY=b.scrollTop||0)}return g})};typeof document<"u"&&document.addEventListener("scroll",Jx(u,100),!0),t.subscribe("onRendered",d=>{const f=s(d.toLocation);if(!t.resetNextScroll){t.resetNextScroll=!0;return}typeof t.options.scrollRestoration=="function"&&!t.options.scrollRestoration({location:t.latestLocation})||(Jb({storageKey:xo,key:f,behavior:t.options.scrollRestorationBehavior,shouldScrollRestoration:t.isScrollRestoring,scrollToTopSelectors:t.options.scrollToTopSelectors,location:t.history.location}),t.isScrollRestoring&&eo.set(m=>(m[f]||={},m)))})}function Xx(t){if(typeof document<"u"&&document.querySelector){const i=t.state.location.state.__hashScrollIntoViewOptions??!0;if(i&&t.state.location.hash!==""){const l=document.getElementById(t.state.location.hash);l&&l.scrollIntoView(i)}}}function Fx(t,i=String){const l=new URLSearchParams;for(const s in t){const u=t[s];u!==void 0&&l.set(s,i(u))}return l.toString()}function dd(t){return t?t==="false"?!1:t==="true"?!0:+t*0===0&&+t+""===t?+t:t:""}function Kx(t){const i=new URLSearchParams(t),l={};for(const[s,u]of i.entries()){const d=l[s];d==null?l[s]=dd(u):Array.isArray(d)?d.push(dd(u)):l[s]=[d,dd(u)]}return l}const Qx=Zx(JSON.parse),Wx=Ix(JSON.stringify,JSON.parse);function Zx(t){return i=>{i[0]==="?"&&(i=i.substring(1));const l=Kx(i);for(const s in l){const u=l[s];if(typeof u=="string")try{l[s]=t(u)}catch{}}return l}}function Ix(t,i){const l=typeof i=="function";function s(u){if(typeof u=="object"&&u!==null)try{return t(u)}catch{}else if(l&&typeof u=="string")try{return i(u),t(u)}catch{}return u}return u=>{const d=Fx(u,s);return d?`?${d}`:""}}const $n="__root__";function e1(t){if(t.statusCode=t.statusCode||t.code||307,!t.reloadDocument&&typeof t.href=="string")try{new URL(t.href),t.reloadDocument=!0}catch{}const i=new Headers(t.headers);t.href&&i.get("Location")===null&&i.set("Location",t.href);const l=new Response(null,{status:t.statusCode,headers:i});if(l.options=t,t.throw)throw l;return l}function mt(t){return t instanceof Response&&!!t.options}const oo=t=>{if(!t.rendered)return t.rendered=!0,t.onReady?.()},qo=(t,i)=>!!(t.preload&&!t.router.state.matches.some(l=>l.id===i)),$b=(t,i)=>{const l=t.router.routesById[i.routeId??""]??t.router.routeTree;!l.options.notFoundComponent&&t.router.options?.defaultNotFoundComponent&&(l.options.notFoundComponent=t.router.options.defaultNotFoundComponent),Kt(l.options.notFoundComponent);const s=t.matches.find(u=>u.routeId===l.id);Kt(s,"Could not find match for route: "+l.id),t.updateMatch(s.id,u=>({...u,status:"notFound",error:i,isFetching:!1})),i.routerCode==="BEFORE_LOAD"&&l.parentRoute&&(i.routeId=l.parentRoute.id,$b(t,i))},Aa=(t,i,l)=>{if(!(!mt(l)&&!st(l))){if(mt(l)&&l.redirectHandled&&!l.options.reloadDocument)throw l;if(i){i._nonReactive.beforeLoadPromise?.resolve(),i._nonReactive.loaderPromise?.resolve(),i._nonReactive.beforeLoadPromise=void 0,i._nonReactive.loaderPromise=void 0;const s=mt(l)?"redirected":"notFound";i._nonReactive.error=l,t.updateMatch(i.id,u=>({...u,status:s,isFetching:!1,error:l})),st(l)&&!l.routeId&&(l.routeId=i.routeId),i._nonReactive.loadPromise?.resolve()}throw mt(l)?(t.rendered=!0,l.options._fromLocation=t.location,l.redirectHandled=!0,l=t.router.resolveRedirect(l),l):($b(t,l),l)}},Vb=(t,i)=>{const l=t.router.getMatch(i);return!!(!t.router.isServer&&l._nonReactive.dehydrated||t.router.isServer&&l.ssr===!1)},il=(t,i,l,s)=>{const{id:u,routeId:d}=t.matches[i],f=t.router.looseRoutesById[d];if(l instanceof Promise)throw l;l.routerCode=s,t.firstBadMatchIndex??=i,Aa(t,t.router.getMatch(u),l);try{f.options.onError?.(l)}catch(m){l=m,Aa(t,t.router.getMatch(u),l)}t.updateMatch(u,m=>(m._nonReactive.beforeLoadPromise?.resolve(),m._nonReactive.beforeLoadPromise=void 0,m._nonReactive.loadPromise?.resolve(),{...m,error:l,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController}))},n1=(t,i,l,s)=>{const u=t.router.getMatch(i),d=t.matches[l-1]?.id,f=d?t.router.getMatch(d):void 0;if(t.router.isShell()){u.ssr=s.id===$n;return}if(f?.ssr===!1){u.ssr=!1;return}const m=w=>w===!0&&f?.ssr==="data-only"?"data-only":w,g=t.router.options.defaultSsr??!0;if(s.options.ssr===void 0){u.ssr=m(g);return}if(typeof s.options.ssr!="function"){u.ssr=m(s.options.ssr);return}const{search:h,params:v}=u,b={search:no(h,u.searchError),params:no(v,u.paramsError),location:t.location,matches:t.matches.map(w=>({index:w.index,pathname:w.pathname,fullPath:w.fullPath,staticData:w.staticData,id:w.id,routeId:w.routeId,search:no(w.search,w.searchError),params:no(w.params,w.paramsError),ssr:w.ssr}))},x=s.options.ssr(b);if(Ma(x))return x.then(w=>{u.ssr=m(w??g)});u.ssr=m(x??g)},Yb=(t,i,l,s)=>{if(s._nonReactive.pendingTimeout!==void 0)return;const u=l.options.pendingMs??t.router.options.defaultPendingMs;if(!!(t.onReady&&!t.router.isServer&&!qo(t,i)&&(l.options.loader||l.options.beforeLoad||Kb(l))&&typeof u=="number"&&u!==1/0&&(l.options.pendingComponent??t.router.options?.defaultPendingComponent))){const f=setTimeout(()=>{oo(t)},u);s._nonReactive.pendingTimeout=f}},t1=(t,i,l)=>{const s=t.router.getMatch(i);if(!s._nonReactive.beforeLoadPromise&&!s._nonReactive.loaderPromise)return;Yb(t,i,l,s);const u=()=>{const d=t.router.getMatch(i);d.preload&&(d.status==="redirected"||d.status==="notFound")&&Aa(t,d,d.error)};return s._nonReactive.beforeLoadPromise?s._nonReactive.beforeLoadPromise.then(u):u()},a1=(t,i,l,s)=>{const u=t.router.getMatch(i),d=u._nonReactive.loadPromise;u._nonReactive.loadPromise=ii(()=>{d?.resolve()});const{paramsError:f,searchError:m}=u;f&&il(t,l,f,"PARSE_PARAMS"),m&&il(t,l,m,"VALIDATE_SEARCH"),Yb(t,i,s,u);const g=new AbortController,h=t.matches[l-1]?.id,x={...(h?t.router.getMatch(h):void 0)?.context??t.router.options.context??void 0,...u.__routeContext};let w=!1;const A=()=>{w||(w=!0,t.updateMatch(i,D=>({...D,isFetching:"beforeLoad",fetchCount:D.fetchCount+1,abortController:g,context:x})))},_=()=>{u._nonReactive.beforeLoadPromise?.resolve(),u._nonReactive.beforeLoadPromise=void 0,t.updateMatch(i,D=>({...D,isFetching:!1}))};if(!s.options.beforeLoad){hl(()=>{A(),_()});return}u._nonReactive.beforeLoadPromise=ii();const{search:q,params:k,cause:H}=u,U=qo(t,i),P={search:q,abortController:g,params:k,preload:U,context:x,location:t.location,navigate:D=>t.router.navigate({...D,_fromLocation:t.location}),buildLocation:t.router.buildLocation,cause:U?"preload":H,matches:t.matches,...t.router.options.additionalContext},B=D=>{if(D===void 0){hl(()=>{A(),_()});return}(mt(D)||st(D))&&(A(),il(t,l,D,"BEFORE_LOAD")),hl(()=>{A(),t.updateMatch(i,G=>({...G,__beforeLoadContext:D,context:{...G.context,...D}})),_()})};let E;try{if(E=s.options.beforeLoad(P),Ma(E))return A(),E.catch(D=>{il(t,l,D,"BEFORE_LOAD")}).then(B)}catch(D){A(),il(t,l,D,"BEFORE_LOAD")}B(E)},r1=(t,i)=>{const{id:l,routeId:s}=t.matches[i],u=t.router.looseRoutesById[s],d=()=>{if(t.router.isServer){const g=n1(t,l,i,u);if(Ma(g))return g.then(m)}return m()},f=()=>a1(t,l,i,u),m=()=>{if(Vb(t,l))return;const g=t1(t,l,u);return Ma(g)?g.then(f):f()};return d()},gl=(t,i,l)=>{const s=t.router.getMatch(i);if(!s||!l.options.head&&!l.options.scripts&&!l.options.headers)return;const u={matches:t.matches,match:s,params:s.params,loaderData:s.loaderData};return Promise.all([l.options.head?.(u),l.options.scripts?.(u),l.options.headers?.(u)]).then(([d,f,m])=>{const g=d?.meta,h=d?.links,v=d?.scripts,b=d?.styles;return{meta:g,links:h,headScripts:v,headers:m,scripts:f,styles:b}})},Xb=(t,i,l,s)=>{const u=t.matchPromises[l-1],{params:d,loaderDeps:f,abortController:m,cause:g}=t.router.getMatch(i);let h=t.router.options.context??{};for(let b=0;b<=l;b++){const x=t.matches[b];if(!x)continue;const w=t.router.getMatch(x.id);w&&(h={...h,...w.__routeContext??{},...w.__beforeLoadContext??{}})}const v=qo(t,i);return{params:d,deps:f,preload:!!v,parentMatchPromise:u,abortController:m,context:h,location:t.location,navigate:b=>t.router.navigate({...b,_fromLocation:t.location}),cause:v?"preload":g,route:s,...t.router.options.additionalContext}},Og=async(t,i,l,s)=>{try{const u=t.router.getMatch(i);try{(!t.router.isServer||u.ssr===!0)&&Fb(s);const d=s.options.loader?.(Xb(t,i,l,s)),f=s.options.loader&&Ma(d);if(!!(f||s._lazyPromise||s._componentsPromise||s.options.head||s.options.scripts||s.options.headers||u._nonReactive.minPendingPromise)&&t.updateMatch(i,b=>({...b,isFetching:"loader"})),s.options.loader){const b=f?await d:d;Aa(t,t.router.getMatch(i),b),b!==void 0&&t.updateMatch(i,x=>({...x,loaderData:b}))}s._lazyPromise&&await s._lazyPromise;const g=gl(t,i,s),h=g?await g:void 0,v=u._nonReactive.minPendingPromise;v&&await v,s._componentsPromise&&await s._componentsPromise,t.updateMatch(i,b=>({...b,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),...h}))}catch(d){let f=d;const m=u._nonReactive.minPendingPromise;m&&await m,st(d)&&await s.options.notFoundComponent?.preload?.(),Aa(t,t.router.getMatch(i),d);try{s.options.onError?.(d)}catch(v){f=v,Aa(t,t.router.getMatch(i),v)}const g=gl(t,i,s),h=g?await g:void 0;t.updateMatch(i,v=>({...v,error:f,status:"error",isFetching:!1,...h}))}}catch(u){const d=t.router.getMatch(i);if(d){const f=gl(t,i,s);if(f){const m=await f;t.updateMatch(i,g=>({...g,...m}))}d._nonReactive.loaderPromise=void 0}Aa(t,d,u)}},i1=async(t,i)=>{const{id:l,routeId:s}=t.matches[i];let u=!1,d=!1;const f=t.router.looseRoutesById[s];if(Vb(t,l)){if(t.router.isServer){const h=gl(t,l,f);if(h){const v=await h;t.updateMatch(l,b=>({...b,...v}))}return t.router.getMatch(l)}}else{const h=t.router.getMatch(l);if(h._nonReactive.loaderPromise){if(h.status==="success"&&!t.sync&&!h.preload)return h;await h._nonReactive.loaderPromise;const v=t.router.getMatch(l),b=v._nonReactive.error||v.error;b&&Aa(t,v,b)}else{const v=Date.now()-h.updatedAt,b=qo(t,l),x=b?f.options.preloadStaleTime??t.router.options.defaultPreloadStaleTime??3e4:f.options.staleTime??t.router.options.defaultStaleTime??0,w=f.options.shouldReload,A=typeof w=="function"?w(Xb(t,l,i,f)):w,_=!!b&&!t.router.state.matches.some(U=>U.id===l),q=t.router.getMatch(l);q._nonReactive.loaderPromise=ii(),_!==q.preload&&t.updateMatch(l,U=>({...U,preload:_}));const{status:k,invalid:H}=q;if(u=k==="success"&&(H||(A??v>x)),!(b&&f.options.preload===!1))if(u&&!t.sync)d=!0,(async()=>{try{await Og(t,l,i,f);const U=t.router.getMatch(l);U._nonReactive.loaderPromise?.resolve(),U._nonReactive.loadPromise?.resolve(),U._nonReactive.loaderPromise=void 0}catch(U){mt(U)&&await t.router.navigate(U.options)}})();else if(k!=="success"||u&&t.sync)await Og(t,l,i,f);else{const U=gl(t,l,f);if(U){const P=await U;t.updateMatch(l,B=>({...B,...P}))}}}}const m=t.router.getMatch(l);d||(m._nonReactive.loaderPromise?.resolve(),m._nonReactive.loadPromise?.resolve()),clearTimeout(m._nonReactive.pendingTimeout),m._nonReactive.pendingTimeout=void 0,d||(m._nonReactive.loaderPromise=void 0),m._nonReactive.dehydrated=void 0;const g=d?m.isFetching:!1;return g!==m.isFetching||m.invalid!==!1?(t.updateMatch(l,h=>({...h,isFetching:g,invalid:!1})),t.router.getMatch(l)):m};async function Dg(t){const i=Object.assign(t,{matchPromises:[]});!i.router.isServer&&i.router.state.matches.some(l=>l._forcePending)&&oo(i);try{for(let u=0;u<i.matches.length;u++){const d=r1(i,u);Ma(d)&&await d}const l=i.firstBadMatchIndex??i.matches.length;for(let u=0;u<l;u++)i.matchPromises.push(i1(i,u));await Promise.all(i.matchPromises);const s=oo(i);Ma(s)&&await s}catch(l){if(st(l)&&!i.preload){const s=oo(i);throw Ma(s)&&await s,l}if(mt(l))throw l}return i.matches}async function Fb(t){if(!t._lazyLoaded&&t._lazyPromise===void 0&&(t.lazyFn?t._lazyPromise=t.lazyFn().then(i=>{const{id:l,...s}=i.options;Object.assign(t.options,s),t._lazyLoaded=!0,t._lazyPromise=void 0}):t._lazyLoaded=!0),!t._componentsLoaded&&t._componentsPromise===void 0){const i=()=>{const l=[];for(const s of Qb){const u=t.options[s]?.preload;u&&l.push(u())}if(l.length)return Promise.all(l).then(()=>{t._componentsLoaded=!0,t._componentsPromise=void 0});t._componentsLoaded=!0,t._componentsPromise=void 0};t._componentsPromise=t._lazyPromise?t._lazyPromise.then(i):i()}return t._componentsPromise}function no(t,i){return i?{status:"error",error:i}:{status:"success",value:t}}function Kb(t){for(const i of Qb)if(t.options[i]?.preload)return!0;return!1}const Qb=["component","errorComponent","pendingComponent","notFoundComponent"];function l1(t){return{input:({url:i})=>{for(const l of t)i=Wb(l,i);return i},output:({url:i})=>{for(let l=t.length-1;l>=0;l--)i=Zb(t[l],i);return i}}}function s1(t){const i=so(t.basepath),l=`/${i}`,s=`${l}/`,u=t.caseSensitive?l:l.toLowerCase(),d=t.caseSensitive?s:s.toLowerCase();return{input:({url:f})=>{const m=t.caseSensitive?f.pathname:f.pathname.toLowerCase();return m===u?f.pathname="/":m.startsWith(d)&&(f.pathname=f.pathname.slice(l.length)),f},output:({url:f})=>(f.pathname=lo(["/",i,f.pathname]),f)}}function Wb(t,i){const l=t?.input?.({url:i});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return i}function Zb(t,i){const l=t?.output?.({url:i});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return i}function er(t){const i=t.resolvedLocation,l=t.location,s=i?.pathname!==l.pathname,u=i?.href!==l.href,d=i?.hash!==l.hash;return{fromLocation:i,toLocation:l,pathChanged:s,hrefChanged:u,hashChanged:d}}class o1{constructor(i){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=l=>l(),this.update=l=>{l.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");const s=this.options,u=this.basepath??s?.basepath??"/",d=this.basepath===void 0,f=s?.rewrite;this.options={...s,...l},this.isServer=this.options.isServer??typeof document>"u",this.pathParamsDecodeCharMap=this.options.pathParamsAllowedCharacters?new Map(this.options.pathParamsAllowedCharacters.map(x=>[encodeURIComponent(x),x])):void 0,(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.isServer||(this.history=Hb())),this.origin=this.options.origin,this.origin||(!this.isServer&&window?.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),!this.__store&&this.latestLocation&&(this.__store=new vx(c1(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(x=>!["redirected"].includes(x.status))}}}),Yx(this));let m=!1;const g=this.options.basepath??"/",h=this.options.rewrite;if(d||u!==g||f!==h){this.basepath=g;const x=[];so(g)!==""&&x.push(s1({basepath:g})),h&&x.push(h),this.rewrite=x.length===0?void 0:x.length===1?x[0]:l1(x),this.history&&this.updateLatestLocation(),m=!0}m&&this.__store&&(this.__store.state={...this.state,location:this.latestLocation}),typeof window<"u"&&"CSS"in window&&typeof window.CSS?.supports=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const{routesById:l,routesByPath:s,processedTree:u}=Dx(this.routeTree,this.options.caseSensitive,(f,m)=>{f.init({originalIndex:m})});this.options.routeMasks&&Rx(this.options.routeMasks,u),this.routesById=l,this.routesByPath=s,this.processedTree=u;const d=this.options.notFoundRoute;d&&(d.init({originalIndex:99999999999}),this.routesById[d.id]=d)},this.subscribe=(l,s)=>{const u={eventType:l,fn:s};return this.subscribers.add(u),()=>{this.subscribers.delete(u)}},this.emit=l=>{this.subscribers.forEach(s=>{s.eventType===l.type&&s.fn(l)})},this.parseLocation=(l,s)=>{const u=({href:g,state:h})=>{const v=new URL(g,this.origin),b=Wb(this.rewrite,v),x=this.options.parseSearch(b.search),w=this.options.stringifySearch(x);b.search=w;const A=b.href.replace(b.origin,""),{pathname:_,hash:q}=b;return{href:A,publicHref:g,url:b.href,pathname:Lg(_),searchStr:w,search:it(s?.search,x),hash:q.split("#").reverse()[0]??"",state:it(s?.state,h)}},d=u(l),{__tempLocation:f,__tempKey:m}=d.state;if(f&&(!m||m===this.tempLocationKey)){const g=u(f);return g.state.key=d.state.key,g.state.__TSR_key=d.state.__TSR_key,delete g.state.__tempLocation,{...g,maskedLocation:d}}return d},this.resolvePathCache=yo(1e3),this.resolvePathWithBase=(l,s)=>Gx({base:l,to:ef(s),trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(l,s,u)=>typeof l=="string"?this.matchRoutesInternal({pathname:l,search:s},u):this.matchRoutesInternal(l,s),this.getMatchedRoutes=l=>d1({pathname:l,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=l=>{const s=this.getMatch(l);s&&(s.abortController.abort(),clearTimeout(s._nonReactive.pendingTimeout),s._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{const l=this.state.matches.filter(d=>d.status==="pending"),s=this.state.matches.filter(d=>d.isFetching==="loader");new Set([...this.state.pendingMatches??[],...l,...s]).forEach(d=>{this.cancelMatch(d.id)})},this.buildLocation=l=>{const s=(d={})=>{const f=d._fromLocation||this.pendingBuiltLocation||this.latestLocation,m=this.matchRoutes(f,{_buildLocation:!0}),g=go(m);d.from;const h=d.unsafeRelative==="path"?f.pathname:d.from??g.fullPath,v=this.resolvePathWithBase(h,"."),b=g.search,x={...g.params},w=d.to?this.resolvePathWithBase(v,`${d.to}`):this.resolvePathWithBase(v,"."),A=d.params===!1||d.params===null?{}:(d.params??!0)===!0?x:Object.assign(x,_a(d.params,x)),_=cd({path:w,params:A}).interpolatedPath,q=this.matchRoutes(_,void 0,{_buildLocation:!0}).map(ee=>this.looseRoutesById[ee.routeId]);if(Object.keys(A).length>0)for(const ee of q){const I=ee.options.params?.stringify??ee.options.stringifyParams;I&&Object.assign(A,I(A))}const k=l.leaveParams?w:Lg(cd({path:w,params:A,decodeCharMap:this.pathParamsDecodeCharMap}).interpolatedPath);let H=b;if(l._includeValidateSearch&&this.options.search?.strict){const ee={};q.forEach(I=>{if(I.options.validateSearch)try{Object.assign(ee,jd(I.options.validateSearch,{...ee,...H}))}catch{}}),H=ee}H=f1({search:H,dest:d,destRoutes:q,_includeValidateSearch:l._includeValidateSearch}),H=it(b,H);const U=this.options.stringifySearch(H),P=d.hash===!0?f.hash:d.hash?_a(d.hash,f.hash):void 0,B=P?`#${P}`:"";let E=d.state===!0?f.state:d.state?_a(d.state,f.state):{};E=it(f.state,E);const D=`${k}${U}${B}`,G=new URL(D,this.origin),K=Zb(this.rewrite,G);return{publicHref:K.pathname+K.search+K.hash,href:D,url:K.href,pathname:k,search:H,searchStr:U,state:E,hash:P??"",unmaskOnReload:d.unmaskOnReload}},u=(d={},f)=>{const m=s(d);let g=f?s(f):void 0;if(!g){const h={};if(this.options.routeMasks){const v=Ex(m.pathname,this.processedTree);if(v){Object.assign(h,v.params);const{from:b,params:x,...w}=v.route,A=x===!1||x===null?{}:(x??!0)===!0?h:Object.assign(h,_a(x,h));f={from:l.from,...w,params:A},g=s(f)}}}return g&&(m.maskedLocation=g),m};return l.mask?u(l,{from:l.from,...l.mask}):u(l)},this.commitLocation=({viewTransition:l,ignoreBlocker:s,...u})=>{const d=()=>{const g=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];g.forEach(v=>{u.state[v]=this.latestLocation.state[v]});const h=Za(u.state,this.latestLocation.state);return g.forEach(v=>{delete u.state[v]}),h},f=Ia(this.latestLocation.href)===Ia(u.href),m=this.commitLocationPromise;if(this.commitLocationPromise=ii(()=>{m?.resolve()}),f&&d())this.load();else{let{maskedLocation:g,hashScrollIntoView:h,...v}=u;g&&(v={...g,state:{...g.state,__tempKey:void 0,__tempLocation:{...v,search:v.searchStr,state:{...v.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(v.unmaskOnReload??this.options.unmaskOnReload??!1)&&(v.state.__tempKey=this.tempLocationKey)),v.state.__hashScrollIntoViewOptions=h??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=l,this.history[u.replace?"replace":"push"](v.publicHref,v.state,{ignoreBlocker:s})}return this.resetNextScroll=u.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:l,resetScroll:s,hashScrollIntoView:u,viewTransition:d,ignoreBlocker:f,href:m,...g}={})=>{if(m){const b=this.history.location.state.__TSR_index,x=vl(m,{__TSR_index:l?b:b+1});g.to=x.pathname,g.search=this.options.parseSearch(x.search),g.hash=x.hash.slice(1)}const h=this.buildLocation({...g,_includeValidateSearch:!0});this.pendingBuiltLocation=h;const v=this.commitLocation({...h,viewTransition:d,replace:l,resetScroll:s,hashScrollIntoView:u,ignoreBlocker:f});return Promise.resolve().then(()=>{this.pendingBuiltLocation===h&&(this.pendingBuiltLocation=void 0)}),v},this.navigate=async({to:l,reloadDocument:s,href:u,...d})=>{if(!s&&u)try{new URL(`${u}`),s=!0}catch{}if(s){if(u||(u=this.buildLocation({to:l,...d}).url),!d.ignoreBlocker){const m=this.history.getBlockers?.()??[];for(const g of m)if(g?.blockerFn&&await g.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return d.replace?window.location.replace(u):window.location.href=u,Promise.resolve()}return this.buildAndCommitLocation({...d,href:u,to:l,_isNavigate:!0})},this.beforeLoad=()=>{if(this.cancelMatches(),this.updateLatestLocation(),this.isServer){const s=this.buildLocation({to:this.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0}),u=d=>{try{return encodeURI(decodeURI(d))}catch{return d}};if(so(u(this.latestLocation.href))!==so(u(s.href))){let d=s.url;throw this.origin&&d.startsWith(this.origin)&&(d=d.replace(this.origin,"")||"/"),e1({href:d})}}const l=this.matchRoutes(this.latestLocation);this.__store.setState(s=>({...s,status:"pending",statusCode:200,isLoading:!0,location:this.latestLocation,pendingMatches:l,cachedMatches:s.cachedMatches.filter(u=>!l.some(d=>d.id===u.id))}))},this.load=async l=>{let s,u,d;for(d=new Promise(m=>{this.startTransition(async()=>{try{this.beforeLoad();const g=this.latestLocation,h=this.state.resolvedLocation;this.state.redirect||this.emit({type:"onBeforeNavigate",...er({resolvedLocation:h,location:g})}),this.emit({type:"onBeforeLoad",...er({resolvedLocation:h,location:g})}),await Dg({router:this,sync:l?.sync,matches:this.state.pendingMatches,location:g,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let v=[],b=[],x=[];hl(()=>{this.__store.setState(w=>{const A=w.matches,_=w.pendingMatches||w.matches;return v=A.filter(q=>!_.some(k=>k.id===q.id)),b=_.filter(q=>!A.some(k=>k.id===q.id)),x=_.filter(q=>A.some(k=>k.id===q.id)),{...w,isLoading:!1,loadedAt:Date.now(),matches:_,pendingMatches:void 0,cachedMatches:[...w.cachedMatches,...v.filter(q=>q.status!=="error"&&q.status!=="notFound")]}}),this.clearExpiredCache()}),[[v,"onLeave"],[b,"onEnter"],[x,"onStay"]].forEach(([w,A])=>{w.forEach(_=>{this.looseRoutesById[_.routeId].options[A]?.(_)})})})})}})}catch(g){mt(g)?(s=g,this.isServer||this.navigate({...s.options,replace:!0,ignoreBlocker:!0})):st(g)&&(u=g),this.__store.setState(h=>({...h,statusCode:s?s.status:u?404:h.matches.some(v=>v.status==="error")?500:200,redirect:s}))}this.latestLoadPromise===d&&(this.commitLocationPromise?.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),m()})}),this.latestLoadPromise=d,await d;this.latestLoadPromise&&d!==this.latestLoadPromise;)await this.latestLoadPromise;let f;this.hasNotFoundMatch()?f=404:this.__store.state.matches.some(m=>m.status==="error")&&(f=500),f!==void 0&&this.__store.setState(m=>({...m,statusCode:f}))},this.startViewTransition=l=>{const s=this.shouldViewTransition??this.options.defaultViewTransition;if(delete this.shouldViewTransition,s&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let u;if(typeof s=="object"&&this.isViewTransitionTypesSupported){const d=this.latestLocation,f=this.state.resolvedLocation,m=typeof s.types=="function"?s.types(er({resolvedLocation:f,location:d})):s.types;if(m===!1){l();return}u={update:l,types:m}}else u=l;document.startViewTransition(u)}else l()},this.updateMatch=(l,s)=>{this.startTransition(()=>{const u=this.state.pendingMatches?.some(d=>d.id===l)?"pendingMatches":this.state.matches.some(d=>d.id===l)?"matches":this.state.cachedMatches.some(d=>d.id===l)?"cachedMatches":"";u&&this.__store.setState(d=>({...d,[u]:d[u]?.map(f=>f.id===l?s(f):f)}))})},this.getMatch=l=>{const s=u=>u.id===l;return this.state.cachedMatches.find(s)??this.state.pendingMatches?.find(s)??this.state.matches.find(s)},this.invalidate=l=>{const s=u=>l?.filter?.(u)??!0?{...u,invalid:!0,...l?.forcePending||u.status==="error"||u.status==="notFound"?{status:"pending",error:void 0}:void 0}:u;return this.__store.setState(u=>({...u,matches:u.matches.map(s),cachedMatches:u.cachedMatches.map(s),pendingMatches:u.pendingMatches?.map(s)})),this.shouldViewTransition=!1,this.load({sync:l?.sync})},this.resolveRedirect=l=>{if(!l.options.href){const s=this.buildLocation(l.options);let u=s.url;this.origin&&u.startsWith(this.origin)&&(u=u.replace(this.origin,"")||"/"),l.options.href=s.href,l.headers.set("Location",u)}return l.headers.get("Location")||l.headers.set("Location",l.options.href),l},this.clearCache=l=>{const s=l?.filter;s!==void 0?this.__store.setState(u=>({...u,cachedMatches:u.cachedMatches.filter(d=>!s(d))})):this.__store.setState(u=>({...u,cachedMatches:[]}))},this.clearExpiredCache=()=>{const l=s=>{const u=this.looseRoutesById[s.routeId];if(!u.options.loader)return!0;const d=(s.preload?u.options.preloadGcTime??this.options.defaultPreloadGcTime:u.options.gcTime??this.options.defaultGcTime)??300*1e3;return s.status==="error"?!0:Date.now()-s.updatedAt>=d};this.clearCache({filter:l})},this.loadRouteChunk=Fb,this.preloadRoute=async l=>{const s=this.buildLocation(l);let u=this.matchRoutes(s,{throwOnError:!0,preload:!0,dest:l});const d=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(m=>m.id)),f=new Set([...d,...this.state.cachedMatches.map(m=>m.id)]);hl(()=>{u.forEach(m=>{f.has(m.id)||this.__store.setState(g=>({...g,cachedMatches:[...g.cachedMatches,m]}))})});try{return u=await Dg({router:this,matches:u,location:s,preload:!0,updateMatch:(m,g)=>{d.has(m)?u=u.map(h=>h.id===m?g(h):h):this.updateMatch(m,g)}}),u}catch(m){if(mt(m))return m.options.reloadDocument?void 0:await this.preloadRoute({...m.options,_fromLocation:s});st(m)||console.error(m);return}},this.matchRoute=(l,s)=>{const u={...l,to:l.to?this.resolvePathWithBase(l.from||"",l.to):void 0,params:l.params||{},leaveParams:!0},d=this.buildLocation(u);if(s?.pending&&this.state.status!=="pending")return!1;const m=(s?.pending===void 0?!this.state.isLoading:s.pending)?this.latestLocation:this.state.resolvedLocation||this.state.location,g=kx(d.pathname,s?.caseSensitive??!1,s?.fuzzy??!1,m.pathname,this.processedTree);return!g||l.params&&!Za(g.params,l.params,{partial:!0})?!1:s?.includeSearch??!0?Za(m.search,d.search,{partial:!0})?g.params:!1:g.params},this.hasNotFoundMatch=()=>this.__store.state.matches.some(l=>l.status==="notFound"||l.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...i,caseSensitive:i.caseSensitive??!1,notFoundMode:i.notFoundMode??"fuzzy",stringifySearch:i.stringifySearch??Wx,parseSearch:i.parseSearch??Qx}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}matchRoutesInternal(i,l){const s=this.getMatchedRoutes(i.pathname),{foundRoute:u,routeParams:d}=s;let{matchedRoutes:f}=s,m=!1;(u?u.path!=="/"&&d["**"]:Ia(i.pathname))&&(this.options.notFoundRoute?f=[...f,this.options.notFoundRoute]:m=!0);const g=(()=>{if(m){if(this.options.notFoundMode!=="root")for(let b=f.length-1;b>=0;b--){const x=f[b];if(x.children)return x.id}return $n}})(),h=[],v=b=>b?.id?b.context??this.options.context??void 0:this.options.context??void 0;return f.forEach((b,x)=>{const w=h[x-1],[A,_,q]=(()=>{const te=w?.search??i.search,W=w?._strictSearch??void 0;try{const ie=jd(b.options.validateSearch,{...te})??void 0;return[{...te,...ie},{...W,...ie},void 0]}catch(ie){let z=ie;if(ie instanceof wo||(z=new wo(ie.message,{cause:ie})),l?.throwOnError)throw z;return[te,{},z]}})(),k=b.options.loaderDeps?.({search:A})??"",H=k?JSON.stringify(k):"",{interpolatedPath:U,usedParams:P}=cd({path:b.fullPath,params:d,decodeCharMap:this.pathParamsDecodeCharMap}),B=b.id+U+H,E=this.getMatch(B),D=this.state.matches.find(te=>te.routeId===b.id),G=E?._strictParams??P;let K;if(!E){const te=b.options.params?.parse??b.options.parseParams;if(te)try{Object.assign(G,te(G))}catch(W){if(st(W)||mt(W)?K=W:K=new u1(W.message,{cause:W}),l?.throwOnError)throw K}}Object.assign(d,G);const ee=D?"stay":"enter";let I;if(E)I={...E,cause:ee,params:D?it(D.params,d):d,_strictParams:G,search:it(D?D.search:E.search,A),_strictSearch:_};else{const te=b.options.loader||b.options.beforeLoad||b.lazyFn||Kb(b)?"pending":"success";I={id:B,ssr:this.isServer?void 0:b.options.ssr,index:x,routeId:b.id,params:D?it(D.params,d):d,_strictParams:G,pathname:U,updatedAt:Date.now(),search:D?it(D.search,A):A,_strictSearch:_,searchError:void 0,status:te,isFetching:!1,error:void 0,paramsError:K,__routeContext:void 0,_nonReactive:{loadPromise:ii()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:ee,loaderDeps:D?it(D.loaderDeps,k):k,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:b.options.staticData||{},fullPath:b.fullPath}}l?.preload||(I.globalNotFound=g===b.id),I.searchError=q;const S=v(w);I.context={...S,...I.__routeContext,...I.__beforeLoadContext},h.push(I)}),h.forEach((b,x)=>{const w=this.looseRoutesById[b.routeId];if(!this.getMatch(b.id)&&l?._buildLocation!==!0){const _=h[x-1],q=v(_);if(w.options.context){const k={deps:b.loaderDeps,params:b.params,context:q??{},location:i,navigate:H=>this.navigate({...H,_fromLocation:i}),buildLocation:this.buildLocation,cause:b.cause,abortController:b.abortController,preload:!!b.preload,matches:h};b.__routeContext=w.options.context(k)??void 0}b.context={...q,...b.__routeContext,...b.__beforeLoadContext}}}),h}}class wo extends Error{}class u1 extends Error{}function c1(t){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:t,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function jd(t,i){if(t==null)return{};if("~standard"in t){const l=t["~standard"].validate(i);if(l instanceof Promise)throw new wo("Async validation not supported");if(l.issues)throw new wo(JSON.stringify(l.issues,void 0,2),{cause:l});return l.value}return"parse"in t?t.parse(i):typeof t=="function"?t(i):{}}function d1({pathname:t,routesById:i,processedTree:l}){const s={},u=Ia(t);let d;const f=Lx(u,l,!0);return f&&(d=f.route,Object.assign(s,f.params)),{matchedRoutes:f?.branch||[i[$n]],routeParams:s,foundRoute:d}}function f1({search:t,dest:i,destRoutes:l,_includeValidateSearch:s}){const u=l.reduce((m,g)=>{const h=[];if("search"in g.options)g.options.search?.middlewares&&h.push(...g.options.search.middlewares);else if(g.options.preSearchFilters||g.options.postSearchFilters){const v=({search:b,next:x})=>{let w=b;"preSearchFilters"in g.options&&g.options.preSearchFilters&&(w=g.options.preSearchFilters.reduce((_,q)=>q(_),b));const A=x(w);return"postSearchFilters"in g.options&&g.options.postSearchFilters?g.options.postSearchFilters.reduce((_,q)=>q(_),A):A};h.push(v)}if(s&&g.options.validateSearch){const v=({search:b,next:x})=>{const w=x(b);try{return{...w,...jd(g.options.validateSearch,w)??void 0}}catch{return w}};h.push(v)}return m.concat(h)},[])??[],d=({search:m})=>i.search?i.search===!0?m:_a(i.search,m):{};u.push(d);const f=(m,g)=>{if(m>=u.length)return g;const h=u[m];return h({search:g,next:b=>f(m+1,b)})};return f(0,t)}const m1="Error preloading route! ☝️";class Ib{constructor(i){if(this.init=l=>{this.originalIndex=l.originalIndex;const s=this.options,u=!s?.path&&!s?.id;this.parentRoute=this.options.getParentRoute?.(),u?this._path=$n:this.parentRoute||Kt(!1);let d=u?$n:s?.path;d&&d!=="/"&&(d=Pb(d));const f=s?.id||d;let m=u?$n:lo([this.parentRoute.id===$n?"":this.parentRoute.id,f]);d===$n&&(d="/"),m!==$n&&(m=lo(["/",m]));const g=m===$n?"/":lo([this.parentRoute.fullPath,d]);this._path=d,this._id=m,this._fullPath=g,this._to=g},this.addChildren=l=>this._addFileChildren(l),this._addFileChildren=l=>(Array.isArray(l)&&(this.children=l),typeof l=="object"&&l!==null&&(this.children=Object.values(l)),this),this._addFileTypes=()=>this,this.updateLoader=l=>(Object.assign(this.options,l),this),this.update=l=>(Object.assign(this.options,l),this),this.lazy=l=>(this.lazyFn=l,this),this.options=i||{},this.isRoot=!i?.getParentRoute,i?.id&&i?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}}class p1 extends Ib{constructor(i){super(i)}}var fd={exports:{}},fe={};var zg;function h1(){if(zg)return fe;zg=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,q={};function k(T,J,ne){this.props=T,this.context=J,this.refs=q,this.updater=ne||A}k.prototype.isReactComponent={},k.prototype.setState=function(T,J){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,J,"setState")},k.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function H(){}H.prototype=k.prototype;function U(T,J,ne){this.props=T,this.context=J,this.refs=q,this.updater=ne||A}var P=U.prototype=new H;P.constructor=U,_(P,k.prototype),P.isPureReactComponent=!0;var B=Array.isArray;function E(){}var D={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function K(T,J,ne){var ae=ne.ref;return{$$typeof:t,type:T,key:J,ref:ae!==void 0?ae:null,props:ne}}function ee(T,J){return K(T.type,J,T.props)}function I(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function S(T){var J={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ne){return J[ne]})}var te=/\/+/g;function W(T,J){return typeof T=="object"&&T!==null&&T.key!=null?S(""+T.key):J.toString(36)}function ie(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(E,E):(T.status="pending",T.then(function(J){T.status==="pending"&&(T.status="fulfilled",T.value=J)},function(J){T.status==="pending"&&(T.status="rejected",T.reason=J)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function z(T,J,ne,ae,ue){var de=typeof T;(de==="undefined"||de==="boolean")&&(T=null);var me=!1;if(T===null)me=!0;else switch(de){case"bigint":case"string":case"number":me=!0;break;case"object":switch(T.$$typeof){case t:case i:me=!0;break;case v:return me=T._init,z(me(T._payload),J,ne,ae,ue)}}if(me)return ue=ue(T),me=ae===""?"."+W(T,0):ae,B(ue)?(ne="",me!=null&&(ne=me.replace(te,"$&/")+"/"),z(ue,J,ne,"",function(ut){return ut})):ue!=null&&(I(ue)&&(ue=ee(ue,ne+(ue.key==null||T&&T.key===ue.key?"":(""+ue.key).replace(te,"$&/")+"/")+me)),J.push(ue)),1;me=0;var Ye=ae===""?".":ae+":";if(B(T))for(var Me=0;Me<T.length;Me++)ae=T[Me],de=Ye+W(ae,Me),me+=z(ae,J,ne,de,ue);else if(Me=w(T),typeof Me=="function")for(T=Me.call(T),Me=0;!(ae=T.next()).done;)ae=ae.value,de=Ye+W(ae,Me++),me+=z(ae,J,ne,de,ue);else if(de==="object"){if(typeof T.then=="function")return z(ie(T),J,ne,ae,ue);throw J=String(T),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return me}function Z(T,J,ne){if(T==null)return T;var ae=[],ue=0;return z(T,ae,"","",function(de){return J.call(ne,de,ue++)}),ae}function se(T){if(T._status===-1){var J=T._result;J=J(),J.then(function(ne){(T._status===0||T._status===-1)&&(T._status=1,T._result=ne)},function(ne){(T._status===0||T._status===-1)&&(T._status=2,T._result=ne)}),T._status===-1&&(T._status=0,T._result=J)}if(T._status===1)return T._result.default;throw T._result}var we=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Ce={map:Z,forEach:function(T,J,ne){Z(T,function(){J.apply(this,arguments)},ne)},count:function(T){var J=0;return Z(T,function(){J++}),J},toArray:function(T){return Z(T,function(J){return J})||[]},only:function(T){if(!I(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return fe.Activity=b,fe.Children=Ce,fe.Component=k,fe.Fragment=l,fe.Profiler=u,fe.PureComponent=U,fe.StrictMode=s,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,fe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return D.H.useMemoCache(T)}},fe.cache=function(T){return function(){return T.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(T,J,ne){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=_({},T.props),ue=T.key;if(J!=null)for(de in J.key!==void 0&&(ue=""+J.key),J)!G.call(J,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&J.ref===void 0||(ae[de]=J[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var me=Array(de),Ye=0;Ye<de;Ye++)me[Ye]=arguments[Ye+2];ae.children=me}return K(T.type,ue,ae)},fe.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},fe.createElement=function(T,J,ne){var ae,ue={},de=null;if(J!=null)for(ae in J.key!==void 0&&(de=""+J.key),J)G.call(J,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ue[ae]=J[ae]);var me=arguments.length-2;if(me===1)ue.children=ne;else if(1<me){for(var Ye=Array(me),Me=0;Me<me;Me++)Ye[Me]=arguments[Me+2];ue.children=Ye}if(T&&T.defaultProps)for(ae in me=T.defaultProps,me)ue[ae]===void 0&&(ue[ae]=me[ae]);return K(T,de,ue)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(T){return{$$typeof:m,render:T}},fe.isValidElement=I,fe.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:se}},fe.memo=function(T,J){return{$$typeof:h,type:T,compare:J===void 0?null:J}},fe.startTransition=function(T){var J=D.T,ne={};D.T=ne;try{var ae=T(),ue=D.S;ue!==null&&ue(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(E,we)}catch(de){we(de)}finally{J!==null&&ne.types!==null&&(J.types=ne.types),D.T=J}},fe.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},fe.use=function(T){return D.H.use(T)},fe.useActionState=function(T,J,ne){return D.H.useActionState(T,J,ne)},fe.useCallback=function(T,J){return D.H.useCallback(T,J)},fe.useContext=function(T){return D.H.useContext(T)},fe.useDebugValue=function(){},fe.useDeferredValue=function(T,J){return D.H.useDeferredValue(T,J)},fe.useEffect=function(T,J){return D.H.useEffect(T,J)},fe.useEffectEvent=function(T){return D.H.useEffectEvent(T)},fe.useId=function(){return D.H.useId()},fe.useImperativeHandle=function(T,J,ne){return D.H.useImperativeHandle(T,J,ne)},fe.useInsertionEffect=function(T,J){return D.H.useInsertionEffect(T,J)},fe.useLayoutEffect=function(T,J){return D.H.useLayoutEffect(T,J)},fe.useMemo=function(T,J){return D.H.useMemo(T,J)},fe.useOptimistic=function(T,J){return D.H.useOptimistic(T,J)},fe.useReducer=function(T,J,ne){return D.H.useReducer(T,J,ne)},fe.useRef=function(T){return D.H.useRef(T)},fe.useState=function(T){return D.H.useState(T)},fe.useSyncExternalStore=function(T,J,ne){return D.H.useSyncExternalStore(T,J,ne)},fe.useTransition=function(){return D.H.useTransition()},fe.version="19.2.1",fe}var Bg;function Ml(){return Bg||(Bg=1,fd.exports=h1()),fd.exports}var F=Ml();const si=Nb(F),Nd=fx({__proto__:null,default:si},[F]);function nf(t){const i=t.errorComponent??Ro;return Q.jsx(g1,{getResetKey:t.getResetKey,onCatch:t.onCatch,children:({error:l,reset:s})=>l?F.createElement(i,{error:l,reset:s}):t.children})}class g1 extends F.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(i){return{resetKey:i.getResetKey()}}static getDerivedStateFromError(i){return{error:i}}reset(){this.setState({error:null})}componentDidUpdate(i,l){l.error&&l.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(i,l){this.props.onCatch&&this.props.onCatch(i,l)}render(){return this.props.children({error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{this.reset()}})}}function Ro({error:t}){const[i,l]=F.useState(!1);return Q.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[Q.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),Q.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>l(s=>!s),children:i?"Hide Error":"Show Error"})]}),Q.jsx("div",{style:{height:".25rem"}}),i?Q.jsx("div",{children:Q.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:t.message?Q.jsx("code",{children:t.message}):null})}):null]})}function b1({children:t,fallback:i=null}){return y1()?Q.jsx(si.Fragment,{children:t}):Q.jsx(si.Fragment,{children:i})}function y1(){return si.useSyncExternalStore(v1,()=>!0,()=>!1)}function v1(){return()=>{}}var md={exports:{}},pd={},hd={exports:{}},gd={};var jg;function x1(){if(jg)return gd;jg=1;var t=Ml();function i(b,x){return b===x&&(b!==0||1/b===1/x)||b!==b&&x!==x}var l=typeof Object.is=="function"?Object.is:i,s=t.useState,u=t.useEffect,d=t.useLayoutEffect,f=t.useDebugValue;function m(b,x){var w=x(),A=s({inst:{value:w,getSnapshot:x}}),_=A[0].inst,q=A[1];return d(function(){_.value=w,_.getSnapshot=x,g(_)&&q({inst:_})},[b,w,x]),u(function(){return g(_)&&q({inst:_}),b(function(){g(_)&&q({inst:_})})},[b]),f(w),w}function g(b){var x=b.getSnapshot;b=b.value;try{var w=x();return!l(b,w)}catch{return!0}}function h(b,x){return x()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:m;return gd.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:v,gd}var Ng;function S1(){return Ng||(Ng=1,hd.exports=x1()),hd.exports}var Ug;function w1(){if(Ug)return pd;Ug=1;var t=Ml(),i=S1();function l(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var s=typeof Object.is=="function"?Object.is:l,u=i.useSyncExternalStore,d=t.useRef,f=t.useEffect,m=t.useMemo,g=t.useDebugValue;return pd.useSyncExternalStoreWithSelector=function(h,v,b,x,w){var A=d(null);if(A.current===null){var _={hasValue:!1,value:null};A.current=_}else _=A.current;A=m(function(){function k(E){if(!H){if(H=!0,U=E,E=x(E),w!==void 0&&_.hasValue){var D=_.value;if(w(D,E))return P=D}return P=E}if(D=P,s(U,E))return D;var G=x(E);return w!==void 0&&w(D,G)?(U=E,D):(U=E,P=G)}var H=!1,U,P,B=b===void 0?null:b;return[function(){return k(v())},B===null?void 0:function(){return k(B())}]},[v,b,x,w]);var q=u(h,A[0],A[1]);return f(function(){_.hasValue=!0,_.value=q},[q]),g(q),q},pd}var Gg;function _1(){return Gg||(Gg=1,md.exports=w1()),md.exports}var A1=_1();function C1(t,i=s=>s,l={}){const s=l.equal??M1;return A1.useSyncExternalStoreWithSelector(t.subscribe,()=>t.state,()=>t.state,i,s)}function M1(t,i){if(Object.is(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;if(t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(const[s,u]of t)if(!i.has(s)||!Object.is(u,i.get(s)))return!1;return!0}if(t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(const s of t)if(!i.has(s))return!1;return!0}if(t instanceof Date&&i instanceof Date)return t.getTime()===i.getTime();const l=Hg(t);if(l.length!==Hg(i).length)return!1;for(let s=0;s<l.length;s++)if(!Object.prototype.hasOwnProperty.call(i,l[s])||!Object.is(t[l[s]],i[l[s]]))return!1;return!0}function Hg(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}const bd=F.createContext(null);function ey(){return typeof document>"u"?bd:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=bd,bd)}function wn(t){const i=F.useContext(ey());return t?.warn,i}function on(t){const i=wn({warn:t?.router===void 0}),l=t?.router||i,s=F.useRef(void 0);return C1(l.__store,u=>{if(t?.select){if(t.structuralSharing??l.options.defaultStructuralSharing){const d=it(s.current,t.select(u));return s.current=d,d}return t.select(u)}return u})}const Eo=F.createContext(void 0),T1=F.createContext(void 0);function Tt(t){const i=F.useContext(t.from?T1:Eo);return on({select:s=>{const u=s.matches.find(d=>t.from?t.from===d.routeId:d.id===i);if(Kt(!((t.shouldThrow??!0)&&!u),`Could not find ${t.from?`an active match from "${t.from}"`:"a nearest match!"}`),u!==void 0)return t.select?t.select(u):u},structuralSharing:t.structuralSharing})}function tf(t){return Tt({from:t.from,strict:t.strict,structuralSharing:t.structuralSharing,select:i=>t.select?t.select(i.loaderData):i.loaderData})}function af(t){const{select:i,...l}=t;return Tt({...l,select:s=>i?i(s.loaderDeps):s.loaderDeps})}function rf(t){return Tt({from:t.from,shouldThrow:t.shouldThrow,structuralSharing:t.structuralSharing,strict:t.strict,select:i=>{const l=t.strict===!1?i.params:i._strictParams;return t.select?t.select(l):l}})}function lf(t){return Tt({from:t.from,strict:t.strict,shouldThrow:t.shouldThrow,structuralSharing:t.structuralSharing,select:i=>t.select?t.select(i.search):i.search})}const to=typeof window<"u"?F.useLayoutEffect:F.useEffect;function yd(t){const i=F.useRef({value:t,prev:null}),l=i.current.value;return t!==l&&(i.current={value:t,prev:l}),i.current.prev}function q1(t,i,l={},s={}){F.useEffect(()=>{if(!t.current||s.disabled||typeof IntersectionObserver!="function")return;const u=new IntersectionObserver(([d])=>{i(d)},l);return u.observe(t.current),()=>{u.disconnect()}},[i,l,s.disabled,t])}function R1(t){const i=F.useRef(null);return F.useImperativeHandle(t,()=>i.current,[]),i}function sf(t){const i=wn();return F.useCallback(l=>i.navigate({...l,from:l.from??t?.from}),[t?.from,i])}var vd={exports:{}},xn={};var Pg;function E1(){if(Pg)return xn;Pg=1;var t=Ml();function i(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,h,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:g,containerInfo:h,implementation:v}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xn.createPortal=function(g,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return d(g,h,null,v)},xn.flushSync=function(g){var h=f.T,v=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=h,s.p=v,s.d.f()}},xn.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(g,h))},xn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},xn.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var v=h.as,b=m(v,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:w}):v==="script"&&s.d.X(g,{crossOrigin:b,integrity:x,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},xn.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=m(h.as,h.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(g)},xn.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,b=m(v,h.crossOrigin);s.d.L(g,v,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},xn.preloadModule=function(g,h){if(typeof g=="string")if(h){var v=m(h.as,h.crossOrigin);s.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(g)},xn.requestFormReset=function(g){s.d.r(g)},xn.unstable_batchedUpdates=function(g,h){return g(h)},xn.useFormState=function(g,h,v){return f.H.useFormState(g,h,v)},xn.useFormStatus=function(){return f.H.useHostTransitionStatus()},xn.version="19.2.1",xn}var Jg;function ny(){if(Jg)return vd.exports;Jg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),vd.exports=E1(),vd.exports}var k1=ny();function L1(t,i){const l=wn(),[s,u]=F.useState(!1),d=F.useRef(!1),f=R1(i),{activeProps:m,inactiveProps:g,activeOptions:h,to:v,preload:b,preloadDelay:x,hashScrollIntoView:w,replace:A,startTransition:_,resetScroll:q,viewTransition:k,children:H,target:U,disabled:P,style:B,className:E,onClick:D,onFocus:G,onMouseEnter:K,onMouseLeave:ee,onTouchStart:I,ignoreBlocker:S,params:te,search:W,hash:ie,state:z,mask:Z,reloadDocument:se,unsafeRelative:we,from:Ce,_fromLocation:T,...J}=t,ne=on({select:Ee=>Ee.location.search,structuralSharing:!0}),ae=t.from,ue=F.useMemo(()=>({...t,from:ae}),[l,ne,ae,t._fromLocation,t.hash,t.to,t.search,t.params,t.state,t.mask,t.unsafeRelative]),de=F.useMemo(()=>l.buildLocation({...ue}),[l,ue]),me=F.useMemo(()=>{if(P)return;let Ee=de.maskedLocation?de.maskedLocation.url:de.url,Se=!1;return l.origin&&(Ee.startsWith(l.origin)?Ee=l.history.createHref(Ee.replace(l.origin,""))||"/":Se=!0),{href:Ee,external:Se}},[P,de.maskedLocation,de.url,l.origin,l.history]),Ye=F.useMemo(()=>{if(me?.external)return me.href;try{return new URL(v),v}catch{}},[v,me]),Me=t.reloadDocument||Ye?!1:b??l.options.defaultPreload,ut=x??l.options.defaultPreloadDelay??0,ht=on({select:Ee=>{if(Ye)return!1;if(h?.exact){if(!Ux(Ee.location.pathname,de.pathname,l.basepath))return!1}else{const Se=vo(Ee.location.pathname,l.basepath),vn=vo(de.pathname,l.basepath);if(!(Se.startsWith(vn)&&(Se.length===vn.length||Se[vn.length]==="/")))return!1}return(h?.includeSearch??!0)&&!Za(Ee.location.search,de.search,{partial:!h?.exact,ignoreUndefined:!h?.explicitUndefined})?!1:h?.includeHash?Ee.location.hash===de.hash:!0}}),Cn=F.useCallback(()=>{l.preloadRoute({...ue}).catch(Ee=>{console.warn(Ee),console.warn(m1)})},[l,ue]),Ra=F.useCallback(Ee=>{Ee?.isIntersecting&&Cn()},[Cn]);q1(f,Ra,j1,{disabled:!!P||Me!=="viewport"}),F.useEffect(()=>{d.current||!P&&Me==="render"&&(Cn(),d.current=!0)},[P,Cn,Me]);const Xn=Ee=>{const Se=Ee.currentTarget.getAttribute("target"),vn=U!==void 0?U:Se;if(!P&&!N1(Ee)&&!Ee.defaultPrevented&&(!vn||vn==="_self")&&Ee.button===0){Ee.preventDefault(),k1.flushSync(()=>{u(!0)});const un=l.subscribe("onResolved",()=>{un(),u(!1)});l.navigate({...ue,replace:A,resetScroll:q,hashScrollIntoView:w,startTransition:_,viewTransition:k,ignoreBlocker:S})}};if(Ye)return{...J,ref:f,href:Ye,...H&&{children:H},...U&&{target:U},...P&&{disabled:P},...B&&{style:B},...E&&{className:E},...D&&{onClick:D},...G&&{onFocus:G},...K&&{onMouseEnter:K},...ee&&{onMouseLeave:ee},...I&&{onTouchStart:I}};const qt=Ee=>{P||Me&&Cn()},Ea=qt,dr=Ee=>{if(!(P||!Me))if(!ut)Cn();else{const Se=Ee.target;if(ll.has(Se))return;const vn=setTimeout(()=>{ll.delete(Se),Cn()},ut);ll.set(Se,vn)}},Wt=Ee=>{if(P||!Me||!ut)return;const Se=Ee.target,vn=ll.get(Se);vn&&(clearTimeout(vn),ll.delete(Se))},en=ht?_a(m,{})??O1:xd,Dn=ht?xd:_a(g,{})??xd,gt=[E,en.className,Dn.className].filter(Boolean).join(" "),bt=(B||en.style||Dn.style)&&{...B,...en.style,...Dn.style};return{...J,...en,...Dn,href:me?.href,ref:f,onClick:sl([D,Xn]),onFocus:sl([G,qt]),onMouseEnter:sl([K,dr]),onMouseLeave:sl([ee,Wt]),onTouchStart:sl([I,Ea]),disabled:!!P,target:U,...bt&&{style:bt},...gt&&{className:gt},...P&&D1,...ht&&z1,...s&&B1}}const xd={},O1={className:"active"},D1={role:"link","aria-disabled":!0},z1={"data-status":"active","aria-current":"page"},B1={"data-transitioning":"transitioning"},ll=new WeakMap,j1={rootMargin:"100px"},sl=t=>i=>{for(const l of t)if(l){if(i.defaultPrevented)return;l(i)}},bl=F.forwardRef((t,i)=>{const{_asChild:l,...s}=t,{type:u,ref:d,...f}=L1(s,i),m=typeof s.children=="function"?s.children({isActive:f["data-status"]==="active"}):s.children;return l===void 0&&delete f.disabled,F.createElement(l||"a",{...f,ref:d},m)});function N1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}let U1=class extends Ib{constructor(i){super(i),this.useMatch=l=>Tt({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Tt({...l,from:this.id,select:s=>l?.select?l.select(s.context):s.context}),this.useSearch=l=>lf({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>rf({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>af({...l,from:this.id}),this.useLoaderData=l=>tf({...l,from:this.id}),this.useNavigate=()=>sf({from:this.fullPath}),this.Link=si.forwardRef((l,s)=>Q.jsx(bl,{ref:s,from:this.fullPath,...l})),this.$$typeof=Symbol.for("react.memo")}};function G1(t){return new U1(t)}class H1 extends p1{constructor(i){super(i),this.useMatch=l=>Tt({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Tt({...l,from:this.id,select:s=>l?.select?l.select(s.context):s.context}),this.useSearch=l=>lf({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>rf({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>af({...l,from:this.id}),this.useLoaderData=l=>tf({...l,from:this.id}),this.useNavigate=()=>sf({from:this.fullPath}),this.Link=si.forwardRef((l,s)=>Q.jsx(bl,{ref:s,from:this.fullPath,...l})),this.$$typeof=Symbol.for("react.memo")}}function P1(t){return new H1(t)}function ar(t){return typeof t=="object"?new $g(t,{silent:!0}).createRoute(t):new $g(t,{silent:!0}).createRoute}class $g{constructor(i,l){this.path=i,this.createRoute=s=>{this.silent;const u=G1(s);return u.isRoot=!1,u},this.silent=l?.silent}}class Vg{constructor(i){this.useMatch=l=>Tt({select:l?.select,from:this.options.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Tt({from:this.options.id,select:s=>l?.select?l.select(s.context):s.context}),this.useSearch=l=>lf({select:l?.select,structuralSharing:l?.structuralSharing,from:this.options.id}),this.useParams=l=>rf({select:l?.select,structuralSharing:l?.structuralSharing,from:this.options.id}),this.useLoaderDeps=l=>af({...l,from:this.options.id}),this.useLoaderData=l=>tf({...l,from:this.options.id}),this.useNavigate=()=>{const l=wn();return sf({from:l.routesById[this.options.id].fullPath})},this.options=i,this.$$typeof=Symbol.for("react.memo")}}function Yg(t){return typeof t=="object"?new Vg(t):i=>new Vg({id:t,...i})}function Tl(t,i){let l,s,u,d;const f=()=>(l||(l=t().then(g=>{l=void 0,s=g[i]}).catch(g=>{if(u=g,Ax(u)&&u instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const h=`tanstack_router_reload:${u.message}`;sessionStorage.getItem(h)||(sessionStorage.setItem(h,"1"),d=!0)}})),l),m=function(h){if(d)throw window.location.reload(),new Promise(()=>{});if(u)throw u;if(!s)throw f();return F.createElement(s,h)};return m.preload=f,m}function J1(){const t=wn(),i=F.useRef({router:t,mounted:!1}),[l,s]=F.useState(!1),{hasPendingMatches:u,isLoading:d}=on({select:b=>({isLoading:b.isLoading,hasPendingMatches:b.matches.some(x=>x.status==="pending")}),structuralSharing:!0}),f=yd(d),m=d||l||u,g=yd(m),h=d||u,v=yd(h);return t.startTransition=b=>{s(!0),F.startTransition(()=>{b(),s(!1)})},F.useEffect(()=>{const b=t.history.subscribe(t.load),x=t.buildLocation({to:t.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return Ia(t.latestLocation.href)!==Ia(x.href)&&t.commitLocation({...x,replace:!0}),()=>{b()}},[t,t.history]),to(()=>{if(typeof window<"u"&&t.ssr||i.current.router===t&&i.current.mounted)return;i.current={router:t,mounted:!0},(async()=>{try{await t.load()}catch(x){console.error(x)}})()},[t]),to(()=>{f&&!d&&t.emit({type:"onLoad",...er(t.state)})},[f,t,d]),to(()=>{v&&!h&&t.emit({type:"onBeforeRouteMount",...er(t.state)})},[h,v,t]),to(()=>{if(g&&!m){const b=er(t.state);t.emit({type:"onResolved",...b}),t.__store.setState(x=>({...x,status:"idle",resolvedLocation:x.location})),b.hrefChanged&&Xx(t)}},[m,g,t]),null}function $1(t){const i=on({select:l=>`not-found-${l.location.pathname}-${l.status}`});return Q.jsx(nf,{getResetKey:()=>i,onCatch:(l,s)=>{if(st(l))t.onCatch?.(l,s);else throw l},errorComponent:({error:l})=>{if(st(l))return t.fallback?.(l);throw l},children:t.children})}function V1(){return Q.jsx("p",{children:"Not Found"})}function ti(t){return Q.jsx(Q.Fragment,{children:t.children})}function ty(t,i,l){return i.options.notFoundComponent?Q.jsx(i.options.notFoundComponent,{...l}):t.options.defaultNotFoundComponent?Q.jsx(t.options.defaultNotFoundComponent,{...l}):Q.jsx(V1,{})}function Y1({children:t}){const i=wn();return i.isServer?Q.jsx("script",{nonce:i.options.ssr?.nonce,className:"$tsr",dangerouslySetInnerHTML:{__html:t+';typeof $_TSR !== "undefined" && $_TSR.c()'}}):null}function X1(){const t=wn();if(!t.isScrollRestoring||!t.isServer||typeof t.options.scrollRestoration=="function"&&!t.options.scrollRestoration({location:t.latestLocation}))return null;const l=(t.options.getScrollRestorationKey||Bd)(t.latestLocation),s=l!==Bd(t.latestLocation)?l:void 0,u={storageKey:xo,shouldScrollRestoration:!0};return s&&(u.key=s),Q.jsx(Y1,{children:`(${Jb.toString()})(${JSON.stringify(u)})`})}const ay=F.memo(function({matchId:i}){const l=wn(),s=on({select:k=>{const H=k.matches.find(U=>U.id===i);return Kt(H),{routeId:H.routeId,ssr:H.ssr,_displayPending:H._displayPending}},structuralSharing:!0}),u=l.routesById[s.routeId],d=u.options.pendingComponent??l.options.defaultPendingComponent,f=d?Q.jsx(d,{}):null,m=u.options.errorComponent??l.options.defaultErrorComponent,g=u.options.onCatch??l.options.defaultOnCatch,h=u.isRoot?u.options.notFoundComponent??l.options.notFoundRoute?.options.component:u.options.notFoundComponent,v=s.ssr===!1||s.ssr==="data-only",b=(!u.isRoot||u.options.wrapInSuspense||v)&&(u.options.wrapInSuspense??d??(u.options.errorComponent?.preload||v))?F.Suspense:ti,x=m?nf:ti,w=h?$1:ti,A=on({select:k=>k.loadedAt}),_=on({select:k=>{const H=k.matches.findIndex(U=>U.id===i);return k.matches[H-1]?.routeId}}),q=u.isRoot?u.options.shellComponent??ti:ti;return Q.jsxs(q,{children:[Q.jsx(Eo.Provider,{value:i,children:Q.jsx(b,{fallback:f,children:Q.jsx(x,{getResetKey:()=>A,errorComponent:m||Ro,onCatch:(k,H)=>{if(st(k))throw k;g?.(k,H)},children:Q.jsx(w,{fallback:k=>{if(!h||k.routeId&&k.routeId!==s.routeId||!k.routeId&&!u.isRoot)throw k;return F.createElement(h,k)},children:v||s._displayPending?Q.jsx(b1,{fallback:f,children:Q.jsx(Xg,{matchId:i})}):Q.jsx(Xg,{matchId:i})})})})}),_===$n&&l.options.scrollRestoration?Q.jsxs(Q.Fragment,{children:[Q.jsx(F1,{}),Q.jsx(X1,{})]}):null]})});function F1(){const t=wn(),i=F.useRef(void 0);return Q.jsx("script",{suppressHydrationWarning:!0,ref:l=>{l&&(i.current===void 0||i.current.href!==t.latestLocation.href)&&(t.emit({type:"onRendered",...er(t.state)}),i.current=t.latestLocation)}},t.latestLocation.state.__TSR_key)}const Xg=F.memo(function({matchId:i}){const l=wn(),{match:s,key:u,routeId:d}=on({select:g=>{const h=g.matches.find(A=>A.id===i),v=h.routeId,x=(l.routesById[v].options.remountDeps??l.options.defaultRemountDeps)?.({routeId:v,loaderDeps:h.loaderDeps,params:h._strictParams,search:h._strictSearch});return{key:x?JSON.stringify(x):void 0,routeId:v,match:{id:h.id,status:h.status,error:h.error,_forcePending:h._forcePending,_displayPending:h._displayPending}}},structuralSharing:!0}),f=l.routesById[d],m=F.useMemo(()=>{const g=f.options.component??l.options.defaultComponent;return g?Q.jsx(g,{},u):Q.jsx(ry,{})},[u,f.options.component,l.options.defaultComponent]);if(s._displayPending)throw l.getMatch(s.id)?._nonReactive.displayPendingPromise;if(s._forcePending)throw l.getMatch(s.id)?._nonReactive.minPendingPromise;if(s.status==="pending"){const g=f.options.pendingMinMs??l.options.defaultPendingMinMs;if(g){const h=l.getMatch(s.id);if(h&&!h._nonReactive.minPendingPromise&&!l.isServer){const v=ii();h._nonReactive.minPendingPromise=v,setTimeout(()=>{v.resolve(),h._nonReactive.minPendingPromise=void 0},g)}}throw l.getMatch(s.id)?._nonReactive.loadPromise}if(s.status==="notFound")return Kt(st(s.error)),ty(l,f,s.error);if(s.status==="redirected")throw Kt(mt(s.error)),l.getMatch(s.id)?._nonReactive.loadPromise;if(s.status==="error"){if(l.isServer){const g=(f.options.errorComponent??l.options.defaultErrorComponent)||Ro;return Q.jsx(g,{error:s.error,reset:void 0,info:{componentStack:""}})}throw s.error}return m}),ry=F.memo(function(){const i=wn(),l=F.useContext(Eo),s=on({select:h=>h.matches.find(v=>v.id===l)?.routeId}),u=i.routesById[s],d=on({select:h=>{const b=h.matches.find(x=>x.id===l);return Kt(b),b.globalNotFound}}),f=on({select:h=>{const v=h.matches,b=v.findIndex(x=>x.id===l);return v[b+1]?.id}}),m=i.options.defaultPendingComponent?Q.jsx(i.options.defaultPendingComponent,{}):null;if(d)return ty(i,u,void 0);if(!f)return null;const g=Q.jsx(ay,{matchId:f});return s===$n?Q.jsx(F.Suspense,{fallback:m,children:g}):g});function K1(){const t=wn(),l=t.routesById[$n].options.pendingComponent??t.options.defaultPendingComponent,s=l?Q.jsx(l,{}):null,u=t.isServer||typeof document<"u"&&t.ssr?ti:F.Suspense,d=Q.jsxs(u,{fallback:s,children:[!t.isServer&&Q.jsx(J1,{}),Q.jsx(Q1,{})]});return t.options.InnerWrap?Q.jsx(t.options.InnerWrap,{children:d}):d}function Q1(){const t=wn(),i=on({select:u=>u.matches[0]?.id}),l=on({select:u=>u.loadedAt}),s=i?Q.jsx(ay,{matchId:i}):null;return Q.jsx(Eo.Provider,{value:i,children:t.options.disableGlobalCatchBoundary?s:Q.jsx(nf,{getResetKey:()=>l,errorComponent:Ro,onCatch:u=>{u.message||u.toString()},children:s})})}const W1=t=>new Z1(t);class Z1 extends o1{constructor(i){super(i)}}typeof globalThis<"u"?(globalThis.createFileRoute=ar,globalThis.createLazyFileRoute=Yg):typeof window<"u"&&(window.createFileRoute=ar,window.createLazyFileRoute=Yg);function I1({router:t,children:i,...l}){Object.keys(l).length>0&&t.update({...t.options,...l,context:{...t.options.context,...l.context}});const s=ey(),u=Q.jsx(s.Provider,{value:t,children:i});return t.options.Wrap?Q.jsx(t.options.Wrap,{children:u}):u}function eS({router:t,...i}){return Q.jsx(I1,{router:t,...i,children:Q.jsx(K1,{})})}function nS({tag:t,attrs:i,children:l,nonce:s}){switch(t){case"title":return Q.jsx("title",{...i,suppressHydrationWarning:!0,children:l});case"meta":return Q.jsx("meta",{...i,suppressHydrationWarning:!0});case"link":return Q.jsx("link",{...i,nonce:s,suppressHydrationWarning:!0});case"style":return Q.jsx("style",{...i,dangerouslySetInnerHTML:{__html:l},nonce:s});case"script":return Q.jsx(tS,{attrs:i,children:l});default:return null}}function tS({attrs:t,children:i}){const l=wn();if(F.useEffect(()=>{if(t?.src){const s=(()=>{try{const f=document.baseURI||window.location.href;return new URL(t.src,f).href}catch{return t.src}})();if(Array.from(document.querySelectorAll("script[src]")).find(f=>f.src===s))return;const d=document.createElement("script");for(const[f,m]of Object.entries(t))f!=="suppressHydrationWarning"&&m!==void 0&&m!==!1&&d.setAttribute(f,typeof m=="boolean"?"":String(m));return document.head.appendChild(d),()=>{d.parentNode&&d.parentNode.removeChild(d)}}if(typeof i=="string"){const s=typeof t?.type=="string"?t.type:"text/javascript",u=typeof t?.nonce=="string"?t.nonce:void 0;if(Array.from(document.querySelectorAll("script:not([src])")).find(m=>{if(!(m instanceof HTMLScriptElement))return!1;const g=m.getAttribute("type")??"text/javascript",h=m.getAttribute("nonce")??void 0;return m.textContent===i&&g===s&&h===u}))return;const f=document.createElement("script");if(f.textContent=i,t)for(const[m,g]of Object.entries(t))m!=="suppressHydrationWarning"&&g!==void 0&&g!==!1&&f.setAttribute(m,typeof g=="boolean"?"":String(g));return document.head.appendChild(f),()=>{f.parentNode&&f.parentNode.removeChild(f)}}},[t,i]),!l.isServer){const{src:s,...u}=t||{};return Q.jsx("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""},...u})}return t?.src&&typeof t.src=="string"?Q.jsx("script",{...t,suppressHydrationWarning:!0}):typeof i=="string"?Q.jsx("script",{...t,dangerouslySetInnerHTML:{__html:i},suppressHydrationWarning:!0}):null}const aS=()=>{const t=wn(),i=t.options.ssr?.nonce,l=on({select:g=>g.matches.map(h=>h.meta).filter(Boolean)}),s=F.useMemo(()=>{const g=[],h={};let v;for(let b=l.length-1;b>=0;b--){const x=l[b];for(let w=x.length-1;w>=0;w--){const A=x[w];if(A)if(A.title)v||(v={tag:"title",children:A.title});else{const _=A.name??A.property;if(_){if(h[_])continue;h[_]=!0}g.push({tag:"meta",attrs:{...A,nonce:i}})}}}return v&&g.push(v),i&&g.push({tag:"meta",attrs:{property:"csp-nonce",content:i}}),g.reverse(),g},[l,i]),u=on({select:g=>{const h=g.matches.map(x=>x.links).filter(Boolean).flat(1).map(x=>({tag:"link",attrs:{...x,nonce:i}})),v=t.ssr?.manifest,b=g.matches.map(x=>v?.routes[x.routeId]?.assets??[]).filter(Boolean).flat(1).filter(x=>x.tag==="link").map(x=>({tag:"link",attrs:{...x.attrs,suppressHydrationWarning:!0,nonce:i}}));return[...h,...b]},structuralSharing:!0}),d=on({select:g=>{const h=[];return g.matches.map(v=>t.looseRoutesById[v.routeId]).forEach(v=>t.ssr?.manifest?.routes[v.id]?.preloads?.filter(Boolean).forEach(b=>{h.push({tag:"link",attrs:{rel:"modulepreload",href:b,nonce:i}})})),h},structuralSharing:!0}),f=on({select:g=>g.matches.map(h=>h.styles).flat(1).filter(Boolean).map(({children:h,...v})=>({tag:"style",attrs:v,children:h,nonce:i})),structuralSharing:!0}),m=on({select:g=>g.matches.map(h=>h.headScripts).flat(1).filter(Boolean).map(({children:h,...v})=>({tag:"script",attrs:{...v,nonce:i},children:h})),structuralSharing:!0});return iS([...s,...d,...u,...f,...m],g=>JSON.stringify(g))};function rS(){const t=aS(),l=wn().options.ssr?.nonce;return t.map(s=>F.createElement(nS,{...s,key:`tsr-meta-${JSON.stringify(s)}`,nonce:l}))}function iS(t,i){const l=new Set;return t.filter(s=>{const u=i(s);return l.has(u)?!1:(l.add(u),!0)})}var Sd={exports:{}},ol={},wd={exports:{}},_d={};var Fg;function lS(){return Fg||(Fg=1,(function(t){function i(z,Z){var se=z.length;z.push(Z);e:for(;0<se;){var we=se-1>>>1,Ce=z[we];if(0<u(Ce,Z))z[we]=Z,z[se]=Ce,se=we;else break e}}function l(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],se=z.pop();if(se!==Z){z[0]=se;e:for(var we=0,Ce=z.length,T=Ce>>>1;we<T;){var J=2*(we+1)-1,ne=z[J],ae=J+1,ue=z[ae];if(0>u(ne,se))ae<Ce&&0>u(ue,ne)?(z[we]=ue,z[ae]=se,we=ae):(z[we]=ne,z[J]=se,we=J);else if(ae<Ce&&0>u(ue,se))z[we]=ue,z[ae]=se,we=ae;else break e}}return Z}function u(z,Z){var se=z.sortIndex-Z.sortIndex;return se!==0?se:z.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var g=[],h=[],v=1,b=null,x=3,w=!1,A=!1,_=!1,q=!1,k=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var Z=l(h);Z!==null;){if(Z.callback===null)s(h);else if(Z.startTime<=z)s(h),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=l(h)}}function B(z){if(_=!1,P(z),!A)if(l(g)!==null)A=!0,E||(E=!0,S());else{var Z=l(h);Z!==null&&ie(B,Z.startTime-z)}}var E=!1,D=-1,G=5,K=-1;function ee(){return q?!0:!(t.unstable_now()-K<G)}function I(){if(q=!1,E){var z=t.unstable_now();K=z;var Z=!0;try{e:{A=!1,_&&(_=!1,H(D),D=-1),w=!0;var se=x;try{n:{for(P(z),b=l(g);b!==null&&!(b.expirationTime>z&&ee());){var we=b.callback;if(typeof we=="function"){b.callback=null,x=b.priorityLevel;var Ce=we(b.expirationTime<=z);if(z=t.unstable_now(),typeof Ce=="function"){b.callback=Ce,P(z),Z=!0;break n}b===l(g)&&s(g),P(z)}else s(g);b=l(g)}if(b!==null)Z=!0;else{var T=l(h);T!==null&&ie(B,T.startTime-z),Z=!1}}break e}finally{b=null,x=se,w=!1}Z=void 0}}finally{Z?S():E=!1}}}var S;if(typeof U=="function")S=function(){U(I)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,W=te.port2;te.port1.onmessage=I,S=function(){W.postMessage(null)}}else S=function(){k(I,0)};function ie(z,Z){D=k(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var se=x;x=Z;try{return z()}finally{x=se}},t.unstable_requestPaint=function(){q=!0},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=x;x=z;try{return Z()}finally{x=se}},t.unstable_scheduleCallback=function(z,Z,se){var we=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?we+se:we):se=we,z){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=se+Ce,z={id:v++,callback:Z,priorityLevel:z,startTime:se,expirationTime:Ce,sortIndex:-1},se>we?(z.sortIndex=se,i(h,z),l(g)===null&&z===l(h)&&(_?(H(D),D=-1):_=!0,ie(B,se-we))):(z.sortIndex=Ce,i(g,z),A||w||(A=!0,E||(E=!0,S()))),z},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(z){var Z=x;return function(){var se=x;x=Z;try{return z.apply(this,arguments)}finally{x=se}}}})(_d)),_d}var Kg;function sS(){return Kg||(Kg=1,wd.exports=lS()),wd.exports}var Qg;function oS(){if(Qg)return ol;Qg=1;var t=sS(),i=Ml(),l=ny();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return g(o),e;if(c===r)return g(o),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=o,r=c;else{for(var p=!1,y=o.child;y;){if(y===a){p=!0,a=o,r=c;break}if(y===r){p=!0,r=o,a=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===a){p=!0,a=c,r=o;break}if(y===r){p=!0,r=c,a=o;break}y=y.sibling}if(!p)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function S(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case k:return"Profiler";case q:return"StrictMode";case B:return"Suspense";case E:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case U:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:W(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return W(e(n))}catch{}}return null}var ie=Array.isArray,z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},we=[],Ce=-1;function T(e){return{current:e}}function J(e){0>Ce||(e.current=we[Ce],we[Ce]=null,Ce--)}function ne(e,n){Ce++,we[Ce]=e.current,e.current=n}var ae=T(null),ue=T(null),de=T(null),me=T(null);function Ye(e,n){switch(ne(de,n),ne(ue,e),ne(ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yh(n),e=Xh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(ae),ne(ae,e)}function Me(){J(ae),J(ue),J(de)}function ut(e){e.memoizedState!==null&&ne(me,e);var n=ae.current,a=Xh(n,e.type);n!==a&&(ne(ue,e),ne(ae,a))}function ht(e){ue.current===e&&(J(ae),J(ue)),me.current===e&&(J(me),el._currentValue=se)}var Cn,Ra;function Xn(e){if(Cn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Cn=n&&n[1]||"",Ra=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cn+e+Ra}var qt=!1;function Ea(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(N){var j=N}Reflect.construct(e,[],X)}else{try{X.call()}catch(N){j=N}e.call(X.prototype)}}else{try{throw Error()}catch(N){j=N}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(N){if(N&&j&&typeof N.stack=="string")return[N.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var C=p.split(`
`),O=y.split(`
`);for(o=r=0;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(r===C.length||o===O.length)for(r=C.length-1,o=O.length-1;1<=r&&0<=o&&C[r]!==O[o];)o--;for(;1<=r&&0<=o;r--,o--)if(C[r]!==O[o]){if(r!==1||o!==1)do if(r--,o--,0>o||C[r]!==O[o]){var $=`
`+C[r].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=r&&0<=o);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xn(a):""}function dr(e,n){switch(e.tag){case 26:case 27:case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return e.child!==n&&n!==null?Xn("Suspense Fallback"):Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 15:return Ea(e.type,!1);case 11:return Ea(e.type.render,!1);case 1:return Ea(e.type,!0);case 31:return Xn("Activity");default:return""}}function Wt(e){try{var n="",a=null;do n+=dr(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var en=Object.prototype.hasOwnProperty,Dn=t.unstable_scheduleCallback,gt=t.unstable_cancelCallback,bt=t.unstable_shouldYield,Ee=t.unstable_requestPaint,Se=t.unstable_now,vn=t.unstable_getCurrentPriorityLevel,un=t.unstable_ImmediatePriority,Je=t.unstable_UserBlockingPriority,fn=t.unstable_NormalPriority,Fn=t.unstable_LowPriority,fr=t.unstable_IdlePriority,Yo=t.log,Ky=t.unstable_setDisableYieldValue,fi=null,zn=null;function Zt(e){if(typeof Yo=="function"&&Ky(e),zn&&typeof zn.setStrictMode=="function")try{zn.setStrictMode(fi,e)}catch{}}var Bn=Math.clz32?Math.clz32:Zy,Qy=Math.log,Wy=Math.LN2;function Zy(e){return e>>>=0,e===0?32:31-(Qy(e)/Wy|0)|0}var Bl=256,jl=262144,Nl=4194304;function ka(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ul(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?o=ka(r):(p&=y,p!==0?o=ka(p):a||(a=y&~e,a!==0&&(o=ka(a))))):(y=r&~c,y!==0?o=ka(y):p!==0?o=ka(p):a||(a=r&~e,a!==0&&(o=ka(a)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:o}function mi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Iy(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tf(){var e=Nl;return Nl<<=1,(Nl&62914560)===0&&(Nl=4194304),e}function Xo(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function e0(e,n,a,r,o,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,C=e.expirationTimes,O=e.hiddenUpdates;for(a=p&~a;0<a;){var $=31-Bn(a),X=1<<$;y[$]=0,C[$]=-1;var j=O[$];if(j!==null)for(O[$]=null,$=0;$<j.length;$++){var N=j[$];N!==null&&(N.lane&=-536870913)}a&=~X}r!==0&&qf(e,r,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function qf(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Rf(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bn(a),o=1<<r;o&n|e[r]&n&&(e[r]|=n),a&=~o}}function Ef(e,n){var a=n&-n;return a=(a&42)!==0?1:Fo(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ko(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:gg(e.type))}function Lf(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var It=Math.random().toString(36).slice(2),mn="__reactFiber$"+It,Mn="__reactProps$"+It,mr="__reactContainer$"+It,Qo="__reactEvents$"+It,n0="__reactListeners$"+It,t0="__reactHandles$"+It,Of="__reactResources$"+It,hi="__reactMarker$"+It;function Wo(e){delete e[mn],delete e[Mn],delete e[Qo],delete e[n0],delete e[t0]}function pr(e){var n=e[mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[mr]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=eg(e);e!==null;){if(a=e[mn])return a;e=eg(e)}return n}e=a,a=e.parentNode}return null}function hr(e){if(e=e[mn]||e[mr]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function gi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function gr(e){var n=e[Of];return n||(n=e[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[hi]=!0}var Df=new Set,zf={};function La(e,n){br(e,n),br(e+"Capture",n)}function br(e,n){for(zf[e]=n,e=0;e<n.length;e++)Df.add(n[e])}var a0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bf={},jf={};function r0(e){return en.call(jf,e)?!0:en.call(Bf,e)?!1:a0.test(e)?jf[e]=!0:(Bf[e]=!0,!1)}function Gl(e,n,a){if(r0(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Hl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Rt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function i0(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,c=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zo(e){if(!e._valueTracker){var n=Nf(e)?"checked":"value";e._valueTracker=i0(e,n,""+e[n])}}function Uf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Nf(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var l0=/[\n"\\]/g;function Qn(e){return e.replace(l0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Io(e,n,a,r,o,c,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Kn(n)):e.value!==""+Kn(n)&&(e.value=""+Kn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?eu(e,p,Kn(n)):a!=null?eu(e,p,Kn(a)):r!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Kn(y):e.removeAttribute("name")}function Gf(e,n,a,r,o,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Zo(e);return}a=a!=null?""+Kn(a):"",n=n!=null?""+Kn(n):a,y||n===e.value||(e.value=n),e.defaultValue=n}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Zo(e)}function eu(e,n,a){n==="number"&&Pl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yr(e,n,a,r){if(e=e.options,n){n={};for(var o=0;o<a.length;o++)n["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=n.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Kn(a),n=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Hf(e,n,a){if(n!=null&&(n=""+Kn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Kn(a):""}function Pf(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ie(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Kn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Zo(e)}function vr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jf(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||s0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $f(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var o in n)r=n[o],n.hasOwnProperty(o)&&a[o]!==r&&Jf(e,o,r)}else for(var c in n)n.hasOwnProperty(c)&&Jf(e,c,n[c])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),u0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return u0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Et(){}var tu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Sr=null;function Vf(e){var n=hr(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Io(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var o=r[Mn]||null;if(!o)throw Error(s(90));Io(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Uf(r)}break e;case"textarea":Hf(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yr(e,!!a.multiple,n,!1)}}}var ru=!1;function Yf(e,n,a){if(ru)return e(n,a);ru=!0;try{var r=e(n);return r}finally{if(ru=!1,(xr!==null||Sr!==null)&&(Es(),xr&&(n=xr,e=Sr,Sr=xr=null,Vf(n),e)))for(n=0;n<e.length;n++)Vf(e[n])}}function bi(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(kt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){iu=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{iu=!1}var ea=null,lu=null,$l=null;function Xf(){if($l)return $l;var e,n=lu,a=n.length,r,o="value"in ea?ea.value:ea.textContent,c=o.length;for(e=0;e<a&&n[e]===o[e];e++);var p=a-e;for(r=1;r<=p&&n[a-r]===o[c-r];r++);return $l=o.slice(e,1<r?1-r:void 0)}function Vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yl(){return!0}function Ff(){return!1}function Tn(e){function n(a,r,o,c,p){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Yl:Ff,this.isPropagationStopped=Ff,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),n}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Tn(Oa),vi=b({},Oa,{view:0,detail:0}),c0=Tn(vi),su,ou,xi,Fl=b({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(su=e.screenX-xi.screenX,ou=e.screenY-xi.screenY):ou=su=0,xi=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),Kf=Tn(Fl),d0=b({},Fl,{dataTransfer:0}),f0=Tn(d0),m0=b({},vi,{relatedTarget:0}),uu=Tn(m0),p0=b({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=Tn(p0),g0=b({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b0=Tn(g0),y0=b({},Oa,{data:0}),Qf=Tn(y0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=S0[e])?!!n[e]:!1}function cu(){return w0}var _0=b({},vi,{key:function(e){if(e.key){var n=v0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=Tn(_0),C0=b({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Tn(C0),M0=b({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),T0=Tn(M0),q0=b({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=Tn(q0),E0=b({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=Tn(E0),L0=b({},Oa,{newState:0,oldState:0}),O0=Tn(L0),D0=[9,13,27,32],du=kt&&"CompositionEvent"in window,Si=null;kt&&"documentMode"in document&&(Si=document.documentMode);var z0=kt&&"TextEvent"in window&&!Si,Zf=kt&&(!du||Si&&8<Si&&11>=Si),If=" ",em=!1;function nm(e,n){switch(e){case"keyup":return D0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function B0(e,n){switch(e){case"compositionend":return tm(n);case"keypress":return n.which!==32?null:(em=!0,If);case"textInput":return e=n.data,e===If&&em?null:e;default:return null}}function j0(e,n){if(wr)return e==="compositionend"||!du&&nm(e,n)?(e=Xf(),$l=lu=ea=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zf&&n.locale!=="ko"?null:n.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!N0[e.type]:n==="textarea"}function rm(e,n,a,r){xr?Sr?Sr.push(r):Sr=[r]:xr=r,n=js(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var wi=null,_i=null;function U0(e){Gh(e,0)}function Kl(e){var n=gi(e);if(Uf(n))return e}function im(e,n){if(e==="change")return n}var lm=!1;if(kt){var fu;if(kt){var mu="oninput"in document;if(!mu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),mu=typeof sm.oninput=="function"}fu=mu}else fu=!1;lm=fu&&(!document.documentMode||9<document.documentMode)}function om(){wi&&(wi.detachEvent("onpropertychange",um),_i=wi=null)}function um(e){if(e.propertyName==="value"&&Kl(_i)){var n=[];rm(n,_i,e,au(e)),Yf(U0,n)}}function G0(e,n,a){e==="focusin"?(om(),wi=n,_i=a,wi.attachEvent("onpropertychange",um)):e==="focusout"&&om()}function H0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(_i)}function P0(e,n){if(e==="click")return Kl(n)}function J0(e,n){if(e==="input"||e==="change")return Kl(n)}function $0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:$0;function Ai(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!en.call(n,o)||!jn(e[o],n[o]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dm(e,n){var a=cm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cm(a)}}function fm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pl(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Pl(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var V0=kt&&"documentMode"in document&&11>=document.documentMode,_r=null,hu=null,Ci=null,gu=!1;function pm(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||_r==null||_r!==Pl(r)||(r=_r,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ci&&Ai(Ci,r)||(Ci=r,r=js(hu,"onSelect"),0<r.length&&(n=new Xl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=_r)))}function Da(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},bu={},hm={};kt&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function za(e){if(bu[e])return bu[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hm)return bu[e]=n[a];return e}var gm=za("animationend"),bm=za("animationiteration"),ym=za("animationstart"),Y0=za("transitionrun"),X0=za("transitionstart"),F0=za("transitioncancel"),vm=za("transitionend"),xm=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function ct(e,n){xm.set(e,n),La(n,[e])}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],Cr=0,vu=0;function Wl(){for(var e=Cr,n=vu=Cr=0;n<e;){var a=Wn[n];Wn[n++]=null;var r=Wn[n];Wn[n++]=null;var o=Wn[n];Wn[n++]=null;var c=Wn[n];if(Wn[n++]=null,r!==null&&o!==null){var p=r.pending;p===null?o.next=o:(o.next=p.next,p.next=o),r.pending=o}c!==0&&Sm(a,o,c)}}function Zl(e,n,a,r){Wn[Cr++]=e,Wn[Cr++]=n,Wn[Cr++]=a,Wn[Cr++]=r,vu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function xu(e,n,a,r){return Zl(e,n,a,r),Il(e)}function Ba(e,n){return Zl(e,null,null,n),Il(e)}function Sm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var o=!1,c=e.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&n!==null&&(o=31-Bn(a),e=c.hiddenUpdates,r=e[o],r===null?e[o]=[n]:r.push(n),n.lane=a|536870912),c):null}function Il(e){if(50<Xi)throw Xi=0,Rc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Mr={};function K0(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,n,a,r){return new K0(e,n,a,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,n){var a=e.alternate;return a===null?(a=Nn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function es(e,n,a,r,o,c){var p=0;if(r=e,typeof e=="function")Su(e)&&(p=1);else if(typeof e=="string")p=ex(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Nn(31,a,n,o),e.elementType=K,e.lanes=c,e;case _:return ja(a.children,o,c,n);case q:p=8,o|=24;break;case k:return e=Nn(12,a,n,o|2),e.elementType=k,e.lanes=c,e;case B:return e=Nn(13,a,n,o),e.elementType=B,e.lanes=c,e;case E:return e=Nn(19,a,n,o),e.elementType=E,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:p=10;break e;case H:p=9;break e;case P:p=11;break e;case D:p=14;break e;case G:p=16,r=null;break e}p=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Nn(p,a,n,o),n.elementType=e,n.type=r,n.lanes=c,n}function ja(e,n,a,r){return e=Nn(7,e,r,n),e.lanes=a,e}function wu(e,n,a){return e=Nn(6,e,null,n),e.lanes=a,e}function _m(e){var n=Nn(18,null,null,0);return n.stateNode=e,n}function _u(e,n,a){return n=Nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Am=new WeakMap;function Zn(e,n){if(typeof e=="object"&&e!==null){var a=Am.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Wt(n)},Am.set(e,n),n)}return{value:e,source:n,stack:Wt(n)}}var Tr=[],qr=0,ns=null,Mi=0,In=[],et=0,na=null,yt=1,vt="";function Ot(e,n){Tr[qr++]=Mi,Tr[qr++]=ns,ns=e,Mi=n}function Cm(e,n,a){In[et++]=yt,In[et++]=vt,In[et++]=na,na=e;var r=yt;e=vt;var o=32-Bn(r)-1;r&=~(1<<o),a+=1;var c=32-Bn(n)+o;if(30<c){var p=o-o%5;c=(r&(1<<p)-1).toString(32),r>>=p,o-=p,yt=1<<32-Bn(n)+o|a<<o|r,vt=c+e}else yt=1<<c|a<<o|r,vt=e}function Au(e){e.return!==null&&(Ot(e,1),Cm(e,1,0))}function Cu(e){for(;e===ns;)ns=Tr[--qr],Tr[qr]=null,Mi=Tr[--qr],Tr[qr]=null;for(;e===na;)na=In[--et],In[et]=null,vt=In[--et],In[et]=null,yt=In[--et],In[et]=null}function Mm(e,n){In[et++]=yt,In[et++]=vt,In[et++]=na,yt=n.id,vt=n.overflow,na=e}var pn=null,He=null,xe=!1,ta=null,nt=!1,Mu=Error(s(519));function aa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ti(Zn(n,e)),Mu}function Tm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[mn]=e,n[Mn]=r,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Ki.length;a++)be(Ki[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Gf(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Pf(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||$h(n.textContent,a)?(r.popover!=null&&(be("beforetoggle",n),be("toggle",n)),r.onScroll!=null&&be("scroll",n),r.onScrollEnd!=null&&be("scrollend",n),r.onClick!=null&&(n.onclick=Et),n=!0):n=!1,n||aa(e,!0)}function qm(e){for(pn=e.return;pn;)switch(pn.tag){case 5:case 31:case 13:nt=!1;return;case 27:case 3:nt=!0;return;default:pn=pn.return}}function Rr(e){if(e!==pn)return!1;if(!xe)return qm(e),xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$c(e.type,e.memoizedProps)),a=!a),a&&He&&aa(e),qm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));He=Ih(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));He=Ih(e)}else n===27?(n=He,ba(e.type)?(e=Kc,Kc=null,He=e):He=n):He=pn?at(e.stateNode.nextSibling):null;return!0}function Na(){He=pn=null,xe=!1}function Tu(){var e=ta;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),ta=null),e}function Ti(e){ta===null?ta=[e]:ta.push(e)}var qu=T(null),Ua=null,Dt=null;function ra(e,n,a){ne(qu,n._currentValue),n._currentValue=a}function zt(e){e._currentValue=qu.current,J(qu)}function Ru(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var p=o.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=o;for(var C=0;C<n.length;C++)if(y.context===n[C]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),Ru(c.return,a,e),r||(p=null);break e}c=y.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(s(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Ru(p,a,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function Er(e,n,a,r){e=null;for(var o=n,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var y=o.type;jn(o.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(o===me.current){if(p=o.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(el):e=[el])}o=o.return}e!==null&&Eu(n,e,a,r),n.flags|=262144}function ts(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ua=e,Dt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return Rm(Ua,e)}function as(e,n){return Ua===null&&Ga(e),Rm(e,n)}function Rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Dt===null){if(e===null)throw Error(s(308));Dt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Dt=Dt.next=n;return a}var Q0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},W0=t.unstable_scheduleCallback,Z0=t.unstable_NormalPriority,nn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new Q0,data:new Map,refCount:0}}function qi(e){e.refCount--,e.refCount===0&&W0(Z0,function(){e.controller.abort()})}var Ri=null,Lu=0,kr=0,Lr=null;function I0(e,n){if(Ri===null){var a=Ri=[];Lu=0,kr=zc(),Lr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lu++,n.then(Em,Em),n}function Em(){if(--Lu===0&&Ri!==null){Lr!==null&&(Lr.status="fulfilled");var e=Ri;Ri=null,kr=0,Lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ev(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var o=0;o<a.length;o++)(0,a[o])(n)},function(o){for(r.status="rejected",r.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),r}var km=z.S;z.S=function(e,n){ph=Se(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I0(e,n),km!==null&&km(e,n)};var Ha=T(null);function Ou(){var e=Ha.current;return e!==null?e:Ge.pooledCache}function rs(e,n){n===null?ne(Ha,Ha.current):ne(Ha,n.pool)}function Lm(){var e=Ou();return e===null?null:{parent:nn._currentValue,pool:e}}var Or=Error(s(460)),Du=Error(s(474)),is=Error(s(542)),ls={then:function(){}};function Om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Et,Et),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bm(e),e;default:if(typeof n.status=="string")n.then(Et,Et);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=r}},function(r){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bm(e),e}throw Ja=n,Or}}function Pa(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,Or):a}}var Ja=null;function zm(){if(Ja===null)throw Error(s(459));var e=Ja;return Ja=null,e}function Bm(e){if(e===Or||e===is)throw Error(s(483))}var Dr=null,Ei=0;function ss(e){var n=Ei;return Ei+=1,Dr===null&&(Dr=[]),Dm(Dr,e,n)}function ki(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function os(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function jm(e){function n(R,M){if(e){var L=R.deletions;L===null?(R.deletions=[M],R.flags|=16):L.push(M)}}function a(R,M){if(!e)return null;for(;M!==null;)n(R,M),M=M.sibling;return null}function r(R){for(var M=new Map;R!==null;)R.key!==null?M.set(R.key,R):M.set(R.index,R),R=R.sibling;return M}function o(R,M){return R=Lt(R,M),R.index=0,R.sibling=null,R}function c(R,M,L){return R.index=L,e?(L=R.alternate,L!==null?(L=L.index,L<M?(R.flags|=67108866,M):L):(R.flags|=67108866,M)):(R.flags|=1048576,M)}function p(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function y(R,M,L,Y){return M===null||M.tag!==6?(M=wu(L,R.mode,Y),M.return=R,M):(M=o(M,L),M.return=R,M)}function C(R,M,L,Y){var oe=L.type;return oe===_?$(R,M,L.props.children,Y,L.key):M!==null&&(M.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===G&&Pa(oe)===M.type)?(M=o(M,L.props),ki(M,L),M.return=R,M):(M=es(L.type,L.key,L.props,null,R.mode,Y),ki(M,L),M.return=R,M)}function O(R,M,L,Y){return M===null||M.tag!==4||M.stateNode.containerInfo!==L.containerInfo||M.stateNode.implementation!==L.implementation?(M=_u(L,R.mode,Y),M.return=R,M):(M=o(M,L.children||[]),M.return=R,M)}function $(R,M,L,Y,oe){return M===null||M.tag!==7?(M=ja(L,R.mode,Y,oe),M.return=R,M):(M=o(M,L),M.return=R,M)}function X(R,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=wu(""+M,R.mode,L),M.return=R,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return L=es(M.type,M.key,M.props,null,R.mode,L),ki(L,M),L.return=R,L;case A:return M=_u(M,R.mode,L),M.return=R,M;case G:return M=Pa(M),X(R,M,L)}if(ie(M)||S(M))return M=ja(M,R.mode,L,null),M.return=R,M;if(typeof M.then=="function")return X(R,ss(M),L);if(M.$$typeof===U)return X(R,as(R,M),L);os(R,M)}return null}function j(R,M,L,Y){var oe=M!==null?M.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return oe!==null?null:y(R,M,""+L,Y);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case w:return L.key===oe?C(R,M,L,Y):null;case A:return L.key===oe?O(R,M,L,Y):null;case G:return L=Pa(L),j(R,M,L,Y)}if(ie(L)||S(L))return oe!==null?null:$(R,M,L,Y,null);if(typeof L.then=="function")return j(R,M,ss(L),Y);if(L.$$typeof===U)return j(R,M,as(R,L),Y);os(R,L)}return null}function N(R,M,L,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return R=R.get(L)||null,y(M,R,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case w:return R=R.get(Y.key===null?L:Y.key)||null,C(M,R,Y,oe);case A:return R=R.get(Y.key===null?L:Y.key)||null,O(M,R,Y,oe);case G:return Y=Pa(Y),N(R,M,L,Y,oe)}if(ie(Y)||S(Y))return R=R.get(L)||null,$(M,R,Y,oe,null);if(typeof Y.then=="function")return N(R,M,L,ss(Y),oe);if(Y.$$typeof===U)return N(R,M,L,as(M,Y),oe);os(M,Y)}return null}function re(R,M,L,Y){for(var oe=null,_e=null,le=M,he=M=0,ve=null;le!==null&&he<L.length;he++){le.index>he?(ve=le,le=null):ve=le.sibling;var Ae=j(R,le,L[he],Y);if(Ae===null){le===null&&(le=ve);break}e&&le&&Ae.alternate===null&&n(R,le),M=c(Ae,M,he),_e===null?oe=Ae:_e.sibling=Ae,_e=Ae,le=ve}if(he===L.length)return a(R,le),xe&&Ot(R,he),oe;if(le===null){for(;he<L.length;he++)le=X(R,L[he],Y),le!==null&&(M=c(le,M,he),_e===null?oe=le:_e.sibling=le,_e=le);return xe&&Ot(R,he),oe}for(le=r(le);he<L.length;he++)ve=N(le,R,he,L[he],Y),ve!==null&&(e&&ve.alternate!==null&&le.delete(ve.key===null?he:ve.key),M=c(ve,M,he),_e===null?oe=ve:_e.sibling=ve,_e=ve);return e&&le.forEach(function(wa){return n(R,wa)}),xe&&Ot(R,he),oe}function ce(R,M,L,Y){if(L==null)throw Error(s(151));for(var oe=null,_e=null,le=M,he=M=0,ve=null,Ae=L.next();le!==null&&!Ae.done;he++,Ae=L.next()){le.index>he?(ve=le,le=null):ve=le.sibling;var wa=j(R,le,Ae.value,Y);if(wa===null){le===null&&(le=ve);break}e&&le&&wa.alternate===null&&n(R,le),M=c(wa,M,he),_e===null?oe=wa:_e.sibling=wa,_e=wa,le=ve}if(Ae.done)return a(R,le),xe&&Ot(R,he),oe;if(le===null){for(;!Ae.done;he++,Ae=L.next())Ae=X(R,Ae.value,Y),Ae!==null&&(M=c(Ae,M,he),_e===null?oe=Ae:_e.sibling=Ae,_e=Ae);return xe&&Ot(R,he),oe}for(le=r(le);!Ae.done;he++,Ae=L.next())Ae=N(le,R,he,Ae.value,Y),Ae!==null&&(e&&Ae.alternate!==null&&le.delete(Ae.key===null?he:Ae.key),M=c(Ae,M,he),_e===null?oe=Ae:_e.sibling=Ae,_e=Ae);return e&&le.forEach(function(dx){return n(R,dx)}),xe&&Ot(R,he),oe}function Ne(R,M,L,Y){if(typeof L=="object"&&L!==null&&L.type===_&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case w:e:{for(var oe=L.key;M!==null;){if(M.key===oe){if(oe=L.type,oe===_){if(M.tag===7){a(R,M.sibling),Y=o(M,L.props.children),Y.return=R,R=Y;break e}}else if(M.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===G&&Pa(oe)===M.type){a(R,M.sibling),Y=o(M,L.props),ki(Y,L),Y.return=R,R=Y;break e}a(R,M);break}else n(R,M);M=M.sibling}L.type===_?(Y=ja(L.props.children,R.mode,Y,L.key),Y.return=R,R=Y):(Y=es(L.type,L.key,L.props,null,R.mode,Y),ki(Y,L),Y.return=R,R=Y)}return p(R);case A:e:{for(oe=L.key;M!==null;){if(M.key===oe)if(M.tag===4&&M.stateNode.containerInfo===L.containerInfo&&M.stateNode.implementation===L.implementation){a(R,M.sibling),Y=o(M,L.children||[]),Y.return=R,R=Y;break e}else{a(R,M);break}else n(R,M);M=M.sibling}Y=_u(L,R.mode,Y),Y.return=R,R=Y}return p(R);case G:return L=Pa(L),Ne(R,M,L,Y)}if(ie(L))return re(R,M,L,Y);if(S(L)){if(oe=S(L),typeof oe!="function")throw Error(s(150));return L=oe.call(L),ce(R,M,L,Y)}if(typeof L.then=="function")return Ne(R,M,ss(L),Y);if(L.$$typeof===U)return Ne(R,M,as(R,L),Y);os(R,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,M!==null&&M.tag===6?(a(R,M.sibling),Y=o(M,L),Y.return=R,R=Y):(a(R,M),Y=wu(L,R.mode,Y),Y.return=R,R=Y),p(R)):a(R,M)}return function(R,M,L,Y){try{Ei=0;var oe=Ne(R,M,L,Y);return Dr=null,oe}catch(le){if(le===Or||le===is)throw le;var _e=Nn(29,le,null,R.mode);return _e.lanes=Y,_e.return=R,_e}finally{}}}var $a=jm(!0),Nm=jm(!1),ia=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Te&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,n=Il(e),Sm(e,null,a),n}return Zl(e,r,n,a),Il(e)}function Li(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Rf(e,a)}}function ju(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?o=c=n:c=c.next=n}else o=c=n;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function Oi(){if(Nu){var e=Lr;if(e!==null)throw e}}function Di(e,n,a,r){Nu=!1;var o=e.updateQueue;ia=!1;var c=o.firstBaseUpdate,p=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var C=y,O=C.next;C.next=null,p===null?c=O:p.next=O,p=C;var $=e.alternate;$!==null&&($=$.updateQueue,y=$.lastBaseUpdate,y!==p&&(y===null?$.firstBaseUpdate=O:y.next=O,$.lastBaseUpdate=C))}if(c!==null){var X=o.baseState;p=0,$=O=C=null,y=c;do{var j=y.lane&-536870913,N=j!==y.lane;if(N?(ye&j)===j:(r&j)===j){j!==0&&j===kr&&(Nu=!0),$!==null&&($=$.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var re=e,ce=y;j=n;var Ne=a;switch(ce.tag){case 1:if(re=ce.payload,typeof re=="function"){X=re.call(Ne,X,j);break e}X=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ce.payload,j=typeof re=="function"?re.call(Ne,X,j):re,j==null)break e;X=b({},X,j);break e;case 2:ia=!0}}j=y.callback,j!==null&&(e.flags|=64,N&&(e.flags|=8192),N=o.callbacks,N===null?o.callbacks=[j]:N.push(j))}else N={lane:j,tag:y.tag,payload:y.payload,callback:y.callback,next:null},$===null?(O=$=N,C=X):$=$.next=N,p|=j;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;N=y,y=N.next,N.next=null,o.lastBaseUpdate=N,o.shared.pending=null}}while(!0);$===null&&(C=X),o.baseState=C,o.firstBaseUpdate=O,o.lastBaseUpdate=$,c===null&&(o.shared.lanes=0),fa|=p,e.lanes=p,e.memoizedState=X}}function Um(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Gm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Um(a[e],n)}var zr=T(null),us=T(0);function Hm(e,n){e=$t,ne(us,e),ne(zr,n),$t=e|n.baseLanes}function Uu(){ne(us,$t),ne(zr,zr.current)}function Gu(){$t=us.current,J(zr),J(us)}var Un=T(null),tt=null;function oa(e){var n=e.alternate;ne(We,We.current&1),ne(Un,e),tt===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(tt=e)}function Hu(e){ne(We,We.current),ne(Un,e),tt===null&&(tt=e)}function Pm(e){e.tag===22?(ne(We,We.current),ne(Un,e),tt===null&&(tt=e)):ua()}function ua(){ne(We,We.current),ne(Un,Un.current)}function Gn(e){J(Un),tt===e&&(tt=null),J(We)}var We=T(0);function cs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xc(a)||Fc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bt=0,pe=null,Be=null,tn=null,ds=!1,Br=!1,Va=!1,fs=0,zi=0,jr=null,nv=0;function Xe(){throw Error(s(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Ju(e,n,a,r,o,c){return Bt=c,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Cp:rc,Va=!1,c=a(r,o),Va=!1,Br&&(c=$m(n,a,r,o)),Jm(e),c}function Jm(e){z.H=Ni;var n=Be!==null&&Be.next!==null;if(Bt=0,tn=Be=pe=null,ds=!1,zi=0,jr=null,n)throw Error(s(300));e===null||an||(e=e.dependencies,e!==null&&ts(e)&&(an=!0))}function $m(e,n,a,r){pe=e;var o=0;do{if(Br&&(jr=null),zi=0,Br=!1,25<=o)throw Error(s(301));if(o+=1,tn=Be=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=Mp,c=n(a,r)}while(Br);return c}function tv(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Bi(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(pe.flags|=1024),n}function $u(){var e=fs!==0;return fs=0,e}function Vu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yu(e){if(ds){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ds=!1}Bt=0,tn=Be=pe=null,Br=!1,zi=fs=0,jr=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?pe.memoizedState=tn=e:tn=tn.next=e,tn}function Ze(){if(Be===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=tn===null?pe.memoizedState:tn.next;if(n!==null)tn=n,Be=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},tn===null?pe.memoizedState=tn=e:tn=tn.next=e}return tn}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bi(e){var n=zi;return zi+=1,jr===null&&(jr=[]),e=Dm(jr,e,n),n=pe,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Cp:rc),e}function ps(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bi(e);if(e.$$typeof===U)return hn(e)}throw Error(s(438,String(e)))}function Xu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ms(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=ee;return n.index++,a}function jt(e,n){return typeof n=="function"?n(e):n}function hs(e){var n=Ze();return Fu(n,Be,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var o=e.baseQueue,c=r.pending;if(c!==null){if(o!==null){var p=o.next;o.next=c.next,c.next=p}n.baseQueue=o=c,r.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{n=o.next;var y=p=null,C=null,O=n,$=!1;do{var X=O.lane&-536870913;if(X!==O.lane?(ye&X)===X:(Bt&X)===X){var j=O.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),X===kr&&($=!0);else if((Bt&j)===j){O=O.next,j===kr&&($=!0);continue}else X={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},C===null?(y=C=X,p=c):C=C.next=X,pe.lanes|=j,fa|=j;X=O.action,Va&&a(c,X),c=O.hasEagerState?O.eagerState:a(c,X)}else j={lane:X,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},C===null?(y=C=j,p=c):C=C.next=j,pe.lanes|=X,fa|=X;O=O.next}while(O!==null&&O!==n);if(C===null?p=c:C.next=y,!jn(c,e.memoizedState)&&(an=!0,$&&(a=Lr,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=C,r.lastRenderedState=c}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ku(e){var n=Ze(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,c=n.memoizedState;if(o!==null){a.pending=null;var p=o=o.next;do c=e(c,p.action),p=p.next;while(p!==o);jn(c,n.memoizedState)||(an=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function Vm(e,n,a){var r=pe,o=Ze(),c=xe;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var p=!jn((Be||o).memoizedState,a);if(p&&(o.memoizedState=a,an=!0),o=o.queue,Zu(Fm.bind(null,r,o,e),[e]),o.getSnapshot!==n||p||tn!==null&&tn.memoizedState.tag&1){if(r.flags|=2048,Nr(9,{destroy:void 0},Xm.bind(null,r,o,a,n),null),Ge===null)throw Error(s(349));c||(Bt&127)!==0||Ym(r,n,a)}return a}function Ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=ms(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xm(e,n,a,r){n.value=a,n.getSnapshot=r,Km(n)&&Qm(e)}function Fm(e,n,a){return a(function(){Km(n)&&Qm(e)})}function Km(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function Qm(e){var n=Ba(e,2);n!==null&&Ln(n,e,2)}function Qu(e){var n=_n();if(typeof e=="function"){var a=e;if(e=a(),Va){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},n}function Wm(e,n,a,r){return e.baseState=a,Fu(e,Be,typeof r=="function"?r:jt)}function av(e,n,a,r,o){if(ys(e))throw Error(s(485));if(e=n.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};z.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Zm(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Zm(e,n){var a=n.action,r=n.payload,o=e.state;if(n.isTransition){var c=z.T,p={};z.T=p;try{var y=a(o,r),C=z.S;C!==null&&C(p,y),Im(e,n,y)}catch(O){Wu(e,n,O)}finally{c!==null&&p.types!==null&&(c.types=p.types),z.T=c}}else try{c=a(o,r),Im(e,n,c)}catch(O){Wu(e,n,O)}}function Im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){ep(e,n,r)},function(r){return Wu(e,n,r)}):ep(e,n,a)}function ep(e,n,a){n.status="fulfilled",n.value=a,np(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zm(e,a)))}function Wu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,np(n),n=n.next;while(n!==r)}e.action=null}function np(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tp(e,n){return n}function ap(e,n){if(xe){var a=Ge.formState;if(a!==null){e:{var r=pe;if(xe){if(He){n:{for(var o=He,c=nt;o.nodeType!==8;){if(!c){o=null;break n}if(o=at(o.nextSibling),o===null){o=null;break n}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){He=at(o.nextSibling),r=o.data==="F!";break e}}aa(r)}r=!1}r&&(n=a[0])}}return a=_n(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tp,lastRenderedState:n},a.queue=r,a=wp.bind(null,pe,r),r.dispatch=a,r=Qu(!1),c=ac.bind(null,pe,!1,r.queue),r=_n(),o={state:n,dispatch:null,action:e,pending:null},r.queue=o,a=av.bind(null,pe,o,c,a),o.dispatch=a,r.memoizedState=e,[n,a,!1]}function rp(e){var n=Ze();return ip(n,Be,e)}function ip(e,n,a){if(n=Fu(e,n,tp)[0],e=hs(jt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Bi(n)}catch(p){throw p===Or?is:p}else r=n;n=Ze();var o=n.queue,c=o.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,Nr(9,{destroy:void 0},rv.bind(null,o,a),null)),[r,c,e]}function rv(e,n){e.action=n}function lp(e){var n=Ze(),a=Be;if(a!==null)return ip(n,a,e);Ze(),n=n.memoizedState,a=Ze();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=ms(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function sp(){return Ze().memoizedState}function gs(e,n,a,r){var o=_n();pe.flags|=e,o.memoizedState=Nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function bs(e,n,a,r){var o=Ze();r=r===void 0?null:r;var c=o.memoizedState.inst;Be!==null&&r!==null&&Pu(r,Be.memoizedState.deps)?o.memoizedState=Nr(n,c,a,r):(pe.flags|=e,o.memoizedState=Nr(1|n,c,a,r))}function op(e,n){gs(8390656,8,e,n)}function Zu(e,n){bs(2048,8,e,n)}function iv(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=ms(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function up(e){var n=Ze().memoizedState;return iv({ref:n,nextImpl:e}),function(){if((Te&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function cp(e,n){return bs(4,2,e,n)}function dp(e,n){return bs(4,4,e,n)}function fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mp(e,n,a){a=a!=null?a.concat([e]):null,bs(4,4,fp.bind(null,n,e),a)}function Iu(){}function pp(e,n){var a=Ze();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Pu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function hp(e,n){var a=Ze();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Pu(n,r[1]))return r[0];if(r=e(),Va){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[r,n],r}function ec(e,n,a){return a===void 0||(Bt&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=gh(),pe.lanes|=e,fa|=e,a)}function gp(e,n,a,r){return jn(a,n)?a:zr.current!==null?(e=ec(e,a,r),jn(e,n)||(an=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(ye&261930)===0?(an=!0,e.memoizedState=a):(e=gh(),pe.lanes|=e,fa|=e,n)}function bp(e,n,a,r,o){var c=Z.p;Z.p=c!==0&&8>c?c:8;var p=z.T,y={};z.T=y,ac(e,!1,n,a);try{var C=o(),O=z.S;if(O!==null&&O(y,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=ev(C,r);ji(e,n,$,Jn(e))}else ji(e,n,r,Jn(e))}catch(X){ji(e,n,{then:function(){},status:"rejected",reason:X},Jn())}finally{Z.p=c,p!==null&&y.types!==null&&(p.types=y.types),z.T=p}}function lv(){}function nc(e,n,a,r){if(e.tag!==5)throw Error(s(476));var o=yp(e).queue;bp(e,o,n,se,a===null?lv:function(){return vp(e),a(r)})}function yp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:se},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vp(e){var n=yp(e);n.next===null&&(n=e.alternate.memoizedState),ji(e,n.next.queue,{},Jn())}function tc(){return hn(el)}function xp(){return Ze().memoizedState}function Sp(){return Ze().memoizedState}function sv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=la(a);var r=sa(n,e,a);r!==null&&(Ln(r,n,a),Li(r,n,a)),n={cache:ku()},e.payload=n;return}n=n.return}}function ov(e,n,a){var r=Jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ys(e)?_p(n,a):(a=xu(e,n,a,r),a!==null&&(Ln(a,e,r),Ap(a,n,r)))}function wp(e,n,a){var r=Jn();ji(e,n,a,r)}function ji(e,n,a,r){var o={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ys(e))_p(n,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,y=c(p,a);if(o.hasEagerState=!0,o.eagerState=y,jn(y,p))return Zl(e,n,o,0),Ge===null&&Wl(),!1}catch{}finally{}if(a=xu(e,n,o,r),a!==null)return Ln(a,e,r),Ap(a,n,r),!0}return!1}function ac(e,n,a,r){if(r={lane:2,revertLane:zc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ys(e)){if(n)throw Error(s(479))}else n=xu(e,a,r,2),n!==null&&Ln(n,e,2)}function ys(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function _p(e,n){Br=ds=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ap(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Rf(e,a)}}var Ni={readContext:hn,use:ps,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Ni.useEffectEvent=Xe;var Cp={readContext:hn,use:ps,useCallback:function(e,n){return _n().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gs(4194308,4,fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gs(4194308,4,e,n)},useInsertionEffect:function(e,n){gs(4,2,e,n)},useMemo:function(e,n){var a=_n();n=n===void 0?null:n;var r=e();if(Va){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=_n();if(a!==void 0){var o=a(n);if(Va){Zt(!0);try{a(n)}finally{Zt(!1)}}}else o=n;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=ov.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=_n();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=wp.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,n){var a=_n();return ec(a,e,n)},useTransition:function(){var e=Qu(!1);return e=bp.bind(null,pe,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=pe,o=_n();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(ye&127)!==0||Ym(r,n,a)}o.memoizedState=a;var c={value:a,getSnapshot:n};return o.queue=c,op(Fm.bind(null,r,c,e),[e]),r.flags|=2048,Nr(9,{destroy:void 0},Xm.bind(null,r,c,a,n),null),a},useId:function(){var e=_n(),n=Ge.identifierPrefix;if(xe){var a=vt,r=yt;a=(r&~(1<<32-Bn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:tc,useFormState:ap,useActionState:ap,useOptimistic:function(e){var n=_n();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ac.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xu,useCacheRefresh:function(){return _n().memoizedState=sv.bind(null,pe)},useEffectEvent:function(e){var n=_n(),a={impl:e};return n.memoizedState=a,function(){if((Te&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rc={readContext:hn,use:ps,useCallback:pp,useContext:hn,useEffect:Zu,useImperativeHandle:mp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:hp,useReducer:hs,useRef:sp,useState:function(){return hs(jt)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Ze();return gp(a,Be.memoizedState,e,n)},useTransition:function(){var e=hs(jt)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Bi(e),n]},useSyncExternalStore:Vm,useId:xp,useHostTransitionStatus:tc,useFormState:rp,useActionState:rp,useOptimistic:function(e,n){var a=Ze();return Wm(a,Be,e,n)},useMemoCache:Xu,useCacheRefresh:Sp};rc.useEffectEvent=up;var Mp={readContext:hn,use:ps,useCallback:pp,useContext:hn,useEffect:Zu,useImperativeHandle:mp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:hp,useReducer:Ku,useRef:sp,useState:function(){return Ku(jt)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Ze();return Be===null?ec(a,e,n):gp(a,Be.memoizedState,e,n)},useTransition:function(){var e=Ku(jt)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Bi(e),n]},useSyncExternalStore:Vm,useId:xp,useHostTransitionStatus:tc,useFormState:lp,useActionState:lp,useOptimistic:function(e,n){var a=Ze();return Be!==null?Wm(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Sp};Mp.useEffectEvent=up;function ic(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lc={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Jn(),o=la(r);o.payload=n,a!=null&&(o.callback=a),n=sa(e,o,r),n!==null&&(Ln(n,e,r),Li(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Jn(),o=la(r);o.tag=1,o.payload=n,a!=null&&(o.callback=a),n=sa(e,o,r),n!==null&&(Ln(n,e,r),Li(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),r=la(a);r.tag=2,n!=null&&(r.callback=n),n=sa(e,r,a),n!==null&&(Ln(n,e,a),Li(n,e,a))}};function Tp(e,n,a,r,o,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,p):n.prototype&&n.prototype.isPureReactComponent?!Ai(a,r)||!Ai(o,c):!0}function qp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&lc.enqueueReplaceState(n,n.state,null)}function Ya(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function Rp(e){Ql(e)}function Ep(e){console.error(e)}function kp(e){Ql(e)}function vs(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lp(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function sc(e,n,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){vs(e,n)},a}function Op(e){return e=la(e),e.tag=3,e}function Dp(e,n,a,r){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;e.payload=function(){return o(c)},e.callback=function(){Lp(n,a,r)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Lp(n,a,r),typeof o!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function uv(e,n,a,r,o){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Er(n,a,o,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:return tt===null?ks():a.alternate===null&&Fe===0&&(Fe=3),a.flags&=-257,a.flags|=65536,a.lanes=o,r===ls?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Lc(e,r,o)),!1;case 22:return a.flags|=65536,r===ls?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Lc(e,r,o)),!1}throw Error(s(435,a.tag))}return Lc(e,r,o),ks(),!1}if(xe)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,r!==Mu&&(e=Error(s(422),{cause:r}),Ti(Zn(e,a)))):(r!==Mu&&(n=Error(s(423),{cause:r}),Ti(Zn(n,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=Zn(r,a),o=sc(e.stateNode,r,o),ju(e,o),Fe!==4&&(Fe=2)),!1;var c=Error(s(520),{cause:r});if(c=Zn(c,a),Yi===null?Yi=[c]:Yi.push(c),Fe!==4&&(Fe=2),n===null)return!0;r=Zn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=sc(a.stateNode,r,e),ju(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ma===null||!ma.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=Op(o),Dp(o,e,a,r),ju(a,o),!1}a=a.return}while(a!==null);return!1}var oc=Error(s(461)),an=!1;function gn(e,n,a,r){n.child=e===null?Nm(n,null,a,r):$a(n,e.child,a,r)}function zp(e,n,a,r,o){a=a.render;var c=n.ref;if("ref"in r){var p={};for(var y in r)y!=="ref"&&(p[y]=r[y])}else p=r;return Ga(n),r=Ju(e,n,a,p,c,o),y=$u(),e!==null&&!an?(Vu(e,n,o),Nt(e,n,o)):(xe&&y&&Au(n),n.flags|=1,gn(e,n,r,o),n.child)}function Bp(e,n,a,r,o){if(e===null){var c=a.type;return typeof c=="function"&&!Su(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,jp(e,n,c,r,o)):(e=es(a.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!gc(e,o)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ai,a(p,r)&&e.ref===n.ref)return Nt(e,n,o)}return n.flags|=1,e=Lt(c,r),e.ref=n.ref,e.return=n,n.child=e}function jp(e,n,a,r,o){if(e!==null){var c=e.memoizedProps;if(Ai(c,r)&&e.ref===n.ref)if(an=!1,n.pendingProps=r=c,gc(e,o))(e.flags&131072)!==0&&(an=!0);else return n.lanes=e.lanes,Nt(e,n,o)}return uc(e,n,a,r,o)}function Np(e,n,a,r){var o=r.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(r=n.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~c}else r=0,n.child=null;return Up(e,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rs(n,c!==null?c.cachePool:null),c!==null?Hm(n,c):Uu(),Pm(n);else return r=n.lanes=536870912,Up(e,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(rs(n,c.cachePool),Hm(n,c),ua(),n.memoizedState=null):(e!==null&&rs(n,null),Uu(),ua());return gn(e,n,o,a),n.child}function Ui(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Up(e,n,a,r,o){var c=Ou();return c=c===null?null:{parent:nn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&rs(n,null),Uu(),Pm(n),e!==null&&Er(e,n,r,!0),n.childLanes=o,null}function xs(e,n){return n=ws({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Gp(e,n,a){return $a(n,e.child,null,a),e=xs(n,n.pendingProps),e.flags|=2,Gn(n),n.memoizedState=null,e}function cv(e,n,a){var r=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xe){if(r.mode==="hidden")return e=xs(n,r),n.lanes=536870912,Ui(null,e);if(Hu(n),(e=He)?(e=Zh(e,nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:na!==null?{id:yt,overflow:vt}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=n,n.child=a,pn=n,He=null)):e=null,e===null)throw aa(n);return n.lanes=536870912,null}return xs(n,r)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Hu(n),o)if(n.flags&256)n.flags&=-257,n=Gp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Er(e,n,a,!1),o=(a&e.childLanes)!==0,an||o){if(r=Ge,r!==null&&(p=Ef(r,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,Ba(e,p),Ln(r,e,p),oc;ks(),n=Gp(e,n,a)}else e=c.treeContext,He=at(p.nextSibling),pn=n,xe=!0,ta=null,nt=!1,e!==null&&Mm(n,e),n=xs(n,r),n.flags|=4096;return n}return e=Lt(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ss(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uc(e,n,a,r,o){return Ga(n),a=Ju(e,n,a,r,void 0,o),r=$u(),e!==null&&!an?(Vu(e,n,o),Nt(e,n,o)):(xe&&r&&Au(n),n.flags|=1,gn(e,n,a,o),n.child)}function Hp(e,n,a,r,o,c){return Ga(n),n.updateQueue=null,a=$m(n,r,a,o),Jm(e),r=$u(),e!==null&&!an?(Vu(e,n,c),Nt(e,n,c)):(xe&&r&&Au(n),n.flags|=1,gn(e,n,a,c),n.child)}function Pp(e,n,a,r,o){if(Ga(n),n.stateNode===null){var c=Mr,p=a.contextType;typeof p=="object"&&p!==null&&(c=hn(p)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=lc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},zu(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?hn(p):Mr,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(ic(n,a,p,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&lc.enqueueReplaceState(c,c.state,null),Di(n,r,c,o),Oi(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){c=n.stateNode;var y=n.memoizedProps,C=Ya(a,y);c.props=C;var O=c.context,$=a.contextType;p=Mr,typeof $=="object"&&$!==null&&(p=hn($));var X=a.getDerivedStateFromProps;$=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=n.pendingProps!==y,$||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||O!==p)&&qp(n,c,r,p),ia=!1;var j=n.memoizedState;c.state=j,Di(n,r,c,o),Oi(),O=n.memoizedState,y||j!==O||ia?(typeof X=="function"&&(ic(n,a,X,r),O=n.memoizedState),(C=ia||Tp(n,a,C,r,j,O,p))?($||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=O),c.props=r,c.state=O,c.context=p,r=C):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Bu(e,n),p=n.memoizedProps,$=Ya(a,p),c.props=$,X=n.pendingProps,j=c.context,O=a.contextType,C=Mr,typeof O=="object"&&O!==null&&(C=hn(O)),y=a.getDerivedStateFromProps,(O=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==X||j!==C)&&qp(n,c,r,C),ia=!1,j=n.memoizedState,c.state=j,Di(n,r,c,o),Oi();var N=n.memoizedState;p!==X||j!==N||ia||e!==null&&e.dependencies!==null&&ts(e.dependencies)?(typeof y=="function"&&(ic(n,a,y,r),N=n.memoizedState),($=ia||Tp(n,a,$,r,j,N,C)||e!==null&&e.dependencies!==null&&ts(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,N,C),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,N,C)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),c.props=r,c.state=N,c.context=C,r=$):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ss(e,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&r?(n.child=$a(n,e.child,null,o),n.child=$a(n,null,a,o)):gn(e,n,a,o),n.memoizedState=c.state,e=n.child):e=Nt(e,n,o),e}function Jp(e,n,a,r){return Na(),n.flags|=256,gn(e,n,a,r),n.child}var cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(e){return{baseLanes:e,cachePool:Lm()}}function fc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Pn),e}function $p(e,n,a){var r=n.pendingProps,o=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),p&&(o=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(xe){if(o?oa(n):ua(),(e=He)?(e=Zh(e,nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:na!==null?{id:yt,overflow:vt}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=n,n.child=a,pn=n,He=null)):e=null,e===null)throw aa(n);return Fc(e)?n.lanes=32:n.lanes=536870912,null}var y=r.children;return r=r.fallback,o?(ua(),o=n.mode,y=ws({mode:"hidden",children:y},o),r=ja(r,o,a,null),y.return=n,r.return=n,y.sibling=r,n.child=y,r=n.child,r.memoizedState=dc(a),r.childLanes=fc(e,p,a),n.memoizedState=cc,Ui(null,r)):(oa(n),mc(n,y))}var C=e.memoizedState;if(C!==null&&(y=C.dehydrated,y!==null)){if(c)n.flags&256?(oa(n),n.flags&=-257,n=pc(e,n,a)):n.memoizedState!==null?(ua(),n.child=e.child,n.flags|=128,n=null):(ua(),y=r.fallback,o=n.mode,r=ws({mode:"visible",children:r.children},o),y=ja(y,o,a,null),y.flags|=2,r.return=n,y.return=n,r.sibling=y,n.child=r,$a(n,e.child,null,a),r=n.child,r.memoizedState=dc(a),r.childLanes=fc(e,p,a),n.memoizedState=cc,n=Ui(null,r));else if(oa(n),Fc(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var O=p.dgst;p=O,r=Error(s(419)),r.stack="",r.digest=p,Ti({value:r,source:null,stack:null}),n=pc(e,n,a)}else if(an||Er(e,n,a,!1),p=(a&e.childLanes)!==0,an||p){if(p=Ge,p!==null&&(r=Ef(p,a),r!==0&&r!==C.retryLane))throw C.retryLane=r,Ba(e,r),Ln(p,e,r),oc;Xc(y)||ks(),n=pc(e,n,a)}else Xc(y)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,He=at(y.nextSibling),pn=n,xe=!0,ta=null,nt=!1,e!==null&&Mm(n,e),n=mc(n,r.children),n.flags|=4096);return n}return o?(ua(),y=r.fallback,o=n.mode,C=e.child,O=C.sibling,r=Lt(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&65011712,O!==null?y=Lt(O,y):(y=ja(y,o,a,null),y.flags|=2),y.return=n,r.return=n,r.sibling=y,n.child=r,Ui(null,r),r=n.child,y=e.child.memoizedState,y===null?y=dc(a):(o=y.cachePool,o!==null?(C=nn._currentValue,o=o.parent!==C?{parent:C,pool:C}:o):o=Lm(),y={baseLanes:y.baseLanes|a,cachePool:o}),r.memoizedState=y,r.childLanes=fc(e,p,a),n.memoizedState=cc,Ui(e.child,r)):(oa(n),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function mc(e,n){return n=ws({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ws(e,n){return e=Nn(22,e,null,n),e.lanes=0,e}function pc(e,n,a){return $a(n,e.child,null,a),e=mc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vp(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ru(e.return,n,a)}function hc(e,n,a,r,o,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=a,p.tailMode=o,p.treeForkCount=c)}function Yp(e,n,a){var r=n.pendingProps,o=r.revealOrder,c=r.tail;r=r.children;var p=We.current,y=(p&2)!==0;if(y?(p=p&1|2,n.flags|=128):p&=1,ne(We,p),gn(e,n,r,a),r=xe?Mi:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vp(e,a,n);else if(e.tag===19)Vp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=n.child,o=null;a!==null;)e=a.alternate,e!==null&&cs(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=n.child,n.child=null):(o=a.sibling,a.sibling=null),hc(n,!1,o,a,c,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&cs(e)===null){n.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}hc(n,!0,a,null,c,r);break;case"together":hc(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Nt(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Lt(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ts(e)))}function dv(e,n,a){switch(n.tag){case 3:Ye(n,n.stateNode.containerInfo),ra(n,nn,e.memoizedState.cache),Na();break;case 27:case 5:ut(n);break;case 4:Ye(n,n.stateNode.containerInfo);break;case 10:ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$p(e,n,a):(oa(n),e=Nt(e,n,a),e!==null?e.sibling:null);oa(n);break;case 19:var o=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Er(e,n,a,!1),r=(a&n.childLanes)!==0),o){if(r)return Yp(e,n,a);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(We,We.current),r)break;return null;case 22:return n.lanes=0,Np(e,n,a,n.pendingProps);case 24:ra(n,nn,e.memoizedState.cache)}return Nt(e,n,a)}function Xp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)an=!0;else{if(!gc(e,a)&&(n.flags&128)===0)return an=!1,dv(e,n,a);an=(e.flags&131072)!==0}else an=!1,xe&&(n.flags&1048576)!==0&&Cm(n,Mi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Pa(n.elementType),n.type=e,typeof e=="function")Su(e)?(r=Ya(e,r),n.tag=1,n=Pp(null,n,e,r,a)):(n.tag=0,n=uc(null,n,e,r,a));else{if(e!=null){var o=e.$$typeof;if(o===P){n.tag=11,n=zp(null,n,e,r,a);break e}else if(o===D){n.tag=14,n=Bp(null,n,e,r,a);break e}}throw n=W(e)||e,Error(s(306,n,""))}}return n;case 0:return uc(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,o=Ya(r,n.pendingProps),Pp(e,n,r,o,a);case 3:e:{if(Ye(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;o=c.element,Bu(e,n),Di(n,r,null,a);var p=n.memoizedState;if(r=p.cache,ra(n,nn,r),r!==c.cache&&Eu(n,[nn],a,!0),Oi(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Jp(e,n,r,a);break e}else if(r!==o){o=Zn(Error(s(424)),n),Ti(o),n=Jp(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=at(e.firstChild),pn=n,xe=!0,ta=null,nt=!0,a=Nm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Na(),r===o){n=Nt(e,n,a);break e}gn(e,n,r,a)}n=n.child}return n;case 26:return Ss(e,n),e===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,e=n.pendingProps,r=Ns(de.current).createElement(a),r[mn]=n,r[Mn]=e,bn(r,a,e),cn(r),n.stateNode=r):n.memoizedState=rg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ut(n),e===null&&xe&&(r=n.stateNode=ng(n.type,n.pendingProps,de.current),pn=n,nt=!0,o=He,ba(n.type)?(Kc=o,He=at(r.firstChild)):He=o),gn(e,n,n.pendingProps.children,a),Ss(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xe&&((o=r=He)&&(r=Hv(r,n.type,n.pendingProps,nt),r!==null?(n.stateNode=r,pn=n,He=at(r.firstChild),nt=!1,o=!0):o=!1),o||aa(n)),ut(n),o=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,r=c.children,$c(o,c)?r=null:p!==null&&$c(o,p)&&(n.flags|=32),n.memoizedState!==null&&(o=Ju(e,n,tv,null,null,a),el._currentValue=o),Ss(e,n),gn(e,n,r,a),n.child;case 6:return e===null&&xe&&((e=a=He)&&(a=Pv(a,n.pendingProps,nt),a!==null?(n.stateNode=a,pn=n,He=null,e=!0):e=!1),e||aa(n)),null;case 13:return $p(e,n,a);case 4:return Ye(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=$a(n,null,r,a):gn(e,n,r,a),n.child;case 11:return zp(e,n,n.type,n.pendingProps,a);case 7:return gn(e,n,n.pendingProps,a),n.child;case 8:return gn(e,n,n.pendingProps.children,a),n.child;case 12:return gn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ra(n,n.type,r.value),gn(e,n,r.children,a),n.child;case 9:return o=n.type._context,r=n.pendingProps.children,Ga(n),o=hn(o),r=r(o),n.flags|=1,gn(e,n,r,a),n.child;case 14:return Bp(e,n,n.type,n.pendingProps,a);case 15:return jp(e,n,n.type,n.pendingProps,a);case 19:return Yp(e,n,a);case 31:return cv(e,n,a);case 22:return Np(e,n,a,n.pendingProps);case 24:return Ga(n),r=hn(nn),e===null?(o=Ou(),o===null&&(o=Ge,c=ku(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),n.memoizedState={parent:r,cache:o},zu(n),ra(n,nn,o)):((e.lanes&a)!==0&&(Bu(e,n),Di(n,null,null,a),Oi()),o=e.memoizedState,c=n.memoizedState,o.parent!==r?(o={parent:r,cache:r},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),ra(n,nn,r)):(r=c.cache,ra(n,nn,r),r!==o.cache&&Eu(n,[nn],a,!0))),gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ut(e){e.flags|=4}function bc(e,n,a,r,o){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(xh())e.flags|=8192;else throw Ja=ls,Du}else e.flags&=-16777217}function Fp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ug(n))if(xh())e.flags|=8192;else throw Ja=ls,Du}function _s(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tf():536870912,e.lanes|=n,Pr|=n)}function Gi(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function fv(e,n,a){var r=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),zt(nn),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?Ut(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Pe(n),null;case 26:var o=n.type,c=n.memoizedState;return e===null?(Ut(n),c!==null?(Pe(n),Fp(n,c)):(Pe(n),bc(n,o,null,r,a))):c?c!==e.memoizedState?(Ut(n),Pe(n),Fp(n,c)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ut(n),Pe(n),bc(n,o,e,r,a)),null;case 27:if(ht(n),a=de.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ut(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}e=ae.current,Rr(n)?Tm(n):(e=ng(o,r,a),n.stateNode=e,Ut(n))}return Pe(n),null;case 5:if(ht(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ut(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}if(c=ae.current,Rr(n))Tm(n);else{var p=Ns(de.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(o,{is:r.is}):p.createElement(o)}}c[mn]=n,c[Mn]=r;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(bn(c,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ut(n)}}return Pe(n),bc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ut(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=de.current,Rr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,o=pn,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[mn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||$h(e.nodeValue,a)),e||aa(n,!0)}else e=Ns(e).createTextNode(r),e[mn]=n,n.stateNode=e}return Pe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Rr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[mn]=n}else Na(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else a=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Gn(n),n):(Gn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Pe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[mn]=n}else Na(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),o=!1}else o=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Gn(n),n):(Gn(n),null)}return Gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),_s(n,n.updateQueue),Pe(n),null);case 4:return Me(),e===null&&Uc(n.stateNode.containerInfo),Pe(n),null;case 10:return zt(n.type),Pe(n),null;case 19:if(J(We),r=n.memoizedState,r===null)return Pe(n),null;if(o=(n.flags&128)!==0,c=r.rendering,c===null)if(o)Gi(r,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=cs(e),c!==null){for(n.flags|=128,Gi(r,!1),e=c.updateQueue,n.updateQueue=e,_s(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wm(a,e),a=a.sibling;return ne(We,We.current&1|2),xe&&Ot(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Se()>qs&&(n.flags|=128,o=!0,Gi(r,!1),n.lanes=4194304)}else{if(!o)if(e=cs(c),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,_s(n,e),Gi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!xe)return Pe(n),null}else 2*Se()-r.renderingStartTime>qs&&a!==536870912&&(n.flags|=128,o=!0,Gi(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(e=r.last,e!==null?e.sibling=c:n.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Se(),e.sibling=null,a=We.current,ne(We,o?a&1|2:a&1),xe&&Ot(n,r.treeForkCount),e):(Pe(n),null);case 22:case 23:return Gn(n),Gu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),a=n.updateQueue,a!==null&&_s(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&J(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zt(nn),Pe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function mv(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(nn),Me(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Gn(n),n.alternate===null)throw Error(s(340));Na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(We),null;case 4:return Me(),null;case 10:return zt(n.type),null;case 22:case 23:return Gn(n),Gu(),e!==null&&J(Ha),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return zt(nn),null;case 25:return null;default:return null}}function Kp(e,n){switch(Cu(n),n.tag){case 3:zt(nn),Me();break;case 26:case 27:case 5:ht(n);break;case 4:Me();break;case 31:n.memoizedState!==null&&Gn(n);break;case 13:Gn(n);break;case 19:J(We);break;case 10:zt(n.type);break;case 22:case 23:Gn(n),Gu(),e!==null&&J(Ha);break;case 24:zt(nn)}}function Hi(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){r=void 0;var c=a.create,p=a.inst;r=c(),p.destroy=r}a=a.next}while(a!==o)}}catch(y){Oe(n,n.return,y)}}function ca(e,n,a){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){var p=r.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,o=n;var C=a,O=y;try{O()}catch($){Oe(o,C,$)}}}r=r.next}while(r!==c)}}catch($){Oe(n,n.return,$)}}function Qp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Gm(n,a)}catch(r){Oe(e,e.return,r)}}}function Wp(e,n,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Oe(e,n,r)}}function Pi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(o){Oe(e,n,o)}}function xt(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(o){Oe(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Oe(e,n,o)}else a.current=null}function Zp(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(o){Oe(e,e.return,o)}}function yc(e,n,a){try{var r=e.stateNode;zv(r,e.type,a,n),r[Mn]=n}catch(o){Oe(e,e.return,o)}}function Ip(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Et));else if(r!==4&&(r===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xc(e,n,a),e=e.sibling;e!==null;)xc(e,n,a),e=e.sibling}function As(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(As(e,n,a),e=e.sibling;e!==null;)As(e,n,a),e=e.sibling}function eh(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);bn(n,r,a),n[mn]=e,n[Mn]=a}catch(c){Oe(e,e.return,c)}}var Gt=!1,rn=!1,Sc=!1,nh=typeof WeakSet=="function"?WeakSet:Set,dn=null;function pv(e,n){if(e=e.containerInfo,Pc=Vs,e=mm(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,y=-1,C=-1,O=0,$=0,X=e,j=null;n:for(;;){for(var N;X!==a||o!==0&&X.nodeType!==3||(y=p+o),X!==c||r!==0&&X.nodeType!==3||(C=p+r),X.nodeType===3&&(p+=X.nodeValue.length),(N=X.firstChild)!==null;)j=X,X=N;for(;;){if(X===e)break n;if(j===a&&++O===o&&(y=p),j===c&&++$===r&&(C=p),(N=X.nextSibling)!==null)break;X=j,j=X.parentNode}X=N}a=y===-1||C===-1?null:{start:y,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:e,selectionRange:a},Vs=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,o=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var re=Ya(a.type,o);e=r.getSnapshotBeforeUpdate(re,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Oe(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}}function th(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),r&4&&Hi(5,a);break;case 1:if(Pt(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){Oe(a,a.return,p)}else{var o=Ya(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Oe(a,a.return,p)}}r&64&&Qp(a),r&512&&Pi(a,a.return);break;case 3:if(Pt(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gm(e,n)}catch(p){Oe(a,a.return,p)}}break;case 27:n===null&&r&4&&eh(a);case 26:case 5:Pt(e,a),n===null&&r&4&&Zp(a),r&512&&Pi(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),r&4&&ih(e,a);break;case 13:Pt(e,a),r&4&&lh(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_v.bind(null,a),Jv(e,a))));break;case 22:if(r=a.memoizedState!==null||Gt,!r){n=n!==null&&n.memoizedState!==null||rn,o=Gt;var c=rn;Gt=r,(rn=n)&&!c?Jt(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Gt=o,rn=c}break;case 30:break;default:Pt(e,a)}}function ah(e){var n=e.alternate;n!==null&&(e.alternate=null,ah(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,qn=!1;function Ht(e,n,a){for(a=a.child;a!==null;)rh(e,n,a),a=a.sibling}function rh(e,n,a){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(fi,a)}catch{}switch(a.tag){case 26:rn||xt(a,n),Ht(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||xt(a,n);var r=$e,o=qn;ba(a.type)&&($e=a.stateNode,qn=!1),Ht(e,n,a),Wi(a.stateNode),$e=r,qn=o;break;case 5:rn||xt(a,n);case 6:if(r=$e,o=qn,$e=null,Ht(e,n,a),$e=r,qn=o,$e!==null)if(qn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(c){Oe(a,n,c)}else try{$e.removeChild(a.stateNode)}catch(c){Oe(a,n,c)}break;case 18:$e!==null&&(qn?(e=$e,Qh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qr(e)):Qh($e,a.stateNode));break;case 4:r=$e,o=qn,$e=a.stateNode.containerInfo,qn=!0,Ht(e,n,a),$e=r,qn=o;break;case 0:case 11:case 14:case 15:ca(2,a,n),rn||ca(4,a,n),Ht(e,n,a);break;case 1:rn||(xt(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Wp(a,n,r)),Ht(e,n,a);break;case 21:Ht(e,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Ht(e,n,a),rn=r;break;default:Ht(e,n,a)}}function ih(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(a){Oe(n,n.return,a)}}}function lh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(a){Oe(n,n.return,a)}}function hv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new nh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new nh),n;default:throw Error(s(435,e.tag))}}function Cs(e,n){var a=hv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var o=Av.bind(null,e,r);r.then(o,o)}})}function Rn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r],c=e,p=n,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(ba(y.type)){$e=y.stateNode,qn=!1;break e}break;case 5:$e=y.stateNode,qn=!1;break e;case 3:case 4:$e=y.stateNode.containerInfo,qn=!0;break e}y=y.return}if($e===null)throw Error(s(160));rh(c,p,o),$e=null,qn=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sh(n,e),n=n.sibling}var dt=null;function sh(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rn(n,e),En(e),r&4&&(ca(3,e,e.return),Hi(3,e),ca(5,e,e.return));break;case 1:Rn(n,e),En(e),r&512&&(rn||a===null||xt(a,a.return)),r&64&&Gt&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var o=dt;if(Rn(n,e),En(e),r&512&&(rn||a===null||xt(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,o=o.ownerDocument||o;n:switch(r){case"title":c=o.getElementsByTagName("title")[0],(!c||c[hi]||c[mn]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(r),o.head.insertBefore(c,o.querySelector("head > title"))),bn(c,r,a),c[mn]=e,cn(c),r=c;break e;case"link":var p=sg("link","href",o).get(r+(a.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(y,1);break n}}c=o.createElement(r),bn(c,r,a),o.head.appendChild(c);break;case"meta":if(p=sg("meta","content",o).get(r+(a.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(y,1);break n}}c=o.createElement(r),bn(c,r,a),o.head.appendChild(c);break;default:throw Error(s(468,r))}c[mn]=e,cn(c),r=c}e.stateNode=r}else og(o,e.type,e.stateNode);else e.stateNode=lg(o,r,e.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?og(o,e.type,e.stateNode):lg(o,r,e.memoizedProps)):r===null&&e.stateNode!==null&&yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rn(n,e),En(e),r&512&&(rn||a===null||xt(a,a.return)),a!==null&&r&4&&yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rn(n,e),En(e),r&512&&(rn||a===null||xt(a,a.return)),e.flags&32){o=e.stateNode;try{vr(o,"")}catch(re){Oe(e,e.return,re)}}r&4&&e.stateNode!=null&&(o=e.memoizedProps,yc(e,o,a!==null?a.memoizedProps:o)),r&1024&&(Sc=!0);break;case 6:if(Rn(n,e),En(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(re){Oe(e,e.return,re)}}break;case 3:if(Hs=null,o=dt,dt=Us(n.containerInfo),Rn(n,e),dt=o,En(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(re){Oe(e,e.return,re)}Sc&&(Sc=!1,oh(e));break;case 4:r=dt,dt=Us(e.stateNode.containerInfo),Rn(n,e),En(e),dt=r;break;case 12:Rn(n,e),En(e);break;case 31:Rn(n,e),En(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cs(e,r)));break;case 13:Rn(n,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ts=Se()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cs(e,r)));break;case 22:o=e.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,O=Gt,$=rn;if(Gt=O||o,rn=$||C,Rn(n,e),rn=$,Gt=O,En(e),r&8192)e:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(a===null||C||Gt||rn||Xa(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){C=a=n;try{if(c=C.stateNode,o)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=C.stateNode;var X=C.memoizedProps.style,j=X!=null&&X.hasOwnProperty("display")?X.display:null;y.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(re){Oe(C,C.return,re)}}}else if(n.tag===6){if(a===null){C=n;try{C.stateNode.nodeValue=o?"":C.memoizedProps}catch(re){Oe(C,C.return,re)}}}else if(n.tag===18){if(a===null){C=n;try{var N=C.stateNode;o?Wh(N,!0):Wh(C.stateNode,!1)}catch(re){Oe(C,C.return,re)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Cs(e,a))));break;case 19:Rn(n,e),En(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cs(e,r)));break;case 30:break;case 21:break;default:Rn(n,e),En(e)}}function En(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Ip(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var o=a.stateNode,c=vc(e);As(e,c,o);break;case 5:var p=a.stateNode;a.flags&32&&(vr(p,""),a.flags&=-33);var y=vc(e);As(e,y,p);break;case 3:case 4:var C=a.stateNode.containerInfo,O=vc(e);xc(e,O,C);break;default:throw Error(s(161))}}catch($){Oe(e,e.return,$)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function oh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;oh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Pt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)th(e,n.alternate,n),n=n.sibling}function Xa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ca(4,n,n.return),Xa(n);break;case 1:xt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wp(n,n.return,a),Xa(n);break;case 27:Wi(n.stateNode);case 26:case 5:xt(n,n.return),Xa(n);break;case 22:n.memoizedState===null&&Xa(n);break;case 30:Xa(n);break;default:Xa(n)}e=e.sibling}}function Jt(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,o=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:Jt(o,c,a),Hi(4,c);break;case 1:if(Jt(o,c,a),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Oe(r,r.return,O)}if(r=c,o=r.updateQueue,o!==null){var y=r.stateNode;try{var C=o.shared.hiddenCallbacks;if(C!==null)for(o.shared.hiddenCallbacks=null,o=0;o<C.length;o++)Um(C[o],y)}catch(O){Oe(r,r.return,O)}}a&&p&64&&Qp(c),Pi(c,c.return);break;case 27:eh(c);case 26:case 5:Jt(o,c,a),a&&r===null&&p&4&&Zp(c),Pi(c,c.return);break;case 12:Jt(o,c,a);break;case 31:Jt(o,c,a),a&&p&4&&ih(o,c);break;case 13:Jt(o,c,a),a&&p&4&&lh(o,c);break;case 22:c.memoizedState===null&&Jt(o,c,a),Pi(c,c.return);break;case 30:break;default:Jt(o,c,a)}n=n.sibling}}function wc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qi(a))}function _c(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qi(e))}function ft(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)uh(e,n,a,r),n=n.sibling}function uh(e,n,a,r){var o=n.flags;switch(n.tag){case 0:case 11:case 15:ft(e,n,a,r),o&2048&&Hi(9,n);break;case 1:ft(e,n,a,r);break;case 3:ft(e,n,a,r),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qi(e)));break;case 12:if(o&2048){ft(e,n,a,r),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Oe(n,n.return,C)}}else ft(e,n,a,r);break;case 31:ft(e,n,a,r);break;case 13:ft(e,n,a,r);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?ft(e,n,a,r):Ji(e,n):c._visibility&2?ft(e,n,a,r):(c._visibility|=2,Ur(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),o&2048&&wc(p,n);break;case 24:ft(e,n,a,r),o&2048&&_c(n.alternate,n);break;default:ft(e,n,a,r)}}function Ur(e,n,a,r,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,y=a,C=r,O=p.flags;switch(p.tag){case 0:case 11:case 15:Ur(c,p,y,C,o),Hi(8,p);break;case 23:break;case 22:var $=p.stateNode;p.memoizedState!==null?$._visibility&2?Ur(c,p,y,C,o):Ji(c,p):($._visibility|=2,Ur(c,p,y,C,o)),o&&O&2048&&wc(p.alternate,p);break;case 24:Ur(c,p,y,C,o),o&&O&2048&&_c(p.alternate,p);break;default:Ur(c,p,y,C,o)}n=n.sibling}}function Ji(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,o=r.flags;switch(r.tag){case 22:Ji(a,r),o&2048&&wc(r.alternate,r);break;case 24:Ji(a,r),o&2048&&_c(r.alternate,r);break;default:Ji(a,r)}n=n.sibling}}var $i=8192;function Gr(e,n,a){if(e.subtreeFlags&$i)for(e=e.child;e!==null;)ch(e,n,a),e=e.sibling}function ch(e,n,a){switch(e.tag){case 26:Gr(e,n,a),e.flags&$i&&e.memoizedState!==null&&nx(a,dt,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,n,a);break;case 3:case 4:var r=dt;dt=Us(e.stateNode.containerInfo),Gr(e,n,a),dt=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=$i,$i=16777216,Gr(e,n,a),$i=r):Gr(e,n,a));break;default:Gr(e,n,a)}}function dh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];dn=r,mh(r,e)}dh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fh(e),e=e.sibling}function fh(e){switch(e.tag){case 0:case 11:case 15:Vi(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Vi(e);break;case 12:Vi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ms(e)):Vi(e);break;default:Vi(e)}}function Ms(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];dn=r,mh(r,e)}dh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ca(8,n,n.return),Ms(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ms(n));break;default:Ms(n)}e=e.sibling}}function mh(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:qi(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,dn=r;else e:for(a=e;dn!==null;){r=dn;var o=r.sibling,c=r.return;if(ah(r),r===a){dn=null;break e}if(o!==null){o.return=c,dn=o;break e}dn=c}}}var gv={getCacheForType:function(e){var n=hn(nn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return hn(nn).controller.signal}},bv=typeof WeakMap=="function"?WeakMap:Map,Te=0,Ge=null,ge=null,ye=0,Le=0,Hn=null,da=!1,Hr=!1,Ac=!1,$t=0,Fe=0,fa=0,Fa=0,Cc=0,Pn=0,Pr=0,Yi=null,kn=null,Mc=!1,Ts=0,ph=0,qs=1/0,Rs=null,ma=null,sn=0,pa=null,Jr=null,Vt=0,Tc=0,qc=null,hh=null,Xi=0,Rc=null;function Jn(){return(Te&2)!==0&&ye!==0?ye&-ye:z.T!==null?zc():kf()}function gh(){if(Pn===0)if((ye&536870912)===0||xe){var e=jl;jl<<=1,(jl&3932160)===0&&(jl=262144),Pn=e}else Pn=536870912;return e=Un.current,e!==null&&(e.flags|=32),Pn}function Ln(e,n,a){(e===Ge&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&($r(e,0),ha(e,ye,Pn,!1)),pi(e,a),((Te&2)===0||e!==Ge)&&(e===Ge&&((Te&2)===0&&(Fa|=a),Fe===4&&ha(e,ye,Pn,!1)),St(e))}function bh(e,n,a){if((Te&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||mi(e,n),o=r?xv(e,n):kc(e,n,!0),c=r;do{if(o===0){Hr&&!r&&ha(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!yv(a)){o=kc(e,n,!1),c=!1;continue}if(o===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var y=e;o=Yi;var C=y.current.memoizedState.isDehydrated;if(C&&($r(y,p).flags|=256),p=kc(y,p,!1),p!==2){if(Ac&&!C){y.errorRecoveryDisabledLanes|=c,Fa|=c,o=4;break e}c=kn,kn=o,c!==null&&(kn===null?kn=c:kn.push.apply(kn,c))}o=p}if(c=!1,o!==2)continue}}if(o===1){$r(e,0),ha(e,n,0,!0);break}e:{switch(r=e,c=o,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ha(r,n,Pn,!da);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(o=Ts+300-Se(),10<o)){if(ha(r,n,Pn,!da),Ul(r,0,!0)!==0)break e;Vt=n,r.timeoutHandle=Fh(yh.bind(null,r,a,kn,Rs,Mc,n,Pn,Fa,Pr,da,c,"Throttled",-0,0),o);break e}yh(r,a,kn,Rs,Mc,n,Pn,Fa,Pr,da,c,null,-0,0)}}break}while(!0);St(e)}function yh(e,n,a,r,o,c,p,y,C,O,$,X,j,N){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Et},ch(n,c,X);var re=(c&62914560)===c?Ts-Se():(c&4194048)===c?ph-Se():0;if(re=tx(X,re),re!==null){Vt=c,e.cancelPendingCommit=re(Mh.bind(null,e,n,c,a,r,o,p,y,C,$,X,null,j,N)),ha(e,c,p,!O);return}}Mh(e,n,c,a,r,o,p,y,C)}function yv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var o=a[r],c=o.getSnapshot;o=o.value;try{if(!jn(c(),o))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ha(e,n,a,r){n&=~Cc,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var o=n;0<o;){var c=31-Bn(o),p=1<<c;r[c]=-1,o&=~p}a!==0&&qf(e,a,n)}function Es(){return(Te&6)===0?(Fi(0),!1):!0}function Ec(){if(ge!==null){if(Le===0)var e=ge.return;else e=ge,Dt=Ua=null,Yu(e),Dr=null,Ei=0,e=ge;for(;e!==null;)Kp(e.alternate,e),e=e.return;ge=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vt=0,Ec(),Ge=e,ge=a=Lt(e.current,null),ye=n,Le=0,Hn=null,da=!1,Hr=mi(e,n),Ac=!1,Pr=Pn=Cc=Fa=fa=Fe=0,kn=Yi=null,Mc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var o=31-Bn(r),c=1<<o;n|=e[o],r&=~c}return $t=n,Wl(),a}function vh(e,n){pe=null,z.H=Ni,n===Or||n===is?(n=zm(),Le=3):n===Du?(n=zm(),Le=4):Le=n===oc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,ge===null&&(Fe=1,vs(e,Zn(n,e.current)))}function xh(){var e=Un.current;return e===null?!0:(ye&4194048)===ye?tt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===tt:!1}function Sh(){var e=z.H;return z.H=Ni,e===null?Ni:e}function wh(){var e=z.A;return z.A=gv,e}function ks(){Fe=4,da||(ye&4194048)!==ye&&Un.current!==null||(Hr=!0),(fa&134217727)===0&&(Fa&134217727)===0||Ge===null||ha(Ge,ye,Pn,!1)}function kc(e,n,a){var r=Te;Te|=2;var o=Sh(),c=wh();(Ge!==e||ye!==n)&&(Rs=null,$r(e,n)),n=!1;var p=Fe;e:do try{if(Le!==0&&ge!==null){var y=ge,C=Hn;switch(Le){case 8:Ec(),p=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var O=Le;if(Le=0,Hn=null,Vr(e,y,C,O),a&&Hr){p=0;break e}break;default:O=Le,Le=0,Hn=null,Vr(e,y,C,O)}}vv(),p=Fe;break}catch($){vh(e,$)}while(!0);return n&&e.shellSuspendCounter++,Dt=Ua=null,Te=r,z.H=o,z.A=c,ge===null&&(Ge=null,ye=0,Wl()),p}function vv(){for(;ge!==null;)_h(ge)}function xv(e,n){var a=Te;Te|=2;var r=Sh(),o=wh();Ge!==e||ye!==n?(Rs=null,qs=Se()+500,$r(e,n)):Hr=mi(e,n);e:do try{if(Le!==0&&ge!==null){n=ge;var c=Hn;n:switch(Le){case 1:Le=0,Hn=null,Vr(e,n,c,1);break;case 2:case 9:if(Om(c)){Le=0,Hn=null,Ah(n);break}n=function(){Le!==2&&Le!==9||Ge!==e||(Le=7),St(e)},c.then(n,n);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Om(c)?(Le=0,Hn=null,Ah(n)):(Le=0,Hn=null,Vr(e,n,c,7));break;case 5:var p=null;switch(ge.tag){case 26:p=ge.memoizedState;case 5:case 27:var y=ge;if(p?ug(p):y.stateNode.complete){Le=0,Hn=null;var C=y.sibling;if(C!==null)ge=C;else{var O=y.return;O!==null?(ge=O,Ls(O)):ge=null}break n}}Le=0,Hn=null,Vr(e,n,c,5);break;case 6:Le=0,Hn=null,Vr(e,n,c,6);break;case 8:Ec(),Fe=6;break e;default:throw Error(s(462))}}Sv();break}catch($){vh(e,$)}while(!0);return Dt=Ua=null,z.H=r,z.A=o,Te=a,ge!==null?0:(Ge=null,ye=0,Wl(),Fe)}function Sv(){for(;ge!==null&&!bt();)_h(ge)}function _h(e){var n=Xp(e.alternate,e,$t);e.memoizedProps=e.pendingProps,n===null?Ls(e):ge=n}function Ah(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hp(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Hp(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Yu(n);default:Kp(a,n),n=ge=wm(n,$t),n=Xp(a,n,$t)}e.memoizedProps=e.pendingProps,n===null?Ls(e):ge=n}function Vr(e,n,a,r){Dt=Ua=null,Yu(n),Dr=null,Ei=0;var o=n.return;try{if(uv(e,o,n,a,ye)){Fe=1,vs(e,Zn(a,e.current)),ge=null;return}}catch(c){if(o!==null)throw ge=o,c;Fe=1,vs(e,Zn(a,e.current)),ge=null;return}n.flags&32768?(xe||r===1?e=!0:Hr||(ye&536870912)!==0?e=!1:(da=e=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ch(n,e)):Ls(n)}function Ls(e){var n=e;do{if((n.flags&32768)!==0){Ch(n,da);return}e=n.return;var a=fv(n.alternate,n,$t);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Fe===0&&(Fe=5)}function Ch(e,n){do{var a=mv(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Fe=6,ge=null}function Mh(e,n,a,r,o,c,p,y,C){e.cancelPendingCommit=null;do Os();while(sn!==0);if((Te&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(c=n.lanes|n.childLanes,c|=vu,e0(e,a,c,p,y,C),e===Ge&&(ge=Ge=null,ye=0),Jr=n,pa=e,Vt=a,Tc=c,qc=o,hh=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cv(fn,function(){return kh(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,o=Z.p,Z.p=2,p=Te,Te|=4;try{pv(e,n,a)}finally{Te=p,Z.p=o,z.T=r}}sn=1,Th(),qh(),Rh()}}function Th(){if(sn===1){sn=0;var e=pa,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var o=Te;Te|=4;try{sh(n,e);var c=Jc,p=mm(e.containerInfo),y=c.focusedElem,C=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&fm(y.ownerDocument.documentElement,y)){if(C!==null&&pu(y)){var O=C.start,$=C.end;if($===void 0&&($=O),"selectionStart"in y)y.selectionStart=O,y.selectionEnd=Math.min($,y.value.length);else{var X=y.ownerDocument||document,j=X&&X.defaultView||window;if(j.getSelection){var N=j.getSelection(),re=y.textContent.length,ce=Math.min(C.start,re),Ne=C.end===void 0?ce:Math.min(C.end,re);!N.extend&&ce>Ne&&(p=Ne,Ne=ce,ce=p);var R=dm(y,ce),M=dm(y,Ne);if(R&&M&&(N.rangeCount!==1||N.anchorNode!==R.node||N.anchorOffset!==R.offset||N.focusNode!==M.node||N.focusOffset!==M.offset)){var L=X.createRange();L.setStart(R.node,R.offset),N.removeAllRanges(),ce>Ne?(N.addRange(L),N.extend(M.node,M.offset)):(L.setEnd(M.node,M.offset),N.addRange(L))}}}}for(X=[],N=y;N=N.parentNode;)N.nodeType===1&&X.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<X.length;y++){var Y=X[y];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Vs=!!Pc,Jc=Pc=null}finally{Te=o,Z.p=r,z.T=a}}e.current=n,sn=2}}function qh(){if(sn===2){sn=0;var e=pa,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var o=Te;Te|=4;try{th(e,n.alternate,n)}finally{Te=o,Z.p=r,z.T=a}}sn=3}}function Rh(){if(sn===4||sn===3){sn=0,Ee();var e=pa,n=Jr,a=Vt,r=hh;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?sn=5:(sn=0,Jr=pa=null,Eh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ma=null),Ko(a),n=n.stateNode,zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(fi,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,o=Z.p,Z.p=2,z.T=null;try{for(var c=e.onRecoverableError,p=0;p<r.length;p++){var y=r[p];c(y.value,{componentStack:y.stack})}}finally{z.T=n,Z.p=o}}(Vt&3)!==0&&Os(),St(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===Rc?Xi++:(Xi=0,Rc=e):Xi=0,Fi(0)}}function Eh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qi(n)))}function Os(){return Th(),qh(),Rh(),kh()}function kh(){if(sn!==5)return!1;var e=pa,n=Tc;Tc=0;var a=Ko(Vt),r=z.T,o=Z.p;try{Z.p=32>a?32:a,z.T=null,a=qc,qc=null;var c=pa,p=Vt;if(sn=0,Jr=pa=null,Vt=0,(Te&6)!==0)throw Error(s(331));var y=Te;if(Te|=4,fh(c.current),uh(c,c.current,p,a),Te=y,Fi(0,!1),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(fi,c)}catch{}return!0}finally{Z.p=o,z.T=r,Eh(e,n)}}function Lh(e,n,a){n=Zn(a,n),n=sc(e.stateNode,n,2),e=sa(e,n,2),e!==null&&(pi(e,2),St(e))}function Oe(e,n,a){if(e.tag===3)Lh(e,e,a);else for(;n!==null;){if(n.tag===3){Lh(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))){e=Zn(a,e),a=Op(2),r=sa(n,a,2),r!==null&&(Dp(a,r,n,e),pi(r,2),St(r));break}}n=n.return}}function Lc(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new bv;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(a)||(Ac=!0,o.add(a),e=wv.bind(null,e,n,a),n.then(e,e))}function wv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(ye&a)===a&&(Fe===4||Fe===3&&(ye&62914560)===ye&&300>Se()-Ts?(Te&2)===0&&$r(e,0):Cc|=a,Pr===ye&&(Pr=0)),St(e)}function Oh(e,n){n===0&&(n=Tf()),e=Ba(e,n),e!==null&&(pi(e,n),St(e))}function _v(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Oh(e,a)}function Av(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Oh(e,a)}function Cv(e,n){return Dn(e,n)}var Ds=null,Yr=null,Oc=!1,zs=!1,Dc=!1,ga=0;function St(e){e!==Yr&&e.next===null&&(Yr===null?Ds=Yr=e:Yr=Yr.next=e),zs=!0,Oc||(Oc=!0,Tv())}function Fi(e,n){if(!Dc&&zs){Dc=!0;do for(var a=!1,r=Ds;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var p=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-Bn(42|e)+1)-1,c&=o&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,jh(r,c))}else c=ye,c=Ul(r,r===Ge?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||mi(r,c)||(a=!0,jh(r,c));r=r.next}while(a);Dc=!1}}function Mv(){Dh()}function Dh(){zs=Oc=!1;var e=0;ga!==0&&jv()&&(e=ga);for(var n=Se(),a=null,r=Ds;r!==null;){var o=r.next,c=zh(r,n);c===0?(r.next=null,a===null?Ds=o:a.next=o,o===null&&(Yr=a)):(a=r,(e!==0||(c&3)!==0)&&(zs=!0)),r=o}sn!==0&&sn!==5||Fi(e),ga!==0&&(ga=0)}function zh(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-Bn(c),y=1<<p,C=o[p];C===-1?((y&a)===0||(y&r)!==0)&&(o[p]=Iy(y,n)):C<=n&&(e.expiredLanes|=y),c&=~y}if(n=Ge,a=ye,a=Ul(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&gt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||mi(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&gt(r),Ko(a)){case 2:case 8:a=Je;break;case 32:a=fn;break;case 268435456:a=fr;break;default:a=fn}return r=Bh.bind(null,e),a=Dn(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&gt(r),e.callbackPriority=2,e.callbackNode=null,2}function Bh(e,n){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Os()&&e.callbackNode!==a)return null;var r=ye;return r=Ul(e,e===Ge?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(bh(e,r,n),zh(e,Se()),e.callbackNode!=null&&e.callbackNode===a?Bh.bind(null,e):null)}function jh(e,n){if(Os())return null;bh(e,n,!0)}function Tv(){Uv(function(){(Te&6)!==0?Dn(un,Mv):Dh()})}function zc(){if(ga===0){var e=kr;e===0&&(e=Bl,Bl<<=1,(Bl&261888)===0&&(Bl=256)),ga=e}return ga}function Nh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function Uh(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function qv(e,n,a,r,o){if(n==="submit"&&a&&a.stateNode===o){var c=Nh((o[Mn]||null).action),p=r.submitter;p&&(n=(n=p[Mn]||null)?Nh(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var y=new Xl("action","action",null,r,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ga!==0){var C=p?Uh(o,p):new FormData(o);nc(a,{pending:!0,data:C,method:o.method,action:c},null,C)}}else typeof c=="function"&&(y.preventDefault(),C=p?Uh(o,p):new FormData(o),nc(a,{pending:!0,data:C,method:o.method,action:c},c,C))},currentTarget:o}]})}}for(var Bc=0;Bc<yu.length;Bc++){var jc=yu[Bc],Rv=jc.toLowerCase(),Ev=jc[0].toUpperCase()+jc.slice(1);ct(Rv,"on"+Ev)}ct(gm,"onAnimationEnd"),ct(bm,"onAnimationIteration"),ct(ym,"onAnimationStart"),ct("dblclick","onDoubleClick"),ct("focusin","onFocus"),ct("focusout","onBlur"),ct(Y0,"onTransitionRun"),ct(X0,"onTransitionStart"),ct(F0,"onTransitionCancel"),ct(vm,"onTransitionEnd"),br("onMouseEnter",["mouseout","mouseover"]),br("onMouseLeave",["mouseout","mouseover"]),br("onPointerEnter",["pointerout","pointerover"]),br("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function Gh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var c=void 0;if(n)for(var p=r.length-1;0<=p;p--){var y=r[p],C=y.instance,O=y.currentTarget;if(y=y.listener,C!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=O;try{c(o)}catch($){Ql($)}o.currentTarget=null,c=C}else for(p=0;p<r.length;p++){if(y=r[p],C=y.instance,O=y.currentTarget,y=y.listener,C!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=O;try{c(o)}catch($){Ql($)}o.currentTarget=null,c=C}}}}function be(e,n){var a=n[Qo];a===void 0&&(a=n[Qo]=new Set);var r=e+"__bubble";a.has(r)||(Hh(n,e,2,!1),a.add(r))}function Nc(e,n,a){var r=0;n&&(r|=4),Hh(a,e,r,n)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[Bs]){e[Bs]=!0,Df.forEach(function(a){a!=="selectionchange"&&(kv.has(a)||Nc(a,!1,e),Nc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bs]||(n[Bs]=!0,Nc("selectionchange",!1,n))}}function Hh(e,n,a,r){switch(gg(n)){case 2:var o=ix;break;case 8:o=lx;break;default:o=ed}a=o.bind(null,n,a,e),o=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,a,{capture:!0,passive:o}):e.addEventListener(n,a,!0):o!==void 0?e.addEventListener(n,a,{passive:o}):e.addEventListener(n,a,!1)}function Gc(e,n,a,r,o){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var y=r.stateNode.containerInfo;if(y===o)break;if(p===4)for(p=r.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;y!==null;){if(p=pr(y),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){r=c=p;continue e}y=y.parentNode}}r=r.return}Yf(function(){var O=c,$=au(a),X=[];e:{var j=xm.get(e);if(j!==void 0){var N=Xl,re=e;switch(e){case"keypress":if(Vl(a)===0)break e;case"keydown":case"keyup":N=A0;break;case"focusin":re="focus",N=uu;break;case"focusout":re="blur",N=uu;break;case"beforeblur":case"afterblur":N=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=T0;break;case gm:case bm:case ym:N=h0;break;case vm:N=R0;break;case"scroll":case"scrollend":N=c0;break;case"wheel":N=k0;break;case"copy":case"cut":case"paste":N=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Wf;break;case"toggle":case"beforetoggle":N=O0}var ce=(n&4)!==0,Ne=!ce&&(e==="scroll"||e==="scrollend"),R=ce?j!==null?j+"Capture":null:j;ce=[];for(var M=O,L;M!==null;){var Y=M;if(L=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||L===null||R===null||(Y=bi(M,R),Y!=null&&ce.push(Qi(M,Y,L))),Ne)break;M=M.return}0<ce.length&&(j=new N(j,re,null,a,$),X.push({event:j,listeners:ce}))}}if((n&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",j&&a!==tu&&(re=a.relatedTarget||a.fromElement)&&(pr(re)||re[mr]))break e;if((N||j)&&(j=$.window===$?$:(j=$.ownerDocument)?j.defaultView||j.parentWindow:window,N?(re=a.relatedTarget||a.toElement,N=O,re=re?pr(re):null,re!==null&&(Ne=d(re),ce=re.tag,re!==Ne||ce!==5&&ce!==27&&ce!==6)&&(re=null)):(N=null,re=O),N!==re)){if(ce=Kf,Y="onMouseLeave",R="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Wf,Y="onPointerLeave",R="onPointerEnter",M="pointer"),Ne=N==null?j:gi(N),L=re==null?j:gi(re),j=new ce(Y,M+"leave",N,a,$),j.target=Ne,j.relatedTarget=L,Y=null,pr($)===O&&(ce=new ce(R,M+"enter",re,a,$),ce.target=L,ce.relatedTarget=Ne,Y=ce),Ne=Y,N&&re)n:{for(ce=Lv,R=N,M=re,L=0,Y=R;Y;Y=ce(Y))L++;Y=0;for(var oe=M;oe;oe=ce(oe))Y++;for(;0<L-Y;)R=ce(R),L--;for(;0<Y-L;)M=ce(M),Y--;for(;L--;){if(R===M||M!==null&&R===M.alternate){ce=R;break n}R=ce(R),M=ce(M)}ce=null}else ce=null;N!==null&&Ph(X,j,N,ce,!1),re!==null&&Ne!==null&&Ph(X,Ne,re,ce,!0)}}e:{if(j=O?gi(O):window,N=j.nodeName&&j.nodeName.toLowerCase(),N==="select"||N==="input"&&j.type==="file")var _e=im;else if(am(j))if(lm)_e=J0;else{_e=H0;var le=G0}else N=j.nodeName,!N||N.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?O&&nu(O.elementType)&&(_e=im):_e=P0;if(_e&&(_e=_e(e,O))){rm(X,_e,a,$);break e}le&&le(e,j,O),e==="focusout"&&O&&j.type==="number"&&O.memoizedProps.value!=null&&eu(j,"number",j.value)}switch(le=O?gi(O):window,e){case"focusin":(am(le)||le.contentEditable==="true")&&(_r=le,hu=O,Ci=null);break;case"focusout":Ci=hu=_r=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,pm(X,a,$);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":pm(X,a,$)}var he;if(du)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else wr?nm(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Zf&&a.locale!=="ko"&&(wr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&wr&&(he=Xf()):(ea=$,lu="value"in ea?ea.value:ea.textContent,wr=!0)),le=js(O,ve),0<le.length&&(ve=new Qf(ve,e,null,a,$),X.push({event:ve,listeners:le}),he?ve.data=he:(he=tm(a),he!==null&&(ve.data=he)))),(he=z0?B0(e,a):j0(e,a))&&(ve=js(O,"onBeforeInput"),0<ve.length&&(le=new Qf("onBeforeInput","beforeinput",null,a,$),X.push({event:le,listeners:ve}),le.data=he)),qv(X,e,O,a,$)}Gh(X,n)})}function Qi(e,n,a){return{instance:e,listener:n,currentTarget:a}}function js(e,n){for(var a=n+"Capture",r=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=bi(e,a),o!=null&&r.unshift(Qi(e,o,c)),o=bi(e,n),o!=null&&r.push(Qi(e,o,c))),e.tag===3)return r;e=e.return}return[]}function Lv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ph(e,n,a,r,o){for(var c=n._reactName,p=[];a!==null&&a!==r;){var y=a,C=y.alternate,O=y.stateNode;if(y=y.tag,C!==null&&C===r)break;y!==5&&y!==26&&y!==27||O===null||(C=O,o?(O=bi(a,c),O!=null&&p.unshift(Qi(a,O,C))):o||(O=bi(a,c),O!=null&&p.push(Qi(a,O,C)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var Ov=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Jh(e){return(typeof e=="string"?e:""+e).replace(Ov,`
`).replace(Dv,"")}function $h(e,n){return n=Jh(n),Jh(e)===n}function je(e,n,a,r,o,c){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||vr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&vr(e,""+r);break;case"className":Hl(e,"class",r);break;case"tabIndex":Hl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(e,a,r);break;case"style":$f(e,r,c);break;case"data":if(n!=="object"){Hl(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Jl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&je(e,n,"name",o.name,o,null),je(e,n,"formEncType",o.formEncType,o,null),je(e,n,"formMethod",o.formMethod,o,null),je(e,n,"formTarget",o.formTarget,o,null)):(je(e,n,"encType",o.encType,o,null),je(e,n,"method",o.method,o,null),je(e,n,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Jl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Et);break;case"onScroll":r!=null&&be("scroll",e);break;case"onScrollEnd":r!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Jl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":be("beforetoggle",e),be("toggle",e),Gl(e,"popover",r);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Gl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=o0.get(a)||a,Gl(e,a,r))}}function Hc(e,n,a,r,o,c){switch(a){case"style":$f(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?vr(e,r):(typeof r=="number"||typeof r=="bigint")&&vr(e,""+r);break;case"onScroll":r!=null&&be("scroll",e);break;case"onScrollEnd":r!=null&&be("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Et);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),n=a.slice(2,o?a.length-7:void 0),c=e[Mn]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,o),typeof r=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,o);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Gl(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var r=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(e,n,c,p,a,null)}}o&&je(e,n,"srcSet",a.srcSet,a,null),r&&je(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var y=c=p=o=null,C=null,O=null;for(r in a)if(a.hasOwnProperty(r)){var $=a[r];if($!=null)switch(r){case"name":o=$;break;case"type":p=$;break;case"checked":C=$;break;case"defaultChecked":O=$;break;case"value":c=$;break;case"defaultValue":y=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:je(e,n,r,$,a,null)}}Gf(e,c,y,C,O,p,o,!1);return;case"select":be("invalid",e),r=p=c=null;for(o in a)if(a.hasOwnProperty(o)&&(y=a[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":r=y;default:je(e,n,o,y,a,null)}n=c,a=p,e.multiple=!!r,n!=null?yr(e,!!r,n,!1):a!=null&&yr(e,!!r,a,!0);return;case"textarea":be("invalid",e),c=o=r=null;for(p in a)if(a.hasOwnProperty(p)&&(y=a[p],y!=null))switch(p){case"value":r=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:je(e,n,p,y,a,null)}Pf(e,r,o,c);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(r=a[C],r!=null))switch(C){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:je(e,n,C,r,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(r=0;r<Ki.length;r++)be(Ki[r],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(r=a[O],r!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(e,n,O,r,a,null)}return;default:if(nu(n)){for($ in a)a.hasOwnProperty($)&&(r=a[$],r!==void 0&&Hc(e,n,$,r,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(r=a[y],r!=null&&je(e,n,y,r,a,null))}function zv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,p=null,y=null,C=null,O=null,$=null;for(N in a){var X=a[N];if(a.hasOwnProperty(N)&&X!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":C=X;default:r.hasOwnProperty(N)||je(e,n,N,null,r,X)}}for(var j in r){var N=r[j];if(X=a[j],r.hasOwnProperty(j)&&(N!=null||X!=null))switch(j){case"type":c=N;break;case"name":o=N;break;case"checked":O=N;break;case"defaultChecked":$=N;break;case"value":p=N;break;case"defaultValue":y=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,n));break;default:N!==X&&je(e,n,j,N,r,X)}}Io(e,p,y,C,O,$,c,o);return;case"select":N=p=y=j=null;for(c in a)if(C=a[c],a.hasOwnProperty(c)&&C!=null)switch(c){case"value":break;case"multiple":N=C;default:r.hasOwnProperty(c)||je(e,n,c,null,r,C)}for(o in r)if(c=r[o],C=a[o],r.hasOwnProperty(o)&&(c!=null||C!=null))switch(o){case"value":j=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==C&&je(e,n,o,c,r,C)}n=y,a=p,r=N,j!=null?yr(e,!!a,j,!1):!!r!=!!a&&(n!=null?yr(e,!!a,n,!0):yr(e,!!a,a?[]:"",!1));return;case"textarea":N=j=null;for(y in a)if(o=a[y],a.hasOwnProperty(y)&&o!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:je(e,n,y,null,r,o)}for(p in r)if(o=r[p],c=a[p],r.hasOwnProperty(p)&&(o!=null||c!=null))switch(p){case"value":j=o;break;case"defaultValue":N=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==c&&je(e,n,p,o,r,c)}Hf(e,j,N);return;case"option":for(var re in a)if(j=a[re],a.hasOwnProperty(re)&&j!=null&&!r.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:je(e,n,re,null,r,j)}for(C in r)if(j=r[C],N=a[C],r.hasOwnProperty(C)&&j!==N&&(j!=null||N!=null))switch(C){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:je(e,n,C,j,r,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)j=a[ce],a.hasOwnProperty(ce)&&j!=null&&!r.hasOwnProperty(ce)&&je(e,n,ce,null,r,j);for(O in r)if(j=r[O],N=a[O],r.hasOwnProperty(O)&&j!==N&&(j!=null||N!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:je(e,n,O,j,r,N)}return;default:if(nu(n)){for(var Ne in a)j=a[Ne],a.hasOwnProperty(Ne)&&j!==void 0&&!r.hasOwnProperty(Ne)&&Hc(e,n,Ne,void 0,r,j);for($ in r)j=r[$],N=a[$],!r.hasOwnProperty($)||j===N||j===void 0&&N===void 0||Hc(e,n,$,j,r,N);return}}for(var R in a)j=a[R],a.hasOwnProperty(R)&&j!=null&&!r.hasOwnProperty(R)&&je(e,n,R,null,r,j);for(X in r)j=r[X],N=a[X],!r.hasOwnProperty(X)||j===N||j==null&&N==null||je(e,n,X,j,r,N)}function Vh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var o=a[r],c=o.transferSize,p=o.initiatorType,y=o.duration;if(c&&y&&Vh(p)){for(p=0,y=o.responseEnd,r+=1;r<a.length;r++){var C=a[r],O=C.startTime;if(O>y)break;var $=C.transferSize,X=C.initiatorType;$&&Vh(X)&&(C=C.responseEnd,p+=$*(C<y?1:(y-O)/(C-O)))}if(--r,n+=8*(c+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pc=null,Jc=null;function Ns(e){return e.nodeType===9?e:e.ownerDocument}function Yh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $c(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vc=null;function jv(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var Fh=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(e){return Kh.resolve(null).then(e).catch(Gv)}:Fh;function Gv(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Qh(e,n){var a=n,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(o),Qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Wi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Wi(a);for(var c=a.firstChild;c;){var p=c.nextSibling,y=c.nodeName;c[hi]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Wi(e.ownerDocument.body);a=o}while(a);Qr(n)}function Wh(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Yc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yc(a),Wo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hv(e,n,a,r){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[hi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=at(e.nextSibling),e===null)break}return null}function Pv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=at(e.nextSibling),e===null))return null;return e}function Zh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=at(e.nextSibling),e===null))return null;return e}function Xc(e){return e.data==="$?"||e.data==="$~"}function Fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function at(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kc=null;function Ih(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return at(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function eg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ng(e,n,a){switch(n=Ns(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Wi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wo(e)}var rt=new Map,tg=new Set;function Us(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yt=Z.d;Z.d={f:$v,r:Vv,D:Yv,C:Xv,L:Fv,m:Kv,X:Wv,S:Qv,M:Zv};function $v(){var e=Yt.f(),n=Es();return e||n}function Vv(e){var n=hr(e);n!==null&&n.tag===5&&n.type==="form"?vp(n):Yt.r(e)}var Xr=typeof document>"u"?null:document;function ag(e,n,a){var r=Xr;if(r&&typeof n=="string"&&n){var o=Qn(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),tg.has(o)||(tg.add(o),e={rel:e,crossOrigin:a,href:n},r.querySelector(o)===null&&(n=r.createElement("link"),bn(n,"link",e),cn(n),r.head.appendChild(n)))}}function Yv(e){Yt.D(e),ag("dns-prefetch",e,null)}function Xv(e,n){Yt.C(e,n),ag("preconnect",e,n)}function Fv(e,n,a){Yt.L(e,n,a);var r=Xr;if(r&&e&&n){var o='link[rel="preload"][as="'+Qn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Qn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Qn(a.imageSizes)+'"]')):o+='[href="'+Qn(e)+'"]';var c=o;switch(n){case"style":c=Fr(e);break;case"script":c=Kr(e)}rt.has(c)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),rt.set(c,e),r.querySelector(o)!==null||n==="style"&&r.querySelector(Zi(c))||n==="script"&&r.querySelector(Ii(c))||(n=r.createElement("link"),bn(n,"link",e),cn(n),r.head.appendChild(n)))}}function Kv(e,n){Yt.m(e,n);var a=Xr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Qn(r)+'"][href="'+Qn(e)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Kr(e)}if(!rt.has(c)&&(e=b({rel:"modulepreload",href:e},n),rt.set(c,e),a.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ii(c)))return}r=a.createElement("link"),bn(r,"link",e),cn(r),a.head.appendChild(r)}}}function Qv(e,n,a){Yt.S(e,n,a);var r=Xr;if(r&&e){var o=gr(r).hoistableStyles,c=Fr(e);n=n||"default";var p=o.get(c);if(!p){var y={loading:0,preload:null};if(p=r.querySelector(Zi(c)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=rt.get(c))&&Qc(e,a);var C=p=r.createElement("link");cn(C),bn(C,"link",e),C._p=new Promise(function(O,$){C.onload=O,C.onerror=$}),C.addEventListener("load",function(){y.loading|=1}),C.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Gs(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:y},o.set(c,p)}}}function Wv(e,n){Yt.X(e,n);var a=Xr;if(a&&e){var r=gr(a).hoistableScripts,o=Kr(e),c=r.get(o);c||(c=a.querySelector(Ii(o)),c||(e=b({src:e,async:!0},n),(n=rt.get(o))&&Wc(e,n),c=a.createElement("script"),cn(c),bn(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function Zv(e,n){Yt.M(e,n);var a=Xr;if(a&&e){var r=gr(a).hoistableScripts,o=Kr(e),c=r.get(o);c||(c=a.querySelector(Ii(o)),c||(e=b({src:e,async:!0,type:"module"},n),(n=rt.get(o))&&Wc(e,n),c=a.createElement("script"),cn(c),bn(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function rg(e,n,a,r){var o=(o=de.current)?Us(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fr(a.href),a=gr(o).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fr(a.href);var c=gr(o).hoistableStyles,p=c.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=o.querySelector(Zi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},rt.set(e,a),c||Iv(o,e,a,p.state))),n&&r===null)throw Error(s(528,""));return p}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=gr(o).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Fr(e){return'href="'+Qn(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function ig(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Iv(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),cn(n),e.head.appendChild(n))}function Kr(e){return'[src="'+Qn(e)+'"]'}function Ii(e){return"script[async]"+e}function lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Qn(a.href)+'"]');if(r)return n.instance=r,cn(r),r;var o=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),cn(r),bn(r,"style",o),Gs(r,a.precedence,e),n.instance=r;case"stylesheet":o=Fr(a.href);var c=e.querySelector(Zi(o));if(c)return n.state.loading|=4,n.instance=c,cn(c),c;r=ig(a),(o=rt.get(o))&&Qc(r,o),c=(e.ownerDocument||e).createElement("link"),cn(c);var p=c;return p._p=new Promise(function(y,C){p.onload=y,p.onerror=C}),bn(c,"link",r),n.state.loading|=4,Gs(c,a.precedence,e),n.instance=c;case"script":return c=Kr(a.src),(o=e.querySelector(Ii(c)))?(n.instance=o,cn(o),o):(r=a,(o=rt.get(c))&&(r=b({},a),Wc(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),cn(o),bn(o,"link",r),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gs(r,a.precedence,e));return n.instance}function Gs(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,p=0;p<r.length;p++){var y=r[p];if(y.dataset.precedence===n)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hs=null;function sg(e,n,a){if(Hs===null){var r=new Map,o=Hs=new Map;o.set(a,r)}else o=Hs,r=o.get(a),r||(r=new Map,o.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var c=a[o];if(!(c[hi]||c[mn]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var y=r.get(p);y?y.push(c):r.set(p,[c])}}return r}function og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ex(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nx(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=Fr(r.href),c=n.querySelector(Zi(o));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ps.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,cn(c);return}c=n.ownerDocument||n,r=ig(r),(o=rt.get(o))&&Qc(r,o),c=c.createElement("link"),cn(c);var p=c;p._p=new Promise(function(y,C){p.onload=y,p.onerror=C}),bn(c,"link",r),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ps.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zc=0;function tx(e,n){return e.stylesheets&&e.count===0&&$s(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Zc===0&&(Zc=62500*Bv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Zc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(o)}}:null}function Ps(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$s(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Js=null;function $s(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Js=new Map,n.forEach(ax,e),Js=null,Ps.call(e))}function ax(e,n){if(!(n.state.loading&4)){var a=Js.get(e);if(a)var r=a.get(null);else{a=new Map,Js.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var p=o[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),r=p)}r&&a.set(null,r)}o=n.instance,p=o.getAttribute("data-precedence"),c=a.get(p)||r,c===r&&a.set(null,o),a.set(p,o),this.count++,r=Ps.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var el={$$typeof:U,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function rx(e,n,a,r,o,c,p,y,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function cg(e,n,a,r,o,c,p,y,C,O,$,X){return e=new rx(e,n,a,p,C,O,$,X,y),n=1,c===!0&&(n|=24),c=Nn(3,null,null,n),e.current=c,c.stateNode=e,n=ku(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},zu(c),e}function dg(e){return e?(e=Mr,e):Mr}function fg(e,n,a,r,o,c){o=dg(o),r.context===null?r.context=o:r.pendingContext=o,r=la(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=sa(e,r,n),a!==null&&(Ln(a,e,n),Li(a,e,n))}function mg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ic(e,n){mg(e,n),(e=e.alternate)&&mg(e,n)}function pg(e){if(e.tag===13||e.tag===31){var n=Ba(e,67108864);n!==null&&Ln(n,e,67108864),Ic(e,67108864)}}function hg(e){if(e.tag===13||e.tag===31){var n=Jn();n=Fo(n);var a=Ba(e,n);a!==null&&Ln(a,e,n),Ic(e,n)}}var Vs=!0;function ix(e,n,a,r){var o=z.T;z.T=null;var c=Z.p;try{Z.p=2,ed(e,n,a,r)}finally{Z.p=c,z.T=o}}function lx(e,n,a,r){var o=z.T;z.T=null;var c=Z.p;try{Z.p=8,ed(e,n,a,r)}finally{Z.p=c,z.T=o}}function ed(e,n,a,r){if(Vs){var o=nd(r);if(o===null)Gc(e,n,r,Ys,a),bg(e,r);else if(ox(o,e,n,a,r))r.stopPropagation();else if(bg(e,r),n&4&&-1<sx.indexOf(e)){for(;o!==null;){var c=hr(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ka(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var C=1<<31-Bn(p);y.entanglements[1]|=C,p&=~C}St(c),(Te&6)===0&&(qs=Se()+500,Fi(0))}}break;case 31:case 13:y=Ba(c,2),y!==null&&Ln(y,c,2),Es(),Ic(c,2)}if(c=nd(r),c===null&&Gc(e,n,r,Ys,a),c===o)break;o=c}o!==null&&r.stopPropagation()}else Gc(e,n,r,null,a)}}function nd(e){return e=au(e),td(e)}var Ys=null;function td(e){if(Ys=null,e=pr(e),e!==null){var n=d(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ys=e,null}function gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vn()){case un:return 2;case Je:return 8;case fn:case Fn:return 32;case fr:return 268435456;default:return 32}default:return 32}}var ad=!1,ya=null,va=null,xa=null,nl=new Map,tl=new Map,Sa=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,n){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function al(e,n,a,r,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},n!==null&&(n=hr(n),n!==null&&pg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function ox(e,n,a,r,o){switch(n){case"focusin":return ya=al(ya,e,n,a,r,o),!0;case"dragenter":return va=al(va,e,n,a,r,o),!0;case"mouseover":return xa=al(xa,e,n,a,r,o),!0;case"pointerover":var c=o.pointerId;return nl.set(c,al(nl.get(c)||null,e,n,a,r,o)),!0;case"gotpointercapture":return c=o.pointerId,tl.set(c,al(tl.get(c)||null,e,n,a,r,o)),!0}return!1}function yg(e){var n=pr(e.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Lf(e.priority,function(){hg(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,Lf(e.priority,function(){hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);tu=r,a.target.dispatchEvent(r),tu=null}else return n=hr(a),n!==null&&pg(n),e.blockedOn=a,!1;n.shift()}return!0}function vg(e,n,a){Xs(e)&&a.delete(n)}function ux(){ad=!1,ya!==null&&Xs(ya)&&(ya=null),va!==null&&Xs(va)&&(va=null),xa!==null&&Xs(xa)&&(xa=null),nl.forEach(vg),tl.forEach(vg)}function Fs(e,n){e.blockedOn===n&&(e.blockedOn=null,ad||(ad=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,ux)))}var Ks=null;function xg(e){Ks!==e&&(Ks=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Ks===e&&(Ks=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],o=e[n+2];if(typeof r!="function"){if(td(r||a)===null)continue;break}var c=hr(a);c!==null&&(e.splice(n,3),n-=3,nc(c,{pending:!0,data:o,method:a.method,action:r},r,o))}}))}function Qr(e){function n(C){return Fs(C,e)}ya!==null&&Fs(ya,e),va!==null&&Fs(va,e),xa!==null&&Fs(xa,e),nl.forEach(n),tl.forEach(n);for(var a=0;a<Sa.length;a++){var r=Sa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)yg(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var o=a[r],c=a[r+1],p=o[Mn]||null;if(typeof c=="function")p||xg(a);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,p=c[Mn]||null)y=p.formAction;else if(td(o)!==null)continue}else y=p.action;typeof y=="function"?a[r+1]=y:(a.splice(r,3),r-=3),xg(a)}}}function Sg(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function rd(e){this._internalRoot=e}Qs.prototype.render=rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();fg(a,r,e,n,null,null)},Qs.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fg(e.current,2,null,e,null,null),Es(),n[mr]=null}};function Qs(e){this._internalRoot=e}Qs.prototype.unstable_scheduleHydration=function(e){if(e){var n=kf();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Sa.length&&n!==0&&n<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&yg(e)}};var wg=i.version;if(wg!=="19.2.1")throw Error(s(527,wg,"19.2.1"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var cx={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{fi=Ws.inject(cx),zn=Ws}catch{}}return ol.createRoot=function(e,n){if(!u(e))throw Error(s(299));var a=!1,r="",o=Rp,c=Ep,p=kp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=cg(e,1,!1,null,null,a,r,null,o,c,p,Sg),e[mr]=n.current,Uc(e),new rd(n)},ol.hydrateRoot=function(e,n,a){if(!u(e))throw Error(s(299));var r=!1,o="",c=Rp,p=Ep,y=kp,C=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),n=cg(e,1,!0,n,a??null,r,o,C,c,p,y,Sg),n.context=dg(null),a=n.current,r=Jn(),r=Fo(r),o=la(r),o.callback=null,sa(a,o,r),a=r,n.current.lanes=a,pi(n,a),St(n),e[mr]=n.current,Uc(e),new Qs(n)},ol.version="19.2.1",ol}var Wg;function uS(){if(Wg)return Sd.exports;Wg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Sd.exports=oS(),Sd.exports}var cS=uS();const dS=Nb(cS),fS="/project-textile/assets/placeholder1-JcdSYIv8.png",Zg=Object.freeze(Object.defineProperty({__proto__:null,default:fS},Symbol.toStringTag,{value:"Module"})),mS="/project-textile/assets/placeholder1-B8hzmm9Y.jpg",Ig=Object.freeze(Object.defineProperty({__proto__:null,default:mS},Symbol.toStringTag,{value:"Module"})),pS="/project-textile/assets/placeholder1-JcdSYIv8.png",eb=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"})),nb=[{path:["index.html"],title:"Equation Playground and Log Page"},{path:["ongoing","index.html"],title:"Ongoing Research Index Page",abstract:`
Optionally, use this document to provide optional information.
`},{path:["ongoing","project-1.html"],title:"Sample LATeX Document without mathtools",abstract:`
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue
eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida
placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
`},{path:["ongoing","test.html"],title:"Equation Playground and Log Page",abstract:`
HELLOW dasldas sd a
`},{path:["publications","index.html"],title:"Publication Index Page",abstract:`
Optionally, use this document to provide optional information.
`},{path:["publications","project-1.html"],title:"project-1"},{path:["publications","project-2.html"],title:"project-2"},{path:["publications","pub-1.html"],title:"Sample LATeX Document without mathtools",abstract:`
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue
eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida
placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
`},{path:["ongoing","ongoingcopy","index.html"],title:"index"}],wl={black:"#000",white:"#fff"},Wr={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Zr={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Ir={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},ei={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},ni={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ul={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},hS={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function rr(t,...i){const l=new URL(`https://mui.com/production-error/?code=${t}`);return i.forEach(s=>l.searchParams.append("args[]",s)),`Minified MUI error #${t}; visit ${l} for the full message.`}const Ft="$$material";function Ud(){return Ud=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)({}).hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},Ud.apply(null,arguments)}function gS(t){if(t.sheet)return t.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===t)return document.styleSheets[i]}function bS(t){var i=document.createElement("style");return i.setAttribute("data-emotion",t.key),t.nonce!==void 0&&i.setAttribute("nonce",t.nonce),i.appendChild(document.createTextNode("")),i.setAttribute("data-s",""),i}var yS=(function(){function t(l){var s=this;this._insertTag=function(u){var d;s.tags.length===0?s.insertionPoint?d=s.insertionPoint.nextSibling:s.prepend?d=s.container.firstChild:d=s.before:d=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(u,d),s.tags.push(u)},this.isSpeedy=l.speedy===void 0?!0:l.speedy,this.tags=[],this.ctr=0,this.nonce=l.nonce,this.key=l.key,this.container=l.container,this.prepend=l.prepend,this.insertionPoint=l.insertionPoint,this.before=null}var i=t.prototype;return i.hydrate=function(s){s.forEach(this._insertTag)},i.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bS(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var d=gS(u);try{d.insertRule(s,d.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(s));this.ctr++},i.flush=function(){this.tags.forEach(function(s){var u;return(u=s.parentNode)==null?void 0:u.removeChild(s)}),this.tags=[],this.ctr=0},t})(),Sn="-ms-",_o="-moz-",qe="-webkit-",iy="comm",of="rule",uf="decl",vS="@import",ly="@keyframes",xS="@layer",SS=Math.abs,ko=String.fromCharCode,wS=Object.assign;function _S(t,i){return yn(t,0)^45?(((i<<2^yn(t,0))<<2^yn(t,1))<<2^yn(t,2))<<2^yn(t,3):0}function sy(t){return t.trim()}function AS(t,i){return(t=i.exec(t))?t[0]:t}function Re(t,i,l){return t.replace(i,l)}function Gd(t,i){return t.indexOf(i)}function yn(t,i){return t.charCodeAt(i)|0}function _l(t,i,l){return t.slice(i,l)}function _t(t){return t.length}function cf(t){return t.length}function ao(t,i){return i.push(t),t}function CS(t,i){return t.map(i).join("")}var Lo=1,oi=1,oy=0,On=0,ln=0,ui="";function Oo(t,i,l,s,u,d,f){return{value:t,root:i,parent:l,type:s,props:u,children:d,line:Lo,column:oi,length:f,return:""}}function cl(t,i){return wS(Oo("",null,null,"",null,null,0),t,{length:-t.length},i)}function MS(){return ln}function TS(){return ln=On>0?yn(ui,--On):0,oi--,ln===10&&(oi=1,Lo--),ln}function Yn(){return ln=On<oy?yn(ui,On++):0,oi++,ln===10&&(oi=1,Lo++),ln}function Mt(){return yn(ui,On)}function uo(){return On}function ql(t,i){return _l(ui,t,i)}function Al(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uy(t){return Lo=oi=1,oy=_t(ui=t),On=0,[]}function cy(t){return ui="",t}function co(t){return sy(ql(On-1,Hd(t===91?t+2:t===40?t+1:t)))}function qS(t){for(;(ln=Mt())&&ln<33;)Yn();return Al(t)>2||Al(ln)>3?"":" "}function RS(t,i){for(;--i&&Yn()&&!(ln<48||ln>102||ln>57&&ln<65||ln>70&&ln<97););return ql(t,uo()+(i<6&&Mt()==32&&Yn()==32))}function Hd(t){for(;Yn();)switch(ln){case t:return On;case 34:case 39:t!==34&&t!==39&&Hd(ln);break;case 40:t===41&&Hd(t);break;case 92:Yn();break}return On}function ES(t,i){for(;Yn()&&t+ln!==57;)if(t+ln===84&&Mt()===47)break;return"/*"+ql(i,On-1)+"*"+ko(t===47?t:Yn())}function kS(t){for(;!Al(Mt());)Yn();return ql(t,On)}function LS(t){return cy(fo("",null,null,null,[""],t=uy(t),0,[0],t))}function fo(t,i,l,s,u,d,f,m,g){for(var h=0,v=0,b=f,x=0,w=0,A=0,_=1,q=1,k=1,H=0,U="",P=u,B=d,E=s,D=U;q;)switch(A=H,H=Yn()){case 40:if(A!=108&&yn(D,b-1)==58){Gd(D+=Re(co(H),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:D+=co(H);break;case 9:case 10:case 13:case 32:D+=qS(A);break;case 92:D+=RS(uo()-1,7);continue;case 47:switch(Mt()){case 42:case 47:ao(OS(ES(Yn(),uo()),i,l),g);break;default:D+="/"}break;case 123*_:m[h++]=_t(D)*k;case 125*_:case 59:case 0:switch(H){case 0:case 125:q=0;case 59+v:k==-1&&(D=Re(D,/\f/g,"")),w>0&&_t(D)-b&&ao(w>32?ab(D+";",s,l,b-1):ab(Re(D," ","")+";",s,l,b-2),g);break;case 59:D+=";";default:if(ao(E=tb(D,i,l,h,v,u,m,U,P=[],B=[],b),d),H===123)if(v===0)fo(D,i,E,E,P,d,b,m,B);else switch(x===99&&yn(D,3)===110?100:x){case 100:case 108:case 109:case 115:fo(t,E,E,s&&ao(tb(t,E,E,0,0,u,m,U,u,P=[],b),B),u,B,b,m,s?P:B);break;default:fo(D,E,E,E,[""],B,0,m,B)}}h=v=w=0,_=k=1,U=D="",b=f;break;case 58:b=1+_t(D),w=A;default:if(_<1){if(H==123)--_;else if(H==125&&_++==0&&TS()==125)continue}switch(D+=ko(H),H*_){case 38:k=v>0?1:(D+="\f",-1);break;case 44:m[h++]=(_t(D)-1)*k,k=1;break;case 64:Mt()===45&&(D+=co(Yn())),x=Mt(),v=b=_t(U=D+=kS(uo())),H++;break;case 45:A===45&&_t(D)==2&&(_=0)}}return d}function tb(t,i,l,s,u,d,f,m,g,h,v){for(var b=u-1,x=u===0?d:[""],w=cf(x),A=0,_=0,q=0;A<s;++A)for(var k=0,H=_l(t,b+1,b=SS(_=f[A])),U=t;k<w;++k)(U=sy(_>0?x[k]+" "+H:Re(H,/&\f/g,x[k])))&&(g[q++]=U);return Oo(t,i,l,u===0?of:m,g,h,v)}function OS(t,i,l){return Oo(t,i,l,iy,ko(MS()),_l(t,2,-2),0)}function ab(t,i,l,s){return Oo(t,i,l,uf,_l(t,0,s),_l(t,s+1,-1),s)}function ai(t,i){for(var l="",s=cf(t),u=0;u<s;u++)l+=i(t[u],u,t,i)||"";return l}function DS(t,i,l,s){switch(t.type){case xS:if(t.children.length)break;case vS:case uf:return t.return=t.return||t.value;case iy:return"";case ly:return t.return=t.value+"{"+ai(t.children,s)+"}";case of:t.value=t.props.join(",")}return _t(l=ai(t.children,s))?t.return=t.value+"{"+l+"}":""}function zS(t){var i=cf(t);return function(l,s,u,d){for(var f="",m=0;m<i;m++)f+=t[m](l,s,u,d)||"";return f}}function BS(t){return function(i){i.root||(i=i.return)&&t(i)}}function dy(t){var i=Object.create(null);return function(l){return i[l]===void 0&&(i[l]=t(l)),i[l]}}var jS=function(i,l,s){for(var u=0,d=0;u=d,d=Mt(),u===38&&d===12&&(l[s]=1),!Al(d);)Yn();return ql(i,On)},NS=function(i,l){var s=-1,u=44;do switch(Al(u)){case 0:u===38&&Mt()===12&&(l[s]=1),i[s]+=jS(On-1,l,s);break;case 2:i[s]+=co(u);break;case 4:if(u===44){i[++s]=Mt()===58?"&\f":"",l[s]=i[s].length;break}default:i[s]+=ko(u)}while(u=Yn());return i},US=function(i,l){return cy(NS(uy(i),l))},rb=new WeakMap,GS=function(i){if(!(i.type!=="rule"||!i.parent||i.length<1)){for(var l=i.value,s=i.parent,u=i.column===s.column&&i.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(i.props.length===1&&l.charCodeAt(0)!==58&&!rb.get(s))&&!u){rb.set(i,!0);for(var d=[],f=US(l,d),m=s.props,g=0,h=0;g<f.length;g++)for(var v=0;v<m.length;v++,h++)i.props[h]=d[g]?f[g].replace(/&\f/g,m[v]):m[v]+" "+f[g]}}},HS=function(i){if(i.type==="decl"){var l=i.value;l.charCodeAt(0)===108&&l.charCodeAt(2)===98&&(i.return="",i.value="")}};function fy(t,i){switch(_S(t,i)){case 5103:return qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qe+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return qe+t+_o+t+Sn+t+t;case 6828:case 4268:return qe+t+Sn+t+t;case 6165:return qe+t+Sn+"flex-"+t+t;case 5187:return qe+t+Re(t,/(\w+).+(:[^]+)/,qe+"box-$1$2"+Sn+"flex-$1$2")+t;case 5443:return qe+t+Sn+"flex-item-"+Re(t,/flex-|-self/,"")+t;case 4675:return qe+t+Sn+"flex-line-pack"+Re(t,/align-content|flex-|-self/,"")+t;case 5548:return qe+t+Sn+Re(t,"shrink","negative")+t;case 5292:return qe+t+Sn+Re(t,"basis","preferred-size")+t;case 6060:return qe+"box-"+Re(t,"-grow","")+qe+t+Sn+Re(t,"grow","positive")+t;case 4554:return qe+Re(t,/([^-])(transform)/g,"$1"+qe+"$2")+t;case 6187:return Re(Re(Re(t,/(zoom-|grab)/,qe+"$1"),/(image-set)/,qe+"$1"),t,"")+t;case 5495:case 3959:return Re(t,/(image-set\([^]*)/,qe+"$1$`$1");case 4968:return Re(Re(t,/(.+:)(flex-)?(.*)/,qe+"box-pack:$3"+Sn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qe+t+t;case 4095:case 3583:case 4068:case 2532:return Re(t,/(.+)-inline(.+)/,qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(t)-1-i>6)switch(yn(t,i+1)){case 109:if(yn(t,i+4)!==45)break;case 102:return Re(t,/(.+:)(.+)-([^]+)/,"$1"+qe+"$2-$3$1"+_o+(yn(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~Gd(t,"stretch")?fy(Re(t,"stretch","fill-available"),i)+t:t}break;case 4949:if(yn(t,i+1)!==115)break;case 6444:switch(yn(t,_t(t)-3-(~Gd(t,"!important")&&10))){case 107:return Re(t,":",":"+qe)+t;case 101:return Re(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+qe+(yn(t,14)===45?"inline-":"")+"box$3$1"+qe+"$2$3$1"+Sn+"$2box$3")+t}break;case 5936:switch(yn(t,i+11)){case 114:return qe+t+Sn+Re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return qe+t+Sn+Re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return qe+t+Sn+Re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return qe+t+Sn+t+t}return t}var PS=function(i,l,s,u){if(i.length>-1&&!i.return)switch(i.type){case uf:i.return=fy(i.value,i.length);break;case ly:return ai([cl(i,{value:Re(i.value,"@","@"+qe)})],u);case of:if(i.length)return CS(i.props,function(d){switch(AS(d,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ai([cl(i,{props:[Re(d,/:(read-\w+)/,":"+_o+"$1")]})],u);case"::placeholder":return ai([cl(i,{props:[Re(d,/:(plac\w+)/,":"+qe+"input-$1")]}),cl(i,{props:[Re(d,/:(plac\w+)/,":"+_o+"$1")]}),cl(i,{props:[Re(d,/:(plac\w+)/,Sn+"input-$1")]})],u)}return""})}},JS=[PS],$S=function(i){var l=i.key;if(l==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(_){var q=_.getAttribute("data-emotion");q.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var u=i.stylisPlugins||JS,d={},f,m=[];f=i.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+l+' "]'),function(_){for(var q=_.getAttribute("data-emotion").split(" "),k=1;k<q.length;k++)d[q[k]]=!0;m.push(_)});var g,h=[GS,HS];{var v,b=[DS,BS(function(_){v.insert(_)})],x=zS(h.concat(u,b)),w=function(q){return ai(LS(q),x)};g=function(q,k,H,U){v=H,w(q?q+"{"+k.styles+"}":k.styles),U&&(A.inserted[k.name]=!0)}}var A={key:l,sheet:new yS({key:l,container:f,nonce:i.nonce,speedy:i.speedy,prepend:i.prepend,insertionPoint:i.insertionPoint}),nonce:i.nonce,inserted:d,registered:{},insert:g};return A.sheet.hydrate(m),A},Ad={exports:{}},ke={};var ib;function VS(){if(ib)return ke;ib=1;var t=typeof Symbol=="function"&&Symbol.for,i=t?Symbol.for("react.element"):60103,l=t?Symbol.for("react.portal"):60106,s=t?Symbol.for("react.fragment"):60107,u=t?Symbol.for("react.strict_mode"):60108,d=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,m=t?Symbol.for("react.context"):60110,g=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,v=t?Symbol.for("react.forward_ref"):60112,b=t?Symbol.for("react.suspense"):60113,x=t?Symbol.for("react.suspense_list"):60120,w=t?Symbol.for("react.memo"):60115,A=t?Symbol.for("react.lazy"):60116,_=t?Symbol.for("react.block"):60121,q=t?Symbol.for("react.fundamental"):60117,k=t?Symbol.for("react.responder"):60118,H=t?Symbol.for("react.scope"):60119;function U(B){if(typeof B=="object"&&B!==null){var E=B.$$typeof;switch(E){case i:switch(B=B.type,B){case g:case h:case s:case d:case u:case b:return B;default:switch(B=B&&B.$$typeof,B){case m:case v:case A:case w:case f:return B;default:return E}}case l:return E}}}function P(B){return U(B)===h}return ke.AsyncMode=g,ke.ConcurrentMode=h,ke.ContextConsumer=m,ke.ContextProvider=f,ke.Element=i,ke.ForwardRef=v,ke.Fragment=s,ke.Lazy=A,ke.Memo=w,ke.Portal=l,ke.Profiler=d,ke.StrictMode=u,ke.Suspense=b,ke.isAsyncMode=function(B){return P(B)||U(B)===g},ke.isConcurrentMode=P,ke.isContextConsumer=function(B){return U(B)===m},ke.isContextProvider=function(B){return U(B)===f},ke.isElement=function(B){return typeof B=="object"&&B!==null&&B.$$typeof===i},ke.isForwardRef=function(B){return U(B)===v},ke.isFragment=function(B){return U(B)===s},ke.isLazy=function(B){return U(B)===A},ke.isMemo=function(B){return U(B)===w},ke.isPortal=function(B){return U(B)===l},ke.isProfiler=function(B){return U(B)===d},ke.isStrictMode=function(B){return U(B)===u},ke.isSuspense=function(B){return U(B)===b},ke.isValidElementType=function(B){return typeof B=="string"||typeof B=="function"||B===s||B===h||B===d||B===u||B===b||B===x||typeof B=="object"&&B!==null&&(B.$$typeof===A||B.$$typeof===w||B.$$typeof===f||B.$$typeof===m||B.$$typeof===v||B.$$typeof===q||B.$$typeof===k||B.$$typeof===H||B.$$typeof===_)},ke.typeOf=U,ke}var lb;function YS(){return lb||(lb=1,Ad.exports=VS()),Ad.exports}var Cd,sb;function XS(){if(sb)return Cd;sb=1;var t=YS(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[t.ForwardRef]=s,d[t.Memo]=u;function f(A){return t.isMemo(A)?u:d[A.$$typeof]||i}var m=Object.defineProperty,g=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,x=Object.prototype;function w(A,_,q){if(typeof _!="string"){if(x){var k=b(_);k&&k!==x&&w(A,k,q)}var H=g(_);h&&(H=H.concat(h(_)));for(var U=f(A),P=f(_),B=0;B<H.length;++B){var E=H[B];if(!l[E]&&!(q&&q[E])&&!(P&&P[E])&&!(U&&U[E])){var D=v(_,E);try{m(A,E,D)}catch{}}}}return A}return Cd=w,Cd}XS();var FS=!0;function my(t,i,l){var s="";return l.split(" ").forEach(function(u){t[u]!==void 0?i.push(t[u]+";"):u&&(s+=u+" ")}),s}var df=function(i,l,s){var u=i.key+"-"+l.name;(s===!1||FS===!1)&&i.registered[u]===void 0&&(i.registered[u]=l.styles)},ff=function(i,l,s){df(i,l,s);var u=i.key+"-"+l.name;if(i.inserted[l.name]===void 0){var d=l;do i.insert(l===d?"."+u:"",d,i.sheet,!0),d=d.next;while(d!==void 0)}};function KS(t){for(var i=0,l,s=0,u=t.length;u>=4;++s,u-=4)l=t.charCodeAt(s)&255|(t.charCodeAt(++s)&255)<<8|(t.charCodeAt(++s)&255)<<16|(t.charCodeAt(++s)&255)<<24,l=(l&65535)*1540483477+((l>>>16)*59797<<16),l^=l>>>24,i=(l&65535)*1540483477+((l>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(u){case 3:i^=(t.charCodeAt(s+2)&255)<<16;case 2:i^=(t.charCodeAt(s+1)&255)<<8;case 1:i^=t.charCodeAt(s)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var QS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},WS=/[A-Z]|^ms/g,ZS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,py=function(i){return i.charCodeAt(1)===45},ob=function(i){return i!=null&&typeof i!="boolean"},Md=dy(function(t){return py(t)?t:t.replace(WS,"-$&").toLowerCase()}),ub=function(i,l){switch(i){case"animation":case"animationName":if(typeof l=="string")return l.replace(ZS,function(s,u,d){return At={name:u,styles:d,next:At},u})}return QS[i]!==1&&!py(i)&&typeof l=="number"&&l!==0?l+"px":l};function Cl(t,i,l){if(l==null)return"";var s=l;if(s.__emotion_styles!==void 0)return s;switch(typeof l){case"boolean":return"";case"object":{var u=l;if(u.anim===1)return At={name:u.name,styles:u.styles,next:At},u.name;var d=l;if(d.styles!==void 0){var f=d.next;if(f!==void 0)for(;f!==void 0;)At={name:f.name,styles:f.styles,next:At},f=f.next;var m=d.styles+";";return m}return IS(t,i,l)}case"function":{if(t!==void 0){var g=At,h=l(t);return At=g,Cl(t,i,h)}break}}var v=l;if(i==null)return v;var b=i[v];return b!==void 0?b:v}function IS(t,i,l){var s="";if(Array.isArray(l))for(var u=0;u<l.length;u++)s+=Cl(t,i,l[u])+";";else for(var d in l){var f=l[d];if(typeof f!="object"){var m=f;i!=null&&i[m]!==void 0?s+=d+"{"+i[m]+"}":ob(m)&&(s+=Md(d)+":"+ub(d,m)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(i==null||i[f[0]]===void 0))for(var g=0;g<f.length;g++)ob(f[g])&&(s+=Md(d)+":"+ub(d,f[g])+";");else{var h=Cl(t,i,f);switch(d){case"animation":case"animationName":{s+=Md(d)+":"+h+";";break}default:s+=d+"{"+h+"}"}}}return s}var cb=/label:\s*([^\s;{]+)\s*(;|$)/g,At;function Rl(t,i,l){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var s=!0,u="";At=void 0;var d=t[0];if(d==null||d.raw===void 0)s=!1,u+=Cl(l,i,d);else{var f=d;u+=f[0]}for(var m=1;m<t.length;m++)if(u+=Cl(l,i,t[m]),s){var g=d;u+=g[m]}cb.lastIndex=0;for(var h="",v;(v=cb.exec(u))!==null;)h+="-"+v[1];var b=KS(u)+h;return{name:b,styles:u,next:At}}var e2=function(i){return i()},hy=Nd.useInsertionEffect?Nd.useInsertionEffect:!1,gy=hy||e2,db=hy||F.useLayoutEffect,by=F.createContext(typeof HTMLElement<"u"?$S({key:"css"}):null);by.Provider;var mf=function(i){return F.forwardRef(function(l,s){var u=F.useContext(by);return i(l,u,s)})},El=F.createContext({}),pf={}.hasOwnProperty,Pd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",n2=function(i,l){var s={};for(var u in l)pf.call(l,u)&&(s[u]=l[u]);return s[Pd]=i,s},t2=function(i){var l=i.cache,s=i.serialized,u=i.isStringTag;return df(l,s,u),gy(function(){return ff(l,s,u)}),null},a2=mf(function(t,i,l){var s=t.css;typeof s=="string"&&i.registered[s]!==void 0&&(s=i.registered[s]);var u=t[Pd],d=[s],f="";typeof t.className=="string"?f=my(i.registered,d,t.className):t.className!=null&&(f=t.className+" ");var m=Rl(d,void 0,F.useContext(El));f+=i.key+"-"+m.name;var g={};for(var h in t)pf.call(t,h)&&h!=="css"&&h!==Pd&&(g[h]=t[h]);return g.className=f,l&&(g.ref=l),F.createElement(F.Fragment,null,F.createElement(t2,{cache:i,serialized:m,isStringTag:typeof u=="string"}),F.createElement(u,g))}),r2=a2,fb=function(i,l){var s=arguments;if(l==null||!pf.call(l,"css"))return F.createElement.apply(void 0,s);var u=s.length,d=new Array(u);d[0]=r2,d[1]=n2(i,l);for(var f=2;f<u;f++)d[f]=s[f];return F.createElement.apply(null,d)};(function(t){var i;i||(i=t.JSX||(t.JSX={}))})(fb||(fb={}));var i2=mf(function(t,i){var l=t.styles,s=Rl([l],void 0,F.useContext(El)),u=F.useRef();return db(function(){var d=i.key+"-global",f=new i.sheet.constructor({key:d,nonce:i.sheet.nonce,container:i.sheet.container,speedy:i.sheet.isSpeedy}),m=!1,g=document.querySelector('style[data-emotion="'+d+" "+s.name+'"]');return i.sheet.tags.length&&(f.before=i.sheet.tags[0]),g!==null&&(m=!0,g.setAttribute("data-emotion",d),f.hydrate([g])),u.current=[f,m],function(){f.flush()}},[i]),db(function(){var d=u.current,f=d[0],m=d[1];if(m){d[1]=!1;return}if(s.next!==void 0&&ff(i,s.next,!0),f.tags.length){var g=f.tags[f.tags.length-1].nextElementSibling;f.before=g,f.flush()}i.insert("",s,f,!1)},[i,s.name]),null});function l2(){for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return Rl(i)}function fC(){var t=l2.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var s2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o2=dy(function(t){return s2.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),u2=o2,c2=function(i){return i!=="theme"},mb=function(i){return typeof i=="string"&&i.charCodeAt(0)>96?u2:c2},pb=function(i,l,s){var u;if(l){var d=l.shouldForwardProp;u=i.__emotion_forwardProp&&d?function(f){return i.__emotion_forwardProp(f)&&d(f)}:d}return typeof u!="function"&&s&&(u=i.__emotion_forwardProp),u},d2=function(i){var l=i.cache,s=i.serialized,u=i.isStringTag;return df(l,s,u),gy(function(){return ff(l,s,u)}),null},f2=function t(i,l){var s=i.__emotion_real===i,u=s&&i.__emotion_base||i,d,f;l!==void 0&&(d=l.label,f=l.target);var m=pb(i,l,s),g=m||mb(u),h=!g("as");return function(){var v=arguments,b=s&&i.__emotion_styles!==void 0?i.__emotion_styles.slice(0):[];if(d!==void 0&&b.push("label:"+d+";"),v[0]==null||v[0].raw===void 0)b.push.apply(b,v);else{var x=v[0];b.push(x[0]);for(var w=v.length,A=1;A<w;A++)b.push(v[A],x[A])}var _=mf(function(q,k,H){var U=h&&q.as||u,P="",B=[],E=q;if(q.theme==null){E={};for(var D in q)E[D]=q[D];E.theme=F.useContext(El)}typeof q.className=="string"?P=my(k.registered,B,q.className):q.className!=null&&(P=q.className+" ");var G=Rl(b.concat(B),k.registered,E);P+=k.key+"-"+G.name,f!==void 0&&(P+=" "+f);var K=h&&m===void 0?mb(U):g,ee={};for(var I in q)h&&I==="as"||K(I)&&(ee[I]=q[I]);return ee.className=P,H&&(ee.ref=H),F.createElement(F.Fragment,null,F.createElement(d2,{cache:k,serialized:G,isStringTag:typeof U=="string"}),F.createElement(U,ee))});return _.displayName=d!==void 0?d:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",_.defaultProps=i.defaultProps,_.__emotion_real=_,_.__emotion_base=u,_.__emotion_styles=b,_.__emotion_forwardProp=m,Object.defineProperty(_,"toString",{value:function(){return"."+f}}),_.withComponent=function(q,k){var H=t(q,Ud({},l,k,{shouldForwardProp:pb(_,k,!0)}));return H.apply(void 0,b)},_}},m2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Jd=f2.bind(null);m2.forEach(function(t){Jd[t]=Jd(t)});function p2(t){return t==null||Object.keys(t).length===0}function yy(t){const{styles:i,defaultTheme:l={}}=t,s=typeof i=="function"?u=>i(p2(u)?l:u):i;return Q.jsx(i2,{styles:s})}function h2(t,i){return Jd(t,i)}function g2(t,i){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=i(t.__emotion_styles))}const hb=[];function Ta(t){return hb[0]=t,Rl(hb)}var Td={exports:{}},Ue={};var gb;function b2(){if(gb)return Ue;gb=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.view_transition"),w=Symbol.for("react.client.reference");function A(_){if(typeof _=="object"&&_!==null){var q=_.$$typeof;switch(q){case t:switch(_=_.type,_){case l:case u:case s:case g:case h:case x:return _;default:switch(_=_&&_.$$typeof,_){case f:case m:case b:case v:return _;case d:return _;default:return q}}case i:return q}}}return Ue.ContextConsumer=d,Ue.ContextProvider=f,Ue.Element=t,Ue.ForwardRef=m,Ue.Fragment=l,Ue.Lazy=b,Ue.Memo=v,Ue.Portal=i,Ue.Profiler=u,Ue.StrictMode=s,Ue.Suspense=g,Ue.SuspenseList=h,Ue.isContextConsumer=function(_){return A(_)===d},Ue.isContextProvider=function(_){return A(_)===f},Ue.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===t},Ue.isForwardRef=function(_){return A(_)===m},Ue.isFragment=function(_){return A(_)===l},Ue.isLazy=function(_){return A(_)===b},Ue.isMemo=function(_){return A(_)===v},Ue.isPortal=function(_){return A(_)===i},Ue.isProfiler=function(_){return A(_)===u},Ue.isStrictMode=function(_){return A(_)===s},Ue.isSuspense=function(_){return A(_)===g},Ue.isSuspenseList=function(_){return A(_)===h},Ue.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===l||_===u||_===s||_===g||_===h||typeof _=="object"&&_!==null&&(_.$$typeof===b||_.$$typeof===v||_.$$typeof===f||_.$$typeof===d||_.$$typeof===m||_.$$typeof===w||_.getModuleId!==void 0)},Ue.typeOf=A,Ue}var bb;function y2(){return bb||(bb=1,Td.exports=b2()),Td.exports}var vy=y2();function Ct(t){if(typeof t!="object"||t===null)return!1;const i=Object.getPrototypeOf(t);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function xy(t){if(F.isValidElement(t)||vy.isValidElementType(t)||!Ct(t))return t;const i={};return Object.keys(t).forEach(l=>{i[l]=xy(t[l])}),i}function An(t,i,l={clone:!0}){const s=l.clone?{...t}:t;return Ct(t)&&Ct(i)&&Object.keys(i).forEach(u=>{F.isValidElement(i[u])||vy.isValidElementType(i[u])?s[u]=i[u]:Ct(i[u])&&Object.prototype.hasOwnProperty.call(t,u)&&Ct(t[u])?s[u]=An(t[u],i[u],l):l.clone?s[u]=Ct(i[u])?xy(i[u]):i[u]:s[u]=i[u]}),s}const v2=t=>{const i=Object.keys(t).map(l=>({key:l,val:t[l]}))||[];return i.sort((l,s)=>l.val-s.val),i.reduce((l,s)=>({...l,[s.key]:s.val}),{})};function x2(t){const{values:i={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:l="px",step:s=5,...u}=t,d=v2(i),f=Object.keys(d);function m(x){return`@media (min-width:${typeof i[x]=="number"?i[x]:x}${l})`}function g(x){return`@media (max-width:${(typeof i[x]=="number"?i[x]:x)-s/100}${l})`}function h(x,w){const A=f.indexOf(w);return`@media (min-width:${typeof i[x]=="number"?i[x]:x}${l}) and (max-width:${(A!==-1&&typeof i[f[A]]=="number"?i[f[A]]:w)-s/100}${l})`}function v(x){return f.indexOf(x)+1<f.length?h(x,f[f.indexOf(x)+1]):m(x)}function b(x){const w=f.indexOf(x);return w===0?m(f[1]):w===f.length-1?g(f[w]):h(x,f[f.indexOf(x)+1]).replace("@media","@media not all and")}return{keys:f,values:d,up:m,down:g,between:h,only:v,not:b,unit:l,...u}}function yb(t,i){if(!t.containerQueries)return i;const l=Object.keys(i).filter(s=>s.startsWith("@container")).sort((s,u)=>{const d=/min-width:\s*([0-9.]+)/;return+(s.match(d)?.[1]||0)-+(u.match(d)?.[1]||0)});return l.length?l.reduce((s,u)=>{const d=i[u];return delete s[u],s[u]=d,s},{...i}):i}function S2(t,i){return i==="@"||i.startsWith("@")&&(t.some(l=>i.startsWith(`@${l}`))||!!i.match(/^@\d/))}function w2(t,i){const l=i.match(/^@([^/]+)?\/?(.+)?$/);if(!l)return null;const[,s,u]=l,d=Number.isNaN(+s)?s||0:+s;return t.containerQueries(u).up(d)}function _2(t){const i=(d,f)=>d.replace("@media",f?`@container ${f}`:"@container");function l(d,f){d.up=(...m)=>i(t.breakpoints.up(...m),f),d.down=(...m)=>i(t.breakpoints.down(...m),f),d.between=(...m)=>i(t.breakpoints.between(...m),f),d.only=(...m)=>i(t.breakpoints.only(...m),f),d.not=(...m)=>{const g=i(t.breakpoints.not(...m),f);return g.includes("not all and")?g.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):g}}const s={},u=d=>(l(s,d),s);return l(u),{...t,containerQueries:u}}const A2={borderRadius:4};function yl(t,i){return i?An(t,i,{clone:!1}):t}const Do={xs:0,sm:600,md:900,lg:1200,xl:1536},vb={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Do[t]}px)`},C2={containerQueries:t=>({up:i=>{let l=typeof i=="number"?i:Do[i]||i;return typeof l=="number"&&(l=`${l}px`),t?`@container ${t} (min-width:${l})`:`@container (min-width:${l})`}})};function pt(t,i,l){const s=t.theme||{};if(Array.isArray(i)){const d=s.breakpoints||vb;return i.reduce((f,m,g)=>(f[d.up(d.keys[g])]=l(i[g]),f),{})}if(typeof i=="object"){const d=s.breakpoints||vb;return Object.keys(i).reduce((f,m)=>{if(S2(d.keys,m)){const g=w2(s.containerQueries?s:C2,m);g&&(f[g]=l(i[m],m))}else if(Object.keys(d.values||Do).includes(m)){const g=d.up(m);f[g]=l(i[m],m)}else{const g=m;f[g]=i[g]}return f},{})}return l(i)}function Sy(t={}){return t.keys?.reduce((l,s)=>{const u=t.up(s);return l[u]={},l},{})||{}}function $d(t,i){return t.reduce((l,s)=>{const u=l[s];return(!u||Object.keys(u).length===0)&&delete l[s],l},i)}function M2(t,...i){const l=Sy(t),s=[l,...i].reduce((u,d)=>An(u,d),{});return $d(Object.keys(l),s)}function T2(t,i){if(typeof t!="object")return{};const l={},s=Object.keys(i);return Array.isArray(t)?s.forEach((u,d)=>{d<t.length&&(l[u]=!0)}):s.forEach(u=>{t[u]!=null&&(l[u]=!0)}),l}function qd({values:t,breakpoints:i,base:l}){const s=l||T2(t,i),u=Object.keys(s);if(u.length===0)return t;let d;return u.reduce((f,m,g)=>(Array.isArray(t)?(f[m]=t[g]!=null?t[g]:t[d],d=g):typeof t=="object"?(f[m]=t[m]!=null?t[m]:t[d],d=m):f[m]=t,f),{})}function Qt(t){if(typeof t!="string")throw new Error(rr(7));return t.charAt(0).toUpperCase()+t.slice(1)}function zo(t,i,l=!0){if(!i||typeof i!="string")return null;if(t&&t.vars&&l){const s=`vars.${i}`.split(".").reduce((u,d)=>u&&u[d]?u[d]:null,t);if(s!=null)return s}return i.split(".").reduce((s,u)=>s&&s[u]!=null?s[u]:null,t)}function Ao(t,i,l,s=l){let u;return typeof t=="function"?u=t(l):Array.isArray(t)?u=t[l]||s:u=zo(t,l)||s,i&&(u=i(u,s,t)),u}function Ie(t){const{prop:i,cssProperty:l=t.prop,themeKey:s,transform:u}=t,d=f=>{if(f[i]==null)return null;const m=f[i],g=f.theme,h=zo(g,s)||{};return pt(f,m,b=>{let x=Ao(h,u,b);return b===x&&typeof b=="string"&&(x=Ao(h,u,`${i}${b==="default"?"":Qt(b)}`,b)),l===!1?x:{[l]:x}})};return d.propTypes={},d.filterProps=[i],d}function q2(t){const i={};return l=>(i[l]===void 0&&(i[l]=t(l)),i[l])}const R2={m:"margin",p:"padding"},E2={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},xb={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},k2=q2(t=>{if(t.length>2)if(xb[t])t=xb[t];else return[t];const[i,l]=t.split(""),s=R2[i],u=E2[l]||"";return Array.isArray(u)?u.map(d=>s+d):[s+u]}),hf=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],gf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...hf,...gf];function kl(t,i,l,s){const u=zo(t,i,!0)??l;return typeof u=="number"||typeof u=="string"?d=>typeof d=="string"?d:typeof u=="string"?u.startsWith("var(")&&d===0?0:u.startsWith("var(")&&d===1?u:`calc(${d} * ${u})`:u*d:Array.isArray(u)?d=>{if(typeof d=="string")return d;const f=Math.abs(d),m=u[f];return d>=0?m:typeof m=="number"?-m:typeof m=="string"&&m.startsWith("var(")?`calc(-1 * ${m})`:`-${m}`}:typeof u=="function"?u:()=>{}}function Bo(t){return kl(t,"spacing",8)}function ir(t,i){return typeof i=="string"||i==null?i:t(i)}function L2(t,i){return l=>t.reduce((s,u)=>(s[u]=ir(i,l),s),{})}function O2(t,i,l,s){if(!i.includes(l))return null;const u=k2(l),d=L2(u,s),f=t[l];return pt(t,f,d)}function wy(t,i){const l=Bo(t.theme);return Object.keys(t).map(s=>O2(t,i,s,l)).reduce(yl,{})}function Ke(t){return wy(t,hf)}Ke.propTypes={};Ke.filterProps=hf;function Qe(t){return wy(t,gf)}Qe.propTypes={};Qe.filterProps=gf;function _y(t=8,i=Bo({spacing:t})){if(t.mui)return t;const l=(...s)=>(s.length===0?[1]:s).map(d=>{const f=i(d);return typeof f=="number"?`${f}px`:f}).join(" ");return l.mui=!0,l}function jo(...t){const i=t.reduce((s,u)=>(u.filterProps.forEach(d=>{s[d]=u}),s),{}),l=s=>Object.keys(s).reduce((u,d)=>i[d]?yl(u,i[d](s)):u,{});return l.propTypes={},l.filterProps=t.reduce((s,u)=>s.concat(u.filterProps),[]),l}function lt(t){return typeof t!="number"?t:`${t}px solid`}function ot(t,i){return Ie({prop:t,themeKey:"borders",transform:i})}const D2=ot("border",lt),z2=ot("borderTop",lt),B2=ot("borderRight",lt),j2=ot("borderBottom",lt),N2=ot("borderLeft",lt),U2=ot("borderColor"),G2=ot("borderTopColor"),H2=ot("borderRightColor"),P2=ot("borderBottomColor"),J2=ot("borderLeftColor"),$2=ot("outline",lt),V2=ot("outlineColor"),No=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const i=kl(t.theme,"shape.borderRadius",4),l=s=>({borderRadius:ir(i,s)});return pt(t,t.borderRadius,l)}return null};No.propTypes={};No.filterProps=["borderRadius"];jo(D2,z2,B2,j2,N2,U2,G2,H2,P2,J2,No,$2,V2);const Uo=t=>{if(t.gap!==void 0&&t.gap!==null){const i=kl(t.theme,"spacing",8),l=s=>({gap:ir(i,s)});return pt(t,t.gap,l)}return null};Uo.propTypes={};Uo.filterProps=["gap"];const Go=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const i=kl(t.theme,"spacing",8),l=s=>({columnGap:ir(i,s)});return pt(t,t.columnGap,l)}return null};Go.propTypes={};Go.filterProps=["columnGap"];const Ho=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const i=kl(t.theme,"spacing",8),l=s=>({rowGap:ir(i,s)});return pt(t,t.rowGap,l)}return null};Ho.propTypes={};Ho.filterProps=["rowGap"];const Y2=Ie({prop:"gridColumn"}),X2=Ie({prop:"gridRow"}),F2=Ie({prop:"gridAutoFlow"}),K2=Ie({prop:"gridAutoColumns"}),Q2=Ie({prop:"gridAutoRows"}),W2=Ie({prop:"gridTemplateColumns"}),Z2=Ie({prop:"gridTemplateRows"}),I2=Ie({prop:"gridTemplateAreas"}),ew=Ie({prop:"gridArea"});jo(Uo,Go,Ho,Y2,X2,F2,K2,Q2,W2,Z2,I2,ew);function ri(t,i){return i==="grey"?i:t}const nw=Ie({prop:"color",themeKey:"palette",transform:ri}),tw=Ie({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ri}),aw=Ie({prop:"backgroundColor",themeKey:"palette",transform:ri});jo(nw,tw,aw);function Vn(t){return t<=1&&t!==0?`${t*100}%`:t}const rw=Ie({prop:"width",transform:Vn}),bf=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const i=l=>{const s=t.theme?.breakpoints?.values?.[l]||Do[l];return s?t.theme?.breakpoints?.unit!=="px"?{maxWidth:`${s}${t.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:Vn(l)}};return pt(t,t.maxWidth,i)}return null};bf.filterProps=["maxWidth"];const iw=Ie({prop:"minWidth",transform:Vn}),lw=Ie({prop:"height",transform:Vn}),sw=Ie({prop:"maxHeight",transform:Vn}),ow=Ie({prop:"minHeight",transform:Vn});Ie({prop:"size",cssProperty:"width",transform:Vn});Ie({prop:"size",cssProperty:"height",transform:Vn});const uw=Ie({prop:"boxSizing"});jo(rw,bf,iw,lw,sw,ow,uw);const Ll={border:{themeKey:"borders",transform:lt},borderTop:{themeKey:"borders",transform:lt},borderRight:{themeKey:"borders",transform:lt},borderBottom:{themeKey:"borders",transform:lt},borderLeft:{themeKey:"borders",transform:lt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:lt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:No},color:{themeKey:"palette",transform:ri},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ri},backgroundColor:{themeKey:"palette",transform:ri},p:{style:Qe},pt:{style:Qe},pr:{style:Qe},pb:{style:Qe},pl:{style:Qe},px:{style:Qe},py:{style:Qe},padding:{style:Qe},paddingTop:{style:Qe},paddingRight:{style:Qe},paddingBottom:{style:Qe},paddingLeft:{style:Qe},paddingX:{style:Qe},paddingY:{style:Qe},paddingInline:{style:Qe},paddingInlineStart:{style:Qe},paddingInlineEnd:{style:Qe},paddingBlock:{style:Qe},paddingBlockStart:{style:Qe},paddingBlockEnd:{style:Qe},m:{style:Ke},mt:{style:Ke},mr:{style:Ke},mb:{style:Ke},ml:{style:Ke},mx:{style:Ke},my:{style:Ke},margin:{style:Ke},marginTop:{style:Ke},marginRight:{style:Ke},marginBottom:{style:Ke},marginLeft:{style:Ke},marginX:{style:Ke},marginY:{style:Ke},marginInline:{style:Ke},marginInlineStart:{style:Ke},marginInlineEnd:{style:Ke},marginBlock:{style:Ke},marginBlockStart:{style:Ke},marginBlockEnd:{style:Ke},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Uo},rowGap:{style:Ho},columnGap:{style:Go},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Vn},maxWidth:{style:bf},minWidth:{transform:Vn},height:{transform:Vn},maxHeight:{transform:Vn},minHeight:{transform:Vn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function cw(...t){const i=t.reduce((s,u)=>s.concat(Object.keys(u)),[]),l=new Set(i);return t.every(s=>l.size===Object.keys(s).length)}function dw(t,i){return typeof t=="function"?t(i):t}function fw(){function t(l,s,u,d){const f={[l]:s,theme:u},m=d[l];if(!m)return{[l]:s};const{cssProperty:g=l,themeKey:h,transform:v,style:b}=m;if(s==null)return null;if(h==="typography"&&s==="inherit")return{[l]:s};const x=zo(u,h)||{};return b?b(f):pt(f,s,A=>{let _=Ao(x,v,A);return A===_&&typeof A=="string"&&(_=Ao(x,v,`${l}${A==="default"?"":Qt(A)}`,A)),g===!1?_:{[g]:_}})}function i(l){const{sx:s,theme:u={},nested:d}=l||{};if(!s)return null;const f=u.unstable_sxConfig??Ll;function m(g){let h=g;if(typeof g=="function")h=g(u);else if(typeof g!="object")return g;if(!h)return null;const v=Sy(u.breakpoints),b=Object.keys(v);let x=v;return Object.keys(h).forEach(w=>{const A=dw(h[w],u);if(A!=null)if(typeof A=="object")if(f[w])x=yl(x,t(w,A,u,f));else{const _=pt({theme:u},A,q=>({[w]:q}));cw(_,A)?x[w]=i({sx:A,theme:u,nested:!0}):x=yl(x,_)}else x=yl(x,t(w,A,u,f))}),!d&&u.modularCssLayers?{"@layer sx":yb(u,$d(b,x))}:yb(u,$d(b,x))}return Array.isArray(s)?s.map(m):m(s)}return i}const lr=fw();lr.filterProps=["sx"];function mw(t,i){const l=this;if(l.vars){if(!l.colorSchemes?.[t]||typeof l.getColorSchemeSelector!="function")return{};let s=l.getColorSchemeSelector(t);return s==="&"?i:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:i})}return l.palette.mode===t?i:{}}function Ol(t={},...i){const{breakpoints:l={},palette:s={},spacing:u,shape:d={},...f}=t,m=x2(l),g=_y(u);let h=An({breakpoints:m,direction:"ltr",components:{},palette:{mode:"light",...s},spacing:g,shape:{...A2,...d}},f);return h=_2(h),h.applyStyles=mw,h=i.reduce((v,b)=>An(v,b),h),h.unstable_sxConfig={...Ll,...f?.unstable_sxConfig},h.unstable_sx=function(b){return lr({sx:b,theme:this})},h}function pw(t){return Object.keys(t).length===0}function yf(t=null){const i=F.useContext(El);return!i||pw(i)?t:i}const hw=Ol();function vf(t=hw){return yf(t)}function Rd(t){const i=Ta(t);return t!==i&&i.styles?(i.styles.match(/^@layer\s+[^{]*$/)||(i.styles=`@layer global{${i.styles}}`),i):t}function Ay({styles:t,themeId:i,defaultTheme:l={}}){const s=vf(l),u=i&&s[i]||s;let d=typeof t=="function"?t(u):t;return u.modularCssLayers&&(Array.isArray(d)?d=d.map(f=>Rd(typeof f=="function"?f(u):f)):d=Rd(d)),Q.jsx(yy,{styles:d})}const gw=t=>{const i={systemProps:{},otherProps:{}},l=t?.theme?.unstable_sxConfig??Ll;return Object.keys(t).forEach(s=>{l[s]?i.systemProps[s]=t[s]:i.otherProps[s]=t[s]}),i};function Cy(t){const{sx:i,...l}=t,{systemProps:s,otherProps:u}=gw(l);let d;return Array.isArray(i)?d=[s,...i]:typeof i=="function"?d=(...f)=>{const m=i(...f);return Ct(m)?{...s,...m}:s}:d={...s,...i},{...u,sx:d}}const Sb=t=>t,bw=()=>{let t=Sb;return{configure(i){t=i},generate(i){return t(i)},reset(){t=Sb}}},yw=bw();function My(t){var i,l,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(i=0;i<u;i++)t[i]&&(l=My(t[i]))&&(s&&(s+=" "),s+=l)}else for(l in t)t[l]&&(s&&(s+=" "),s+=l);return s}function sr(){for(var t,i,l=0,s="",u=arguments.length;l<u;l++)(t=arguments[l])&&(i=My(t))&&(s&&(s+=" "),s+=i);return s}const vw={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function or(t,i,l="Mui"){const s=vw[i];return s?`${l}-${s}`:`${yw.generate(t)}-${i}`}function Po(t,i,l="Mui"){const s={};return i.forEach(u=>{s[u]=or(t,u,l)}),s}function Ty(t){const{variants:i,...l}=t,s={variants:i,style:Ta(l),isProcessed:!0};return s.style===l||i&&i.forEach(u=>{typeof u.style!="function"&&(u.style=Ta(u.style))}),s}const xw=Ol();function Ed(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function Wa(t,i){return i&&t&&typeof t=="object"&&t.styles&&!t.styles.startsWith("@layer")&&(t.styles=`@layer ${i}{${String(t.styles)}}`),t}function Sw(t){return t?(i,l)=>l[t]:null}function ww(t,i,l){t.theme=Aw(t.theme)?l:t.theme[i]||t.theme}function mo(t,i,l){const s=typeof i=="function"?i(t):i;if(Array.isArray(s))return s.flatMap(u=>mo(t,u,l));if(Array.isArray(s?.variants)){let u;if(s.isProcessed)u=l?Wa(s.style,l):s.style;else{const{variants:d,...f}=s;u=l?Wa(Ta(f),l):f}return qy(t,s.variants,[u],l)}return s?.isProcessed?l?Wa(Ta(s.style),l):s.style:l?Wa(Ta(s),l):s}function qy(t,i,l=[],s=void 0){let u;e:for(let d=0;d<i.length;d+=1){const f=i[d];if(typeof f.props=="function"){if(u??={...t,...t.ownerState,ownerState:t.ownerState},!f.props(u))continue}else for(const m in f.props)if(t[m]!==f.props[m]&&t.ownerState?.[m]!==f.props[m])continue e;typeof f.style=="function"?(u??={...t,...t.ownerState,ownerState:t.ownerState},l.push(s?Wa(Ta(f.style(u)),s):f.style(u))):l.push(s?Wa(Ta(f.style),s):f.style)}return l}function Ry(t={}){const{themeId:i,defaultTheme:l=xw,rootShouldForwardProp:s=Ed,slotShouldForwardProp:u=Ed}=t;function d(m){ww(m,i,l)}return(m,g={})=>{g2(m,E=>E.filter(D=>D!==lr));const{name:h,slot:v,skipVariantsResolver:b,skipSx:x,overridesResolver:w=Sw(Mw(v)),...A}=g,_=h&&h.startsWith("Mui")||v?"components":"custom",q=b!==void 0?b:v&&v!=="Root"&&v!=="root"||!1,k=x||!1;let H=Ed;v==="Root"||v==="root"?H=s:v?H=u:Cw(m)&&(H=void 0);const U=h2(m,{shouldForwardProp:H,label:_w(),...A}),P=E=>{if(E.__emotion_real===E)return E;if(typeof E=="function")return function(G){return mo(G,E,G.theme.modularCssLayers?_:void 0)};if(Ct(E)){const D=Ty(E);return function(K){return D.variants?mo(K,D,K.theme.modularCssLayers?_:void 0):K.theme.modularCssLayers?Wa(D.style,_):D.style}}return E},B=(...E)=>{const D=[],G=E.map(P),K=[];if(D.push(d),h&&w&&K.push(function(te){const ie=te.theme.components?.[h]?.styleOverrides;if(!ie)return null;const z={};for(const Z in ie)z[Z]=mo(te,ie[Z],te.theme.modularCssLayers?"theme":void 0);return w(te,z)}),h&&!q&&K.push(function(te){const ie=te.theme?.components?.[h]?.variants;return ie?qy(te,ie,[],te.theme.modularCssLayers?"theme":void 0):null}),k||K.push(lr),Array.isArray(G[0])){const S=G.shift(),te=new Array(D.length).fill(""),W=new Array(K.length).fill("");let ie;ie=[...te,...S,...W],ie.raw=[...te,...S.raw,...W],D.unshift(ie)}const ee=[...D,...G,...K],I=U(...ee);return m.muiName&&(I.muiName=m.muiName),I};return U.withConfig&&(B.withConfig=U.withConfig),B}}function _w(t,i){return void 0}function Aw(t){for(const i in t)return!1;return!0}function Cw(t){return typeof t=="string"&&t.charCodeAt(0)>96}function Mw(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}const Ey=Ry();function Co(t,i,l=!1){const s={...i};for(const u in t)if(Object.prototype.hasOwnProperty.call(t,u)){const d=u;if(d==="components"||d==="slots")s[d]={...t[d],...s[d]};else if(d==="componentsProps"||d==="slotProps"){const f=t[d],m=i[d];if(!m)s[d]=f||{};else if(!f)s[d]=m;else{s[d]={...m};for(const g in f)if(Object.prototype.hasOwnProperty.call(f,g)){const h=g;s[d][h]=Co(f[h],m[h],l)}}}else d==="className"&&l&&i.className?s.className=sr(t?.className,i?.className):d==="style"&&l&&i.style?s.style={...t?.style,...i?.style}:s[d]===void 0&&(s[d]=t[d])}return s}function Tw(t){const{theme:i,name:l,props:s}=t;return!i||!i.components||!i.components[l]||!i.components[l].defaultProps?s:Co(i.components[l].defaultProps,s)}function ky({props:t,name:i,defaultTheme:l,themeId:s}){let u=vf(l);return s&&(u=u[s]||u),Tw({theme:u,name:i,props:t})}const Ly=typeof window<"u"?F.useLayoutEffect:F.useEffect;function qw(t,i=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER){return Math.max(i,Math.min(t,l))}function xf(t,i=0,l=1){return qw(t,i,l)}function Rw(t){t=t.slice(1);const i=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let l=t.match(i);return l&&l[0].length===1&&(l=l.map(s=>s+s)),l?`rgb${l.length===4?"a":""}(${l.map((s,u)=>u<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function qa(t){if(t.type)return t;if(t.charAt(0)==="#")return qa(Rw(t));const i=t.indexOf("("),l=t.substring(0,i);if(!["rgb","rgba","hsl","hsla","color"].includes(l))throw new Error(rr(9,t));let s=t.substring(i+1,t.length-1),u;if(l==="color"){if(s=s.split(" "),u=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(u))throw new Error(rr(10,u))}else s=s.split(",");return s=s.map(d=>parseFloat(d)),{type:l,values:s,colorSpace:u}}const Ew=t=>{const i=qa(t);return i.values.slice(0,3).map((l,s)=>i.type.includes("hsl")&&s!==0?`${l}%`:l).join(" ")},fl=(t,i)=>{try{return Ew(t)}catch{return t}};function Jo(t){const{type:i,colorSpace:l}=t;let{values:s}=t;return i.includes("rgb")?s=s.map((u,d)=>d<3?parseInt(u,10):u):i.includes("hsl")&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),i.includes("color")?s=`${l} ${s.join(" ")}`:s=`${s.join(", ")}`,`${i}(${s})`}function Oy(t){t=qa(t);const{values:i}=t,l=i[0],s=i[1]/100,u=i[2]/100,d=s*Math.min(u,1-u),f=(h,v=(h+l/30)%12)=>u-d*Math.max(Math.min(v-3,9-v,1),-1);let m="rgb";const g=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return t.type==="hsla"&&(m+="a",g.push(i[3])),Jo({type:m,values:g})}function Vd(t){t=qa(t);let i=t.type==="hsl"||t.type==="hsla"?qa(Oy(t)).values:t.values;return i=i.map(l=>(t.type!=="color"&&(l/=255),l<=.03928?l/12.92:((l+.055)/1.055)**2.4)),Number((.2126*i[0]+.7152*i[1]+.0722*i[2]).toFixed(3))}function kw(t,i){const l=Vd(t),s=Vd(i);return(Math.max(l,s)+.05)/(Math.min(l,s)+.05)}function Mo(t,i){return t=qa(t),i=xf(i),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${i}`:t.values[3]=i,Jo(t)}function Ka(t,i,l){try{return Mo(t,i)}catch{return t}}function $o(t,i){if(t=qa(t),i=xf(i),t.type.includes("hsl"))t.values[2]*=1-i;else if(t.type.includes("rgb")||t.type.includes("color"))for(let l=0;l<3;l+=1)t.values[l]*=1-i;return Jo(t)}function De(t,i,l){try{return $o(t,i)}catch{return t}}function Vo(t,i){if(t=qa(t),i=xf(i),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*i;else if(t.type.includes("rgb"))for(let l=0;l<3;l+=1)t.values[l]+=(255-t.values[l])*i;else if(t.type.includes("color"))for(let l=0;l<3;l+=1)t.values[l]+=(1-t.values[l])*i;return Jo(t)}function ze(t,i,l){try{return Vo(t,i)}catch{return t}}function Lw(t,i=.15){return Vd(t)>.5?$o(t,i):Vo(t,i)}function ro(t,i,l){try{return Lw(t,i)}catch{return t}}const Dy=F.createContext(null);function Sf(){return F.useContext(Dy)}const Ow=typeof Symbol=="function"&&Symbol.for,Dw=Ow?Symbol.for("mui.nested"):"__THEME_NESTED__";function zw(t,i){return typeof i=="function"?i(t):{...t,...i}}function Bw(t){const{children:i,theme:l}=t,s=Sf(),u=F.useMemo(()=>{const d=s===null?{...l}:zw(s,l);return d!=null&&(d[Dw]=s!==null),d},[l,s]);return Q.jsx(Dy.Provider,{value:u,children:i})}const jw=F.createContext();function Nw({value:t,...i}){return Q.jsx(jw.Provider,{value:t??!0,...i})}const zy=F.createContext(void 0);function Uw({value:t,children:i}){return Q.jsx(zy.Provider,{value:t,children:i})}function Gw(t){const{theme:i,name:l,props:s}=t;if(!i||!i.components||!i.components[l])return s;const u=i.components[l];return u.defaultProps?Co(u.defaultProps,s,i.components.mergeClassNameAndStyle):!u.styleOverrides&&!u.variants?Co(u,s,i.components.mergeClassNameAndStyle):s}function Hw({props:t,name:i}){const l=F.useContext(zy);return Gw({props:t,name:i,theme:{components:l}})}let wb=0;function Pw(t){const[i,l]=F.useState(t),s=t||i;return F.useEffect(()=>{i==null&&(wb+=1,l(`mui-${wb}`))},[i]),s}const Jw={...Nd},_b=Jw.useId;function $w(t){return _b!==void 0?_b():Pw(t)}function Vw(t){const i=yf(),l=$w()||"",{modularCssLayers:s}=t;let u="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!s||i!==null?u="":typeof s=="string"?u=s.replace(/mui(?!\.)/g,u):u=`@layer ${u};`,Ly(()=>{const d=document.querySelector("head");if(!d)return;const f=d.firstChild;if(u){if(f&&f.hasAttribute?.("data-mui-layer-order")&&f.getAttribute("data-mui-layer-order")===l)return;const m=document.createElement("style");m.setAttribute("data-mui-layer-order",l),m.textContent=u,d.prepend(m)}else d.querySelector(`style[data-mui-layer-order="${l}"]`)?.remove()},[u,l]),u?Q.jsx(Ay,{styles:u}):null}const Ab={};function Cb(t,i,l,s=!1){return F.useMemo(()=>{const u=t&&i[t]||i;if(typeof l=="function"){const d=l(u),f=t?{...i,[t]:d}:d;return s?()=>f:f}return t?{...i,[t]:l}:{...i,...l}},[t,i,l,s])}function By(t){const{children:i,theme:l,themeId:s}=t,u=yf(Ab),d=Sf()||Ab,f=Cb(s,u,l),m=Cb(s,d,l,!0),g=(s?f[s]:f).direction==="rtl",h=Vw(f);return Q.jsx(Bw,{theme:m,children:Q.jsx(El.Provider,{value:f,children:Q.jsx(Nw,{value:g,children:Q.jsxs(Uw,{value:s?f[s].components:f.components,children:[h,i]})})})})}const Mb={theme:void 0};function Yw(t){let i,l;return function(u){let d=i;return(d===void 0||u.theme!==l)&&(Mb.theme=u.theme,d=Ty(t(Mb)),i=d,l=u.theme),d}}const wf="mode",_f="color-scheme",Xw="data-color-scheme";function Fw(t){const{defaultMode:i="system",defaultLightColorScheme:l="light",defaultDarkColorScheme:s="dark",modeStorageKey:u=wf,colorSchemeStorageKey:d=_f,attribute:f=Xw,colorSchemeNode:m="document.documentElement",nonce:g}=t||{};let h="",v=f;if(f==="class"&&(v=".%s"),f==="data"&&(v="[data-%s]"),v.startsWith(".")){const x=v.substring(1);h+=`${m}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${m}.classList.add('${x}'.replace('%s', colorScheme));`}const b=v.match(/\[([^[\]]+)\]/);if(b){const[x,w]=b[1].split("=");w||(h+=`${m}.removeAttribute('${x}'.replace('%s', light));
      ${m}.removeAttribute('${x}'.replace('%s', dark));`),h+=`
      ${m}.setAttribute('${x}'.replace('%s', colorScheme), ${w?`${w}.replace('%s', colorScheme)`:'""'});`}else v!==".%s"&&(h+=`${m}.setAttribute('${v}', colorScheme);`);return Q.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?g:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${u}') || '${i}';
  const dark = localStorage.getItem('${d}-dark') || '${s}';
  const light = localStorage.getItem('${d}-light') || '${l}';
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
    ${h}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Kw(){}const Qw=({key:t,storageWindow:i})=>(!i&&typeof window<"u"&&(i=window),{get(l){if(typeof window>"u")return;if(!i)return l;let s;try{s=i.localStorage.getItem(t)}catch{}return s||l},set:l=>{if(i)try{i.localStorage.setItem(t,l)}catch{}},subscribe:l=>{if(!i)return Kw;const s=u=>{const d=u.newValue;u.key===t&&l(d)};return i.addEventListener("storage",s),()=>{i.removeEventListener("storage",s)}}});function kd(){}function Tb(t){if(typeof window<"u"&&typeof window.matchMedia=="function"&&t==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function jy(t,i){if(t.mode==="light"||t.mode==="system"&&t.systemMode==="light")return i("light");if(t.mode==="dark"||t.mode==="system"&&t.systemMode==="dark")return i("dark")}function Ww(t){return jy(t,i=>{if(i==="light")return t.lightColorScheme;if(i==="dark")return t.darkColorScheme})}function Zw(t){const{defaultMode:i="light",defaultLightColorScheme:l,defaultDarkColorScheme:s,supportedColorSchemes:u=[],modeStorageKey:d=wf,colorSchemeStorageKey:f=_f,storageWindow:m=typeof window>"u"?void 0:window,storageManager:g=Qw,noSsr:h=!1}=t,v=u.join(","),b=u.length>1,x=F.useMemo(()=>g?.({key:d,storageWindow:m}),[g,d,m]),w=F.useMemo(()=>g?.({key:`${f}-light`,storageWindow:m}),[g,f,m]),A=F.useMemo(()=>g?.({key:`${f}-dark`,storageWindow:m}),[g,f,m]),[_,q]=F.useState(()=>{const G=x?.get(i)||i,K=w?.get(l)||l,ee=A?.get(s)||s;return{mode:G,systemMode:Tb(G),lightColorScheme:K,darkColorScheme:ee}}),[k,H]=F.useState(h||!b);F.useEffect(()=>{H(!0)},[]);const U=Ww(_),P=F.useCallback(G=>{q(K=>{if(G===K.mode)return K;const ee=G??i;return x?.set(ee),{...K,mode:ee,systemMode:Tb(ee)}})},[x,i]),B=F.useCallback(G=>{G?typeof G=="string"?G&&!v.includes(G)?console.error(`\`${G}\` does not exist in \`theme.colorSchemes\`.`):q(K=>{const ee={...K};return jy(K,I=>{I==="light"&&(w?.set(G),ee.lightColorScheme=G),I==="dark"&&(A?.set(G),ee.darkColorScheme=G)}),ee}):q(K=>{const ee={...K},I=G.light===null?l:G.light,S=G.dark===null?s:G.dark;return I&&(v.includes(I)?(ee.lightColorScheme=I,w?.set(I)):console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)),S&&(v.includes(S)?(ee.darkColorScheme=S,A?.set(S)):console.error(`\`${S}\` does not exist in \`theme.colorSchemes\`.`)),ee}):q(K=>(w?.set(l),A?.set(s),{...K,lightColorScheme:l,darkColorScheme:s}))},[v,w,A,l,s]),E=F.useCallback(G=>{_.mode==="system"&&q(K=>{const ee=G?.matches?"dark":"light";return K.systemMode===ee?K:{...K,systemMode:ee}})},[_.mode]),D=F.useRef(E);return D.current=E,F.useEffect(()=>{if(typeof window.matchMedia!="function"||!b)return;const G=(...ee)=>D.current(...ee),K=window.matchMedia("(prefers-color-scheme: dark)");return K.addListener(G),G(K),()=>{K.removeListener(G)}},[b]),F.useEffect(()=>{if(b){const G=x?.subscribe(I=>{(!I||["light","dark","system"].includes(I))&&P(I||i)})||kd,K=w?.subscribe(I=>{(!I||v.match(I))&&B({light:I})})||kd,ee=A?.subscribe(I=>{(!I||v.match(I))&&B({dark:I})})||kd;return()=>{G(),K(),ee()}}},[B,P,v,i,m,b,x,w,A]),{..._,mode:k?_.mode:void 0,systemMode:k?_.systemMode:void 0,colorScheme:k?U:void 0,setMode:P,setColorScheme:B}}const Iw="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function e_(t){const{themeId:i,theme:l={},modeStorageKey:s=wf,colorSchemeStorageKey:u=_f,disableTransitionOnChange:d=!1,defaultColorScheme:f,resolveTheme:m}=t,g={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},h=F.createContext(void 0),v=()=>F.useContext(h)||g,b={},x={};function w(k){const{children:H,theme:U,modeStorageKey:P=s,colorSchemeStorageKey:B=u,disableTransitionOnChange:E=d,storageManager:D,storageWindow:G=typeof window>"u"?void 0:window,documentNode:K=typeof document>"u"?void 0:document,colorSchemeNode:ee=typeof document>"u"?void 0:document.documentElement,disableNestedContext:I=!1,disableStyleSheetGeneration:S=!1,defaultMode:te="system",forceThemeRerender:W=!1,noSsr:ie}=k,z=F.useRef(!1),Z=Sf(),se=F.useContext(h),we=!!se&&!I,Ce=F.useMemo(()=>U||(typeof l=="function"?l():l),[U]),T=Ce[i],J=T||Ce,{colorSchemes:ne=b,components:ae=x,cssVarPrefix:ue}=J,de=Object.keys(ne).filter(un=>!!ne[un]).join(","),me=F.useMemo(()=>de.split(","),[de]),Ye=typeof f=="string"?f:f.light,Me=typeof f=="string"?f:f.dark,ut=ne[Ye]&&ne[Me]?te:ne[J.defaultColorScheme]?.palette?.mode||J.palette?.mode,{mode:ht,setMode:Cn,systemMode:Ra,lightColorScheme:Xn,darkColorScheme:qt,colorScheme:Ea,setColorScheme:dr}=Zw({supportedColorSchemes:me,defaultLightColorScheme:Ye,defaultDarkColorScheme:Me,modeStorageKey:P,colorSchemeStorageKey:B,defaultMode:ut,storageManager:D,storageWindow:G,noSsr:ie});let Wt=ht,en=Ea;we&&(Wt=se.mode,en=se.colorScheme);let Dn=en||J.defaultColorScheme;J.vars&&!W&&(Dn=J.defaultColorScheme);const gt=F.useMemo(()=>{const un=J.generateThemeVars?.()||J.vars,Je={...J,components:ae,colorSchemes:ne,cssVarPrefix:ue,vars:un};if(typeof Je.generateSpacing=="function"&&(Je.spacing=Je.generateSpacing()),Dn){const fn=ne[Dn];fn&&typeof fn=="object"&&Object.keys(fn).forEach(Fn=>{fn[Fn]&&typeof fn[Fn]=="object"?Je[Fn]={...Je[Fn],...fn[Fn]}:Je[Fn]=fn[Fn]})}return m?m(Je):Je},[J,Dn,ae,ne,ue]),bt=J.colorSchemeSelector;Ly(()=>{if(en&&ee&&bt&&bt!=="media"){const un=bt;let Je=bt;if(un==="class"&&(Je=".%s"),un==="data"&&(Je="[data-%s]"),un?.startsWith("data-")&&!un.includes("%s")&&(Je=`[${un}="%s"]`),Je.startsWith("."))ee.classList.remove(...me.map(fn=>Je.substring(1).replace("%s",fn))),ee.classList.add(Je.substring(1).replace("%s",en));else{const fn=Je.replace("%s",en).match(/\[([^\]]+)\]/);if(fn){const[Fn,fr]=fn[1].split("=");fr||me.forEach(Yo=>{ee.removeAttribute(Fn.replace(en,Yo))}),ee.setAttribute(Fn,fr?fr.replace(/"|'/g,""):"")}else ee.setAttribute(Je,en)}}},[en,bt,ee,me]),F.useEffect(()=>{let un;if(E&&z.current&&K){const Je=K.createElement("style");Je.appendChild(K.createTextNode(Iw)),K.head.appendChild(Je),window.getComputedStyle(K.body),un=setTimeout(()=>{K.head.removeChild(Je)},1)}return()=>{clearTimeout(un)}},[en,E,K]),F.useEffect(()=>(z.current=!0,()=>{z.current=!1}),[]);const Ee=F.useMemo(()=>({allColorSchemes:me,colorScheme:en,darkColorScheme:qt,lightColorScheme:Xn,mode:Wt,setColorScheme:dr,setMode:Cn,systemMode:Ra}),[me,en,qt,Xn,Wt,dr,Cn,Ra,gt.colorSchemeSelector]);let Se=!0;(S||J.cssVariables===!1||we&&Z?.cssVarPrefix===ue)&&(Se=!1);const vn=Q.jsxs(F.Fragment,{children:[Q.jsx(By,{themeId:T?i:void 0,theme:gt,children:H}),Se&&Q.jsx(yy,{styles:gt.generateStyleSheets?.()||[]})]});return we?vn:Q.jsx(h.Provider,{value:Ee,children:vn})}const A=typeof f=="string"?f:f.light,_=typeof f=="string"?f:f.dark;return{CssVarsProvider:w,useColorScheme:v,getInitColorSchemeScript:k=>Fw({colorSchemeStorageKey:u,defaultLightColorScheme:A,defaultDarkColorScheme:_,modeStorageKey:s,...k})}}function n_(t=""){function i(...s){if(!s.length)return"";const u=s[0];return typeof u=="string"&&!u.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${u}${i(...s.slice(1))})`:`, ${u}`}return(s,...u)=>`var(--${t?`${t}-`:""}${s}${i(...u)})`}const qb=(t,i,l,s=[])=>{let u=t;i.forEach((d,f)=>{f===i.length-1?Array.isArray(u)?u[Number(d)]=l:u&&typeof u=="object"&&(u[d]=l):u&&typeof u=="object"&&(u[d]||(u[d]=s.includes(d)?[]:{}),u=u[d])})},t_=(t,i,l)=>{function s(u,d=[],f=[]){Object.entries(u).forEach(([m,g])=>{(!l||l&&!l([...d,m]))&&g!=null&&(typeof g=="object"&&Object.keys(g).length>0?s(g,[...d,m],Array.isArray(g)?[...f,m]:f):i([...d,m],g,f))})}s(t)},a_=(t,i)=>typeof i=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(s=>t.includes(s))||t[t.length-1].toLowerCase().includes("opacity")?i:`${i}px`:i;function Ld(t,i){const{prefix:l,shouldSkipGeneratingVar:s}=i||{},u={},d={},f={};return t_(t,(m,g,h)=>{if((typeof g=="string"||typeof g=="number")&&(!s||!s(m,g))){const v=`--${l?`${l}-`:""}${m.join("-")}`,b=a_(m,g);Object.assign(u,{[v]:b}),qb(d,m,`var(${v})`,h),qb(f,m,`var(${v}, ${b})`,h)}},m=>m[0]==="vars"),{css:u,vars:d,varsWithDefaults:f}}function r_(t,i={}){const{getSelector:l=k,disableCssColorScheme:s,colorSchemeSelector:u,enableContrastVars:d}=i,{colorSchemes:f={},components:m,defaultColorScheme:g="light",...h}=t,{vars:v,css:b,varsWithDefaults:x}=Ld(h,i);let w=x;const A={},{[g]:_,...q}=f;if(Object.entries(q||{}).forEach(([P,B])=>{const{vars:E,css:D,varsWithDefaults:G}=Ld(B,i);w=An(w,G),A[P]={css:D,vars:E}}),_){const{css:P,vars:B,varsWithDefaults:E}=Ld(_,i);w=An(w,E),A[g]={css:P,vars:B}}function k(P,B){let E=u;if(u==="class"&&(E=".%s"),u==="data"&&(E="[data-%s]"),u?.startsWith("data-")&&!u.includes("%s")&&(E=`[${u}="%s"]`),P){if(E==="media")return t.defaultColorScheme===P?":root":{[`@media (prefers-color-scheme: ${f[P]?.palette?.mode||P})`]:{":root":B}};if(E)return t.defaultColorScheme===P?`:root, ${E.replace("%s",String(P))}`:E.replace("%s",String(P))}return":root"}return{vars:w,generateThemeVars:()=>{let P={...v};return Object.entries(A).forEach(([,{vars:B}])=>{P=An(P,B)}),P},generateStyleSheets:()=>{const P=[],B=t.defaultColorScheme||"light";function E(K,ee){Object.keys(ee).length&&P.push(typeof K=="string"?{[K]:{...ee}}:K)}E(l(void 0,{...b}),b);const{[B]:D,...G}=A;if(D){const{css:K}=D,ee=f[B]?.palette?.mode,I=!s&&ee?{colorScheme:ee,...K}:{...K};E(l(B,{...I}),I)}return Object.entries(G).forEach(([K,{css:ee}])=>{const I=f[K]?.palette?.mode,S=!s&&I?{colorScheme:I,...ee}:{...ee};E(l(K,{...S}),S)}),d&&P.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),P}}}function i_(t){return function(l){return t==="media"?`@media (prefers-color-scheme: ${l})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${l}"] &`:t==="class"?`.${l} &`:t==="data"?`[data-${l}] &`:`${t.replace("%s",l)} &`:"&"}}function ci(t,i,l=void 0){const s={};for(const u in t){const d=t[u];let f="",m=!0;for(let g=0;g<d.length;g+=1){const h=d[g];h&&(f+=(m===!0?"":" ")+i(h),m=!1,l&&l[h]&&(f+=" "+l[h]))}s[u]=f}return s}const l_=Ol(),s_=Ey("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.root,i[`maxWidth${Qt(String(l.maxWidth))}`],l.fixed&&i.fixed,l.disableGutters&&i.disableGutters]}}),o_=t=>ky({props:t,name:"MuiContainer",defaultTheme:l_}),u_=(t,i)=>{const l=g=>or(i,g),{classes:s,fixed:u,disableGutters:d,maxWidth:f}=t,m={root:["root",f&&`maxWidth${Qt(String(f))}`,u&&"fixed",d&&"disableGutters"]};return ci(m,l,s)};function c_(t={}){const{createStyledComponent:i=s_,useThemeProps:l=o_,componentName:s="MuiContainer"}=t,u=i(({theme:f,ownerState:m})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!m.disableGutters&&{paddingLeft:f.spacing(2),paddingRight:f.spacing(2),[f.breakpoints.up("sm")]:{paddingLeft:f.spacing(3),paddingRight:f.spacing(3)}}}),({theme:f,ownerState:m})=>m.fixed&&Object.keys(f.breakpoints.values).reduce((g,h)=>{const v=h,b=f.breakpoints.values[v];return b!==0&&(g[f.breakpoints.up(v)]={maxWidth:`${b}${f.breakpoints.unit}`}),g},{}),({theme:f,ownerState:m})=>({...m.maxWidth==="xs"&&{[f.breakpoints.up("xs")]:{maxWidth:Math.max(f.breakpoints.values.xs,444)}},...m.maxWidth&&m.maxWidth!=="xs"&&{[f.breakpoints.up(m.maxWidth)]:{maxWidth:`${f.breakpoints.values[m.maxWidth]}${f.breakpoints.unit}`}}}));return F.forwardRef(function(m,g){const h=l(m),{className:v,component:b="div",disableGutters:x=!1,fixed:w=!1,maxWidth:A="lg",classes:_,...q}=h,k={...h,component:b,disableGutters:x,fixed:w,maxWidth:A},H=u_(k,s);return Q.jsx(u,{as:b,ownerState:k,className:sr(H.root,v),ref:g,...q})})}const d_=Ol(),f_=Ey("div",{name:"MuiStack",slot:"Root"});function m_(t){return ky({props:t,name:"MuiStack",defaultTheme:d_})}function p_(t,i){const l=F.Children.toArray(t).filter(Boolean);return l.reduce((s,u,d)=>(s.push(u),d<l.length-1&&s.push(F.cloneElement(i,{key:`separator-${d}`})),s),[])}const h_=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],g_=({ownerState:t,theme:i})=>{let l={display:"flex",flexDirection:"column",...pt({theme:i},qd({values:t.direction,breakpoints:i.breakpoints.values}),s=>({flexDirection:s}))};if(t.spacing){const s=Bo(i),u=Object.keys(i.breakpoints.values).reduce((g,h)=>((typeof t.spacing=="object"&&t.spacing[h]!=null||typeof t.direction=="object"&&t.direction[h]!=null)&&(g[h]=!0),g),{}),d=qd({values:t.direction,base:u}),f=qd({values:t.spacing,base:u});typeof d=="object"&&Object.keys(d).forEach((g,h,v)=>{if(!d[g]){const x=h>0?d[v[h-1]]:"column";d[g]=x}}),l=An(l,pt({theme:i},f,(g,h)=>t.useFlexGap?{gap:ir(s,g)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${h_(h?d[h]:t.direction)}`]:ir(s,g)}}))}return l=M2(i.breakpoints,l),l};function b_(t={}){const{createStyledComponent:i=f_,useThemeProps:l=m_,componentName:s="MuiStack"}=t,u=()=>ci({root:["root"]},g=>or(s,g),{}),d=i(g_);return F.forwardRef(function(g,h){const v=l(g),b=Cy(v),{component:x="div",direction:w="column",spacing:A=0,divider:_,children:q,className:k,useFlexGap:H=!1,...U}=b,P={direction:w,spacing:A,useFlexGap:H},B=u();return Q.jsx(d,{as:x,ownerState:P,ref:h,className:sr(B.root,k),...U,children:_?p_(q,_):q})})}function Ny(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:wl.white,default:wl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const Uy=Ny();function Gy(){return{text:{primary:wl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:wl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Yd=Gy();function Rb(t,i,l,s){const u=s.light||s,d=s.dark||s*1.5;t[i]||(t.hasOwnProperty(l)?t[i]=t[l]:i==="light"?t.light=Vo(t.main,u):i==="dark"&&(t.dark=$o(t.main,d)))}function Eb(t,i,l,s,u){const d=u.light||u,f=u.dark||u*1.5;i[l]||(i.hasOwnProperty(s)?i[l]=i[s]:l==="light"?i.light=`color-mix(in ${t}, ${i.main}, #fff ${(d*100).toFixed(0)}%)`:l==="dark"&&(i.dark=`color-mix(in ${t}, ${i.main}, #000 ${(f*100).toFixed(0)}%)`))}function y_(t="light"){return t==="dark"?{main:Ir[200],light:Ir[50],dark:Ir[400]}:{main:Ir[700],light:Ir[400],dark:Ir[800]}}function v_(t="light"){return t==="dark"?{main:Zr[200],light:Zr[50],dark:Zr[400]}:{main:Zr[500],light:Zr[300],dark:Zr[700]}}function x_(t="light"){return t==="dark"?{main:Wr[500],light:Wr[300],dark:Wr[700]}:{main:Wr[700],light:Wr[400],dark:Wr[800]}}function S_(t="light"){return t==="dark"?{main:ei[400],light:ei[300],dark:ei[700]}:{main:ei[700],light:ei[500],dark:ei[900]}}function w_(t="light"){return t==="dark"?{main:ni[400],light:ni[300],dark:ni[700]}:{main:ni[800],light:ni[500],dark:ni[900]}}function __(t="light"){return t==="dark"?{main:ul[400],light:ul[300],dark:ul[700]}:{main:"#ed6c02",light:ul[500],dark:ul[900]}}function A_(t){return`oklch(from ${t} var(--__l) 0 h / var(--__a))`}function Af(t){const{mode:i="light",contrastThreshold:l=3,tonalOffset:s=.2,colorSpace:u,...d}=t,f=t.primary||y_(i),m=t.secondary||v_(i),g=t.error||x_(i),h=t.info||S_(i),v=t.success||w_(i),b=t.warning||__(i);function x(q){return u?A_(q):kw(q,Yd.text.primary)>=l?Yd.text.primary:Uy.text.primary}const w=({color:q,name:k,mainShade:H=500,lightShade:U=300,darkShade:P=700})=>{if(q={...q},!q.main&&q[H]&&(q.main=q[H]),!q.hasOwnProperty("main"))throw new Error(rr(11,k?` (${k})`:"",H));if(typeof q.main!="string")throw new Error(rr(12,k?` (${k})`:"",JSON.stringify(q.main)));return u?(Eb(u,q,"light",U,s),Eb(u,q,"dark",P,s)):(Rb(q,"light",U,s),Rb(q,"dark",P,s)),q.contrastText||(q.contrastText=x(q.main)),q};let A;return i==="light"?A=Ny():i==="dark"&&(A=Gy()),An({common:{...wl},mode:i,primary:w({color:f,name:"primary"}),secondary:w({color:m,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:w({color:g,name:"error"}),warning:w({color:b,name:"warning"}),info:w({color:h,name:"info"}),success:w({color:v,name:"success"}),grey:hS,contrastThreshold:l,getContrastText:x,augmentColor:w,tonalOffset:s,...A},d)}function C_(t){const i={};return Object.entries(t).forEach(s=>{const[u,d]=s;typeof d=="object"&&(i[u]=`${d.fontStyle?`${d.fontStyle} `:""}${d.fontVariant?`${d.fontVariant} `:""}${d.fontWeight?`${d.fontWeight} `:""}${d.fontStretch?`${d.fontStretch} `:""}${d.fontSize||""}${d.lineHeight?`/${d.lineHeight} `:""}${d.fontFamily||""}`)}),i}function M_(t,i){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...i}}function T_(t){return Math.round(t*1e5)/1e5}const kb={textTransform:"uppercase"},Lb='"Roboto", "Helvetica", "Arial", sans-serif';function Hy(t,i){const{fontFamily:l=Lb,fontSize:s=14,fontWeightLight:u=300,fontWeightRegular:d=400,fontWeightMedium:f=500,fontWeightBold:m=700,htmlFontSize:g=16,allVariants:h,pxToRem:v,...b}=typeof i=="function"?i(t):i,x=s/14,w=v||(q=>`${q/g*x}rem`),A=(q,k,H,U,P)=>({fontFamily:l,fontWeight:q,fontSize:w(k),lineHeight:H,...l===Lb?{letterSpacing:`${T_(U/k)}em`}:{},...P,...h}),_={h1:A(u,96,1.167,-1.5),h2:A(u,60,1.2,-.5),h3:A(d,48,1.167,0),h4:A(d,34,1.235,.25),h5:A(d,24,1.334,0),h6:A(f,20,1.6,.15),subtitle1:A(d,16,1.75,.15),subtitle2:A(f,14,1.57,.1),body1:A(d,16,1.5,.15),body2:A(d,14,1.43,.15),button:A(f,14,1.75,.4,kb),caption:A(d,12,1.66,.4),overline:A(d,12,2.66,1,kb),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return An({htmlFontSize:g,pxToRem:w,fontFamily:l,fontSize:s,fontWeightLight:u,fontWeightRegular:d,fontWeightMedium:f,fontWeightBold:m,..._},b,{clone:!1})}const q_=.2,R_=.14,E_=.12;function Ve(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${q_})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${R_})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${E_})`].join(",")}const k_=["none",Ve(0,2,1,-1,0,1,1,0,0,1,3,0),Ve(0,3,1,-2,0,2,2,0,0,1,5,0),Ve(0,3,3,-2,0,3,4,0,0,1,8,0),Ve(0,2,4,-1,0,4,5,0,0,1,10,0),Ve(0,3,5,-1,0,5,8,0,0,1,14,0),Ve(0,3,5,-1,0,6,10,0,0,1,18,0),Ve(0,4,5,-2,0,7,10,1,0,2,16,1),Ve(0,5,5,-3,0,8,10,1,0,3,14,2),Ve(0,5,6,-3,0,9,12,1,0,3,16,2),Ve(0,6,6,-3,0,10,14,1,0,4,18,3),Ve(0,6,7,-4,0,11,15,1,0,4,20,3),Ve(0,7,8,-4,0,12,17,2,0,5,22,4),Ve(0,7,8,-4,0,13,19,2,0,5,24,4),Ve(0,7,9,-4,0,14,21,2,0,5,26,4),Ve(0,8,9,-5,0,15,22,2,0,6,28,5),Ve(0,8,10,-5,0,16,24,2,0,6,30,5),Ve(0,8,11,-5,0,17,26,2,0,6,32,5),Ve(0,9,11,-5,0,18,28,2,0,7,34,6),Ve(0,9,12,-6,0,19,29,2,0,7,36,6),Ve(0,10,13,-6,0,20,31,3,0,8,38,7),Ve(0,10,13,-6,0,21,33,3,0,8,40,7),Ve(0,10,14,-6,0,22,35,3,0,8,42,7),Ve(0,11,14,-7,0,23,36,3,0,9,44,8),Ve(0,11,15,-7,0,24,38,3,0,9,46,8)],L_={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},O_={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ob(t){return`${Math.round(t)}ms`}function D_(t){if(!t)return 0;const i=t/36;return Math.min(Math.round((4+15*i**.25+i/5)*10),3e3)}function z_(t){const i={...L_,...t.easing},l={...O_,...t.duration};return{getAutoHeightDuration:D_,create:(u=["all"],d={})=>{const{duration:f=l.standard,easing:m=i.easeInOut,delay:g=0,...h}=d;return(Array.isArray(u)?u:[u]).map(v=>`${v} ${typeof f=="string"?f:Ob(f)} ${m} ${typeof g=="string"?g:Ob(g)}`).join(",")},...t,easing:i,duration:l}}const B_={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function j_(t){return Ct(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function Py(t={}){const i={...t};function l(s){const u=Object.entries(s);for(let d=0;d<u.length;d++){const[f,m]=u[d];!j_(m)||f.startsWith("unstable_")?delete s[f]:Ct(m)&&(s[f]={...m},l(s[f]))}}return l(i),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Db(t){return typeof t=="number"?`${(t*100).toFixed(0)}%`:`calc((${t}) * 100%)`}const N_=t=>{if(!Number.isNaN(+t))return+t;const i=t.match(/\d*\.?\d+/g);if(!i)return 0;let l=0;for(let s=0;s<i.length;s+=1)l+=+i[s];return l};function U_(t){Object.assign(t,{alpha(i,l){const s=this||t;return s.colorSpace?`oklch(from ${i} l c h / ${typeof l=="string"?`calc(${l})`:l})`:s.vars?`rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof l=="string"?`calc(${l})`:l})`:Mo(i,N_(l))},lighten(i,l){const s=this||t;return s.colorSpace?`color-mix(in ${s.colorSpace}, ${i}, #fff ${Db(l)})`:Vo(i,l)},darken(i,l){const s=this||t;return s.colorSpace?`color-mix(in ${s.colorSpace}, ${i}, #000 ${Db(l)})`:$o(i,l)}})}function Xd(t={},...i){const{breakpoints:l,mixins:s={},spacing:u,palette:d={},transitions:f={},typography:m={},shape:g,colorSpace:h,...v}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(rr(20));const b=Af({...d,colorSpace:h}),x=Ol(t);let w=An(x,{mixins:M_(x.breakpoints,s),palette:b,shadows:k_.slice(),typography:Hy(b,m),transitions:z_(f),zIndex:{...B_}});return w=An(w,v),w=i.reduce((A,_)=>An(A,_),w),w.unstable_sxConfig={...Ll,...v?.unstable_sxConfig},w.unstable_sx=function(_){return lr({sx:_,theme:this})},w.toRuntimeSource=Py,U_(w),w}function Fd(t){let i;return t<1?i=5.11916*t**2:i=4.5*Math.log(t+1)+2,Math.round(i*10)/1e3}const G_=[...Array(25)].map((t,i)=>{if(i===0)return"none";const l=Fd(i);return`linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`});function Jy(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function $y(t){return t==="dark"?G_:[]}function H_(t){const{palette:i={mode:"light"},opacity:l,overlays:s,colorSpace:u,...d}=t,f=Af({...i,colorSpace:u});return{palette:f,opacity:{...Jy(f.mode),...l},overlays:s||$y(f.mode),...d}}function P_(t){return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!t[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const J_=t=>[...[...Array(25)].map((i,l)=>`--${t?`${t}-`:""}overlays-${l}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],$_=t=>(i,l)=>{const s=t.rootSelector||":root",u=t.colorSchemeSelector;let d=u;if(u==="class"&&(d=".%s"),u==="data"&&(d="[data-%s]"),u?.startsWith("data-")&&!u.includes("%s")&&(d=`[${u}="%s"]`),t.defaultColorScheme===i){if(i==="dark"){const f={};return J_(t.cssVarPrefix).forEach(m=>{f[m]=l[m],delete l[m]}),d==="media"?{[s]:l,"@media (prefers-color-scheme: dark)":{[s]:f}}:d?{[d.replace("%s",i)]:f,[`${s}, ${d.replace("%s",i)}`]:l}:{[s]:{...l,...f}}}if(d&&d!=="media")return`${s}, ${d.replace("%s",String(i))}`}else if(i){if(d==="media")return{[`@media (prefers-color-scheme: ${String(i)})`]:{[s]:l}};if(d)return d.replace("%s",String(i))}return s};function V_(t,i){i.forEach(l=>{t[l]||(t[l]={})})}function V(t,i,l){!t[i]&&l&&(t[i]=l)}function ml(t){return typeof t!="string"||!t.startsWith("hsl")?t:Oy(t)}function Xt(t,i){`${i}Channel`in t||(t[`${i}Channel`]=fl(ml(t[i])))}function Y_(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const wt=t=>{try{return t()}catch{}},X_=(t="mui")=>n_(t);function Od(t,i,l,s,u){if(!l)return;l=l===!0?{}:l;const d=u==="dark"?"dark":"light";if(!s){i[u]=H_({...l,palette:{mode:d,...l?.palette},colorSpace:t});return}const{palette:f,...m}=Xd({...s,palette:{mode:d,...l?.palette},colorSpace:t});return i[u]={...l,palette:f,opacity:{...Jy(d),...l?.opacity},overlays:l?.overlays||$y(d)},m}function F_(t={},...i){const{colorSchemes:l={light:!0},defaultColorScheme:s,disableCssColorScheme:u=!1,cssVarPrefix:d="mui",nativeColor:f=!1,shouldSkipGeneratingVar:m=P_,colorSchemeSelector:g=l.light&&l.dark?"media":void 0,rootSelector:h=":root",...v}=t,b=Object.keys(l)[0],x=s||(l.light&&b!=="light"?"light":b),w=X_(d),{[x]:A,light:_,dark:q,...k}=l,H={...k};let U=A;if((x==="dark"&&!("dark"in l)||x==="light"&&!("light"in l))&&(U=!0),!U)throw new Error(rr(21,x));let P;f&&(P="oklch");const B=Od(P,H,U,v,x);_&&!H.light&&Od(P,H,_,void 0,"light"),q&&!H.dark&&Od(P,H,q,void 0,"dark");let E={defaultColorScheme:x,...B,cssVarPrefix:d,colorSchemeSelector:g,rootSelector:h,getCssVar:w,colorSchemes:H,font:{...C_(B.typography),...B.font},spacing:Y_(v.spacing)};Object.keys(E.colorSchemes).forEach(I=>{const S=E.colorSchemes[I].palette,te=ie=>{const z=ie.split("-"),Z=z[1],se=z[2];return w(ie,S[Z][se])};S.mode==="light"&&(V(S.common,"background","#fff"),V(S.common,"onBackground","#000")),S.mode==="dark"&&(V(S.common,"background","#000"),V(S.common,"onBackground","#fff"));function W(ie,z,Z){if(P){let se;return ie===Ka&&(se=`transparent ${((1-Z)*100).toFixed(0)}%`),ie===De&&(se=`#000 ${(Z*100).toFixed(0)}%`),ie===ze&&(se=`#fff ${(Z*100).toFixed(0)}%`),`color-mix(in ${P}, ${z}, ${se})`}return ie(z,Z)}if(V_(S,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),S.mode==="light"){V(S.Alert,"errorColor",W(De,S.error.light,.6)),V(S.Alert,"infoColor",W(De,S.info.light,.6)),V(S.Alert,"successColor",W(De,S.success.light,.6)),V(S.Alert,"warningColor",W(De,S.warning.light,.6)),V(S.Alert,"errorFilledBg",te("palette-error-main")),V(S.Alert,"infoFilledBg",te("palette-info-main")),V(S.Alert,"successFilledBg",te("palette-success-main")),V(S.Alert,"warningFilledBg",te("palette-warning-main")),V(S.Alert,"errorFilledColor",wt(()=>S.getContrastText(S.error.main))),V(S.Alert,"infoFilledColor",wt(()=>S.getContrastText(S.info.main))),V(S.Alert,"successFilledColor",wt(()=>S.getContrastText(S.success.main))),V(S.Alert,"warningFilledColor",wt(()=>S.getContrastText(S.warning.main))),V(S.Alert,"errorStandardBg",W(ze,S.error.light,.9)),V(S.Alert,"infoStandardBg",W(ze,S.info.light,.9)),V(S.Alert,"successStandardBg",W(ze,S.success.light,.9)),V(S.Alert,"warningStandardBg",W(ze,S.warning.light,.9)),V(S.Alert,"errorIconColor",te("palette-error-main")),V(S.Alert,"infoIconColor",te("palette-info-main")),V(S.Alert,"successIconColor",te("palette-success-main")),V(S.Alert,"warningIconColor",te("palette-warning-main")),V(S.AppBar,"defaultBg",te("palette-grey-100")),V(S.Avatar,"defaultBg",te("palette-grey-400")),V(S.Button,"inheritContainedBg",te("palette-grey-300")),V(S.Button,"inheritContainedHoverBg",te("palette-grey-A100")),V(S.Chip,"defaultBorder",te("palette-grey-400")),V(S.Chip,"defaultAvatarColor",te("palette-grey-700")),V(S.Chip,"defaultIconColor",te("palette-grey-700")),V(S.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),V(S.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),V(S.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),V(S.LinearProgress,"primaryBg",W(ze,S.primary.main,.62)),V(S.LinearProgress,"secondaryBg",W(ze,S.secondary.main,.62)),V(S.LinearProgress,"errorBg",W(ze,S.error.main,.62)),V(S.LinearProgress,"infoBg",W(ze,S.info.main,.62)),V(S.LinearProgress,"successBg",W(ze,S.success.main,.62)),V(S.LinearProgress,"warningBg",W(ze,S.warning.main,.62)),V(S.Skeleton,"bg",P?W(Ka,S.text.primary,.11):`rgba(${te("palette-text-primaryChannel")} / 0.11)`),V(S.Slider,"primaryTrack",W(ze,S.primary.main,.62)),V(S.Slider,"secondaryTrack",W(ze,S.secondary.main,.62)),V(S.Slider,"errorTrack",W(ze,S.error.main,.62)),V(S.Slider,"infoTrack",W(ze,S.info.main,.62)),V(S.Slider,"successTrack",W(ze,S.success.main,.62)),V(S.Slider,"warningTrack",W(ze,S.warning.main,.62));const ie=P?W(De,S.background.default,.6825):ro(S.background.default,.8);V(S.SnackbarContent,"bg",ie),V(S.SnackbarContent,"color",wt(()=>P?Yd.text.primary:S.getContrastText(ie))),V(S.SpeedDialAction,"fabHoverBg",ro(S.background.paper,.15)),V(S.StepConnector,"border",te("palette-grey-400")),V(S.StepContent,"border",te("palette-grey-400")),V(S.Switch,"defaultColor",te("palette-common-white")),V(S.Switch,"defaultDisabledColor",te("palette-grey-100")),V(S.Switch,"primaryDisabledColor",W(ze,S.primary.main,.62)),V(S.Switch,"secondaryDisabledColor",W(ze,S.secondary.main,.62)),V(S.Switch,"errorDisabledColor",W(ze,S.error.main,.62)),V(S.Switch,"infoDisabledColor",W(ze,S.info.main,.62)),V(S.Switch,"successDisabledColor",W(ze,S.success.main,.62)),V(S.Switch,"warningDisabledColor",W(ze,S.warning.main,.62)),V(S.TableCell,"border",W(ze,W(Ka,S.divider,1),.88)),V(S.Tooltip,"bg",W(Ka,S.grey[700],.92))}if(S.mode==="dark"){V(S.Alert,"errorColor",W(ze,S.error.light,.6)),V(S.Alert,"infoColor",W(ze,S.info.light,.6)),V(S.Alert,"successColor",W(ze,S.success.light,.6)),V(S.Alert,"warningColor",W(ze,S.warning.light,.6)),V(S.Alert,"errorFilledBg",te("palette-error-dark")),V(S.Alert,"infoFilledBg",te("palette-info-dark")),V(S.Alert,"successFilledBg",te("palette-success-dark")),V(S.Alert,"warningFilledBg",te("palette-warning-dark")),V(S.Alert,"errorFilledColor",wt(()=>S.getContrastText(S.error.dark))),V(S.Alert,"infoFilledColor",wt(()=>S.getContrastText(S.info.dark))),V(S.Alert,"successFilledColor",wt(()=>S.getContrastText(S.success.dark))),V(S.Alert,"warningFilledColor",wt(()=>S.getContrastText(S.warning.dark))),V(S.Alert,"errorStandardBg",W(De,S.error.light,.9)),V(S.Alert,"infoStandardBg",W(De,S.info.light,.9)),V(S.Alert,"successStandardBg",W(De,S.success.light,.9)),V(S.Alert,"warningStandardBg",W(De,S.warning.light,.9)),V(S.Alert,"errorIconColor",te("palette-error-main")),V(S.Alert,"infoIconColor",te("palette-info-main")),V(S.Alert,"successIconColor",te("palette-success-main")),V(S.Alert,"warningIconColor",te("palette-warning-main")),V(S.AppBar,"defaultBg",te("palette-grey-900")),V(S.AppBar,"darkBg",te("palette-background-paper")),V(S.AppBar,"darkColor",te("palette-text-primary")),V(S.Avatar,"defaultBg",te("palette-grey-600")),V(S.Button,"inheritContainedBg",te("palette-grey-800")),V(S.Button,"inheritContainedHoverBg",te("palette-grey-700")),V(S.Chip,"defaultBorder",te("palette-grey-700")),V(S.Chip,"defaultAvatarColor",te("palette-grey-300")),V(S.Chip,"defaultIconColor",te("palette-grey-300")),V(S.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),V(S.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),V(S.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),V(S.LinearProgress,"primaryBg",W(De,S.primary.main,.5)),V(S.LinearProgress,"secondaryBg",W(De,S.secondary.main,.5)),V(S.LinearProgress,"errorBg",W(De,S.error.main,.5)),V(S.LinearProgress,"infoBg",W(De,S.info.main,.5)),V(S.LinearProgress,"successBg",W(De,S.success.main,.5)),V(S.LinearProgress,"warningBg",W(De,S.warning.main,.5)),V(S.Skeleton,"bg",P?W(Ka,S.text.primary,.13):`rgba(${te("palette-text-primaryChannel")} / 0.13)`),V(S.Slider,"primaryTrack",W(De,S.primary.main,.5)),V(S.Slider,"secondaryTrack",W(De,S.secondary.main,.5)),V(S.Slider,"errorTrack",W(De,S.error.main,.5)),V(S.Slider,"infoTrack",W(De,S.info.main,.5)),V(S.Slider,"successTrack",W(De,S.success.main,.5)),V(S.Slider,"warningTrack",W(De,S.warning.main,.5));const ie=P?W(ze,S.background.default,.985):ro(S.background.default,.98);V(S.SnackbarContent,"bg",ie),V(S.SnackbarContent,"color",wt(()=>P?Uy.text.primary:S.getContrastText(ie))),V(S.SpeedDialAction,"fabHoverBg",ro(S.background.paper,.15)),V(S.StepConnector,"border",te("palette-grey-600")),V(S.StepContent,"border",te("palette-grey-600")),V(S.Switch,"defaultColor",te("palette-grey-300")),V(S.Switch,"defaultDisabledColor",te("palette-grey-600")),V(S.Switch,"primaryDisabledColor",W(De,S.primary.main,.55)),V(S.Switch,"secondaryDisabledColor",W(De,S.secondary.main,.55)),V(S.Switch,"errorDisabledColor",W(De,S.error.main,.55)),V(S.Switch,"infoDisabledColor",W(De,S.info.main,.55)),V(S.Switch,"successDisabledColor",W(De,S.success.main,.55)),V(S.Switch,"warningDisabledColor",W(De,S.warning.main,.55)),V(S.TableCell,"border",W(De,W(Ka,S.divider,1),.68)),V(S.Tooltip,"bg",W(Ka,S.grey[700],.92))}Xt(S.background,"default"),Xt(S.background,"paper"),Xt(S.common,"background"),Xt(S.common,"onBackground"),Xt(S,"divider"),Object.keys(S).forEach(ie=>{const z=S[ie];ie!=="tonalOffset"&&z&&typeof z=="object"&&(z.main&&V(S[ie],"mainChannel",fl(ml(z.main))),z.light&&V(S[ie],"lightChannel",fl(ml(z.light))),z.dark&&V(S[ie],"darkChannel",fl(ml(z.dark))),z.contrastText&&V(S[ie],"contrastTextChannel",fl(ml(z.contrastText))),ie==="text"&&(Xt(S[ie],"primary"),Xt(S[ie],"secondary")),ie==="action"&&(z.active&&Xt(S[ie],"active"),z.selected&&Xt(S[ie],"selected")))})}),E=i.reduce((I,S)=>An(I,S),E);const D={prefix:d,disableCssColorScheme:u,shouldSkipGeneratingVar:m,getSelector:$_(E),enableContrastVars:f},{vars:G,generateThemeVars:K,generateStyleSheets:ee}=r_(E,D);return E.vars=G,Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([I,S])=>{E[I]=S}),E.generateThemeVars=K,E.generateStyleSheets=ee,E.generateSpacing=function(){return _y(v.spacing,Bo(this))},E.getColorSchemeSelector=i_(g),E.spacing=E.generateSpacing(),E.shouldSkipGeneratingVar=m,E.unstable_sxConfig={...Ll,...v?.unstable_sxConfig},E.unstable_sx=function(S){return lr({sx:S,theme:this})},E.toRuntimeSource=Py,E}function zb(t,i,l){t.colorSchemes&&l&&(t.colorSchemes[i]={...l!==!0&&l,palette:Af({...l===!0?{}:l.palette,mode:i})})}function Cf(t={},...i){const{palette:l,cssVariables:s=!1,colorSchemes:u=l?void 0:{light:!0},defaultColorScheme:d=l?.mode,...f}=t,m=d||"light",g=u?.[m],h={...u,...l?{[m]:{...typeof g!="boolean"&&g,palette:l}}:void 0};if(s===!1){if(!("colorSchemes"in t))return Xd(t,...i);let v=l;"palette"in t||h[m]&&(h[m]!==!0?v=h[m].palette:m==="dark"&&(v={mode:"dark"}));const b=Xd({...t,palette:v},...i);return b.defaultColorScheme=m,b.colorSchemes=h,b.palette.mode==="light"&&(b.colorSchemes.light={...h.light!==!0&&h.light,palette:b.palette},zb(b,"dark",h.dark)),b.palette.mode==="dark"&&(b.colorSchemes.dark={...h.dark!==!0&&h.dark,palette:b.palette},zb(b,"light",h.light)),b}return!l&&!("light"in h)&&m==="light"&&(h.light=!0),F_({...f,colorSchemes:h,defaultColorScheme:m,...typeof s!="boolean"&&s},...i)}const Mf=Cf();function K_(){const t=vf(Mf);return t[Ft]||t}function Q_(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const W_=t=>Q_(t)&&t!=="classes",ur=Ry({themeId:Ft,defaultTheme:Mf,rootShouldForwardProp:W_});function Z_({theme:t,...i}){const l=Ft in t?t[Ft]:void 0;return Q.jsx(By,{...i,themeId:l?Ft:void 0,theme:l||t})}const io={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:I_}=e_({themeId:Ft,theme:()=>Cf({cssVariables:!0}),colorSchemeStorageKey:io.colorSchemeStorageKey,modeStorageKey:io.modeStorageKey,defaultColorScheme:{light:io.defaultLightColorScheme,dark:io.defaultDarkColorScheme},resolveTheme:t=>{const i={...t,typography:Hy(t.palette,t.typography)};return i.unstable_sx=function(s){return lr({sx:s,theme:this})},i}}),eA=I_;function nA({theme:t,...i}){const l=F.useMemo(()=>{if(typeof t=="function")return t;const s=Ft in t?t[Ft]:t;return"colorSchemes"in s?null:"vars"in s?t:{...t,vars:null}},[t]);return l?Q.jsx(Z_,{theme:l,...i}):Q.jsx(eA,{theme:t,...i})}function tA(t){return Q.jsx(Ay,{...t,defaultTheme:Mf,themeId:Ft})}function Vy(t){return function(l){return Q.jsx(tA,{styles:typeof t=="function"?s=>t({theme:s,...l}):t})}}function mC(){return Cy}const Dl=Yw;function cr(t){return Hw(t)}function aA(t){return or("MuiPaper",t)}Po("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const rA=t=>{const{square:i,elevation:l,variant:s,classes:u}=t,d={root:["root",s,!i&&"rounded",s==="elevation"&&`elevation${l}`]};return ci(d,aA,u)},iA=ur("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.root,i[l.variant],!l.square&&i.rounded,l.variant==="elevation"&&i[`elevation${l.elevation}`]]}})(Dl(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:({ownerState:i})=>!i.square,style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),lA=F.forwardRef(function(i,l){const s=cr({props:i,name:"MuiPaper"}),u=K_(),{className:d,component:f="div",elevation:m=1,square:g=!1,variant:h="elevation",...v}=s,b={...s,component:f,elevation:m,square:g,variant:h},x=rA(b);return Q.jsx(iA,{as:f,ownerState:b,className:sr(x.root,d),ref:l,...v,style:{...h==="elevation"&&{"--Paper-shadow":(u.vars||u).shadows[m],...u.vars&&{"--Paper-overlay":u.vars.overlays?.[m]},...!u.vars&&u.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Mo("#fff",Fd(m))}, ${Mo("#fff",Fd(m))})`}},...v.style}})});function sA(t){return typeof t.main=="string"}function oA(t,i=[]){if(!sA(t))return!1;for(const l of i)if(!t.hasOwnProperty(l)||typeof t[l]!="string")return!1;return!0}function uA(t=[]){return([,i])=>i&&oA(i,t)}function cA(t){return or("MuiAppBar",t)}Po("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const dA=t=>{const{color:i,position:l,classes:s}=t,u={root:["root",`color${Qt(i)}`,`position${Qt(l)}`]};return ci(u,cA,s)},Bb=(t,i)=>t?`${t?.replace(")","")}, ${i})`:i,fA=ur(lA,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.root,i[`position${Qt(l.position)}`],i[`color${Qt(l.color)}`]]}})(Dl(({theme:t})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter(uA(["contrastText"])).map(([i])=>({props:{color:i},style:{"--AppBar-background":(t.vars??t).palette[i].main,"--AppBar-color":(t.vars??t).palette[i].contrastText}})),{props:i=>i.enableColorOnDark===!0&&!["inherit","transparent"].includes(i.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:i=>i.enableColorOnDark===!1&&!["inherit","transparent"].includes(i.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?Bb(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?Bb(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}))),mA=F.forwardRef(function(i,l){const s=cr({props:i,name:"MuiAppBar"}),{className:u,color:d="primary",enableColorOnDark:f=!1,position:m="fixed",...g}=s,h={...s,color:d,position:m,enableColorOnDark:f},v=dA(h);return Q.jsx(fA,{square:!0,component:"header",ownerState:h,elevation:4,className:sr(v.root,u,m==="fixed"&&"mui-fixed"),ref:l,...g})}),pA=c_({createStyledComponent:ur("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.root,i[`maxWidth${Qt(String(l.maxWidth))}`],l.fixed&&i.fixed,l.disableGutters&&i.disableGutters]}}),useThemeProps:t=>cr({props:t,name:"MuiContainer"})}),Kd=typeof Vy({})=="function",hA=(t,i)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...i&&!t.vars&&{colorScheme:t.palette.mode}}),gA=t=>({color:(t.vars||t).palette.text.primary,...t.typography.body1,backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),Yy=(t,i=!1)=>{const l={};i&&t.colorSchemes&&typeof t.getColorSchemeSelector=="function"&&Object.entries(t.colorSchemes).forEach(([d,f])=>{const m=t.getColorSchemeSelector(d);m.startsWith("@")?l[m]={":root":{colorScheme:f.palette?.mode}}:l[m.replace(/\s*&/,"")]={colorScheme:f.palette?.mode}});let s={html:hA(t,i),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:{margin:0,...gA(t),"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}},...l};const u=t.components?.MuiCssBaseline?.styleOverrides;return u&&(s=[s,u]),s},po="mui-ecs",bA=t=>{const i=Yy(t,!1),l=Array.isArray(i)?i[0]:i;return!t.vars&&l&&(l.html[`:root:has(${po})`]={colorScheme:t.palette.mode}),t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([s,u])=>{const d=t.getColorSchemeSelector(s);d.startsWith("@")?l[d]={[`:root:not(:has(.${po}))`]:{colorScheme:u.palette?.mode}}:l[d.replace(/\s*&/,"")]={[`&:not(:has(.${po}))`]:{colorScheme:u.palette?.mode}}}),i},yA=Vy(Kd?({theme:t,enableColorScheme:i})=>Yy(t,i):({theme:t})=>bA(t));function vA(t){const i=cr({props:t,name:"MuiCssBaseline"}),{children:l,enableColorScheme:s=!1}=i;return Q.jsxs(F.Fragment,{children:[Kd&&Q.jsx(yA,{enableColorScheme:s}),!Kd&&!s&&Q.jsx("span",{className:po,style:{display:"none"}}),l]})}function xA(t){return or("MuiDivider",t)}Po("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const SA=t=>{const{absolute:i,children:l,classes:s,flexItem:u,light:d,orientation:f,textAlign:m,variant:g}=t;return ci({root:["root",i&&"absolute",g,d&&"light",f==="vertical"&&"vertical",u&&"flexItem",l&&"withChildren",l&&f==="vertical"&&"withChildrenVertical",m==="right"&&f!=="vertical"&&"textAlignRight",m==="left"&&f!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",f==="vertical"&&"wrapperVertical"]},xA,s)},wA=ur("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.root,l.absolute&&i.absolute,i[l.variant],l.light&&i.light,l.orientation==="vertical"&&i.vertical,l.flexItem&&i.flexItem,l.children&&i.withChildren,l.children&&l.orientation==="vertical"&&i.withChildrenVertical,l.textAlign==="right"&&l.orientation!=="vertical"&&i.textAlignRight,l.textAlign==="left"&&l.orientation!=="vertical"&&i.textAlignLeft]}})(Dl(({theme:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.alpha((t.vars||t).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:i})=>!!i.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:i})=>i.children&&i.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:i})=>i.orientation==="vertical"&&i.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:i})=>i.textAlign==="right"&&i.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:i})=>i.textAlign==="left"&&i.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),_A=ur("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.wrapper,l.orientation==="vertical"&&i.wrapperVertical]}})(Dl(({theme:t})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}))),Qd=F.forwardRef(function(i,l){const s=cr({props:i,name:"MuiDivider"}),{absolute:u=!1,children:d,className:f,orientation:m="horizontal",component:g=d||m==="vertical"?"div":"hr",flexItem:h=!1,light:v=!1,role:b=g!=="hr"?"separator":void 0,textAlign:x="center",variant:w="fullWidth",...A}=s,_={...s,absolute:u,component:g,flexItem:h,light:v,orientation:m,role:b,textAlign:x,variant:w},q=SA(_);return Q.jsx(wA,{as:g,className:sr(q.root,f),role:b,ref:l,ownerState:_,"aria-orientation":b==="separator"&&(g!=="hr"||m==="vertical")?m:void 0,...A,children:d?Q.jsx(_A,{className:q.wrapper,ownerState:_,children:d}):null})});Qd&&(Qd.muiSkipListHighlight=!0);const AA=b_({createStyledComponent:ur("div",{name:"MuiStack",slot:"Root"}),useThemeProps:t=>cr({props:t,name:"MuiStack"})});function CA(t){return or("MuiToolbar",t)}Po("MuiToolbar",["root","gutters","regular","dense"]);const MA=t=>{const{classes:i,disableGutters:l,variant:s}=t;return ci({root:["root",!l&&"gutters",s]},CA,i)},TA=ur("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:l}=t;return[i.root,!l.disableGutters&&i.gutters,i[l.variant]]}})(Dl(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:i})=>!i.disableGutters,style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}))),qA=F.forwardRef(function(i,l){const s=cr({props:i,name:"MuiToolbar"}),{className:u,component:d="div",disableGutters:f=!1,variant:m="regular",...g}=s,h={...s,component:d,disableGutters:f,variant:m},v=MA(h);return Q.jsx(TA,{as:d,className:sr(v.root,u),ref:l,ownerState:h,...g})}),RA=Cf({typography:{fontFamily:"'EB Garamond', serif",fontSize:16,htmlFontSize:16}}),EA=t=>{const s=new DOMParser().parseFromString(t,"text/html").querySelector("body");return s?(s.querySelectorAll("a > img").forEach(u=>{const d=u;if(!d.src)return;const f=Object.assign({"/src/site/content/figures/other/placeholder1.png":Zg,"/src/site/content/figures/placeholder1.jpg":Ig,"/src/site/content/figures/profile-placeholder.png":eb}),g=new URL(d.src).pathname;d.src=f[`/src/site/content${g}`].default}),s.querySelectorAll("a").forEach(u=>{if(u.href)if(u.matches("a:has(> img)")){const d=Object.assign({"/src/site/content/figures/other/placeholder1.png":Zg,"/src/site/content/figures/placeholder1.jpg":Ig,"/src/site/content/figures/profile-placeholder.png":eb}),m=new URL(u.href).pathname;u.href=d[`/src/site/content${m}`].default}else{const d=new URL(u.href);u.href=d.hash}}),s.innerHTML):""},di=P1({beforeLoad:async()=>({siteMap:Object.fromEntries(nb.map(i=>["/"+i.path.join("/"),i])),siteBlogs:nb,getBodyContent:EA}),component:()=>Q.jsxs(Q.Fragment,{children:[Q.jsx(rS,{}),Q.jsxs(nA,{theme:RA,children:[Q.jsx(vA,{}),Q.jsx(mA,{position:"relative",variant:"outlined",color:"default",sx:{paddingY:0},children:Q.jsx(qA,{disableGutters:!0,children:Q.jsxs(AA,{direction:"row",spacing:2,useFlexGap:!0,flexWrap:"nowrap",divider:Q.jsx(Qd,{flexItem:!0,orientation:"vertical"}),children:[Q.jsx(bl,{to:"/",children:"Home"}),Q.jsx(bl,{to:"/ongoing",children:"Ongoing research"}),Q.jsx(bl,{to:"/publications",children:"Publications"})]})})}),Q.jsx(pA,{maxWidth:"md",sx:{paddingTop:8,paddingBottom:4},children:Q.jsx(ry,{})})]})]})}),kA="modulepreload",LA=function(t){return"/project-textile/"+t},jb={},zl=function(i,l,s){let u=Promise.resolve();if(l&&l.length>0){let g=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");u=g(l.map(h=>{if(h=LA(h),h in jb)return;jb[h]=!0;const v=h.endsWith(".css"),b=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${b}`))return;const x=document.createElement("link");if(x.rel=v?"stylesheet":kA,v||(x.as="script"),x.crossOrigin="",x.href=h,m&&x.setAttribute("nonce",m),document.head.appendChild(x),v)return new Promise((w,A)=>{x.addEventListener("load",w),x.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${h}`)))})}))}function d(f){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=f,window.dispatchEvent(m),!m.defaultPrevented)throw f}return u.then(f=>{for(const m of f||[])m.status==="rejected"&&d(m.reason);return i().catch(d)})},OA=`<!DOCTYPE html>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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
December 6, 2025
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
<a href="index-0.html#autosec-4" class="tocsection" >
<span class="sectionnumber">1</span>&#x2003;Basic Algebra</a><p>

</p>


<p>
<a href="index-0.html#autosec-5" class="tocsection" >
<span class="sectionnumber">2</span>&#x2003;Calculus</a><p>

</p>


<p>
<a href="index-0.html#autosec-6" class="tocsection" >
<span class="sectionnumber">3</span>&#x2003;Linear Algebra</a><p>

</p>


<p>
<a href="index-0.html#autosec-7" class="tocsection" >
<span class="sectionnumber">4</span>&#x2003;Probability and Statistics</a><p>

</p>


<p>
<a href="index-0.html#autosec-8" class="tocsection" >
<span class="sectionnumber">5</span>&#x2003;Logarithms (Log Page)</a><p>

</p>


<p>
<a href="index-0.html#autosec-9" class="tocsubsection" >
<span class="sectionnumber">5.1</span>&#x2003;Logarithm Identities</a><p>

</p>


<p>
<a href="index-0.html#autosec-10" class="tocsubsection" >
<span class="sectionnumber">5.2</span>&#x2003;Logarithmic Equations</a><p>

</p>


<p>
<a href="index-0.html#autosec-11" class="tocsubsection" >
<span class="sectionnumber">5.3</span>&#x2003;Logarithmic Series</a><p>

</p>


<p>
<a href="index-0.html#autosec-12" class="tocsubsection" >
<span class="sectionnumber">5.4</span>&#x2003;A Long Log Page Filler</a><p>

</p>
</nav>
<!--
...... section Basic Algebra ......
-->
<h4 id="autosec-4"><span class="sectionnumber">1&#x2003;</span>Basic Algebra</h4>
<a id="index-autopage-4"></a>


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
(a + b)^2 &amp;= a^2 + 2ab + b^2, \\\\ (a - b)^2 &amp;= a^2 - 2ab + b^2, \\\\ a^2 - b^2 &amp;= (a - b)(a + b).
\\end{align}

</p>
<!--
...... section Calculus ......
-->
<h4 id="autosec-5"><span class="sectionnumber">2&#x2003;</span>Calculus</h4>
<a id="index-autopage-5"></a>


<p>
Definition of the derivative:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{7}\\)</span>

<!--

                                                                                                           f (x + h) − f (x)
                                                                                     f ′ (x) = lim                           .                                                        (8)
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
                                                                                               f ′ (x) dx = f (b) − f (a).                                                            (9)
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
                                                                                                     x = nxn−1 ,                                                                     (10)
                                                                                                  dx
                                                                                                   d x
                                                                                                     e = ex ,                                                                        (11)
                                                                                                  dx
                                                                                                d
                                                                                                  sin x = cos x,                                                                     (12)
                                                                                               dx
                                                                                                d
                                                                                                  cos x = − sin x.                                                                   (13)
                                                                                               dx


-->


<p>

\\begin{align}
\\frac {d}{dx} x^n &amp;= n x^{n-1}, \\\\ \\frac {d}{dx} e^x &amp;= e^x, \\\\ \\frac {d}{dx} \\sin x &amp;= \\cos x, \\\\ \\frac {d}{dx} \\cos x &amp;= -\\sin x.
\\end{align}

</p>

<p>
Some common integrals:
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{13}\\)</span>


<!--


                                                                                                         xn+1
                                                                                     Z
                                                                                         xn dx =              + C,        n ̸= −1,                                                   (14)
                                                                                                         n+1
                                                                                     Z
                                                                                          1
                                                                                            dx = ln |x| + C,                                                                         (15)
                                                                                          x
                                                                                     Z
                                                                                         ex dx = ex + C,                                                                             (16)
                                                                                 Z
                                                                                     sin x dx = − cos x + C.                                                                         (17)



-->


<p>

\\begin{align}
\\int x^n\\,dx &amp;= \\frac {x^{n+1}}{n+1} + C, \\quad n \\neq -1, \\\\ \\int \\frac {1}{x}\\,dx &amp;= \\ln |x| + C, \\\\ \\int e^x\\,dx &amp;= e^x + C, \\\\ \\int \\sin x\\,dx &amp;= -\\cos x + C.
\\end{align}

</p>

<p>
A multivariable integral:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{17}\\)</span>

<!--

                                                                                                ZZ
                                                                                                         (x2 + y 2 ) dA                                                              (18)
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
<h4 id="autosec-6"><span class="sectionnumber">3&#x2003;</span>Linear Algebra</h4>
<a id="index-autopage-6"></a>


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


                                                                                                  Av = λv.                                                                                   (22)

-->

<p>

\\begin{equation}
A \\mathbf {v} = \\lambda \\mathbf {v}.
\\end{equation}

</p>
<!--
...... section Probability and Statistics ......
-->
<h4 id="autosec-7"><span class="sectionnumber">4&#x2003;</span>Probability and Statistics</h4>
<a id="index-autopage-7"></a>


<p>
Probability of event \\(A\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{22}\\)</span>

<!--

                                                                                              number of favorable outcomes
                                                                                    P (A) =                                .   (23)
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
                                                                                              E         Xi =         E[Xi ].   (24)
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
                                                                                         Var(X) = E[X 2 ] − E[X] .             (25)

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
                                                                                                                    
                                                                                                    1
                                                                                      f (x) = √       exp −            .       (26)
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
                                                                                         P (A | B) =                     .     (27)
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
<h4 id="autosec-8"><span class="sectionnumber">5&#x2003;</span>Logarithms (Log Page)</h4>
<a id="index-autopage-8"></a>


<p>
Basic definition:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{27}\\)</span>

<!--


                                                                                       loga b = c   ⇐⇒       ac = b,   (28)

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
<h5 id="autosec-9"><span class="sectionnumber">5.1&#x2003;</span>Logarithm Identities</h5>
<a id="index-autopage-9"></a>


<p>
For \\(a &gt; 0\\), \\(a \\neq 1\\), and \\(x,y &gt; 0\\):
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{29}\\)</span>


<!--



                                                                                          loga (xy) = loga x + loga y,                                                                       (30)
                                                                                              
                                                                                                x
                                                                                        loga        = loga x − loga y,                                                                       (31)
                                                                                                y
                                                                                         loga (xk ) = k loga x,                                                                              (32)
                                                                                             loga a = 1,                                                                                     (33)
                                                                                              loga 1 = 0.                                                                                    (34)



-->


<p>

\\begin{align}
\\log _a (xy) &amp;= \\log _a x + \\log _a y, \\\\ \\log _a \\left (\\frac {x}{y}\\right ) &amp;= \\log _a x - \\log _a y, \\\\ \\log _a (x^k) &amp;= k \\log _a x, \\\\ \\log _a a &amp;= 1, \\\\ \\log _a 1 &amp;=
0.
\\end{align}

</p>

<p>
Natural logarithm:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{34}\\)</span>

<!--


                                                                                                 ln x = loge x.                                                                              (35)

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
                                                                                                    ln x = .                                                                                 (36)
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
                                                                                                 loga x =        .                                                                           (37)
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
                                                                                             ln x dx = x ln x − x + C.                                                                       (38)

-->

<p>

\\begin{equation}
\\int \\ln x\\,dx = x \\ln x - x + C.
\\end{equation}

</p>
<!--
...... subsection Logarithmic Equations ......
-->
<h5 id="autosec-10"><span class="sectionnumber">5.2&#x2003;</span>Logarithmic Equations</h5>
<a id="index-autopage-10"></a>


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
<h5 id="autosec-11"><span class="sectionnumber">5.3&#x2003;</span>Logarithmic Series</h5>
<a id="index-autopage-11"></a>


<p>
For \\(|x| &lt; 1\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{41}\\)</span>

<!--

                                                                                                      ∞
                                                                                                      X               xn
                                                                                        ln(1 + x) =       (−1)n+1        .        (42)
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
<h5 id="autosec-12"><span class="sectionnumber">5.4&#x2003;</span>A Long Log Page Filler</h5>
<a id="index-autopage-12"></a>


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
`,DA=Object.freeze(Object.defineProperty({__proto__:null,default:OA},Symbol.toStringTag,{value:"Module"})),zA=()=>zl(()=>import("./index-Dz7NlCpU.js"),__vite__mapDeps([0,1])),BA=ar("/")({component:Tl(zA,"component"),loader:async({context:{getBodyContent:t}})=>({body:t(Object.values(Object.assign({"/src/site/content/index.html":DA}))[0].default)}),head:()=>({meta:[{title:"Home"}]})}),jA=`<!DOCTYPE html>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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
December 5, 2025
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
`,Xy=Object.freeze(Object.defineProperty({__proto__:null,default:jA},Symbol.toStringTag,{value:"Module"})),NA=()=>zl(()=>import("./index-R9jqSKiZ.js"),__vite__mapDeps([2,1,3])),UA=ar("/publications/")({component:Tl(NA,"component"),loader:async({context:{getBodyContent:t}})=>({body:t(Object.assign({"/src/site/content/publications/index.html":Xy})["/src/site/content/publications/index.html"].default)}),head:()=>({meta:[{title:"Publications"}]})}),GA=`<!DOCTYPE html>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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
December 5, 2025
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
`,Fy=Object.freeze(Object.defineProperty({__proto__:null,default:GA},Symbol.toStringTag,{value:"Module"})),HA=()=>zl(()=>import("./index-BSKXh1r5.js"),__vite__mapDeps([4,1,3])),PA=ar("/ongoing/")({component:Tl(HA,"component"),loader:async({context:{getBodyContent:t}})=>({body:t(Object.assign({"/src/site/content/ongoing/index.html":Fy})["/src/site/content/ongoing/index.html"].default)}),head:()=>({meta:[{title:"Ongoing Research"}]})}),JA=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>project-1</title>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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

</div>

<a id="project-1-autopage-1"></a>
<table>

<tr style="display:none"><th>.</th></tr>

<tr>
<td class="tdp">
<div class="minipage" style="vertical-align:bottom ; justify-content:flex-start ; ">

<a id="project-1-autopage-3"></a>

<p>
Your Name
</p>
<p>
<i>Your Title / Position</i>
</p>
<table>

<tr style="display:none"><th>.</th></tr>

<tr>
<td class="tdl">Email:</td>
<td class="tdl"><a href="mailto:you@example.com" target="_blank" >you@example.com</a></td>
</tr>

<tr>
<td class="tdl">Phone:</td>
<td class="tdl">+00 000 000 000</td>
</tr>

<tr>
<td class="tdl">Web:</td>
<td class="tdl"><a href="https://example.com" target="_blank" >example.com</a></td>
</tr>

<tr>
<td class="tdl">Addr:</td>
<td class="tdl">Street 1, City, Country</td>
</tr>

</table>

</div>

</td>
<td class="tdp">
<div class="minipage" style="vertical-align:bottom ; justify-content:flex-start ; ">

<a id="project-1-autopage-5"></a>

<p>

<a href="../figures/placeholder1.jpg" target="_blank" ><img
    src="../figures/placeholder1.jpg"
    style="
    width:85pt;
    height:53pt;
    "
    class="inlineimage"
    alt="(image)"
></a>
</p>
<p>
Your photo
</p>


</div>

</td>
</tr>
</table>
<!--
...... section Profile ......
-->
<h4 id="autosec-6">Profile</h4>
<a id="project-1-autopage-6"></a>


<p>
Short 2–3 sentence summary about you.
</p>
<!--
...... section Experience ......
-->
<h4 id="autosec-7">Experience</h4>
<a id="project-1-autopage-7"></a>


<p>
<b>Job Title</b> &#x2003;&#x2003;2023–Present<br />
Company Name, City<br />

</p>
<ul class="itemize" style="list-style-type:none">

<li>
<p>
<span class="listmarker">•</span> Bullet point describing what you did.
</p>

</li>
<li>

<p>
<span class="listmarker">•</span> Another bullet point.
</p>
</li>
</ul>
<!--
...... section Education ......
-->
<h4 id="autosec-8">Education</h4>
<a id="project-1-autopage-8"></a>


<p>
<b>Degree</b>, University Name &#x2003;&#x2003;2019–2023
</p>

<a id="project-1-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,$A=Object.freeze(Object.defineProperty({__proto__:null,default:JA},Symbol.toStringTag,{value:"Module"})),VA=`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="generator" content="LaTeX Lwarp package" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>project-2</title>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

<a id="project-2-autofile-0"></a>

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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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

</div>

<a id="project-2-autopage-1"></a>
<table>

<tr style="display:none"><th>.</th></tr>

<tr>
<td class="tdp">
<div class="minipage" style="vertical-align:bottom ; justify-content:flex-start ; ">

<a id="project-2-autopage-3"></a>

<p>
Your Name
</p>
<p>
<i>Your Title / Position</i>
</p>
<table>

<tr style="display:none"><th>.</th></tr>

<tr>
<td class="tdl">Email:</td>
<td class="tdl"><a href="mailto:you@example.com" target="_blank" >you@example.com</a></td>
</tr>

<tr>
<td class="tdl">Phone:</td>
<td class="tdl">+00 000 000 000</td>
</tr>

<tr>
<td class="tdl">Web:</td>
<td class="tdl"><a href="https://example.com" target="_blank" >example.com</a></td>
</tr>

<tr>
<td class="tdl">Addr:</td>
<td class="tdl">Street 1, City, Country</td>
</tr>

</table>

</div>

</td>
<td class="tdp">
<div class="minipage" style="vertical-align:bottom ; justify-content:flex-start ; ">

<a id="project-2-autopage-5"></a>

<p>

<a href="../figures/placeholder1.jpg" target="_blank" ><img
    src="../figures/placeholder1.jpg"
    style="
    width:85pt;
    height:53pt;
    "
    class="inlineimage"
    alt="(image)"
></a>
</p>
<p>
Your photo
</p>


</div>

</td>
</tr>
</table>
<!--
...... section Profile ......
-->
<h4 id="autosec-6">Profile</h4>
<a id="project-2-autopage-6"></a>


<p>
Short 2–3 sentence summary about you.
</p>
<!--
...... section Experience ......
-->
<h4 id="autosec-7">Experience</h4>
<a id="project-2-autopage-7"></a>


<p>
<b>Job Title</b> &#x2003;&#x2003;2023–Present<br />
Company Name, City<br />

</p>
<ul class="itemize" style="list-style-type:none">

<li>
<p>
<span class="listmarker">•</span> Bullet point describing what you did.
</p>

</li>
<li>

<p>
<span class="listmarker">•</span> Another bullet point.
</p>
</li>
</ul>
<!--
...... section Education ......
-->
<h4 id="autosec-8">Education</h4>
<a id="project-2-autopage-8"></a>


<p>
<b>Degree</b>, University Name &#x2003;&#x2003;2019–2023
</p>

<a id="project-2-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,YA=Object.freeze(Object.defineProperty({__proto__:null,default:VA},Symbol.toStringTag,{value:"Module"})),XA=`<!DOCTYPE html>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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
December 5, 2025
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

                                                                                                                 (
                                                                                                                     x2 ,   x ≥ 0,
                                                                                                       f (x) =                                                                                                        (5)
                                                                                                                     −x,    x < 0.

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

                                                                                                                  
                                                                                                    1       2    3
                                                                                               A = 0       1    4 ,       det(A) = 1.                                                                               (6)
                                                                                                    0       0    1

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

                                                                                                                                     2
                                                                                                                                      
                                                                                                 1      1        2    1       0
                                                                                                                   ∼                 3
                                                                                                                                     4       .                                                                        (7)
                                                                                                 2     −1        0    0       1      3

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
\\begin{aligned} f(x) &amp;= x^3 - 3x + 1, \\\\ f&apos;(x) &amp;= 3x^2 - 3, \\\\ f&apos;&apos;(x) &amp;= 6x.                   \\end {aligned}
\\end{equation}

</p>

<p>
And a classical limit:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{8}\\)</span>

<!--

                                                                                                                          n
                                                                                                                         1
                                                                                                                  lim 1+      = e.                                                                                                                   (9)
                                                                                                                 n→∞     n

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
`,FA=Object.freeze(Object.defineProperty({__proto__:null,default:XA},Symbol.toStringTag,{value:"Module"})),KA=()=>zl(()=>import("./_-CavywPyc.js"),__vite__mapDeps([5,1])),QA=ar("/publications/$")({component:Tl(KA,"component"),loader:async({context:{getBodyContent:t,siteMap:i},params:{_splat:l}})=>({body:t(Object.assign({"/src/site/content/publications/index.html":Xy,"/src/site/content/publications/project-1.html":$A,"/src/site/content/publications/project-2.html":YA,"/src/site/content/publications/pub-1.html":FA})[`/src/site/content/publications/${l}`].default),title:i[`/publications/${l}`].title}),head:({loaderData:t})=>({meta:[{title:t?.title}]})}),WA=`<!DOCTYPE html>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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
December 5, 2025
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

                                                                                                                 (
                                                                                                                     x2 ,   x ≥ 0,
                                                                                                       f (x) =                                                                                                        (5)
                                                                                                                     −x,    x < 0.

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

                                                                                                                  
                                                                                                    1       2    3
                                                                                               A = 0       1    4 ,       det(A) = 1.                                                                               (6)
                                                                                                    0       0    1

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

                                                                                                                                     2
                                                                                                                                      
                                                                                                 1      1        2    1       0
                                                                                                                   ∼                 3
                                                                                                                                     4       .                                                                        (7)
                                                                                                 2     −1        0    0       1      3

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
\\begin{aligned} f(x) &amp;= x^3 - 3x + 1, \\\\ f&apos;(x) &amp;= 3x^2 - 3, \\\\ f&apos;&apos;(x) &amp;= 6x.                   \\end {aligned}
\\end{equation}

</p>

<p>
And a classical limit:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{8}\\)</span>

<!--

                                                                                                                          n
                                                                                                                         1
                                                                                                                  lim 1+      = e.                                                                                                                   (9)
                                                                                                                 n→∞     n

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
`,ZA=Object.freeze(Object.defineProperty({__proto__:null,default:WA},Symbol.toStringTag,{value:"Module"})),IA=`<!DOCTYPE html>
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
              //       These would be replaced by import commands if you wanted to make
              //       a proper extension.
              const Configuration = MathJax._.input.tex.Configuration.Configuration;
              const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
              const Macro = MathJax._.input.tex.Symbol.Macro;
              const TexError = MathJax._.input.tex.TexError.default;
              const ParseUtil = MathJax._.input.tex.ParseUtil.default;
              const expandable = MathJax._.util.Options.expandable;


              //       Insert the replacement string into the TeX string, and check
              //       that there haven't been too many maxro substitutions (prevents
              //       infinite loops).
              const useArgument = (parser, text) => {
                   parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
                   parser.i = 0;
                   if (++parser.macroCount > parser.configuration.options.maxMacros) {
                        throw new TexError('MaxMacroSub1',
                        'MathJax maximum macro substitution count exceeded; ' +
                        'is there a recursive macro call?');
                   }
              }


              //       Create the command map for:
              //            \\ifstar, \\ifnextchar, \\ifblank, \\ifstrequal, \\gsub, \\seteqnumber
              new CommandMap('Lwarp-macros', {
                   ifstar: 'IfstarFunction',
                   ifnextchar: 'IfnextcharFunction',
                   ifblank: 'IfblankFunction',
                   ifstrequal: 'IfstrequalFunction',
                   gsubstitute: 'GsubstituteFunction',
                   seteqnumber: 'SeteqnumberFunction'
              }, {
                   //       This function implements an ifstar macro.
                   IfstarFunction(parser, name) {
                        const resultstar = parser.GetArgument(name);
                        const resultnostar = parser.GetArgument(name);
                        const star = parser.GetStar();                        // true if there is a *
                        useArgument(parser, star ? resultstar : resultnostar);
                   },


                   //       This function implements an ifnextchar macro.
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


                   //       This function modifies the equation numbers.
                   SeteqnumberFunction(parser, name) {
                            //   Get the macro parameters
                            const star = parser.GetStar();                      // true if there is a *
                            const optBrackets = parser.GetBrackets(name);        // contents of optional brackets
                            const newsubequations = parser.GetArgument(name);      // the subequations argument
                            const neweqsection = parser.GetArgument(name);      // the eq section argument
                            const neweqnumber = parser.GetArgument(name);        // the eq number argument
                            MathJax.config.subequations=newsubequations ;       // a string with boolean meaning
                            MathJax.config.section=neweqsection ;               // a string with numeric meaning
                            parser.tags.counter = parser.tags.allCounter = neweqnumber ;
                   }


              });


              //       Create the Lwarp-macros package
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
          }       // ready
     },            // startup


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

<a id="test-autofile-0"></a>

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

\\(\\newcommand {\\TextOrMath }[2]{#2}\\)

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

<a id="test-autopage-1"></a>
<div class="titlepage">

<h1>Equation Playground and Log Page</h1>


<div class="author">


<div class="oneauthor">

</div>

</div>


<div class="titledate">

<p>
December 5, 2025
</p>
</div>

</div>
<!--
...... section Contents ......
-->
<h4 id="autosec-3">Contents</h4>
<a id="test-autopage-3"></a>



<nav class="toc">

<p>
<a href="test.html#autosec-5" class="tocsection" >
<span class="sectionnumber">1</span>&#x2003;Basic Algebra</a><p>

</p>


<p>
<a href="test.html#autosec-6" class="tocsection" >
<span class="sectionnumber">2</span>&#x2003;Calculus</a><p>

</p>


<p>
<a href="test.html#autosec-7" class="tocsection" >
<span class="sectionnumber">3</span>&#x2003;Linear Algebra</a><p>

</p>


<p>
<a href="test.html#autosec-8" class="tocsection" >
<span class="sectionnumber">4</span>&#x2003;Probability and Statistics</a><p>

</p>


<p>
<a href="test.html#autosec-9" class="tocsection" >
<span class="sectionnumber">5</span>&#x2003;Logarithms (Log Page)</a><p>

</p>


<p>
<a href="test.html#autosec-10" class="tocsubsection" >
<span class="sectionnumber">5.1</span>&#x2003;Logarithm Identities</a><p>

</p>


<p>
<a href="test.html#autosec-11" class="tocsubsection" >
<span class="sectionnumber">5.2</span>&#x2003;Logarithmic Equations</a><p>

</p>


<p>
<a href="test.html#autosec-12" class="tocsubsection" >
<span class="sectionnumber">5.3</span>&#x2003;Logarithmic Series</a><p>

</p>


<p>
<a href="test.html#autosec-13" class="tocsubsection" >
<span class="sectionnumber">5.4</span>&#x2003;A Long Log Page Filler</a><p>

</p>
</nav>
<div class="abstract">


<div class="abstracttitle">Abstract</div>

<p>
HELLOW dasldas sd a
</p>

<p>
asdasdsa
</p>
</div>
<!--
...... section Basic Algebra ......
-->
<h4 id="autosec-5"><span class="sectionnumber">1&#x2003;</span>Basic Algebra</h4>
<a id="test-autopage-5"></a>


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
(a + b)^2 &amp;= a^2 + 2ab + b^2, \\\\ (a - b)^2 &amp;= a^2 - 2ab + b^2, \\\\ a^2 - b^2 &amp;= (a - b)(a + b).
\\end{align}

</p>
<!--
...... section Calculus ......
-->
<h4 id="autosec-6"><span class="sectionnumber">2&#x2003;</span>Calculus</h4>
<a id="test-autopage-6"></a>


<p>
Definition of the derivative:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{7}\\)</span>

<!--

                                                                                                           f (x + h) − f (x)
                                                                                     f ′ (x) = lim                           .                                                        (8)
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
                                                                                               f ′ (x) dx = f (b) − f (a).                                                            (9)
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
                                                                                                     x = nxn−1 ,                                                                     (10)
                                                                                                  dx
                                                                                                   d x
                                                                                                     e = ex ,                                                                        (11)
                                                                                                  dx
                                                                                                d
                                                                                                  sin x = cos x,                                                                     (12)
                                                                                               dx
                                                                                                d
                                                                                                  cos x = − sin x.                                                                   (13)
                                                                                               dx


-->


<p>

\\begin{align}
\\frac {d}{dx} x^n &amp;= n x^{n-1}, \\\\ \\frac {d}{dx} e^x &amp;= e^x, \\\\ \\frac {d}{dx} \\sin x &amp;= \\cos x, \\\\ \\frac {d}{dx} \\cos x &amp;= -\\sin x.
\\end{align}

</p>

<p>
Some common integrals:
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{13}\\)</span>


<!--


                                                                                                         xn+1
                                                                                     Z
                                                                                         xn dx =              + C,        n ̸= −1,                                                   (14)
                                                                                                         n+1
                                                                                     Z
                                                                                          1
                                                                                            dx = ln |x| + C,                                                                         (15)
                                                                                          x
                                                                                     Z
                                                                                         ex dx = ex + C,                                                                             (16)
                                                                                 Z
                                                                                     sin x dx = − cos x + C.                                                                         (17)



-->


<p>

\\begin{align}
\\int x^n\\,dx &amp;= \\frac {x^{n+1}}{n+1} + C, \\quad n \\neq -1, \\\\ \\int \\frac {1}{x}\\,dx &amp;= \\ln |x| + C, \\\\ \\int e^x\\,dx &amp;= e^x + C, \\\\ \\int \\sin x\\,dx &amp;= -\\cos x + C.
\\end{align}

</p>

<p>
A multivariable integral:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{17}\\)</span>

<!--

                                                                                                ZZ
                                                                                                         (x2 + y 2 ) dA                                                              (18)
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
<h4 id="autosec-7"><span class="sectionnumber">3&#x2003;</span>Linear Algebra</h4>
<a id="test-autopage-7"></a>


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


                                                                                                  Av = λv.                                                                                   (22)

-->

<p>

\\begin{equation}
A \\mathbf {v} = \\lambda \\mathbf {v}.
\\end{equation}

</p>
<!--
...... section Probability and Statistics ......
-->
<h4 id="autosec-8"><span class="sectionnumber">4&#x2003;</span>Probability and Statistics</h4>
<a id="test-autopage-8"></a>


<p>
Probability of event \\(A\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{22}\\)</span>

<!--

                                                                                              number of favorable outcomes
                                                                                    P (A) =                                .   (23)
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
                                                                                              E         Xi =         E[Xi ].   (24)
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
                                                                                         Var(X) = E[X 2 ] − E[X] .             (25)

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
                                                                                                                    
                                                                                                    1
                                                                                      f (x) = √       exp −            .       (26)
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
                                                                                         P (A | B) =                     .     (27)
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
<h4 id="autosec-9"><span class="sectionnumber">5&#x2003;</span>Logarithms (Log Page)</h4>
<a id="test-autopage-9"></a>


<p>
Basic definition:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{27}\\)</span>

<!--


                                                                                       loga b = c   ⇐⇒       ac = b,   (28)

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
<h5 id="autosec-10"><span class="sectionnumber">5.1&#x2003;</span>Logarithm Identities</h5>
<a id="test-autopage-10"></a>


<p>
For \\(a &gt; 0\\), \\(a \\neq 1\\), and \\(x,y &gt; 0\\):
</p>
<span class="hidden"> \\(\\seteqnumber{0}{}{29}\\)</span>


<!--



                                                                                          loga (xy) = loga x + loga y,                                                                       (30)
                                                                                              
                                                                                                x
                                                                                        loga        = loga x − loga y,                                                                       (31)
                                                                                                y
                                                                                         loga (xk ) = k loga x,                                                                              (32)
                                                                                              loga a = 1,                                                                                    (33)
                                                                                              loga 1 = 0.                                                                                    (34)



-->


<p>

\\begin{align}
\\log _a (xy) &amp;= \\log _a x + \\log _a y, \\\\ \\log _a \\left (\\frac {x}{y}\\right ) &amp;= \\log _a x - \\log _a y, \\\\ \\log _a (x^k) &amp;= k \\log _a x, \\\\ \\log _a a &amp;= 1, \\\\ \\log _a 1 &amp;=
0.
\\end{align}

</p>

<p>
Natural logarithm:
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{34}\\)</span>

<!--


                                                                                                 ln x = loge x.                                                                              (35)

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
                                                                                                    ln x = .                                                                                 (36)
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
                                                                                                 loga x =        .                                                                           (37)
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
                                                                                            ln x dx = x ln x − x + C.                                                                        (38)

-->

<p>

\\begin{equation}
\\int \\ln x\\,dx = x \\ln x - x + C.
\\end{equation}

</p>
<!--
...... subsection Logarithmic Equations ......
-->
<h5 id="autosec-11"><span class="sectionnumber">5.2&#x2003;</span>Logarithmic Equations</h5>
<a id="test-autopage-11"></a>


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
<h5 id="autosec-12"><span class="sectionnumber">5.3&#x2003;</span>Logarithmic Series</h5>
<a id="test-autopage-12"></a>


<p>
For \\(|x| &lt; 1\\):
</p>

<span class="hidden"> \\(\\seteqnumber{0}{}{41}\\)</span>

<!--

                                                                                                      ∞
                                                                                                      X               xn
                                                                                        ln(1 + x) =       (−1)n+1        .        (42)
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
<h5 id="autosec-13"><span class="sectionnumber">5.4&#x2003;</span>A Long Log Page Filler</h5>
<a id="test-autopage-13"></a>


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


<a id="test-autofile-last"></a>
</section>

</main>

</div>

</body>
</html>
`,eC=Object.freeze(Object.defineProperty({__proto__:null,default:IA},Symbol.toStringTag,{value:"Module"})),nC=()=>zl(()=>import("./_-C3jox1l_.js"),__vite__mapDeps([6,1])),tC=ar("/ongoing/$")({component:Tl(nC,"component"),loader:async({context:{getBodyContent:t,siteMap:i},params:{_splat:l}})=>({body:t(Object.assign({"/src/site/content/ongoing/index.html":Fy,"/src/site/content/ongoing/project-1.html":ZA,"/src/site/content/ongoing/test.html":eC})[`/src/site/content/ongoing/${l}`].default),title:i[`/ongoing/${l}`]}),head:({loaderData:t})=>({meta:[{title:t?.title.title}]})}),aC=BA.update({id:"/",path:"/",getParentRoute:()=>di}),rC=UA.update({id:"/publications/",path:"/publications/",getParentRoute:()=>di}),iC=PA.update({id:"/ongoing/",path:"/ongoing/",getParentRoute:()=>di}),lC=QA.update({id:"/publications/$",path:"/publications/$",getParentRoute:()=>di}),sC=tC.update({id:"/ongoing/$",path:"/ongoing/$",getParentRoute:()=>di}),oC={IndexRoute:aC,OngoingSplatRoute:sC,PublicationsSplatRoute:lC,OngoingIndexRoute:iC,PublicationsIndexRoute:rC},uC=di._addFileChildren(oC)._addFileTypes(),cC=W1({routeTree:uC,context:{},defaultPreload:"intent",scrollRestoration:!0,defaultStructuralSharing:!0,defaultPreloadStaleTime:0,history:Sx()}),Dd=document.getElementById("app");Dd&&!Dd.innerHTML&&dS.createRoot(Dd).render(Q.jsx(F.StrictMode,{children:Q.jsx(eS,{router:cC})}));export{yw as C,Qd as D,bl as L,lA as P,BA as R,AA as S,Ft as T,Ud as _,UA as a,Po as b,sr as c,Qt as d,ci as e,Ly as f,or as g,si as h,uA as i,Q as j,fC as k,PA as l,Dl as m,h2 as n,lr as o,vf as p,Cy as q,F as r,ur as s,mC as t,cr as u,Cf as v,QA as w,tC as x};
