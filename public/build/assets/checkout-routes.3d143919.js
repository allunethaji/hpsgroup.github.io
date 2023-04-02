import{b$ as U,a as n,at as N,O as G,r as u,cx as W,j as l,x as Q,T as h,b9 as Y,C as H,cy as J,az as v,b as K,d as L,l as D,b1 as V,cz as X,cu as Z,ag as ee,ah as S,b0 as j,u as C,aF as te,aB as I,aA as re,bG as M,m as f,cv as ne,cw as k}from"./main.af1248d4.js";import{S as ae,l as se,B as O}from"./billing-redirect-message.ed7fc001.js";import"./TaskAlt.c6d31a81.js";function E({children:e}){const{isLoggedIn:t,isSubscribed:r}=U();return t?t&&r?n(N,{to:"/billing",replace:!0}):e||n(G,{}):n(N,{to:"/register",replace:!0})}function _({children:e}){const[t,r]=e;return u.exports.useEffect(()=>{W("be.onboarding.selected")},[]),l("div",{className:"flex flex-col h-full overflow-y-auto",children:[n(Q,{children:n(h,{message:"Checkout"})}),n(Y,{size:"sm",color:"transparent",className:"flex-shrink-0 z-10 mb-20 md:mb-0",textColor:"text-main",logoColor:"dark",darkModeColor:"transparent",menuPosition:"checkout-page-navbar"}),l("div",{className:"flex-auto md:flex w-full mx-auto justify-between px-20 md:px-0 md:pt-128 md:max-w-950",children:[n("div",{className:"hidden md:block fixed right-0 top-0 w-1/2 h-full bg-alt shadow-[15px_0_30px_0_rgb(0_0_0_/_18%)]"}),l("div",{className:"md:w-400 overflow-hidden",children:[t,n(H,{menu:"checkout-page-footer",className:"text-xs mt-50 text-muted overflow-x-auto"}),n("div",{className:"mt-40",children:n(J,{})})]}),n("div",{className:"hidden md:block w-384",children:n("div",{className:"relative z-10",children:r})})]})]})}const q=e=>`billing/products/${e}`;function ie(){var s;const{productId:e,priceId:t}=v(),r=K([q(e)],()=>ce(e),{keepPreviousData:!0,enabled:e!=null&&t!=null}),a=(s=r.data)==null?void 0:s.product,i=(a==null?void 0:a.prices.find(c=>c.id===parseInt(t)))||(a==null?void 0:a.prices[0]);return{status:r.status,product:a,price:i}}function ce(e){return L.get(q(e)).then(t=>t.data)}function R({showBillingLine:e=!0}){const{status:t,product:r,price:a}=ie();return t==="error"||t!=="loading"&&(!r||!a)?null:l("div",{children:[n("h2",{className:"text-2xl mb-30",children:n(h,{message:"Summary"})}),t==="loading"?n(ue,{},"loading-skeleton"):n(oe,{product:r,price:a,showBillingLine:e})]})}function oe({product:e,price:t,showBillingLine:r}){return l(D.div,{children:[n("div",{className:"text-xl font-semibold mb-6",children:e.name}),e.description&&n("div",{className:"text-sm text-muted",children:e.description}),n(V,{priceClassName:"font-bold text-4xl",periodClassName:"text-muted text-xs",variant:"separateLine",price:t,className:"mt-32"}),n(X,{product:e}),r&&l("div",{className:"flex items-center justify-between gap-24 border-t pt-24 mt-32 font-medium",children:[n("div",{children:n(h,{message:"Billed today"})}),n("div",{children:n(Z,{value:t.amount,currency:t.currency})})]})]})}function ue(){return l(D.div,{...ee,className:"max-w-180",children:[n(S,{className:"text-xl mb-6"}),n(S,{className:"text-sm"}),n(S,{className:"text-4xl mt-32"})]})}/*!
 * paypal-js v5.1.4 (2022-11-29T23:08:21.847Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){var r=document.querySelector('script[src="'.concat(e,'"]'));if(r===null)return null;var a=F(e,t),i=r.cloneNode();if(delete i.dataset.uidAuto,Object.keys(i.dataset).length!==Object.keys(a.dataset).length)return null;var s=!0;return Object.keys(i.dataset).forEach(function(c){i.dataset[c]!==a.dataset[c]&&(s=!1)}),s?r:null}function de(e){var t=e.url,r=e.attributes,a=e.onSuccess,i=e.onError,s=F(t,r);s.onerror=i,s.onload=a,document.head.insertBefore(s,document.head.firstElementChild)}function fe(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),be(e);var r=Object.keys(e).filter(function(s){return typeof e[s]<"u"&&e[s]!==null&&e[s]!==""}).reduce(function(s,c){var o=e[c].toString();return c.substring(0,5)==="data-"?s.dataAttributes[c]=o:s.queryParams[c]=o,s},{queryParams:{},dataAttributes:{}}),a=r.queryParams,i=r.dataAttributes;return{url:"".concat(t,"?").concat(pe(a)),dataAttributes:i}}function pe(e){var t="";return Object.keys(e).forEach(function(r){t.length!==0&&(t+="&"),t+=r+"="+e[r]}),t}function me(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}function F(e,t){t===void 0&&(t={});var r=document.createElement("script");return r.src=e,Object.keys(t).forEach(function(a){r.setAttribute(a,t[a]),a==="data-csp-nonce"&&r.setAttribute("nonce",t["data-csp-nonce"])}),r}function be(e){var t=e["merchant-id"],r=e["data-merchant-id"],a="",i="";return Array.isArray(t)?t.length>1?(a="*",i=t.toString()):a=t.toString():typeof t=="string"&&t.length>0?a=t:typeof r=="string"&&r.length>0&&(a="*",i=r),e["merchant-id"]=a,e["data-merchant-id"]=i,e}function he(e,t){if(t===void 0&&(t=T()),z(e,t),typeof window>"u")return t.resolve(null);var r=fe(e),a=r.url,i=r.dataAttributes,s=i["data-namespace"]||"paypal",c=$(s);return le(a,i)&&c?t.resolve(c):ge({url:a,attributes:i},t).then(function(){var o=$(s);if(o)return o;throw new Error("The window.".concat(s," global variable is not available."))})}function ge(e,t){t===void 0&&(t=T()),z(e,t);var r=e.url,a=e.attributes;if(typeof r!="string"||r.length===0)throw new Error("Invalid url.");if(typeof a<"u"&&typeof a!="object")throw new Error("Expected attributes to be an object.");return new t(function(i,s){if(typeof window>"u")return i();de({url:r,attributes:a,onSuccess:function(){return i()},onError:function(){var c=new Error('The script "'.concat(r,'" failed to load.'));return window.fetch?fetch(r).then(function(o){return o.status===200&&s(c),o.text()}).then(function(o){var p=me(o);s(new Error(p))}).catch(function(o){s(o)}):s(c)}})})}function T(){if(typeof Promise>"u")throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function $(e){return window[e]}function z(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}function ve({productId:e,priceId:t}){const{data:r}=j(),a=u.exports.useRef(!1),i=u.exports.useRef(!1),[s,c]=u.exports.useState(!1),o=u.exports.useRef(null),{base_url:p,billing:{stripe:{enable:m},paypal:{enable:g,public_key:d}}}=C();return u.exports.useEffect(()=>{!g||!d||a.current||(he({"client-id":d,intent:"subscription",vault:!0,"disable-funding":m?"card":void 0}).then(()=>{c(!0)}),a.current=!0)},[d,g,m]),u.exports.useEffect(()=>{var P;if(!s||!((P=window.paypal)!=null&&P.Buttons)||!o.current||!(r!=null&&r.products.length)||!e||!t||i.current)return;const x=r.products.find(b=>b.id===parseInt(e)),y=x==null?void 0:x.prices.find(b=>b.id===parseInt(t));window.paypal.Buttons({style:{label:"pay"},createSubscription:(b,w)=>w.subscription.create({application_context:{shipping_preference:"NO_SHIPPING"},plan_id:y==null?void 0:y.paypal_id}),onApprove:(b,w)=>(w.redirect(`${p}/checkout/${e}/${t}/paypal/done?subscriptionId=${b.subscriptionID}&status=success`),Promise.resolve()),onError:b=>{location.href=`${p}/checkout/${e}/${t}/paypal/done?status=error`}}).render(o.current).then(()=>{i.current=!0})},[e,t,r,s,p]),{paypalElementRef:o,stripeIsEnabled:d!=null&&g}}function xe(){var p;const{productId:e,priceId:t}=v(),r=j(),{paypalElementRef:a}=ve({productId:e,priceId:t}),{base_url:i,billing:{stripe:s}}=C();if(r.isLoading)return n(te,{});const c=(p=r.data)==null?void 0:p.products.find(m=>m.id===parseInt(e)),o=c==null?void 0:c.prices.find(m=>m.id===parseInt(t));return!c||!o||r.status==="error"?n(N,{to:"/pricing",replace:!0}):l(_,{children:[l(u.exports.Fragment,{children:[n("h1",{className:"text-4xl mb-40",children:n(h,{message:"Checkout"})}),s.enable&&l(u.exports.Fragment,{children:[n(ae,{productId:e,submitLabel:n(h,{message:"Upgrade"}),type:"subscription",returnUrl:`${i}/checkout/${e}/${t}/stripe/done`}),n(ye,{})]}),n("div",{ref:a}),n("div",{className:"text-xs text-muted mt-30",children:n(h,{message:"You\u2019ll be charged until you cancel your subscription. Previous charges won\u2019t be refunded when you cancel unless it\u2019s legally required. Your payment data is encrypted and secure. By subscribing your agree to our terms of service and privacy policy."})})]}),n(R,{})]})}function ye(){return n("div",{className:"relative text-center my-20 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-full before:bg-divider",children:n("span",{className:"bg relative z-10 px-10 text-sm text-muted",children:n(h,{message:"or"})})})}function we(){const{invalidateBootstrapData:e}=I(),{productId:t,priceId:r}=v(),a=re(),{billing:{stripe_public_key:i}}=C(),[s]=M(),c=s.get("payment_intent_client_secret"),[o,p]=u.exports.useState(),m=u.exports.useRef();return u.exports.useEffect(()=>{m.current||(se(i).then(async g=>{if(!g||!c){p(B());return}g.retrievePaymentIntent(c).then(({paymentIntent:d})=>{(d==null?void 0:d.status)==="succeeded"&&Se(d.id).then(()=>{e()}),p(B(d==null?void 0:d.status,t,r))})}),m.current=!0)},[i,c,r,t,e]),c?l(_,{children:[n(O,{config:o}),n(R,{showBillingLine:!1})]}):(a("/"),null)}function B(e,t,r){switch(e){case"succeeded":return{message:f("Subscription successful!"),status:"success",buttonLabel:f("Return to site"),link:"/billing"};case"processing":return{message:f("Payment processing. We'll update you when payment is received."),status:"success",buttonLabel:f("Return to site"),link:"/billing"};case"requires_payment_method":return{message:f("Payment failed. Please try another payment method."),status:"error",buttonLabel:f("Go back"),link:A(t,r)};default:return{message:f("Something went wrong"),status:"error",buttonLabel:f("Go back"),link:A(t,r)}}}function A(e,t){return e&&t?`/buy/${e}/${t}`:"/"}function Se(e){return L.post("billing/stripe/store-subscription-details-locally",{payment_intent_id:e})}function ke(){const{invalidateBootstrapData:e}=I(),{productId:t,priceId:r}=v(),[a]=M(),[i,s]=u.exports.useState();return u.exports.useEffect(()=>{const c=a.get("subscriptionId"),o=a.get("status");s(Ee(o,t,r)),c&&o==="success"&&Le(c).then(()=>{e()})},[r,t,a,e]),l(_,{children:[n(O,{config:i}),n(R,{showBillingLine:!1})]})}function Ee(e,t,r){switch(e){case"success":return{message:f("Subscription successful!"),status:"success",buttonLabel:f("Return to site"),link:"/billing"};default:return{message:f("Something went wrong. Please try again."),status:"error",buttonLabel:f("Go back"),link:Ne(t,r)}}}function Ne(e,t){return e&&t?`/buy/${e}/${t}`:"/"}function Le(e){return L.post("billing/paypal/store-subscription-details-locally",{paypal_subscription_id:e})}function Pe(){return l(ne,{children:[n(k,{path:":productId/:priceId",element:n(E,{children:n(xe,{})})}),n(k,{path:":productId/:priceId/stripe/done",element:n(E,{children:n(we,{})})}),n(k,{path:":productId/:priceId/paypal/done",element:n(E,{children:n(ke,{})})})]})}export{Pe as default};
//# sourceMappingURL=checkout-routes.3d143919.js.map
