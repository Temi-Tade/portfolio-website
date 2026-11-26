import"../chunks/DsnmJJEf.js";import{i as ma}from"../chunks/TS8EnbqO.js";import{aj as Ye,S as Ie,J as me,aG as Ke,Q as se,K as C,aq as ie,L as oe,q as _,a6 as je,N as ga,O as _a,P as De,R as ee,Z,an as Ze,at as ba,T as le,W as ka,aH as ge,aI as _e,U as wa,aJ as Oe,aC as $a,$ as qe,ax as Je,i as Xe,X as He,Y as Qe,aK as ya,aL as Ae,aM as ne,aN as Aa,ap as ea,aO as Ta,aw as za,aP as Ma,_ as Le,E as O,aQ as Sa,au as Ea,as as xa,az as Se,aR as Na,aS as Ca,M as Ia,aT as ja,aA as aa,aU as Ha,aV as La,al as Da,aW as Oa,aX as qa,aY as Pa,aZ as Ra,a_ as Ba,a$ as Va,V as Wa,b0 as Fa,C as ta,b1 as be,B as E,F as ia,G as p,I as w,e as Pe,v as ve,H as d,y as q,z as H,aE as Ua,b2 as Ga,D as j,b3 as ce,aD as Ee,a4 as pe,A as Ya,b4 as Ka,a3 as Za,b5 as Ja}from"../chunks/mHrQFMhc.js";import{i as Xa,a as Qa,c as et,d as ke,n as at,b as tt,s as V,e as it,f as st}from"../chunks/BqmUDT_o.js";import{b as J}from"../chunks/EfxuZNnA.js";import{l as B,p as te,s as F,i as G}from"../chunks/BZkIhGgB.js";function rt(e,a){if(a){const t=document.body;e.autofocus=!0,Ye(()=>{document.activeElement===t&&e.focus()})}}let Re=!1;function ot(){Re||(Re=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const a of e.target.elements)a.__on_r?.()})},{capture:!0}))}function lt(e,a){return a}function nt(e,a,t){for(var i=e.items,s=[],o=a.length,r=0;r<o;r++)Ta(a[r].e,s,!0);var l=o>0&&s.length===0&&t!==null;if(l){var h=t.parentNode;za(h),h.append(t),i.clear(),K(e,a[0].prev,a[o-1].next)}Ma(s,()=>{for(var v=0;v<o;v++){var m=a[v];l||(i.delete(m.k),K(e,m.prev,m.next)),ne(m.e,!l)}})}function X(e,a,t,i,s,o=null){var r=e,l={flags:a,items:new Map,first:null},h=(a&Ke)!==0;if(h){var v=e;r=C?se(ie(v)):v.appendChild(Ie())}C&&oe();var m=null,b=!1,f=new Map,$=je(()=>{var T=t();return Xe(T)?T:T==null?[]:Je(T)}),c,g;function k(){ct(g,c,l,f,r,s,a,i,t),o!==null&&(c.length===0?m?He(m):m=le(()=>o(r)):m!==null&&Qe(m,()=>{m=null}))}me(()=>{g??=Le,c=_($);var T=c.length;if(b&&T===0)return;b=T===0;let y=!1;if(C){var S=ga(r)===_a;S!==(T===0)&&(r=De(),se(r),ee(!1),y=!0)}if(C){for(var A=null,M,n=0;n<T;n++){if(Z.nodeType===Ze&&Z.data===ba){r=Z,y=!0,ee(!1);break}var u=c[n],z=i(u,n);M=xe(Z,l,A,null,u,z,n,s,a,t),l.items.set(z,M),A=M}T>0&&se(De())}if(C)T===0&&o&&(m=le(()=>o(r)));else if(ka()){var I=new Set,N=wa;for(n=0;n<T;n+=1){u=c[n],z=i(u,n);var D=l.items.get(z)??f.get(z);D?(a&(ge|_e))!==0&&sa(D,u,n,a):(M=xe(null,l,null,null,u,z,n,s,a,t,!0),f.set(z,M)),I.add(z)}for(const[L,Y]of l.items)I.has(L)||N.skipped_effects.add(Y.e);N.add_callback(k)}else k();y&&ee(!0),_($)}),C&&(r=Z)}function ct(e,a,t,i,s,o,r,l,h){var v=(r&Aa)!==0,m=(r&(ge|_e))!==0,b=a.length,f=t.items,$=t.first,c=$,g,k=null,T,y=[],S=[],A,M,n,u;if(v)for(u=0;u<b;u+=1)A=a[u],M=l(A,u),n=f.get(M),n!==void 0&&(n.a?.measure(),(T??=new Set).add(n));for(u=0;u<b;u+=1){if(A=a[u],M=l(A,u),n=f.get(M),n===void 0){var z=i.get(M);if(z!==void 0){i.delete(M),f.set(M,z);var I=k?k.next:c;K(t,k,z),K(t,z,I),Te(z,I,s),k=z}else{var N=c?c.e.nodes_start:s;k=xe(N,t,k,k===null?t.first:k.next,A,M,u,o,r,h)}f.set(M,k),y=[],S=[],c=k.next;continue}if(m&&sa(n,A,u,r),(n.e.f&Ae)!==0&&(He(n.e),v&&(n.a?.unfix(),(T??=new Set).delete(n))),n!==c){if(g!==void 0&&g.has(n)){if(y.length<S.length){var D=S[0],L;k=D.prev;var Y=y[0],de=y[y.length-1];for(L=0;L<y.length;L+=1)Te(y[L],D,s);for(L=0;L<S.length;L+=1)g.delete(S[L]);K(t,Y.prev,de.next),K(t,k,Y),K(t,de,D),c=D,k=de,u-=1,y=[],S=[]}else g.delete(n),Te(n,c,s),K(t,n.prev,n.next),K(t,n,k===null?t.first:k.next),K(t,k,n),k=n;continue}for(y=[],S=[];c!==null&&c.k!==M;)(c.e.f&Ae)===0&&(g??=new Set).add(c),S.push(c),c=c.next;if(c===null)continue;n=c}y.push(n),k=n,c=n.next}if(c!==null||g!==void 0){for(var P=g===void 0?[]:Je(g);c!==null;)(c.e.f&Ae)===0&&P.push(c),c=c.next;var R=P.length;if(R>0){var Q=(r&Ke)!==0&&b===0?s:null;if(v){for(u=0;u<R;u+=1)P[u].a?.measure();for(u=0;u<R;u+=1)P[u].a?.fix()}nt(t,P,Q)}}v&&Ye(()=>{if(T!==void 0)for(n of T)n.a?.apply()}),e.first=t.first&&t.first.e,e.last=k&&k.e;for(var we of i.values())ne(we.e);i.clear()}function sa(e,a,t,i){(i&ge)!==0&&Oe(e.v,a),(i&_e)!==0?Oe(e.i,t):e.i=t}function xe(e,a,t,i,s,o,r,l,h,v,m){var b=(h&ge)!==0,f=(h&ya)===0,$=b?f?$a(s,!1,!1):qe(s):s,c=(h&_e)===0?r:qe(r),g={i:c,v:$,k:o,a:null,e:null,prev:t,next:i};try{if(e===null){var k=document.createDocumentFragment();k.append(e=Ie())}return g.e=le(()=>l(e,$,c,v),C),g.e.prev=t&&t.e,g.e.next=i&&i.e,t===null?m||(a.first=g):(t.next=g,t.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{}}function Te(e,a,t){for(var i=e.next?e.next.e.nodes_start:t,s=a?a.e.nodes_start:t,o=e.e.nodes_start;o!==null&&o!==i;){var r=ea(o);s.before(o),o=r}}function K(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function dt(e,a,t=!1,i=!1,s=!1){var o=e,r="";O(()=>{var l=Le;if(r===(r=a()??"")){C&&oe();return}if(l.nodes_start!==null&&(Sa(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),r!==""){if(C){Z.data;for(var h=oe(),v=h;h!==null&&(h.nodeType!==Ze||h.data!=="");)v=h,h=ea(h);if(h===null)throw Ea(),xa;Se(Z,v),o=se(h);return}var m=r+"";t?m=`<svg>${m}</svg>`:i&&(m=`<math>${m}</math>`);var b=Na(m);if((t||i)&&(b=ie(b)),Se(ie(b),b.lastChild),t||i)for(;ie(b);)o.before(ie(b));else o.before(b)}})}function W(e,a,t,i,s){C&&oe();var o=a.$$slots?.[t],r=!1;o===!0&&(o=a.children,r=!0),o===void 0||o(e,r?()=>i:i)}function vt(e,a,t,i,s,o){let r=C;C&&oe();var l,h,v=null;C&&Z.nodeType===Ca&&(v=Z,oe());var m=C?Z:e,b;me(()=>{const f=a()||null;var $=ja;f!==l&&(b&&(f===null?Qe(b,()=>{b=null,h=null}):f===h?He(b):ne(b)),f&&f!==h&&(b=le(()=>{if(v=C?v:document.createElementNS($,f),Se(v,v),i){C&&Xa(f)&&v.append(document.createComment(""));var c=C?ie(v):v.appendChild(Ie());C&&(c===null?ee(!1):se(c)),i(v,c)}Le.nodes_end=v,m.before(v)})),l=f,l&&(h=l))},Ia),r&&(ee(!0),se(m))}function ut(e,a){var t=void 0,i;me(()=>{t!==(t=a())&&(i&&(ne(i),i=null),t&&(i=le(()=>{aa(()=>t(e))})))})}function ra(e){var a,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(a=0;a<s;a++)e[a]&&(t=ra(e[a]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function ft(){for(var e,a,t=0,i="",s=arguments.length;t<s;t++)(e=arguments[t])&&(a=ra(e))&&(i&&(i+=" "),i+=a);return i}function pt(e){return typeof e=="object"?ft(e):e??""}const Be=[...` 	
\r\f \v\uFEFF`];function ht(e,a,t){var i=e==null?"":""+e;if(a&&(i=i?i+" "+a:a),t){for(var s in t)if(t[s])i=i?i+" "+s:s;else if(i.length)for(var o=s.length,r=0;(r=i.indexOf(s,r))>=0;){var l=r+o;(r===0||Be.includes(i[r-1]))&&(l===i.length||Be.includes(i[l]))?i=(r===0?"":i.substring(0,r))+i.substring(l+1):r=l}}return i===""?null:i}function Ve(e,a=!1){var t=a?" !important;":";",i="";for(var s in e){var o=e[s];o!=null&&o!==""&&(i+=" "+s+": "+o+t)}return i}function ze(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function mt(e,a){if(a){var t="",i,s;if(Array.isArray(a)?(i=a[0],s=a[1]):i=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,r=0,l=!1,h=[];i&&h.push(...Object.keys(i).map(ze)),s&&h.push(...Object.keys(s).map(ze));var v=0,m=-1;const g=e.length;for(var b=0;b<g;b++){var f=e[b];if(l?f==="/"&&e[b-1]==="*"&&(l=!1):o?o===f&&(o=!1):f==="/"&&e[b+1]==="*"?l=!0:f==='"'||f==="'"?o=f:f==="("?r++:f===")"&&r--,!l&&o===!1&&r===0){if(f===":"&&m===-1)m=b;else if(f===";"||b===g-1){if(m!==-1){var $=ze(e.substring(v,m).trim());if(!h.includes($)){f!==";"&&b++;var c=e.substring(v,b).trim();t+=" "+c+";"}}v=b+1,m=-1}}}}return i&&(t+=Ve(i)),s&&(t+=Ve(s,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function oa(e,a,t,i,s,o){var r=e.__className;if(C||r!==t||r===void 0){var l=ht(t,i,o);(!C||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):a?e.className=l:e.setAttribute("class",l)),e.__className=t}else if(o&&s!==o)for(var h in o){var v=!!o[h];(s==null||v!==!!s[h])&&e.classList.toggle(h,v)}return o}function Me(e,a={},t,i){for(var s in t){var o=t[s];a[s]!==o&&(t[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,i))}}function gt(e,a,t,i){var s=e.__style;if(C||s!==a){var o=mt(a,i);(!C||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=a}else i&&(Array.isArray(i)?(Me(e,t?.[0],i[0]),Me(e,t?.[1],i[1],"important")):Me(e,t,i));return i}function Ne(e,a,t=!1){if(e.multiple){if(a==null)return;if(!Xe(a))return Ha();for(var i of e.options)i.selected=a.includes(We(i));return}for(i of e.options){var s=We(i);if(La(s,a)){i.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function _t(e){var a=new MutationObserver(()=>{Ne(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Da(()=>{a.disconnect()})}function We(e){return"__value"in e?e.__value:e.value}const ue=Symbol("class"),fe=Symbol("style"),la=Symbol("is custom element"),na=Symbol("is html");function bt(e){if(C){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var i=e.value;x(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var s=e.checked;x(e,"checked",null),e.checked=s}}};e.__on_r=t,Fa(t),ot()}}function kt(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function x(e,a,t,i){var s=ca(e);C&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=t)&&(a==="loading"&&(e[qa]=t),t==null?e.removeAttribute(a):typeof t!="string"&&da(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function wt(e,a,t,i,s=!1,o=!1){if(C&&s&&e.tagName==="INPUT"){var r=e,l=r.type==="checkbox"?"defaultChecked":"defaultValue";l in t||bt(r)}var h=ca(e),v=h[la],m=!h[na];let b=C&&v;b&&ee(!1);var f=a||{},$=e.tagName==="OPTION";for(var c in a)c in t||(t[c]=null);t.class?t.class=pt(t.class):t[ue]&&(t.class=null),t[fe]&&(t.style??=null);var g=da(e);for(const n in t){let u=t[n];if($&&n==="value"&&u==null){e.value=e.__value="",f[n]=u;continue}if(n==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";oa(e,k,u,i,a?.[ue],t[ue]),f[n]=u,f[ue]=t[ue];continue}if(n==="style"){gt(e,u,a?.[fe],t[fe]),f[n]=u,f[fe]=t[fe];continue}var T=f[n];if(!(u===T&&!(u===void 0&&e.hasAttribute(n)))){f[n]=u;var y=n[0]+n[1];if(y!=="$$")if(y==="on"){const z={},I="$$"+n;let N=n.slice(2);var S=tt(N);if(Qa(N)&&(N=N.slice(0,-7),z.capture=!0),!S&&T){if(u!=null)continue;e.removeEventListener(N,f[I],z),f[I]=null}if(u!=null)if(S)e[`__${N}`]=u,ke([N]);else{let D=function(L){f[n].call(this,L)};f[I]=et(N,e,D,z)}else S&&(e[`__${N}`]=void 0)}else if(n==="style")x(e,n,u);else if(n==="autofocus")rt(e,!!u);else if(!v&&(n==="__value"||n==="value"&&u!=null))e.value=e.__value=u;else if(n==="selected"&&$)kt(e,u);else{var A=n;m||(A=at(A));var M=A==="defaultValue"||A==="defaultChecked";if(u==null&&!v&&!M)if(h[n]=null,A==="value"||A==="checked"){let z=e;const I=a===void 0;if(A==="value"){let N=z.defaultValue;z.removeAttribute(A),z.defaultValue=N,z.value=z.__value=I?N:null}else{let N=z.defaultChecked;z.removeAttribute(A),z.defaultChecked=N,z.checked=I?N:!1}}else e.removeAttribute(n);else M||g.includes(A)&&(v||typeof u!="string")?(e[A]=u,A in h&&(h[A]=Wa)):typeof u!="function"&&x(e,A,u)}}}return b&&ee(!0),f}function Fe(e,a,t=[],i=[],s,o=!1,r=!1){Oa(t,i,l=>{var h=void 0,v={},m=e.nodeName==="SELECT",b=!1;if(me(()=>{var $=a(...l.map(_)),c=wt(e,h,$,s,o,r);b&&m&&"value"in $&&Ne(e,$.value);for(let k of Object.getOwnPropertySymbols(v))$[k]||ne(v[k]);for(let k of Object.getOwnPropertySymbols($)){var g=$[k];k.description===Ba&&(!h||g!==h[k])&&(v[k]&&ne(v[k]),v[k]=le(()=>ut(e,()=>g))),c[k]=g}h=c}),m){var f=e;aa(()=>{Ne(f,h.value,!0),_t(f)})}b=!0})}function ca(e){return e.__attributes??={[la]:e.nodeName.includes("-"),[na]:e.namespaceURI===Pa}}var Ue=new Map;function da(e){var a=e.getAttribute("is")||e.nodeName,t=Ue.get(a);if(t)return t;Ue.set(a,t=[]);for(var i,s=e,o=Element.prototype;o!==s;){i=Va(s);for(var r in i)i[r].set&&t.push(r);s=Ra(s)}return t}/**
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
 */const $t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var yt=be("<svg><!><!></svg>");function U(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]),i=B(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ta(a,!1);let s=te(a,"name",8,void 0),o=te(a,"color",8,"currentColor"),r=te(a,"size",8,24),l=te(a,"strokeWidth",8,2),h=te(a,"absoluteStrokeWidth",8,!1),v=te(a,"iconNode",24,()=>[]);const m=(...c)=>c.filter((g,k,T)=>!!g&&T.indexOf(g)===k).join(" ");ma();var b=yt();Fe(b,(c,g)=>({...$t,...i,width:r(),height:r(),stroke:o(),"stroke-width":c,class:g}),[()=>(ve(h()),ve(l()),ve(r()),Pe(()=>h()?Number(l())*24/Number(r()):l())),()=>(ve(s()),ve(t),Pe(()=>m("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var f=p(b);X(f,1,v,lt,(c,g)=>{var k=Ua(()=>Ga(_(g),2));let T=()=>_(k)[0],y=()=>_(k)[1];var S=q(),A=H(S);vt(A,T,!0,(M,n)=>{Fe(M,()=>({...y()}))}),E(c,S)});var $=w(f);W($,a,"default",{}),d(b),E(e,b),ia()}function At(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];U(e,F({name:"file-text"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function re(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];U(e,F({name:"arrow-up-right"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function Tt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"}],["path",{d:"M20.054 15.987H3.946"}]];U(e,F({name:"laptop"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function zt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}]];U(e,F({name:"blocks"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function Mt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];U(e,F({name:"cpu"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}var St=j('<li class="tech-item svelte-1bmiiuv"><img class="tech-logo svelte-1bmiiuv" referrerpolicy="no-referrer"/> <span> </span></li>'),Et=j('<li class="svelte-1bmiiuv"><span class="discipline-icon svelte-1bmiiuv"><!></span> <span> </span></li>'),xt=j(`<section class="hero-section svelte-1bmiiuv" id="about"><div class="hero-grid svelte-1bmiiuv"><div class="hero-copy svelte-1bmiiuv"><h1 class="svelte-1bmiiuv">Hello, I am <span class="name-accent svelte-1bmiiuv">Temiloluwa</span> <span class="role-title svelte-1bmiiuv">Software Developer</span></h1> <p class="lead svelte-1bmiiuv">I am a software developer with 5+ years of experience building products across web,
				blockchain, systems, and embedded spaces. I design and ship reliable software that balances
				product thinking, engineering quality, and real-world usability.</p> <div class="action-row svelte-1bmiiuv"><a class="primary-action svelte-1bmiiuv"><!> My Resume</a> <a class="secondary-action svelte-1bmiiuv" href="mailto:akintadetemi19@gmail.com">Got a project? <!></a></div> <div class="stack-block svelte-1bmiiuv"><span class="stack-label svelte-1bmiiuv">Core Stack</span> <ul class="tech-list svelte-1bmiiuv"></ul></div></div> <div class="hero-visual svelte-1bmiiuv"><figure class="portrait-frame svelte-1bmiiuv"><div class="portrait-media svelte-1bmiiuv"><img alt="Temiloluwa Akintade, software developer" width="400" height="500" fetchpriority="high" referrerpolicy="no-referrer" class="svelte-1bmiiuv"/></div> <figcaption class="portrait-caption svelte-1bmiiuv"><strong class="svelte-1bmiiuv">5+ Years</strong> <span class="svelte-1bmiiuv">Web · Blockchain · Systems</span></figcaption></figure></div></div> <div class="about-band svelte-1bmiiuv"><div class="about-copy svelte-1bmiiuv"><h2 class="svelte-1bmiiuv">About me</h2> <p class="svelte-1bmiiuv">I have spent the last 5+ years building software across the stack — from polished web
				experiences to smart contract and onchain product work, low-level systems, and embedded
				prototypes.</p> <p class="svelte-1bmiiuv">My stack spans React, Next.js, TailwindCSS, Svelte, TypeScript, Solidity, Foundry, C, and
				Arduino. I enjoy turning ambitious ideas into real, usable products that work in the wild.</p></div> <div class="about-disciplines svelte-1bmiiuv"><h3 class="svelte-1bmiiuv">What I build</h3> <ul class="svelte-1bmiiuv"></ul></div></div></section>`);function Nt(e){const a=[{id:0,name:"React",logo:"https://cdn.simpleicons.org/react/61dafb"},{id:1,name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/f4f4f5"},{id:2,name:"Tailwind",logo:"https://cdn.simpleicons.org/tailwindcss/38bdf8"},{id:3,name:"Svelte",logo:"https://cdn.simpleicons.org/svelte/ff3e00"},{id:4,name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6"},{id:5,name:"Solidity",logo:"https://cdn.simpleicons.org/solidity/a78bfa"},{id:6,name:"Foundry",logo:"https://cdn.simpleicons.org/ethereum/e4e4e7"},{id:7,name:"C",logo:"https://cdn.simpleicons.org/c/60a5fa"},{id:8,name:"Arduino",logo:"https://cdn.simpleicons.org/arduino/00b4bd"}],t=[{name:"Web Application Development",icon:Tt},{name:"Smart Contract Development & dApp Integration",icon:zt},{name:"Systems & Embedded Software Development",icon:Mt}];var i=xt(),s=p(i),o=p(s),r=w(p(o),4),l=p(r),h=p(l);At(h,{size:17}),ce(),d(l);var v=w(l,2),m=w(p(v));re(m,{size:16}),d(v),d(r);var b=w(r,2),f=w(p(b),2);X(f,5,()=>a,A=>A.id,(A,M)=>{var n=St(),u=p(n),z=w(u,2),I=p(z,!0);d(z),d(n),O(()=>{x(u,"src",_(M).logo),x(u,"alt",`${_(M).name} logo`),V(I,_(M).name)}),E(A,n)}),d(f),d(b),d(o);var $=w(o,2),c=p($),g=p(c),k=p(g);d(g),ce(2),d(c),d($),d(s);var T=w(s,2),y=w(p(T),2),S=w(p(y),2);X(S,5,()=>t,A=>A.name,(A,M)=>{const n=je(()=>_(M).icon);var u=Et(),z=p(u),I=p(z);_(n)(I,{size:18}),d(z);var N=w(z,2),D=p(N,!0);d(N),d(u),O(()=>V(D,_(M).name)),E(A,u)}),d(S),d(y),d(T),d(i),O(()=>{x(l,"href",`${J??""}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf`),x(k,"src",`${J??""}/images/temiloluwa-peerlist.jpg`)}),E(e,i)}function Ct(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];U(e,F({name:"mail"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function It(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];U(e,F({name:"linkedin"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function Ce(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];U(e,F({name:"github"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function jt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];U(e,F({name:"book-open"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function Ht(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];U(e,F({name:"heart"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function Lt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];U(e,F({name:"menu"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}function va(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];U(e,F({name:"x"},()=>t,{get iconNode(){return i},children:(s,o)=>{var r=q(),l=H(r);W(l,a,"default",{}),E(s,r)},$$slots:{default:!0}}))}var Dt=be('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z"></path></svg>'),Ot=be('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>'),qt=j('<a class="svelte-1w9k76x"><!></a>'),Pt=j(`<section class="contact-section svelte-1w9k76x" id="contacts"><div class="contact-panel svelte-1w9k76x"><div class="contact-copy svelte-1w9k76x"><span class="kicker svelte-1w9k76x">Contact</span> <h2 class="svelte-1w9k76x">Let’s build something meaningful.</h2> <p class="svelte-1w9k76x">I work across product, web, blockchain, and platform engineering — from frontend experiences
				to robust backend and systems work.</p></div> <div class="contact-actions svelte-1w9k76x"><a class="primary-contact svelte-1w9k76x" href="mailto:akintadetemi19@gmail.com">Book a call <!></a> <div class="social-links svelte-1w9k76x"></div></div></div></section>`);function Rt(e){const a=[{id:0,icon:Ct,link:"mailto:akintadetemi19@gmail.com",name:"Email"},{id:1,customSvg:"discord",link:"https://discord.com/users/1061727196953190440",name:"Discord"},{id:2,customSvg:"x",link:"https://x.com/Temi_tade2805",name:"X"},{id:3,icon:It,link:"https://linkedin.com/in/temiloluwa-akintade-4b6798254",name:"LinkedIn"},{id:4,icon:Ce,link:"https://github.com/Temi-Tade",name:"GitHub"}];var t=Pt(),i=p(t),s=w(p(i),2),o=p(s),r=w(p(o));re(r,{size:17}),d(o);var l=w(o,2);X(l,5,()=>a,h=>h.id,(h,v)=>{var m=qt(),b=p(m);{var f=c=>{var g=Dt();E(c,g)},$=c=>{var g=q(),k=H(g);{var T=S=>{var A=Ot();E(S,A)},y=S=>{var A=q(),M=H(A);{var n=u=>{const z=je(()=>_(v).icon);_(z)(u,{size:19})};G(M,u=>{_(v).icon&&u(n)},!0)}E(S,A)};G(k,S=>{_(v).customSvg==="discord"?S(T):S(y,!1)},!0)}E(c,g)};G(b,c=>{_(v).customSvg==="x"?c(f):c($,!1)})}d(m),O((c,g)=>{x(m,"href",_(v).link),x(m,"title",_(v).name),x(m,"aria-label",_(v).name),x(m,"target",c),x(m,"rel",g)},[()=>_(v).link.startsWith("http")?"_blank":void 0,()=>_(v).link.startsWith("http")?"noreferrer":void 0]),E(h,m)}),d(l),d(s),d(i),d(t),E(e,t)}function Ge(e,a){pe(a,!1)}var Bt=j('<li><a class="nav-link svelte-1j7efyp"> </a></li>'),Vt=(e,a)=>pe(a,!_(a)),Wt=j('<section class="topbar svelte-1j7efyp"><header class="nav-shell svelte-1j7efyp"><a href="#top" class="brand svelte-1j7efyp" aria-label="Temiloluwa home page"><img alt="Temiloluwa" class="svelte-1j7efyp"/></a> <nav aria-label="Main navigation"><ul class="svelte-1j7efyp"><!> <li class="mobile-cta-item svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta mobile-cta svelte-1j7efyp">Hire me</a></li></ul></nav> <div class="nav-actions svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta desktop-cta svelte-1j7efyp">Hire me</a> <button type="button" class="menu-button svelte-1j7efyp" aria-label="Toggle navigation menu"><!></button></div></header></section>');function Ft(e){const a=[{id:0,name:"Home",href:"#top"},{id:1,name:"About",href:"#about"},{id:2,name:"Projects",href:"#projects"},{id:3,name:"Articles",href:"#articles"},{id:4,name:"Contacts",href:"#contacts"}];let t=Ee(!1);var i=Wt(),s=p(i),o=p(s),r=p(o);d(o);var l=w(o,2);let h;var v=p(l),m=p(v);X(m,17,()=>a,y=>y.id,(y,S)=>{var A=Bt(),M=p(A);M.__click=[Ge,t];var n=p(M,!0);d(M),d(A),O(()=>{x(M,"href",_(S).href),V(n,_(S).name)}),E(y,A)});var b=w(m,2),f=p(b);f.__click=[Ge,t],d(b),d(v),d(l);var $=w(l,2),c=w(p($),2);c.__click=[Vt,t];var g=p(c);{var k=y=>{va(y,{size:20})},T=y=>{Lt(y,{size:20})};G(g,y=>{_(t)?y(k):y(T,!1)})}d(c),d($),d(s),d(i),O(y=>{x(r,"src",`${J??""}/images/TEEE.png`),h=oa(l,1,"nav-panel svelte-1j7efyp",null,h,y),x(c,"aria-expanded",_(t))},[()=>({open:_(t)})]),E(e,i)}ke(["click"]);var Ut=(e,a)=>{e.target===e.currentTarget&&a.onClose()},Gt=(e,a)=>a.onClose(),Yt=j('<div class="modal-backdrop svelte-16ml2tb" aria-modal="true" role="dialog" tabindex="-1"><div class="modal-panel svelte-16ml2tb"><button type="button" class="close-button svelte-16ml2tb" aria-label="Close modal"><!></button> <!></div></div>');function Kt(e,a){ta(a,!0);function t(h){h.key==="Escape"&&a.onClose()}var i=Yt();it("keydown",Ka,t),i.__click=[Ut,a];var s=p(i),o=p(s);o.__click=[Gt,a];var r=p(o);va(r,{size:18}),d(o);var l=w(o,2);Ya(l,()=>a.children),d(s),d(i),E(e,i),ia()}ke(["click"]);var Zt=j('<a target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc"><!> GitHub</a>'),Jt=j('<h3 class="modal-title svelte-181xidc"> </h3> <div class="modal-image-wrap svelte-181xidc"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></div> <p class="modal-desc svelte-181xidc"> </p> <div class="modal-actions svelte-181xidc"><!> <a target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project <!></a></div>',1),Xt=(e,a,t,i)=>{pe(a,{name:_(t).name,image:_(t).image,description:_(t).description,link:_(t).link,github:_(t).github??""},!0),pe(i,!0)},Qt=be('<svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-label="Hardhat" fill="none" class="svelte-181xidc"><path d="M12 4.5c-4.2 0-7.5 3.2-7.5 7.3V15h15v-3.2c0-4.1-3.3-7.3-7.5-7.3Z" fill="#FACC15"></path><path d="M10.25 4.75V12h3.5V4.75a7.5 7.5 0 0 0-3.5 0Z" fill="#FEF08A"></path><rect x="2.5" y="14.5" width="19" height="3" rx="1.5" fill="#EAB308"></rect></svg>'),ei=j('<img width="18" height="18" loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/>'),ai=j('<li class="stack-icon svelte-181xidc"><!></li>'),ti=j('<a target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc"><!> GitHub</a>'),ii=j('<li class="project-card svelte-181xidc"><button type="button" class="image-button svelte-181xidc"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></button> <div class="project-body svelte-181xidc"><div class="project-header svelte-181xidc"><h3 class="svelte-181xidc"> </h3></div> <p class="project-description svelte-181xidc"> </p> <ul class="project-stack svelte-181xidc"></ul> <p class="project-tags svelte-181xidc"> </p> <div class="project-actions svelte-181xidc"><!> <a target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project <!></a></div></div></li>'),si=j('<section class="projects-section svelte-181xidc" id="projects"><!> <div class="section-heading svelte-181xidc"><div><span class="kicker svelte-181xidc">Selected work</span> <h2 class="svelte-181xidc">Builds that span product, blockchain, and systems thinking.</h2></div> <a href="https://github.com/Temi-Tade" target="_blank" rel="noreferrer" class="github-inline svelte-181xidc">Visit my GitHub <!></a></div> <ul class="projects-grid svelte-181xidc"></ul></section>');function ri(e){let a=Ee(Za({name:"",image:"",description:"",link:"",github:""})),t=Ee(!1);const i={nextjs:{name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/f4f4f5"},typescript:{name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6"},supabase:{name:"Supabase",logo:"https://cdn.simpleicons.org/supabase/3ecf8e"},tailwindcss:{name:"Tailwind CSS",logo:"https://cdn.simpleicons.org/tailwindcss/38bdf8"},react:{name:"React",logo:"https://cdn.simpleicons.org/react/61dafb"},javascript:{name:"JavaScript",logo:"https://cdn.simpleicons.org/javascript/f7df1e"},nodejs:{name:"Node.js",logo:"https://cdn.simpleicons.org/nodedotjs/5fa04e"},hardhat:{name:"Hardhat",custom:"hardhat"},c:{name:"C",logo:"https://cdn.simpleicons.org/c/60a5fa"}},s=[{id:4,name:"ShipTok",link:"https://shiptok-app.vercel.app",description:"A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.",stack:[i.nextjs,i.typescript,i.supabase,i.tailwindcss],tags:["Web App","Social","Makers","Discovery"],image:`${J}/images/shiptok.png`},{id:5,name:"Ohm-E",link:"https://github.com/Temi-Tade/Ohm-E",github:"https://github.com/Temi-Tade/Ohm-E",description:"An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.",stack:[i.react,i.typescript,i.tailwindcss],tags:["Electronics","Simulation","Interactive","Web App"],image:`${J}/images/ohm-e.png`},{id:0,name:"RivETH",link:"https://temi-tade.github.io/RivETHDocs",github:"https://github.com/Temi-Tade/RivETH",description:"An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.",stack:[i.javascript,i.nodejs,i.hardhat],tags:["Ethereum","Smart Contracts","Open Source","Dev Tools"],image:`${J}/images/riveth.png`},{id:1,name:"qodon",link:"https://github.com/Temi-Tade/qodon",github:"https://github.com/Temi-Tade/qodon",description:"A CLI-based genomics tool. Written in C.",stack:[i.c],tags:["CLI","Genomics","Bioinformatics","C"],image:`${J}/images/qdn_qft.png`},{id:2,name:"Medusa",link:"https://temi-tade.github.io/medusa",github:"https://github.com/Temi-Tade/medusa",description:"A password-based file encryption tool with lossless decryption.",stack:[i.javascript],tags:["Encryption","Security","File Management"],image:`${J}/images/medusa.png`},{id:3,name:"Skaylar",link:"https://temi-tade.github.io/Skaylar",github:"https://github.com/Temi-Tade/Skaylar",description:"A tool for analysing and visualizing first-digit distributions using Benford's Law.",stack:[i.javascript],tags:["Data Analysis","Visualization","Benford's Law","Statistics"],image:`${J}/images/Skaylar.png`}];var o=si(),r=p(o);{var l=f=>{Kt(f,{onClose:()=>pe(t,!1),children:($,c)=>{var g=Jt(),k=H(g),T=p(k,!0);d(k);var y=w(k,2),S=p(y);d(y);var A=w(y,2),M=p(A,!0);d(A);var n=w(A,2),u=p(n);{var z=D=>{var L=Zt(),Y=p(L);Ce(Y,{size:16}),ce(),d(L),O(()=>x(L,"href",_(a).github)),E(D,L)};G(u,D=>{_(a).github&&D(z)})}var I=w(u,2),N=w(p(I));re(N,{size:16}),d(I),d(n),O(()=>{V(T,_(a).name),x(S,"src",_(a).image),x(S,"alt",_(a).description),V(M,_(a).description),x(I,"href",_(a).link)}),E($,g)},$$slots:{default:!0}})};G(r,f=>{_(t)&&f(l)})}var h=w(r,2),v=w(p(h),2),m=w(p(v));re(m,{size:16}),d(v),d(h);var b=w(h,2);X(b,21,()=>s,f=>f.id,(f,$)=>{var c=ii(),g=p(c);g.__click=[Xt,a,$,t];var k=p(g);d(g);var T=w(g,2),y=p(T),S=p(y),A=p(S,!0);d(S),d(y);var M=w(y,2),n=p(M,!0);d(M);var u=w(M,2);X(u,21,()=>_($).stack,P=>P.name,(P,R)=>{var Q=ai(),we=p(Q);{var ua=ae=>{var he=Qt();E(ae,he)},fa=ae=>{var he=q(),pa=H(he);{var ha=$e=>{var ye=ei();O(()=>{x(ye,"src",_(R).logo),x(ye,"alt",_(R).name)}),E($e,ye)};G(pa,$e=>{_(R).logo&&$e(ha)},!0)}E(ae,he)};G(we,ae=>{_(R).custom==="hardhat"?ae(ua):ae(fa,!1)})}d(Q),O(()=>x(Q,"title",_(R).name)),E(P,Q)}),d(u);var z=w(u,2),I=p(z,!0);d(z);var N=w(z,2),D=p(N);{var L=P=>{var R=ti(),Q=p(R);Ce(Q,{size:15}),ce(),d(R),O(()=>x(R,"href",_($).github)),E(P,R)};G(D,P=>{_($).github&&P(L)})}var Y=w(D,2),de=w(p(Y));re(de,{size:15}),d(Y),d(N),d(T),d(c),O(P=>{x(g,"aria-label",`Inspect ${_($).name} screenshot`),x(k,"src",_($).image),x(k,"alt",_($).description),V(A,_($).name),V(n,_($).description),x(u,"aria-label",`${_($).name} tech stack`),V(I,P),x(Y,"href",_($).link)},[()=>_($).tags.join(" · ")]),E(f,c)}),d(b),d(o),E(e,o)}ke(["click"]);var oi=j('<span class="sep svelte-m39zqz" aria-hidden="true">·</span> <time class="svelte-m39zqz"> </time>',1),li=j('<li class="article-card svelte-m39zqz"><div class="article-meta svelte-m39zqz"><span class="svelte-m39zqz"> </span> <!></div> <h3 class="svelte-m39zqz"> </h3> <p class="svelte-m39zqz"> </p> <a target="_blank" rel="noreferrer" class="read-link svelte-m39zqz">Read article <!></a></li>'),ni=j('<span class="sep svelte-m39zqz" aria-hidden="true">·</span>'),ci=j('<!> <a target="_blank" rel="noreferrer" class="svelte-m39zqz"> </a>',1),di=j('<section class="articles-section svelte-m39zqz" id="articles"><div class="section-heading svelte-m39zqz"><div><span class="kicker svelte-m39zqz">Writing &amp; ideas</span> <h2 class="svelte-m39zqz">Articles &amp; publications</h2> <p class="section-sub svelte-m39zqz">Notes on software, security, and the ideas behind the things I build.</p></div></div> <ul class="articles-grid svelte-m39zqz"></ul> <div class="publication-links svelte-m39zqz" aria-label="More publications"><span class="pub-label svelte-m39zqz"><!> Find me on</span> <div class="pub-items svelte-m39zqz"></div></div></section>');function vi(e){const a=[{id:0,title:"I built Medusa - A lossless password-based file encryption tool",publication:"DEV Community",published:"Aug 29, 2026",preview:"A quick look at Medusa, an open-source, client-side file encryption tool built for lossless decryption.",href:"https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip"},{id:1,title:"Are computers truly random? How chaos powers randomness.",publication:"DEV Community",published:"Jul 15, 2026",preview:"An exploration of how computers generate randomness and the role chaos plays in the process.",href:"https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93"},{id:2,title:"Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)",publication:"CoderLegion",preview:"A look at how secure elements and carefully limited USB or Bluetooth connections let hardware wallets sign transactions without exposing private keys.",href:"https://coderlegion.com/20141/how-do-web3-hardware-wallets-work"},{id:3,title:"Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs",publication:"CoderLegion",preview:"The story behind a lightweight, browser-based Ethereum toolkit that helps developers compile, deploy, and interact with smart contracts locally.",href:"https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs"}],t=[{name:"Dev.to",href:"https://dev.to/js_cipher"},{name:"Medium",href:"https://medium.com/@temi_lolu0x0"},{name:"CoderLegion",href:"https://coderlegion.com/user/temi_0x0"},{name:"Peerlist",href:"https://peerlist.io/temi_lolu"}];var i=di(),s=w(p(i),2);X(s,5,()=>a,v=>v.id,(v,m)=>{var b=li(),f=p(b),$=p(f),c=p($,!0);d($);var g=w($,2);{var k=u=>{var z=oi(),I=w(H(z),2),N=p(I,!0);d(I),O(()=>V(N,_(m).published)),E(u,z)};G(g,u=>{_(m).published&&u(k)})}d(f);var T=w(f,2),y=p(T,!0);d(T);var S=w(T,2),A=p(S,!0);d(S);var M=w(S,2),n=w(p(M));re(n,{size:16}),d(M),d(b),O(()=>{V(c,_(m).publication),V(y,_(m).title),V(A,_(m).preview),x(M,"href",_(m).href)}),E(v,b)}),d(s);var o=w(s,2),r=p(o),l=p(r);jt(l,{size:15}),ce(),d(r);var h=w(r,2);X(h,7,()=>t,v=>v.name,(v,m,b)=>{var f=ci(),$=H(f);{var c=T=>{var y=ni();E(T,y)};G($,T=>{_(b)>0&&T(c)})}var g=w($,2),k=p(g,!0);d(g),O(()=>{x(g,"href",_(m).href),V(k,_(m).name)}),E(v,f)}),d(h),d(o),d(i),E(e,i)}var ui=j('<meta name="description" content="Temiloluwa Akintade is a software developer building thoughtful web applications, blockchain products, smart contracts, systems, and embedded software."/> <meta name="author" content="Temiloluwa Akintade"/> <link rel="canonical"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Temiloluwa Akintade | Software Developer"/> <meta property="og:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta property="og:url"/> <meta property="og:image"/> <meta property="og:image:alt" content="Temiloluwa Akintade, software developer"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Temiloluwa Akintade | Software Developer"/> <meta name="twitter:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta name="twitter:image"/> <!>',1),fi=j('<div class="page-shell svelte-1uha8ag" id="top"><!> <main class="content-shell svelte-1uha8ag"><!> <!> <!> <!></main> <footer class="site-footer svelte-1uha8ag"><p class="svelte-1uha8ag">Made with <!> by Temiloluwa. All rights reserved.</p></footer></div>');function ki(e){const a="https://temi-tade.github.io/portfolio-website/",t={"@context":"https://schema.org","@type":"Person",name:"Temiloluwa Akintade",url:a,jobTitle:"Software Developer",description:"Software developer building web applications, blockchain products, smart contracts, systems, and embedded software.",sameAs:["https://github.com/Temi-Tade","https://x.com/Temi_tade2805","https://linkedin.com/in/temiloluwa-akintade-4b6798254","https://dev.to/js_cipher","https://medium.com/@temi_lolu0x0","https://coderlegion.com/user/temi_0x0","https://peerlist.io/temi_lolu"]};var i=fi();st($=>{var c=ui();Ja.title="Temiloluwa Akintade | Software Developer";var g=w(H(c),4);x(g,"href",a);var k=w(g,8);x(k,"content",a);var T=w(k,2);x(T,"content",`${a}images/temiloluwa-peerlist.jpg`);var y=w(T,10);x(y,"content",`${a}images/temiloluwa-peerlist.jpg`);var S=w(y,2);dt(S,()=>`<script type="application/ld+json">${JSON.stringify(t)}<\/script>`),E($,c)});var s=p(i);Ft(s);var o=w(s,2),r=p(o);Nt(r);var l=w(r,2);ri(l);var h=w(l,2);vi(h);var v=w(h,2);Rt(v),d(o);var m=w(o,2),b=p(m),f=w(p(b));Ht(f,{fill:"red",size:16,style:"vertical-align: middle;"}),ce(),d(b),d(m),d(i),E(e,i)}export{ki as component};
