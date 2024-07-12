/*! For license information please see atoms-Button-stories.7d183ea9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknext_twts=self.webpackChunknext_twts||[]).push([[952],{"./stories/atoms/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"atoms/Button",component:__webpack_require__("./app/atoms/Button.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{type:"button",children:"Button",id:"btnPrimary",variant:"normal"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    type: 'button',\n    children: 'Button',\n    id: 'btnPrimary',\n    variant: 'normal'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./app/atoms/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);const Button=param=>{let{type="button",id,className,label,size="medium",variant="normal",radius="rounded",fontWeight="font-normal",iconPosition,icon=!1,fullWidth=!1,disabled=!1,onClick,children,...rest}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type,id,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(className,radius,fontWeight,disabled?"pointer-events-none":"cursor-pointer",{normal:"bg-primary-900 text-basic-white outline-none focus:outline-none hover:bg-primary-800 border border-transparent focus:border-primary-800 disabled:bg-primary-100 disabled:text-primary-300",ghost:"border border-primary-900 bg-basic-white text-primary-900 hover:bg-primary-50 hover:border-primary-800 hover:text-primary-800 focus:border-2 focus:bg-primary-100 disabled:bg-primary-100 disabled:border-none disabled:text-primary-300",borderless:"text-primary-900 hover:bg-primary-100 border-2 border-transparent focus:border-primary-800 focus:bg-primary-100 disabled:bg-primary-100 disabled:text-primary-300",link:"text-primary-900 border-b border-transparent hover:border-primary-800 hover:text-primary-800 focus:text-primary-800 active:text-primary-800 disabled:text-primary-300 disabled:border-primary-300 !rounded-none p-0"}[variant],{extraSmall:"text-xs py-1 px-2",small:"text-sm py-2 px-3",medium:"text-base py-2 px-4",large:"text-lg py-3 px-6",extraLarge:"text-xl py-4 px-8"}[size],fullWidth&&"w-full",icon&&"flex gap-x-2 items-center","left"===iconPosition&&"flex-row-reverse","transition-all ease-linear duration-300"),onClick,disabled,...rest,children:label||children})},__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"normal"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"normal"'},{value:'"ghost"'},{value:'"borderless"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'},{value:'"extraLarge"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},icon:{defaultValue:{value:"false"},description:"",name:"icon",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},radius:{defaultValue:{value:"rounded"},description:"",name:"radius",required:!1,type:{name:"string"}},fontWeight:{defaultValue:{value:"font-normal"},description:"",name:"fontWeight",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/atoms/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"app/atoms/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);