import{_ as v}from"./v-input.vue.DTzx0bzX.js";import{_ as h}from"./v-label.vue.BeOgxoUI.js";import{_ as w}from"./v-button.vue.C_Pv1fgj.js";import{_ as b}from"./nuxt-link.CY5ducQa.js";import{f as y,m as V,r as k,k as B,o as N,c as S,a as r,b as a,w as s,i as o,d as l,q as C,n as _}from"./entry.MyYndEul.js";import{u as T}from"./useRecaptcha.mhDqHImI.js";const U={class:"flex flex-col items-center gap-4"},$={class:"flex w-72 flex-col gap-2"},D={class:"text-center text-sm"},E={class:"mb-1"},j=y({__name:"index",setup(L){const i=V(),t=k({app_id:i.appID,email:i.email,password:"","g-recaptcha-response":""}),d=T(),c=B(!1);async function x(){c.value=!0;try{t["g-recaptcha-response"]=await d();const e=await C(t);if(e.next_action==="verify_2fa")return _("/auth/2fa/verify/"+e.ticket);if(e.next_action==="enable_2fa")return _("/auth/2fa/enable/"+e.ticket);if(e.redirect_uri)return _(e.redirect_uri)}finally{c.value=!1}}return(e,n)=>{const m=v,p=h,g=w,f=b;return N(),S("div",U,[r("form",$,[a(p,{label:"E-mail"},{default:s(()=>[a(m,{modelValue:o(t).email,"onUpdate:modelValue":n[0]||(n[0]=u=>o(t).email=u),type:"email"},null,8,["modelValue"])]),_:1}),a(p,{label:"Password"},{default:s(()=>[a(m,{modelValue:o(t).password,"onUpdate:modelValue":n[1]||(n[1]=u=>o(t).password=u),autofocus:!!o(i).email,type:"password"},null,8,["modelValue","autofocus"])]),_:1}),a(g,{variant:"primary",class:"mt-2",loading:o(c),onClick:x},{default:s(()=>[l(" Login ")]),_:1},8,["loading"])]),r("div",D,[r("p",E,[l("Don't have an account? "),a(f,{to:"/auth/sign-up"},{default:s(()=>[l("Sign Up")]),_:1})]),r("p",null,[a(f,{to:"/auth/recover-password"},{default:s(()=>[l("Forgot your password?")]),_:1})])])])}}});export{j as default};
//# sourceMappingURL=index.yjDTtNV6.js.map
