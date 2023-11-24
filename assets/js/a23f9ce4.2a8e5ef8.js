/*! For license information please see a23f9ce4.2a8e5ef8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[324893],{805470:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var t=r(824246),o=r(511151);const c={id:"backend-common.makelegacyplugin",title:"makeLegacyPlugin()",description:"API reference for makeLegacyPlugin()"},a=void 0,u={id:"reference/backend-common.makelegacyplugin",title:"makeLegacyPlugin()",description:"API reference for makeLegacyPlugin()",source:"@site/../docs/reference/backend-common.makelegacyplugin.md",sourceDirName:"reference",slug:"/reference/backend-common.makelegacyplugin",permalink:"/docs/reference/backend-common.makelegacyplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.makelegacyplugin.md",tags:[],version:"current",frontMatter:{id:"backend-common.makelegacyplugin",title:"makeLegacyPlugin()",description:"API reference for makeLegacyPlugin()"}},s={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(n.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.makelegacyplugin",children:(0,t.jsx)(n.code,{children:"makeLegacyPlugin"})})]}),"\n",(0,t.jsx)(n.p,{children:"Creates a new custom plugin compatibility wrapper."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'function makeLegacyPlugin<TEnv extends Record<string, unknown>, TEnvTransforms extends {\n    [key in keyof TEnv]?: (dep: TEnv[key]) => unknown;\n}>(envMapping: {\n    [key in keyof TEnv]: ServiceRef<TEnv[key]>;\n}, envTransforms: TEnvTransforms): (name: string, createRouterImport: Promise<{\n    default: LegacyCreateRouter<TransformedEnv<TEnv, TEnvTransforms>>;\n}>) => import("@backstage/backend-plugin-api").BackendFeature;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"envMapping"}),(0,t.jsxs)(n.td,{children:["{ [key in keyof TEnv]: ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.serviceref",children:"ServiceRef"}),"<TEnv[key]>; }"]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"envTransforms"}),(0,t.jsx)(n.td,{children:"TEnvTransforms"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["(name: string, createRouterImport: Promise<{ default: ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.legacycreaterouter",children:"LegacyCreateRouter"}),'<TransformedEnv<TEnv, TEnvTransforms>>; }>) => import("@backstage/backend-plugin-api").',(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["Usually you can use ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.legacyplugin",children:"legacyPlugin"})," directly instead, but you might need to use this if you have customized the plugin environment in your backend."]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,c={},i=null,l=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!s.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:l,props:c,_owner:u.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function g(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||y}function k(){}function b(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var v=b.prototype=new k;v.constructor=b,m(v,g.prototype),v.isPureReactComponent=!0;var _=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var o,c={},a=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,o)&&!E.hasOwnProperty(o)&&(c[o]=n[o]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:r,type:e,key:a,ref:u,props:c,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function T(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case t:s=!0}}if(s)return a=a(s=e),e=""===c?"."+T(s,0):c,_(a)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),w(a,n,o,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),n.push(a)),1;if(s=0,c=""===c?".":c+":",_(e))for(var i=0;i<e.length;i++){var l=c+T(u=e[i],i);s+=w(u,n,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)s+=w(u=u.value,n,o,l=c+T(u,i++),a);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function C(e,n,r){if(null==e)return e;var t=[],o=0;return w(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function $(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};n.Children={map:C,forEach:function(e,n,r){C(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=g,n.Fragment=o,n.Profiler=a,n.PureComponent=b,n.StrictMode=c,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=x.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in n)j.call(n,i)&&!E.hasOwnProperty(i)&&(o[i]=void 0===n[i]&&void 0!==s?s[i]:n[i])}var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){s=Array(i);for(var l=0;l<i;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:r,type:e.type,key:c,ref:a,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=R,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,r){return O.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,r){return O.current.useReducer(e,n,r)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return O.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>u,ah:()=>c});var t=r(667294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function u({components:e,children:n,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||a:c(e),t.createElement(o.Provider,{value:u},n)}}}]);