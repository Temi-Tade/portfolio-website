import"../chunks/DsnmJJEf.js";import{i as it}from"../chunks/BmYHYv2p.js";import{aj as st,S as Re,J as Se,aG as rt,Q as ue,K as O,aq as pe,L as fe,q as p,a6 as Ve,N as Tt,O as St,P as We,R as le,Z as ie,an as ot,at as At,T as me,W as xt,aH as Ae,aI as xe,U as Et,aJ as Fe,aC as zt,$ as Ke,ax as nt,i as lt,X as qe,Y as ct,aK as Mt,aL as Ie,aM as he,aN as Ct,ap as dt,aO as It,aw as Nt,aP as Lt,_ as Be,B as V,aQ as jt,au as Ot,as as Ht,az as Oe,aR as Pt,aS as Dt,M as Rt,aT as Vt,aA as vt,aU as qt,aV as Bt,al as Wt,aW as Ft,aX as Kt,aY as Ut,aZ as Gt,a_ as Yt,a$ as Jt,V as Zt,b0 as Xt,y as Ee,b1 as ze,C as S,D as Me,E as d,G as u,e as Ue,v as be,F as n,H as q,A as H,aE as pt,b2 as Qt,z as j,b3 as re,I as ea,b4 as ta,aD as ke,a3 as ut,a4 as oe,aF as Ge,u as aa,b5 as ia}from"../chunks/DU9w73-3.js";import{i as sa,a as ra,c as oa,d as $e,n as na,b as la,s as D,e as ca,f as da}from"../chunks/DH759SlO.js";import{b as F}from"../chunks/pOQTfvCs.js";import{l as K,p as ve,s as Y,i as X,c as va}from"../chunks/C18PpuiS.js";function pa(e,t){if(t){const i=document.body;e.autofocus=!0,st(()=>{document.activeElement===i&&e.focus()})}}let Ye=!1;function ua(){Ye||(Ye=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function fa(e,t){return t}function ma(e,t,i){for(var a=e.items,r=[],o=t.length,s=0;s<o;s++)It(t[s].e,r,!0);var l=o>0&&r.length===0&&i!==null;if(l){var _=i.parentNode;Nt(_),_.append(i),a.clear(),ae(e,t[0].prev,t[o-1].next)}Lt(r,()=>{for(var m=0;m<o;m++){var b=t[m];l||(a.delete(b.k),ae(e,b.prev,b.next)),he(b.e,!l)}})}function te(e,t,i,a,r,o=null){var s=e,l={flags:t,items:new Map,first:null},_=(t&rt)!==0;if(_){var m=e;s=O?ue(pe(m)):m.appendChild(Re())}O&&fe();var b=null,y=!1,h=new Map,T=Ve(()=>{var E=i();return lt(E)?E:E==null?[]:nt(E)}),f,k;function w(){ha(k,f,l,h,s,r,t,a,i),o!==null&&(f.length===0?b?qe(b):b=me(()=>o(s)):b!==null&&ct(b,()=>{b=null}))}Se(()=>{k??=Be,f=p(T);var E=f.length;if(y&&E===0)return;y=E===0;let C=!1;if(O){var A=Tt(s)===St;A!==(E===0)&&(s=We(),ue(s),le(!1),C=!0)}if(O){for(var g=null,z,c=0;c<E;c++){if(ie.nodeType===ot&&ie.data===At){s=ie,C=!0,le(!1);break}var v=f[c],$=a(v,c);z=He(ie,l,g,null,v,$,c,r,t,i),l.items.set($,z),g=z}E>0&&ue(We())}if(O)E===0&&o&&(b=me(()=>o(s)));else if(xt()){var I=new Set,M=Et;for(c=0;c<E;c+=1){v=f[c],$=a(v,c);var N=l.items.get($)??h.get($);N?(t&(Ae|xe))!==0&&ft(N,v,c,t):(z=He(null,l,null,null,v,$,c,r,t,i,!0),h.set($,z)),I.add($)}for(const[L,R]of l.items)I.has(L)||M.skipped_effects.add(R.e);M.add_callback(w)}else w();C&&le(!0),p(T)}),O&&(s=ie)}function ha(e,t,i,a,r,o,s,l,_){var m=(s&Ct)!==0,b=(s&(Ae|xe))!==0,y=t.length,h=i.items,T=i.first,f=T,k,w=null,E,C=[],A=[],g,z,c,v;if(m)for(v=0;v<y;v+=1)g=t[v],z=l(g,v),c=h.get(z),c!==void 0&&(c.a?.measure(),(E??=new Set).add(c));for(v=0;v<y;v+=1){if(g=t[v],z=l(g,v),c=h.get(z),c===void 0){var $=a.get(z);if($!==void 0){a.delete(z),h.set(z,$);var I=w?w.next:f;ae(i,w,$),ae(i,$,I),Ne($,I,r),w=$}else{var M=f?f.e.nodes_start:r;w=He(M,i,w,w===null?i.first:w.next,g,z,v,o,s,_)}h.set(z,w),C=[],A=[],f=w.next;continue}if(b&&ft(c,g,v,s),(c.e.f&Ie)!==0&&(qe(c.e),m&&(c.a?.unfix(),(E??=new Set).delete(c))),c!==f){if(k!==void 0&&k.has(c)){if(C.length<A.length){var N=A[0],L;w=N.prev;var R=C[0],U=C[C.length-1];for(L=0;L<C.length;L+=1)Ne(C[L],N,r);for(L=0;L<A.length;L+=1)k.delete(A[L]);ae(i,R.prev,U.next),ae(i,w,R),ae(i,U,N),f=N,w=U,v-=1,C=[],A=[]}else k.delete(c),Ne(c,f,r),ae(i,c.prev,c.next),ae(i,c,w===null?i.first:w.next),ae(i,w,c),w=c;continue}for(C=[],A=[];f!==null&&f.k!==z;)(f.e.f&Ie)===0&&(k??=new Set).add(f),A.push(f),f=f.next;if(f===null)continue;c=f}C.push(c),w=c,f=c.next}if(f!==null||k!==void 0){for(var W=k===void 0?[]:nt(k);f!==null;)(f.e.f&Ie)===0&&W.push(f),f=f.next;var B=W.length;if(B>0){var P=(s&rt)!==0&&y===0?r:null;if(m){for(v=0;v<B;v+=1)W[v].a?.measure();for(v=0;v<B;v+=1)W[v].a?.fix()}ma(i,W,P)}}m&&st(()=>{if(E!==void 0)for(c of E)c.a?.apply()}),e.first=i.first&&i.first.e,e.last=w&&w.e;for(var Z of a.values())he(Z.e);a.clear()}function ft(e,t,i,a){(a&Ae)!==0&&Fe(e.v,t),(a&xe)!==0?Fe(e.i,i):e.i=i}function He(e,t,i,a,r,o,s,l,_,m,b){var y=(_&Ae)!==0,h=(_&Mt)===0,T=y?h?zt(r,!1,!1):Ke(r):r,f=(_&xe)===0?s:Ke(s),k={i:f,v:T,k:o,a:null,e:null,prev:i,next:a};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Re())}return k.e=me(()=>l(e,T,f,m),O),k.e.prev=i&&i.e,k.e.next=a&&a.e,i===null?b||(t.first=k):(i.next=k,i.e.next=k.e),a!==null&&(a.prev=k,a.e.prev=k.e),k}finally{}}function Ne(e,t,i){for(var a=e.next?e.next.e.nodes_start:i,r=t?t.e.nodes_start:i,o=e.e.nodes_start;o!==null&&o!==a;){var s=dt(o);r.before(o),o=s}}function ae(e,t,i){t===null?e.first=i:(t.next=i,t.e.next=i&&i.e),i!==null&&(i.prev=t,i.e.prev=t&&t.e)}function ga(e,t,i=!1,a=!1,r=!1){var o=e,s="";V(()=>{var l=Be;if(s===(s=t()??"")){O&&fe();return}if(l.nodes_start!==null&&(jt(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),s!==""){if(O){ie.data;for(var _=fe(),m=_;_!==null&&(_.nodeType!==ot||_.data!=="");)m=_,_=dt(_);if(_===null)throw Ot(),Ht;Oe(ie,m),o=ue(_);return}var b=s+"";i?b=`<svg>${b}</svg>`:a&&(b=`<math>${b}</math>`);var y=Pt(b);if((i||a)&&(y=pe(y)),Oe(pe(y),y.lastChild),i||a)for(;pe(y);)o.before(pe(y));else o.before(y)}})}function G(e,t,i,a,r){O&&fe();var o=t.$$slots?.[i],s=!1;o===!0&&(o=t.children,s=!0),o===void 0||o(e,s?()=>a:a)}function _a(e,t,i,a,r,o){let s=O;O&&fe();var l,_,m=null;O&&ie.nodeType===Dt&&(m=ie,fe());var b=O?ie:e,y;Se(()=>{const h=t()||null;var T=Vt;h!==l&&(y&&(h===null?ct(y,()=>{y=null,_=null}):h===_?qe(y):he(y)),h&&h!==_&&(y=me(()=>{if(m=O?m:document.createElementNS(T,h),Oe(m,m),a){O&&sa(h)&&m.append(document.createComment(""));var f=O?pe(m):m.appendChild(Re());O&&(f===null?le(!1):ue(f)),a(m,f)}Be.nodes_end=m,b.before(m)})),l=h,l&&(_=l))},Rt),s&&(le(!0),ue(b))}function ba(e,t){var i=void 0,a;Se(()=>{i!==(i=t())&&(a&&(he(a),a=null),i&&(a=me(()=>{vt(()=>i(e))})))})}function mt(e){var t,i,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(i=mt(e[t]))&&(a&&(a+=" "),a+=i)}else for(i in e)e[i]&&(a&&(a+=" "),a+=i);return a}function ya(){for(var e,t,i=0,a="",r=arguments.length;i<r;i++)(e=arguments[i])&&(t=mt(e))&&(a&&(a+=" "),a+=t);return a}function wa(e){return typeof e=="object"?ya(e):e??""}const Je=[...` 	
\r\f \v\uFEFF`];function ka(e,t,i){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),i){for(var r in i)if(i[r])a=a?a+" "+r:r;else if(a.length)for(var o=r.length,s=0;(s=a.indexOf(r,s))>=0;){var l=s+o;(s===0||Je.includes(a[s-1]))&&(l===a.length||Je.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function Ze(e,t=!1){var i=t?" !important;":";",a="";for(var r in e){var o=e[r];o!=null&&o!==""&&(a+=" "+r+": "+o+i)}return a}function Le(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function $a(e,t){if(t){var i="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,s=0,l=!1,_=[];a&&_.push(...Object.keys(a).map(Le)),r&&_.push(...Object.keys(r).map(Le));var m=0,b=-1;const k=e.length;for(var y=0;y<k;y++){var h=e[y];if(l?h==="/"&&e[y-1]==="*"&&(l=!1):o?o===h&&(o=!1):h==="/"&&e[y+1]==="*"?l=!0:h==='"'||h==="'"?o=h:h==="("?s++:h===")"&&s--,!l&&o===!1&&s===0){if(h===":"&&b===-1)b=y;else if(h===";"||y===k-1){if(b!==-1){var T=Le(e.substring(m,b).trim());if(!_.includes(T)){h!==";"&&y++;var f=e.substring(m,y).trim();i+=" "+f+";"}}m=y+1,b=-1}}}}return a&&(i+=Ze(a)),r&&(i+=Ze(r,!0)),i=i.trim(),i===""?null:i}return e==null?null:String(e)}function ht(e,t,i,a,r,o){var s=e.__className;if(O||s!==i||s===void 0){var l=ka(i,a,o);(!O||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e.__className=i}else if(o&&r!==o)for(var _ in o){var m=!!o[_];(r==null||m!==!!r[_])&&e.classList.toggle(_,m)}return o}function je(e,t={},i,a){for(var r in i){var o=i[r];t[r]!==o&&(i[r]==null?e.style.removeProperty(r):e.style.setProperty(r,o,a))}}function gt(e,t,i,a){var r=e.__style;if(O||r!==t){var o=$a(t,a);(!O||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=t}else a&&(Array.isArray(a)?(je(e,i?.[0],a[0]),je(e,i?.[1],a[1],"important")):je(e,i,a));return a}function Pe(e,t,i=!1){if(e.multiple){if(t==null)return;if(!lt(t))return qt();for(var a of e.options)a.selected=t.includes(Xe(a));return}for(a of e.options){var r=Xe(a);if(Bt(r,t)){a.selected=!0;return}}(!i||t!==void 0)&&(e.selectedIndex=-1)}function Ta(e){var t=new MutationObserver(()=>{Pe(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wt(()=>{t.disconnect()})}function Xe(e){return"__value"in e?e.__value:e.value}const ye=Symbol("class"),we=Symbol("style"),_t=Symbol("is custom element"),bt=Symbol("is html");function Sa(e){if(O){var t=!1,i=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;x(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;x(e,"checked",null),e.checked=r}}};e.__on_r=i,Xt(i),ua()}}function Aa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function x(e,t,i,a){var r=yt(e);O&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=i)&&(t==="loading"&&(e[Kt]=i),i==null?e.removeAttribute(t):typeof i!="string"&&wt(e).includes(t)?e[t]=i:e.setAttribute(t,i))}function xa(e,t,i,a,r=!1,o=!1){if(O&&r&&e.tagName==="INPUT"){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in i||Sa(s)}var _=yt(e),m=_[_t],b=!_[bt];let y=O&&m;y&&le(!1);var h=t||{},T=e.tagName==="OPTION";for(var f in t)f in i||(i[f]=null);i.class?i.class=wa(i.class):i[ye]&&(i.class=null),i[we]&&(i.style??=null);var k=wt(e);for(const c in i){let v=i[c];if(T&&c==="value"&&v==null){e.value=e.__value="",h[c]=v;continue}if(c==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";ht(e,w,v,a,t?.[ye],i[ye]),h[c]=v,h[ye]=i[ye];continue}if(c==="style"){gt(e,v,t?.[we],i[we]),h[c]=v,h[we]=i[we];continue}var E=h[c];if(!(v===E&&!(v===void 0&&e.hasAttribute(c)))){h[c]=v;var C=c[0]+c[1];if(C!=="$$")if(C==="on"){const $={},I="$$"+c;let M=c.slice(2);var A=la(M);if(ra(M)&&(M=M.slice(0,-7),$.capture=!0),!A&&E){if(v!=null)continue;e.removeEventListener(M,h[I],$),h[I]=null}if(v!=null)if(A)e[`__${M}`]=v,$e([M]);else{let N=function(L){h[c].call(this,L)};h[I]=oa(M,e,N,$)}else A&&(e[`__${M}`]=void 0)}else if(c==="style")x(e,c,v);else if(c==="autofocus")pa(e,!!v);else if(!m&&(c==="__value"||c==="value"&&v!=null))e.value=e.__value=v;else if(c==="selected"&&T)Aa(e,v);else{var g=c;b||(g=na(g));var z=g==="defaultValue"||g==="defaultChecked";if(v==null&&!m&&!z)if(_[c]=null,g==="value"||g==="checked"){let $=e;const I=t===void 0;if(g==="value"){let M=$.defaultValue;$.removeAttribute(g),$.defaultValue=M,$.value=$.__value=I?M:null}else{let M=$.defaultChecked;$.removeAttribute(g),$.defaultChecked=M,$.checked=I?M:!1}}else e.removeAttribute(c);else z||k.includes(g)&&(m||typeof v!="string")?(e[g]=v,g in _&&(_[g]=Zt)):typeof v!="function"&&x(e,g,v)}}}return y&&le(!0),h}function Qe(e,t,i=[],a=[],r,o=!1,s=!1){Ft(i,a,l=>{var _=void 0,m={},b=e.nodeName==="SELECT",y=!1;if(Se(()=>{var T=t(...l.map(p)),f=xa(e,_,T,r,o,s);y&&b&&"value"in T&&Pe(e,T.value);for(let w of Object.getOwnPropertySymbols(m))T[w]||he(m[w]);for(let w of Object.getOwnPropertySymbols(T)){var k=T[w];w.description===Yt&&(!_||k!==_[w])&&(m[w]&&he(m[w]),m[w]=me(()=>ba(e,()=>k))),f[w]=k}_=f}),b){var h=e;vt(()=>{Pe(h,_.value,!0),Ta(h)})}y=!0})}function yt(e){return e.__attributes??={[_t]:e.nodeName.includes("-"),[bt]:e.namespaceURI===Ut}}var et=new Map;function wt(e){var t=e.getAttribute("is")||e.nodeName,i=et.get(t);if(i)return i;et.set(t,i=[]);for(var a,r=e,o=Element.prototype;o!==r;){a=Jt(r);for(var s in a)a[s].set&&i.push(s);r=Gt(r)}return i}/**
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
 */const Ea={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var za=ze("<svg><!><!></svg>");function J(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]),a=K(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ee(t,!1);let r=ve(t,"name",8,void 0),o=ve(t,"color",8,"currentColor"),s=ve(t,"size",8,24),l=ve(t,"strokeWidth",8,2),_=ve(t,"absoluteStrokeWidth",8,!1),m=ve(t,"iconNode",24,()=>[]);const b=(...f)=>f.filter((k,w,E)=>!!k&&E.indexOf(k)===w).join(" ");it();var y=za();Qe(y,(f,k)=>({...Ea,...a,width:s(),height:s(),stroke:o(),"stroke-width":f,class:k}),[()=>(be(_()),be(l()),be(s()),Ue(()=>_()?Number(l())*24/Number(s()):l())),()=>(be(r()),be(i),Ue(()=>b("lucide-icon","lucide",r()?`lucide-${r()}`:"",i.class)))]);var h=d(y);te(h,1,m,fa,(f,k)=>{var w=pt(()=>Qt(p(k),2));let E=()=>p(w)[0],C=()=>p(w)[1];var A=q(),g=H(A);_a(g,E,!0,(z,c)=>{Qe(z,()=>({...C()}))}),S(f,A)});var T=u(h);G(T,t,"default",{}),n(y),S(e,y),Me()}function Ma(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];J(e,Y({name:"file-text"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function se(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];J(e,Y({name:"arrow-up-right"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function Ca(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"}],["path",{d:"M20.054 15.987H3.946"}]];J(e,Y({name:"laptop"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function Ia(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}]];J(e,Y({name:"blocks"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function Na(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];J(e,Y({name:"cpu"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}var La=j('<li class="tech-item svelte-1bmiiuv"><img class="tech-logo svelte-1bmiiuv" referrerpolicy="no-referrer"/> <span> </span></li>'),ja=j('<li class="svelte-1bmiiuv"><span class="discipline-icon svelte-1bmiiuv"><!></span> <span> </span></li>'),Oa=j(`<section class="hero-section svelte-1bmiiuv" id="about"><div class="hero-grid svelte-1bmiiuv"><div class="hero-copy svelte-1bmiiuv"><h1 class="svelte-1bmiiuv">Hello, I am <span class="name-accent svelte-1bmiiuv">Temiloluwa</span> <span class="role-title svelte-1bmiiuv">Software Developer</span></h1> <p class="lead svelte-1bmiiuv">I am a software developer with 5+ years of experience building products across web,
				blockchain, systems, and embedded spaces. I design and ship reliable software that balances
				product thinking, engineering quality, and real-world usability.</p> <div class="action-row svelte-1bmiiuv"><a class="primary-action svelte-1bmiiuv" target="_blank" rel="noreferrer"><!> My Resume</a> <a class="secondary-action svelte-1bmiiuv" href="mailto:akintadetemi19@gmail.com">Got a project? <!></a></div> <div class="stack-block svelte-1bmiiuv"><span class="stack-label svelte-1bmiiuv">Core Stack</span> <ul class="tech-list svelte-1bmiiuv"></ul></div></div> <div class="hero-visual svelte-1bmiiuv"><figure class="portrait-frame svelte-1bmiiuv"><div class="portrait-media svelte-1bmiiuv"><img alt="Temiloluwa Akintade, software developer" width="400" height="500" fetchpriority="high" referrerpolicy="no-referrer" class="svelte-1bmiiuv"/></div> <figcaption class="portrait-caption svelte-1bmiiuv"><strong class="svelte-1bmiiuv">5+ Years</strong> <span class="svelte-1bmiiuv">Web · Blockchain · Systems · Embedded</span></figcaption></figure></div></div> <div class="about-band svelte-1bmiiuv"><div class="about-copy svelte-1bmiiuv"><h2 class="svelte-1bmiiuv">About me</h2> <p class="svelte-1bmiiuv">I have spent the last 5+ years building software across the stack - from full-stack web
				apps and interactive circuit simulations to smart contracts, onchain developer tooling,
				low-level systems, and embedded prototypes.</p> <p class="svelte-1bmiiuv">I enjoy turning ambitious ideas into real, usable products that work in the wild.</p></div> <div class="about-disciplines svelte-1bmiiuv"><h3 class="svelte-1bmiiuv">What I build</h3> <ul class="svelte-1bmiiuv"></ul></div></div></section>`);function Ha(e){const t=[{id:0,name:"React",logo:"https://cdn.simpleicons.org/react/61dafb"},{id:1,name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/f4f4f5"},{id:2,name:"Tailwind",logo:"https://cdn.simpleicons.org/tailwindcss/38bdf8"},{id:3,name:"Svelte",logo:"https://cdn.simpleicons.org/svelte/ff3e00"},{id:4,name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6"},{id:5,name:"Node.js",logo:"https://cdn.simpleicons.org/nodedotjs/5fa04e"},{id:6,name:"Supabase",logo:"https://cdn.simpleicons.org/supabase/3ecf8e"},{id:7,name:"Solidity",logo:"https://cdn.simpleicons.org/solidity/a78bfa"},{id:8,name:"Foundry",logo:"https://cdn.simpleicons.org/ethereum/e4e4e7"},{id:9,name:"C",logo:"https://cdn.simpleicons.org/c/60a5fa"},{id:10,name:"Arduino",logo:"https://cdn.simpleicons.org/arduino/00b4bd"}],i=[{name:"Web Application Development",icon:Ca},{name:"Smart Contract Development & dApp Integration",icon:Ia},{name:"Systems & Embedded Software Development",icon:Na}];var a=Oa(),r=d(a),o=d(r),s=u(d(o),4),l=d(s),_=d(l);Ma(_,{size:17}),re(),n(l);var m=u(l,2),b=u(d(m));se(b,{size:16}),n(m),n(s);var y=u(s,2),h=u(d(y),2);te(h,5,()=>t,g=>g.id,(g,z)=>{var c=La(),v=d(c),$=u(v,2),I=d($,!0);n($),n(c),V(()=>{x(v,"src",p(z).logo),x(v,"alt",`${p(z).name} logo`),D(I,p(z).name)}),S(g,c)}),n(h),n(y),n(o);var T=u(o,2),f=d(T),k=d(f),w=d(k);n(k),re(2),n(f),n(T),n(r);var E=u(r,2),C=u(d(E),2),A=u(d(C),2);te(A,5,()=>i,g=>g.name,(g,z)=>{const c=Ve(()=>p(z).icon);var v=ja(),$=d(v),I=d($);p(c)(I,{size:18}),n($);var M=u($,2),N=d(M,!0);n(M),n(v),V(()=>D(N,p(z).name)),S(g,v)}),n(A),n(C),n(E),n(a),V(()=>{x(l,"href",`${F??""}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf`),x(w,"src",`${F??""}/images/temiloluwa-peerlist.jpg`)}),S(e,a)}function De(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];J(e,Y({name:"github"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function kt(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];J(e,Y({name:"x"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}var Pa=(e,t)=>{e.target===e.currentTarget&&t.onClose()},Da=(e,t)=>t.onClose(),Ra=j('<div class="modal-backdrop svelte-16ml2tb" aria-modal="true" role="dialog" tabindex="-1"><div class="modal-panel svelte-16ml2tb"><button type="button" class="close-button svelte-16ml2tb" aria-label="Close modal"><!></button> <!></div></div>');function $t(e,t){Ee(t,!0);function i(_){_.key==="Escape"&&t.onClose()}var a=Ra();ca("keydown",ta,i),a.__click=[Pa,t];var r=d(a),o=d(r);o.__click=[Da,t];var s=d(o);kt(s,{size:18}),n(o);var l=u(o,2);ea(l,()=>t.children),n(r),n(a),S(e,a),Me()}$e(["click"]);var Va=j('<a target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc"><!> GitHub</a>'),qa=j('<h3 class="modal-title svelte-181xidc"> </h3> <div class="modal-image-wrap svelte-181xidc"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></div> <p class="modal-desc svelte-181xidc"> </p> <div class="modal-actions svelte-181xidc"><!> <a target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project <!></a></div>',1),Ba=(e,t,i,a)=>{oe(t,{name:p(i).name,image:p(i).image,description:p(i).description,link:p(i).link,github:p(i).github??""},!0),oe(a,!0)},Wa=ze('<svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-label="Hardhat" fill="none" class="svelte-181xidc"><path d="M12 4.5c-4.2 0-7.5 3.2-7.5 7.3V15h15v-3.2c0-4.1-3.3-7.3-7.5-7.3Z" fill="#FACC15"></path><path d="M10.25 4.75V12h3.5V4.75a7.5 7.5 0 0 0-3.5 0Z" fill="#FEF08A"></path><rect x="2.5" y="14.5" width="19" height="3" rx="1.5" fill="#EAB308"></rect></svg>'),Fa=j('<img width="18" height="18" loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/>'),Ka=j('<li class="stack-icon svelte-181xidc"><!></li>'),Ua=j('<a target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc"><!> GitHub</a>'),Ga=j('<li class="svelte-181xidc"><article class="project-card svelte-181xidc"><button type="button" class="image-button svelte-181xidc"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></button> <div class="project-body svelte-181xidc"><div class="project-header svelte-181xidc"><h3 class="svelte-181xidc"> </h3></div> <p class="project-description svelte-181xidc"> </p> <ul class="project-stack svelte-181xidc"></ul> <p class="project-tags svelte-181xidc"> </p> <div class="project-actions svelte-181xidc"><!> <a target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project <!></a></div></div></article></li>'),Ya=j('<section class="projects-section svelte-181xidc" id="projects"><!> <div class="section-heading svelte-181xidc"><div><span class="kicker svelte-181xidc">Selected work</span> <h2 class="svelte-181xidc">Builds across web, blockchain, systems, and embedded software.</h2></div> <a href="https://github.com/Temi-Tade" target="_blank" rel="noreferrer" class="github-inline svelte-181xidc">Visit my GitHub <!></a></div> <ul class="projects-grid svelte-181xidc"></ul></section>');function Ja(e){let t=ke(ut({name:"",image:"",description:"",link:"",github:""})),i=ke(!1);const a={nextjs:{name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/f4f4f5"},typescript:{name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6"},supabase:{name:"Supabase",logo:"https://cdn.simpleicons.org/supabase/3ecf8e"},tailwindcss:{name:"Tailwind CSS",logo:"https://cdn.simpleicons.org/tailwindcss/38bdf8"},react:{name:"React",logo:"https://cdn.simpleicons.org/react/61dafb"},javascript:{name:"JavaScript",logo:"https://cdn.simpleicons.org/javascript/f7df1e"},nodejs:{name:"Node.js",logo:"https://cdn.simpleicons.org/nodedotjs/5fa04e"},hardhat:{name:"Hardhat",custom:"hardhat"},c:{name:"C",logo:"https://cdn.simpleicons.org/c/60a5fa"}},r=[{id:4,name:"ShipTok",link:"https://shiptok-app.vercel.app",description:"A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.",stack:[a.nextjs,a.typescript,a.supabase,a.tailwindcss],tags:["Web App","Social","Makers","Discovery"],image:`${F}/images/shiptok.png`},{id:5,name:"Ohm-E",link:"https://github.com/Temi-Tade/Ohm-E",github:"https://github.com/Temi-Tade/Ohm-E",description:"An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.",stack:[a.react,a.typescript,a.tailwindcss],tags:["Electronics","Simulation","Interactive","Web App"],image:`${F}/images/ohm-e.png`},{id:0,name:"RivETH",link:"https://temi-tade.github.io/RivETHDocs",github:"https://github.com/Temi-Tade/RivETH",description:"An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.",stack:[a.javascript,a.nodejs,a.hardhat],tags:["Ethereum","Smart Contracts","Open Source","Dev Tools"],image:`${F}/images/riveth.png`},{id:1,name:"qodon",link:"https://github.com/Temi-Tade/qodon",github:"https://github.com/Temi-Tade/qodon",description:"A CLI-based genomics tool. Written in C.",stack:[a.c],tags:["CLI","Genomics","Bioinformatics","C"],image:`${F}/images/qdn_qft.png`},{id:2,name:"Medusa",link:"https://temi-tade.github.io/medusa",github:"https://github.com/Temi-Tade/medusa",description:"A password-based file encryption tool with lossless decryption.",stack:[a.javascript],tags:["Encryption","Security","File Management"],image:`${F}/images/medusa.png`},{id:3,name:"Skaylar",link:"https://temi-tade.github.io/Skaylar",github:"https://github.com/Temi-Tade/Skaylar",description:"A tool for analysing and visualizing first-digit distributions using Benford's Law.",stack:[a.javascript],tags:["Data Analysis","Visualization","Benford's Law","Statistics"],image:`${F}/images/Skaylar.png`}];var o=Ya(),s=d(o);{var l=h=>{$t(h,{onClose:()=>oe(i,!1),children:(T,f)=>{var k=qa(),w=H(k),E=d(w,!0);n(w);var C=u(w,2),A=d(C);n(C);var g=u(C,2),z=d(g,!0);n(g);var c=u(g,2),v=d(c);{var $=N=>{var L=Va(),R=d(L);De(R,{size:16}),re(),n(L),V(()=>x(L,"href",p(t).github)),S(N,L)};X(v,N=>{p(t).github&&N($)})}var I=u(v,2),M=u(d(I));se(M,{size:16}),n(I),n(c),V(()=>{D(E,p(t).name),x(A,"src",p(t).image),x(A,"alt",p(t).description),D(z,p(t).description),x(I,"href",p(t).link)}),S(T,k)},$$slots:{default:!0}})};X(s,h=>{p(i)&&h(l)})}var _=u(s,2),m=u(d(_),2),b=u(d(m));se(b,{size:16}),n(m),n(_);var y=u(_,2);te(y,21,()=>r,h=>h.id,(h,T)=>{var f=Ga(),k=d(f),w=d(k);w.__click=[Ba,t,T,i];var E=d(w);n(w);var C=u(w,2),A=d(C),g=d(A),z=d(g,!0);n(g),n(A);var c=u(A,2),v=d(c,!0);n(c);var $=u(c,2);te($,21,()=>p(T).stack,B=>B.name,(B,P)=>{var Z=Ka(),ce=d(Z);{var ge=ne=>{var de=Wa();S(ne,de)},Te=ne=>{var de=q(),Ce=H(de);{var Q=ee=>{var _e=Fa();V(()=>{x(_e,"src",p(P).logo),x(_e,"alt",p(P).name)}),S(ee,_e)};X(Ce,ee=>{p(P).logo&&ee(Q)},!0)}S(ne,de)};X(ce,ne=>{p(P).custom==="hardhat"?ne(ge):ne(Te,!1)})}n(Z),V(()=>x(Z,"title",p(P).name)),S(B,Z)}),n($);var I=u($,2),M=d(I,!0);n(I);var N=u(I,2),L=d(N);{var R=B=>{var P=Ua(),Z=d(P);De(Z,{size:15}),re(),n(P),V(()=>x(P,"href",p(T).github)),S(B,P)};X(L,B=>{p(T).github&&B(R)})}var U=u(L,2),W=u(d(U));se(W,{size:15}),n(U),n(N),n(C),n(k),n(f),V(B=>{x(w,"aria-label",`Inspect ${p(T).name} screenshot`),x(E,"src",p(T).image),x(E,"alt",p(T).description),D(z,p(T).name),D(v,p(T).description),x($,"aria-label",`${p(T).name} tech stack`),D(M,B),x(U,"href",p(T).link)},[()=>p(T).tags.join(" · ")]),S(h,f)}),n(y),n(o),S(e,o)}$e(["click"]);function Za(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];J(e,Y({name:"video"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function Xa(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];J(e,Y({name:"award"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function Qa(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];J(e,Y({name:"shield"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function ei(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 10a4 4 0 0 1-8 0"}],["path",{d:"M3.103 6.034h17.794"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"}]];J(e,Y({name:"shopping-bag"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function tt(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];J(e,Y({name:"external-link"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}var ti=j('<h3 class="modal-title svelte-1cs26a1"> </h3> <div class="modal-image-wrap svelte-1cs26a1"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-1cs26a1"/></div> <p class="modal-desc svelte-1cs26a1"> </p> <div class="modal-actions svelte-1cs26a1"><a target="_blank" rel="noreferrer" class="project-link primary-link svelte-1cs26a1">Open feature <!></a></div>',1),ai=(e,t,i)=>{oe(t,{open:!0,title:p(i).title,image:p(i).image,description:p(i).description,link:p(i).link},!0)},ii=j('<div class="video-badge svelte-1cs26a1"><!> <span>Video Interview</span></div>'),si=j('<article class="spotlight-card svelte-1cs26a1"><button type="button" class="image-button svelte-1cs26a1"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-1cs26a1"/> <!></button> <div class="spotlight-body svelte-1cs26a1"><div class="spotlight-meta svelte-1cs26a1"><!> <span> </span></div> <h3 class="svelte-1cs26a1"> </h3> <p class="svelte-1cs26a1"> </p> <div class="spotlight-actions svelte-1cs26a1"><a target="_blank" rel="noreferrer" class="project-link primary-link svelte-1cs26a1"><!> <!></a></div></div></article>'),ri=(e,t)=>{oe(t,{open:!0,title:"OneKey Classic 1S - Hardware Partner Drop",image:`${F}/images/onekey-classic-1s.jpg`,description:"Shipped by OneKey as part of our collaboration - an ultra-thin, open-source hardware wallet built for secure multi-chain cold storage and onchain signing.",link:"https://onekey.so/r/TEMI0x0/shop"},!0)},oi=j('<a target="_blank" rel="noreferrer" class="onekey-card svelte-1cs26a1"><div class="onekey-card-top svelte-1cs26a1"><span class="onekey-category svelte-1cs26a1"> </span> <!></div> <h4 class="svelte-1cs26a1"> </h4> <p class="svelte-1cs26a1"> </p> <span class="onekey-url svelte-1cs26a1"> </span></a>'),ni=j(`<section class="spotlights-section svelte-1cs26a1" id="spotlights"><!> <div class="section-heading svelte-1cs26a1"><div><span class="kicker svelte-1cs26a1">Recognition &amp; Partners</span> <h2 class="svelte-1cs26a1">Spotlights, Interviews &amp; Collaborations</h2> <p class="section-sub svelte-1cs26a1">Media features, builder spotlights, and official partnerships.</p></div></div> <div class="spotlights-grid svelte-1cs26a1"></div> <div class="onekey-banner svelte-1cs26a1"><div class="onekey-header svelte-1cs26a1"><img alt="OneKey official logo" class="onekey-logo svelte-1cs26a1" width="52" height="52" loading="lazy" referrerpolicy="no-referrer"/> <div class="onekey-title-wrap svelte-1cs26a1"><span class="kicker svelte-1cs26a1">Official Partner</span> <h3 class="svelte-1cs26a1">OneKey Collaboration &amp; Referral Links</h3> <p class="svelte-1cs26a1">Secure hardware wallets &amp; Web3 tools. Use my referral links below to get started.</p></div></div> <div class="onekey-hardware svelte-1cs26a1"><button type="button" class="hardware-image-btn svelte-1cs26a1" aria-label="View OneKey Classic 1S hardware wallet"><img alt="OneKey Classic 1S hardware wallet box shipped to Temiloluwa" loading="lazy" referrerpolicy="no-referrer" class="svelte-1cs26a1"/></button> <div class="hardware-copy svelte-1cs26a1"><span class="kicker svelte-1cs26a1">Hardware Partner Drop</span> <h4 class="svelte-1cs26a1">OneKey Classic 1S</h4> <p class="svelte-1cs26a1">Shipped by OneKey as part of our collaboration - an open-source hardware wallet built for
					secure multi-chain cold storage, offline transaction signing, and everyday Web3 workflows.</p> <div class="hardware-actions svelte-1cs26a1"><a href="https://onekey.so/r/TEMI0x0/shop" target="_blank" rel="noreferrer" class="project-link primary-link svelte-1cs26a1">Shop OneKey Classic 1S <!></a></div></div></div> <div class="onekey-links-grid svelte-1cs26a1"></div></div></section>`);function li(e){let t=ke(ut({open:!1,title:"",image:"",description:"",link:""}));const i=[{id:0,title:"Coinpedia Ethereum Builder Spotlight",publication:"Coinpedia",description:"Featured builder spotlight highlighting the journey from learning web development on a mother's phone to creating tools for the Ethereum developer ecosystem.",image:`${F}/images/coinpedia-spotlight.png`,link:"https://coinpedia.org"},{id:1,title:"Developer Spotlight Interview with Tom Smith",publication:"CoderLegion",description:"In-depth video interview discussing systems programming, web3 infrastructure, building RivETH, and developer workflows.",image:`${F}/images/coderlegion-interview.jpg`,link:"https://youtu.be/RZbiTxeRFCg?si=RffGqBimDspATWG4",isVideo:!0}],a=[{category:"Hardware Sales",title:"Official Shop",description:"Official OneKey hardware wallet shop",url:"https://onekey.so/r/TEMI0x0/shop",icon:ei},{category:"Perps",title:"Trade Perps",description:"Trade perpetuals on OneKey",url:"https://app.onekey.so/r/TEMI0x0/app/perps",icon:tt},{category:"Swap",title:"Token Swap",description:"Swap tokens securely on OneKey",url:"https://app.onekey.so/r/TEMI0x0/app/swap",icon:tt},{category:"DeFi",title:"DeFi Access",description:"Explore DeFi protocols on OneKey",url:"https://app.onekey.so/r/TEMI0x0/app/defi",icon:Qa}];var r=ni(),o=d(r);{var s=A=>{$t(A,{onClose:()=>p(t).open=!1,children:(g,z)=>{var c=ti(),v=H(c),$=d(v,!0);n(v);var I=u(v,2),M=d(I);n(I);var N=u(I,2),L=d(N,!0);n(N);var R=u(N,2),U=d(R),W=u(d(U));se(W,{size:16}),n(U),n(R),V(()=>{D($,p(t).title),x(M,"src",p(t).image),x(M,"alt",p(t).title),D(L,p(t).description),x(U,"href",p(t).link)}),S(g,c)},$$slots:{default:!0}})};X(o,A=>{p(t).open&&A(s)})}var l=u(o,4);te(l,21,()=>i,A=>A.id,(A,g)=>{var z=si(),c=d(z);c.__click=[ai,t,g];var v=d(c),$=u(v,2);{var I=Q=>{var ee=ii(),_e=d(ee);Za(_e,{size:16}),re(2),n(ee),S(Q,ee)};X($,Q=>{p(g).isVideo&&Q(I)})}n(c);var M=u(c,2),N=d(M),L=d(N);Xa(L,{size:15});var R=u(L,2),U=d(R,!0);n(R),n(N);var W=u(N,2),B=d(W,!0);n(W);var P=u(W,2),Z=d(P,!0);n(P);var ce=u(P,2),ge=d(ce),Te=d(ge);{var ne=Q=>{var ee=Ge("Watch Interview");S(Q,ee)},de=Q=>{var ee=Ge("View Spotlight");S(Q,ee)};X(Te,Q=>{p(g).isVideo?Q(ne):Q(de,!1)})}var Ce=u(Te,2);se(Ce,{size:15}),n(ge),n(ce),n(M),n(z),V(()=>{x(c,"aria-label",`View ${p(g).title}`),x(v,"src",p(g).image),x(v,"alt",p(g).title),D(U,p(g).publication),D(B,p(g).title),D(Z,p(g).description),x(ge,"href",p(g).link)}),S(A,z)}),n(l);var _=u(l,2),m=d(_),b=d(m);re(2),n(m);var y=u(m,2),h=d(y);h.__click=[ri,t];var T=d(h);n(h);var f=u(h,2),k=u(d(f),6),w=d(k),E=u(d(w));se(E,{size:15}),n(w),n(k),n(f),n(y);var C=u(y,2);te(C,21,()=>a,A=>A.category,(A,g)=>{const z=pt(()=>p(g).icon);var c=oi(),v=d(c),$=d(v),I=d($,!0);n($);var M=u($,2);va(M,()=>p(z),(P,Z)=>{Z(P,{size:16,class:"external-icon"})}),n(v);var N=u(v,2),L=d(N,!0);n(N);var R=u(N,2),U=d(R,!0);n(R);var W=u(R,2),B=d(W,!0);n(W),n(c),V(P=>{x(c,"href",p(g).url),D(I,p(g).category),D(L,p(g).title),D(U,p(g).description),D(B,P)},[()=>p(g).url.replace("https://","")]),S(A,c)}),n(C),n(_),n(r),V(()=>{x(b,"src",`${F??""}/images/onekey-logo.png`),x(T,"src",`${F??""}/images/onekey-classic-1s.jpg`)}),S(e,r)}$e(["click"]);function ci(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];J(e,Y({name:"book-open"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}var di=j('<span class="sep svelte-m39zqz" aria-hidden="true">·</span> <time class="svelte-m39zqz"> </time>',1),vi=j('<li class="svelte-m39zqz"><article class="article-card svelte-m39zqz"><div class="article-meta svelte-m39zqz"><span class="svelte-m39zqz"> </span> <!></div> <h3 class="svelte-m39zqz"> </h3> <p class="svelte-m39zqz"> </p> <a target="_blank" rel="noreferrer" class="read-link svelte-m39zqz">Read article <!></a></article></li>'),pi=j('<span class="sep svelte-m39zqz" aria-hidden="true">·</span>'),ui=j('<!> <a target="_blank" rel="noreferrer" class="svelte-m39zqz"> </a>',1),fi=j('<section class="articles-section svelte-m39zqz" id="articles"><div class="section-heading svelte-m39zqz"><div><span class="kicker svelte-m39zqz">Writing &amp; ideas</span> <h2 class="svelte-m39zqz">Articles &amp; publications</h2> <p class="section-sub svelte-m39zqz">Notes on software, security, and the ideas behind the things I build.</p></div></div> <ul class="articles-grid svelte-m39zqz"></ul> <div class="publication-links svelte-m39zqz" aria-label="More publications"><span class="pub-label svelte-m39zqz"><!> Find me on</span> <div class="pub-items svelte-m39zqz"></div></div></section>');function mi(e){const t=[{id:0,title:"I built Medusa - A lossless password-based file encryption tool",publication:"DEV Community",published:"Aug 29, 2026",preview:"A quick look at Medusa, an open-source, client-side file encryption tool built for lossless decryption.",href:"https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip"},{id:1,title:"Are computers truly random? How chaos powers randomness.",publication:"DEV Community",published:"Jul 15, 2026",preview:"An exploration of how computers generate randomness and the role chaos plays in the process.",href:"https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93"},{id:2,title:"Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)",publication:"CoderLegion",preview:"A look at how secure elements and carefully limited USB or Bluetooth connections let hardware wallets sign transactions without exposing private keys.",href:"https://coderlegion.com/20141/how-do-web3-hardware-wallets-work"},{id:3,title:"Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs",publication:"CoderLegion",preview:"The story behind a lightweight, browser-based Ethereum toolkit that helps developers compile, deploy, and interact with smart contracts locally.",href:"https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs"}],i=[{name:"Dev.to",href:"https://dev.to/js_cipher"},{name:"Medium",href:"https://medium.com/@temi_lolu0x0"},{name:"CoderLegion",href:"https://coderlegion.com/user/temi_0x0"},{name:"Peerlist",href:"https://peerlist.io/temi_lolu"}];var a=fi(),r=u(d(a),2);te(r,5,()=>t,m=>m.id,(m,b)=>{var y=vi(),h=d(y),T=d(h),f=d(T),k=d(f,!0);n(f);var w=u(f,2);{var E=$=>{var I=di(),M=u(H(I),2),N=d(M,!0);n(M),V(()=>D(N,p(b).published)),S($,I)};X(w,$=>{p(b).published&&$(E)})}n(T);var C=u(T,2),A=d(C,!0);n(C);var g=u(C,2),z=d(g,!0);n(g);var c=u(g,2),v=u(d(c));se(v,{size:16}),n(c),n(h),n(y),V(()=>{D(k,p(b).publication),D(A,p(b).title),D(z,p(b).preview),x(c,"href",p(b).href)}),S(m,y)}),n(r);var o=u(r,2),s=d(o),l=d(s);ci(l,{size:15}),re(),n(s);var _=u(s,2);te(_,7,()=>i,m=>m.name,(m,b,y)=>{var h=ui(),T=H(h);{var f=E=>{var C=pi();S(E,C)};X(T,E=>{p(y)>0&&E(f)})}var k=u(T,2),w=d(k,!0);n(k),V(()=>{x(k,"href",p(b).href),D(w,p(b).name)}),S(m,h)}),n(_),n(o),n(a),S(e,a)}function hi(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];J(e,Y({name:"mail"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function gi(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];J(e,Y({name:"linkedin"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function _i(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];J(e,Y({name:"heart"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}function bi(e,t){const i=K(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];J(e,Y({name:"menu"},()=>i,{get iconNode(){return a},children:(r,o)=>{var s=q(),l=H(s);G(l,t,"default",{}),S(r,s)},$$slots:{default:!0}}))}var yi=ze('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z"></path></svg>'),wi=ze('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>'),ki=j('<a class="svelte-1w9k76x"><!></a>'),$i=j(`<section class="contact-section svelte-1w9k76x" id="contacts"><div class="contact-panel svelte-1w9k76x"><div class="contact-copy svelte-1w9k76x"><span class="kicker svelte-1w9k76x">Contact</span> <h2 class="svelte-1w9k76x">Let’s build something meaningful.</h2> <p class="svelte-1w9k76x">I work across web, blockchain, systems, and embedded engineering - from product interfaces
				and smart contracts to developer tooling and technical partnerships.</p></div> <div class="contact-actions svelte-1w9k76x"><a class="primary-contact svelte-1w9k76x" href="mailto:akintadetemi19@gmail.com">Book a call <!></a> <div class="social-links svelte-1w9k76x"></div></div></div></section>`);function Ti(e){const t=[{id:0,icon:hi,link:"mailto:akintadetemi19@gmail.com",name:"Email"},{id:1,customSvg:"discord",link:"https://discord.com/users/1061727196953190440",name:"Discord"},{id:2,customSvg:"x",link:"https://x.com/Temi_tade2805",name:"X"},{id:3,icon:gi,link:"https://linkedin.com/in/temiloluwa-akintade-4b6798254",name:"LinkedIn"},{id:4,icon:De,link:"https://github.com/Temi-Tade",name:"GitHub"}];var i=$i(),a=d(i),r=u(d(a),2),o=d(r),s=u(d(o));se(s,{size:17}),n(o);var l=u(o,2);te(l,5,()=>t,_=>_.id,(_,m)=>{var b=ki(),y=d(b);{var h=f=>{var k=yi();S(f,k)},T=f=>{var k=q(),w=H(k);{var E=A=>{var g=wi();S(A,g)},C=A=>{var g=q(),z=H(g);{var c=v=>{const $=Ve(()=>p(m).icon);p($)(v,{size:19})};X(z,v=>{p(m).icon&&v(c)},!0)}S(A,g)};X(w,A=>{p(m).customSvg==="discord"?A(E):A(C,!1)},!0)}S(f,k)};X(y,f=>{p(m).customSvg==="x"?f(h):f(T,!1)})}n(b),V((f,k)=>{x(b,"href",p(m).link),x(b,"title",p(m).name),x(b,"aria-label",p(m).name),x(b,"target",f),x(b,"rel",k)},[()=>p(m).link.startsWith("http")?"_blank":void 0,()=>p(m).link.startsWith("http")?"noreferrer":void 0]),S(_,b)}),n(l),n(r),n(a),n(i),S(e,i)}function at(e,t){oe(t,!1)}var Si=j('<li><a class="nav-link svelte-1j7efyp"> </a></li>'),Ai=(e,t)=>oe(t,!p(t)),xi=j('<header class="topbar svelte-1j7efyp"><div class="nav-shell svelte-1j7efyp"><a href="#top" class="brand svelte-1j7efyp" aria-label="Temiloluwa home page"><img alt="Temiloluwa" class="svelte-1j7efyp"/></a> <nav aria-label="Main navigation"><ul class="svelte-1j7efyp"><!> <li class="mobile-cta-item svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta mobile-cta svelte-1j7efyp">Hire me</a></li></ul></nav> <div class="nav-actions svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta desktop-cta svelte-1j7efyp">Hire me</a> <button type="button" class="menu-button svelte-1j7efyp" aria-label="Toggle navigation menu"><!></button></div></div> <div class="reading-progress svelte-1j7efyp" aria-hidden="true"></div></header>');function Ei(e,t){Ee(t,!0);const i=[{id:0,name:"Home",href:"#top"},{id:1,name:"About",href:"#about"},{id:2,name:"Projects",href:"#projects"},{id:3,name:"Spotlights",href:"#spotlights"},{id:4,name:"Articles",href:"#articles"},{id:5,name:"Contacts",href:"#contacts"}];let a=ke(!1),r=ke(0);function o(){if(typeof window>"u")return;const v=document.documentElement.scrollHeight-window.innerHeight;if(v<=0){oe(r,0);return}oe(r,Math.min(1,Math.max(0,window.scrollY/v)),!0)}aa(()=>(o(),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}));var s=xi(),l=d(s),_=d(l),m=d(_);n(_);var b=u(_,2);let y;var h=d(b),T=d(h);te(T,17,()=>i,v=>v.id,(v,$)=>{var I=Si(),M=d(I);M.__click=[at,a];var N=d(M,!0);n(M),n(I),V(()=>{x(M,"href",p($).href),D(N,p($).name)}),S(v,I)});var f=u(T,2),k=d(f);k.__click=[at,a],n(f),n(h),n(b);var w=u(b,2),E=u(d(w),2);E.__click=[Ai,a];var C=d(E);{var A=v=>{kt(v,{size:20})},g=v=>{bi(v,{size:20})};X(C,v=>{p(a)?v(A):v(g,!1)})}n(E),n(w),n(l);var z=u(l,2);let c;n(s),V((v,$)=>{x(m,"src",`${F??""}/images/TEEE.png`),y=ht(b,1,"nav-panel svelte-1j7efyp",null,y,v),x(E,"aria-expanded",p(a)),c=gt(z,"",c,$)},[()=>({open:p(a)}),()=>({transform:`scaleX(${p(r)})`})]),S(e,s),Me()}$e(["click"]);var zi=j('<meta name="description"/> <meta name="author" content="Temiloluwa Akintade"/> <meta name="keywords" content="Temiloluwa Akintade, Temi-Tade, Software Developer, Full-Stack Developer, Blockchain Developer, Ethereum, Smart Contracts, Systems Programming, Embedded Software, ShipTok, Ohm-E, RivETH, qodon, Medusa, Skaylar, OneKey Partner"/> <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/> <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/> <link rel="canonical"/> <link rel="sitemap" type="application/xml" title="Sitemap"/> <link rel="alternate" type="text/plain" title="LLMs.txt"/> <link rel="alternate" type="text/plain" title="Full AI Agent Dossier"/> <meta property="og:type" content="website"/> <meta property="og:site_name" content="Temiloluwa Akintade"/> <meta property="og:locale" content="en_US"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:url"/> <meta property="og:image"/> <meta property="og:image:width" content="400"/> <meta property="og:image:height" content="500"/> <meta property="og:image:alt" content="Temiloluwa Akintade, software developer"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site" content="@Temi_tade2805"/> <meta name="twitter:creator" content="@Temi_tade2805"/> <meta name="twitter:title"/> <meta name="twitter:description"/> <meta name="twitter:image"/> <meta name="twitter:image:alt" content="Temiloluwa Akintade, software developer"/> <!>',1),Mi=j('<div class="page-shell svelte-1uha8ag" id="top"><!> <main class="content-shell svelte-1uha8ag"><!> <!> <!> <!> <!></main> <footer class="site-footer svelte-1uha8ag"><div class="footer-inner svelte-1uha8ag"><p class="svelte-1uha8ag">Made with <!> by Temiloluwa. All rights reserved.</p> <a href="#top" class="back-top svelte-1uha8ag">Back to top</a></div></footer></div>');function Hi(e,t){Ee(t,!1);const a=window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"?`${window.location.origin}${F?`${F}/`:"/"}`:"https://temi-tade.github.io/portfolio-website/",r="Temiloluwa Akintade | Software Developer",o="Temiloluwa Akintade is a software developer with 5+ years building web apps, blockchain tooling, smart contracts, systems, and embedded software.",s=`${a}images/temiloluwa-peerlist.jpg`,l={"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${a}#website`,url:a,name:"Temiloluwa Akintade Portfolio",description:o,inLanguage:"en",author:{"@id":`${a}#person`}},{"@type":"ProfilePage","@id":`${a}#profilepage`,url:a,name:r,description:o,dateModified:"2026-11-27",isPartOf:{"@id":`${a}#website`},mainEntity:{"@id":`${a}#person`}},{"@type":"Person","@id":`${a}#person`,name:"Temiloluwa Akintade",alternateName:["Temiloluwa","Temi-Tade","temi_0x0"],url:a,image:{"@type":"ImageObject",url:s,caption:"Temiloluwa Akintade, software developer"},email:"mailto:akintadetemi19@gmail.com",jobTitle:"Software Developer",description:"Software developer with 5+ years of experience building web applications, blockchain products, smart contracts, systems, and embedded software.",knowsAbout:["Web Application Development","Blockchain Engineering","Ethereum Smart Contracts","Systems Programming","Embedded Software","React","Next.js","Svelte","TypeScript","Tailwind CSS","Node.js","Supabase","Solidity","Hardhat","Foundry","C","Arduino"],sameAs:["https://github.com/Temi-Tade","https://x.com/Temi_tade2805","https://linkedin.com/in/temiloluwa-akintade-4b6798254","https://dev.to/js_cipher","https://medium.com/@temi_lolu0x0","https://coderlegion.com/user/temi_0x0","https://peerlist.io/temi_lolu","https://discord.com/users/1061727196953190440"]},{"@type":"ItemList","@id":`${a}#projects`,name:"Featured Software Projects",itemListElement:[{"@type":"ListItem",position:1,item:{"@type":"WebApplication",name:"ShipTok",url:"https://shiptok-app.vercel.app",applicationCategory:"DeveloperApplication",description:"A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.",author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:2,item:{"@type":"SoftwareSourceCode",name:"Ohm-E",url:"https://github.com/Temi-Tade/Ohm-E",codeRepository:"https://github.com/Temi-Tade/Ohm-E",programmingLanguage:["TypeScript","React"],description:"An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.",author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:3,item:{"@type":"SoftwareSourceCode",name:"RivETH",url:"https://temi-tade.github.io/RivETHDocs",codeRepository:"https://github.com/Temi-Tade/RivETH",programmingLanguage:["JavaScript","Node.js","Solidity"],description:"An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.",author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:4,item:{"@type":"SoftwareSourceCode",name:"qodon",url:"https://github.com/Temi-Tade/qodon",codeRepository:"https://github.com/Temi-Tade/qodon",programmingLanguage:"C",description:"A CLI-based genomics tool written in C.",author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:5,item:{"@type":"SoftwareSourceCode",name:"Medusa",url:"https://temi-tade.github.io/medusa",codeRepository:"https://github.com/Temi-Tade/medusa",programmingLanguage:"JavaScript",description:"A password-based file encryption tool with lossless decryption.",author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:6,item:{"@type":"SoftwareSourceCode",name:"Skaylar",url:"https://temi-tade.github.io/Skaylar",codeRepository:"https://github.com/Temi-Tade/Skaylar",programmingLanguage:"JavaScript",description:"A tool for analysing and visualizing first-digit distributions using Benford's Law.",author:{"@id":`${a}#person`}}}]},{"@type":"ItemList","@id":`${a}#publications`,name:"Spotlights, Interviews, and Technical Articles",itemListElement:[{"@type":"ListItem",position:1,item:{"@type":"Article",headline:"Coinpedia Ethereum Builder Spotlight",url:"https://coinpedia.org",publisher:{"@type":"Organization",name:"Coinpedia"},about:{"@id":`${a}#person`}}},{"@type":"ListItem",position:2,item:{"@type":"VideoObject",name:"Developer Spotlight Interview with Tom Smith",description:"In-depth video interview discussing systems programming, web3 infrastructure, building RivETH, and developer workflows.",url:"https://youtu.be/RZbiTxeRFCg?si=RffGqBimDspATWG4",thumbnailUrl:`${a}images/coderlegion-interview.jpg`,publisher:{"@type":"Organization",name:"CoderLegion"}}},{"@type":"ListItem",position:3,item:{"@type":"TechArticle",headline:"I built Medusa - A lossless password-based file encryption tool",url:"https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip",datePublished:"2026-08-29",publisher:{"@type":"Organization",name:"DEV Community"},author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:4,item:{"@type":"TechArticle",headline:"Are computers truly random? How chaos powers randomness.",url:"https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93",datePublished:"2026-07-15",publisher:{"@type":"Organization",name:"DEV Community"},author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:5,item:{"@type":"TechArticle",headline:"Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)",url:"https://coderlegion.com/20141/how-do-web3-hardware-wallets-work",publisher:{"@type":"Organization",name:"CoderLegion"},author:{"@id":`${a}#person`}}},{"@type":"ListItem",position:6,item:{"@type":"TechArticle",headline:"Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs",url:"https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs",publisher:{"@type":"Organization",name:"CoderLegion"},author:{"@id":`${a}#person`}}}]}]},_='<script type="application/ld+json">'+JSON.stringify(l).replace(/</g,"\\u003c")+"<\/script>";it();var m=Mi();da(z=>{var c=zi();ia.title="Temiloluwa Akintade | Software Developer";var v=H(c);x(v,"content",o);var $=u(v,10),I=u($,2),M=u(I,2),N=u(M,2),L=u(N,8);x(L,"content",r);var R=u(L,2);x(R,"content",o);var U=u(R,2),W=u(U,2),B=u(W,14);x(B,"content",r);var P=u(B,2);x(P,"content",o);var Z=u(P,2),ce=u(Z,4);ga(ce,()=>_),V(()=>{x($,"href",a),x(I,"href",`${F}/sitemap.xml`),x(M,"href",`${F}/llms.txt`),x(N,"href",`${F}/llms-full.txt`),x(U,"content",a),x(W,"content",s),x(Z,"content",s)}),S(z,c)});var b=d(m);Ei(b,{});var y=u(b,2),h=d(y);Ha(h);var T=u(h,2);Ja(T);var f=u(T,2);li(f);var k=u(f,2);mi(k);var w=u(k,2);Ti(w),n(y);var E=u(y,2),C=d(E),A=d(C),g=u(d(A));_i(g,{fill:"#ef4444",color:"#ef4444",size:15}),re(),n(A),re(2),n(C),n(E),n(m),S(e,m),Me()}export{Hi as component};
