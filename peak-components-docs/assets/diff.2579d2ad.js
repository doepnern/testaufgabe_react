function u(f,a){for(var t=0;t<a.length;t++){const r=a[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in f)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(f,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var d,o;function c(){if(o)return d;o=1,d=f,f.displayName="diff",f.aliases=[];function f(a){(function(t){t.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(e){var i=r[e],n=[];/^\w+$/.test(e)||n.push(/\w+/.exec(e)[0]),e==="diff"&&n.push("bold"),t.languages.diff[e]={pattern:RegExp("^(?:["+i+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:n}}),Object.defineProperty(t.languages.diff,"PREFIXES",{value:r})})(a)}return d}var s=c();const l=u({__proto__:null,default:s},[s]);export{l as d};