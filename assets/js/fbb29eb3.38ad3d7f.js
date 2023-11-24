/*! For license information please see fbb29eb3.38ad3d7f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[477661],{400459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(824246),a=t(511151);const o={id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"},i=void 0,s={id:"reference/plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap",permalink:"/docs/reference/plugin-catalog-backend-module-ldap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"}},l={},c=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})]}),"\n",(0,r.jsx)(n.p,{children:"A Backstage catalog backend module that helps integrate towards LDAP"}),"\n",(0,r.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Class"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapclient",children:"LdapClient"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.p,{children:["Basic wrapper for the ",(0,r.jsx)(n.code,{children:"ldapjs"})," library."]}),(0,r.jsx)(n.p,{children:"Helps out with promisifying calls, paging, binding etc."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"})}),(0,r.jsx)(n.td,{children:"Reads user and group entries out of an LDAP service, and provides them as User and Group entities for the catalog."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:"LdapOrgReaderProcessor"})}),(0,r.jsx)(n.td,{children:"Extracts teams and users out of an LDAP server."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",children:"defaultGroupTransformer(vendor, config, entry)"})}),(0,r.jsx)(n.td,{children:"The default implementation of the transformation from an LDAP entry to a Group entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultusertransformer",children:"defaultUserTransformer(vendor, config, entry)"})}),(0,r.jsx)(n.td,{children:"The default implementation of the transformation from an LDAP entry to a User entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.mapstringattr",children:"mapStringAttr(entry, vendor, attributeName, setter)"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"Maps a single-valued attribute to a consumer."}),(0,r.jsx)(n.p,{children:"This helper can be useful when implementing a user or group transformer."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldapconfig",children:"readLdapConfig(config)"})}),(0,r.jsx)(n.td,{children:"Parses configuration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",children:"readLdapOrg(client, userConfig, groupConfig, options)"})}),(0,r.jsx)(n.td,{children:"Reads users and groups out of an LDAP provider."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Interface"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovideroptions",children:"LdapOrgEntityProviderOptions"})}),(0,r.jsxs)(n.td,{children:["Options for ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"}),"."]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_dn_annotation",children:"LDAP_DN_ANNOTATION"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"The name of an entity annotation, that references the DN of the LDAP object it was ingested from."}),(0,r.jsx)(n.p,{children:"The DN is the fully qualified name that identifies the item; for example, for an item with the DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with that full string as its value."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",children:"LDAP_RDN_ANNOTATION"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"The name of an entity annotation, that references the RDN of the LDAP object it was ingested from."}),(0,r.jsx)(n.p,{children:'The RDN is the name of the leftmost attribute that identifies the item; for example, for an item with the fully qualified DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with the value "john".'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_uuid_annotation",children:"LDAP_UUID_ANNOTATION"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"The name of an entity annotation, that references the UUID of the LDAP object it was ingested from."}),(0,r.jsx)(n.p,{children:"The UUID is the globally unique ID that identifies the item; for example, for an item with the UUID 76ef928a-b251-1037-9840-d78227f36a7e, the generated entity would have this annotation, with that full string as its value."})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type Alias"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.bindconfig",children:"BindConfig"})}),(0,r.jsx)(n.td,{children:"The settings to use for the a command."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"})}),(0,r.jsx)(n.td,{children:"The settings that govern the reading and interpretation of groups."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"})}),(0,r.jsx)(n.td,{children:"Customize the ingested Group entity"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapproviderconfig",children:"LdapProviderConfig"})}),(0,r.jsx)(n.td,{children:"The configuration parameters for a single LDAP provider."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"})}),(0,r.jsx)(n.td,{children:"An LDAP Vendor handles unique nuances between different vendors."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.tlsconfig",children:"TLSConfig"})}),(0,r.jsx)(n.td,{children:"TLS settings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"})}),(0,r.jsx)(n.td,{children:"The settings that govern the reading and interpretation of users."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"})}),(0,r.jsx)(n.td,{children:"Customize the ingested User entity"})]})]})]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},371426:(e,n,t)=>{var r=t(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,j={};function x(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||p}function m(){}function y(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=x.prototype;var b=y.prototype=new m;b.constructor=y,g(b,x.prototype),b.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function D(e,n,r){var a,o={},i=null,s=null;if(null!=n)for(a in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)k.call(n,a)&&!w.hasOwnProperty(a)&&(o[a]=n[a]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:t,type:e,key:i,ref:s,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function T(e,n,a,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case r:l=!0}}if(l)return i=i(l=e),e=""===o?"."+C(l,0):o,v(i)?(a="",null!=e&&(a=e.replace(S,"$&/")+"/"),T(i,n,a,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),n.push(i)),1;if(l=0,o=""===o?".":o+":",v(e))for(var c=0;c<e.length;c++){var d=o+C(s=e[c],c);l+=T(s,n,a,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=T(s=s.value,n,a,d=o+C(s,c++),i);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,n,t){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function A(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},E={transition:null},L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:E,ReactCurrentOwner:_};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=a,n.Profiler=i,n.PureComponent=y,n.StrictMode=o,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,s=_.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)k.call(n,c)&&!w.hasOwnProperty(c)&&(a[c]=void 0===n[c]&&void 0!==l?l[c]:n[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:t,type:e.type,key:o,ref:i,props:a,_owner:s}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=D,n.createFactory=function(e){var n=D.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=E.transition;E.transition={};try{e()}finally{E.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return R.current.useCallback(e,n)},n.useContext=function(e){return R.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return R.current.useDeferredValue(e)},n.useEffect=function(e,n){return R.current.useEffect(e,n)},n.useId=function(){return R.current.useId()},n.useImperativeHandle=function(e,n,t){return R.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return R.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return R.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return R.current.useMemo(e,n)},n.useReducer=function(e,n,t){return R.current.useReducer(e,n,t)},n.useRef=function(e){return R.current.useRef(e)},n.useState=function(e){return R.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return R.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return R.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(667294);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:o(e),r.createElement(a.Provider,{value:s},n)}}}]);