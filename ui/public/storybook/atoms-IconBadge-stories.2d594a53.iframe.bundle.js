"use strict";(self.webpackChunknext_twts=self.webpackChunknext_twts||[]).push([[312],{"./stories/atoms/IconBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"atoms/IconBadge",component:__webpack_require__("./app/atoms/IconBadge.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{label:"2",variant:"primary"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    label: '2',\n    variant: 'primary'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./app/atoms/IconBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"));const IconBadge=param=>{let{variant="primary",label,className="",iconSrc="/images/icons/bell.svg",...rest}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative ".concat(className),...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{src:iconSrc,alt:"icon",width:24,height:24}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-4 h-4 rounded-full font-medium flex items-center justify-center absolute -top-1 -right-1 text-xs ".concat({primary:"bg-primary-900 text-basic-white",secondary:"bg-secondary-900 text-basic-white",ghost:"bg-basic-white text-primary-900",ghostNeutral:"bg-basic-white text-secondary-900"}[variant]),children:label})]})},__WEBPACK_DEFAULT_EXPORT__=IconBadge;try{IconBadge.displayName="IconBadge",IconBadge.__docgenInfo={description:"",displayName:"IconBadge",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'},{value:'"ghostNeutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},iconSrc:{defaultValue:{value:"/images/icons/bell.svg"},description:"",name:"iconSrc",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/atoms/IconBadge.tsx#IconBadge"]={docgenInfo:IconBadge.__docgenInfo,name:"IconBadge",path:"app/atoms/IconBadge.tsx#IconBadge"})}catch(__react_docgen_typescript_loader_error){}}}]);