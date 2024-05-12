import{K as v}from"./D0ohpK4c.js";var y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g={},d={},p={},C=y&&y.__awaiter||function(e,r,t,i){function c(n){return n instanceof t?n:new t(function(o){o(n)})}return new(t||(t=Promise))(function(n,o){function u(s){try{a(i.next(s))}catch(h){o(h)}}function f(s){try{a(i.throw(s))}catch(h){o(h)}}function a(s){s.done?n(s.value):c(s.value).then(u,f)}a((i=i.apply(e,r||[])).next())})},L=y&&y.__generator||function(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,c,n,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(a){return function(s){return f([a,s])}}function f(a){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,c&&(n=a[0]&2?c.return:a[0]?c.throw||((n=c.return)&&n.call(c),0):c.next)&&!(n=n.call(c,a[1])).done)return n;switch(c=0,n&&(a=[a[0]&2,n.value]),a[0]){case 0:case 1:n=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,c=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){t.label=a[1];break}if(a[0]===6&&t.label<n[1]){t.label=n[1],n=a;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(a);break}n[2]&&t.ops.pop(),t.trys.pop();continue}a=r.call(e,t)}catch(s){a=[6,s],c=0}finally{i=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(p,"__esModule",{value:!0});p.ReCaptchaInstance=void 0;var m=function(){function e(r,t,i){this.siteKey=r,this.recaptchaID=t,this.recaptcha=i,this.styleContainer=null}return e.prototype.execute=function(r){return C(this,void 0,void 0,function(){return L(this,function(t){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:r}):this.recaptcha.execute(this.recaptchaID,{action:r})]})})},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();p.ReCaptchaInstance=m;Object.defineProperty(d,"__esModule",{value:!0});d.getInstance=d.load=void 0;var _=p,l;(function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"})(l||(l={}));var w=function(){function e(){}return e.load=function(r,t){if(t===void 0&&(t={}),typeof document>"u")return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===l.LOADED)return e.instance.getSiteKey()===r?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===l.LOADING)return r!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise(function(c,n){e.successfulLoadingConsumers.push(function(o){return c(o)}),e.errorLoadingRunnable.push(function(o){return n(o)})});e.instanceSiteKey=r,e.setLoadingState(l.LOADING);var i=new e;return new Promise(function(c,n){i.loadScript(r,t.useRecaptchaNet||!1,t.useEnterprise||!1,t.renderParameters?t.renderParameters:{},t.customUrl).then(function(){e.setLoadingState(l.LOADED);var o=i.doExplicitRender(grecaptcha,r,t.explicitRenderParameters?t.explicitRenderParameters:{},t.useEnterprise||!1),u=new _.ReCaptchaInstance(r,o,grecaptcha);e.successfulLoadingConsumers.forEach(function(f){return f(u)}),e.successfulLoadingConsumers=[],t.autoHideBadge&&u.hideBadge(),e.instance=u,c(u)}).catch(function(o){e.errorLoadingRunnable.forEach(function(u){return u(o)}),e.errorLoadingRunnable=[],n(o)})})},e.getInstance=function(){return e.instance},e.setLoadingState=function(r){e.loadingState=r},e.getLoadingState=function(){return e.loadingState===null?l.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(r,t,i,c,n){var o=this;t===void 0&&(t=!1),i===void 0&&(i=!1),c===void 0&&(c={}),n===void 0&&(n="");var u=document.createElement("script");u.setAttribute("recaptcha-v3-script","");var f="https://www.google.com/recaptcha/api.js";t&&(i?f="https://recaptcha.net/recaptcha/enterprise.js":f="https://recaptcha.net/recaptcha/api.js"),i&&(f="https://www.google.com/recaptcha/enterprise.js"),n&&(f=n),c.render&&(c.render=void 0);var a=this.buildQueryString(c);return u.src=f+"?render=explicit"+a,new Promise(function(s,h){u.addEventListener("load",o.waitForScriptToLoad(function(){s(u)},i),!1),u.onerror=function(b){e.setLoadingState(l.NOT_LOADED),h(b)},document.head.appendChild(u)})},e.prototype.buildQueryString=function(r){var t=Object.keys(r);return t.length<1?"":"&"+Object.keys(r).filter(function(i){return!!r[i]}).map(function(i){return i+"="+r[i]}).join("&")},e.prototype.waitForScriptToLoad=function(r,t){var i=this;return function(){window.grecaptcha===void 0?setTimeout(function(){i.waitForScriptToLoad(r,t)},e.SCRIPT_LOAD_DELAY):t?window.grecaptcha.enterprise.ready(function(){r()}):window.grecaptcha.ready(function(){r()})}},e.prototype.doExplicitRender=function(r,t,i,c){var n={sitekey:t,badge:i.badge,size:i.size,tabindex:i.tabindex};return i.container?c?r.enterprise.render(i.container,n):r.render(i.container,n):c?r.enterprise.render(n):r.render(n)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();d.load=w.load;d.getInstance=w.getInstance;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ReCaptchaInstance=e.getInstance=e.load=void 0;var r=d;Object.defineProperty(e,"load",{enumerable:!0,get:function(){return r.load}}),Object.defineProperty(e,"getInstance",{enumerable:!0,get:function(){return r.getInstance}});var t=p;Object.defineProperty(e,"ReCaptchaInstance",{enumerable:!0,get:function(){return t.ReCaptchaInstance}})})(g);function I(){const e=v();let r;async function t(){return r||(r=await g.load(e.public.recaptchaKey,{autoHideBadge:!0})),await r.execute("submit")}return t}export{I as u};
//# sourceMappingURL=XYvocmwK.js.map
