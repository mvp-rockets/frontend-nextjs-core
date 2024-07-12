/*! For license information please see atoms-Tags-stories.fbddc4e3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknext_twts=self.webpackChunknext_twts||[]).push([[603],{"./stories/atoms/Tags.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_withIcon_parameters,_withIcon_parameters_docs,_withIcon_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,withIcon:()=>withIcon});const __WEBPACK_DEFAULT_EXPORT__={title:"atoms/Tags",component:__webpack_require__("./app/atoms/Tags.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{label:"tag",variant:"primary"}},withIcon={args:{label:"tag",variant:"primary",iconSrc:"/images/icons/plus.svg",iconWidth:18,iconHeight:18,size:"normal"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'tag',\n    variant: 'primary'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},withIcon.parameters={...withIcon.parameters,docs:{...null===(_withIcon_parameters=withIcon.parameters)||void 0===_withIcon_parameters?void 0:_withIcon_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'tag',\n    variant: 'primary',\n    iconSrc: '/images/icons/plus.svg',\n    iconWidth: 18,\n    iconHeight: 18,\n    size: 'normal'\n  }\n}",...null===(_withIcon_parameters1=withIcon.parameters)||void 0===_withIcon_parameters1||null===(_withIcon_parameters_docs=_withIcon_parameters1.docs)||void 0===_withIcon_parameters_docs?void 0:_withIcon_parameters_docs.source}}};const __namedExportsOrder=["Default","withIcon"]},"./app/atoms/Tags.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),next_image__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Tags=param=>{let{shape="rounded",variant="primary",size="medium",label,iconSrc,iconPosition,className,iconWidth=24,iconHeight=24,isLight=!1,onClick=()=>{},...rest}=param;const tagsVariant={primary:isLight?"bg-basic-white text-primary-900":"bg-primary-900 text-basic-white",error:isLight?"bg-error-50 text-error-100":"bg-error-100 text-basic-white",warning:isLight?"bg-warning-50 text-warning-100":"bg-warning-100 text-basic-white",success:isLight?"bg-success-50 text-success-100":"bg-success-100 text-basic-white",neutral:isLight?"bg-basic-white text-neutral-900":"bg-neutral-900 text-basic-white"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()({rounded:"rounded",soft:"rounded",sharpe:"rounded-none"}[shape],{medium:"py-2 px-6 text-base",normal:"py-1.5 px-[16px] text-sm",small:"py-1 px-2 text-xs"}[size],tagsVariant[variant],className,{"flex items-center gap-x-2 cursor-pointer":iconSrc,"flex-row-reverse":"left"===iconPosition},"w-fit"),onClick,...rest,children:[label,iconSrc&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__.A,{src:iconSrc,alt:"icon",width:iconWidth,height:iconHeight})]})},__WEBPACK_DEFAULT_EXPORT__=Tags;try{Tags.displayName="Tags",Tags.__docgenInfo={description:"",displayName:"Tags",props:{shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"soft"'},{value:'"sharpe"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"neutral"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"normal"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconWidth:{defaultValue:{value:"24"},description:"",name:"iconWidth",required:!1,type:{name:"number"}},iconHeight:{defaultValue:{value:"24"},description:"",name:"iconHeight",required:!1,type:{name:"number"}},isLight:{defaultValue:{value:"false"},description:"",name:"isLight",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/atoms/Tags.tsx#Tags"]={docgenInfo:Tags.__docgenInfo,name:"Tags",path:"app/atoms/Tags.tsx#Tags"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);