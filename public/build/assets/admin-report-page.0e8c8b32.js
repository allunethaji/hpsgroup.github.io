import{b as _,d as E,j as c,c as x,a,av as K,T as h,r as m,af as H,aQ as O,cA as Q,bB as L,bE as A,ba as W,bs as C,f as q,v as U,u as Z,cB as J,m as R,cC as F,ai as X,e as V,t as Y,B as ee,aP as te,x as ae}from"./main.af1248d4.js";import{T as se,a as re,b as ne}from"./TrendingUp.8f54fdb8.js";import{t as z,F as oe}from"./admin-routes.953e7d47.js";import{a4 as $,a5 as ie,a6 as le,a7 as ce,a8 as me}from"./date-picker.92991ab6.js";import"./Edit.6a3a7770.js";import"./use-resume-subscription.21a1c30d.js";const j="admin/reports";function de(e={}){return _([j,e],()=>ue(e),{keepPreviousData:!0})}function ue({types:e,dateRange:t}){const s={};return e&&(s.types=e.join(",")),t&&(s.startDate=t.start.toAbsoluteString(),s.endDate=t.end.toAbsoluteString(),s.timezone=t.start.timeZone),E.get(j,{params:s}).then(o=>o.data)}function M(e){const{title:t,description:s,children:o,className:n,contentIsFlex:r=!0,contentClassName:l,contentRef:i,minHeight:f="min-h-440"}=e;return c("div",{className:x("bg border rounded h-full flex flex-col flex-auto",f,n),children:[c("div",{className:"text-xs p-14 flex-shrink-0 flex justify-between",children:[a("div",{className:"font-semibold text-sm",children:t}),s&&a("div",{className:"text-muted",children:s})]}),a("div",{ref:i,className:x("p-14 relative",r&&"flex-auto flex items-center justify-center",l),children:o})]})}function y(){return c("div",{className:"flex items-center gap-10 text-sm absolute mx-auto",children:[a(K,{isIndeterminate:!0,size:"sm"}),a(h,{message:"Chart loading"})]})}const fe=m.exports.lazy(()=>H(()=>import("./lazy-chart.86eec841.js"),["./lazy-chart.86eec841.js","./main.af1248d4.js","./main.5308c145.css"],import.meta.url));function N(e){const{title:t,description:s,className:o,contentRef:n,isLoading:r}=e;return a(M,{title:t,description:s,className:o,contentRef:n,children:c(m.exports.Suspense,{fallback:a(y,{}),children:[a(fe,{...e}),r&&a(y,{})]})})}function w(e,{localeCode:t="en",shareFirstDatasetLabels:s=!0}){if(!e)return{datasets:[]};const o=[];return{...e,datasets:e.datasets.map((n,r)=>{const l=n.data.map((i,f)=>{let d;return r===0||!s?(d=ge(i,e.granularity,t),o[f]=d):d=o[f],{...d,value:i.value}});return{...n,data:l}})}}function ge(e,t,s){return e.label!=null?{label:e.label}:e.date?he(e,t,s):{label:""}}function he({date:e,endDate:t,value:s},o="day",n){const r=A(e).toDate(),l=t?A(t).toDate():null;switch(o){case"minute":return{label:u(n,{second:"2-digit"}).format(r),tooltipTitle:u(n,{day:"2-digit",hour:"numeric",minute:"numeric",second:"2-digit"}).format(r)};case"hour":return{label:u(n,{hour:"numeric",minute:"numeric"}).format(r),tooltipTitle:u(n,{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"}).format(r)};case"day":return{label:u(n,{day:"2-digit",weekday:"short"}).format(r),tooltipTitle:u(n,{day:"2-digit",weekday:"short",month:"short"}).format(r)};case"week":return{label:u(n,{month:"short",day:"2-digit"}).format(r),tooltipTitle:u(n,{day:"2-digit",month:"long",year:"numeric"}).formatRange(r,l)};case"month":return{label:u(n,{month:"short",year:"numeric"}).format(r),tooltipTitle:u(n,{month:"long",year:"numeric"}).format(r)};case"year":return{label:u(n,{year:"numeric"}).format(r),tooltipTitle:u(n,{year:"numeric"}).format(r)}}}const u=O((e,t)=>new Q(e,t),{equals:(e,t)=>L(e,t),callTimeout:void 0}),P=W().themes.all[0].colors["--be-primary"],g=[[`rgb(${P.replaceAll(" ",",")})`,`rgba(${P.replaceAll(" ",",")},0.2)`],["rgb(255,112,67)","rgb(255,112,67,0.2)"],["rgb(255,167,38)","rgb(255,167,38,0.2)"],["rgb(141,110,99)","rgb(141,110,99,0.2)"],["rgb(102,187,106)","rgba(102,187,106,0.2)"],["rgb(92,107,192)","rgb(92,107,192,0.2)"]],pe={parsing:{xAxisKey:"label",yAxisKey:"value"},datasets:{line:{fill:"origin",tension:.1,pointBorderWidth:4,pointHitRadius:10}},plugins:{tooltip:{intersect:!1,mode:"index"}}};function xe({data:e,className:t,...s}){const{localeCode:o}=C(),n=m.exports.useMemo(()=>{const r=w(e,{localeCode:o});return r.datasets=r.datasets.map((l,i)=>({...l,backgroundColor:g[i][1],borderColor:g[i][0],pointBackgroundColor:g[i][0]})),r},[e,o]);return a(N,{...s,className:x(t,"min-w-500"),data:n,type:"line",options:pe})}const be={parsing:{key:"value"},plugins:{tooltip:{intersect:!0}}};function ve({data:e,className:t,...s}){const{localeCode:o}=C(),n=m.exports.useMemo(()=>{var l;const r=w(e,{localeCode:o});return r.labels=(l=r.datasets[0])==null?void 0:l.data.map(i=>i.label),r.datasets=r.datasets.map((i,f)=>({...i,backgroundColor:g.map(d=>d[1]),borderColor:g.map(d=>d[0]),borderWidth:2})),r},[e,o]);return a(N,{type:"polarArea",data:n,options:be,className:x(t,"min-w-500"),...s})}function ye({data:e,direction:t="vertical",individualBarColors:s=!1,className:o,...n}){const{localeCode:r}=C(),l=m.exports.useMemo(()=>{const d=w(e,{localeCode:r});return d.datasets=d.datasets.map((b,v)=>({...b,backgroundColor:s?g.map(p=>p[1]):g[v][1],borderColor:s?g.map(p=>p[0]):g[v][0],borderWidth:2})),d},[e,r,s]),i=t==="horizontal",f=m.exports.useMemo(()=>({indexAxis:i?"y":"x",parsing:{xAxisKey:i?"value":"label",yAxisKey:i?"label":"value"}}),[i]);return a(N,{type:"bar",className:x(o,"min-w-500"),data:l,options:f,...n})}const B=m.exports.memo(({value:e,...t})=>{const s=q(t);return isNaN(e)&&(e=0),a(m.exports.Fragment,{children:s.format(e)})},L),I="https://www.gstatic.com/charts/loader.js";function Ce({placeholderRef:e,data:t}){const{trans:s}=U(),{analytics:o}=Z(),n=o==null?void 0:o.gchart_api_key,{selectedTheme:r}=J(),l=m.exports.useRef(),i=m.exports.useCallback(()=>{var D,T;if(typeof google>"u")return;const d=t.map(k=>[k.label,k.value]);d.unshift([s(R("Country")),s(R("Clicks"))]);const b=`${z(r.colors["--be-paper"])}`,p={colorAxis:{colors:[`${z(r.colors["--be-primary"])}`]},backgroundColor:b};!l.current&&e.current&&((D=google==null?void 0:google.visualization)==null?void 0:D.GeoChart)&&(l.current=new google.visualization.GeoChart(e.current)),(T=l.current)==null||T.draw(google.visualization.arrayToDataTable(d),p)},[r,t,e]),f=m.exports.useCallback(()=>{F.alreadyLoading(I)||F.loadAsset(I,{type:"js"}).then(()=>{google.charts.load("current",{packages:["geochart"],mapsApiKey:n}),google.charts.setOnLoadCallback(()=>{i()})})},[n,i]);return m.exports.useEffect(()=>{f()},[f]),m.exports.useEffect(()=>{i()},[r,i,t]),{drawGoogleChart:i}}function Ne({data:e,isLoading:t,...s}){const o=m.exports.useRef(null),n=e==null?void 0:e.datasets[0].data,r=m.exports.useMemo(()=>n||[],[n]);return Ce({placeholderRef:o,data:r}),c(M,{...s,className:"min-w-500",title:a(h,{message:"Top Locations"}),contentIsFlex:t,children:[t&&a(y,{}),c("div",{className:"flex",children:[a("div",{ref:o,className:"flex-auto w-[480px] min-h-[340px]"}),a("div",{className:"text-sm max-h-[370px] w-[170px] flex-initial overflow-y-auto",children:r.map(l=>c("div",{className:"flex items-center gap-4 mb-4",children:[a("div",{className:"max-w-110 whitespace-nowrap overflow-hidden overflow-ellipsis",children:l.label}),c("div",{children:["(",l.percentage,")%"]})]},l.label))})]})]})}const G="gap-12 md:gap-24 mb-12 md:mb-24",S=`flex flex-col md:flex-row md:items-center overflow-x-auto ${G}`;function we({report:e,isLoading:t}){const s=e==null?void 0:e.pageViews.total;return c(m.exports.Fragment,{children:[c("div",{className:S,children:[a(xe,{isLoading:t,className:"flex-auto",data:e==null?void 0:e.pageViews,title:a(h,{message:"Pageviews"}),description:s?a(h,{message:":count total views",values:{count:a(B,{value:s})}}):null}),a(ve,{isLoading:t,data:e==null?void 0:e.devices,title:a(h,{message:"Top devices"})})]}),c("div",{className:S,children:[a(ye,{isLoading:t,data:e==null?void 0:e.browsers,className:"flex-auto md:w-1/3",direction:"horizontal",individualBarColors:!0,hideLegend:!0,title:a(h,{message:"Top browsers"})}),a(Ne,{isLoading:t,className:"flex-auto",data:e==null?void 0:e.locations,title:a(h,{message:"Top locations"})})]})]})}function De({report:e,dateRange:t}){return $,t.start,t.end,a("div",{className:`flex items-center flex-shrink-0 overflow-x-auto h-[97px] ${G}`,children:e==null?void 0:e.map(s=>a(Te,{datum:s},s.name))})}function Te({datum:e,label:t}){const s=X(e.icon);return c("div",{className:"flex items-center flex-auto rounded border p-20 gap-18 h-full whitespace-nowrap",children:[a("div",{className:"bg-primary-light/20 rounded-lg p-10 flex-shrink-0",children:a(s,{size:"lg",className:"text-primary"})}),c("div",{className:"flex-auto",children:[c("div",{className:"flex items-center gap-20 justify-between",children:[a("div",{className:"text-main text-lg font-bold",children:e.type==="fileSize"?a(oe,{bytes:e.currentValue}):a(B,{value:e.currentValue})}),t&&a("div",{className:"text-xs text-muted ml-auto",children:t})]}),c("div",{className:"flex items-center gap-20 justify-between",children:[a("h2",{className:"text-muted text-sm",children:e.name}),e.percentageChange!=null&&a("div",{className:"flex items-center gap-10",children:a(ke,{percentage:e.percentageChange})})]})]})]},e.name)}function ke({percentage:e}){let t;return e>0?t=a(se,{size:"md",className:"text-positive"}):e===0?t=a(re,{className:"text-muted"}):t=a(ne,{className:"text-danger"}),c(m.exports.Fragment,{children:[t,c("div",{className:"text-sm font-semibold text-muted",children:[e,"%"]})]})}const Ae={month:"short",day:"2-digit"};function Re({value:e,onChange:t,compactOnMobile:s=!0}){const o=V();return c(Y,{type:"popover",onClose:n=>{n&&t(n)},children:[a(ee,{variant:"outline",color:"chip",endIcon:a(ie,{}),children:a($,{start:e.start,end:e.end,options:o&&s?Ae:te.short})}),a(Fe,{value:e})]})}function Fe({value:e}){const t=V(),s=le({defaultValue:e,closeDialogOnSelection:!1});return a(ce,{state:s,showInlineDatePickerField:!t})}function $e(){const[e,t]=m.exports.useState(()=>me[2].getRangeValue()),{isLoading:s,data:o}=de({dateRange:e}),n=a(h,{message:"Visitors report"});return c("div",{className:"min-h-full gap-12 md:gap-24 p-12 md:p-24 overflow-x-hidden",children:[c("div",{className:"md:flex items-center justify-between gap-24 mb-24",children:[a(ae,{children:n}),a("h1",{className:"mb-24 md:mb-0 text-3xl font-light",children:n}),a(Re,{value:e,onChange:t})]}),a(De,{report:o==null?void 0:o.headerReport,dateRange:e}),a(we,{report:o==null?void 0:o.visitorsReport,isLoading:s})]})}export{$e as default};
//# sourceMappingURL=admin-report-page.0e8c8b32.js.map