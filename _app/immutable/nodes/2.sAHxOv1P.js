import"../chunks/DsnmJJEf.js";import{i as st}from"../chunks/M6xf5ahw.js";import{N as ze,a3 as we,a7 as ce,aE as He,W as le,a5 as I,Q as Oe,X as de,q as x,ao as Re,a9 as nt,aa as ot,ab as ye,V as X,Y as q,R as lt,Z as dt,a4 as Q,ae as ct,aF as fe,aG as ue,ac as ft,aH as xe,aA as ut,ah as Me,a1 as Ve,i as De,af as Ae,ag as We,aI as vt,aJ as pe,aK as ee,aL as ht,T as pt,aM as mt,a0 as gt,aN as _t,M as Ge,aO as bt,a8 as $t,aP as wt,a6 as At,ay as Je,aQ as Nt,aR as yt,aS as xt,aT as Mt,aU as kt,ad as Tt,aV as St,aW as Et,aX as It,aY as Ct,aZ as Pt,C as Fe,a_ as Lt,B as T,F as je,G as p,e as ke,v as se,I as k,H as v,y as H,z as L,aC as qe,a$ as zt,D as G,E as U,b0 as J,am as Ne,aB as Ke,A as Ht,al as Ot}from"../chunks/ClFD-jiw.js";import{i as Rt,a as Vt,c as Dt,d as ve,n as Wt,b as Gt,s as B}from"../chunks/BtT5eWpJ.js";import{b as K}from"../chunks/D8AQPTfB.js";import{l as P,p as Z,s as R,i as Ue,c as Jt}from"../chunks/qImXfeQU.js";function Ft(e,t){if(t){const a=document.body;e.autofocus=!0,ze(()=>{document.activeElement===a&&e.focus()})}}let Te=!1;function jt(){Te||(Te=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Ye(e,t){return t}function qt(e,t,a){for(var r=e.items,i=[],n=t.length,s=0;s<n;s++)mt(t[s].e,i,!0);var o=n>0&&i.length===0&&a!==null;if(o){var g=a.parentNode;gt(g),g.append(a),r.clear(),F(e,t[0].prev,t[n-1].next)}_t(i,()=>{for(var u=0;u<n;u++){var b=t[u];o||(r.delete(b.k),F(e,b.prev,b.next)),ee(b.e,!o)}})}function te(e,t,a,r,i,n=null){var s=e,o={flags:t,items:new Map,first:null},g=(t&He)!==0;if(g){var u=e;s=I?le(Oe(u)):u.appendChild(we())}I&&de();var b=null,_=!1,h=new Map,M=Re(()=>{var w=a();return De(w)?w:w==null?[]:Ve(w)}),d,f;function m(){Kt(f,d,o,h,s,i,t,r,a),n!==null&&(d.length===0?b?Ae(b):b=Q(()=>n(s)):b!==null&&We(b,()=>{b=null}))}ce(()=>{f??=Ge,d=x(M);var w=d.length;if(_&&w===0)return;_=w===0;let N=!1;if(I){var S=nt(s)===ot;S!==(w===0)&&(s=ye(),le(s),X(!1),N=!0)}if(I){for(var $=null,y,l=0;l<w;l++){if(q.nodeType===lt&&q.data===dt){s=q,N=!0,X(!1);break}var c=d[l],A=r(c,l);y=be(q,o,$,null,c,A,l,i,t,a),o.items.set(A,y),$=y}w>0&&le(ye())}if(I)w===0&&n&&(b=Q(()=>n(s)));else if(ct()){var C=new Set,E=ft;for(l=0;l<w;l+=1){c=d[l],A=r(c,l);var D=o.items.get(A)??h.get(A);D?(t&(fe|ue))!==0&&Be(D,c,l,t):(y=be(null,o,null,null,c,A,l,i,t,a,!0),h.set(A,y)),C.add(A)}for(const[W,j]of o.items)C.has(W)||E.skipped_effects.add(j.e);E.add_callback(m)}else m();N&&X(!0),x(M)}),I&&(s=q)}function Kt(e,t,a,r,i,n,s,o,g){var u=(s&ht)!==0,b=(s&(fe|ue))!==0,_=t.length,h=a.items,M=a.first,d=M,f,m=null,w,N=[],S=[],$,y,l,c;if(u)for(c=0;c<_;c+=1)$=t[c],y=o($,c),l=h.get(y),l!==void 0&&(l.a?.measure(),(w??=new Set).add(l));for(c=0;c<_;c+=1){if($=t[c],y=o($,c),l=h.get(y),l===void 0){var A=r.get(y);if(A!==void 0){r.delete(y),h.set(y,A);var C=m?m.next:d;F(a,m,A),F(a,A,C),me(A,C,i),m=A}else{var E=d?d.e.nodes_start:i;m=be(E,a,m,m===null?a.first:m.next,$,y,c,n,s,g)}h.set(y,m),N=[],S=[],d=m.next;continue}if(b&&Be(l,$,c,s),(l.e.f&pe)!==0&&(Ae(l.e),u&&(l.a?.unfix(),(w??=new Set).delete(l))),l!==d){if(f!==void 0&&f.has(l)){if(N.length<S.length){var D=S[0],W;m=D.prev;var j=N[0],ae=N[N.length-1];for(W=0;W<N.length;W+=1)me(N[W],D,i);for(W=0;W<S.length;W+=1)f.delete(S[W]);F(a,j.prev,ae.next),F(a,m,j),F(a,ae,D),d=D,m=ae,c-=1,N=[],S=[]}else f.delete(l),me(l,d,i),F(a,l.prev,l.next),F(a,l,m===null?a.first:m.next),F(a,m,l),m=l;continue}for(N=[],S=[];d!==null&&d.k!==y;)(d.e.f&pe)===0&&(f??=new Set).add(d),S.push(d),d=d.next;if(d===null)continue;l=d}N.push(l),m=l,d=l.next}if(d!==null||f!==void 0){for(var Y=f===void 0?[]:Ve(f);d!==null;)(d.e.f&pe)===0&&Y.push(d),d=d.next;var re=Y.length;if(re>0){var ie=(s&He)!==0&&_===0?i:null;if(u){for(c=0;c<re;c+=1)Y[c].a?.measure();for(c=0;c<re;c+=1)Y[c].a?.fix()}qt(a,Y,ie)}}u&&ze(()=>{if(w!==void 0)for(l of w)l.a?.apply()}),e.first=a.first&&a.first.e,e.last=m&&m.e;for(var he of r.values())ee(he.e);r.clear()}function Be(e,t,a,r){(r&fe)!==0&&xe(e.v,t),(r&ue)!==0?xe(e.i,a):e.i=a}function be(e,t,a,r,i,n,s,o,g,u,b){var _=(g&fe)!==0,h=(g&vt)===0,M=_?h?ut(i,!1,!1):Me(i):i,d=(g&ue)===0?s:Me(s),f={i:d,v:M,k:n,a:null,e:null,prev:a,next:r};try{if(e===null){var m=document.createDocumentFragment();m.append(e=we())}return f.e=Q(()=>o(e,M,d,u),I),f.e.prev=a&&a.e,f.e.next=r&&r.e,a===null?b||(t.first=f):(a.next=f,a.e.next=f.e),r!==null&&(r.prev=f,r.e.prev=f.e),f}finally{}}function me(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,i=t?t.e.nodes_start:a,n=e.e.nodes_start;n!==null&&n!==r;){var s=pt(n);i.before(n),n=s}}function F(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function O(e,t,a,r,i){I&&de();var n=t.$$slots?.[a],s=!1;n===!0&&(n=t.children,s=!0),n===void 0||n(e,s?()=>r:r)}function Ut(e,t,a,r,i,n){let s=I;I&&de();var o,g,u=null;I&&q.nodeType===bt&&(u=q,de());var b=I?q:e,_;ce(()=>{const h=t()||null;var M=wt;h!==o&&(_&&(h===null?We(_,()=>{_=null,g=null}):h===g?Ae(_):ee(_)),h&&h!==g&&(_=Q(()=>{if(u=I?u:document.createElementNS(M,h),At(u,u),r){I&&Rt(h)&&u.append(document.createComment(""));var d=I?Oe(u):u.appendChild(we());I&&(d===null?X(!1):le(d)),r(u,d)}Ge.nodes_end=u,b.before(u)})),o=h,o&&(g=o))},$t),s&&(X(!0),le(b))}function Yt(e,t){var a=void 0,r;ce(()=>{a!==(a=t())&&(r&&(ee(r),r=null),a&&(r=Q(()=>{Je(()=>a(e))})))})}function Xe(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(a=Xe(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Bt(){for(var e,t,a=0,r="",i=arguments.length;a<i;a++)(e=arguments[a])&&(t=Xe(e))&&(r&&(r+=" "),r+=t);return r}function Xt(e){return typeof e=="object"?Bt(e):e??""}const Se=[...` 	
\r\f \v\uFEFF`];function Zt(e,t,a){var r=e==null?"":""+e;if(a){for(var i in a)if(a[i])r=r?r+" "+i:i;else if(r.length)for(var n=i.length,s=0;(s=r.indexOf(i,s))>=0;){var o=s+n;(s===0||Se.includes(r[s-1]))&&(o===r.length||Se.includes(r[o]))?r=(s===0?"":r.substring(0,s))+r.substring(o+1):s=o}}return r===""?null:r}function Ee(e,t=!1){var a=t?" !important;":";",r="";for(var i in e){var n=e[i];n!=null&&n!==""&&(r+=" "+i+": "+n+a)}return r}function ge(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Qt(e,t){if(t){var a="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,o=!1,g=[];r&&g.push(...Object.keys(r).map(ge)),i&&g.push(...Object.keys(i).map(ge));var u=0,b=-1;const f=e.length;for(var _=0;_<f;_++){var h=e[_];if(o?h==="/"&&e[_-1]==="*"&&(o=!1):n?n===h&&(n=!1):h==="/"&&e[_+1]==="*"?o=!0:h==='"'||h==="'"?n=h:h==="("?s++:h===")"&&s--,!o&&n===!1&&s===0){if(h===":"&&b===-1)b=_;else if(h===";"||_===f-1){if(b!==-1){var M=ge(e.substring(u,b).trim());if(!g.includes(M)){h!==";"&&_++;var d=e.substring(u,_).trim();a+=" "+d+";"}}u=_+1,b=-1}}}}return r&&(a+=Ee(r)),i&&(a+=Ee(i,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function Ze(e,t,a,r,i,n){var s=e.__className;if(I||s!==a||s===void 0){var o=Zt(a,r,n);(!I||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o)),e.__className=a}else if(n&&i!==n)for(var g in n){var u=!!n[g];(i==null||u!==!!i[g])&&e.classList.toggle(g,u)}return n}function _e(e,t={},a,r){for(var i in a){var n=a[i];t[i]!==n&&(a[i]==null?e.style.removeProperty(i):e.style.setProperty(i,n,r))}}function ea(e,t,a,r){var i=e.__style;if(I||i!==t){var n=Qt(t,r);(!I||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=t}else r&&(Array.isArray(r)?(_e(e,a?.[0],r[0]),_e(e,a?.[1],r[1],"important")):_e(e,a,r));return r}function $e(e,t,a=!1){if(e.multiple){if(t==null)return;if(!De(t))return Nt();for(var r of e.options)r.selected=t.includes(Ie(r));return}for(r of e.options){var i=Ie(r);if(yt(i,t)){r.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function ta(e){var t=new MutationObserver(()=>{$e(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),xt(()=>{t.disconnect()})}function Ie(e){return"__value"in e?e.__value:e.value}const ne=Symbol("class"),oe=Symbol("style"),Qe=Symbol("is custom element"),et=Symbol("is html");function aa(e){if(I){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;z(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var i=e.checked;z(e,"checked",null),e.checked=i}}};e.__on_r=a,St(a),jt()}}function ra(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function z(e,t,a,r){var i=tt(e);I&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=a)&&(t==="loading"&&(e[Ct]=a),a==null?e.removeAttribute(t):typeof a!="string"&&at(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function ia(e,t,a,r,i=!1,n=!1){if(I&&i&&e.tagName==="INPUT"){var s=e,o=s.type==="checkbox"?"defaultChecked":"defaultValue";o in a||aa(s)}var g=tt(e),u=g[Qe],b=!g[et];let _=I&&u;_&&X(!1);var h=t||{},M=e.tagName==="OPTION";for(var d in t)d in a||(a[d]=null);a.class?a.class=Xt(a.class):a[ne]&&(a.class=null),a[oe]&&(a.style??=null);var f=at(e);for(const l in a){let c=a[l];if(M&&l==="value"&&c==null){e.value=e.__value="",h[l]=c;continue}if(l==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ze(e,m,c,r,t?.[ne],a[ne]),h[l]=c,h[ne]=a[ne];continue}if(l==="style"){ea(e,c,t?.[oe],a[oe]),h[l]=c,h[oe]=a[oe];continue}var w=h[l];if(!(c===w&&!(c===void 0&&e.hasAttribute(l)))){h[l]=c;var N=l[0]+l[1];if(N!=="$$")if(N==="on"){const A={},C="$$"+l;let E=l.slice(2);var S=Gt(E);if(Vt(E)&&(E=E.slice(0,-7),A.capture=!0),!S&&w){if(c!=null)continue;e.removeEventListener(E,h[C],A),h[C]=null}if(c!=null)if(S)e[`__${E}`]=c,ve([E]);else{let D=function(W){h[l].call(this,W)};h[C]=Dt(E,e,D,A)}else S&&(e[`__${E}`]=void 0)}else if(l==="style")z(e,l,c);else if(l==="autofocus")Ft(e,!!c);else if(!u&&(l==="__value"||l==="value"&&c!=null))e.value=e.__value=c;else if(l==="selected"&&M)ra(e,c);else{var $=l;b||($=Wt($));var y=$==="defaultValue"||$==="defaultChecked";if(c==null&&!u&&!y)if(g[l]=null,$==="value"||$==="checked"){let A=e;const C=t===void 0;if($==="value"){let E=A.defaultValue;A.removeAttribute($),A.defaultValue=E,A.value=A.__value=C?E:null}else{let E=A.defaultChecked;A.removeAttribute($),A.defaultChecked=E,A.checked=C?E:!1}}else e.removeAttribute(l);else y||f.includes($)&&(u||typeof c!="string")?(e[$]=c,$ in g&&(g[$]=Tt)):typeof c!="function"&&z(e,$,c)}}}return _&&X(!0),h}function Ce(e,t,a=[],r=[],i,n=!1,s=!1){Mt(a,r,o=>{var g=void 0,u={},b=e.nodeName==="SELECT",_=!1;if(ce(()=>{var M=t(...o.map(x)),d=ia(e,g,M,i,n,s);_&&b&&"value"in M&&$e(e,M.value);for(let m of Object.getOwnPropertySymbols(u))M[m]||ee(u[m]);for(let m of Object.getOwnPropertySymbols(M)){var f=M[m];m.description===kt&&(!g||f!==g[m])&&(u[m]&&ee(u[m]),u[m]=Q(()=>Yt(e,()=>f))),d[m]=f}g=d}),b){var h=e;Je(()=>{$e(h,g.value,!0),ta(h)})}_=!0})}function tt(e){return e.__attributes??={[Qe]:e.nodeName.includes("-"),[et]:e.namespaceURI===Et}}var Pe=new Map;function at(e){var t=e.getAttribute("is")||e.nodeName,a=Pe.get(t);if(a)return a;Pe.set(t,a=[]);for(var r,i=e,n=Element.prototype;n!==i;){r=Pt(i);for(var s in r)r[s].set&&a.push(s);i=It(i)}return a}/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const sa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var na=Lt("<svg><!><!></svg>");function V(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]),r=P(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Fe(t,!1);let i=Z(t,"name",8,void 0),n=Z(t,"color",8,"currentColor"),s=Z(t,"size",8,24),o=Z(t,"strokeWidth",8,2),g=Z(t,"absoluteStrokeWidth",8,!1),u=Z(t,"iconNode",24,()=>[]);const b=(...d)=>d.filter((f,m,w)=>!!f&&w.indexOf(f)===m).join(" ");st();var _=na();Ce(_,(d,f)=>({...sa,...r,width:s(),height:s(),stroke:n(),"stroke-width":d,class:f}),[()=>(se(g()),se(o()),se(s()),ke(()=>g()?Number(o())*24/Number(s()):o())),()=>(se(i()),se(a),ke(()=>b("lucide-icon","lucide",i()?`lucide-${i()}`:"",a.class)))]);var h=p(_);te(h,1,u,Ye,(d,f)=>{var m=qe(()=>zt(x(f),2));let w=()=>x(m)[0],N=()=>x(m)[1];var S=H(),$=L(S);Ut($,w,!0,(y,l)=>{Ce(y,()=>({...N()}))}),T(d,S)});var M=k(h);O(M,t,"default",{}),v(_),T(e,_),je()}function oa(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];V(e,R({name:"file"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function la(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];V(e,R({name:"computer"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function da(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 15h4"}],["path",{d:"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"}],["path",{d:"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"}],["path",{d:"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}]];V(e,R({name:"tool-case"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ca(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];V(e,R({name:"code"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}var fa=G('<p class="rounded-sm p-1 text-lg font-light text-center even:bg-[#d3d3d3] odd:bg-[#c5c5c5]"> </p>'),ua=G('<section class="p-[.75rem]" id="about"><div class="md:grid grid-cols-2"><div class="p-1"><h2 class="text-2xl p-1"><p>Hello, <br/> I am Temiloluwa</p> <p class="text-5xl font-bold">Web Developer</p></h2> <div class="p-1 my-2"><div class="p-1 my-4"><a class="button-link bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900"><!> My Resume</a> <a class="text-blue-900 hover:bg-blue-900 hover:text-[#fff]" href="mailto:akintadetemi19@gmail.com">Got a Project?</a></div> <div class="p-2 grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 gap-1 md:p-[1rem] rounded-sm bg-[#e7e7e7]"></div> <ul class="pt-4 svelte-1bmiiuv"><li class="svelte-1bmiiuv"><p class="svelte-1bmiiuv"><!> <span class="svelte-1bmiiuv">Website and Web App Development</span></p> <hr class="border-[#7777]"/></li> <li class="svelte-1bmiiuv"><p class="svelte-1bmiiuv"><!> <span class="svelte-1bmiiuv">Website and Web App Maintenance</span></p> <hr class="border-[#7777]"/></li> <li class="svelte-1bmiiuv"><p class="svelte-1bmiiuv"><!> <span class="svelte-1bmiiuv">API Integration</span></p> <hr class="border-[#7777]"/></li></ul></div></div> <div class="p-2"><div class="grid place-items-center"><img alt="My_Picture" width="400" loading="lazy" class="rounded-lg object-cover mt-[-1rem] bg-[#dedede77]"/></div> <div class="px-2"><h3 class="text-3xl font-bold mb-4 pt-4">About me</h3> <div><p>I am a web developer with over four years of experience in building web applications that solve problems.</p> <p>I am focused on transforming ideas into code from scratch with JavaScript or libraries and frameworks like ReactJS and Svelte among other technologies. I have worked on projects that featured API and AI integration.</p></div></div></div></div></section>');function va(e){const t=[{id:0,name:"JavaScript"},{id:1,name:"TailwindCSS"},{id:2,name:"Svelte"},{id:3,name:"ReactJS"},{id:4,name:"TypeScript"},{id:5,name:"NextJS"},{id:6,name:"Git"},{id:7,name:"Firebase"}];var a=ua(),r=p(a),i=p(r),n=k(p(i),2),s=p(n),o=p(s),g=p(o);oa(g,{class:"inline-block"}),J(),v(o),J(2),v(s);var u=k(s,2);te(u,5,()=>t,c=>c.id,(c,A)=>{var C=fa(),E=p(C,!0);v(C),U(()=>B(E,x(A).name)),T(c,C)}),v(u);var b=k(u,2),_=p(b),h=p(_),M=p(h);la(M,{}),J(2),v(h),J(2),v(_);var d=k(_,2),f=p(d),m=p(f);da(m,{}),J(2),v(f),J(2),v(d);var w=k(d,2),N=p(w),S=p(N);ca(S,{}),J(2),v(N),J(2),v(w),v(b),v(n),v(i);var $=k(i,2),y=p($),l=p(y);v(y),J(2),v($),v(r),v(a),U(()=>{z(o,"href",`${K??""}/AKINTADE TEMILOLUWA AYOMIDE CV.pdf`),z(l,"src",`${K??""}/docs/images/temiloluwa.jpg`)}),T(e,a)}function ha(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];V(e,R({name:"mail"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function rt(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];V(e,R({name:"x"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function pa(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];V(e,R({name:"linkedin"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function it(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];V(e,R({name:"github"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Le(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];V(e,R({name:"arrow-up-right"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ma(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];V(e,R({name:"cog"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ga(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];V(e,R({name:"heart"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function _a(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];V(e,R({name:"house"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ba(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];V(e,R({name:"info"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function $a(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];V(e,R({name:"menu"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function wa(e,t){const a=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];V(e,R({name:"phone"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=H(),o=L(s);O(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}var Aa=G('<p class="p-1"><a class="inline-block p-2 rounded-[50%] bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900"><!></a></p>'),Na=G(`<section class="p-3 bg-[#dedede99]" id="contacts"><div class="p-2"><h2 class="text-2xl font-bold">Contacts</h2> <div class="p-2 flex items-center justify-between"><p class="text-xl font-bold">Got a project? Let's talk!</p> <div class="flex"></div></div></div></section>`);function ya(e){const t=[{id:0,icon:ha,link:"",name:"Mail"},{id:1,icon:rt,link:"",name:"X"},{id:2,icon:pa,link:"",name:"LinkedIn"},{id:3,icon:it,link:"",name:"GitHub"}];var a=Na(),r=p(a),i=k(p(r),2),n=k(p(i),2);te(n,5,()=>t,s=>s.id,(s,o)=>{const g=Re(()=>x(o).icon);var u=Aa(),b=p(u),_=p(b);x(g)(_,{class:"inline"}),v(b),v(u),U(()=>{z(b,"href",x(o).link),z(b,"title",x(o).name)}),T(s,u)}),v(n),v(i),v(r),v(a),T(e,a)}var xa=(e,t)=>Ne(t,!x(t)),Ma=G('<li class="w-[23%] grid md:place-items-center"><a class="inline-flex text-center w-[fit-content] text-blue-900 p-1 hover:underline decoration-2"><!> </a></li>'),ka=G('<section class="sticky top-0 bg-[#fffd] backdrop-blur-md shadow-sm"><header class="flex items-center justify-between p-[.5rem]"><div><img alt="Temiloluwa" class="md:w-20 w-15"/></div> <div class="md:static fixed right-2 top-2 flex items-top"><div class="md:hidden"><button class="focus:bg-blue-900 focus:text-[#fff] mr-1"><!></button></div> <nav><ul class="flex md:flex-row flex-col p-[.75rem] md:w-[35rem] md:justify-around justify-end"></ul></nav></div></header></section>');function Ta(e){const t=[{id:0,name:"Home",href:"#",icon:_a},{id:1,name:"About",href:"#about",icon:ba},{id:2,name:"Projects",href:"#projects",icon:ma},{id:3,name:"Contacts",href:"#contacts",icon:wa}];let a=Ke(!1);var r=ka(),i=p(r),n=p(i),s=p(n);v(n);var o=k(n,2),g=p(o),u=p(g);u.__click=[xa,a];var b=p(u);{var _=f=>{rt(f,{})},h=f=>{$a(f,{})};Ue(b,f=>{x(a)?f(_):f(h,!1)})}v(u),v(g);var M=k(g,2),d=p(M);te(d,21,()=>t,f=>f.id,(f,m)=>{const w=qe(()=>x(m).icon);var N=Ma(),S=p(N),$=p(S);Jt($,()=>x(w),(l,c)=>{c(l,{})});var y=k($);v(S),v(N),U(()=>{z(S,"href",x(m).href),B(y,` ${x(m).name??""}`)}),T(f,N)}),v(d),v(M),v(o),v(i),v(r),U(()=>{z(s,"src",`${K??""}/images/TEEE.png`),Ze(M,1,`md:block ${x(a)?"block rounded-sm shadow-md bg-[#fff]":"hidden"}`)}),T(e,r)}ve(["click"]);var Sa=(e,t)=>t.onClose(),Ea=G('<div class="fixed inset-0 bg-[#d7d7d777] backdrop-blur-[1rem]"><div class="p-4 bg-[#fff] absolute bottom-0 right-5 left-5 rounded-t-lg text-center shadow-md"><div class="absolute top-1 right-2"><button class="text-xl">&times;</button></div> <!></div></div>');function Ia(e,t){Fe(t,!0);var a=Ea(),r=p(a),i=p(r),n=p(i);n.__click=[Sa,t],v(i);var s=k(i,2);Ht(s,()=>t.children),v(r),v(a),T(e,a),je()}ve(["click"]);var Ca=G('<h3 class="text-xl font-bold"> </h3> <div class="py-2"><img width="500" class="rounded-sm m-auto"/></div> <p class="italic text-sm"> </p>',1),Pa=(e,t,a,r)=>{Ne(t,!x(t)),a.name=x(r).name,a.image=x(r).image,a.description=x(r).description},La=G('<span class="m-1 p-1 inline-block rounded-sm bg-[#d3d3d3] text-sm"> </span>'),za=G('<li class="m-[1px auto] p-1 w-[100%] flex justify-around items-center"><div class="grid place-items-center w-[45%] h-[100%]"><button><img width="350" loading="lazy" class="cursor-pointer hover:scale-[1.1]"/></button></div> <div class="mt-2 py-1 text-center w-[50%]"><span class="block mb-1"> </span> <p></p> <em class="block text-center text-xs"> </em> <p class="p-2 mt-1 md:flex"><a class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900 svelte-181xidc">View GitHub <!></a> <a class="hover:text-blue-900 hover:underline decoration-2 svelte-181xidc">View Project <!></a></p></div></li>'),Ha=G('<section class="p-3" id="projects"><!> <div class="p-2"><h2 class="text-center text-3xl font-bold">Projects</h2> <ul class="md:grid grid-cols-2 gap-1 w-[100%]"><!> <li><div class="grid place-items-center h-[100%]"><a href="https://github.com/Temi-Tade" class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900 svelte-181xidc">Visit my GitHub <!></a></div></li></ul></div></section>');function Oa(e){let t=Ot({name:"",image:"",description:""}),a=Ke(!1);const r=[{id:0,name:"efIQo",link:"https://efiqo-app.web.app/",github:"https://github.com/Temi-Tade/Efiqo",description:"Study with flashcards and quizzes",tags:["HTML","CSS","JS","AI","Firebase"],image:`${K}/images/efiqo_screen.png`},{id:1,name:"KeyMaster",link:"https://temi-tade.github.io/KeyMaster/",github:"https://github.com/Temi-Tade/KeyMaster",description:"Start typing like a pro",tags:["HTML","CSS","JS","API"],image:`${K}/images/keymaster_screen.png`},{id:2,name:"SVG Text Editor",link:"https://temi-tade.github.io/svg-editor/",github:"https://github.com/Temi-Tade/svg-editor",description:"Create custom SVGs right inside your browser",tags:["HTML","CSS","JS"],image:`${K}/images/svg_editor_screen.png`},{id:3,name:"VerbotAI",link:"https://verbot-ai.web.app/",github:"https://github.com/Temi-Tade/verbot.ai",description:"Can't type in your prompt? Tell AI and let it respond with speech!",tags:["HTML","CSS","JS","AI"],image:`${K}/images/verbot_screen.png`},{id:4,name:"Keyword Encoder",link:"https://temi-tade.github.io/keyword-encoder/",github:"https://github.com/Temi-Tade/keyword-encoder",description:"A tool for encoding plain text and decoding enciphered text with a keyword.",tags:["HTML","CSS","JS"],image:`${K}/images/keyword_encoder_screen.png`}];var i=Ha(),n=p(i);{var s=d=>{Ia(d,{onClose:()=>Ne(a,!x(a)),children:(f,m)=>{var w=Ca(),N=L(w),S=p(N,!0);v(N);var $=k(N,2),y=p($);v($);var l=k($,2),c=p(l,!0);v(l),U(()=>{B(S,t.name),z(y,"src",t.image),z(y,"alt",t.description),B(c,t.description)}),T(f,w)},$$slots:{default:!0}})};Ue(n,d=>{x(a)&&d(s)})}var o=k(n,2),g=k(p(o),2),u=p(g);te(u,17,()=>r,d=>d.id,(d,f)=>{var m=za(),w=p(m),N=p(w);N.__click=[Pa,a,t,f];var S=p(N);v(N),v(w);var $=k(w,2),y=p($),l=p(y,!0);v(y);var c=k(y,2);te(c,21,()=>x(f).tags,Ye,(Y,re)=>{var ie=La(),he=p(ie,!0);v(ie),U(()=>B(he,x(re))),T(Y,ie)}),v(c);var A=k(c,2),C=p(A,!0);v(A);var E=k(A,2),D=p(E),W=k(p(D));it(W,{class:"inline"}),v(D);var j=k(D,2),ae=k(p(j));Le(ae,{class:"inline"}),v(j),v(E),v($),v(m),U(()=>{z(S,"src",x(f).image),z(S,"alt",x(f).description),B(l,x(f).name),B(C,x(f).description),z(D,"href",x(f).github),z(j,"href",x(f).link)}),T(d,m)});var b=k(u,2),_=p(b),h=p(_),M=k(p(h));Le(M,{class:"inline"}),v(h),v(_),v(b),v(g),v(o),v(i),T(e,i)}ve(["click"]);var Ra=G('<div><!> <!> <!> <!> <footer class="text-center bg-[#dedede99] p-1"><p>Made with <!>. All rights reserved.</p></footer></div>');function ja(e){var t=Ra(),a=p(t);Ta(a);var r=k(a,2);va(r);var i=k(r,2);Oa(i);var n=k(i,2);ya(n);var s=k(n,2),o=p(s),g=k(p(o));ga(g,{class:"inline stroke-0",fill:"red",size:18}),J(),v(o),v(s),v(t),T(e,t)}export{ja as component};
