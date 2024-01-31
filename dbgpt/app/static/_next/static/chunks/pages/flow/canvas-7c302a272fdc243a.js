(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{76735:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flow/canvas",function(){return a(4551)}])},45247:function(e,t,a){"use strict";var l=a(85893),s=a(50888);t.Z=function(e){let{visible:t}=e;return t?(0,l.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,l.jsx)(s.Z,{})}):null}},4551:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Q}});var l=a(85893),s=a(50489),n=a(45247),o=a(24969),r=a(79531),i=a(40411),c=a(2487),d=a(7134),u=a(32983),p=a(74627),f=a(96074),x=a(47221),m=a(71577),h=a(67294),g=a(67421);let{Search:j}=r.default;var b=()=>{let{t:e}=(0,g.$G)(),[t,a]=(0,h.useState)([]),[n,r]=(0,h.useState)([]),[b,v]=(0,h.useState)([]);async function w(){let[e,t]=await (0,s.Vx)((0,s.As)());t&&t.length>0&&(a(t),y(t))}function y(e){r((e||[]).filter(e=>"operator"===e.flow_type)),v((e||[]).filter(e=>"resource"===e.flow_type))}(0,h.useEffect)(()=>{w()},[]);let N=(0,h.useMemo)(()=>[{key:"operator",label:"Operator",children:_(n),extra:(0,l.jsx)(i.Z,{showZero:!0,count:n.length||0,style:{backgroundColor:n.length>0?"#52c41a":"#7f9474"}})},{key:"resource",label:"Resource",children:_(b),extra:(0,l.jsx)(i.Z,{showZero:!0,count:b.length||0,style:{backgroundColor:b.length>0?"#52c41a":"#7f9474"}})}],[n,b]);function _(t){return(null==t?void 0:t.length)>0?(0,l.jsx)(c.Z,{className:"overflow-hidden overflow-y-auto",itemLayout:"horizontal",dataSource:t,renderItem:e=>(0,l.jsx)(c.Z.Item,{className:"cursor-move hover:bg-[#F1F5F9] dark:hover:bg-theme-dark p-0 py-2",draggable:!0,onDragStart:t=>{t.dataTransfer.setData("application/reactflow",JSON.stringify(e)),t.dataTransfer.effectAllowed="move"},children:(0,l.jsx)(c.Z.Item.Meta,{className:"flex items-center justify-center",avatar:(0,l.jsx)(d.C,{src:e.icon||"/icons/node/default_node_icon.svg",size:"large"}),title:(0,l.jsx)("p",{className:"line-clamp-1 font-medium",children:e.label}),description:(0,l.jsx)("p",{className:"line-clamp-2",children:e.description})})})}):(0,l.jsx)(u.Z,{className:"px-2",description:e("no_node")})}return(0,l.jsx)(p.Z,{placement:"bottom",trigger:["click"],content:(0,l.jsxs)("div",{className:"w-[320px] overflow-hidden overflow-y-auto scrollbar-default",children:[(0,l.jsx)("p",{className:"my-4 font-bold",children:e("add_node")}),(0,l.jsx)(j,{placeholder:"Search node",onSearch:function(e){if(e){let t=e.toLowerCase(),a=n.filter(e=>e.label.toLowerCase().includes(t)),l=b.filter(e=>e.label.toLowerCase().includes(t));r(a),v(l)}else y(t)}}),(0,l.jsx)(f.Z,{className:"my-2"}),(0,l.jsx)(x.Z,{className:"max-h-[538px]",size:"small",defaultActiveKey:["operator"],ghost:!0,items:N})]}),children:(0,l.jsx)(m.ZP,{type:"primary",className:"flex items-center justify-center rounded-full left-4 top-4",style:{zIndex:1050},icon:(0,l.jsx)(o.Z,{})})})},v=a(36851),w=a(25675),y=a.n(w),N=a(48928),_=a(84567),k=e=>{let{optional:t}=e;return t?null:(0,l.jsx)("span",{className:"text-red-600 align-middle inline-block",children:"\xa0*"})},Z=a(2453),C=a(76315),E=a(83062),S=a(45605),z=a(94184),F=a.n(z),O=e=>{let{node:t,data:a,type:s,label:n,index:o}=e,{t:r}=(0,g.$G)(),i=(0,v._K)();return(0,l.jsxs)("div",{className:F()("relative flex items-center",{"justify-start":"parameters"===n||"inputs"===n,"justify-end":"outputs"===n}),children:[(0,l.jsx)(v.HH,{className:"w-2 h-2",type:s,position:"source"===s?v.Ly.Right:v.Ly.Left,id:"".concat(t.id,"|").concat(n,"|").concat(o),isValidConnection:e=>(function(e){let{sourceHandle:t,targetHandle:a,source:l,target:s}=e,n=i.getNode(l),o=i.getNode(s),{flow_type:c}=null==n?void 0:n.data,{flow_type:d}=null==o?void 0:o.data,u=null==t?void 0:t.split("|")[1],p=null==a?void 0:a.split("|")[1],f=null==t?void 0:t.split("|")[2],x=null==a?void 0:a.split("|")[2],m=null==o?void 0:o.data[p][x].type_cls;if(c===d&&"operator"===c){let e=null==n?void 0:n.data[u][f].type_cls;return e===m}if("resource"===c&&"operator"===d){let e=null==n?void 0:n.data.parent_cls;return e.includes(m)}return Z.ZP.warning(r("connect_warning")),!1})(e)}),(0,l.jsxs)(C.Z,{className:F()("p-2",{"pr-4":"outputs"===n}),children:[a.label,":",(0,l.jsx)(k,{optional:a.optional}),a.description&&(0,l.jsx)(E.Z,{title:a.description,children:(0,l.jsx)(S.Z,{className:"ml-2"})})]})]})},D=e=>{let{node:t,data:a,label:s,index:n}=e;function o(e){a.value=e}if("resource"===a.category)return(0,l.jsx)(O,{node:t,data:a,type:"target",label:s,index:n});if("common"===a.category){let e=a.default||a.value;switch(a.type_name){case"int":return(0,l.jsxs)("div",{className:"p-2 text-sm",children:[(0,l.jsxs)("p",{children:[a.label,":",(0,l.jsx)(k,{optional:a.optional})]}),(0,l.jsx)(N.Z,{className:"w-full",defaultValue:e,onChange:e=>{o(e.target.value)}})]});case"str":return(0,l.jsxs)("div",{className:"p-2 text-sm",children:[(0,l.jsxs)("p",{children:[a.label,":",(0,l.jsx)(k,{optional:a.optional})]}),(0,l.jsx)(r.default,{className:"w-full",defaultValue:e,onChange:e=>{o(e.target.value)}})]});case"bool":return(0,l.jsx)("div",{className:"p-2 text-sm",children:(0,l.jsxs)("p",{children:[a.label,":",(0,l.jsx)(k,{optional:a.optional}),(0,l.jsx)(_.Z,{className:"ml-2",defaultChecked:e,onChange:e=>{o(e.target.value)}})]})})}}},P=a(57132),T=a(48689),V=e=>{let{children:t,className:a}=e;return(0,l.jsx)("div",{className:F()("flex justify-center items-center w-8 h-8 rounded-full dark:bg-zinc-700 hover:bg-stone-200 dark:hover:bg-zinc-900",a),children:t})};let A=(e,t)=>{let a=0;return t.forEach(t=>{t.data.name===e.name&&a++}),"".concat(e.id,"_").concat(a)},L=e=>{let{nodes:t,edges:a,...l}=e,s=t.map(e=>{let{positionAbsolute:t,...a}=e;return{position_absolute:t,...a}}),n=a.map(e=>{let{sourceHandle:t,targetHandle:a,...l}=e;return{source_handle:t,target_handle:a,...l}});return{nodes:s,edges:n,...l}},K=e=>{let{nodes:t,edges:a,...l}=e,s=t.map(e=>{let{position_absolute:t,...a}=e;return{positionAbsolute:t,...a}}),n=a.map(e=>{let{source_handle:t,target_handle:a,...l}=e;return{sourceHandle:t,targetHandle:a,...l}});return{nodes:s,edges:n,...l}};var I=a(96486);function M(e){let{label:t}=e;return(0,l.jsx)("div",{className:"w-full h-8 bg-stone-100 dark:bg-zinc-700 px-2 flex items-center justify-center",children:t})}var R=a(60219),H=a(12069),$=a(39332),G=a(24885),X=a(59819);a(4583);let q={customNode:e=>{let{data:t}=e,{inputs:a,outputs:s,flow_type:n}=t,o=function(e){let t=e.filter(e=>"resource"===e.category),a=e.filter(e=>"common"===e.category);return[...t,...a]}(t.parameters||[]),[r,i]=(0,h.useState)(!1),c=(0,v._K)();return(0,l.jsx)(p.Z,{placement:"rightTop",trigger:["hover"],content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{className:"hover:text-blue-500",children:(0,l.jsx)(P.Z,{className:"h-full text-lg cursor-pointer",onClick:function(e){e.preventDefault(),e.stopPropagation();let a=c.getNodes(),l=a.find(e=>e.id===t.id);if(l){let e=A(l,a),t=(0,I.cloneDeep)(l),s={...t,id:e,position:{x:t.position.x+400,y:t.position.y},positionAbsolute:{x:t.positionAbsolute.x+400,y:t.positionAbsolute.y},data:{...t.data,id:e},selected:!1};c.setNodes(e=>[...e,s])}}})}),(0,l.jsx)(V,{className:"mt-2 hover:text-red-500",children:(0,l.jsx)(T.Z,{className:"h-full text-lg cursor-pointer",onClick:function(e){e.preventDefault(),e.stopPropagation(),c.setNodes(e=>e.filter(e=>e.id!==t.id)),c.setEdges(e=>e.filter(e=>e.source!==t.id&&e.target!==t.id))}})}),(0,l.jsx)(V,{className:"mt-2",children:(0,l.jsx)(E.Z,{title:t.description,placement:"right",children:(0,l.jsx)(S.Z,{className:"h-full text-lg cursor-pointer"})})})]}),children:(0,l.jsxs)("div",{className:F()("w-72 h-auto rounded-xl shadow-md p-0 border bg-white dark:bg-zinc-800 cursor-grab",{"border-blue-500":t.selected||r,"border-stone-400 dark:border-white":!t.selected&&!r,"border-dashed":"operator"!==n}),onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},children:[(0,l.jsxs)("div",{className:"flex flex-row items-center p-2",children:[(0,l.jsx)(y(),{src:t.icon||"".concat("/icons/node/").concat(t.name||"default_node_icon",".svg"),width:24,height:24,alt:""}),(0,l.jsx)("p",{className:"ml-2 text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap",children:t.label})]}),a&&a.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(M,{label:"Inputs"}),(a||[]).map((e,a)=>(0,l.jsx)(O,{node:t,data:e,type:"target",label:"inputs",index:a},"".concat(t.id,"_input_").concat(a)))]}),o&&o.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(M,{label:"Parameters"}),(o||[]).map((e,a)=>(0,l.jsx)(D,{node:t,data:e,label:"parameters",index:a},"".concat(t.id,"_param_").concat(a)))]}),"operator"===n&&(null==s?void 0:s.length)>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(M,{label:"Outputs"}),(s||[]).map((e,a)=>(0,l.jsx)(O,{node:t,data:e,type:"source",label:"outputs",index:a},"".concat(t.id,"_input_").concat(a)))]}):"resource"===n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(M,{label:"Outputs"}),(0,l.jsx)(O,{node:t,data:t,type:"source",label:"outputs",index:0},"".concat(t.id,"_input_0"))]}):void 0]})})}},B={buttonedge:e=>{let{id:t,sourceX:a,sourceY:s,targetX:n,targetY:o,sourcePosition:r,targetPosition:i,style:c={},data:d,markerEnd:u}=e,[p,f,x]=(0,v.OQ)({sourceX:a,sourceY:s,sourcePosition:r,targetX:n,targetY:o,targetPosition:i}),m=(0,v._K)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.u5,{id:t,style:c,path:p,markerEnd:u}),(0,l.jsx)("foreignObject",{width:40,height:40,x:f-20,y:x-20,className:"bg-transparent w-10 h-10 relative",requiredExtensions:"http://www.w3.org/1999/xhtml",children:(0,l.jsx)("button",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-stone-400 dark:bg-zinc-700 cursor-pointer text-sm",onClick:e=>{e.stopPropagation(),m.setEdges(m.getEdges().filter(e=>e.id!==t))},children:"\xd7"})})]})}},J=()=>{let{t:e}=(0,g.$G)(),[t,a]=Z.ZP.useMessage(),o=(0,$.useSearchParams)(),i=(null==o?void 0:o.get("id"))||"",c=(0,v._K)(),[d,u]=(0,h.useState)(!1),[p,x,m]=(0,v.Rr)([]),[j,w,y]=(0,v.ll)([]),N=(0,h.useRef)(null),[_,k]=(0,h.useState)(!1),[C,E]=(0,h.useState)("");async function S(){u(!0);let[e,t]=await (0,s.Vx)((0,s._d)(i));if(t){let e=K(t.flow_data);E(t.name),x(e.nodes.map(e=>({...e,type:"customNode"}))),w(e.edges.map(e=>({...e,type:"buttonedge"})))}u(!1)}(0,h.useEffect)(()=>{i&&S()},[i]);let z=(0,h.useCallback)(e=>{e.preventDefault();let t=N.current.getBoundingClientRect(),a=e.dataTransfer.getData("application/reactflow");if(!a||void 0===a)return;let l=JSON.parse(a),s=c.screenToFlowPosition({x:e.clientX-t.left,y:e.clientY-t.top}),n=A(l,c.getNodes());l.id=n;let o={id:n,position:s,type:"customNode",data:l};x(e=>e.concat(o).map(e=>(e.id===o.id?e.data={...e.data,selected:!0}:e.data={...e.data,selected:!1},e)))},[c]),F=(0,h.useCallback)(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},[]);async function O(){let a=L(c.toObject());if(i){let[,,l]=await (0,s.Vx)((0,s.ao)(i,{name:C,uid:i,flow_data:a}));(null==l?void 0:l.success)?t.success(e("save_flow_success")):(null==l?void 0:l.err_msg)&&t.error(null==l?void 0:l.err_msg)}else{if(!C)return t.warning(e("flow_name_required"));let[l,n]=await (0,s.Vx)((0,s.zd)({name:C,flow_data:a}));if(null==n?void 0:n.uid){t.success(e("save_flow_success"));let a=window.history;a.pushState(null,"","/flow/canvas?id=".concat(n.uid))}k(!1)}}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{visible:d}),(0,l.jsx)("div",{className:"my-2 mx-4 flex flex-row justify-end items-center",children:(0,l.jsx)("div",{className:"w-8 h-8 rounded-md bg-stone-300 dark:bg-zinc-700 dark:text-zinc-200 flext justify-center items-center hover:text-blue-500 dark:hover:text-zinc-100",children:(0,l.jsx)(R.Z,{className:"block text-xl",onClick:function(){i?O():k(!0)}})})}),(0,l.jsx)(f.Z,{className:"mt-0 mb-0"}),(0,l.jsx)("div",{className:"h-[calc(100vh-60px)] w-full",ref:N,children:(0,l.jsxs)(v.x$,{nodes:p,edges:j,nodeTypes:q,edgeTypes:B,onNodesChange:m,onEdgesChange:y,onNodeClick:function(e,t){c.setNodes(e=>e.map(e=>(e.id===t.id?e.data={...e.data,selected:!0}:e.data={...e.data,selected:!1},e)))},onConnect:function(e){let t={...e,type:"buttonedge",id:"".concat(e.source,"|").concat(e.target)};w(e=>(0,v.Z_)(t,e))},onDrop:z,onDragOver:F,minZoom:.1,fitView:!0,deleteKeyCode:["Backspace","Delete"],children:[(0,l.jsx)(G.Z,{className:"flex flex-row items-center",position:"bottom-center"}),(0,l.jsx)(X.A,{color:"#aaa",gap:16}),(0,l.jsx)(b,{})]})}),(0,l.jsx)(H.default,{title:e("flow_modal_title"),open:_,onOk:O,onCancel:()=>{k(!1)},children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:e("flow_name")}),(0,l.jsx)(r.default,{onChange:e=>{E(e.target.value)}})]})}),a]})};function Q(){return(0,l.jsx)(v.tV,{children:(0,l.jsx)(J,{})})}}},function(e){e.O(0,[662,241,113,503,9,810,411,928,884,487,434,961,774,888,179],function(){return e(e.s=76735)}),_N_E=e.O()}]);