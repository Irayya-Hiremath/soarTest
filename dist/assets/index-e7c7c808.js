import{r as u,j as o,R as M}from"./index-9e321909.js";import{r as q,w as R}from"./utils-8b92cb4e.js";function U({tabs:e}){var i;const[t,r]=u.useState(((i=e[0])==null?void 0:i.id)||"");return o.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7.5",children:o.jsxs("div",{className:"w-auto mx-auto mt-10",children:[o.jsx("div",{className:"flex w-full md:w-1/2 lg:w-1/2  border-gray-300",children:e.map(s=>o.jsx("div",{onClick:()=>r(s.id),className:`flex-1 cursor-pointer py-2 px-4 text-center font-medium ${t===s.id?"border-b-2 border-[#232323] text-[#232323]":"text-[#718EBF] "}`,children:s.label},s.id))}),o.jsx("div",{className:"w-[100%] relative py-2 rounded-b-lg overflow-hidden",children:e.map(s=>s.id===t&&o.jsx("div",{className:" animate-fadeIn",children:M.isValidElement(s.content)?s.content:o.jsx("div",{children:s.content})},s.id))})]})})}let _={data:""},H=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||_,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,V=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,y=(e,t)=>{let r="",i="",s="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":i+=a[1]=="f"?y(l,a):a+"{"+y(l,a[1]=="k"?"":t)+"}":typeof l=="object"?i+=y(l,t?t.replace(/([^,])+/g,n=>a.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=y.p?y.p(a,l):a+":"+l+";")}return r+(t&&s?t+"{"+s+"}":s)+i},g={},z=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+z(e[r]);return t}return e},W=(e,t,r,i,s)=>{let a=z(e),l=g[a]||(g[a]=(d=>{let c=0,m=11;for(;c<d.length;)m=101*m+d.charCodeAt(c++)>>>0;return"go"+m})(a));if(!g[l]){let d=a!==e?e:(c=>{let m,x,f=[{}];for(;m=Y.exec(c.replace(V,""));)m[4]?f.shift():m[3]?(x=m[3].replace(T," ").trim(),f.unshift(f[0][x]=f[0][x]||{})):f[0][m[1]]=m[2].replace(T," ").trim();return f[0]})(e);g[l]=y(s?{["@keyframes "+l]:d}:d,r?"":"."+l)}let n=r&&g.g?g.g:null;return r&&(g.g=g[l]),((d,c,m,x)=>{x?c.data=c.data.replace(x,d):c.data.indexOf(d)===-1&&(c.data=m?d+c.data:c.data+d)})(g[l],t,i,n),l},Z=(e,t,r)=>e.reduce((i,s,a)=>{let l=t[a];if(l&&l.call){let n=l(r),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;l=d?"."+d:n&&typeof n=="object"?n.props?"":y(n,""):n===!1?"":n}return i+s+(l??"")},"");function C(e){let t=this||{},r=e.call?e(t.p):e;return W(r.unshift?r.raw?Z(r,[].slice.call(arguments,1),t.p):r.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):r,H(t.target),t.g,t.o,t.k)}let I,P,O;C.bind({g:1});let b=C.bind({k:1});function G(e,t,r,i){y.p=t,I=e,P=r,O=i}function w(e,t){let r=this||{};return function(){let i=arguments;function s(a,l){let n=Object.assign({},a),d=n.className||s.className;r.p=Object.assign({theme:P&&P()},n),r.o=/ *go\d+/.test(d),n.className=C.apply(r,i)+(d?" "+d:""),t&&(n.ref=l);let c=e;return e[0]&&(c=n.as||e,delete n.as),O&&c[0]&&O(n),I(c,n)}return t?t(s):s}}var J=e=>typeof e=="function",k=(e,t)=>J(e)?e(t):e,Q=(()=>{let e=0;return()=>(++e).toString()})(),B=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),X=20,N=new Map,K=1e3,L=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),v({type:4,toastId:e})},K);N.set(e,t)},ee=e=>{let t=N.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,X)};case 1:return t.toast.id&&ee(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?L(i):e.toasts.forEach(a=>{L(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},A=[],D={toasts:[],pausedAt:void 0},v=e=>{D=S(D,e),A.forEach(t=>{t(D)})},te={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},re=(e={})=>{let[t,r]=u.useState(D);u.useEffect(()=>(A.push(r),()=>{let s=A.indexOf(r);s>-1&&A.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var a,l;return{...e,...e[s.type],...s,duration:s.duration||((a=e[s.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||te[s.type],style:{...e.style,...(l=e[s.type])==null?void 0:l.style,...s.style}}});return{...t,toasts:i}},se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Q()}),F=e=>(t,r)=>{let i=se(t,e,r);return v({type:2,toast:i}),i.id},p=(e,t)=>F("blank")(e,t);p.error=F("error");p.success=F("success");p.loading=F("loading");p.custom=F("custom");p.dismiss=e=>{v({type:3,toastId:e})};p.remove=e=>v({type:4,toastId:e});p.promise=(e,t,r)=>{let i=p.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(s=>(p.success(k(t.success,s),{id:i,...r,...r==null?void 0:r.success}),s)).catch(s=>{p.error(k(t.error,s),{id:i,...r,...r==null?void 0:r.error})}),e};var ae=(e,t)=>{v({type:1,toast:{id:e,height:t}})},oe=()=>{v({type:5,time:Date.now()})},ie=e=>{let{toasts:t,pausedAt:r}=re(e);u.useEffect(()=>{if(r)return;let a=Date.now(),l=t.map(n=>{if(n.duration===1/0)return;let d=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(d<0){n.visible&&p.dismiss(n.id);return}return setTimeout(()=>p.dismiss(n.id),d)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[t,r]);let i=u.useCallback(()=>{r&&v({type:6,time:Date.now()})},[r]),s=u.useCallback((a,l)=>{let{reverseOrder:n=!1,gutter:d=8,defaultPosition:c}=l||{},m=t.filter(h=>(h.position||c)===(a.position||c)&&h.height),x=m.findIndex(h=>h.id===a.id),f=m.filter((h,$)=>$<x&&h.visible).length;return m.filter(h=>h.visible).slice(...n?[f+1]:[0,f]).reduce((h,$)=>h+($.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:ae,startPause:oe,endPause:i,calculateOffset:s}}},ne=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,le=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ue=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ue} 1s linear infinite;
`,pe=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fe=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,xe=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,he=w("div")`
  position: absolute;
`,ge=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ye=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(ye,null,t):t:r==="blank"?null:u.createElement(ge,null,u.createElement(me,{...i}),r!=="loading"&&u.createElement(he,null,r==="error"?u.createElement(ce,{...i}):u.createElement(xe,{...i})))},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Fe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,je="0%{opacity:0;} 100%{opacity:1;}",Ee="0%{opacity:1;} 100%{opacity:0;}",Ne=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ae=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,De=(e,t)=>{let r=e.includes("top")?1:-1,[i,s]=B()?[je,Ee]:[ve(r),Fe(r)];return{animation:t?`${b(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ke=u.memo(({toast:e,position:t,style:r,children:i})=>{let s=e.height?De(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(we,{toast:e}),l=u.createElement(Ae,{...e.ariaProps},k(e.message,e));return u.createElement(Ne,{className:e.className,style:{...s,...r,...e.style}},typeof i=="function"?i({icon:a,message:l}):u.createElement(u.Fragment,null,a,l))});G(u.createElement);var Ce=({id:e,className:t,style:r,onHeightUpdate:i,children:s})=>{let a=u.useCallback(l=>{if(l){let n=()=>{let d=l.getBoundingClientRect().height;i(e,d)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:a,className:t,style:r},s)},$e=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...s}},Pe=C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,j=16,Oe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:s,containerStyle:a,containerClassName:l})=>{let{toasts:n,handlers:d}=ie(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:j,left:j,right:j,bottom:j,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(c=>{let m=c.position||t,x=d.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),f=$e(m,x);return u.createElement(Ce,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?Pe:"",style:f},c.type==="custom"?k(c.message,c):s?s(c):u.createElement(ke,{toast:c,position:m}))}))},E=p;const Se=(e,t="success")=>{switch(t){case"success":E.success(e);break;case"error":E.error(e);break;case"info":E(e);break;default:E(e)}};function Te(){const[e,t]=u.useState({name:"",userName:"",userProfile:"",email:"",password:"",dateOfBirth:"",presentAddress:"",permanentAddress:"",city:"",postalCode:"",country:""}),r=s=>{t({...e,[s.target.name]:s.target.value})},i=s=>{s.preventDefault(),console.log(e),R("formData",e),Se("Success! Data has been saved.","success")};return u.useEffect(()=>{const s=q("formData");s&&t(s)},[]),o.jsxs("form",{onSubmit:i,className:"w-[100%] border mx-auto p-6 bg-white rounded-lg shadow-md",children:[o.jsxs("div",{class:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[20%_70%] p-4",children:[o.jsx("div",{class:" w-[100%] lg:w-[25%] p-4 rounded ",children:o.jsxs("div",{className:"relative mx-auto w-24 h-24",children:[o.jsx("img",{src:(e==null?void 0:e.userProfile)||null,alt:"Profile",className:" w-24 h-24 object-cover rounded-full"}),o.jsx("label",{htmlFor:"image-upload",className:"absolute bottom-0 right-0 w-8 h-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer",children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 3.487a2.25 2.25 0 113.182 3.182L7.159 19.555a4.5 4.5 0 01-1.591 1.062l-3.273 1.309a.375.375 0 01-.49-.49l1.308-3.272a4.5 4.5 0 011.063-1.591l12.885-12.886z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 5.25L18.75 6"})]})}),o.jsx(Oe,{}),o.jsx("input",{id:"image-upload",type:"file",accept:"image/*",className:"hidden",onChange:s=>{const a=s.target.files[0];if(a){const l=URL.createObjectURL(a);t({...e,userProfile:l})}}})]})}),o.jsxs("div",{class:"w-[100%] p-4 flex flex-wrap gap-4 ",children:[o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"name",className:"block  text-sm font-medium text-[#232323] ",children:"Your Name"}),o.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"userName",className:"block  text-sm font-medium text-[#232323] ",children:"User Name"}),o.jsx("input",{type:"text",id:"userName",name:"userName",required:!0,value:e.userName,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"email",className:"block  text-sm font-medium text-[#232323] ",children:"Email"}),o.jsx("input",{type:"email",id:"email",required:!0,name:"email",value:e.email,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"password",className:"block  text-sm font-medium text-[#232323] ",children:"Password"}),o.jsx("input",{required:!0,type:"password",id:"password",name:"password",value:e.password,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"dateOfBirth",className:"block  text-sm font-medium text-[#232323] ",children:"Date of Birth"}),o.jsx("input",{type:"date",id:"dateOfBirth",name:"dateOfBirth",value:e.dateOfBirth,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"presentAddress",className:"block  text-sm font-medium text-[#232323] ",children:"Present Address"}),o.jsx("input",{required:!0,type:"text",id:"presentAddress",name:"presentAddress",value:e.presentAddress,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"permanentAddress",className:"block  text-sm font-medium text-[#232323] ",children:"Permanent Address"}),o.jsx("input",{type:"text",id:"permanentAddress",name:"permanentAddress",value:e.permanentAddress,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"city",className:"block  text-sm font-medium text-[#232323] ",children:"City"}),o.jsx("input",{type:"text",required:!0,id:"city",name:"city",value:e.city,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"postalCode",className:"block  text-sm font-medium text-[#232323] ",children:"Postal Code"}),o.jsx("input",{required:!0,type:"text",id:"postalCode",name:"postalCode",value:e.postalCode,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]}),o.jsxs("div",{className:"mb-4 w-[100%] sm:w-[100%] lg:w-[45%]",children:[o.jsx("label",{htmlFor:"country",className:"block  text-sm font-medium text-[#232323] ",children:"Country"}),o.jsx("input",{type:"text",id:"country",name:"country",value:e.country,onChange:r,className:"mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"})]})]})]}),o.jsx("button",{type:"submit",className:" block w-[180px] ml-auto px-4 py-2  bg-[#232323] hover:bg-[#1a1a1a] text-white rounded-md",children:"Save"})]})}function Ie(){function e(){return o.jsx("div",{children:o.jsx(Te,{})})}function t(){return o.jsx("div",{className:"min-w-[100vw]"})}function r(){return o.jsx("div",{className:"min-w-[100vw]"})}const i=[{id:"Tab1",label:"Edit Profile",content:o.jsx(e,{})},{id:"Tab2",label:"Preference",content:o.jsx(t,{})},{id:"Tab3",label:"Security",content:o.jsx(r,{})}];return o.jsx(U,{tabs:i})}export{Ie as default};
