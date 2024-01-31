(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{8497:function(e,t,n){"use strict";n.d(t,{_:function(){return g},a:function(){return j}});var l=n(85893),a=n(51009),i=n(71230),r=n(15746),s=n(83062),c=n(32983),o=n(7143),d=n(58989),u=n(5165);let m=e=>{let{charts:t,scopeOfCharts:n,ruleConfig:l}=e,a={};if(null==t||t.forEach(e=>{if(e.chartKnowledge.toSpec){let t=e.chartKnowledge.toSpec;e.chartKnowledge.toSpec=(e,n)=>({...t(e,n),dataProps:n})}else e.chartKnowledge.toSpec=(e,t)=>({dataProps:t});a[e.chartType]=e.chartKnowledge}),(null==n?void 0:n.exclude)&&n.exclude.forEach(e=>{Object.keys(a).includes(e)&&delete a[e]}),null==n?void 0:n.include){let e=n.include;Object.keys(a).forEach(t=>{e.includes(t)||delete a[t]})}let i={...n,custom:a},r={...l},s=new u.w({ckbCfg:i,ruleCfg:r});return s},h=e=>{var t;let{data:n,dataMetaMap:l,myChartAdvisor:a}=e,i=l?Object.keys(l).map(e=>({name:e,...l[e]})):null,r=null==a?void 0:a.adviseWithLog({data:n,dataProps:i});return null!==(t=null==r?void 0:r.advices)&&void 0!==t?t:[]};var p=n(67294);function x(e,t){return t.every(t=>e.includes(t))}function f(e,t){let n=t.find(t=>t.name===e);return(null==n?void 0:n.recommendation)==="date"?t=>new Date(t[e]):e}n(96486);let v=[{chartType:"multi_line_chart",chartKnowledge:{id:"multi_line_chart",name:"multi_line_chart",alias:["multi_line_chart"],family:["LineCharts"],def:"multi_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Trend"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:1,fieldConditions:["Time","Ordinal"]},{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:0,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{let n=t.find(e=>{var t;return t=e.levelOfMeasurements,["Time","Ordinal"].some(e=>t.includes(e))}),l=t.filter(e=>x(e.levelOfMeasurements,["Interval"])),a=t.find(e=>x(e.levelOfMeasurements,["Nominal"]));if(!n||!l)return null;let i={type:"view",autoFit:!0,data:e,children:[]};return l.forEach(e=>{let l={type:"line",encode:{x:f(n.name,t),y:e.name}};a&&(l.encode.color=a.name),i.children.push(l)}),i}},chineseName:"折线图"},{chartType:"multi_measure_column_chart",chartKnowledge:{id:"multi_measure_column_chart",name:"multi_measure_column_chart",alias:["multi_measure_column_chart"],family:["ColumnCharts"],def:"multi_measure_column_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{let n=null==t?void 0:t.filter(e=>x(e.levelOfMeasurements,["Interval"])),l=null==t?void 0:t.find(e=>x(e.levelOfMeasurements,["Nominal"]));if(!l||!n)return null;let a={type:"view",data:e,children:[]};return null==n||n.forEach(e=>{let t={type:"interval",encode:{x:l.name,y:e.name,color:()=>e.name,series:()=>e.name}};a.children.push(t)}),a}catch(e){return console.log(e),null}}},chineseName:"折线图"},{chartType:"multi_measure_line_chart",chartKnowledge:{id:"multi_measure_line_chart",name:"multi_measure_line_chart",alias:["multi_measure_line_chart"],family:["LineCharts"],def:"multi_measure_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{let n=null==t?void 0:t.filter(e=>x(e.levelOfMeasurements,["Interval"])),l=null==t?void 0:t.find(e=>x(e.levelOfMeasurements,["Nominal"]));if(!l||!n)return null;let a={type:"view",data:e,children:[]};return null==n||n.forEach(e=>{let n={type:"line",encode:{x:f(l.name,t),y:e.name,color:()=>e.name,series:()=>e.name}};a.children.push(n)}),a}catch(e){return console.log(e),null}}},chineseName:"折线图"}];var y=n(41468);let j=e=>"response_line_chart"===e?["multi_line_chart","multi_measure_line_chart"]:"response_bar_chart"===e?["multi_measure_column_chart"]:"response_pie_chart"===e?["pie_chart"]:"response_scatter_chart"===e?["scatter_plot"]:"response_area_chart"===e?["area_chart"]:"response_heatmap_chart"===e?["heatmap"]:[],{Option:_}=a.default,g=e=>{let{data:t,chartType:n,scopeOfCharts:u,ruleConfig:x}=e,{mode:f}=(0,p.useContext)(y.p),[j,g]=(0,p.useState)(),[b,w]=(0,p.useState)([]),[N,C]=(0,p.useState)();(0,p.useEffect)(()=>{g(m({charts:v,scopeOfCharts:void 0,ruleConfig:x}))},[x,u]),(0,p.useEffect)(()=>{if(t&&j){var e;let l=h({data:t,myChartAdvisor:j}),a=function(e){let{advices:t}=e;return t}({advices:l});a.sort((e,t)=>n.indexOf(t.type)-(null==n?void 0:n.indexOf(e.type))),w(a),C(null===(e=a[0])||void 0===e?void 0:e.type)}},[t,j,n]);let Z=(0,p.useMemo)(()=>{if((null==b?void 0:b.length)>0){var e,t;let n=null!=N?N:b[0].type,a=null!==(t=null===(e=null==b?void 0:b.find(e=>e.type===n))||void 0===e?void 0:e.spec)&&void 0!==t?t:void 0;if(a)return(0,l.jsx)(o.k,{options:{...a,theme:f,autoFit:!0,height:300}},n)}},[b,N]);return N?(0,l.jsxs)("div",{children:[(0,l.jsxs)(i.Z,{justify:"start",className:"mb-2",children:[(0,l.jsx)(r.Z,{children:d.Z.t("Advices")}),(0,l.jsx)(r.Z,{style:{marginLeft:24},children:(0,l.jsx)(a.default,{className:"w-52",value:N,placeholder:"Chart Switcher",onChange:e=>C(e),size:"small",children:null==b?void 0:b.map(e=>{let t=d.Z.t(e.type);return(0,l.jsx)(_,{value:e.type,children:(0,l.jsx)(s.Z,{title:t,placement:"right",children:(0,l.jsx)("div",{children:t})})},e.type)})})})]}),(0,l.jsx)("div",{className:"auto-chart-content",children:Z})]}):(0,l.jsx)(c.Z,{image:c.Z.PRESENTED_IMAGE_SIMPLE,description:"暂无合适的可视化视图"})}},39156:function(e,t,n){"use strict";n.d(t,{_z:function(){return x._},ZP:function(){return f},aG:function(){return x.a}});var l=n(85893),a=n(41118),i=n(30208),r=n(40911),s=n(41468),c=n(7143),o=n(67294);function d(e){let{chart:t}=e,{mode:n}=(0,o.useContext)(s.p);return(0,l.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("div",{className:"mb-2",children:t.chart_name}),(0,l.jsx)("div",{className:"opacity-80 text-sm mb-2",children:t.chart_desc}),(0,l.jsx)("div",{className:"h-[300px]",children:(0,l.jsx)(c.k,{style:{height:"100%"},options:{autoFit:!0,theme:n,type:"interval",data:t.values,encode:{x:"name",y:"value",color:"type"},axis:{x:{labelAutoRotate:!1}}}})})]})})}function u(e){let{chart:t}=e,{mode:n}=(0,o.useContext)(s.p);return(0,l.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("div",{className:"mb-2",children:t.chart_name}),(0,l.jsx)("div",{className:"opacity-80 text-sm mb-2",children:t.chart_desc}),(0,l.jsx)("div",{className:"h-[300px]",children:(0,l.jsx)(c.k,{style:{height:"100%"},options:{autoFit:!0,theme:n,type:"view",data:t.values,children:[{type:"line",encode:{x:"name",y:"value",color:"type",shape:"smooth"}},{type:"area",encode:{x:"name",y:"value",color:"type",shape:"smooth"},legend:!1,style:{fillOpacity:.15}}],axis:{x:{labelAutoRotate:!1}}}})})]})})}var m=n(61685),h=n(96486);function p(e){var t,n;let{chart:a}=e,i=(0,h.groupBy)(a.values,"type");return(0,l.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("div",{className:"mb-2",children:a.chart_name}),(0,l.jsx)("div",{className:"opacity-80 text-sm mb-2",children:a.chart_desc}),(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsxs)(m.Z,{"aria-label":"basic table",stripe:"odd",hoverRow:!0,borderAxis:"bothBetween",children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:Object.keys(i).map(e=>(0,l.jsx)("th",{children:e},e))})}),(0,l.jsx)("tbody",{children:null===(t=Object.values(i))||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:n.map((e,t)=>{var n;return(0,l.jsx)("tr",{children:null===(n=Object.keys(i))||void 0===n?void 0:n.map(e=>{var n;return(0,l.jsx)("td",{children:(null==i?void 0:null===(n=i[e])||void 0===n?void 0:n[t].value)||""},e)})},t)})})]})})]})})}var x=n(8497),f=function(e){let{chartsData:t}=e,n=(0,o.useMemo)(()=>{if(t){let e=[],n=null==t?void 0:t.filter(e=>"IndicatorValue"===e.chart_type);n.length>0&&e.push({charts:n,type:"IndicatorValue"});let l=null==t?void 0:t.filter(e=>"IndicatorValue"!==e.chart_type),a=l.length,i=0;return[[0],[1],[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]][a].forEach(t=>{if(t>0){let n=l.slice(i,i+t);i+=t,e.push({charts:n})}}),e}},[t]);return(0,l.jsx)("div",{className:"flex flex-col gap-3",children:null==n?void 0:n.map((e,t)=>(0,l.jsx)("div",{className:"".concat((null==e?void 0:e.type)!=="IndicatorValue"?"flex gap-3":""),children:e.charts.map(e=>"IndicatorValue"===e.chart_type?(0,l.jsx)("div",{className:"flex flex-row gap-3",children:e.values.map(e=>(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(a.Z,{sx:{background:"transparent"},children:(0,l.jsxs)(i.Z,{className:"justify-around",children:[(0,l.jsx)(r.ZP,{gutterBottom:!0,component:"div",children:e.name}),(0,l.jsx)(r.ZP,{children:e.value})]})})},e.name))},e.chart_uid):"LineChart"===e.chart_type?(0,l.jsx)(u,{chart:e},e.chart_uid):"BarChart"===e.chart_type?(0,l.jsx)(d,{chart:e},e.chart_uid):"Table"===e.chart_type?(0,l.jsx)(p,{chart:e},e.chart_uid):void 0)},"chart_row_".concat(t)))})}},34625:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var l=n(85893),a=n(67294),i=n(2453),r=n(83062),s=n(84553),c=n(71577),o=n(49591),d=n(88484),u=n(29158),m=n(50489),h=n(41468),p=function(e){var t;let{convUid:n,chatMode:p,onComplete:x,...f}=e,[v,y]=(0,a.useState)(!1),[j,_]=i.ZP.useMessage(),[g,b]=(0,a.useState)([]),[w,N]=(0,a.useState)(),{model:C}=(0,a.useContext)(h.p),Z=async e=>{var t;if(!e){i.ZP.error("Please select the *.(csv|xlsx|xls) file");return}if(!/\.(csv|xlsx|xls)$/.test(null!==(t=e.file.name)&&void 0!==t?t:"")){i.ZP.error("File type must be csv, xlsx or xls");return}b([e.file])},P=async()=>{y(!0);try{let e=new FormData;e.append("doc_file",g[0]),j.open({content:"Uploading ".concat(g[0].name),type:"loading",duration:0});let[t]=await (0,m.Vx)((0,m.qn)({convUid:n,chatMode:p,data:e,model:C,config:{timeout:36e5,onUploadProgress:e=>{let t=Math.ceil(e.loaded/(e.total||0)*100);N(t)}}}));if(t)return;i.ZP.success("success"),null==x||x()}catch(e){i.ZP.error((null==e?void 0:e.message)||"Upload Error")}finally{y(!1),j.destroy()}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[_,(0,l.jsx)(r.Z,{placement:"bottom",title:"File cannot be changed after upload",children:(0,l.jsx)(s.default,{disabled:v,className:"mr-1",beforeUpload:()=>!1,fileList:g,name:"file",accept:".csv,.xlsx,.xls",multiple:!1,onChange:Z,showUploadList:{showDownloadIcon:!1,showPreviewIcon:!1,showRemoveIcon:!1},itemRender:()=>(0,l.jsx)(l.Fragment,{}),...f,children:(0,l.jsx)(c.ZP,{className:"flex justify-center items-center",type:"primary",disabled:v,icon:(0,l.jsx)(o.Z,{}),children:"Select File"})})}),(0,l.jsx)(c.ZP,{type:"primary",loading:v,className:"flex justify-center items-center",disabled:!g.length,icon:(0,l.jsx)(d.Z,{}),onClick:P,children:v?100===w?"Analysis":"Uploading":"Upload"}),!!g.length&&(0,l.jsxs)("div",{className:"mt-2 text-gray-500 text-sm flex items-center",children:[(0,l.jsx)(u.Z,{className:"mr-2"}),(0,l.jsx)("span",{children:null===(t=g[0])||void 0===t?void 0:t.name})]})]})})},x=function(e){let{onComplete:t}=e,{currentDialogue:n,scene:i,chatId:r}=(0,a.useContext)(h.p);return"chat_excel"!==i?null:(0,l.jsx)("div",{className:"max-w-md h-full relative",children:n?(0,l.jsxs)("div",{className:"flex h-8 overflow-hidden rounded",children:[(0,l.jsx)("div",{className:"flex items-center justify-center px-2 bg-gray-600 text-lg",children:(0,l.jsx)(u.Z,{className:"text-white"})}),(0,l.jsx)("div",{className:"flex items-center justify-center px-3 bg-gray-100 text-xs rounded-tr rounded-br dark:text-gray-800 truncate",children:n.select_param})]}):(0,l.jsx)(p,{convUid:r,chatMode:i,onComplete:t})})};n(23293);var f=n(78045),v=n(16165),y=n(96991),j=n(82353);function _(){let{isContract:e,setIsContract:t,scene:n}=(0,a.useContext)(h.p),i=n&&["chat_with_db_execute","chat_dashboard"].includes(n);return i?(0,l.jsxs)(f.ZP.Group,{value:e,defaultValue:!0,buttonStyle:"solid",onChange:()=>{t(!e)},children:[(0,l.jsxs)(f.ZP.Button,{value:!1,children:[(0,l.jsx)(v.Z,{component:j.ig,className:"mr-1"}),"Preview"]}),(0,l.jsxs)(f.ZP.Button,{value:!0,children:[(0,l.jsx)(y.Z,{className:"mr-1"}),"Editor"]})]}):null}var g=n(81799),b=n(98399),w=n(2093),N=n(51009),C=n(98978),Z=function(){let{scene:e,dbParam:t,setDbParam:n}=(0,a.useContext)(h.p),[i,r]=(0,a.useState)([]);(0,w.Z)(async()=>{let[,t]=await (0,m.Vx)((0,m.vD)(e));r(null!=t?t:[])},[e]);let s=(0,a.useMemo)(()=>{var e;return null===(e=i.map)||void 0===e?void 0:e.call(i,e=>({name:e.param,...b.S$[e.type]}))},[i]);return((0,a.useEffect)(()=>{(null==s?void 0:s.length)&&!t&&n(s[0].name)},[s,n,t]),null==s?void 0:s.length)?(0,l.jsx)(N.default,{value:t,className:"w-36",onChange:e=>{n(e)},children:s.map(e=>(0,l.jsxs)(N.default.Option,{children:[(0,l.jsx)(C.Z,{width:24,height:24,src:e.icon,label:e.label,className:"w-[1.5em] h-[1.5em] mr-1 inline-block mt-[-4px]"}),e.name]},e.name))}):null},P=n(577),k=n(67421),S=function(){let{t:e}=(0,k.$G)(),{agent:t,setAgent:n}=(0,a.useContext)(h.p),{data:i=[]}=(0,P.Z)(async()=>{let[,e]=await (0,m.Vx)((0,m.H4)());return null!=e?e:[]});return(0,l.jsx)(N.default,{className:"w-60",value:t,placeholder:e("Select_Plugins"),options:i.map(e=>({label:e.app_name,value:e.app_code})),allowClear:!0,onChange:e=>{null==n||n(e)}})},O=function(e){let{refreshHistory:t,modelChange:n}=e,{scene:i,refreshDialogList:r}=(0,a.useContext)(h.p);return(0,l.jsxs)("div",{className:"w-full py-2 px-4 md:px-4 flex flex-wrap items-center justify-center gap-1 md:gap-4",children:[(0,l.jsx)(g.Z,{onChange:n}),(0,l.jsx)(Z,{}),"chat_excel"===i&&(0,l.jsx)(x,{onComplete:()=>{null==r||r(),null==t||t()}}),"chat_agent"===i&&(0,l.jsx)(S,{}),(0,l.jsx)(_,{})]})}},81799:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var l=n(85893),a=n(41468),i=n(51009),r=n(19284),s=n(25675),c=n.n(s),o=n(67294),d=n(67421);function u(e,t){var n;let{width:a,height:i}=t||{};return e?(0,l.jsx)(c(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:a||24,height:i||24,src:(null===(n=r.Hf[e])||void 0===n?void 0:n.icon)||"/models/huggingface.svg",alt:"llm"}):null}t.Z=function(e){let{onChange:t}=e,{t:n}=(0,d.$G)(),{modelList:s,model:c}=(0,o.useContext)(a.p);return!s||s.length<=0?null:(0,l.jsx)(i.default,{value:c,placeholder:n("choose_model"),className:"w-52",onChange:e=>{null==t||t(e)},children:s.map(e=>{var t;return(0,l.jsx)(i.default.Option,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[u(e),(0,l.jsx)("span",{className:"ml-2",children:(null===(t=r.Hf[e])||void 0===t?void 0:t.label)||e})]})},e)})})}},99513:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var l=n(85893),a=n(77119),i=n(63764),r=n(94184),s=n.n(r),c=n(67294),o=n(36782);function d(e){let{className:t,value:n,language:a="mysql",onChange:r,thoughts:d}=e,u=(0,c.useMemo)(()=>"mysql"!==a?n:d&&d.length>0?(0,o.WU)("-- ".concat(d," \n").concat(n)):(0,o.WU)(n),[n,d]);return(0,l.jsx)(i.ZP,{className:s()(t),value:u,language:a,onChange:r,theme:"vs-dark",options:{minimap:{enabled:!1},wordWrap:"on"}})}i._m.config({monaco:a})},98978:function(e,t,n){"use strict";var l=n(85893),a=n(25675),i=n.n(a);t.Z=function(e){let{src:t,label:n,width:a,height:r,className:s}=e;return(0,l.jsx)(i(),{className:"w-11 h-11 rounded-full mr-4 border border-gray-200 object-contain bg-white ".concat(s),width:a||44,height:r||44,src:t,alt:n||"db-icon"})}},30119:function(e,t,n){"use strict";n.d(t,{Tk:function(){return c},PR:function(){return o}});var l=n(2453),a=n(6154),i=n(83454);let r=a.Z.create({baseURL:i.env.API_BASE_URL});r.defaults.timeout=1e4,r.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),n(96486);let s={"content-type":"application/json"},c=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return r.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{l.ZP.error(e),Promise.reject(e)})},o=(e,t)=>r.post(e,t,{headers:s}).then(e=>e).catch(e=>{l.ZP.error(e),Promise.reject(e)})},23293:function(){}}]);