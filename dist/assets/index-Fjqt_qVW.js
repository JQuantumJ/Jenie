function Rm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Nm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Wf={exports:{}},al={},Uf={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),Am=Symbol.for("react.portal"),Dm=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),Bm=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),Um=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),Qm=Symbol.for("react.memo"),Gm=Symbol.for("react.lazy"),wc=Symbol.iterator;function Vm(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var Hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,Gf={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Hf}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vf(){}Vf.prototype=jr.prototype;function qa(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Hf}var Ya=qa.prototype=new Vf;Ya.constructor=qa;Qf(Ya,jr.prototype);Ya.isPureReactComponent=!0;var Sc=Array.isArray,Kf=Object.prototype.hasOwnProperty,Xa={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Kf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Si,type:e,key:o,ref:l,props:i,_owner:Xa.current}}function Km(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Za(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function qm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jc=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qm(""+e.key):t.toString(36)}function Xi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Si:case Am:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Wl(l,0):r,Sc(i)?(n="",e!=null&&(n=e.replace(jc,"$&/")+"/"),Xi(i,t,n,"",function(c){return c})):i!=null&&(Za(i)&&(i=Km(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(jc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Sc(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Wl(o,a);l+=Xi(o,t,n,u,i)}else if(u=Vm(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Wl(o,a++),l+=Xi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Pi(e,t,n){if(e==null)return e;var r=[],i=0;return Xi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Zi={transition:null},Xm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Zi,ReactCurrentOwner:Xa};H.Children={map:Pi,forEach:function(e,t,n){Pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pi(e,function(){t++}),t},toArray:function(e){return Pi(e,function(t){return t})||[]},only:function(e){if(!Za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=jr;H.Fragment=Dm;H.Profiler=Bm;H.PureComponent=qa;H.StrictMode=Fm;H.Suspense=Hm;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Xa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Kf.call(t,u)&&!qf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Si,type:e.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Wm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$m,_context:e},e.Consumer=e};H.createElement=Yf;H.createFactory=function(e){var t=Yf.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Um,render:e}};H.isValidElement=Za;H.lazy=function(e){return{$$typeof:Gm,_payload:{_status:-1,_result:e},_init:Ym}};H.memo=function(e,t){return{$$typeof:Qm,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Zi.transition;Zi.transition={};try{e()}finally{Zi.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ie.current.useCallback(e,t)};H.useContext=function(e){return Ie.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ie.current.useEffect(e,t)};H.useId=function(){return Ie.current.useId()};H.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ie.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};H.useRef=function(e){return Ie.current.useRef(e)};H.useState=function(e){return Ie.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ie.current.useTransition()};H.version="18.2.0";Uf.exports=H;var b=Uf.exports;const fe=$f(b),Zm=Rm({__proto__:null,default:fe},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=b,eg=Symbol.for("react.element"),tg=Symbol.for("react.fragment"),ng=Object.prototype.hasOwnProperty,rg=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ig={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ng.call(t,r)&&!ig.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:eg,type:e,key:o,ref:l,props:i,_owner:rg.current}}al.Fragment=tg;al.jsx=Xf;al.jsxs=Xf;Wf.exports=al;var s=Wf.exports,Ls={},Zf={exports:{}},Ke={},Jf={exports:{}},ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,M){var B=I.length;I.push(M);e:for(;0<B;){var Q=B-1>>>1,V=I[Q];if(0<i(V,M))I[Q]=M,I[B]=V,B=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var M=I[0],B=I.pop();if(B!==M){I[0]=B;e:for(var Q=0,V=I.length,Oe=V>>>1;Q<Oe;){var $e=2*(Q+1)-1,Me=I[$e],We=$e+1,xt=I[We];if(0>i(Me,B))We<V&&0>i(xt,Me)?(I[Q]=xt,I[We]=B,Q=We):(I[Q]=Me,I[$e]=B,Q=$e);else if(We<V&&0>i(xt,B))I[Q]=xt,I[We]=B,Q=We;else break e}}return M}function i(I,M){var B=I.sortIndex-M.sortIndex;return B!==0?B:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],h=1,f=null,g=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=I)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function w(I){if(v=!1,m(I),!x)if(n(u)!==null)x=!0,le(k);else{var M=n(c);M!==null&&we(w,M.startTime-I)}}function k(I,M){x=!1,v&&(v=!1,p(T),T=-1),y=!0;var B=g;try{for(m(M),f=n(u);f!==null&&(!(f.expirationTime>M)||I&&!R());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var V=Q(f.expirationTime<=M);M=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(u)&&r(u),m(M)}else r(u);f=n(u)}if(f!==null)var Oe=!0;else{var $e=n(c);$e!==null&&we(w,$e.startTime-M),Oe=!1}return Oe}finally{f=null,g=B,y=!1}}var C=!1,E=null,T=-1,O=5,_=-1;function R(){return!(e.unstable_now()-_<O)}function N(){if(E!==null){var I=e.unstable_now();_=I;var M=!0;try{M=E(!0,I)}finally{M?A():(C=!1,E=null)}}else C=!1}var A;if(typeof d=="function")A=function(){d(N)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,it=F.port2;F.port1.onmessage=N,A=function(){it.postMessage(null)}}else A=function(){S(N,0)};function le(I){E=I,C||(C=!0,A())}function we(I,M){T=S(function(){I(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,le(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var B=g;g=M;try{return I()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=g;g=I;try{return M()}finally{g=B}},e.unstable_scheduleCallback=function(I,M,B){var Q=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=B+V,I={id:h++,callback:M,priorityLevel:I,startTime:B,expirationTime:V,sortIndex:-1},B>Q?(I.sortIndex=B,t(c,I),n(u)===null&&I===n(c)&&(v?(p(T),T=-1):v=!0,we(w,B-Q))):(I.sortIndex=V,t(u,I),x||y||(x=!0,le(k))),I},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(I){var M=g;return function(){var B=g;g=M;try{return I.apply(this,arguments)}finally{g=B}}}})(ep);Jf.exports=ep;var og=Jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=b,Ve=og;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var np=new Set,Jr={};function En(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)np.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,lg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Cc={};function sg(e){return Ms.call(Cc,e)?!0:Ms.call(kc,e)?!1:lg.test(e)?Cc[e]=!0:(kc[e]=!0,!1)}function ag(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ug(e,t,n,r){if(t===null||typeof t>"u"||ag(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ja=/[\-:]([a-z])/g;function eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ja,eu);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ja,eu);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ja,eu);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function tu(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ug(t,n,i,r)&&(n=null),r||i===null?sg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ti=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),rp=Symbol.for("react.provider"),ip=Symbol.for("react.context"),ru=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),As=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),bc=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ul;function Dr(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Hl=!1;function Ql(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function cg(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Ln:return"Portal";case Rs:return"Profiler";case nu:return"StrictMode";case Ns:return"Suspense";case As:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ip:return(e.displayName||"Context")+".Consumer";case rp:return(e._context.displayName||"Context")+".Provider";case ru:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:Ds(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Ds(e(t))}catch{}}return null}function dg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ds(t);case 8:return t===nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fg(e){var t=lp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=fg(e))}function sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ap(e,t){t=t.checked,t!=null&&tu(e,"checked",t,!1)}function Bs(e,t){ap(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$s(e,t.type,n):t.hasOwnProperty("defaultValue")&&$s(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $s(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Fr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function up(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ii,dp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ii=Ii||document.createElement("div"),Ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function fp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function pp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hg=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(hg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,Vn=null,Kn=null;function Tc(e){if(e=Ci(e)){if(typeof Vs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=pl(t),Vs(e.stateNode,e.type,t))}}function hp(e){Vn?Kn?Kn.push(e):Kn=[e]:Vn=e}function mp(){if(Vn){var e=Vn,t=Kn;if(Kn=Vn=null,Tc(e),t)for(e=0;e<t.length;e++)Tc(t[e])}}function gp(e,t){return e(t)}function vp(){}var Gl=!1;function yp(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return gp(e,t,n)}finally{Gl=!1,(Vn!==null||Kn!==null)&&(vp(),mp())}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ks=!1;if(Ot)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Ks=!1}function mg(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Hr=!1,yo=null,xo=!1,qs=null,gg={onError:function(e){Hr=!0,yo=e}};function vg(e,t,n,r,i,o,l,a,u){Hr=!1,yo=null,mg.apply(gg,arguments)}function yg(e,t,n,r,i,o,l,a,u){if(vg.apply(this,arguments),Hr){if(Hr){var c=yo;Hr=!1,yo=null}else throw Error(P(198));xo||(xo=!0,qs=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(_n(e)!==e)throw Error(P(188))}function xg(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zc(i),e;if(o===r)return zc(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function wp(e){return e=xg(e),e!==null?Sp(e):null}function Sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sp(e);if(t!==null)return t;e=e.sibling}return null}var jp=Ve.unstable_scheduleCallback,Ic=Ve.unstable_cancelCallback,wg=Ve.unstable_shouldYield,Sg=Ve.unstable_requestPaint,ae=Ve.unstable_now,jg=Ve.unstable_getCurrentPriorityLevel,lu=Ve.unstable_ImmediatePriority,kp=Ve.unstable_UserBlockingPriority,wo=Ve.unstable_NormalPriority,kg=Ve.unstable_LowPriority,Cp=Ve.unstable_IdlePriority,ul=null,vt=null;function Cg(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:_g,bg=Math.log,Eg=Math.LN2;function _g(e){return e>>>=0,e===0?32:31-(bg(e)/Eg|0)|0}var Li=64,Mi=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Br(a):(o&=l,o!==0&&(r=Br(o)))}else l=n&~i,l!==0?r=Br(l):o!==0&&(r=Br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function Og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ut(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=Og(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bp(){var e=Li;return Li<<=1,!(Li&4194240)&&(Li=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Tg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function Ep(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,au,Op,Pp,Tp,Xs=!1,Ri=[],Ht=null,Qt=null,Gt=null,ni=new Map,ri=new Map,Ft=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function zr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ci(t),t!==null&&au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ig(e,t,n,r,i){switch(t){case"focusin":return Ht=zr(Ht,e,t,n,r,i),!0;case"dragenter":return Qt=zr(Qt,e,t,n,r,i),!0;case"mouseover":return Gt=zr(Gt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ni.set(o,zr(ni.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ri.set(o,zr(ri.get(o)||null,e,t,n,r,i)),!0}return!1}function zp(e){var t=un(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=xp(n),t!==null){e.blockedOn=t,Tp(e.priority,function(){Op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=Ci(n),t!==null&&au(t),e.blockedOn=n,!1;t.shift()}return!0}function Mc(e,t,n){Ji(e)&&n.delete(t)}function Lg(){Xs=!1,Ht!==null&&Ji(Ht)&&(Ht=null),Qt!==null&&Ji(Qt)&&(Qt=null),Gt!==null&&Ji(Gt)&&(Gt=null),ni.forEach(Mc),ri.forEach(Mc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Lg)))}function ii(e){function t(i){return Ir(i,e)}if(0<Ri.length){Ir(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&Ir(Ht,e),Qt!==null&&Ir(Qt,e),Gt!==null&&Ir(Gt,e),ni.forEach(t),ri.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)zp(n),n.blockedOn===null&&Ft.shift()}var qn=It.ReactCurrentBatchConfig,jo=!0;function Mg(e,t,n,r){var i=q,o=qn.transition;qn.transition=null;try{q=1,uu(e,t,n,r)}finally{q=i,qn.transition=o}}function Rg(e,t,n,r){var i=q,o=qn.transition;qn.transition=null;try{q=4,uu(e,t,n,r)}finally{q=i,qn.transition=o}}function uu(e,t,n,r){if(jo){var i=Zs(e,t,n,r);if(i===null)rs(e,t,r,ko,n),Lc(e,r);else if(Ig(i,e,t,n,r))r.stopPropagation();else if(Lc(e,r),t&4&&-1<zg.indexOf(e)){for(;i!==null;){var o=Ci(i);if(o!==null&&_p(o),o=Zs(e,t,n,r),o===null&&rs(e,t,r,ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rs(e,t,r,null,n)}}var ko=null;function Zs(e,t,n,r){if(ko=null,e=ou(r),e=un(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function Ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jg()){case lu:return 1;case kp:return 4;case wo:case kg:return 16;case Cp:return 536870912;default:return 16}default:return 16}}var $t=null,cu=null,eo=null;function Lp(){if(eo)return eo;var e,t=cu,n=t.length,r,i="value"in $t?$t.value:$t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Rc(){return!1}function qe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:Rc,this.isPropagationStopped=Rc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=qe(kr),ki=oe({},kr,{view:0,detail:0}),Ng=qe(ki),Kl,ql,Lr,cl=oe({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Kl=e.screenX-Lr.screenX,ql=e.screenY-Lr.screenY):ql=Kl=0,Lr=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Nc=qe(cl),Ag=oe({},cl,{dataTransfer:0}),Dg=qe(Ag),Fg=oe({},ki,{relatedTarget:0}),Yl=qe(Fg),Bg=oe({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=qe(Bg),Wg=oe({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ug=qe(Wg),Hg=oe({},kr,{data:0}),Ac=qe(Hg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vg[e])?!!t[e]:!1}function fu(){return Kg}var qg=oe({},ki,{key:function(e){if(e.key){var t=Qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yg=qe(qg),Xg=oe({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=qe(Xg),Zg=oe({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Jg=qe(Zg),e1=oe({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=qe(e1),n1=oe({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=qe(n1),i1=[9,13,27,32],pu=Ot&&"CompositionEvent"in window,Qr=null;Ot&&"documentMode"in document&&(Qr=document.documentMode);var o1=Ot&&"TextEvent"in window&&!Qr,Mp=Ot&&(!pu||Qr&&8<Qr&&11>=Qr),Fc=" ",Bc=!1;function Rp(e,t){switch(e){case"keyup":return i1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function l1(e,t){switch(e){case"compositionend":return Np(t);case"keypress":return t.which!==32?null:(Bc=!0,Fc);case"textInput":return e=t.data,e===Fc&&Bc?null:e;default:return null}}function s1(e,t){if(Rn)return e==="compositionend"||!pu&&Rp(e,t)?(e=Lp(),eo=cu=$t=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mp&&t.locale!=="ko"?null:t.data;default:return null}}var a1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a1[e.type]:t==="textarea"}function Ap(e,t,n,r){hp(r),t=Co(t,"onChange"),0<t.length&&(n=new du("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,oi=null;function u1(e){Kp(e,0)}function dl(e){var t=Dn(e);if(sp(t))return e}function c1(e,t){if(e==="change")return t}var Dp=!1;if(Ot){var Xl;if(Ot){var Zl="oninput"in document;if(!Zl){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),Zl=typeof Wc.oninput=="function"}Xl=Zl}else Xl=!1;Dp=Xl&&(!document.documentMode||9<document.documentMode)}function Uc(){Gr&&(Gr.detachEvent("onpropertychange",Fp),oi=Gr=null)}function Fp(e){if(e.propertyName==="value"&&dl(oi)){var t=[];Ap(t,oi,e,ou(e)),yp(u1,t)}}function d1(e,t,n){e==="focusin"?(Uc(),Gr=t,oi=n,Gr.attachEvent("onpropertychange",Fp)):e==="focusout"&&Uc()}function f1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(oi)}function p1(e,t){if(e==="click")return dl(t)}function h1(e,t){if(e==="input"||e==="change")return dl(t)}function m1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:m1;function li(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var n=Hc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hc(n)}}function Bp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $p(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g1(e){var t=$p(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bp(n.ownerDocument.documentElement,n)){if(r!==null&&hu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qc(n,o);var l=Qc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var v1=Ot&&"documentMode"in document&&11>=document.documentMode,Nn=null,Js=null,Vr=null,ea=!1;function Gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||Nn==null||Nn!==vo(r)||(r=Nn,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&li(Vr,r)||(Vr=r,r=Co(Js,"onSelect"),0<r.length&&(t=new du("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Jl={},Wp={};Ot&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function fl(e){if(Jl[e])return Jl[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wp)return Jl[e]=t[n];return e}var Up=fl("animationend"),Hp=fl("animationiteration"),Qp=fl("animationstart"),Gp=fl("transitionend"),Vp=new Map,Vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Vp.set(e,t),En(t,[e])}for(var es=0;es<Vc.length;es++){var ts=Vc[es],y1=ts.toLowerCase(),x1=ts[0].toUpperCase()+ts.slice(1);tn(y1,"on"+x1)}tn(Up,"onAnimationEnd");tn(Hp,"onAnimationIteration");tn(Qp,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Gp,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yg(r,t,void 0,e),e.currentTarget=null}function Kp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Kc(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Kc(i,a,c),o=u}}}if(xo)throw e=qs,xo=!1,qs=null,e}function X(e,t){var n=t[oa];n===void 0&&(n=t[oa]=new Set);var r=e+"__bubble";n.has(r)||(qp(t,e,2,!1),n.add(r))}function ns(e,t,n){var r=0;t&&(r|=4),qp(n,e,r,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Di]){e[Di]=!0,np.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||ns(n,!1,e),ns(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,ns("selectionchange",!1,t))}}function qp(e,t,n,r){switch(Ip(t)){case 1:var i=Mg;break;case 4:i=Rg;break;default:i=uu}n=i.bind(null,t,n,e),i=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=un(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}yp(function(){var c=o,h=ou(n),f=[];e:{var g=Vp.get(e);if(g!==void 0){var y=du,x=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":y=Yg;break;case"focusin":x="focus",y=Yl;break;case"focusout":x="blur",y=Yl;break;case"beforeblur":case"afterblur":y=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Jg;break;case Up:case Hp:case Qp:y=$g;break;case Gp:y=t1;break;case"scroll":y=Ng;break;case"wheel":y=r1;break;case"copy":case"cut":case"paste":y=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Dc}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ti(d,p),w!=null&&v.push(ai(d,w,m)))),S)break;d=d.return}0<v.length&&(g=new y(g,x,null,n,h),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Gs&&(x=n.relatedTarget||n.fromElement)&&(un(x)||x[Pt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?un(x):null,x!==null&&(S=_n(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=Nc,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Dc,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=y==null?g:Dn(y),m=x==null?g:Dn(x),g=new v(w,d+"leave",y,n,h),g.target=S,g.relatedTarget=m,w=null,un(h)===c&&(v=new v(p,d+"enter",x,n,h),v.target=m,v.relatedTarget=S,w=v),S=w,y&&x)t:{for(v=y,p=x,d=0,m=v;m;m=Pn(m))d++;for(m=0,w=p;w;w=Pn(w))m++;for(;0<d-m;)v=Pn(v),d--;for(;0<m-d;)p=Pn(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Pn(v),p=Pn(p)}v=null}else v=null;y!==null&&qc(f,g,y,v,!1),x!==null&&S!==null&&qc(f,S,x,v,!0)}}e:{if(g=c?Dn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=c1;else if($c(g))if(Dp)k=h1;else{k=f1;var C=d1}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=p1);if(k&&(k=k(e,c))){Ap(f,k,n,h);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&$s(g,"number",g.value)}switch(C=c?Dn(c):window,e){case"focusin":($c(C)||C.contentEditable==="true")&&(Nn=C,Js=c,Vr=null);break;case"focusout":Vr=Js=Nn=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,Gc(f,n,h);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":Gc(f,n,h)}var E;if(pu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rn?Rp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Mp&&n.locale!=="ko"&&(Rn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rn&&(E=Lp()):($t=h,cu="value"in $t?$t.value:$t.textContent,Rn=!0)),C=Co(c,T),0<C.length&&(T=new Ac(T,e,null,n,h),f.push({event:T,listeners:C}),E?T.data=E:(E=Np(n),E!==null&&(T.data=E)))),(E=o1?l1(e,n):s1(e,n))&&(c=Co(c,"onBeforeInput"),0<c.length&&(h=new Ac("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}Kp(f,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ti(e,n),o!=null&&r.unshift(ai(e,o,i)),o=ti(e,t),o!=null&&r.push(ai(e,o,i))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ti(n,o),u!=null&&l.unshift(ai(n,u,a))):i||(u=ti(n,o),u!=null&&l.push(ai(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var S1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(S1,`
`).replace(j1,"")}function Fi(e,t,n){if(t=Yc(t),Yc(e)!==t&&n)throw Error(P(425))}function bo(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,C1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(e){return Xc.resolve(null).then(e).catch(b1)}:ia;function b1(e){setTimeout(function(){throw e})}function is(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ii(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Cr,ui="__reactProps$"+Cr,Pt="__reactContainer$"+Cr,oa="__reactEvents$"+Cr,E1="__reactListeners$"+Cr,_1="__reactHandles$"+Cr;function un(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zc(e);e!==null;){if(n=e[gt])return n;e=Zc(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){return e=e[gt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function pl(e){return e[ui]||null}var la=[],Fn=-1;function nn(e){return{current:e}}function J(e){0>Fn||(e.current=la[Fn],la[Fn]=null,Fn--)}function Y(e,t){Fn++,la[Fn]=e.current,e.current=t}var en={},_e=nn(en),De=nn(!1),vn=en;function nr(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Eo(){J(De),J(_e)}function Jc(e,t,n){if(_e.current!==en)throw Error(P(168));Y(_e,t),Y(De,n)}function Yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,dg(e)||"Unknown",i));return oe({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,vn=_e.current,Y(_e,e),Y(De,De.current),!0}function ed(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Yp(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,J(De),J(_e),Y(_e,e)):J(De),Y(De,n)}var jt=null,hl=!1,os=!1;function Xp(e){jt===null?jt=[e]:jt.push(e)}function O1(e){hl=!0,Xp(e)}function rn(){if(!os&&jt!==null){os=!0;var e=0,t=q;try{var n=jt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,hl=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),jp(lu,rn),i}finally{q=t,os=!1}}return null}var Bn=[],$n=0,Oo=null,Po=0,Xe=[],Ze=0,yn=null,Ct=1,bt="";function sn(e,t){Bn[$n++]=Po,Bn[$n++]=Oo,Oo=e,Po=t}function Zp(e,t,n){Xe[Ze++]=Ct,Xe[Ze++]=bt,Xe[Ze++]=yn,yn=e;var r=Ct;e=bt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ct=1<<32-ut(t)+i|n<<i|r,bt=o+e}else Ct=1<<o|n<<i|r,bt=e}function mu(e){e.return!==null&&(sn(e,1),Zp(e,1,0))}function gu(e){for(;e===Oo;)Oo=Bn[--$n],Bn[$n]=null,Po=Bn[--$n],Bn[$n]=null;for(;e===yn;)yn=Xe[--Ze],Xe[Ze]=null,bt=Xe[--Ze],Xe[Ze]=null,Ct=Xe[--Ze],Xe[Ze]=null}var Ge=null,Qe=null,te=!1,at=null;function Jp(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function td(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:Ct,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Qe=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(te){var t=Qe;if(t){var n=t;if(!td(e,t)){if(sa(e))throw Error(P(418));t=Vt(n.nextSibling);var r=Ge;t&&td(e,t)?Jp(r,n):(e.flags=e.flags&-4097|2,te=!1,Ge=e)}}else{if(sa(e))throw Error(P(418));e.flags=e.flags&-4097|2,te=!1,Ge=e}}}function nd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Bi(e){if(e!==Ge)return!1;if(!te)return nd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=Qe)){if(sa(e))throw e0(),Error(P(418));for(;t;)Jp(e,t),t=Vt(t.nextSibling)}if(nd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ge?Vt(e.stateNode.nextSibling):null;return!0}function e0(){for(var e=Qe;e;)e=Vt(e.nextSibling)}function rr(){Qe=Ge=null,te=!1}function vu(e){at===null?at=[e]:at.push(e)}var P1=It.ReactCurrentBatchConfig;function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var To=nn(null),zo=null,Wn=null,yu=null;function xu(){yu=Wn=zo=null}function wu(e){var t=To.current;J(To),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){zo=e,yu=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(yu!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(zo===null)throw Error(P(308));Wn=e,zo.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var cn=null;function Su(e){cn===null?cn=[e]:cn.push(e)}function t0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Su(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,Su(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}function rd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Io(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;l=0,h=c=u=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(y,f,g);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,f,g):x,g==null)break e;f=oe({},f,g);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);wn|=l,e.lanes=l,e.memoizedState=f}}function id(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var r0=new tp.Component().refs;function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Yt(e),o=Et(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(ct(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Yt(e),o=Et(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(ct(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Yt(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(ct(t,e,r,n),no(t,e,r))}};function od(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!li(n,r)||!li(i,o):!0}function i0(e,t,n){var r=!1,i=en,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=Fe(t)?vn:_e.current,r=t.contextTypes,o=(r=r!=null)?nr(e,i):en),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ld(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=r0,ju(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=Fe(t)?vn:_e.current,i.context=nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ca(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ml.enqueueReplaceState(i,i.state,null),Io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===r0&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function $i(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function o0(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Xt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=fs(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function u(p,d,m,w){var k=m.type;return k===Mn?h(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&sd(k)===d.type)?(w=i(d,m.props),w.ref=Mr(p,d,m),w.return=p,w):(w=ao(m.type,m.key,m.props,null,p.mode,w),w.ref=Mr(p,d,m),w.return=p,w)}function c(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ps(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,w,k){return d===null||d.tag!==7?(d=hn(m,p.mode,w,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ti:return m=ao(d.type,d.key,d.props,null,p.mode,m),m.ref=Mr(p,null,d),m.return=p,m;case Ln:return d=ps(d,p.mode,m),d.return=p,d;case Nt:var w=d._init;return f(p,w(d._payload),m)}if(Fr(d)||Pr(d))return d=hn(d,p.mode,m,null),d.return=p,d;$i(p,d)}return null}function g(p,d,m,w){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ti:return m.key===k?u(p,d,m,w):null;case Ln:return m.key===k?c(p,d,m,w):null;case Nt:return k=m._init,g(p,d,k(m._payload),w)}if(Fr(m)||Pr(m))return k!==null?null:h(p,d,m,w,null);$i(p,m)}return null}function y(p,d,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ti:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,k);case Ln:return p=p.get(w.key===null?m:w.key)||null,c(d,p,w,k);case Nt:var C=w._init;return y(p,d,m,C(w._payload),k)}if(Fr(w)||Pr(w))return p=p.get(m)||null,h(d,p,w,k,null);$i(d,w)}return null}function x(p,d,m,w){for(var k=null,C=null,E=d,T=d=0,O=null;E!==null&&T<m.length;T++){E.index>T?(O=E,E=null):O=E.sibling;var _=g(p,E,m[T],w);if(_===null){E===null&&(E=O);break}e&&E&&_.alternate===null&&t(p,E),d=o(_,d,T),C===null?k=_:C.sibling=_,C=_,E=O}if(T===m.length)return n(p,E),te&&sn(p,T),k;if(E===null){for(;T<m.length;T++)E=f(p,m[T],w),E!==null&&(d=o(E,d,T),C===null?k=E:C.sibling=E,C=E);return te&&sn(p,T),k}for(E=r(p,E);T<m.length;T++)O=y(E,p,T,m[T],w),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?T:O.key),d=o(O,d,T),C===null?k=O:C.sibling=O,C=O);return e&&E.forEach(function(R){return t(p,R)}),te&&sn(p,T),k}function v(p,d,m,w){var k=Pr(m);if(typeof k!="function")throw Error(P(150));if(m=k.call(m),m==null)throw Error(P(151));for(var C=k=null,E=d,T=d=0,O=null,_=m.next();E!==null&&!_.done;T++,_=m.next()){E.index>T?(O=E,E=null):O=E.sibling;var R=g(p,E,_.value,w);if(R===null){E===null&&(E=O);break}e&&E&&R.alternate===null&&t(p,E),d=o(R,d,T),C===null?k=R:C.sibling=R,C=R,E=O}if(_.done)return n(p,E),te&&sn(p,T),k;if(E===null){for(;!_.done;T++,_=m.next())_=f(p,_.value,w),_!==null&&(d=o(_,d,T),C===null?k=_:C.sibling=_,C=_);return te&&sn(p,T),k}for(E=r(p,E);!_.done;T++,_=m.next())_=y(E,p,T,_.value,w),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?T:_.key),d=o(_,d,T),C===null?k=_:C.sibling=_,C=_);return e&&E.forEach(function(N){return t(p,N)}),te&&sn(p,T),k}function S(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ti:e:{for(var k=m.key,C=d;C!==null;){if(C.key===k){if(k=m.type,k===Mn){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&sd(k)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=Mr(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Mn?(d=hn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=ao(m.type,m.key,m.props,null,p.mode,w),w.ref=Mr(p,d,m),w.return=p,p=w)}return l(p);case Ln:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ps(m,p.mode,w),d.return=p,p=d}return l(p);case Nt:return C=m._init,S(p,d,C(m._payload),w)}if(Fr(m))return x(p,d,m,w);if(Pr(m))return v(p,d,m,w);$i(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=fs(m,p.mode,w),d.return=p,p=d),l(p)):n(p,d)}return S}var ir=o0(!0),l0=o0(!1),bi={},yt=nn(bi),ci=nn(bi),di=nn(bi);function dn(e){if(e===bi)throw Error(P(174));return e}function ku(e,t){switch(Y(di,t),Y(ci,e),Y(yt,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Us(t,e)}J(yt),Y(yt,t)}function or(){J(yt),J(ci),J(di)}function s0(e){dn(di.current);var t=dn(yt.current),n=Us(t,e.type);t!==n&&(Y(ci,e),Y(yt,n))}function Cu(e){ci.current===e&&(J(yt),J(ci))}var re=nn(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function bu(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var ro=It.ReactCurrentDispatcher,ss=It.ReactCurrentBatchConfig,xn=0,ie=null,pe=null,ge=null,Mo=!1,Kr=!1,fi=0,T1=0;function Ce(){throw Error(P(321))}function Eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function _u(e,t,n,r,i,o){if(xn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?M1:R1,e=n(r,i),Kr){o=0;do{if(Kr=!1,fi=0,25<=o)throw Error(P(301));o+=1,ge=pe=null,t.updateQueue=null,ro.current=N1,e=n(r,i)}while(Kr)}if(ro.current=Ro,t=pe!==null&&pe.next!==null,xn=0,ge=pe=ie=null,Mo=!1,t)throw Error(P(300));return e}function Ou(){var e=fi!==0;return fi=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(P(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function pi(e,t){return typeof t=="function"?t(e):t}function as(e){var t=nt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var h=c.lane;if((xn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,l=r):u=u.next=f,ie.lanes|=h,wn|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,ft(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,wn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function us(e){var t=nt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ft(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function a0(){}function u0(e,t){var n=ie,r=nt(),i=t(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,Pu(f0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,hi(9,d0.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(P(349));xn&30||c0(n,t,i)}return i}function c0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function d0(e,t,n,r){t.value=n,t.getSnapshot=r,p0(t)&&h0(e)}function f0(e,t,n){return n(function(){p0(t)&&h0(e)})}function p0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function h0(e){var t=Tt(e,1);t!==null&&ct(t,e,1,-1)}function ad(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t.queue=e,e=e.dispatch=L1.bind(null,ie,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function m0(){return nt().memoizedState}function io(e,t,n,r){var i=ht();ie.flags|=e,i.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function gl(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(pe!==null){var l=pe.memoizedState;if(o=l.destroy,r!==null&&Eu(r,l.deps)){i.memoizedState=hi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=hi(1|t,n,o,r)}function ud(e,t){return io(8390656,8,e,t)}function Pu(e,t){return gl(2048,8,e,t)}function g0(e,t){return gl(4,2,e,t)}function v0(e,t){return gl(4,4,e,t)}function y0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function x0(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,y0.bind(null,t,e),n)}function Tu(){}function w0(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function S0(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function j0(e,t,n){return xn&21?(ft(n,t)||(n=bp(),ie.lanes|=n,wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function z1(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ss.transition;ss.transition={};try{e(!1),t()}finally{q=n,ss.transition=r}}function k0(){return nt().memoizedState}function I1(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C0(e))b0(t,n);else if(n=t0(e,t,n,r),n!==null){var i=ze();ct(n,e,r,i),E0(n,t,r)}}function L1(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C0(e))b0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,l)){var u=t.interleaved;u===null?(i.next=i,Su(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=t0(e,t,i,r),n!==null&&(i=ze(),ct(n,e,r,i),E0(n,t,r))}}function C0(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function b0(e,t){Kr=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}var Ro={readContext:tt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},M1={readContext:tt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,y0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=I1.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ad,useDebugValue:Tu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ad(!1),t=e[0];return e=z1.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=ht();if(te){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),xe===null)throw Error(P(349));xn&30||c0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ud(f0.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,d0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=xe.identifierPrefix;if(te){var n=bt,r=Ct;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=T1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R1={readContext:tt,useCallback:w0,useContext:tt,useEffect:Pu,useImperativeHandle:x0,useInsertionEffect:g0,useLayoutEffect:v0,useMemo:S0,useReducer:as,useRef:m0,useState:function(){return as(pi)},useDebugValue:Tu,useDeferredValue:function(e){var t=nt();return j0(t,pe.memoizedState,e)},useTransition:function(){var e=as(pi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:a0,useSyncExternalStore:u0,useId:k0,unstable_isNewReconciler:!1},N1={readContext:tt,useCallback:w0,useContext:tt,useEffect:Pu,useImperativeHandle:x0,useInsertionEffect:g0,useLayoutEffect:v0,useMemo:S0,useReducer:us,useRef:m0,useState:function(){return us(pi)},useDebugValue:Tu,useDeferredValue:function(e){var t=nt();return pe===null?t.memoizedState=e:j0(t,pe.memoizedState,e)},useTransition:function(){var e=us(pi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:a0,useSyncExternalStore:u0,useId:k0,unstable_isNewReconciler:!1};function lr(e,t){try{var n="",r=t;do n+=cg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var A1=typeof WeakMap=="function"?WeakMap:Map;function _0(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,ja=r),fa(e,t)},n}function O0(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new A1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=X1.bind(null,e,t,n),t.then(e,e))}function dd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var D1=It.ReactCurrentOwner,Ae=!1;function Te(e,t,n,r){t.child=e===null?l0(t,null,n,r):ir(t,e.child,n,r)}function pd(e,t,n,r,i){n=n.render;var o=t.ref;return Yn(t,i),r=_u(e,t,n,r,o,i),n=Ou(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(te&&n&&mu(t),t.flags|=1,Te(e,t,r,i),t.child)}function hd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Du(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,P0(e,t,o,r,i)):(e=ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(l,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function P0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(li(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,zt(e,t,i)}return pa(e,t,n,r,i)}function T0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hn,He),He|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Hn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Hn,He),He|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Hn,He),He|=r;return Te(e,t,i,n),t.child}function z0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var o=Fe(n)?vn:_e.current;return o=nr(t,o),Yn(t,i),n=_u(e,t,n,r,o,i),r=Ou(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(te&&r&&mu(t),t.flags|=1,Te(e,t,n,i),t.child)}function md(e,t,n,r,i){if(Fe(n)){var o=!0;_o(t)}else o=!1;if(Yn(t,i),t.stateNode===null)oo(e,t),i0(t,n,r),da(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?vn:_e.current,c=nr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ld(t,l,r,c),At=!1;var g=t.memoizedState;l.state=g,Io(t,r,l,i),u=t.memoizedState,a!==r||g!==u||De.current||At?(typeof h=="function"&&(ca(t,n,h,r),u=t.memoizedState),(a=At||od(t,n,a,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,n0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:lt(t.type,a),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=tt(u):(u=Fe(n)?vn:_e.current,u=nr(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==u)&&ld(t,l,r,u),At=!1,g=t.memoizedState,l.state=g,Io(t,r,l,i);var x=t.memoizedState;a!==f||g!==x||De.current||At?(typeof y=="function"&&(ca(t,n,y,r),x=t.memoizedState),(c=At||od(t,n,c,r,g,x,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,o,i)}function ha(e,t,n,r,i,o){z0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ed(t,n,!1),zt(e,t,o);r=t.stateNode,D1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,a,o)):Te(e,t,a,o),t.memoizedState=r.state,i&&ed(t,n,!0),t.child}function I0(e){var t=e.stateNode;t.pendingContext?Jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jc(e,t.context,!1),ku(e,t.containerInfo)}function gd(e,t,n,r,i){return rr(),vu(i),t.flags|=256,Te(e,t,n,r),t.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function L0(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=xl(l,r,0,null),e=hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ga(n),t.memoizedState=ma,e):zu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return F1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Xt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=hn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ga(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ma,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zu(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&vu(r),ir(t,e.child,null,n),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function F1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=cs(Error(P(422))),Wi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xl({mode:"visible",children:r.children},i,0,null),o=hn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ir(t,e.child,null,l),t.child.memoizedState=ga(l),t.memoizedState=ma,o);if(!(t.mode&1))return Wi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=cs(o,r,void 0),Wi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ae||a){if(r=xe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tt(e,i),ct(r,e,i,-1))}return Au(),r=cs(Error(P(421))),Wi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Z1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=Vt(i.nextSibling),Ge=t,te=!0,at=null,e!==null&&(Xe[Ze++]=Ct,Xe[Ze++]=bt,Xe[Ze++]=yn,Ct=e.id,bt=e.overflow,yn=t),t=zu(t,r.children),t.flags|=4096,t)}function vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function ds(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function M0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,n,t);else if(e.tag===19)vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ds(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ds(t,!0,n,null,o);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function B1(e,t,n){switch(t.tag){case 3:I0(t),rr();break;case 5:s0(t);break;case 1:Fe(t.type)&&_o(t);break;case 4:ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(To,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?L0(e,t,n):(Y(re,re.current&1),e=zt(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return M0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,T0(e,t,n)}return zt(e,t,n)}var R0,va,N0,A0;R0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};va=function(){};N0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dn(yt.current);var o=null;switch(n){case"input":i=Fs(e,i),r=Fs(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bo)}Hs(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};A0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $1(e,t,n){var r=t.pendingProps;switch(gu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Fe(t.type)&&Eo(),be(t),null;case 3:return r=t.stateNode,or(),J(De),J(_e),bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(ba(at),at=null))),va(e,t),be(t),null;case 5:Cu(t);var i=dn(di.current);if(n=t.type,e!==null&&t.stateNode!=null)N0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return be(t),null}if(e=dn(yt.current),Bi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[ui]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)X($r[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Ec(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Oc(r,o),X("invalid",r)}Hs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",""+a]):Jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":zi(r),_c(r,o,!0);break;case"textarea":zi(r),Pc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[gt]=t,e[ui]=r,R0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Qs(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)X($r[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Ec(e,r),i=Fs(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":Oc(e,r),i=Ws(e,r),X("invalid",e);break;default:i=r}Hs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?pp(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dp(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ei(e,u):typeof u=="number"&&ei(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&X("scroll",e):u!=null&&tu(e,o,u,l))}switch(n){case"input":zi(e),_c(e,r,!1);break;case"textarea":zi(e),Pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)A0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=dn(di.current),dn(yt.current),Bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return be(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Qe!==null&&t.mode&1&&!(t.flags&128))e0(),rr(),t.flags|=98560,o=!1;else if(o=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[gt]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else at!==null&&(ba(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):Au())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return or(),va(e,t),e===null&&si(t.stateNode.containerInfo),be(t),null;case 10:return wu(t.type._context),be(t),null;case 17:return Fe(t.type)&&Eo(),be(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Rr(o,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,Rr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>sr&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return be(t),null}else 2*ae()-o.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Nu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function W1(e,t){switch(gu(t),t.tag){case 1:return Fe(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),J(De),J(_e),bu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cu(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return or(),null;case 10:return wu(t.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Ui=!1,Ee=!1,U1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function ya(e,t,n){try{n()}catch(r){se(e,t,r)}}var yd=!1;function H1(e,t){if(ta=jo,e=$p(),hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++h===r&&(u=l),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},jo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:lt(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=yd,yd=!1,x}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ya(t,n,o)}i=i.next}while(i!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function D0(e){var t=e.alternate;t!==null&&(e.alternate=null,D0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ui],delete t[oa],delete t[E1],delete t[_1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function F0(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bo));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}var Se=null,st=!1;function Mt(e,t,n){for(n=n.child;n!==null;)B0(e,t,n),n=n.sibling}function B0(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ee||Un(n,t);case 6:var r=Se,i=st;Se=null,Mt(e,t,n),Se=r,st=i,Se!==null&&(st?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(st?(e=Se,n=n.stateNode,e.nodeType===8?is(e.parentNode,n):e.nodeType===1&&is(e,n),ii(e)):is(Se,n.stateNode));break;case 4:r=Se,i=st,Se=n.stateNode.containerInfo,st=!0,Mt(e,t,n),Se=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ya(n,t,l),i=i.next}while(i!==r)}Mt(e,t,n);break;case 1:if(!Ee&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Mt(e,t,n),Ee=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U1),t.forEach(function(r){var i=J1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,st=!1;break e;case 3:Se=a.stateNode.containerInfo,st=!0;break e;case 4:Se=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(Se===null)throw Error(P(160));B0(o,l,i),Se=null,st=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$0(t,e),t=t.sibling}function $0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),r&4){try{qr(3,e,e.return),vl(3,e)}catch(v){se(e,e.return,v)}try{qr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:ot(t,e),pt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(ot(t,e),pt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{ei(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ap(i,o),Qs(a,l);var c=Qs(a,o);for(l=0;l<u.length;l+=2){var h=u[l],f=u[l+1];h==="style"?pp(i,f):h==="dangerouslySetInnerHTML"?dp(i,f):h==="children"?ei(i,f):tu(i,h,f,c)}switch(a){case"input":Bs(i,o);break;case"textarea":up(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Gn(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Gn(i,!!o.multiple,o.defaultValue,!0):Gn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ui]=o}catch(v){se(e,e.return,v)}}break;case 6:if(ot(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(ot(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mu=ae())),r&4&&wd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||h,ot(t,e),Ee=c):ot(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(f=L=h;L!==null;){switch(g=L,y=g.child,g.tag){case 0:case 11:case 14:case 15:qr(4,g,g.return);break;case 1:Un(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Un(g,g.return);break;case 22:if(g.memoizedState!==null){jd(f);continue}}y!==null?(y.return=g,L=y):jd(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=fp("display",l))}catch(v){se(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){se(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ot(t,e),pt(e),r&4&&wd(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ei(i,""),r.flags&=-33);var o=xd(e);Sa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xd(e);wa(e,a,l);break;default:throw Error(P(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q1(e,t,n){L=e,W0(e)}function W0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ui;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ee;a=Ui;var c=Ee;if(Ui=l,(Ee=u)&&!c)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?kd(i):u!==null?(u.return=l,L=u):kd(i);for(;o!==null;)L=o,W0(o),o=o.sibling;L=i,Ui=a,Ee=c}Sd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Sd(e)}}function Sd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&id(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}id(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ii(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ee||t.flags&512&&xa(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function jd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function kd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{xa(t)}catch(u){se(t,o,u)}break;case 5:var l=t.return;try{xa(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var G1=Math.ceil,No=It.ReactCurrentDispatcher,Iu=It.ReactCurrentOwner,et=It.ReactCurrentBatchConfig,G=0,xe=null,de=null,je=0,He=0,Hn=nn(0),he=0,mi=null,wn=0,yl=0,Lu=0,Yr=null,Ne=null,Mu=0,sr=1/0,wt=null,Ao=!1,ja=null,qt=null,Hi=!1,Wt=null,Do=0,Xr=0,ka=null,lo=-1,so=0;function ze(){return G&6?ae():lo!==-1?lo:lo=ae()}function Yt(e){return e.mode&1?G&2&&je!==0?je&-je:P1.transition!==null?(so===0&&(so=bp()),so):(e=q,e!==0||(e=window.event,e=e===void 0?16:Ip(e.type)),e):1}function ct(e,t,n,r){if(50<Xr)throw Xr=0,ka=null,Error(P(185));ji(e,n,r),(!(G&2)||e!==xe)&&(e===xe&&(!(G&2)&&(yl|=n),he===4&&Bt(e,je)),Be(e,r),n===1&&G===0&&!(t.mode&1)&&(sr=ae()+500,hl&&rn()))}function Be(e,t){var n=e.callbackNode;Pg(e,t);var r=So(e,e===xe?je:0);if(r===0)n!==null&&Ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ic(n),t===1)e.tag===0?O1(Cd.bind(null,e)):Xp(Cd.bind(null,e)),C1(function(){!(G&6)&&rn()}),n=null;else{switch(Ep(r)){case 1:n=lu;break;case 4:n=kp;break;case 16:n=wo;break;case 536870912:n=Cp;break;default:n=wo}n=Y0(n,U0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function U0(e,t){if(lo=-1,so=0,G&6)throw Error(P(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=So(e,e===xe?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fo(e,r);else{t=r;var i=G;G|=2;var o=Q0();(xe!==e||je!==t)&&(wt=null,sr=ae()+500,pn(e,t));do try{q1();break}catch(a){H0(e,a)}while(!0);xu(),No.current=o,G=i,de!==null?t=0:(xe=null,je=0,t=he)}if(t!==0){if(t===2&&(i=Ys(e),i!==0&&(r=i,t=Ca(e,i))),t===1)throw n=mi,pn(e,0),Bt(e,r),Be(e,ae()),n;if(t===6)Bt(e,r);else{if(i=e.current.alternate,!(r&30)&&!V1(i)&&(t=Fo(e,r),t===2&&(o=Ys(e),o!==0&&(r=o,t=Ca(e,o))),t===1))throw n=mi,pn(e,0),Bt(e,r),Be(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:an(e,Ne,wt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Mu+500-ae(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ia(an.bind(null,e,Ne,wt),t);break}an(e,Ne,wt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ut(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G1(r/1960))-r,10<r){e.timeoutHandle=ia(an.bind(null,e,Ne,wt),r);break}an(e,Ne,wt);break;case 5:an(e,Ne,wt);break;default:throw Error(P(329))}}}return Be(e,ae()),e.callbackNode===n?U0.bind(null,e):null}function Ca(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Fo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&ba(t)),e}function ba(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function V1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Lu,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Cd(e){if(G&6)throw Error(P(327));Xn();var t=So(e,0);if(!(t&1))return Be(e,ae()),null;var n=Fo(e,t);if(e.tag!==0&&n===2){var r=Ys(e);r!==0&&(t=r,n=Ca(e,r))}if(n===1)throw n=mi,pn(e,0),Bt(e,t),Be(e,ae()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ne,wt),Be(e,ae()),null}function Ru(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(sr=ae()+500,hl&&rn())}}function Sn(e){Wt!==null&&Wt.tag===0&&!(G&6)&&Xn();var t=G;G|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,G=t,!(G&6)&&rn()}}function Nu(){He=Hn.current,J(Hn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k1(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:or(),J(De),J(_e),bu();break;case 5:Cu(r);break;case 4:or();break;case 13:J(re);break;case 19:J(re);break;case 10:wu(r.type._context);break;case 22:case 23:Nu()}n=n.return}if(xe=e,de=e=Xt(e.current,null),je=He=t,he=0,mi=null,Lu=yl=wn=0,Ne=Yr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}cn=null}return e}function H0(e,t){do{var n=de;try{if(xu(),ro.current=Ro,Mo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mo=!1}if(xn=0,ge=pe=ie=null,Kr=!1,fi=0,Iu.current=null,n===null||n.return===null){he=1,mi=t,de=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=dd(l);if(y!==null){y.flags&=-257,fd(y,l,a,o,t),y.mode&1&&cd(o,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(u),t.updateQueue=v}else x.add(u);break e}else{if(!(t&1)){cd(o,c,t),Au();break e}u=Error(P(426))}}else if(te&&a.mode&1){var S=dd(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),fd(S,l,a,o,t),vu(lr(u,a));break e}}o=u=lr(u,a),he!==4&&(he=2),Yr===null?Yr=[o]:Yr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=_0(o,u,t);rd(o,p);break e;case 1:a=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=O0(o,a,t);rd(o,w);break e}}o=o.return}while(o!==null)}V0(n)}catch(k){t=k,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Q0(){var e=No.current;return No.current=Ro,e===null?Ro:e}function Au(){(he===0||he===3||he===2)&&(he=4),xe===null||!(wn&268435455)&&!(yl&268435455)||Bt(xe,je)}function Fo(e,t){var n=G;G|=2;var r=Q0();(xe!==e||je!==t)&&(wt=null,pn(e,t));do try{K1();break}catch(i){H0(e,i)}while(!0);if(xu(),G=n,No.current=r,de!==null)throw Error(P(261));return xe=null,je=0,he}function K1(){for(;de!==null;)G0(de)}function q1(){for(;de!==null&&!wg();)G0(de)}function G0(e){var t=q0(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?V0(e):de=t,Iu.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=W1(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=$1(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function an(e,t,n){var r=q,i=et.transition;try{et.transition=null,q=1,Y1(e,t,n,r)}finally{et.transition=i,q=r}return null}function Y1(e,t,n,r){do Xn();while(Wt!==null);if(G&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Tg(e,o),e===xe&&(de=xe=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,Y0(wo,function(){return Xn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var l=q;q=1;var a=G;G|=4,Iu.current=null,H1(e,n),$0(n,e),g1(na),jo=!!ta,na=ta=null,e.current=n,Q1(n),Sg(),G=a,q=l,et.transition=o}else e.current=n;if(Hi&&(Hi=!1,Wt=e,Do=i),o=e.pendingLanes,o===0&&(qt=null),Cg(n.stateNode),Be(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ao)throw Ao=!1,e=ja,ja=null,e;return Do&1&&e.tag!==0&&Xn(),o=e.pendingLanes,o&1?e===ka?Xr++:(Xr=0,ka=e):Xr=0,rn(),null}function Xn(){if(Wt!==null){var e=Ep(Do),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Do=0,G&6)throw Error(P(331));var i=G;for(G|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:qr(8,h,o)}var f=h.child;if(f!==null)f.return=h,L=f;else for(;L!==null;){h=L;var g=h.sibling,y=h.return;if(D0(h),h===c){L=null;break}if(g!==null){g.return=y,L=g;break}L=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){l=L;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,L=m;else e:for(l=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(k){se(a,a.return,k)}if(a===l){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(G=i,rn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function bd(e,t,n){t=lr(n,t),t=_0(e,t,1),e=Kt(e,t,1),t=ze(),e!==null&&(ji(e,1,t),Be(e,t))}function se(e,t,n){if(e.tag===3)bd(e,e,n);else for(;t!==null;){if(t.tag===3){bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=lr(n,e),e=O0(t,e,1),t=Kt(t,e,1),e=ze(),t!==null&&(ji(t,1,e),Be(t,e));break}}t=t.return}}function X1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(je&n)===n&&(he===4||he===3&&(je&130023424)===je&&500>ae()-Mu?pn(e,0):Lu|=n),Be(e,t)}function K0(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var n=ze();e=Tt(e,t),e!==null&&(ji(e,t,n),Be(e,n))}function Z1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),K0(e,n)}function J1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),K0(e,n)}var q0;q0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,B1(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&Zp(t,Po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var i=nr(t,_e.current);Yn(t,n),i=_u(null,t,r,e,i,n);var o=Ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,_o(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ju(t),i.updater=ml,t.stateNode=i,i._reactInternals=t,da(t,r,e,n),t=ha(null,t,r,!0,o,n)):(t.tag=0,te&&o&&mu(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tv(r),e=lt(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=md(null,t,r,e,n);break e;case 11:t=pd(null,t,r,e,n);break e;case 14:t=hd(null,t,r,lt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),md(e,t,r,i,n);case 3:e:{if(I0(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,n0(e,t),Io(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=lr(Error(P(423)),t),t=gd(e,t,r,n,i);break e}else if(r!==i){i=lr(Error(P(424)),t),t=gd(e,t,r,n,i);break e}else for(Qe=Vt(t.stateNode.containerInfo.firstChild),Ge=t,te=!0,at=null,n=l0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===i){t=zt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return s0(t),e===null&&aa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ra(r,i)?l=null:o!==null&&ra(r,o)&&(t.flags|=32),z0(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&aa(t),null;case 13:return L0(e,t,n);case 4:return ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),pd(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(To,r._currentValue),r._currentValue=l,o!==null)if(ft(o.value,l)){if(o.children===i.children&&!De.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Et(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ua(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ua(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=tt(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),hd(e,t,r,i,n);case 15:return P0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),oo(e,t),t.tag=1,Fe(r)?(e=!0,_o(t)):e=!1,Yn(t,n),i0(t,r,i),da(t,r,i,n),ha(null,t,r,!0,e,n);case 19:return M0(e,t,n);case 22:return T0(e,t,n)}throw Error(P(156,t.tag))};function Y0(e,t){return jp(e,t)}function ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new ev(e,t,n,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tv(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ru)return 11;if(e===iu)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ao(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Du(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Mn:return hn(n.children,i,o,t);case nu:l=8,i|=8;break;case Rs:return e=Je(12,n,t,i|2),e.elementType=Rs,e.lanes=o,e;case Ns:return e=Je(13,n,t,i),e.elementType=Ns,e.lanes=o,e;case As:return e=Je(19,n,t,i),e.elementType=As,e.lanes=o,e;case op:return xl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rp:l=10;break e;case ip:l=9;break e;case ru:l=11;break e;case iu:l=14;break e;case Nt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Je(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function hn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function xl(e,t,n,r){return e=Je(22,e,r,t),e.elementType=op,e.lanes=n,e.stateNode={isHidden:!1},e}function fs(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function ps(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,i,o,l,a,u){return e=new nv(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(o),e}function rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function X0(e){if(!e)return en;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Yp(e,n,t)}return t}function Z0(e,t,n,r,i,o,l,a,u){return e=Fu(n,r,!0,e,i,o,l,a,u),e.context=X0(null),n=e.current,r=ze(),i=Yt(n),o=Et(r,i),o.callback=t??null,Kt(n,o,i),e.current.lanes=i,ji(e,i,r),Be(e,r),e}function wl(e,t,n,r){var i=t.current,o=ze(),l=Yt(i);return n=X0(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,l),e!==null&&(ct(e,i,l,o),no(e,i,l)),l}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){Ed(e,t),(e=e.alternate)&&Ed(e,t)}function iv(){return null}var J0=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}Sl.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));wl(e,t,null,null)};Sl.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){wl(null,e,null,null)}),t[Pt]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&zp(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function ov(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Bo(l);o.call(c)}}var l=Z0(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=l,e[Pt]=l.current,si(e.nodeType===8?e.parentNode:e),Sn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bo(u);a.call(c)}}var u=Fu(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=u,e[Pt]=u.current,si(e.nodeType===8?e.parentNode:e),Sn(function(){wl(t,u,n,r)}),u}function kl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=Bo(l);a.call(u)}}wl(t,l,e,i)}else l=ov(n,t,e,i,r);return Bo(l)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(su(t,n|1),Be(t,ae()),!(G&6)&&(sr=ae()+500,rn()))}break;case 13:Sn(function(){var r=Tt(e,1);if(r!==null){var i=ze();ct(r,e,1,i)}}),Bu(e,1)}};au=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=ze();ct(t,e,134217728,n)}Bu(e,134217728)}};Op=function(e){if(e.tag===13){var t=Yt(e),n=Tt(e,t);if(n!==null){var r=ze();ct(n,e,t,r)}Bu(e,t)}};Pp=function(){return q};Tp=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Vs=function(e,t,n){switch(t){case"input":if(Bs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pl(r);if(!i)throw Error(P(90));sp(r),Bs(r,i)}}}break;case"textarea":up(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};gp=Ru;vp=Sn;var lv={usingClientEntryPoint:!1,Events:[Ci,Dn,pl,hp,mp,Ru]},Nr={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sv={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wp(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{ul=Qi.inject(sv),vt=Qi}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(P(200));return rv(e,t,null,n)};Ke.createRoot=function(e,t){if(!Wu(e))throw Error(P(299));var n=!1,r="",i=J0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fu(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,si(e.nodeType===8?e.parentNode:e),new $u(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=wp(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Sn(e)};Ke.hydrate=function(e,t,n){if(!jl(t))throw Error(P(200));return kl(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Z0(t,null,e,1,n??null,i,!1,o,l),e[Pt]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sl(t)};Ke.render=function(e,t,n){if(!jl(t))throw Error(P(200));return kl(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!jl(e))throw Error(P(40));return e._reactRootContainer?(Sn(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Ru;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return kl(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function eh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)}catch(e){console.error(e)}}eh(),Zf.exports=Ke;var av=Zf.exports,Od=av;Ls.createRoot=Od.createRoot,Ls.hydrateRoot=Od.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Pd="popstate";function uv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Ea("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nh(i)}return dv(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function th(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cv(){return Math.random().toString(36).substr(2,8)}function Td(e,t){return{usr:e.state,key:e.key,idx:t}}function Ea(e,t,n,r){return n===void 0&&(n=null),gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:n,key:t&&t.key||r||cv()})}function nh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ut.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(gi({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function f(){a=Ut.Pop;let S=h(),p=S==null?null:S-c;c=S,u&&u({action:a,location:v.location,delta:p})}function g(S,p){a=Ut.Push;let d=Ea(v.location,S,p);n&&n(d,S),c=h()+1;let m=Td(d,c),w=v.createHref(d);try{l.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&u&&u({action:a,location:v.location,delta:1})}function y(S,p){a=Ut.Replace;let d=Ea(v.location,S,p);n&&n(d,S),c=h();let m=Td(d,c),w=v.createHref(d);l.replaceState(m,"",w),o&&u&&u({action:a,location:v.location,delta:0})}function x(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:nh(S);return d=d.replace(/ $/,"%20"),me(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return e(i,l)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Pd,f),u=S,()=>{i.removeEventListener(Pd,f),u=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let p=x(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(S){return l.go(S)}};return v}var zd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zd||(zd={}));function fv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?br(t):t,i=oh(r.pathname||"/",n);if(i==null)return null;let o=rh(e);pv(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=bv(i);l=jv(o[a],u)}return l}function rh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(me(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=mn([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),rh(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:wv(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of ih(o.path))i(o,l,u)}),t}function ih(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ih(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function pv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hv=/^:[\w-]+$/,mv=3,gv=2,vv=1,yv=10,xv=-2,Id=e=>e==="*";function wv(e,t){let n=e.split("/"),r=n.length;return n.some(Id)&&(r+=xv),t&&(r+=gv),n.filter(i=>!Id(i)).reduce((i,o)=>i+(hv.test(o)?mv:o===""?vv:yv),r)}function Sv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function jv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=kv({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;o.push({params:r,pathname:mn([i,h.pathname]),pathnameBase:zv(mn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=mn([i,h.pathnameBase]))}return o}function kv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let v=a[f]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[f];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Cv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),th(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function bv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return th(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function oh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ev(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?br(e):e;return{pathname:n?n.startsWith("/")?n:_v(n,t):t,search:Iv(r),hash:Lv(i)}}function _v(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ov(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pv(e,t){let n=Ov(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Tv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=br(e):(i=gi({},e),me(!i.pathname||!i.pathname.includes("?"),hs("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),hs("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),hs("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=Ev(i,a),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const mn=e=>e.join("/").replace(/\/\/+/g,"/"),zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Iv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lh=["post","put","patch","delete"];new Set(lh);const Rv=["get",...lh];new Set(Rv);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vi.apply(this,arguments)}const Uu=b.createContext(null),Nv=b.createContext(null),Cl=b.createContext(null),bl=b.createContext(null),On=b.createContext({outlet:null,matches:[],isDataRoute:!1}),sh=b.createContext(null);function El(){return b.useContext(bl)!=null}function Hu(){return El()||me(!1),b.useContext(bl).location}function ah(e){b.useContext(Cl).static||b.useLayoutEffect(e)}function Ye(){let{isDataRoute:e}=b.useContext(On);return e?qv():Av()}function Av(){El()||me(!1);let e=b.useContext(Uu),{basename:t,future:n,navigator:r}=b.useContext(Cl),{matches:i}=b.useContext(On),{pathname:o}=Hu(),l=JSON.stringify(Pv(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return ah(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Tv(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mn([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,l,o,e])}function uh(){let{matches:e}=b.useContext(On),t=e[e.length-1];return t?t.params:{}}function Dv(e,t){return Fv(e,t)}function Fv(e,t,n,r){El()||me(!1);let{navigator:i}=b.useContext(Cl),{matches:o}=b.useContext(On),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Hu(),h;if(t){var f;let S=typeof t=="string"?br(t):t;u==="/"||(f=S.pathname)!=null&&f.startsWith(u)||me(!1),h=S}else h=c;let g=h.pathname||"/",y=g;if(u!=="/"){let S=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=fv(e,{pathname:y}),v=Hv(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:mn([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:mn([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&v?b.createElement(bl.Provider,{value:{location:vi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ut.Pop}},v):v}function Bv(){let e=Kv(),t=Mv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const $v=b.createElement(Bv,null);class Wv extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(On.Provider,{value:this.props.routeContext},b.createElement(sh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Uv(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Uu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(On.Provider,{value:t},r)}function Hv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||me(!1),l=l.slice(0,Math.min(l.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let f=l[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:y}=n,x=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((h,f,g)=>{let y,x=!1,v=null,S=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||$v,u&&(c<0&&g===0?(Yv("route-fallback",!1),x=!0,S=null):c===g&&(x=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let m;return y?m=v:x?m=S:f.route.Component?m=b.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,b.createElement(Uv,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?b.createElement(Wv,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var ch=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ch||{}),$o=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($o||{});function Qv(e){let t=b.useContext(Uu);return t||me(!1),t}function Gv(e){let t=b.useContext(Nv);return t||me(!1),t}function Vv(e){let t=b.useContext(On);return t||me(!1),t}function dh(e){let t=Vv(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Kv(){var e;let t=b.useContext(sh),n=Gv($o.UseRouteError),r=dh($o.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qv(){let{router:e}=Qv(ch.UseNavigateStable),t=dh($o.UseNavigateStable),n=b.useRef(!1);return ah(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vi({fromRouteId:t},o)))},[e,t])}const Ld={};function Yv(e,t,n){!t&&!Ld[e]&&(Ld[e]=!0)}function ue(e){me(!1)}function Xv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:o,static:l=!1,future:a}=e;El()&&me(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:o,static:l,future:vi({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=br(r));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:x="default"}=r,v=b.useMemo(()=>{let S=oh(h,u);return S==null?null:{location:{pathname:S,search:f,hash:g,state:y,key:x},navigationType:i}},[u,h,f,g,y,x,i]);return v==null?null:b.createElement(Cl.Provider,{value:c},b.createElement(bl.Provider,{children:n,value:v}))}function Zv(e){let{children:t,location:n}=e;return Dv(_a(t),n)}new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,_a(r.props.children,o));return}r.type!==ue&&me(!1),!r.props.index||!r.props.children||me(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=_a(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Jv="6";try{window.__reactRouterVersion=Jv}catch{}const e2="startTransition",Md=Zm[e2];function t2(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=uv({window:i,v5Compat:!0}));let l=o.current,[a,u]=b.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&Md?Md(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>l.listen(h),[l,h]),b.createElement(Xv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Rd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rd||(Rd={}));var Nd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nd||(Nd={}));const n2="/assets/image4-49UFiRL9.svg",r2="/assets/image2-D3-QMNJW.svg",i2="/assets/image3-Dw7jqlw9.svg",o2="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",l2="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};function ar(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",Zr="-moz-",K="-webkit-",fh="comm",_l="rule",Qu="decl",s2="@import",ph="@keyframes",a2="@layer",hh=Math.abs,Gu=String.fromCharCode,Oa=Object.assign;function u2(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function mh(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function uo(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function ur(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function gh(e){return e.length}function Wr(e,t){return t.push(e),e}function c2(e,t){return e.map(t).join("")}function Ad(e,t){return e.filter(function(n){return!St(n,t)})}var Ol=1,cr=1,vh=0,rt=0,ce=0,Er="";function Pl(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ol,column:cr,length:l,return:"",siblings:a}}function Rt(e,t){return Oa(Pl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Tn(e){for(;e.root;)e=Rt(e.root,{children:[e]});Wr(e,e.siblings)}function d2(){return ce}function f2(){return ce=rt>0?ve(Er,--rt):0,cr--,ce===10&&(cr=1,Ol--),ce}function dt(){return ce=rt<vh?ve(Er,rt++):0,cr++,ce===10&&(cr=1,Ol++),ce}function gn(){return ve(Er,rt)}function co(){return rt}function Tl(e,t){return ur(Er,e,t)}function Pa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function p2(e){return Ol=cr=1,vh=mt(Er=e),rt=0,[]}function h2(e){return Er="",e}function ms(e){return mh(Tl(rt-1,Ta(e===91?e+2:e===40?e+1:e)))}function m2(e){for(;(ce=gn())&&ce<33;)dt();return Pa(e)>2||Pa(ce)>3?"":" "}function g2(e,t){for(;--t&&dt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Tl(e,co()+(t<6&&gn()==32&&dt()==32))}function Ta(e){for(;dt();)switch(ce){case e:return rt;case 34:case 39:e!==34&&e!==39&&Ta(ce);break;case 40:e===41&&Ta(e);break;case 92:dt();break}return rt}function v2(e,t){for(;dt()&&e+ce!==57;)if(e+ce===84&&gn()===47)break;return"/*"+Tl(t,rt-1)+"*"+Gu(e===47?e:dt())}function y2(e){for(;!Pa(gn());)dt();return Tl(e,rt)}function x2(e){return h2(fo("",null,null,null,[""],e=p2(e),0,[0],e))}function fo(e,t,n,r,i,o,l,a,u){for(var c=0,h=0,f=l,g=0,y=0,x=0,v=1,S=1,p=1,d=0,m="",w=i,k=o,C=r,E=m;S;)switch(x=d,d=dt()){case 40:if(x!=108&&ve(E,f-1)==58){uo(E+=$(ms(d),"&","&\f"),"&\f",hh(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=ms(d);break;case 9:case 10:case 13:case 32:E+=m2(x);break;case 92:E+=g2(co()-1,7);continue;case 47:switch(gn()){case 42:case 47:Wr(w2(v2(dt(),co()),t,n,u),u);break;default:E+="/"}break;case 123*v:a[c++]=mt(E)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:S=0;case 59+h:p==-1&&(E=$(E,/\f/g,"")),y>0&&mt(E)-f&&Wr(y>32?Fd(E+";",r,n,f-1,u):Fd($(E," ","")+";",r,n,f-2,u),u);break;case 59:E+=";";default:if(Wr(C=Dd(E,t,n,c,h,i,a,m,w=[],k=[],f,o),o),d===123)if(h===0)fo(E,t,C,C,w,o,f,a,k);else switch(g===99&&ve(E,3)===110?100:g){case 100:case 108:case 109:case 115:fo(e,C,C,r&&Wr(Dd(e,C,C,0,0,i,a,m,i,w=[],f,k),k),i,k,f,a,r?w:k);break;default:fo(E,C,C,C,[""],k,0,a,k)}}c=h=y=0,v=p=1,m=E="",f=l;break;case 58:f=1+mt(E),y=x;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&f2()==125)continue}switch(E+=Gu(d),d*v){case 38:p=h>0?1:(E+="\f",-1);break;case 44:a[c++]=(mt(E)-1)*p,p=1;break;case 64:gn()===45&&(E+=ms(dt())),g=gn(),h=f=mt(m=E+=y2(co())),d++;break;case 45:x===45&&mt(E)==2&&(v=0)}}return o}function Dd(e,t,n,r,i,o,l,a,u,c,h,f){for(var g=i-1,y=i===0?o:[""],x=gh(y),v=0,S=0,p=0;v<r;++v)for(var d=0,m=ur(e,g+1,g=hh(S=l[v])),w=e;d<x;++d)(w=mh(S>0?y[d]+" "+m:$(m,/&\f/g,y[d])))&&(u[p++]=w);return Pl(e,t,n,i===0?_l:a,u,c,h,f)}function w2(e,t,n,r){return Pl(e,t,n,fh,Gu(d2()),ur(e,2,-2),0,r)}function Fd(e,t,n,r,i){return Pl(e,t,n,Qu,ur(e,0,r),ur(e,r+1,-1),r,i)}function yh(e,t,n){switch(u2(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+Zr+e+Z+e+e;case 5936:switch(ve(e,t+11)){case 114:return K+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+Z+e+e;case 6165:return K+e+Z+"flex-"+e+e;case 5187:return K+e+$(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return K+e+Z+"flex-item-"+$(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":Z+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return K+e+Z+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+Z+$(e,"shrink","negative")+e;case 5292:return K+e+Z+$(e,"basis","preferred-size")+e;case 6060:return K+"box-"+$(e,"-grow","")+K+e+Z+$(e,"grow","positive")+e;case 4554:return K+$(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!St(e,/flex-|baseline/))return Z+"grid-column-align"+ur(e,t)+e;break;case 2592:case 3360:return Z+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,St(r.props,/grid-\w+-end/)})?~uo(e+(n=n[t].value),"span",0)?e:Z+$(e,"-start","")+e+Z+"grid-row-span:"+(~uo(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":Z+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return St(r.props,/grid-\w+-start/)})?e:Z+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Zr+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~uo(e,"stretch",0)?yh($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return Z+i+":"+o+c+(l?Z+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(ve(e,t+6)===121)return $(e,":",":"+K)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ve(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+Z+"$2box$3")+e;case 100:return $(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Wo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function S2(e,t,n,r){switch(e.type){case a2:if(e.children.length)break;case s2:case Qu:return e.return=e.return||e.value;case fh:return"";case ph:return e.return=e.value+"{"+Wo(e.children,r)+"}";case _l:if(!mt(e.value=e.props.join(",")))return""}return mt(n=Wo(e.children,r))?e.return=e.value+"{"+n+"}":""}function j2(e){var t=gh(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function k2(e){return function(t){t.root||(t=t.return)&&e(t)}}function C2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qu:e.return=yh(e.value,e.length,n);return;case ph:return Wo([Rt(e,{value:$(e.value,"@","@"+K)})],r);case _l:if(e.length)return c2(n=e.props,function(i){switch(St(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tn(Rt(e,{props:[$(i,/:(read-\w+)/,":"+Zr+"$1")]})),Tn(Rt(e,{props:[i]})),Oa(e,{props:Ad(n,r)});break;case"::placeholder":Tn(Rt(e,{props:[$(i,/:(plac\w+)/,":"+K+"input-$1")]})),Tn(Rt(e,{props:[$(i,/:(plac\w+)/,":"+Zr+"$1")]})),Tn(Rt(e,{props:[$(i,/:(plac\w+)/,Z+"input-$1")]})),Tn(Rt(e,{props:[i]})),Oa(e,{props:Ad(n,r)});break}return""})}}var b2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},dr=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",xh="active",wh="data-styled-version",zl="6.1.13",Vu=`/*!sc*/
`,Uo=typeof window<"u"&&"HTMLElement"in window,E2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),_2={},Il=Object.freeze([]),fr=Object.freeze({});function Sh(e,t,n){return n===void 0&&(n=fr),e.theme!==n.theme&&e.theme||t||n.theme}var jh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,P2=/(^-|-$)/g;function Bd(e){return e.replace(O2,"-").replace(P2,"")}var T2=/(a)(d)/gi,Gi=52,$d=function(e){return String.fromCharCode(e+(e>25?39:97))};function za(e){var t,n="";for(t=Math.abs(e);t>Gi;t=t/Gi|0)n=$d(t%Gi)+n;return($d(t%Gi)+n).replace(T2,"$1-$2")}var gs,kh=5381,Qn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ch=function(e){return Qn(kh,e)};function Ku(e){return za(Ch(e)>>>0)}function z2(e){return e.displayName||e.name||"Component"}function vs(e){return typeof e=="string"&&!0}var bh=typeof Symbol=="function"&&Symbol.for,Eh=bh?Symbol.for("react.memo"):60115,I2=bh?Symbol.for("react.forward_ref"):60112,L2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},M2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_h={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R2=((gs={})[I2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gs[Eh]=_h,gs);function Wd(e){return("type"in(t=e)&&t.type.$$typeof)===Eh?_h:"$$typeof"in e?R2[e.$$typeof]:L2;var t}var N2=Object.defineProperty,A2=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,D2=Object.getOwnPropertyDescriptor,F2=Object.getPrototypeOf,Hd=Object.prototype;function Oh(e,t,n){if(typeof t!="string"){if(Hd){var r=F2(t);r&&r!==Hd&&Oh(e,r,n)}var i=A2(t);Ud&&(i=i.concat(Ud(t)));for(var o=Wd(e),l=Wd(t),a=0;a<i.length;++a){var u=i[a];if(!(u in M2||n&&n[u]||l&&u in l||o&&u in o)){var c=D2(t,u);try{N2(e,u,c)}catch{}}}}return e}function jn(e){return typeof e=="function"}function qu(e){return typeof e=="object"&&"styledComponentId"in e}function fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ho(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function yi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ia(e,t,n){if(n===void 0&&(n=!1),!n&&!yi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ia(e[r],t[r]);else if(yi(t))for(var r in t)e[r]=Ia(e[r],t[r]);return e}function Yu(e,t){Object.defineProperty(e,"toString",{value:t})}function kn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var B2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw kn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Vu);return n},e}(),po=new Map,Qo=new Map,ho=1,Vi=function(e){if(po.has(e))return po.get(e);for(;Qo.has(ho);)ho++;var t=ho++;return po.set(e,t),Qo.set(t,e),t},$2=function(e,t){ho=t+1,po.set(e,t),Qo.set(t,e)},W2="style[".concat(dr,"][").concat(wh,'="').concat(zl,'"]'),U2=new RegExp("^".concat(dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),H2=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Q2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vu),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(U2);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&($2(h,c),H2(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Qd=function(e){for(var t=document.querySelectorAll(W2),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(dr)!==xh&&(Q2(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function G2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ph=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(dr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(dr,xh),r.setAttribute(wh,zl);var l=G2();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},V2=function(){function e(t){this.element=Ph(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw kn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),K2=function(){function e(t){this.element=Ph(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),q2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gd=Uo,Y2={isServer:!Uo,useCSSOMInjection:!E2},Go=function(){function e(t,n,r){t===void 0&&(t=fr),n===void 0&&(n={});var i=this;this.options=ye(ye({},Y2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Uo&&Gd&&(Gd=!1,Qd(this)),Yu(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(f){var g=function(p){return Qo.get(p)}(f);if(g===void 0)return"continue";var y=o.names.get(g),x=l.getGroup(f);if(y===void 0||!y.size||x.length===0)return"continue";var v="".concat(dr,".g").concat(f,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),u+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(Vu)},h=0;h<a;h++)c(h);return u}(i)})}return e.registerId=function(t){return Vi(t)},e.prototype.rehydrate=function(){!this.server&&Uo&&Qd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new q2(i):r?new V2(i):new K2(i)}(this.options),new B2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),X2=/&/g,Z2=/^\s*\/\/.*$/gm;function Th(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Th(n.children,t)),n})}function J2(e){var t,n,r,i=e===void 0?fr:e,o=i.options,l=o===void 0?fr:o,a=i.plugins,u=a===void 0?Il:a,c=function(g,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===_l&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(X2,n).replace(r,c))}),l.prefix&&h.push(C2),h.push(S2);var f=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(Z2,""),p=x2(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);l.namespace&&(p=Th(p,l.namespace));var d=[];return Wo(p,j2(h.concat(k2(function(m){return d.push(m)})))),d};return f.hash=u.length?u.reduce(function(g,y){return y.name||kn(15),Qn(g,y.name)},kh).toString():"",f}var ey=new Go,La=J2(),zh=fe.createContext({shouldForwardProp:void 0,styleSheet:ey,stylis:La});zh.Consumer;fe.createContext(void 0);function Ma(){return b.useContext(zh)}var Ih=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=La);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Yu(this,function(){throw kn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=La),this.name+t.hash},e}(),ty=function(e){return e>="A"&&e<="Z"};function Vd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ty(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Lh=function(e){return e==null||e===!1||e===""},Mh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Lh(o)&&(Array.isArray(o)&&o.isCss||jn(o)?r.push("".concat(Vd(i),":"),o,";"):yi(o)?r.push.apply(r,ar(ar(["".concat(i," {")],Mh(o),!1),["}"],!1)):r.push("".concat(Vd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in b2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Zt(e,t,n,r){if(Lh(e))return[];if(qu(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Zt(i,t,n,r)}var o;return e instanceof Ih?n?(e.inject(n,r),[e.getName(r)]):[e]:yi(e)?Mh(e):Array.isArray(e)?Array.prototype.concat.apply(Il,e.map(function(l){return Zt(l,t,n,r)})):[e.toString()]}function Rh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!qu(n))return!1}return!0}var ny=Ch(zl),ry=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Rh(t),this.componentId=n,this.baseHash=Qn(ny,n),this.baseStyle=r,Go.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fn(i,this.staticRulesId);else{var o=Ho(Zt(this.rules,t,n,r)),l=za(Qn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=fn(i,l),this.staticRulesId=l}else{for(var u=Qn(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var g=Ho(Zt(f,t,n,r));u=Qn(u,g+h),c+=g}}if(c){var y=za(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=fn(i,y)}}return i},e}(),xi=fe.createContext(void 0);xi.Consumer;function iy(e){var t=fe.useContext(xi),n=b.useMemo(function(){return function(r,i){if(!r)throw kn(14);if(jn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw kn(8);return i?ye(ye({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?fe.createElement(xi.Provider,{value:n},e.children):null}var ys={};function oy(e,t,n){var r=qu(e),i=e,o=!vs(e),l=t.attrs,a=l===void 0?Il:l,u=t.componentId,c=u===void 0?function(w,k){var C=typeof w!="string"?"sc":Bd(w);ys[C]=(ys[C]||0)+1;var E="".concat(C,"-").concat(Ku(zl+C+ys[C]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):u,h=t.displayName,f=h===void 0?function(w){return vs(w)?"styled.".concat(w):"Styled(".concat(z2(w),")")}(e):h,g=t.displayName&&t.componentId?"".concat(Bd(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(w,k){return v(w,k)&&S(w,k)}}else x=v}var p=new ry(n,g,r?i.componentStyle:void 0);function d(w,k){return function(C,E,T){var O=C.attrs,_=C.componentStyle,R=C.defaultProps,N=C.foldedComponentIds,A=C.styledComponentId,F=C.target,it=fe.useContext(xi),le=Ma(),we=C.shouldForwardProp||le.shouldForwardProp,I=Sh(E,it,R)||fr,M=function(Me,We,xt){for(var Or,on=ye(ye({},We),{className:void 0,theme:xt}),$l=0;$l<Me.length;$l+=1){var _i=jn(Or=Me[$l])?Or(on):Or;for(var Lt in _i)on[Lt]=Lt==="className"?fn(on[Lt],_i[Lt]):Lt==="style"?ye(ye({},on[Lt]),_i[Lt]):_i[Lt]}return We.className&&(on.className=fn(on.className,We.className)),on}(O,E,I),B=M.as||F,Q={};for(var V in M)M[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&M.theme===I||(V==="forwardedAs"?Q.as=M.forwardedAs:we&&!we(V,B)||(Q[V]=M[V]));var Oe=function(Me,We){var xt=Ma(),Or=Me.generateAndInjectStyles(We,xt.styleSheet,xt.stylis);return Or}(_,M),$e=fn(N,A);return Oe&&($e+=" "+Oe),M.className&&($e+=" "+M.className),Q[vs(B)&&!jh.has(B)?"class":"className"]=$e,Q.ref=T,b.createElement(B,Q)}(m,w,k)}d.displayName=f;var m=fe.forwardRef(d);return m.attrs=y,m.componentStyle=p,m.displayName=f,m.shouldForwardProp=x,m.foldedComponentIds=r?fn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var T=0,O=C;T<O.length;T++)Ia(k,O[T],!0);return k}({},i.defaultProps,w):w}}),Yu(m,function(){return".".concat(m.styledComponentId)}),o&&Oh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Kd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qd=function(e){return Object.assign(e,{isCss:!0})};function Cn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||yi(e))return qd(Zt(Kd(Il,ar([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Zt(r):qd(Zt(Kd(r,t)))}function Ra(e,t,n){if(n===void 0&&(n=fr),!t)throw kn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Cn.apply(void 0,ar([i],o,!1)))};return r.attrs=function(i){return Ra(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ra(e,t,ye(ye({},n),i))},r}var Nh=function(e){return Ra(oy,e)},j=Nh;jh.forEach(function(e){j[e]=Nh(e)});var ly=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Rh(t),Go.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ho(Zt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Go.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function sy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Cn.apply(void 0,ar([e],t,!1)),i="sc-global-".concat(Ku(JSON.stringify(r))),o=new ly(r,i),l=function(u){var c=Ma(),h=fe.useContext(xi),f=fe.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,h,c.stylis),fe.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,_2,h,g);else{var y=ye(ye({},c),{theme:Sh(c,f,l.defaultProps)});o.renderStyles(u,y,h,g)}}return fe.memo(l)}function _r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ho(Cn.apply(void 0,ar([e],t,!1))),i=Ku(r);return new Ih(i,r)}const ay=j.div`
  position: relative;
  width: 100%;
  overflow: hidden; 
  max-height: 100vh;
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  justify-content: center;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`,uy=j.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,cy=j.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,dy=j.div`
  position: absolute;
  bottom: 0;
  width: 70%;
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 960px) {
    margin-left: 15%;
    width: 85%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    max-width: 80%; 
    bottom: 10%;
    margin-left: 0;
    position: absolute;
    justify-content: flex-start;
    gap: 10px;
  }
`,zn=j.div`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #000;
`,In=j.div`
  text-align: center;
  display: ${e=>e.isVisible?"block":"none"}; 
  animation: ${e=>e.isVisible?Yd:"none"} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?Yd:"none"} 0.4s ease-in-out;
    font-size: 1rem;
  }
  @media (min-width: 501px) {
    &::after {
      content: "→";
      margin-top: 3px;
      font-size: 1.1rem;
      color: #0000ff;
      margin-left: 5px;
    }
    &::before {
      content: " "; 
      display: block; 
      margin-bottom: 10px; 
    }
  }
`,Ar=j.div`
  position: absolute; 
  bottom: 0;
  width: 18%;
  transition: transform 0.4s ease-in-out, z-index 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #f0e5de;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 10px;
  padding: 20px;
  z-index: ${e=>e.isHovered?"2":"1"}; 
  box-shadow: ${e=>e.isHovered?"0 6px 12px rgba(0, 0, 0, 0.2)":"0 3px 6px rgba(0, 0, 0, 0.08)"};
  transform: ${e=>e.isHovered?"translateY(0px) scale(1.05)":"translateY(0px) scale(1)"};
  background: ${e=>e.isHovered?"#e0d4cc":"#f0e5de"};
  
  &:hover{
    transition: all 0.3s ease;
  }

  &:hover ${zn} {
    margin: 2%;
  }

  &:hover ${In} {
    margin: 2%;
  }
  @media (max-width: 500px) {
    flex-direction: row; 
    width: ${e=>e.isHovered?"95%":"40%"}; 
    border-top-left-radius: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 10vh;
    padding: 5%;
    transform: ${e=>e.isHovered?"translateX(0px) scale(1.05)":"translateX(0px) scale(1)"};
    margin-left: 0;
    position: relative;
  }
`,Yd=_r`
  from { opacity: 0; }
  to { opacity: 1; }
`,kt="/assets/Genie1-_KHwDxeg.svg",pr="/assets/Genie2-BwCRixq0.svg",fy=_r`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;j.img`
  position: fixed;
  top: 23%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isDisappearing?Cn`${fy} 0.5s forwards`:"none"};
`;const py=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(0),[i,o]=b.useState(!1),l=[n2,r2,i2],[a,u]=b.useState(!0),[c,h]=b.useState(!1),[f,g]=b.useState(kt),[y,x]=b.useState(!1),[v,S]=b.useState(!1),[p,d]=b.useState(null),m=Ye(),w=O=>{t(O)},k=(O,_)=>{p===O?m(_):d(O)};b.useEffect(()=>{if(p!==null){const O=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(O)}},[p]);const C=()=>{t(null)};b.useEffect(()=>{const O=setTimeout(()=>{h(!0)},1e3),_=setInterval(()=>{g(N=>N===kt?pr:kt)},600),R=setTimeout(()=>{S(!0),setTimeout(()=>{u(!1)},1e3),clearInterval(_)},3e3);return()=>{clearTimeout(O),clearTimeout(R),clearInterval(_)}},[]);const E=()=>{const _=n===0?l.length-1:n-1;r(_)},T=()=>{const _=n===l.length-1?0:n+1;r(_)};return b.useEffect(()=>{if(window.innerWidth<=500){const O=setInterval(()=>{T()},3e3);return()=>{clearInterval(O)}}},[n]),s.jsx(s.Fragment,{children:s.jsxs(ay,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[s.jsx("img",{src:o2,alt:"Previous",onClick:E,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${y?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),s.jsx("img",{src:l2,alt:"Next",onClick:T,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${y?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),s.jsx(uy,{currentIndex:n,count:l.length,children:l.map((O,_)=>s.jsx(cy,{src:O,alt:`Slide ${_}`,style:{borderBottomLeftRadius:"20vw"}},_))}),s.jsxs(dy,{children:[s.jsx("div",{style:{width:"100%"},children:s.jsxs(Ar,{onClick:()=>k(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||p===0,onMouseEnter:()=>w(0),onMouseLeave:C,isClicked:p===0,children:[s.jsx(zn,{children:"양자 개념"}),s.jsxs(In,{onClick:O=>m("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Ar,{onClick:()=>k(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||p===1,onMouseEnter:()=>w(1),onMouseLeave:C,isClicked:p===1,children:[s.jsx(zn,{children:"활용 분야"}),s.jsxs(In,{onClick:O=>m("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Ar,{onClick:()=>k(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||p===2,onMouseEnter:()=>w(2),onMouseLeave:C,isClicked:p===2,children:[s.jsx(zn,{children:"최근 동향"}),s.jsxs(In,{onClick:O=>m("/recent"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Ar,{onClick:()=>k(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||p===3,onMouseEnter:()=>w(3),onMouseLeave:C,isClicked:p===3,children:[s.jsx(zn,{children:"주요 기업"}),s.jsxs(In,{onClick:O=>m("/company"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Ar,{onClick:()=>k(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||p===4,onMouseEnter:()=>w(4),onMouseLeave:C,isClicked:p===4,children:[s.jsx(zn,{children:"양자 퀴즈"}),s.jsxs(In,{onClick:O=>m("/quizmain"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",s.jsx("p",{})]})]})})]})]})})};function hy(){return s.jsx(s.Fragment,{children:s.jsx(py,{})})}var Ah={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xd=fe.createContext&&fe.createContext(Ah),my=["attr","size","title"];function gy(e,t){if(e==null)return{};var n=vy(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vy(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}function Zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ko(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zd(Object(n),!0).forEach(function(r){yy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yy(e,t,n){return t=xy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xy(e){var t=wy(e,"string");return typeof t=="symbol"?t:t+""}function wy(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dh(e){return e&&e.map((t,n)=>fe.createElement(t.tag,Ko({key:n},t.attr),Dh(t.child)))}function Xu(e){return t=>fe.createElement(Sy,Vo({attr:Ko({},e.attr)},t),Dh(e.child))}function Sy(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=gy(e,my),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),fe.createElement("svg",Vo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Ko(Ko({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&fe.createElement("title",null,o),e.children)};return Xd!==void 0?fe.createElement(Xd.Consumer,null,n=>t(n)):t(Ah)}function jy(e){return Xu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function ky(e){return Xu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function qo(e){return Xu({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const Cy=j.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,by=j.img`
  max-width: 40%;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,Ey=j.div`
  font-size: 3rem;
  cursor: pointer;
`;j(Ey)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;const ln=j.div`
  padding: 0.9vw 0;
  color: #292f36;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: arial;
  font-weight: bold;
  text-align: left;
  padding-left: 1vw;

  &:hover {
    background-color: #ddd;
    padding-left: 1.6vw;
    transition: all 0.5s ease;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem;
    padding: 2%;
    margin-bottom: 1.5%;
    
    &:hover {
      background-color: #ddd;
      padding-left: 4vw;
      transition: all 0.5s ease;
    }
  }
`,_y=j.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9vw 1vw;
  background-color: ${e=>e.isScrolled?"#292f36":"transparent"};
  color: ${e=>e.isScrolled?"#fff":"#aaa"};
  transition: background-color 0.9s ease;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  img{
    max-width: 10rem;
  }
  @media (max-width: 500px) {
    img{
      max-width: 8.5rem;
    }
    padding: 1%;
  }
`,Oy=j.div`
  position: fixed;
  top: 1%;
  right: 0;
  background-color: #eee;
  width: 17%;
  padding: 1.5vw;
  padding-right: 2.5vw;
  margin-right: 1.3%;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1050;
  h1{
  background: linear-gradient(to top, #D0E7FE 40%, transparent 10%)
  }
  img{
    width: 25%;
  }
  @media (max-width: 1000px) {
    position: fixed;
    top: 1%;
    right: 0;
    background-color: #eee;
    width: 35%;
    padding: 2.3vw;
    padding-right: 2.7vw;
    margin-right: 1.3%;
    img{
      min-width: 30%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    padding: 5vw;
    margin: 0;
    border-radius: 0;
    h1{
      font-size: 2.3rem;
    }
    img{
      width: 20%;
    }
  }
`,Jd=j.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-right: -10px;
    font-size: 2.5rem;
  }
`,Py="/assets/Genie-Bb0VnGpq.svg",Ll="data:image/svg+xml,%3csvg%20width='95'%20height='95'%20viewBox='0%200%2095%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='47.4595'%20y='0.438599'%20width='31.3747'%20height='31.3747'%20rx='3.92184'%20transform='rotate(45%2047.4595%200.438599)'%20fill='%238E8D94'/%3e%3crect%20x='72.417'%20y='25.3972'%20width='31.3747'%20height='66.6713'%20rx='3.92184'%20transform='rotate(45%2072.417%2025.3972)'%20fill='%23BBBBBB'/%3e%3crect%20x='22.502'%20y='25.3972'%20width='31.3747'%20height='31.3747'%20rx='3.92184'%20transform='rotate(45%2022.502%2025.3972)'%20fill='%23D9D9D9'/%3e%3c/svg%3e";function Ty(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),i=Ye();b.useEffect(()=>{const l=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{r(!n)};return s.jsxs(s.Fragment,{children:[s.jsxs(_y,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"3%"},children:[s.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(by,{src:Py,alt:"Logo"}),s.jsx(Cy,{children:"Jenie"})]}),s.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:s.jsx(Jd,{onClick:o,children:n?s.jsx(qo,{}):s.jsx(jy,{})})})]}),n&&s.jsxs(Oy,{children:[s.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[s.jsx("img",{src:Ll}),s.jsx("h1",{children:"Menu List"})]}),s.jsx(Jd,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:s.jsx(qo,{})})]}),s.jsx(ln,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),s.jsx(ln,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),s.jsx(ln,{onClick:()=>{i("/recent"),r(!1)},children:"최근 동향"}),s.jsx(ln,{onClick:()=>{i("/company"),r(!1)},children:"주요 기업"}),s.jsx(ln,{onClick:()=>{i("/about"),r(!1)},children:"양자 인턴십 소개"}),s.jsx(ln,{onClick:()=>{i("/quizmain"),r(!1)},children:"양자 퀴즈"}),s.jsx(ln,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const zy=j.footer`
  background: #292F36;
  padding: 3% 0;
  border-radius: 8vw 0 0 0;
  color: #fff;
  font-family: Arial, sans-serif;
  z-index: 1000;
  position: relative; 
  
  @media (min-width: 960px) {
    padding: 4% 0;
    border-radius: 0 15vw 0 0;
  }
`,Iy=j.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,Ly=j.div`
  display: flex;
  flex-direction: column;
`,My=j.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;

  h1 {
    font-size: 1.5rem;
    color: #fff;
  }
  @media (max-width: 960px) {
    margin-bottom: 0px;
  }
`,Ry=j.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 3.5%;
  }
`,Ny=j.div`
  margin-top: 4%;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: #ddd;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
  }
`,Ay=j.div`
  margin-top: 1%;
  margin-right: 7%;
  h2 {
    font-size: 1.4rem;

  }
  @media (max-width: 960px) {
    h2{
      opacity: 0;
    }
  }
`,Dy=j.div`
  margin-bottom: 1%;
  text-align: left;
  margin-left: 0px;
  padding: 1%;
  h3{
    align-items: center;
    text-align: left;
    margin: auto 0;
    font-size: 1.2rem;
  }
  @media (max-width: 960px) {
    margin-bottom: 0px;
  }
    
`,ef=j.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,tf=j.div`
  background-color: #000;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  p{
    font-size: 2rem;
    text-align: center;
  }
`,nf=j.div`
  display: flex;
  gap: 4%;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`,Fy=j.div`
  text-align: center;
  margin-top: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3%;

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,rf=j.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  @media (max-width: 960px) {
      display: none;
  }
`,of="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",lf="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",By="/assets/Jininfra-Czzd3TNl.svg",$y=()=>s.jsxs(zy,{children:[s.jsxs(Iy,{children:[s.jsxs(Ly,{children:[s.jsx(Ry,{onClick:()=>window.location.href="https://jininfra.com/",src:By,alt:"Footer Logo"}),s.jsx(My,{children:s.jsx("h1",{children:"주식회사 진인프라"})}),s.jsxs(Ny,{children:[s.jsxs(rf,{style:{marginBottom:"2%"},children:[s.jsx("p",{children:"Email"}),s.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),s.jsxs(rf,{children:[s.jsx("p",{children:"Call"}),s.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),s.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),s.jsxs(Ay,{children:[s.jsx("h2",{children:"Contact Us"}),s.jsxs(Dy,{children:[s.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),s.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),s.jsxs(ef,{children:[s.jsx(tf,{children:s.jsx("p",{children:"👤"})}),s.jsx("span",{children:"YeEun Shin"}),s.jsxs(nf,{children:[s.jsx("a",{href:"https://github.com/yengeun",children:s.jsx("img",{src:of,alt:"Github"})}),s.jsx("a",{href:"mailto:7613ez@gmail.com",children:s.jsx("img",{src:lf,alt:"Gmail"})})]})]}),s.jsxs(ef,{children:[s.jsx(tf,{children:s.jsx("p",{children:"👤"})}),s.jsx("span",{children:"Soeun Yoon"}),s.jsxs(nf,{children:[s.jsx("a",{href:"https://github.com/Dubabbi",children:s.jsx("img",{src:of,alt:"Github"})}),s.jsx("a",{href:"mailto:thdms3160@naver.com",children:s.jsx("img",{src:lf,alt:"Gmail"})})]})]})]})]}),s.jsx(Fy,{children:s.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]});var Fh={},Bh={},Ml={},$h={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})($h);var Wy="Expected a function",sf=NaN,Uy="[object Symbol]",Hy=/^\s+|\s+$/g,Qy=/^[-+]0x[0-9a-f]+$/i,Gy=/^0b[01]+$/i,Vy=/^0o[0-7]+$/i,Ky=parseInt,qy=typeof Oi=="object"&&Oi&&Oi.Object===Object&&Oi,Yy=typeof self=="object"&&self&&self.Object===Object&&self,Xy=qy||Yy||Function("return this")(),Zy=Object.prototype,Jy=Zy.toString,ex=Math.max,tx=Math.min,xs=function(){return Xy.Date.now()};function nx(e,t,n){var r,i,o,l,a,u,c=0,h=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(Wy);t=af(t)||0,Na(n)&&(h=!!n.leading,f="maxWait"in n,o=f?ex(af(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function y(C){var E=r,T=i;return r=i=void 0,c=C,l=e.apply(T,E),l}function x(C){return c=C,a=setTimeout(p,t),h?y(C):l}function v(C){var E=C-u,T=C-c,O=t-E;return f?tx(O,o-T):O}function S(C){var E=C-u,T=C-c;return u===void 0||E>=t||E<0||f&&T>=o}function p(){var C=xs();if(S(C))return d(C);a=setTimeout(p,v(C))}function d(C){return a=void 0,g&&r?y(C):(r=i=void 0,l)}function m(){a!==void 0&&clearTimeout(a),c=0,r=u=i=a=void 0}function w(){return a===void 0?l:d(xs())}function k(){var C=xs(),E=S(C);if(r=arguments,i=this,u=C,E){if(a===void 0)return x(u);if(f)return a=setTimeout(p,t),y(u)}return a===void 0&&(a=setTimeout(p,t)),l}return k.cancel=m,k.flush=w,k}function Na(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function rx(e){return!!e&&typeof e=="object"}function ix(e){return typeof e=="symbol"||rx(e)&&Jy.call(e)==Uy}function af(e){if(typeof e=="number")return e;if(ix(e))return sf;if(Na(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Na(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Hy,"");var n=Gy.test(e);return n||Vy.test(e)?Ky(e.slice(2),n?2:8):Qy.test(e)?sf:+e}var ox=nx,Wh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",l=0;l<arguments.length;l++){var a=arguments[l];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var l="";for(var a in o)t.call(o,a)&&o[a]&&(l=i(l,a));return l}function i(o,l){return l?o?o+" "+l:o+l:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Wh);var Rl=Wh.exports,z={},Zu={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(b);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=r})(Zu);Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=Hh;z.extractObject=void 0;z.filterSettings=wx;z.validSettings=z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=void 0;var lx=Uh(b),sx=Uh(Zu);function Uh(e){return e&&e.__esModule?e:{default:e}}function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function uf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uf(Object(n),!0).forEach(function(r){ax(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ax(e,t,n){return t=ux(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ux(e){var t=cx(e,"string");return wi(t)=="symbol"?t:String(t)}function cx(e,t){if(wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hh(e,t,n){return Math.max(t,Math.min(e,n))}var Zn=z.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},Qh=z.getOnDemandLazySlides=function(t){for(var n=[],r=Gh(t),i=Vh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getRequiredLazySlides=function(t){for(var n=[],r=Gh(t),i=Vh(t),o=r;o<i;o++)n.push(o);return n};var Gh=z.lazyStartIndex=function(t){return t.currentSlide-dx(t)},Vh=z.lazyEndIndex=function(t){return t.currentSlide+fx(t)},dx=z.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},fx=z.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},Aa=z.getWidth=function(t){return t&&t.offsetWidth||0},Kh=z.getHeight=function(t){return t&&t.offsetHeight||0},qh=z.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"},Yh=z.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.extractObject=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.initializedState=function(t){var n=lx.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Aa(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(Aa(o)),a;if(t.vertical)a=i;else{var u=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/t.slidesToShow)}var c=r&&Kh(r.querySelector('[data-index="0"]')),h=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var g=t.lazyLoadedList||[],y=Qh(ee(ee({},t),{},{currentSlide:f,lazyLoadedList:g}));g=g.concat(y);var x={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:c,listHeight:h,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(x.autoplaying="playing"),x};z.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,u=t.lazyLoad,c=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,g=t.slidesToShow,y=t.useCSS,x=t.lazyLoadedList;if(n&&r)return{};var v=l,S,p,d,m={},w={},k=o?l:Hh(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?v=l+a:l>=a&&(v=l-a),u&&x.indexOf(v)<0&&(x=x.concat(v)),m={animating:!0,currentSlide:v,lazyLoadedList:x,targetSlide:v},w={animating:!1,targetSlide:v}}else S=v,v<0?(S=v+a,o?a%f!==0&&(S=a-a%f):S=0):!Yh(t)&&v>c?v=S=c:h&&v>=a?(v=o?a:a-1,S=o?0:a-1):v>=a&&(S=v-a,o?a%f!==0&&(S=0):S=a-g),!o&&v+g>=a&&(S=a-g),p=Xo(ee(ee({},t),{},{slideIndex:v})),d=Xo(ee(ee({},t),{},{slideIndex:S})),o||(p===d&&(v=S),p=d),u&&(x=x.concat(Qh(ee(ee({},t),{},{currentSlide:v})))),y?(m={animating:!0,currentSlide:S,trackStyle:Xh(ee(ee({},t),{},{left:p})),lazyLoadedList:x,targetSlide:k},w={animating:!1,currentSlide:S,trackStyle:Yo(ee(ee({},t),{},{left:d})),swipeLeft:null,targetSlide:k}):m={currentSlide:S,trackStyle:Yo(ee(ee({},t),{},{left:d})),lazyLoadedList:x,targetSlide:k};return{state:m,nextState:w}};z.changeSlide=function(t,n){var r,i,o,l,a,u=t.slidesToScroll,c=t.slidesToShow,h=t.slideCount,f=t.currentSlide,g=t.targetSlide,y=t.lazyLoad,x=t.infinite;if(l=h%u!==0,r=l?0:(h-f)%u,n.message==="previous")o=r===0?u:c-r,a=f-o,y&&!x&&(i=f-o,a=i===-1?h-1:i),x||(a=g-u);else if(n.message==="next")o=r===0?u:r,a=f+o,y&&!x&&(a=(f+u)%h+r),x||(a=g+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,x){var v=gx(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&v==="left"?a=a-h:a<n.currentSlide&&v==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};z.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&Zn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeMove=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,c=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,g=n.onEdge,y=n.swiped,x=n.swiping,v=n.slideCount,S=n.slidesToScroll,p=n.infinite,d=n.touchObject,m=n.swipeEvent,w=n.listHeight,k=n.listWidth;if(!r){if(i)return Zn(t);o&&l&&a&&Zn(t);var C,E={},T=Xo(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var O=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!a&&!x&&O>10)return{scrolling:!0};a&&(d.swipeLength=O);var _=(u?-1:1)*(d.curX>d.startX?1:-1);a&&(_=d.curY>d.startY?1:-1);var R=Math.ceil(v/S),N=qh(n.touchObject,a),A=d.swipeLength;return p||(c===0&&(N==="right"||N==="down")||c+1>=R&&(N==="left"||N==="up")||!Yh(n)&&(N==="left"||N==="up"))&&(A=d.swipeLength*h,f===!1&&g&&(g(N),E.edgeDragged=!0)),!y&&m&&(m(N),E.swiped=!0),o?C=T+A*(w/k)*_:u?C=T-A*_:C=T+A*_,a&&(C=T+A*_),E=ee(ee({},E),{},{touchObject:d,swipeLeft:C,trackStyle:Yo(ee(ee({},n),{},{left:C}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(E.swiping=!0,Zn(t)),E}};z.swipeEnd=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,h=n.swipeToSlide,f=n.scrolling,g=n.onSwipe,y=n.targetSlide,x=n.currentSlide,v=n.infinite;if(!r)return i&&Zn(t),{};var S=u?c/a:l/a,p=qh(o,u),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return d;if(o.swipeLength>S){Zn(t),g&&g(p);var m,w,k=v?x:y;switch(p){case"left":case"up":w=k+df(n),m=h?cf(n,w):w,d.currentDirection=0;break;case"right":case"down":w=k-df(n),m=h?cf(n,w):w,d.currentDirection=1;break;default:m=k}d.triggerSlideHandler=m}else{var C=Xo(n);d.trackStyle=Xh(ee(ee({},n),{},{left:C}))}return d};var px=z.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},cf=z.checkNavigable=function(t,n){var r=px(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},df=z.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(u){if(t.vertical){if(u.offsetTop+Kh(u)/2>t.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+Aa(u)/2>t.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll},Ju=z.checkSpecKeys=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Yo=z.getTrackCSS=function(t){Ju(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=mx(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",u=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:l,transform:a,msTransform:u})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},Xh=z.getTrackAnimateCSS=function(t){Ju(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Yo(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Xo=z.getTrackLeft=function(t){if(t.unslick)return 0;Ju(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,u=t.slidesToScroll,c=t.slideWidth,h=t.listWidth,f=t.variableWidth,g=t.slideHeight,y=t.fade,x=t.vertical,v=0,S,p,d=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-mo(t),l%u!==0&&n+u>l&&(m=-(n>l?a-(n-l):l%u)),o&&(m+=parseInt(a/2))):(l%u!==0&&n+u>l&&(m=a-l%u),o&&(m=parseInt(a/2))),v=m*c,d=m*g,x?S=n*g*-1+d:S=n*c*-1+v,f===!0){var w,k=r&&r.node;if(w=n+mo(t),p=k&&k.childNodes[w],S=p?p.offsetLeft*-1:0,o===!0){w=i?n+mo(t):n,p=k&&k.children[w],S=0;for(var C=0;C<w;C++)S-=k&&k.children[C]&&k.children[C].offsetWidth;S-=parseInt(t.centerPadding),S+=p&&(h-p.offsetWidth)/2}}return S},mo=z.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},hx=z.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},mx=z.getTotalSlides=function(t){return t.slideCount===1?1:mo(t)+t.slideCount+hx(t)},gx=z.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+vx(t)?"left":"right":t.targetSlide<t.currentSlide-yx(t)?"right":"left"},vx=z.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1},yx=z.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};z.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var xx=z.validSettings=Object.keys(sx.default);function wx(e){return xx.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.Track=void 0;var Dt=Zh(b),ws=Zh(Rl),Ss=z;function Zh(e){return e&&e.__esModule?e:{default:e}}function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function Sx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ff(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,em(r.key),r)}}function jx(e,t,n){return t&&ff(e.prototype,t),n&&ff(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fa(e,t)}function Fa(e,t){return Fa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fa(e,t)}function Cx(e){var t=Jh();return function(){var r=Zo(e),i;if(t){var o=Zo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return bx(this,i)}}function bx(e,t){if(t&&(hr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ba(e)}function Ba(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Jh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Jh=function(){return!!e})()}function Zo(e){return Zo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Zo(e)}function pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pf(Object(n),!0).forEach(function(r){$a(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $a(e,t,n){return t=em(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function em(e){var t=Ex(e,"string");return hr(t)=="symbol"?t:String(t)}function Ex(e,t){if(hr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(hr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var js=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var u=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},_x=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},ks=function(t,n){return t.key||n},Ox=function(t){var n,r=[],i=[],o=[],l=Dt.default.Children.count(t.children),a=(0,Ss.lazyStartIndex)(t),u=(0,Ss.lazyEndIndex)(t);return Dt.default.Children.forEach(t.children,function(c,h){var f,g={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=c:f=Dt.default.createElement("div",null);var y=_x(Re(Re({},t),{},{index:h})),x=f.props.className||"",v=js(Re(Re({},t),{},{index:h}));if(r.push(Dt.default.cloneElement(f,{key:"original"+ks(f,h),"data-index":h,className:(0,ws.default)(v,x),tabIndex:"-1","aria-hidden":!v["slick-active"],style:Re(Re({outline:"none"},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var S=l-h;S<=(0,Ss.getPreClones)(t)&&(n=-S,n>=a&&(f=c),v=js(Re(Re({},t),{},{index:n})),i.push(Dt.default.cloneElement(f,{key:"precloned"+ks(f,n),"data-index":n,tabIndex:"-1",className:(0,ws.default)(v,x),"aria-hidden":!v["slick-active"],style:Re(Re({},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))),n=l+h,n<u&&(f=c),v=js(Re(Re({},t),{},{index:n})),o.push(Dt.default.cloneElement(f,{key:"postcloned"+ks(f,n),"data-index":n,tabIndex:"-1",className:(0,ws.default)(v,x),"aria-hidden":!v["slick-active"],style:Re(Re({},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)};Nl.Track=function(e){kx(n,e);var t=Cx(n);function n(){var r;Sx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),$a(Ba(r),"node",null),$a(Ba(r),"handleRef",function(a){r.node=a}),r}return jx(n,[{key:"render",value:function(){var i=Ox(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,u=o.onMouseLeave,c={onMouseEnter:l,onMouseOver:a,onMouseLeave:u};return Dt.default.createElement("div",Da({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(Dt.default.PureComponent);var Al={};function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}Object.defineProperty(Al,"__esModule",{value:!0});Al.Dots=void 0;var Ki=tm(b),Px=tm(Rl),hf=z;function tm(e){return e&&e.__esModule?e:{default:e}}function mf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mf(Object(n),!0).forEach(function(r){zx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zx(e,t,n){return t=nm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ix(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nm(r.key),r)}}function Lx(e,t,n){return t&&gf(e.prototype,t),n&&gf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function nm(e){var t=Mx(e,"string");return mr(t)=="symbol"?t:String(t)}function Mx(e,t){if(mr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Wa(e,t)}function Wa(e,t){return Wa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Wa(e,t)}function Nx(e){var t=rm();return function(){var r=Jo(e),i;if(t){var o=Jo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ax(this,i)}}function Ax(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Dx(e)}function Dx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rm=function(){return!!e})()}function Jo(e){return Jo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jo(e)}var Fx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};Al.Dots=function(e){Rx(n,e);var t=Nx(n);function n(){return Ix(this,n),t.apply(this,arguments)}return Lx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,g=i.currentSlide,y=Fx({slideCount:f,slidesToScroll:c,slidesToShow:h,infinite:u}),x={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},v=[],S=0;S<y;S++){var p=(S+1)*c-1,d=u?p:(0,hf.clamp)(p,0,f-1),m=d-(c-1),w=u?m:(0,hf.clamp)(m,0,f-1),k=(0,Px.default)({"slick-active":u?g>=w&&g<=d:g===w}),C={message:"dots",index:S,slidesToScroll:c,currentSlide:g},E=this.clickHandler.bind(this,C);v=v.concat(Ki.default.createElement("li",{key:S,className:k},Ki.default.cloneElement(this.props.customPaging(S),{onClick:E})))}return Ki.default.cloneElement(this.props.appendDots(v),Tx({className:this.props.dotsClass},x))}}]),n}(Ki.default.PureComponent);var gr={};function vr(e){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(e)}Object.defineProperty(gr,"__esModule",{value:!0});gr.PrevArrow=gr.NextArrow=void 0;var Jn=om(b),im=om(Rl),Bx=z;function om(e){return e&&e.__esModule?e:{default:e}}function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}function vf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vf(Object(n),!0).forEach(function(r){$x(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $x(e,t,n){return t=am(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,am(r.key),r)}}function sm(e,t,n){return t&&yf(e.prototype,t),n&&yf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function am(e){var t=Wx(e,"string");return vr(t)=="symbol"?t:String(t)}function Wx(e,t){if(vr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function um(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ua(e,t)}function Ua(e,t){return Ua=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ua(e,t)}function cm(e){var t=dm();return function(){var r=nl(e),i;if(t){var o=nl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ux(this,i)}}function Ux(e,t){if(t&&(vr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Hx(e)}function Hx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dm=function(){return!!e})()}function nl(e){return nl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nl(e)}gr.PrevArrow=function(e){um(n,e);var t=cm(n);function n(){return lm(this,n),t.apply(this,arguments)}return sm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,im.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=Jn.default.cloneElement(this.props.prevArrow,tl(tl({},l),a)):u=Jn.default.createElement("button",el({key:"0",type:"button"},l)," ","Previous"),u}}]),n}(Jn.default.PureComponent);gr.NextArrow=function(e){um(n,e);var t=cm(n);function n(){return lm(this,n),t.apply(this,arguments)}return sm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Bx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,im.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=Jn.default.cloneElement(this.props.nextArrow,tl(tl({},l),a)):u=Jn.default.createElement("button",el({key:"1",type:"button"},l)," ","Next"),u}}]),n}(Jn.default.PureComponent);var fm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Ha=typeof window<"u"&&typeof document<"u"&&window.document===document,rl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Qx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(rl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Gx=2;function Vx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){Qx(o)}function a(){var u=Date.now();if(n){if(u-i<Gx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=u}return a}var Kx=20,qx=["top","right","bottom","left","width","height","size","weight"],Yx=typeof MutationObserver<"u",Xx=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Vx(this.refresh.bind(this),Kx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ha||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Yx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ha||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=qx.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),pm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||rl},hm=Dl(0,0,0,0);function il(e){return parseFloat(e)||0}function xf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+il(o)},0)}function Zx(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=il(l)}return n}function Jx(e){var t=e.getBBox();return Dl(0,0,t.width,t.height)}function e3(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return hm;var r=yr(e).getComputedStyle(e),i=Zx(r),o=i.left+i.right,l=i.top+i.bottom,a=il(r.width),u=il(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=xf(r,"left","right")+o),Math.round(u+l)!==n&&(u-=xf(r,"top","bottom")+l)),!n3(e)){var c=Math.round(a+o)-t,h=Math.round(u+l)-n;Math.abs(c)!==1&&(a-=c),Math.abs(h)!==1&&(u-=h)}return Dl(i.left,i.top,a,u)}var t3=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yr(e).SVGGraphicsElement}:function(e){return e instanceof yr(e).SVGElement&&typeof e.getBBox=="function"}}();function n3(e){return e===yr(e).document.documentElement}function r3(e){return Ha?t3(e)?Jx(e):e3(e):hm}function i3(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return pm(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Dl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var o3=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Dl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=r3(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),l3=function(){function e(t,n){var r=i3(n);pm(this,{target:t,contentRect:r})}return e}(),s3=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new fm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new o3(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new l3(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),mm=typeof WeakMap<"u"?new WeakMap:new fm,gm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Xx.getInstance(),r=new s3(t,n,this);mm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){gm.prototype[e]=function(){var t;return(t=mm.get(this))[e].apply(t,arguments)}});var a3=function(){return typeof rl.ResizeObserver<"u"?rl.ResizeObserver:gm}();const u3=Object.freeze(Object.defineProperty({__proto__:null,default:a3},Symbol.toStringTag,{value:"Module"})),c3=Nm(u3);Object.defineProperty(Ml,"__esModule",{value:!0});Ml.InnerSlider=void 0;var Pe=Ei(b),d3=Ei($h),f3=Ei(ox),p3=Ei(Rl),ne=z,h3=Nl,m3=Al,wf=gr,g3=Ei(c3);function Ei(e){return e&&e.__esModule?e:{default:e}}function bn(e){"@babel/helpers - typeof";return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bn(e)}function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}function v3(e,t){if(e==null)return{};var n=y3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function y3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sf(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ym(r.key),r)}}function w3(e,t,n){return t&&jf(e.prototype,t),n&&jf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qa(e,t)}function Qa(e,t){return Qa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Qa(e,t)}function j3(e){var t=vm();return function(){var r=ll(e),i;if(t){var o=ll(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return k3(this,i)}}function k3(e,t){if(t&&(bn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vm=function(){return!!e})()}function ll(e){return ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ll(e)}function U(e,t,n){return t=ym(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ym(e){var t=C3(e,"string");return bn(t)=="symbol"?t:String(t)}function C3(e,t){if(bn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(bn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Ml.InnerSlider=function(e){S3(n,e);var t=j3(n);function n(r){var i;x3(this,n),i=t.call(this,r),U(W(i),"listRefHandler",function(l){return i.list=l}),U(W(i),"trackRefHandler",function(l){return i.track=l}),U(W(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(l)+"px"}}),U(W(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));l.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new g3.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),U(W(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),U(W(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(l);c&&i.updateState(u,c,function(){i.state.currentSlide>=Pe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Pe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),U(W(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,f3.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),U(W(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),U(W(i),"updateState",function(l,a,u){var c=(0,ne.initializedState)(l);l=D(D(D({},l),c),{},{slideIndex:c.currentSlide});var h=(0,ne.getTrackLeft)(l);l=D(D({},l),{},{left:h});var f=(0,ne.getTrackCSS)(l);(a||Pe.default.Children.count(i.props.children)!==Pe.default.Children.count(l.children))&&(c.trackStyle=f),i.setState(c,u)}),U(W(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,u=[],c=(0,ne.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,ne.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){u.push(E.props.style.width),l+=E.props.style.width});for(var f=0;f<c;f++)a+=u[u.length-1-f],l+=u[u.length-1-f];for(var g=0;g<h;g++)l+=u[g];for(var y=0;y<i.state.currentSlide;y++)a+=u[y];var x={width:l+"px",left:-a+"px"};if(i.props.centerMode){var v="".concat(u[i.state.currentSlide],"px");x.left="calc(".concat(x.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:x}}var S=Pe.default.Children.count(i.props.children),p=D(D(D({},i.props),i.state),{},{slideCount:S}),d=(0,ne.getPreClones)(p)+(0,ne.getPostClones)(p)+S,m=100/i.props.slidesToShow*d,w=100/d,k=-w*((0,ne.getPreClones)(p)+i.state.currentSlide)*m/100;i.props.centerMode&&(k+=(100-w*m/100)/2);var C={width:m+"%",left:k+"%"};return{slideWidth:w+"%",trackStyle:C}}),U(W(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,u=0;Array.prototype.forEach.call(l,function(c){var h=function(){return++u&&u>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(g){f(g),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=h,c.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),U(W(i),"progressiveLazyLoad",function(){for(var l=[],a=D(D({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,ne.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,ne.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){l.push(c);break}l.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),U(W(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,h=u.beforeChange,f=u.onLazyLoad,g=u.speed,y=u.afterChange,x=i.state.currentSlide,v=(0,ne.slideHandler)(D(D(D({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=v.state,p=v.nextState;if(S){h&&h(x,S.currentSlide);var d=S.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(x),delete i.animationEndCallback),i.setState(S,function(){c&&i.asNavForIndex!==l&&(i.asNavForIndex=l,c.innerSlider.slideHandler(l)),p&&(i.animationEndCallback=setTimeout(function(){var m=p.animating,w=v3(p,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(S.currentSlide),delete i.animationEndCallback})},g))})}}),U(W(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=D(D({},i.props),i.state),c=(0,ne.changeSlide)(u,l);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),U(W(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),U(W(i),"keyHandler",function(l){var a=(0,ne.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),U(W(i),"selectHandler",function(l){i.changeSlide(l)}),U(W(i),"disableBodyScroll",function(){var l=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=l}),U(W(i),"enableBodyScroll",function(){window.ontouchmove=null}),U(W(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ne.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),U(W(i),"swipeMove",function(l){var a=(0,ne.swipeMove)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),U(W(i),"swipeEnd",function(l){var a=(0,ne.swipeEnd)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),U(W(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),U(W(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),U(W(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),U(W(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),U(W(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)(D(D({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),U(W(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),U(W(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),U(W(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),U(W(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),U(W(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),U(W(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),U(W(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),U(W(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),U(W(i),"render",function(){var l=(0,p3.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),u=(0,ne.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=D(D({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,ne.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;f=D(D({},f),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),h=Pe.default.createElement(m3.Dots,f)}var y,x,v=(0,ne.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(y=Pe.default.createElement(wf.PrevArrow,v),x=Pe.default.createElement(wf.NextArrow,v));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var d=D(D({},S),p),m=i.props.touchMove,w={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},k={className:l}),Pe.default.createElement("div",k,i.props.unslick?"":y,Pe.default.createElement("div",ol({ref:i.listRefHandler},w),Pe.default.createElement(h3.Track,ol({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":x,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=D(D({},d3.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Pe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return w3(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var u=a[l];if(!i.hasOwnProperty(u)){o=!0;break}if(!(bn(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){o=!0;break}}return o||Pe.default.Children.count(this.props.children)!==Pe.default.Children.count(i.children)}}]),n}(Pe.default.Component);var b3=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},E3=b3,_3=E3,O3=function(e){var t=/[height|width]$/;return t.test(e)},kf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=_3(r),O3(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},P3=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=kf(n),r<e.length-1&&(t+=", ")}),t):kf(e)},T3=P3,Cs,Cf;function z3(){if(Cf)return Cs;Cf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Cs=e,Cs}var bs,bf;function xm(){if(bf)return bs;bf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return bs={isFunction:n,isArray:t,each:e},bs}var Es,Ef;function I3(){if(Ef)return Es;Ef=1;var e=z3(),t=xm().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Es=n,Es}var _s,_f;function L3(){if(_f)return _s;_f=1;var e=I3(),t=xm(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,u){var c=this.queries,h=u&&this.browserIsIncapable;return c[l]||(c[l]=new e(l,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),c[l].addHandler(f)}),this},unregister:function(l,a){var u=this.queries[l];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[l])),this}},_s=o,_s}var Os,Of;function M3(){if(Of)return Os;Of=1;var e=L3();return Os=new e,Os}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(b),n=Ml,r=l(T3),i=l(Zu),o=z;function l(O){return O&&O.__esModule?O:{default:O}}function a(O){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},a(O)}function u(){return u=Object.assign?Object.assign.bind():function(O){for(var _=1;_<arguments.length;_++){var R=arguments[_];for(var N in R)Object.prototype.hasOwnProperty.call(R,N)&&(O[N]=R[N])}return O},u.apply(this,arguments)}function c(O,_){var R=Object.keys(O);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(O);_&&(N=N.filter(function(A){return Object.getOwnPropertyDescriptor(O,A).enumerable})),R.push.apply(R,N)}return R}function h(O){for(var _=1;_<arguments.length;_++){var R=arguments[_]!=null?arguments[_]:{};_%2?c(Object(R),!0).forEach(function(N){k(O,N,R[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(R)):c(Object(R)).forEach(function(N){Object.defineProperty(O,N,Object.getOwnPropertyDescriptor(R,N))})}return O}function f(O,_){if(!(O instanceof _))throw new TypeError("Cannot call a class as a function")}function g(O,_){for(var R=0;R<_.length;R++){var N=_[R];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(O,C(N.key),N)}}function y(O,_,R){return _&&g(O.prototype,_),R&&g(O,R),Object.defineProperty(O,"prototype",{writable:!1}),O}function x(O,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(_&&_.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),_&&v(O,_)}function v(O,_){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(N,A){return N.__proto__=A,N},v(O,_)}function S(O){var _=m();return function(){var N=w(O),A;if(_){var F=w(this).constructor;A=Reflect.construct(N,arguments,F)}else A=N.apply(this,arguments);return p(this,A)}}function p(O,_){if(_&&(a(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(O)}function d(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function m(){try{var O=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!O})()}function w(O){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},w(O)}function k(O,_,R){return _=C(_),_ in O?Object.defineProperty(O,_,{value:R,enumerable:!0,configurable:!0,writable:!0}):O[_]=R,O}function C(O){var _=E(O,"string");return a(_)=="symbol"?_:String(_)}function E(O,_){if(a(O)!="object"||!O)return O;var R=O[Symbol.toPrimitive];if(R!==void 0){var N=R.call(O,_||"default");if(a(N)!="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(O)}var T=(0,o.canUseDOM)()&&M3();e.default=function(O){x(R,O);var _=S(R);function R(N){var A;return f(this,R),A=_.call(this,N),k(d(A),"innerSliderRefHandler",function(F){return A.innerSlider=F}),k(d(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),k(d(A),"slickNext",function(){return A.innerSlider.slickNext()}),k(d(A),"slickGoTo",function(F){var it=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(F,it)}),k(d(A),"slickPause",function(){return A.innerSlider.pause("paused")}),k(d(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return y(R,[{key:"media",value:function(A,F){T.register(A,F),this._responsiveMediaHandlers.push({query:A,handler:F})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var F=this.props.responsive.map(function(le){return le.breakpoint});F.sort(function(le,we){return le-we}),F.forEach(function(le,we){var I;we===0?I=(0,r.default)({minWidth:0,maxWidth:le}):I=(0,r.default)({minWidth:F[we-1]+1,maxWidth:le}),(0,o.canUseDOM)()&&A.media(I,function(){A.setState({breakpoint:le})})});var it=(0,r.default)({minWidth:F.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(it,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){T.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,F,it;this.state.breakpoint?(it=this.props.responsive.filter(function(Me){return Me.breakpoint===A.state.breakpoint}),F=it[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),it[0].settings)):F=h(h({},i.default),this.props),F.centerMode&&(F.slidesToScroll>1,F.slidesToScroll=1),F.fade&&(F.slidesToShow>1,F.slidesToScroll>1,F.slidesToShow=1,F.slidesToScroll=1);var le=t.default.Children.toArray(this.props.children);le=le.filter(function(Me){return typeof Me=="string"?!!Me.trim():!!Me}),F.variableWidth&&(F.rows>1||F.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),F.variableWidth=!1);for(var we=[],I=null,M=0;M<le.length;M+=F.rows*F.slidesPerRow){for(var B=[],Q=M;Q<M+F.rows*F.slidesPerRow;Q+=F.slidesPerRow){for(var V=[],Oe=Q;Oe<Q+F.slidesPerRow&&(F.variableWidth&&le[Oe].props.style&&(I=le[Oe].props.style.width),!(Oe>=le.length));Oe+=1)V.push(t.default.cloneElement(le[Oe],{key:100*M+10*Q+Oe,tabIndex:-1,style:{width:"".concat(100/F.slidesPerRow,"%"),display:"inline-block"}}));B.push(t.default.createElement("div",{key:10*M+Q},V))}F.variableWidth?we.push(t.default.createElement("div",{key:M,style:{width:I}},B)):we.push(t.default.createElement("div",{key:M},B))}if(F==="unslick"){var $e="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:$e},le)}else we.length<=F.slidesToShow&&!F.infinite&&(F.unslick=!0);return t.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(F)),we)}}]),R}(t.default.Component)})(Bh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Bh);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(Fh);const R3=$f(Fh),ec=j.div`
  max-width: 100%;
  overflow: hidden;
  cursor: text;
  user-select: text;
  @media(max-width: 780px){
    margin: 0 auto;
  }
`,N3=j.div`
  max-width: 100%;
  @media(max-width: 780px){
    max-width: 93%;
    margin: 0 auto;
  }
`,tc=j.header`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`,nc=j.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`,A3=j.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 9rem;
  right: 3rem;
  z-index: 10000;
  background-color: #f5e0da;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  align-items: center;
  border-radius: 50%;
  @media(max-width: 800px){
    width: 4.5rem;
    height: 4.5rem;
  }
`,rc=j.h1`
  font-size: 2.5rem;
  font-weight: bold;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Ps=j.h2`
  font-size: 2.2rem;
  color: #0B212E;
  margin: 20px;
  padding: 0 50px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    margin-top: 5%;
  }
`,D3=j.div`
  width: 100%;
  overflow: visible;
  padding: 0 50px;
  margin-top: 5%;
  margin-bottom: 3%;
  @media(max-width: 780px){
    margin-top: 12%;
    padding: 0 30px;
  }
`,F3=j.div`
  padding-left: 5%;
  margin-bottom: 6%;
  p{
    font-size: 1.6rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  .slick-prev, .slick-next {
    z-index: 1;
  }

  .slick-dots li button:before {
    color: #0B212E;
  }

  .slick-dots li.slick-active button:before {
    color: #0B212E;
  }
`,B3=_r`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,Ts=j.img`
  height: 25vh;
  cursor: pointer;
  width: 97%;
  object-fit: cover;
  margin-bottom: 1%;
`,$3=j.div`
  display: flex;
  animation: ${B3} 15s linear infinite;
`,Pf=j.div`
  width: 25%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 3%;
  padding-top: 120px;
  padding-bottom: 12px;
  position: relative;
  margin-right: 30px; 
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  @media(max-width: 780px){
    width: 50%;
    padding-top: 80px;
    padding-bottom: 1px;
  }
  &:hover {
    transform: scale(1.06); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`,Tf=j.img`
  width: 80%;
  height: 180px;
  object-fit: cover;
  position: absolute; 
  top: -50px; 
  left: 10%;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media(max-width: 780px){
    max-height: 150px;
  }
`,zf=j.div`
  padding: 20px 0 10px;
  line-height: 1.7;
  .title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #0B212E;
    margin: 10px 0 5px 0;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    color: #000;
    max-width: 93%;
    margin: 0 auto;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  @media(max-width: 780px){
    line-height: 1.6;
    .title {
      font-size: 1.3rem;
    }
    .subtitle {
      font-size: 1.1rem;
    }
}
`,W3=j.div`
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
`,U3=j.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`,H3=j.div`
  padding: 15px 0;
`,Q3=j.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,G3=j.div`
  display: flex;
  justify-content: space-between;
  color: #7d7d7d;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,V3=j.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #4a4a4a;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,K3=j.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 10% 0;
  @media (max-width: 780px) {
    flex-direction: column-reverse; 
  }
`,q3=j.img`
  width: 250px;
  height: auto;
  @media (max-width: 780px) {
    margin-right:40%;
    width: 200px;
    margin-top: 5%;
  }
`,Y3=j.div`
  background-color: white;
  border-radius: 15px;
  padding: 3%;
  margin-left: 20px;
  position: relative;
  max-width: 450px;
  font-size: 16px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent white transparent transparent;
  }
  @media (max-width: 780px) {
    margin-left: 0;
    margin-top: 20px;

    &::before {
      top: auto;
      bottom: -20px; 
      left: 10%; 
      margin-left: -10px; 
      border-color: white transparent transparent transparent; 
    }
  }
`,X3=j.p`
  line-height: 1.7;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Z3=j.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #444;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Ga=j.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 3%;
  margin: 0 auto;
  position: relative;
  max-width: 700px;
  font-size: 13px;
  line-height: 1.7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
   transition: transform 0.3s ease-in-out;
  &:hover{
    transform: scale(1.04);
  }
  h1{
    color: #170F49;
    font-size: 1.7rem;
    line-height: 1.8;
    margin-bottom: 2px;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  p{
    color: #666;
    font-size: 1.3rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  @media(max-width: 780px){
    margin: 0 2%;
    h1{
      font-size: 1.4rem;
    }
    p{
      font-size: 1rem;
    }
    &:hover{
      transform: scale(1.02);
    }
  }
`,wm=j.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  &:hover {
    background-color: #0056b3;
  }

  &::before {
    content: '↗';
    margin-right: 8px;
  }
`,Va=j.div`
  max-width: 700px;
  margin: 0 auto;
  h1{
    margin: 3% 0;
    font-size: 2rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  @media(max-width: 780px){
    max-width: 93%;
    margin: 0 auto;
    h1{
      font-size: 1.7rem;
      &::selection {
        background-color: #60E6F2;
        color: #000;
      }
    }
  }
`,J3=j.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,ew=j.div`
  margin-bottom: 20px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,tw=j.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,nw=j.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,rw="/assets/ball-RuGWw7hf.svg",iw="/assets/ball2-_4ZmxEbj.svg",go="/assets/cat-B7n9BXOC.svg",Sm="/assets/cat2-DFpCBDnE.svg",ow="/assets/quantum2-Z_9Fj8HX.svg",lw="/assets/window-BGzfOsee.svg",sw=j.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,jm=j.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`,km=j.div`
  max-width: 90%;
  margin-left: 5%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 2%;
    font-size: 2.6rem;
      @media(max-width: 900px){
        margin-top: 15%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
    max-width: 97%;
  }
`,aw=j.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  @media (max-width: 900px) {
      padding: 1%;
      max-width: 95%;
      margin-left: 2.5%;
  }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.6rem;
    @media (max-width: 900px) {
      font-size: 2.3rem;
    }
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  .accordion-item {
    border: 1px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #333;
  }

  .accordion-title {
    padding-top: 2%;
    padding-bottom: 1.5%;
    letter-spacing: 2px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
    @media (max-width: 900px) {
      padding-top: 3.5%;
      padding-bottom: 2.3%;
      padding-left: 4.5%;
      padding-right: 4.5%;
    }
      
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 3%;
    background-color: #444;
    letter-spacing: 1.4px;
    color: #eee;
    font-size: 1.9rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    h1{
      font-size: 2.1rem;
       @media (max-width: 900px) {
          font-size: 1.7rem;
       }
    }
    p{
       @media (max-width: 900px) {
          font-size: 1.4rem;
          margin-bottom: 1%;
       }
    }
    a{
      color: #007bff;
      font-size: 1.7rem;
    }
      @media (max-width: 900px) {
        padding: 5%;
      }
  }
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 3%;
    font-size: 1.2rem;
    line-height: 1.7;
    a{
      color: #007bff;
      font-size: 1.6rem;
      padding-left: 40%;
    }
  }
  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
    font-size: 1rem;
  }
`;j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;j.div`
  background-color: #eee;
  padding: 20px;
  border-radius: 8px;
  width: 85%;
  max-width: 85%;
  height: 90vh;  
  position: relative;
  overflow-y: auto; 
  max-height: 90vh; 

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;const Ka=j.button`
padding: 10px 20px;
margin: 20px auto; 
font-size: 1.3rem;
display: block; 
cursor: pointer;
background-color: #007bff; 
color: white;
border: none;
border-radius: 5px;
text-align: center;
&:hover {
  background-color: #0056b3;
}
`,Cm=j.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 2%;
    top: 1%;
    width: 100%;
    padding: 20px;

    img {
      max-width: 60px;
      @media (max-width: 768px) {
        display: none;
      } 
    }
    a {
        width: 20%;
        margin-top: 4%;
    }
`,uw=j.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  flex-wrap: wrap;

  & > div:first-child {
    flex: 1 1 40%; 
    text-align: center;
    img{
      max-width: 60%;
       @media (max-width: 700px) {
        max-width: 30%;
       }
    }
  }

  & > div:last-child {
    background-color: #D5E1DD;
    color: #333;
    flex: 1 1 60%; 
    text-align: left;
    padding: 3%;
    border-radius: 12px;
    font-size: 1.7rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    & > div {
      max-width: 100%; 
    }

    & img {
      max-width: 80%; 
    }
  }
`,cw=j.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
`,dw=_r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fw=j.img`
  max-width: 33%;
  animation: ${dw} 8s linear infinite;
  @media(max-width: 800px){
    max-width: 60%;
  }
`,If=j.button`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`,pw=()=>{b.useState(!1);const e=Ye(),[t,n]=b.useState([]),r=i=>{t.includes(i)?n(t.filter(o=>o!==i)):n([...t,i])};return s.jsx(sw,{children:s.jsxs(aw,{children:[s.jsx("h1",{children:"양자 개념"}),s.jsx("hr",{}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(0)?"active":""}`,onClick:()=>r(0),children:[s.jsx("span",{children:"양자란 ?"}),s.jsx("span",{children:t.includes(0)?"▲":"▼"})]}),t.includes(0)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 쉽게 말해, ",s.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자"}),"라고 부릅니다. 처음으로 양자는 빛에서 발견되었으며, 이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다."]}),s.jsx("div",{style:{textAlign:"center",height:"40vh"},children:s.jsx(fw,{src:ow})})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(1)?"active":""}`,onClick:()=>r(1),children:[s.jsx("span",{children:"양자역학이란 ?"}),s.jsx("span",{children:t.includes(1)?"▲":"▼"})]}),t.includes(1)&&s.jsx("div",{className:"accordion-content",children:s.jsxs("p",{children:["양자역학은 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론"}),"으로, 양자역학은 양자라는 에너지의 최소 단위를 포함한 아주 작은 입자들(전자, 광자 등)의 행동과 상호작용을 연구하는 물리학의 한 분야입니다. 이는 입자들이 고전 물리학의 법칙을 따르지 않고, 파동과 입자 성질을 동시에 가지며, 불확정성과 중첩 등의 독특한 성질을 나타내는 현상들을 설명합니다."]})})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(2)?"active":""}`,onClick:()=>r(2),children:[s.jsx("span",{children:"불확정성의 원리"}),s.jsx("span",{children:t.includes(2)?"▲":"▼"})]}),t.includes(2)&&s.jsxs("div",{className:"accordion-content",children:[s.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),s.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),s.jsxs("p",{children:["하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다. 이는 마치",s.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것"}),"과 비슷합니다."]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10%",height:"170px"},children:[s.jsx("img",{src:iw,style:{width:"100px",minWidth:"20%"},alt:"Ball"}),s.jsx("img",{src:rw,style:{width:"100px",minWidth:"15%"},alt:"Ball"})]})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(3)?"active":""}`,onClick:()=>r(3),children:[s.jsx("span",{children:"양자 중첩(슈뢰딩거의 고양이)"}),s.jsx("span",{children:t.includes(3)?"▲":"▼"})]}),t.includes(3)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"에르빈 슈뢰딩거"}),"가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."]}),s.jsx("div",{style:{textAlign:"center"},children:s.jsx(If,{style:{cursor:"pointer"},onClick:i=>e("/cat"),children:" More"})})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(4)?"active":""}`,onClick:()=>r(4),children:[s.jsx("span",{children:"파동 함수 붕괴"}),s.jsx("span",{children:t.includes(4)?"▲":"▼"})]}),t.includes(4)&&s.jsxs("div",{className:"accordion-content",children:[s.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:"중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정"}),s.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),s.jsxs("p",{children:["양자 물체는 여러 상태가 동시에 존재할 수 있는데, 이 상태를 기술하는 것이 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"파동 함수"}),"입니다. 여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다. 파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 이를 파동 함수가 붕괴했다고 표현합니다."]}),s.jsxs(cw,{children:[s.jsx("img",{src:go,alt:"cat",style:{maxWidth:"40%"}})," ",s.jsx("img",{src:Sm,alt:"cat2",style:{minWidth:"19%",width:"177px",marginBottom:"0px"}})]}),s.jsx("p",{style:{marginTop:"5%"},children:"파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다."})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(5)?"active":""}`,onClick:()=>r(5),children:[s.jsx("span",{children:"파동-입자 이중성"}),s.jsx("span",{children:t.includes(5)?"▲":"▼"})]}),t.includes(5)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자역학의 중요한 개념 중 하나는 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"파동-입자 이중성"}),"입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다. 예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다. 파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다."]}),s.jsxs(uw,{children:[s.jsx("div",{style:{flex:"1 1 40%",textAlign:"center"},children:s.jsx("img",{src:lw})}),s.jsx("div",{style:{flex:"1 1 60%",textAlign:"left"},children:s.jsx("p",{children:'빛을 생각해봅시다. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다. 그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다. 이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.'})})]})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(6)?"active":""}`,onClick:()=>r(6),children:[s.jsx("span",{children:"양자 얽힘"}),s.jsx("span",{children:t.includes(6)?"▲":"▼"})]}),t.includes(6)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자 얽힘은 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"두 개 이상의 입자가 서로 강하게 연결되어 있는 상태"}),"를 말합니다. 얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다."]}),s.jsx("p",{children:'양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'}),s.jsx("div",{style:{textAlign:"center"},children:s.jsx(If,{style:{cursor:"pointer"},onClick:i=>e("/coinentanglement"),children:" 예시 보기"})})]})]}),s.jsx("div",{style:{margin:"5% 0"},children:s.jsx(wm,{href:"/industry",rel:"양자산업백서",children:"양자산업백서"})})]})})};function hw(){return s.jsx(s.Fragment,{children:s.jsx(pw,{})})}const Fl=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -5%;
  margin-bottom: -10%;
  background-color: #eee;
`,ic=j.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
    @media (max-width: 700px) {
    margin-left:3%;
    font-size:20px;
    margin-top:-100%;
    padding:10px;
    }
`,xr=j.button`
  font-size: 18px;
  padding: 10px 20px;
  margin: 10px;
  border: 2px solid #333;
  background-color: white;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

`,oc=j.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  p {
    font-size: 18px;
    margin: 0;
  }

  small {
    font-size: 14px;
    display: block;
    margin-top: 10px;
    color: #ddd;
  }
     @media (max-width: 700px) {
      width:60%;
      small{
        display:absolute;
        margin-top:20px;
        }
    }
`;j.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
  @media (max-width: 700px) {
    grid-template-areas: 
      "textWrapper"  
      "leftHalfCircle";  
  }
`;const lc=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  padding: 20px;
  
  h2 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 50px;
    color: #666;
  }
     @media (max-width: 700px) {
      margin-top:-100%;
    }
`,er=j.button`
  background-color: #ccc; /* Gray background */
  border: none;
  border-radius: 20px; /* Rounded corners */
  padding: 20px 10%;
  margin: 20px;
  font-size: 16px;
  color: #333; /* Text color */
  cursor: pointer;
  font-family: 'LINESeedKR-Bd';
  
  &:hover {
    background-color: #bbb; /* Darker gray on hover */
  }

`,sc="/assets/sad-BYYytyiN.svg",mw=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=b.useState(0),[r,i]=b.useState(0),[o,l]=b.useState(!1),[a,u]=b.useState(""),[c,h]=b.useState(""),[f,g]=b.useState(!1),y=v=>{const S=e[t];let p;v===S.correctAnswer?(i(r+1),u("정답입니다!"),p=1e3,h("")):(u("오답입니다!"),h(S.explanation),p=4e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=Ye();return s.jsx(Fl,{children:f?s.jsxs(lc,{children:[s.jsx("h2",{children:"퀴즈 완료!"}),s.jsxs("p",{children:["총 ",s.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",s.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?s.jsx("img",{src:sc,alt:"Genie1"}):s.jsx("img",{src:pr,alt:"Genie2"}),s.jsx(er,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):s.jsxs(s.Fragment,{children:[s.jsx(ic,{children:e[t].question}),s.jsxs("div",{children:[s.jsx(xr,{onClick:()=>y("O"),children:"O"}),s.jsx(xr,{onClick:()=>y("X"),children:"X"})]}),o&&s.jsxs(oc,{children:[s.jsx("p",{children:a}),c&&s.jsx("small",{children:c})]})]})})};function gw(){return s.jsx(s.Fragment,{children:s.jsx(mw,{})})}const vw=()=>{const e=Ye();return s.jsxs(Fl,{children:[s.jsx(er,{onClick:()=>e("/quiz"),children:" 기초 퀴즈"}),s.jsx(er,{onClick:()=>e("/medium"),children:" 중급 퀴즈"}),s.jsx(er,{onClick:()=>e("/advanced"),children:" 고급 퀴즈"})]})};function yw(){return s.jsx(s.Fragment,{children:s.jsx(vw,{})})}const xw=()=>{const e=[{question:"양자 얽힘 상태에 있는 두 입자는 한 입자의 상태가 바뀌면 즉시 다른 입자의 상태도 바뀐다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 서로 먼 거리에 떨어져 있어도 서로 연결된 상태를 유지하는 현상입니다. 한 입자의 상태가 변화하면 즉시 다른 입자의 상태도 바뀝니다. "},{question:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 있다는 이론이다",correctAnswer:"X",explanation:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 없다는 원리입니다. 위치를 정확히 알수록 속도에 대한 정보는 불확실해집니다."},{question:"양자 상태는 외부 관측이 이루어지면 즉시 붕괴된다.",correctAnswer:"O",explanation:"양자 상태는 관측에 의해 결정됩니다. 관측이 이루어지면 입자의 상태가 고정되어 양자 중첩 상태는 붕괴됩니다."},{question:"양자 터널링은 입자가 에너지를 충분히 갖고 있을 때만 장벽을 통과할 수 있는 현상이다.",correctAnswer:"X",explanation:"양자 터널링은 입자가 에너지 장벽을 넘을 수 없을 때도 통과하는 현상입니다. 이는 고전적인 물리학으로 설명할 수 없는 양자적 현상입니다."},{question:"양자 얽힘을 이용하면 정보를 빛의 속도보다 빠르게 전달할 수 있다",correctAnswer:"X",explanation:"양자 얽힘은 입자의 상태 변화를 즉시 반영하지만, 이를 통해 실제 정보를 빛의 속도보다 빠르게 전달할 수는 없습니다."},{question:"양자역학에서 파동함수는 입자의 위치를 정확히 예측해준다",correctAnswer:"X",explanation:"파동함수는 입자의 위치를 정확히 예측하는 것이 아니라, 입자가 특정 위치에 있을 확률을 나타냅니다."}],[t,n]=b.useState(0),[r,i]=b.useState(0),[o,l]=b.useState(!1),[a,u]=b.useState(""),[c,h]=b.useState(""),[f,g]=b.useState(!1),y=v=>{const S=e[t];let p;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h(""),p=1e3):(u("오답입니다!"),h(S.explanation),p=5e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=Ye();return s.jsx(Fl,{children:f?s.jsxs(lc,{children:[s.jsx("h2",{children:"퀴즈 완료!"}),s.jsxs("p",{children:["총 ",s.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",s.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?s.jsx("img",{src:sc,alt:"Genie1"}):s.jsx("img",{src:pr,alt:"Genie2"}),s.jsx(er,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):s.jsxs(s.Fragment,{children:[s.jsx(ic,{children:e[t].question}),s.jsxs("div",{children:[s.jsx(xr,{onClick:()=>y("O"),children:"O"}),s.jsx(xr,{onClick:()=>y("X"),children:"X"})]}),o&&s.jsxs(oc,{children:[s.jsx("p",{children:a}),c&&s.jsx("small",{children:c})]})]})})};function ww(){return s.jsx(s.Fragment,{children:s.jsx(xw,{})})}const Sw=()=>{const e=[{question:"양자 게이트는 고전적인 논리 게이트와 동일한 방식으로 동작한다",correctAnswer:"X",explanation:"양자 게이트는 큐비트의 상태를 변화시키는 양자 연산을 수행하며, 고전적인 논리 게이트와는 다른 방식으로 동작합니다."},{question:"양자 컴퓨터는 오류가 발생할 가능성이 고전 컴퓨터보다 높다.",correctAnswer:"O",explanation:"양자 컴퓨터는 큐비트의 민감한 상태 때문에 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해 오류 정정 기술이 연구되고 있습니다."},{question:"양자 상태의 코히런스(coherence)는 환경과의 상호작용에 의해 손실되며, 이는 양자 디코히런스(decoherence)라고 불린다.",correctAnswer:"O",explanation:"코히런스는 양자 상태가 다른 상태들과 정렬된 특성을 말합니다.환경과의 상호작용에 의해 이 정렬이 깨지면 디코히런스가 발생하여 양자 상태의 정보를 잃게 됩니다."},{question:"양자 컴퓨터의 성능은 큐비트의 개수에 비례하여 선형적으로 증가한다",correctAnswer:"X",explanation:"큐비트가 추가될수록 양자 컴퓨터의 성능은 기하급수적으로 증가하며, 선형적으로 증가하는 것이 아닙니다."},{question:"양자 컴퓨터에서 큐비트의 상태를 측정하는 것은 양자 얽힘을 유지한 채로 이루어질 수 있다.",correctAnswer:"X",explanation:"큐비트의 상태를 측정하면 양자 얽힘 상태가 붕괴됩니다. 얽힌 상태에서는 측정이 이루어지면 더 이상 얽힌 상태를 유지할 수 없습니다. "},{question:"양자 상호작용에서는 양자 터널링 효과를 이용해 에너지 장벽을 넘지 않고도 전자가 이동할 수 있다.",correctAnswer:"O",explanation:' 양자 터널링은 고전 물리학적으로 넘을 수 없는 에너지 장벽을 양자역학적으로 입자가 "통과"할 수 있는 현상입니다. 이 현상은 반도체와 같은 분야에서도 중요한 역할을 합니다.'}],[t,n]=b.useState(0),[r,i]=b.useState(0),[o,l]=b.useState(!1),[a,u]=b.useState(""),[c,h]=b.useState(""),[f,g]=b.useState(!1),y=v=>{const S=e[t];let p;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h(""),p=1e3):(u("오답입니다!"),h(S.explanation),p=5e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=Ye();return s.jsx(Fl,{children:f?s.jsxs(lc,{children:[s.jsx("h2",{children:"퀴즈 완료!"}),s.jsxs("p",{children:["총 ",s.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",s.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<5?s.jsx("img",{src:sc,alt:"Genie1"}):s.jsx("img",{src:pr,alt:"Genie2"}),s.jsx(er,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):s.jsxs(s.Fragment,{children:[s.jsx(ic,{children:e[t].question}),s.jsxs("div",{children:[s.jsx(xr,{onClick:()=>y("O"),children:"O"}),s.jsx(xr,{onClick:()=>y("X"),children:"X"})]}),o&&s.jsxs(oc,{children:[s.jsx("p",{children:a}),c&&s.jsx("small",{children:c})]})]})})};function jw(){return s.jsx(s.Fragment,{children:s.jsx(Sw,{})})}const zs="data:image/svg+xml,%3csvg%20width='2453'%20height='1843'%20viewBox='0%200%202453%201843'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='2453'%20height='1843'%20fill='%23959595'/%3e%3c/svg%3e",bm="/assets/idq-D5yb6MGO.svg",Em="/assets/ibm-CNkfYoK9.svg",_m="/assets/dwave-KW-mNalY.svg",sl="data:image/svg+xml,%3csvg%20width='1920'%20height='1080'%20viewBox='0%200%201920%201080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_22_433)'%3e%3crect%20width='1080'%20height='1920'%20transform='matrix(0%20-1%201%200%200%201080)'%20fill='%230B212E'/%3e%3cg%20filter='url(%23filter0_f_22_433)'%3e%3ccircle%20cx='1713.5'%20cy='132.5'%20r='449.5'%20transform='rotate(-90%201713.5%20132.5)'%20fill='%23909BA4'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_22_433)'%3e%3ccircle%20cx='211.5'%20cy='129.5'%20r='449.5'%20transform='rotate(-90%20211.5%20129.5)'%20fill='%230B212E'/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_22_433)'%3e%3ccircle%20cx='964.5'%20cy='1006.5'%20r='449.5'%20transform='rotate(-90%20964.5%201006.5)'%20fill='%230B212E'%20fill-opacity='0.2'/%3e%3c/g%3e%3cg%20filter='url(%23filter3_f_22_433)'%3e%3ccircle%20cx='628.5'%20cy='662.5'%20r='449.5'%20transform='rotate(-90%20628.5%20662.5)'%20fill='%230B212E'%20fill-opacity='0.6'/%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_22_433)'%3e%3ccircle%20cx='1301.5'%20cy='398.5'%20r='449.5'%20transform='rotate(-90%201301.5%20398.5)'%20fill='%230B212E'/%3e%3c/g%3e%3ccircle%20cx='1514'%20cy='189'%20r='24'%20fill='%2318A8FB'/%3e%3cg%20filter='url(%23filter5_f_22_433)'%3e%3ccircle%20cx='1538.5'%20cy='870.5'%20r='449.5'%20transform='rotate(-90%201538.5%20870.5)'%20fill='%23394F5C'/%3e%3c/g%3e%3ccircle%20cx='303'%20cy='530'%20r='14'%20fill='%23B2E3FF'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='48'%20fill='%2318A8FB'%20fill-opacity='0.08'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='23.2727'%20fill='%230E2938'%20stroke='%2318A8FB'%20stroke-width='2.90909'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_22_433'%20x='764'%20y='-817'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_22_433'%20x='-738'%20y='-820'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_22_433'%20x='15'%20y='57'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_22_433'%20x='-321'%20y='-287'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_22_433'%20x='352'%20y='-551'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_22_433'%20x='589'%20y='-79'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cclipPath%20id='clip0_22_433'%3e%3crect%20width='1080'%20height='1920'%20fill='white'%20transform='matrix(0%20-1%201%200%200%201080)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Om="/assets/rigetti-B38wHO1L.svg",Pm="/assets/honeywell-DtZFAC9P.svg",Tm="/assets/google-D4sFVtJt.svg",zm="/assets/microsoft-pU5O44ch.svg",Im="/assets/jininfra-BFpSQJ6H.svg",Lm="/assets/intel-D1wbAq3Q.svg",Mm="/assets/alibaba-Dbpd8-e1.svg",kw=()=>{const e=Ye(),t=[{title:"IBM",subtitle:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",imgSrc:Em,route:"ibm"},{title:"D-Wave",subtitle:"D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.",imgSrc:_m,route:"dwave"},{title:"Rigetti Computing",subtitle:"Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.",imgSrc:Om,route:"rigetti"},{title:"Honeywell",subtitle:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:Pm,route:"honeywell"},{title:"Google",subtitle:"Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.",imgSrc:Tm,route:"google"},{title:"Microsoft",subtitle:"Microsoft는 Azure Quantum 플랫폼을 통해 클라우드 기반 양자 컴퓨팅 서비스와 도구를 제공하며, 트래픽슘 기반의 양자 컴퓨터를 개발 중입니다.",imgSrc:zm,route:"microsoft"},{title:"Intel",subtitle:"Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.",imgSrc:Lm,route:"intel"},{title:"Alibaba",subtitle:"Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.",imgSrc:Mm,route:"alibaba"},{title:"JinInfra",subtitle:"JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.",imgSrc:Im,route:"jininfra"},{title:"IDQ",subtitle:"IDQ는 양자 키 분배(QKD) 기반 보안 솔루션을 제공하며, 양자 암호화 및 통신 보안 기술을 연구하고 있습니다.",imgSrc:bm,route:"idq"}],n=b.useRef(null),r=u=>{e(`/business/${u.toLowerCase()}`)},i={dots:!0,infinite:!1,speed:500,slidesToShow:1,centerMode:!0,centerPadding:"30px"},o=()=>{n.current&&n.current.slickPause()},l=()=>{n.current&&n.current.slickPlay()},a=u=>{e(`/company/${u}`)};return s.jsxs(ec,{children:[s.jsxs(tc,{children:[s.jsx(nc,{src:sl,alt:"banner image"}),s.jsx(rc,{children:"양자 관련 주요 기업들"}),s.jsx(A3,{children:s.jsx(ky,{style:{margin:"0 auto"},size:24})})]}),s.jsx(Ps,{style:{marginTop:"5%"},children:"주요 기업들"}),s.jsx(D3,{children:s.jsxs($3,{onMouseEnter:o,onMouseLeave:l,children:[t.map((u,c)=>s.jsxs(Pf,{onClick:()=>a(u.route),children:[s.jsx(Tf,{src:u.imgSrc,alt:u.title}),s.jsxs(zf,{children:[s.jsx("p",{className:"title",children:u.title}),s.jsx("p",{className:"subtitle",children:u.subtitle})]})]},c)),t.map((u,c)=>s.jsxs(Pf,{children:[s.jsx(Tf,{src:u.imgSrc,alt:u.title}),s.jsxs(zf,{children:[s.jsx("p",{className:"title",children:u.title}),s.jsx("p",{className:"subtitle",children:u.subtitle})]})]},c+t.length))]})}),s.jsxs("div",{style:{padding:"50px 0"},children:[s.jsx(Ps,{children:"About"}),s.jsxs(W3,{children:[s.jsx(U3,{src:sl,alt:"Nusantara Image"}),s.jsxs(H3,{children:[s.jsx(Q3,{children:"About Jininfra"}),s.jsxs(G3,{children:[s.jsx("span",{children:"by Sudarmo"}),s.jsx("span",{children:"28 January"})]}),s.jsx(V3,{children:"설명 설명"})]})]})]}),s.jsx(Ps,{children:"사업 소개"}),s.jsx(F3,{children:s.jsxs(R3,{ref:n,...i,children:[s.jsxs("div",{onClick:()=>r("Finance"),children:[s.jsx(Ts,{src:zs,alt:"Finance"}),s.jsx("p",{children:"금융"})]}),s.jsxs("div",{onClick:()=>r("Chemistry"),children:[s.jsx(Ts,{src:zs,alt:"Chemistry"}),s.jsx("p",{children:"화학 및 기타 과학"})]}),s.jsxs("div",{onClick:()=>r("Logistics"),children:[s.jsx(Ts,{src:zs,alt:"Logistics"}),s.jsx("p",{children:"물류 및 최적화"})]})]})})]})};function Cw(){return s.jsx(s.Fragment,{children:s.jsx(kw,{})})}const bw=j.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,Ew=j.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  p{
    font-size: 2rem;
    margin-top: 2%;
   }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.8rem;
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 2%;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
  
    
     a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 40%;
  }
`,_w=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4열 그리드 */
  gap: 20px;  /* 항목 간 간격 */
  margin-top: 5%;
  padding: 2%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);  /* 모바일 화면에서 2열로 줄이기 */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;  /* 작은 화면에서는 1열로 표시 */
  }
`,Ow=j.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);  /* 호버 시 위로 살짝 올라가는 효과 */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;  /* 썸네일 이미지를 프레임에 맞춰 자르기 */
    border-bottom: 2px solid #007bff;
  }

  h3 {
    padding: 15px;
    font-size: 1.6rem;
    color: #333;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`,Pw=({articles:e})=>s.jsx(_w,{children:e.map((t,n)=>s.jsx(Ow,{children:s.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:[s.jsx("img",{src:t.thumbnail,alt:t.title}),s.jsx("h3",{children:t.title.length>30?`${t.title.slice(0,30)}...`:t.title})]})},n))}),Tw=()=>{const e=[{title:"부산시, 포스코와 양자컴퓨팅 기반 미래 혁신소재 협력",thumbnail:"https://img8.yna.co.kr/photo/cms/2023/07/12/81/PCM20230712000081990_P4.jpg",url:"https://www.yna.co.kr/view/AKR20241028017000051?input=1195m"},{title:"LGU+, 다계층 양자내성암호 장비 개발",thumbnail:"https://image.newsis.com/2024/10/25/NISI20241025_0001685555_web.jpg?rnd=20241025083746",url:"https://www.newsis.com/view/NISX20241025_0002933627"},{title:"네덜란드, 12월부터 양자기술 관련 제품 수출통제",thumbnail:"https://img8.yna.co.kr/photo/etc/af/2024/10/12/PAF20241012110701009_P4.jpg",url:"https://www.yna.co.kr/view/AKR20241020055700098?input=1195m"},{title:"GIST-IBS, '강력장 양자전기역학 현상' 세계 최초 입증",thumbnail:"https://image.newsis.com/2024/10/21/NISI20241021_0001681737_web.jpg?rnd=20241021141711",url:"https://www.newsis.com/view/NISX20241021_0002927863"},{title:"정부, 노벨상 수상자 알랭 아스페 교수와 양자기술 협업 나서",thumbnail:"https://image.newsis.com/2024/10/22/NISI20241022_0001683269_web.jpg?rnd=20241022214821",url:"https://www.newsis.com/view/NISX20241022_0002930122"},{title:"SKT, 양자암호 양대 기술 QKD PQC 하나로 묶었다",thumbnail:"https://cdn.digitaltoday.co.kr/news/photo/202410/537045_501813_1137.jpg",url:"https://www.digitaltoday.co.kr/news/articleView.html?idxno=537045"},{title:"노르마 “양자 SW-HW 기술 연동해 풀스택 기업 도약”",thumbnail:"https://cdn.enewstoday.co.kr/news/photo/202410/2186172_993108_5327.jpg",url:"https://www.enewstoday.co.kr/news/articleView.html?idxno=2186172"},{title:"한국 양자기술 수준 주요국 중 최하위…양자컴은 100점 기준 2.3점",thumbnail:"https://image.dongascience.com/Photo/2024/06/5889cdb1752d35425c5c96fb03f9acb0.jpg",url:"https://m.dongascience.com/news.php?idx=66161"}];return s.jsx(bw,{children:s.jsx(Ew,{children:s.jsxs("div",{children:[s.jsx("h1",{children:"양자 기술 관련 뉴스"}),s.jsx(Pw,{articles:e})]})})})};function zw(){return s.jsx(s.Fragment,{children:s.jsx(Tw,{})})}const Iw=j.div`

    margin-top: -5%;

    padding-top: 5%;
    background-color: #eee;
`,Lw=j.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  p{
    font-size: 2rem;
    margin-top: 2%;
   }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.8rem;
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  .accordion-item {
    border: 1px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #333;
  }

  .accordion-title {
    padding-top: 2%;
    padding-bottom: 1.5%;
    letter-spacing: 2px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 3%;
    background-color: #444;
    letter-spacing: 1.4px;
    font-size: 1.9rem;
    color: #eee;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    max-height: 330px;  /* Fixed height for content */
    overflow-y: auto;  /* Scroll if content exceeds height */
      p{
       @media (max-width: 900px) {
          font-size: 1.67rem;
          margin-bottom: 1%;
       }
    }
       h2{
        margin-top:10px;
        font-size:2rem;
        }
      h1{
        color:#eee;
        }
    
    }

  

  /* Flexbox to center the video */
  iframe {
    display: block;
    margin-left: 30%;
  }

  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 2%;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;

    iframe{
    width:200px;
    height:200px;
    margin-left: 12%;}
  
    .accordion-content {
      font-size:1.3rem;
      padding:4%;
      }
     a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 40%;
  }
`,Mw=j.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

    h2{
        margin-top:10px;
        font-size:2rem;
        margin-left:3%;
    }

`,Rw=j.div`
  max-width: 90%;
  margin-left: 5%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 2%;
    margin-top:13%;
    font-size: 2.6rem;
      @media(max-width: 900px){
        margin-top: 20%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
    max-width: 97%;
  }
`,Nw=j.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 2%;
    top: 3%;
    width: 100%;
    padding: 20px;

    img {
      max-width: 60px;
      @media (max-width: 768px) {
        display: none;
      } 
    }
    a {
        width: 20%;
        margin-top: 4%;
    }
`,Aw=j.button`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`,Dw=()=>{const[e,t]=b.useState(null),n=i=>{t(e===i?null:i)},r=Ye();return s.jsx(Iw,{children:s.jsxs(Lw,{children:[s.jsx("h1",{children:"양자 활용"}),s.jsx("hr",{}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[s.jsx("span",{children:"양자 컴퓨터"}),s.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."})]}),s.jsx("br",{})," ",s.jsx("p",{children:"이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, 이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다."}),s.jsx("div",{style:{textAlign:"center"},children:s.jsx(Aw,{style:{cursor:"pointer"},onClick:i=>r("/computing"),children:" More"})}),s.jsx("hr",{}),s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[s.jsx("span",{children:"양자 암호통신"}),s.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&s.jsxs("div",{className:"accordion-content",children:[s.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),s.jsx("br",{}),s.jsxs("p",{children:["즉, 양자암호통신 기술은 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 복제불가능성”"}),"과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를 절대적으로 안전하게 실시간으로 분배하는 기술로서 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 키 분배 기술”"}),"로도 알려져 있다."]}),s.jsx("br",{}),s.jsx("hr",{}),s.jsx("h1",{children:"양자 암호화의 유형"}),s.jsx("h2",{children:s.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자 키 분배(QKD)"})}),s.jsxs("p",{children:["양자 키 분배(Quantum Key Distribution; QKD) 시스템은 보안 데이터를  ",s.jsx("span",{style:{color:"#B0E3FF"},children:"직접 암호화하는 것이 아니라, 두 사람이 함께 사용할 비밀 키를 안전하게 공유하는 방법이다."})]}),s.jsx("p",{children:"미세한 자극에도 상태가 변하는 양자의 물리적 특성을 활용해 대칭 암호키를 분배하는 기술이다. 제3자가 해킹할 수 없는 암호화된 비밀키를 만들어 보안이 필요한 송신자와 수신자에게 안전하게 공유한다."}),s.jsx("br",{}),s.jsx("h2",{children:s.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자내성암호(PQC)"})}),s.jsxs("p",{children:["양자내성암호(Post Quantum Cryptography; PQC)는 양자컴퓨터로도 풀어내는 데 수십억 년이 걸리는 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"복잡한 수학 알고리즘을 사용하는 암호화 방식이다."})]}),s.jsx("br",{}),s.jsx("hr",{}),s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[s.jsx("span",{children:"양자 센서"}),s.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자 센서의 기본 원리는  ",s.jsx("span",{style:{color:"#B0E3FF"},children:"센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."]}),s.jsx("br",{}),s.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),s.jsx("hr",{}),s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})]})})};function Fw(){return s.jsx(s.Fragment,{children:s.jsx(Dw,{})})}const Bw="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",$w=j.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  z-index: 9000;
  @media(max-width: 800px){
    width: 4.5rem;
    height: 4.5rem;
  }
`,Ww=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx(s.Fragment,{children:s.jsx($w,{onClick:e,src:Bw,alt:"Scroll to top"})})},Uw="/assets/message-D6wtI_nO.svg",Hw="/assets/flag-DnSs5bf4.svg",Qw="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Gw="/assets/planet-B734ADp0.svg",Vw=j.div`
    margin-top: -5%;
    margin-bottom: 10%;
    padding-top: 5%;
    background-color: #eee;

`,Kw=j.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,qw=j.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 15%;
  margin-bottom: 20%;
  margin-left: 10%;
  border-radius: 0.7vw;
  h1{
    font-size: 4rem;
    margin-bottom: 2%;
  }
  p{
    font-size: 1.9rem;
    margin-bottom: 1.7%;
  }
  @media (max-width: 800px) {
    font-size: 3.3rem;
      h1{
        font-size: 3.1rem;
        margin-bottom: 2%;
      }
      p{
        font-size: 1.5rem;
        margin-bottom: 1.7%;
      }
  }
  @media (max-width: 700px) {
    grid-area: textWrapper;
  }
`,Yw=j.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 60vh; 
  background-color: #0B212E;
  border-radius: 1000px 0 0 1000px; 
  right: 0;
  align-items: center;
  top: 0;
  @media (max-width: 800px) {
    min-width: 100%;
    padding: 5%;
  } 
`,Xw=j.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%; 
  height: auto;
  z-index: 11;
  @media (max-width: 800px) {
    max-width: 60%; 
  }
`,Zw=j.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 60vh; 
  background-color: #0B212E;
  border-radius:  0 1000px 1000px 0; 
  left: 0;
  align-items: center;
  top: 0;
  @media (max-width: 800px) {
    min-width: 100%;
    padding: 5%;
  } 
`,Jw=j.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%; 
  height: auto;
  z-index: 11;
  @media (max-width: 800px) {
    max-width: 60%; 
  }
`,eS=j.div`
  position: relative;
  margin-top: 0px;
  margin-left: -10px;
  max-width: 80%;
  height: auto;
  overflow: hidden; 
  justify-content: flex-start;
  text-align: left;
  img{
      max-width: 90%;
      margin: 5%;
      height: auto;
  }
`,tS=j.div`
  position: absolute;
  top: 22%;
  margin-left: 30%;
  width: 70%; 
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  color: #000;
  font-size: 4rem;
  text-align: left; 
  z-index: 10;
  h1 {
    margin-top: 3%;
    width: 90%; 
    text-align: left;
  }
  @media (max-width: 800px) {
    font-size: 3.3rem;
  }
`;j.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%; 
  display: flex;
`;const nS=j.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
`,rS=j.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
  @media (max-width: 700px) {
    grid-template-areas: 
      "textWrapper"  
      "leftHalfCircle";  
  }
`,iS=j.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,oS=_r`
  from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-100px);
    opacity: 0;
  }
`,lS=j.img`
  position: fixed;
  margin: 0 auto;
  max-width: 45%;
  display: block;
  z-index: 10000;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?Cn`${oS} 0.5s forwards`:"none"};
  @media (max-width: 800px) {
    position: fixed;
    max-width: 56%;
    transform: translateX(-50%);
    top: 20%;
  }
`,sS=j.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,aS=()=>{const[e,t]=b.useState(kt),[n,r]=b.useState(!1),[i,o]=b.useState(!0),[l,a]=b.useState(!1);b.useEffect(()=>{const g=setTimeout(()=>{a(!0)},1e3),y=setInterval(()=>{t(v=>v===kt?pr:kt)},600),x=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(y)},3e3);return()=>{clearTimeout(g),clearTimeout(x),clearInterval(y)}},[]);const[u,c]=b.useState(kt),[h,f]=b.useState(!1);return b.useEffect(()=>{const g=setTimeout(()=>{f(!0)},1e3),y=setInterval(()=>{c(x=>x===kt?pr:kt)},600);return()=>{clearTimeout(g),clearInterval(y)}},[]),s.jsx(s.Fragment,{children:s.jsxs(Vw,{children:[s.jsxs(Kw,{children:[i&&s.jsx(s.Fragment,{children:s.jsx(lS,{src:e,alt:"Waving Genie",isdisappearing:n})}),s.jsxs(nS,{children:[s.jsxs(eS,{children:[s.jsx("img",{src:Qw,alt:"Gradient Background"}),s.jsxs(tS,{children:[s.jsx("h1",{children:"진인프라의"}),s.jsx("h1",{children:"양자 캐릭터"}),s.jsx("h1",{children:"‘지니’"})]})]}),s.jsx(Yw,{children:s.jsx(Xw,{src:Hw,alt:"Flag"})})]}),s.jsxs(rS,{children:[s.jsx(Zw,{children:s.jsx(Jw,{src:Gw,alt:"planet"})}),s.jsxs(qw,{children:[s.jsx("h1",{children:"지니"}),s.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),s.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),s.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),s.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[s.jsx(iS,{src:Uw,style:{width:"35%",marginLeft:"40%"}}),s.jsx(sS,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:u,alt:"Waving Genie"})]})]})})};function uS(){return s.jsx(s.Fragment,{children:s.jsx(aS,{})})}const cS="/assets/cat3-Bspolb1q.svg",dS="/assets/bunker-cRaJc6Me.svg",Lf="/assets/bottle1-BxjrYTB1.svg",fS="/assets/bottle2-BVqZZ2-9.svg",ac="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2_1185)'%3e%3cpath%20d='M40%2021.9999H15.66L26.83%2010.8299L24%207.99994L8%2023.9999L24%2039.9999L26.83%2037.1699L15.66%2025.9999H40V21.9999Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2_1185'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",pS=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[i,o]=b.useState(null);Ye();const l=()=>{const a=Math.random()>.5?"살아 있습니다":"죽었습니다";o(a),t(!0)};return s.jsxs(jm,{children:[s.jsx(Cm,{children:s.jsx("a",{href:"/concept",children:s.jsx("img",{src:ac,alt:"Back to main"})})}),s.jsxs(km,{children:[s.jsx("h1",{children:"슈뢰딩거의 고양이"}),s.jsx("hr",{}),s.jsxs(qi,{children:[s.jsxs(Yi,{children:[s.jsx("img",{src:dS,alt:"bunker",style:{maxWidth:"80%"}})," "]}),s.jsxs(Yi,{children:[s.jsx("img",{src:Lf,alt:"bottle1"})," ",s.jsx(Af,{src:go,alt:"cat"})]}),s.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),s.jsxs(qi,{children:[s.jsxs(Yi,{children:[s.jsx("img",{src:Lf,alt:"bottle1"})," ",s.jsx("img",{src:fS,alt:"bottle2"})]}),s.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),s.jsxs(qi,{children:[s.jsxs(Yi,{children:[s.jsx(Af,{src:go,alt:"cat"})," ",s.jsx(hS,{src:Sm,alt:"cat2"})]}),s.jsx("p",{style:{marginBottom:"1%"},children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),s.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:["이러한 상태를 ",s.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]}),s.jsx(Ka,{onClick:l,children:"벙커 안에 고양이가 있는지 확인하기"})]}),s.jsxs(qi,{children:[s.jsx("p",{style:{padding:"0 2%",marginBottom:"1%"},children:"슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다."}),s.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:[s.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),s.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"}}),s.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:s.jsx(Ka,{onClick:()=>r(!0),children:"추가 설명 보기"})})]}),e&&s.jsx(Mf,{children:s.jsxs(Rf,{style:{backgroundColor:"#ddd"},children:[s.jsx(Nf,{onClick:()=>t(!1)}),s.jsx("h2",{children:"벙커의 문이 열렸습니다!"}),s.jsx("hr",{}),i==="살아 있습니다"?s.jsxs("div",{children:[s.jsx("p",{children:"고양이는 살아 있습니다!"}),s.jsx("img",{src:go,alt:"살아 있는 고양이",style:{maxWidth:"100%"}})]}):s.jsxs("div",{children:[s.jsx("p",{children:"고양이는 죽었습니다...."}),s.jsx("img",{src:cS,alt:"죽은 고양이",style:{maxWidth:"60%",margin:"1%"}})]})]})}),n&&s.jsx(Mf,{children:s.jsxs(Rf,{children:[s.jsx(Nf,{onClick:()=>r(!1)}),s.jsx("h2",{children:"추가 설명"}),s.jsx("hr",{}),s.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",s.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),s.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),s.jsx("p",{children:s.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),s.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),s.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",s.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})]})},qi=j.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  p {
      font-size: 1.7rem;
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.4rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
`,Yi=j.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
  @media(max-width: 900px){
    gap: 1%;
  }
`,Mf=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
`,Rf=j.div`
  position: relative;
  background: white;
  padding: 3%;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height: 80vh;
  z-index: 10003;
  line-height: 1.8;
  h2{
    font-size: 1.7rem;
    margin-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  hr{
    margin-bottom: 3%;
    max-width: 100%;
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    padding: 6%;
  }
`,Nf=j(qo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
  @media(max-width: 900px){
    top: 15px;
    right: 15px;
  }
`,Af=j.img`
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,hS=j.img`
  max-width: 210px;
  margin-bottom: -45px;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`;function mS(){return s.jsx(s.Fragment,{children:s.jsx(pS,{})})}const Df="/assets/coinf-BD3uUSm1.svg",Ff="/assets/coinb-CO2sn5vL.svg",gS="/assets/box1-M57zrF-g.svg",vS="/assets/box2-BABTIy2V.svg",yS=_r`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xS=j.div`
  border: 2px solid #333;
  margin: 2% auto;
  padding: 0px 2%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  span {
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  p {
    font-size: 1.7rem;
    @media(max-width: 900px){
      font-size: 1.2rem;
      text-align: center;
    }
  }
`,wS=j.img`
  max-width: 40%;
  cursor: pointer;
  margin: 2%;
`,SS=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;
  animation: ${yS} 0.8s ease-in-out;
  h3{
    font-size: 2rem;
    color: #333;
  }
`,jS=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
`,kS=j.div`
  position: relative;
  background: white;
  padding: 3%;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height: 80vh;
  z-index: 10003;
  line-height: 1.8;
  h2{
    font-size: 1.7rem;
    margin-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  hr{
    margin-bottom: 3%;
    max-width: 100%;
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    padding: 6%;
  }
`,CS=j(qo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
`,bS=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(null),[i,o]=b.useState(null),[l,a]=b.useState(!1),u=()=>{const c=Math.random()>.5?"앞면":"뒷면";r(c),o(c==="앞면"?"뒷면":"앞면"),a(!0)};return s.jsxs(jm,{children:[s.jsx(Cm,{children:s.jsx("a",{href:"/concept",children:s.jsx("img",{src:ac,alt:"Back to main"})})}),s.jsxs(km,{children:[s.jsx("h1",{children:"양자 얽힘: 두 개의 얽힌 동전"}),s.jsx("hr",{}),s.jsxs(xS,{children:[s.jsx("p",{children:"두 개의 동전이 특별한 방식으로 얽혀 있습니다."}),s.jsx("p",{children:"한 동전의 상태가 결정되면 다른 동전의 상태도 자동으로 결정됩니다!"}),s.jsx("p",{children:"박스를 열어서 동전 A를 확인하세요."}),s.jsx("h1",{style:{color:"#0183ff",margin:"5%"},children:"박스 클릭하기"}),l&&s.jsxs(SS,{children:[s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx("h3",{children:"동전 A"}),s.jsx("img",{src:n==="앞면"?Df:Ff,alt:"동전 A",style:{maxWidth:"160px"}}),s.jsx("p",{children:n})]}),s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx("h3",{children:"동전 B"}),s.jsx("img",{src:i==="앞면"?Df:Ff,alt:"동전 B",style:{maxWidth:"160px"}}),s.jsx("p",{children:i})]})]}),s.jsx(wS,{src:l?vS:gS,alt:"박스",onClick:u}),s.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:s.jsx(Ka,{onClick:()=>t(!0),children:"추가 설명 보기"})})]}),e&&s.jsx(jS,{children:s.jsxs(kS,{children:[s.jsx(CS,{onClick:()=>t(!1)}),s.jsx("h2",{children:"양자 얽힘 설명"}),s.jsx("hr",{}),s.jsx("p",{children:"두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, A 동전의 상자를 열어 동전을 확인했을 때, 앞면이 나왔습니다."}),s.jsx("p",{children:"이때, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나옵니다. 그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다."}),s.jsx("p",{children:'이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'})]})})]})]})};function ES(){return s.jsx(s.Fragment,{children:s.jsx(bS,{})})}const _S=()=>{const{pathname:e}=Hu();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},OS="/assets/Jenie1-BXj_GSaG.svg",PS="/assets/Jenie2-D8KlYSrv.svg",TS={ibm:{title:"IBM",description:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",content:"IBM은 2016년 IBM Quantum Experience를 통해 양자 컴퓨팅을 대중에게 공개했습니다. Qiskit이라는 오픈 소스 프레임워크를 제공하며, 연구자와 학생들이 양자 알고리즘을 쉽게 개발하고 테스트할 수 있는 환경을 제공합니다. IBM은 1,000 큐비트 이상의 양자 컴퓨터를 2029년까지 구현하는 것을 목표로 하며, 화학 시뮬레이션, 금융 리스크 분석, 물질 개발, 공급망 최적화 등 다양한 분야에서 양자 컴퓨팅의 응용을 확대하고 있습니다. IBM은 슈퍼컴퓨터와 양자 컴퓨터를 결합한 하이브리드 컴퓨팅 모델도 연구 중입니다.",businessTitle:"양자 컴퓨팅 사업",business:"IBM은 IBM Quantum Experience를 통해 누구나 양자 컴퓨터에 접근할 수 있는 클라우드 기반의 플랫폼을 제공하고 있습니다. 연구자, 학생, 기업 고객은 Qiskit 오픈 소스 프레임워크를 사용해 양자 알고리즘을 개발할 수 있습니다. 또한, 양자 컴퓨터와 기존 컴퓨터의 결합을 통한 하이브리드 컴퓨팅 모델 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"IBM은 세계 최초로 양자 컴퓨터를 클라우드에 공개했으며, 127 큐비트 시스템(IBM Eagle)을 발표했습니다. IBM의 로드맵에 따르면, 2029년까지 1,000 큐비트 이상의 양자 컴퓨터를 구축할 예정입니다. 이들은 화학 시뮬레이션, 공급망 최적화, 금융 리스크 관리와 같은 문제에 양자 컴퓨팅을 적용하고 있으며, 주요 고객으로는 금융 기관과 제약 회사가 있습니다.",imgSrc:Em,link:"https://www.ibm.com/quantum"},idq:{title:"IDQ",description:"IDQ는 양자 키 분배(QKD) 기술을 통해 통신 보안을 강화하는 양자 암호화 솔루션을 제공합니다.",content:"IDQ는 양자 기술을 활용한 보안 솔루션을 선도하는 기업으로, 금융 및 국방과 같은 민감한 산업에서 안전한 통신을 보장하는 기술을 제공합니다. 특히 양자 키 분배(QKD) 시스템은 도청을 탐지할 수 있는 능력을 갖추고 있어 최고 수준의 보안을 제공합니다. 유럽연합(EU)의 양자 통신 인프라 구축 프로젝트에 참여하고 있으며, 글로벌 표준을 수립하는 데 기여하고 있습니다.",businessTitle:"양자 암호화 및 통신 보안 사업",business:"IDQ는 양자 키 분배(QKD) 기술을 개발해 보안 통신 솔루션을 제공하는 선도 기업입니다. QKD는 도청을 감지하고 공격으로부터 네트워크를 보호하는 데 사용됩니다. 금융 기관, 국방, 통신 등 민감한 분야에서 양자 보안을 제공합니다.",businessTitle2:"성과 및 연구 방향",business2:"IDQ는 유럽 연합의 양자 통신 인프라 구축 프로젝트에 적극 참여하고 있으며, 다양한 파트너와 협력해 양자 암호화 표준을 개발하고 있습니다. 스위스와 싱가포르 등 여러 국가의 정부와 협력해 양자 통신망 구축에 기여하고 있습니다.",imgSrc:bm,link:"https://idquantique.co.kr/"},dwave:{title:"D-Wave",description:"D-Wave는 양자 어닐링 기술을 활용한 최적화 문제 해결에 특화된 양자 컴퓨터를 제공합니다.",content:"D-Wave는 세계 최초로 상용 양자 컴퓨터를 개발한 기업으로, 주로 최적화 문제를 해결하는 데 강점을 가지고 있습니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 금융, 물류, 인공지능(AI) 등의 분야에서 복잡한 문제를 해결합니다. 양자 어닐링은 최적화 문제를 매우 효율적으로 해결하는 기술로, 특히 재무 포트폴리오 최적화와 물류 경로 최적화에 활용됩니다.",businessTitle:"최적화 문제 해결",business:"D-Wave는 양자 어닐링(annealing) 기술을 사용하여 최적화 문제를 해결합니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 물류 최적화, AI 훈련 가속화, 재무 포트폴리오 구성 등의 분야에서 활용됩니다.",businessTitle2:"성과 및 연구 방향",business2:"D-Wave는 최초의 상용 양자 컴퓨터를 도입한 기업으로, 고객에게 클라우드를 통한 원격 접근 서비스를 제공합니다. 양자 어닐링을 통한 최적화 솔루션은 특히 물류와 인공지능 분야에서 강력한 성과를 내고 있습니다.",imgSrc:_m,link:"https://www.dwavesys.com/"},rigetti:{title:"Rigetti Computing",description:"Rigetti는 양자-클래식 하이브리드 컴퓨팅 시스템을 제공하며, 양자 컴퓨팅의 상용화를 목표로 합니다.",content:"Rigetti는 Quantum Cloud Services(QCS)를 통해 클라우드 기반의 양자 컴퓨팅을 제공하며, 양자 회로와 기존 컴퓨팅 자원을 결합한 하이브리드 솔루션을 개발 중입니다. 이 회사는 특히 의료와 금융 산업에서 양자 컴퓨팅의 응용 가능성을 연구하며, 신약 개발 및 기후 변화 모델링에 집중하고 있습니다.",businessTitle:"양자-클래식 하이브리드 컴퓨팅",business:"Rigetti는 주요 대학 및 연구 기관과 협력하여 양자 알고리즘을 개발하며, 연구자들이 쉽게 양자 컴퓨팅에 접근할 수 있도록 클라우드 플랫폼을 제공합니다. 또한 Quantum Cloud Services(QCS)를 통해 클라우드 기반 양자 컴퓨팅 환경을 제공합니다. 양자와 기존 컴퓨터를 결합한 하이브리드 솔루션을 개발해 더 빠른 문제 해결을 가능하게 합니다.",businessTitle2:"성과 및 연구 방향",business2:"Rigetti는 신약 개발, 금융 모델링, 기후 변화 연구 등 다양한 응용 분야에 양자 컴퓨팅을 도입하고 있습니다. 이 회사는 양자 컴퓨터와 기존 서버 간의 원활한 통합을 목표로 연구를 진행하고 있으며, 빠른 계산이 요구되는 환경에서 강점을 발휘하고 있습니다.",imgSrc:Om,link:"https://www.rigetti.com/"},honeywell:{title:"Honeywell",description:"Honeywell은 이온 트랩 기술을 활용한 정밀한 양자 컴퓨팅을 제공합니다.",content:"Honeywell의 양자 컴퓨터는 이온 트랩 기술을 기반으로 매우 높은 정밀도를 자랑합니다. 이 회사는 Cambridge Quantum과의 합병을 통해 소프트웨어와 하드웨어 개발 능력을 더욱 강화했으며, 공급망 최적화와 화학 물질 분석과 같은 분야에 양자 컴퓨팅을 활용하고 있습니다.",businessTitle:"이온 트랩 양자 컴퓨터",business:" Honeywell은 이온 트랩 기술을 이용한 양자 컴퓨터를 개발합니다. 이온 트랩은 높은 정확도와 정밀한 제어를 제공하며, 물류 및 화학 분야에서 활용되고 있습니다. 또한 제조, 물류 및 화학 산업에 양자 컴퓨팅 솔루션을 제공합니다. 특히 정밀한 양자 계산 능력을 활용해 화학 반응을 시뮬레이션하고 산업 공정을 최적화하는 데 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Honeywell은 2021년 Cambridge Quantum과 합병하여 양자 컴퓨팅 소프트웨어 개발을 강화했습니다. 이 회사의 양자 컴퓨터는 화학 시뮬레이션, 최적화 문제 해결에 특화되어 있으며, 특히 화학 반응 시뮬레이션에서 탁월한 성능을 보여주고 있습니다.",imgSrc:Pm,link:"https://www.honeywell.com/us/en/company/quantum"},google:{title:"Google Quantum AI",description:"Google Quantum AI는 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 합니다.",content:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 발표하며 양자 컴퓨팅이 기존 컴퓨터보다 더 복잡한 문제를 해결할 수 있음을 증명했습니다. Google의 연구는 주로 인공지능(AI), 화학 및 물리학 분야에 중점을 두고 있으며, 양자 알고리즘을 통해 새로운 연구 방향을 제시하고 있습니다.",businessTitle:"양자 우월성 달성 및 인공지능 연구",business:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 선언하며, 기존 컴퓨터로는 해결하기 어려운 문제를 양자 컴퓨터로 처리하는 데 성공했습니다. Google의 연구는 인공지능과 양자 알고리즘 개발에 중점을 두고 있습니다. 머신러닝 및 데이터 분석 분야에서 양자 컴퓨팅을 적극 활용하고 있으며, AI 모델의 학습 속도를 높이기 위한 연구를 지속하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Google은 화학, 물리학 분야에 양자 컴퓨팅을 활용하며, 머신러닝 모델의 훈련 속도를 가속화하기 위해 연구를 진행 중입니다. 또한, Google은 양자 컴퓨팅과 인공지능의 결합을 통해 새로운 데이터 분석 기술을 개발하고 있습니다.",imgSrc:Tm,link:"https://quantumai.google/"},microsoft:{title:"Microsoft",description:"Microsoft는 Azure Quantum 플랫폼을 통해 다양한 양자 하드웨어와 소프트웨어를 제공합니다.",content:"Microsoft는 토폴로지 큐비트 개발에 주력하며, Azure Quantum 플랫폼을 통해 여러 양자 하드웨어와 소프트웨어 생태계를 지원합니다. 이 플랫폼은 연구자들이 양자 컴퓨팅을 쉽게 활용할 수 있도록 설계되었습니다.",businessTitle:"양자 클라우드 서비스",business:"Microsoft는 Azure Quantum을 통해 다양한 양자 하드웨어와 소프트웨어를 지원합니다. Microsoft는 토폴로지 큐비트를 연구하며, 이를 통해 안정적이고 확장 가능한 양자 컴퓨팅 환경을 개발하고 있습니다. 암호화와 최적화 문제를 해결하기 위해 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구에도 기여하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Microsoft는 암호화 및 최적화 문제 해결에 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구를 지원하기 위한 도구도 개발 중입니다. 주요 고객들은 클라우드를 통해 양자 컴퓨터에 접근해 다양한 연구를 수행하고 있습니다.",imgSrc:zm,link:"https://quantum.microsoft.com/"},intel:{title:"Intel",description:"Intel은 양자 프로세서 개발과 하드웨어 소프트웨어 생태계 구축에 집중하고 있습니다.",content:"Intel은 고성능 양자 프로세서를 개발 중이며, Quantum SDK를 통해 양자 알고리즘 개발을 지원합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터 간의 협업을 통해 더욱 강력한 컴퓨팅 성능을 구현하려고 합니다.",businessTitle:"양자 프로세서 개발",business:"Intel은 고성능 큐비트 프로세서를 개발하며, Quantum SDK를 통해 연구자들에게 양자 알고리즘 개발 환경을 제공합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터를 결합한 하이브리드 컴퓨팅 시스템 개발을 목표로 하고 있습니다. 그뿐 아니라, 반도체 기술과 양자 컴퓨팅을 결합해 상용화 가능한 솔루션을 개발하며, 다양한 산업 응용을 위해 파트너들과 협력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Intel은 다양한 산업에서 상용화 가능한 양자 컴퓨터를 구축하는 데 중점을 두고 있으며, 반도체 기술과 양자 프로세서를 결합해 성능을 극대화하고 있습니다.",imgSrc:Lm,link:"https://www.intel.co.kr/content/www/kr/ko/research/quantum-computing.html"},alibaba:{title:"Alibaba",description:"Alibaba는 클라우드와 양자 컴퓨팅을 결합해 보안 솔루션을 개발합니다.",content:"Alibaba는 양자 연구소(AQML)를 설립하고 양자 컴퓨팅과 인공지능(AI)을 결합한 연구를 수행 중입니다. 이 회사는 특히 데이터 보안을 강화하기 위해 양자 암호화 기술을 연구하고 있습니다.",businessTitle:"양자 클라우드와 암호화 연구",business:"Alibaba는 AQML(Alibaba Quantum Laboratory)을 통해 양자 컴퓨팅과 인공지능을 결합한 연구를 수행하고 있습니다. 양자 컴퓨팅은 보안 기술에 사용되어 데이터 보호를 강화합니다. 또한 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, AI와 결합된 양자 알고리즘 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Alibaba는 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, 양자 암호화 솔루션을 개발해 보안을 강화하고 있습니다.",imgSrc:Mm,link:"https://www.alibabacloud.com/en/press-room/alibaba-cloud-and-cas-launch-one-of-the-worlds-most?_p_lc=1"},jininfra:{title:"JinInfra",description:"JinInfra는 양자 네트워크 인프라를 개발하며 보안 솔루션을 제공합니다.",content:"JinInfra는 양자 키 분배(QKD)를 기반으로 한 보안 네트워크 구축을 목표로 하고 있으며, 정부 및 기업과 협력해 차세대 통신 인프라를 개발합니다.",businessTitle:"양자 통신 인프라 개발",business:"JinInfra는 양자 키 분배(QKD)를 사용해 안전한 통신망을 구축합니다. 이 회사는 정부 및 기업과 협력해 차세대 통신 인프라를 개발하고 있습니다. 양자 통신 기술을 상용화하기 위해 노력하며, 보안이 중요한 분야에 최적화된 통신망을 구축하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"JinInfra는 양자 통신망 구축 프로젝트를 주도하며, 보안이 중요한 분야에 최적화된 양자 솔루션을 제공합니다. 이 회사는 양자 암호화 기술을 통해 네트워크 보안을 강화하는 데 중점을 두고 있습니다.",imgSrc:Im,link:"https://jininfra.com/"}},zS=()=>{const{companyName:e}=uh(),t=TS[e.toLowerCase()],[n,r]=b.useState(!1);return b.useEffect(()=>{const i=setInterval(()=>{r(o=>!o)},500);return()=>clearInterval(i)},[]),t?s.jsxs(ec,{children:[s.jsxs(tc,{children:[s.jsx(nc,{src:sl,alt:"banner image"}),s.jsx(rc,{children:t.title})]}),s.jsxs(N3,{children:[s.jsxs(K3,{children:[s.jsx(q3,{src:n?PS:OS,alt:`${t.title} speaking`}),s.jsxs(Y3,{children:[s.jsx(X3,{children:t.description}),s.jsx(Z3,{children:t.content})]})]}),s.jsxs(Va,{children:[s.jsx("h1",{children:"Q. 양자와 관련된 어떤 사업을 하고 어떤 성과를 냈나요?"})," "]}),s.jsxs(Ga,{style:{marginBottom:"15px"},children:[s.jsx("h1",{children:t.businessTitle}),s.jsx("p",{children:t.business})]}),s.jsxs(Ga,{children:[s.jsx("h1",{children:t.businessTitle2}),s.jsx("p",{children:t.business2})]}),s.jsx("div",{style:{margin:"5% 0"},children:s.jsx(Va,{children:s.jsx(wm,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:"홈페이지로 이동"})})})]})]}):s.jsx("p",{children:"존재하지 않는 기업입니다."})},IS={finance:{title:"금융 (Finance)",intro:"양자 컴퓨팅은 금융 리스크 분석과 포트폴리오 최적화에 사용됩니다.",content:[{subtitle:"리스크 분석",text:"양자 컴퓨터는 복잡한 금융 상품들의 리스크를 빠르게 분석하며, 양자 알고리즘으로 리스크 예측의 정확성을 높입니다."},{subtitle:"포트폴리오 최적화",text:"투자 포트폴리오의 수익을 극대화하고 리스크를 최소화하기 위해 양자 알고리즘을 사용합니다."},{subtitle:"사례",text:"Goldman Sachs와 IBM은 포트폴리오 최적화와 옵션 가격 책정에 양자 알고리즘을 활용한 연구를 진행 중입니다."}]},chemistry:{title:"화학 및 재료 과학 (Chemistry & Material Science)",intro:"양자 컴퓨터는 화학 반응 시뮬레이션과 신약 개발에 활용됩니다.",content:[{subtitle:"신약 개발",text:"단백질과 화합물 간의 상호작용을 정확하게 시뮬레이션하여 신약 개발 시간을 단축합니다."},{subtitle:"화학 반응 시뮬레이션",text:"분자 구조와 화학 반응을 정확하게 예측해 연구 시간을 단축하고 정확도를 높입니다."},{subtitle:"사례",text:"Pfizer와 IBM은 양자 컴퓨터를 활용한 신약 개발 연구를 진행하고 있습니다."}]},logistics:{title:"물류 및 최적화 (Logistics & Optimization)",intro:"물류 경로 최적화와 공급망 관리를 통해 비용 절감과 효율성을 극대화합니다.",content:[{subtitle:"물류 최적화",text:"수많은 경로와 제약 조건을 고려해 최적의 운송 경로를 제시합니다."},{subtitle:"공급망 최적화",text:"공급망의 모든 단계를 고려해 효율적인 경로와 재고 관리를 계산합니다."},{subtitle:"사례",text:"Volkswagen은 양자 컴퓨터로 교통 흐름을 최적화하고, DHL은 배송 경로 최적화를 연구 중입니다."}]}},LS=()=>{const{businessName:e}=uh(),t=IS[e];return t?s.jsxs(ec,{children:[s.jsxs(tc,{children:[s.jsx(nc,{src:sl,alt:"banner image"}),s.jsx(rc,{children:t.title})]}),s.jsxs(Va,{style:{padding:"5% 0"},children:[s.jsx(J3,{children:t.intro}),t.content.map((n,r)=>s.jsx(Ga,{style:{marginBottom:"2%",alignItems:"center"},children:s.jsxs(ew,{children:[s.jsx(tw,{children:n.subtitle}),s.jsx(nw,{children:n.text})]},r)}))]})]}):s.jsx("p",{children:"존재하지 않는 산업입니다."})},Bf=j.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  margin-bottom:50px;

  p {
      font-size: 1.7rem;
      margin-bottom:20px;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.4rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
`,MS=()=>s.jsxs(Mw,{children:[s.jsx(Nw,{children:s.jsx("a",{href:"/description",children:s.jsx("img",{src:ac,alt:"Back to main"})})}),s.jsxs(Rw,{children:[s.jsx("h1",{children:"양자 컴퓨팅과 계산 복잡도 이론"}),s.jsx("hr",{}),s.jsx("h2",{children:"(1)BPQ(Bounded-Error Quantum Polynomial Time)"}),s.jsxs(Bf,{children:[s.jsxs("p",{children:[s.jsxs("span",{children:["양자 컴퓨터가 효율적으로 풀 수 있는 문제군을 ",s.jsx("span",{style:{color:"#0489B1"},children:"BQP"}),"라 한다."]}),s.jsx("br",{})," 여기서 효율적이란, '정해진 오차범위 내에서 다항 시간 안에' 푼다는 뜻이다. 양자 컴퓨터는 확률적 알고리즘을 실행할 뿐이므로 양자 컴퓨터에 대한 BQP는 기존 컴퓨터에 대한 BPP에 대응한다. ",s.jsx("span",{children:"BPP는 오차 확률을 1/4로 제한하며 다항 시간에 풀 수 있는 문제의 집합으로 정의된다."}),' 양자 컴퓨터가 문제를 "푼다"는 것은 모든 예제에 대해 높은 확률로 올바른 결과가 나온다는 뜻이다. 그 결과가 다항 시간에 나왔다면 그 문제는 BQP에 속한다.',s.jsx("br",{}),"이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다."]}),s.jsxs("p",{children:["BQP에 속하는 대표적인 문제로는 ",s.jsx("span",{children:"Shor의 소인수분해 알고리즘"}),"과 ",s.jsx("span",{children:"Grover의 검색 알고리즘"}),"이 있습니다. ",s.jsx("br",{}),"Shor의 알고리즘은 고전적인 알고리즘보다 훨씬 효율적으로 큰 수를 소인수분해할 수 있으며, ",s.jsx("br",{}),"Grover의 알고리즘은 비정렬 데이터베이스에서 특정 항목을 검색하는 데 있어 고전적인 알고리즘의 제곱근 시간만큼 소요됩니다."]})]}),s.jsx("h2",{children:"(2)QMA(Quantum Merlin-Arthur)"}),s.jsxs(Bf,{children:[s.jsxs("p",{children:[s.jsxs("span",{children:["QMA는 ",s.jsx("span",{style:{color:"#0489B1"},children:"양자 컴퓨터의 비판자 증명 시스템"}),"에 해당합니다."]})," QMA 클래스는 고전적인 복잡도 이론의 NP 클래스와 유사하지만, 차이점은  ",s.jsx("span",{style:{color:"#0489B1"},children:"증명(proof)이 양자 상태로 제공"}),"된다는 것입니다. 구체적으로, QMA는 검증자가 다항 시간 내에 주어진 양자 증명을 확인할 수 있는 문제들을 포함합니다.",s.jsx("br",{}),"이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다."]}),s.jsxs("p",{children:["QMA 클래스에 속하는 문제들은 일반적으로 ",s.jsx("span",{children:"QMA-완전(Quantum Merlin-Arthur-comlete)"}),"문제로 분류됩니다. 이는 이러한 문제들이 QMA 내의 모든 문제를 다항식 시간 내에 변환할 수 있을 만큼 복잡하다는 것을 의미합니다. 다표적인 예로는 ",s.jsx("span",{children:"양자 회로의 3-SAT 문제"}),"등 이 있습니다. QMA 클래스의 문제들은 고전적인 컴퓨터로는 해결하기 어려운 문제들이 많으며, 이는 양자 컴퓨팅이 해결할 수 있는 문제의 범위를 확장하는 데 핵심 역할을 합니다."]})]})]})]});function RS(){return s.jsx(s.Fragment,{children:s.jsx(MS,{})})}const NS=()=>{const[e,t]=b.useState(!1),n=()=>{t(!e)};return s.jsxs("div",{children:[s.jsx("div",{style:{zIndex:"20000",position:"fixed",bottom:"9rem",right:"3rem"},children:s.jsx("button",{onClick:n,style:{backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"50%",width:"5rem",height:"5rem",fontSize:"24px",cursor:"pointer"},title:"챗봇 열기",children:e?"X":"💬"})}),e&&s.jsx(AS,{children:s.jsx(DS,{allow:"microphone;",src:"https://console.dialogflow.com/api-client/demo/embedded/87fdfc94-6875-4699-a61e-ee1c7fcc7ab2"})})]})},AS=j.div`
  z-index: 10000;
  position: fixed;
  bottom: 3rem;
  right: 9rem;
  width: auto; 
  
  @media (max-width: 780px) {
    right: 0;
    left: 0;
    top: auto;
    bottom: 2rem;
    width: 95%;
  }
`,DS=j.iframe`
  display: block; 
  max-width: 95%;
  width: 400px;
  height: 500px; 
  margin: 0 auto; 
  @media (max-width: 780px) {
    height: 480px;
  }
`,uc="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='19'%20height='18.3214'%20fill='url(%23pattern0_23_318)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_23_318'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_23_318'%20transform='scale(0.0357143%200.037037)'/%3e%3c/pattern%3e%3cimage%20id='image0_23_318'%20width='28'%20height='27'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAADBElEQVRIDa2Wv2sUQRTHJxDT+Q+kTGVjH2JzRaoUdgeKxe6GSOwkICQWWthYiBbBMgQCgWS9vUsKfxxEkUC0iCASYiN2FmnERhDBYuTz7r6bXXb37lZvYHg7OzPf7/u+92Z2navRpm48u+zCVsNFSWCd56s70zUgRlgKaNjuXlja87NrXX/r6Tt//dGhX3jwxjrvmHNRe9ccGgGydAmbJ5f2fgD4MP7kt15/sS4yLP3z1zMjXN089jO3n3u32Dmprfrizc4TqXn54ZspQwUdhThA59nUNWMbQ0rvKU6CUiWFl1F7F8/ZCKBrxn59/9Sfff/pqxpzUojFGUhxvICffcECcgMB4eH51+8/VTyF9xBrHxjst+LKkqTPYavBYi1E3b820oFSImV5LatkCoQwsBjP/reBpcKyQkqV8RAlgdSRszphrHJM1at85o/MYueECTwipONq4BExOuc0FYl8iLCqRjzc6Ryl3KhmzDw9O8eiFwcfracbvLczSnrS42OM/WKRdG0A0E0u+5X72/YKEsY48vbo1J4VeixzdDksHERwlrE9hVES4AEKCYEahNNX7qUkAi0jZO38tcfW1zdeCcKsokdYe3mMkoABZJSymghlBxHiGOsI68SlO4IwCzaCLI/cy1QoLyDEqgGgzQASWsZZhaxlrFDKKUKuppCeK+znkMuZSbUsofJXRihHlEPWKO9gcdyI3HkOnXMMKBom8ZIGISBq5IYxigidVGGzilRQOMlasIlejpCbAEJkj/MckiKOBQpz55A84oF5MaabxtLQjA0T3PxN0w8rCjkz47hLwaAuCGfxLuVEhq0G0hXa7BFRHke1kOE8hBbOsq8FnHwPkU8eIWajimgUMsKojwCR4kNQ/T3s3TuOHya80kbZQcQQsYciUbVjh37xxclCEaHSwtKM09sIMDoEhI48ET5VOXuGKxObbNhqZMFwQDmBDCewhB+CXIFU5UzYA22UBHN3u+/JLaAQQ4QqnlFpxylsd+0neSBYzUk7S/rr7tvC+RqC+Rfm5NAxZj03IwAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",cc="data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='50'%20height='50.8929'%20fill='url(%23pattern0_23_312)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_23_312'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_23_312'%20transform='scale(0.0178571%200.0175439)'/%3e%3c/pattern%3e%3cimage%20id='image0_23_312'%20width='56'%20height='57'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA5CAYAAABj2ui7AAAJqklEQVRoBe1aCZBcVRX9PcGoiArugoXGCigiblEL17iVC6KgBCKpck1JaRnFUkuLkpn/s5AFMDELJDEbJAyBoEkgwYRYhIGJgcGs/3XP1jM9W2cm05k1PVvPkqvn9vzu1++/30vSk3RZeVW//vLeu//ed++799z7v2FcbBdXQL8Cfz52lVEiZheZ/rU+S5T5LHHIZ4qYzxQ0fsT4mSXKMAZjDcwp6FZs32BYdsm4MI4guZ0tcQg0DNAqmGYFZvgsUS1pJzehklpNnWeJasMKzLhwchbb032mqMi7YG6BK4xie/r5E/Te41N8lth9HgRTNbrbuPf4lIkVFOZoip7zLlxSqz0TZrZFllhwAQVL0SZ4yZ8mb982qcgS6wtFOIcP8GTcvm3SOQtaZPo3OUQL7QzezknAItO/qNCEUvkBj2cnZImYqRIr1HujRMzMTUiEgjx4y9fP99NHHg7SD//RQgtfitCjx7ppe2Uv7ajqpc3Huun+A6foZzvD9Ik1QbrsvkCKI8lxMXtyCiGMH5OuWfviIiuBK139ly4I0E93hGlPMErdg6OUqUVjY7SvLkq/fraV3rq40kUPwn704SD9bm8rn7XCW6IsOy1a9iwtAVMQNPL+v9bQB1bU0rUravj44MpafuYw9vXNDfTv5v5MMnn2Hz85SN/b2kRYwLcsrky8b8UrHVQZGaKnq0/T+5ZV0xsWuDVuWPas9EJagck+UzTpBIQJfWhVLV35YBW9br6fJlmCXjPXT9DWFYsq6d0PVNGSA6doaOSMJ/PZdoyOnaE1/+mk9/ylmmnjfbCIXTWnWYvvvL+Kpq2p02m7ybACk72FLBGzdcLd9kQTLT3YwQLq+vFsXlk7nclCtv7hMeqLjWU1dvkrHaxJ0MdCwlomz/OzCWNRYbYqP5x6eUnoM0VQnYD7w60D9Gp4gH6yo8VFEP2/3dPqqRxo9IWGPrJeaKevPhKi9y6t5uOLG0Nk7m+n5+qidHpozHM+5ul4wjM4ME1fUC9fPDvQTaD5L0ZoZ1UvfX5Dvav/03+rIzgJXRPtg/Sd0kae89p5fja5q5dW09TlNXxcvijuUL68KcSLqKMB2t/Y3OB6L/zBx1drBSRt9pEOjoG5z6yrJ9i+vGLYg3D5unasbZCdgTMeexaO6VtbGuibWxrY3Jw+nLG3DzTpndPzoT52cPJ4WAJMVn7mXDOMU9Xos0TEGaA7Y8WgQTDq9GPlB4bd2oPJ3biuLjEODgj38L6XzI07KAgLMwWjDj2YXFt0RLdedNNjcUvAWND41No69rLOXOXcmSpfsX2DMiDxUvk5PJdj93DjcDy6trKig+fDMXxsdZA+ubaOHHOU6cFRYNG+sKGe3rww7vYXvBjRkaRSuzvBE0KVw4dMT75OLXuUiLvlTq9ruGvsKZgTvNnRtkEXM71DYzR9Y4jevqSSPre+njUkgwLEtqserCKYvfOea5bX0C2PN7IJT1lWQ6ChtuaeYQ4Zb7wvwIsiz3foyGejRNyd0GK6/SdPwjVi03cfb2TN6JwLgjE0Bhcuwy8E5h9vb6GHXu2kTUe7aN3hLoKJO/TftDBAAAlf2hSil1vcexFmj/GwiLct0aMdhxbOKZmGzxTlcmema3jCReURbSx7qbGPNSTTwL6dvTNMT/p7aP3hLtpwpIvKGvooEBli85THXreylmGbqsGRsTNUsr9da+ryfOm6PKFBnylCUkdiVdM9+/nTYZUHvt94pMs1HyYJqLX2UCet/h9CgZAIO62nR2jL8W52GvK7AMx17Y/72ly05XnKdUgWMKp0ZiQ06+/NOh5YCJUWzBWOB/ALBwQEpgx1xagiPEDvUMIPAICu/X5vTgJGZQEzCqQyPePJJh0P9MjRpLdz5gDDrqqICycL2Ng9zKaqeliYv64h23BoZnM+JwHhKXVtbzDqYgIhAEAc+SBMFA4GwPlU/yhDOJVZOCG1AYDfsa3ZRVudK93HZAFzNlEEaV3mUNMxpA3ACBlwLltFDzubg839HNve9UAqOkIQB/ZVG5wMHJUkQKbrZLDP1ckAhXx2fT2Va6AVhPYyJUArpD2/+WcrawOBXmUYUC426k5LsHAztzUz+lHneNynOJmswwQC8dcebeA0Bkhf15B5YI9irMfLXc8BHgCeUdLQNZg2ws2PtrdkRDHj70yGiWxLg0ARQDJAIyCCTEJXkujoH+XUCoDg5tJGzuW8BAUiAh0coN3e58aiME/sedCAQ7rrmTAjJS+aeJ4S6AFr0g12+pDPwSM699gvcPm6hhAAMwbjQDAffqg2BagDvqH04KAi4NFgZ0xHimOmDPIRdmCuDh+6cwpUAzDVDZKfAaJhhWVciX7sRwRsXYv0jXDVDKYKTSKvgxUgzQKcg+NxMvQ/7WsjjFdb18AolydkXsDDnU81c3YiP5evU8G2YRg+U3TKA9RraA/CqM9xj9XUeVSHWezJxeURhndAOkA12L9zy9o5fPxi1wmGd1gI9Mvtl7tOaN+J/Qrt6/iBLIkQ4VykA9zIBaGBdCAXZQvslXRtUCpIqQsS7h3mBUB1Dl4WtRukTh4CMJD3KqFoE16k+V7EEKiRzqiIQx0Ps6nz2EfpBJf77JODbMrQEBZWfYdzjz2Jve3cy2dtyQJfaryKTnAmcPuZkky8BPvsSKs7T5SFyHTdMzhKP3gqvROB0wIelgUbv/YoOsFWLfsuzQQmAvNEkP72Y41cMAICQZaA9Ab1GiwA+rEvUIaABwUka+iOsbl5CSWbrTwGJvyH59rY+8Jzw8nhnShYoXyBUKHWiMA7ZHC2nfuMwq8lwl5CwuMBon3/iSauPqMCjZrpV8bDB0oU6lzsKQCDOc+eYKey7OUOwoH9hWcoQCFP1DXUWYufP8ljbt0afycWEkmxnEwn3mmJcPrCb1yLnqX7BKEM3y1yHQfItj/Up5OR9zSy+GxoZi7dj+s01ww/m5dnGoMqgQ5kQ+r6rhibagYaSWjmtk3liRWYmo/PZxkYcmnl+lW1aYVEqdCDJn5OmKpIkeH2An0AhSP51e4TnPnjGyISaBwA4ff86yR/+FGFzP0D6Ljs/9+fsJNClqorVij3Raa/NIMdZtGN30gK8E8LTofy8RuJswSFZK5n/2eFI43XOf4rV871mzyadHTCfuVKyMwhxN6TR6a9XL/y3N6TeyhIcH0WF8g+4n/yKowkP6/lZRHwk+x5/Z1SXYv4XxnaT9/nKGAwa+il8jQh98X2tCLTP9dnCfusBbOEDRpGsT1tQnjMG1EzcLVh2XPGf0o/qBUaC2GJg/xTumXPMTDnYsttBf4LoCZViqQnTEMAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",dc=j.div`
  background: #1c2329;
  max-width: 100%;
  width: 100%;
  min-height: 200vh;
  cursor: text;
  user-select: text;
  padding: 0;
  height: 200vh;
  margin-bottom: -30vh;
`,fc=j.div`
  font-family: 'Arial', sans-serif;
  padding: 40px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #1c2329;
  color: #fff;
`,pc=j.section`
  display: flex;
  align-items: left;
  margin-bottom: 40px;
  margin-top: 70px;
`,hc=j.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,mc=j.img`
  width: 70px;
  height: auto;
`,gc=j.h1`
  font-size: 2.5rem;
  margin: 0;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,_t=j.p`
  font-size: 1.2rem;
  color: #888;
  line-height: 1.7;
  h3{
    font-size: 1.5rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,FS=j.div`
  display: none;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 10px;

  p {
    line-height: 1.6;
    color: #bbb;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
`,vc=j.section`
  background-color: #1c2329;
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #444;
  margin-bottom: 40px;
`,wr=j.h2`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,yc=j.section`
  margin-bottom: 40px;
`,Bl=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media(max-width: 780px){
    grid-template-columns: repeat(1, 1fr);
  }
`,Sr=j.div`
  background-color: #1c2329;
  border: 1px solid #444;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  padding: 20px;
  transition: box-shadow 0.3s ease;
  img{
    max-width: 40px;
    width: 40px;
  };
  &:hover {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }

  p {
    font-size: 1.2rem;
    color: #888;
    line-height: 1.7;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
`,xc=j(FS)`
  @media (max-width: 768px) {
    display: flex;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      color: #eee;
        &::selection {
            background-color: #60E6F2;
            color: #000;
        }
    }
    h2 {
      font-size: 1.4rem;
        &::selection {
            background-color: #60E6F2;
            color: #000;
        }
    }
    ${Bl} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`,BS=()=>{const e=Ye();return s.jsx(dc,{children:s.jsxs(fc,{children:[s.jsx(pc,{children:s.jsxs(hc,{children:[s.jsx(mc,{src:Ll,alt:"CS Logo"}),s.jsxs("div",{children:[s.jsx(gc,{children:"양자 인턴십 소개"}),s.jsx(_t,{children:s.jsx("h3",{children:"양자 인턴십 3기"})})]})]})}),s.jsx(xc,{children:s.jsx(_t,{children:"국내 양자기술 관련 기업의 인턴 수요 조사를 통해 국내 대학과 연계 매칭으로 신진 유입인력 확보하기 위한 목적."})}),s.jsxs(vc,{children:[s.jsx(wr,{children:"KQIC 양자기술 인력양성 프로그램"}),s.jsxs(_t,{children:["미래 양자인재 양성을 위한 인턴십",s.jsx("br",{}),"ICT 전공 대학(원)생 대상으로 국내 기업 연계 인턴십 프로그램 운영"]})]}),s.jsxs(yc,{children:[s.jsx(wr,{children:"기관 소개"}),s.jsxs(Bl,{children:[s.jsxs(Sr,{onClick:()=>e("/kqic"),children:[s.jsx("h3",{children:"KQIC"}),s.jsx("img",{src:cc,alt:"Operating Systems"}),s.jsx("p",{children:"KQIC는 한국의 주요 양자 정보 기술 연구 및 개발을 담당하는 기관입니다. 이 센터는 양자 컴퓨팅, 양자 암호, 양자 통신 등 다양한 양자 기술 분야에서의 연구와 개발을 촉진하며, 국가적인 양자 정보 과학 기술의 진보를 지원합니다. 양자 기술의 상용화 및 기술 전수를 위한 플랫폼 역할을 하면서 산학연 네트워크를 구축하고 있습니다."})]}),s.jsxs(Sr,{onClick:()=>e("/nia"),children:[s.jsx("h3",{children:"NIA"}),s.jsx("img",{src:uc,alt:"Operating Systems"}),s.jsx("p",{children:"NIA는 대한민국의 정보화를 총괄하는 정부 기관입니다. 이 기관은 정보화 정책의 수립 및 실행, 정보통신 기술(ICT)의 연구 개발을 지원하고, 디지털 격차 해소 및 정보 접근성 향상을 목표로 활동합니다. 또한, 국민의 정보화 역량 강화 및 디지털 전환을 위한 다양한 프로그램과 서비스를 제공하고 있습니다."})]})]})]})]})})};function $S(){return s.jsx(s.Fragment,{children:s.jsx(BS,{})})}const WS=()=>{const e=Ye();return s.jsx(dc,{children:s.jsxs(fc,{children:[s.jsx(pc,{children:s.jsxs(hc,{children:[s.jsx(mc,{src:Ll,alt:"CS Logo"}),s.jsxs("div",{children:[s.jsx(gc,{children:"양자 인턴십 소개"}),s.jsx(_t,{children:"양자 인턴십 3기"})]})]})}),s.jsx(xc,{children:s.jsx(_t,{children:"국내 양자기술 관련 기업의 인턴 수요 조사를 통해 국내 대학과 연계 매칭으로 신진 유입인력 확보하기 위한 목적."})}),s.jsxs(vc,{children:[s.jsx(wr,{children:"KQIC 양자기술 인력양성 프로그램"}),s.jsxs(_t,{children:["미래 양자인재 양성을 위한 인턴십",s.jsx("br",{}),"ICT 전공 대학(원)생 대상으로 국내 기업 연계 인턴십 프로그램 운영"]})]}),s.jsxs(yc,{children:[s.jsx(wr,{children:"기관 소개"}),s.jsxs(Bl,{children:[s.jsxs(Sr,{onClick:()=>e("/kqic"),children:[s.jsx("h3",{children:"KQIC"}),s.jsx("img",{src:cc,alt:"Operating Systems"}),s.jsx("p",{children:"kqic."})]}),s.jsxs(Sr,{onClick:()=>e("/nia"),children:[s.jsx("h3",{children:"NIA"}),s.jsx("img",{src:uc,alt:"Operating Systems"}),s.jsx("p",{children:"nia."})]})]})]})]})})},US=()=>{const e=Ye();return s.jsx(dc,{children:s.jsxs(fc,{children:[s.jsx(pc,{children:s.jsxs(hc,{children:[s.jsx(mc,{src:Ll,alt:"CS Logo"}),s.jsxs("div",{children:[s.jsx(gc,{children:"양자 인턴십 소개"}),s.jsx(_t,{children:"양자 인턴십 3기"})]})]})}),s.jsx(xc,{children:s.jsx(_t,{children:"국내 양자기술 관련 기업의 인턴 수요 조사를 통해 국내 대학과 연계 매칭으로 신진 유입인력 확보하기 위한 목적."})}),s.jsxs(vc,{children:[s.jsx(wr,{children:"KQIC 양자기술 인력양성 프로그램"}),s.jsxs(_t,{children:["미래 양자인재 양성을 위한 인턴십",s.jsx("br",{}),"ICT 전공 대학(원)생 대상으로 국내 기업 연계 인턴십 프로그램 운영"]})]}),s.jsxs(yc,{children:[s.jsx(wr,{children:"기관 소개"}),s.jsxs(Bl,{children:[s.jsxs(Sr,{onClick:()=>e("/kqic"),children:[s.jsx("h3",{children:"KQIC"}),s.jsx("img",{src:cc,alt:"Operating Systems"}),s.jsx("p",{children:"kqic."})]}),s.jsxs(Sr,{onClick:()=>e("/nia"),children:[s.jsx("h3",{children:"NIA"}),s.jsx("img",{src:uc,alt:"Operating Systems"}),s.jsx("p",{children:"nia."})]})]})]})]})})},HS=j.div`
  display: flex;
  height: 100vh;
  background-color: #1c2329;
  color: #ffffff;
  min-height: 320vh;
  letter-spacing: 2px;
  cursor: text;
  user-select: text;
  height: 320vh;
  margin-bottom: -30vh;
`,QS=j.nav`
  width: 250px;
  background-color: #141a1f;
  padding: 20px;
  border-right: 1px solid #333;
  overflow-y: auto;
`,GS=j.button`
  display: block;
  width: 100%;
  background-color: ${({isActive:e})=>e?"#333":"transparent"};
  color: ${({isActive:e})=>e?"#fff":"#aaa"};
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #2a2f35;
    color: #fff;
  }
`,VS=j.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
`,KS=j.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }`,qS=j.p`
  font-size: 17px;
  line-height: 1.7; 
  font-weight: 400;
  padding: 10px;
  border-left: 4px solid #60e6f2;
  margin-bottom: 20px;
  background-color: #2a2f35; 
  border-radius: 4px;
  color: #ccc; 
  &::selection {
    background-color: #60e6f2;
    color: #000;
  }
`,YS=j.div`
  margin-top: 25px;
  border-radius: 10px;
`,XS=j.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #60E6F2;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,ZS=j.p`
  font-size: 16px; 
  line-height: 1.65; 
  margin-right: 20px;
  margin-bottom: 25px; 
  padding: 10px 15px; 
  font-family: 'Arial', sans-serif;
  font-weight: 400; 
  letter-spacing: 0.8px; 
  background-color: #2a2f35; 
  border-radius: 5px; 
  color: #ddd; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  &::selection {
    background-color: #60e6f2;
    color: #000;
  }
`,Is=[{id:"양자기술동향",title:"양자기술동향",content:"양자기술동향의 개요입니다.",subsections:[{id:"globalTrends",title:"국내외 시장 동향",content:"전 세계 양자기술 시장의 총규모는 2023년 25조 9,024억 원이며, 연평균 29.2%의 높은 성장률을 지속해 2030년에는 155조 5,112억 원으로 커질 것으로 전망된다. 부문별로 살펴보면 양자통신 시장은 2023년 5조 209억 원에서 연평균 25.6% 성장해 2030년 24조 7,368억 원으로 커질 전망이다. 양자센싱은 2023년 2조 464억 원에서 연평균 19.1% 성장해 2030년 6조 9,482억 원으로 확대될 예정이다. 한편 양자컴퓨팅 시장은 2023년 18조 8,352억 원에서 연평균 30.9% 성장해 2030년 123조 8,263억원을 기록할 것으로 보인다. 이처럼 양자통신과 양자컴퓨팅은 무척 빠르게 성장할 예정이며, 양자센싱은 통신과 컴퓨팅보다 규모는 작지만 산업화 과정이 비교적 일찍 진행될 것으로 전망된다."},{id:"domesticTrends",title:"국내외 정책 동향",content:"해외 주요국들은 양자분야 활성화를 위해 정부 주도로 법·제도적 기반 마련과 함께 국가 양자기술 확보 정책 및 로드맵 수립에 나서고 있다. 이를 기반으로 대규모 예산을 장기적으로 투입해 기초연구를 지원하고, 산업적 응용 가능성이 높은 분야를 중심으로 산업화를 촉진하고 있다. 미국에서는 2020년 7월 네트워크 전략비전을 수립해 향후 10년 내 양자네트워크를 전국적으로 구현한다는 방침을 제시했다. 단기적으로는 2025년까지 양자 상호연결과 양자중계기, 양자메모리 개발 등에 역점을 둔다는 계획이며, 장기적으로는 2040년까지 국가 차원에서 양자네트워크를 통합한다는 전략이다. 양자센서 분야의 밑그림은 2022년 3월 백악관 국가과학기술심의회 양자정보과학 소위원회를 통해 제시됐다. 그 내용을 들여다보면 양자센서는 양자컴퓨팅 및 양자통신에 비해 비교적 성숙시장이나, 전체적으로는 아직 초기단계에 불과하고 향후 다양한 산업영역에서의 활용이 기대되므로 지속적 투자를 통한 단기적 산업 활성화가 필요하다는 방향성을 담고 있었다. 유럽은 ‘양자 선언문(Quantum Manifesto)’에 근거한 10억 유로(약 1조 3,500억 원) 규모의 연구개발 투자가 진행 중에 있다. 과학 연구와 산업경쟁력을 강화해 ‘제2의 양자 혁명’에 불을 붙이는 것이 목적으로 영국, 독일, 네덜란드 등의 국가에서는 독자적인 양자기술 전략과 정부 투자도 준비하고 있다. 중국은 국가적으로 양자기술에 주력하고 있다. 특히 양자통신 분야에서의 기술이 눈에 띄게 발전 중인데, 베이징과 상하이를 연결하는 총 2,000km가 넘는 양자통신 간선 네트워크를 구축했고 인공위성 ‘묵자’에 의해 양자암호키를 분배하고 양자 텔레포테이션 실험에 성공하는 등 대표적인 성과들을 내놓고 있다. 양자컴퓨터 분야에서도 ‘지우장(九章) 2호’, ‘쭈층즈(祖沖之) 2호’를 통해 양자초월 실험을 검증하는 등 매우 적극적으로 연구개발을 진행하고 있다. 일본은 2017년 8월 문부과학성이 ‘양자과학기술(광ㆍ양자기술)의 새로운 추진 방책’을 발표하며 양자기술 육성의 신호탄을 쐈다. 이어 2018년 12월에는 내각부가 “향후 이노베이션을 추진하는데 있어 중요한 3가지 분야”로 AI, 바이오와 더불어 ‘광ㆍ양자’를 언급했다. 또 2020년 1월에는 일본 최초의 양자기술에 관한 통합 전략인 ‘양자기술 이노베이션 전략’을 발표하며, 양자기술 개발에 대한 글로벌 트렌드에 합류하기 시작했다. 또한 2022년 4월 ‘양자미래사회비전’을 공표하여 양자기술을 사회경제시스템 전체에 도입하고 기존 기술 시스템과의 융합을 통해 일본 산업의 성장기회를 창출하고 사회 과제를 해결하기 위한 노력을 진행하고 있다. 우리나라의 경우 출발이 상대적으로 늦은 탓에 다른 나라에 비해 큰 기술격차를 보이고 있다. 이에 과학기술정보통신부에서는 2019년부터 양자센서 분야ㆍ양자컴퓨터 분야ㆍ양자암호통신 분야 신규사업지원을 확대하고 있다. 구체적으로 대학, 연구소 등 연구조직을 강화하고, 양자암호통신인프라 시범사업을 추진 중에 있으며, 산업 생태계 활성화를 위한 다양한 노력을 기울이고 있다."},{id:"globalTrends",title:"국내외 투자 동향",content:"해외 주요국은 양자시장을 초기 선점하기 위해, 경쟁적으로 대규모 관련 예산을 편성하고 장기적 관점에서 투자를 확대하고 있다. 미국, 중국 등 선진국 간 패권 경쟁에 의한 국가 차원의 투자는 물론이고, 민간 차원의 투자 규모도 대폭 늘어나는 추세이다. 현재 세계 주요국의 양자분야 투자 규모를 간략히 살펴보면 다음과 같다. 미국의 경우 2023년 美 연방정부 및 각 기관으로부터 요청된 관련 예산 총합은 8억 4,400만 달러(약 1조 972억 원)이다. 2022년의 경우 8억 7,700만 달러(약 1조 1,401억 원)가 요청됐지만, 실제로는 9억 1,800만 달러(약 1조 1,934억 원)가 투입된 것으로 추정된다. 유럽연합(EU)은 2018년 10월 양자플래그십(Quantum Flagship)을 출범시키고, 이를 통해 2018년부터 향후 10년간 양자기술에 10억 유로(약 1조 3,000억 원)의 예산 투입 계획을 밝히고, 현재 활발한 투자를 진행하고 있다. 2014년 영국은 향후 10년 동안 민관 공동으로 10억 파운드(약 1조 5,000억 원)의 투자를 발표한 바 있다. 이후 2023년 2월 국가양자전략(National Quantum Strategy, NQS)를 통해 2024년부터 향후 10년간 양자기술에 25억 파운드(약 3조 7,500억 원)를 투자할 계획임을 밝혔다. 독일은 양자기술-기초에서 시장까지(Quantum technologies-from basic research to market)라는 이름의 프레임워크 프로그램을 통해 2018년부터 2022년까지 양자기술 R&D에 6억 5,000만 유로(약 8,450억 원)를 투자했으며, 2023년 4월 양자기술에 대한 실행 계획(Germany’s Action Plan for Quantum Technologies)을 발표하며 2026년까지 30억 유로(약 3조 9,000억 원)를 투자할 계획임을 밝혔다. 프랑스는 2021년 국가양자기술전략(Stratégie nationale sur les technologies quantiques)을 발표하면서 2025년까지 5년 동안 양자기술에 18억 1,500만 유로(약 2조 3,595억 원)를 투자할 것이라고 밝혔다. 캐나다의 경우, 2023년 1월 국가양자전략(National Quantum Strategy, NQS)을 통해 향후 7년간 양자기술에 3억 6,000만 캐나다 달러(약 3,600억 원)의 투자를 발표했다. 중국은 제14차 5개년 계획(2021~2025) 및 2035 중장기 목표를 발표하며 양자통신과 양자컴퓨터에 투입되는 연구개발비를 매년 7% 이상 증액하겠다고 밝혔다. 일본은 양자기술 이노베이션 전략을 수립하며 추경 예산을 통해 양자기술에 대한 예산을 증액했고, 2022 회계연도 예산은 추경 예산까지 포함된다면 기존 대비 2배 이상 확대된 800억 엔(약 8,000억 원)이 투입된 것으로 추정되고 있다. 한국의 경우, 2022년 양자 R&D 전용사업에 699억 원 수준의 예산이 투입됐으며, 2023년 6월에는 과학기술정보통신부가 대한민국 양자과학기술전략을 발표하면서 2035년까지 민관 공동으로 3조 원을 투자할 것임을 밝혔다. "},{id:"domesticTrends",title:"국내외 표준화 동향",content:"양자기술은 크게 양자통신, 양자센서, 양자컴퓨팅 세 분야로 구분할 수 있다. 그 중 국내외 표준화가 가장 활발한 분야는 양자통신(양자암호통신/양자 키 분배 중심)이며, 다음으로 양자컴퓨팅과 양자센서 순으로 활성화가 예상된다. 이와 동시에 세 분야의 양자디바이스를 네트워크 형태로 묶기 위한 양자네트워크 혹은 양자인터넷도 표준화 시도가 한창이다. 본 백서에서는 초기 단계이나마 현재까지의 진행현황과 앞으로의 동향을 살펴, 국가 양자기술 표준화의 방향성을 제시하고자 한다. 양자암호통신은 2008년 ETSI(유럽전기통신표준화기구, European Telecommunication Standard Institute)에서 QKD ISG(Quantum Key Distribution Industry Specification Group)가 설립되면서 표준화가 시작됐다. 주로 양자암호통신 시스템 구현을 위한 표준기술이 연구됐으며, 장비 제조사와 대학 및 연구기관들이 주로 참여했다. 반면 ITU(국제전기통신연합, International Telecommunication Union)에서는 2018년 한국의 KT 및 SKT가 각각 양자암호 네트워크 표준 및 양자암호 보안 표준화 제안이 착수됐다. 그동안 ETSI 표준이 제공하지 못하던, 비용효율적인 양자암호 인프라 구축과 서비스를 위한 기술 표준개발이 시작된 것이다. 현재 ETSI는 20여 개의 산업규격 문서를 발간했고, ITU는 50개 이상의 권고안을 개발하는 등 국제표준 기반 상용화가 어느 정도 준비된 것으로 여겨지고 있다. 특히 ITU의 양자암호 네트워크 국제 표준화는 한국이 선도하고 있다. 양자컴퓨팅은 ISO/IEC(국제표준화기구, International Organization for Standardization/국제전기기술위원회, International Electrotechnical Commission) 중심으로 표준화를 준비하고 있으나, 실질적인 표준 문서의 개발은 미진한 상황이다. 최근 IEC에서 한 국 주도하에 Quantum SEG(Standardization Evaluation Group)가 설립된 후 ISO/IEC 간에 JTC-Q(Joint Technical Committee – Quantum)를 설립하고 QT(Quantum Technology) 분야에 대한 실제 표준화에 착수하기로 잠정 합의되었기에, 향후 해당 분야의 국제 표준화 과정에서 한국의 활약이 기대된다. 한편 양자디바이스(양자컴퓨터, 양자센서, 양자 키 분배 시스템 등) 간 정보를 양자상태로 교환할 수 있는 양자네트워크 혹은 양자인터넷에 대한 국제표준화도 ITU와 IETF/IRTF(인터넷 기술 전문위원회, Internet Engineering Task Force/인터넷 연구 전문위원회, Internet Research Task Force)에서 착수에 들어가 주요 표준화 경쟁 이슈로 대두하고 있다."}]},{id:"양자기술 R&D 동향",title:"양자기술 R&D 동향",content:"양자기술 R&D 동향 개요입니다."},{id:"양자기술 소재, 부품, 장비 산업생태계 동향",title:"양자기술 소재, 부품, 장비 산업생태계 동향",content:"양자기술 소재, 부품, 장비 산업생태계에 대한 개요입니다."},{id:"양자기술 통계",title:"양자기술 통계",content:"양자기술 통계에 대한 개요입니다."},{id:"출처",title:"출처",content:"KQIC 양자산업백서."}],JS=()=>{const[e,t]=b.useState(Is[0].id),n=Is.find(r=>r.id===e);return s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{height:"12vh",minHeight:"12vh",backgroundColor:"#292f36"}}),s.jsxs(HS,{children:[s.jsx(QS,{children:Is.map(r=>s.jsx(GS,{isActive:e===r.id,onClick:()=>t(r.id),children:r.title},r.id))}),s.jsxs(VS,{children:[s.jsx(KS,{children:n.title}),s.jsx(qS,{children:n.content}),n.subsections&&s.jsx(YS,{children:n.subsections.map(r=>s.jsxs("div",{children:[s.jsx(XS,{children:r.title}),s.jsx(ZS,{children:r.content})]},r.id))})]})]})]})};function e5(){return s.jsxs(t2,{children:[s.jsx(Ty,{}),s.jsx(_S,{}),s.jsxs(Zv,{children:[s.jsx(ue,{path:"/",element:s.jsx(hy,{})}),s.jsx(ue,{path:"/concept",element:s.jsx(hw,{})}),s.jsx(ue,{path:"/description",element:s.jsx(Fw,{})}),s.jsx(ue,{path:"/quiz",element:s.jsx(gw,{})}),s.jsx(ue,{path:"/medium",element:s.jsx(ww,{})}),s.jsx(ue,{path:"/advanced",element:s.jsx(jw,{})}),s.jsx(ue,{path:"/quizmain",element:s.jsx(yw,{})}),s.jsx(ue,{path:"/character",element:s.jsx(uS,{})}),s.jsx(ue,{path:"/cat",element:s.jsx(mS,{})}),s.jsx(ue,{path:"/company",element:s.jsx(Cw,{})}),s.jsx(ue,{path:"/company/:companyName",element:s.jsx(zS,{})}),s.jsx(ue,{path:"/business/:businessName",element:s.jsx(LS,{})}),s.jsx(ue,{path:"/recent",element:s.jsx(zw,{})}),s.jsx(ue,{path:"/coinentanglement",element:s.jsx(ES,{})}),s.jsx(ue,{path:"/computing",element:s.jsx(RS,{})}),s.jsx(ue,{path:"/about",element:s.jsx($S,{})}),s.jsx(ue,{path:"/kqic",element:s.jsx(WS,{})}),s.jsx(ue,{path:"/niq",element:s.jsx(US,{})}),s.jsx(ue,{path:"/industry",element:s.jsx(JS,{})})]}),s.jsx(Ww,{}),s.jsx(NS,{}),s.jsx($y,{})]})}const t5=sy`
  :root {
    --vh: 100%;
    background-color: #eee;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font: inherit;
    font-family: 'LINESeedKR-Bd';
  }

  /* Style resets for common elements */


  * {
    box-sizing: border-box;
  }

  html {
    -webkit-touch-callout: none; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    scroll-behavior: smooth;
    font-family: 'LINESeedKR-Bd', sans-serif;
    font-size: 62.5%; /* 1rem = 10px */
    user-select: none; /* disable text select */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    padding: 0;
  }
  
  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }


  @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  
@font-face {
  font-family: 'LINESeedKR-Bd';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
  
@font-face {
  font-family: 'LINESeedKR-Bd';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
`,n5={title:Cn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: 0.07em;
    `,text:Cn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 0.07em;
    `},r5={fonts:n5};function i5(){return s.jsx(s.Fragment,{children:s.jsxs(iy,{theme:r5,children:[s.jsx(t5,{}),s.jsx(e5,{})]})})}Ls.createRoot(document.getElementById("root")).render(s.jsx(fe.StrictMode,{children:s.jsx(i5,{})}));