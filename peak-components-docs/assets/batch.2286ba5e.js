function u(a,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const t=Object.getOwnPropertyDescriptor(e,r);t&&Object.defineProperty(a,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var b,s;function d(){if(s)return b;s=1,b=a,a.displayName="batch",a.aliases=[];function a(i){(function(n){var e=/%%?[~:\w]+%?|!\S+!/,r={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},t=/"[^"]*"/,o=/(?:\b|-)\d+\b/;n.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/^for\b|\b(?:in|do)\b/i,string:t,parameter:r,variable:e,number:o,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,lookbehind:!0,inside:{keyword:/^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,string:t,parameter:r,variable:e,number:o,operator:/\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:t,parameter:r,variable:[e,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:o,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^\w+\b/i,string:t,parameter:r,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:e,number:o,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(i)}return b}var l=d();const p=u({__proto__:null,default:l},[l]);export{p as b};
