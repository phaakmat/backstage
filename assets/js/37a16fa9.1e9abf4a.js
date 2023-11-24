/*! For license information please see 37a16fa9.1e9abf4a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[404236],{435297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(824246),a=n(511151);const s={id:"v1.0.0",title:"v1.0.0",description:"Backstage Release v1.0.0"},c=void 0,o={id:"releases/v1.0.0",title:"v1.0.0",description:"Backstage Release v1.0.0",source:"@site/../docs/releases/v1.0.0.md",sourceDirName:"releases",slug:"/releases/v1.0.0",permalink:"/docs/releases/v1.0.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.0.0.md",tags:[],version:"current",frontMatter:{id:"v1.0.0",title:"v1.0.0",description:"Backstage Release v1.0.0"},sidebar:"releases",previous:{title:"v1.1.0",permalink:"/docs/releases/v1.1.0"}},i={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Packages Reaching 1.0",id:"packages-reaching-10",level:3},{value:"Backstage Core",id:"backstage-core",level:4},{value:"Software Catalog",id:"software-catalog",level:4},{value:"Software Templates",id:"software-templates",level:4},{value:"TechDocs",id:"techdocs",level:4},{value:"Switch from <code>@vscode/sqlite3</code> to <code>better-sqlite3</code>",id:"switch-from-vscodesqlite3-to-better-sqlite3",level:3},{value:"New plugin: Google Calendar",id:"new-plugin-google-calendar",level:3},{value:"Scaffolder Template Preview",id:"scaffolder-template-preview",level:3},{value:"Package renames:",id:"package-renames",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.0.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"packages-reaching-10",children:"Packages Reaching 1.0"}),"\n",(0,r.jsxs)(t.p,{children:["Several packages have reached version 1.0, you can read more about the effect of this in our ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"backstage-core",children:"Backstage Core"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/app-defaults",children:(0,r.jsx)(t.code,{children:"@backstage/app-defaults"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/config-loader",children:(0,r.jsx)(t.code,{children:"@backstage/config-loader"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/config",children:(0,r.jsx)(t.code,{children:"@backstage/config"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/core-app-api",children:(0,r.jsx)(t.code,{children:"@backstage/core-app-api"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/core-plugin-api",children:(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/dev-utils",children:(0,r.jsx)(t.code,{children:"@backstage/dev-utils"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/errors",children:(0,r.jsx)(t.code,{children:"@backstage/errors"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/integration-react",children:(0,r.jsx)(t.code,{children:"@backstage/integration-react"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/test-utils"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/types",children:(0,r.jsx)(t.code,{children:"@backstage/types"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/version-bridge",children:(0,r.jsx)(t.code,{children:"@backstage/version-bridge"})})}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"software-catalog",children:"Software Catalog"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/catalog-model",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-model"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog-common",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-common"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog-react",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-react"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})})}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"software-templates",children:"Software Templates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-common",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-common"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder"})})}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"techdocs",children:"TechDocs"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-backend"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@techdocs/cli",children:(0,r.jsx)(t.code,{children:"@techdocs/cli"})})}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"switch-from-vscodesqlite3-to-better-sqlite3",children:["Switch from ",(0,r.jsx)(t.code,{children:"@vscode/sqlite3"})," to ",(0,r.jsx)(t.code,{children:"better-sqlite3"})]}),"\n",(0,r.jsxs)(t.p,{children:["The default SQLite3 driver has been switched to ",(0,r.jsx)(t.a,{href:"https://github.com/JoshuaWise/better-sqlite3",children:"better-sqlite3"}),", as many users were running into issues with installation of ",(0,r.jsx)(t.code,{children:"@vscode/sqlite3"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"new-plugin-google-calendar",children:"New plugin: Google Calendar"}),"\n",(0,r.jsxs)(t.p,{children:["The new ",(0,r.jsx)(t.code,{children:"@backstage/plugin-gcalendar"})," plugin provides a home page widget that shows your Google Calendar events. Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/alexrybch",children:"@alexrybch"})," (",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/9719",children:"#9719"}),")"]}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder-template-preview",children:"Scaffolder Template Preview"}),"\n",(0,r.jsxs)(t.p,{children:["The scaffolder page now provides a editor and preview page for templates, where you can see a live preview of the template form. The preview page can be found under the ",(0,r.jsx)(t.code,{children:"/preview"})," sub route, typically at ",(0,r.jsx)(t.code,{children:"/create/preview"}),". Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," (",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/9841",children:"#9841"}),")"]}),"\n",(0,r.jsx)(t.h3,{id:"package-renames",children:"Package renames:"}),"\n",(0,r.jsx)(t.p,{children:"The following packages have been renamed, be sure to update your usage:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/search-common"})," -> ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-common"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/techdocs-common"})," -> ",(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/releases/tag/v1.0.0",children:"Changelog"})," for this release"]}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},371426:(e,t,n)=>{var r=n(827378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,j={};function m(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||f}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var x=b.prototype=new k;x.constructor=b,g(x,m.prototype),x.isPureReactComponent=!0;var w=Array.isArray,v=Object.prototype.hasOwnProperty,y={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,s={},c=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,a)&&!_.hasOwnProperty(a)&&(s[a]=t[a]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===s[a]&&(s[a]=i[a]);return{$$typeof:n,type:e,key:c,ref:o,props:s,_owner:y.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,s,c){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return c=c(i=e),e=""===s?"."+E(i,0):s,w(c)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),P(c,t,a,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,a+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(i=0,s=""===s?".":s+":",w(e))for(var l=0;l<e.length;l++){var d=s+E(o=e[l],l);i+=P(o,t,a,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(o=e.next()).done;)i+=P(o=o.value,t,a,d=s+E(o,l++),c);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},B={transition:null},q={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:B,ReactCurrentOwner:y};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=a,t.Profiler=c,t.PureComponent=b,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),s=e.key,c=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,o=y.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)v.call(t,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){i=Array(l);for(var d=0;d<l;d++)i[d]=arguments[d+2];a.children=i}return{$$typeof:n,type:e.type,key:s,ref:c,props:a,_owner:o}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var r=n(667294);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:s(e),r.createElement(a.Provider,{value:o},t)}}}]);