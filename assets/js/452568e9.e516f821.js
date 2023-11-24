/*! For license information please see 452568e9.e516f821.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[369223],{389127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(824246),o=t(511151);const c={id:"plugin-jenkins-backend.jenkinsinstanceconfig.name",title:"JenkinsInstanceConfig.name",description:"API reference for JenkinsInstanceConfig.name"},u=void 0,i={id:"reference/plugin-jenkins-backend.jenkinsinstanceconfig.name",title:"JenkinsInstanceConfig.name",description:"API reference for JenkinsInstanceConfig.name",source:"@site/../docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.name.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.jenkinsinstanceconfig.name",permalink:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.name",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.name.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.jenkinsinstanceconfig.name",title:"JenkinsInstanceConfig.name",description:"API reference for JenkinsInstanceConfig.name"}},a={},s=[];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-jenkins-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig",children:(0,r.jsx)(n.code,{children:"JenkinsInstanceConfig"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.name",children:(0,r.jsx)(n.code,{children:"name"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"name: string;\n"})})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,c={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)u.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:i.current}}n.Fragment=c,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function k(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function b(){}function _(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}k.prototype.isReactComponent={},k.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=k.prototype;var g=_.prototype=new b;g.constructor=_,m(g,k.prototype),g.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,r){var o,c={},u=null,i=null;if(null!=n)for(o in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(u=""+n.key),n)v.call(n,o)&&!x.hasOwnProperty(o)&&(c[o]=n[o]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:u,ref:i,props:c,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function $(e,n,o,c,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case r:a=!0}}if(a)return u=u(a=e),e=""===c?"."+R(a,0):c,j(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,n,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),n.push(u)),1;if(a=0,c=""===c?".":c+":",j(e))for(var s=0;s<e.length;s++){var f=c+R(i=e[s],s);a+=$(i,n,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)a+=$(i=i.value,n,o,f=c+R(i,s++),u);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function O(e,n,t){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function I(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null},A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=k,n.Fragment=o,n.Profiler=u,n.PureComponent=_,n.StrictMode=c,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,i=S.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)v.call(n,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==a?a[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:u,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,t){return P.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,t){return P.current.useReducer(e,n,t)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return P.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||u:c(e),r.createElement(o.Provider,{value:i},n)}}}]);