import{_ as v}from"./v-input.vue.PAcp_zsd.js";import{_ as h}from"./v-label.vue.Dfzkcx5F.js";import{_ as w}from"./v-button.vue.CF3A_p8c.js";import{_ as b}from"./nuxt-link.CAxo-xWr.js";import{f as V,m as k,r as y,k as B,o as N,c as S,a as p,b as t,w as s,i as o,d as c,q as C,n as m}from"./entry.DdZGh94s.js";import{u as T}from"./useRecaptcha.FHn2Erzg.js";const U={class:"flex flex-col items-center gap-4"},$={class:"flex w-72 flex-col gap-2"},D={class:"text-sm"},j=V({__name:"index",setup(E){const i=k(),a=y({app_id:i.appID,email:i.email,password:"","g-recaptcha-response":""}),f=T(),r=B(!1);async function d(){r.value=!0;try{a["g-recaptcha-response"]=await f();const e=await C(a);if(e.next_action==="verify_2fa")return m("/auth/2fa/verify/"+e.ticket);if(e.next_action==="enable_2fa")return m("/auth/2fa/enable/"+e.ticket);if(e.redirect_uri)return m(e.redirect_uri)}finally{r.value=!1}}return(e,n)=>{const u=v,_=h,x=w,g=b;return N(),S("div",U,[p("form",$,[t(_,{label:"E-mail"},{default:s(()=>[t(u,{modelValue:o(a).email,"onUpdate:modelValue":n[0]||(n[0]=l=>o(a).email=l),type:"email"},null,8,["modelValue"])]),_:1}),t(_,{label:"Password"},{default:s(()=>[t(u,{modelValue:o(a).password,"onUpdate:modelValue":n[1]||(n[1]=l=>o(a).password=l),autofocus:!!o(i).email,type:"password"},null,8,["modelValue","autofocus"])]),_:1}),t(x,{variant:"primary",class:"mt-2",loading:o(r),onClick:d},{default:s(()=>[c(" Login ")]),_:1},8,["loading"])]),p("p",D,[c("Don't have an account? "),t(g,{to:"/auth/sign-up"},{default:s(()=>[c("Sign Up")]),_:1})])])}}});export{j as default};
//# sourceMappingURL=index.B8lZaUlK.js.map
