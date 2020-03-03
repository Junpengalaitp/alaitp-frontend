(this["webpackJsonpalaitp-frontend"]=this["webpackJsonpalaitp-frontend"]||[]).push([[0],{117:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(15),c=r.n(o),i=(r(89),r(34)),l=r(11),s=r(82),u=(r(94),r(8)),d=r(20),p=r(21),m=r(26),y=r(22),g=r(27),f=r(28),h=r(38),S=r.n(h),E=function(e){var t=null,r=[S.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&r.push(S.a.Invalid),e.elementType){case"input":t=n.a.createElement("input",Object.assign({className:e.className},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=n.a.createElement("textarea",Object.assign({className:S.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=n.a.createElement("select",Object.assign({className:S.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}),e.elementConfig.options.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=n.a.createElement("input",Object.assign({className:S.a.InputElement},e.elementConfig,{value:e.value}))}return n.a.createElement("div",null,t)},b=r(18),w=function(e,t){return Object(b.a)({},e,{},t)},C=function(e){return n.a.createElement("button",{className:e.className,onClick:e.clicked,disabled:e.disabled},e.children)},O=r(32),k=r.n(O),j=r(124),v=r(75),T=r(119),R=r(76),_=Object(l.b)(null,(function(e){return{onJobSearchStart:function(){return e({type:"JOB_SEARCH_START"})},onJobSearchSuccess:function(t){return e(function(e){return""===e&&(e="Software Engineer"),function(t){var a=r(112)();console.log("requestId: "+a),k.a.get("http://2r98a43392.qicp.vip/job-description-api/job-list/".concat(e,"/").concat(a)).then((function(e){t({type:"JOB_SEARCH_SUCCESS",jobMap:e.data,jobSearchId:a})})).catch((function(e){console.log("error happened during searching keywords"+e)}))}}(t))}}}))((function(e){var t=Object(a.useState)({elementType:"input",elementConfig:{type:"text",placeholder:"Software Engineer"},value:"",validation:{required:!0},valid:!0,touched:!1}),r=Object(f.a)(t,2),o=r[0],c=r[1],i=function(e){var t=w(o,{value:e.target.value,touched:!0});c(t)},l=function(t){t.preventDefault(),e.onJobSearchStart(),e.history.push("/alaitp-frontend/keywords/".concat(o.value)),e.onJobSearchSuccess(o.value)},s=n.a.createElement(j.a,{onSubmit:l},n.a.createElement(T.a,null,n.a.createElement(R.a,{xs:9},n.a.createElement(E,{className:e.inputCSS,elementType:o.elementType,elementConfig:o.elementConfig,value:o.value,invalid:!o.valid,shouldValidate:o.validation,touched:o.touched,changed:function(e){return i(e)}})),n.a.createElement(R.a,{xs:3},n.a.createElement(C,{type:"submit",className:e.buttonCSS},"Search")))),u=n.a.createElement(j.a,{onSubmit:l,inline:!0},n.a.createElement(v.a,{className:e.inputCSS,type:o.elementConfig.type,value:o.value,onChange:function(e){return i(e)},placeholder:o.elementConfig.placeholder}),n.a.createElement(C,{type:"submit",className:e.buttonCSS},"Search"));return e.show?u:s})),I=r(120),A=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(I.a,{className:"mt-5"},n.a.createElement(T.a,{className:"mt-5"},n.a.createElement(R.a,{xl:9,className:"mx-auto"},n.a.createElement("h1",{className:"mt-5"},"Search For Most Wanted Technical Skills!")),n.a.createElement(R.a,{xl:7,lg:8,md:10,className:"mx-auto mt-5"},n.a.createElement(u.a,{path:"/alaitp-frontend",exact:!0,render:function(e){return n.a.createElement(_,Object.assign({},e,{inputCSS:"form-control form-control-lg",buttonCSS:"btn btn-outline-primary btn-lg",show:!1}))}}))))}}]),t}(n.a.Component),L=r(128),N=r(78),x=r(79),D=r(125),M=r(121),W=r(122),H=Object(l.b)((function(e){return{keywordSearchComplete:e.keyword.searchComplete,keywordIndex:e.keyword.keywordIndexByJob}}))((function(e){var t=e.jobDescriptionText;if(e.keywordSearchComplete){if(!e.opened)return n.a.createElement(n.a.Fragment,null,t);var r,a=e.jobId,o=[];try{r=e.keywordIndex[a];var c=!0,i=!1,l=void 0;try{for(var s,u=r[Symbol.iterator]();!(c=(s=u.next()).done);c=!0){var d=s.value;o.push([d.startIdx,d.endIdx,d.keyword,d.category])}}catch(S){i=!0,l=S}finally{try{c||null==u.return||u.return()}finally{if(i)throw l}}}catch(E){return console.log("error, job id: ",a,"keyword list: ",r,E),n.a.createElement(n.a.Fragment,null,t)}if(o.sort((function(e,t){return e[0]-t[0]})),null===o[0]||void 0===o[0])return n.a.createElement(n.a.Fragment,null,t);for(var p=[e.jobDescriptionText.substring(0,o[0][0])],m={PROGRAMMING_LANGUAGE:"primary",OTHER_LANGUAGE:"primary",LIBRARY:"info",FRAMEWORK:"info",DATA_STORAGE:"warning",DATA_TRANSMISSION:"warning",PLATFORM:"success",SERVER:"success",OS:"success",APPROACH:"secondary",SOFTWARE_ENGINEERING:"secondary",POSITION:"danger",DIVISION:"danger",WORK_EXPERIENCE:"danger"},y=0;y<o.length-1;y++)if(null!==o[y][3]){var g=m[o[y][3]];void 0===g&&(g="dark");var f=n.a.createElement(D.a,{key:o[y][0],placement:"top",overlay:n.a.createElement(M.a,{id:"tooltip-top"},n.a.createElement("strong",null,o[y][3]),".")},n.a.createElement(W.a,{variant:g,key:o[y][0]},e.jobDescriptionText.substring(o[y][0],o[y][1]))),h=e.jobDescriptionText.substring(o[y][1],o[y+1][0]);p.push(f),p.push(h)}p.push(e.jobDescriptionText.substring(o[o.length-1][0])),t=n.a.createElement("p",null,p)}return n.a.createElement(n.a.Fragment,null,t)})),F=function(e){var t=Object(a.useState)(!1),r=Object(f.a)(t,2),o=r[0],c=r[1],i=Object(a.useState)(!1),l=Object(f.a)(i,2),s=l[0],u=l[1];return n.a.createElement(L.a,{style:{width:"49rem"}},n.a.createElement(L.a.Body,null,n.a.createElement(L.a.Title,{className:"clearfix"},n.a.createElement("p",{className:"card-title float-left"},n.a.createElement("strong",null,e.title)),n.a.createElement("p",{className:"card-text float-right"},e.company)),n.a.createElement(L.a.Subtitle,{className:"mb-2 text-muted clearfix"},n.a.createElement(N.a,{className:"card-title float-left",variant:"outline-info btn-sm",onClick:function(){return c(!o),void u(!0)},"aria-controls":"job-collapse-text","aria-expanded":o},"See Job Text"),n.a.createElement("p",{className:"card-text float-right"},e.tags)),n.a.createElement(x.a,{in:o},n.a.createElement("div",{id:"job-collapse-text mx-1"},n.a.createElement(H,{jobDescriptionText:e.jobDescriptionText,jobId:e.jobId,opened:s})))))},J=r(80),P=r.n(J),B=function(){return n.a.createElement("div",{className:P.a.Loader})},K=function(e){return{type:"KEYWORD_SEARCH_SUCCESS",keywords:e}},U=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=n.a.createElement(B,null);return this.props.loading||(this.props.onKeywordSearchStart(),this.props.onJobSearchSuccess(this.props.jobSearchId),!0===this.props.cacheError&&this.props.onJobCacheFail(this.props.jobMap),t=Object.keys(this.props.jobMap).map((function(t){return n.a.createElement(F,{jobId:t,key:t,title:e.props.jobMap[t].jobTitle,company:e.props.jobMap[t].company,tags:e.props.jobMap[t].tags,jobDescriptionText:e.props.jobMap[t].jobDescriptionText})}))),n.a.createElement(n.a.Fragment,null,t)}}]),t}(n.a.Component),G=Object(l.b)((function(e){return{jobSearchId:e.jobDescription.jobSearchId,jobMap:e.jobDescription.jobMap,loading:e.jobDescription.loading,cacheError:e.keyword.cacheError}}),(function(e){return{onKeywordSearchStart:function(){return e({type:"KEYWORD_SEARCH_START"})},onJobSearchSuccess:function(t){return e((r=t,function(e){k.a.get("http://2r98a43392.qicp.vip/job-keyword/keywords/".concat(r)).then((function(t){console.log("getJobKeyword response",t),!0===t.data.error?(console.log("requestId cache failed, tring to post jobs",t),e({type:"JOB_SEARCH_CACHE_FAIL"})):e(K(t.data))})).catch((function(e){console.log("error happened during searching keywords, request id: ".concat(r),e)}))}));var r},onJobCacheFail:function(t){return e((""!==(r=t)&&void 0!==r||(r={desc:"description"}),function(e){k.a.post("http://2r98a43392.qicp.vip/job-keyword/keywords",r).then((function(t){console.log("postJobKeyword response",t),e(K(t.data))})).catch((function(e){console.log("error happened during searching keywords"+e)}))}));var r}}}))(U),q=r(129),Y=function(e){return{type:"COOCCURRENCE_SEARCH_SUCCESS",coOccurredWords:e.words}},V=r(123),X=r(83),Q=n.a.forwardRef((function(e,t){var r=e.children,a=e.onClick;return n.a.createElement("p",{ref:t,onClick:function(e){e.preventDefault(),a(e)}},r)})),z=n.a.forwardRef((function(e,t){var r=e.children,o=e.style,c=e.className,i=e["aria-labelledby"],l=Object(a.useState)(""),s=Object(f.a)(l,2),u=s[0],d=(s[1],Object(a.useState)([])),p=Object(f.a)(d,2),m=p[0],y=p[1],g={pl:"programming language",ol:"other language",lb:"library",fw:"framework",cs:"computer science",ai:"artificial intelligence",pt:"protocol",ds:"data storage",dt:"data transmission",dv:"division",ps:"position",we:"work experience",os_:"operating system",sv:"server",ap:"approach",se:"software engineering",pf:"platform",ge:"general",sf:"soft skills",tl:"tool",at:"architect",pd:"product",ql:"quality",of:"offer",tm:"team",cp:"company"};return n.a.createElement("div",{ref:t,style:o,className:c,"aria-labelledby":i},n.a.createElement(j.a,{onSubmit:function(e){e.preventDefault()}},n.a.createElement("div",{key:"inline-".concat("radio"),className:"mb-3"},["pl","ol","lb","fw","cs","ai","pt","ds","dt","dv","ps","we","os","sv","ap","se","pf","ge","sf","tl","at","pd","ql","of","tm","cp"].map((function(e){return n.a.createElement(j.a.Check,{inline:!0,label:g[e],type:"radio",id:"inline-".concat("radio","-").concat(e),onClick:function(){return function(e){y([].concat(Object(X.a)(m),[e])),console.log("categories: ",m)}(e)}})})))),n.a.createElement("ul",{className:"list-unstyled w-auto"},n.a.Children.toArray(r).filter((function(e){return!u||e.props.children.toLowerCase().startsWith(u)}))))})),$=Object(l.b)((function(e){return{keywords:e.keyword.orderedKeywordByCategory,loading:e.coOccurrence.loading,coOccurredWords:e.coOccurrence.coOccurredWords}}),(function(e){return{onCoOccurrenceSearchStart:function(){return e({type:"COOCCURRENCE_SEARCH_START"})},onCoOccurrenceSearchSuccess:function(t){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return e=e.replace("#","%23"),function(a){console.log("get ".concat(r," co-occurred words for word: ").concat(e," in categories: ").concat(t)),k.a.get("http://2r98a43392.qicp.vip/co_occurrence_matrix/most-correlated-words/".concat(e,"/").concat(r,"/").concat(t)).then((function(e){console.log(e.data),a(Y(e.data))})).catch((function(e){console.log("error happened during searching keywords"+e)}))}}(t))}}}))((function(e){if(null===e.keywords)return null;var t=e.keywords[e.keywordType];if(null===t||void 0===t)return null;var r=n.a.createElement(B,null),a={};if(!e.loading&&0===Object.keys(a).length){var o=Object.keys(e.coOccurredWords);o.sort((function(t,r){return e.coOccurredWords[r].count-e.coOccurredWords[t].count})),r=o.map((function(e,t){return n.a.createElement(V.a.Item,{key:t,eventKey:t},e)}));for(var c=0,i=Object.entries(e.coOccurredWords);c<i.length;c++){var l=Object(f.a)(i[c],2),s=l[0],u=l[1];u.category in a?a[u.category].push(s):a[u.category]=[s]}console.log("wordByCategory: ",a)}return t.slice(0,8).map((function(t,a){return n.a.createElement(q.a.Item,{variant:"light",key:a,action:!0,onClick:function(){return function(t){e.onCoOccurrenceSearchStart(),e.onCoOccurrenceSearchSuccess(t),console.log("search co-occurred words")}(t)}},n.a.createElement(V.a,null,n.a.createElement(V.a.Toggle,{as:Q,id:"dropdown-custom-components"},t),n.a.createElement(V.a.Menu,{as:z},r)))}))})),Z=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(R.a,{sm:2,className:"align-self-start"},n.a.createElement(q.a,{horizontal:!0},n.a.createElement("a",{href:"#",className:"list-group-item "+this.props.keywordListCSS},this.props.categoryTitle),n.a.createElement($,{keywordType:this.props.keywordType})))}}]),t}(n.a.Component),ee=Object(l.b)((function(e){return{jobDescriptionLoading:e.jobDescription.loading,keywordsLoading:e.keyword.loading}}))((function(e){var t=[{categoryTitle:"Programming Language",keywordType:"programmingLanguage",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Other Language",keywordType:"otherLanguage",keywordListCSS:"list-group-item-success"},{categoryTitle:"Library",keywordType:"library",keywordListCSS:"list-group-item-primary"},{categoryTitle:"Framework",keywordType:"framework",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Division",keywordType:"division",keywordListCSS:"list-group-item-success"},{categoryTitle:"Position",keywordType:"position",keywordListCSS:"list-group-item-primary"},{categoryTitle:"Platform",keywordType:"platform",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Approach",keywordType:"approach",keywordListCSS:"list-group-item-success"},{categoryTitle:"Data Storage",keywordType:"dataStorage",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Data Transmission",keywordType:"dataTransmission",keywordListCSS:"list-group-item-success"},{categoryTitle:"Server",keywordType:"server",keywordListCSS:"list-group-item-primary"},{categoryTitle:"Software Engineering",keywordType:"softwareEngineering",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Computer Science",keywordType:"computerScience",keywordListCSS:"list-group-item-success"},{categoryTitle:"Architect",keywordType:"architect",keywordListCSS:"list-group-item-primary"},{categoryTitle:"AI",keywordType:"ai",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Quality",keywordType:"quality",keywordListCSS:"list-group-item-success"},{categoryTitle:"Product",keywordType:"softwareProduct",keywordListCSS:"list-group-item-primary"},{categoryTitle:"Work Experience",keywordType:"workExperience",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Tool",keywordType:"tool",keywordListCSS:"list-group-item-success"},{categoryTitle:"Soft Skill",keywordType:"softSkill",keywordListCSS:"list-group-item-primary"},{categoryTitle:"Offer",keywordType:"offer",keywordListCSS:"list-group-item-warning"},{categoryTitle:"Team",keywordType:"team",keywordListCSS:"list-group-item-success"},{categoryTitle:"Company",keywordType:"company",keywordListCSS:"list-group-item-primary"}].map((function(e,t){return n.a.createElement(T.a,{key:t},n.a.createElement(Z,{categoryTitle:e.categoryTitle,keywordType:e.keywordType,keywordListCSS:e.keywordListCSS}))}));return e.keywordsLoading?n.a.createElement(B,null):t})),te=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(T.a,{className:"justify-content-md-center"},n.a.createElement(R.a,{xs:5},n.a.createElement(ee,null)),n.a.createElement(R.a,{xs:5},n.a.createElement(G,null)))}}]),t}(n.a.Component),re=r(126),ae=r(127),ne=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(T.a,{className:"justify-content-md-center"},n.a.createElement(R.a,{xs:10},n.a.createElement(re.a,{sticky:"top",bg:"light",variant:"light",expand:"lg",className:"justify-content-between mb-5"},n.a.createElement(re.a.Brand,{href:"/alaitp-frontend"},"ALAITP"),n.a.createElement(u.a,{path:"/alaitp-frontend/keywords",render:function(e){return n.a.createElement(_,Object.assign({},e,{inputCSS:"mr-sm-2",buttonCSS:"btn btn-outline-primary",show:!0}))}}),n.a.createElement(re.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(re.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(ae.a,{className:"ml-auto"},n.a.createElement(ae.a.Link,{href:"/alaitp-frontend"},"Home"),n.a.createElement(ae.a.Link,{href:"/alaitp-frontend"},"About"),n.a.createElement(ae.a.Link,{href:"/alaitp-frontend"},"Services"),n.a.createElement(ae.a.Link,{href:"/alaitp-frontend"},"Contact"))))))}}]),t}(n.a.Component),oe=Object(l.b)((function(e){return{searchComplete:e.keyword.searchComplete,loading:e.keyword.loading}}))((function(e){return n.a.createElement(a.Fragment,null,n.a.createElement(u.a,{path:"/alaitp-frontend",exact:!0,component:A}),n.a.createElement(u.a,{path:"/alaitp-frontend/keywords",component:ne}),n.a.createElement(u.a,{path:"/alaitp-frontend/keywords",render:function(){return n.a.createElement(te,{show:e.loading||e.searchComplete})}}))})),ce=function(){return n.a.createElement("div",null,n.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie={searchComplete:!1,loading:!1,searchInput:"",orderedKeywordByCategory:{},keywordIndexByJob:null,cacheError:!1,error:!1},le=function(e,t){var r=t.keywords.orderedKeywordByCategory;return w(e,{orderedKeywordByCategory:{programmingLanguage:r.PROGRAMMING_LANGUAGE,otherLanguage:r.OTHER_LANGUAGE,library:r.LIBRARY,framework:r.FRAMEWORK,division:r.DIVISION,position:r.POSITION,dataStorage:r.DATA_STORAGE,dataTransmission:r.DATA_TRANSMISSION,server:r.SERVER,platform:r.PLATFORM,approach:r.APPROACH,softwareEngineering:r.SOFTWARE_ENGINEERING,computerScience:r.COMPUTER_SCIENCE,ai:r.AI,os:r.OS,architect:r.ARCHITECT,quality:r.QUALITY,protocol:r.PROTOCOL,tool:r.TOOL,softwareProduct:r.SOFTWARE_PRODUCT,workExperience:r.WORK_EXPERIENCE,softSkill:r.SOFT_SKILL,offer:r.OFFER,team:r.TEAM,company:r.COMPANY},keywordIndexByJob:t.keywords.keywordIndexByJob,jobMap:t.jobMap,loading:!1,searchComplete:!0})},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"KEYWORD_SEARCH_START":return console.log("keyword search start"),Object(b.a)({},e,{searchComplete:!1,loading:!0});case"KEYWORD_SEARCH_SUCCESS":return console.log("keyword search complete"),le(e,t);case"JOB_SEARCH_CACHE_FAIL":return console.log("job cache fail, trying post job description"),Object(b.a)({},e,{cacheError:!0,searchComplete:!1});case"KEYWORD_SEARCH_FAIL":return Object(b.a)({},e,{loading:!1,searchComplete:!1});default:return e}},ue={searchComplete:!1,loading:!1,searchInput:"",jobSearchId:null,jobMap:{},error:!1},de=function(e,t){return w(e,{jobMap:t.jobMap,jobSearchId:t.jobSearchId,loading:!1,searchComplete:!0})},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"JOB_SEARCH_START":return console.log("job search start"),Object(b.a)({},e,{loading:!0});case"JOB_SEARCH_SUCCESS":return console.log("job search complete"),de(e,t);case"JOB_SEARCH_FAIL":return Object(b.a)({},e,{loading:!1,searchComplete:!0});default:return e}},me={loading:!1,searchComplete:!1,coOccurredWords:{},error:!1},ye=function(e,t){return w(e,{coOccurredWords:t.coOccurredWords,loading:!1,searchComplete:!0})},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COOCCURRENCE_SEARCH_START":return console.log("co-occurrence search start"),Object(b.a)({},e,{loading:!0});case"COOCCURRENCE_SEARCH_SUCCESS":return console.log("co-occurrence search complete"),ye(e,t);case"COOCCURRENCE_SEARCH_FAIL":return Object(b.a)({},e,{loading:!1,searchComplete:!0});default:return e}},fe=r(81),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Se=Object(i.c)({keyword:se,jobDescription:pe,coOccurrence:ge}),Ee=Object(i.e)(Se,he(Object(i.a)(fe.a))),be=n.a.createElement(l.a,{store:Ee},n.a.createElement(s.a,null,n.a.createElement(ce,null)));c.a.render(be,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,r){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},80:function(e,t,r){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},84:function(e,t,r){e.exports=r(117)},94:function(e,t,r){}},[[84,1,2]]]);
//# sourceMappingURL=main.8acc2c40.chunk.js.map