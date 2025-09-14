import"../chunks/DsnmJJEf.js";import{i as rt}from"../chunks/D61pC562.js";import{aj as Pe,S as $e,J as de,aD as Le,Q as oe,K as T,al as ze,L as le,q as k,a6 as He,N as it,O as st,P as Ae,R as B,Z as F,am as nt,aq as ot,T as X,W as lt,aE as ce,aF as fe,U as dt,aG as Ne,az as ct,$ as Me,au as Oe,i as Re,X as we,Y as De,aH as ft,aI as he,aJ as Q,aK as ut,ao as vt,aL as ht,at as pt,aM as gt,_ as Ve,aN as mt,M as _t,aO as bt,aw as $t,ax as We,aP as wt,aQ as yt,aR as At,aS as Nt,aT as Mt,aU as kt,aV as xt,aW as St,aX as Tt,C as Ge,aY as Et,B as S,F as Je,G as v,e as ke,v as ie,I as x,H as f,y as P,z as I,aB as je,aZ as Ct,D,a_ as W,E as U,a4 as ye,aA as Fe,A as It,a3 as Pt}from"../chunks/BqX8LkUv.js";import{i as Lt,a as zt,c as Ht,d as ue,n as Ot,b as Rt,s as Y}from"../chunks/KYK60-FK.js";import{l as C,p as Z,s as z,i as Ke,c as Dt}from"../chunks/BQP5E4lN.js";function Vt(e,t){if(t){const a=document.body;e.autofocus=!0,Pe(()=>{document.activeElement===a&&e.focus()})}}function qe(e,t){return t}function Wt(e,t,a){for(var r=e.items,s=[],n=t.length,i=0;i<n;i++)ht(t[i].e,s,!0);var o=n>0&&s.length===0&&a!==null;if(o){var m=a.parentNode;pt(m),m.append(a),r.clear(),G(e,t[0].prev,t[n-1].next)}gt(s,()=>{for(var c=0;c<n;c++){var w=t[c];o||(r.delete(w.k),G(e,w.prev,w.next)),Q(w.e,!o)}})}function ee(e,t,a,r,s,n=null){var i=e,o={flags:t,items:new Map,first:null},m=(t&Le)!==0;if(m){var c=e;i=T?oe(ze(c)):c.appendChild($e())}T&&le();var w=null,g=!1,h=new Map,N=He(()=>{var _=a();return Re(_)?_:_==null?[]:Oe(_)}),l,d;function y(){Gt(d,l,o,h,i,s,t,r,a),n!==null&&(l.length===0?w?we(w):w=X(()=>n(i)):w!==null&&De(w,()=>{w=null}))}de(()=>{d??=Ve,l=k(N);var _=l.length;if(g&&_===0)return;g=_===0;let M=!1;if(T){var b=it(i)===st;b!==(_===0)&&(i=Ae(),oe(i),B(!1),M=!0)}if(T){for(var $=null,A,u=0;u<_;u++){if(F.nodeType===nt&&F.data===ot){i=F,M=!0,B(!1);break}var p=l[u],E=r(p,u);A=_e(F,o,$,null,p,E,u,s,t,a),o.items.set(E,A),$=A}_>0&&oe(Ae())}if(T)_===0&&n&&(w=X(()=>n(i)));else if(lt()){var J=new Set,K=dt;for(u=0;u<_;u+=1){p=l[u],E=r(p,u);var O=o.items.get(E)??h.get(E);O?(t&(ce|fe))!==0&&Ye(O,p,u,t):(A=_e(null,o,null,null,p,E,u,s,t,a,!0),h.set(E,A)),J.add(E)}for(const[R,j]of o.items)J.has(R)||K.skipped_effects.add(j.e);K.add_callback(y)}else y();M&&B(!0),k(N)}),T&&(i=F)}function Gt(e,t,a,r,s,n,i,o,m){var c=(i&ut)!==0,w=(i&(ce|fe))!==0,g=t.length,h=a.items,N=a.first,l=N,d,y=null,_,M=[],b=[],$,A,u,p;if(c)for(p=0;p<g;p+=1)$=t[p],A=o($,p),u=h.get(A),u!==void 0&&(u.a?.measure(),(_??=new Set).add(u));for(p=0;p<g;p+=1){if($=t[p],A=o($,p),u=h.get(A),u===void 0){var E=r.get(A);if(E!==void 0){r.delete(A),h.set(A,E);var J=y?y.next:l;G(a,y,E),G(a,E,J),pe(E,J,s),y=E}else{var K=l?l.e.nodes_start:s;y=_e(K,a,y,y===null?a.first:y.next,$,A,p,n,i,m)}h.set(A,y),M=[],b=[],l=y.next;continue}if(w&&Ye(u,$,p,i),(u.e.f&he)!==0&&(we(u.e),c&&(u.a?.unfix(),(_??=new Set).delete(u))),u!==l){if(d!==void 0&&d.has(u)){if(M.length<b.length){var O=b[0],R;y=O.prev;var j=M[0],te=M[M.length-1];for(R=0;R<M.length;R+=1)pe(M[R],O,s);for(R=0;R<b.length;R+=1)d.delete(b[R]);G(a,j.prev,te.next),G(a,y,j),G(a,te,O),l=O,y=te,p-=1,M=[],b=[]}else d.delete(u),pe(u,l,s),G(a,u.prev,u.next),G(a,u,y===null?a.first:y.next),G(a,y,u),y=u;continue}for(M=[],b=[];l!==null&&l.k!==A;)(l.e.f&he)===0&&(d??=new Set).add(l),b.push(l),l=l.next;if(l===null)continue;u=l}M.push(u),y=u,l=u.next}if(l!==null||d!==void 0){for(var q=d===void 0?[]:Oe(d);l!==null;)(l.e.f&he)===0&&q.push(l),l=l.next;var ae=q.length;if(ae>0){var re=(i&Le)!==0&&g===0?s:null;if(c){for(p=0;p<ae;p+=1)q[p].a?.measure();for(p=0;p<ae;p+=1)q[p].a?.fix()}Wt(a,q,re)}}c&&Pe(()=>{if(_!==void 0)for(u of _)u.a?.apply()}),e.first=a.first&&a.first.e,e.last=y&&y.e;for(var ve of r.values())Q(ve.e);r.clear()}function Ye(e,t,a,r){(r&ce)!==0&&Ne(e.v,t),(r&fe)!==0?Ne(e.i,a):e.i=a}function _e(e,t,a,r,s,n,i,o,m,c,w){var g=(m&ce)!==0,h=(m&ft)===0,N=g?h?ct(s,!1,!1):Me(s):s,l=(m&fe)===0?i:Me(i),d={i:l,v:N,k:n,a:null,e:null,prev:a,next:r};try{if(e===null){var y=document.createDocumentFragment();y.append(e=$e())}return d.e=X(()=>o(e,N,l,c),T),d.e.prev=a&&a.e,d.e.next=r&&r.e,a===null?w||(t.first=d):(a.next=d,a.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function pe(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,s=t?t.e.nodes_start:a,n=e.e.nodes_start;n!==null&&n!==r;){var i=vt(n);s.before(n),n=i}}function G(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function L(e,t,a,r,s){T&&le();var n=t.$$slots?.[a],i=!1;n===!0&&(n=t.children,i=!0),n===void 0||n(e,i?()=>r:r)}function Jt(e,t,a,r,s,n){let i=T;T&&le();var o,m,c=null;T&&F.nodeType===mt&&(c=F,le());var w=T?F:e,g;de(()=>{const h=t()||null;var N=bt;h!==o&&(g&&(h===null?De(g,()=>{g=null,m=null}):h===m?we(g):Q(g)),h&&h!==m&&(g=X(()=>{if(c=T?c:document.createElementNS(N,h),$t(c,c),r){T&&Lt(h)&&c.append(document.createComment(""));var l=T?ze(c):c.appendChild($e());T&&(l===null?B(!1):oe(l)),r(c,l)}Ve.nodes_end=c,w.before(c)})),o=h,o&&(m=o))},_t),i&&(B(!0),oe(w))}function jt(e,t){var a=void 0,r;de(()=>{a!==(a=t())&&(r&&(Q(r),r=null),a&&(r=X(()=>{We(()=>a(e))})))})}function Be(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(a=Be(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Ft(){for(var e,t,a=0,r="",s=arguments.length;a<s;a++)(e=arguments[a])&&(t=Be(e))&&(r&&(r+=" "),r+=t);return r}function Kt(e){return typeof e=="object"?Ft(e):e??""}const xe=[...` 	
\r\f \v\uFEFF`];function qt(e,t,a){var r=e==null?"":""+e;if(a){for(var s in a)if(a[s])r=r?r+" "+s:s;else if(r.length)for(var n=s.length,i=0;(i=r.indexOf(s,i))>=0;){var o=i+n;(i===0||xe.includes(r[i-1]))&&(o===r.length||xe.includes(r[o]))?r=(i===0?"":r.substring(0,i))+r.substring(o+1):i=o}}return r===""?null:r}function Se(e,t=!1){var a=t?" !important;":";",r="";for(var s in e){var n=e[s];n!=null&&n!==""&&(r+=" "+s+": "+n+a)}return r}function ge(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Yt(e,t){if(t){var a="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,i=0,o=!1,m=[];r&&m.push(...Object.keys(r).map(ge)),s&&m.push(...Object.keys(s).map(ge));var c=0,w=-1;const d=e.length;for(var g=0;g<d;g++){var h=e[g];if(o?h==="/"&&e[g-1]==="*"&&(o=!1):n?n===h&&(n=!1):h==="/"&&e[g+1]==="*"?o=!0:h==='"'||h==="'"?n=h:h==="("?i++:h===")"&&i--,!o&&n===!1&&i===0){if(h===":"&&w===-1)w=g;else if(h===";"||g===d-1){if(w!==-1){var N=ge(e.substring(c,w).trim());if(!m.includes(N)){h!==";"&&g++;var l=e.substring(c,g).trim();a+=" "+l+";"}}c=g+1,w=-1}}}}return r&&(a+=Se(r)),s&&(a+=Se(s,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function Ue(e,t,a,r,s,n){var i=e.__className;if(T||i!==a||i===void 0){var o=qt(a,r,n);(!T||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o)),e.__className=a}else if(n&&s!==n)for(var m in n){var c=!!n[m];(s==null||c!==!!s[m])&&e.classList.toggle(m,c)}return n}function me(e,t={},a,r){for(var s in a){var n=a[s];t[s]!==n&&(a[s]==null?e.style.removeProperty(s):e.style.setProperty(s,n,r))}}function Bt(e,t,a,r){var s=e.__style;if(T||s!==t){var n=Yt(t,r);(!T||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=t}else r&&(Array.isArray(r)?(me(e,a?.[0],r[0]),me(e,a?.[1],r[1],"important")):me(e,a,r));return r}function be(e,t,a=!1){if(e.multiple){if(t==null)return;if(!Re(t))return wt();for(var r of e.options)r.selected=t.includes(Te(r));return}for(r of e.options){var s=Te(r);if(yt(s,t)){r.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function Ut(e){var t=new MutationObserver(()=>{be(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),At(()=>{t.disconnect()})}function Te(e){return"__value"in e?e.__value:e.value}const se=Symbol("class"),ne=Symbol("style"),Ze=Symbol("is custom element"),Xe=Symbol("is html");function Zt(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function V(e,t,a,r){var s=Qe(e);T&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=a)&&(t==="loading"&&(e[St]=a),a==null?e.removeAttribute(t):typeof a!="string"&&et(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function Xt(e,t,a,r,s=!1){var n=Qe(e),i=n[Ze],o=!n[Xe];let m=T&&i;m&&B(!1);var c=t||{},w=e.tagName==="OPTION";for(var g in t)g in a||(a[g]=null);a.class?a.class=Kt(a.class):a[se]&&(a.class=null),a[ne]&&(a.style??=null);var h=et(e);for(const b in a){let $=a[b];if(w&&b==="value"&&$==null){e.value=e.__value="",c[b]=$;continue}if(b==="class"){var N=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ue(e,N,$,r,t?.[se],a[se]),c[b]=$,c[se]=a[se];continue}if(b==="style"){Bt(e,$,t?.[ne],a[ne]),c[b]=$,c[ne]=a[ne];continue}var l=c[b];if(!($===l&&!($===void 0&&e.hasAttribute(b)))){c[b]=$;var d=b[0]+b[1];if(d!=="$$")if(d==="on"){const A={},u="$$"+b;let p=b.slice(2);var y=Rt(p);if(zt(p)&&(p=p.slice(0,-7),A.capture=!0),!y&&l){if($!=null)continue;e.removeEventListener(p,c[u],A),c[u]=null}if($!=null)if(y)e[`__${p}`]=$,ue([p]);else{let E=function(J){c[b].call(this,J)};c[u]=Ht(p,e,E,A)}else y&&(e[`__${p}`]=void 0)}else if(b==="style")V(e,b,$);else if(b==="autofocus")Vt(e,!!$);else if(!i&&(b==="__value"||b==="value"&&$!=null))e.value=e.__value=$;else if(b==="selected"&&w)Zt(e,$);else{var _=b;o||(_=Ot(_));var M=_==="defaultValue"||_==="defaultChecked";if($==null&&!i&&!M)if(n[b]=null,_==="value"||_==="checked"){let A=e;const u=t===void 0;if(_==="value"){let p=A.defaultValue;A.removeAttribute(_),A.defaultValue=p,A.value=A.__value=u?p:null}else{let p=A.defaultChecked;A.removeAttribute(_),A.defaultChecked=p,A.checked=u?p:!1}}else e.removeAttribute(b);else M||h.includes(_)&&(i||typeof $!="string")?e[_]=$:typeof $!="function"&&V(e,_,$)}}}return m&&B(!0),c}function Ee(e,t,a=[],r=[],s,n=!1){Nt(a,r,i=>{var o=void 0,m={},c=e.nodeName==="SELECT",w=!1;if(de(()=>{var h=t(...i.map(k)),N=Xt(e,o,h,s,n);w&&c&&"value"in h&&be(e,h.value);for(let d of Object.getOwnPropertySymbols(m))h[d]||Q(m[d]);for(let d of Object.getOwnPropertySymbols(h)){var l=h[d];d.description===Mt&&(!o||l!==o[d])&&(m[d]&&Q(m[d]),m[d]=X(()=>jt(e,()=>l))),N[d]=l}o=N}),c){var g=e;We(()=>{be(g,o.value,!0),Ut(g)})}w=!0})}function Qe(e){return e.__attributes??={[Ze]:e.nodeName.includes("-"),[Xe]:e.namespaceURI===kt}}var Ce=new Map;function et(e){var t=Ce.get(e.nodeName);if(t)return t;Ce.set(e.nodeName,t=[]);for(var a,r=e,s=Element.prototype;s!==r;){a=Tt(r);for(var n in a)a[n].set&&t.push(n);r=xt(r)}return t}/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const Qt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ea=Et("<svg><!><!></svg>");function H(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]),r=C(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ge(t,!1);let s=Z(t,"name",8,void 0),n=Z(t,"color",8,"currentColor"),i=Z(t,"size",8,24),o=Z(t,"strokeWidth",8,2),m=Z(t,"absoluteStrokeWidth",8,!1),c=Z(t,"iconNode",24,()=>[]);const w=(...l)=>l.filter((d,y,_)=>!!d&&_.indexOf(d)===y).join(" ");rt();var g=ea();Ee(g,(l,d)=>({...Qt,...r,width:i(),height:i(),stroke:n(),"stroke-width":l,class:d}),[()=>(ie(m()),ie(o()),ie(i()),ke(()=>m()?Number(o())*24/Number(i()):o())),()=>(ie(s()),ie(a),ke(()=>w("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var h=v(g);ee(h,1,c,qe,(l,d)=>{var y=je(()=>Ct(k(d),2));let _=()=>k(y)[0],M=()=>k(y)[1];var b=P(),$=I(b);Jt($,_,!0,(A,u)=>{Ee(A,()=>({...M()}))}),S(l,b)});var N=x(h);L(N,t,"default",{}),f(g),S(e,g),Je()}function ta(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];H(e,z({name:"file"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function aa(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];H(e,z({name:"computer"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function ra(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M10 15h4"}],["path",{d:"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"}],["path",{d:"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"}],["path",{d:"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}]];H(e,z({name:"tool-case"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function ia(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];H(e,z({name:"code"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}var sa=D('<p class="rounded-sm p-1 text-lg font-light text-center even:bg-[#d3d3d3] odd:bg-[#c5c5c5]"> </p>'),na=D('<section class="p-[.75rem]" id="about"><div class="md:grid grid-cols-2"><div class="p-1"><h2 class="text-2xl p-1"><p>Hello, <br/> I am Temiloluwa</p> <p class="text-5xl font-bold">Web Developer</p></h2> <div class="p-1 my-2"><div class="p-1 my-4"><a class="button-link bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900" href="/AKINTADE TEMILOLUWA AYOMIDE CV.pdf"><!> My Resume</a> <button class="text-blue-900 hover:bg-blue-900 hover:text-[#fff]">Got a Project?</button></div> <div class="p-2 grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 gap-1 md:p-[1rem] rounded-sm bg-[#e7e7e7]"></div> <ul class="pt-4 svelte-1ygtkfp"><li class="svelte-1ygtkfp"><p class="svelte-1ygtkfp"><!> <span class="svelte-1ygtkfp">Website and Web App Development</span></p> <hr class="border-[#7777]"/></li> <li class="svelte-1ygtkfp"><p class="svelte-1ygtkfp"><!> <span class="svelte-1ygtkfp">Website and Web App Maintenance</span></p> <hr class="border-[#7777]"/></li> <li class="svelte-1ygtkfp"><p class="svelte-1ygtkfp"><!> <span class="svelte-1ygtkfp">API Integration</span></p> <hr class="border-[#7777]"/></li></ul></div></div> <div class="p-2"><div class="grid place-items-center"><img src="/temiloluwa.jpg" alt="My_Picture" width="400" loading="lazy" class="rounded-lg object-cover mt-[-1rem] bg-[#dedede77]"/></div> <div class="px-2"><h3 class="text-3xl font-bold mb-4 pt-4">About me</h3> <div><p>I am a web developer with over four years of experience in building web applications that solve problems.</p> <p>I am focused on transforming ideas into code from scratch with JavaScript or libraries and frameworks like ReactJS and Svelte among other technologies. I have worked on projects that featured API and AI integration.</p></div></div></div></div></section>');function oa(e){const t=[{id:0,name:"JavaScript"},{id:1,name:"TailwindCSS"},{id:2,name:"Svelte"},{id:3,name:"ReactJS"},{id:4,name:"TypeScript"},{id:5,name:"NextJS"},{id:6,name:"Git"},{id:7,name:"Firebase"}];var a=na(),r=v(a),s=v(r),n=x(v(s),2),i=v(n),o=v(i),m=v(o);ta(m,{class:"inline-block"}),W(),f(o),W(2),f(i);var c=x(i,2);ee(c,5,()=>t,$=>$.id,($,A)=>{var u=sa(),p=v(u,!0);f(u),U(()=>Y(p,k(A).name)),S($,u)}),f(c);var w=x(c,2),g=v(w),h=v(g),N=v(h);aa(N,{}),W(2),f(h),W(2),f(g);var l=x(g,2),d=v(l),y=v(d);ra(y,{}),W(2),f(d),W(2),f(l);var _=x(l,2),M=v(_),b=v(M);ia(b,{}),W(2),f(M),W(2),f(_),f(w),f(n),f(s),W(2),f(r),f(a),S(e,a)}function la(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];H(e,z({name:"mail"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function tt(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];H(e,z({name:"x"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function da(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];H(e,z({name:"linkedin"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function at(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];H(e,z({name:"github"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function Ie(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];H(e,z({name:"arrow-up-right"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function ca(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];H(e,z({name:"cog"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function fa(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];H(e,z({name:"heart"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function ua(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];H(e,z({name:"house"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function va(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];H(e,z({name:"info"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function ha(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M4 12h16"}],["path",{d:"M4 18h16"}],["path",{d:"M4 6h16"}]];H(e,z({name:"menu"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}function pa(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];H(e,z({name:"phone"},()=>a,{get iconNode(){return r},children:(s,n)=>{var i=P(),o=I(i);L(o,t,"default",{}),S(s,i)},$$slots:{default:!0}}))}var ga=D('<p class="p-1"><a class="inline-block p-2 rounded-[50%] bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900"><!></a></p>'),ma=D(`<section class="p-3 bg-[#dedede99]" id="contacts"><div class="p-2"><h2 class="text-2xl font-bold">Contacts</h2> <div class="p-2 flex items-center justify-between"><p class="text-xl font-bold">Got a project? Let's talk!</p> <div class="flex"></div></div></div></section>`);function _a(e){const t=[{id:0,icon:la,link:"",name:"Mail"},{id:1,icon:tt,link:"",name:"X"},{id:2,icon:da,link:"",name:"LinkedIn"},{id:3,icon:at,link:"",name:"GitHub"}];var a=ma(),r=v(a),s=x(v(r),2),n=x(v(s),2);ee(n,5,()=>t,i=>i.id,(i,o)=>{var m=ga();const c=He(()=>k(o).icon);var w=v(m),g=v(w);k(c)(g,{class:"inline"}),f(w),f(m),U(()=>{V(w,"href",k(o).link),V(w,"title",k(o).name)}),S(i,m)}),f(n),f(s),f(r),f(a),S(e,a)}var ba=(e,t)=>ye(t,!k(t)),$a=D('<li class="w-[23%] grid md:place-items-center"><a class="inline-flex text-center w-[fit-content] text-blue-900 p-1 hover:underline decoration-2"><!> </a></li>'),wa=D('<section class="sticky top-0 bg-[#fffd] backdrop-blur-md shadow-sm"><header class="flex items-center justify-between p-[.5rem]"><div><img src="/TEEE.png" alt="Temiloluwa" class="md:w-20 w-15"/></div> <div class="md:static fixed right-2 top-2 flex items-top"><div class="md:hidden"><button class="focus:bg-blue-900 focus:text-[#fff] mr-1"><!></button></div> <nav><ul class="flex md:flex-row flex-col p-[.75rem] md:w-[35rem] md:justify-around justify-end"></ul></nav></div></header></section>');function ya(e){const t=[{id:0,name:"Home",href:"#",icon:ua},{id:1,name:"About",href:"#about",icon:va},{id:2,name:"Projects",href:"#projects",icon:ca},{id:3,name:"Contacts",href:"#contacts",icon:pa}];let a=Fe(!1);var r=wa(),s=v(r),n=x(v(s),2),i=v(n),o=v(i);o.__click=[ba,a];var m=v(o);{var c=N=>{tt(N,{})},w=N=>{ha(N,{})};Ke(m,N=>{k(a)?N(c):N(w,!1)})}f(o),f(i);var g=x(i,2),h=v(g);ee(h,21,()=>t,N=>N.id,(N,l)=>{var d=$a();const y=je(()=>k(l).icon);var _=v(d),M=v(_);Dt(M,()=>k(y),($,A)=>{A($,{})});var b=x(M);f(_),f(d),U(()=>{V(_,"href",k(l).href),Y(b,` ${k(l).name??""}`)}),S(N,d)}),f(h),f(g),f(n),f(s),f(r),U(()=>Ue(g,1,`md:block ${k(a)?"block rounded-sm shadow-md bg-[#fff]":"hidden"}`)),S(e,r)}ue(["click"]);var Aa=(e,t)=>t.onClose(),Na=D('<div class="fixed inset-0 bg-[#d7d7d777] backdrop-blur-[1rem]"><div class="p-4 bg-[#fff] absolute bottom-0 right-5 left-5 rounded-t-lg text-center shadow-md"><div class="absolute top-1 right-2"><button class="text-xl">&times;</button></div> <!></div></div>');function Ma(e,t){Ge(t,!0);var a=Na(),r=v(a),s=v(r),n=v(s);n.__click=[Aa,t],f(s);var i=x(s,2);It(i,()=>t.children),f(r),f(a),S(e,a),Je()}ue(["click"]);var ka=D('<h3 class="text-xl font-bold"> </h3> <div class="py-2"><img width="500" class="rounded-sm m-auto"/></div> <p class="italic text-sm"> </p>',1),xa=(e,t,a,r)=>{ye(t,!k(t)),a.name=k(r).name,a.image=k(r).image,a.description=k(r).description},Sa=D('<span class="m-1 p-1 inline-block rounded-sm bg-[#d3d3d3] text-sm"> </span>'),Ta=D('<li class="m-[1px auto] p-1 w-[100%] flex justify-around items-center"><div class="grid place-items-center w-[45%] h-[100%]"><button><img width="350" loading="lazy" class="cursor-pointer hover:scale-[1.1]"/></button></div> <div class="mt-2 py-1 text-center w-[50%]"><span class="block mb-1"> </span> <p></p> <em class="block text-center text-xs"> </em> <p class="p-2 mt-1 md:flex"><a class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900 svelte-1p0i74y">View GitHub <!></a> <a class="hover:text-blue-900 hover:underline decoration-2 svelte-1p0i74y">View Project <!></a></p></div></li>'),Ea=D('<section class="p-3" id="projects"><!> <div class="p-2"><h2 class="text-center text-3xl font-bold">Projects</h2> <ul class="md:grid grid-cols-2 gap-1 w-[100%]"><!> <li><div class="grid place-items-center h-[100%]"><a href="https://github.com/Temi-Tade" class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900 svelte-1p0i74y">Visit my GitHub <!></a></div></li></ul></div></section>');function Ca(e){let t=Pt({name:"",image:"",description:""}),a=Fe(!1);const r=[{id:0,name:"efIQo",link:"https://efiqo-app.web.app/",github:"https://github.com/Temi-Tade/Efiqo",description:"Study with flashcards and quizzes",tags:["HTML","CSS","JS","AI","Firebase"],image:"/efiqo_screen.png"},{id:1,name:"KeyMaster",link:"https://temi-tade.github.io/KeyMaster/",github:"https://github.com/Temi-Tade/KeyMaster",description:"Start typing like a pro",tags:["HTML","CSS","JS","API"],image:"/keymaster_screen.png"},{id:2,name:"SVG Text Editor",link:"https://temi-tade.github.io/svg-editor/",github:"https://github.com/Temi-Tade/svg-editor",description:"Create custom SVGs right inside your browser",tags:["HTML","CSS","JS"],image:"/svg_editor_screen.png"},{id:3,name:"VerbotAI",link:"https://verbot-ai.web.app/",github:"https://github.com/Temi-Tade/verbot.ai",description:"Can't type in your prompt? Tell AI and let it respond with speech!",tags:["HTML","CSS","JS","AI"],image:"/verbot_screen.png"},{id:4,name:"Keyword Encoder",link:"https://temi-tade.github.io/keyword-encoder/",github:"https://github.com/Temi-Tade/keyword-encoder",description:"A tool for encoding plain text and decoding enciphered text with a keyword.",tags:["HTML","CSS","JS"],image:"/keyword_encoder_screen.png"}];var s=Ea(),n=v(s);{var i=l=>{Ma(l,{onClose:()=>ye(a,!k(a)),children:(d,y)=>{var _=ka(),M=I(_),b=v(M,!0);f(M);var $=x(M,2),A=v($);f($);var u=x($,2),p=v(u,!0);f(u),U(()=>{Y(b,t.name),V(A,"src",t.image),V(A,"alt",t.description),Y(p,t.description)}),S(d,_)},$$slots:{default:!0}})};Ke(n,l=>{k(a)&&l(i)})}var o=x(n,2),m=x(v(o),2),c=v(m);ee(c,17,()=>r,l=>l.id,(l,d)=>{var y=Ta(),_=v(y),M=v(_);M.__click=[xa,a,t,d];var b=v(M);f(M),f(_);var $=x(_,2),A=v($),u=v(A,!0);f(A);var p=x(A,2);ee(p,21,()=>k(d).tags,qe,(q,ae)=>{var re=Sa(),ve=v(re,!0);f(re),U(()=>Y(ve,k(ae))),S(q,re)}),f(p);var E=x(p,2),J=v(E,!0);f(E);var K=x(E,2),O=v(K),R=x(v(O));at(R,{class:"inline"}),f(O);var j=x(O,2),te=x(v(j));Ie(te,{class:"inline"}),f(j),f(K),f($),f(y),U(()=>{V(b,"src",k(d).image),V(b,"alt",k(d).description),Y(u,k(d).name),Y(J,k(d).description),V(O,"href",k(d).github),V(j,"href",k(d).link)}),S(l,y)});var w=x(c,2),g=v(w),h=v(g),N=x(v(h));Ie(N,{class:"inline"}),f(h),f(g),f(w),f(m),f(o),f(s),S(e,s)}ue(["click"]);var Ia=D('<div><!> <!> <!> <!> <footer class="text-center bg-[#dedede99] p-1"><p>Made with <!>. All rights reserved.</p></footer></div>');function Ra(e){var t=Ia(),a=v(t);ya(a);var r=x(a,2);oa(r);var s=x(r,2);Ca(s);var n=x(s,2);_a(n);var i=x(n,2),o=v(i),m=x(v(o));fa(m,{class:"inline stroke-0",fill:"red",size:18}),W(),f(o),f(i),f(t),S(e,t)}export{Ra as component};
