(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{54681:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/knowledge",function(){return t(18671)}])},47207:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var s=t(85893),l=t(27595),n=t(27329),i=t(68346);function r(e){let{type:a}=e;return"TEXT"===a?(0,s.jsx)(l.Z,{className:"text-[#2AA3FF] mr-2 !text-lg"}):"DOCUMENT"===a?(0,s.jsx)(n.Z,{className:"text-[#2AA3FF] mr-2 !text-lg"}):(0,s.jsx)(i.Z,{className:"text-[#2AA3FF] mr-2 !text-lg"})}},18671:function(e,a,t){"use strict";let s;t.r(a),t.d(a,{default:function(){return eh}});var l=t(85893),n=t(67294),i=t(24969),r=t(71577),c=t(12069),o=t(3363),d=t(46735),m=t(74627),u=t(40411),p=t(11163),x=t(25675),h=t.n(x),_=t(28058),j=t(27704),f=t(78346),g=t(83062),N=t(66309),b=t(85813),y=t(96074),Z=t(32983),v=t(42075),w=t(75081),k=t(31326),T=t(88008),P=t(18754),S=t(50489),C=t(30381),I=t.n(C),E=t(59566),D=t(71230),F=t(15746),A=t(39479),U=t(44442),O=t(67421),V=t(31545),z=t(6321),M=t(90389);let{TextArea:q}=E.default;function R(e){let{space:a,argumentsShow:t,setArgumentsShow:s}=e,{t:i}=(0,O.$G)(),[o,d]=(0,n.useState)(),[m,u]=(0,n.useState)(!1),p=async()=>{let[e,t]=await (0,S.Vx)((0,S.Tu)(a.name));d(t)};(0,n.useEffect)(()=>{p()},[a.name]);let x=[{key:"Embedding",label:(0,l.jsxs)("div",{children:[(0,l.jsx)(V.Z,{}),i("Embedding")]}),children:(0,l.jsxs)(D.Z,{gutter:24,children:[(0,l.jsx)(F.Z,{span:12,offset:0,children:(0,l.jsx)(A.Z.Item,{tooltip:i("the_top_k_vectors"),rules:[{required:!0}],label:i("topk"),name:["embedding","topk"],children:(0,l.jsx)(E.default,{className:"mb-5 h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:i("Set_a_threshold_score"),rules:[{required:!0}],label:i("recall_score"),name:["embedding","recall_score"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:i("Please_input_the_owner")})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:i("recall_type"),rules:[{required:!0}],label:i("recall_type"),name:["embedding","recall_type"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:i("A_model_used"),rules:[{required:!0}],label:i("model"),name:["embedding","model"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:i("The_size_of_the_data_chunks"),rules:[{required:!0}],label:i("chunk_size"),name:["embedding","chunk_size"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:i("The_amount_of_overlap"),rules:[{required:!0}],label:i("chunk_overlap"),name:["embedding","chunk_overlap"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:i("Please_input_the_description")})})})]})},{key:"Prompt",label:(0,l.jsxs)("div",{children:[(0,l.jsx)(z.Z,{}),i("Prompt")]}),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{tooltip:i("A_contextual_parameter"),label:i("scene"),name:["prompt","scene"],children:(0,l.jsx)(q,{rows:4,className:"mb-2"})}),(0,l.jsx)(A.Z.Item,{tooltip:i("structure_or_format"),label:i("template"),name:["prompt","template"],children:(0,l.jsx)(q,{rows:7,className:"mb-2"})}),(0,l.jsx)(A.Z.Item,{tooltip:i("The_maximum_number_of_tokens"),label:i("max_token"),name:["prompt","max_token"],children:(0,l.jsx)(E.default,{className:"mb-2"})})]})},{key:"Summary",label:(0,l.jsxs)("div",{children:[(0,l.jsx)(M.Z,{}),i("Summary")]}),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{rules:[{required:!0}],label:i("max_iteration"),name:["summary","max_iteration"],children:(0,l.jsx)(E.default,{className:"mb-2"})}),(0,l.jsx)(A.Z.Item,{rules:[{required:!0}],label:i("concurrency_limit"),name:["summary","concurrency_limit"],children:(0,l.jsx)(E.default,{className:"mb-2"})})]})}],h=async e=>{u(!0);let[t,l,n]=await (0,S.Vx)((0,S.iH)(a.name,{argument:JSON.stringify(e)}));u(!1),(null==n?void 0:n.success)&&s(!1)};return(0,l.jsx)(c.default,{width:850,open:t,onCancel:()=>{s(!1)},footer:null,children:(0,l.jsx)(w.Z,{spinning:m,children:(0,l.jsxs)(A.Z,{size:"large",className:"mt-4",layout:"vertical",name:"basic",initialValues:{...o},autoComplete:"off",onFinish:h,children:[(0,l.jsx)(U.Z,{items:x}),(0,l.jsxs)("div",{className:"mt-3 mb-3",children:[(0,l.jsx)(r.ZP,{htmlType:"submit",type:"primary",className:"mr-6",children:i("Submit")}),(0,l.jsx)(r.ZP,{onClick:()=>{s(!1)},children:i("close")})]})]})})})}var G=t(47207);let{confirm:L}=c.default;function H(e){let{space:a}=e,{t}=(0,O.$G)(),s=(0,p.useRouter)(),[c,o]=(0,n.useState)(!1),[d,m]=(0,n.useState)([]),[u,x]=(0,n.useState)(!1),[h,f]=(0,n.useState)(0),C=(0,n.useRef)(1),E=(0,n.useMemo)(()=>d.length<h,[d.length,h]),D=e=>{L({title:t("Tips"),icon:(0,l.jsx)(_.Z,{}),content:"".concat(t("Del_Document_Tips"),"?"),okText:"Yes",okType:"danger",cancelText:"No",async onOk(){await V(e)}})};async function F(){o(!0);let[e,t]=await (0,S.Vx)((0,S._Q)(a.name,{page:C.current,page_size:18}));m(null==t?void 0:t.data),f((null==t?void 0:t.total)||0),o(!1)}let A=async()=>{if(!E)return;o(!0),C.current+=1;let[e,t]=await (0,S.Vx)((0,S._Q)(a.name,{page:C.current,page_size:18}));m([...d,...t.data]),o(!1)},U=async(e,a)=>{await (0,S.Vx)((0,S.Hx)(e,{doc_ids:[a]}))},V=async t=>{await (0,S.Vx)((0,S.n3)(a.name,{doc_name:t.doc_name})),F(),e.onDeleteDoc()},z=()=>{e.onAddDoc(a.name)},M=(e,a)=>{let t;switch(e){case"TODO":t="gold";break;case"RUNNING":t="#2db7f5";break;case"FINISHED":t="cyan";break;default:t="red"}return(0,l.jsx)(g.Z,{title:a,children:(0,l.jsx)(N.Z,{color:t,children:e})})};return(0,n.useEffect)(()=>{F()},[a]),(0,l.jsxs)("div",{className:"collapse-container pt-2 px-4",children:[(0,l.jsxs)(v.Z,{children:[(0,l.jsx)(r.ZP,{size:"middle",type:"primary",className:"flex items-center",icon:(0,l.jsx)(i.Z,{}),onClick:z,children:t("Add_Datasource")}),(0,l.jsx)(r.ZP,{size:"middle",className:"flex items-center mx-2",icon:(0,l.jsx)(P.Z,{}),onClick:()=>{x(!0)},children:"Arguments"})]}),(0,l.jsx)(y.Z,{}),(0,l.jsx)(w.Z,{spinning:c,children:(null==d?void 0:d.length)>0?(0,l.jsxs)("div",{className:"max-h-96 overflow-auto max-w-3/4",children:[(0,l.jsx)("div",{className:"mt-3 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5",children:d.map(e=>(0,l.jsxs)(b.Z,{className:" dark:bg-[#484848] relative  shrink-0 grow-0 cursor-pointer rounded-[10px] border border-gray-200 border-solid w-full",title:(0,l.jsx)(g.Z,{title:e.doc_name,children:(0,l.jsxs)("div",{className:"truncate ",children:[(0,l.jsx)(G.Z,{type:e.doc_type}),(0,l.jsx)("span",{children:e.doc_name})]})}),extra:(0,l.jsxs)("div",{className:"mx-3",children:[(0,l.jsx)(g.Z,{title:"detail",children:(0,l.jsx)(k.Z,{className:"mr-2 !text-lg",style:{color:"#1b7eff",fontSize:"20px"},onClick:()=>{s.push("/knowledge/chunk/?spaceName=".concat(a.name,"&id=").concat(e.id))}})}),(0,l.jsx)(g.Z,{title:"Sync",children:(0,l.jsx)(T.Z,{className:"mr-2 !text-lg",style:{color:"#1b7eff",fontSize:"20px"},onClick:()=>{U(a.name,e.id)}})}),(0,l.jsx)(g.Z,{title:"Delete",children:(0,l.jsx)(j.Z,{className:"text-[#ff1b2e] !text-lg",onClick:()=>{D(e)}})})]}),children:[(0,l.jsxs)("p",{className:"mt-2 font-semibold ",children:[t("Size"),":"]}),(0,l.jsxs)("p",{children:[e.chunk_size," chunks"]}),(0,l.jsxs)("p",{className:"mt-2 font-semibold ",children:[t("Last_Sync"),":"]}),(0,l.jsx)("p",{children:I()(e.last_sync).format("YYYY-MM-DD HH:MM:SS")}),(0,l.jsx)("p",{className:"mt-2 mb-2",children:M(e.status,e.result)})]},e.id))}),E&&(0,l.jsx)(y.Z,{children:(0,l.jsx)("span",{className:"cursor-pointer",onClick:A,children:t("Load_more")})})]}):(0,l.jsx)(Z.Z,{image:Z.Z.PRESENTED_IMAGE_DEFAULT,children:(0,l.jsx)(r.ZP,{type:"primary",className:"flex items-center mx-auto",icon:(0,l.jsx)(i.Z,{}),onClick:z,children:"Create Now"})})}),(0,l.jsx)(R,{space:a,argumentsShow:u,setArgumentsShow:x})]})}var Y=t(19284);let{confirm:X}=c.default;function $(e){var a;let t=(0,p.useRouter)(),{t:s}=(0,O.$G)(),{space:n,getSpaces:i}=e,c=()=>{X({title:s("Tips"),icon:(0,l.jsx)(_.Z,{}),content:"".concat(s("Del_Knowledge_Tips"),"?"),okText:"Yes",okType:"danger",cancelText:"No",async onOk(){await (0,S.Vx)((0,S.XK)({name:null==n?void 0:n.name})),i()}})},o=async e=>{e.stopPropagation();let[a,s]=await (0,S.Vx)((0,S.sW)({chat_mode:"chat_knowledge"}));(null==s?void 0:s.conv_uid)&&t.push("/chat?scene=chat_knowledge&id=".concat(null==s?void 0:s.conv_uid,"&db_param=").concat(n.name))};return(0,l.jsx)(d.ZP,{theme:{components:{Popover:{zIndexPopup:90}}},children:(0,l.jsx)(m.Z,{className:"transition-all bg-white dark:bg-theme-dark-container cursor-pointer rounded",placement:"bottom",trigger:"click",content:(0,l.jsx)(H,{space:n,onAddDoc:e.onAddDoc,onDeleteDoc:function(){i()}}),children:(0,l.jsxs)(u.Z,{className:"mb-4 min-w-[200px] sm:w-60 lg:w-72",count:n.docs||0,children:[(0,l.jsxs)("div",{className:"flex justify-between mx-6 mt-3",children:[(0,l.jsxs)("div",{className:"text-lg font-bold text-black truncate",children:[(a=n.vector_type,(0,l.jsx)(h(),{className:"rounded-full w-8 h-8 border border-gray-200 object-contain bg-white inline-block",width:36,height:136,src:Y.l3[a]||"/models/knowledge-default.jpg",alt:"llm"})),(0,l.jsx)("span",{className:"dark:text-white ml-2",children:null==n?void 0:n.name})]}),(0,l.jsx)(j.Z,{className:"text-[#ff1b2e] !text-lg",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),c()}})]}),(0,l.jsxs)("div",{className:"text-sm mt-2  p-6 pt-2 h-40",children:[(0,l.jsxs)("p",{className:"font-semibold",children:[s("Owner"),":"]}),(0,l.jsx)("p",{className:" truncate",children:null==n?void 0:n.owner}),(0,l.jsxs)("p",{className:"font-semibold mt-2",children:[s("Description"),":"]}),(0,l.jsx)("p",{className:" line-clamp-2",children:null==n?void 0:n.desc}),(0,l.jsx)("p",{className:"font-semibold mt-2",children:"Last modify:"}),(0,l.jsx)("p",{className:" truncate",children:I()(n.gmt_modified).format("YYYY-MM-DD HH:MM:SS")})]}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(r.ZP,{size:"middle",onClick:o,className:"mr-4 dark:text-white mb-2",shape:"round",icon:(0,l.jsx)(f.Z,{}),children:s("Chat")})})]})})})}var K=t(84553),W=t(2453),B=t(64082),Q=t(94184),J=t.n(Q);let{Dragger:ee}=K.default,{TextArea:ea}=E.default;function et(e){let{className:a,handleStepChange:t,spaceName:s,docType:i}=e,{t:c}=(0,O.$G)(),[o]=A.Z.useForm(),[d,m]=(0,n.useState)(!1),[u,p]=(0,n.useState)([]),x=async e=>{let a;let{docName:l,textSource:n,text:r,webPageUrl:c}=e;switch(m(!0),i){case"URL":[,a]=await (0,S.Vx)((0,S.H_)(s,{doc_name:l,content:c,doc_type:"URL"}));break;case"TEXT":[,a]=await (0,S.Vx)((0,S.H_)(s,{doc_name:l,source:n,content:r,doc_type:"TEXT"}))}return(m(!1),"DOCUMENT"===i&&u.length<1)?W.ZP.error("Upload failed, please re-upload."):"DOCUMENT"===i||a?void t({label:"forward",files:"DOCUMENT"===i?u:[{name:l,doc_id:a||-1}]}):W.ZP.error("Upload failed, please re-upload.")},h=e=>{let{file:a,fileList:t}=e;0===t.length&&o.setFieldValue("originFileObj",null)},_=async e=>{let{onSuccess:a,onError:t,file:l}=e,n=new FormData,i=null==l?void 0:l.name;n.append("doc_name",i),n.append("doc_file",l),n.append("doc_type","DOCUMENT");let[,r]=await (0,S.Vx)((0,S.iG)(s,n));Number.isInteger(r)?(a&&a(r||0),p(e=>(e.push({name:i,doc_id:r||-1}),e))):t&&t({name:"",message:""})},j=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{label:"".concat(c("Name"),":"),name:"docName",rules:[{required:!0,message:c("Please_input_the_name")}],children:(0,l.jsx)(E.default,{className:"mb-5 h-12",placeholder:c("Please_input_the_name")})}),(0,l.jsx)(A.Z.Item,{label:"".concat(c("Text_Source"),":"),name:"textSource",rules:[{required:!0,message:c("Please_input_the_text_source")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:c("Please_input_the_text_source")})}),(0,l.jsx)(A.Z.Item,{label:"".concat(c("Text"),":"),name:"text",rules:[{required:!0,message:c("Please_input_the_description")}],children:(0,l.jsx)(ea,{rows:4})})]}),f=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{label:"".concat(c("Name"),":"),name:"docName",rules:[{required:!0,message:c("Please_input_the_name")}],children:(0,l.jsx)(E.default,{className:"mb-5 h-12",placeholder:c("Please_input_the_name")})}),(0,l.jsx)(A.Z.Item,{label:"".concat(c("Web_Page_URL"),":"),name:"webPageUrl",rules:[{required:!0,message:c("Please_input_the_Web_Page_URL")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:c("Please_input_the_Web_Page_URL")})})]}),g=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(A.Z.Item,{name:"originFileObj",rules:[{required:!0,message:c("Please_select_file")}],children:(0,l.jsxs)(ee,{multiple:!0,onChange:h,maxCount:10,accept:".pdf,.ppt,.pptx,.xls,.xlsx,.doc,.docx,.txt,.md",customRequest:_,children:[(0,l.jsx)("p",{className:"ant-upload-drag-icon",children:(0,l.jsx)(B.Z,{})}),(0,l.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:c("Select_or_Drop_file")}),(0,l.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})})});return(0,l.jsx)(w.Z,{spinning:d,children:(0,l.jsxs)(A.Z,{form:o,size:"large",className:J()("mt-4",a),layout:"vertical",name:"basic",initialValues:{remember:!0},autoComplete:"off",onFinish:x,children:[(()=>{switch(i){case"URL":return f();case"DOCUMENT":return g();default:return j()}})(),(0,l.jsxs)(A.Z.Item,{children:[(0,l.jsx)(r.ZP,{onClick:()=>{t({label:"back"})},className:"mr-4",children:"".concat(c("Back"))}),(0,l.jsx)(r.ZP,{type:"primary",loading:d,htmlType:"submit",children:c("Next")})]})]})})}function es(e){let{t:a}=(0,O.$G)(),{handleStepChange:t}=e,[s,i]=(0,n.useState)(!1),c=async e=>{let{spaceName:a,owner:s,description:l}=e;i(!0);let[n,r,c]=await (0,S.Vx)((0,S.be)({name:a,vector_type:"Chroma",owner:s,desc:l}));i(!1),(null==c?void 0:c.success)&&t({label:"forward",spaceName:a})};return(0,l.jsx)(w.Z,{spinning:s,children:(0,l.jsxs)(A.Z,{size:"large",className:"mt-4",layout:"vertical",name:"basic",initialValues:{remember:!0},autoComplete:"off",onFinish:c,children:[(0,l.jsx)(A.Z.Item,{label:a("Knowledge_Space_Name"),name:"spaceName",rules:[{required:!0,message:a("Please_input_the_name")},()=>({validator:(e,t)=>/[^\u4e00-\u9fa50-9a-zA-Z_-]/.test(t)?Promise.reject(Error(a("the_name_can_only_contain"))):Promise.resolve()})],children:(0,l.jsx)(E.default,{className:"mb-5 h-12",placeholder:a("Please_input_the_name")})}),(0,l.jsx)(A.Z.Item,{label:a("Owner"),name:"owner",rules:[{required:!0,message:a("Please_input_the_owner")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:a("Please_input_the_owner")})}),(0,l.jsx)(A.Z.Item,{label:a("Description"),name:"description",rules:[{required:!0,message:a("Please_input_the_description")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:a("Please_input_the_description")})}),(0,l.jsx)(A.Z.Item,{children:(0,l.jsx)(r.ZP,{type:"primary",htmlType:"submit",children:a("Next")})})]})})}function el(e){let{t:a}=(0,O.$G)(),{handleStepChange:t}=e,s=[{type:"TEXT",title:a("Text"),subTitle:a("Fill your raw text"),iconType:"TEXT"},{type:"URL",title:a("URL"),subTitle:a("Fetch_the_content_of_a_URL"),iconType:"WEBPAGE"},{type:"DOCUMENT",title:a("Document"),subTitle:a("Upload_a_document"),iconType:"DOCUMENT"}];return(0,l.jsx)(l.Fragment,{children:s.map((e,a)=>(0,l.jsxs)(b.Z,{className:"mt-4 mb-4 cursor-pointer",onClick:()=>{t({label:"forward",docType:e.type})},children:[(0,l.jsxs)("div",{className:"font-semibold",children:[(0,l.jsx)(G.Z,{type:e.iconType}),e.title]}),(0,l.jsx)("div",{children:e.subTitle})]},a))})}var en=t(38925),ei=t(47221),er=t(16165),ec=t(48928),eo=t(84567),ed=t(78045);let{TextArea:em}=E.default;function eu(e){let{strategies:a,docType:t,fileName:s,field:i}=e,r="";if("DOCUMENT"===t){let e=s.split(".");r=e[e.length-1]}let c=r?a.filter(e=>e.suffix.indexOf(r)>-1):a,[o,d]=(0,n.useState)(),{t:m}=(0,O.$G)(),u={strategy:"Automatic",name:m("Automatic"),desc:m("Automatic_desc")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{name:[i.name,"chunk_parameters","chunk_strategy"],initialValue:u.strategy,children:(0,l.jsxs)(ed.ZP.Group,{style:{marginTop:16},onChange:function(e){d(e.target.value)},children:[(0,l.jsx)(ed.ZP,{value:u.strategy,children:u.name}),c.map(e=>(0,l.jsx)(ed.ZP,{value:e.strategy,children:e.name},"strategy_radio_".concat(e.strategy)))]})}),function(){if(!o)return null;if(o===u.name)return(0,l.jsx)("p",{className:"my-4",children:u.desc});let e=null==c?void 0:c.filter(e=>e.strategy===o)[0].parameters;return e&&e.length?(0,l.jsx)("div",{className:"mt-2",children:null==e?void 0:e.map(e=>(0,l.jsx)(A.Z.Item,{label:e.param_name,name:[i.name,"chunk_parameters",e.param_name],rules:[{required:!0,message:m("Please_input_the_name")}],initialValue:e.default_value,valuePropName:"boolean"===e.param_type?"checked":"value",tooltip:e.description,children:function(e){switch(e){case"int":return(0,l.jsx)(ec.Z,{className:"w-full",min:1});case"string":return(0,l.jsx)(em,{className:"w-full",rows:2});case"boolean":return(0,l.jsx)(eo.Z,{})}}(e.param_type)},"param_".concat(e.param_name)))}):(0,l.jsx)(en.Z,{className:"my-2",type:"warning",message:m("No_parameter")})}()]})}var ep=t(82353);function ex(e){let{spaceName:a,docType:t,uploadFiles:i,handleStepChange:c}=e,{t:o}=(0,O.$G)(),[d]=A.Z.useForm(),[m,u]=(0,n.useState)(i),[p,x]=(0,n.useState)(),[h,_]=(0,n.useState)([]),[j,f]=(0,n.useState)("");async function g(){var e;x(!0);let[,a]=await (0,S.Vx)((0,S.iZ)());x(!1),_(null===(e=a||[])||void 0===e?void 0:e.filter(e=>e.type.indexOf(t)>-1))}(0,n.useEffect)(()=>(g(),()=>{s&&clearInterval(s)}),[]);let N=async e=>{if(function(e){let a=!0;"RUNNING"===j&&(a=!1,W.ZP.warning("The task is still running, do not submit it again."));let{fileStrategies:t}=e;return t.map(e=>{var t,s;let l=null==e?void 0:null===(t=e.chunk_parameters)||void 0===t?void 0:t.chunk_strategy;l||(W.ZP.error("Please select chunk strategy for ".concat(e.name,".")),a=!1);let n=h.filter(e=>e.strategy===l)[0],i={chunk_strategy:null==e?void 0:null===(s=e.chunk_parameters)||void 0===s?void 0:s.chunk_strategy};n&&n.parameters&&n.parameters.forEach(a=>{let t=a.param_name;i[t]=(null==e?void 0:e.chunk_parameters)[t]}),e.chunk_parameters=i}),a}(e)){var t;x(!0);let[,l]=await (0,S.Vx)((0,S.KL)(a,e.fileStrategies));if(x(!1),(null==l?void 0:l.tasks)&&(null==l?void 0:null===(t=l.tasks)||void 0===t?void 0:t.length)>0){W.ZP.success("Segemation task start successfully. task id: ".concat(null==l?void 0:l.tasks.join(","))),f("RUNNING");let a=e.fileStrategies.map(e=>e.doc_id);s=setInterval(async()=>{let e=await b(a);"FINISHED"===e&&(clearInterval(s),f("FINISHED"),W.ZP.success("Congratulation, All files sync successfully."),c({label:"finish"}))},3e3)}}};async function b(e){let[,t]=await (0,S.Vx)((0,S._Q)(a,{doc_ids:e}));if((null==t?void 0:t.data)&&(null==t?void 0:t.data.length)>0){let e=[...m];if(null==t||t.data.map(a=>{var t;let s=null===(t=null==e?void 0:e.filter(e=>e.doc_id===a.id))||void 0===t?void 0:t[0];s&&(s.status=a.status)}),u(e),null==t?void 0:t.data.every(e=>"FINISHED"===e.status||"FAILED"===e.status))return"FINISHED"}}return(0,l.jsx)(w.Z,{spinning:p,children:(0,l.jsxs)(A.Z,{labelCol:{span:6},wrapperCol:{span:18},labelAlign:"right",form:d,size:"large",className:"mt-4",layout:"horizontal",name:"basic",autoComplete:"off",initialValues:{fileStrategies:m},onFinish:N,children:[h&&h.length?(0,l.jsx)(A.Z.List,{name:"fileStrategies",children:e=>{switch(t){case"TEXT":case"URL":return null==e?void 0:e.map(e=>(0,l.jsx)(eu,{strategies:h,docType:t,fileName:m[e.name].name,field:e}));case"DOCUMENT":return(0,l.jsx)(ei.Z,{defaultActiveKey:0,size:m.length>5?"small":"middle",children:null==e?void 0:e.map(e=>(0,l.jsx)(ei.Z.Panel,{header:"".concat(e.name+1,". ").concat(m[e.name].name),extra:function(e){let a=m[e].status;switch(a){case"FINISHED":return(0,l.jsx)(er.Z,{component:ep.qw});case"RUNNING":return(0,l.jsx)(er.Z,{className:"animate-spin animate-infinite",component:ep.bn});case"FAILED":return(0,l.jsx)(er.Z,{component:ep.FE});default:return(0,l.jsx)(er.Z,{component:ep.tu})}}(e.name),children:(0,l.jsx)(eu,{strategies:h,docType:t,fileName:m[e.name].name,field:e})},e.key))})}}}):(0,l.jsx)(en.Z,{message:"Cannot find one strategy for ".concat(t," type knowledge."),type:"warning"}),(0,l.jsxs)(A.Z.Item,{className:"mt-4",children:[(0,l.jsx)(r.ZP,{onClick:()=>{c({label:"back"})},className:"mr-4",children:"".concat(o("Back"))}),(0,l.jsx)(r.ZP,{type:"primary",htmlType:"submit",loading:p||"RUNNING"===j,children:o("Process")})]})]})})}var eh=()=>{let[e,a]=(0,n.useState)([]),[t,s]=(0,n.useState)(!1),[d,m]=(0,n.useState)(0),[u,p]=(0,n.useState)(""),[x,h]=(0,n.useState)([]),[_,j]=(0,n.useState)(""),{t:f}=(0,O.$G)(),g=[{title:f("Knowledge_Space_Config")},{title:f("Choose_a_Datasource_type")},{title:f("Upload")},{title:f("Segmentation")}];async function N(){let[e,t]=await (0,S.Vx)((0,S.Vm)());a(t)}(0,n.useEffect)(()=>{N()},[]);let b=e=>{let{label:a,spaceName:t,docType:l,files:n}=e;"finish"===a?(s(!1),N(),p(""),j(""),N()):"forward"===a?(0===d&&N(),m(e=>e+1)):m(e=>e-1),n&&h(n),t&&p(t),l&&j(l)};function y(e){p(e),m(1),s(!0)}return(0,l.jsxs)("div",{className:"bg-[#FAFAFA] dark:bg-transparent w-full h-full",children:[(0,l.jsxs)("div",{className:"page-body p-4 md:p-6 h-full overflow-auto",children:[(0,l.jsx)(r.ZP,{type:"primary",className:"flex items-center",icon:(0,l.jsx)(i.Z,{}),onClick:()=>{s(!0)},children:"Create"}),(0,l.jsx)("div",{className:"flex flex-wrap mt-4 gap-4",children:null==e?void 0:e.map(e=>(0,l.jsx)($,{space:e,onAddDoc:y,getSpaces:N},e.id))})]}),(0,l.jsxs)(c.default,{title:"Add Knowledge",centered:!0,open:t,destroyOnClose:!0,onCancel:()=>{s(!1)},width:1e3,afterClose:()=>{m(0),N()},footer:null,children:[(0,l.jsx)(o.Z,{current:d,items:g}),0===d&&(0,l.jsx)(es,{handleStepChange:b}),1===d&&(0,l.jsx)(el,{handleStepChange:b}),(0,l.jsx)(et,{className:J()({hidden:2!==d}),spaceName:u,docType:_,handleStepChange:b}),3===d&&(0,l.jsx)(ex,{spaceName:u,docType:_,uploadFiles:x,handleStepChange:b})]})]})}}},function(e){e.O(0,[885,113,17,479,442,553,813,411,45,928,234,221,549,774,888,179],function(){return e(e.s=54681)}),_N_E=e.O()}]);