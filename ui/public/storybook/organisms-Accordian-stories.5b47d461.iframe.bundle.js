/*! For license information please see organisms-Accordian-stories.5b47d461.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknext_twts=self.webpackChunknext_twts||[]).push([[837],{"./stories/organisms/Accordian.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordian_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),atoms=__webpack_require__("./app/atoms/index.tsx");const AccordionList=param=>{let{title,content,isActive,onClick}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"bg-basic-white text-lg flex justify-between items-center transform duration-500 px-4 border-t-2 py-[18px] ".concat(isActive?"border-primary-900":"first:border-none"),onClick:e=>{e.stopPropagation(),onClick()},children:[(0,jsx_runtime.jsx)(atoms.DZ,{type:"h6",className:"text-neutral-900",children:title}),(0,jsx_runtime.jsx)("span",{className:"transform flex items-center",children:(0,jsx_runtime.jsx)(next_image.A,{src:"/images/icons/arrow-down-black.svg",alt:"arrow",width:32,height:32})})]}),(0,jsx_runtime.jsx)("div",{className:"text-sm text-neutral-700 px-4 pt-5 pb-[18px] bg-basic-white ".concat(isActive?"opacity-100 block":"opacity-0 hidden"),onClick:e=>e.stopPropagation(),dangerouslySetInnerHTML:{__html:content}})]})},organisms_Accordian=param=>{let{accordionList,className}=param;const[isActive,setIsActive]=(0,react.useState)(null),handleClickOutside=()=>{setIsActive(null)};return(0,react.useEffect)((()=>(document.addEventListener("click",handleClickOutside,!1),()=>{document.removeEventListener("click",handleClickOutside,!1)})),[]),(0,jsx_runtime.jsx)("div",{className:"border border-neutral-300 max-w-[618px] w-full cursor-pointer rounded overflow-hidden ".concat(className||""),children:accordionList.map((param=>{let{title,content,id}=param;return(0,jsx_runtime.jsx)(AccordionList,{title,content,isActive:isActive===id,onClick:()=>setIsActive(id)},id)}))})};try{Accordian.displayName="Accordian",Accordian.__docgenInfo={description:"",displayName:"Accordian",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},accordionList:{defaultValue:null,description:"",name:"accordionList",required:!0,type:{name:"{ id: string | number; content: string; title: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/organisms/Accordian.tsx#Accordian"]={docgenInfo:Accordian.__docgenInfo,name:"Accordian",path:"app/organisms/Accordian.tsx#Accordian"})}catch(__react_docgen_typescript_loader_error){}var _Default_parameters,_Default_parameters_docs,_Default_parameters1;const Accordian_stories={title:"organisms/Accordian",component:organisms_Accordian,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{accordionList:[{id:1,title:"Title 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco rum."},{id:2,title:"Title 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco rum."}]}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    accordionList: [{\n      id: 1,\n      title: 'Title 1',\n      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco rum.'\n    }, {\n      id: 2,\n      title: 'Title 2',\n      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco rum.'\n    }]\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);