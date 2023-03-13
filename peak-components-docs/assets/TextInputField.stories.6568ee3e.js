import{a as e,r as d,j as p}from"./index.bec5aa92.js";import{P as v,C as c}from"./CodeBlock.ed33fd7b.js";import{I as y,g as w,O as C}from"./ThemeSelector.0e99b60f.js";import{T as m}from"./index.es.2f0c9958.js";import{W as T}from"./WazLabel.f8c88423.js";const i=({InputRenderer:l,size:a="md",theme:o="waz",type:r="text",className:t,...n})=>{switch(o){case"peak":return e(x,{InputRenderer:N,className:m("peak-input",a,t),size:a,type:r,...n});case"waz":return e(x,{InputRenderer:F,className:m("waz-input",a,t),size:a,type:r,...n})}},x=({className:l,onClear:a,right:o,wrapperRef:r,inputRef:t,theme:n,InputRenderer:u,id:s,...h})=>{const f=d.exports.useId(),b=s!=null?s:f,g=d.exports.useRef();return p("div",{ref:r,className:l,children:[e(u,{inputRef:t===void 0?g:t,baseClassNames:m("w-full",h.readOnly&&"cursor-pointer"),id:b,...h}),o,a&&e(y,{onClick:()=>a({target:{name:h.name,value:""}}),icon:w,className:"absolute right-2 inset-y-0 my-auto text-gray-300 hover:text-gray-500 cursor-pointer"})]})},N=({inputRef:l,baseClassNames:a,onChange:o,value:r,size:t,id:n,...u})=>e("input",{ref:l,onChange:o,value:r,className:m(a,t),id:n,...u}),F=({inputRef:l,baseClassNames:a,onChange:o,value:r,size:t,label:n,id:u,...s})=>p("div",{className:m("waz-input-wrapper",t),onClick:()=>{l&&l.current&&l.current.focus()},children:[e(T,{label:n,id:u}),e("input",{id:u,ref:l,onChange:o,value:r,className:a,...s})]}),I=({...l})=>{const[a,o]=d.exports.useState("waz"),[r,t]=d.exports.useState("hello"),n=l;return n.theme=a,p("div",{className:"flex flex-col",children:[e("h1",{className:"mb-6",children:"Text input Field"}),e("div",{className:"mb-4",children:e(v,{componentName:"TextInputField"})}),e(C,{options:["waz","peak"],onChange:o,selected:a,name:"theme"}),p("div",{className:"flex flex-col gap-3 items-center",children:[p("h3",{children:[a," Theme"]}),e(c,{text:`
          <TextInputField placeholder="please input your name" />
        `,children:e(i,{...n,placeholder:"please input your name"})}),"With label",e(c,{text:`
          <TextInputField
            label="example label"
            placeholder="please input your name"
            name="nameInput"
            id="nameInput"
          />
        `,children:e(i,{...n,label:"example label",placeholder:"please input your name",name:"nameInput",id:"nameInput"})}),"Controlled",e(c,{text:`
          <TextInputField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="example label"
            placeholder="please input your name"
            name="nameInput2"
            id="nameInput2"
          />
        `,children:e(i,{...n,value:r,onChange:u=>t(u.target.value),label:"example label",placeholder:"please input your name",name:"nameInput2",id:"nameInput2"})}),"Mit default clear function",e(c,{text:`
          <TextInputField
            {...args}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="example label"
            placeholder="please input your name"
            onClear={() => setValue("")}
            name="nameInput3"
            id="nameInput3"
          />
        `,children:e(i,{...n,value:r,onChange:u=>t(u.target.value),label:"example label",placeholder:"please input your name",onClear:()=>t(""),name:"nameInput3",id:"nameInput3"})})]})]})};I.args={};I.argTypes={size:{options:["xs","sm","md","lg","xl"],defaultValue:"md",control:{type:"radio"}}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Base};
