(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{7023:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pathDrawer",function(){return l(3538)}])},3538:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return M}});var n=l(5893),a=l(7054),s=l(7294),o=l(4480);function i(e){let{option:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.dp,{path:t.path,options:t.lineOption}),t.path.map((e,l)=>(0,n.jsx)(a.VM,{center:e,options:t.circleOption},l)),t.arrows.map((e,l)=>(0,n.jsx)(a.dp,{path:e,options:t.arrowOption},l))]})}var r=l(6655),c=l(1791);let d=(0,o.cn)({key:"hoverEnableState",default:!1}),u={strokeOpacity:.8,strokeWeight:1.5,clickable:!1,draggable:!1,editable:!1,visible:!0,zIndex:1,strokeColor:"#0000FF",red:0,green:0,blue:255},p={strokeOpacity:0,fillOpacity:.4,clickable:!1,draggable:!1,editable:!1,visible:!1,radius:1,zIndex:1,fillColor:"#FF0000",red:255,green:0,blue:0},x={strokeOpacity:.9,strokeWeight:1.5,clickable:!1,draggable:!1,editable:!1,visible:!1,zIndex:1,strokeColor:"#0000FF",red:0,green:0,blue:255},h=(0,o.cn)({key:"emptyOptionState",default:{label:"empty",path:[],arrows:[],lineOption:u,circleOption:p,arrowOption:x}}),m=(0,o.cn)({key:"iniOptionState",default:{label:"ini",path:[{lat:37.500142,lng:127.026444},{lat:37.498578,lng:127.027175},{lat:37.498282,lng:127.027248}],arrows:[[{lat:37.4985836863302,lng:127.02716677408675},{lat:37.498578,lng:127.027175},{lat:37.49858767466946,lng:127.0271775299745}],[{lat:37.49828893769791,lng:127.02724079803167},{lat:37.498282,lng:127.027248},{lat:37.49829114046893,lng:127.02725205608529}]],lineOption:u,circleOption:p,arrowOption:x}}),g=(0,o.cn)({key:"nowOptionState",default:h}),f=(0,o.cn)({key:"focusState",default:{lat:0,lng:0}}),j=(0,o.cn)({key:"idfsState",default:[]}),w=(0,o.cn)({key:"optionsState",default:{}}),b=(0,o.cn)({key:"idfCountState",default:0}),v=(0,o.cn)({key:"nowIdfState",default:0}),O=(0,o.cn)({key:"centerState",default:{lat:37.498578,lng:127.027175}});function k(e){let{className:t,drawPath:l,lngfirst:a,setLngfirst:i,focusOption:u,setFocusOption:p,setLabel:x}=e,[h,m]=(0,s.useState)(""),[g,f]=(0,s.useState)(40),[j,w]=(0,o.FV)(d),b=(0,s.useRef)(),v=function(e){p({...u,radius:parseFloat(e)})},O=function(){l(h),m("")},k=function(){b.current.blur(),f(40)};return(0,n.jsxs)("div",{className:"\n            ".concat(t,"\n        "),children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(r.Z,{className:"my-2 ml-auto",color:"primary_outline",clickEvent:e=>O(),value:"draw path"})}),(0,n.jsx)("textarea",{ref:b,className:"\n                    w-full \n                    outline outline-1 outline-blue-200 \n                    rounded p-2 text-sm\n                ",style:{height:g},value:h,onChange:e=>m(e.target.value),onClick:()=>f(200),onMouseLeave:()=>k(),placeholder:"input path"}),(0,n.jsx)(c.Z,{type:"text",placeholder:"label",width:"full",onChange:e=>x(e.target.value)}),(0,n.jsx)("div",{className:"flex justify-between",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"checkbox",id:"lngf",className:"mr-1",defaultValue:a,onChange:e=>i(e.target.value)}),(0,n.jsx)("label",{for:"lngf",children:"lng first"})]})}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"text-sm m-auto",children:"p_size"}),(0,n.jsx)("input",{id:"slider",type:"range",defaultValue:1,onPointerUp:e=>v(e.target.value),className:"w-full cursor-pointer accent-gray-400",max:.5,min:0,step:.1}),(0,n.jsx)(r.Z,{color:j?"primary":"primary_outline",value:j?"enabled":"disabled",clickEvent:()=>w(!j),className:""})]})]})}function y(e){let{color:t="red",value:l=0,changeColor:a,aColor:o,max:i,min:r,step:c}=e,[d,u]=(0,s.useState)(l);return(0,s.useEffect)(()=>{u(l)},[l]),(0,n.jsx)("div",{className:"flex align-contents-center",children:(0,n.jsx)("input",{id:"slider",type:"range",value:d,onChange:e=>u(e.target.value),onPointerUp:e=>a(e.target.value,t),className:"w-full my-1 mx-1 cursor-pointer",max:i,min:r,step:c,style:{WebkitAppearance:"none",appearance:"none",backgroundColor:t,accentColor:t,height:4,borderRadius:50}})})}function N(e){let{option:t,delLine:l,setNowOption:a,nowIdf:o}=e,[i,c]=(0,s.useState)(1),[d,u]=(0,s.useState)(t.circleOption),[p,x]=(0,s.useState)({lineOption:t.lineOption,arrowOption:t.arrowOption}),[h,m]=(0,s.useState)(!0),[g,f]=(0,s.useState)(!1),[j,w]=(0,s.useState)(!0),b=function(e,l){let n=t.circleOption.fillColor,a=("0"+parseInt(e).toString(16)).slice(-2),s=-1;s="red"==l?1:"green"==l?3:5;let o=n.substring(0,s)+a+n.substring(s+2);u({...d,fillColor:o,[l]:parseInt(e)})},v=function(e,t){let l=p.lineOption.strokeColor,n=("0"+parseInt(e).toString(16)).substr(-2),a=-1;a="red"==t?1:"green"==t?3:5;let s=l.substring(0,a)+n+l.substring(a+2);x({lineOption:{...p.lineOption,strokeColor:s,[t]:parseInt(e)},arrowOption:{...p.arrowOption,strokeColor:s,[t]:parseInt(e)}}),console.log(p.lineOption.strokeColor)},O=function(e){m(e),x({lineOption:{...p.lineOption,visible:e},arrowOption:p.arrowOption})},k=function(e){f(e),u({...d,visible:e})},N=function(e){w(e),x({lineOption:p.lineOption,arrowOption:{...p.arrowOption,visible:e}})};return(0,s.useEffect)(()=>{a({...t,lineOption:p.lineOption,circleOption:d,arrowOption:p.arrowOption})},[p,d]),(0,s.useEffect)(()=>{x({lineOption:t.lineOption,arrowOption:t.arrowOption}),u(t.circleOption),m(t.lineOption.visible),f(t.circleOption.visible),w(t.arrowOption.visible)},[o]),p.lineOption?(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(r.Z,{color:"primary_outline",value:"del",clickEvent:l})}),(0,n.jsx)("hr",{className:"mx-1 my-2"}),(0,n.jsxs)("div",{className:"my-2 flex",children:[(0,n.jsxs)("div",{className:"flex-col justify-between w-1/2",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{type:"checkbox",id:"viewMarker",checked:g,onClick:e=>k(e.target.checked),className:"mr-1"}),(0,n.jsx)("label",{for:"viewMarker",children:"Mark"})]}),g?(0,n.jsx)("div",{className:"text-xs text-center text-white rounded rounded-sm",style:{backgroundColor:d.fillColor},children:d.fillColor}):(0,n.jsx)(n.Fragment,{})]}),g?(0,n.jsxs)("div",{className:"flex-col m-auto",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(y,{color:"red",aColor:"accent-red-400",value:d.red,changeColor:b,max:255,min:0,step:1}),(0,n.jsx)(y,{color:"green",aColor:"accent-green-400",value:d.green,changeColor:b,max:255,min:0,step:1}),(0,n.jsx)(y,{color:"blue",aColor:"accent-blue-400",value:d.blue,changeColor:b,max:255,min:0,step:1})]}),(0,n.jsx)(y,{color:"gray",aColor:"accent-gray-200",value:1,changeColor:function(e){u({...d,radius:parseFloat(e)})},max:2,min:0,step:.1})]}):(0,n.jsx)(n.Fragment,{})]}),(0,n.jsx)("hr",{className:"mx-1 my-2"}),(0,n.jsxs)("div",{className:"my-2 flex",children:[(0,n.jsxs)("div",{className:"flex-col justify-between w-1/2",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"checkbox",id:"viewLine",checked:h,onClick:e=>O(e.target.checked),className:"mr-1"}),(0,n.jsx)("label",{for:"viewLine",children:"Line"})]}),h?(0,n.jsx)("div",{className:"text-xs text-center text-white rounded rounded-sm",style:{backgroundColor:p.lineOption.strokeColor},children:p.lineOption.strokeColor}):(0,n.jsx)(n.Fragment,{})]}),h?(0,n.jsxs)("div",{className:"flex-column m-auto",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(y,{color:"red",aColor:"accent-red-400",value:p.lineOption.red,changeColor:v,max:255,min:0,step:1}),(0,n.jsx)(y,{color:"green",aColor:"accent-green-400",value:p.lineOption.green,changeColor:v,max:255,min:0,step:1}),(0,n.jsx)(y,{color:"blue",aColor:"accent-blue-400",value:p.lineOption.blue,changeColor:v,max:255,min:0,step:1})]}),(0,n.jsx)(y,{color:"gray",aColor:"accent-gray-200",value:1,changeColor:function(e){x({lineOption:{...p.lineOption,strokeWeight:e},arrowOption:{...p.arrowOption}})},max:4,min:0,step:.1})]}):(0,n.jsx)(n.Fragment,{})]}),(0,n.jsx)("hr",{className:"mx-1 my-2"}),(0,n.jsxs)("div",{className:"my-2 flex",children:[(0,n.jsxs)("div",{className:"flex-col justify-between",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{type:"checkbox",id:"viewArrow",checked:j,onClick:e=>N(e.target.checked),className:"mr-1"}),(0,n.jsx)("label",{for:"viewArrow",children:"Arrow"})]}),j?(0,n.jsx)("div",{className:"text-xs text-center text-white rounded rounded-sm",style:{backgroundColor:p.arrowOption.strokeColor},children:p.arrowOption.strokeColor}):(0,n.jsx)(n.Fragment,{})]}),j?(0,n.jsx)("div",{className:"flex-col m-auto",children:(0,n.jsx)(y,{className:"w-full",color:"gray",aColor:"accent-gray-200",value:1,changeColor(){},max:10,min:0,step:.1})}):(0,n.jsx)(n.Fragment,{})]})]}):(0,n.jsx)(n.Fragment,{})}function C(e){let{path:t,focusCoordi:l,clickCoordi:a}=e,[o,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{i(!0)},[]),o?(0,n.jsx)("table",{className:"w-full",children:(0,n.jsx)("tbody",{children:t.map((e,t)=>{let{lat:s,lng:o}=e;return(0,n.jsxs)("tr",{className:"text-center hover:bg-gray-200",onPointerEnter:()=>l(s,o),onPointerUp:()=>a(s,o),children:[(0,n.jsx)("td",{className:"w-1/5 bg-gray-600 text-white text-sm outline outline-1",children:t}),(0,n.jsx)("td",{className:"w-2/5 px-1 text-sm",children:s}),(0,n.jsx)("td",{className:"w-2/5 text-sm",children:o})]},t)})})}):(0,n.jsx)(n.Fragment,{})}function F(e){let{idf:t,now:l,changeNow:a,option:o}=e,[i,r]=(0,s.useState)("");return(0,s.useEffect)(()=>{t==l?r("\n                bg-white\n                text-black\n                shadow-md\n            "):r("\n            bg-gray-200\n            text-gray-600\n        ")},[l]),(0,n.jsxs)("div",{className:"\n            ".concat(i,"\n            flex justify-between\n            min-w-[15%] h-6 text-center align-middle\n            cursor-pointer\n        "),onClick:()=>a(t),children:[(0,n.jsx)("div",{className:"text-center w-full align-middle",children:o.label}),(0,n.jsxs)("div",{className:"flex-col",children:[(0,n.jsx)("div",{className:"w-3 h-2",style:{backgroundColor:o.circleOption.fillColor}}),(0,n.jsx)("div",{className:"w-3 h-2",style:{backgroundColor:o.lineOption.visible?o.lineOption.strokeColor:"#FFFFFF"}}),(0,n.jsx)("div",{className:"w-3 h-2",style:{backgroundColor:o.arrowOption.visible?o.arrowOption.strokeColor:"#FFFFFF"}})]})]})}function S(e){let{className:t,idfs:l,nowIdf:a,nowOption:s,clickCoordi:i,focusCoordi:r,changeNow:c,setNowOption:d,delLine:u}=e,p=(0,o.sJ)(w);return(0,n.jsxs)("div",{className:"".concat(t),children:[(0,n.jsx)("div",{className:"flex flex-wrap gap-1 justify-items-center shadow",children:l.map((e,t)=>(0,n.jsx)(F,{idf:e,option:p[e],now:a,changeNow:c},t))}),(0,n.jsx)(N,{option:s,setNowOption:d,delLine:u,nowIdf:a}),(0,n.jsx)("hr",{className:"mx-1 my-4"}),(0,n.jsx)("div",{className:"max-h-[400px] overflow-auto",children:(0,n.jsx)(C,{path:s.path,focusCoordi:r,clickCoordi:i})})]})}function M(){let[e,t]=(0,s.useState)({}),l=(0,o.sJ)(m),[r,c]=(0,s.useState)({strokeOpacity:0,fillOpacity:.4,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:.8,zIndex:1,fillColor:"#00FF00"}),u=(0,o.sJ)(d),[p,x]=(0,o.FV)(f),[y,N]=(0,o.FV)(j),[C,F]=(0,o.FV)(w),M=(0,o.sJ)(h),[I,E]=(0,o.FV)(b),[_,V]=(0,o.FV)(v),[A,P]=(0,s.useState)(""),[L,z]=(0,o.FV)(g),[J,Z]=(0,o.FV)(O),[W,T]=(0,s.useState)(15),[U,X]=(0,s.useState)(!1),[K,Q]=(0,s.useState)(!1),R=function(e){let t=e.length,l=[];for(let n=1;n<t;n++){let a=e[n].lat*Math.PI/180,s=e[n-1].lat*Math.PI/180,o=e[n].lng*Math.PI/180,i=e[n-1].lng*Math.PI/180,r=Math.cos(s)*Math.sin(i-o),c=Math.cos(a)*Math.sin(s)-Math.sin(a)*Math.cos(s)*Math.cos(i-o);console.log(r,c);let d=Math.atan2(c,r),u=35*Math.PI/180,p=d+u,x=d-u,h=e[n].lat,m=e[n].lng,g=[{lat:h+1e-5*Math.sin(p),lng:m+1e-5*Math.cos(p)},{lat:h,lng:m},{lat:h+1e-5*Math.sin(x),lng:m+1e-5*Math.cos(x)}];l.push(g)}return l},B=function(e){let t=e.replaceAll("["," ").replaceAll("]"," ").replaceAll("	"," ").replaceAll("\n"," ").replaceAll(","," ").replace(/^\s+|\s+$/g,"").replace(/ +/g," ").replaceAll(" ",","),l=t.split(",").map(Number),n=2*parseInt(l.length),a=[],s=0,o=1;U&&(s=1,o=0);for(let i=0;i<n;i+=2){let r=l[i+s],c=l[i+o];if(K&&(r=parseInt(r/100)+r%100/60,c=parseInt(c/100)+c%100/60),!(1>Math.abs(r)||1>Math.abs(c))){if(!r||!c)break;a.push({lat:r,lng:c})}}return console.log(a),a};return(0,n.jsxs)("div",{className:"flex mx-2 gap-2",children:[(0,n.jsx)("div",{className:"bg-red-100 w-full h-screen",children:(0,n.jsx)(a.KJ,{googleMapsApiKey:"AIzaSyBkZS2y5XLGTz09p372w0MV4bQgeukEiiQ",children:(0,n.jsxs)(a.b6,{mapContainerStyle:{width:"100%",height:"100%"},center:J,zoom:W,children:[y.map((e,t)=>e==_?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(i,{option:C[e]},t)),(0,n.jsx)(i,{option:L}),(0,n.jsx)(a.VM,{center:p,options:r})]})})}),(0,n.jsxs)("div",{className:" absolute top-32 left-4 flex flex-col gap-2 basis-1/5 max-w-[260px] min-w-[230px] bg-white p-2 rounded shadow-md",children:[(0,n.jsx)(k,{className:"bg-gray-100 p-2 h-50 rounded",lngfirst:U,setLngfirst:X,drawPath:function(e){let t={...M};e&&(t.path=B(e),t.arrows=R(t.path),t.label=A||I,P(""),F({...C,[_]:L,[I]:t}),N([...y,I]),V(I),z(t),E(I+1),t.path&&Z({lat:t.path[0].lat,lng:t.path[0].lng}))},focusOption:r,setFocusOption:c,setLabel:P}),(0,n.jsx)(S,{className:"rounded max-h-full bg-white",idfs:y,nowIdf:_,nowOption:L,setNowOption:z,delLine:function(){if(y.length>1){_!=y[0]&&V(y[0]),z(C[y[0]]);let e={...C};delete e[_],F(e),N(y.filter(e=>e!=_))}else V(-1),z({...l,path:[],arrows:[]}),N([]),F({})},focusCoordi:function(e,t){u&&(Z({lat:e,lng:t}),x({lat:e,lng:t}))},clickCoordi:function(e,t){Z({lat:e,lng:t}),x({lat:e,lng:t})},changeNow:function(e){e!=_&&(F({...C,[_]:L}),V(e),z(C[e]))}})]})]})}}},function(e){e.O(0,[255,774,888,179],function(){return e(e.s=7023)}),_N_E=e.O()}]);