(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{68337:(e,t,n)=>{Promise.resolve().then(n.bind(n,99035))},99035:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ea});var r,a=n(95155),o=n(12115),i=n(20698);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,m=(e,t)=>{let n="",r="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+i+";":r+="f"==o[1]?m(i,o):o+"{"+m(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=m(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=m.p?m.p(o,i):o+":"+i+";")}return n+(t&&a?t+"{"+a+"}":a)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+f(e[n]);return t}return e},g=(e,t,n,r,a)=>{let o=f(e),i=p[o]||(p[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!p[i]){let t=o!==e?e:(e=>{let t,n,r=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?r.shift():t[3]?(n=t[3].replace(d," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);p[i]=m(a?{["@keyframes "+i]:t}:t,n?"":"."+i)}let s=n&&p.g?p.g:null;return n&&(p.g=p[i]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(p[i],t,r,s),i},b=(e,t,n)=>e.reduce((e,r,a)=>{let o=t[a];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function h(e){let t=this||{},n=e.call?e(t.p):e;return g(n.unshift?n.raw?b(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,x,w,v=h.bind({k:1});function N(e,t){let n=this||{};return function(){let r=arguments;function a(o,i){let s=Object.assign({},o),l=s.className||a.className;n.p=Object.assign({theme:x&&x()},s),n.o=/ *go\d+/.test(l),s.className=h.apply(n,r)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),w&&c[0]&&w(s),y(c,s)}return t?t(a):a}}function j(){let e=(0,i._)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return j=function(){return e},e}function _(){let e=(0,i._)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return _=function(){return e},e}function k(){let e=(0,i._)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);return k=function(){return e},e}function C(){let e=(0,i._)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return C=function(){return e},e}function E(){let e=(0,i._)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return E=function(){return e},e}function F(){let e=(0,i._)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return F=function(){return e},e}function O(){let e=(0,i._)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);return O=function(){return e},e}function S(){let e=(0,i._)(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return S=function(){return e},e}function z(){let e=(0,i._)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return z=function(){return e},e}function A(){let e=(0,i._)(["\n  position: absolute;\n"]);return A=function(){return e},e}function I(){let e=(0,i._)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return I=function(){return e},e}function D(){let e=(0,i._)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return D=function(){return e},e}function P(){let e=(0,i._)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return P=function(){return e},e}function M(){let e=(0,i._)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return M=function(){return e},e}function R(){let e=(0,i._)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return R=function(){return e},e}function T(){let e=(0,i._)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return T=function(){return e},e}var L=e=>"function"==typeof e,q=(e,t)=>L(e)?e(t):e,H=(()=>{let e=0;return()=>(++e).toString()})(),J=((()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return J(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}}),Z=[],$={toasts:[],pausedAt:void 0},B=e=>{$=J($,e),Z.forEach(e=>{e($)})},G={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||H()}},Q=e=>(t,n)=>{let r=K(t,e,n);return B({type:2,toast:r}),r.id},U=(e,t)=>Q("blank")(e,t);U.error=Q("error"),U.success=Q("success"),U.loading=Q("loading"),U.custom=Q("custom"),U.dismiss=e=>{B({type:3,toastId:e})},U.remove=e=>B({type:4,toastId:e}),U.promise=(e,t,n)=>{let r=U.loading(t.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?q(t.success,e):void 0;return a?U.success(a,{id:r,...n,...null==n?void 0:n.success}):U.dismiss(r),e}).catch(e=>{let a=t.error?q(t.error,e):void 0;a?U.error(a,{id:r,...n,...null==n?void 0:n.error}):U.dismiss(r)}),e};var V=new Map,W=v(j()),X=v(_()),Y=v(k()),ee=(N("div")(C(),e=>e.primary||"#ff4b4b",W,X,e=>e.secondary||"#fff",Y),v(E())),et=(N("div")(F(),e=>e.secondary||"#e0e0e0",e=>e.primary||"#616161",ee),v(O())),en=v(S()),er=(N("div")(z(),e=>e.primary||"#61d345",et,en,e=>e.secondary||"#fff"),N("div")(A()),N("div")(I()),v(D()));N("div")(P(),er),N("div")(M()),N("div")(R()),r=o.createElement,m.p=void 0,y=r,x=void 0,w=void 0,h(T());let ea=()=>{let[e,t]=(0,o.useState)({name:"",registrationNumber:"",contactNumber:"",email:"",courseName:""}),[n,r]=(0,o.useState)(!1),i=n=>{t({...e,[n.target.name]:n.target.value})},s=async n=>{n.preventDefault(),r(!0);try{let n=await fetch("https://pentaomnia.com/submitajit.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await n.json();if(r.success)U.success("Registration submitted successfully!"),t({name:"",registrationNumber:"",contactNumber:"",email:"",courseName:""});else throw Error(r.message||"Submission failed")}catch(e){U.error("Failed to submit form. Please try again.")}finally{r(!1)}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-cover bg-center",style:{backgroundImage:"url('/images/ajit.jpg')"},children:(0,a.jsxs)("div",{className:"bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl shadow-xl shadow-yellow-500/50 w-full max-w-md",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-6 text-center text-white",children:"Registration Form"}),(0,a.jsxs)("form",{className:"space-y-4",onSubmit:s,children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"name",className:"text-gray-300",children:"Full Name"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:i,placeholder:"Enter your name",className:"w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"registrationNumber",className:"text-gray-300",children:"Registration Number"}),(0,a.jsx)("input",{type:"text",id:"registrationNumber",name:"registrationNumber",value:e.registrationNumber,onChange:i,placeholder:"Enter your registration number",className:"w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"contactNumber",className:"text-gray-300",children:"Contact Number"}),(0,a.jsx)("input",{type:"tel",id:"contactNumber",name:"contactNumber",value:e.contactNumber,onChange:i,placeholder:"Enter your contact number",className:"w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"text-gray-300",children:"Email Address"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:i,placeholder:"Enter your mail ID",className:"w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"courseName",className:"text-gray-300",children:"Course Name"}),(0,a.jsx)("input",{type:"text",id:"courseName",name:"courseName",value:e.courseName,onChange:i,placeholder:"Enter your course name",className:"w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",disabled:n,children:n?"Submitting...":"Submit"})]})]})})}},20698:(e,t,n)=>{"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(68337)),_N_E=e.O()}]);