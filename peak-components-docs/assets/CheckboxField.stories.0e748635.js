import{r as l,a as e,j as o}from"./index.bec5aa92.js";import{P as k,C as h}from"./CodeBlock.ed33fd7b.js";import{T as x}from"./index.es.2f0c9958.js";const n=l.exports.forwardRef(({onChange:a,checked:r,indeterminate:d=!1,...i},s)=>{const c=l.exports.useRef(null),t=s||c;return l.exports.useEffect(()=>{c.current!==null&&(c.current.indeterminate=d)},[t,d]),e("input",{checked:r,onChange:m=>a==null?void 0:a(m),type:"checkbox",ref:t,...i,className:x("h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500",i.className)})});n.displayName="peak-checkbox";const b=({...a})=>{const[r,d]=l.exports.useState(!1),[i,s]=l.exports.useState("unchecked"),c=a;return o("div",{className:"flex flex-col",children:[e("h1",{className:"mb-6",children:"Text input Field"}),e("div",{className:"mb-4",children:e(k,{componentName:"peak-checkbox"})}),o("div",{className:"flex flex-col gap-3 items-center",children:["Basic",e(h,{text:`
          <CheckboxField />
        `,children:e(n,{...c})}),"With label",e(h,{text:`
          <div>
            <label htmlFor="pizza">
              Do you like pizza?
            </label>
            <CheckboxField
              {...args}
              id="pizza"
              name="pizza"
              onChange={() => {
                setChecked((c) => !c);
              }}
              checked={checked}
              className="ml-4 align-text-bottom"
            />
          </div>
        `,children:o("div",{children:[e("label",{htmlFor:"pizza",children:"Do you like pizza?"}),e(n,{...c,id:"pizza",name:"pizza",onChange:()=>{d(t=>!t)},checked:r,className:"ml-4 align-text-bottom"})]})}),"With intermediate",e(h,{text:`
          <label htmlFor="cola">Do you like cola?</label>
            <CheckboxField
              id="cola"
              name="cola"
              onChange={() => {
                const order = ["checked", "intermediate", "unchecked"] as const;
                setCheckedWithIntermediate(
                  (s) => order[(order.indexOf(s) + 1) % order.length]
                );
              }}
              checked={checkedWithIntermediate === "checked"}
              indeterminate={checkedWithIntermediate === "intermediate"}
              className="ml-4 align-text-bottom"
            />
        `,children:o("div",{children:[e("label",{htmlFor:"cola",children:"Do you like cola?"}),e(n,{...c,id:"cola",name:"cola",onChange:()=>{const t=["checked","intermediate","unchecked"];s(m=>t[(t.indexOf(m)+1)%t.length])},checked:i==="checked",indeterminate:i==="intermediate",className:"ml-4 align-text-bottom"})]})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Base};
