/*! For license information please see atoms-IconText-stories.03bf284a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknext_twts=self.webpackChunknext_twts||[]).push([[962],{"./stories/atoms/IconText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"atoms/IconText",component:__webpack_require__("./app/atoms/IconText.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{label:"icon-badge",variant:"body",iconSrc:"/images/icons/bell.svg",iconWidth:20,iconHeight:20,alt:"icon-badge"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'icon-badge',\n    variant: 'body',\n    iconSrc: '/images/icons/bell.svg',\n    iconWidth: 20,\n    iconHeight: 20,\n    alt: 'icon-badge'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./app/atoms/IconText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./app/atoms/Text.tsx")),next_image__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const IconText=param=>{let{variant,textColor,fontWeight,iconSrc,iconWidth,iconHeight,alt,label,className=""}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center gap-x-2 ".concat(className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.A,{variant,textColor,fontWeight,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__.A,{src:iconSrc,width:iconWidth,height:iconHeight,alt})]})},__WEBPACK_DEFAULT_EXPORT__=IconText;try{IconText.displayName="IconText",IconText.__docgenInfo={description:"",displayName:"IconText",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodySmall"'},{value:'"caption"'},{value:'"mini"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string"}},iconWidth:{defaultValue:null,description:"",name:"iconWidth",required:!0,type:{name:"number"}},iconHeight:{defaultValue:null,description:"",name:"iconHeight",required:!0,type:{name:"number"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/atoms/IconText.tsx#IconText"]={docgenInfo:IconText.__docgenInfo,name:"IconText",path:"app/atoms/IconText.tsx#IconText"})}catch(__react_docgen_typescript_loader_error){}},"./app/atoms/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);const Text=param=>{let{variant,fontSize,fontWeight,textColor,children,className,...rest}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()({body:"text-base",bodySmall:"text-sm",caption:"text-xs",mini:"text-[0.625rem]"}[variant],fontSize,fontWeight,textColor,className),...rest,children})},__WEBPACK_DEFAULT_EXPORT__=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodySmall"'},{value:'"caption"'},{value:'"mini"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/atoms/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"app/atoms/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);