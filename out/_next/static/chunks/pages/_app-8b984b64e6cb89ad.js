(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7075)}])},6655:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){let t={primary:{bgColor:"bg-blue-300",color:"text-white",outline:""},primary_outline:{bgColor:"bg-white",color:"text-blue-300",outline:"outline outline-1 outline-offset-2"}};return(0,n.jsx)("button",{onClick(t){e.clickEvent(t.target.value)},className:"\n                px-2 m-1 rounded-sm\n                ".concat(e.borderRadius,"\n\n                ").concat(t[e.color].bgColor,"\n                ").concat(t[e.color].color,"\n                ").concat(t[e.color].outline,"\n            "),children:e.value})}},1791:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){let{type:t,width:r,placeholder:a,onChange:i}=e;return(0,n.jsx)("input",{type:t,placeholder:a,onChange:i,className:"\n                ".concat({sm:"w-24",md:"w-40",full:"w-full"}[r],'\n                bg-gray-50 border border-gray-300 text-gray-900 \n                text-sm rounded focus:ring-blue-500 focus:border-blue-500 \n                px-2 py-1 dark:bg-gray-700 m-2"\n            ')})}r(7294)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=r(2648).Z,i=r(1598).Z,o=r(7273).Z,l=i(r(7294)),s=a(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=a(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://hangeol-chang.github.io/maputils/_next/image/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,a,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist(){},preventDefault(){i=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:i,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:h,loading:m,srcString:v,config:b,unoptimized:x,loader:w,onLoadRef:y,onLoadingCompleteRef:j,onLoad:C,onError:_}=e,E=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},E,r,{width:i,height:a,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:m,style:n({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&p(e,v,y,j,x))},[v,y,j,_,x,t]),onLoad(e){let t=e.currentTarget;p(t,v,y,j,x)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===h&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),_&&_(e)}})))}),b=l.forwardRef((e,t)=>{let r,a;var i,{src:p,sizes:b,unoptimized:x=!1,priority:w=!1,loading:y,className:j,quality:C,width:_,height:E,fill:S,style:k,onLoad:N,onLoadingComplete:z,placeholder:M="empty",blurDataURL:R,layout:P,objectFit:I,objectPosition:O,lazyBoundary:Z,lazyRoot:A}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=l.useContext(d.ImageConfigContext),F=l.useMemo(()=>{let e=g||L||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[L]),T=D,q=T.loader||f.default;if(delete T.loader,"__next_img_default"in q){if("custom"===F.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=q;q=e=>{let{config:t}=e,r=o(e,["config"]);return B(r)}}if(P){"fill"===P&&(S=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];W&&(k=n({},k,W));let G={responsive:"100vw",fill:"100vw"}[P];G&&!b&&(b=G)}let U="",V=m(_),J=m(E);if("object"==typeof(i=p)&&(h(i)||void 0!==i.src)){let X=h(p)?p.default:p;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(r=X.blurWidth,a=X.blurHeight,R=R||X.blurDataURL,U=X.src,!S){if(V||J){if(V&&!J){let H=V/X.width;J=Math.round(X.height*H)}else if(!V&&J){let $=J/X.height;V=Math.round(X.width*$)}}else V=X.width,J=X.height}}let K=!w&&("lazy"===y||void 0===y);((p="string"==typeof p?p:U).startsWith("data:")||p.startsWith("blob:"))&&(x=!0,K=!1),F.unoptimized&&(x=!0);let Q=m(C),Y=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:O}:{},{color:"transparent"},k),ee="blur"===M&&R?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:J,blurWidth:r,blurHeight:a,blurDataURL:R}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:o,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=i.exec(r);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:a.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,o),u=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:i,width:s[u]})}}({config:F,src:p,unoptimized:x,width:V,quality:Q,sizes:b,loader:q}),er=p,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:T.crossOrigin},ea=l.useRef(N);l.useEffect(()=>{ea.current=N},[N]);let ei=l.useRef(z);l.useEffect(()=>{ei.current=z},[z]);let eo=n({isLazy:K,imgAttributes:et,heightInt:J,widthInt:V,qualityInt:Q,className:j,imgStyle:Y,blurStyle:ee,loading:y,config:F,fill:S,unoptimized:x,placeholder:M,loader:q,srcString:er,onLoadRef:ea,onLoadingCompleteRef:ei},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},en))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i}=e,o=n||t,l=a||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},7075:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),a=r(9008),i=r.n(a);function o(){return(0,n.jsx)(n.Fragment,{children:"footer"})}var l=r(7294),s=r(6655),c=r(1791);function u(){let[e,t]=(0,l.useState)(0),[r,a]=(0,l.useState)(0),[i,o]=(0,l.useState)(0),[u,d]=(0,l.useState)(0),[f,g]=(0,l.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Z,{value:"calc",color:"primary_outline",clickEvent:()=>g(function(e,t,r,n){function a(e){return e*(Math.PI/180)}console.log(e,r,t,n);var i=a(r-e),o=a(n-t),l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(a(e))*Math.cos(a(r))*Math.sin(o/2)*Math.sin(o/2);return 1e3*(6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))))}(e,r,i,u))}),"dist calcurator || ",f,(0,n.jsxs)("div",{class:"flex gap-2 m-2",children:[(0,n.jsx)(c.Z,{type:"number",placeholder:"lat1",width:"md",onChange:e=>t(e.target.value)}),(0,n.jsx)(c.Z,{type:"number",placeholder:"lng1",width:"md",onChange:e=>o(e.target.value)})]}),(0,n.jsxs)("div",{class:"flex gap-2 m-2",children:[(0,n.jsx)(c.Z,{type:"number",placeholder:"lat2",width:"md",onChange:e=>a(e.target.value)}),(0,n.jsx)(c.Z,{type:"number",placeholder:"lng2",width:"md",onChange:e=>d(e.target.value)})]})]})}var d=r(1163),f=r(5675),g=r.n(f);function h(){let e=(0,d.useRouter)(),[t,r]=(0,l.useState)(!1);return(0,n.jsx)("header",{className:"shadow-md mb-2",children:(0,n.jsxs)("div",{className:"container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center",children:[(0,n.jsxs)("div",{className:"flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0",children:[(0,n.jsx)(g(),{alt:"logo",src:"/icon.png",width:"64",height:"64",className:"w-8 h-8 -mr-1"}),(0,n.jsx)("span",{onClick:()=>e.push("/"),className:"ml-3 text-xl text-indigo-500 cursor-pointer",children:"Map Utils"})]}),(0,n.jsxs)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:[(0,n.jsx)("div",{onClick:()=>e.push("/pathDrawer"),className:"mr-5 hover:text-gray-400 cursor-pointer",children:"Path Drawer"}),(0,n.jsx)("div",{onClick:()=>r(!t),className:"mr-5 hover:text-gray-400 cursor-pointer",children:"dist Calcurator"}),t?(0,n.jsx)("div",{className:"z-10 absolute top-16 right-12 bg-white p-3 outline outline-1 outline-blue-200 rounded-md",children:(0,n.jsx)(u,{})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("div",{className:"mr-5 hover:text-gray-400",children:"m3"})]})]})})}r(7475);var m=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Map Utils"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(h,{}),(0,n.jsx)(t,{...r}),(0,n.jsx)(o,{})]})}},7475:function(){},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1163:function(e,t,r){e.exports=r(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);