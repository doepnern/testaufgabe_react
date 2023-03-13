import{r as m,j as s,a as e,F as g}from"./index.e66c2be8.js";import{T as y}from"./index.es.2f0c9958.js";import{I as u,O as f,f as C,a as z,b as P,c as S}from"./ThemeSelector.2c212457.js";import{P as I,C as l}from"./CodeBlock.2a0fe3d4.js";const a=m.exports.forwardRef(({full:o=!1,type:t="button",children:n,icon:i,intent:c="base",size:r="md",variant:d="fill",text:h,className:b,theme:v="waz",right:N,left:B,...w},k)=>{const p=!(n||h);return s("button",{ref:k,type:t,className:y(v==="peak"?"peak-button":"waz-button",p&&"square",r,d,c,o&&"fullWidth",b),...w,children:[B,i&&e("span",{className:"flex-shrink-0",children:e(u,{fixedWidth:p,icon:i})}),n!=null?n:h,N]})}),x=({text:o,...t})=>{const[n,i]=m.exports.useState("waz"),[c,r]=m.exports.useState("primary");return t.theme=n,t.intent=c,t.onClick=()=>{console.log("button clicked")},s("div",{className:"flex flex-col",children:[e("h1",{className:"mb-6",children:"Button"}),e("div",{className:"mb-4",children:e(I,{componentName:"Button"})}),e(f,{options:["waz","peak"],onChange:i,selected:n,name:"theme"}),e("div",{className:"mt-2"}),e(f,{options:["danger","primary","base","secondary","success","info","warning"],onChange:r,selected:c,name:"intent"}),s("div",{className:"flex flex-col gap-3 items-center my-8",children:[s("h3",{children:[n," theme"]}),e(l,{text:`
          <Button theme=${n}>
            ${o}
          </Button>
        />
          `,children:e(a,{...t,children:o})}),"disabled",e(l,{text:`
          <Button theme="${n}" disabled>
            ${o}
          </Button>
        />
          `,children:e(a,{...t,disabled:!0,children:o})}),"outlined",e(l,{text:`
          <Button theme="${n}" variant="outlined">
            ${o}
          </Button>
        />
          `,children:e(a,{...t,variant:"outlined",children:o})}),"Mit icon links",e(l,{text:`
          <Button  variant="outlined"  theme="${n}" icon={faChevronRight}>
            {text}
          </Button>
        />
          `,children:e(a,{...t,variant:"outlined",icon:C,children:o})}),"Mit custom section rechts",e(l,{text:`
          <div>
          <Button
            className="!px-0 !py-0 !w-[170px] !h-[52px] !pl-[22px]"
            right={
              <>
                <div
                  className="h-full inline-flex items-center px-[17px] ml-auto transition-colors bg-waz_secondary hover:bg-waz_blue-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("icon clicked");
                  }}
                >
                  <Icon className="" icon={faCherries} />
                </div>
              </>
            }
          >
            {"Sofort Paket"}
          </Button>
        </div>
        `,children:e("div",{children:e(a,{...t,className:"!px-0 !py-0 !w-[170px] !h-[52px] !pl-[22px]",right:e(g,{children:e("div",{className:"h-full inline-flex items-center px-[17px] ml-auto transition-colors bg-waz_secondary hover:bg-waz_blue-400",onClick:d=>{d.stopPropagation(),console.log("icon clicked")},children:e(u,{className:"",icon:z})})}),children:"Sofort Paket"})})}),"Sollte der hover Effekt auf der rechten section nicht teil des Buttons sein, so muss diese aus dem Button extrahiert werden",e(l,{text:`
          <div className="h-[56px]">
            <Button  className="!h-full !px-[42px]">
              <span>
                <Icon className="mr-1" icon={faRectangleHistoryCirclePlus} />
                Sofort Paket
              </span>
            </Button>
            <Button
              icon={faCircleInfo}
              intent="primary"
              className="!h-full !rounded-tl-none !rounded-bl-none -ml-4"
              theme={args.theme}
            />
          </div>
        `,children:s("div",{className:"h-[56px]",children:[e(a,{...t,className:"!h-full !px-[42px]",children:s("span",{children:[e(u,{className:"mr-1",icon:P}),"Sofort Paket"]})}),e(a,{icon:S,intent:"primary",className:"!h-full !rounded-tl-none !rounded-bl-none -ml-4",theme:t.theme})]})})]})]})};x.args={text:"Hello"};x.argTypes={size:{options:["xs","sm","md","lg","xl"],defaultValue:"md",control:{type:"radio"}}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Base};
