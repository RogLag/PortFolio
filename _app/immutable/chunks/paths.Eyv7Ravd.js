import{n as u,s as l}from"./scheduler.NfgRgSDe.js";const i=[];function p(e,o){return{subscribe:_(e,o).subscribe}}function _(e,o=u){let n;const r=new Set;function b(t){if(l(e,t)&&(e=t,n)){const c=!i.length;for(const s of r)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){b(t(e))}function f(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(n=o(b,a)||u),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:b,update:a,subscribe:f}}const g=globalThis.__sveltekit_mwx28l?.base??"/sveltekit-github-pages",d=globalThis.__sveltekit_mwx28l?.assets??g;export{d as a,g as b,p as r,_ as w};