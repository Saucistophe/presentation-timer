var Sn=Array.isArray,Gt=Array.prototype.indexOf,Nn=Array.from,Cn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,bn=Array.prototype,Zt=Object.getPrototypeOf;const Fn=()=>{};function Mn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,wt=4,W=8,st=16,R=32,q=64,H=128,w=256,U=512,v=1024,D=2048,N=4096,O=8192,X=16384,$t=32768,yt=65536,qn=1<<17,zt=1<<19,gt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props");function Tt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Un(){J=!0}const Vn=1,Gn=2,Kn=16,Zn=1,$n=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,en="[",ln="[!",an="]",At={},tr=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function rr(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),K(a.reaction),Ct(a.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return{}}function Q(){return!J||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function er(t){return sn(ut(t))}function lr(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function sn(t){return u!==null&&!y&&(u.f&g)!==0&&(T===null?gn([t]):T.push(t)),t}function un(t,n){return u!==null&&!y&&Q()&&(u.f&(g|st))!==0&&(T===null||!T.includes(t))&&rn(),on(t,n)}function on(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),Rt(t,D),Q()&&o!==null&&(o.f&v)!==0&&(o.f&(R|q))===0&&(A===null?Tn([t]):A.push(t))),n}function ar(t,n=1){var r=Vt(t),e=n===1?r++:r--;return un(t,r),e}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&D)===0&&(!e&&s===o||(m(s,n),(i&(v|w))!==0&&((i&g)!==0?Rt(s,N):nt(s))))}}let S=!1;function sr(t){S=t}let x;function F(t){if(t===null)throw xt(),At;return x=t}function ur(){return F(C(x))}function or(t){if(S){if(C(x)!==null)throw xt(),At;x=t}}function fr(){for(var t=0,n=x;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===ln)&&(t+=1)}var e=C(n);n.remove(),n=e}}var pt,fn,kt,Dt;function ir(){if(pt===void 0){pt=window,fn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;kt=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return kt.call(t)}function C(t){return Dt.call(t)}function _r(t,n){if(!S)return et(t);var r=et(x);if(r===null)r=x.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),F(e),e}return F(r),r}function cr(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?C(r):r}return x}function vr(t,n=1,r=!1){let e=S?x:t;for(var l;n--;)l=e,e=C(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=rt();return e===null?l==null||l.after(s):e.before(s),F(s),s}return F(e),e}function pr(t){t.textContent=""}function It(t){var n=g|D,r=u!==null&&(u.f&g)!==0?u:null;return o===null||r!==null&&(r.f&w)!==0?n|=w:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function hr(t){const n=It(t);return n.equals=mt,n}function Ot(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function _n(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function cn(t){var n,r=o;Z(_n(t));try{Ot(t),n=Ht(t)}finally{Z(r)}return n}function St(t){var n=cn(t),r=(k||(t.f&w)!==0)&&t.deps!==null?N:v;m(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function Nt(t){o===null&&u===null&&Qt(),u!==null&&(u.f&w)!==0&&o===null&&Jt(),ot&&Xt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var l=(t&q)!==0,a=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=$t}catch(E){throw I(s),E}else n!==null&&nt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|H))===0;if(!i&&!l&&e&&(a!==null&&vn(s,a),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function dr(t){const n=P(W,null,!1);return m(n,v),n.teardown=t,n}function Er(t){Nt();var n=o!==null&&(o.f&R)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ct(t);return e}}function wr(t){return Nt(),pn(t)}function yr(t){const n=P(q,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Ct(t){return P(wt,t,!1)}function pn(t){return P(W,t,!0)}function gr(t,n=[],r=It){const e=n.map(r);return hn(()=>t(...e.map(Vt)))}function hn(t,n=0){return P(W|st|n,t,!0)}function Tr(t,n=!0){return P(W|R,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&I(n),n=r}}function I(t,n=!0){var r=!1;if((n||(t.f&zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}bt(t,n&&!r),z(t,0),m(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{I(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if((t.f&O)===0){if(t.f^=O,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&yt)!==0||(e.f&R)!==0;Mt(e,n,a?r:!1),e=l}}}function mr(t){qt(t,!0)}function qt(t,n){if((t.f&O)!==0){t.f^=O,(t.f&v)===0&&(t.f^=v),L(t)&&(m(t,D),nt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&R)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let M=[],lt=[];function Lt(){var t=M;M=[],Et(t)}function yn(){var t=lt;lt=[],Et(t)}function Ar(t){M.length===0&&queueMicrotask(Lt),M.push(t)}function ht(){M.length>0&&Lt(),lt.length>0&&yn()}let j=!1,V=!1,G=null,B=!1,ot=!1;function dt(t){ot=t}let b=[];let u=null,y=!1;function K(t){u=t}let o=null;function Z(t){o=t}let T=null;function gn(t){T=t}let c=null,d=0,A=null;function Tn(t){A=t}let Yt=1,$=0,k=!1;function jt(){return++Yt}function L(t){var p;var n=t.f;if((n&D)!==0)return!0;if((n&N)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&U)!==0,i=e&&o!==null&&!k,_=r.length;if(s||i){var E=t,Y=E.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(E)))&&(a.reactions??(a.reactions=[])).push(E);s&&(E.f^=U),i&&Y!==null&&(Y.f&w)===0&&(E.f^=w)}for(l=0;l<_;l++)if(a=r[l],L(a)&&St(a),a.wv>t.wv)return!0}(!e||o!==null&&!k)&&m(t,v)}return!1}function mn(t,n){for(var r=n;r!==null;){if((r.f&H)!==0)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw j=!1,t}function An(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&H)===0)}function tt(t,n,r,e){if(j){if(r===null&&(j=!1),An(n))throw t;return}r!==null&&(j=!0);{mn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&g)!==0?Bt(a,n,!1):n===a&&(r?m(a,D):(a.f&v)!==0&&m(a,N),nt(a))}}function Ht(t){var it;var n=c,r=d,e=A,l=u,a=k,s=T,i=f,_=y,E=t.f;c=null,d=0,A=null,k=(E&w)!==0&&(y||!B||u===null),u=(E&(R|q))===0?t:null,T=null,vt(t.ctx),y=!1,$++;try{var Y=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(z(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!k)for(h=d;h<p.length;h++)((it=p[h]).reactions??(it.reactions=[])).push(t)}else p!==null&&d<p.length&&(z(t,d),p.length=d);if(Q()&&A!==null&&!y&&p!==null&&(t.f&(g|N|D))===0)for(h=0;h<A.length;h++)Bt(A[h],t);return l!==null&&$++,Y}finally{c=n,d=r,A=e,u=l,k=a,T=s,vt(i),y=_}}function xn(t,n){let r=n.reactions;if(r!==null){var e=Gt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(m(n,N),(n.f&(w|U))===0&&(n.f^=U),Ot(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function ft(t){var n=t.f;if((n&X)===0){m(t,v);var r=o,e=f,l=B;o=t,B=!0;try{(n&st)!==0?dn(t):bt(t),Pt(t);var a=Ht(t);t.teardown=typeof a=="function"?a:null,t.wv=Yt;var s=t.deps,i}catch(_){tt(_,t,r,e||t.ctx)}finally{B=l,o=r}}}function Rn(){try{tn()}catch(t){if(G!==null)tt(t,G,null);else throw t}}function Ut(){try{for(var t=0;b.length>0;){t++>1e3&&Rn();var n=b,r=n.length;b=[];for(var e=0;e<r;e++){var l=n[e];(l.f&v)===0&&(l.f^=v);var a=Dn(l);kn(a)}}}finally{V=!1,G=null}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|O))===0)try{L(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function nt(t){V||(V=!0,queueMicrotask(Ut));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(q|R))!==0){if((r&v)===0)return;n.f^=v}}b.push(n)}function Dn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,l=(e&R)!==0,a=l&&(e&v)!==0;if(!a&&(e&O)===0){if((e&wt)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,L(r)&&ft(r)}catch(E){tt(E,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function In(t){var n;for(ht();b.length>0;)V=!0,Ut(),ht();return n}async function xr(){await Promise.resolve(),In()}function Vt(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){T!==null&&T.includes(t)&&nn();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!k||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&w)===0&&(l.f^=w)}return r&&(l=t,L(l)&&St(l)),t.v}function Rr(t){var n=y;try{return y=!0,t()}finally{y=n}}const On=-7169;function m(t,n){t.f=t.f&On|n}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{wn as $,Et as A,Mn as B,kr as C,It as D,yt as E,Un as F,Fn as G,ln as H,I,cr as J,nr as K,gr as L,rr as M,_r as N,or as O,vr as P,hr as Q,an as R,ct as S,O as T,tr as U,Nn as V,on as W,lr as X,Gn as Y,Mt as Z,pr as _,ur as a,Vn as a0,Kn as a1,C as a2,Kt as a3,er as a4,pt as a5,ar as a6,K as a7,Z as a8,u as a9,xr as aA,Wt as aB,dr as aa,Ar as ab,Cn as ac,ir as ad,et as ae,en as af,At as ag,xt as ah,Yn as ai,yr as aj,rt as ak,fn as al,Jn as am,Qn as an,Ct as ao,pn as ap,jn as aq,qn as ar,zn as as,mt as at,Wn as au,Ln as av,$n as aw,Zn as ax,Xn as ay,In as az,hn as b,sr as c,mr as d,Tr as e,x as f,bn as g,S as h,ut as i,Hn as j,Vt as k,un as l,_t as m,o as n,Pn as o,En as p,Bn as q,fr as r,F as s,Zt as t,Sn as u,Er as v,f as w,J as x,Rr as y,wr as z};
