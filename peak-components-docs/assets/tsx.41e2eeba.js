import{r as c}from"./jsx.4dd96579.js";import{r as p}from"./typescript.989fa4ff.js";function f(a,s){for(var r=0;r<s.length;r++){const e=s[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in a)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(a,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var n,i;function g(){if(i)return n;i=1;var a=c(),s=p();n=r,r.displayName="tsx",r.aliases=[];function r(e){e.register(a),e.register(s);var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t)}return n}var u=g();const y=f({__proto__:null,default:u},[u]);export{y as t};