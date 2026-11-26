import"../chunks/DsnmJJEf.js";import{i as wa}from"../chunks/DSfrPXMk.js";import{aj as Qe,S as He,J as ye,aG as ea,Q as ge,K as P,aq as aa,L as ke,q as u,a6 as Oe,N as ka,O as ya,P as Ve,R as ne,Z as oe,an as $a,at as za,T as ve,W as Aa,aH as $e,aI as ze,U as xa,aJ as qe,aC as Ta,$ as Re,ax as ta,i as sa,X as Le,Y as ia,aK as Sa,aL as Se,aM as ue,aN as Ma,ap as Ea,aO as Na,aw as Ca,aP as Ia,_ as ra,aQ as ja,M as Ha,aR as Oa,az as La,aA as oa,aS as Pa,aT as Da,al as Va,aU as qa,aV as Ra,aW as Ba,aX as Wa,aY as Ka,aZ as Fa,V as Ua,a_ as Ga,C as Pe,a$ as Ae,B as A,F as De,G as d,I as h,e as Be,v as fe,H as o,y as V,z as O,aE as la,b0 as Ya,D as j,E as R,b1 as te,A as Za,b2 as Xa,aD as _e,a3 as na,a4 as re,aF as We,u as Ja,b3 as Qa,b4 as et}from"../chunks/D6U-4dBW.js";import{i as at,a as tt,c as st,d as be,n as it,b as rt,s as D,e as ot,f as lt}from"../chunks/eiGYpfXk.js";import{b as Z}from"../chunks/BIqWgdBe.js";import{l as B,p as de,s as F,i as X,c as nt}from"../chunks/ro6PcnmC.js";function ct(e,a){if(a){const t=document.body;e.autofocus=!0,Qe(()=>{document.activeElement===t&&e.focus()})}}let Ke=!1;function dt(){Ke||(Ke=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const a of e.target.elements)a.__on_r?.()})},{capture:!0}))}function vt(e,a){return a}function ut(e,a,t){for(var s=e.items,i=[],l=a.length,r=0;r<l;r++)Na(a[r].e,i,!0);var c=l>0&&i.length===0&&t!==null;if(c){var k=t.parentNode;Ca(k),k.append(t),s.clear(),ae(e,a[0].prev,a[l-1].next)}Ia(i,()=>{for(var m=0;m<l;m++){var w=a[m];c||(s.delete(w.k),ae(e,w.prev,w.next)),ue(w.e,!c)}})}function ee(e,a,t,s,i,l=null){var r=e,c={flags:a,items:new Map,first:null},k=(a&ea)!==0;if(k){var m=e;r=P?ge(aa(m)):m.appendChild(He())}P&&ke();var w=null,y=!1,p=new Map,z=Oe(()=>{var T=t();return sa(T)?T:T==null?[]:ta(T)}),f,g;function b(){pt(g,f,c,p,r,i,a,s,t),l!==null&&(f.length===0?w?Le(w):w=ve(()=>l(r)):w!==null&&ia(w,()=>{w=null}))}ye(()=>{g??=ra,f=u(z);var T=f.length;if(y&&T===0)return;y=T===0;let E=!1;if(P){var x=ka(r)===ya;x!==(T===0)&&(r=Ve(),ge(r),ne(!1),E=!0)}if(P){for(var _=null,S,v=0;v<T;v++){if(oe.nodeType===$a&&oe.data===za){r=oe,E=!0,ne(!1);break}var n=f[v],$=s(n,v);S=Ce(oe,c,_,null,n,$,v,i,a,t),c.items.set($,S),_=S}T>0&&ge(Ve())}if(P)T===0&&l&&(w=ve(()=>l(r)));else if(Aa()){var C=new Set,N=xa;for(v=0;v<T;v+=1){n=f[v],$=s(n,v);var I=c.items.get($)??p.get($);I?(a&($e|ze))!==0&&ca(I,n,v,a):(S=Ce(null,c,null,null,n,$,v,i,a,t,!0),p.set($,S)),C.add($)}for(const[H,q]of c.items)C.has(H)||N.skipped_effects.add(q.e);N.add_callback(b)}else b();E&&ne(!0),u(z)}),P&&(r=oe)}function pt(e,a,t,s,i,l,r,c,k){var m=(r&Ma)!==0,w=(r&($e|ze))!==0,y=a.length,p=t.items,z=t.first,f=z,g,b=null,T,E=[],x=[],_,S,v,n;if(m)for(n=0;n<y;n+=1)_=a[n],S=c(_,n),v=p.get(S),v!==void 0&&(v.a?.measure(),(T??=new Set).add(v));for(n=0;n<y;n+=1){if(_=a[n],S=c(_,n),v=p.get(S),v===void 0){var $=s.get(S);if($!==void 0){s.delete(S),p.set(S,$);var C=b?b.next:f;ae(t,b,$),ae(t,$,C),Me($,C,i),b=$}else{var N=f?f.e.nodes_start:i;b=Ce(N,t,b,b===null?t.first:b.next,_,S,n,l,r,k)}p.set(S,b),E=[],x=[],f=b.next;continue}if(w&&ca(v,_,n,r),(v.e.f&Se)!==0&&(Le(v.e),m&&(v.a?.unfix(),(T??=new Set).delete(v))),v!==f){if(g!==void 0&&g.has(v)){if(E.length<x.length){var I=x[0],H;b=I.prev;var q=E[0],J=E[E.length-1];for(H=0;H<E.length;H+=1)Me(E[H],I,i);for(H=0;H<x.length;H+=1)g.delete(x[H]);ae(t,q.prev,J.next),ae(t,b,q),ae(t,J,I),f=I,b=J,n-=1,E=[],x=[]}else g.delete(v),Me(v,f,i),ae(t,v.prev,v.next),ae(t,v,b===null?t.first:b.next),ae(t,b,v),b=v;continue}for(E=[],x=[];f!==null&&f.k!==S;)(f.e.f&Se)===0&&(g??=new Set).add(f),x.push(f),f=f.next;if(f===null)continue;v=f}E.push(v),b=v,f=v.next}if(f!==null||g!==void 0){for(var L=g===void 0?[]:ta(g);f!==null;)(f.e.f&Se)===0&&L.push(f),f=f.next;var W=L.length;if(W>0){var G=(r&ea)!==0&&y===0?i:null;if(m){for(n=0;n<W;n+=1)L[n].a?.measure();for(n=0;n<W;n+=1)L[n].a?.fix()}ut(t,L,G)}}m&&Qe(()=>{if(T!==void 0)for(v of T)v.a?.apply()}),e.first=t.first&&t.first.e,e.last=b&&b.e;for(var le of s.values())ue(le.e);s.clear()}function ca(e,a,t,s){(s&$e)!==0&&qe(e.v,a),(s&ze)!==0?qe(e.i,t):e.i=t}function Ce(e,a,t,s,i,l,r,c,k,m,w){var y=(k&$e)!==0,p=(k&Sa)===0,z=y?p?Ta(i,!1,!1):Re(i):i,f=(k&ze)===0?r:Re(r),g={i:f,v:z,k:l,a:null,e:null,prev:t,next:s};try{if(e===null){var b=document.createDocumentFragment();b.append(e=He())}return g.e=ve(()=>c(e,z,f,m),P),g.e.prev=t&&t.e,g.e.next=s&&s.e,t===null?w||(a.first=g):(t.next=g,t.e.next=g.e),s!==null&&(s.prev=g,s.e.prev=g.e),g}finally{}}function Me(e,a,t){for(var s=e.next?e.next.e.nodes_start:t,i=a?a.e.nodes_start:t,l=e.e.nodes_start;l!==null&&l!==s;){var r=Ea(l);i.before(l),l=r}}function ae(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function K(e,a,t,s,i){P&&ke();var l=a.$$slots?.[t],r=!1;l===!0&&(l=a.children,r=!0),l===void 0||l(e,r?()=>s:s)}function ft(e,a,t,s,i,l){let r=P;P&&ke();var c,k,m=null;P&&oe.nodeType===ja&&(m=oe,ke());var w=P?oe:e,y;ye(()=>{const p=a()||null;var z=Oa;p!==c&&(y&&(p===null?ia(y,()=>{y=null,k=null}):p===k?Le(y):ue(y)),p&&p!==k&&(y=ve(()=>{if(m=P?m:document.createElementNS(z,p),La(m,m),s){P&&at(p)&&m.append(document.createComment(""));var f=P?aa(m):m.appendChild(He());P&&(f===null?ne(!1):ge(f)),s(m,f)}ra.nodes_end=m,w.before(m)})),c=p,c&&(k=c))},Ha),r&&(ne(!0),ge(w))}function ht(e,a){var t=void 0,s;ye(()=>{t!==(t=a())&&(s&&(ue(s),s=null),t&&(s=ve(()=>{oa(()=>t(e))})))})}function da(e){var a,t,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(a=0;a<i;a++)e[a]&&(t=da(e[a]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function mt(){for(var e,a,t=0,s="",i=arguments.length;t<i;t++)(e=arguments[t])&&(a=da(e))&&(s&&(s+=" "),s+=a);return s}function gt(e){return typeof e=="object"?mt(e):e??""}const Fe=[...` 	
\r\f \v\uFEFF`];function _t(e,a,t){var s=e==null?"":""+e;if(a&&(s=s?s+" "+a:a),t){for(var i in t)if(t[i])s=s?s+" "+i:i;else if(s.length)for(var l=i.length,r=0;(r=s.indexOf(i,r))>=0;){var c=r+l;(r===0||Fe.includes(s[r-1]))&&(c===s.length||Fe.includes(s[c]))?s=(r===0?"":s.substring(0,r))+s.substring(c+1):r=c}}return s===""?null:s}function Ue(e,a=!1){var t=a?" !important;":";",s="";for(var i in e){var l=e[i];l!=null&&l!==""&&(s+=" "+i+": "+l+t)}return s}function Ee(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function bt(e,a){if(a){var t="",s,i;if(Array.isArray(a)?(s=a[0],i=a[1]):s=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,r=0,c=!1,k=[];s&&k.push(...Object.keys(s).map(Ee)),i&&k.push(...Object.keys(i).map(Ee));var m=0,w=-1;const g=e.length;for(var y=0;y<g;y++){var p=e[y];if(c?p==="/"&&e[y-1]==="*"&&(c=!1):l?l===p&&(l=!1):p==="/"&&e[y+1]==="*"?c=!0:p==='"'||p==="'"?l=p:p==="("?r++:p===")"&&r--,!c&&l===!1&&r===0){if(p===":"&&w===-1)w=y;else if(p===";"||y===g-1){if(w!==-1){var z=Ee(e.substring(m,w).trim());if(!k.includes(z)){p!==";"&&y++;var f=e.substring(m,y).trim();t+=" "+f+";"}}m=y+1,w=-1}}}}return s&&(t+=Ue(s)),i&&(t+=Ue(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function va(e,a,t,s,i,l){var r=e.__className;if(P||r!==t||r===void 0){var c=_t(t,s,l);(!P||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):a?e.className=c:e.setAttribute("class",c)),e.__className=t}else if(l&&i!==l)for(var k in l){var m=!!l[k];(i==null||m!==!!i[k])&&e.classList.toggle(k,m)}return l}function Ne(e,a={},t,s){for(var i in t){var l=t[i];a[i]!==l&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,l,s))}}function ua(e,a,t,s){var i=e.__style;if(P||i!==a){var l=bt(a,s);(!P||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=a}else s&&(Array.isArray(s)?(Ne(e,t?.[0],s[0]),Ne(e,t?.[1],s[1],"important")):Ne(e,t,s));return s}function Ie(e,a,t=!1){if(e.multiple){if(a==null)return;if(!sa(a))return Pa();for(var s of e.options)s.selected=a.includes(Ge(s));return}for(s of e.options){var i=Ge(s);if(Da(i,a)){s.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function wt(e){var a=new MutationObserver(()=>{Ie(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Va(()=>{a.disconnect()})}function Ge(e){return"__value"in e?e.__value:e.value}const he=Symbol("class"),me=Symbol("style"),pa=Symbol("is custom element"),fa=Symbol("is html");function kt(e){if(P){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;M(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;M(e,"checked",null),e.checked=i}}};e.__on_r=t,Ga(t),dt()}}function yt(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function M(e,a,t,s){var i=ha(e);P&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=t)&&(a==="loading"&&(e[Ra]=t),t==null?e.removeAttribute(a):typeof t!="string"&&ma(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function $t(e,a,t,s,i=!1,l=!1){if(P&&i&&e.tagName==="INPUT"){var r=e,c=r.type==="checkbox"?"defaultChecked":"defaultValue";c in t||kt(r)}var k=ha(e),m=k[pa],w=!k[fa];let y=P&&m;y&&ne(!1);var p=a||{},z=e.tagName==="OPTION";for(var f in a)f in t||(t[f]=null);t.class?t.class=gt(t.class):t[he]&&(t.class=null),t[me]&&(t.style??=null);var g=ma(e);for(const v in t){let n=t[v];if(z&&v==="value"&&n==null){e.value=e.__value="",p[v]=n;continue}if(v==="class"){var b=e.namespaceURI==="http://www.w3.org/1999/xhtml";va(e,b,n,s,a?.[he],t[he]),p[v]=n,p[he]=t[he];continue}if(v==="style"){ua(e,n,a?.[me],t[me]),p[v]=n,p[me]=t[me];continue}var T=p[v];if(!(n===T&&!(n===void 0&&e.hasAttribute(v)))){p[v]=n;var E=v[0]+v[1];if(E!=="$$")if(E==="on"){const $={},C="$$"+v;let N=v.slice(2);var x=rt(N);if(tt(N)&&(N=N.slice(0,-7),$.capture=!0),!x&&T){if(n!=null)continue;e.removeEventListener(N,p[C],$),p[C]=null}if(n!=null)if(x)e[`__${N}`]=n,be([N]);else{let I=function(H){p[v].call(this,H)};p[C]=st(N,e,I,$)}else x&&(e[`__${N}`]=void 0)}else if(v==="style")M(e,v,n);else if(v==="autofocus")ct(e,!!n);else if(!m&&(v==="__value"||v==="value"&&n!=null))e.value=e.__value=n;else if(v==="selected"&&z)yt(e,n);else{var _=v;w||(_=it(_));var S=_==="defaultValue"||_==="defaultChecked";if(n==null&&!m&&!S)if(k[v]=null,_==="value"||_==="checked"){let $=e;const C=a===void 0;if(_==="value"){let N=$.defaultValue;$.removeAttribute(_),$.defaultValue=N,$.value=$.__value=C?N:null}else{let N=$.defaultChecked;$.removeAttribute(_),$.defaultChecked=N,$.checked=C?N:!1}}else e.removeAttribute(v);else S||g.includes(_)&&(m||typeof n!="string")?(e[_]=n,_ in k&&(k[_]=Ua)):typeof n!="function"&&M(e,_,n)}}}return y&&ne(!0),p}function Ye(e,a,t=[],s=[],i,l=!1,r=!1){qa(t,s,c=>{var k=void 0,m={},w=e.nodeName==="SELECT",y=!1;if(ye(()=>{var z=a(...c.map(u)),f=$t(e,k,z,i,l,r);y&&w&&"value"in z&&Ie(e,z.value);for(let b of Object.getOwnPropertySymbols(m))z[b]||ue(m[b]);for(let b of Object.getOwnPropertySymbols(z)){var g=z[b];b.description===Ka&&(!k||g!==k[b])&&(m[b]&&ue(m[b]),m[b]=ve(()=>ht(e,()=>g))),f[b]=g}k=f}),w){var p=e;oa(()=>{Ie(p,k.value,!0),wt(p)})}y=!0})}function ha(e){return e.__attributes??={[pa]:e.nodeName.includes("-"),[fa]:e.namespaceURI===Ba}}var Ze=new Map;function ma(e){var a=e.getAttribute("is")||e.nodeName,t=Ze.get(a);if(t)return t;Ze.set(a,t=[]);for(var s,i=e,l=Element.prototype;l!==i;){s=Fa(i);for(var r in s)s[r].set&&t.push(r);i=Wa(i)}return t}/**
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
 */const zt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var At=Ae("<svg><!><!></svg>");function U(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]),s=B(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Pe(a,!1);let i=de(a,"name",8,void 0),l=de(a,"color",8,"currentColor"),r=de(a,"size",8,24),c=de(a,"strokeWidth",8,2),k=de(a,"absoluteStrokeWidth",8,!1),m=de(a,"iconNode",24,()=>[]);const w=(...f)=>f.filter((g,b,T)=>!!g&&T.indexOf(g)===b).join(" ");wa();var y=At();Ye(y,(f,g)=>({...zt,...s,width:r(),height:r(),stroke:l(),"stroke-width":f,class:g}),[()=>(fe(k()),fe(c()),fe(r()),Be(()=>k()?Number(c())*24/Number(r()):c())),()=>(fe(i()),fe(t),Be(()=>w("lucide-icon","lucide",i()?`lucide-${i()}`:"",t.class)))]);var p=d(y);ee(p,1,m,vt,(f,g)=>{var b=la(()=>Ya(u(g),2));let T=()=>u(b)[0],E=()=>u(b)[1];var x=V(),_=O(x);ft(_,T,!0,(S,v)=>{Ye(S,()=>({...E()}))}),A(f,x)});var z=h(p);K(z,a,"default",{}),o(y),A(e,y),De()}function xt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];U(e,F({name:"file-text"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function ie(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];U(e,F({name:"arrow-up-right"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function Tt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"}],["path",{d:"M20.054 15.987H3.946"}]];U(e,F({name:"laptop"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function St(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}]];U(e,F({name:"blocks"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function Mt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];U(e,F({name:"cpu"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}var Et=j('<li class="tech-item svelte-1bmiiuv"><img class="tech-logo svelte-1bmiiuv" referrerpolicy="no-referrer"/> <span> </span></li>'),Nt=j('<li class="svelte-1bmiiuv"><span class="discipline-icon svelte-1bmiiuv"><!></span> <span> </span></li>'),Ct=j(`<section class="hero-section svelte-1bmiiuv" id="about"><div class="hero-grid svelte-1bmiiuv"><div class="hero-copy svelte-1bmiiuv"><h1 class="svelte-1bmiiuv">Hello, I am <span class="name-accent svelte-1bmiiuv">Temiloluwa</span> <span class="role-title svelte-1bmiiuv">Software Developer</span></h1> <p class="lead svelte-1bmiiuv">I am a software developer with 5+ years of experience building products across web,
				blockchain, systems, and embedded spaces. I design and ship reliable software that balances
				product thinking, engineering quality, and real-world usability.</p> <div class="action-row svelte-1bmiiuv"><a class="primary-action svelte-1bmiiuv" target="_blank" rel="noreferrer"><!> My Resume</a> <a class="secondary-action svelte-1bmiiuv" href="mailto:akintadetemi19@gmail.com">Got a project? <!></a></div> <div class="stack-block svelte-1bmiiuv"><span class="stack-label svelte-1bmiiuv">Core Stack</span> <ul class="tech-list svelte-1bmiiuv"></ul></div></div> <div class="hero-visual svelte-1bmiiuv"><figure class="portrait-frame svelte-1bmiiuv"><div class="portrait-media svelte-1bmiiuv"><img alt="Temiloluwa Akintade, software developer" width="400" height="500" fetchpriority="high" referrerpolicy="no-referrer" class="svelte-1bmiiuv"/></div> <figcaption class="portrait-caption svelte-1bmiiuv"><strong class="svelte-1bmiiuv">5+ Years</strong> <span class="svelte-1bmiiuv">Web · Blockchain · Systems · Embedded</span></figcaption></figure></div></div> <div class="about-band svelte-1bmiiuv"><div class="about-copy svelte-1bmiiuv"><h2 class="svelte-1bmiiuv">About me</h2> <p class="svelte-1bmiiuv">I have spent the last 5+ years building software across the stack - from full-stack web
				apps and interactive circuit simulations to smart contracts, onchain developer tooling,
				low-level systems, and embedded prototypes.</p> <p class="svelte-1bmiiuv">I enjoy turning ambitious ideas into real, usable products that work in the wild.</p></div> <div class="about-disciplines svelte-1bmiiuv"><h3 class="svelte-1bmiiuv">What I build</h3> <ul class="svelte-1bmiiuv"></ul></div></div></section>`);function It(e){const a=[{id:0,name:"React",logo:"https://cdn.simpleicons.org/react/61dafb"},{id:1,name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/f4f4f5"},{id:2,name:"Tailwind",logo:"https://cdn.simpleicons.org/tailwindcss/38bdf8"},{id:3,name:"Svelte",logo:"https://cdn.simpleicons.org/svelte/ff3e00"},{id:4,name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6"},{id:5,name:"Node.js",logo:"https://cdn.simpleicons.org/nodedotjs/5fa04e"},{id:6,name:"Supabase",logo:"https://cdn.simpleicons.org/supabase/3ecf8e"},{id:7,name:"Solidity",logo:"https://cdn.simpleicons.org/solidity/a78bfa"},{id:8,name:"Foundry",logo:"https://cdn.simpleicons.org/ethereum/e4e4e7"},{id:9,name:"C",logo:"https://cdn.simpleicons.org/c/60a5fa"},{id:10,name:"Arduino",logo:"https://cdn.simpleicons.org/arduino/00b4bd"}],t=[{name:"Web Application Development",icon:Tt},{name:"Smart Contract Development & dApp Integration",icon:St},{name:"Systems & Embedded Software Development",icon:Mt}];var s=Ct(),i=d(s),l=d(i),r=h(d(l),4),c=d(r),k=d(c);xt(k,{size:17}),te(),o(c);var m=h(c,2),w=h(d(m));ie(w,{size:16}),o(m),o(r);var y=h(r,2),p=h(d(y),2);ee(p,5,()=>a,_=>_.id,(_,S)=>{var v=Et(),n=d(v),$=h(n,2),C=d($,!0);o($),o(v),R(()=>{M(n,"src",u(S).logo),M(n,"alt",`${u(S).name} logo`),D(C,u(S).name)}),A(_,v)}),o(p),o(y),o(l);var z=h(l,2),f=d(z),g=d(f),b=d(g);o(g),te(2),o(f),o(z),o(i);var T=h(i,2),E=h(d(T),2),x=h(d(E),2);ee(x,5,()=>t,_=>_.name,(_,S)=>{const v=Oe(()=>u(S).icon);var n=Nt(),$=d(n),C=d($);u(v)(C,{size:18}),o($);var N=h($,2),I=d(N,!0);o(N),o(n),R(()=>D(I,u(S).name)),A(_,n)}),o(x),o(E),o(T),o(s),R(()=>{M(c,"href",`${Z??""}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf`),M(b,"src",`${Z??""}/images/temiloluwa-peerlist.jpg`)}),A(e,s)}function je(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];U(e,F({name:"github"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function ga(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];U(e,F({name:"x"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}var jt=(e,a)=>{e.target===e.currentTarget&&a.onClose()},Ht=(e,a)=>a.onClose(),Ot=j('<div class="modal-backdrop svelte-16ml2tb" aria-modal="true" role="dialog" tabindex="-1"><div class="modal-panel svelte-16ml2tb"><button type="button" class="close-button svelte-16ml2tb" aria-label="Close modal"><!></button> <!></div></div>');function _a(e,a){Pe(a,!0);function t(k){k.key==="Escape"&&a.onClose()}var s=Ot();ot("keydown",Xa,t),s.__click=[jt,a];var i=d(s),l=d(i);l.__click=[Ht,a];var r=d(l);ga(r,{size:18}),o(l);var c=h(l,2);Za(c,()=>a.children),o(i),o(s),A(e,s),De()}be(["click"]);var Lt=j('<a target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc"><!> GitHub</a>'),Pt=j('<h3 class="modal-title svelte-181xidc"> </h3> <div class="modal-image-wrap svelte-181xidc"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></div> <p class="modal-desc svelte-181xidc"> </p> <div class="modal-actions svelte-181xidc"><!> <a target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project <!></a></div>',1),Dt=(e,a,t,s)=>{re(a,{name:u(t).name,image:u(t).image,description:u(t).description,link:u(t).link,github:u(t).github??""},!0),re(s,!0)},Vt=Ae('<svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-label="Hardhat" fill="none" class="svelte-181xidc"><path d="M12 4.5c-4.2 0-7.5 3.2-7.5 7.3V15h15v-3.2c0-4.1-3.3-7.3-7.5-7.3Z" fill="#FACC15"></path><path d="M10.25 4.75V12h3.5V4.75a7.5 7.5 0 0 0-3.5 0Z" fill="#FEF08A"></path><rect x="2.5" y="14.5" width="19" height="3" rx="1.5" fill="#EAB308"></rect></svg>'),qt=j('<img width="18" height="18" loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/>'),Rt=j('<li class="stack-icon svelte-181xidc"><!></li>'),Bt=j('<a target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc"><!> GitHub</a>'),Wt=j('<li class="project-card svelte-181xidc"><button type="button" class="image-button svelte-181xidc"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></button> <div class="project-body svelte-181xidc"><div class="project-header svelte-181xidc"><h3 class="svelte-181xidc"> </h3></div> <p class="project-description svelte-181xidc"> </p> <ul class="project-stack svelte-181xidc"></ul> <p class="project-tags svelte-181xidc"> </p> <div class="project-actions svelte-181xidc"><!> <a target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project <!></a></div></div></li>'),Kt=j('<section class="projects-section svelte-181xidc" id="projects"><!> <div class="section-heading svelte-181xidc"><div><span class="kicker svelte-181xidc">Selected work</span> <h2 class="svelte-181xidc">Builds across web, blockchain, systems, and embedded software.</h2></div> <a href="https://github.com/Temi-Tade" target="_blank" rel="noreferrer" class="github-inline svelte-181xidc">Visit my GitHub <!></a></div> <ul class="projects-grid svelte-181xidc"></ul></section>');function Ft(e){let a=_e(na({name:"",image:"",description:"",link:"",github:""})),t=_e(!1);const s={nextjs:{name:"Next.js",logo:"https://cdn.simpleicons.org/nextdotjs/f4f4f5"},typescript:{name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript/3178c6"},supabase:{name:"Supabase",logo:"https://cdn.simpleicons.org/supabase/3ecf8e"},tailwindcss:{name:"Tailwind CSS",logo:"https://cdn.simpleicons.org/tailwindcss/38bdf8"},react:{name:"React",logo:"https://cdn.simpleicons.org/react/61dafb"},javascript:{name:"JavaScript",logo:"https://cdn.simpleicons.org/javascript/f7df1e"},nodejs:{name:"Node.js",logo:"https://cdn.simpleicons.org/nodedotjs/5fa04e"},hardhat:{name:"Hardhat",custom:"hardhat"},c:{name:"C",logo:"https://cdn.simpleicons.org/c/60a5fa"}},i=[{id:4,name:"ShipTok",link:"https://shiptok-app.vercel.app",description:"A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.",stack:[s.nextjs,s.typescript,s.supabase,s.tailwindcss],tags:["Web App","Social","Makers","Discovery"],image:`${Z}/images/shiptok.png`},{id:5,name:"Ohm-E",link:"https://github.com/Temi-Tade/Ohm-E",github:"https://github.com/Temi-Tade/Ohm-E",description:"An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.",stack:[s.react,s.typescript,s.tailwindcss],tags:["Electronics","Simulation","Interactive","Web App"],image:`${Z}/images/ohm-e.png`},{id:0,name:"RivETH",link:"https://temi-tade.github.io/RivETHDocs",github:"https://github.com/Temi-Tade/RivETH",description:"An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.",stack:[s.javascript,s.nodejs,s.hardhat],tags:["Ethereum","Smart Contracts","Open Source","Dev Tools"],image:`${Z}/images/riveth.png`},{id:1,name:"qodon",link:"https://github.com/Temi-Tade/qodon",github:"https://github.com/Temi-Tade/qodon",description:"A CLI-based genomics tool. Written in C.",stack:[s.c],tags:["CLI","Genomics","Bioinformatics","C"],image:`${Z}/images/qdn_qft.png`},{id:2,name:"Medusa",link:"https://temi-tade.github.io/medusa",github:"https://github.com/Temi-Tade/medusa",description:"A password-based file encryption tool with lossless decryption.",stack:[s.javascript],tags:["Encryption","Security","File Management"],image:`${Z}/images/medusa.png`},{id:3,name:"Skaylar",link:"https://temi-tade.github.io/Skaylar",github:"https://github.com/Temi-Tade/Skaylar",description:"A tool for analysing and visualizing first-digit distributions using Benford's Law.",stack:[s.javascript],tags:["Data Analysis","Visualization","Benford's Law","Statistics"],image:`${Z}/images/Skaylar.png`}];var l=Kt(),r=d(l);{var c=p=>{_a(p,{onClose:()=>re(t,!1),children:(z,f)=>{var g=Pt(),b=O(g),T=d(b,!0);o(b);var E=h(b,2),x=d(E);o(E);var _=h(E,2),S=d(_,!0);o(_);var v=h(_,2),n=d(v);{var $=I=>{var H=Lt(),q=d(H);je(q,{size:16}),te(),o(H),R(()=>M(H,"href",u(a).github)),A(I,H)};X(n,I=>{u(a).github&&I($)})}var C=h(n,2),N=h(d(C));ie(N,{size:16}),o(C),o(v),R(()=>{D(T,u(a).name),M(x,"src",u(a).image),M(x,"alt",u(a).description),D(S,u(a).description),M(C,"href",u(a).link)}),A(z,g)},$$slots:{default:!0}})};X(r,p=>{u(t)&&p(c)})}var k=h(r,2),m=h(d(k),2),w=h(d(m));ie(w,{size:16}),o(m),o(k);var y=h(k,2);ee(y,21,()=>i,p=>p.id,(p,z)=>{var f=Wt(),g=d(f);g.__click=[Dt,a,z,t];var b=d(g);o(g);var T=h(g,2),E=d(T),x=d(E),_=d(x,!0);o(x),o(E);var S=h(E,2),v=d(S,!0);o(S);var n=h(S,2);ee(n,21,()=>u(z).stack,L=>L.name,(L,W)=>{var G=Rt(),le=d(G);{var we=se=>{var ce=Vt();A(se,ce)},pe=se=>{var ce=V(),xe=O(ce);{var Te=Y=>{var Q=qt();R(()=>{M(Q,"src",u(W).logo),M(Q,"alt",u(W).name)}),A(Y,Q)};X(xe,Y=>{u(W).logo&&Y(Te)},!0)}A(se,ce)};X(le,se=>{u(W).custom==="hardhat"?se(we):se(pe,!1)})}o(G),R(()=>M(G,"title",u(W).name)),A(L,G)}),o(n);var $=h(n,2),C=d($,!0);o($);var N=h($,2),I=d(N);{var H=L=>{var W=Bt(),G=d(W);je(G,{size:15}),te(),o(W),R(()=>M(W,"href",u(z).github)),A(L,W)};X(I,L=>{u(z).github&&L(H)})}var q=h(I,2),J=h(d(q));ie(J,{size:15}),o(q),o(N),o(T),o(f),R(L=>{M(g,"aria-label",`Inspect ${u(z).name} screenshot`),M(b,"src",u(z).image),M(b,"alt",u(z).description),D(_,u(z).name),D(v,u(z).description),M(n,"aria-label",`${u(z).name} tech stack`),D(C,L),M(q,"href",u(z).link)},[()=>u(z).tags.join(" · ")]),A(p,f)}),o(y),o(l),A(e,l)}be(["click"]);function Ut(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];U(e,F({name:"video"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function Gt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];U(e,F({name:"award"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function Yt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];U(e,F({name:"shield"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function Zt(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M16 10a4 4 0 0 1-8 0"}],["path",{d:"M3.103 6.034h17.794"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"}]];U(e,F({name:"shopping-bag"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function Xe(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];U(e,F({name:"external-link"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}var Xt=j('<h3 class="modal-title svelte-1cs26a1"> </h3> <div class="modal-image-wrap svelte-1cs26a1"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-1cs26a1"/></div> <p class="modal-desc svelte-1cs26a1"> </p> <div class="modal-actions svelte-1cs26a1"><a target="_blank" rel="noreferrer" class="project-link primary-link svelte-1cs26a1">Open feature <!></a></div>',1),Jt=(e,a,t)=>{re(a,{open:!0,title:u(t).title,image:u(t).image,description:u(t).description,link:u(t).link},!0)},Qt=j('<div class="video-badge svelte-1cs26a1"><!> <span>Video Interview</span></div>'),es=j('<div class="spotlight-card svelte-1cs26a1"><button type="button" class="image-button svelte-1cs26a1"><img loading="lazy" referrerpolicy="no-referrer" class="svelte-1cs26a1"/> <!></button> <div class="spotlight-body svelte-1cs26a1"><div class="spotlight-meta svelte-1cs26a1"><!> <span> </span></div> <h3 class="svelte-1cs26a1"> </h3> <p class="svelte-1cs26a1"> </p> <div class="spotlight-actions svelte-1cs26a1"><a target="_blank" rel="noreferrer" class="project-link primary-link svelte-1cs26a1"><!> <!></a></div></div></div>'),as=(e,a)=>{re(a,{open:!0,title:"OneKey Classic 1S - Hardware Partner Drop",image:`${Z}/images/onekey-classic-1s.jpg`,description:"Shipped by OneKey as part of our collaboration - an ultra-thin, open-source hardware wallet built for secure multi-chain cold storage and onchain signing.",link:"https://onekey.so/r/TEMI0x0/shop"},!0)},ts=j('<a target="_blank" rel="noreferrer" class="onekey-card svelte-1cs26a1"><div class="onekey-card-top svelte-1cs26a1"><span class="onekey-category svelte-1cs26a1"> </span> <!></div> <h4 class="svelte-1cs26a1"> </h4> <p class="svelte-1cs26a1"> </p> <span class="onekey-url svelte-1cs26a1"> </span></a>'),ss=j(`<section class="spotlights-section svelte-1cs26a1" id="spotlights"><!> <div class="section-heading svelte-1cs26a1"><div><span class="kicker svelte-1cs26a1">Recognition &amp; Partners</span> <h2 class="svelte-1cs26a1">Spotlights, Interviews &amp; Collaborations</h2> <p class="section-sub svelte-1cs26a1">Media features, builder spotlights, and official partnerships.</p></div></div> <div class="spotlights-grid svelte-1cs26a1"></div> <div class="onekey-banner svelte-1cs26a1"><div class="onekey-header svelte-1cs26a1"><img alt="OneKey official logo" class="onekey-logo svelte-1cs26a1" width="52" height="52" loading="lazy" referrerpolicy="no-referrer"/> <div class="onekey-title-wrap svelte-1cs26a1"><span class="kicker svelte-1cs26a1">Official Partner</span> <h3 class="svelte-1cs26a1">OneKey Collaboration &amp; Referral Links</h3> <p class="svelte-1cs26a1">Secure hardware wallets &amp; Web3 tools. Use my referral links below to get started.</p></div></div> <div class="onekey-hardware svelte-1cs26a1"><button type="button" class="hardware-image-btn svelte-1cs26a1" aria-label="View OneKey Classic 1S hardware wallet"><img alt="OneKey Classic 1S hardware wallet box shipped to Temiloluwa" loading="lazy" referrerpolicy="no-referrer" class="svelte-1cs26a1"/></button> <div class="hardware-copy svelte-1cs26a1"><span class="kicker svelte-1cs26a1">Hardware Partner Drop</span> <h4 class="svelte-1cs26a1">OneKey Classic 1S</h4> <p class="svelte-1cs26a1">Shipped by OneKey as part of our collaboration - an open-source hardware wallet built for
					secure multi-chain cold storage, offline transaction signing, and everyday Web3 workflows.</p> <div class="hardware-actions svelte-1cs26a1"><a href="https://onekey.so/r/TEMI0x0/shop" target="_blank" rel="noreferrer" class="project-link primary-link svelte-1cs26a1">Shop OneKey Classic 1S <!></a></div></div></div> <div class="onekey-links-grid svelte-1cs26a1"></div></div></section>`);function is(e){let a=_e(na({open:!1,title:"",image:"",description:"",link:""}));const t=[{id:0,title:"Coinpedia Ethereum Builder Spotlight",publication:"Coinpedia",description:"Featured builder spotlight highlighting the journey from learning web development on a mother's phone to creating tools for the Ethereum developer ecosystem.",image:`${Z}/images/coinpedia-spotlight.png`,link:"https://coinpedia.org"},{id:1,title:"Developer Spotlight Interview with Tom Smith",publication:"CoderLegion",description:"In-depth video interview discussing systems programming, web3 infrastructure, building RivETH, and developer workflows.",image:`${Z}/images/coderlegion-interview.jpg`,link:"https://youtu.be/RZbiTxeRFCg?si=RffGqBimDspATWG4",isVideo:!0}],s=[{category:"Hardware Sales",title:"Official Shop",description:"Official OneKey hardware wallet shop",url:"https://onekey.so/r/TEMI0x0/shop",icon:Zt},{category:"Perps",title:"Trade Perps",description:"Trade perpetuals on OneKey",url:"https://app.onekey.so/r/TEMI0x0/app/perps",icon:Xe},{category:"Swap",title:"Token Swap",description:"Swap tokens securely on OneKey",url:"https://app.onekey.so/r/TEMI0x0/app/swap",icon:Xe},{category:"DeFi",title:"DeFi Access",description:"Explore DeFi protocols on OneKey",url:"https://app.onekey.so/r/TEMI0x0/app/defi",icon:Yt}];var i=ss(),l=d(i);{var r=x=>{_a(x,{onClose:()=>u(a).open=!1,children:(_,S)=>{var v=Xt(),n=O(v),$=d(n,!0);o(n);var C=h(n,2),N=d(C);o(C);var I=h(C,2),H=d(I,!0);o(I);var q=h(I,2),J=d(q),L=h(d(J));ie(L,{size:16}),o(J),o(q),R(()=>{D($,u(a).title),M(N,"src",u(a).image),M(N,"alt",u(a).title),D(H,u(a).description),M(J,"href",u(a).link)}),A(_,v)},$$slots:{default:!0}})};X(l,x=>{u(a).open&&x(r)})}var c=h(l,4);ee(c,21,()=>t,x=>x.id,(x,_)=>{var S=es(),v=d(S);v.__click=[Jt,a,_];var n=d(v),$=h(n,2);{var C=Y=>{var Q=Qt(),ba=d(Q);Ut(ba,{size:16}),te(2),o(Q),A(Y,Q)};X($,Y=>{u(_).isVideo&&Y(C)})}o(v);var N=h(v,2),I=d(N),H=d(I);Gt(H,{size:15});var q=h(H,2),J=d(q,!0);o(q),o(I);var L=h(I,2),W=d(L,!0);o(L);var G=h(L,2),le=d(G,!0);o(G);var we=h(G,2),pe=d(we),se=d(pe);{var ce=Y=>{var Q=We("Watch Interview");A(Y,Q)},xe=Y=>{var Q=We("View Spotlight");A(Y,Q)};X(se,Y=>{u(_).isVideo?Y(ce):Y(xe,!1)})}var Te=h(se,2);ie(Te,{size:15}),o(pe),o(we),o(N),o(S),R(()=>{M(v,"aria-label",`View ${u(_).title}`),M(n,"src",u(_).image),M(n,"alt",u(_).title),D(J,u(_).publication),D(W,u(_).title),D(le,u(_).description),M(pe,"href",u(_).link)}),A(x,S)}),o(c);var k=h(c,2),m=d(k),w=d(m);te(2),o(m);var y=h(m,2),p=d(y);p.__click=[as,a];var z=d(p);o(p);var f=h(p,2),g=h(d(f),6),b=d(g),T=h(d(b));ie(T,{size:15}),o(b),o(g),o(f),o(y);var E=h(y,2);ee(E,21,()=>s,x=>x.category,(x,_)=>{const S=la(()=>u(_).icon);var v=ts(),n=d(v),$=d(n),C=d($,!0);o($);var N=h($,2);nt(N,()=>u(S),(G,le)=>{le(G,{size:16,class:"external-icon"})}),o(n);var I=h(n,2),H=d(I,!0);o(I);var q=h(I,2),J=d(q,!0);o(q);var L=h(q,2),W=d(L,!0);o(L),o(v),R(G=>{M(v,"href",u(_).url),D(C,u(_).category),D(H,u(_).title),D(J,u(_).description),D(W,G)},[()=>u(_).url.replace("https://","")]),A(x,v)}),o(E),o(k),o(i),R(()=>{M(w,"src",`${Z??""}/images/onekey-logo.png`),M(z,"src",`${Z??""}/images/onekey-classic-1s.jpg`)}),A(e,i)}be(["click"]);function rs(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];U(e,F({name:"book-open"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}var os=j('<span class="sep svelte-m39zqz" aria-hidden="true">·</span> <time class="svelte-m39zqz"> </time>',1),ls=j('<li class="article-card svelte-m39zqz"><div class="article-meta svelte-m39zqz"><span class="svelte-m39zqz"> </span> <!></div> <h3 class="svelte-m39zqz"> </h3> <p class="svelte-m39zqz"> </p> <a target="_blank" rel="noreferrer" class="read-link svelte-m39zqz">Read article <!></a></li>'),ns=j('<span class="sep svelte-m39zqz" aria-hidden="true">·</span>'),cs=j('<!> <a target="_blank" rel="noreferrer" class="svelte-m39zqz"> </a>',1),ds=j('<section class="articles-section svelte-m39zqz" id="articles"><div class="section-heading svelte-m39zqz"><div><span class="kicker svelte-m39zqz">Writing &amp; ideas</span> <h2 class="svelte-m39zqz">Articles &amp; publications</h2> <p class="section-sub svelte-m39zqz">Notes on software, security, and the ideas behind the things I build.</p></div></div> <ul class="articles-grid svelte-m39zqz"></ul> <div class="publication-links svelte-m39zqz" aria-label="More publications"><span class="pub-label svelte-m39zqz"><!> Find me on</span> <div class="pub-items svelte-m39zqz"></div></div></section>');function vs(e){const a=[{id:0,title:"I built Medusa - A lossless password-based file encryption tool",publication:"DEV Community",published:"Aug 29, 2026",preview:"A quick look at Medusa, an open-source, client-side file encryption tool built for lossless decryption.",href:"https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip"},{id:1,title:"Are computers truly random? How chaos powers randomness.",publication:"DEV Community",published:"Jul 15, 2026",preview:"An exploration of how computers generate randomness and the role chaos plays in the process.",href:"https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93"},{id:2,title:"Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)",publication:"CoderLegion",preview:"A look at how secure elements and carefully limited USB or Bluetooth connections let hardware wallets sign transactions without exposing private keys.",href:"https://coderlegion.com/20141/how-do-web3-hardware-wallets-work"},{id:3,title:"Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs",publication:"CoderLegion",preview:"The story behind a lightweight, browser-based Ethereum toolkit that helps developers compile, deploy, and interact with smart contracts locally.",href:"https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs"}],t=[{name:"Dev.to",href:"https://dev.to/js_cipher"},{name:"Medium",href:"https://medium.com/@temi_lolu0x0"},{name:"CoderLegion",href:"https://coderlegion.com/user/temi_0x0"},{name:"Peerlist",href:"https://peerlist.io/temi_lolu"}];var s=ds(),i=h(d(s),2);ee(i,5,()=>a,m=>m.id,(m,w)=>{var y=ls(),p=d(y),z=d(p),f=d(z,!0);o(z);var g=h(z,2);{var b=n=>{var $=os(),C=h(O($),2),N=d(C,!0);o(C),R(()=>D(N,u(w).published)),A(n,$)};X(g,n=>{u(w).published&&n(b)})}o(p);var T=h(p,2),E=d(T,!0);o(T);var x=h(T,2),_=d(x,!0);o(x);var S=h(x,2),v=h(d(S));ie(v,{size:16}),o(S),o(y),R(()=>{D(f,u(w).publication),D(E,u(w).title),D(_,u(w).preview),M(S,"href",u(w).href)}),A(m,y)}),o(i);var l=h(i,2),r=d(l),c=d(r);rs(c,{size:15}),te(),o(r);var k=h(r,2);ee(k,7,()=>t,m=>m.name,(m,w,y)=>{var p=cs(),z=O(p);{var f=T=>{var E=ns();A(T,E)};X(z,T=>{u(y)>0&&T(f)})}var g=h(z,2),b=d(g,!0);o(g),R(()=>{M(g,"href",u(w).href),D(b,u(w).name)}),A(m,p)}),o(k),o(l),o(s),A(e,s)}function us(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];U(e,F({name:"mail"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function ps(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];U(e,F({name:"linkedin"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function fs(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];U(e,F({name:"heart"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}function hs(e,a){const t=B(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];U(e,F({name:"menu"},()=>t,{get iconNode(){return s},children:(i,l)=>{var r=V(),c=O(r);K(c,a,"default",{}),A(i,r)},$$slots:{default:!0}}))}var ms=Ae('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z"></path></svg>'),gs=Ae('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>'),_s=j('<a class="svelte-1w9k76x"><!></a>'),bs=j(`<section class="contact-section svelte-1w9k76x" id="contacts"><div class="contact-panel svelte-1w9k76x"><div class="contact-copy svelte-1w9k76x"><span class="kicker svelte-1w9k76x">Contact</span> <h2 class="svelte-1w9k76x">Let’s build something meaningful.</h2> <p class="svelte-1w9k76x">I work across web, blockchain, systems, and embedded engineering - from product interfaces
				and smart contracts to developer tooling and technical partnerships.</p></div> <div class="contact-actions svelte-1w9k76x"><a class="primary-contact svelte-1w9k76x" href="mailto:akintadetemi19@gmail.com">Book a call <!></a> <div class="social-links svelte-1w9k76x"></div></div></div></section>`);function ws(e){const a=[{id:0,icon:us,link:"mailto:akintadetemi19@gmail.com",name:"Email"},{id:1,customSvg:"discord",link:"https://discord.com/users/1061727196953190440",name:"Discord"},{id:2,customSvg:"x",link:"https://x.com/Temi_tade2805",name:"X"},{id:3,icon:ps,link:"https://linkedin.com/in/temiloluwa-akintade-4b6798254",name:"LinkedIn"},{id:4,icon:je,link:"https://github.com/Temi-Tade",name:"GitHub"}];var t=bs(),s=d(t),i=h(d(s),2),l=d(i),r=h(d(l));ie(r,{size:17}),o(l);var c=h(l,2);ee(c,5,()=>a,k=>k.id,(k,m)=>{var w=_s(),y=d(w);{var p=f=>{var g=ms();A(f,g)},z=f=>{var g=V(),b=O(g);{var T=x=>{var _=gs();A(x,_)},E=x=>{var _=V(),S=O(_);{var v=n=>{const $=Oe(()=>u(m).icon);u($)(n,{size:19})};X(S,n=>{u(m).icon&&n(v)},!0)}A(x,_)};X(b,x=>{u(m).customSvg==="discord"?x(T):x(E,!1)},!0)}A(f,g)};X(y,f=>{u(m).customSvg==="x"?f(p):f(z,!1)})}o(w),R((f,g)=>{M(w,"href",u(m).link),M(w,"title",u(m).name),M(w,"aria-label",u(m).name),M(w,"target",f),M(w,"rel",g)},[()=>u(m).link.startsWith("http")?"_blank":void 0,()=>u(m).link.startsWith("http")?"noreferrer":void 0]),A(k,w)}),o(c),o(i),o(s),o(t),A(e,t)}function Je(e,a){re(a,!1)}var ks=j('<li><a class="nav-link svelte-1j7efyp"> </a></li>'),ys=(e,a)=>re(a,!u(a)),$s=j('<section class="topbar svelte-1j7efyp"><header class="nav-shell svelte-1j7efyp"><a href="#top" class="brand svelte-1j7efyp" aria-label="Temiloluwa home page"><img alt="Temiloluwa" class="svelte-1j7efyp"/></a> <nav aria-label="Main navigation"><ul class="svelte-1j7efyp"><!> <li class="mobile-cta-item svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta mobile-cta svelte-1j7efyp">Hire me</a></li></ul></nav> <div class="nav-actions svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta desktop-cta svelte-1j7efyp">Hire me</a> <button type="button" class="menu-button svelte-1j7efyp" aria-label="Toggle navigation menu"><!></button></div></header> <div class="reading-progress svelte-1j7efyp" aria-hidden="true"></div></section>');function zs(e,a){Pe(a,!0);const t=[{id:0,name:"Home",href:"#top"},{id:1,name:"About",href:"#about"},{id:2,name:"Projects",href:"#projects"},{id:3,name:"Spotlights",href:"#spotlights"},{id:4,name:"Articles",href:"#articles"},{id:5,name:"Contacts",href:"#contacts"}];let s=_e(!1),i=_e(0);function l(){if(typeof window>"u")return;const n=document.documentElement.scrollHeight-window.innerHeight;if(n<=0){re(i,0);return}re(i,Math.min(1,Math.max(0,window.scrollY/n)),!0)}Ja(()=>(l(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}));var r=$s(),c=d(r),k=d(c),m=d(k);o(k);var w=h(k,2);let y;var p=d(w),z=d(p);ee(z,17,()=>t,n=>n.id,(n,$)=>{var C=ks(),N=d(C);N.__click=[Je,s];var I=d(N,!0);o(N),o(C),R(()=>{M(N,"href",u($).href),D(I,u($).name)}),A(n,C)});var f=h(z,2),g=d(f);g.__click=[Je,s],o(f),o(p),o(w);var b=h(w,2),T=h(d(b),2);T.__click=[ys,s];var E=d(T);{var x=n=>{ga(n,{size:20})},_=n=>{hs(n,{size:20})};X(E,n=>{u(s)?n(x):n(_,!1)})}o(T),o(b),o(c);var S=h(c,2);let v;o(r),R((n,$)=>{M(m,"src",`${Z??""}/images/TEEE.png`),y=va(w,1,"nav-panel svelte-1j7efyp",null,y,n),M(T,"aria-expanded",u(s)),v=ua(S,"",v,$)},[()=>({open:u(s)}),()=>({transform:`scaleX(${u(i)})`})]),A(e,r),De()}be(["click"]);var As=Qa(j(`<meta name="description" content="Temiloluwa Akintade is a software developer building thoughtful web applications, blockchain products, smart contracts, systems, and embedded software."/> <meta name="author" content="Temiloluwa Akintade"/> <link rel="canonical"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Temiloluwa Akintade | Software Developer"/> <meta property="og:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta property="og:url"/> <meta property="og:image"/> <meta property="og:image:alt" content="Temiloluwa Akintade, software developer"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Temiloluwa Akintade | Software Developer"/> <meta name="twitter:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta name="twitter:image"/> <script type="application/ld+json">
		{@html JSON.stringify(personSchema)}
	<\/script>`,1)),xs=j('<div class="page-shell svelte-1uha8ag" id="top"><!> <main class="content-shell svelte-1uha8ag"><!> <!> <!> <!> <!></main> <footer class="site-footer svelte-1uha8ag"><div class="footer-inner svelte-1uha8ag"><p class="svelte-1uha8ag">Made with <!> by Temiloluwa. All rights reserved.</p> <a href="#top" class="back-top svelte-1uha8ag">Back to top</a></div></footer></div>');function Is(e){const a="https://temi-tade.github.io/portfolio-website/";var t=xs();lt(f=>{var g=As();et.title="Temiloluwa Akintade | Software Developer";var b=h(O(g),4);M(b,"href",a);var T=h(b,8);M(T,"content",a);var E=h(T,2);M(E,"content",`${a}images/temiloluwa-peerlist.jpg`);var x=h(E,10);M(x,"content",`${a}images/temiloluwa-peerlist.jpg`),te(2),A(f,g)});var s=d(t);zs(s,{});var i=h(s,2),l=d(i);It(l);var r=h(l,2);Ft(r);var c=h(r,2);is(c);var k=h(c,2);vs(k);var m=h(k,2);ws(m),o(i);var w=h(i,2),y=d(w),p=d(y),z=h(d(p));fs(z,{fill:"#ef4444",color:"#ef4444",size:15}),te(),o(p),te(2),o(y),o(w),o(t),A(e,t)}export{Is as component};
