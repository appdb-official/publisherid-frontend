import{_ as x}from"./v-input.vue.DTzx0bzX.js";import{_ as w}from"./v-label.vue.BeOgxoUI.js";import{_ as g}from"./v-button.vue.C_Pv1fgj.js";import{_ as h}from"./nuxt-link.CY5ducQa.js";import{f as k,g as b,m as y,r as V,k as N,o as S,c as B,a,b as t,w as s,i as n,d as r,s as C,x as R,n as $}from"./entry.MyYndEul.js";const A={class:"flex flex-col items-center gap-4"},T={class:"flex w-72 flex-col gap-2"},E={class:"text-center text-sm"},q=k({__name:"[ticket]",setup(I){const l=b(),_=y(),e=V({email:_.email,ticket:l.params.ticket,code:""}),o=N(!1);async function m(){o.value=!0;try{await C(e);const{notifySuccess:c}=R();c("Your new password was activated"),$("/auth")}finally{o.value=!1}}return(c,i)=>{const u=x,f=w,d=g,p=h;return S(),B("div",A,[a("form",T,[t(f,{label:"Activation code"},{default:s(()=>[t(u,{modelValue:n(e).code,"onUpdate:modelValue":i[0]||(i[0]=v=>n(e).code=v),autofocus:""},null,8,["modelValue"])]),_:1}),t(d,{variant:"primary",class:"mt-2",loading:n(o),onClick:m},{default:s(()=>[r(" Recover password ")]),_:1},8,["loading"])]),a("div",E,[a("p",null,[t(p,{to:"/auth"},{default:s(()=>[r("Sign In")]),_:1})])])])}}});export{q as default};
//# sourceMappingURL=_ticket_.CIfFSO9N.js.map
