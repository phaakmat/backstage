/*! For license information please see 037e155e.5149df29.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[394439],{206598:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(824246),o=t(511151);const a={id:"plugin-catalog-backend-module-msgraph.organizationtransformer",title:"OrganizationTransformer",description:"API reference for OrganizationTransformer"},u=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph.organizationtransformer",title:"OrganizationTransformer",description:"API reference for OrganizationTransformer",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.organizationtransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.organizationtransformer",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.organizationtransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.organizationtransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.organizationtransformer",title:"OrganizationTransformer",description:"API reference for OrganizationTransformer"}},i={},s=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.organizationtransformer",children:(0,n.jsx)(r.code,{children:"OrganizationTransformer"})})]}),"\n",(0,n.jsx)(r.p,{children:"Customize the ingested organization Group entity"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type OrganizationTransformer = (organization: MicrosoftGraph.Organization) => Promise<GroupEntity | undefined>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"})]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:a,_owner:c.current}}r.Fragment=a,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var v=b.prototype=new _;v.constructor=b,m(v,g.prototype),v.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,a={},u=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,o)&&!x.hasOwnProperty(o)&&(a[o]=r[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:t,type:e,key:u,ref:c,props:a,_owner:S.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return u=u(i=e),e=""===a?"."+R(i,0):a,k(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(u,r,o,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(i=0,a=""===a?".":a+":",k(e))for(var s=0;s<e.length;s++){var f=a+R(c=e[s],s);i+=C(c,r,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)i+=C(c=c.value,r,o,f=a+R(c,s++),u);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function z(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=u,r.PureComponent=b,r.StrictMode=a,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=S.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)j.call(r,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:a,ref:u,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:z}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return P.current.useCallback(e,r)},r.useContext=function(e){return P.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return P.current.useDeferredValue(e)},r.useEffect=function(e,r){return P.current.useEffect(e,r)},r.useId=function(){return P.current.useId()},r.useImperativeHandle=function(e,r,t){return P.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return P.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return P.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return P.current.useMemo(e,r)},r.useReducer=function(e,r,t){return P.current.useReducer(e,r,t)},r.useRef=function(e){return P.current.useRef(e)},r.useState=function(e){return P.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return P.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return P.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||u:a(e),n.createElement(o.Provider,{value:c},r)}}}]);