import"../chunks/DsnmJJEf.js";import{i as vt}from"../chunks/Bn2CjrHi.js";import{aj as De,S as ke,J as de,aF as Oe,Q as te,K as z,ap as ee,L as ae,q as $,a6 as Ae,N as ut,O as ft,P as Ee,R as J,Z as F,am as Re,as as ht,T as ie,W as pt,aG as ve,aH as ue,U as mt,aI as Se,aB as gt,$ as xe,aw as qe,i as Be,X as Te,Y as Ve,aJ as _t,aK as pe,aL as se,aM as bt,ao as We,aN as $t,av as wt,aO as yt,_ as Me,E as W,aP as kt,at as At,ar as Tt,ay as be,aQ as Mt,aR as Nt,M as Et,aS as St,az as Ue,aT as xt,aU as zt,aV as Ct,aW as It,aX as Lt,aY as Ht,aZ as Pt,a_ as jt,V as Dt,a$ as Ot,b0 as Rt,C as Fe,b1 as Ye,B as M,F as Ge,G as b,e as ze,v as ne,I as k,H as p,y as j,z as L,aD as Ke,b2 as qt,D as P,b3 as Z,a4 as Ne,aC as Xe,A as Bt,a3 as Vt,b4 as Wt}from"../chunks/B7tbIyfL.js";import{i as Ut,a as Ft,c as Yt,d as fe,n as Gt,b as Kt,s as V,e as Xt}from"../chunks/BAUL1ngf.js";import{b as X}from"../chunks/Dh2Ov0zc.js";import{l as H,p as Q,s as O,i as he,c as Jt}from"../chunks/Qd2y2ZIA.js";function Zt(e,t){if(t){const a=document.body;e.autofocus=!0,De(()=>{document.activeElement===a&&e.focus()})}}let Ce=!1;function Qt(){Ce||(Ce=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Je(e,t){return t}function ea(e,t,a){for(var i=e.items,s=[],n=t.length,r=0;r<n;r++)$t(t[r].e,s,!0);var o=n>0&&s.length===0&&a!==null;if(o){var f=a.parentNode;wt(f),f.append(a),i.clear(),U(e,t[0].prev,t[n-1].next)}yt(s,()=>{for(var l=0;l<n;l++){var g=t[l];o||(i.delete(g.k),U(e,g.prev,g.next)),se(g.e,!o)}})}function G(e,t,a,i,s,n=null){var r=e,o={flags:t,items:new Map,first:null},f=(t&Oe)!==0;if(f){var l=e;r=z?te(ee(l)):l.appendChild(ke())}z&&ae();var g=null,h=!1,c=new Map,y=Ae(()=>{var w=a();return Be(w)?w:w==null?[]:qe(w)}),d,m;function u(){ta(m,d,o,c,r,s,t,i,a),n!==null&&(d.length===0?g?Te(g):g=ie(()=>n(r)):g!==null&&Ve(g,()=>{g=null}))}de(()=>{m??=Me,d=$(y);var w=d.length;if(h&&w===0)return;h=w===0;let T=!1;if(z){var E=ut(r)===ft;E!==(w===0)&&(r=Ee(),te(r),J(!1),T=!0)}if(z){for(var A=null,S,v=0;v<w;v++){if(F.nodeType===Re&&F.data===ht){r=F,T=!0,J(!1);break}var _=d[v],N=i(_,v);S=$e(F,o,A,null,_,N,v,s,t,a),o.items.set(N,S),A=S}w>0&&te(Ee())}if(z)w===0&&n&&(g=ie(()=>n(r)));else if(pt()){var I=new Set,C=mt;for(v=0;v<w;v+=1){_=d[v],N=i(_,v);var B=o.items.get(N)??c.get(N);B?(t&(ve|ue))!==0&&Ze(B,_,v,t):(S=$e(null,o,null,null,_,N,v,s,t,a,!0),c.set(N,S)),I.add(N)}for(const[q,K]of o.items)I.has(q)||C.skipped_effects.add(K.e);C.add_callback(u)}else u();T&&J(!0),$(y)}),z&&(r=F)}function ta(e,t,a,i,s,n,r,o,f){var l=(r&bt)!==0,g=(r&(ve|ue))!==0,h=t.length,c=a.items,y=a.first,d=y,m,u=null,w,T=[],E=[],A,S,v,_;if(l)for(_=0;_<h;_+=1)A=t[_],S=o(A,_),v=c.get(S),v!==void 0&&(v.a?.measure(),(w??=new Set).add(v));for(_=0;_<h;_+=1){if(A=t[_],S=o(A,_),v=c.get(S),v===void 0){var N=i.get(S);if(N!==void 0){i.delete(S),c.set(S,N);var I=u?u.next:d;U(a,u,N),U(a,N,I),me(N,I,s),u=N}else{var C=d?d.e.nodes_start:s;u=$e(C,a,u,u===null?a.first:u.next,A,S,_,n,r,f)}c.set(S,u),T=[],E=[],d=u.next;continue}if(g&&Ze(v,A,_,r),(v.e.f&pe)!==0&&(Te(v.e),l&&(v.a?.unfix(),(w??=new Set).delete(v))),v!==d){if(m!==void 0&&m.has(v)){if(T.length<E.length){var B=E[0],q;u=B.prev;var K=T[0],re=T[T.length-1];for(q=0;q<T.length;q+=1)me(T[q],B,s);for(q=0;q<E.length;q+=1)m.delete(E[q]);U(a,K.prev,re.next),U(a,u,K),U(a,re,B),d=B,u=re,_-=1,T=[],E=[]}else m.delete(v),me(v,d,s),U(a,v.prev,v.next),U(a,v,u===null?a.first:u.next),U(a,u,v),u=v;continue}for(T=[],E=[];d!==null&&d.k!==S;)(d.e.f&pe)===0&&(m??=new Set).add(d),E.push(d),d=d.next;if(d===null)continue;v=d}T.push(v),u=v,d=v.next}if(d!==null||m!==void 0){for(var Y=m===void 0?[]:qe(m);d!==null;)(d.e.f&pe)===0&&Y.push(d),d=d.next;var oe=Y.length;if(oe>0){var ct=(r&Oe)!==0&&h===0?s:null;if(l){for(_=0;_<oe;_+=1)Y[_].a?.measure();for(_=0;_<oe;_+=1)Y[_].a?.fix()}ea(a,Y,ct)}}l&&De(()=>{if(w!==void 0)for(v of w)v.a?.apply()}),e.first=a.first&&a.first.e,e.last=u&&u.e;for(var dt of i.values())se(dt.e);i.clear()}function Ze(e,t,a,i){(i&ve)!==0&&Se(e.v,t),(i&ue)!==0?Se(e.i,a):e.i=a}function $e(e,t,a,i,s,n,r,o,f,l,g){var h=(f&ve)!==0,c=(f&_t)===0,y=h?c?gt(s,!1,!1):xe(s):s,d=(f&ue)===0?r:xe(r),m={i:d,v:y,k:n,a:null,e:null,prev:a,next:i};try{if(e===null){var u=document.createDocumentFragment();u.append(e=ke())}return m.e=ie(()=>o(e,y,d,l),z),m.e.prev=a&&a.e,m.e.next=i&&i.e,a===null?g||(t.first=m):(a.next=m,a.e.next=m.e),i!==null&&(i.prev=m,i.e.prev=m.e),m}finally{}}function me(e,t,a){for(var i=e.next?e.next.e.nodes_start:a,s=t?t.e.nodes_start:a,n=e.e.nodes_start;n!==null&&n!==i;){var r=We(n);s.before(n),n=r}}function U(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function aa(e,t,a=!1,i=!1,s=!1){var n=e,r="";W(()=>{var o=Me;if(r===(r=t()??"")){z&&ae();return}if(o.nodes_start!==null&&(kt(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),r!==""){if(z){F.data;for(var f=ae(),l=f;f!==null&&(f.nodeType!==Re||f.data!=="");)l=f,f=We(f);if(f===null)throw At(),Tt;be(F,l),n=te(f);return}var g=r+"";a?g=`<svg>${g}</svg>`:i&&(g=`<math>${g}</math>`);var h=Mt(g);if((a||i)&&(h=ee(h)),be(ee(h),h.lastChild),a||i)for(;ee(h);)n.before(ee(h));else n.before(h)}})}function D(e,t,a,i,s){z&&ae();var n=t.$$slots?.[a],r=!1;n===!0&&(n=t.children,r=!0),n===void 0||n(e,r?()=>i:i)}function ia(e,t,a,i,s,n){let r=z;z&&ae();var o,f,l=null;z&&F.nodeType===Nt&&(l=F,ae());var g=z?F:e,h;de(()=>{const c=t()||null;var y=St;c!==o&&(h&&(c===null?Ve(h,()=>{h=null,f=null}):c===f?Te(h):se(h)),c&&c!==f&&(h=ie(()=>{if(l=z?l:document.createElementNS(y,c),be(l,l),i){z&&Ut(c)&&l.append(document.createComment(""));var d=z?ee(l):l.appendChild(ke());z&&(d===null?J(!1):te(d)),i(l,d)}Me.nodes_end=l,g.before(l)})),o=c,o&&(f=o))},Et),r&&(J(!0),te(g))}function sa(e,t){var a=void 0,i;de(()=>{a!==(a=t())&&(i&&(se(i),i=null),a&&(i=ie(()=>{Ue(()=>a(e))})))})}function Qe(e){var t,a,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(a=Qe(e[t]))&&(i&&(i+=" "),i+=a)}else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function ra(){for(var e,t,a=0,i="",s=arguments.length;a<s;a++)(e=arguments[a])&&(t=Qe(e))&&(i&&(i+=" "),i+=t);return i}function oa(e){return typeof e=="object"?ra(e):e??""}const Ie=[...` 	
\r\f \v\uFEFF`];function na(e,t,a){var i=e==null?"":""+e;if(t&&(i=i?i+" "+t:t),a){for(var s in a)if(a[s])i=i?i+" "+s:s;else if(i.length)for(var n=s.length,r=0;(r=i.indexOf(s,r))>=0;){var o=r+n;(r===0||Ie.includes(i[r-1]))&&(o===i.length||Ie.includes(i[o]))?i=(r===0?"":i.substring(0,r))+i.substring(o+1):r=o}}return i===""?null:i}function Le(e,t=!1){var a=t?" !important;":";",i="";for(var s in e){var n=e[s];n!=null&&n!==""&&(i+=" "+s+": "+n+a)}return i}function ge(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function la(e,t){if(t){var a="",i,s;if(Array.isArray(t)?(i=t[0],s=t[1]):i=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,r=0,o=!1,f=[];i&&f.push(...Object.keys(i).map(ge)),s&&f.push(...Object.keys(s).map(ge));var l=0,g=-1;const m=e.length;for(var h=0;h<m;h++){var c=e[h];if(o?c==="/"&&e[h-1]==="*"&&(o=!1):n?n===c&&(n=!1):c==="/"&&e[h+1]==="*"?o=!0:c==='"'||c==="'"?n=c:c==="("?r++:c===")"&&r--,!o&&n===!1&&r===0){if(c===":"&&g===-1)g=h;else if(c===";"||h===m-1){if(g!==-1){var y=ge(e.substring(l,g).trim());if(!f.includes(y)){c!==";"&&h++;var d=e.substring(l,h).trim();a+=" "+d+";"}}l=h+1,g=-1}}}}return i&&(a+=Le(i)),s&&(a+=Le(s,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function et(e,t,a,i,s,n){var r=e.__className;if(z||r!==a||r===void 0){var o=na(a,i,n);(!z||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o)),e.__className=a}else if(n&&s!==n)for(var f in n){var l=!!n[f];(s==null||l!==!!s[f])&&e.classList.toggle(f,l)}return n}function _e(e,t={},a,i){for(var s in a){var n=a[s];t[s]!==n&&(a[s]==null?e.style.removeProperty(s):e.style.setProperty(s,n,i))}}function tt(e,t,a,i){var s=e.__style;if(z||s!==t){var n=la(t,i);(!z||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=t}else i&&(Array.isArray(i)?(_e(e,a?.[0],i[0]),_e(e,a?.[1],i[1],"important")):_e(e,a,i));return i}function we(e,t,a=!1){if(e.multiple){if(t==null)return;if(!Be(t))return xt();for(var i of e.options)i.selected=t.includes(He(i));return}for(i of e.options){var s=He(i);if(zt(s,t)){i.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function ca(e){var t=new MutationObserver(()=>{we(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ct(()=>{t.disconnect()})}function He(e){return"__value"in e?e.__value:e.value}const le=Symbol("class"),ce=Symbol("style"),at=Symbol("is custom element"),it=Symbol("is html");function da(e){if(z){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var i=e.value;x(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var s=e.checked;x(e,"checked",null),e.checked=s}}};e.__on_r=a,Ot(a),Qt()}}function va(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function x(e,t,a,i){var s=st(e);z&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=a)&&(t==="loading"&&(e[Rt]=a),a==null?e.removeAttribute(t):typeof a!="string"&&rt(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function ua(e,t,a,i,s=!1,n=!1){if(z&&s&&e.tagName==="INPUT"){var r=e,o=r.type==="checkbox"?"defaultChecked":"defaultValue";o in a||da(r)}var f=st(e),l=f[at],g=!f[it];let h=z&&l;h&&J(!1);var c=t||{},y=e.tagName==="OPTION";for(var d in t)d in a||(a[d]=null);a.class?a.class=oa(a.class):a[le]&&(a.class=null),a[ce]&&(a.style??=null);var m=rt(e);for(const v in a){let _=a[v];if(y&&v==="value"&&_==null){e.value=e.__value="",c[v]=_;continue}if(v==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";et(e,u,_,i,t?.[le],a[le]),c[v]=_,c[le]=a[le];continue}if(v==="style"){tt(e,_,t?.[ce],a[ce]),c[v]=_,c[ce]=a[ce];continue}var w=c[v];if(!(_===w&&!(_===void 0&&e.hasAttribute(v)))){c[v]=_;var T=v[0]+v[1];if(T!=="$$")if(T==="on"){const N={},I="$$"+v;let C=v.slice(2);var E=Kt(C);if(Ft(C)&&(C=C.slice(0,-7),N.capture=!0),!E&&w){if(_!=null)continue;e.removeEventListener(C,c[I],N),c[I]=null}if(_!=null)if(E)e[`__${C}`]=_,fe([C]);else{let B=function(q){c[v].call(this,q)};c[I]=Yt(C,e,B,N)}else E&&(e[`__${C}`]=void 0)}else if(v==="style")x(e,v,_);else if(v==="autofocus")Zt(e,!!_);else if(!l&&(v==="__value"||v==="value"&&_!=null))e.value=e.__value=_;else if(v==="selected"&&y)va(e,_);else{var A=v;g||(A=Gt(A));var S=A==="defaultValue"||A==="defaultChecked";if(_==null&&!l&&!S)if(f[v]=null,A==="value"||A==="checked"){let N=e;const I=t===void 0;if(A==="value"){let C=N.defaultValue;N.removeAttribute(A),N.defaultValue=C,N.value=N.__value=I?C:null}else{let C=N.defaultChecked;N.removeAttribute(A),N.defaultChecked=C,N.checked=I?C:!1}}else e.removeAttribute(v);else S||m.includes(A)&&(l||typeof _!="string")?(e[A]=_,A in f&&(f[A]=Dt)):typeof _!="function"&&x(e,A,_)}}}return h&&J(!0),c}function Pe(e,t,a=[],i=[],s,n=!1,r=!1){It(a,i,o=>{var f=void 0,l={},g=e.nodeName==="SELECT",h=!1;if(de(()=>{var y=t(...o.map($)),d=ua(e,f,y,s,n,r);h&&g&&"value"in y&&we(e,y.value);for(let u of Object.getOwnPropertySymbols(l))y[u]||se(l[u]);for(let u of Object.getOwnPropertySymbols(y)){var m=y[u];u.description===Pt&&(!f||m!==f[u])&&(l[u]&&se(l[u]),l[u]=ie(()=>sa(e,()=>m))),d[u]=m}f=d}),g){var c=e;Ue(()=>{we(c,f.value,!0),ca(c)})}h=!0})}function st(e){return e.__attributes??={[at]:e.nodeName.includes("-"),[it]:e.namespaceURI===Lt}}var je=new Map;function rt(e){var t=e.getAttribute("is")||e.nodeName,a=je.get(t);if(a)return a;je.set(t,a=[]);for(var i,s=e,n=Element.prototype;n!==s;){i=jt(s);for(var r in i)i[r].set&&a.push(r);s=Ht(s)}return a}/**
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
 */const fa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ha=Ye("<svg><!><!></svg>");function R(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]),i=H(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Fe(t,!1);let s=Q(t,"name",8,void 0),n=Q(t,"color",8,"currentColor"),r=Q(t,"size",8,24),o=Q(t,"strokeWidth",8,2),f=Q(t,"absoluteStrokeWidth",8,!1),l=Q(t,"iconNode",24,()=>[]);const g=(...d)=>d.filter((m,u,w)=>!!m&&w.indexOf(m)===u).join(" ");vt();var h=ha();Pe(h,(d,m)=>({...fa,...i,width:r(),height:r(),stroke:n(),"stroke-width":d,class:m}),[()=>(ne(f()),ne(o()),ne(r()),ze(()=>f()?Number(o())*24/Number(r()):o())),()=>(ne(s()),ne(a),ze(()=>g("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var c=b(h);G(c,1,l,Je,(d,m)=>{var u=Ke(()=>qt($(m),2));let w=()=>$(u)[0],T=()=>$(u)[1];var E=j(),A=L(E);ia(A,w,!0,(S,v)=>{Pe(S,()=>({...T()}))}),M(d,E)});var y=k(c);D(y,t,"default",{}),p(h),M(e,h),Ge()}function pa(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];R(e,O({name:"file"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function ma(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];R(e,O({name:"computer"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function ga(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}]];R(e,O({name:"blocks"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function _a(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];R(e,O({name:"cpu"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}var ba=P('<span class="tech-pill svelte-1bmiiuv"><img class="tech-logo svelte-1bmiiuv"/> </span>'),$a=P('<li class="svelte-1bmiiuv"><!> <span> </span></li>'),wa=P(`<section class="hero-section svelte-1bmiiuv" id="about"><div class="hero-copy svelte-1bmiiuv"><h1 class="svelte-1bmiiuv">Hello, I am <span class="svelte-1bmiiuv">Temiloluwa</span> <br/> Software Developer</h1> <p class="lead svelte-1bmiiuv">I am a software developer with 5+ years of experience building products across web, blockchain,
			systems, and embedded spaces. I design and ship reliable software that balances product
			thinking, engineering quality, and real-world usability.</p> <div class="action-row svelte-1bmiiuv"><a class="primary-action svelte-1bmiiuv"><!> My Resume</a> <a class="secondary-action svelte-1bmiiuv" href="mailto:akintadetemi19@gmail.com">Got a project?</a></div> <div class="tech-grid svelte-1bmiiuv"></div></div> <div class="hero-visual svelte-1bmiiuv"><div class="portrait-card svelte-1bmiiuv"><img alt="Temiloluwa Akintade, software developer" width="400" height="400" fetchpriority="high" class="svelte-1bmiiuv"/></div> <div class="mini-stat svelte-1bmiiuv"><strong class="svelte-1bmiiuv">5+ Years</strong> <span class="svelte-1bmiiuv">Building for real-world impact</span></div></div> <div class="service-panel svelte-1bmiiuv"><h2 class="svelte-1bmiiuv">About me</h2> <p class="svelte-1bmiiuv">I have spent the last 5+ years building software across the stack - from polished web experiences
			to smart contract and onchain product work, low-level systems, and embedded prototypes.</p> <p class="svelte-1bmiiuv">My stack spans React, Next.js, TailwindCSS, Svelte, TypeScript, Solidity, Foundry, C, and
			Arduino. I enjoy turning ambitious ideas into real, usable products that work in the wild.</p> <ul class="svelte-1bmiiuv"></ul></div></section>`);function ya(e){const t=[{id:0,name:"React",logo:"https://cdn.simpleicons.org/react/61dafb",color:"#61dafb"},{id:1,name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/000000",color:"#111827"},{id:2,name:"Tailwind",logo:"https://cdn.simpleicons.org/tailwindcss/06b6d4",color:"#06b6d4"},{id:3,name:"Svelte",logo:"https://cdn.simpleicons.org/svelte/ff3e00",color:"#ff3e00"},{id:4,name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6",color:"#3178c6"},{id:5,name:"Solidity",logo:"https://cdn.simpleicons.org/solidity/8a63d2",color:"#8a63d2"},{id:6,name:"Foundry",logo:"https://cdn.simpleicons.org/ethereum/000000",color:"#000000"},{id:7,name:"C",logo:"https://cdn.simpleicons.org/c/00599c",color:"#00599c"},{id:8,name:"Arduino",logo:"https://cdn.simpleicons.org/arduino/00979d",color:"#00979d"}],a=[{name:"Web Application Development",icon:ma},{name:"Smart Contract Development & dApp Integration",icon:ga},{name:"Systems & Embedded Software Development",icon:_a}];var i=wa(),s=b(i),n=k(b(s),4),r=b(n),o=b(r);pa(o,{}),Z(),p(r),Z(2),p(n);var f=k(n,2);G(f,5,()=>t,d=>d.id,(d,m)=>{var u=ba(),w=b(u),T=k(w);p(u),W(()=>{tt(u,`--tool-color: ${$(m).color}`),x(w,"src",$(m).logo),x(w,"alt",`${$(m).name} logo`),V(T,` ${$(m).name??""}`)}),M(d,u)}),p(f),p(s);var l=k(s,2),g=b(l),h=b(g);p(g),Z(2),p(l);var c=k(l,2),y=k(b(c),6);G(y,5,()=>a,Je,(d,m)=>{const u=Ae(()=>$(m).icon);var w=$a(),T=b(w);$(u)(T,{});var E=k(T,2),A=b(E,!0);p(E),p(w),W(()=>V(A,$(m).name)),M(d,w)}),p(y),p(c),p(i),W(()=>{x(r,"href",`${X??""}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf`),x(h,"src",`${X??""}/images/temiloluwa-peerlist.jpg`)}),M(e,i)}function ka(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];R(e,O({name:"mail"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function ot(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];R(e,O({name:"x"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function Aa(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];R(e,O({name:"linkedin"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function nt(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];R(e,O({name:"github"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function ye(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];R(e,O({name:"arrow-up-right"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function lt(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];R(e,O({name:"book-open"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function Ta(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];R(e,O({name:"cog"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function Ma(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];R(e,O({name:"heart"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function Na(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];R(e,O({name:"house"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function Ea(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];R(e,O({name:"info"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function Sa(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];R(e,O({name:"menu"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}function xa(e,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];R(e,O({name:"phone"},()=>a,{get iconNode(){return i},children:(s,n)=>{var r=j(),o=L(r);D(o,t,"default",{}),M(s,r)},$$slots:{default:!0}}))}var za=Ye('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z"></path></svg>'),Ca=P('<a class="svelte-1w9k76x"><!></a>'),Ia=P('<section class="contact-section svelte-1w9k76x" id="contacts"><div class="contact-panel svelte-1w9k76x"><div class="contact-copy svelte-1w9k76x"><span class="eyebrow svelte-1w9k76x">Contact</span> <h2 class="svelte-1w9k76x">Let’s build something meaningful.</h2> <p class="svelte-1w9k76x">I work across product, web, blockchain, and platform engineering - from frontend experiences to robust backend and systems work.</p></div> <div class="contact-actions svelte-1w9k76x"><a class="primary-contact svelte-1w9k76x" href="mailto:akintadetemi19@gmail.com">Book a call</a> <div class="social-links svelte-1w9k76x"></div></div></div></section>');function La(e){const t=[{id:0,icon:ka,link:"mailto:akintadetemi19@gmail.com",name:"Mail"},{id:1,icon:ot,link:"https://x.com/Temi_tade2805",name:"X"},{id:2,icon:Aa,link:"https://linkedin.com/in/temiloluwa-akintade-4b6798254",name:"LinkedIn"},{id:3,icon:nt,link:"https://github.com/Temi-Tade",name:"GitHub"}];var a=Ia(),i=b(a),s=k(b(i),2),n=k(b(s),2);G(n,5,()=>t,r=>r.id,(r,o)=>{const f=Ae(()=>$(o).icon);var l=Ca(),g=b(l);{var h=y=>{var d=za();M(y,d)},c=y=>{$(f)(y,{})};he(g,y=>{$(o).name==="X"?y(h):y(c,!1)})}p(l),W((y,d)=>{x(l,"href",$(o).link),x(l,"title",$(o).name),x(l,"aria-label",$(o).name),x(l,"target",y),x(l,"rel",d)},[()=>$(o).link.startsWith("http")?"_blank":void 0,()=>$(o).link.startsWith("http")?"noreferrer":void 0]),M(r,l)}),p(n),p(s),p(i),p(a),M(e,a)}var Ha=(e,t)=>Ne(t,!$(t)),Pa=P('<li><a class="nav-link svelte-1j7efyp"><!> <span> </span></a></li>'),ja=P('<section class="topbar svelte-1j7efyp"><header class="nav-shell svelte-1j7efyp"><a href="#top" class="brand svelte-1j7efyp" aria-label="Temiloluwa home page"><img alt="Temiloluwa" class="svelte-1j7efyp"/></a> <div class="nav-wrapper svelte-1j7efyp"><button class="menu-button svelte-1j7efyp" aria-label="Toggle navigation menu"><!></button> <nav aria-label="Main navigation"><ul class="svelte-1j7efyp"><!> <li><a href="mailto:akintadetemi19@gmail.com" class="nav-cta svelte-1j7efyp">Hire me</a></li></ul></nav></div></header></section>');function Da(e){const t=[{id:0,name:"Home",href:"#",icon:Na},{id:1,name:"About",href:"#about",icon:Ea},{id:2,name:"Projects",href:"#projects",icon:Ta},{id:3,name:"Articles",href:"#articles",icon:lt},{id:4,name:"Contacts",href:"#contacts",icon:xa}];let a=Xe(!1);var i=ja(),s=b(i),n=b(s),r=b(n);p(n);var o=k(n,2),f=b(o);f.__click=[Ha,a];var l=b(f);{var g=u=>{ot(u,{})},h=u=>{Sa(u,{})};he(l,u=>{$(a)?u(g):u(h,!1)})}p(f);var c=k(f,2);let y;var d=b(c),m=b(d);G(m,17,()=>t,u=>u.id,(u,w)=>{const T=Ke(()=>$(w).icon);var E=Pa(),A=b(E),S=b(A);Jt(S,()=>$(T),(N,I)=>{I(N,{})});var v=k(S,2),_=b(v,!0);p(v),p(A),p(E),W(()=>{x(A,"href",$(w).href),V(_,$(w).name)}),M(u,E)}),Z(2),p(d),p(c),p(o),p(s),p(i),W(u=>{x(r,"src",`${X??""}/images/TEEE.png`),y=et(c,1,"nav-panel svelte-1j7efyp",null,y,u)},[()=>({open:$(a)})]),M(e,i)}fe(["click"]);var Oa=(e,t)=>t.onClose(),Ra=P('<div class="modal-backdrop svelte-16ml2tb" aria-modal="true" role="dialog"><div class="modal-panel svelte-16ml2tb"><button class="close-button svelte-16ml2tb" aria-label="Close modal">&times;</button> <!></div></div>');function qa(e,t){Fe(t,!0);var a=Ra(),i=b(a),s=b(i);s.__click=[Oa,t];var n=k(s,2);Bt(n,()=>t.children),p(i),p(a),M(e,a),Ge()}fe(["click"]);var Ba=P('<h3 class="svelte-181xidc"> </h3> <div class="modal-image-wrap svelte-181xidc"><img loading="lazy" class="svelte-181xidc"/></div> <p class="svelte-181xidc"> </p>',1),Va=(e,t,a,i)=>{Ne(t,!$(t)),a.name=$(i).name,a.image=$(i).image,a.description=$(i).description},Wa=P('<span class="svelte-181xidc"> </span>'),Ua=P('<li class="project-card svelte-181xidc"><div class="project-media svelte-181xidc"><button class="image-button svelte-181xidc"><img loading="lazy" class="svelte-181xidc"/></button> <div class="tag-list svelte-181xidc"></div></div> <div class="project-body svelte-181xidc"><div class="project-title-row svelte-181xidc"><h3 class="svelte-181xidc"> </h3> <span class="svelte-181xidc">Live</span></div> <p class="project-description svelte-181xidc"> </p> <div class="project-actions svelte-181xidc"><a class="project-link ghost-link svelte-181xidc"><!> GitHub</a> <a class="project-link primary-link svelte-181xidc">View project <!></a></div></div></li>'),Fa=P('<section class="projects-section svelte-181xidc" id="projects"><!> <div class="section-heading svelte-181xidc"><span class="eyebrow svelte-181xidc">Selected work</span> <h2 class="svelte-181xidc">Builds that span product, blockchain, and systems thinking.</h2></div> <ul class="projects-grid svelte-181xidc"></ul> <div class="github-cta svelte-181xidc"><a href="https://github.com/Temi-Tade" class="svelte-181xidc">Visit my GitHub <!></a></div></section>');function Ya(e){let t=Vt({name:"",image:"",description:""}),a=Xe(!1);const i=[{id:0,name:"RivETH",link:"https://temi-tade.github.io/RivETHDocs",github:"https://github.com/Temi-Tade/RivETH",description:"An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.",tags:["Ethereum","Smart Contracts","Open Source","Infrastructure","Dev Tools"],image:`${X}/images/riveth.png`},{id:1,name:"qodon",link:"https://github.com/Temi-Tade/qodon",github:"https://github.com/Temi-Tade/qodon",description:"A CLI-based genomics tool. Written in C",tags:["CLI","Genomics","Bioinformatics","C"],image:`${X}/images/qdn_qft.png`},{id:2,name:"Medusa",link:"https://temi-tade.github.io/medusa",github:"https://github.com/Temi-Tade/medusa",description:"A password-based file encryption tool with lossless decryption.",tags:["Encryption","Security","File Management"],image:`${X}/images/medusa.png`},{id:3,name:"Skaylar",link:"https://temi-tade.github.io/Skaylar",github:"https://github.com/Temi-Tade/Skaylar",description:"A tool for analysing and visualizing first-digit distributions using Benford's Law.",tags:["Data Analysis","Visualization","Benford's Law","Statistics"],image:`${X}/images/Skaylar.png`}];var s=Fa(),n=b(s);{var r=h=>{qa(h,{onClose:()=>Ne(a,!$(a)),children:(c,y)=>{var d=Ba(),m=L(d),u=b(m,!0);p(m);var w=k(m,2),T=b(w);p(w);var E=k(w,2),A=b(E,!0);p(E),W(()=>{V(u,t.name),x(T,"src",t.image),x(T,"alt",t.description),V(A,t.description)}),M(c,d)},$$slots:{default:!0}})};he(n,h=>{$(a)&&h(r)})}var o=k(n,4);G(o,21,()=>i,h=>h.id,(h,c)=>{var y=Ua(),d=b(y),m=b(d);m.__click=[Va,a,t,c];var u=b(m);p(m);var w=k(m,2);G(w,20,()=>$(c).tags,K=>K,(K,re)=>{var Y=Wa(),oe=b(Y,!0);p(Y),W(()=>V(oe,re)),M(K,Y)}),p(w),p(d);var T=k(d,2),E=b(T),A=b(E),S=b(A,!0);p(A),Z(2),p(E);var v=k(E,2),_=b(v,!0);p(v);var N=k(v,2),I=b(N),C=b(I);nt(C,{}),Z(),p(I);var B=k(I,2),q=k(b(B));ye(q,{}),p(B),p(N),p(T),p(y),W(()=>{x(u,"src",$(c).image),x(u,"alt",$(c).description),V(S,$(c).name),V(_,$(c).description),x(I,"href",$(c).github),x(B,"href",$(c).link)}),M(h,y)}),p(o);var f=k(o,2),l=b(f),g=k(b(l));ye(g,{}),p(l),p(f),p(s),M(e,s)}fe(["click"]);var Ga=P("<time> </time>"),Ka=P('<li class="article-card svelte-m39zqz"><div class="article-meta svelte-m39zqz"><span class="svelte-m39zqz"> </span> <!></div> <h3 class="svelte-m39zqz"> </h3> <p class="svelte-m39zqz"> </p> <a target="_blank" rel="noreferrer" class="read-link svelte-m39zqz">Read article <!></a></li>'),Xa=P('<a target="_blank" rel="noreferrer" class="svelte-m39zqz"> </a>'),Ja=P('<section class="articles-section svelte-m39zqz" id="articles"><div class="section-heading svelte-m39zqz"><span class="eyebrow svelte-m39zqz">Writing &amp; ideas</span> <h2 class="svelte-m39zqz">Articles &amp; publications</h2> <p class="svelte-m39zqz">Notes on software, security, and the ideas behind the things I build.</p></div> <ul class="articles-grid svelte-m39zqz"></ul> <div class="publication-links svelte-m39zqz" aria-label="More publications"><!> <span>Find me on</span> <!></div></section>');function Za(e){const t=[{id:0,title:"I built Medusa - A lossless password-based file encryption tool",publication:"DEV Community",published:"Aug 29, 2026",preview:"A quick look at Medusa, an open-source, client-side file encryption tool built for lossless decryption.",href:"https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip"},{id:1,title:"Are computers truly random? How chaos powers randomness.",publication:"DEV Community",published:"Jul 15, 2026",preview:"An exploration of how computers generate randomness and the role chaos plays in the process.",href:"https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93"},{id:2,title:"Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)",publication:"CoderLegion",preview:"A look at how secure elements and carefully limited USB or Bluetooth connections let hardware wallets sign transactions without exposing private keys.",href:"https://coderlegion.com/20141/how-do-web3-hardware-wallets-work"},{id:3,title:"Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs",publication:"CoderLegion",preview:"The story behind a lightweight, browser-based Ethereum toolkit that helps developers compile, deploy, and interact with smart contracts locally.",href:"https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs"}],a=[{name:"Dev.to",href:"https://dev.to/js_cipher"},{name:"Medium",href:"https://medium.com/@temi_lolu0x0"},{name:"CoderLegion",href:"https://coderlegion.com/user/temi_0x0"},{name:"Peerlist",href:"https://peerlist.io/temi_lolu"}];var i=Ja(),s=k(b(i),2);G(s,5,()=>t,f=>f.id,(f,l)=>{var g=Ka(),h=b(g),c=b(h),y=b(c,!0);p(c);var d=k(c,2);{var m=v=>{var _=Ga(),N=b(_,!0);p(_),W(()=>V(N,$(l).published)),M(v,_)};he(d,v=>{$(l).published&&v(m)})}p(h);var u=k(h,2),w=b(u,!0);p(u);var T=k(u,2),E=b(T,!0);p(T);var A=k(T,2),S=k(b(A));ye(S,{}),p(A),p(g),W(()=>{V(y,$(l).publication),V(w,$(l).title),V(E,$(l).preview),x(A,"href",$(l).href)}),M(f,g)}),p(s);var n=k(s,2),r=b(n);lt(r,{});var o=k(r,4);G(o,1,()=>a,f=>f.name,(f,l)=>{var g=Xa(),h=b(g,!0);p(g),W(()=>{x(g,"href",$(l).href),V(h,$(l).name)}),M(f,g)}),p(n),p(i),M(e,i)}var Qa=P('<meta name="description" content="Temiloluwa Akintade is a software developer building thoughtful web applications, blockchain products, smart contracts, systems, and embedded software."/> <meta name="author" content="Temiloluwa Akintade"/> <link rel="canonical"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Temiloluwa Akintade | Software Developer"/> <meta property="og:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta property="og:url"/> <meta property="og:image"/> <meta property="og:image:alt" content="Temiloluwa Akintade, software developer"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Temiloluwa Akintade | Software Developer"/> <meta name="twitter:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta name="twitter:image"/> <!>',1),ei=P('<div class="page-shell svelte-1uha8ag" id="top"><!> <main class="content-shell svelte-1uha8ag"><!> <!> <!> <!></main> <footer class="site-footer svelte-1uha8ag"><p class="svelte-1uha8ag">Made with <!> by Temiloluwa. All rights reserved.</p></footer></div>');function ni(e){const t="https://temi-tade.github.io/portfolio-website/",a={"@context":"https://schema.org","@type":"Person",name:"Temiloluwa Akintade",url:t,jobTitle:"Software Developer",description:"Software developer building web applications, blockchain products, smart contracts, systems, and embedded software.",sameAs:["https://github.com/Temi-Tade","https://x.com/Temi_tade2805","https://linkedin.com/in/temiloluwa-akintade-4b6798254","https://dev.to/js_cipher","https://medium.com/@temi_lolu0x0","https://coderlegion.com/user/temi_0x0","https://peerlist.io/temi_lolu"]};var i=ei();Xt(y=>{var d=Qa();Wt.title="Temiloluwa Akintade | Software Developer";var m=k(L(d),4);x(m,"href",t);var u=k(m,8);x(u,"content",t);var w=k(u,2);x(w,"content",`${t}images/temiloluwa-peerlist.jpg`);var T=k(w,10);x(T,"content",`${t}images/temiloluwa-peerlist.jpg`);var E=k(T,2);aa(E,()=>`<script type="application/ld+json">${JSON.stringify(a)}<\/script>`),M(y,d)});var s=b(i);Da(s);var n=k(s,2),r=b(n);ya(r);var o=k(r,2);Ya(o);var f=k(o,2);Za(f);var l=k(f,2);La(l),p(n);var g=k(n,2),h=b(g),c=k(b(h));Ma(c,{fill:"red",size:16,style:"vertical-align: middle;"}),Z(),p(h),p(g),p(i),M(e,i)}export{ni as component};
