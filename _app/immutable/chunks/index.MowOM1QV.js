import{r as m,n as p,A as v,B as S,p as E,C,y as w,D as B,E as O,F as b,G as j,H as I,I as D}from"./scheduler.NfgRgSDe.js";let $=!1;function L(){$=!0}function P(){$=!1}function T(e,t,n,i){for(;e<t;){const a=e+(t-e>>1);n(a)<=i?e=a+1:t=a}return e}function H(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let a=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(a>0&&t[n[a]].claim_order<=s?a+1:T(1,a,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,a=Math.max(u,a)}const f=[],l=[];let c=t.length-1;for(let r=n[a]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);c>=r;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<f.length&&l[r].claim_order>=f[s].claim_order;)s++;const o=s<f.length?f[s]:null;e.insertBefore(l[r],o)}}function F(e,t){if($){for(H(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function k(e,t,n){$&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function M(e){return document.createElement(e)}function q(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function te(){return y(" ")}function ne(){return y("")}function ie(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const R=["width","height"];function re(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&R.indexOf(i)===-1?e[i]=t[i]:z(e,i,t[i])}function se(e){return e.dataset.svelteH}function le(e){let t;return{p(...n){t=n,t.forEach(i=>e.push(i))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function U(e){return Array.from(e.childNodes)}function V(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function N(e,t,n,i,a=!1){V(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,a||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,a?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function A(e,t,n,i){return N(e,a=>a.nodeName===t,a=>{const f=[];for(let l=0;l<a.attributes.length;l++){const c=a.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>a.removeAttribute(l))},()=>i(t))}function ae(e,t,n){return A(e,t,n,M)}function ce(e,t,n){return A(e,t,n,q)}function W(e,t){return N(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function fe(e){return W(e," ")}function ue(e,t){t=""+t,e.data!==t&&(e.data=t)}function oe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function _e(e,t,n){e.classList.toggle(t,!!n)}function de(e,t){return new e(t)}const h=new Set;let _;function he(){_={r:0,c:[],p:_}}function me(){_.r||m(_.c),_=_.p}function J(e,t){e&&e.i&&(h.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),_.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function pe(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function ye(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),w(()=>{const f=e.$$.on_mount.map(j).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...f):m(f),e.$$.on_mount=[]}),a.forEach(w)}function Q(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(I.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,a,f,l=null,c=[-1]){const r=O;b(e);const s=e.$$={fragment:null,ctx:[],props:f,update:p,not_equal:a,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};l&&l(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(u,d,...x)=>{const g=x.length?x[0]:d;return s.ctx&&a(s.ctx[u],s.ctx[u]=g)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](g),o&&X(e,u)),d}):[],s.update(),o=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){L();const u=U(t.target);s.fragment&&s.fragment.l(u),u.forEach(G)}else s.fragment&&s.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),P(),S()}b(r)}class ve{$$=void 0;$$set=void 0;$destroy(){Q(this,1),this.$destroy=p}$on(t,n){if(!E(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{ee as A,q as B,ce as C,re as D,_e as E,le as F,pe as G,ve as S,k as a,me as b,fe as c,J as d,ne as e,G as f,M as g,ae as h,ge as i,U as j,z as k,oe as l,y as m,W as n,ue as o,he as p,de as q,ye as r,te as s,$e as t,xe as u,K as v,Q as w,se as x,F as y,ie as z};
