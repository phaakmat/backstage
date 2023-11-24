/*! For license information please see 6bf08323.f42cd035.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[326463],{12055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(824246),s=n(511151);const o={id:"installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage"},i=void 0,a={id:"features/kubernetes/installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage",source:"@site/../docs/features/kubernetes/installation.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/installation",permalink:"/docs/features/kubernetes/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/kubernetes/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/kubernetes/"},next:{title:"Configuration",permalink:"/docs/features/kubernetes/configuration"}},u={},l=[{value:"Adding the Kubernetes frontend plugin",id:"adding-the-kubernetes-frontend-plugin",level:2},{value:"Adding Kubernetes Backend plugin",id:"adding-kubernetes-backend-plugin",level:2},{value:"Custom cluster discovery",id:"custom-cluster-discovery",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Kubernetes feature is a plugin to Backstage, and it is exposed as a tab when\nviewing entities in the software catalog."}),"\n",(0,r.jsxs)(t.p,{children:["If you haven't setup Backstage already, read the\n",(0,r.jsx)(t.a,{href:"/docs/getting-started/",children:"Getting Started"})," guide."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-kubernetes-frontend-plugin",children:"Adding the Kubernetes frontend plugin"}),"\n",(0,r.jsx)(t.p,{children:"The first step is to add the Kubernetes frontend plugin to your Backstage\napplication."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-kubernetes\n"})}),"\n",(0,r.jsx)(t.p,{children:'Once the package has been installed, you need to import the plugin in your app\nby adding the "Kubernetes" tab to the respective catalog pages.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/catalog/EntityPage.tsx"',children:'/* highlight-add-next-line */\nimport { EntityKubernetesContent } from \'@backstage/plugin-kubernetes\';\n\n// You can add the tab to any number of pages, the service page is shown as an\n// example here\nconst serviceEntityPage = (\n  <EntityLayout>\n    {/* other tabs... */}\n    {/* highlight-add-start */}\n    <EntityLayout.Route path="/kubernetes" title="Kubernetes">\n      <EntityKubernetesContent refreshIntervalMs={30000} />\n    </EntityLayout.Route>\n    {/* highlight-add-end */}\n  </EntityLayout>\n);\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The optional ",(0,r.jsx)(t.code,{children:"refreshIntervalMs"})," property on the ",(0,r.jsx)(t.code,{children:"EntityKubernetesContent"})," defines the interval in which the content automatically refreshes, if not set this will default to 10 seconds."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"That's it! But now, we need the Kubernetes Backend plugin for the frontend to\nwork."}),"\n",(0,r.jsx)(t.h2,{id:"adding-kubernetes-backend-plugin",children:"Adding Kubernetes Backend plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to ",(0,r.jsx)(t.code,{children:"packages/backend"})," of your Backstage app, and install the\n",(0,r.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-kubernetes-backend\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create a file called ",(0,r.jsx)(t.code,{children:"kubernetes.ts"})," inside ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/"})," and\nadd the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\nimport { CatalogClient } from '@backstage/catalog-client';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const catalogApi = new CatalogClient({ discoveryApi: env.discovery });\n  const { router } = await KubernetesBuilder.createBuilder({\n    logger: env.logger,\n    config: env.config,\n    catalogApi,\n    permissions: env.permissions,\n  }).build();\n  return router;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And import the plugin to ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),". There are three lines\nof code you'll need to add, and they should be added near similar code in your\nexisting Backstage backend."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/index.ts"',children:"// ..\n/* highlight-add-next-line */\nimport kubernetes from './plugins/kubernetes';\n\nasync function main() {\n  // ...\n  /* highlight-add-next-line */\n  const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));\n  // ...\n  /* highlight-add-next-line */\n  apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));\n"})}),"\n",(0,r.jsx)(t.p,{children:"That's it! The Kubernetes frontend and backend have now been added to your\nBackstage app."}),"\n",(0,r.jsx)(t.h3,{id:"custom-cluster-discovery",children:"Custom cluster discovery"}),"\n",(0,r.jsxs)(t.p,{children:["If either existing\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/kubernetes/configuration#clusterlocatormethods",children:"cluster locators"}),"\ndon't work for your use-case, it is possible to implement a custom\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Change the following in ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/kubernetes.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import {\n /* highlight-add-next-line */\n  ClusterDetails,\n  KubernetesBuilder,\n  /* highlight-add-next-line */\n  KubernetesClustersSupplier,\n} from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n/* highlight-add-next-line */\nimport { Duration } from 'luxon';\n\n/* highlight-add-start */\nexport class CustomClustersSupplier implements KubernetesClustersSupplier {\n  constructor(private clusterDetails: ClusterDetails[] = []) {}\n\n  static create(refreshInterval: Duration) {\n    const clusterSupplier = new CustomClustersSupplier();\n    // setup refresh, e.g. using a copy of https://github.com/backstage/backstage/blob/master/plugins/search-backend-node/src/runPeriodically.ts\n    runPeriodically(\n      () => clusterSupplier.refreshClusters(),\n      refreshInterval.toMillis(),\n    );\n    return clusterSupplier;\n  }\n\n  async refreshClusters(): Promise<void> {\n    this.clusterDetails = []; // fetch from somewhere\n  }\n\n  async getClusters(): Promise<ClusterDetails[]> {\n    return this.clusterDetails;\n  }\n}\n/* highlight-add-end */\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n\n  /* highlight-remove-next-line */\n  const { router } = await KubernetesBuilder.createBuilder({\n  /* highlight-add-next-line */\n  const builder = await KubernetesBuilder.createBuilder({\n     logger: env.logger,\n     config: env.config,\n  /* highlight-remove-next-line */\n  }).build();\n  /* highlight-add-start */\n  });\n  builder.setClusterSupplier(\n    CustomClustersSupplier.create(Duration.fromObject({ minutes: 60 })),\n  );\n  const { router } = await builder.build();\n  /* highlight-add-end */\n\n  // ..\n  return router;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["After installing the plugins in the code, you'll need to then\n",(0,r.jsx)(t.a,{href:"/docs/features/kubernetes/configuration",children:"configure them"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(t.p,{children:["After installing the plugins in the code, if the Kubernetes information is not\nshowing up, you'll need to ",(0,r.jsx)(t.a,{href:"/docs/features/kubernetes/troubleshooting",children:"troubleshoot it"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||h}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=k.prototype=new m;v.constructor=k,g(v,y.prototype),v.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var s,o={},i=null,a=null;if(null!=t)for(s in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=t[s]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===o[s]&&(o[s]=u[s]);return{$$typeof:n,type:e,key:i,ref:a,props:o,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,s,o,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===o?"."+R(u,0):o,x(i)?(s="",null!=e&&(s=e.replace(E,"$&/")+"/"),P(i,t,s,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(u=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var c=o+R(a=e[l],l);u+=P(a,t,s,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(a=e.next()).done;)u+=P(a=a.value,t,s,c=o+R(a,l++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,n){if(null==e)return e;var r=[],s=0;return P(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},K={transition:null},$={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:K,ReactCurrentOwner:_};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=s,t.Profiler=i,t.PureComponent=k,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!C.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}return{$$typeof:n,type:e.type,key:o,ref:i,props:s,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=K.transition;K.transition={};try{e()}finally{K.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const s=r.createContext({});function o(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:o(e),r.createElement(s.Provider,{value:a},t)}}}]);