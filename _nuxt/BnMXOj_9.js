import{_ as B}from"./P1MfMs4B.js";import{_ as N,a as S,b as V}from"./CVjnQA4w.js";import{_ as R}from"./BZhdsxQZ.js";import{f as g,g as v,N as T,o as a,c as i,b as e,w as o,D as f,Q as D,i as s,a as p,t as x,_ as L,m as A,O as G,as as O,G as h,d as l,B as P,C as U,K as z}from"./D0ohpK4c.js";const E={class:"px-4"},F=g({__name:"v-menu-item",props:{to:{},disabled:{type:Boolean}},setup(n){const t=n,r=v(),c=T(()=>t.to==="/"?r.path===t.to:r.path.startsWith(t.to));function m(_){t.disabled&&(_.stopPropagation(),_.preventDefault())}return(_,y)=>{const u=R;return a(),i("div",E,[e(u,{to:t.to,class:D(["block rounded-md px-3 py-1 text-gray-700 transition-all dark:text-gray-400",{"!cursor-not-allowed opacity-30":t.disabled,"hover:bg-gray-200 hover:dark:bg-gray-800":!t.disabled,"!bg-gray-300 dark:!bg-gray-700":s(c)}]),onClickCapture:m},{default:o(()=>[f(_.$slots,"default")]),_:3},8,["to","class"])])}}}),K={class:"mb-1.5 px-5 text-lg font-medium"},Q={class:"flex flex-col items-stretch gap-1"},W=g({__name:"v-menu-group",props:{title:{}},setup(n){const t=n;return(r,c)=>(a(),i("div",null,[p("div",K,x(t.title),1),p("div",Q,[f(r.$slots,"default")])]))}}),j={},q={class:"sticky top-3 flex h-fit flex-col items-stretch gap-3 rounded-md bg-gray-100 py-4 transition dark:bg-slate-900"};function H(n,t){return a(),i("nav",q,[f(n.$slots,"default")])}const I=L(j,[["render",H]]),J={class:"flex h-full flex-col"},M={class:"flex-grow"},et=g({__name:"default",setup(n){const t=v(),r=z(),c=A(),{staffToken:m}=G(O());return(_,y)=>{const u=B,k=N,d=F,b=W,$=I,C=S,w=V;return a(),i("div",J,[e(k,null,{default:o(()=>[s(t).name!=="auth"?(a(),i(h,{key:0},[s(c).data?(a(),i(h,{key:0},[p("span",null,x(s(c).data.email),1),e(u,{variant:"primary",onClick:s(c).logout},{default:o(()=>[l(" Logout ")]),_:1},8,["onClick"])],64)):(a(),P(u,{key:1,variant:"primary",to:"/auth"},{default:o(()=>[l(" Login ")]),_:1}))],64)):U("",!0)]),_:1}),e(C,{class:"flex flex-grow gap-8"},{default:o(()=>[e($,{class:"shrink-0 basis-[18rem]"},{default:o(()=>[e(b,{title:"General"},{default:o(()=>[e(d,{to:"/overview"},{default:o(()=>[l("Overview")]),_:1}),e(d,{to:"/verify-identity"},{default:o(()=>[l("Verify identity")]),_:1}),e(d,{to:"/change-password"},{default:o(()=>[l("Change password")]),_:1}),e(d,{to:`${s(r).public.publisherAreaURL}/auth?st=${s(m)}`},{default:o(()=>[l("Publisher area")]),_:1},8,["to"])]),_:1})]),_:1}),p("main",M,[f(_.$slots,"default")])]),_:3}),e(w)])}}});export{et as default};
//# sourceMappingURL=BnMXOj_9.js.map
