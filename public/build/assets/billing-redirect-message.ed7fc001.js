import{b$ as A,bJ as M,r as l,bs as B,u as C,d as I,j as x,a as s,c as D,B as R,ah as o,A as F,l as j,ag as P,ch as z,T as y,N as V}from"./main.af1248d4.js";import{T as W}from"./TaskAlt.c6d31a81.js";var L="https://js.stripe.com/v3",q=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,N="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",G=function(){for(var e=document.querySelectorAll('script[src^="'.concat(L,'"]')),t=0;t<e.length;t++){var n=e[t];if(!!q.test(n.src))return n}return null},$=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(L).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},U=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.44.1",startTime:t})},g=null,X=function(e){return g!==null||(g=new Promise(function(t,n){if(typeof window>"u"){t(null);return}if(window.Stripe&&e&&console.warn(N),window.Stripe){t(window.Stripe);return}try{var a=G();a&&e?console.warn(N):a||(a=$(e)),a.addEventListener("load",function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(i){n(i);return}})),g},J=function(e,t,n){if(e===null)return null;var a=e.apply(void 0,t);return U(a,n),a},T=Promise.resolve().then(function(){return X(null)}),_=!1;T.catch(function(r){_||console.warn(r)});var O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];_=!0;var a=Date.now();return T.then(function(i){return J(i,t,a)})};function H({type:r,productId:e}){const{user:t}=A(),n=M(),a=l.exports.useRef(!1),i=l.exports.useRef(null),{localeCode:f}=B(),[u,S]=l.exports.useState(null),[w,h]=l.exports.useState(null),{branding:{site_name:m},billing:{stripe_public_key:c,stripe:{enable:v}}}=C();return l.exports.useEffect(()=>{!v||!c||a.current||(Promise.all([O(c,{apiVersion:"2022-08-01",locale:f}),r==="setupIntent"?K():Q(e)]).then(([d,{clientSecret:b}])=>{if(d&&i.current){const p=d.elements({clientSecret:b,appearance:{theme:n?"night":"stripe"}});p.create("payment",{business:{name:m},terms:{card:"never"},defaultValues:{billingDetails:{email:t==null?void 0:t.email}}}).mount(i.current),S(d),h(p)}}),a.current=!0)},[e,c,v,n,f,m,r,t==null?void 0:t.email]),{stripe:u,elements:w,paymentElementRef:i,stripeIsEnabled:c!=null&&v}}function K(){return I.post("billing/stripe/create-setup-intent").then(r=>r.data)}function Q(r){return I.post("billing/stripe/create-partial-subscription",{product_id:r}).then(e=>e.data)}function re({productId:r,type:e="subscription",submitLabel:t,returnUrl:n}){const{stripe:a,elements:i,paymentElementRef:f,stripeIsEnabled:u}=H({type:e,productId:r}),[S,w]=l.exports.useState(null),[h,m]=l.exports.useState(!1),c=!u||i!=null&&a!=null;return x("form",{onSubmit:async d=>{var b,p;if(d.preventDefault(),!(!a||!i)){m(!0);try{const E=await a[e==="subscription"?"confirmPayment":"confirmSetup"]({elements:i,confirmParams:{return_url:n}});((b=E.error)==null?void 0:b.type)!=="validation_error"&&((p=E.error)==null?void 0:p.message)&&w(E.error.message)}catch{}m(!1)}},children:[s("div",{ref:f,className:D("min-h-[303px]",!u&&"hidden"),children:u&&s(Y,{})}),S&&!h&&s("div",{className:"text-danger mt-20",children:S}),s(R,{variant:"flat",color:"primary",size:"md",className:"w-full mt-40",type:"submit",disabled:h||!c,children:t})]})}function Y(){return x(l.exports.Fragment,{children:[s(o,{className:"h-30 mb-20"}),s(o,{className:"h-30 mb-20"}),s(o,{className:"h-30 mb-20"}),s(o,{className:"h-30"})]})}function ne({config:r}){return s(F,{initial:!1,mode:"wait",children:s("div",{className:"mt-80",children:r?x(j.div,{className:"text-center",...P,children:[r.status==="success"?s(W,{className:"text-positive text-6xl"}):s(z,{className:"text-danger text-6xl"}),s("div",{className:"text-2xl font-semibold mt-30",children:s(y,{...r.message})}),s(R,{variant:"flat",color:"primary",className:"w-full mt-30",size:"md",elementType:V,to:r.link,children:s(y,{...r.buttonLabel})})]},"payment-status"):s(Z,{},"loading-skeleton")})})}function Z(){return x(j.div,{className:"text-center max-w-280",...P,children:[s(o,{size:"w-50 h-50",variant:"rect"}),s(o,{className:"text-2xl mt-30"}),s(o,{size:"h-42",className:"mt-30"})]},"loading-skeleton")}export{ne as B,re as S,O as l};
//# sourceMappingURL=billing-redirect-message.ed7fc001.js.map
