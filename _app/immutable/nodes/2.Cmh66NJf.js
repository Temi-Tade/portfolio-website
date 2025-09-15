import"../chunks/DsnmJJEf.js";import{i as it}from"../chunks/M6xf5ahw.js";import{N as Le,a3 as $e,a7 as de,aE as ze,W as oe,a5 as E,Q as He,X as le,q as M,ao as Oe,a9 as st,aa as nt,ab as Ne,V as Y,Y as q,R as ot,Z as lt,a4 as Z,ae as dt,aF as ce,aG as fe,ac as ct,aH as ye,aA as ft,ah as xe,a1 as Re,i as Ve,af as we,ag as De,aI as ut,aJ as he,aK as Q,aL as vt,T as ht,aM as pt,a0 as gt,aN as mt,M as We,aO as _t,a8 as bt,aP as $t,a6 as wt,ay as Ge,aQ as At,aR as Nt,aS as yt,aT as xt,aU as Mt,ad as kt,aV as Tt,aW as St,aX as Et,aY as It,aZ as Ct,C as Je,a_ as Pt,B as T,F as Fe,G as g,e as Me,v as ie,I as k,H as v,y as L,z as P,aC as je,a$ as Lt,D as G,b0 as J,E as B,am as Ae,aB as qe,A as zt,al as Ht}from"../chunks/ClFD-jiw.js";import{i as Ot,a as Rt,c as Vt,d as ue,n as Dt,b as Wt,s as U}from"../chunks/BtT5eWpJ.js";import{l as C,p as X,s as H,i as Ke,c as Gt}from"../chunks/qImXfeQU.js";function Jt(e,t){if(t){const a=document.body;e.autofocus=!0,Le(()=>{document.activeElement===a&&e.focus()})}}let ke=!1;function Ft(){ke||(ke=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Ue(e,t){return t}function jt(e,t,a){for(var r=e.items,i=[],n=t.length,s=0;s<n;s++)pt(t[s].e,i,!0);var o=n>0&&i.length===0&&a!==null;if(o){var _=a.parentNode;gt(_),_.append(a),r.clear(),F(e,t[0].prev,t[n-1].next)}mt(i,()=>{for(var u=0;u<n;u++){var b=t[u];o||(r.delete(b.k),F(e,b.prev,b.next)),Q(b.e,!o)}})}function ee(e,t,a,r,i,n=null){var s=e,o={flags:t,items:new Map,first:null},_=(t&ze)!==0;if(_){var u=e;s=E?oe(He(u)):u.appendChild($e())}E&&le();var b=null,m=!1,c=new Map,w=Oe(()=>{var A=a();return Ve(A)?A:A==null?[]:Re(A)}),d,p;function h(){qt(p,d,o,c,s,i,t,r,a),n!==null&&(d.length===0?b?we(b):b=Z(()=>n(s)):b!==null&&De(b,()=>{b=null}))}de(()=>{p??=We,d=M(w);var A=d.length;if(m&&A===0)return;m=A===0;let N=!1;if(E){var S=st(s)===nt;S!==(A===0)&&(s=Ne(),oe(s),Y(!1),N=!0)}if(E){for(var $=null,x,l=0;l<A;l++){if(q.nodeType===ot&&q.data===lt){s=q,N=!0,Y(!1);break}var f=d[l],y=r(f,l);x=_e(q,o,$,null,f,y,l,i,t,a),o.items.set(y,x),$=x}A>0&&oe(Ne())}if(E)A===0&&n&&(b=Z(()=>n(s)));else if(dt()){var R=new Set,I=ct;for(l=0;l<A;l+=1){f=d[l],y=r(f,l);var V=o.items.get(y)??c.get(y);V?(t&(ce|fe))!==0&&Ye(V,f,l,t):(x=_e(null,o,null,null,f,y,l,i,t,a,!0),c.set(y,x)),R.add(y)}for(const[D,j]of o.items)R.has(D)||I.skipped_effects.add(j.e);I.add_callback(h)}else h();N&&Y(!0),M(w)}),E&&(s=q)}function qt(e,t,a,r,i,n,s,o,_){var u=(s&vt)!==0,b=(s&(ce|fe))!==0,m=t.length,c=a.items,w=a.first,d=w,p,h=null,A,N=[],S=[],$,x,l,f;if(u)for(f=0;f<m;f+=1)$=t[f],x=o($,f),l=c.get(x),l!==void 0&&(l.a?.measure(),(A??=new Set).add(l));for(f=0;f<m;f+=1){if($=t[f],x=o($,f),l=c.get(x),l===void 0){var y=r.get(x);if(y!==void 0){r.delete(x),c.set(x,y);var R=h?h.next:d;F(a,h,y),F(a,y,R),pe(y,R,i),h=y}else{var I=d?d.e.nodes_start:i;h=_e(I,a,h,h===null?a.first:h.next,$,x,f,n,s,_)}c.set(x,h),N=[],S=[],d=h.next;continue}if(b&&Ye(l,$,f,s),(l.e.f&he)!==0&&(we(l.e),u&&(l.a?.unfix(),(A??=new Set).delete(l))),l!==d){if(p!==void 0&&p.has(l)){if(N.length<S.length){var V=S[0],D;h=V.prev;var j=N[0],te=N[N.length-1];for(D=0;D<N.length;D+=1)pe(N[D],V,i);for(D=0;D<S.length;D+=1)p.delete(S[D]);F(a,j.prev,te.next),F(a,h,j),F(a,te,V),d=V,h=te,f-=1,N=[],S=[]}else p.delete(l),pe(l,d,i),F(a,l.prev,l.next),F(a,l,h===null?a.first:h.next),F(a,h,l),h=l;continue}for(N=[],S=[];d!==null&&d.k!==x;)(d.e.f&he)===0&&(p??=new Set).add(d),S.push(d),d=d.next;if(d===null)continue;l=d}N.push(l),h=l,d=l.next}if(d!==null||p!==void 0){for(var K=p===void 0?[]:Re(p);d!==null;)(d.e.f&he)===0&&K.push(d),d=d.next;var ae=K.length;if(ae>0){var re=(s&ze)!==0&&m===0?i:null;if(u){for(f=0;f<ae;f+=1)K[f].a?.measure();for(f=0;f<ae;f+=1)K[f].a?.fix()}jt(a,K,re)}}u&&Le(()=>{if(A!==void 0)for(l of A)l.a?.apply()}),e.first=a.first&&a.first.e,e.last=h&&h.e;for(var ve of r.values())Q(ve.e);r.clear()}function Ye(e,t,a,r){(r&ce)!==0&&ye(e.v,t),(r&fe)!==0?ye(e.i,a):e.i=a}function _e(e,t,a,r,i,n,s,o,_,u,b){var m=(_&ce)!==0,c=(_&ut)===0,w=m?c?ft(i,!1,!1):xe(i):i,d=(_&fe)===0?s:xe(s),p={i:d,v:w,k:n,a:null,e:null,prev:a,next:r};try{if(e===null){var h=document.createDocumentFragment();h.append(e=$e())}return p.e=Z(()=>o(e,w,d,u),E),p.e.prev=a&&a.e,p.e.next=r&&r.e,a===null?b||(t.first=p):(a.next=p,a.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function pe(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,i=t?t.e.nodes_start:a,n=e.e.nodes_start;n!==null&&n!==r;){var s=ht(n);i.before(n),n=s}}function F(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function z(e,t,a,r,i){E&&le();var n=t.$$slots?.[a],s=!1;n===!0&&(n=t.children,s=!0),n===void 0||n(e,s?()=>r:r)}function Kt(e,t,a,r,i,n){let s=E;E&&le();var o,_,u=null;E&&q.nodeType===_t&&(u=q,le());var b=E?q:e,m;de(()=>{const c=t()||null;var w=$t;c!==o&&(m&&(c===null?De(m,()=>{m=null,_=null}):c===_?we(m):Q(m)),c&&c!==_&&(m=Z(()=>{if(u=E?u:document.createElementNS(w,c),wt(u,u),r){E&&Ot(c)&&u.append(document.createComment(""));var d=E?He(u):u.appendChild($e());E&&(d===null?Y(!1):oe(d)),r(u,d)}We.nodes_end=u,b.before(u)})),o=c,o&&(_=o))},bt),s&&(Y(!0),oe(b))}function Ut(e,t){var a=void 0,r;de(()=>{a!==(a=t())&&(r&&(Q(r),r=null),a&&(r=Z(()=>{Ge(()=>a(e))})))})}function Be(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(a=Be(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Yt(){for(var e,t,a=0,r="",i=arguments.length;a<i;a++)(e=arguments[a])&&(t=Be(e))&&(r&&(r+=" "),r+=t);return r}function Bt(e){return typeof e=="object"?Yt(e):e??""}const Te=[...` 	
\r\f \v\uFEFF`];function Xt(e,t,a){var r=e==null?"":""+e;if(a){for(var i in a)if(a[i])r=r?r+" "+i:i;else if(r.length)for(var n=i.length,s=0;(s=r.indexOf(i,s))>=0;){var o=s+n;(s===0||Te.includes(r[s-1]))&&(o===r.length||Te.includes(r[o]))?r=(s===0?"":r.substring(0,s))+r.substring(o+1):s=o}}return r===""?null:r}function Se(e,t=!1){var a=t?" !important;":";",r="";for(var i in e){var n=e[i];n!=null&&n!==""&&(r+=" "+i+": "+n+a)}return r}function ge(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Zt(e,t){if(t){var a="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,o=!1,_=[];r&&_.push(...Object.keys(r).map(ge)),i&&_.push(...Object.keys(i).map(ge));var u=0,b=-1;const p=e.length;for(var m=0;m<p;m++){var c=e[m];if(o?c==="/"&&e[m-1]==="*"&&(o=!1):n?n===c&&(n=!1):c==="/"&&e[m+1]==="*"?o=!0:c==='"'||c==="'"?n=c:c==="("?s++:c===")"&&s--,!o&&n===!1&&s===0){if(c===":"&&b===-1)b=m;else if(c===";"||m===p-1){if(b!==-1){var w=ge(e.substring(u,b).trim());if(!_.includes(w)){c!==";"&&m++;var d=e.substring(u,m).trim();a+=" "+d+";"}}u=m+1,b=-1}}}}return r&&(a+=Se(r)),i&&(a+=Se(i,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function Xe(e,t,a,r,i,n){var s=e.__className;if(E||s!==a||s===void 0){var o=Xt(a,r,n);(!E||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o)),e.__className=a}else if(n&&i!==n)for(var _ in n){var u=!!n[_];(i==null||u!==!!i[_])&&e.classList.toggle(_,u)}return n}function me(e,t={},a,r){for(var i in a){var n=a[i];t[i]!==n&&(a[i]==null?e.style.removeProperty(i):e.style.setProperty(i,n,r))}}function Qt(e,t,a,r){var i=e.__style;if(E||i!==t){var n=Zt(t,r);(!E||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=t}else r&&(Array.isArray(r)?(me(e,a?.[0],r[0]),me(e,a?.[1],r[1],"important")):me(e,a,r));return r}function be(e,t,a=!1){if(e.multiple){if(t==null)return;if(!Ve(t))return At();for(var r of e.options)r.selected=t.includes(Ee(r));return}for(r of e.options){var i=Ee(r);if(Nt(i,t)){r.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function ea(e){var t=new MutationObserver(()=>{be(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),yt(()=>{t.disconnect()})}function Ee(e){return"__value"in e?e.__value:e.value}const se=Symbol("class"),ne=Symbol("style"),Ze=Symbol("is custom element"),Qe=Symbol("is html");function ta(e){if(E){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;W(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var i=e.checked;W(e,"checked",null),e.checked=i}}};e.__on_r=a,Tt(a),Ft()}}function aa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function W(e,t,a,r){var i=et(e);E&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=a)&&(t==="loading"&&(e[It]=a),a==null?e.removeAttribute(t):typeof a!="string"&&tt(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function ra(e,t,a,r,i=!1,n=!1){if(E&&i&&e.tagName==="INPUT"){var s=e,o=s.type==="checkbox"?"defaultChecked":"defaultValue";o in a||ta(s)}var _=et(e),u=_[Ze],b=!_[Qe];let m=E&&u;m&&Y(!1);var c=t||{},w=e.tagName==="OPTION";for(var d in t)d in a||(a[d]=null);a.class?a.class=Bt(a.class):a[se]&&(a.class=null),a[ne]&&(a.style??=null);var p=tt(e);for(const l in a){let f=a[l];if(w&&l==="value"&&f==null){e.value=e.__value="",c[l]=f;continue}if(l==="class"){var h=e.namespaceURI==="http://www.w3.org/1999/xhtml";Xe(e,h,f,r,t?.[se],a[se]),c[l]=f,c[se]=a[se];continue}if(l==="style"){Qt(e,f,t?.[ne],a[ne]),c[l]=f,c[ne]=a[ne];continue}var A=c[l];if(!(f===A&&!(f===void 0&&e.hasAttribute(l)))){c[l]=f;var N=l[0]+l[1];if(N!=="$$")if(N==="on"){const y={},R="$$"+l;let I=l.slice(2);var S=Wt(I);if(Rt(I)&&(I=I.slice(0,-7),y.capture=!0),!S&&A){if(f!=null)continue;e.removeEventListener(I,c[R],y),c[R]=null}if(f!=null)if(S)e[`__${I}`]=f,ue([I]);else{let V=function(D){c[l].call(this,D)};c[R]=Vt(I,e,V,y)}else S&&(e[`__${I}`]=void 0)}else if(l==="style")W(e,l,f);else if(l==="autofocus")Jt(e,!!f);else if(!u&&(l==="__value"||l==="value"&&f!=null))e.value=e.__value=f;else if(l==="selected"&&w)aa(e,f);else{var $=l;b||($=Dt($));var x=$==="defaultValue"||$==="defaultChecked";if(f==null&&!u&&!x)if(_[l]=null,$==="value"||$==="checked"){let y=e;const R=t===void 0;if($==="value"){let I=y.defaultValue;y.removeAttribute($),y.defaultValue=I,y.value=y.__value=R?I:null}else{let I=y.defaultChecked;y.removeAttribute($),y.defaultChecked=I,y.checked=R?I:!1}}else e.removeAttribute(l);else x||p.includes($)&&(u||typeof f!="string")?(e[$]=f,$ in _&&(_[$]=kt)):typeof f!="function"&&W(e,$,f)}}}return m&&Y(!0),c}function Ie(e,t,a=[],r=[],i,n=!1,s=!1){xt(a,r,o=>{var _=void 0,u={},b=e.nodeName==="SELECT",m=!1;if(de(()=>{var w=t(...o.map(M)),d=ra(e,_,w,i,n,s);m&&b&&"value"in w&&be(e,w.value);for(let h of Object.getOwnPropertySymbols(u))w[h]||Q(u[h]);for(let h of Object.getOwnPropertySymbols(w)){var p=w[h];h.description===Mt&&(!_||p!==_[h])&&(u[h]&&Q(u[h]),u[h]=Z(()=>Ut(e,()=>p))),d[h]=p}_=d}),b){var c=e;Ge(()=>{be(c,_.value,!0),ea(c)})}m=!0})}function et(e){return e.__attributes??={[Ze]:e.nodeName.includes("-"),[Qe]:e.namespaceURI===St}}var Ce=new Map;function tt(e){var t=e.getAttribute("is")||e.nodeName,a=Ce.get(t);if(a)return a;Ce.set(t,a=[]);for(var r,i=e,n=Element.prototype;n!==i;){r=Ct(i);for(var s in r)r[s].set&&a.push(s);i=Et(i)}return a}/**
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
 */const ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var sa=Pt("<svg><!><!></svg>");function O(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]),r=C(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Je(t,!1);let i=X(t,"name",8,void 0),n=X(t,"color",8,"currentColor"),s=X(t,"size",8,24),o=X(t,"strokeWidth",8,2),_=X(t,"absoluteStrokeWidth",8,!1),u=X(t,"iconNode",24,()=>[]);const b=(...d)=>d.filter((p,h,A)=>!!p&&A.indexOf(p)===h).join(" ");it();var m=sa();Ie(m,(d,p)=>({...ia,...r,width:s(),height:s(),stroke:n(),"stroke-width":d,class:p}),[()=>(ie(_()),ie(o()),ie(s()),Me(()=>_()?Number(o())*24/Number(s()):o())),()=>(ie(i()),ie(a),Me(()=>b("lucide-icon","lucide",i()?`lucide-${i()}`:"",a.class)))]);var c=g(m);ee(c,1,u,Ue,(d,p)=>{var h=je(()=>Lt(M(p),2));let A=()=>M(h)[0],N=()=>M(h)[1];var S=L(),$=P(S);Kt($,A,!0,(x,l)=>{Ie(x,()=>({...N()}))}),T(d,S)});var w=k(c);z(w,t,"default",{}),v(m),T(e,m),Fe()}function na(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];O(e,H({name:"file"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function oa(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];O(e,H({name:"computer"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function la(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 15h4"}],["path",{d:"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"}],["path",{d:"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"}],["path",{d:"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}]];O(e,H({name:"tool-case"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function da(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];O(e,H({name:"code"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}var ca=G('<p class="rounded-sm p-1 text-lg font-light text-center even:bg-[#d3d3d3] odd:bg-[#c5c5c5]"> </p>'),fa=G('<section class="p-[.75rem]" id="about"><div class="md:grid grid-cols-2"><div class="p-1"><h2 class="text-2xl p-1"><p>Hello, <br/> I am Temiloluwa</p> <p class="text-5xl font-bold">Web Developer</p></h2> <div class="p-1 my-2"><div class="p-1 my-4"><a class="button-link bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900" href="/AKINTADE TEMILOLUWA AYOMIDE CV.pdf"><!> My Resume</a> <button class="text-blue-900 hover:bg-blue-900 hover:text-[#fff]">Got a Project?</button></div> <div class="p-2 grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 gap-1 md:p-[1rem] rounded-sm bg-[#e7e7e7]"></div> <ul class="pt-4 svelte-1bmiiuv"><li class="svelte-1bmiiuv"><p class="svelte-1bmiiuv"><!> <span class="svelte-1bmiiuv">Website and Web App Development</span></p> <hr class="border-[#7777]"/></li> <li class="svelte-1bmiiuv"><p class="svelte-1bmiiuv"><!> <span class="svelte-1bmiiuv">Website and Web App Maintenance</span></p> <hr class="border-[#7777]"/></li> <li class="svelte-1bmiiuv"><p class="svelte-1bmiiuv"><!> <span class="svelte-1bmiiuv">API Integration</span></p> <hr class="border-[#7777]"/></li></ul></div></div> <div class="p-2"><div class="grid place-items-center"><img src="/temiloluwa.jpg" alt="My_Picture" width="400" loading="lazy" class="rounded-lg object-cover mt-[-1rem] bg-[#dedede77]"/></div> <div class="px-2"><h3 class="text-3xl font-bold mb-4 pt-4">About me</h3> <div><p>I am a web developer with over four years of experience in building web applications that solve problems.</p> <p>I am focused on transforming ideas into code from scratch with JavaScript or libraries and frameworks like ReactJS and Svelte among other technologies. I have worked on projects that featured API and AI integration.</p></div></div></div></div></section>');function ua(e){const t=[{id:0,name:"JavaScript"},{id:1,name:"TailwindCSS"},{id:2,name:"Svelte"},{id:3,name:"ReactJS"},{id:4,name:"TypeScript"},{id:5,name:"NextJS"},{id:6,name:"Git"},{id:7,name:"Firebase"}];var a=fa(),r=g(a),i=g(r),n=k(g(i),2),s=g(n),o=g(s),_=g(o);na(_,{class:"inline-block"}),J(),v(o),J(2),v(s);var u=k(s,2);ee(u,5,()=>t,$=>$.id,($,x)=>{var l=ca(),f=g(l,!0);v(l),B(()=>U(f,M(x).name)),T($,l)}),v(u);var b=k(u,2),m=g(b),c=g(m),w=g(c);oa(w,{}),J(2),v(c),J(2),v(m);var d=k(m,2),p=g(d),h=g(p);la(h,{}),J(2),v(p),J(2),v(d);var A=k(d,2),N=g(A),S=g(N);da(S,{}),J(2),v(N),J(2),v(A),v(b),v(n),v(i),J(2),v(r),v(a),T(e,a)}function va(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];O(e,H({name:"mail"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function at(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];O(e,H({name:"x"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ha(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];O(e,H({name:"linkedin"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function rt(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];O(e,H({name:"github"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Pe(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];O(e,H({name:"arrow-up-right"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function pa(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];O(e,H({name:"cog"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ga(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];O(e,H({name:"heart"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ma(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];O(e,H({name:"house"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function _a(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];O(e,H({name:"info"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ba(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];O(e,H({name:"menu"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function $a(e,t){const a=C(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];O(e,H({name:"phone"},()=>a,{get iconNode(){return r},children:(i,n)=>{var s=L(),o=P(s);z(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}var wa=G('<p class="p-1"><a class="inline-block p-2 rounded-[50%] bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900"><!></a></p>'),Aa=G(`<section class="p-3 bg-[#dedede99]" id="contacts"><div class="p-2"><h2 class="text-2xl font-bold">Contacts</h2> <div class="p-2 flex items-center justify-between"><p class="text-xl font-bold">Got a project? Let's talk!</p> <div class="flex"></div></div></div></section>`);function Na(e){const t=[{id:0,icon:va,link:"",name:"Mail"},{id:1,icon:at,link:"",name:"X"},{id:2,icon:ha,link:"",name:"LinkedIn"},{id:3,icon:rt,link:"",name:"GitHub"}];var a=Aa(),r=g(a),i=k(g(r),2),n=k(g(i),2);ee(n,5,()=>t,s=>s.id,(s,o)=>{const _=Oe(()=>M(o).icon);var u=wa(),b=g(u),m=g(b);M(_)(m,{class:"inline"}),v(b),v(u),B(()=>{W(b,"href",M(o).link),W(b,"title",M(o).name)}),T(s,u)}),v(n),v(i),v(r),v(a),T(e,a)}var ya=(e,t)=>Ae(t,!M(t)),xa=G('<li class="w-[23%] grid md:place-items-center"><a class="inline-flex text-center w-[fit-content] text-blue-900 p-1 hover:underline decoration-2"><!> </a></li>'),Ma=G('<section class="sticky top-0 bg-[#fffd] backdrop-blur-md shadow-sm"><header class="flex items-center justify-between p-[.5rem]"><div><img src="/TEEE.png" alt="Temiloluwa" class="md:w-20 w-15"/></div> <div class="md:static fixed right-2 top-2 flex items-top"><div class="md:hidden"><button class="focus:bg-blue-900 focus:text-[#fff] mr-1"><!></button></div> <nav><ul class="flex md:flex-row flex-col p-[.75rem] md:w-[35rem] md:justify-around justify-end"></ul></nav></div></header></section>');function ka(e){const t=[{id:0,name:"Home",href:"#",icon:ma},{id:1,name:"About",href:"#about",icon:_a},{id:2,name:"Projects",href:"#projects",icon:pa},{id:3,name:"Contacts",href:"#contacts",icon:$a}];let a=qe(!1);var r=Ma(),i=g(r),n=k(g(i),2),s=g(n),o=g(s);o.__click=[ya,a];var _=g(o);{var u=w=>{at(w,{})},b=w=>{ba(w,{})};Ke(_,w=>{M(a)?w(u):w(b,!1)})}v(o),v(s);var m=k(s,2),c=g(m);ee(c,21,()=>t,w=>w.id,(w,d)=>{const p=je(()=>M(d).icon);var h=xa(),A=g(h),N=g(A);Gt(N,()=>M(p),($,x)=>{x($,{})});var S=k(N);v(A),v(h),B(()=>{W(A,"href",M(d).href),U(S,` ${M(d).name??""}`)}),T(w,h)}),v(c),v(m),v(n),v(i),v(r),B(()=>Xe(m,1,`md:block ${M(a)?"block rounded-sm shadow-md bg-[#fff]":"hidden"}`)),T(e,r)}ue(["click"]);var Ta=(e,t)=>t.onClose(),Sa=G('<div class="fixed inset-0 bg-[#d7d7d777] backdrop-blur-[1rem]"><div class="p-4 bg-[#fff] absolute bottom-0 right-5 left-5 rounded-t-lg text-center shadow-md"><div class="absolute top-1 right-2"><button class="text-xl">&times;</button></div> <!></div></div>');function Ea(e,t){Je(t,!0);var a=Sa(),r=g(a),i=g(r),n=g(i);n.__click=[Ta,t],v(i);var s=k(i,2);zt(s,()=>t.children),v(r),v(a),T(e,a),Fe()}ue(["click"]);var Ia=G('<h3 class="text-xl font-bold"> </h3> <div class="py-2"><img width="500" class="rounded-sm m-auto"/></div> <p class="italic text-sm"> </p>',1),Ca=(e,t,a,r)=>{Ae(t,!M(t)),a.name=M(r).name,a.image=M(r).image,a.description=M(r).description},Pa=G('<span class="m-1 p-1 inline-block rounded-sm bg-[#d3d3d3] text-sm"> </span>'),La=G('<li class="m-[1px auto] p-1 w-[100%] flex justify-around items-center"><div class="grid place-items-center w-[45%] h-[100%]"><button><img width="350" loading="lazy" class="cursor-pointer hover:scale-[1.1]"/></button></div> <div class="mt-2 py-1 text-center w-[50%]"><span class="block mb-1"> </span> <p></p> <em class="block text-center text-xs"> </em> <p class="p-2 mt-1 md:flex"><a class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900 svelte-181xidc">View GitHub <!></a> <a class="hover:text-blue-900 hover:underline decoration-2 svelte-181xidc">View Project <!></a></p></div></li>'),za=G('<section class="p-3" id="projects"><!> <div class="p-2"><h2 class="text-center text-3xl font-bold">Projects</h2> <ul class="md:grid grid-cols-2 gap-1 w-[100%]"><!> <li><div class="grid place-items-center h-[100%]"><a href="https://github.com/Temi-Tade" class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900 svelte-181xidc">Visit my GitHub <!></a></div></li></ul></div></section>');function Ha(e){let t=Ht({name:"",image:"",description:""}),a=qe(!1);const r=[{id:0,name:"efIQo",link:"https://efiqo-app.web.app/",github:"https://github.com/Temi-Tade/Efiqo",description:"Study with flashcards and quizzes",tags:["HTML","CSS","JS","AI","Firebase"],image:"/efiqo_screen.png"},{id:1,name:"KeyMaster",link:"https://temi-tade.github.io/KeyMaster/",github:"https://github.com/Temi-Tade/KeyMaster",description:"Start typing like a pro",tags:["HTML","CSS","JS","API"],image:"/keymaster_screen.png"},{id:2,name:"SVG Text Editor",link:"https://temi-tade.github.io/svg-editor/",github:"https://github.com/Temi-Tade/svg-editor",description:"Create custom SVGs right inside your browser",tags:["HTML","CSS","JS"],image:"/svg_editor_screen.png"},{id:3,name:"VerbotAI",link:"https://verbot-ai.web.app/",github:"https://github.com/Temi-Tade/verbot.ai",description:"Can't type in your prompt? Tell AI and let it respond with speech!",tags:["HTML","CSS","JS","AI"],image:"/verbot_screen.png"},{id:4,name:"Keyword Encoder",link:"https://temi-tade.github.io/keyword-encoder/",github:"https://github.com/Temi-Tade/keyword-encoder",description:"A tool for encoding plain text and decoding enciphered text with a keyword.",tags:["HTML","CSS","JS"],image:"/keyword_encoder_screen.png"}];var i=za(),n=g(i);{var s=d=>{Ea(d,{onClose:()=>Ae(a,!M(a)),children:(p,h)=>{var A=Ia(),N=P(A),S=g(N,!0);v(N);var $=k(N,2),x=g($);v($);var l=k($,2),f=g(l,!0);v(l),B(()=>{U(S,t.name),W(x,"src",t.image),W(x,"alt",t.description),U(f,t.description)}),T(p,A)},$$slots:{default:!0}})};Ke(n,d=>{M(a)&&d(s)})}var o=k(n,2),_=k(g(o),2),u=g(_);ee(u,17,()=>r,d=>d.id,(d,p)=>{var h=La(),A=g(h),N=g(A);N.__click=[Ca,a,t,p];var S=g(N);v(N),v(A);var $=k(A,2),x=g($),l=g(x,!0);v(x);var f=k(x,2);ee(f,21,()=>M(p).tags,Ue,(K,ae)=>{var re=Pa(),ve=g(re,!0);v(re),B(()=>U(ve,M(ae))),T(K,re)}),v(f);var y=k(f,2),R=g(y,!0);v(y);var I=k(y,2),V=g(I),D=k(g(V));rt(D,{class:"inline"}),v(V);var j=k(V,2),te=k(g(j));Pe(te,{class:"inline"}),v(j),v(I),v($),v(h),B(()=>{W(S,"src",M(p).image),W(S,"alt",M(p).description),U(l,M(p).name),U(R,M(p).description),W(V,"href",M(p).github),W(j,"href",M(p).link)}),T(d,h)});var b=k(u,2),m=g(b),c=g(m),w=k(g(c));Pe(w,{class:"inline"}),v(c),v(m),v(b),v(_),v(o),v(i),T(e,i)}ue(["click"]);var Oa=G('<div><!> <!> <!> <!> <footer class="text-center bg-[#dedede99] p-1"><p>Made with <!>. All rights reserved.</p></footer></div>');function Ja(e){var t=Oa(),a=g(t);ka(a);var r=k(a,2);ua(r);var i=k(r,2);Ha(i);var n=k(i,2);Na(n);var s=k(n,2),o=g(s),_=k(g(o));ga(_,{class:"inline stroke-0",fill:"red",size:18}),J(),v(o),v(s),v(t),T(e,t)}export{Ja as component};
