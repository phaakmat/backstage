/*! For license information please see 1cfb605d.a34669da.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[3522],{63937:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=n(824246),o=n(511151);const c={id:"plugin-cicd-statistics.entitycicdstatisticscontent",title:"EntityCicdStatisticsContent",description:"API reference for EntityCicdStatisticsContent"},i=void 0,s={id:"reference/plugin-cicd-statistics.entitycicdstatisticscontent",title:"EntityCicdStatisticsContent",description:"API reference for EntityCicdStatisticsContent",source:"@site/../docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics.entitycicdstatisticscontent",permalink:"/docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics.entitycicdstatisticscontent",title:"EntityCicdStatisticsContent",description:"API reference for EntityCicdStatisticsContent"}},u={},a=[];function f(t){const e=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(e.a,{href:"/docs/reference/plugin-cicd-statistics",children:(0,r.jsx)(e.code,{children:"@backstage/plugin-cicd-statistics"})})," > ",(0,r.jsx)(e.a,{href:"/docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent",children:(0,r.jsx)(e.code,{children:"EntityCicdStatisticsContent"})})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'EntityCicdStatisticsContent: typeof import("./entity-page").EntityPageCicdCharts\n'})})]})}const l=function(t={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(f,t)})):f(t)}},371426:(t,e,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var r,c={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(f=e.ref),e)i.call(e,r)&&!u.hasOwnProperty(r)&&(c[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===c[r]&&(c[r]=e[r]);return{$$typeof:o,type:t,key:a,ref:f,props:c,_owner:s.current}}e.Fragment=c,e.jsx=a,e.jsxs=a},541535:(t,e)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function m(t,e,n){this.props=t,this.context=e,this.refs=_,this.updater=n||y}function b(){}function v(t,e,n){this.props=t,this.context=e,this.refs=_,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},b.prototype=m.prototype;var g=v.prototype=new b;g.constructor=v,h(g,m.prototype),g.isPureReactComponent=!0;var S=Array.isArray,C=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function k(t,e,r){var o,c={},i=null,s=null;if(null!=e)for(o in void 0!==e.ref&&(s=e.ref),void 0!==e.key&&(i=""+e.key),e)C.call(e,o)&&!j.hasOwnProperty(o)&&(c[o]=e[o]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];c.children=a}if(t&&t.defaultProps)for(o in u=t.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:n,type:t,key:i,ref:s,props:c,_owner:E.current}}function x(t){return"object"==typeof t&&null!==t&&t.$$typeof===n}var w=/\/+/g;function R(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function $(t,e,o,c,i){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var u=!1;if(null===t)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=t),t=""===c?"."+R(u,0):c,S(i)?(o="",null!=t&&(o=t.replace(w,"$&/")+"/"),$(i,e,o,"",(function(t){return t}))):null!=i&&(x(i)&&(i=function(t,e){return{$$typeof:n,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+t)),e.push(i)),1;if(u=0,c=""===c?".":c+":",S(t))for(var a=0;a<t.length;a++){var f=c+R(s=t[a],a);u+=$(s,e,o,f,i)}else if(f=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=d&&t[d]||t["@@iterator"])?t:null}(t),"function"==typeof f)for(t=f.call(t),a=0;!(s=t.next()).done;)u+=$(s=s.value,e,o,f=c+R(s,a++),i);else if("object"===s)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return u}function O(t,e,n){if(null==t)return t;var r=[],o=0;return $(t,r,"","",(function(t){return e.call(n,t,o++)})),r}function P(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};e.Children={map:O,forEach:function(t,e,n){O(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return O(t,(function(){e++})),e},toArray:function(t){return O(t,(function(t){return t}))||[]},only:function(t){if(!x(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=m,e.Fragment=o,e.Profiler=i,e.PureComponent=v,e.StrictMode=c,e.Suspense=f,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,e.cloneElement=function(t,e,r){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=h({},t.props),c=t.key,i=t.ref,s=t._owner;if(null!=e){if(void 0!==e.ref&&(i=e.ref,s=E.current),void 0!==e.key&&(c=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(a in e)C.call(e,a)&&!j.hasOwnProperty(a)&&(o[a]=void 0===e[a]&&void 0!==u?u[a]:e[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){u=Array(a);for(var f=0;f<a;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:n,type:t.type,key:c,ref:i,props:o,_owner:s}},e.createContext=function(t){return(t={$$typeof:u,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:t},t.Consumer=t},e.createElement=k,e.createFactory=function(t){var e=k.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:a,render:t}},e.isValidElement=x,e.lazy=function(t){return{$$typeof:p,_payload:{_status:-1,_result:t},_init:P}},e.memo=function(t,e){return{$$typeof:l,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=T.transition;T.transition={};try{t()}finally{T.transition=e}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(t,e){return I.current.useCallback(t,e)},e.useContext=function(t){return I.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return I.current.useDeferredValue(t)},e.useEffect=function(t,e){return I.current.useEffect(t,e)},e.useId=function(){return I.current.useId()},e.useImperativeHandle=function(t,e,n){return I.current.useImperativeHandle(t,e,n)},e.useInsertionEffect=function(t,e){return I.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return I.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return I.current.useMemo(t,e)},e.useReducer=function(t,e,n){return I.current.useReducer(t,e,n)},e.useRef=function(t){return I.current.useRef(t)},e.useState=function(t){return I.current.useState(t)},e.useSyncExternalStore=function(t,e,n){return I.current.useSyncExternalStore(t,e,n)},e.useTransition=function(){return I.current.useTransition()},e.version="18.2.0"},827378:(t,e,n)=>{t.exports=n(541535)},824246:(t,e,n)=>{t.exports=n(371426)},511151:(t,e,n)=>{n.d(e,{Zo:()=>s,ah:()=>c});var r=n(667294);const o=r.createContext({});function c(t){const e=r.useContext(o);return r.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const i={};function s({components:t,children:e,disableParentContext:n}){let s;return s=n?"function"==typeof t?t({}):t||i:c(t),r.createElement(o.Provider,{value:s},e)}}}]);