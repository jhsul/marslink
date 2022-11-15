(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))i(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const I of C.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&i(I)}).observe(document,{childList:!0,subtree:!0});function E(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerpolicy&&(C.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?C.credentials="include":g.crossorigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function i(g){if(g.ep)return;g.ep=!0;const C=E(g);fetch(g.href,C)}})();var HT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sa={},sS={exports:{}},Fi={},TA={exports:{}},aE={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ht=Symbol.for("react.element"),NT=Symbol.for("react.portal"),mT=Symbol.for("react.fragment"),yT=Symbol.for("react.strict_mode"),xT=Symbol.for("react.profiler"),LT=Symbol.for("react.provider"),zT=Symbol.for("react.context"),vT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),YT=Symbol.for("react.memo"),OT=Symbol.for("react.lazy"),ac=Symbol.iterator;function ZT(o){return o===null||typeof o!="object"?null:(o=ac&&o[ac]||o["@@iterator"],typeof o=="function"?o:null)}var rS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aS=Object.assign,kS={};function LQ(o,A,E){this.props=o,this.context=A,this.refs=kS,this.updater=E||rS}LQ.prototype.isReactComponent={};LQ.prototype.setState=function(o,A){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,A,"setState")};LQ.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function lS(){}lS.prototype=LQ.prototype;function _k(o,A,E){this.props=o,this.context=A,this.refs=kS,this.updater=E||rS}var $k=_k.prototype=new lS;$k.constructor=_k;aS($k,LQ.prototype);$k.isPureReactComponent=!0;var kc=Array.isArray,PS=Object.prototype.hasOwnProperty,Al={current:null},JS={key:!0,ref:!0,__self:!0,__source:!0};function cS(o,A,E){var i,g={},C=null,I=null;if(A!=null)for(i in A.ref!==void 0&&(I=A.ref),A.key!==void 0&&(C=""+A.key),A)PS.call(A,i)&&!JS.hasOwnProperty(i)&&(g[i]=A[i]);var R=arguments.length-2;if(R===1)g.children=E;else if(1<R){for(var t=Array(R),B=0;B<R;B++)t[B]=arguments[B+2];g.children=t}if(o&&o.defaultProps)for(i in R=o.defaultProps,R)g[i]===void 0&&(g[i]=R[i]);return{$$typeof:Ht,type:o,key:C,ref:I,props:g,_owner:Al.current}}function jT(o,A){return{$$typeof:Ht,type:o.type,key:A,ref:o.ref,props:o.props,_owner:o._owner}}function El(o){return typeof o=="object"&&o!==null&&o.$$typeof===Ht}function bT(o){var A={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(E){return A[E]})}var lc=/\/+/g;function js(o,A){return typeof o=="object"&&o!==null&&o.key!=null?bT(""+o.key):A.toString(36)}function nK(o,A,E,i,g){var C=typeof o;(C==="undefined"||C==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(C){case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case Ht:case NT:I=!0}}if(I)return I=o,g=g(I),o=i===""?"."+js(I,0):i,kc(g)?(E="",o!=null&&(E=o.replace(lc,"$&/")+"/"),nK(g,A,E,"",function(B){return B})):g!=null&&(El(g)&&(g=jT(g,E+(!g.key||I&&I.key===g.key?"":(""+g.key).replace(lc,"$&/")+"/")+o)),A.push(g)),1;if(I=0,i=i===""?".":i+":",kc(o))for(var R=0;R<o.length;R++){C=o[R];var t=i+js(C,R);I+=nK(C,A,E,t,g)}else if(t=ZT(o),typeof t=="function")for(o=t.call(o),R=0;!(C=o.next()).done;)C=C.value,t=i+js(C,R++),I+=nK(C,A,E,t,g);else if(C==="object")throw A=String(o),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return I}function on(o,A,E){if(o==null)return o;var i=[],g=0;return nK(o,i,"","",function(C){return A.call(E,C,g++)}),i}function XT(o){if(o._status===-1){var A=o._result;A=A(),A.then(function(E){(o._status===0||o._status===-1)&&(o._status=1,o._result=E)},function(E){(o._status===0||o._status===-1)&&(o._status=2,o._result=E)}),o._status===-1&&(o._status=0,o._result=A)}if(o._status===1)return o._result.default;throw o._result}var oi={current:null},KK={transition:null},WT={ReactCurrentDispatcher:oi,ReactCurrentBatchConfig:KK,ReactCurrentOwner:Al};aE.Children={map:on,forEach:function(o,A,E){on(o,function(){A.apply(this,arguments)},E)},count:function(o){var A=0;return on(o,function(){A++}),A},toArray:function(o){return on(o,function(A){return A})||[]},only:function(o){if(!El(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};aE.Component=LQ;aE.Fragment=mT;aE.Profiler=xT;aE.PureComponent=_k;aE.StrictMode=yT;aE.Suspense=VT;aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WT;aE.cloneElement=function(o,A,E){if(o==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+o+".");var i=aS({},o.props),g=o.key,C=o.ref,I=o._owner;if(A!=null){if(A.ref!==void 0&&(C=A.ref,I=Al.current),A.key!==void 0&&(g=""+A.key),o.type&&o.type.defaultProps)var R=o.type.defaultProps;for(t in A)PS.call(A,t)&&!JS.hasOwnProperty(t)&&(i[t]=A[t]===void 0&&R!==void 0?R[t]:A[t])}var t=arguments.length-2;if(t===1)i.children=E;else if(1<t){R=Array(t);for(var B=0;B<t;B++)R[B]=arguments[B+2];i.children=R}return{$$typeof:Ht,type:o.type,key:g,ref:C,props:i,_owner:I}};aE.createContext=function(o){return o={$$typeof:zT,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},o.Provider={$$typeof:LT,_context:o},o.Consumer=o};aE.createElement=cS;aE.createFactory=function(o){var A=cS.bind(null,o);return A.type=o,A};aE.createRef=function(){return{current:null}};aE.forwardRef=function(o){return{$$typeof:vT,render:o}};aE.isValidElement=El;aE.lazy=function(o){return{$$typeof:OT,_payload:{_status:-1,_result:o},_init:XT}};aE.memo=function(o,A){return{$$typeof:YT,type:o,compare:A===void 0?null:A}};aE.startTransition=function(o){var A=KK.transition;KK.transition={};try{o()}finally{KK.transition=A}};aE.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};aE.useCallback=function(o,A){return oi.current.useCallback(o,A)};aE.useContext=function(o){return oi.current.useContext(o)};aE.useDebugValue=function(){};aE.useDeferredValue=function(o){return oi.current.useDeferredValue(o)};aE.useEffect=function(o,A){return oi.current.useEffect(o,A)};aE.useId=function(){return oi.current.useId()};aE.useImperativeHandle=function(o,A,E){return oi.current.useImperativeHandle(o,A,E)};aE.useInsertionEffect=function(o,A){return oi.current.useInsertionEffect(o,A)};aE.useLayoutEffect=function(o,A){return oi.current.useLayoutEffect(o,A)};aE.useMemo=function(o,A){return oi.current.useMemo(o,A)};aE.useReducer=function(o,A,E){return oi.current.useReducer(o,A,E)};aE.useRef=function(o){return oi.current.useRef(o)};aE.useState=function(o){return oi.current.useState(o)};aE.useSyncExternalStore=function(o,A,E){return oi.current.useSyncExternalStore(o,A,E)};aE.useTransition=function(){return oi.current.useTransition()};aE.version="18.2.0";(function(o){o.exports=aE})(TA);const _T=hS(TA.exports);var uS={exports:{}},DS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(o){function A(w,G){var N=w.length;w.push(G);A:for(;0<N;){var j=N-1>>>1,Z=w[j];if(0<g(Z,G))w[j]=G,w[N]=Z,N=j;else break A}}function E(w){return w.length===0?null:w[0]}function i(w){if(w.length===0)return null;var G=w[0],N=w.pop();if(N!==G){w[0]=N;A:for(var j=0,Z=w.length,sA=Z>>>1;j<sA;){var PA=2*(j+1)-1,NA=w[PA],$=PA+1,xA=w[$];if(0>g(NA,N))$<Z&&0>g(xA,NA)?(w[j]=xA,w[$]=N,j=$):(w[j]=NA,w[PA]=N,j=PA);else if($<Z&&0>g(xA,N))w[j]=xA,w[$]=N,j=$;else break A}}return G}function g(w,G){var N=w.sortIndex-G.sortIndex;return N!==0?N:w.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;o.unstable_now=function(){return C.now()}}else{var I=Date,R=I.now();o.unstable_now=function(){return I.now()-R}}var t=[],B=[],n=1,K=null,s=3,r=!1,l=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(w){for(var G=E(B);G!==null;){if(G.callback===null)i(B);else if(G.startTime<=w)i(B),G.sortIndex=G.expirationTime,A(t,G);else break;G=E(B)}}function S(w){if(k=!1,u(w),!l)if(E(t)!==null)l=!0,EA(T);else{var G=E(B);G!==null&&tA(S,G.startTime-w)}}function T(w,G){l=!1,k&&(k=!1,J(d),d=-1),r=!0;var N=s;try{for(u(G),K=E(t);K!==null&&(!(K.expirationTime>G)||w&&!V());){var j=K.callback;if(typeof j=="function"){K.callback=null,s=K.priorityLevel;var Z=j(K.expirationTime<=G);G=o.unstable_now(),typeof Z=="function"?K.callback=Z:K===E(t)&&i(t),u(G)}else i(t);K=E(t)}if(K!==null)var sA=!0;else{var PA=E(B);PA!==null&&tA(S,PA.startTime-G),sA=!1}return sA}finally{K=null,s=N,r=!1}}var U=!1,F=null,d=-1,p=5,H=-1;function V(){return!(o.unstable_now()-H<p)}function CA(){if(F!==null){var w=o.unstable_now();H=w;var G=!0;try{G=F(!0,w)}finally{G?X():(U=!1,F=null)}}else U=!1}var X;if(typeof c=="function")X=function(){c(CA)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,AA=Y.port2;Y.port1.onmessage=CA,X=function(){AA.postMessage(null)}}else X=function(){P(CA,0)};function EA(w){F=w,U||(U=!0,X())}function tA(w,G){d=P(function(){w(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(w){w.callback=null},o.unstable_continueExecution=function(){l||r||(l=!0,EA(T))},o.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<w?Math.floor(1e3/w):5},o.unstable_getCurrentPriorityLevel=function(){return s},o.unstable_getFirstCallbackNode=function(){return E(t)},o.unstable_next=function(w){switch(s){case 1:case 2:case 3:var G=3;break;default:G=s}var N=s;s=G;try{return w()}finally{s=N}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var N=s;s=w;try{return G()}finally{s=N}},o.unstable_scheduleCallback=function(w,G,N){var j=o.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?j+N:j):N=j,w){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,w={id:n++,callback:G,priorityLevel:w,startTime:N,expirationTime:Z,sortIndex:-1},N>j?(w.sortIndex=N,A(B,w),E(t)===null&&w===E(B)&&(k?(J(d),d=-1):k=!0,tA(S,N-j))):(w.sortIndex=Z,A(t,w),l||r||(l=!0,EA(T))),w},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(w){var G=s;return function(){var N=s;s=G;try{return w.apply(this,arguments)}finally{s=N}}}})(DS);(function(o){o.exports=DS})(uS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=TA.exports,wi=uS.exports;function lA(o){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+o,E=1;E<arguments.length;E++)A+="&args[]="+encodeURIComponent(arguments[E]);return"Minified React error #"+o+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dS=new Set,Et={};function lR(o,A){pQ(o,A),pQ(o+"Capture",A)}function pQ(o,A){for(Et[o]=A,o=0;o<A.length;o++)dS.add(A[o])}var aC=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,$T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pc={},Jc={};function AU(o){return ra.call(Jc,o)?!0:ra.call(Pc,o)?!1:$T.test(o)?Jc[o]=!0:(Pc[o]=!0,!1)}function EU(o,A,E,i){if(E!==null&&E.type===0)return!1;switch(typeof A){case"function":case"symbol":return!0;case"boolean":return i?!1:E!==null?!E.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function oU(o,A,E,i){if(A===null||typeof A>"u"||EU(o,A,E,i))return!0;if(i)return!1;if(E!==null)switch(E.type){case 3:return!A;case 4:return A===!1;case 5:return isNaN(A);case 6:return isNaN(A)||1>A}return!1}function ii(o,A,E,i,g,C,I){this.acceptsBooleans=A===2||A===3||A===4,this.attributeName=i,this.attributeNamespace=g,this.mustUseProperty=E,this.propertyName=o,this.type=A,this.sanitizeURL=C,this.removeEmptyString=I}var Go={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){Go[o]=new ii(o,0,!1,o,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var A=o[0];Go[A]=new ii(A,1,!1,o[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(o){Go[o]=new ii(o,2,!1,o.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){Go[o]=new ii(o,2,!1,o,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){Go[o]=new ii(o,3,!1,o.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(o){Go[o]=new ii(o,3,!0,o,null,!1,!1)});["capture","download"].forEach(function(o){Go[o]=new ii(o,4,!1,o,null,!1,!1)});["cols","rows","size","span"].forEach(function(o){Go[o]=new ii(o,6,!1,o,null,!1,!1)});["rowSpan","start"].forEach(function(o){Go[o]=new ii(o,5,!1,o.toLowerCase(),null,!1,!1)});var ol=/[\-:]([a-z])/g;function il(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var A=o.replace(ol,il);Go[A]=new ii(A,1,!1,o,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var A=o.replace(ol,il);Go[A]=new ii(A,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(o){var A=o.replace(ol,il);Go[A]=new ii(A,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(o){Go[o]=new ii(o,1,!1,o.toLowerCase(),null,!1,!1)});Go.xlinkHref=new ii("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(o){Go[o]=new ii(o,1,!1,o.toLowerCase(),null,!0,!0)});function gl(o,A,E,i){var g=Go.hasOwnProperty(A)?Go[A]:null;(g!==null?g.type!==0:i||!(2<A.length)||A[0]!=="o"&&A[0]!=="O"||A[1]!=="n"&&A[1]!=="N")&&(oU(A,E,g,i)&&(E=null),i||g===null?AU(A)&&(E===null?o.removeAttribute(A):o.setAttribute(A,""+E)):g.mustUseProperty?o[g.propertyName]=E===null?g.type===3?!1:"":E:(A=g.attributeName,i=g.attributeNamespace,E===null?o.removeAttribute(A):(g=g.type,E=g===3||g===4&&E===!0?"":""+E,i?o.setAttributeNS(i,A,E):o.setAttribute(A,E))))}var uC=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gn=Symbol.for("react.element"),IQ=Symbol.for("react.portal"),RQ=Symbol.for("react.fragment"),Cl=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),fS=Symbol.for("react.provider"),TS=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),la=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),YC=Symbol.for("react.lazy"),US=Symbol.for("react.offscreen"),cc=Symbol.iterator;function ke(o){return o===null||typeof o!="object"?null:(o=cc&&o[cc]||o["@@iterator"],typeof o=="function"?o:null)}var WE=Object.assign,bs;function me(o){if(bs===void 0)try{throw Error()}catch(E){var A=E.stack.trim().match(/\n( *(at )?)/);bs=A&&A[1]||""}return`
`+bs+o}var Xs=!1;function Ws(o,A){if(!o||Xs)return"";Xs=!0;var E=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(A)if(A=function(){throw Error()},Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(B){var i=B}Reflect.construct(o,[],A)}else{try{A.call()}catch(B){i=B}o.call(A.prototype)}else{try{throw Error()}catch(B){i=B}o()}}catch(B){if(B&&i&&typeof B.stack=="string"){for(var g=B.stack.split(`
`),C=i.stack.split(`
`),I=g.length-1,R=C.length-1;1<=I&&0<=R&&g[I]!==C[R];)R--;for(;1<=I&&0<=R;I--,R--)if(g[I]!==C[R]){if(I!==1||R!==1)do if(I--,R--,0>R||g[I]!==C[R]){var t=`
`+g[I].replace(" at new "," at ");return o.displayName&&t.includes("<anonymous>")&&(t=t.replace("<anonymous>",o.displayName)),t}while(1<=I&&0<=R);break}}}finally{Xs=!1,Error.prepareStackTrace=E}return(o=o?o.displayName||o.name:"")?me(o):""}function iU(o){switch(o.tag){case 5:return me(o.type);case 16:return me("Lazy");case 13:return me("Suspense");case 19:return me("SuspenseList");case 0:case 2:case 15:return o=Ws(o.type,!1),o;case 11:return o=Ws(o.type.render,!1),o;case 1:return o=Ws(o.type,!0),o;default:return""}}function Pa(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case RQ:return"Fragment";case IQ:return"Portal";case aa:return"Profiler";case Cl:return"StrictMode";case ka:return"Suspense";case la:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case TS:return(o.displayName||"Context")+".Consumer";case fS:return(o._context.displayName||"Context")+".Provider";case Il:var A=o.render;return o=o.displayName,o||(o=A.displayName||A.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case Rl:return A=o.displayName||null,A!==null?A:Pa(o.type)||"Memo";case YC:A=o._payload,o=o._init;try{return Pa(o(A))}catch{}}return null}function gU(o){var A=o.type;switch(o.tag){case 24:return"Cache";case 9:return(A.displayName||"Context")+".Consumer";case 10:return(A._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=A.render,o=o.displayName||o.name||"",A.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return A;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(A);case 8:return A===Cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A}return null}function tI(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function pS(o){var A=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(A==="checkbox"||A==="radio")}function CU(o){var A=pS(o)?"checked":"value",E=Object.getOwnPropertyDescriptor(o.constructor.prototype,A),i=""+o[A];if(!o.hasOwnProperty(A)&&typeof E<"u"&&typeof E.get=="function"&&typeof E.set=="function"){var g=E.get,C=E.set;return Object.defineProperty(o,A,{configurable:!0,get:function(){return g.call(this)},set:function(I){i=""+I,C.call(this,I)}}),Object.defineProperty(o,A,{enumerable:E.enumerable}),{getValue:function(){return i},setValue:function(I){i=""+I},stopTracking:function(){o._valueTracker=null,delete o[A]}}}}function Cn(o){o._valueTracker||(o._valueTracker=CU(o))}function wS(o){if(!o)return!1;var A=o._valueTracker;if(!A)return!0;var E=A.getValue(),i="";return o&&(i=pS(o)?o.checked?"true":"false":o.value),o=i,o!==E?(A.setValue(o),!0):!1}function FK(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Ja(o,A){var E=A.checked;return WE({},A,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:E??o._wrapperState.initialChecked})}function uc(o,A){var E=A.defaultValue==null?"":A.defaultValue,i=A.checked!=null?A.checked:A.defaultChecked;E=tI(A.value!=null?A.value:E),o._wrapperState={initialChecked:i,initialValue:E,controlled:A.type==="checkbox"||A.type==="radio"?A.checked!=null:A.value!=null}}function FS(o,A){A=A.checked,A!=null&&gl(o,"checked",A,!1)}function ca(o,A){FS(o,A);var E=tI(A.value),i=A.type;if(E!=null)i==="number"?(E===0&&o.value===""||o.value!=E)&&(o.value=""+E):o.value!==""+E&&(o.value=""+E);else if(i==="submit"||i==="reset"){o.removeAttribute("value");return}A.hasOwnProperty("value")?ua(o,A.type,E):A.hasOwnProperty("defaultValue")&&ua(o,A.type,tI(A.defaultValue)),A.checked==null&&A.defaultChecked!=null&&(o.defaultChecked=!!A.defaultChecked)}function Dc(o,A,E){if(A.hasOwnProperty("value")||A.hasOwnProperty("defaultValue")){var i=A.type;if(!(i!=="submit"&&i!=="reset"||A.value!==void 0&&A.value!==null))return;A=""+o._wrapperState.initialValue,E||A===o.value||(o.value=A),o.defaultValue=A}E=o.name,E!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,E!==""&&(o.name=E)}function ua(o,A,E){(A!=="number"||FK(o.ownerDocument)!==o)&&(E==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+E&&(o.defaultValue=""+E))}var ye=Array.isArray;function uQ(o,A,E,i){if(o=o.options,A){A={};for(var g=0;g<E.length;g++)A["$"+E[g]]=!0;for(E=0;E<o.length;E++)g=A.hasOwnProperty("$"+o[E].value),o[E].selected!==g&&(o[E].selected=g),g&&i&&(o[E].defaultSelected=!0)}else{for(E=""+tI(E),A=null,g=0;g<o.length;g++){if(o[g].value===E){o[g].selected=!0,i&&(o[g].defaultSelected=!0);return}A!==null||o[g].disabled||(A=o[g])}A!==null&&(A.selected=!0)}}function Da(o,A){if(A.dangerouslySetInnerHTML!=null)throw Error(lA(91));return WE({},A,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Sc(o,A){var E=A.value;if(E==null){if(E=A.children,A=A.defaultValue,E!=null){if(A!=null)throw Error(lA(92));if(ye(E)){if(1<E.length)throw Error(lA(93));E=E[0]}A=E}A==null&&(A=""),E=A}o._wrapperState={initialValue:tI(E)}}function qS(o,A){var E=tI(A.value),i=tI(A.defaultValue);E!=null&&(E=""+E,E!==o.value&&(o.value=E),A.defaultValue==null&&o.defaultValue!==E&&(o.defaultValue=E)),i!=null&&(o.defaultValue=""+i)}function dc(o){var A=o.textContent;A===o._wrapperState.initialValue&&A!==""&&A!==null&&(o.value=A)}function MS(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(o,A){return o==null||o==="http://www.w3.org/1999/xhtml"?MS(A):o==="http://www.w3.org/2000/svg"&&A==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var In,GS=function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(A,E,i,g){MSApp.execUnsafeLocalFunction(function(){return o(A,E,i,g)})}:o}(function(o,A){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=A;else{for(In=In||document.createElement("div"),In.innerHTML="<svg>"+A.valueOf().toString()+"</svg>",A=In.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;A.firstChild;)o.appendChild(A.firstChild)}});function ot(o,A){if(A){var E=o.firstChild;if(E&&E===o.lastChild&&E.nodeType===3){E.nodeValue=A;return}}o.textContent=A}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IU=["Webkit","ms","Moz","O"];Object.keys(ve).forEach(function(o){IU.forEach(function(A){A=A+o.charAt(0).toUpperCase()+o.substring(1),ve[A]=ve[o]})});function HS(o,A,E){return A==null||typeof A=="boolean"||A===""?"":E||typeof A!="number"||A===0||ve.hasOwnProperty(o)&&ve[o]?(""+A).trim():A+"px"}function NS(o,A){o=o.style;for(var E in A)if(A.hasOwnProperty(E)){var i=E.indexOf("--")===0,g=HS(E,A[E],i);E==="float"&&(E="cssFloat"),i?o.setProperty(E,g):o[E]=g}}var RU=WE({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(o,A){if(A){if(RU[o]&&(A.children!=null||A.dangerouslySetInnerHTML!=null))throw Error(lA(137,o));if(A.dangerouslySetInnerHTML!=null){if(A.children!=null)throw Error(lA(60));if(typeof A.dangerouslySetInnerHTML!="object"||!("__html"in A.dangerouslySetInnerHTML))throw Error(lA(61))}if(A.style!=null&&typeof A.style!="object")throw Error(lA(62))}}function fa(o,A){if(o.indexOf("-")===-1)return typeof A.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ta=null;function Ql(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var Ua=null,DQ=null,SQ=null;function fc(o){if(o=yt(o)){if(typeof Ua!="function")throw Error(lA(280));var A=o.stateNode;A&&(A=hh(A),Ua(o.stateNode,o.type,A))}}function mS(o){DQ?SQ?SQ.push(o):SQ=[o]:DQ=o}function yS(){if(DQ){var o=DQ,A=SQ;if(SQ=DQ=null,fc(o),A)for(o=0;o<A.length;o++)fc(A[o])}}function xS(o,A){return o(A)}function LS(){}var _s=!1;function zS(o,A,E){if(_s)return o(A,E);_s=!0;try{return xS(o,A,E)}finally{_s=!1,(DQ!==null||SQ!==null)&&(LS(),yS())}}function it(o,A){var E=o.stateNode;if(E===null)return null;var i=hh(E);if(i===null)return null;E=i[A];A:switch(A){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(o=o.type,i=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!i;break A;default:o=!1}if(o)return null;if(E&&typeof E!="function")throw Error(lA(231,A,typeof E));return E}var pa=!1;if(aC)try{var le={};Object.defineProperty(le,"passive",{get:function(){pa=!0}}),window.addEventListener("test",le,le),window.removeEventListener("test",le,le)}catch{pa=!1}function QU(o,A,E,i,g,C,I,R,t){var B=Array.prototype.slice.call(arguments,3);try{A.apply(E,B)}catch(n){this.onError(n)}}var Ve=!1,qK=null,MK=!1,wa=null,eU={onError:function(o){Ve=!0,qK=o}};function tU(o,A,E,i,g,C,I,R,t){Ve=!1,qK=null,QU.apply(eU,arguments)}function BU(o,A,E,i,g,C,I,R,t){if(tU.apply(this,arguments),Ve){if(Ve){var B=qK;Ve=!1,qK=null}else throw Error(lA(198));MK||(MK=!0,wa=B)}}function PR(o){var A=o,E=o;if(o.alternate)for(;A.return;)A=A.return;else{o=A;do A=o,(A.flags&4098)!==0&&(E=A.return),o=A.return;while(o)}return A.tag===3?E:null}function vS(o){if(o.tag===13){var A=o.memoizedState;if(A===null&&(o=o.alternate,o!==null&&(A=o.memoizedState)),A!==null)return A.dehydrated}return null}function Tc(o){if(PR(o)!==o)throw Error(lA(188))}function nU(o){var A=o.alternate;if(!A){if(A=PR(o),A===null)throw Error(lA(188));return A!==o?null:o}for(var E=o,i=A;;){var g=E.return;if(g===null)break;var C=g.alternate;if(C===null){if(i=g.return,i!==null){E=i;continue}break}if(g.child===C.child){for(C=g.child;C;){if(C===E)return Tc(g),o;if(C===i)return Tc(g),A;C=C.sibling}throw Error(lA(188))}if(E.return!==i.return)E=g,i=C;else{for(var I=!1,R=g.child;R;){if(R===E){I=!0,E=g,i=C;break}if(R===i){I=!0,i=g,E=C;break}R=R.sibling}if(!I){for(R=C.child;R;){if(R===E){I=!0,E=C,i=g;break}if(R===i){I=!0,i=C,E=g;break}R=R.sibling}if(!I)throw Error(lA(189))}}if(E.alternate!==i)throw Error(lA(190))}if(E.tag!==3)throw Error(lA(188));return E.stateNode.current===E?o:A}function VS(o){return o=nU(o),o!==null?YS(o):null}function YS(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var A=YS(o);if(A!==null)return A;o=o.sibling}return null}var OS=wi.unstable_scheduleCallback,Uc=wi.unstable_cancelCallback,KU=wi.unstable_shouldYield,hU=wi.unstable_requestPaint,Co=wi.unstable_now,sU=wi.unstable_getCurrentPriorityLevel,el=wi.unstable_ImmediatePriority,ZS=wi.unstable_UserBlockingPriority,GK=wi.unstable_NormalPriority,rU=wi.unstable_LowPriority,jS=wi.unstable_IdlePriority,th=null,xg=null;function aU(o){if(xg&&typeof xg.onCommitFiberRoot=="function")try{xg.onCommitFiberRoot(th,o,void 0,(o.current.flags&128)===128)}catch{}}var rg=Math.clz32?Math.clz32:PU,kU=Math.log,lU=Math.LN2;function PU(o){return o>>>=0,o===0?32:31-(kU(o)/lU|0)|0}var Rn=64,Qn=4194304;function xe(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function HK(o,A){var E=o.pendingLanes;if(E===0)return 0;var i=0,g=o.suspendedLanes,C=o.pingedLanes,I=E&268435455;if(I!==0){var R=I&~g;R!==0?i=xe(R):(C&=I,C!==0&&(i=xe(C)))}else I=E&~g,I!==0?i=xe(I):C!==0&&(i=xe(C));if(i===0)return 0;if(A!==0&&A!==i&&(A&g)===0&&(g=i&-i,C=A&-A,g>=C||g===16&&(C&4194240)!==0))return A;if((i&4)!==0&&(i|=E&16),A=o.entangledLanes,A!==0)for(o=o.entanglements,A&=i;0<A;)E=31-rg(A),g=1<<E,i|=o[E],A&=~g;return i}function JU(o,A){switch(o){case 1:case 2:case 4:return A+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cU(o,A){for(var E=o.suspendedLanes,i=o.pingedLanes,g=o.expirationTimes,C=o.pendingLanes;0<C;){var I=31-rg(C),R=1<<I,t=g[I];t===-1?((R&E)===0||(R&i)!==0)&&(g[I]=JU(R,A)):t<=A&&(o.expiredLanes|=R),C&=~R}}function Fa(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function bS(){var o=Rn;return Rn<<=1,(Rn&4194240)===0&&(Rn=64),o}function $s(o){for(var A=[],E=0;31>E;E++)A.push(o);return A}function Nt(o,A,E){o.pendingLanes|=A,A!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,A=31-rg(A),o[A]=E}function uU(o,A){var E=o.pendingLanes&~A;o.pendingLanes=A,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=A,o.mutableReadLanes&=A,o.entangledLanes&=A,A=o.entanglements;var i=o.eventTimes;for(o=o.expirationTimes;0<E;){var g=31-rg(E),C=1<<g;A[g]=0,i[g]=-1,o[g]=-1,E&=~C}}function tl(o,A){var E=o.entangledLanes|=A;for(o=o.entanglements;E;){var i=31-rg(E),g=1<<i;g&A|o[i]&A&&(o[i]|=A),E&=~g}}var FE=0;function XS(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var WS,Bl,_S,$S,Ad,qa=!1,en=[],AI=null,EI=null,oI=null,gt=new Map,Ct=new Map,jC=[],DU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(o,A){switch(o){case"focusin":case"focusout":AI=null;break;case"dragenter":case"dragleave":EI=null;break;case"mouseover":case"mouseout":oI=null;break;case"pointerover":case"pointerout":gt.delete(A.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(A.pointerId)}}function Pe(o,A,E,i,g,C){return o===null||o.nativeEvent!==C?(o={blockedOn:A,domEventName:E,eventSystemFlags:i,nativeEvent:C,targetContainers:[g]},A!==null&&(A=yt(A),A!==null&&Bl(A)),o):(o.eventSystemFlags|=i,A=o.targetContainers,g!==null&&A.indexOf(g)===-1&&A.push(g),o)}function SU(o,A,E,i,g){switch(A){case"focusin":return AI=Pe(AI,o,A,E,i,g),!0;case"dragenter":return EI=Pe(EI,o,A,E,i,g),!0;case"mouseover":return oI=Pe(oI,o,A,E,i,g),!0;case"pointerover":var C=g.pointerId;return gt.set(C,Pe(gt.get(C)||null,o,A,E,i,g)),!0;case"gotpointercapture":return C=g.pointerId,Ct.set(C,Pe(Ct.get(C)||null,o,A,E,i,g)),!0}return!1}function Ed(o){var A=ZI(o.target);if(A!==null){var E=PR(A);if(E!==null){if(A=E.tag,A===13){if(A=vS(E),A!==null){o.blockedOn=A,Ad(o.priority,function(){_S(E)});return}}else if(A===3&&E.stateNode.current.memoizedState.isDehydrated){o.blockedOn=E.tag===3?E.stateNode.containerInfo:null;return}}}o.blockedOn=null}function hK(o){if(o.blockedOn!==null)return!1;for(var A=o.targetContainers;0<A.length;){var E=Ma(o.domEventName,o.eventSystemFlags,A[0],o.nativeEvent);if(E===null){E=o.nativeEvent;var i=new E.constructor(E.type,E);Ta=i,E.target.dispatchEvent(i),Ta=null}else return A=yt(E),A!==null&&Bl(A),o.blockedOn=E,!1;A.shift()}return!0}function wc(o,A,E){hK(o)&&E.delete(A)}function dU(){qa=!1,AI!==null&&hK(AI)&&(AI=null),EI!==null&&hK(EI)&&(EI=null),oI!==null&&hK(oI)&&(oI=null),gt.forEach(wc),Ct.forEach(wc)}function Je(o,A){o.blockedOn===A&&(o.blockedOn=null,qa||(qa=!0,wi.unstable_scheduleCallback(wi.unstable_NormalPriority,dU)))}function It(o){function A(g){return Je(g,o)}if(0<en.length){Je(en[0],o);for(var E=1;E<en.length;E++){var i=en[E];i.blockedOn===o&&(i.blockedOn=null)}}for(AI!==null&&Je(AI,o),EI!==null&&Je(EI,o),oI!==null&&Je(oI,o),gt.forEach(A),Ct.forEach(A),E=0;E<jC.length;E++)i=jC[E],i.blockedOn===o&&(i.blockedOn=null);for(;0<jC.length&&(E=jC[0],E.blockedOn===null);)Ed(E),E.blockedOn===null&&jC.shift()}var dQ=uC.ReactCurrentBatchConfig,NK=!0;function fU(o,A,E,i){var g=FE,C=dQ.transition;dQ.transition=null;try{FE=1,nl(o,A,E,i)}finally{FE=g,dQ.transition=C}}function TU(o,A,E,i){var g=FE,C=dQ.transition;dQ.transition=null;try{FE=4,nl(o,A,E,i)}finally{FE=g,dQ.transition=C}}function nl(o,A,E,i){if(NK){var g=Ma(o,A,E,i);if(g===null)er(o,A,i,mK,E),pc(o,i);else if(SU(g,o,A,E,i))i.stopPropagation();else if(pc(o,i),A&4&&-1<DU.indexOf(o)){for(;g!==null;){var C=yt(g);if(C!==null&&WS(C),C=Ma(o,A,E,i),C===null&&er(o,A,i,mK,E),C===g)break;g=C}g!==null&&i.stopPropagation()}else er(o,A,i,null,E)}}var mK=null;function Ma(o,A,E,i){if(mK=null,o=Ql(i),o=ZI(o),o!==null)if(A=PR(o),A===null)o=null;else if(E=A.tag,E===13){if(o=vS(A),o!==null)return o;o=null}else if(E===3){if(A.stateNode.current.memoizedState.isDehydrated)return A.tag===3?A.stateNode.containerInfo:null;o=null}else A!==o&&(o=null);return mK=o,null}function od(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sU()){case el:return 1;case ZS:return 4;case GK:case rU:return 16;case jS:return 536870912;default:return 16}default:return 16}}var XC=null,Kl=null,sK=null;function id(){if(sK)return sK;var o,A=Kl,E=A.length,i,g="value"in XC?XC.value:XC.textContent,C=g.length;for(o=0;o<E&&A[o]===g[o];o++);var I=E-o;for(i=1;i<=I&&A[E-i]===g[C-i];i++);return sK=g.slice(o,1<i?1-i:void 0)}function rK(o){var A=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&A===13&&(o=13)):o=A,o===10&&(o=13),32<=o||o===13?o:0}function tn(){return!0}function Fc(){return!1}function qi(o){function A(E,i,g,C,I){this._reactName=E,this._targetInst=g,this.type=i,this.nativeEvent=C,this.target=I,this.currentTarget=null;for(var R in o)o.hasOwnProperty(R)&&(E=o[R],this[R]=E?E(C):C[R]);return this.isDefaultPrevented=(C.defaultPrevented!=null?C.defaultPrevented:C.returnValue===!1)?tn:Fc,this.isPropagationStopped=Fc,this}return WE(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var E=this.nativeEvent;E&&(E.preventDefault?E.preventDefault():typeof E.returnValue!="unknown"&&(E.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var E=this.nativeEvent;E&&(E.stopPropagation?E.stopPropagation():typeof E.cancelBubble!="unknown"&&(E.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),A}var zQ={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=qi(zQ),mt=WE({},zQ,{view:0,detail:0}),UU=qi(mt),Ar,Er,ce,Bh=WE({},mt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==ce&&(ce&&o.type==="mousemove"?(Ar=o.screenX-ce.screenX,Er=o.screenY-ce.screenY):Er=Ar=0,ce=o),Ar)},movementY:function(o){return"movementY"in o?o.movementY:Er}}),qc=qi(Bh),pU=WE({},Bh,{dataTransfer:0}),wU=qi(pU),FU=WE({},mt,{relatedTarget:0}),or=qi(FU),qU=WE({},zQ,{animationName:0,elapsedTime:0,pseudoElement:0}),MU=qi(qU),GU=WE({},zQ,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),HU=qi(GU),NU=WE({},zQ,{data:0}),Mc=qi(NU),mU={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yU={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xU={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LU(o){var A=this.nativeEvent;return A.getModifierState?A.getModifierState(o):(o=xU[o])?!!A[o]:!1}function sl(){return LU}var zU=WE({},mt,{key:function(o){if(o.key){var A=mU[o.key]||o.key;if(A!=="Unidentified")return A}return o.type==="keypress"?(o=rK(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?yU[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(o){return o.type==="keypress"?rK(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?rK(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),vU=qi(zU),VU=WE({},Bh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=qi(VU),YU=WE({},mt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),OU=qi(YU),ZU=WE({},zQ,{propertyName:0,elapsedTime:0,pseudoElement:0}),jU=qi(ZU),bU=WE({},Bh,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),XU=qi(bU),WU=[9,13,27,32],rl=aC&&"CompositionEvent"in window,Ye=null;aC&&"documentMode"in document&&(Ye=document.documentMode);var _U=aC&&"TextEvent"in window&&!Ye,gd=aC&&(!rl||Ye&&8<Ye&&11>=Ye),Hc=String.fromCharCode(32),Nc=!1;function Cd(o,A){switch(o){case"keyup":return WU.indexOf(A.keyCode)!==-1;case"keydown":return A.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var QQ=!1;function $U(o,A){switch(o){case"compositionend":return Id(A);case"keypress":return A.which!==32?null:(Nc=!0,Hc);case"textInput":return o=A.data,o===Hc&&Nc?null:o;default:return null}}function Ap(o,A){if(QQ)return o==="compositionend"||!rl&&Cd(o,A)?(o=id(),sK=Kl=XC=null,QQ=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(A.ctrlKey||A.altKey||A.metaKey)||A.ctrlKey&&A.altKey){if(A.char&&1<A.char.length)return A.char;if(A.which)return String.fromCharCode(A.which)}return null;case"compositionend":return gd&&A.locale!=="ko"?null:A.data;default:return null}}var Ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(o){var A=o&&o.nodeName&&o.nodeName.toLowerCase();return A==="input"?!!Ep[o.type]:A==="textarea"}function Rd(o,A,E,i){mS(i),A=yK(A,"onChange"),0<A.length&&(E=new hl("onChange","change",null,E,i),o.push({event:E,listeners:A}))}var Oe=null,Rt=null;function op(o){kd(o,0)}function nh(o){var A=BQ(o);if(wS(A))return o}function ip(o,A){if(o==="change")return A}var Qd=!1;if(aC){var ir;if(aC){var gr="oninput"in document;if(!gr){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),gr=typeof yc.oninput=="function"}ir=gr}else ir=!1;Qd=ir&&(!document.documentMode||9<document.documentMode)}function xc(){Oe&&(Oe.detachEvent("onpropertychange",ed),Rt=Oe=null)}function ed(o){if(o.propertyName==="value"&&nh(Rt)){var A=[];Rd(A,Rt,o,Ql(o)),zS(op,A)}}function gp(o,A,E){o==="focusin"?(xc(),Oe=A,Rt=E,Oe.attachEvent("onpropertychange",ed)):o==="focusout"&&xc()}function Cp(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return nh(Rt)}function Ip(o,A){if(o==="click")return nh(A)}function Rp(o,A){if(o==="input"||o==="change")return nh(A)}function Qp(o,A){return o===A&&(o!==0||1/o===1/A)||o!==o&&A!==A}var lg=typeof Object.is=="function"?Object.is:Qp;function Qt(o,A){if(lg(o,A))return!0;if(typeof o!="object"||o===null||typeof A!="object"||A===null)return!1;var E=Object.keys(o),i=Object.keys(A);if(E.length!==i.length)return!1;for(i=0;i<E.length;i++){var g=E[i];if(!ra.call(A,g)||!lg(o[g],A[g]))return!1}return!0}function Lc(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function zc(o,A){var E=Lc(o);o=0;for(var i;E;){if(E.nodeType===3){if(i=o+E.textContent.length,o<=A&&i>=A)return{node:E,offset:A-o};o=i}A:{for(;E;){if(E.nextSibling){E=E.nextSibling;break A}E=E.parentNode}E=void 0}E=Lc(E)}}function td(o,A){return o&&A?o===A?!0:o&&o.nodeType===3?!1:A&&A.nodeType===3?td(o,A.parentNode):"contains"in o?o.contains(A):o.compareDocumentPosition?!!(o.compareDocumentPosition(A)&16):!1:!1}function Bd(){for(var o=window,A=FK();A instanceof o.HTMLIFrameElement;){try{var E=typeof A.contentWindow.location.href=="string"}catch{E=!1}if(E)o=A.contentWindow;else break;A=FK(o.document)}return A}function al(o){var A=o&&o.nodeName&&o.nodeName.toLowerCase();return A&&(A==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||A==="textarea"||o.contentEditable==="true")}function ep(o){var A=Bd(),E=o.focusedElem,i=o.selectionRange;if(A!==E&&E&&E.ownerDocument&&td(E.ownerDocument.documentElement,E)){if(i!==null&&al(E)){if(A=i.start,o=i.end,o===void 0&&(o=A),"selectionStart"in E)E.selectionStart=A,E.selectionEnd=Math.min(o,E.value.length);else if(o=(A=E.ownerDocument||document)&&A.defaultView||window,o.getSelection){o=o.getSelection();var g=E.textContent.length,C=Math.min(i.start,g);i=i.end===void 0?C:Math.min(i.end,g),!o.extend&&C>i&&(g=i,i=C,C=g),g=zc(E,C);var I=zc(E,i);g&&I&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==I.node||o.focusOffset!==I.offset)&&(A=A.createRange(),A.setStart(g.node,g.offset),o.removeAllRanges(),C>i?(o.addRange(A),o.extend(I.node,I.offset)):(A.setEnd(I.node,I.offset),o.addRange(A)))}}for(A=[],o=E;o=o.parentNode;)o.nodeType===1&&A.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<A.length;E++)o=A[E],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var tp=aC&&"documentMode"in document&&11>=document.documentMode,eQ=null,Ga=null,Ze=null,Ha=!1;function vc(o,A,E){var i=E.window===E?E.document:E.nodeType===9?E:E.ownerDocument;Ha||eQ==null||eQ!==FK(i)||(i=eQ,"selectionStart"in i&&al(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ze&&Qt(Ze,i)||(Ze=i,i=yK(Ga,"onSelect"),0<i.length&&(A=new hl("onSelect","select",null,A,E),o.push({event:A,listeners:i}),A.target=eQ)))}function Bn(o,A){var E={};return E[o.toLowerCase()]=A.toLowerCase(),E["Webkit"+o]="webkit"+A,E["Moz"+o]="moz"+A,E}var tQ={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionend:Bn("Transition","TransitionEnd")},Cr={},nd={};aC&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete tQ.animationend.animation,delete tQ.animationiteration.animation,delete tQ.animationstart.animation),"TransitionEvent"in window||delete tQ.transitionend.transition);function Kh(o){if(Cr[o])return Cr[o];if(!tQ[o])return o;var A=tQ[o],E;for(E in A)if(A.hasOwnProperty(E)&&E in nd)return Cr[o]=A[E];return o}var Kd=Kh("animationend"),hd=Kh("animationiteration"),sd=Kh("animationstart"),rd=Kh("transitionend"),ad=new Map,Vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rI(o,A){ad.set(o,A),lR(A,[o])}for(var Ir=0;Ir<Vc.length;Ir++){var Rr=Vc[Ir],Bp=Rr.toLowerCase(),np=Rr[0].toUpperCase()+Rr.slice(1);rI(Bp,"on"+np)}rI(Kd,"onAnimationEnd");rI(hd,"onAnimationIteration");rI(sd,"onAnimationStart");rI("dblclick","onDoubleClick");rI("focusin","onFocus");rI("focusout","onBlur");rI(rd,"onTransitionEnd");pQ("onMouseEnter",["mouseout","mouseover"]);pQ("onMouseLeave",["mouseout","mouseover"]);pQ("onPointerEnter",["pointerout","pointerover"]);pQ("onPointerLeave",["pointerout","pointerover"]);lR("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lR("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lR("onBeforeInput",["compositionend","keypress","textInput","paste"]);lR("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lR("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lR("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Le="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Le));function Yc(o,A,E){var i=o.type||"unknown-event";o.currentTarget=E,BU(i,A,void 0,o),o.currentTarget=null}function kd(o,A){A=(A&4)!==0;for(var E=0;E<o.length;E++){var i=o[E],g=i.event;i=i.listeners;A:{var C=void 0;if(A)for(var I=i.length-1;0<=I;I--){var R=i[I],t=R.instance,B=R.currentTarget;if(R=R.listener,t!==C&&g.isPropagationStopped())break A;Yc(g,R,B),C=t}else for(I=0;I<i.length;I++){if(R=i[I],t=R.instance,B=R.currentTarget,R=R.listener,t!==C&&g.isPropagationStopped())break A;Yc(g,R,B),C=t}}}if(MK)throw o=wa,MK=!1,wa=null,o}function yE(o,A){var E=A[La];E===void 0&&(E=A[La]=new Set);var i=o+"__bubble";E.has(i)||(ld(A,o,2,!1),E.add(i))}function Qr(o,A,E){var i=0;A&&(i|=4),ld(E,o,i,A)}var nn="_reactListening"+Math.random().toString(36).slice(2);function et(o){if(!o[nn]){o[nn]=!0,dS.forEach(function(E){E!=="selectionchange"&&(Kp.has(E)||Qr(E,!1,o),Qr(E,!0,o))});var A=o.nodeType===9?o:o.ownerDocument;A===null||A[nn]||(A[nn]=!0,Qr("selectionchange",!1,A))}}function ld(o,A,E,i){switch(od(A)){case 1:var g=fU;break;case 4:g=TU;break;default:g=nl}E=g.bind(null,A,E,o),g=void 0,!pa||A!=="touchstart"&&A!=="touchmove"&&A!=="wheel"||(g=!0),i?g!==void 0?o.addEventListener(A,E,{capture:!0,passive:g}):o.addEventListener(A,E,!0):g!==void 0?o.addEventListener(A,E,{passive:g}):o.addEventListener(A,E,!1)}function er(o,A,E,i,g){var C=i;if((A&1)===0&&(A&2)===0&&i!==null)A:for(;;){if(i===null)return;var I=i.tag;if(I===3||I===4){var R=i.stateNode.containerInfo;if(R===g||R.nodeType===8&&R.parentNode===g)break;if(I===4)for(I=i.return;I!==null;){var t=I.tag;if((t===3||t===4)&&(t=I.stateNode.containerInfo,t===g||t.nodeType===8&&t.parentNode===g))return;I=I.return}for(;R!==null;){if(I=ZI(R),I===null)return;if(t=I.tag,t===5||t===6){i=C=I;continue A}R=R.parentNode}}i=i.return}zS(function(){var B=C,n=Ql(E),K=[];A:{var s=ad.get(o);if(s!==void 0){var r=hl,l=o;switch(o){case"keypress":if(rK(E)===0)break A;case"keydown":case"keyup":r=vU;break;case"focusin":l="focus",r=or;break;case"focusout":l="blur",r=or;break;case"beforeblur":case"afterblur":r=or;break;case"click":if(E.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":r=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":r=wU;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":r=OU;break;case Kd:case hd:case sd:r=MU;break;case rd:r=jU;break;case"scroll":r=UU;break;case"wheel":r=XU;break;case"copy":case"cut":case"paste":r=HU;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":r=Gc}var k=(A&4)!==0,P=!k&&o==="scroll",J=k?s!==null?s+"Capture":null:s;k=[];for(var c=B,u;c!==null;){u=c;var S=u.stateNode;if(u.tag===5&&S!==null&&(u=S,J!==null&&(S=it(c,J),S!=null&&k.push(tt(c,S,u)))),P)break;c=c.return}0<k.length&&(s=new r(s,l,null,E,n),K.push({event:s,listeners:k}))}}if((A&7)===0){A:{if(s=o==="mouseover"||o==="pointerover",r=o==="mouseout"||o==="pointerout",s&&E!==Ta&&(l=E.relatedTarget||E.fromElement)&&(ZI(l)||l[kC]))break A;if((r||s)&&(s=n.window===n?n:(s=n.ownerDocument)?s.defaultView||s.parentWindow:window,r?(l=E.relatedTarget||E.toElement,r=B,l=l?ZI(l):null,l!==null&&(P=PR(l),l!==P||l.tag!==5&&l.tag!==6)&&(l=null)):(r=null,l=B),r!==l)){if(k=qc,S="onMouseLeave",J="onMouseEnter",c="mouse",(o==="pointerout"||o==="pointerover")&&(k=Gc,S="onPointerLeave",J="onPointerEnter",c="pointer"),P=r==null?s:BQ(r),u=l==null?s:BQ(l),s=new k(S,c+"leave",r,E,n),s.target=P,s.relatedTarget=u,S=null,ZI(n)===B&&(k=new k(J,c+"enter",l,E,n),k.target=u,k.relatedTarget=P,S=k),P=S,r&&l)E:{for(k=r,J=l,c=0,u=k;u;u=mR(u))c++;for(u=0,S=J;S;S=mR(S))u++;for(;0<c-u;)k=mR(k),c--;for(;0<u-c;)J=mR(J),u--;for(;c--;){if(k===J||J!==null&&k===J.alternate)break E;k=mR(k),J=mR(J)}k=null}else k=null;r!==null&&Oc(K,s,r,k,!1),l!==null&&P!==null&&Oc(K,P,l,k,!0)}}A:{if(s=B?BQ(B):window,r=s.nodeName&&s.nodeName.toLowerCase(),r==="select"||r==="input"&&s.type==="file")var T=ip;else if(mc(s))if(Qd)T=Rp;else{T=Cp;var U=gp}else(r=s.nodeName)&&r.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(T=Ip);if(T&&(T=T(o,B))){Rd(K,T,E,n);break A}U&&U(o,s,B),o==="focusout"&&(U=s._wrapperState)&&U.controlled&&s.type==="number"&&ua(s,"number",s.value)}switch(U=B?BQ(B):window,o){case"focusin":(mc(U)||U.contentEditable==="true")&&(eQ=U,Ga=B,Ze=null);break;case"focusout":Ze=Ga=eQ=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,vc(K,E,n);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":vc(K,E,n)}var F;if(rl)A:{switch(o){case"compositionstart":var d="onCompositionStart";break A;case"compositionend":d="onCompositionEnd";break A;case"compositionupdate":d="onCompositionUpdate";break A}d=void 0}else QQ?Cd(o,E)&&(d="onCompositionEnd"):o==="keydown"&&E.keyCode===229&&(d="onCompositionStart");d&&(gd&&E.locale!=="ko"&&(QQ||d!=="onCompositionStart"?d==="onCompositionEnd"&&QQ&&(F=id()):(XC=n,Kl="value"in XC?XC.value:XC.textContent,QQ=!0)),U=yK(B,d),0<U.length&&(d=new Mc(d,o,null,E,n),K.push({event:d,listeners:U}),F?d.data=F:(F=Id(E),F!==null&&(d.data=F)))),(F=_U?$U(o,E):Ap(o,E))&&(B=yK(B,"onBeforeInput"),0<B.length&&(n=new Mc("onBeforeInput","beforeinput",null,E,n),K.push({event:n,listeners:B}),n.data=F))}kd(K,A)})}function tt(o,A,E){return{instance:o,listener:A,currentTarget:E}}function yK(o,A){for(var E=A+"Capture",i=[];o!==null;){var g=o,C=g.stateNode;g.tag===5&&C!==null&&(g=C,C=it(o,E),C!=null&&i.unshift(tt(o,C,g)),C=it(o,A),C!=null&&i.push(tt(o,C,g))),o=o.return}return i}function mR(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function Oc(o,A,E,i,g){for(var C=A._reactName,I=[];E!==null&&E!==i;){var R=E,t=R.alternate,B=R.stateNode;if(t!==null&&t===i)break;R.tag===5&&B!==null&&(R=B,g?(t=it(E,C),t!=null&&I.unshift(tt(E,t,R))):g||(t=it(E,C),t!=null&&I.push(tt(E,t,R)))),E=E.return}I.length!==0&&o.push({event:A,listeners:I})}var hp=/\r\n?/g,sp=/\u0000|\uFFFD/g;function Zc(o){return(typeof o=="string"?o:""+o).replace(hp,`
`).replace(sp,"")}function Kn(o,A,E){if(A=Zc(A),Zc(o)!==A&&E)throw Error(lA(425))}function xK(){}var Na=null,ma=null;function ya(o,A){return o==="textarea"||o==="noscript"||typeof A.children=="string"||typeof A.children=="number"||typeof A.dangerouslySetInnerHTML=="object"&&A.dangerouslySetInnerHTML!==null&&A.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,ap=typeof queueMicrotask=="function"?queueMicrotask:typeof jc<"u"?function(o){return jc.resolve(null).then(o).catch(kp)}:xa;function kp(o){setTimeout(function(){throw o})}function tr(o,A){var E=A,i=0;do{var g=E.nextSibling;if(o.removeChild(E),g&&g.nodeType===8)if(E=g.data,E==="/$"){if(i===0){o.removeChild(g),It(A);return}i--}else E!=="$"&&E!=="$?"&&E!=="$!"||i++;E=g}while(E);It(A)}function iI(o){for(;o!=null;o=o.nextSibling){var A=o.nodeType;if(A===1||A===3)break;if(A===8){if(A=o.data,A==="$"||A==="$!"||A==="$?")break;if(A==="/$")return null}}return o}function bc(o){o=o.previousSibling;for(var A=0;o;){if(o.nodeType===8){var E=o.data;if(E==="$"||E==="$!"||E==="$?"){if(A===0)return o;A--}else E==="/$"&&A++}o=o.previousSibling}return null}var vQ=Math.random().toString(36).slice(2),mg="__reactFiber$"+vQ,Bt="__reactProps$"+vQ,kC="__reactContainer$"+vQ,La="__reactEvents$"+vQ,lp="__reactListeners$"+vQ,Pp="__reactHandles$"+vQ;function ZI(o){var A=o[mg];if(A)return A;for(var E=o.parentNode;E;){if(A=E[kC]||E[mg]){if(E=A.alternate,A.child!==null||E!==null&&E.child!==null)for(o=bc(o);o!==null;){if(E=o[mg])return E;o=bc(o)}return A}o=E,E=o.parentNode}return null}function yt(o){return o=o[mg]||o[kC],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function BQ(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(lA(33))}function hh(o){return o[Bt]||null}var za=[],nQ=-1;function aI(o){return{current:o}}function LE(o){0>nQ||(o.current=za[nQ],za[nQ]=null,nQ--)}function NE(o,A){nQ++,za[nQ]=o.current,o.current=A}var BI={},jo=aI(BI),si=aI(!1),tR=BI;function wQ(o,A){var E=o.type.contextTypes;if(!E)return BI;var i=o.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===A)return i.__reactInternalMemoizedMaskedChildContext;var g={},C;for(C in E)g[C]=A[C];return i&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=A,o.__reactInternalMemoizedMaskedChildContext=g),g}function ri(o){return o=o.childContextTypes,o!=null}function LK(){LE(si),LE(jo)}function Xc(o,A,E){if(jo.current!==BI)throw Error(lA(168));NE(jo,A),NE(si,E)}function Pd(o,A,E){var i=o.stateNode;if(A=A.childContextTypes,typeof i.getChildContext!="function")return E;i=i.getChildContext();for(var g in i)if(!(g in A))throw Error(lA(108,gU(o)||"Unknown",g));return WE({},E,i)}function zK(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||BI,tR=jo.current,NE(jo,o),NE(si,si.current),!0}function Wc(o,A,E){var i=o.stateNode;if(!i)throw Error(lA(169));E?(o=Pd(o,A,tR),i.__reactInternalMemoizedMergedChildContext=o,LE(si),LE(jo),NE(jo,o)):LE(si),NE(si,E)}var QC=null,sh=!1,Br=!1;function Jd(o){QC===null?QC=[o]:QC.push(o)}function Jp(o){sh=!0,Jd(o)}function kI(){if(!Br&&QC!==null){Br=!0;var o=0,A=FE;try{var E=QC;for(FE=1;o<E.length;o++){var i=E[o];do i=i(!0);while(i!==null)}QC=null,sh=!1}catch(g){throw QC!==null&&(QC=QC.slice(o+1)),OS(el,kI),g}finally{FE=A,Br=!1}}return null}var KQ=[],hQ=0,vK=null,VK=0,Wi=[],_i=0,BR=null,tC=1,BC="";function xI(o,A){KQ[hQ++]=VK,KQ[hQ++]=vK,vK=o,VK=A}function cd(o,A,E){Wi[_i++]=tC,Wi[_i++]=BC,Wi[_i++]=BR,BR=o;var i=tC;o=BC;var g=32-rg(i)-1;i&=~(1<<g),E+=1;var C=32-rg(A)+g;if(30<C){var I=g-g%5;C=(i&(1<<I)-1).toString(32),i>>=I,g-=I,tC=1<<32-rg(A)+g|E<<g|i,BC=C+o}else tC=1<<C|E<<g|i,BC=o}function kl(o){o.return!==null&&(xI(o,1),cd(o,1,0))}function ll(o){for(;o===vK;)vK=KQ[--hQ],KQ[hQ]=null,VK=KQ[--hQ],KQ[hQ]=null;for(;o===BR;)BR=Wi[--_i],Wi[_i]=null,BC=Wi[--_i],Wi[_i]=null,tC=Wi[--_i],Wi[_i]=null}var Ti=null,di=null,YE=!1,sg=null;function ud(o,A){var E=Eg(5,null,null,0);E.elementType="DELETED",E.stateNode=A,E.return=o,A=o.deletions,A===null?(o.deletions=[E],o.flags|=16):A.push(E)}function _c(o,A){switch(o.tag){case 5:var E=o.type;return A=A.nodeType!==1||E.toLowerCase()!==A.nodeName.toLowerCase()?null:A,A!==null?(o.stateNode=A,Ti=o,di=iI(A.firstChild),!0):!1;case 6:return A=o.pendingProps===""||A.nodeType!==3?null:A,A!==null?(o.stateNode=A,Ti=o,di=null,!0):!1;case 13:return A=A.nodeType!==8?null:A,A!==null?(E=BR!==null?{id:tC,overflow:BC}:null,o.memoizedState={dehydrated:A,treeContext:E,retryLane:1073741824},E=Eg(18,null,null,0),E.stateNode=A,E.return=o,o.child=E,Ti=o,di=null,!0):!1;default:return!1}}function va(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Va(o){if(YE){var A=di;if(A){var E=A;if(!_c(o,A)){if(va(o))throw Error(lA(418));A=iI(E.nextSibling);var i=Ti;A&&_c(o,A)?ud(i,E):(o.flags=o.flags&-4097|2,YE=!1,Ti=o)}}else{if(va(o))throw Error(lA(418));o.flags=o.flags&-4097|2,YE=!1,Ti=o}}}function $c(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Ti=o}function hn(o){if(o!==Ti)return!1;if(!YE)return $c(o),YE=!0,!1;var A;if((A=o.tag!==3)&&!(A=o.tag!==5)&&(A=o.type,A=A!=="head"&&A!=="body"&&!ya(o.type,o.memoizedProps)),A&&(A=di)){if(va(o))throw Dd(),Error(lA(418));for(;A;)ud(o,A),A=iI(A.nextSibling)}if($c(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(lA(317));A:{for(o=o.nextSibling,A=0;o;){if(o.nodeType===8){var E=o.data;if(E==="/$"){if(A===0){di=iI(o.nextSibling);break A}A--}else E!=="$"&&E!=="$!"&&E!=="$?"||A++}o=o.nextSibling}di=null}}else di=Ti?iI(o.stateNode.nextSibling):null;return!0}function Dd(){for(var o=di;o;)o=iI(o.nextSibling)}function FQ(){di=Ti=null,YE=!1}function Pl(o){sg===null?sg=[o]:sg.push(o)}var cp=uC.ReactCurrentBatchConfig;function Kg(o,A){if(o&&o.defaultProps){A=WE({},A),o=o.defaultProps;for(var E in o)A[E]===void 0&&(A[E]=o[E]);return A}return A}var YK=aI(null),OK=null,sQ=null,Jl=null;function cl(){Jl=sQ=OK=null}function ul(o){var A=YK.current;LE(YK),o._currentValue=A}function Ya(o,A,E){for(;o!==null;){var i=o.alternate;if((o.childLanes&A)!==A?(o.childLanes|=A,i!==null&&(i.childLanes|=A)):i!==null&&(i.childLanes&A)!==A&&(i.childLanes|=A),o===E)break;o=o.return}}function fQ(o,A){OK=o,Jl=sQ=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&A)!==0&&(Ki=!0),o.firstContext=null)}function ig(o){var A=o._currentValue;if(Jl!==o)if(o={context:o,memoizedValue:A,next:null},sQ===null){if(OK===null)throw Error(lA(308));sQ=o,OK.dependencies={lanes:0,firstContext:o}}else sQ=sQ.next=o;return A}var jI=null;function Dl(o){jI===null?jI=[o]:jI.push(o)}function Sd(o,A,E,i){var g=A.interleaved;return g===null?(E.next=E,Dl(A)):(E.next=g.next,g.next=E),A.interleaved=E,lC(o,i)}function lC(o,A){o.lanes|=A;var E=o.alternate;for(E!==null&&(E.lanes|=A),E=o,o=o.return;o!==null;)o.childLanes|=A,E=o.alternate,E!==null&&(E.childLanes|=A),E=o,o=o.return;return E.tag===3?E.stateNode:null}var OC=!1;function Sl(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(o,A){o=o.updateQueue,A.updateQueue===o&&(A.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function sC(o,A){return{eventTime:o,lane:A,tag:0,payload:null,callback:null,next:null}}function gI(o,A,E){var i=o.updateQueue;if(i===null)return null;if(i=i.shared,(SE&2)!==0){var g=i.pending;return g===null?A.next=A:(A.next=g.next,g.next=A),i.pending=A,lC(o,E)}return g=i.interleaved,g===null?(A.next=A,Dl(i)):(A.next=g.next,g.next=A),i.interleaved=A,lC(o,E)}function aK(o,A,E){if(A=A.updateQueue,A!==null&&(A=A.shared,(E&4194240)!==0)){var i=A.lanes;i&=o.pendingLanes,E|=i,A.lanes=E,tl(o,E)}}function Au(o,A){var E=o.updateQueue,i=o.alternate;if(i!==null&&(i=i.updateQueue,E===i)){var g=null,C=null;if(E=E.firstBaseUpdate,E!==null){do{var I={eventTime:E.eventTime,lane:E.lane,tag:E.tag,payload:E.payload,callback:E.callback,next:null};C===null?g=C=I:C=C.next=I,E=E.next}while(E!==null);C===null?g=C=A:C=C.next=A}else g=C=A;E={baseState:i.baseState,firstBaseUpdate:g,lastBaseUpdate:C,shared:i.shared,effects:i.effects},o.updateQueue=E;return}o=E.lastBaseUpdate,o===null?E.firstBaseUpdate=A:o.next=A,E.lastBaseUpdate=A}function ZK(o,A,E,i){var g=o.updateQueue;OC=!1;var C=g.firstBaseUpdate,I=g.lastBaseUpdate,R=g.shared.pending;if(R!==null){g.shared.pending=null;var t=R,B=t.next;t.next=null,I===null?C=B:I.next=B,I=t;var n=o.alternate;n!==null&&(n=n.updateQueue,R=n.lastBaseUpdate,R!==I&&(R===null?n.firstBaseUpdate=B:R.next=B,n.lastBaseUpdate=t))}if(C!==null){var K=g.baseState;I=0,n=B=t=null,R=C;do{var s=R.lane,r=R.eventTime;if((i&s)===s){n!==null&&(n=n.next={eventTime:r,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});A:{var l=o,k=R;switch(s=A,r=E,k.tag){case 1:if(l=k.payload,typeof l=="function"){K=l.call(r,K,s);break A}K=l;break A;case 3:l.flags=l.flags&-65537|128;case 0:if(l=k.payload,s=typeof l=="function"?l.call(r,K,s):l,s==null)break A;K=WE({},K,s);break A;case 2:OC=!0}}R.callback!==null&&R.lane!==0&&(o.flags|=64,s=g.effects,s===null?g.effects=[R]:s.push(R))}else r={eventTime:r,lane:s,tag:R.tag,payload:R.payload,callback:R.callback,next:null},n===null?(B=n=r,t=K):n=n.next=r,I|=s;if(R=R.next,R===null){if(R=g.shared.pending,R===null)break;s=R,R=s.next,s.next=null,g.lastBaseUpdate=s,g.shared.pending=null}}while(1);if(n===null&&(t=K),g.baseState=t,g.firstBaseUpdate=B,g.lastBaseUpdate=n,A=g.shared.interleaved,A!==null){g=A;do I|=g.lane,g=g.next;while(g!==A)}else C===null&&(g.shared.lanes=0);KR|=I,o.lanes=I,o.memoizedState=K}}function Eu(o,A,E){if(o=A.effects,A.effects=null,o!==null)for(A=0;A<o.length;A++){var i=o[A],g=i.callback;if(g!==null){if(i.callback=null,i=E,typeof g!="function")throw Error(lA(191,g));g.call(i)}}}var fd=new SS.Component().refs;function Oa(o,A,E,i){A=o.memoizedState,E=E(i,A),E=E==null?A:WE({},A,E),o.memoizedState=E,o.lanes===0&&(o.updateQueue.baseState=E)}var rh={isMounted:function(o){return(o=o._reactInternals)?PR(o)===o:!1},enqueueSetState:function(o,A,E){o=o._reactInternals;var i=Ei(),g=II(o),C=sC(i,g);C.payload=A,E!=null&&(C.callback=E),A=gI(o,C,g),A!==null&&(ag(A,o,g,i),aK(A,o,g))},enqueueReplaceState:function(o,A,E){o=o._reactInternals;var i=Ei(),g=II(o),C=sC(i,g);C.tag=1,C.payload=A,E!=null&&(C.callback=E),A=gI(o,C,g),A!==null&&(ag(A,o,g,i),aK(A,o,g))},enqueueForceUpdate:function(o,A){o=o._reactInternals;var E=Ei(),i=II(o),g=sC(E,i);g.tag=2,A!=null&&(g.callback=A),A=gI(o,g,i),A!==null&&(ag(A,o,i,E),aK(A,o,i))}};function ou(o,A,E,i,g,C,I){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(i,C,I):A.prototype&&A.prototype.isPureReactComponent?!Qt(E,i)||!Qt(g,C):!0}function Td(o,A,E){var i=!1,g=BI,C=A.contextType;return typeof C=="object"&&C!==null?C=ig(C):(g=ri(A)?tR:jo.current,i=A.contextTypes,C=(i=i!=null)?wQ(o,g):BI),A=new A(E,C),o.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=rh,o.stateNode=A,A._reactInternals=o,i&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=C),A}function iu(o,A,E,i){o=A.state,typeof A.componentWillReceiveProps=="function"&&A.componentWillReceiveProps(E,i),typeof A.UNSAFE_componentWillReceiveProps=="function"&&A.UNSAFE_componentWillReceiveProps(E,i),A.state!==o&&rh.enqueueReplaceState(A,A.state,null)}function Za(o,A,E,i){var g=o.stateNode;g.props=E,g.state=o.memoizedState,g.refs=fd,Sl(o);var C=A.contextType;typeof C=="object"&&C!==null?g.context=ig(C):(C=ri(A)?tR:jo.current,g.context=wQ(o,C)),g.state=o.memoizedState,C=A.getDerivedStateFromProps,typeof C=="function"&&(Oa(o,A,C,E),g.state=o.memoizedState),typeof A.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(A=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),A!==g.state&&rh.enqueueReplaceState(g,g.state,null),ZK(o,E,g,i),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function ue(o,A,E){if(o=E.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(E._owner){if(E=E._owner,E){if(E.tag!==1)throw Error(lA(309));var i=E.stateNode}if(!i)throw Error(lA(147,o));var g=i,C=""+o;return A!==null&&A.ref!==null&&typeof A.ref=="function"&&A.ref._stringRef===C?A.ref:(A=function(I){var R=g.refs;R===fd&&(R=g.refs={}),I===null?delete R[C]:R[C]=I},A._stringRef=C,A)}if(typeof o!="string")throw Error(lA(284));if(!E._owner)throw Error(lA(290,o))}return o}function sn(o,A){throw o=Object.prototype.toString.call(A),Error(lA(31,o==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":o))}function gu(o){var A=o._init;return A(o._payload)}function Ud(o){function A(J,c){if(o){var u=J.deletions;u===null?(J.deletions=[c],J.flags|=16):u.push(c)}}function E(J,c){if(!o)return null;for(;c!==null;)A(J,c),c=c.sibling;return null}function i(J,c){for(J=new Map;c!==null;)c.key!==null?J.set(c.key,c):J.set(c.index,c),c=c.sibling;return J}function g(J,c){return J=RI(J,c),J.index=0,J.sibling=null,J}function C(J,c,u){return J.index=u,o?(u=J.alternate,u!==null?(u=u.index,u<c?(J.flags|=2,c):u):(J.flags|=2,c)):(J.flags|=1048576,c)}function I(J){return o&&J.alternate===null&&(J.flags|=2),J}function R(J,c,u,S){return c===null||c.tag!==6?(c=kr(u,J.mode,S),c.return=J,c):(c=g(c,u),c.return=J,c)}function t(J,c,u,S){var T=u.type;return T===RQ?n(J,c,u.props.children,S,u.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===YC&&gu(T)===c.type)?(S=g(c,u.props),S.ref=ue(J,c,u),S.return=J,S):(S=uK(u.type,u.key,u.props,null,J.mode,S),S.ref=ue(J,c,u),S.return=J,S)}function B(J,c,u,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=lr(u,J.mode,S),c.return=J,c):(c=g(c,u.children||[]),c.return=J,c)}function n(J,c,u,S,T){return c===null||c.tag!==7?(c=oR(u,J.mode,S,T),c.return=J,c):(c=g(c,u),c.return=J,c)}function K(J,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=kr(""+c,J.mode,u),c.return=J,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gn:return u=uK(c.type,c.key,c.props,null,J.mode,u),u.ref=ue(J,null,c),u.return=J,u;case IQ:return c=lr(c,J.mode,u),c.return=J,c;case YC:var S=c._init;return K(J,S(c._payload),u)}if(ye(c)||ke(c))return c=oR(c,J.mode,u,null),c.return=J,c;sn(J,c)}return null}function s(J,c,u,S){var T=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return T!==null?null:R(J,c,""+u,S);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case gn:return u.key===T?t(J,c,u,S):null;case IQ:return u.key===T?B(J,c,u,S):null;case YC:return T=u._init,s(J,c,T(u._payload),S)}if(ye(u)||ke(u))return T!==null?null:n(J,c,u,S,null);sn(J,u)}return null}function r(J,c,u,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return J=J.get(u)||null,R(c,J,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gn:return J=J.get(S.key===null?u:S.key)||null,t(c,J,S,T);case IQ:return J=J.get(S.key===null?u:S.key)||null,B(c,J,S,T);case YC:var U=S._init;return r(J,c,u,U(S._payload),T)}if(ye(S)||ke(S))return J=J.get(u)||null,n(c,J,S,T,null);sn(c,S)}return null}function l(J,c,u,S){for(var T=null,U=null,F=c,d=c=0,p=null;F!==null&&d<u.length;d++){F.index>d?(p=F,F=null):p=F.sibling;var H=s(J,F,u[d],S);if(H===null){F===null&&(F=p);break}o&&F&&H.alternate===null&&A(J,F),c=C(H,c,d),U===null?T=H:U.sibling=H,U=H,F=p}if(d===u.length)return E(J,F),YE&&xI(J,d),T;if(F===null){for(;d<u.length;d++)F=K(J,u[d],S),F!==null&&(c=C(F,c,d),U===null?T=F:U.sibling=F,U=F);return YE&&xI(J,d),T}for(F=i(J,F);d<u.length;d++)p=r(F,J,d,u[d],S),p!==null&&(o&&p.alternate!==null&&F.delete(p.key===null?d:p.key),c=C(p,c,d),U===null?T=p:U.sibling=p,U=p);return o&&F.forEach(function(V){return A(J,V)}),YE&&xI(J,d),T}function k(J,c,u,S){var T=ke(u);if(typeof T!="function")throw Error(lA(150));if(u=T.call(u),u==null)throw Error(lA(151));for(var U=T=null,F=c,d=c=0,p=null,H=u.next();F!==null&&!H.done;d++,H=u.next()){F.index>d?(p=F,F=null):p=F.sibling;var V=s(J,F,H.value,S);if(V===null){F===null&&(F=p);break}o&&F&&V.alternate===null&&A(J,F),c=C(V,c,d),U===null?T=V:U.sibling=V,U=V,F=p}if(H.done)return E(J,F),YE&&xI(J,d),T;if(F===null){for(;!H.done;d++,H=u.next())H=K(J,H.value,S),H!==null&&(c=C(H,c,d),U===null?T=H:U.sibling=H,U=H);return YE&&xI(J,d),T}for(F=i(J,F);!H.done;d++,H=u.next())H=r(F,J,d,H.value,S),H!==null&&(o&&H.alternate!==null&&F.delete(H.key===null?d:H.key),c=C(H,c,d),U===null?T=H:U.sibling=H,U=H);return o&&F.forEach(function(CA){return A(J,CA)}),YE&&xI(J,d),T}function P(J,c,u,S){if(typeof u=="object"&&u!==null&&u.type===RQ&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case gn:A:{for(var T=u.key,U=c;U!==null;){if(U.key===T){if(T=u.type,T===RQ){if(U.tag===7){E(J,U.sibling),c=g(U,u.props.children),c.return=J,J=c;break A}}else if(U.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===YC&&gu(T)===U.type){E(J,U.sibling),c=g(U,u.props),c.ref=ue(J,U,u),c.return=J,J=c;break A}E(J,U);break}else A(J,U);U=U.sibling}u.type===RQ?(c=oR(u.props.children,J.mode,S,u.key),c.return=J,J=c):(S=uK(u.type,u.key,u.props,null,J.mode,S),S.ref=ue(J,c,u),S.return=J,J=S)}return I(J);case IQ:A:{for(U=u.key;c!==null;){if(c.key===U)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){E(J,c.sibling),c=g(c,u.children||[]),c.return=J,J=c;break A}else{E(J,c);break}else A(J,c);c=c.sibling}c=lr(u,J.mode,S),c.return=J,J=c}return I(J);case YC:return U=u._init,P(J,c,U(u._payload),S)}if(ye(u))return l(J,c,u,S);if(ke(u))return k(J,c,u,S);sn(J,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(E(J,c.sibling),c=g(c,u),c.return=J,J=c):(E(J,c),c=kr(u,J.mode,S),c.return=J,J=c),I(J)):E(J,c)}return P}var qQ=Ud(!0),pd=Ud(!1),xt={},Lg=aI(xt),nt=aI(xt),Kt=aI(xt);function bI(o){if(o===xt)throw Error(lA(174));return o}function dl(o,A){switch(NE(Kt,A),NE(nt,o),NE(Lg,xt),o=A.nodeType,o){case 9:case 11:A=(A=A.documentElement)?A.namespaceURI:Sa(null,"");break;default:o=o===8?A.parentNode:A,A=o.namespaceURI||null,o=o.tagName,A=Sa(A,o)}LE(Lg),NE(Lg,A)}function MQ(){LE(Lg),LE(nt),LE(Kt)}function wd(o){bI(Kt.current);var A=bI(Lg.current),E=Sa(A,o.type);A!==E&&(NE(nt,o),NE(Lg,E))}function fl(o){nt.current===o&&(LE(Lg),LE(nt))}var jE=aI(0);function jK(o){for(var A=o;A!==null;){if(A.tag===13){var E=A.memoizedState;if(E!==null&&(E=E.dehydrated,E===null||E.data==="$?"||E.data==="$!"))return A}else if(A.tag===19&&A.memoizedProps.revealOrder!==void 0){if((A.flags&128)!==0)return A}else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===o)break;for(;A.sibling===null;){if(A.return===null||A.return===o)return null;A=A.return}A.sibling.return=A.return,A=A.sibling}return null}var nr=[];function Tl(){for(var o=0;o<nr.length;o++)nr[o]._workInProgressVersionPrimary=null;nr.length=0}var kK=uC.ReactCurrentDispatcher,Kr=uC.ReactCurrentBatchConfig,nR=0,XE=null,ro=null,fo=null,bK=!1,je=!1,ht=0,up=0;function Lo(){throw Error(lA(321))}function Ul(o,A){if(A===null)return!1;for(var E=0;E<A.length&&E<o.length;E++)if(!lg(o[E],A[E]))return!1;return!0}function pl(o,A,E,i,g,C){if(nR=C,XE=A,A.memoizedState=null,A.updateQueue=null,A.lanes=0,kK.current=o===null||o.memoizedState===null?fp:Tp,o=E(i,g),je){C=0;do{if(je=!1,ht=0,25<=C)throw Error(lA(301));C+=1,fo=ro=null,A.updateQueue=null,kK.current=Up,o=E(i,g)}while(je)}if(kK.current=XK,A=ro!==null&&ro.next!==null,nR=0,fo=ro=XE=null,bK=!1,A)throw Error(lA(300));return o}function wl(){var o=ht!==0;return ht=0,o}function Gg(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?XE.memoizedState=fo=o:fo=fo.next=o,fo}function gg(){if(ro===null){var o=XE.alternate;o=o!==null?o.memoizedState:null}else o=ro.next;var A=fo===null?XE.memoizedState:fo.next;if(A!==null)fo=A,ro=o;else{if(o===null)throw Error(lA(310));ro=o,o={memoizedState:ro.memoizedState,baseState:ro.baseState,baseQueue:ro.baseQueue,queue:ro.queue,next:null},fo===null?XE.memoizedState=fo=o:fo=fo.next=o}return fo}function st(o,A){return typeof A=="function"?A(o):A}function hr(o){var A=gg(),E=A.queue;if(E===null)throw Error(lA(311));E.lastRenderedReducer=o;var i=ro,g=i.baseQueue,C=E.pending;if(C!==null){if(g!==null){var I=g.next;g.next=C.next,C.next=I}i.baseQueue=g=C,E.pending=null}if(g!==null){C=g.next,i=i.baseState;var R=I=null,t=null,B=C;do{var n=B.lane;if((nR&n)===n)t!==null&&(t=t.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),i=B.hasEagerState?B.eagerState:o(i,B.action);else{var K={lane:n,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};t===null?(R=t=K,I=i):t=t.next=K,XE.lanes|=n,KR|=n}B=B.next}while(B!==null&&B!==C);t===null?I=i:t.next=R,lg(i,A.memoizedState)||(Ki=!0),A.memoizedState=i,A.baseState=I,A.baseQueue=t,E.lastRenderedState=i}if(o=E.interleaved,o!==null){g=o;do C=g.lane,XE.lanes|=C,KR|=C,g=g.next;while(g!==o)}else g===null&&(E.lanes=0);return[A.memoizedState,E.dispatch]}function sr(o){var A=gg(),E=A.queue;if(E===null)throw Error(lA(311));E.lastRenderedReducer=o;var i=E.dispatch,g=E.pending,C=A.memoizedState;if(g!==null){E.pending=null;var I=g=g.next;do C=o(C,I.action),I=I.next;while(I!==g);lg(C,A.memoizedState)||(Ki=!0),A.memoizedState=C,A.baseQueue===null&&(A.baseState=C),E.lastRenderedState=C}return[C,i]}function Fd(){}function qd(o,A){var E=XE,i=gg(),g=A(),C=!lg(i.memoizedState,g);if(C&&(i.memoizedState=g,Ki=!0),i=i.queue,Fl(Hd.bind(null,E,i,o),[o]),i.getSnapshot!==A||C||fo!==null&&fo.memoizedState.tag&1){if(E.flags|=2048,rt(9,Gd.bind(null,E,i,g,A),void 0,null),Uo===null)throw Error(lA(349));(nR&30)!==0||Md(E,A,g)}return g}function Md(o,A,E){o.flags|=16384,o={getSnapshot:A,value:E},A=XE.updateQueue,A===null?(A={lastEffect:null,stores:null},XE.updateQueue=A,A.stores=[o]):(E=A.stores,E===null?A.stores=[o]:E.push(o))}function Gd(o,A,E,i){A.value=E,A.getSnapshot=i,Nd(A)&&md(o)}function Hd(o,A,E){return E(function(){Nd(A)&&md(o)})}function Nd(o){var A=o.getSnapshot;o=o.value;try{var E=A();return!lg(o,E)}catch{return!0}}function md(o){var A=lC(o,1);A!==null&&ag(A,o,1,-1)}function Cu(o){var A=Gg();return typeof o=="function"&&(o=o()),A.memoizedState=A.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:o},A.queue=o,o=o.dispatch=dp.bind(null,XE,o),[A.memoizedState,o]}function rt(o,A,E,i){return o={tag:o,create:A,destroy:E,deps:i,next:null},A=XE.updateQueue,A===null?(A={lastEffect:null,stores:null},XE.updateQueue=A,A.lastEffect=o.next=o):(E=A.lastEffect,E===null?A.lastEffect=o.next=o:(i=E.next,E.next=o,o.next=i,A.lastEffect=o)),o}function yd(){return gg().memoizedState}function lK(o,A,E,i){var g=Gg();XE.flags|=o,g.memoizedState=rt(1|A,E,void 0,i===void 0?null:i)}function ah(o,A,E,i){var g=gg();i=i===void 0?null:i;var C=void 0;if(ro!==null){var I=ro.memoizedState;if(C=I.destroy,i!==null&&Ul(i,I.deps)){g.memoizedState=rt(A,E,C,i);return}}XE.flags|=o,g.memoizedState=rt(1|A,E,C,i)}function Iu(o,A){return lK(8390656,8,o,A)}function Fl(o,A){return ah(2048,8,o,A)}function xd(o,A){return ah(4,2,o,A)}function Ld(o,A){return ah(4,4,o,A)}function zd(o,A){if(typeof A=="function")return o=o(),A(o),function(){A(null)};if(A!=null)return o=o(),A.current=o,function(){A.current=null}}function vd(o,A,E){return E=E!=null?E.concat([o]):null,ah(4,4,zd.bind(null,A,o),E)}function ql(){}function Vd(o,A){var E=gg();A=A===void 0?null:A;var i=E.memoizedState;return i!==null&&A!==null&&Ul(A,i[1])?i[0]:(E.memoizedState=[o,A],o)}function Yd(o,A){var E=gg();A=A===void 0?null:A;var i=E.memoizedState;return i!==null&&A!==null&&Ul(A,i[1])?i[0]:(o=o(),E.memoizedState=[o,A],o)}function Od(o,A,E){return(nR&21)===0?(o.baseState&&(o.baseState=!1,Ki=!0),o.memoizedState=E):(lg(E,A)||(E=bS(),XE.lanes|=E,KR|=E,o.baseState=!0),A)}function Dp(o,A){var E=FE;FE=E!==0&&4>E?E:4,o(!0);var i=Kr.transition;Kr.transition={};try{o(!1),A()}finally{FE=E,Kr.transition=i}}function Zd(){return gg().memoizedState}function Sp(o,A,E){var i=II(o);if(E={lane:i,action:E,hasEagerState:!1,eagerState:null,next:null},jd(o))bd(A,E);else if(E=Sd(o,A,E,i),E!==null){var g=Ei();ag(E,o,i,g),Xd(E,A,i)}}function dp(o,A,E){var i=II(o),g={lane:i,action:E,hasEagerState:!1,eagerState:null,next:null};if(jd(o))bd(A,g);else{var C=o.alternate;if(o.lanes===0&&(C===null||C.lanes===0)&&(C=A.lastRenderedReducer,C!==null))try{var I=A.lastRenderedState,R=C(I,E);if(g.hasEagerState=!0,g.eagerState=R,lg(R,I)){var t=A.interleaved;t===null?(g.next=g,Dl(A)):(g.next=t.next,t.next=g),A.interleaved=g;return}}catch{}finally{}E=Sd(o,A,g,i),E!==null&&(g=Ei(),ag(E,o,i,g),Xd(E,A,i))}}function jd(o){var A=o.alternate;return o===XE||A!==null&&A===XE}function bd(o,A){je=bK=!0;var E=o.pending;E===null?A.next=A:(A.next=E.next,E.next=A),o.pending=A}function Xd(o,A,E){if((E&4194240)!==0){var i=A.lanes;i&=o.pendingLanes,E|=i,A.lanes=E,tl(o,E)}}var XK={readContext:ig,useCallback:Lo,useContext:Lo,useEffect:Lo,useImperativeHandle:Lo,useInsertionEffect:Lo,useLayoutEffect:Lo,useMemo:Lo,useReducer:Lo,useRef:Lo,useState:Lo,useDebugValue:Lo,useDeferredValue:Lo,useTransition:Lo,useMutableSource:Lo,useSyncExternalStore:Lo,useId:Lo,unstable_isNewReconciler:!1},fp={readContext:ig,useCallback:function(o,A){return Gg().memoizedState=[o,A===void 0?null:A],o},useContext:ig,useEffect:Iu,useImperativeHandle:function(o,A,E){return E=E!=null?E.concat([o]):null,lK(4194308,4,zd.bind(null,A,o),E)},useLayoutEffect:function(o,A){return lK(4194308,4,o,A)},useInsertionEffect:function(o,A){return lK(4,2,o,A)},useMemo:function(o,A){var E=Gg();return A=A===void 0?null:A,o=o(),E.memoizedState=[o,A],o},useReducer:function(o,A,E){var i=Gg();return A=E!==void 0?E(A):A,i.memoizedState=i.baseState=A,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:A},i.queue=o,o=o.dispatch=Sp.bind(null,XE,o),[i.memoizedState,o]},useRef:function(o){var A=Gg();return o={current:o},A.memoizedState=o},useState:Cu,useDebugValue:ql,useDeferredValue:function(o){return Gg().memoizedState=o},useTransition:function(){var o=Cu(!1),A=o[0];return o=Dp.bind(null,o[1]),Gg().memoizedState=o,[A,o]},useMutableSource:function(){},useSyncExternalStore:function(o,A,E){var i=XE,g=Gg();if(YE){if(E===void 0)throw Error(lA(407));E=E()}else{if(E=A(),Uo===null)throw Error(lA(349));(nR&30)!==0||Md(i,A,E)}g.memoizedState=E;var C={value:E,getSnapshot:A};return g.queue=C,Iu(Hd.bind(null,i,C,o),[o]),i.flags|=2048,rt(9,Gd.bind(null,i,C,E,A),void 0,null),E},useId:function(){var o=Gg(),A=Uo.identifierPrefix;if(YE){var E=BC,i=tC;E=(i&~(1<<32-rg(i)-1)).toString(32)+E,A=":"+A+"R"+E,E=ht++,0<E&&(A+="H"+E.toString(32)),A+=":"}else E=up++,A=":"+A+"r"+E.toString(32)+":";return o.memoizedState=A},unstable_isNewReconciler:!1},Tp={readContext:ig,useCallback:Vd,useContext:ig,useEffect:Fl,useImperativeHandle:vd,useInsertionEffect:xd,useLayoutEffect:Ld,useMemo:Yd,useReducer:hr,useRef:yd,useState:function(){return hr(st)},useDebugValue:ql,useDeferredValue:function(o){var A=gg();return Od(A,ro.memoizedState,o)},useTransition:function(){var o=hr(st)[0],A=gg().memoizedState;return[o,A]},useMutableSource:Fd,useSyncExternalStore:qd,useId:Zd,unstable_isNewReconciler:!1},Up={readContext:ig,useCallback:Vd,useContext:ig,useEffect:Fl,useImperativeHandle:vd,useInsertionEffect:xd,useLayoutEffect:Ld,useMemo:Yd,useReducer:sr,useRef:yd,useState:function(){return sr(st)},useDebugValue:ql,useDeferredValue:function(o){var A=gg();return ro===null?A.memoizedState=o:Od(A,ro.memoizedState,o)},useTransition:function(){var o=sr(st)[0],A=gg().memoizedState;return[o,A]},useMutableSource:Fd,useSyncExternalStore:qd,useId:Zd,unstable_isNewReconciler:!1};function GQ(o,A){try{var E="",i=A;do E+=iU(i),i=i.return;while(i);var g=E}catch(C){g=`
Error generating stack: `+C.message+`
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="146",zI={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vI={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Qk=1,ff=2,ow=3,iw=0,Ol=1,Zl=2,kQ=3,sR=0,Ui=1,nC=2,rC=0,iR=1,ek=2,tk=3,Bk=4,Tf=5,YI=100,Uf=101,pf=102,nk=103,Kk=104,wf=200,Ff=201,qf=202,Mf=203,jl=204,bl=205,Gf=206,Hf=207,Nf=208,mf=209,yf=210,xf=0,Lf=1,zf=2,oh=3,vf=4,Vf=5,Yf=6,Of=7,Lt=0,Zf=1,jf=2,kg=0,bf=1,Xf=2,Wf=3,Xl=4,_f=5,dh=300,nI=301,KI=302,kt=303,lt=304,VQ=306,Pt=1e3,Oo=1001,Jt=1002,Bo=1003,ih=1004,gw=1004,gh=1005,Cw=1005,Io=1006,Wl=1007,Iw=1007,JR=1008,Rw=1008,hI=1009,$f=1010,A0=1011,_l=1012,E0=1013,_C=1014,KC=1015,NQ=1016,o0=1017,i0=1018,gR=1020,g0=1021,C0=1022,Si=1023,I0=1024,R0=1025,QI=1026,rR=1027,Q0=1028,e0=1029,t0=1030,B0=1031,n0=1033,DK=33776,SK=33777,dK=33778,fK=33779,hk=35840,sk=35841,rk=35842,ak=35843,K0=36196,kk=37492,lk=37496,Pk=37808,Jk=37809,ck=37810,uk=37811,Dk=37812,Sk=37813,dk=37814,fk=37815,Tk=37816,Uk=37817,pk=37818,wk=37819,Fk=37820,qk=37821,Mk=36492,h0=2200,s0=2201,r0=2202,ct=2300,ut=2301,TK=2302,XI=2400,WI=2401,Dt=2402,fh=2500,$l=2501,Qw=0,ew=1,tw=2,JC=3e3,xE=3001,a0=3200,k0=3201,lI=0,l0=1,Bw="",Hg="srgb",$C="srgb-linear",nw=0,UK=7680,Kw=7681,hw=7682,sw=7683,rw=34055,aw=34056,kw=5386,lw=512,Pw=513,Jw=514,cw=515,uw=516,Dw=517,Sw=518,P0=519,St=35044,dw=35048,fw=35040,Tw=35045,Uw=35049,pw=35041,ww=35046,Fw=35050,qw=35042,Mw="100",Gk="300 es",Ch=1035;class vg{addEventListener(A,E){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[A]===void 0&&(i[A]=[]),i[A].indexOf(E)===-1&&i[A].push(E)}hasEventListener(A,E){if(this._listeners===void 0)return!1;const i=this._listeners;return i[A]!==void 0&&i[A].indexOf(E)!==-1}removeEventListener(A,E){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(E);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const i=this._listeners[A.type];if(i!==void 0){A.target=this;const g=i.slice(0);for(let C=0,I=g.length;C<I;C++)g[C].call(this,A);A.target=null}}}const vo=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const CR=Math.PI/180,dt=180/Math.PI;function pi(){const o=Math.random()*4294967295|0,A=Math.random()*4294967295|0,E=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vo[o&255]+vo[o>>8&255]+vo[o>>16&255]+vo[o>>24&255]+"-"+vo[A&255]+vo[A>>8&255]+"-"+vo[A>>16&15|64]+vo[A>>24&255]+"-"+vo[E&63|128]+vo[E>>8&255]+"-"+vo[E>>16&255]+vo[E>>24&255]+vo[i&255]+vo[i>>8&255]+vo[i>>16&255]+vo[i>>24&255]).toLowerCase()}function Ro(o,A,E){return Math.max(A,Math.min(E,o))}function AP(o,A){return(o%A+A)%A}function Gw(o,A,E,i,g){return i+(o-A)*(g-i)/(E-A)}function Hw(o,A,E){return o!==A?(E-o)/(A-o):0}function _e(o,A,E){return(1-E)*o+E*A}function Nw(o,A,E,i){return _e(o,A,1-Math.exp(-E*i))}function mw(o,A=1){return A-Math.abs(AP(o,A*2)-A)}function yw(o,A,E){return o<=A?0:o>=E?1:(o=(o-A)/(E-A),o*o*(3-2*o))}function xw(o,A,E){return o<=A?0:o>=E?1:(o=(o-A)/(E-A),o*o*o*(o*(o*6-15)+10))}function Lw(o,A){return o+Math.floor(Math.random()*(A-o+1))}function zw(o,A){return o+Math.random()*(A-o)}function vw(o){return o*(.5-Math.random())}function Vw(o){o!==void 0&&(du=o);let A=du+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Yw(o){return o*CR}function Ow(o){return o*dt}function Hk(o){return(o&o-1)===0&&o!==0}function J0(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ih(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zw(o,A,E,i,g){const C=Math.cos,I=Math.sin,R=C(E/2),t=I(E/2),B=C((A+i)/2),n=I((A+i)/2),K=C((A-i)/2),s=I((A-i)/2),r=C((i-A)/2),l=I((i-A)/2);switch(g){case"XYX":o.set(R*n,t*K,t*s,R*B);break;case"YZY":o.set(t*s,R*n,t*K,R*B);break;case"ZXZ":o.set(t*K,t*s,R*n,R*B);break;case"XZX":o.set(R*n,t*l,t*r,R*B);break;case"YXY":o.set(t*r,R*n,t*l,R*B);break;case"ZYZ":o.set(t*l,t*r,R*n,R*B);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function hC(o,A){switch(A.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function GE(o,A){switch(A.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var c0=Object.freeze({__proto__:null,DEG2RAD:CR,RAD2DEG:dt,generateUUID:pi,clamp:Ro,euclideanModulo:AP,mapLinear:Gw,inverseLerp:Hw,lerp:_e,damp:Nw,pingpong:mw,smoothstep:yw,smootherstep:xw,randInt:Lw,randFloat:zw,randFloatSpread:vw,seededRandom:Vw,degToRad:Yw,radToDeg:Ow,isPowerOfTwo:Hk,ceilPowerOfTwo:J0,floorPowerOfTwo:Ih,setQuaternionFromProperEuler:Zw,normalize:GE,denormalize:hC});class nA{constructor(A=0,E=0){nA.prototype.isVector2=!0,this.x=A,this.y=E}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,E){return this.x=A,this.y=E,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,E){switch(A){case 0:this.x=E;break;case 1:this.y=E;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,E){return this.x=A.x+E.x,this.y=A.y+E.y,this}addScaledVector(A,E){return this.x+=A.x*E,this.y+=A.y*E,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,E){return this.x=A.x-E.x,this.y=A.y-E.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const E=this.x,i=this.y,g=A.elements;return this.x=g[0]*E+g[3]*i+g[6],this.y=g[1]*E+g[4]*i+g[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,E){return this.x=Math.max(A.x,Math.min(E.x,this.x)),this.y=Math.max(A.y,Math.min(E.y,this.y)),this}clampScalar(A,E){return this.x=Math.max(A,Math.min(E,this.x)),this.y=Math.max(A,Math.min(E,this.y)),this}clampLength(A,E){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(A,Math.min(E,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const E=this.x-A.x,i=this.y-A.y;return E*E+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,E){return this.x+=(A.x-this.x)*E,this.y+=(A.y-this.y)*E,this}lerpVectors(A,E,i){return this.x=A.x+(E.x-A.x)*i,this.y=A.y+(E.y-A.y)*i,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,E=0){return this.x=A[E],this.y=A[E+1],this}toArray(A=[],E=0){return A[E]=this.x,A[E+1]=this.y,A}fromBufferAttribute(A,E){return this.x=A.getX(E),this.y=A.getY(E),this}rotateAround(A,E){const i=Math.cos(E),g=Math.sin(E),C=this.x-A.x,I=this.y-A.y;return this.x=C*i-I*g+A.x,this.y=C*g+I*i+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(){hi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,E,i,g,C,I,R,t,B){const n=this.elements;return n[0]=A,n[1]=g,n[2]=R,n[3]=E,n[4]=C,n[5]=t,n[6]=i,n[7]=I,n[8]=B,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const E=this.elements,i=A.elements;return E[0]=i[0],E[1]=i[1],E[2]=i[2],E[3]=i[3],E[4]=i[4],E[5]=i[5],E[6]=i[6],E[7]=i[7],E[8]=i[8],this}extractBasis(A,E,i){return A.setFromMatrix3Column(this,0),E.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const E=A.elements;return this.set(E[0],E[4],E[8],E[1],E[5],E[9],E[2],E[6],E[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,E){const i=A.elements,g=E.elements,C=this.elements,I=i[0],R=i[3],t=i[6],B=i[1],n=i[4],K=i[7],s=i[2],r=i[5],l=i[8],k=g[0],P=g[3],J=g[6],c=g[1],u=g[4],S=g[7],T=g[2],U=g[5],F=g[8];return C[0]=I*k+R*c+t*T,C[3]=I*P+R*u+t*U,C[6]=I*J+R*S+t*F,C[1]=B*k+n*c+K*T,C[4]=B*P+n*u+K*U,C[7]=B*J+n*S+K*F,C[2]=s*k+r*c+l*T,C[5]=s*P+r*u+l*U,C[8]=s*J+r*S+l*F,this}multiplyScalar(A){const E=this.elements;return E[0]*=A,E[3]*=A,E[6]*=A,E[1]*=A,E[4]*=A,E[7]*=A,E[2]*=A,E[5]*=A,E[8]*=A,this}determinant(){const A=this.elements,E=A[0],i=A[1],g=A[2],C=A[3],I=A[4],R=A[5],t=A[6],B=A[7],n=A[8];return E*I*n-E*R*B-i*C*n+i*R*t+g*C*B-g*I*t}invert(){const A=this.elements,E=A[0],i=A[1],g=A[2],C=A[3],I=A[4],R=A[5],t=A[6],B=A[7],n=A[8],K=n*I-R*B,s=R*t-n*C,r=B*C-I*t,l=E*K+i*s+g*r;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);const k=1/l;return A[0]=K*k,A[1]=(g*B-n*i)*k,A[2]=(R*i-g*I)*k,A[3]=s*k,A[4]=(n*E-g*t)*k,A[5]=(g*C-R*E)*k,A[6]=r*k,A[7]=(i*t-B*E)*k,A[8]=(I*E-i*C)*k,this}transpose(){let A;const E=this.elements;return A=E[1],E[1]=E[3],E[3]=A,A=E[2],E[2]=E[6],E[6]=A,A=E[5],E[5]=E[7],E[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const E=this.elements;return A[0]=E[0],A[1]=E[3],A[2]=E[6],A[3]=E[1],A[4]=E[4],A[5]=E[7],A[6]=E[2],A[7]=E[5],A[8]=E[8],this}setUvTransform(A,E,i,g,C,I,R){const t=Math.cos(C),B=Math.sin(C);return this.set(i*t,i*B,-i*(t*I+B*R)+I+A,-g*B,g*t,-g*(-B*I+t*R)+R+E,0,0,1),this}scale(A,E){const i=this.elements;return i[0]*=A,i[3]*=A,i[6]*=A,i[1]*=E,i[4]*=E,i[7]*=E,this}rotate(A){const E=Math.cos(A),i=Math.sin(A),g=this.elements,C=g[0],I=g[3],R=g[6],t=g[1],B=g[4],n=g[7];return g[0]=E*C+i*t,g[3]=E*I+i*B,g[6]=E*R+i*n,g[1]=-i*C+E*t,g[4]=-i*I+E*B,g[7]=-i*R+E*n,this}translate(A,E){const i=this.elements;return i[0]+=A*i[2],i[3]+=A*i[5],i[6]+=A*i[8],i[1]+=E*i[2],i[4]+=E*i[5],i[7]+=E*i[8],this}equals(A){const E=this.elements,i=A.elements;for(let g=0;g<9;g++)if(E[g]!==i[g])return!1;return!0}fromArray(A,E=0){for(let i=0;i<9;i++)this.elements[i]=A[i+E];return this}toArray(A=[],E=0){const i=this.elements;return A[E]=i[0],A[E+1]=i[1],A[E+2]=i[2],A[E+3]=i[3],A[E+4]=i[4],A[E+5]=i[5],A[E+6]=i[6],A[E+7]=i[7],A[E+8]=i[8],A}clone(){return new this.constructor().fromArray(this.elements)}}function u0(o){for(let A=o.length-1;A>=0;--A)if(o[A]>=65535)return!0;return!1}const jw={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function lQ(o,A){return new jw[o](A)}function ft(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IR(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function pK(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Pr={[Hg]:{[$C]:IR},[$C]:{[Hg]:pK}},bi={legacyMode:!0,get workingColorSpace(){return $C},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,A,E){if(this.legacyMode||A===E||!A||!E)return o;if(Pr[A]&&Pr[A][E]!==void 0){const i=Pr[A][E];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,A){return this.convert(o,this.workingColorSpace,A)},toWorkingColorSpace:function(o,A){return this.convert(o,A,this.workingColorSpace)}},D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},so={r:0,g:0,b:0},tg={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Jr(o,A,E){return E<0&&(E+=1),E>1&&(E-=1),E<1/6?o+(A-o)*6*E:E<1/2?A:E<2/3?o+(A-o)*6*(2/3-E):o}function Jn(o,A){return A.r=o.r,A.g=o.g,A.b=o.b,A}class MA{constructor(A,E,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,E===void 0&&i===void 0?this.set(A):this.setRGB(A,E,i)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,E=Hg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,bi.toWorkingColorSpace(this,E),this}setRGB(A,E,i,g=$C){return this.r=A,this.g=E,this.b=i,bi.toWorkingColorSpace(this,g),this}setHSL(A,E,i,g=$C){if(A=AP(A,1),E=Ro(E,0,1),i=Ro(i,0,1),E===0)this.r=this.g=this.b=i;else{const C=i<=.5?i*(1+E):i+E-i*E,I=2*i-C;this.r=Jr(I,C,A+1/3),this.g=Jr(I,C,A),this.b=Jr(I,C,A-1/3)}return bi.toWorkingColorSpace(this,g),this}setStyle(A,E=Hg){function i(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let g;if(g=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let C;const I=g[1],R=g[2];switch(I){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(R))return this.r=Math.min(255,parseInt(C[1],10))/255,this.g=Math.min(255,parseInt(C[2],10))/255,this.b=Math.min(255,parseInt(C[3],10))/255,bi.toWorkingColorSpace(this,E),i(C[4]),this;if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(R))return this.r=Math.min(100,parseInt(C[1],10))/100,this.g=Math.min(100,parseInt(C[2],10))/100,this.b=Math.min(100,parseInt(C[3],10))/100,bi.toWorkingColorSpace(this,E),i(C[4]),this;break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(R)){const t=parseFloat(C[1])/360,B=parseFloat(C[2])/100,n=parseFloat(C[3])/100;return i(C[4]),this.setHSL(t,B,n,E)}break}}else if(g=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=g[1],I=C.length;if(I===3)return this.r=parseInt(C.charAt(0)+C.charAt(0),16)/255,this.g=parseInt(C.charAt(1)+C.charAt(1),16)/255,this.b=parseInt(C.charAt(2)+C.charAt(2),16)/255,bi.toWorkingColorSpace(this,E),this;if(I===6)return this.r=parseInt(C.charAt(0)+C.charAt(1),16)/255,this.g=parseInt(C.charAt(2)+C.charAt(3),16)/255,this.b=parseInt(C.charAt(4)+C.charAt(5),16)/255,bi.toWorkingColorSpace(this,E),this}return A&&A.length>0?this.setColorName(A,E):this}setColorName(A,E=Hg){const i=D0[A.toLowerCase()];return i!==void 0?this.setHex(i,E):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=IR(A.r),this.g=IR(A.g),this.b=IR(A.b),this}copyLinearToSRGB(A){return this.r=pK(A.r),this.g=pK(A.g),this.b=pK(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Hg){return bi.fromWorkingColorSpace(Jn(this,so),A),Ro(so.r*255,0,255)<<16^Ro(so.g*255,0,255)<<8^Ro(so.b*255,0,255)<<0}getHexString(A=Hg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,E=$C){bi.fromWorkingColorSpace(Jn(this,so),E);const i=so.r,g=so.g,C=so.b,I=Math.max(i,g,C),R=Math.min(i,g,C);let t,B;const n=(R+I)/2;if(R===I)t=0,B=0;else{const K=I-R;switch(B=n<=.5?K/(I+R):K/(2-I-R),I){case i:t=(g-C)/K+(g<C?6:0);break;case g:t=(C-i)/K+2;break;case C:t=(i-g)/K+4;break}t/=6}return A.h=t,A.s=B,A.l=n,A}getRGB(A,E=$C){return bi.fromWorkingColorSpace(Jn(this,so),E),A.r=so.r,A.g=so.g,A.b=so.b,A}getStyle(A=Hg){return bi.fromWorkingColorSpace(Jn(this,so),A),A!==Hg?`color(${A} ${so.r} ${so.g} ${so.b})`:`rgb(${so.r*255|0},${so.g*255|0},${so.b*255|0})`}offsetHSL(A,E,i){return this.getHSL(tg),tg.h+=A,tg.s+=E,tg.l+=i,this.setHSL(tg.h,tg.s,tg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,E){return this.r=A.r+E.r,this.g=A.g+E.g,this.b=A.b+E.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,E){return this.r+=(A.r-this.r)*E,this.g+=(A.g-this.g)*E,this.b+=(A.b-this.b)*E,this}lerpColors(A,E,i){return this.r=A.r+(E.r-A.r)*i,this.g=A.g+(E.g-A.g)*i,this.b=A.b+(E.b-A.b)*i,this}lerpHSL(A,E){this.getHSL(tg),A.getHSL(Pn);const i=_e(tg.h,Pn.h,E),g=_e(tg.s,Pn.s,E),C=_e(tg.l,Pn.l,E);return this.setHSL(i,g,C),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,E=0){return this.r=A[E],this.g=A[E+1],this.b=A[E+2],this}toArray(A=[],E=0){return A[E]=this.r,A[E+1]=this.g,A[E+2]=this.b,A}fromBufferAttribute(A,E){return this.r=A.getX(E),this.g=A.getY(E),this.b=A.getZ(E),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}MA.NAMES=D0;let yR;class EP{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let E;if(A instanceof HTMLCanvasElement)E=A;else{yR===void 0&&(yR=ft("canvas")),yR.width=A.width,yR.height=A.height;const i=yR.getContext("2d");A instanceof ImageData?i.putImageData(A,0,0):i.drawImage(A,0,0,A.width,A.height),E=yR}return E.width>2048||E.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),E.toDataURL("image/jpeg",.6)):E.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const E=ft("canvas");E.width=A.width,E.height=A.height;const i=E.getContext("2d");i.drawImage(A,0,0,A.width,A.height);const g=i.getImageData(0,0,A.width,A.height),C=g.data;for(let I=0;I<C.length;I++)C[I]=IR(C[I]/255)*255;return i.putImageData(g,0,0),E}else if(A.data){const E=A.data.slice(0);for(let i=0;i<E.length;i++)E instanceof Uint8Array||E instanceof Uint8ClampedArray?E[i]=Math.floor(IR(E[i]/255)*255):E[i]=IR(E[i]);return{data:E,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class _I{constructor(A=null){this.isSource=!0,this.uuid=pi(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const E=A===void 0||typeof A=="string";if(!E&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const i={uuid:this.uuid,url:""},g=this.data;if(g!==null){let C;if(Array.isArray(g)){C=[];for(let I=0,R=g.length;I<R;I++)g[I].isDataTexture?C.push(cr(g[I].image)):C.push(cr(g[I]))}else C=cr(g);i.url=C}return E||(A.images[this.uuid]=i),i}}function cr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?EP.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bw=0;class Ko extends vg{constructor(A=Ko.DEFAULT_IMAGE,E=Ko.DEFAULT_MAPPING,i=Oo,g=Oo,C=Io,I=JR,R=Si,t=hI,B=1,n=JC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=pi(),this.name="",this.source=new _I(A),this.mipmaps=[],this.mapping=E,this.wrapS=i,this.wrapT=g,this.magFilter=C,this.minFilter=I,this.anisotropy=B,this.format=R,this.internalFormat=null,this.type=t,this.offset=new nA(0,0),this.repeat=new nA(1,1),this.center=new nA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=n,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const E=A===void 0||typeof A=="string";if(!E&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),E||(A.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==dh)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Pt:A.x=A.x-Math.floor(A.x);break;case Oo:A.x=A.x<0?0:1;break;case Jt:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Pt:A.y=A.y-Math.floor(A.y);break;case Oo:A.y=A.y<0?0:1;break;case Jt:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}Ko.DEFAULT_IMAGE=null;Ko.DEFAULT_MAPPING=dh;class DE{constructor(A=0,E=0,i=0,g=1){DE.prototype.isVector4=!0,this.x=A,this.y=E,this.z=i,this.w=g}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,E,i,g){return this.x=A,this.y=E,this.z=i,this.w=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,E){switch(A){case 0:this.x=E;break;case 1:this.y=E;break;case 2:this.z=E;break;case 3:this.w=E;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,E){return this.x=A.x+E.x,this.y=A.y+E.y,this.z=A.z+E.z,this.w=A.w+E.w,this}addScaledVector(A,E){return this.x+=A.x*E,this.y+=A.y*E,this.z+=A.z*E,this.w+=A.w*E,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,E){return this.x=A.x-E.x,this.y=A.y-E.y,this.z=A.z-E.z,this.w=A.w-E.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const E=this.x,i=this.y,g=this.z,C=this.w,I=A.elements;return this.x=I[0]*E+I[4]*i+I[8]*g+I[12]*C,this.y=I[1]*E+I[5]*i+I[9]*g+I[13]*C,this.z=I[2]*E+I[6]*i+I[10]*g+I[14]*C,this.w=I[3]*E+I[7]*i+I[11]*g+I[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const E=Math.sqrt(1-A.w*A.w);return E<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/E,this.y=A.y/E,this.z=A.z/E),this}setAxisAngleFromRotationMatrix(A){let E,i,g,C;const t=A.elements,B=t[0],n=t[4],K=t[8],s=t[1],r=t[5],l=t[9],k=t[2],P=t[6],J=t[10];if(Math.abs(n-s)<.01&&Math.abs(K-k)<.01&&Math.abs(l-P)<.01){if(Math.abs(n+s)<.1&&Math.abs(K+k)<.1&&Math.abs(l+P)<.1&&Math.abs(B+r+J-3)<.1)return this.set(1,0,0,0),this;E=Math.PI;const u=(B+1)/2,S=(r+1)/2,T=(J+1)/2,U=(n+s)/4,F=(K+k)/4,d=(l+P)/4;return u>S&&u>T?u<.01?(i=0,g=.707106781,C=.707106781):(i=Math.sqrt(u),g=U/i,C=F/i):S>T?S<.01?(i=.707106781,g=0,C=.707106781):(g=Math.sqrt(S),i=U/g,C=d/g):T<.01?(i=.707106781,g=.707106781,C=0):(C=Math.sqrt(T),i=F/C,g=d/C),this.set(i,g,C,E),this}let c=Math.sqrt((P-l)*(P-l)+(K-k)*(K-k)+(s-n)*(s-n));return Math.abs(c)<.001&&(c=1),this.x=(P-l)/c,this.y=(K-k)/c,this.z=(s-n)/c,this.w=Math.acos((B+r+J-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,E){return this.x=Math.max(A.x,Math.min(E.x,this.x)),this.y=Math.max(A.y,Math.min(E.y,this.y)),this.z=Math.max(A.z,Math.min(E.z,this.z)),this.w=Math.max(A.w,Math.min(E.w,this.w)),this}clampScalar(A,E){return this.x=Math.max(A,Math.min(E,this.x)),this.y=Math.max(A,Math.min(E,this.y)),this.z=Math.max(A,Math.min(E,this.z)),this.w=Math.max(A,Math.min(E,this.w)),this}clampLength(A,E){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(A,Math.min(E,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,E){return this.x+=(A.x-this.x)*E,this.y+=(A.y-this.y)*E,this.z+=(A.z-this.z)*E,this.w+=(A.w-this.w)*E,this}lerpVectors(A,E,i){return this.x=A.x+(E.x-A.x)*i,this.y=A.y+(E.y-A.y)*i,this.z=A.z+(E.z-A.z)*i,this.w=A.w+(E.w-A.w)*i,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,E=0){return this.x=A[E],this.y=A[E+1],this.z=A[E+2],this.w=A[E+3],this}toArray(A=[],E=0){return A[E]=this.x,A[E+1]=this.y,A[E+2]=this.z,A[E+3]=this.w,A}fromBufferAttribute(A,E){return this.x=A.getX(E),this.y=A.getY(E),this.z=A.getZ(E),this.w=A.getW(E),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cg extends vg{constructor(A=1,E=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=E,this.depth=1,this.scissor=new DE(0,0,A,E),this.scissorTest=!1,this.viewport=new DE(0,0,A,E);const g={width:A,height:E,depth:1};this.texture=new Ko(g,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Io,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(A,E,i=1){(this.width!==A||this.height!==E||this.depth!==i)&&(this.width=A,this.height=E,this.depth=i,this.texture.image.width=A,this.texture.image.height=E,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,A,E),this.scissor.set(0,0,A,E)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const E=Object.assign({},A.texture.image);return this.texture.source=new _I(E),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zt extends Ko{constructor(A=null,E=1,i=1,g=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:E,height:i,depth:g},this.magFilter=Bo,this.minFilter=Bo,this.wrapR=Oo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xw extends Cg{constructor(A=1,E=1,i=1){super(A,E),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new zt(null,A,E,i),this.texture.isRenderTargetTexture=!0}}class Th extends Ko{constructor(A=null,E=1,i=1,g=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:E,height:i,depth:g},this.magFilter=Bo,this.minFilter=Bo,this.wrapR=Oo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ww extends Cg{constructor(A=1,E=1,i=1){super(A,E),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Th(null,A,E,i),this.texture.isRenderTargetTexture=!0}}class _w extends Cg{constructor(A=1,E=1,i=1,g={}){super(A,E,g),this.isWebGLMultipleRenderTargets=!0;const C=this.texture;this.texture=[];for(let I=0;I<i;I++)this.texture[I]=C.clone(),this.texture[I].isRenderTargetTexture=!0}setSize(A,E,i=1){if(this.width!==A||this.height!==E||this.depth!==i){this.width=A,this.height=E,this.depth=i;for(let g=0,C=this.texture.length;g<C;g++)this.texture[g].image.width=A,this.texture[g].image.height=E,this.texture[g].image.depth=i;this.dispose()}return this.viewport.set(0,0,A,E),this.scissor.set(0,0,A,E),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let E=0,i=A.texture.length;E<i;E++)this.texture[E]=A.texture[E].clone(),this.texture[E].isRenderTargetTexture=!0;return this}}class Zo{constructor(A=0,E=0,i=0,g=1){this.isQuaternion=!0,this._x=A,this._y=E,this._z=i,this._w=g}static slerpFlat(A,E,i,g,C,I,R){let t=i[g+0],B=i[g+1],n=i[g+2],K=i[g+3];const s=C[I+0],r=C[I+1],l=C[I+2],k=C[I+3];if(R===0){A[E+0]=t,A[E+1]=B,A[E+2]=n,A[E+3]=K;return}if(R===1){A[E+0]=s,A[E+1]=r,A[E+2]=l,A[E+3]=k;return}if(K!==k||t!==s||B!==r||n!==l){let P=1-R;const J=t*s+B*r+n*l+K*k,c=J>=0?1:-1,u=1-J*J;if(u>Number.EPSILON){const T=Math.sqrt(u),U=Math.atan2(T,J*c);P=Math.sin(P*U)/T,R=Math.sin(R*U)/T}const S=R*c;if(t=t*P+s*S,B=B*P+r*S,n=n*P+l*S,K=K*P+k*S,P===1-R){const T=1/Math.sqrt(t*t+B*B+n*n+K*K);t*=T,B*=T,n*=T,K*=T}}A[E]=t,A[E+1]=B,A[E+2]=n,A[E+3]=K}static multiplyQuaternionsFlat(A,E,i,g,C,I){const R=i[g],t=i[g+1],B=i[g+2],n=i[g+3],K=C[I],s=C[I+1],r=C[I+2],l=C[I+3];return A[E]=R*l+n*K+t*r-B*s,A[E+1]=t*l+n*s+B*K-R*r,A[E+2]=B*l+n*r+R*s-t*K,A[E+3]=n*l-R*K-t*s-B*r,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,E,i,g){return this._x=A,this._y=E,this._z=i,this._w=g,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,E){const i=A._x,g=A._y,C=A._z,I=A._order,R=Math.cos,t=Math.sin,B=R(i/2),n=R(g/2),K=R(C/2),s=t(i/2),r=t(g/2),l=t(C/2);switch(I){case"XYZ":this._x=s*n*K+B*r*l,this._y=B*r*K-s*n*l,this._z=B*n*l+s*r*K,this._w=B*n*K-s*r*l;break;case"YXZ":this._x=s*n*K+B*r*l,this._y=B*r*K-s*n*l,this._z=B*n*l-s*r*K,this._w=B*n*K+s*r*l;break;case"ZXY":this._x=s*n*K-B*r*l,this._y=B*r*K+s*n*l,this._z=B*n*l+s*r*K,this._w=B*n*K-s*r*l;break;case"ZYX":this._x=s*n*K-B*r*l,this._y=B*r*K+s*n*l,this._z=B*n*l-s*r*K,this._w=B*n*K+s*r*l;break;case"YZX":this._x=s*n*K+B*r*l,this._y=B*r*K+s*n*l,this._z=B*n*l-s*r*K,this._w=B*n*K-s*r*l;break;case"XZY":this._x=s*n*K-B*r*l,this._y=B*r*K-s*n*l,this._z=B*n*l+s*r*K,this._w=B*n*K+s*r*l;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+I)}return E!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,E){const i=E/2,g=Math.sin(i);return this._x=A.x*g,this._y=A.y*g,this._z=A.z*g,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(A){const E=A.elements,i=E[0],g=E[4],C=E[8],I=E[1],R=E[5],t=E[9],B=E[2],n=E[6],K=E[10],s=i+R+K;if(s>0){const r=.5/Math.sqrt(s+1);this._w=.25/r,this._x=(n-t)*r,this._y=(C-B)*r,this._z=(I-g)*r}else if(i>R&&i>K){const r=2*Math.sqrt(1+i-R-K);this._w=(n-t)/r,this._x=.25*r,this._y=(g+I)/r,this._z=(C+B)/r}else if(R>K){const r=2*Math.sqrt(1+R-i-K);this._w=(C-B)/r,this._x=(g+I)/r,this._y=.25*r,this._z=(t+n)/r}else{const r=2*Math.sqrt(1+K-i-R);this._w=(I-g)/r,this._x=(C+B)/r,this._y=(t+n)/r,this._z=.25*r}return this._onChangeCallback(),this}setFromUnitVectors(A,E){let i=A.dot(E)+1;return i<Number.EPSILON?(i=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=i):(this._x=0,this._y=-A.z,this._z=A.y,this._w=i)):(this._x=A.y*E.z-A.z*E.y,this._y=A.z*E.x-A.x*E.z,this._z=A.x*E.y-A.y*E.x,this._w=i),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Ro(this.dot(A),-1,1)))}rotateTowards(A,E){const i=this.angleTo(A);if(i===0)return this;const g=Math.min(1,E/i);return this.slerp(A,g),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,E){const i=A._x,g=A._y,C=A._z,I=A._w,R=E._x,t=E._y,B=E._z,n=E._w;return this._x=i*n+I*R+g*B-C*t,this._y=g*n+I*t+C*R-i*B,this._z=C*n+I*B+i*t-g*R,this._w=I*n-i*R-g*t-C*B,this._onChangeCallback(),this}slerp(A,E){if(E===0)return this;if(E===1)return this.copy(A);const i=this._x,g=this._y,C=this._z,I=this._w;let R=I*A._w+i*A._x+g*A._y+C*A._z;if(R<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,R=-R):this.copy(A),R>=1)return this._w=I,this._x=i,this._y=g,this._z=C,this;const t=1-R*R;if(t<=Number.EPSILON){const r=1-E;return this._w=r*I+E*this._w,this._x=r*i+E*this._x,this._y=r*g+E*this._y,this._z=r*C+E*this._z,this.normalize(),this._onChangeCallback(),this}const B=Math.sqrt(t),n=Math.atan2(B,R),K=Math.sin((1-E)*n)/B,s=Math.sin(E*n)/B;return this._w=I*K+this._w*s,this._x=i*K+this._x*s,this._y=g*K+this._y*s,this._z=C*K+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,E,i){return this.copy(A).slerp(E,i)}random(){const A=Math.random(),E=Math.sqrt(1-A),i=Math.sqrt(A),g=2*Math.PI*Math.random(),C=2*Math.PI*Math.random();return this.set(E*Math.cos(g),i*Math.sin(C),i*Math.cos(C),E*Math.sin(g))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,E=0){return this._x=A[E],this._y=A[E+1],this._z=A[E+2],this._w=A[E+3],this._onChangeCallback(),this}toArray(A=[],E=0){return A[E]=this._x,A[E+1]=this._y,A[E+2]=this._z,A[E+3]=this._w,A}fromBufferAttribute(A,E){return this._x=A.getX(E),this._y=A.getY(E),this._z=A.getZ(E),this._w=A.getW(E),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(A=0,E=0,i=0){M.prototype.isVector3=!0,this.x=A,this.y=E,this.z=i}set(A,E,i){return i===void 0&&(i=this.z),this.x=A,this.y=E,this.z=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,E){switch(A){case 0:this.x=E;break;case 1:this.y=E;break;case 2:this.z=E;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,E){return this.x=A.x+E.x,this.y=A.y+E.y,this.z=A.z+E.z,this}addScaledVector(A,E){return this.x+=A.x*E,this.y+=A.y*E,this.z+=A.z*E,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,E){return this.x=A.x-E.x,this.y=A.y-E.y,this.z=A.z-E.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,E){return this.x=A.x*E.x,this.y=A.y*E.y,this.z=A.z*E.z,this}applyEuler(A){return this.applyQuaternion(fu.setFromEuler(A))}applyAxisAngle(A,E){return this.applyQuaternion(fu.setFromAxisAngle(A,E))}applyMatrix3(A){const E=this.x,i=this.y,g=this.z,C=A.elements;return this.x=C[0]*E+C[3]*i+C[6]*g,this.y=C[1]*E+C[4]*i+C[7]*g,this.z=C[2]*E+C[5]*i+C[8]*g,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const E=this.x,i=this.y,g=this.z,C=A.elements,I=1/(C[3]*E+C[7]*i+C[11]*g+C[15]);return this.x=(C[0]*E+C[4]*i+C[8]*g+C[12])*I,this.y=(C[1]*E+C[5]*i+C[9]*g+C[13])*I,this.z=(C[2]*E+C[6]*i+C[10]*g+C[14])*I,this}applyQuaternion(A){const E=this.x,i=this.y,g=this.z,C=A.x,I=A.y,R=A.z,t=A.w,B=t*E+I*g-R*i,n=t*i+R*E-C*g,K=t*g+C*i-I*E,s=-C*E-I*i-R*g;return this.x=B*t+s*-C+n*-R-K*-I,this.y=n*t+s*-I+K*-C-B*-R,this.z=K*t+s*-R+B*-I-n*-C,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const E=this.x,i=this.y,g=this.z,C=A.elements;return this.x=C[0]*E+C[4]*i+C[8]*g,this.y=C[1]*E+C[5]*i+C[9]*g,this.z=C[2]*E+C[6]*i+C[10]*g,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,E){return this.x=Math.max(A.x,Math.min(E.x,this.x)),this.y=Math.max(A.y,Math.min(E.y,this.y)),this.z=Math.max(A.z,Math.min(E.z,this.z)),this}clampScalar(A,E){return this.x=Math.max(A,Math.min(E,this.x)),this.y=Math.max(A,Math.min(E,this.y)),this.z=Math.max(A,Math.min(E,this.z)),this}clampLength(A,E){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(A,Math.min(E,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,E){return this.x+=(A.x-this.x)*E,this.y+=(A.y-this.y)*E,this.z+=(A.z-this.z)*E,this}lerpVectors(A,E,i){return this.x=A.x+(E.x-A.x)*i,this.y=A.y+(E.y-A.y)*i,this.z=A.z+(E.z-A.z)*i,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,E){const i=A.x,g=A.y,C=A.z,I=E.x,R=E.y,t=E.z;return this.x=g*t-C*R,this.y=C*I-i*t,this.z=i*R-g*I,this}projectOnVector(A){const E=A.lengthSq();if(E===0)return this.set(0,0,0);const i=A.dot(this)/E;return this.copy(A).multiplyScalar(i)}projectOnPlane(A){return ur.copy(this).projectOnVector(A),this.sub(ur)}reflect(A){return this.sub(ur.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const E=Math.sqrt(this.lengthSq()*A.lengthSq());if(E===0)return Math.PI/2;const i=this.dot(A)/E;return Math.acos(Ro(i,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const E=this.x-A.x,i=this.y-A.y,g=this.z-A.z;return E*E+i*i+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,E,i){const g=Math.sin(E)*A;return this.x=g*Math.sin(i),this.y=Math.cos(E)*A,this.z=g*Math.cos(i),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,E,i){return this.x=A*Math.sin(E),this.y=i,this.z=A*Math.cos(E),this}setFromMatrixPosition(A){const E=A.elements;return this.x=E[12],this.y=E[13],this.z=E[14],this}setFromMatrixScale(A){const E=this.setFromMatrixColumn(A,0).length(),i=this.setFromMatrixColumn(A,1).length(),g=this.setFromMatrixColumn(A,2).length();return this.x=E,this.y=i,this.z=g,this}setFromMatrixColumn(A,E){return this.fromArray(A.elements,E*4)}setFromMatrix3Column(A,E){return this.fromArray(A.elements,E*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,E=0){return this.x=A[E],this.y=A[E+1],this.z=A[E+2],this}toArray(A=[],E=0){return A[E]=this.x,A[E+1]=this.y,A[E+2]=this.z,A}fromBufferAttribute(A,E){return this.x=A.getX(E),this.y=A.getY(E),this.z=A.getZ(E),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,E=Math.random()*Math.PI*2,i=Math.sqrt(1-A**2);return this.x=i*Math.cos(E),this.y=i*Math.sin(E),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ur=new M,fu=new Zo;class Vg{constructor(A=new M(1/0,1/0,1/0),E=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=E}set(A,E){return this.min.copy(A),this.max.copy(E),this}setFromArray(A){let E=1/0,i=1/0,g=1/0,C=-1/0,I=-1/0,R=-1/0;for(let t=0,B=A.length;t<B;t+=3){const n=A[t],K=A[t+1],s=A[t+2];n<E&&(E=n),K<i&&(i=K),s<g&&(g=s),n>C&&(C=n),K>I&&(I=K),s>R&&(R=s)}return this.min.set(E,i,g),this.max.set(C,I,R),this}setFromBufferAttribute(A){let E=1/0,i=1/0,g=1/0,C=-1/0,I=-1/0,R=-1/0;for(let t=0,B=A.count;t<B;t++){const n=A.getX(t),K=A.getY(t),s=A.getZ(t);n<E&&(E=n),K<i&&(i=K),s<g&&(g=s),n>C&&(C=n),K>I&&(I=K),s>R&&(R=s)}return this.min.set(E,i,g),this.max.set(C,I,R),this}setFromPoints(A){this.makeEmpty();for(let E=0,i=A.length;E<i;E++)this.expandByPoint(A[E]);return this}setFromCenterAndSize(A,E){const i=FI.copy(E).multiplyScalar(.5);return this.min.copy(A).sub(i),this.max.copy(A).add(i),this}setFromObject(A,E=!1){return this.makeEmpty(),this.expandByObject(A,E)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,E=!1){A.updateWorldMatrix(!1,!1);const i=A.geometry;if(i!==void 0)if(E&&i.attributes!=null&&i.attributes.position!==void 0){const C=i.attributes.position;for(let I=0,R=C.count;I<R;I++)FI.fromBufferAttribute(C,I).applyMatrix4(A.matrixWorld),this.expandByPoint(FI)}else i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox),Dr.applyMatrix4(A.matrixWorld),this.union(Dr);const g=A.children;for(let C=0,I=g.length;C<I;C++)this.expandByObject(g[C],E);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,E){return E.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,FI),FI.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let E,i;return A.normal.x>0?(E=A.normal.x*this.min.x,i=A.normal.x*this.max.x):(E=A.normal.x*this.max.x,i=A.normal.x*this.min.x),A.normal.y>0?(E+=A.normal.y*this.min.y,i+=A.normal.y*this.max.y):(E+=A.normal.y*this.max.y,i+=A.normal.y*this.min.y),A.normal.z>0?(E+=A.normal.z*this.min.z,i+=A.normal.z*this.max.z):(E+=A.normal.z*this.max.z,i+=A.normal.z*this.min.z),E<=-A.constant&&i>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(de),cn.subVectors(this.max,de),xR.subVectors(A.a,de),LR.subVectors(A.b,de),zR.subVectors(A.c,de),NC.subVectors(LR,xR),mC.subVectors(zR,LR),qI.subVectors(xR,zR);let E=[0,-NC.z,NC.y,0,-mC.z,mC.y,0,-qI.z,qI.y,NC.z,0,-NC.x,mC.z,0,-mC.x,qI.z,0,-qI.x,-NC.y,NC.x,0,-mC.y,mC.x,0,-qI.y,qI.x,0];return!Sr(E,xR,LR,zR,cn)||(E=[1,0,0,0,1,0,0,0,1],!Sr(E,xR,LR,zR,cn))?!1:(un.crossVectors(NC,mC),E=[un.x,un.y,un.z],Sr(E,xR,LR,zR,cn))}clampPoint(A,E){return E.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return FI.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(FI).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(EC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),EC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),EC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),EC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),EC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),EC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),EC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),EC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(EC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const EC=[new M,new M,new M,new M,new M,new M,new M,new M],FI=new M,Dr=new Vg,xR=new M,LR=new M,zR=new M,NC=new M,mC=new M,qI=new M,de=new M,cn=new M,un=new M,MI=new M;function Sr(o,A,E,i,g){for(let C=0,I=o.length-3;C<=I;C+=3){MI.fromArray(o,C);const R=g.x*Math.abs(MI.x)+g.y*Math.abs(MI.y)+g.z*Math.abs(MI.z),t=A.dot(MI),B=E.dot(MI),n=i.dot(MI);if(Math.max(-Math.max(t,B,n),Math.min(t,B,n))>R)return!1}return!0}const $w=new Vg,fe=new M,dr=new M;class DC{constructor(A=new M,E=-1){this.center=A,this.radius=E}set(A,E){return this.center.copy(A),this.radius=E,this}setFromPoints(A,E){const i=this.center;E!==void 0?i.copy(E):$w.setFromPoints(A).getCenter(i);let g=0;for(let C=0,I=A.length;C<I;C++)g=Math.max(g,i.distanceToSquared(A[C]));return this.radius=Math.sqrt(g),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const E=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=E*E}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,E){const i=this.center.distanceToSquared(A);return E.copy(A),i>this.radius*this.radius&&(E.sub(this.center).normalize(),E.multiplyScalar(this.radius).add(this.center)),E}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;fe.subVectors(A,this.center);const E=fe.lengthSq();if(E>this.radius*this.radius){const i=Math.sqrt(E),g=(i-this.radius)*.5;this.center.addScaledVector(fe,g/i),this.radius+=g}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(dr.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(fe.copy(A.center).add(dr)),this.expandByPoint(fe.copy(A.center).sub(dr))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oC=new M,fr=new M,Dn=new M,yC=new M,Tr=new M,Sn=new M,Ur=new M;class vt{constructor(A=new M,E=new M(0,0,-1)){this.origin=A,this.direction=E}set(A,E){return this.origin.copy(A),this.direction.copy(E),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,E){return E.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,oC)),this}closestPointToPoint(A,E){E.subVectors(A,this.origin);const i=E.dot(this.direction);return i<0?E.copy(this.origin):E.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const E=oC.subVectors(A,this.origin).dot(this.direction);return E<0?this.origin.distanceToSquared(A):(oC.copy(this.direction).multiplyScalar(E).add(this.origin),oC.distanceToSquared(A))}distanceSqToSegment(A,E,i,g){fr.copy(A).add(E).multiplyScalar(.5),Dn.copy(E).sub(A).normalize(),yC.copy(this.origin).sub(fr);const C=A.distanceTo(E)*.5,I=-this.direction.dot(Dn),R=yC.dot(this.direction),t=-yC.dot(Dn),B=yC.lengthSq(),n=Math.abs(1-I*I);let K,s,r,l;if(n>0)if(K=I*t-R,s=I*R-t,l=C*n,K>=0)if(s>=-l)if(s<=l){const k=1/n;K*=k,s*=k,r=K*(K+I*s+2*R)+s*(I*K+s+2*t)+B}else s=C,K=Math.max(0,-(I*s+R)),r=-K*K+s*(s+2*t)+B;else s=-C,K=Math.max(0,-(I*s+R)),r=-K*K+s*(s+2*t)+B;else s<=-l?(K=Math.max(0,-(-I*C+R)),s=K>0?-C:Math.min(Math.max(-C,-t),C),r=-K*K+s*(s+2*t)+B):s<=l?(K=0,s=Math.min(Math.max(-C,-t),C),r=s*(s+2*t)+B):(K=Math.max(0,-(I*C+R)),s=K>0?C:Math.min(Math.max(-C,-t),C),r=-K*K+s*(s+2*t)+B);else s=I>0?-C:C,K=Math.max(0,-(I*s+R)),r=-K*K+s*(s+2*t)+B;return i&&i.copy(this.direction).multiplyScalar(K).add(this.origin),g&&g.copy(Dn).multiplyScalar(s).add(fr),r}intersectSphere(A,E){oC.subVectors(A.center,this.origin);const i=oC.dot(this.direction),g=oC.dot(oC)-i*i,C=A.radius*A.radius;if(g>C)return null;const I=Math.sqrt(C-g),R=i-I,t=i+I;return R<0&&t<0?null:R<0?this.at(t,E):this.at(R,E)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const E=A.normal.dot(this.direction);if(E===0)return A.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(A.normal)+A.constant)/E;return i>=0?i:null}intersectPlane(A,E){const i=this.distanceToPlane(A);return i===null?null:this.at(i,E)}intersectsPlane(A){const E=A.distanceToPoint(this.origin);return E===0||A.normal.dot(this.direction)*E<0}intersectBox(A,E){let i,g,C,I,R,t;const B=1/this.direction.x,n=1/this.direction.y,K=1/this.direction.z,s=this.origin;return B>=0?(i=(A.min.x-s.x)*B,g=(A.max.x-s.x)*B):(i=(A.max.x-s.x)*B,g=(A.min.x-s.x)*B),n>=0?(C=(A.min.y-s.y)*n,I=(A.max.y-s.y)*n):(C=(A.max.y-s.y)*n,I=(A.min.y-s.y)*n),i>I||C>g||((C>i||isNaN(i))&&(i=C),(I<g||isNaN(g))&&(g=I),K>=0?(R=(A.min.z-s.z)*K,t=(A.max.z-s.z)*K):(R=(A.max.z-s.z)*K,t=(A.min.z-s.z)*K),i>t||R>g)||((R>i||i!==i)&&(i=R),(t<g||g!==g)&&(g=t),g<0)?null:this.at(i>=0?i:g,E)}intersectsBox(A){return this.intersectBox(A,oC)!==null}intersectTriangle(A,E,i,g,C){Tr.subVectors(E,A),Sn.subVectors(i,A),Ur.crossVectors(Tr,Sn);let I=this.direction.dot(Ur),R;if(I>0){if(g)return null;R=1}else if(I<0)R=-1,I=-I;else return null;yC.subVectors(this.origin,A);const t=R*this.direction.dot(Sn.crossVectors(yC,Sn));if(t<0)return null;const B=R*this.direction.dot(Tr.cross(yC));if(B<0||t+B>I)return null;const n=-R*yC.dot(Ur);return n<0?null:this.at(n/I,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class CE{constructor(){CE.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,E,i,g,C,I,R,t,B,n,K,s,r,l,k,P){const J=this.elements;return J[0]=A,J[4]=E,J[8]=i,J[12]=g,J[1]=C,J[5]=I,J[9]=R,J[13]=t,J[2]=B,J[6]=n,J[10]=K,J[14]=s,J[3]=r,J[7]=l,J[11]=k,J[15]=P,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new CE().fromArray(this.elements)}copy(A){const E=this.elements,i=A.elements;return E[0]=i[0],E[1]=i[1],E[2]=i[2],E[3]=i[3],E[4]=i[4],E[5]=i[5],E[6]=i[6],E[7]=i[7],E[8]=i[8],E[9]=i[9],E[10]=i[10],E[11]=i[11],E[12]=i[12],E[13]=i[13],E[14]=i[14],E[15]=i[15],this}copyPosition(A){const E=this.elements,i=A.elements;return E[12]=i[12],E[13]=i[13],E[14]=i[14],this}setFromMatrix3(A){const E=A.elements;return this.set(E[0],E[3],E[6],0,E[1],E[4],E[7],0,E[2],E[5],E[8],0,0,0,0,1),this}extractBasis(A,E,i){return A.setFromMatrixColumn(this,0),E.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(A,E,i){return this.set(A.x,E.x,i.x,0,A.y,E.y,i.y,0,A.z,E.z,i.z,0,0,0,0,1),this}extractRotation(A){const E=this.elements,i=A.elements,g=1/vR.setFromMatrixColumn(A,0).length(),C=1/vR.setFromMatrixColumn(A,1).length(),I=1/vR.setFromMatrixColumn(A,2).length();return E[0]=i[0]*g,E[1]=i[1]*g,E[2]=i[2]*g,E[3]=0,E[4]=i[4]*C,E[5]=i[5]*C,E[6]=i[6]*C,E[7]=0,E[8]=i[8]*I,E[9]=i[9]*I,E[10]=i[10]*I,E[11]=0,E[12]=0,E[13]=0,E[14]=0,E[15]=1,this}makeRotationFromEuler(A){const E=this.elements,i=A.x,g=A.y,C=A.z,I=Math.cos(i),R=Math.sin(i),t=Math.cos(g),B=Math.sin(g),n=Math.cos(C),K=Math.sin(C);if(A.order==="XYZ"){const s=I*n,r=I*K,l=R*n,k=R*K;E[0]=t*n,E[4]=-t*K,E[8]=B,E[1]=r+l*B,E[5]=s-k*B,E[9]=-R*t,E[2]=k-s*B,E[6]=l+r*B,E[10]=I*t}else if(A.order==="YXZ"){const s=t*n,r=t*K,l=B*n,k=B*K;E[0]=s+k*R,E[4]=l*R-r,E[8]=I*B,E[1]=I*K,E[5]=I*n,E[9]=-R,E[2]=r*R-l,E[6]=k+s*R,E[10]=I*t}else if(A.order==="ZXY"){const s=t*n,r=t*K,l=B*n,k=B*K;E[0]=s-k*R,E[4]=-I*K,E[8]=l+r*R,E[1]=r+l*R,E[5]=I*n,E[9]=k-s*R,E[2]=-I*B,E[6]=R,E[10]=I*t}else if(A.order==="ZYX"){const s=I*n,r=I*K,l=R*n,k=R*K;E[0]=t*n,E[4]=l*B-r,E[8]=s*B+k,E[1]=t*K,E[5]=k*B+s,E[9]=r*B-l,E[2]=-B,E[6]=R*t,E[10]=I*t}else if(A.order==="YZX"){const s=I*t,r=I*B,l=R*t,k=R*B;E[0]=t*n,E[4]=k-s*K,E[8]=l*K+r,E[1]=K,E[5]=I*n,E[9]=-R*n,E[2]=-B*n,E[6]=r*K+l,E[10]=s-k*K}else if(A.order==="XZY"){const s=I*t,r=I*B,l=R*t,k=R*B;E[0]=t*n,E[4]=-K,E[8]=B*n,E[1]=s*K+k,E[5]=I*n,E[9]=r*K-l,E[2]=l*K-r,E[6]=R*n,E[10]=k*K+s}return E[3]=0,E[7]=0,E[11]=0,E[12]=0,E[13]=0,E[14]=0,E[15]=1,this}makeRotationFromQuaternion(A){return this.compose(AF,A,EF)}lookAt(A,E,i){const g=this.elements;return ci.subVectors(A,E),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),xC.crossVectors(i,ci),xC.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),xC.crossVectors(i,ci)),xC.normalize(),dn.crossVectors(ci,xC),g[0]=xC.x,g[4]=dn.x,g[8]=ci.x,g[1]=xC.y,g[5]=dn.y,g[9]=ci.y,g[2]=xC.z,g[6]=dn.z,g[10]=ci.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,E){const i=A.elements,g=E.elements,C=this.elements,I=i[0],R=i[4],t=i[8],B=i[12],n=i[1],K=i[5],s=i[9],r=i[13],l=i[2],k=i[6],P=i[10],J=i[14],c=i[3],u=i[7],S=i[11],T=i[15],U=g[0],F=g[4],d=g[8],p=g[12],H=g[1],V=g[5],CA=g[9],X=g[13],Y=g[2],AA=g[6],EA=g[10],tA=g[14],w=g[3],G=g[7],N=g[11],j=g[15];return C[0]=I*U+R*H+t*Y+B*w,C[4]=I*F+R*V+t*AA+B*G,C[8]=I*d+R*CA+t*EA+B*N,C[12]=I*p+R*X+t*tA+B*j,C[1]=n*U+K*H+s*Y+r*w,C[5]=n*F+K*V+s*AA+r*G,C[9]=n*d+K*CA+s*EA+r*N,C[13]=n*p+K*X+s*tA+r*j,C[2]=l*U+k*H+P*Y+J*w,C[6]=l*F+k*V+P*AA+J*G,C[10]=l*d+k*CA+P*EA+J*N,C[14]=l*p+k*X+P*tA+J*j,C[3]=c*U+u*H+S*Y+T*w,C[7]=c*F+u*V+S*AA+T*G,C[11]=c*d+u*CA+S*EA+T*N,C[15]=c*p+u*X+S*tA+T*j,this}multiplyScalar(A){const E=this.elements;return E[0]*=A,E[4]*=A,E[8]*=A,E[12]*=A,E[1]*=A,E[5]*=A,E[9]*=A,E[13]*=A,E[2]*=A,E[6]*=A,E[10]*=A,E[14]*=A,E[3]*=A,E[7]*=A,E[11]*=A,E[15]*=A,this}determinant(){const A=this.elements,E=A[0],i=A[4],g=A[8],C=A[12],I=A[1],R=A[5],t=A[9],B=A[13],n=A[2],K=A[6],s=A[10],r=A[14],l=A[3],k=A[7],P=A[11],J=A[15];return l*(+C*t*K-g*B*K-C*R*s+i*B*s+g*R*r-i*t*r)+k*(+E*t*r-E*B*s+C*I*s-g*I*r+g*B*n-C*t*n)+P*(+E*B*K-E*R*r-C*I*K+i*I*r+C*R*n-i*B*n)+J*(-g*R*n-E*t*K+E*R*s+g*I*K-i*I*s+i*t*n)}transpose(){const A=this.elements;let E;return E=A[1],A[1]=A[4],A[4]=E,E=A[2],A[2]=A[8],A[8]=E,E=A[6],A[6]=A[9],A[9]=E,E=A[3],A[3]=A[12],A[12]=E,E=A[7],A[7]=A[13],A[13]=E,E=A[11],A[11]=A[14],A[14]=E,this}setPosition(A,E,i){const g=this.elements;return A.isVector3?(g[12]=A.x,g[13]=A.y,g[14]=A.z):(g[12]=A,g[13]=E,g[14]=i),this}invert(){const A=this.elements,E=A[0],i=A[1],g=A[2],C=A[3],I=A[4],R=A[5],t=A[6],B=A[7],n=A[8],K=A[9],s=A[10],r=A[11],l=A[12],k=A[13],P=A[14],J=A[15],c=K*P*B-k*s*B+k*t*r-R*P*r-K*t*J+R*s*J,u=l*s*B-n*P*B-l*t*r+I*P*r+n*t*J-I*s*J,S=n*k*B-l*K*B+l*R*r-I*k*r-n*R*J+I*K*J,T=l*K*t-n*k*t-l*R*s+I*k*s+n*R*P-I*K*P,U=E*c+i*u+g*S+C*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return A[0]=c*F,A[1]=(k*s*C-K*P*C-k*g*r+i*P*r+K*g*J-i*s*J)*F,A[2]=(R*P*C-k*t*C+k*g*B-i*P*B-R*g*J+i*t*J)*F,A[3]=(K*t*C-R*s*C-K*g*B+i*s*B+R*g*r-i*t*r)*F,A[4]=u*F,A[5]=(n*P*C-l*s*C+l*g*r-E*P*r-n*g*J+E*s*J)*F,A[6]=(l*t*C-I*P*C-l*g*B+E*P*B+I*g*J-E*t*J)*F,A[7]=(I*s*C-n*t*C+n*g*B-E*s*B-I*g*r+E*t*r)*F,A[8]=S*F,A[9]=(l*K*C-n*k*C-l*i*r+E*k*r+n*i*J-E*K*J)*F,A[10]=(I*k*C-l*R*C+l*i*B-E*k*B-I*i*J+E*R*J)*F,A[11]=(n*R*C-I*K*C-n*i*B+E*K*B+I*i*r-E*R*r)*F,A[12]=T*F,A[13]=(n*k*g-l*K*g+l*i*s-E*k*s-n*i*P+E*K*P)*F,A[14]=(l*R*g-I*k*g-l*i*t+E*k*t+I*i*P-E*R*P)*F,A[15]=(I*K*g-n*R*g+n*i*t-E*K*t-I*i*s+E*R*s)*F,this}scale(A){const E=this.elements,i=A.x,g=A.y,C=A.z;return E[0]*=i,E[4]*=g,E[8]*=C,E[1]*=i,E[5]*=g,E[9]*=C,E[2]*=i,E[6]*=g,E[10]*=C,E[3]*=i,E[7]*=g,E[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,E=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],i=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],g=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(E,i,g))}makeTranslation(A,E,i){return this.set(1,0,0,A,0,1,0,E,0,0,1,i,0,0,0,1),this}makeRotationX(A){const E=Math.cos(A),i=Math.sin(A);return this.set(1,0,0,0,0,E,-i,0,0,i,E,0,0,0,0,1),this}makeRotationY(A){const E=Math.cos(A),i=Math.sin(A);return this.set(E,0,i,0,0,1,0,0,-i,0,E,0,0,0,0,1),this}makeRotationZ(A){const E=Math.cos(A),i=Math.sin(A);return this.set(E,-i,0,0,i,E,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,E){const i=Math.cos(E),g=Math.sin(E),C=1-i,I=A.x,R=A.y,t=A.z,B=C*I,n=C*R;return this.set(B*I+i,B*R-g*t,B*t+g*R,0,B*R+g*t,n*R+i,n*t-g*I,0,B*t-g*R,n*t+g*I,C*t*t+i,0,0,0,0,1),this}makeScale(A,E,i){return this.set(A,0,0,0,0,E,0,0,0,0,i,0,0,0,0,1),this}makeShear(A,E,i,g,C,I){return this.set(1,i,C,0,A,1,I,0,E,g,1,0,0,0,0,1),this}compose(A,E,i){const g=this.elements,C=E._x,I=E._y,R=E._z,t=E._w,B=C+C,n=I+I,K=R+R,s=C*B,r=C*n,l=C*K,k=I*n,P=I*K,J=R*K,c=t*B,u=t*n,S=t*K,T=i.x,U=i.y,F=i.z;return g[0]=(1-(k+J))*T,g[1]=(r+S)*T,g[2]=(l-u)*T,g[3]=0,g[4]=(r-S)*U,g[5]=(1-(s+J))*U,g[6]=(P+c)*U,g[7]=0,g[8]=(l+u)*F,g[9]=(P-c)*F,g[10]=(1-(s+k))*F,g[11]=0,g[12]=A.x,g[13]=A.y,g[14]=A.z,g[15]=1,this}decompose(A,E,i){const g=this.elements;let C=vR.set(g[0],g[1],g[2]).length();const I=vR.set(g[4],g[5],g[6]).length(),R=vR.set(g[8],g[9],g[10]).length();this.determinant()<0&&(C=-C),A.x=g[12],A.y=g[13],A.z=g[14],Bg.copy(this);const B=1/C,n=1/I,K=1/R;return Bg.elements[0]*=B,Bg.elements[1]*=B,Bg.elements[2]*=B,Bg.elements[4]*=n,Bg.elements[5]*=n,Bg.elements[6]*=n,Bg.elements[8]*=K,Bg.elements[9]*=K,Bg.elements[10]*=K,E.setFromRotationMatrix(Bg),i.x=C,i.y=I,i.z=R,this}makePerspective(A,E,i,g,C,I){const R=this.elements,t=2*C/(E-A),B=2*C/(i-g),n=(E+A)/(E-A),K=(i+g)/(i-g),s=-(I+C)/(I-C),r=-2*I*C/(I-C);return R[0]=t,R[4]=0,R[8]=n,R[12]=0,R[1]=0,R[5]=B,R[9]=K,R[13]=0,R[2]=0,R[6]=0,R[10]=s,R[14]=r,R[3]=0,R[7]=0,R[11]=-1,R[15]=0,this}makeOrthographic(A,E,i,g,C,I){const R=this.elements,t=1/(E-A),B=1/(i-g),n=1/(I-C),K=(E+A)*t,s=(i+g)*B,r=(I+C)*n;return R[0]=2*t,R[4]=0,R[8]=0,R[12]=-K,R[1]=0,R[5]=2*B,R[9]=0,R[13]=-s,R[2]=0,R[6]=0,R[10]=-2*n,R[14]=-r,R[3]=0,R[7]=0,R[11]=0,R[15]=1,this}equals(A){const E=this.elements,i=A.elements;for(let g=0;g<16;g++)if(E[g]!==i[g])return!1;return!0}fromArray(A,E=0){for(let i=0;i<16;i++)this.elements[i]=A[i+E];return this}toArray(A=[],E=0){const i=this.elements;return A[E]=i[0],A[E+1]=i[1],A[E+2]=i[2],A[E+3]=i[3],A[E+4]=i[4],A[E+5]=i[5],A[E+6]=i[6],A[E+7]=i[7],A[E+8]=i[8],A[E+9]=i[9],A[E+10]=i[10],A[E+11]=i[11],A[E+12]=i[12],A[E+13]=i[13],A[E+14]=i[14],A[E+15]=i[15],A}}const vR=new M,Bg=new CE,AF=new M(0,0,0),EF=new M(1,1,1),xC=new M,dn=new M,ci=new M,Tu=new CE,Uu=new Zo;class YQ{constructor(A=0,E=0,i=0,g=YQ.DefaultOrder){this.isEuler=!0,this._x=A,this._y=E,this._z=i,this._order=g}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,E,i,g=this._order){return this._x=A,this._y=E,this._z=i,this._order=g,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,E=this._order,i=!0){const g=A.elements,C=g[0],I=g[4],R=g[8],t=g[1],B=g[5],n=g[9],K=g[2],s=g[6],r=g[10];switch(E){case"XYZ":this._y=Math.asin(Ro(R,-1,1)),Math.abs(R)<.9999999?(this._x=Math.atan2(-n,r),this._z=Math.atan2(-I,C)):(this._x=Math.atan2(s,B),this._z=0);break;case"YXZ":this._x=Math.asin(-Ro(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(R,r),this._z=Math.atan2(t,B)):(this._y=Math.atan2(-K,C),this._z=0);break;case"ZXY":this._x=Math.asin(Ro(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-K,r),this._z=Math.atan2(-I,B)):(this._y=0,this._z=Math.atan2(t,C));break;case"ZYX":this._y=Math.asin(-Ro(K,-1,1)),Math.abs(K)<.9999999?(this._x=Math.atan2(s,r),this._z=Math.atan2(t,C)):(this._x=0,this._z=Math.atan2(-I,B));break;case"YZX":this._z=Math.asin(Ro(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-n,B),this._y=Math.atan2(-K,C)):(this._x=0,this._y=Math.atan2(R,r));break;case"XZY":this._z=Math.asin(-Ro(I,-1,1)),Math.abs(I)<.9999999?(this._x=Math.atan2(s,B),this._y=Math.atan2(R,C)):(this._x=Math.atan2(-n,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+E)}return this._order=E,i===!0&&this._onChangeCallback(),this}setFromQuaternion(A,E,i){return Tu.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Tu,E,i)}setFromVector3(A,E=this._order){return this.set(A.x,A.y,A.z,E)}reorder(A){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],E=0){return A[E]=this._x,A[E+1]=this._y,A[E+2]=this._z,A[E+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}YQ.DefaultOrder="XYZ";YQ.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class RR{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let oF=0;const pu=new M,VR=new Zo,iC=new CE,fn=new M,Te=new M,iF=new M,gF=new Zo,wu=new M(1,0,0),Fu=new M(0,1,0),qu=new M(0,0,1),CF={type:"added"},Mu={type:"removed"};class UE extends vg{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oF++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=UE.DefaultUp.clone();const A=new M,E=new YQ,i=new Zo,g=new M(1,1,1);function C(){i.setFromEuler(E,!1)}function I(){E.setFromQuaternion(i,void 0,!1)}E._onChange(C),i._onChange(I),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:E},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:g},modelViewMatrix:{value:new CE},normalMatrix:{value:new hi}}),this.matrix=new CE,this.matrixWorld=new CE,this.matrixAutoUpdate=UE.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=UE.DefaultMatrixWorldAutoUpdate,this.layers=new RR,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,E){this.quaternion.setFromAxisAngle(A,E)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,E){return VR.setFromAxisAngle(A,E),this.quaternion.multiply(VR),this}rotateOnWorldAxis(A,E){return VR.setFromAxisAngle(A,E),this.quaternion.premultiply(VR),this}rotateX(A){return this.rotateOnAxis(wu,A)}rotateY(A){return this.rotateOnAxis(Fu,A)}rotateZ(A){return this.rotateOnAxis(qu,A)}translateOnAxis(A,E){return pu.copy(A).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(E)),this}translateX(A){return this.translateOnAxis(wu,A)}translateY(A){return this.translateOnAxis(Fu,A)}translateZ(A){return this.translateOnAxis(qu,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(iC.copy(this.matrixWorld).invert())}lookAt(A,E,i){A.isVector3?fn.copy(A):fn.set(A,E,i);const g=this.parent;this.updateWorldMatrix(!0,!1),Te.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?iC.lookAt(Te,fn,this.up):iC.lookAt(fn,Te,this.up),this.quaternion.setFromRotationMatrix(iC),g&&(iC.extractRotation(g.matrixWorld),VR.setFromRotationMatrix(iC),this.quaternion.premultiply(VR.invert()))}add(A){if(arguments.length>1){for(let E=0;E<arguments.length;E++)this.add(arguments[E]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(CF)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const E=this.children.indexOf(A);return E!==-1&&(A.parent=null,this.children.splice(E,1),A.dispatchEvent(Mu)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const E=this.children[A];E.parent=null,E.dispatchEvent(Mu)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),iC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),iC.multiply(A.parent.matrixWorld)),A.applyMatrix4(iC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,E){if(this[A]===E)return this;for(let i=0,g=this.children.length;i<g;i++){const I=this.children[i].getObjectByProperty(A,E);if(I!==void 0)return I}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Te,A,iF),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Te,gF,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const E=this.matrixWorld.elements;return A.set(E[8],E[9],E[10]).normalize()}raycast(){}traverse(A){A(this);const E=this.children;for(let i=0,g=E.length;i<g;i++)E[i].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const E=this.children;for(let i=0,g=E.length;i<g;i++)E[i].traverseVisible(A)}traverseAncestors(A){const E=this.parent;E!==null&&(A(E),E.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const E=this.children;for(let i=0,g=E.length;i<g;i++){const C=E[i];(C.matrixWorldAutoUpdate===!0||A===!0)&&C.updateMatrixWorld(A)}}updateWorldMatrix(A,E){const i=this.parent;if(A===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),E===!0){const g=this.children;for(let C=0,I=g.length;C<I;C++){const R=g[C];R.matrixWorldAutoUpdate===!0&&R.updateWorldMatrix(!1,!0)}}}toJSON(A){const E=A===void 0||typeof A=="string",i={};E&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const g={};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.castShadow===!0&&(g.castShadow=!0),this.receiveShadow===!0&&(g.receiveShadow=!0),this.visible===!1&&(g.visible=!1),this.frustumCulled===!1&&(g.frustumCulled=!1),this.renderOrder!==0&&(g.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData),g.layers=this.layers.mask,g.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(g.matrixAutoUpdate=!1),this.isInstancedMesh&&(g.type="InstancedMesh",g.count=this.count,g.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(g.instanceColor=this.instanceColor.toJSON()));function C(R,t){return R[t.uuid]===void 0&&(R[t.uuid]=t.toJSON(A)),t.uuid}if(this.isScene)this.background&&(this.background.isColor?g.background=this.background.toJSON():this.background.isTexture&&(g.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(g.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){g.geometry=C(A.geometries,this.geometry);const R=this.geometry.parameters;if(R!==void 0&&R.shapes!==void 0){const t=R.shapes;if(Array.isArray(t))for(let B=0,n=t.length;B<n;B++){const K=t[B];C(A.shapes,K)}else C(A.shapes,t)}}if(this.isSkinnedMesh&&(g.bindMode=this.bindMode,g.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),g.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const R=[];for(let t=0,B=this.material.length;t<B;t++)R.push(C(A.materials,this.material[t]));g.material=R}else g.material=C(A.materials,this.material);if(this.children.length>0){g.children=[];for(let R=0;R<this.children.length;R++)g.children.push(this.children[R].toJSON(A).object)}if(this.animations.length>0){g.animations=[];for(let R=0;R<this.animations.length;R++){const t=this.animations[R];g.animations.push(C(A.animations,t))}}if(E){const R=I(A.geometries),t=I(A.materials),B=I(A.textures),n=I(A.images),K=I(A.shapes),s=I(A.skeletons),r=I(A.animations),l=I(A.nodes);R.length>0&&(i.geometries=R),t.length>0&&(i.materials=t),B.length>0&&(i.textures=B),n.length>0&&(i.images=n),K.length>0&&(i.shapes=K),s.length>0&&(i.skeletons=s),r.length>0&&(i.animations=r),l.length>0&&(i.nodes=l)}return i.object=g,i;function I(R){const t=[];for(const B in R){const n=R[B];delete n.metadata,t.push(n)}return t}}clone(A){return new this.constructor().copy(this,A)}copy(A,E=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),E===!0)for(let i=0;i<A.children.length;i++){const g=A.children[i];this.add(g.clone())}return this}}UE.DefaultUp=new M(0,1,0);UE.DefaultMatrixAutoUpdate=!0;UE.DefaultMatrixWorldAutoUpdate=!0;const ng=new M,gC=new M,pr=new M,CC=new M,YR=new M,OR=new M,Gu=new M,wr=new M,Fr=new M,qr=new M;class $i{constructor(A=new M,E=new M,i=new M){this.a=A,this.b=E,this.c=i}static getNormal(A,E,i,g){g.subVectors(i,E),ng.subVectors(A,E),g.cross(ng);const C=g.lengthSq();return C>0?g.multiplyScalar(1/Math.sqrt(C)):g.set(0,0,0)}static getBarycoord(A,E,i,g,C){ng.subVectors(g,E),gC.subVectors(i,E),pr.subVectors(A,E);const I=ng.dot(ng),R=ng.dot(gC),t=ng.dot(pr),B=gC.dot(gC),n=gC.dot(pr),K=I*B-R*R;if(K===0)return C.set(-2,-1,-1);const s=1/K,r=(B*t-R*n)*s,l=(I*n-R*t)*s;return C.set(1-r-l,l,r)}static containsPoint(A,E,i,g){return this.getBarycoord(A,E,i,g,CC),CC.x>=0&&CC.y>=0&&CC.x+CC.y<=1}static getUV(A,E,i,g,C,I,R,t){return this.getBarycoord(A,E,i,g,CC),t.set(0,0),t.addScaledVector(C,CC.x),t.addScaledVector(I,CC.y),t.addScaledVector(R,CC.z),t}static isFrontFacing(A,E,i,g){return ng.subVectors(i,E),gC.subVectors(A,E),ng.cross(gC).dot(g)<0}set(A,E,i){return this.a.copy(A),this.b.copy(E),this.c.copy(i),this}setFromPointsAndIndices(A,E,i,g){return this.a.copy(A[E]),this.b.copy(A[i]),this.c.copy(A[g]),this}setFromAttributeAndIndices(A,E,i,g){return this.a.fromBufferAttribute(A,E),this.b.fromBufferAttribute(A,i),this.c.fromBufferAttribute(A,g),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return ng.subVectors(this.c,this.b),gC.subVectors(this.a,this.b),ng.cross(gC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return $i.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,E){return $i.getBarycoord(A,this.a,this.b,this.c,E)}getUV(A,E,i,g,C){return $i.getUV(A,this.a,this.b,this.c,E,i,g,C)}containsPoint(A){return $i.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return $i.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,E){const i=this.a,g=this.b,C=this.c;let I,R;YR.subVectors(g,i),OR.subVectors(C,i),wr.subVectors(A,i);const t=YR.dot(wr),B=OR.dot(wr);if(t<=0&&B<=0)return E.copy(i);Fr.subVectors(A,g);const n=YR.dot(Fr),K=OR.dot(Fr);if(n>=0&&K<=n)return E.copy(g);const s=t*K-n*B;if(s<=0&&t>=0&&n<=0)return I=t/(t-n),E.copy(i).addScaledVector(YR,I);qr.subVectors(A,C);const r=YR.dot(qr),l=OR.dot(qr);if(l>=0&&r<=l)return E.copy(C);const k=r*B-t*l;if(k<=0&&B>=0&&l<=0)return R=B/(B-l),E.copy(i).addScaledVector(OR,R);const P=n*l-r*K;if(P<=0&&K-n>=0&&r-l>=0)return Gu.subVectors(C,g),R=(K-n)/(K-n+(r-l)),E.copy(g).addScaledVector(Gu,R);const J=1/(P+k+s);return I=k*J,R=s*J,E.copy(i).addScaledVector(YR,I).addScaledVector(OR,R)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let IF=0;class Ho extends vg{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IF++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=iR,this.side=sR,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jl,this.blendDst=bl,this.blendEquation=YI,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=UK,this.stencilZFail=UK,this.stencilZPass=UK,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const E in A){const i=A[E];if(i===void 0){console.warn("THREE.Material: '"+E+"' parameter is undefined.");continue}const g=this[E];if(g===void 0){console.warn("THREE."+this.type+": '"+E+"' is not a property of this material.");continue}g&&g.isColor?g.set(i):g&&g.isVector3&&i&&i.isVector3?g.copy(i):this[E]=i}}toJSON(A){const E=A===void 0||typeof A=="string";E&&(A={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(A).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(A).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(A).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(A).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(A).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==iR&&(i.blending=this.blending),this.side!==sR&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function g(C){const I=[];for(const R in C){const t=C[R];delete t.metadata,I.push(t)}return I}if(E){const C=g(A.textures),I=g(A.images);C.length>0&&(i.textures=C),I.length>0&&(i.images=I)}return i}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const E=A.clippingPlanes;let i=null;if(E!==null){const g=E.length;i=new Array(g);for(let C=0;C!==g;++C)i[C]=E[C].clone()}return this.clippingPlanes=i,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class PI extends Ho{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new MA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lt,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const to=new M,Tn=new nA;class HE{constructor(A,E,i){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=E,this.count=A!==void 0?A.length/E:0,this.normalized=i===!0,this.usage=St,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,E,i){A*=this.itemSize,i*=E.itemSize;for(let g=0,C=this.itemSize;g<C;g++)this.array[A+g]=E.array[i+g];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let E=0,i=this.count;E<i;E++)Tn.fromBufferAttribute(this,E),Tn.applyMatrix3(A),this.setXY(E,Tn.x,Tn.y);else if(this.itemSize===3)for(let E=0,i=this.count;E<i;E++)to.fromBufferAttribute(this,E),to.applyMatrix3(A),this.setXYZ(E,to.x,to.y,to.z);return this}applyMatrix4(A){for(let E=0,i=this.count;E<i;E++)to.fromBufferAttribute(this,E),to.applyMatrix4(A),this.setXYZ(E,to.x,to.y,to.z);return this}applyNormalMatrix(A){for(let E=0,i=this.count;E<i;E++)to.fromBufferAttribute(this,E),to.applyNormalMatrix(A),this.setXYZ(E,to.x,to.y,to.z);return this}transformDirection(A){for(let E=0,i=this.count;E<i;E++)to.fromBufferAttribute(this,E),to.transformDirection(A),this.setXYZ(E,to.x,to.y,to.z);return this}set(A,E=0){return this.array.set(A,E),this}getX(A){let E=this.array[A*this.itemSize];return this.normalized&&(E=hC(E,this.array)),E}setX(A,E){return this.normalized&&(E=GE(E,this.array)),this.array[A*this.itemSize]=E,this}getY(A){let E=this.array[A*this.itemSize+1];return this.normalized&&(E=hC(E,this.array)),E}setY(A,E){return this.normalized&&(E=GE(E,this.array)),this.array[A*this.itemSize+1]=E,this}getZ(A){let E=this.array[A*this.itemSize+2];return this.normalized&&(E=hC(E,this.array)),E}setZ(A,E){return this.normalized&&(E=GE(E,this.array)),this.array[A*this.itemSize+2]=E,this}getW(A){let E=this.array[A*this.itemSize+3];return this.normalized&&(E=hC(E,this.array)),E}setW(A,E){return this.normalized&&(E=GE(E,this.array)),this.array[A*this.itemSize+3]=E,this}setXY(A,E,i){return A*=this.itemSize,this.normalized&&(E=GE(E,this.array),i=GE(i,this.array)),this.array[A+0]=E,this.array[A+1]=i,this}setXYZ(A,E,i,g){return A*=this.itemSize,this.normalized&&(E=GE(E,this.array),i=GE(i,this.array),g=GE(g,this.array)),this.array[A+0]=E,this.array[A+1]=i,this.array[A+2]=g,this}setXYZW(A,E,i,g,C){return A*=this.itemSize,this.normalized&&(E=GE(E,this.array),i=GE(i,this.array),g=GE(g,this.array),C=GE(C,this.array)),this.array[A+0]=E,this.array[A+1]=i,this.array[A+2]=g,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==St&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class RF extends HE{constructor(A,E,i){super(new Int8Array(A),E,i)}}class QF extends HE{constructor(A,E,i){super(new Uint8Array(A),E,i)}}class eF extends HE{constructor(A,E,i){super(new Uint8ClampedArray(A),E,i)}}class tF extends HE{constructor(A,E,i){super(new Int16Array(A),E,i)}}class oP extends HE{constructor(A,E,i){super(new Uint16Array(A),E,i)}}class BF extends HE{constructor(A,E,i){super(new Int32Array(A),E,i)}}class iP extends HE{constructor(A,E,i){super(new Uint32Array(A),E,i)}}class nF extends HE{constructor(A,E,i){super(new Uint16Array(A),E,i),this.isFloat16BufferAttribute=!0}}class yA extends HE{constructor(A,E,i){super(new Float32Array(A),E,i)}}class KF extends HE{constructor(A,E,i){super(new Float64Array(A),E,i)}}let hF=0;const ji=new CE,Mr=new UE,ZR=new M,ui=new Vg,Ue=new Vg,So=new M;class nE extends vg{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hF++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(u0(A)?iP:oP)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,E){return this.attributes[A]=E,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,E,i=0){this.groups.push({start:A,count:E,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(A,E){this.drawRange.start=A,this.drawRange.count=E}applyMatrix4(A){const E=this.attributes.position;E!==void 0&&(E.applyMatrix4(A),E.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const C=new hi().getNormalMatrix(A);i.applyNormalMatrix(C),i.needsUpdate=!0}const g=this.attributes.tangent;return g!==void 0&&(g.transformDirection(A),g.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ji.makeRotationFromQuaternion(A),this.applyMatrix4(ji),this}rotateX(A){return ji.makeRotationX(A),this.applyMatrix4(ji),this}rotateY(A){return ji.makeRotationY(A),this.applyMatrix4(ji),this}rotateZ(A){return ji.makeRotationZ(A),this.applyMatrix4(ji),this}translate(A,E,i){return ji.makeTranslation(A,E,i),this.applyMatrix4(ji),this}scale(A,E,i){return ji.makeScale(A,E,i),this.applyMatrix4(ji),this}lookAt(A){return Mr.lookAt(A),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ZR).negate(),this.translate(ZR.x,ZR.y,ZR.z),this}setFromPoints(A){const E=[];for(let i=0,g=A.length;i<g;i++){const C=A[i];E.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new yA(E,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vg);const A=this.attributes.position,E=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),E)for(let i=0,g=E.length;i<g;i++){const C=E[i];ui.setFromBufferAttribute(C),this.morphTargetsRelative?(So.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(So),So.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(So)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new DC);const A=this.attributes.position,E=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(A){const i=this.boundingSphere.center;if(ui.setFromBufferAttribute(A),E)for(let C=0,I=E.length;C<I;C++){const R=E[C];Ue.setFromBufferAttribute(R),this.morphTargetsRelative?(So.addVectors(ui.min,Ue.min),ui.expandByPoint(So),So.addVectors(ui.max,Ue.max),ui.expandByPoint(So)):(ui.expandByPoint(Ue.min),ui.expandByPoint(Ue.max))}ui.getCenter(i);let g=0;for(let C=0,I=A.count;C<I;C++)So.fromBufferAttribute(A,C),g=Math.max(g,i.distanceToSquared(So));if(E)for(let C=0,I=E.length;C<I;C++){const R=E[C],t=this.morphTargetsRelative;for(let B=0,n=R.count;B<n;B++)So.fromBufferAttribute(R,B),t&&(ZR.fromBufferAttribute(A,B),So.add(ZR)),g=Math.max(g,i.distanceToSquared(So))}this.boundingSphere.radius=Math.sqrt(g),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,E=this.attributes;if(A===null||E.position===void 0||E.normal===void 0||E.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=A.array,g=E.position.array,C=E.normal.array,I=E.uv.array,R=g.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new HE(new Float32Array(4*R),4));const t=this.getAttribute("tangent").array,B=[],n=[];for(let H=0;H<R;H++)B[H]=new M,n[H]=new M;const K=new M,s=new M,r=new M,l=new nA,k=new nA,P=new nA,J=new M,c=new M;function u(H,V,CA){K.fromArray(g,H*3),s.fromArray(g,V*3),r.fromArray(g,CA*3),l.fromArray(I,H*2),k.fromArray(I,V*2),P.fromArray(I,CA*2),s.sub(K),r.sub(K),k.sub(l),P.sub(l);const X=1/(k.x*P.y-P.x*k.y);!isFinite(X)||(J.copy(s).multiplyScalar(P.y).addScaledVector(r,-k.y).multiplyScalar(X),c.copy(r).multiplyScalar(k.x).addScaledVector(s,-P.x).multiplyScalar(X),B[H].add(J),B[V].add(J),B[CA].add(J),n[H].add(c),n[V].add(c),n[CA].add(c))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let H=0,V=S.length;H<V;++H){const CA=S[H],X=CA.start,Y=CA.count;for(let AA=X,EA=X+Y;AA<EA;AA+=3)u(i[AA+0],i[AA+1],i[AA+2])}const T=new M,U=new M,F=new M,d=new M;function p(H){F.fromArray(C,H*3),d.copy(F);const V=B[H];T.copy(V),T.sub(F.multiplyScalar(F.dot(V))).normalize(),U.crossVectors(d,V);const X=U.dot(n[H])<0?-1:1;t[H*4]=T.x,t[H*4+1]=T.y,t[H*4+2]=T.z,t[H*4+3]=X}for(let H=0,V=S.length;H<V;++H){const CA=S[H],X=CA.start,Y=CA.count;for(let AA=X,EA=X+Y;AA<EA;AA+=3)p(i[AA+0]),p(i[AA+1]),p(i[AA+2])}}computeVertexNormals(){const A=this.index,E=this.getAttribute("position");if(E!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new HE(new Float32Array(E.count*3),3),this.setAttribute("normal",i);else for(let s=0,r=i.count;s<r;s++)i.setXYZ(s,0,0,0);const g=new M,C=new M,I=new M,R=new M,t=new M,B=new M,n=new M,K=new M;if(A)for(let s=0,r=A.count;s<r;s+=3){const l=A.getX(s+0),k=A.getX(s+1),P=A.getX(s+2);g.fromBufferAttribute(E,l),C.fromBufferAttribute(E,k),I.fromBufferAttribute(E,P),n.subVectors(I,C),K.subVectors(g,C),n.cross(K),R.fromBufferAttribute(i,l),t.fromBufferAttribute(i,k),B.fromBufferAttribute(i,P),R.add(n),t.add(n),B.add(n),i.setXYZ(l,R.x,R.y,R.z),i.setXYZ(k,t.x,t.y,t.z),i.setXYZ(P,B.x,B.y,B.z)}else for(let s=0,r=E.count;s<r;s+=3)g.fromBufferAttribute(E,s+0),C.fromBufferAttribute(E,s+1),I.fromBufferAttribute(E,s+2),n.subVectors(I,C),K.subVectors(g,C),n.cross(K),i.setXYZ(s+0,n.x,n.y,n.z),i.setXYZ(s+1,n.x,n.y,n.z),i.setXYZ(s+2,n.x,n.y,n.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let E=0,i=A.count;E<i;E++)So.fromBufferAttribute(A,E),So.normalize(),A.setXYZ(E,So.x,So.y,So.z)}toNonIndexed(){function A(R,t){const B=R.array,n=R.itemSize,K=R.normalized,s=new B.constructor(t.length*n);let r=0,l=0;for(let k=0,P=t.length;k<P;k++){R.isInterleavedBufferAttribute?r=t[k]*R.data.stride+R.offset:r=t[k]*n;for(let J=0;J<n;J++)s[l++]=B[r++]}return new HE(s,n,K)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const E=new nE,i=this.index.array,g=this.attributes;for(const R in g){const t=g[R],B=A(t,i);E.setAttribute(R,B)}const C=this.morphAttributes;for(const R in C){const t=[],B=C[R];for(let n=0,K=B.length;n<K;n++){const s=B[n],r=A(s,i);t.push(r)}E.morphAttributes[R]=t}E.morphTargetsRelative=this.morphTargetsRelative;const I=this.groups;for(let R=0,t=I.length;R<t;R++){const B=I[R];E.addGroup(B.start,B.count,B.materialIndex)}return E}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const B in t)t[B]!==void 0&&(A[B]=t[B]);return A}A.data={attributes:{}};const E=this.index;E!==null&&(A.data.index={type:E.array.constructor.name,array:Array.prototype.slice.call(E.array)});const i=this.attributes;for(const t in i){const B=i[t];A.data.attributes[t]=B.toJSON(A.data)}const g={};let C=!1;for(const t in this.morphAttributes){const B=this.morphAttributes[t],n=[];for(let K=0,s=B.length;K<s;K++){const r=B[K];n.push(r.toJSON(A.data))}n.length>0&&(g[t]=n,C=!0)}C&&(A.data.morphAttributes=g,A.data.morphTargetsRelative=this.morphTargetsRelative);const I=this.groups;I.length>0&&(A.data.groups=JSON.parse(JSON.stringify(I)));const R=this.boundingSphere;return R!==null&&(A.data.boundingSphere={center:R.center.toArray(),radius:R.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const E={};this.name=A.name;const i=A.index;i!==null&&this.setIndex(i.clone(E));const g=A.attributes;for(const B in g){const n=g[B];this.setAttribute(B,n.clone(E))}const C=A.morphAttributes;for(const B in C){const n=[],K=C[B];for(let s=0,r=K.length;s<r;s++)n.push(K[s].clone(E));this.morphAttributes[B]=n}this.morphTargetsRelative=A.morphTargetsRelative;const I=A.groups;for(let B=0,n=I.length;B<n;B++){const K=I[B];this.addGroup(K.start,K.count,K.materialIndex)}const R=A.boundingBox;R!==null&&(this.boundingBox=R.clone());const t=A.boundingSphere;return t!==null&&(this.boundingSphere=t.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new CE,jR=new vt,Gr=new DC,LC=new M,zC=new M,vC=new M,Hr=new M,Nr=new M,mr=new M,Un=new M,pn=new M,wn=new M,Fn=new nA,qn=new nA,Mn=new nA,yr=new M,Gn=new M;class To extends UE{constructor(A=new nE,E=new PI){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=E,this.updateMorphTargets()}copy(A,E){return super.copy(A,E),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const E=this.geometry.morphAttributes,i=Object.keys(E);if(i.length>0){const g=E[i[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,I=g.length;C<I;C++){const R=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[R]=C}}}}raycast(A,E){const i=this.geometry,g=this.material,C=this.matrixWorld;if(g===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(C),A.ray.intersectsSphere(Gr)===!1)||(Hu.copy(C).invert(),jR.copy(A.ray).applyMatrix4(Hu),i.boundingBox!==null&&jR.intersectsBox(i.boundingBox)===!1))return;let I;const R=i.index,t=i.attributes.position,B=i.morphAttributes.position,n=i.morphTargetsRelative,K=i.attributes.uv,s=i.attributes.uv2,r=i.groups,l=i.drawRange;if(R!==null)if(Array.isArray(g))for(let k=0,P=r.length;k<P;k++){const J=r[k],c=g[J.materialIndex],u=Math.max(J.start,l.start),S=Math.min(R.count,Math.min(J.start+J.count,l.start+l.count));for(let T=u,U=S;T<U;T+=3){const F=R.getX(T),d=R.getX(T+1),p=R.getX(T+2);I=Hn(this,c,A,jR,t,B,n,K,s,F,d,p),I&&(I.faceIndex=Math.floor(T/3),I.face.materialIndex=J.materialIndex,E.push(I))}}else{const k=Math.max(0,l.start),P=Math.min(R.count,l.start+l.count);for(let J=k,c=P;J<c;J+=3){const u=R.getX(J),S=R.getX(J+1),T=R.getX(J+2);I=Hn(this,g,A,jR,t,B,n,K,s,u,S,T),I&&(I.faceIndex=Math.floor(J/3),E.push(I))}}else if(t!==void 0)if(Array.isArray(g))for(let k=0,P=r.length;k<P;k++){const J=r[k],c=g[J.materialIndex],u=Math.max(J.start,l.start),S=Math.min(t.count,Math.min(J.start+J.count,l.start+l.count));for(let T=u,U=S;T<U;T+=3){const F=T,d=T+1,p=T+2;I=Hn(this,c,A,jR,t,B,n,K,s,F,d,p),I&&(I.faceIndex=Math.floor(T/3),I.face.materialIndex=J.materialIndex,E.push(I))}}else{const k=Math.max(0,l.start),P=Math.min(t.count,l.start+l.count);for(let J=k,c=P;J<c;J+=3){const u=J,S=J+1,T=J+2;I=Hn(this,g,A,jR,t,B,n,K,s,u,S,T),I&&(I.faceIndex=Math.floor(J/3),E.push(I))}}}}function sF(o,A,E,i,g,C,I,R){let t;if(A.side===Ui?t=i.intersectTriangle(I,C,g,!0,R):t=i.intersectTriangle(g,C,I,A.side!==nC,R),t===null)return null;Gn.copy(R),Gn.applyMatrix4(o.matrixWorld);const B=E.ray.origin.distanceTo(Gn);return B<E.near||B>E.far?null:{distance:B,point:Gn.clone(),object:o}}function Hn(o,A,E,i,g,C,I,R,t,B,n,K){LC.fromBufferAttribute(g,B),zC.fromBufferAttribute(g,n),vC.fromBufferAttribute(g,K);const s=o.morphTargetInfluences;if(C&&s){Un.set(0,0,0),pn.set(0,0,0),wn.set(0,0,0);for(let l=0,k=C.length;l<k;l++){const P=s[l],J=C[l];P!==0&&(Hr.fromBufferAttribute(J,B),Nr.fromBufferAttribute(J,n),mr.fromBufferAttribute(J,K),I?(Un.addScaledVector(Hr,P),pn.addScaledVector(Nr,P),wn.addScaledVector(mr,P)):(Un.addScaledVector(Hr.sub(LC),P),pn.addScaledVector(Nr.sub(zC),P),wn.addScaledVector(mr.sub(vC),P)))}LC.add(Un),zC.add(pn),vC.add(wn)}o.isSkinnedMesh&&(o.boneTransform(B,LC),o.boneTransform(n,zC),o.boneTransform(K,vC));const r=sF(o,A,E,i,LC,zC,vC,yr);if(r){R&&(Fn.fromBufferAttribute(R,B),qn.fromBufferAttribute(R,n),Mn.fromBufferAttribute(R,K),r.uv=$i.getUV(yr,LC,zC,vC,Fn,qn,Mn,new nA)),t&&(Fn.fromBufferAttribute(t,B),qn.fromBufferAttribute(t,n),Mn.fromBufferAttribute(t,K),r.uv2=$i.getUV(yr,LC,zC,vC,Fn,qn,Mn,new nA));const l={a:B,b:n,c:K,normal:new M,materialIndex:0};$i.getNormal(LC,zC,vC,l.normal),r.face=l}return r}class JI extends nE{constructor(A=1,E=1,i=1,g=1,C=1,I=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:E,depth:i,widthSegments:g,heightSegments:C,depthSegments:I};const R=this;g=Math.floor(g),C=Math.floor(C),I=Math.floor(I);const t=[],B=[],n=[],K=[];let s=0,r=0;l("z","y","x",-1,-1,i,E,A,I,C,0),l("z","y","x",1,-1,i,E,-A,I,C,1),l("x","z","y",1,1,A,i,E,g,I,2),l("x","z","y",1,-1,A,i,-E,g,I,3),l("x","y","z",1,-1,A,E,i,g,C,4),l("x","y","z",-1,-1,A,E,-i,g,C,5),this.setIndex(t),this.setAttribute("position",new yA(B,3)),this.setAttribute("normal",new yA(n,3)),this.setAttribute("uv",new yA(K,2));function l(k,P,J,c,u,S,T,U,F,d,p){const H=S/F,V=T/d,CA=S/2,X=T/2,Y=U/2,AA=F+1,EA=d+1;let tA=0,w=0;const G=new M;for(let N=0;N<EA;N++){const j=N*V-X;for(let Z=0;Z<AA;Z++){const sA=Z*H-CA;G[k]=sA*c,G[P]=j*u,G[J]=Y,B.push(G.x,G.y,G.z),G[k]=0,G[P]=0,G[J]=U>0?1:-1,n.push(G.x,G.y,G.z),K.push(Z/F),K.push(1-N/d),tA+=1}}for(let N=0;N<d;N++)for(let j=0;j<F;j++){const Z=s+j+AA*N,sA=s+j+AA*(N+1),PA=s+(j+1)+AA*(N+1),NA=s+(j+1)+AA*N;t.push(Z,sA,NA),t.push(sA,PA,NA),w+=6}R.addGroup(r,w,p),r+=w,s+=tA}}static fromJSON(A){return new JI(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function mQ(o){const A={};for(const E in o){A[E]={};for(const i in o[E]){const g=o[E][i];g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion)?A[E][i]=g.clone():Array.isArray(g)?A[E][i]=g.slice():A[E][i]=g}}return A}function _o(o){const A={};for(let E=0;E<o.length;E++){const i=mQ(o[E]);for(const g in i)A[g]=i[g]}return A}function rF(o){const A=[];for(let E=0;E<o.length;E++)A.push(o[E].clone());return A}const Uh={clone:mQ,merge:_o};var aF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pg extends Ho{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aF,this.fragmentShader=kF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=mQ(A.uniforms),this.uniformsGroups=rF(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const E=super.toJSON(A);E.glslVersion=this.glslVersion,E.uniforms={};for(const g in this.uniforms){const I=this.uniforms[g].value;I&&I.isTexture?E.uniforms[g]={type:"t",value:I.toJSON(A).uuid}:I&&I.isColor?E.uniforms[g]={type:"c",value:I.getHex()}:I&&I.isVector2?E.uniforms[g]={type:"v2",value:I.toArray()}:I&&I.isVector3?E.uniforms[g]={type:"v3",value:I.toArray()}:I&&I.isVector4?E.uniforms[g]={type:"v4",value:I.toArray()}:I&&I.isMatrix3?E.uniforms[g]={type:"m3",value:I.toArray()}:I&&I.isMatrix4?E.uniforms[g]={type:"m4",value:I.toArray()}:E.uniforms[g]={value:I}}Object.keys(this.defines).length>0&&(E.defines=this.defines),E.vertexShader=this.vertexShader,E.fragmentShader=this.fragmentShader;const i={};for(const g in this.extensions)this.extensions[g]===!0&&(i[g]=!0);return Object.keys(i).length>0&&(E.extensions=i),E}}class Vt extends UE{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new CE,this.projectionMatrix=new CE,this.projectionMatrixInverse=new CE}copy(A,E){return super.copy(A,E),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const E=this.matrixWorld.elements;return A.set(-E[8],-E[9],-E[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,E){super.updateWorldMatrix(A,E),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class OE extends Vt{constructor(A=50,E=1,i=.1,g=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=i,this.far=g,this.focus=10,this.aspect=E,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,E){return super.copy(A,E),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const E=.5*this.getFilmHeight()/A;this.fov=dt*2*Math.atan(E),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(CR*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(CR*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,E,i,g,C,I){this.aspect=A/E,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=E,this.view.offsetX=i,this.view.offsetY=g,this.view.width=C,this.view.height=I,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let E=A*Math.tan(CR*.5*this.fov)/this.zoom,i=2*E,g=this.aspect*i,C=-.5*g;const I=this.view;if(this.view!==null&&this.view.enabled){const t=I.fullWidth,B=I.fullHeight;C+=I.offsetX*g/t,E-=I.offsetY*i/B,g*=I.width/t,i*=I.height/B}const R=this.filmOffset;R!==0&&(C+=A*R/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+g,E,E-i,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const E=super.toJSON(A);return E.object.fov=this.fov,E.object.zoom=this.zoom,E.object.near=this.near,E.object.far=this.far,E.object.focus=this.focus,E.object.aspect=this.aspect,this.view!==null&&(E.object.view=Object.assign({},this.view)),E.object.filmGauge=this.filmGauge,E.object.filmOffset=this.filmOffset,E}}const bR=90,XR=1;class S0 extends UE{constructor(A,E,i){super(),this.type="CubeCamera",this.renderTarget=i;const g=new OE(bR,XR,A,E);g.layers=this.layers,g.up.set(0,-1,0),g.lookAt(new M(1,0,0)),this.add(g);const C=new OE(bR,XR,A,E);C.layers=this.layers,C.up.set(0,-1,0),C.lookAt(new M(-1,0,0)),this.add(C);const I=new OE(bR,XR,A,E);I.layers=this.layers,I.up.set(0,0,1),I.lookAt(new M(0,1,0)),this.add(I);const R=new OE(bR,XR,A,E);R.layers=this.layers,R.up.set(0,0,-1),R.lookAt(new M(0,-1,0)),this.add(R);const t=new OE(bR,XR,A,E);t.layers=this.layers,t.up.set(0,-1,0),t.lookAt(new M(0,0,1)),this.add(t);const B=new OE(bR,XR,A,E);B.layers=this.layers,B.up.set(0,-1,0),B.lookAt(new M(0,0,-1)),this.add(B)}update(A,E){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[g,C,I,R,t,B]=this.children,n=A.getRenderTarget(),K=A.toneMapping,s=A.xr.enabled;A.toneMapping=kg,A.xr.enabled=!1;const r=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,A.setRenderTarget(i,0),A.render(E,g),A.setRenderTarget(i,1),A.render(E,C),A.setRenderTarget(i,2),A.render(E,I),A.setRenderTarget(i,3),A.render(E,R),A.setRenderTarget(i,4),A.render(E,t),i.texture.generateMipmaps=r,A.setRenderTarget(i,5),A.render(E,B),A.setRenderTarget(n),A.toneMapping=K,A.xr.enabled=s,i.texture.needsPMREMUpdate=!0}}class Yt extends Ko{constructor(A,E,i,g,C,I,R,t,B,n){A=A!==void 0?A:[],E=E!==void 0?E:nI,super(A,E,i,g,C,I,R,t,B,n),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class d0 extends Cg{constructor(A=1,E={}){super(A,A,E),this.isWebGLCubeRenderTarget=!0;const i={width:A,height:A,depth:1},g=[i,i,i,i,i,i];this.texture=new Yt(g,E.mapping,E.wrapS,E.wrapT,E.magFilter,E.minFilter,E.format,E.type,E.anisotropy,E.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=E.generateMipmaps!==void 0?E.generateMipmaps:!1,this.texture.minFilter=E.minFilter!==void 0?E.minFilter:Io}fromEquirectangularTexture(A,E){this.texture.type=E.type,this.texture.encoding=E.encoding,this.texture.generateMipmaps=E.generateMipmaps,this.texture.minFilter=E.minFilter,this.texture.magFilter=E.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},g=new JI(5,5,5),C=new Pg({name:"CubemapFromEquirect",uniforms:mQ(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ui,blending:rC});C.uniforms.tEquirect.value=E;const I=new To(g,C),R=E.minFilter;return E.minFilter===JR&&(E.minFilter=Io),new S0(1,10,this).update(A,I),E.minFilter=R,I.geometry.dispose(),I.material.dispose(),this}clear(A,E,i,g){const C=A.getRenderTarget();for(let I=0;I<6;I++)A.setRenderTarget(this,I),A.clear(E,i,g);A.setRenderTarget(C)}}const xr=new M,lF=new M,PF=new hi;class ZC{constructor(A=new M(1,0,0),E=0){this.isPlane=!0,this.normal=A,this.constant=E}set(A,E){return this.normal.copy(A),this.constant=E,this}setComponents(A,E,i,g){return this.normal.set(A,E,i),this.constant=g,this}setFromNormalAndCoplanarPoint(A,E){return this.normal.copy(A),this.constant=-E.dot(this.normal),this}setFromCoplanarPoints(A,E,i){const g=xr.subVectors(i,E).cross(lF.subVectors(A,E)).normalize();return this.setFromNormalAndCoplanarPoint(g,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,E){return E.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,E){const i=A.delta(xr),g=this.normal.dot(i);if(g===0)return this.distanceToPoint(A.start)===0?E.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/g;return C<0||C>1?null:E.copy(i).multiplyScalar(C).add(A.start)}intersectsLine(A){const E=this.distanceToPoint(A.start),i=this.distanceToPoint(A.end);return E<0&&i>0||i<0&&E>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,E){const i=E||PF.getNormalMatrix(A),g=this.coplanarPoint(xr).applyMatrix4(A),C=this.normal.applyMatrix3(i).normalize();return this.constant=-g.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const WR=new DC,Nn=new M;class ph{constructor(A=new ZC,E=new ZC,i=new ZC,g=new ZC,C=new ZC,I=new ZC){this.planes=[A,E,i,g,C,I]}set(A,E,i,g,C,I){const R=this.planes;return R[0].copy(A),R[1].copy(E),R[2].copy(i),R[3].copy(g),R[4].copy(C),R[5].copy(I),this}copy(A){const E=this.planes;for(let i=0;i<6;i++)E[i].copy(A.planes[i]);return this}setFromProjectionMatrix(A){const E=this.planes,i=A.elements,g=i[0],C=i[1],I=i[2],R=i[3],t=i[4],B=i[5],n=i[6],K=i[7],s=i[8],r=i[9],l=i[10],k=i[11],P=i[12],J=i[13],c=i[14],u=i[15];return E[0].setComponents(R-g,K-t,k-s,u-P).normalize(),E[1].setComponents(R+g,K+t,k+s,u+P).normalize(),E[2].setComponents(R+C,K+B,k+r,u+J).normalize(),E[3].setComponents(R-C,K-B,k-r,u-J).normalize(),E[4].setComponents(R-I,K-n,k-l,u-c).normalize(),E[5].setComponents(R+I,K+n,k+l,u+c).normalize(),this}intersectsObject(A){const E=A.geometry;return E.boundingSphere===null&&E.computeBoundingSphere(),WR.copy(E.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(WR)}intersectsSprite(A){return WR.center.set(0,0,0),WR.radius=.7071067811865476,WR.applyMatrix4(A.matrixWorld),this.intersectsSphere(WR)}intersectsSphere(A){const E=this.planes,i=A.center,g=-A.radius;for(let C=0;C<6;C++)if(E[C].distanceToPoint(i)<g)return!1;return!0}intersectsBox(A){const E=this.planes;for(let i=0;i<6;i++){const g=E[i];if(Nn.x=g.normal.x>0?A.max.x:A.min.x,Nn.y=g.normal.y>0?A.max.y:A.min.y,Nn.z=g.normal.z>0?A.max.z:A.min.z,g.distanceToPoint(Nn)<0)return!1}return!0}containsPoint(A){const E=this.planes;for(let i=0;i<6;i++)if(E[i].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let o=null,A=!1,E=null,i=null;function g(C,I){E(C,I),i=o.requestAnimationFrame(g)}return{start:function(){A!==!0&&E!==null&&(i=o.requestAnimationFrame(g),A=!0)},stop:function(){o.cancelAnimationFrame(i),A=!1},setAnimationLoop:function(C){E=C},setContext:function(C){o=C}}}function JF(o,A){const E=A.isWebGL2,i=new WeakMap;function g(B,n){const K=B.array,s=B.usage,r=o.createBuffer();o.bindBuffer(n,r),o.bufferData(n,K,s),B.onUploadCallback();let l;if(K instanceof Float32Array)l=5126;else if(K instanceof Uint16Array)if(B.isFloat16BufferAttribute)if(E)l=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else l=5123;else if(K instanceof Int16Array)l=5122;else if(K instanceof Uint32Array)l=5125;else if(K instanceof Int32Array)l=5124;else if(K instanceof Int8Array)l=5120;else if(K instanceof Uint8Array)l=5121;else if(K instanceof Uint8ClampedArray)l=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+K);return{buffer:r,type:l,bytesPerElement:K.BYTES_PER_ELEMENT,version:B.version}}function C(B,n,K){const s=n.array,r=n.updateRange;o.bindBuffer(K,B),r.count===-1?o.bufferSubData(K,0,s):(E?o.bufferSubData(K,r.offset*s.BYTES_PER_ELEMENT,s,r.offset,r.count):o.bufferSubData(K,r.offset*s.BYTES_PER_ELEMENT,s.subarray(r.offset,r.offset+r.count)),r.count=-1)}function I(B){return B.isInterleavedBufferAttribute&&(B=B.data),i.get(B)}function R(B){B.isInterleavedBufferAttribute&&(B=B.data);const n=i.get(B);n&&(o.deleteBuffer(n.buffer),i.delete(B))}function t(B,n){if(B.isGLBufferAttribute){const s=i.get(B);(!s||s.version<B.version)&&i.set(B,{buffer:B.buffer,type:B.type,bytesPerElement:B.elementSize,version:B.version});return}B.isInterleavedBufferAttribute&&(B=B.data);const K=i.get(B);K===void 0?i.set(B,g(B,n)):K.version<B.version&&(C(K.buffer,B,n),K.version=B.version)}return{get:I,remove:R,update:t}}class OQ extends nE{constructor(A=1,E=1,i=1,g=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:E,widthSegments:i,heightSegments:g};const C=A/2,I=E/2,R=Math.floor(i),t=Math.floor(g),B=R+1,n=t+1,K=A/R,s=E/t,r=[],l=[],k=[],P=[];for(let J=0;J<n;J++){const c=J*s-I;for(let u=0;u<B;u++){const S=u*K-C;l.push(S,-c,0),k.push(0,0,1),P.push(u/R),P.push(1-J/t)}}for(let J=0;J<t;J++)for(let c=0;c<R;c++){const u=c+B*J,S=c+B*(J+1),T=c+1+B*(J+1),U=c+1+B*J;r.push(u,S,U),r.push(S,T,U)}this.setIndex(r),this.setAttribute("position",new yA(l,3)),this.setAttribute("normal",new yA(k,3)),this.setAttribute("uv",new yA(P,2))}static fromJSON(A){return new OQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var cF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,uF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DF=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,SF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dF=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TF="vec3 transformed = vec3( position );",UF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pF=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,wF=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FF=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qF=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,MF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LF=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vF=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,OF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jF="gl_FragColor = linearToOutputTexel( gl_FragColor );",bF=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_F=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$F=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Aq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iq=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gq=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cq=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iq=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eq=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,tq=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bq=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kq=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,hq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sq=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,rq=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,aq=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kq=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lq=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pq=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sq=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dq=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uq=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pq=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wq=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fq=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qq=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mq=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gq=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Hq=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yq=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xq=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Lq=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zq=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,vq=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vq=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yq=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oq=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Zq=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jq=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bq=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xq=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wq=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_q=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$q=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,oM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,CM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,KM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,aM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,BE={alphamap_fragment:cF,alphamap_pars_fragment:uF,alphatest_fragment:DF,alphatest_pars_fragment:SF,aomap_fragment:dF,aomap_pars_fragment:fF,begin_vertex:TF,beginnormal_vertex:UF,bsdfs:pF,iridescence_fragment:wF,bumpmap_pars_fragment:FF,clipping_planes_fragment:qF,clipping_planes_pars_fragment:MF,clipping_planes_pars_vertex:GF,clipping_planes_vertex:HF,color_fragment:NF,color_pars_fragment:mF,color_pars_vertex:yF,color_vertex:xF,common:LF,cube_uv_reflection_fragment:zF,defaultnormal_vertex:vF,displacementmap_pars_vertex:VF,displacementmap_vertex:YF,emissivemap_fragment:OF,emissivemap_pars_fragment:ZF,encodings_fragment:jF,encodings_pars_fragment:bF,envmap_fragment:XF,envmap_common_pars_fragment:WF,envmap_pars_fragment:_F,envmap_pars_vertex:$F,envmap_physical_pars_fragment:Bq,envmap_vertex:Aq,fog_vertex:Eq,fog_pars_vertex:oq,fog_fragment:iq,fog_pars_fragment:gq,gradientmap_pars_fragment:Cq,lightmap_fragment:Iq,lightmap_pars_fragment:Rq,lights_lambert_fragment:Qq,lights_lambert_pars_fragment:eq,lights_pars_begin:tq,lights_toon_fragment:nq,lights_toon_pars_fragment:Kq,lights_phong_fragment:hq,lights_phong_pars_fragment:sq,lights_physical_fragment:rq,lights_physical_pars_fragment:aq,lights_fragment_begin:kq,lights_fragment_maps:lq,lights_fragment_end:Pq,logdepthbuf_fragment:Jq,logdepthbuf_pars_fragment:cq,logdepthbuf_pars_vertex:uq,logdepthbuf_vertex:Dq,map_fragment:Sq,map_pars_fragment:dq,map_particle_fragment:fq,map_particle_pars_fragment:Tq,metalnessmap_fragment:Uq,metalnessmap_pars_fragment:pq,morphcolor_vertex:wq,morphnormal_vertex:Fq,morphtarget_pars_vertex:qq,morphtarget_vertex:Mq,normal_fragment_begin:Gq,normal_fragment_maps:Hq,normal_pars_fragment:Nq,normal_pars_vertex:mq,normal_vertex:yq,normalmap_pars_fragment:xq,clearcoat_normal_fragment_begin:Lq,clearcoat_normal_fragment_maps:zq,clearcoat_pars_fragment:vq,iridescence_pars_fragment:Vq,output_fragment:Yq,packing:Oq,premultiplied_alpha_fragment:Zq,project_vertex:jq,dithering_fragment:bq,dithering_pars_fragment:Xq,roughnessmap_fragment:Wq,roughnessmap_pars_fragment:_q,shadowmap_pars_fragment:$q,shadowmap_pars_vertex:AM,shadowmap_vertex:EM,shadowmask_pars_fragment:oM,skinbase_vertex:iM,skinning_pars_vertex:gM,skinning_vertex:CM,skinnormal_vertex:IM,specularmap_fragment:RM,specularmap_pars_fragment:QM,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:BM,transmission_pars_fragment:nM,uv_pars_fragment:KM,uv_pars_vertex:hM,uv_vertex:sM,uv2_pars_fragment:rM,uv2_pars_vertex:aM,uv2_vertex:kM,worldpos_vertex:lM,background_vert:PM,background_frag:JM,backgroundCube_vert:cM,backgroundCube_frag:uM,cube_vert:DM,cube_frag:SM,depth_vert:dM,depth_frag:fM,distanceRGBA_vert:TM,distanceRGBA_frag:UM,equirect_vert:pM,equirect_frag:wM,linedashed_vert:FM,linedashed_frag:qM,meshbasic_vert:MM,meshbasic_frag:GM,meshlambert_vert:HM,meshlambert_frag:NM,meshmatcap_vert:mM,meshmatcap_frag:yM,meshnormal_vert:xM,meshnormal_frag:LM,meshphong_vert:zM,meshphong_frag:vM,meshphysical_vert:VM,meshphysical_frag:YM,meshtoon_vert:OM,meshtoon_frag:ZM,points_vert:jM,points_frag:bM,shadow_vert:XM,shadow_frag:WM,sprite_vert:_M,sprite_frag:$M},SA={common:{diffuse:{value:new MA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hi},uv2Transform:{value:new hi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new nA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new MA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new MA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hi}},sprite:{diffuse:{value:new MA(16777215)},opacity:{value:1},center:{value:new nA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hi}}},Ai={basic:{uniforms:_o([SA.common,SA.specularmap,SA.envmap,SA.aomap,SA.lightmap,SA.fog]),vertexShader:BE.meshbasic_vert,fragmentShader:BE.meshbasic_frag},lambert:{uniforms:_o([SA.common,SA.specularmap,SA.envmap,SA.aomap,SA.lightmap,SA.emissivemap,SA.bumpmap,SA.normalmap,SA.displacementmap,SA.fog,SA.lights,{emissive:{value:new MA(0)}}]),vertexShader:BE.meshlambert_vert,fragmentShader:BE.meshlambert_frag},phong:{uniforms:_o([SA.common,SA.specularmap,SA.envmap,SA.aomap,SA.lightmap,SA.emissivemap,SA.bumpmap,SA.normalmap,SA.displacementmap,SA.fog,SA.lights,{emissive:{value:new MA(0)},specular:{value:new MA(1118481)},shininess:{value:30}}]),vertexShader:BE.meshphong_vert,fragmentShader:BE.meshphong_frag},standard:{uniforms:_o([SA.common,SA.envmap,SA.aomap,SA.lightmap,SA.emissivemap,SA.bumpmap,SA.normalmap,SA.displacementmap,SA.roughnessmap,SA.metalnessmap,SA.fog,SA.lights,{emissive:{value:new MA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:BE.meshphysical_vert,fragmentShader:BE.meshphysical_frag},toon:{uniforms:_o([SA.common,SA.aomap,SA.lightmap,SA.emissivemap,SA.bumpmap,SA.normalmap,SA.displacementmap,SA.gradientmap,SA.fog,SA.lights,{emissive:{value:new MA(0)}}]),vertexShader:BE.meshtoon_vert,fragmentShader:BE.meshtoon_frag},matcap:{uniforms:_o([SA.common,SA.bumpmap,SA.normalmap,SA.displacementmap,SA.fog,{matcap:{value:null}}]),vertexShader:BE.meshmatcap_vert,fragmentShader:BE.meshmatcap_frag},points:{uniforms:_o([SA.points,SA.fog]),vertexShader:BE.points_vert,fragmentShader:BE.points_frag},dashed:{uniforms:_o([SA.common,SA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:BE.linedashed_vert,fragmentShader:BE.linedashed_frag},depth:{uniforms:_o([SA.common,SA.displacementmap]),vertexShader:BE.depth_vert,fragmentShader:BE.depth_frag},normal:{uniforms:_o([SA.common,SA.bumpmap,SA.normalmap,SA.displacementmap,{opacity:{value:1}}]),vertexShader:BE.meshnormal_vert,fragmentShader:BE.meshnormal_frag},sprite:{uniforms:_o([SA.sprite,SA.fog]),vertexShader:BE.sprite_vert,fragmentShader:BE.sprite_frag},background:{uniforms:{uvTransform:{value:new hi},t2D:{value:null}},vertexShader:BE.background_vert,fragmentShader:BE.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:BE.backgroundCube_vert,fragmentShader:BE.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:BE.cube_vert,fragmentShader:BE.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:BE.equirect_vert,fragmentShader:BE.equirect_frag},distanceRGBA:{uniforms:_o([SA.common,SA.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:BE.distanceRGBA_vert,fragmentShader:BE.distanceRGBA_frag},shadow:{uniforms:_o([SA.lights,SA.fog,{color:{value:new MA(0)},opacity:{value:1}}]),vertexShader:BE.shadow_vert,fragmentShader:BE.shadow_frag}};Ai.physical={uniforms:_o([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new nA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new MA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new nA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new MA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new MA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:BE.meshphysical_vert,fragmentShader:BE.meshphysical_frag};function AG(o,A,E,i,g,C,I){const R=new MA(0);let t=C===!0?0:1,B,n,K=null,s=0,r=null;function l(P,J){let c=!1,u=J.isScene===!0?J.background:null;u&&u.isTexture&&(u=(J.backgroundBlurriness>0?E:A).get(u));const S=o.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(u=null),u===null?k(R,t):u&&u.isColor&&(k(u,1),c=!0),(o.autoClear||c)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),u&&(u.isCubeTexture||u.mapping===VQ)?(n===void 0&&(n=new To(new JI(1,1,1),new Pg({name:"BackgroundCubeMaterial",uniforms:mQ(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),n.geometry.deleteAttribute("normal"),n.geometry.deleteAttribute("uv"),n.onBeforeRender=function(U,F,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(n.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(n)),n.material.uniforms.envMap.value=u,n.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,n.material.uniforms.backgroundBlurriness.value=J.backgroundBlurriness,(K!==u||s!==u.version||r!==o.toneMapping)&&(n.material.needsUpdate=!0,K=u,s=u.version,r=o.toneMapping),n.layers.enableAll(),P.unshift(n,n.geometry,n.material,0,0,null)):u&&u.isTexture&&(B===void 0&&(B=new To(new OQ(2,2),new Pg({name:"BackgroundMaterial",uniforms:mQ(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:sR,depthTest:!1,depthWrite:!1,fog:!1})),B.geometry.deleteAttribute("normal"),Object.defineProperty(B.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(B)),B.material.uniforms.t2D.value=u,u.matrixAutoUpdate===!0&&u.updateMatrix(),B.material.uniforms.uvTransform.value.copy(u.matrix),(K!==u||s!==u.version||r!==o.toneMapping)&&(B.material.needsUpdate=!0,K=u,s=u.version,r=o.toneMapping),B.layers.enableAll(),P.unshift(B,B.geometry,B.material,0,0,null))}function k(P,J){i.buffers.color.setClear(P.r,P.g,P.b,J,I)}return{getClearColor:function(){return R},setClearColor:function(P,J=1){R.set(P),t=J,k(R,t)},getClearAlpha:function(){return t},setClearAlpha:function(P){t=P,k(R,t)},render:l}}function EG(o,A,E,i){const g=o.getParameter(34921),C=i.isWebGL2?null:A.get("OES_vertex_array_object"),I=i.isWebGL2||C!==null,R={},t=P(null);let B=t,n=!1;function K(Y,AA,EA,tA,w){let G=!1;if(I){const N=k(tA,EA,AA);B!==N&&(B=N,r(B.object)),G=J(Y,tA,EA,w),G&&c(Y,tA,EA,w)}else{const N=AA.wireframe===!0;(B.geometry!==tA.id||B.program!==EA.id||B.wireframe!==N)&&(B.geometry=tA.id,B.program=EA.id,B.wireframe=N,G=!0)}w!==null&&E.update(w,34963),(G||n)&&(n=!1,d(Y,AA,EA,tA),w!==null&&o.bindBuffer(34963,E.get(w).buffer))}function s(){return i.isWebGL2?o.createVertexArray():C.createVertexArrayOES()}function r(Y){return i.isWebGL2?o.bindVertexArray(Y):C.bindVertexArrayOES(Y)}function l(Y){return i.isWebGL2?o.deleteVertexArray(Y):C.deleteVertexArrayOES(Y)}function k(Y,AA,EA){const tA=EA.wireframe===!0;let w=R[Y.id];w===void 0&&(w={},R[Y.id]=w);let G=w[AA.id];G===void 0&&(G={},w[AA.id]=G);let N=G[tA];return N===void 0&&(N=P(s()),G[tA]=N),N}function P(Y){const AA=[],EA=[],tA=[];for(let w=0;w<g;w++)AA[w]=0,EA[w]=0,tA[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:AA,enabledAttributes:EA,attributeDivisors:tA,object:Y,attributes:{},index:null}}function J(Y,AA,EA,tA){const w=B.attributes,G=AA.attributes;let N=0;const j=EA.getAttributes();for(const Z in j)if(j[Z].location>=0){const PA=w[Z];let NA=G[Z];if(NA===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(NA=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(NA=Y.instanceColor)),PA===void 0||PA.attribute!==NA||NA&&PA.data!==NA.data)return!0;N++}return B.attributesNum!==N||B.index!==tA}function c(Y,AA,EA,tA){const w={},G=AA.attributes;let N=0;const j=EA.getAttributes();for(const Z in j)if(j[Z].location>=0){let PA=G[Z];PA===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(PA=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(PA=Y.instanceColor));const NA={};NA.attribute=PA,PA&&PA.data&&(NA.data=PA.data),w[Z]=NA,N++}B.attributes=w,B.attributesNum=N,B.index=tA}function u(){const Y=B.newAttributes;for(let AA=0,EA=Y.length;AA<EA;AA++)Y[AA]=0}function S(Y){T(Y,0)}function T(Y,AA){const EA=B.newAttributes,tA=B.enabledAttributes,w=B.attributeDivisors;EA[Y]=1,tA[Y]===0&&(o.enableVertexAttribArray(Y),tA[Y]=1),w[Y]!==AA&&((i.isWebGL2?o:A.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,AA),w[Y]=AA)}function U(){const Y=B.newAttributes,AA=B.enabledAttributes;for(let EA=0,tA=AA.length;EA<tA;EA++)AA[EA]!==Y[EA]&&(o.disableVertexAttribArray(EA),AA[EA]=0)}function F(Y,AA,EA,tA,w,G){i.isWebGL2===!0&&(EA===5124||EA===5125)?o.vertexAttribIPointer(Y,AA,EA,w,G):o.vertexAttribPointer(Y,AA,EA,tA,w,G)}function d(Y,AA,EA,tA){if(i.isWebGL2===!1&&(Y.isInstancedMesh||tA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;u();const w=tA.attributes,G=EA.getAttributes(),N=AA.defaultAttributeValues;for(const j in G){const Z=G[j];if(Z.location>=0){let sA=w[j];if(sA===void 0&&(j==="instanceMatrix"&&Y.instanceMatrix&&(sA=Y.instanceMatrix),j==="instanceColor"&&Y.instanceColor&&(sA=Y.instanceColor)),sA!==void 0){const PA=sA.normalized,NA=sA.itemSize,$=E.get(sA);if($===void 0)continue;const xA=$.buffer,OA=$.type,WA=$.bytesPerElement;if(sA.isInterleavedBufferAttribute){const dA=sA.data,_A=dA.stride,hA=sA.offset;if(dA.isInstancedInterleavedBuffer){for(let RA=0;RA<Z.locationSize;RA++)T(Z.location+RA,dA.meshPerAttribute);Y.isInstancedMesh!==!0&&tA._maxInstanceCount===void 0&&(tA._maxInstanceCount=dA.meshPerAttribute*dA.count)}else for(let RA=0;RA<Z.locationSize;RA++)S(Z.location+RA);o.bindBuffer(34962,xA);for(let RA=0;RA<Z.locationSize;RA++)F(Z.location+RA,NA/Z.locationSize,OA,PA,_A*WA,(hA+NA/Z.locationSize*RA)*WA)}else{if(sA.isInstancedBufferAttribute){for(let dA=0;dA<Z.locationSize;dA++)T(Z.location+dA,sA.meshPerAttribute);Y.isInstancedMesh!==!0&&tA._maxInstanceCount===void 0&&(tA._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let dA=0;dA<Z.locationSize;dA++)S(Z.location+dA);o.bindBuffer(34962,xA);for(let dA=0;dA<Z.locationSize;dA++)F(Z.location+dA,NA/Z.locationSize,OA,PA,NA*WA,NA/Z.locationSize*dA*WA)}}else if(N!==void 0){const PA=N[j];if(PA!==void 0)switch(PA.length){case 2:o.vertexAttrib2fv(Z.location,PA);break;case 3:o.vertexAttrib3fv(Z.location,PA);break;case 4:o.vertexAttrib4fv(Z.location,PA);break;default:o.vertexAttrib1fv(Z.location,PA)}}}}U()}function p(){CA();for(const Y in R){const AA=R[Y];for(const EA in AA){const tA=AA[EA];for(const w in tA)l(tA[w].object),delete tA[w];delete AA[EA]}delete R[Y]}}function H(Y){if(R[Y.id]===void 0)return;const AA=R[Y.id];for(const EA in AA){const tA=AA[EA];for(const w in tA)l(tA[w].object),delete tA[w];delete AA[EA]}delete R[Y.id]}function V(Y){for(const AA in R){const EA=R[AA];if(EA[Y.id]===void 0)continue;const tA=EA[Y.id];for(const w in tA)l(tA[w].object),delete tA[w];delete EA[Y.id]}}function CA(){X(),n=!0,B!==t&&(B=t,r(B.object))}function X(){t.geometry=null,t.program=null,t.wireframe=!1}return{setup:K,reset:CA,resetDefaultState:X,dispose:p,releaseStatesOfGeometry:H,releaseStatesOfProgram:V,initAttributes:u,enableAttribute:S,disableUnusedAttributes:U}}function oG(o,A,E,i){const g=i.isWebGL2;let C;function I(B){C=B}function R(B,n){o.drawArrays(C,B,n),E.update(n,C,1)}function t(B,n,K){if(K===0)return;let s,r;if(g)s=o,r="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[r](C,B,n,K),E.update(n,C,K)}this.setMode=I,this.render=R,this.renderInstances=t}function iG(o,A,E){let i;function g(){if(i!==void 0)return i;if(A.has("EXT_texture_filter_anisotropic")===!0){const F=A.get("EXT_texture_filter_anisotropic");i=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function C(F){if(F==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const I=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let R=E.precision!==void 0?E.precision:"highp";const t=C(R);t!==R&&(console.warn("THREE.WebGLRenderer:",R,"not supported, using",t,"instead."),R=t);const B=I||A.has("WEBGL_draw_buffers"),n=E.logarithmicDepthBuffer===!0,K=o.getParameter(34930),s=o.getParameter(35660),r=o.getParameter(3379),l=o.getParameter(34076),k=o.getParameter(34921),P=o.getParameter(36347),J=o.getParameter(36348),c=o.getParameter(36349),u=s>0,S=I||A.has("OES_texture_float"),T=u&&S,U=I?o.getParameter(36183):0;return{isWebGL2:I,drawBuffers:B,getMaxAnisotropy:g,getMaxPrecision:C,precision:R,logarithmicDepthBuffer:n,maxTextures:K,maxVertexTextures:s,maxTextureSize:r,maxCubemapSize:l,maxAttributes:k,maxVertexUniforms:P,maxVaryings:J,maxFragmentUniforms:c,vertexTextures:u,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:U}}function gG(o){const A=this;let E=null,i=0,g=!1,C=!1;const I=new ZC,R=new hi,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(K,s,r){const l=K.length!==0||s||i!==0||g;return g=s,E=n(K,r,0),i=K.length,l},this.beginShadows=function(){C=!0,n(null)},this.endShadows=function(){C=!1,B()},this.setState=function(K,s,r){const l=K.clippingPlanes,k=K.clipIntersection,P=K.clipShadows,J=o.get(K);if(!g||l===null||l.length===0||C&&!P)C?n(null):B();else{const c=C?0:i,u=c*4;let S=J.clippingState||null;t.value=S,S=n(l,s,u,r);for(let T=0;T!==u;++T)S[T]=E[T];J.clippingState=S,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=c}};function B(){t.value!==E&&(t.value=E,t.needsUpdate=i>0),A.numPlanes=i,A.numIntersection=0}function n(K,s,r,l){const k=K!==null?K.length:0;let P=null;if(k!==0){if(P=t.value,l!==!0||P===null){const J=r+k*4,c=s.matrixWorldInverse;R.getNormalMatrix(c),(P===null||P.length<J)&&(P=new Float32Array(J));for(let u=0,S=r;u!==k;++u,S+=4)I.copy(K[u]).applyMatrix4(c,R),I.normal.toArray(P,S),P[S+3]=I.constant}t.value=P,t.needsUpdate=!0}return A.numPlanes=k,A.numIntersection=0,P}}function CG(o){let A=new WeakMap;function E(I,R){return R===kt?I.mapping=nI:R===lt&&(I.mapping=KI),I}function i(I){if(I&&I.isTexture&&I.isRenderTargetTexture===!1){const R=I.mapping;if(R===kt||R===lt)if(A.has(I)){const t=A.get(I).texture;return E(t,I.mapping)}else{const t=I.image;if(t&&t.height>0){const B=new d0(t.height/2);return B.fromEquirectangularTexture(o,I),A.set(I,B),I.addEventListener("dispose",g),E(B.texture,I.mapping)}else return null}}return I}function g(I){const R=I.target;R.removeEventListener("dispose",g);const t=A.get(R);t!==void 0&&(A.delete(R),t.dispose())}function C(){A=new WeakMap}return{get:i,dispose:C}}class eI extends Vt{constructor(A=-1,E=1,i=1,g=-1,C=.1,I=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=E,this.top=i,this.bottom=g,this.near=C,this.far=I,this.updateProjectionMatrix()}copy(A,E){return super.copy(A,E),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,E,i,g,C,I){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=E,this.view.offsetX=i,this.view.offsetY=g,this.view.width=C,this.view.height=I,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),E=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,g=(this.top+this.bottom)/2;let C=i-A,I=i+A,R=g+E,t=g-E;if(this.view!==null&&this.view.enabled){const B=(this.right-this.left)/this.view.fullWidth/this.zoom,n=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=B*this.view.offsetX,I=C+B*this.view.width,R-=n*this.view.offsetY,t=R-n*this.view.height}this.projectionMatrix.makeOrthographic(C,I,R,t,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const E=super.toJSON(A);return E.object.zoom=this.zoom,E.object.left=this.left,E.object.right=this.right,E.object.top=this.top,E.object.bottom=this.bottom,E.object.near=this.near,E.object.far=this.far,this.view!==null&&(E.object.view=Object.assign({},this.view)),E}}const PQ=4,Nu=[.125,.215,.35,.446,.526,.582],OI=20,Lr=new eI,mu=new MA;let zr=null;const VI=(1+Math.sqrt(5))/2,_R=1/VI,yu=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,VI,_R),new M(0,VI,-_R),new M(_R,0,VI),new M(-_R,0,VI),new M(VI,_R,0),new M(-VI,_R,0)];class Nk{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,E=0,i=.1,g=100){zr=this._renderer.getRenderTarget(),this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,i,g,C),E>0&&this._blur(C,0,0,E),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,E=null){return this._fromTexture(A,E)}fromCubemap(A,E=null){return this._fromTexture(A,E)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(zr),A.scissorTest=!1,mn(A,0,0,A.width,A.height)}_fromTexture(A,E){A.mapping===nI||A.mapping===KI?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),zr=this._renderer.getRenderTarget();const i=E||this._allocateTargets();return this._textureToCubeUV(A,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),E=4*this._cubeSize,i={magFilter:Io,minFilter:Io,generateMipmaps:!1,type:NQ,format:Si,encoding:JC,depthBuffer:!1},g=xu(A,E,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(A,E,i);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IG(C)),this._blurMaterial=RG(C,A,E)}return g}_compileMaterial(A){const E=new To(this._lodPlanes[0],A);this._renderer.compile(E,Lr)}_sceneToCubeUV(A,E,i,g){const R=new OE(90,1,E,i),t=[1,-1,1,1,1,1],B=[1,1,1,-1,-1,-1],n=this._renderer,K=n.autoClear,s=n.toneMapping;n.getClearColor(mu),n.toneMapping=kg,n.autoClear=!1;const r=new PI({name:"PMREM.Background",side:Ui,depthWrite:!1,depthTest:!1}),l=new To(new JI,r);let k=!1;const P=A.background;P?P.isColor&&(r.color.copy(P),A.background=null,k=!0):(r.color.copy(mu),k=!0);for(let J=0;J<6;J++){const c=J%3;c===0?(R.up.set(0,t[J],0),R.lookAt(B[J],0,0)):c===1?(R.up.set(0,0,t[J]),R.lookAt(0,B[J],0)):(R.up.set(0,t[J],0),R.lookAt(0,0,B[J]));const u=this._cubeSize;mn(g,c*u,J>2?u:0,u,u),n.setRenderTarget(g),k&&n.render(l,R),n.render(A,R)}l.geometry.dispose(),l.material.dispose(),n.toneMapping=s,n.autoClear=K,A.background=P}_textureToCubeUV(A,E){const i=this._renderer,g=A.mapping===nI||A.mapping===KI;g?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const C=g?this._cubemapMaterial:this._equirectMaterial,I=new To(this._lodPlanes[0],C),R=C.uniforms;R.envMap.value=A;const t=this._cubeSize;mn(E,0,0,3*t,2*t),i.setRenderTarget(E),i.render(I,Lr)}_applyPMREM(A){const E=this._renderer,i=E.autoClear;E.autoClear=!1;for(let g=1;g<this._lodPlanes.length;g++){const C=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),I=yu[(g-1)%yu.length];this._blur(A,g-1,g,C,I)}E.autoClear=i}_blur(A,E,i,g,C){const I=this._pingPongRenderTarget;this._halfBlur(A,I,E,i,g,"latitudinal",C),this._halfBlur(I,A,i,i,g,"longitudinal",C)}_halfBlur(A,E,i,g,C,I,R){const t=this._renderer,B=this._blurMaterial;I!=="latitudinal"&&I!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const n=3,K=new To(this._lodPlanes[g],B),s=B.uniforms,r=this._sizeLods[i]-1,l=isFinite(C)?Math.PI/(2*r):2*Math.PI/(2*OI-1),k=C/l,P=isFinite(C)?1+Math.floor(n*k):OI;P>OI&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${P} samples when the maximum is set to ${OI}`);const J=[];let c=0;for(let F=0;F<OI;++F){const d=F/k,p=Math.exp(-d*d/2);J.push(p),F===0?c+=p:F<P&&(c+=2*p)}for(let F=0;F<J.length;F++)J[F]=J[F]/c;s.envMap.value=A.texture,s.samples.value=P,s.weights.value=J,s.latitudinal.value=I==="latitudinal",R&&(s.poleAxis.value=R);const{_lodMax:u}=this;s.dTheta.value=l,s.mipInt.value=u-i;const S=this._sizeLods[g],T=3*S*(g>u-PQ?g-u+PQ:0),U=4*(this._cubeSize-S);mn(E,T,U,3*S,2*S),t.setRenderTarget(E),t.render(K,Lr)}}function IG(o){const A=[],E=[],i=[];let g=o;const C=o-PQ+1+Nu.length;for(let I=0;I<C;I++){const R=Math.pow(2,g);E.push(R);let t=1/R;I>o-PQ?t=Nu[I-o+PQ-1]:I===0&&(t=0),i.push(t);const B=1/(R-2),n=-B,K=1+B,s=[n,n,K,n,K,K,n,n,K,K,n,K],r=6,l=6,k=3,P=2,J=1,c=new Float32Array(k*l*r),u=new Float32Array(P*l*r),S=new Float32Array(J*l*r);for(let U=0;U<r;U++){const F=U%3*2/3-1,d=U>2?0:-1,p=[F,d,0,F+2/3,d,0,F+2/3,d+1,0,F,d,0,F+2/3,d+1,0,F,d+1,0];c.set(p,k*l*U),u.set(s,P*l*U);const H=[U,U,U,U,U,U];S.set(H,J*l*U)}const T=new nE;T.setAttribute("position",new HE(c,k)),T.setAttribute("uv",new HE(u,P)),T.setAttribute("faceIndex",new HE(S,J)),A.push(T),g>PQ&&g--}return{lodPlanes:A,sizeLods:E,sigmas:i}}function xu(o,A,E){const i=new Cg(o,A,E);return i.texture.mapping=VQ,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mn(o,A,E,i,g){o.viewport.set(A,E,i,g),o.scissor.set(A,E,i,g)}function RG(o,A,E){const i=new Float32Array(OI),g=new M(0,1,0);return new Pg({name:"SphericalGaussianBlur",defines:{n:OI,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/E,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:gP(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rC,depthTest:!1,depthWrite:!1})}function Lu(){return new Pg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gP(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rC,depthTest:!1,depthWrite:!1})}function zu(){return new Pg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gP(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rC,depthTest:!1,depthWrite:!1})}function gP(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QG(o){let A=new WeakMap,E=null;function i(R){if(R&&R.isTexture){const t=R.mapping,B=t===kt||t===lt,n=t===nI||t===KI;if(B||n)if(R.isRenderTargetTexture&&R.needsPMREMUpdate===!0){R.needsPMREMUpdate=!1;let K=A.get(R);return E===null&&(E=new Nk(o)),K=B?E.fromEquirectangular(R,K):E.fromCubemap(R,K),A.set(R,K),K.texture}else{if(A.has(R))return A.get(R).texture;{const K=R.image;if(B&&K&&K.height>0||n&&K&&g(K)){E===null&&(E=new Nk(o));const s=B?E.fromEquirectangular(R):E.fromCubemap(R);return A.set(R,s),R.addEventListener("dispose",C),s.texture}else return null}}}return R}function g(R){let t=0;const B=6;for(let n=0;n<B;n++)R[n]!==void 0&&t++;return t===B}function C(R){const t=R.target;t.removeEventListener("dispose",C);const B=A.get(t);B!==void 0&&(A.delete(t),B.dispose())}function I(){A=new WeakMap,E!==null&&(E.dispose(),E=null)}return{get:i,dispose:I}}function eG(o){const A={};function E(i){if(A[i]!==void 0)return A[i];let g;switch(i){case"WEBGL_depth_texture":g=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=o.getExtension(i)}return A[i]=g,g}return{has:function(i){return E(i)!==null},init:function(i){i.isWebGL2?E("EXT_color_buffer_float"):(E("WEBGL_depth_texture"),E("OES_texture_float"),E("OES_texture_half_float"),E("OES_texture_half_float_linear"),E("OES_standard_derivatives"),E("OES_element_index_uint"),E("OES_vertex_array_object"),E("ANGLE_instanced_arrays")),E("OES_texture_float_linear"),E("EXT_color_buffer_half_float"),E("WEBGL_multisampled_render_to_texture")},get:function(i){const g=E(i);return g===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),g}}}function tG(o,A,E,i){const g={},C=new WeakMap;function I(K){const s=K.target;s.index!==null&&A.remove(s.index);for(const l in s.attributes)A.remove(s.attributes[l]);s.removeEventListener("dispose",I),delete g[s.id];const r=C.get(s);r&&(A.remove(r),C.delete(s)),i.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,E.memory.geometries--}function R(K,s){return g[s.id]===!0||(s.addEventListener("dispose",I),g[s.id]=!0,E.memory.geometries++),s}function t(K){const s=K.attributes;for(const l in s)A.update(s[l],34962);const r=K.morphAttributes;for(const l in r){const k=r[l];for(let P=0,J=k.length;P<J;P++)A.update(k[P],34962)}}function B(K){const s=[],r=K.index,l=K.attributes.position;let k=0;if(r!==null){const c=r.array;k=r.version;for(let u=0,S=c.length;u<S;u+=3){const T=c[u+0],U=c[u+1],F=c[u+2];s.push(T,U,U,F,F,T)}}else{const c=l.array;k=l.version;for(let u=0,S=c.length/3-1;u<S;u+=3){const T=u+0,U=u+1,F=u+2;s.push(T,U,U,F,F,T)}}const P=new(u0(s)?iP:oP)(s,1);P.version=k;const J=C.get(K);J&&A.remove(J),C.set(K,P)}function n(K){const s=C.get(K);if(s){const r=K.index;r!==null&&s.version<r.version&&B(K)}else B(K);return C.get(K)}return{get:R,update:t,getWireframeAttribute:n}}function BG(o,A,E,i){const g=i.isWebGL2;let C;function I(s){C=s}let R,t;function B(s){R=s.type,t=s.bytesPerElement}function n(s,r){o.drawElements(C,r,R,s*t),E.update(r,C,1)}function K(s,r,l){if(l===0)return;let k,P;if(g)k=o,P="drawElementsInstanced";else if(k=A.get("ANGLE_instanced_arrays"),P="drawElementsInstancedANGLE",k===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}k[P](C,r,R,s*t,l),E.update(r,C,l)}this.setMode=I,this.setIndex=B,this.render=n,this.renderInstances=K}function nG(o){const A={geometries:0,textures:0},E={frame:0,calls:0,triangles:0,points:0,lines:0};function i(C,I,R){switch(E.calls++,I){case 4:E.triangles+=R*(C/3);break;case 1:E.lines+=R*(C/2);break;case 3:E.lines+=R*(C-1);break;case 2:E.lines+=R*C;break;case 0:E.points+=R*C;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",I);break}}function g(){E.frame++,E.calls=0,E.triangles=0,E.points=0,E.lines=0}return{memory:A,render:E,programs:null,autoReset:!0,reset:g,update:i}}function KG(o,A){return o[0]-A[0]}function hG(o,A){return Math.abs(A[1])-Math.abs(o[1])}function sG(o,A,E){const i={},g=new Float32Array(8),C=new WeakMap,I=new DE,R=[];for(let B=0;B<8;B++)R[B]=[B,0];function t(B,n,K,s){const r=B.morphTargetInfluences;if(A.isWebGL2===!0){const l=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,k=l!==void 0?l.length:0;let P=C.get(n);if(P===void 0||P.count!==k){let AA=function(){X.dispose(),C.delete(n),n.removeEventListener("dispose",AA)};P!==void 0&&P.texture.dispose();const u=n.morphAttributes.position!==void 0,S=n.morphAttributes.normal!==void 0,T=n.morphAttributes.color!==void 0,U=n.morphAttributes.position||[],F=n.morphAttributes.normal||[],d=n.morphAttributes.color||[];let p=0;u===!0&&(p=1),S===!0&&(p=2),T===!0&&(p=3);let H=n.attributes.position.count*p,V=1;H>A.maxTextureSize&&(V=Math.ceil(H/A.maxTextureSize),H=A.maxTextureSize);const CA=new Float32Array(H*V*4*k),X=new zt(CA,H,V,k);X.type=KC,X.needsUpdate=!0;const Y=p*4;for(let EA=0;EA<k;EA++){const tA=U[EA],w=F[EA],G=d[EA],N=H*V*4*EA;for(let j=0;j<tA.count;j++){const Z=j*Y;u===!0&&(I.fromBufferAttribute(tA,j),CA[N+Z+0]=I.x,CA[N+Z+1]=I.y,CA[N+Z+2]=I.z,CA[N+Z+3]=0),S===!0&&(I.fromBufferAttribute(w,j),CA[N+Z+4]=I.x,CA[N+Z+5]=I.y,CA[N+Z+6]=I.z,CA[N+Z+7]=0),T===!0&&(I.fromBufferAttribute(G,j),CA[N+Z+8]=I.x,CA[N+Z+9]=I.y,CA[N+Z+10]=I.z,CA[N+Z+11]=G.itemSize===4?I.w:1)}}P={count:k,texture:X,size:new nA(H,V)},C.set(n,P),n.addEventListener("dispose",AA)}let J=0;for(let u=0;u<r.length;u++)J+=r[u];const c=n.morphTargetsRelative?1:1-J;s.getUniforms().setValue(o,"morphTargetBaseInfluence",c),s.getUniforms().setValue(o,"morphTargetInfluences",r),s.getUniforms().setValue(o,"morphTargetsTexture",P.texture,E),s.getUniforms().setValue(o,"morphTargetsTextureSize",P.size)}else{const l=r===void 0?0:r.length;let k=i[n.id];if(k===void 0||k.length!==l){k=[];for(let S=0;S<l;S++)k[S]=[S,0];i[n.id]=k}for(let S=0;S<l;S++){const T=k[S];T[0]=S,T[1]=r[S]}k.sort(hG);for(let S=0;S<8;S++)S<l&&k[S][1]?(R[S][0]=k[S][0],R[S][1]=k[S][1]):(R[S][0]=Number.MAX_SAFE_INTEGER,R[S][1]=0);R.sort(KG);const P=n.morphAttributes.position,J=n.morphAttributes.normal;let c=0;for(let S=0;S<8;S++){const T=R[S],U=T[0],F=T[1];U!==Number.MAX_SAFE_INTEGER&&F?(P&&n.getAttribute("morphTarget"+S)!==P[U]&&n.setAttribute("morphTarget"+S,P[U]),J&&n.getAttribute("morphNormal"+S)!==J[U]&&n.setAttribute("morphNormal"+S,J[U]),g[S]=F,c+=F):(P&&n.hasAttribute("morphTarget"+S)===!0&&n.deleteAttribute("morphTarget"+S),J&&n.hasAttribute("morphNormal"+S)===!0&&n.deleteAttribute("morphNormal"+S),g[S]=0)}const u=n.morphTargetsRelative?1:1-c;s.getUniforms().setValue(o,"morphTargetBaseInfluence",u),s.getUniforms().setValue(o,"morphTargetInfluences",g)}}return{update:t}}function rG(o,A,E,i){let g=new WeakMap;function C(t){const B=i.render.frame,n=t.geometry,K=A.get(t,n);return g.get(K)!==B&&(A.update(K),g.set(K,B)),t.isInstancedMesh&&(t.hasEventListener("dispose",R)===!1&&t.addEventListener("dispose",R),E.update(t.instanceMatrix,34962),t.instanceColor!==null&&E.update(t.instanceColor,34962)),K}function I(){g=new WeakMap}function R(t){const B=t.target;B.removeEventListener("dispose",R),E.remove(B.instanceMatrix),B.instanceColor!==null&&E.remove(B.instanceColor)}return{update:C,dispose:I}}const T0=new Ko,U0=new zt,p0=new Th,w0=new Yt,vu=[],Vu=[],Yu=new Float32Array(16),Ou=new Float32Array(9),Zu=new Float32Array(4);function ZQ(o,A,E){const i=o[0];if(i<=0||i>0)return o;const g=A*E;let C=vu[g];if(C===void 0&&(C=new Float32Array(g),vu[g]=C),A!==0){i.toArray(C,0);for(let I=1,R=0;I!==A;++I)R+=E,o[I].toArray(C,R)}return C}function ko(o,A){if(o.length!==A.length)return!1;for(let E=0,i=o.length;E<i;E++)if(o[E]!==A[E])return!1;return!0}function lo(o,A){for(let E=0,i=A.length;E<i;E++)o[E]=A[E]}function wh(o,A){let E=Vu[A];E===void 0&&(E=new Int32Array(A),Vu[A]=E);for(let i=0;i!==A;++i)E[i]=o.allocateTextureUnit();return E}function aG(o,A){const E=this.cache;E[0]!==A&&(o.uniform1f(this.addr,A),E[0]=A)}function kG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y)&&(o.uniform2f(this.addr,A.x,A.y),E[0]=A.x,E[1]=A.y);else{if(ko(E,A))return;o.uniform2fv(this.addr,A),lo(E,A)}}function lG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y||E[2]!==A.z)&&(o.uniform3f(this.addr,A.x,A.y,A.z),E[0]=A.x,E[1]=A.y,E[2]=A.z);else if(A.r!==void 0)(E[0]!==A.r||E[1]!==A.g||E[2]!==A.b)&&(o.uniform3f(this.addr,A.r,A.g,A.b),E[0]=A.r,E[1]=A.g,E[2]=A.b);else{if(ko(E,A))return;o.uniform3fv(this.addr,A),lo(E,A)}}function PG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y||E[2]!==A.z||E[3]!==A.w)&&(o.uniform4f(this.addr,A.x,A.y,A.z,A.w),E[0]=A.x,E[1]=A.y,E[2]=A.z,E[3]=A.w);else{if(ko(E,A))return;o.uniform4fv(this.addr,A),lo(E,A)}}function JG(o,A){const E=this.cache,i=A.elements;if(i===void 0){if(ko(E,A))return;o.uniformMatrix2fv(this.addr,!1,A),lo(E,A)}else{if(ko(E,i))return;Zu.set(i),o.uniformMatrix2fv(this.addr,!1,Zu),lo(E,i)}}function cG(o,A){const E=this.cache,i=A.elements;if(i===void 0){if(ko(E,A))return;o.uniformMatrix3fv(this.addr,!1,A),lo(E,A)}else{if(ko(E,i))return;Ou.set(i),o.uniformMatrix3fv(this.addr,!1,Ou),lo(E,i)}}function uG(o,A){const E=this.cache,i=A.elements;if(i===void 0){if(ko(E,A))return;o.uniformMatrix4fv(this.addr,!1,A),lo(E,A)}else{if(ko(E,i))return;Yu.set(i),o.uniformMatrix4fv(this.addr,!1,Yu),lo(E,i)}}function DG(o,A){const E=this.cache;E[0]!==A&&(o.uniform1i(this.addr,A),E[0]=A)}function SG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y)&&(o.uniform2i(this.addr,A.x,A.y),E[0]=A.x,E[1]=A.y);else{if(ko(E,A))return;o.uniform2iv(this.addr,A),lo(E,A)}}function dG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y||E[2]!==A.z)&&(o.uniform3i(this.addr,A.x,A.y,A.z),E[0]=A.x,E[1]=A.y,E[2]=A.z);else{if(ko(E,A))return;o.uniform3iv(this.addr,A),lo(E,A)}}function fG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y||E[2]!==A.z||E[3]!==A.w)&&(o.uniform4i(this.addr,A.x,A.y,A.z,A.w),E[0]=A.x,E[1]=A.y,E[2]=A.z,E[3]=A.w);else{if(ko(E,A))return;o.uniform4iv(this.addr,A),lo(E,A)}}function TG(o,A){const E=this.cache;E[0]!==A&&(o.uniform1ui(this.addr,A),E[0]=A)}function UG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y)&&(o.uniform2ui(this.addr,A.x,A.y),E[0]=A.x,E[1]=A.y);else{if(ko(E,A))return;o.uniform2uiv(this.addr,A),lo(E,A)}}function pG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y||E[2]!==A.z)&&(o.uniform3ui(this.addr,A.x,A.y,A.z),E[0]=A.x,E[1]=A.y,E[2]=A.z);else{if(ko(E,A))return;o.uniform3uiv(this.addr,A),lo(E,A)}}function wG(o,A){const E=this.cache;if(A.x!==void 0)(E[0]!==A.x||E[1]!==A.y||E[2]!==A.z||E[3]!==A.w)&&(o.uniform4ui(this.addr,A.x,A.y,A.z,A.w),E[0]=A.x,E[1]=A.y,E[2]=A.z,E[3]=A.w);else{if(ko(E,A))return;o.uniform4uiv(this.addr,A),lo(E,A)}}function FG(o,A,E){const i=this.cache,g=E.allocateTextureUnit();i[0]!==g&&(o.uniform1i(this.addr,g),i[0]=g),E.setTexture2D(A||T0,g)}function qG(o,A,E){const i=this.cache,g=E.allocateTextureUnit();i[0]!==g&&(o.uniform1i(this.addr,g),i[0]=g),E.setTexture3D(A||p0,g)}function MG(o,A,E){const i=this.cache,g=E.allocateTextureUnit();i[0]!==g&&(o.uniform1i(this.addr,g),i[0]=g),E.setTextureCube(A||w0,g)}function GG(o,A,E){const i=this.cache,g=E.allocateTextureUnit();i[0]!==g&&(o.uniform1i(this.addr,g),i[0]=g),E.setTexture2DArray(A||U0,g)}function HG(o){switch(o){case 5126:return aG;case 35664:return kG;case 35665:return lG;case 35666:return PG;case 35674:return JG;case 35675:return cG;case 35676:return uG;case 5124:case 35670:return DG;case 35667:case 35671:return SG;case 35668:case 35672:return dG;case 35669:case 35673:return fG;case 5125:return TG;case 36294:return UG;case 36295:return pG;case 36296:return wG;case 35678:case 36198:case 36298:case 36306:case 35682:return FG;case 35679:case 36299:case 36307:return qG;case 35680:case 36300:case 36308:case 36293:return MG;case 36289:case 36303:case 36311:case 36292:return GG}}function NG(o,A){o.uniform1fv(this.addr,A)}function mG(o,A){const E=ZQ(A,this.size,2);o.uniform2fv(this.addr,E)}function yG(o,A){const E=ZQ(A,this.size,3);o.uniform3fv(this.addr,E)}function xG(o,A){const E=ZQ(A,this.size,4);o.uniform4fv(this.addr,E)}function LG(o,A){const E=ZQ(A,this.size,4);o.uniformMatrix2fv(this.addr,!1,E)}function zG(o,A){const E=ZQ(A,this.size,9);o.uniformMatrix3fv(this.addr,!1,E)}function vG(o,A){const E=ZQ(A,this.size,16);o.uniformMatrix4fv(this.addr,!1,E)}function VG(o,A){o.uniform1iv(this.addr,A)}function YG(o,A){o.uniform2iv(this.addr,A)}function OG(o,A){o.uniform3iv(this.addr,A)}function ZG(o,A){o.uniform4iv(this.addr,A)}function jG(o,A){o.uniform1uiv(this.addr,A)}function bG(o,A){o.uniform2uiv(this.addr,A)}function XG(o,A){o.uniform3uiv(this.addr,A)}function WG(o,A){o.uniform4uiv(this.addr,A)}function _G(o,A,E){const i=this.cache,g=A.length,C=wh(E,g);ko(i,C)||(o.uniform1iv(this.addr,C),lo(i,C));for(let I=0;I!==g;++I)E.setTexture2D(A[I]||T0,C[I])}function $G(o,A,E){const i=this.cache,g=A.length,C=wh(E,g);ko(i,C)||(o.uniform1iv(this.addr,C),lo(i,C));for(let I=0;I!==g;++I)E.setTexture3D(A[I]||p0,C[I])}function AH(o,A,E){const i=this.cache,g=A.length,C=wh(E,g);ko(i,C)||(o.uniform1iv(this.addr,C),lo(i,C));for(let I=0;I!==g;++I)E.setTextureCube(A[I]||w0,C[I])}function EH(o,A,E){const i=this.cache,g=A.length,C=wh(E,g);ko(i,C)||(o.uniform1iv(this.addr,C),lo(i,C));for(let I=0;I!==g;++I)E.setTexture2DArray(A[I]||U0,C[I])}function oH(o){switch(o){case 5126:return NG;case 35664:return mG;case 35665:return yG;case 35666:return xG;case 35674:return LG;case 35675:return zG;case 35676:return vG;case 5124:case 35670:return VG;case 35667:case 35671:return YG;case 35668:case 35672:return OG;case 35669:case 35673:return ZG;case 5125:return jG;case 36294:return bG;case 36295:return XG;case 36296:return WG;case 35678:case 36198:case 36298:case 36306:case 35682:return _G;case 35679:case 36299:case 36307:return $G;case 35680:case 36300:case 36308:case 36293:return AH;case 36289:case 36303:case 36311:case 36292:return EH}}class iH{constructor(A,E,i){this.id=A,this.addr=i,this.cache=[],this.setValue=HG(E.type)}}class gH{constructor(A,E,i){this.id=A,this.addr=i,this.cache=[],this.size=E.size,this.setValue=oH(E.type)}}class CH{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,E,i){const g=this.seq;for(let C=0,I=g.length;C!==I;++C){const R=g[C];R.setValue(A,E[R.id],i)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function ju(o,A){o.seq.push(A),o.map[A.id]=A}function IH(o,A,E){const i=o.name,g=i.length;for(vr.lastIndex=0;;){const C=vr.exec(i),I=vr.lastIndex;let R=C[1];const t=C[2]==="]",B=C[3];if(t&&(R=R|0),B===void 0||B==="["&&I+2===g){ju(E,B===void 0?new iH(R,o,A):new gH(R,o,A));break}else{let K=E.map[R];K===void 0&&(K=new CH(R),ju(E,K)),E=K}}}class wK{constructor(A,E){this.seq=[],this.map={};const i=A.getProgramParameter(E,35718);for(let g=0;g<i;++g){const C=A.getActiveUniform(E,g),I=A.getUniformLocation(E,C.name);IH(C,I,this)}}setValue(A,E,i,g){const C=this.map[E];C!==void 0&&C.setValue(A,i,g)}setOptional(A,E,i){const g=E[i];g!==void 0&&this.setValue(A,i,g)}static upload(A,E,i,g){for(let C=0,I=E.length;C!==I;++C){const R=E[C],t=i[R.id];t.needsUpdate!==!1&&R.setValue(A,t.value,g)}}static seqWithValue(A,E){const i=[];for(let g=0,C=A.length;g!==C;++g){const I=A[g];I.id in E&&i.push(I)}return i}}function bu(o,A,E){const i=o.createShader(A);return o.shaderSource(i,E),o.compileShader(i),i}let RH=0;function QH(o,A){const E=o.split(`
`),i=[],g=Math.max(A-6,0),C=Math.min(A+6,E.length);for(let I=g;I<C;I++){const R=I+1;i.push(`${R===A?">":" "} ${R}: ${E[I]}`)}return i.join(`
`)}function eH(o){switch(o){case JC:return["Linear","( value )"];case xE:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Xu(o,A,E){const i=o.getShaderParameter(A,35713),g=o.getShaderInfoLog(A).trim();if(i&&g==="")return"";const C=/ERROR: 0:(\d+)/.exec(g);if(C){const I=parseInt(C[1]);return E.toUpperCase()+`

`+g+`

`+QH(o.getShaderSource(A),I)}else return g}function tH(o,A){const E=eH(A);return"vec4 "+o+"( vec4 value ) { return LinearTo"+E[0]+E[1]+"; }"}function BH(o,A){let E;switch(A){case bf:E="Linear";break;case Xf:E="Reinhard";break;case Wf:E="OptimizedCineon";break;case Xl:E="ACESFilmic";break;case _f:E="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),E="Linear"}return"vec3 "+o+"( vec3 color ) { return "+E+"ToneMapping( color ); }"}function nH(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ze).join(`
`)}function KH(o){const A=[];for(const E in o){const i=o[E];i!==!1&&A.push("#define "+E+" "+i)}return A.join(`
`)}function hH(o,A){const E={},i=o.getProgramParameter(A,35721);for(let g=0;g<i;g++){const C=o.getActiveAttrib(A,g),I=C.name;let R=1;C.type===35674&&(R=2),C.type===35675&&(R=3),C.type===35676&&(R=4),E[I]={type:C.type,location:o.getAttribLocation(A,I),locationSize:R}}return E}function ze(o){return o!==""}function Wu(o,A){const E=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,E).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function _u(o,A){return o.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const sH=/^[ \t]*#include +<([\w\d./]+)>/gm;function mk(o){return o.replace(sH,rH)}function rH(o,A){const E=BE[A];if(E===void 0)throw new Error("Can not resolve #include <"+A+">");return mk(E)}const aH=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(o){return o.replace(aH,kH)}function kH(o,A,E,i){let g="";for(let C=parseInt(A);C<parseInt(E);C++)g+=i.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return g}function AD(o){let A="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?A+=`
#define HIGH_PRECISION`:o.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function lH(o){let A="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ol?A="SHADOWMAP_TYPE_PCF":o.shadowMapType===Zl?A="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===kQ&&(A="SHADOWMAP_TYPE_VSM"),A}function PH(o){let A="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case nI:case KI:A="ENVMAP_TYPE_CUBE";break;case VQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function JH(o){let A="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case KI:A="ENVMAP_MODE_REFRACTION";break}return A}function cH(o){let A="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lt:A="ENVMAP_BLENDING_MULTIPLY";break;case Zf:A="ENVMAP_BLENDING_MIX";break;case jf:A="ENVMAP_BLENDING_ADD";break}return A}function uH(o){const A=o.envMapCubeUVHeight;if(A===null)return null;const E=Math.log2(A)-2,i=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,E),7*16)),texelHeight:i,maxMip:E}}function DH(o,A,E,i){const g=o.getContext(),C=E.defines;let I=E.vertexShader,R=E.fragmentShader;const t=lH(E),B=PH(E),n=JH(E),K=cH(E),s=uH(E),r=E.isWebGL2?"":nH(E),l=KH(C),k=g.createProgram();let P,J,c=E.glslVersion?"#version "+E.glslVersion+`
`:"";E.isRawShaderMaterial?(P=[l].filter(ze).join(`
`),P.length>0&&(P+=`
`),J=[r,l].filter(ze).join(`
`),J.length>0&&(J+=`
`)):(P=[AD(E),"#define SHADER_NAME "+E.shaderName,l,E.instancing?"#define USE_INSTANCING":"",E.instancingColor?"#define USE_INSTANCING_COLOR":"",E.supportsVertexTextures?"#define VERTEX_TEXTURES":"",E.useFog&&E.fog?"#define USE_FOG":"",E.useFog&&E.fogExp2?"#define FOG_EXP2":"",E.map?"#define USE_MAP":"",E.envMap?"#define USE_ENVMAP":"",E.envMap?"#define "+n:"",E.lightMap?"#define USE_LIGHTMAP":"",E.aoMap?"#define USE_AOMAP":"",E.emissiveMap?"#define USE_EMISSIVEMAP":"",E.bumpMap?"#define USE_BUMPMAP":"",E.normalMap?"#define USE_NORMALMAP":"",E.normalMap&&E.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",E.normalMap&&E.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",E.clearcoatMap?"#define USE_CLEARCOATMAP":"",E.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",E.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",E.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",E.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",E.displacementMap&&E.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",E.specularMap?"#define USE_SPECULARMAP":"",E.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",E.specularColorMap?"#define USE_SPECULARCOLORMAP":"",E.roughnessMap?"#define USE_ROUGHNESSMAP":"",E.metalnessMap?"#define USE_METALNESSMAP":"",E.alphaMap?"#define USE_ALPHAMAP":"",E.transmission?"#define USE_TRANSMISSION":"",E.transmissionMap?"#define USE_TRANSMISSIONMAP":"",E.thicknessMap?"#define USE_THICKNESSMAP":"",E.sheenColorMap?"#define USE_SHEENCOLORMAP":"",E.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",E.vertexTangents?"#define USE_TANGENT":"",E.vertexColors?"#define USE_COLOR":"",E.vertexAlphas?"#define USE_COLOR_ALPHA":"",E.vertexUvs?"#define USE_UV":"",E.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",E.flatShading?"#define FLAT_SHADED":"",E.skinning?"#define USE_SKINNING":"",E.morphTargets?"#define USE_MORPHTARGETS":"",E.morphNormals&&E.flatShading===!1?"#define USE_MORPHNORMALS":"",E.morphColors&&E.isWebGL2?"#define USE_MORPHCOLORS":"",E.morphTargetsCount>0&&E.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",E.morphTargetsCount>0&&E.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+E.morphTextureStride:"",E.morphTargetsCount>0&&E.isWebGL2?"#define MORPHTARGETS_COUNT "+E.morphTargetsCount:"",E.doubleSided?"#define DOUBLE_SIDED":"",E.flipSided?"#define FLIP_SIDED":"",E.shadowMapEnabled?"#define USE_SHADOWMAP":"",E.shadowMapEnabled?"#define "+t:"",E.sizeAttenuation?"#define USE_SIZEATTENUATION":"",E.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",E.logarithmicDepthBuffer&&E.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ze).join(`
`),J=[r,AD(E),"#define SHADER_NAME "+E.shaderName,l,E.useFog&&E.fog?"#define USE_FOG":"",E.useFog&&E.fogExp2?"#define FOG_EXP2":"",E.map?"#define USE_MAP":"",E.matcap?"#define USE_MATCAP":"",E.envMap?"#define USE_ENVMAP":"",E.envMap?"#define "+B:"",E.envMap?"#define "+n:"",E.envMap?"#define "+K:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",E.lightMap?"#define USE_LIGHTMAP":"",E.aoMap?"#define USE_AOMAP":"",E.emissiveMap?"#define USE_EMISSIVEMAP":"",E.bumpMap?"#define USE_BUMPMAP":"",E.normalMap?"#define USE_NORMALMAP":"",E.normalMap&&E.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",E.normalMap&&E.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",E.clearcoat?"#define USE_CLEARCOAT":"",E.clearcoatMap?"#define USE_CLEARCOATMAP":"",E.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",E.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",E.iridescence?"#define USE_IRIDESCENCE":"",E.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",E.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",E.specularMap?"#define USE_SPECULARMAP":"",E.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",E.specularColorMap?"#define USE_SPECULARCOLORMAP":"",E.roughnessMap?"#define USE_ROUGHNESSMAP":"",E.metalnessMap?"#define USE_METALNESSMAP":"",E.alphaMap?"#define USE_ALPHAMAP":"",E.alphaTest?"#define USE_ALPHATEST":"",E.sheen?"#define USE_SHEEN":"",E.sheenColorMap?"#define USE_SHEENCOLORMAP":"",E.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",E.transmission?"#define USE_TRANSMISSION":"",E.transmissionMap?"#define USE_TRANSMISSIONMAP":"",E.thicknessMap?"#define USE_THICKNESSMAP":"",E.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",E.vertexTangents?"#define USE_TANGENT":"",E.vertexColors||E.instancingColor?"#define USE_COLOR":"",E.vertexAlphas?"#define USE_COLOR_ALPHA":"",E.vertexUvs?"#define USE_UV":"",E.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",E.gradientMap?"#define USE_GRADIENTMAP":"",E.flatShading?"#define FLAT_SHADED":"",E.doubleSided?"#define DOUBLE_SIDED":"",E.flipSided?"#define FLIP_SIDED":"",E.shadowMapEnabled?"#define USE_SHADOWMAP":"",E.shadowMapEnabled?"#define "+t:"",E.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",E.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",E.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",E.logarithmicDepthBuffer&&E.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",E.toneMapping!==kg?"#define TONE_MAPPING":"",E.toneMapping!==kg?BE.tonemapping_pars_fragment:"",E.toneMapping!==kg?BH("toneMapping",E.toneMapping):"",E.dithering?"#define DITHERING":"",E.opaque?"#define OPAQUE":"",BE.encodings_pars_fragment,tH("linearToOutputTexel",E.outputEncoding),E.useDepthPacking?"#define DEPTH_PACKING "+E.depthPacking:"",`
`].filter(ze).join(`
`)),I=mk(I),I=Wu(I,E),I=_u(I,E),R=mk(R),R=Wu(R,E),R=_u(R,E),I=$u(I),R=$u(R),E.isWebGL2&&E.isRawShaderMaterial!==!0&&(c=`#version 300 es
`,P=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+P,J=["#define varying in",E.glslVersion===Gk?"":"layout(location = 0) out highp vec4 pc_fragColor;",E.glslVersion===Gk?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+J);const u=c+P+I,S=c+J+R,T=bu(g,35633,u),U=bu(g,35632,S);if(g.attachShader(k,T),g.attachShader(k,U),E.index0AttributeName!==void 0?g.bindAttribLocation(k,0,E.index0AttributeName):E.morphTargets===!0&&g.bindAttribLocation(k,0,"position"),g.linkProgram(k),o.debug.checkShaderErrors){const p=g.getProgramInfoLog(k).trim(),H=g.getShaderInfoLog(T).trim(),V=g.getShaderInfoLog(U).trim();let CA=!0,X=!0;if(g.getProgramParameter(k,35714)===!1){CA=!1;const Y=Xu(g,T,"vertex"),AA=Xu(g,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(k,35715)+`

Program Info Log: `+p+`
`+Y+`
`+AA)}else p!==""?console.warn("THREE.WebGLProgram: Program Info Log:",p):(H===""||V==="")&&(X=!1);X&&(this.diagnostics={runnable:CA,programLog:p,vertexShader:{log:H,prefix:P},fragmentShader:{log:V,prefix:J}})}g.deleteShader(T),g.deleteShader(U);let F;this.getUniforms=function(){return F===void 0&&(F=new wK(g,k)),F};let d;return this.getAttributes=function(){return d===void 0&&(d=hH(g,k)),d},this.destroy=function(){i.releaseStatesOfProgram(this),g.deleteProgram(k),this.program=void 0},this.name=E.shaderName,this.id=RH++,this.cacheKey=A,this.usedTimes=1,this.program=k,this.vertexShader=T,this.fragmentShader=U,this}let SH=0;class dH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const E=A.vertexShader,i=A.fragmentShader,g=this._getShaderStage(E),C=this._getShaderStage(i),I=this._getShaderCacheForMaterial(A);return I.has(g)===!1&&(I.add(g),g.usedTimes++),I.has(C)===!1&&(I.add(C),C.usedTimes++),this}remove(A){const E=this.materialCache.get(A);for(const i of E)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const E=this.materialCache;let i=E.get(A);return i===void 0&&(i=new Set,E.set(A,i)),i}_getShaderStage(A){const E=this.shaderCache;let i=E.get(A);return i===void 0&&(i=new fH(A),E.set(A,i)),i}}class fH{constructor(A){this.id=SH++,this.code=A,this.usedTimes=0}}function TH(o,A,E,i,g,C,I){const R=new RR,t=new dH,B=[],n=g.isWebGL2,K=g.logarithmicDepthBuffer,s=g.vertexTextures;let r=g.precision;const l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(d,p,H,V,CA){const X=V.fog,Y=CA.geometry,AA=d.isMeshStandardMaterial?V.environment:null,EA=(d.isMeshStandardMaterial?E:A).get(d.envMap||AA),tA=!!EA&&EA.mapping===VQ?EA.image.height:null,w=l[d.type];d.precision!==null&&(r=g.getMaxPrecision(d.precision),r!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",r,"instead."));const G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0;let j=0;Y.morphAttributes.position!==void 0&&(j=1),Y.morphAttributes.normal!==void 0&&(j=2),Y.morphAttributes.color!==void 0&&(j=3);let Z,sA,PA,NA;if(w){const _A=Ai[w];Z=_A.vertexShader,sA=_A.fragmentShader}else Z=d.vertexShader,sA=d.fragmentShader,t.update(d),PA=t.getVertexShaderID(d),NA=t.getFragmentShaderID(d);const $=o.getRenderTarget(),xA=d.alphaTest>0,OA=d.clearcoat>0,WA=d.iridescence>0;return{isWebGL2:n,shaderID:w,shaderName:d.type,vertexShader:Z,fragmentShader:sA,defines:d.defines,customVertexShaderID:PA,customFragmentShaderID:NA,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:r,instancing:CA.isInstancedMesh===!0,instancingColor:CA.isInstancedMesh===!0&&CA.instanceColor!==null,supportsVertexTextures:s,outputEncoding:$===null?o.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:JC,map:!!d.map,matcap:!!d.matcap,envMap:!!EA,envMapMode:EA&&EA.mapping,envMapCubeUVHeight:tA,lightMap:!!d.lightMap,aoMap:!!d.aoMap,emissiveMap:!!d.emissiveMap,bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,objectSpaceNormalMap:d.normalMapType===l0,tangentSpaceNormalMap:d.normalMapType===lI,decodeVideoTexture:!!d.map&&d.map.isVideoTexture===!0&&d.map.encoding===xE,clearcoat:OA,clearcoatMap:OA&&!!d.clearcoatMap,clearcoatRoughnessMap:OA&&!!d.clearcoatRoughnessMap,clearcoatNormalMap:OA&&!!d.clearcoatNormalMap,iridescence:WA,iridescenceMap:WA&&!!d.iridescenceMap,iridescenceThicknessMap:WA&&!!d.iridescenceThicknessMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,specularIntensityMap:!!d.specularIntensityMap,specularColorMap:!!d.specularColorMap,opaque:d.transparent===!1&&d.blending===iR,alphaMap:!!d.alphaMap,alphaTest:xA,gradientMap:!!d.gradientMap,sheen:d.sheen>0,sheenColorMap:!!d.sheenColorMap,sheenRoughnessMap:!!d.sheenRoughnessMap,transmission:d.transmission>0,transmissionMap:!!d.transmissionMap,thicknessMap:!!d.thicknessMap,combine:d.combine,vertexTangents:!!d.normalMap&&!!Y.attributes.tangent,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUvs:!!d.map||!!d.bumpMap||!!d.normalMap||!!d.specularMap||!!d.alphaMap||!!d.emissiveMap||!!d.roughnessMap||!!d.metalnessMap||!!d.clearcoatMap||!!d.clearcoatRoughnessMap||!!d.clearcoatNormalMap||!!d.iridescenceMap||!!d.iridescenceThicknessMap||!!d.displacementMap||!!d.transmissionMap||!!d.thicknessMap||!!d.specularIntensityMap||!!d.specularColorMap||!!d.sheenColorMap||!!d.sheenRoughnessMap,uvsVertexOnly:!(!!d.map||!!d.bumpMap||!!d.normalMap||!!d.specularMap||!!d.alphaMap||!!d.emissiveMap||!!d.roughnessMap||!!d.metalnessMap||!!d.clearcoatNormalMap||!!d.iridescenceMap||!!d.iridescenceThicknessMap||d.transmission>0||!!d.transmissionMap||!!d.thicknessMap||!!d.specularIntensityMap||!!d.specularColorMap||d.sheen>0||!!d.sheenColorMap||!!d.sheenRoughnessMap)&&!!d.displacementMap,fog:!!X,useFog:d.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!d.flatShading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:K,skinning:CA.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numClippingPlanes:I.numPlanes,numClipIntersection:I.numIntersection,dithering:d.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:d.toneMapped?o.toneMapping:kg,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===nC,flipSided:d.side===Ui,useDepthPacking:!!d.depthPacking,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionDerivatives:d.extensions&&d.extensions.derivatives,extensionFragDepth:d.extensions&&d.extensions.fragDepth,extensionDrawBuffers:d.extensions&&d.extensions.drawBuffers,extensionShaderTextureLOD:d.extensions&&d.extensions.shaderTextureLOD,rendererExtensionFragDepth:n||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:n||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:n||i.has("EXT_shader_texture_lod"),customProgramCacheKey:d.customProgramCacheKey()}}function P(d){const p=[];if(d.shaderID?p.push(d.shaderID):(p.push(d.customVertexShaderID),p.push(d.customFragmentShaderID)),d.defines!==void 0)for(const H in d.defines)p.push(H),p.push(d.defines[H]);return d.isRawShaderMaterial===!1&&(J(p,d),c(p,d),p.push(o.outputEncoding)),p.push(d.customProgramCacheKey),p.join()}function J(d,p){d.push(p.precision),d.push(p.outputEncoding),d.push(p.envMapMode),d.push(p.envMapCubeUVHeight),d.push(p.combine),d.push(p.vertexUvs),d.push(p.fogExp2),d.push(p.sizeAttenuation),d.push(p.morphTargetsCount),d.push(p.morphAttributeCount),d.push(p.numDirLights),d.push(p.numPointLights),d.push(p.numSpotLights),d.push(p.numSpotLightMaps),d.push(p.numHemiLights),d.push(p.numRectAreaLights),d.push(p.numDirLightShadows),d.push(p.numPointLightShadows),d.push(p.numSpotLightShadows),d.push(p.numSpotLightShadowsWithMaps),d.push(p.shadowMapType),d.push(p.toneMapping),d.push(p.numClippingPlanes),d.push(p.numClipIntersection),d.push(p.depthPacking)}function c(d,p){R.disableAll(),p.isWebGL2&&R.enable(0),p.supportsVertexTextures&&R.enable(1),p.instancing&&R.enable(2),p.instancingColor&&R.enable(3),p.map&&R.enable(4),p.matcap&&R.enable(5),p.envMap&&R.enable(6),p.lightMap&&R.enable(7),p.aoMap&&R.enable(8),p.emissiveMap&&R.enable(9),p.bumpMap&&R.enable(10),p.normalMap&&R.enable(11),p.objectSpaceNormalMap&&R.enable(12),p.tangentSpaceNormalMap&&R.enable(13),p.clearcoat&&R.enable(14),p.clearcoatMap&&R.enable(15),p.clearcoatRoughnessMap&&R.enable(16),p.clearcoatNormalMap&&R.enable(17),p.iridescence&&R.enable(18),p.iridescenceMap&&R.enable(19),p.iridescenceThicknessMap&&R.enable(20),p.displacementMap&&R.enable(21),p.specularMap&&R.enable(22),p.roughnessMap&&R.enable(23),p.metalnessMap&&R.enable(24),p.gradientMap&&R.enable(25),p.alphaMap&&R.enable(26),p.alphaTest&&R.enable(27),p.vertexColors&&R.enable(28),p.vertexAlphas&&R.enable(29),p.vertexUvs&&R.enable(30),p.vertexTangents&&R.enable(31),p.uvsVertexOnly&&R.enable(32),d.push(R.mask),R.disableAll(),p.fog&&R.enable(0),p.useFog&&R.enable(1),p.flatShading&&R.enable(2),p.logarithmicDepthBuffer&&R.enable(3),p.skinning&&R.enable(4),p.morphTargets&&R.enable(5),p.morphNormals&&R.enable(6),p.morphColors&&R.enable(7),p.premultipliedAlpha&&R.enable(8),p.shadowMapEnabled&&R.enable(9),p.physicallyCorrectLights&&R.enable(10),p.doubleSided&&R.enable(11),p.flipSided&&R.enable(12),p.useDepthPacking&&R.enable(13),p.dithering&&R.enable(14),p.specularIntensityMap&&R.enable(15),p.specularColorMap&&R.enable(16),p.transmission&&R.enable(17),p.transmissionMap&&R.enable(18),p.thicknessMap&&R.enable(19),p.sheen&&R.enable(20),p.sheenColorMap&&R.enable(21),p.sheenRoughnessMap&&R.enable(22),p.decodeVideoTexture&&R.enable(23),p.opaque&&R.enable(24),d.push(R.mask)}function u(d){const p=l[d.type];let H;if(p){const V=Ai[p];H=Uh.clone(V.uniforms)}else H=d.uniforms;return H}function S(d,p){let H;for(let V=0,CA=B.length;V<CA;V++){const X=B[V];if(X.cacheKey===p){H=X,++H.usedTimes;break}}return H===void 0&&(H=new DH(o,p,d,C),B.push(H)),H}function T(d){if(--d.usedTimes===0){const p=B.indexOf(d);B[p]=B[B.length-1],B.pop(),d.destroy()}}function U(d){t.remove(d)}function F(){t.dispose()}return{getParameters:k,getProgramCacheKey:P,getUniforms:u,acquireProgram:S,releaseProgram:T,releaseShaderCache:U,programs:B,dispose:F}}function UH(){let o=new WeakMap;function A(C){let I=o.get(C);return I===void 0&&(I={},o.set(C,I)),I}function E(C){o.delete(C)}function i(C,I,R){o.get(C)[I]=R}function g(){o=new WeakMap}return{get:A,remove:E,update:i,dispose:g}}function pH(o,A){return o.groupOrder!==A.groupOrder?o.groupOrder-A.groupOrder:o.renderOrder!==A.renderOrder?o.renderOrder-A.renderOrder:o.material.id!==A.material.id?o.material.id-A.material.id:o.z!==A.z?o.z-A.z:o.id-A.id}function ED(o,A){return o.groupOrder!==A.groupOrder?o.groupOrder-A.groupOrder:o.renderOrder!==A.renderOrder?o.renderOrder-A.renderOrder:o.z!==A.z?A.z-o.z:o.id-A.id}function oD(){const o=[];let A=0;const E=[],i=[],g=[];function C(){A=0,E.length=0,i.length=0,g.length=0}function I(K,s,r,l,k,P){let J=o[A];return J===void 0?(J={id:K.id,object:K,geometry:s,material:r,groupOrder:l,renderOrder:K.renderOrder,z:k,group:P},o[A]=J):(J.id=K.id,J.object=K,J.geometry=s,J.material=r,J.groupOrder=l,J.renderOrder=K.renderOrder,J.z=k,J.group=P),A++,J}function R(K,s,r,l,k,P){const J=I(K,s,r,l,k,P);r.transmission>0?i.push(J):r.transparent===!0?g.push(J):E.push(J)}function t(K,s,r,l,k,P){const J=I(K,s,r,l,k,P);r.transmission>0?i.unshift(J):r.transparent===!0?g.unshift(J):E.unshift(J)}function B(K,s){E.length>1&&E.sort(K||pH),i.length>1&&i.sort(s||ED),g.length>1&&g.sort(s||ED)}function n(){for(let K=A,s=o.length;K<s;K++){const r=o[K];if(r.id===null)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}}return{opaque:E,transmissive:i,transparent:g,init:C,push:R,unshift:t,finish:n,sort:B}}function wH(){let o=new WeakMap;function A(i,g){const C=o.get(i);let I;return C===void 0?(I=new oD,o.set(i,[I])):g>=C.length?(I=new oD,C.push(I)):I=C[g],I}function E(){o=new WeakMap}return{get:A,dispose:E}}function FH(){const o={};return{get:function(A){if(o[A.id]!==void 0)return o[A.id];let E;switch(A.type){case"DirectionalLight":E={direction:new M,color:new MA};break;case"SpotLight":E={position:new M,direction:new M,color:new MA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":E={position:new M,color:new MA,distance:0,decay:0};break;case"HemisphereLight":E={direction:new M,skyColor:new MA,groundColor:new MA};break;case"RectAreaLight":E={color:new MA,position:new M,halfWidth:new M,halfHeight:new M};break}return o[A.id]=E,E}}}function qH(){const o={};return{get:function(A){if(o[A.id]!==void 0)return o[A.id];let E;switch(A.type){case"DirectionalLight":E={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nA};break;case"SpotLight":E={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nA};break;case"PointLight":E={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nA,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[A.id]=E,E}}}let MH=0;function GH(o,A){return(A.castShadow?2:0)-(o.castShadow?2:0)+(A.map?1:0)-(o.map?1:0)}function HH(o,A){const E=new FH,i=qH(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let n=0;n<9;n++)g.probe.push(new M);const C=new M,I=new CE,R=new CE;function t(n,K){let s=0,r=0,l=0;for(let V=0;V<9;V++)g.probe[V].set(0,0,0);let k=0,P=0,J=0,c=0,u=0,S=0,T=0,U=0,F=0,d=0;n.sort(GH);const p=K!==!0?Math.PI:1;for(let V=0,CA=n.length;V<CA;V++){const X=n[V],Y=X.color,AA=X.intensity,EA=X.distance,tA=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)s+=Y.r*AA*p,r+=Y.g*AA*p,l+=Y.b*AA*p;else if(X.isLightProbe)for(let w=0;w<9;w++)g.probe[w].addScaledVector(X.sh.coefficients[w],AA);else if(X.isDirectionalLight){const w=E.get(X);if(w.color.copy(X.color).multiplyScalar(X.intensity*p),X.castShadow){const G=X.shadow,N=i.get(X);N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,g.directionalShadow[k]=N,g.directionalShadowMap[k]=tA,g.directionalShadowMatrix[k]=X.shadow.matrix,S++}g.directional[k]=w,k++}else if(X.isSpotLight){const w=E.get(X);w.position.setFromMatrixPosition(X.matrixWorld),w.color.copy(Y).multiplyScalar(AA*p),w.distance=EA,w.coneCos=Math.cos(X.angle),w.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),w.decay=X.decay,g.spot[J]=w;const G=X.shadow;if(X.map&&(g.spotLightMap[F]=X.map,F++,G.updateMatrices(X),X.castShadow&&d++),g.spotLightMatrix[J]=G.matrix,X.castShadow){const N=i.get(X);N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,g.spotShadow[J]=N,g.spotShadowMap[J]=tA,U++}J++}else if(X.isRectAreaLight){const w=E.get(X);w.color.copy(Y).multiplyScalar(AA),w.halfWidth.set(X.width*.5,0,0),w.halfHeight.set(0,X.height*.5,0),g.rectArea[c]=w,c++}else if(X.isPointLight){const w=E.get(X);if(w.color.copy(X.color).multiplyScalar(X.intensity*p),w.distance=X.distance,w.decay=X.decay,X.castShadow){const G=X.shadow,N=i.get(X);N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,g.pointShadow[P]=N,g.pointShadowMap[P]=tA,g.pointShadowMatrix[P]=X.shadow.matrix,T++}g.point[P]=w,P++}else if(X.isHemisphereLight){const w=E.get(X);w.skyColor.copy(X.color).multiplyScalar(AA*p),w.groundColor.copy(X.groundColor).multiplyScalar(AA*p),g.hemi[u]=w,u++}}c>0&&(A.isWebGL2||o.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=SA.LTC_FLOAT_1,g.rectAreaLTC2=SA.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(g.rectAreaLTC1=SA.LTC_HALF_1,g.rectAreaLTC2=SA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),g.ambient[0]=s,g.ambient[1]=r,g.ambient[2]=l;const H=g.hash;(H.directionalLength!==k||H.pointLength!==P||H.spotLength!==J||H.rectAreaLength!==c||H.hemiLength!==u||H.numDirectionalShadows!==S||H.numPointShadows!==T||H.numSpotShadows!==U||H.numSpotMaps!==F)&&(g.directional.length=k,g.spot.length=J,g.rectArea.length=c,g.point.length=P,g.hemi.length=u,g.directionalShadow.length=S,g.directionalShadowMap.length=S,g.pointShadow.length=T,g.pointShadowMap.length=T,g.spotShadow.length=U,g.spotShadowMap.length=U,g.directionalShadowMatrix.length=S,g.pointShadowMatrix.length=T,g.spotLightMatrix.length=U+F-d,g.spotLightMap.length=F,g.numSpotLightShadowsWithMaps=d,H.directionalLength=k,H.pointLength=P,H.spotLength=J,H.rectAreaLength=c,H.hemiLength=u,H.numDirectionalShadows=S,H.numPointShadows=T,H.numSpotShadows=U,H.numSpotMaps=F,g.version=MH++)}function B(n,K){let s=0,r=0,l=0,k=0,P=0;const J=K.matrixWorldInverse;for(let c=0,u=n.length;c<u;c++){const S=n[c];if(S.isDirectionalLight){const T=g.directional[s];T.direction.setFromMatrixPosition(S.matrixWorld),C.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(C),T.direction.transformDirection(J),s++}else if(S.isSpotLight){const T=g.spot[l];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(J),T.direction.setFromMatrixPosition(S.matrixWorld),C.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(C),T.direction.transformDirection(J),l++}else if(S.isRectAreaLight){const T=g.rectArea[k];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(J),R.identity(),I.copy(S.matrixWorld),I.premultiply(J),R.extractRotation(I),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(R),T.halfHeight.applyMatrix4(R),k++}else if(S.isPointLight){const T=g.point[r];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(J),r++}else if(S.isHemisphereLight){const T=g.hemi[P];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(J),P++}}}return{setup:t,setupView:B,state:g}}function iD(o,A){const E=new HH(o,A),i=[],g=[];function C(){i.length=0,g.length=0}function I(K){i.push(K)}function R(K){g.push(K)}function t(K){E.setup(i,K)}function B(K){E.setupView(i,K)}return{init:C,state:{lightsArray:i,shadowsArray:g,lights:E},setupLights:t,setupLightsView:B,pushLight:I,pushShadow:R}}function NH(o,A){let E=new WeakMap;function i(C,I=0){const R=E.get(C);let t;return R===void 0?(t=new iD(o,A),E.set(C,[t])):I>=R.length?(t=new iD(o,A),R.push(t)):t=R[I],t}function g(){E=new WeakMap}return{get:i,dispose:g}}class CP extends Ho{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class IP extends Ho{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const mH=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yH=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */SR.ConcurrentRoot=1;SR.ContinuousEventPriority=4;SR.DefaultEventPriority=16;SR.DiscreteEventPriority=1;SR.IdleEventPriority=536870912;SR.LegacyRoot=0;(function(o){o.exports=SR})(AR);function Iy(o){let A;const E=new Set,i=(B,n)=>{const K=typeof B=="function"?B(A):B;if(K!==A){const s=A;A=n?K:Object.assign({},A,K),E.forEach(r=>r(A,s))}},g=()=>A,C=(B,n=g,K=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let s=n(A);function r(){const l=n(A);if(!K(s,l)){const k=s;B(s=l,k)}}return E.add(r),()=>E.delete(r)},t={setState:i,getState:g,subscribe:(B,n,K)=>n||K?C(B,n,K):(E.add(B),()=>E.delete(B)),destroy:()=>E.clear()};return A=o(i,g,t),t}const Ry=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),OD=Ry?TA.exports.useEffect:TA.exports.useLayoutEffect;function Qy(o){const A=typeof o=="function"?Iy(o):o,E=(i=A.getState,g=Object.is)=>{const[,C]=TA.exports.useReducer(P=>P+1,0),I=A.getState(),R=TA.exports.useRef(I),t=TA.exports.useRef(i),B=TA.exports.useRef(g),n=TA.exports.useRef(!1),K=TA.exports.useRef();K.current===void 0&&(K.current=i(I));let s,r=!1;(R.current!==I||t.current!==i||B.current!==g||n.current)&&(s=i(I),r=!g(K.current,s)),OD(()=>{r&&(K.current=s),R.current=I,t.current=i,B.current=g,n.current=!1});const l=TA.exports.useRef(I);OD(()=>{const P=()=>{try{const c=A.getState(),u=t.current(c);B.current(K.current,u)||(R.current=c,K.current=u,C())}catch{n.current=!0,C()}},J=A.subscribe(P);return A.getState()!==l.current&&P(),J},[]);const k=r?s:K.current;return TA.exports.useDebugValue(k),k};return Object.assign(E,A),E[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const i=[E,A];return{next(){const g=i.length<=0;return{value:i.shift(),done:g}}}},E}var S6={exports:{}},Ea={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZD;function ey(){return ZD||(ZD=1,function(o){function A(w,G){var N=w.length;w.push(G);A:for(;0<N;){var j=N-1>>>1,Z=w[j];if(0<g(Z,G))w[j]=G,w[N]=Z,N=j;else break A}}function E(w){return w.length===0?null:w[0]}function i(w){if(w.length===0)return null;var G=w[0],N=w.pop();if(N!==G){w[0]=N;A:for(var j=0,Z=w.length,sA=Z>>>1;j<sA;){var PA=2*(j+1)-1,NA=w[PA],$=PA+1,xA=w[$];if(0>g(NA,N))$<Z&&0>g(xA,NA)?(w[j]=xA,w[$]=N,j=$):(w[j]=NA,w[PA]=N,j=PA);else if($<Z&&0>g(xA,N))w[j]=xA,w[$]=N,j=$;else break A}}return G}function g(w,G){var N=w.sortIndex-G.sortIndex;return N!==0?N:w.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;o.unstable_now=function(){return C.now()}}else{var I=Date,R=I.now();o.unstable_now=function(){return I.now()-R}}var t=[],B=[],n=1,K=null,s=3,r=!1,l=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(w){for(var G=E(B);G!==null;){if(G.callback===null)i(B);else if(G.startTime<=w)i(B),G.sortIndex=G.expirationTime,A(t,G);else break;G=E(B)}}function S(w){if(k=!1,u(w),!l)if(E(t)!==null)l=!0,EA(T);else{var G=E(B);G!==null&&tA(S,G.startTime-w)}}function T(w,G){l=!1,k&&(k=!1,J(d),d=-1),r=!0;var N=s;try{for(u(G),K=E(t);K!==null&&(!(K.expirationTime>G)||w&&!V());){var j=K.callback;if(typeof j=="function"){K.callback=null,s=K.priorityLevel;var Z=j(K.expirationTime<=G);G=o.unstable_now(),typeof Z=="function"?K.callback=Z:K===E(t)&&i(t),u(G)}else i(t);K=E(t)}if(K!==null)var sA=!0;else{var PA=E(B);PA!==null&&tA(S,PA.startTime-G),sA=!1}return sA}finally{K=null,s=N,r=!1}}var U=!1,F=null,d=-1,p=5,H=-1;function V(){return!(o.unstable_now()-H<p)}function CA(){if(F!==null){var w=o.unstable_now();H=w;var G=!0;try{G=F(!0,w)}finally{G?X():(U=!1,F=null)}}else U=!1}var X;if(typeof c=="function")X=function(){c(CA)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,AA=Y.port2;Y.port1.onmessage=CA,X=function(){AA.postMessage(null)}}else X=function(){P(CA,0)};function EA(w){F=w,U||(U=!0,X())}function tA(w,G){d=P(function(){w(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(w){w.callback=null},o.unstable_continueExecution=function(){l||r||(l=!0,EA(T))},o.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<w?Math.floor(1e3/w):5},o.unstable_getCurrentPriorityLevel=function(){return s},o.unstable_getFirstCallbackNode=function(){return E(t)},o.unstable_next=function(w){switch(s){case 1:case 2:case 3:var G=3;break;default:G=s}var N=s;s=G;try{return w()}finally{s=N}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var N=s;s=w;try{return G()}finally{s=N}},o.unstable_scheduleCallback=function(w,G,N){var j=o.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?j+N:j):N=j,w){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,w={id:n++,callback:G,priorityLevel:w,startTime:N,expirationTime:Z,sortIndex:-1},N>j?(w.sortIndex=N,A(B,w),E(t)===null&&w===E(B)&&(k?(J(d),d=-1):k=!0,tA(S,N-j))):(w.sortIndex=Z,A(t,w),l||r||(l=!0,EA(T))),w},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(w){var G=s;return function(){var N=s;s=G;try{return w.apply(this,arguments)}finally{s=N}}}}(oa)),oa}var jD;function ty(){return jD||(jD=1,function(o){o.exports=ey()}(Ea)),Ea.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=function(A){var E={},i=TA.exports,g=ty(),C=Object.assign;function I(Q){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+Q,h=1;h<arguments.length;h++)e+="&args[]="+encodeURIComponent(arguments[h]);return"Minified React error #"+Q+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,t=Symbol.for("react.element"),B=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),r=Symbol.for("react.provider"),l=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),c=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),T=Symbol.iterator;function U(Q){return Q===null||typeof Q!="object"?null:(Q=T&&Q[T]||Q["@@iterator"],typeof Q=="function"?Q:null)}function F(Q){if(Q==null)return null;if(typeof Q=="function")return Q.displayName||Q.name||null;if(typeof Q=="string")return Q;switch(Q){case n:return"Fragment";case B:return"Portal";case s:return"Profiler";case K:return"StrictMode";case P:return"Suspense";case J:return"SuspenseList"}if(typeof Q=="object")switch(Q.$$typeof){case l:return(Q.displayName||"Context")+".Consumer";case r:return(Q._context.displayName||"Context")+".Provider";case k:var e=Q.render;return Q=Q.displayName,Q||(Q=e.displayName||e.name||"",Q=Q!==""?"ForwardRef("+Q+")":"ForwardRef"),Q;case c:return e=Q.displayName||null,e!==null?e:F(Q.type)||"Memo";case u:e=Q._payload,Q=Q._init;try{return F(Q(e))}catch{}}return null}function d(Q){var e=Q.type;switch(Q.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return Q=e.render,Q=Q.displayName||Q.name||"",e.displayName||(Q!==""?"ForwardRef("+Q+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return F(e);case 8:return e===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function p(Q){var e=Q,h=Q;if(Q.alternate)for(;e.return;)e=e.return;else{Q=e;do e=Q,(e.flags&4098)!==0&&(h=e.return),Q=e.return;while(Q)}return e.tag===3?h:null}function H(Q){if(p(Q)!==Q)throw Error(I(188))}function V(Q){var e=Q.alternate;if(!e){if(e=p(Q),e===null)throw Error(I(188));return e!==Q?null:Q}for(var h=Q,a=e;;){var D=h.return;if(D===null)break;var f=D.alternate;if(f===null){if(a=D.return,a!==null){h=a;continue}break}if(D.child===f.child){for(f=D.child;f;){if(f===h)return H(D),Q;if(f===a)return H(D),e;f=f.sibling}throw Error(I(188))}if(h.return!==a.return)h=D,a=f;else{for(var y=!1,v=D.child;v;){if(v===h){y=!0,h=D,a=f;break}if(v===a){y=!0,a=D,h=f;break}v=v.sibling}if(!y){for(v=f.child;v;){if(v===h){y=!0,h=f,a=D;break}if(v===a){y=!0,a=f,h=D;break}v=v.sibling}if(!y)throw Error(I(189))}}if(h.alternate!==a)throw Error(I(190))}if(h.tag!==3)throw Error(I(188));return h.stateNode.current===h?Q:e}function CA(Q){return Q=V(Q),Q!==null?X(Q):null}function X(Q){if(Q.tag===5||Q.tag===6)return Q;for(Q=Q.child;Q!==null;){var e=X(Q);if(e!==null)return e;Q=Q.sibling}return null}function Y(Q){if(Q.tag===5||Q.tag===6)return Q;for(Q=Q.child;Q!==null;){if(Q.tag!==4){var e=Y(Q);if(e!==null)return e}Q=Q.sibling}return null}var AA=Array.isArray,EA=A.getPublicInstance,tA=A.getRootHostContext,w=A.getChildHostContext,G=A.prepareForCommit,N=A.resetAfterCommit,j=A.createInstance,Z=A.appendInitialChild,sA=A.finalizeInitialChildren,PA=A.prepareUpdate,NA=A.shouldSetTextContent,$=A.createTextInstance,xA=A.scheduleTimeout,OA=A.cancelTimeout,WA=A.noTimeout,dA=A.isPrimaryRenderer,_A=A.supportsMutation,hA=A.supportsPersistence,RA=A.supportsHydration,cA=A.getInstanceFromNode,mA=A.preparePortalMount,fA=A.getCurrentEventPriority,AE=A.detachDeletedInstance,ZA=A.supportsMicrotasks,YA=A.scheduleMicrotask,lE=A.supportsTestSelectors,pE=A.findFiberRoot,x=A.getBoundingRect,q=A.getTextContent,oA=A.isHiddenSubtree,kA=A.matchAccessibilityRole,uA=A.setFocusIfFocusable,UA=A.setupIntersectionObserver,$A=A.appendChild,pA=A.appendChildToContainer,BA=A.commitTextUpdate,LA=A.commitMount,L=A.commitUpdate,iA=A.insertBefore,aA=A.insertInContainerBefore,DA=A.removeChild,bA=A.removeChildFromContainer,hE=A.resetTextContent,mE=A.hideInstance,z=A.hideTextInstance,IA=A.unhideInstance,rA=A.unhideTextInstance,qA=A.clearContainer,vA=A.cloneInstance,JE=A.createContainerChildSet,Eo=A.appendChildToContainerChildSet,Po=A.finalizeContainerChildren,ug=A.replaceContainerChildren,qE=A.cloneHiddenInstance,Gi=A.cloneHiddenTextInstance,Ci=A.canHydrateInstance,IB=A.canHydrateTextInstance,vh=A.canHydrateSuspenseInstance,RB=A.isSuspenseInstancePending,_Q=A.isSuspenseInstanceFallback,m=A.registerSuspenseInstanceRetry,W=A.getNextHydratableSibling,eA=A.getFirstHydratableChild,b=A.getFirstHydratableChildWithinContainer,KA=A.getFirstHydratableChildWithinSuspenseInstance,jA=A.hydrateInstance,EE=A.hydrateTextInstance,eE=A.hydrateSuspenseInstance,RE=A.getNextHydratableInstanceAfterSuspenseInstance,cE=A.commitHydratedContainer,sE=A.commitHydratedSuspenseInstance,kE=A.clearSuspenseBoundary,zE=A.clearSuspenseBoundaryFromContainer,Og=A.shouldDeleteUnhydratedTailInstances,dC=A.didNotMatchHydratedContainerTextInstance,fC=A.didNotMatchHydratedTextInstance,Ii;function rE(Q){if(Ii===void 0)try{throw Error()}catch(h){var e=h.stack.trim().match(/\n( *(at )?)/);Ii=e&&e[1]||""}return`
`+Ii+Q}var Dg=!1;function vE(Q,e){if(!Q||Dg)return"";Dg=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(JA){var a=JA}Reflect.construct(Q,[],e)}else{try{e.call()}catch(JA){a=JA}Q.call(e.prototype)}else{try{throw Error()}catch(JA){a=JA}Q()}}catch(JA){if(JA&&a&&typeof JA.stack=="string"){for(var D=JA.stack.split(`
`),f=a.stack.split(`
`),y=D.length-1,v=f.length-1;1<=y&&0<=v&&D[y]!==f[v];)v--;for(;1<=y&&0<=v;y--,v--)if(D[y]!==f[v]){if(y!==1||v!==1)do if(y--,v--,0>v||D[y]!==f[v]){var QA=`
`+D[y].replace(" at new "," at ");return Q.displayName&&QA.includes("<anonymous>")&&(QA=QA.replace("<anonymous>",Q.displayName)),QA}while(1<=y&&0<=v);break}}}finally{Dg=!1,Error.prepareStackTrace=h}return(Q=Q?Q.displayName||Q.name:"")?rE(Q):""}var Ri=Object.prototype.hasOwnProperty,Hi=[],Ni=-1;function mi(Q){return{current:Q}}function QE(Q){0>Ni||(Q.current=Hi[Ni],Hi[Ni]=null,Ni--)}function PE(Q,e){Ni++,Hi[Ni]=Q.current,Q.current=e}var yi={},wE=mi(yi),Jo=mi(!1),Zg=yi;function jg(Q,e){var h=Q.type.contextTypes;if(!h)return yi;var a=Q.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var D={},f;for(f in h)D[f]=e[f];return a&&(Q=Q.stateNode,Q.__reactInternalMemoizedUnmaskedChildContext=e,Q.__reactInternalMemoizedMaskedChildContext=D),D}function Qi(Q){return Q=Q.childContextTypes,Q!=null}function QB(){QE(Jo),QE(wE)}function NP(Q,e,h){if(wE.current!==yi)throw Error(I(168));PE(wE,e),PE(Jo,h)}function mP(Q,e,h){var a=Q.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return h;a=a.getChildContext();for(var D in a)if(!(D in e))throw Error(I(108,d(Q)||"Unknown",D));return C({},h,a)}function eB(Q){return Q=(Q=Q.stateNode)&&Q.__reactInternalMemoizedMergedChildContext||yi,Zg=wE.current,PE(wE,Q),PE(Jo,Jo.current),!0}function yP(Q,e,h){var a=Q.stateNode;if(!a)throw Error(I(169));h?(Q=mP(Q,e,Zg),a.__reactInternalMemoizedMergedChildContext=Q,QE(Jo),QE(wE),PE(wE,Q)):QE(Jo),PE(Jo,h)}var Ig=Math.clz32?Math.clz32:Z6,Y6=Math.log,O6=Math.LN2;function Z6(Q){return Q>>>=0,Q===0?32:31-(Y6(Q)/O6|0)|0}var tB=64,BB=4194304;function $Q(Q){switch(Q&-Q){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return Q&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return Q&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return Q}}function nB(Q,e){var h=Q.pendingLanes;if(h===0)return 0;var a=0,D=Q.suspendedLanes,f=Q.pingedLanes,y=h&268435455;if(y!==0){var v=y&~D;v!==0?a=$Q(v):(f&=y,f!==0&&(a=$Q(f)))}else y=h&~D,y!==0?a=$Q(y):f!==0&&(a=$Q(f));if(a===0)return 0;if(e!==0&&e!==a&&(e&D)===0&&(D=a&-a,f=e&-e,D>=f||D===16&&(f&4194240)!==0))return e;if((a&4)!==0&&(a|=h&16),e=Q.entangledLanes,e!==0)for(Q=Q.entanglements,e&=a;0<e;)h=31-Ig(e),D=1<<h,a|=Q[h],e&=~D;return a}function j6(Q,e){switch(Q){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b6(Q,e){for(var h=Q.suspendedLanes,a=Q.pingedLanes,D=Q.expirationTimes,f=Q.pendingLanes;0<f;){var y=31-Ig(f),v=1<<y,QA=D[y];QA===-1?((v&h)===0||(v&a)!==0)&&(D[y]=j6(v,e)):QA<=e&&(Q.expiredLanes|=v),f&=~v}}function Vh(Q){return Q=Q.pendingLanes&-1073741825,Q!==0?Q:Q&1073741824?1073741824:0}function Yh(Q){for(var e=[],h=0;31>h;h++)e.push(Q);return e}function Ae(Q,e,h){Q.pendingLanes|=e,e!==536870912&&(Q.suspendedLanes=0,Q.pingedLanes=0),Q=Q.eventTimes,e=31-Ig(e),Q[e]=h}function X6(Q,e){var h=Q.pendingLanes&~e;Q.pendingLanes=e,Q.suspendedLanes=0,Q.pingedLanes=0,Q.expiredLanes&=e,Q.mutableReadLanes&=e,Q.entangledLanes&=e,e=Q.entanglements;var a=Q.eventTimes;for(Q=Q.expirationTimes;0<h;){var D=31-Ig(h),f=1<<D;e[D]=0,a[D]=-1,Q[D]=-1,h&=~f}}function Oh(Q,e){var h=Q.entangledLanes|=e;for(Q=Q.entanglements;h;){var a=31-Ig(h),D=1<<a;D&e|Q[a]&e&&(Q[a]|=e),h&=~D}}var dE=0;function xP(Q){return Q&=-Q,1<Q?4<Q?(Q&268435455)!==0?16:536870912:4:1}var Zh=g.unstable_scheduleCallback,LP=g.unstable_cancelCallback,W6=g.unstable_shouldYield,_6=g.unstable_requestPaint,co=g.unstable_now,jh=g.unstable_ImmediatePriority,$6=g.unstable_UserBlockingPriority,bh=g.unstable_NormalPriority,AT=g.unstable_IdlePriority,KB=null,Sg=null;function ET(Q){if(Sg&&typeof Sg.onCommitFiberRoot=="function")try{Sg.onCommitFiberRoot(KB,Q,void 0,(Q.current.flags&128)===128)}catch{}}function oT(Q,e){return Q===e&&(Q!==0||1/Q===1/e)||Q!==Q&&e!==e}var dg=typeof Object.is=="function"?Object.is:oT,bg=null,hB=!1,Xh=!1;function zP(Q){bg===null?bg=[Q]:bg.push(Q)}function iT(Q){hB=!0,zP(Q)}function fg(){if(!Xh&&bg!==null){Xh=!0;var Q=0,e=dE;try{var h=bg;for(dE=1;Q<h.length;Q++){var a=h[Q];do a=a(!0);while(a!==null)}bg=null,hB=!1}catch(D){throw bg!==null&&(bg=bg.slice(Q+1)),Zh(jh,fg),D}finally{dE=e,Xh=!1}}return null}var gT=R.ReactCurrentBatchConfig;function sB(Q,e){if(dg(Q,e))return!0;if(typeof Q!="object"||Q===null||typeof e!="object"||e===null)return!1;var h=Object.keys(Q),a=Object.keys(e);if(h.length!==a.length)return!1;for(a=0;a<h.length;a++){var D=h[a];if(!Ri.call(e,D)||!dg(Q[D],e[D]))return!1}return!0}function CT(Q){switch(Q.tag){case 5:return rE(Q.type);case 16:return rE("Lazy");case 13:return rE("Suspense");case 19:return rE("SuspenseList");case 0:case 2:case 15:return Q=vE(Q.type,!1),Q;case 11:return Q=vE(Q.type.render,!1),Q;case 1:return Q=vE(Q.type,!0),Q;default:return""}}function Rg(Q,e){if(Q&&Q.defaultProps){e=C({},e),Q=Q.defaultProps;for(var h in Q)e[h]===void 0&&(e[h]=Q[h]);return e}return e}var rB=mi(null),aB=null,dR=null,Wh=null;function _h(){Wh=dR=aB=null}function vP(Q,e,h){dA?(PE(rB,e._currentValue),e._currentValue=h):(PE(rB,e._currentValue2),e._currentValue2=h)}function $h(Q){var e=rB.current;QE(rB),dA?Q._currentValue=e:Q._currentValue2=e}function As(Q,e,h){for(;Q!==null;){var a=Q.alternate;if((Q.childLanes&e)!==e?(Q.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),Q===h)break;Q=Q.return}}function fR(Q,e){aB=Q,Wh=dR=null,Q=Q.dependencies,Q!==null&&Q.firstContext!==null&&((Q.lanes&e)!==0&&(Pi=!0),Q.firstContext=null)}function xi(Q){var e=dA?Q._currentValue:Q._currentValue2;if(Wh!==Q)if(Q={context:Q,memoizedValue:e,next:null},dR===null){if(aB===null)throw Error(I(308));dR=Q,aB.dependencies={lanes:0,firstContext:Q}}else dR=dR.next=Q;return e}var Tg=null,TC=!1;function Es(Q){Q.updateQueue={baseState:Q.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function VP(Q,e){Q=Q.updateQueue,e.updateQueue===Q&&(e.updateQueue={baseState:Q.baseState,firstBaseUpdate:Q.firstBaseUpdate,lastBaseUpdate:Q.lastBaseUpdate,shared:Q.shared,effects:Q.effects})}function Xg(Q,e){return{eventTime:Q,lane:e,tag:0,payload:null,callback:null,next:null}}function UC(Q,e){var h=Q.updateQueue;h!==null&&(h=h.shared,Qo!==null&&(Q.mode&1)!==0&&(KE&2)===0?(Q=h.interleaved,Q===null?(e.next=e,Tg===null?Tg=[h]:Tg.push(h)):(e.next=Q.next,Q.next=e),h.interleaved=e):(Q=h.pending,Q===null?e.next=e:(e.next=Q.next,Q.next=e),h.pending=e))}function kB(Q,e,h){if(e=e.updateQueue,e!==null&&(e=e.shared,(h&4194240)!==0)){var a=e.lanes;a&=Q.pendingLanes,h|=a,e.lanes=h,Oh(Q,h)}}function YP(Q,e){var h=Q.updateQueue,a=Q.alternate;if(a!==null&&(a=a.updateQueue,h===a)){var D=null,f=null;if(h=h.firstBaseUpdate,h!==null){do{var y={eventTime:h.eventTime,lane:h.lane,tag:h.tag,payload:h.payload,callback:h.callback,next:null};f===null?D=f=y:f=f.next=y,h=h.next}while(h!==null);f===null?D=f=e:f=f.next=e}else D=f=e;h={baseState:a.baseState,firstBaseUpdate:D,lastBaseUpdate:f,shared:a.shared,effects:a.effects},Q.updateQueue=h;return}Q=h.lastBaseUpdate,Q===null?h.firstBaseUpdate=e:Q.next=e,h.lastBaseUpdate=e}function lB(Q,e,h,a){var D=Q.updateQueue;TC=!1;var f=D.firstBaseUpdate,y=D.lastBaseUpdate,v=D.shared.pending;if(v!==null){D.shared.pending=null;var QA=v,JA=QA.next;QA.next=null,y===null?f=JA:y.next=JA,y=QA;var HA=Q.alternate;HA!==null&&(HA=HA.updateQueue,v=HA.lastBaseUpdate,v!==y&&(v===null?HA.firstBaseUpdate=JA:v.next=JA,HA.lastBaseUpdate=QA))}if(f!==null){var oE=D.baseState;y=0,HA=JA=QA=null,v=f;do{var XA=v.lane,ME=v.eventTime;if((a&XA)===XA){HA!==null&&(HA=HA.next={eventTime:ME,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});A:{var VA=Q,xo=v;switch(XA=e,ME=h,xo.tag){case 1:if(VA=xo.payload,typeof VA=="function"){oE=VA.call(ME,oE,XA);break A}oE=VA;break A;case 3:VA.flags=VA.flags&-65537|128;case 0:if(VA=xo.payload,XA=typeof VA=="function"?VA.call(ME,oE,XA):VA,XA==null)break A;oE=C({},oE,XA);break A;case 2:TC=!0}}v.callback!==null&&v.lane!==0&&(Q.flags|=64,XA=D.effects,XA===null?D.effects=[v]:XA.push(v))}else ME={eventTime:ME,lane:XA,tag:v.tag,payload:v.payload,callback:v.callback,next:null},HA===null?(JA=HA=ME,QA=oE):HA=HA.next=ME,y|=XA;if(v=v.next,v===null){if(v=D.shared.pending,v===null)break;XA=v,v=XA.next,XA.next=null,D.lastBaseUpdate=XA,D.shared.pending=null}}while(1);if(HA===null&&(QA=oE),D.baseState=QA,D.firstBaseUpdate=JA,D.lastBaseUpdate=HA,e=D.shared.interleaved,e!==null){D=e;do y|=D.lane,D=D.next;while(D!==e)}else f===null&&(D.shared.lanes=0);HR|=y,Q.lanes=y,Q.memoizedState=oE}}function OP(Q,e,h){if(Q=e.effects,e.effects=null,Q!==null)for(e=0;e<Q.length;e++){var a=Q[e],D=a.callback;if(D!==null){if(a.callback=null,a=h,typeof D!="function")throw Error(I(191,D));D.call(a)}}}var ZP=new i.Component().refs;function os(Q,e,h,a){e=Q.memoizedState,h=h(a,e),h=h==null?e:C({},e,h),Q.memoizedState=h,Q.lanes===0&&(Q.updateQueue.baseState=h)}var PB={isMounted:function(Q){return(Q=Q._reactInternals)?p(Q)===Q:!1},enqueueSetState:function(Q,e,h){Q=Q._reactInternals;var a=Xo(),D=FC(Q),f=Xg(a,D);f.payload=e,h!=null&&(f.callback=h),UC(Q,f),e=Yi(Q,D,a),e!==null&&kB(e,Q,D)},enqueueReplaceState:function(Q,e,h){Q=Q._reactInternals;var a=Xo(),D=FC(Q),f=Xg(a,D);f.tag=1,f.payload=e,h!=null&&(f.callback=h),UC(Q,f),e=Yi(Q,D,a),e!==null&&kB(e,Q,D)},enqueueForceUpdate:function(Q,e){Q=Q._reactInternals;var h=Xo(),a=FC(Q),D=Xg(h,a);D.tag=2,e!=null&&(D.callback=e),UC(Q,D),e=Yi(Q,a,h),e!==null&&kB(e,Q,a)}};function jP(Q,e,h,a,D,f,y){return Q=Q.stateNode,typeof Q.shouldComponentUpdate=="function"?Q.shouldComponentUpdate(a,f,y):e.prototype&&e.prototype.isPureReactComponent?!sB(h,a)||!sB(D,f):!0}function bP(Q,e,h){var a=!1,D=yi,f=e.contextType;return typeof f=="object"&&f!==null?f=xi(f):(D=Qi(e)?Zg:wE.current,a=e.contextTypes,f=(a=a!=null)?jg(Q,D):yi),e=new e(h,f),Q.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=PB,Q.stateNode=e,e._reactInternals=Q,a&&(Q=Q.stateNode,Q.__reactInternalMemoizedUnmaskedChildContext=D,Q.__reactInternalMemoizedMaskedChildContext=f),e}function XP(Q,e,h,a){Q=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(h,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(h,a),e.state!==Q&&PB.enqueueReplaceState(e,e.state,null)}function is(Q,e,h,a){var D=Q.stateNode;D.props=h,D.state=Q.memoizedState,D.refs=ZP,Es(Q);var f=e.contextType;typeof f=="object"&&f!==null?D.context=xi(f):(f=Qi(e)?Zg:wE.current,D.context=jg(Q,f)),D.state=Q.memoizedState,f=e.getDerivedStateFromProps,typeof f=="function"&&(os(Q,e,f,h),D.state=Q.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof D.getSnapshotBeforeUpdate=="function"||typeof D.UNSAFE_componentWillMount!="function"&&typeof D.componentWillMount!="function"||(e=D.state,typeof D.componentWillMount=="function"&&D.componentWillMount(),typeof D.UNSAFE_componentWillMount=="function"&&D.UNSAFE_componentWillMount(),e!==D.state&&PB.enqueueReplaceState(D,D.state,null),lB(Q,h,D,a),D.state=Q.memoizedState),typeof D.componentDidMount=="function"&&(Q.flags|=4194308)}var TR=[],UR=0,JB=null,cB=0,Li=[],zi=0,uI=null,Wg=1,_g="";function DI(Q,e){TR[UR++]=cB,TR[UR++]=JB,JB=Q,cB=e}function WP(Q,e,h){Li[zi++]=Wg,Li[zi++]=_g,Li[zi++]=uI,uI=Q;var a=Wg;Q=_g;var D=32-Ig(a)-1;a&=~(1<<D),h+=1;var f=32-Ig(e)+D;if(30<f){var y=D-D%5;f=(a&(1<<y)-1).toString(32),a>>=y,D-=y,Wg=1<<32-Ig(e)+D|h<<D|a,_g=f+Q}else Wg=1<<f|h<<D|a,_g=Q}function gs(Q){Q.return!==null&&(DI(Q,1),WP(Q,1,0))}function Cs(Q){for(;Q===JB;)JB=TR[--UR],TR[UR]=null,cB=TR[--UR],TR[UR]=null;for(;Q===uI;)uI=Li[--zi],Li[zi]=null,_g=Li[--zi],Li[zi]=null,Wg=Li[--zi],Li[zi]=null}var ki=null,li=null,VE=!1,Ee=!1,Qg=null;function _P(Q,e){var h=Oi(5,null,null,0);h.elementType="DELETED",h.stateNode=e,h.return=Q,e=Q.deletions,e===null?(Q.deletions=[h],Q.flags|=16):e.push(h)}function $P(Q,e){switch(Q.tag){case 5:return e=Ci(e,Q.type,Q.pendingProps),e!==null?(Q.stateNode=e,ki=Q,li=eA(e),!0):!1;case 6:return e=IB(e,Q.pendingProps),e!==null?(Q.stateNode=e,ki=Q,li=null,!0):!1;case 13:if(e=vh(e),e!==null){var h=uI!==null?{id:Wg,overflow:_g}:null;return Q.memoizedState={dehydrated:e,treeContext:h,retryLane:1073741824},h=Oi(18,null,null,0),h.stateNode=e,h.return=Q,Q.child=h,ki=Q,li=null,!0}return!1;default:return!1}}function Is(Q){return(Q.mode&1)!==0&&(Q.flags&128)===0}function Rs(Q){if(VE){var e=li;if(e){var h=e;if(!$P(Q,e)){if(Is(Q))throw Error(I(418));e=W(h);var a=ki;e&&$P(Q,e)?_P(a,h):(Q.flags=Q.flags&-4097|2,VE=!1,ki=Q)}}else{if(Is(Q))throw Error(I(418));Q.flags=Q.flags&-4097|2,VE=!1,ki=Q}}}function AJ(Q){for(Q=Q.return;Q!==null&&Q.tag!==5&&Q.tag!==3&&Q.tag!==13;)Q=Q.return;ki=Q}function oe(Q){if(!RA||Q!==ki)return!1;if(!VE)return AJ(Q),VE=!0,!1;if(Q.tag!==3&&(Q.tag!==5||Og(Q.type)&&!NA(Q.type,Q.memoizedProps))){var e=li;if(e){if(Is(Q)){for(Q=li;Q;)Q=W(Q);throw Error(I(418))}for(;e;)_P(Q,e),e=W(e)}}if(AJ(Q),Q.tag===13){if(!RA)throw Error(I(316));if(Q=Q.memoizedState,Q=Q!==null?Q.dehydrated:null,!Q)throw Error(I(317));li=RE(Q)}else li=ki?W(Q.stateNode):null;return!0}function pR(){RA&&(li=ki=null,Ee=VE=!1)}function Qs(Q){Qg===null?Qg=[Q]:Qg.push(Q)}function ie(Q,e,h){if(Q=h.ref,Q!==null&&typeof Q!="function"&&typeof Q!="object"){if(h._owner){if(h=h._owner,h){if(h.tag!==1)throw Error(I(309));var a=h.stateNode}if(!a)throw Error(I(147,Q));var D=a,f=""+Q;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===f?e.ref:(e=function(y){var v=D.refs;v===ZP&&(v=D.refs={}),y===null?delete v[f]:v[f]=y},e._stringRef=f,e)}if(typeof Q!="string")throw Error(I(284));if(!h._owner)throw Error(I(290,Q))}return Q}function uB(Q,e){throw Q=Object.prototype.toString.call(e),Error(I(31,Q==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":Q))}function EJ(Q){var e=Q._init;return e(Q._payload)}function oJ(Q){function e(_,O){if(Q){var gA=_.deletions;gA===null?(_.deletions=[O],_.flags|=16):gA.push(O)}}function h(_,O){if(!Q)return null;for(;O!==null;)e(_,O),O=O.sibling;return null}function a(_,O){for(_=new Map;O!==null;)O.key!==null?_.set(O.key,O):_.set(O.index,O),O=O.sibling;return _}function D(_,O){return _=MC(_,O),_.index=0,_.sibling=null,_}function f(_,O,gA){return _.index=gA,Q?(gA=_.alternate,gA!==null?(gA=gA.index,gA<O?(_.flags|=2,O):gA):(_.flags|=2,O)):(_.flags|=1048576,O)}function y(_){return Q&&_.alternate===null&&(_.flags|=2),_}function v(_,O,gA,FA){return O===null||O.tag!==6?(O=Ys(gA,_.mode,FA),O.return=_,O):(O=D(O,gA),O.return=_,O)}function QA(_,O,gA,FA){var zA=gA.type;return zA===n?HA(_,O,gA.props.children,FA,gA.key):O!==null&&(O.elementType===zA||typeof zA=="object"&&zA!==null&&zA.$$typeof===u&&EJ(zA)===O.type)?(FA=D(O,gA.props),FA.ref=ie(_,O,gA),FA.return=_,FA):(FA=An(gA.type,gA.key,gA.props,null,_.mode,FA),FA.ref=ie(_,O,gA),FA.return=_,FA)}function JA(_,O,gA,FA){return O===null||O.tag!==4||O.stateNode.containerInfo!==gA.containerInfo||O.stateNode.implementation!==gA.implementation?(O=Os(gA,_.mode,FA),O.return=_,O):(O=D(O,gA.children||[]),O.return=_,O)}function HA(_,O,gA,FA,zA){return O===null||O.tag!==7?(O=wI(gA,_.mode,FA,zA),O.return=_,O):(O=D(O,gA),O.return=_,O)}function oE(_,O,gA){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Ys(""+O,_.mode,gA),O.return=_,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case t:return gA=An(O.type,O.key,O.props,null,_.mode,gA),gA.ref=ie(_,null,O),gA.return=_,gA;case B:return O=Os(O,_.mode,gA),O.return=_,O;case u:var FA=O._init;return oE(_,FA(O._payload),gA)}if(AA(O)||U(O))return O=wI(O,_.mode,gA,null),O.return=_,O;uB(_,O)}return null}function XA(_,O,gA,FA){var zA=O!==null?O.key:null;if(typeof gA=="string"&&gA!==""||typeof gA=="number")return zA!==null?null:v(_,O,""+gA,FA);if(typeof gA=="object"&&gA!==null){switch(gA.$$typeof){case t:return gA.key===zA?QA(_,O,gA,FA):null;case B:return gA.key===zA?JA(_,O,gA,FA):null;case u:return zA=gA._init,XA(_,O,zA(gA._payload),FA)}if(AA(gA)||U(gA))return zA!==null?null:HA(_,O,gA,FA,null);uB(_,gA)}return null}function ME(_,O,gA,FA,zA){if(typeof FA=="string"&&FA!==""||typeof FA=="number")return _=_.get(gA)||null,v(O,_,""+FA,zA);if(typeof FA=="object"&&FA!==null){switch(FA.$$typeof){case t:return _=_.get(FA.key===null?gA:FA.key)||null,QA(O,_,FA,zA);case B:return _=_.get(FA.key===null?gA:FA.key)||null,JA(O,_,FA,zA);case u:var tE=FA._init;return ME(_,O,gA,tE(FA._payload),zA)}if(AA(FA)||U(FA))return _=_.get(gA)||null,HA(O,_,FA,zA,null);uB(O,FA)}return null}function VA(_,O,gA,FA){for(var zA=null,tE=null,iE=O,fE=O=0,Do=null;iE!==null&&fE<gA.length;fE++){iE.index>fE?(Do=iE,iE=null):Do=iE.sibling;var TE=XA(_,iE,gA[fE],FA);if(TE===null){iE===null&&(iE=Do);break}Q&&iE&&TE.alternate===null&&e(_,iE),O=f(TE,O,fE),tE===null?zA=TE:tE.sibling=TE,tE=TE,iE=Do}if(fE===gA.length)return h(_,iE),VE&&DI(_,fE),zA;if(iE===null){for(;fE<gA.length;fE++)iE=oE(_,gA[fE],FA),iE!==null&&(O=f(iE,O,fE),tE===null?zA=iE:tE.sibling=iE,tE=iE);return VE&&DI(_,fE),zA}for(iE=a(_,iE);fE<gA.length;fE++)Do=ME(iE,_,fE,gA[fE],FA),Do!==null&&(Q&&Do.alternate!==null&&iE.delete(Do.key===null?fE:Do.key),O=f(Do,O,fE),tE===null?zA=Do:tE.sibling=Do,tE=Do);return Q&&iE.forEach(function(GC){return e(_,GC)}),VE&&DI(_,fE),zA}function xo(_,O,gA,FA){var zA=U(gA);if(typeof zA!="function")throw Error(I(150));if(gA=zA.call(gA),gA==null)throw Error(I(151));for(var tE=zA=null,iE=O,fE=O=0,Do=null,TE=gA.next();iE!==null&&!TE.done;fE++,TE=gA.next()){iE.index>fE?(Do=iE,iE=null):Do=iE.sibling;var GC=XA(_,iE,TE.value,FA);if(GC===null){iE===null&&(iE=Do);break}Q&&iE&&GC.alternate===null&&e(_,iE),O=f(GC,O,fE),tE===null?zA=GC:tE.sibling=GC,tE=GC,iE=Do}if(TE.done)return h(_,iE),VE&&DI(_,fE),zA;if(iE===null){for(;!TE.done;fE++,TE=gA.next())TE=oE(_,TE.value,FA),TE!==null&&(O=f(TE,O,fE),tE===null?zA=TE:tE.sibling=TE,tE=TE);return VE&&DI(_,fE),zA}for(iE=a(_,iE);!TE.done;fE++,TE=gA.next())TE=ME(iE,_,fE,TE.value,FA),TE!==null&&(Q&&TE.alternate!==null&&iE.delete(TE.key===null?fE:TE.key),O=f(TE,O,fE),tE===null?zA=TE:tE.sibling=TE,tE=TE);return Q&&iE.forEach(function(GT){return e(_,GT)}),VE&&DI(_,fE),zA}function Zi(_,O,gA,FA){if(typeof gA=="object"&&gA!==null&&gA.type===n&&gA.key===null&&(gA=gA.props.children),typeof gA=="object"&&gA!==null){switch(gA.$$typeof){case t:A:{for(var zA=gA.key,tE=O;tE!==null;){if(tE.key===zA){if(zA=gA.type,zA===n){if(tE.tag===7){h(_,tE.sibling),O=D(tE,gA.props.children),O.return=_,_=O;break A}}else if(tE.elementType===zA||typeof zA=="object"&&zA!==null&&zA.$$typeof===u&&EJ(zA)===tE.type){h(_,tE.sibling),O=D(tE,gA.props),O.ref=ie(_,tE,gA),O.return=_,_=O;break A}h(_,tE);break}else e(_,tE);tE=tE.sibling}gA.type===n?(O=wI(gA.props.children,_.mode,FA,gA.key),O.return=_,_=O):(FA=An(gA.type,gA.key,gA.props,null,_.mode,FA),FA.ref=ie(_,O,gA),FA.return=_,_=FA)}return y(_);case B:A:{for(tE=gA.key;O!==null;){if(O.key===tE)if(O.tag===4&&O.stateNode.containerInfo===gA.containerInfo&&O.stateNode.implementation===gA.implementation){h(_,O.sibling),O=D(O,gA.children||[]),O.return=_,_=O;break A}else{h(_,O);break}else e(_,O);O=O.sibling}O=Os(gA,_.mode,FA),O.return=_,_=O}return y(_);case u:return tE=gA._init,Zi(_,O,tE(gA._payload),FA)}if(AA(gA))return VA(_,O,gA,FA);if(U(gA))return xo(_,O,gA,FA);uB(_,gA)}return typeof gA=="string"&&gA!==""||typeof gA=="number"?(gA=""+gA,O!==null&&O.tag===6?(h(_,O.sibling),O=D(O,gA),O.return=_,_=O):(h(_,O),O=Ys(gA,_.mode,FA),O.return=_,_=O),y(_)):h(_,O)}return Zi}var wR=oJ(!0),iJ=oJ(!1),ge={},vi=mi(ge),Ce=mi(ge),FR=mi(ge);function Ug(Q){if(Q===ge)throw Error(I(174));return Q}function es(Q,e){PE(FR,e),PE(Ce,Q),PE(vi,ge),Q=tA(e),QE(vi),PE(vi,Q)}function qR(){QE(vi),QE(Ce),QE(FR)}function gJ(Q){var e=Ug(FR.current),h=Ug(vi.current);e=w(h,Q.type,e),h!==e&&(PE(Ce,Q),PE(vi,e))}function ts(Q){Ce.current===Q&&(QE(vi),QE(Ce))}var ZE=mi(0);function DB(Q){for(var e=Q;e!==null;){if(e.tag===13){var h=e.memoizedState;if(h!==null&&(h=h.dehydrated,h===null||RB(h)||_Q(h)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===Q)break;for(;e.sibling===null;){if(e.return===null||e.return===Q)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bs=[];function ns(){for(var Q=0;Q<Bs.length;Q++){var e=Bs[Q];dA?e._workInProgressVersionPrimary=null:e._workInProgressVersionSecondary=null}Bs.length=0}var SB=R.ReactCurrentDispatcher,Vi=R.ReactCurrentBatchConfig,MR=0,_E=null,No=null,uo=null,dB=!1,Ie=!1,Re=0,IT=0;function mo(){throw Error(I(321))}function Ks(Q,e){if(e===null)return!1;for(var h=0;h<e.length&&h<Q.length;h++)if(!dg(Q[h],e[h]))return!1;return!0}function hs(Q,e,h,a,D,f){if(MR=f,_E=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,SB.current=Q===null||Q.memoizedState===null?tT:BT,Q=h(a,D),Ie){f=0;do{if(Ie=!1,Re=0,25<=f)throw Error(I(301));f+=1,uo=No=null,e.updateQueue=null,SB.current=nT,Q=h(a,D)}while(Ie)}if(SB.current=wB,e=No!==null&&No.next!==null,MR=0,uo=No=_E=null,dB=!1,e)throw Error(I(300));return Q}function ss(){var Q=Re!==0;return Re=0,Q}function $g(){var Q={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?_E.memoizedState=uo=Q:uo=uo.next=Q,uo}function pg(){if(No===null){var Q=_E.alternate;Q=Q!==null?Q.memoizedState:null}else Q=No.next;var e=uo===null?_E.memoizedState:uo.next;if(e!==null)uo=e,No=Q;else{if(Q===null)throw Error(I(310));No=Q,Q={memoizedState:No.memoizedState,baseState:No.baseState,baseQueue:No.baseQueue,queue:No.queue,next:null},uo===null?_E.memoizedState=uo=Q:uo=uo.next=Q}return uo}function SI(Q,e){return typeof e=="function"?e(Q):e}function fB(Q){var e=pg(),h=e.queue;if(h===null)throw Error(I(311));h.lastRenderedReducer=Q;var a=No,D=a.baseQueue,f=h.pending;if(f!==null){if(D!==null){var y=D.next;D.next=f.next,f.next=y}a.baseQueue=D=f,h.pending=null}if(D!==null){f=D.next,a=a.baseState;var v=y=null,QA=null,JA=f;do{var HA=JA.lane;if((MR&HA)===HA)QA!==null&&(QA=QA.next={lane:0,action:JA.action,hasEagerState:JA.hasEagerState,eagerState:JA.eagerState,next:null}),a=JA.hasEagerState?JA.eagerState:Q(a,JA.action);else{var oE={lane:HA,action:JA.action,hasEagerState:JA.hasEagerState,eagerState:JA.eagerState,next:null};QA===null?(v=QA=oE,y=a):QA=QA.next=oE,_E.lanes|=HA,HR|=HA}JA=JA.next}while(JA!==null&&JA!==f);QA===null?y=a:QA.next=v,dg(a,e.memoizedState)||(Pi=!0),e.memoizedState=a,e.baseState=y,e.baseQueue=QA,h.lastRenderedState=a}if(Q=h.interleaved,Q!==null){D=Q;do f=D.lane,_E.lanes|=f,HR|=f,D=D.next;while(D!==Q)}else D===null&&(h.lanes=0);return[e.memoizedState,h.dispatch]}function TB(Q){var e=pg(),h=e.queue;if(h===null)throw Error(I(311));h.lastRenderedReducer=Q;var a=h.dispatch,D=h.pending,f=e.memoizedState;if(D!==null){h.pending=null;var y=D=D.next;do f=Q(f,y.action),y=y.next;while(y!==D);dg(f,e.memoizedState)||(Pi=!0),e.memoizedState=f,e.baseQueue===null&&(e.baseState=f),h.lastRenderedState=f}return[f,a]}function CJ(){}function IJ(Q,e){var h=_E,a=pg(),D=e(),f=!dg(a.memoizedState,D);if(f&&(a.memoizedState=D,Pi=!0),a=a.queue,ee(eJ.bind(null,h,a,Q),[Q]),a.getSnapshot!==e||f||uo!==null&&uo.memoizedState.tag&1){if(h.flags|=2048,Qe(9,QJ.bind(null,h,a,D,e),void 0,null),Qo===null)throw Error(I(349));(MR&30)!==0||RJ(h,e,D)}return D}function RJ(Q,e,h){Q.flags|=16384,Q={getSnapshot:e,value:h},e=_E.updateQueue,e===null?(e={lastEffect:null,stores:null},_E.updateQueue=e,e.stores=[Q]):(h=e.stores,h===null?e.stores=[Q]:h.push(Q))}function QJ(Q,e,h,a){e.value=h,e.getSnapshot=a,tJ(e)&&Yi(Q,1,-1)}function eJ(Q,e,h){return h(function(){tJ(e)&&Yi(Q,1,-1)})}function tJ(Q){var e=Q.getSnapshot;Q=Q.value;try{var h=e();return!dg(Q,h)}catch{return!0}}function rs(Q){var e=$g();return typeof Q=="function"&&(Q=Q()),e.memoizedState=e.baseState=Q,Q={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:SI,lastRenderedState:Q},e.queue=Q,Q=Q.dispatch=eT.bind(null,_E,Q),[e.memoizedState,Q]}function Qe(Q,e,h,a){return Q={tag:Q,create:e,destroy:h,deps:a,next:null},e=_E.updateQueue,e===null?(e={lastEffect:null,stores:null},_E.updateQueue=e,e.lastEffect=Q.next=Q):(h=e.lastEffect,h===null?e.lastEffect=Q.next=Q:(a=h.next,h.next=Q,Q.next=a,e.lastEffect=Q)),Q}function BJ(){return pg().memoizedState}function UB(Q,e,h,a){var D=$g();_E.flags|=Q,D.memoizedState=Qe(1|e,h,void 0,a===void 0?null:a)}function pB(Q,e,h,a){var D=pg();a=a===void 0?null:a;var f=void 0;if(No!==null){var y=No.memoizedState;if(f=y.destroy,a!==null&&Ks(a,y.deps)){D.memoizedState=Qe(e,h,f,a);return}}_E.flags|=Q,D.memoizedState=Qe(1|e,h,f,a)}function as(Q,e){return UB(8390656,8,Q,e)}function ee(Q,e){return pB(2048,8,Q,e)}function nJ(Q,e){return pB(4,2,Q,e)}function KJ(Q,e){return pB(4,4,Q,e)}function hJ(Q,e){if(typeof e=="function")return Q=Q(),e(Q),function(){e(null)};if(e!=null)return Q=Q(),e.current=Q,function(){e.current=null}}function sJ(Q,e,h){return h=h!=null?h.concat([Q]):null,pB(4,4,hJ.bind(null,e,Q),h)}function ks(){}function rJ(Q,e){var h=pg();e=e===void 0?null:e;var a=h.memoizedState;return a!==null&&e!==null&&Ks(e,a[1])?a[0]:(h.memoizedState=[Q,e],Q)}function aJ(Q,e){var h=pg();e=e===void 0?null:e;var a=h.memoizedState;return a!==null&&e!==null&&Ks(e,a[1])?a[0]:(Q=Q(),h.memoizedState=[Q,e],Q)}function RT(Q,e){var h=dE;dE=h!==0&&4>h?h:4,Q(!0);var a=Vi.transition;Vi.transition={};try{Q(!1),e()}finally{dE=h,Vi.transition=a}}function kJ(){return pg().memoizedState}function QT(Q,e,h){var a=FC(Q);h={lane:a,action:h,hasEagerState:!1,eagerState:null,next:null},lJ(Q)?PJ(e,h):(JJ(Q,e,h),h=Xo(),Q=Yi(Q,a,h),Q!==null&&cJ(Q,e,a))}function eT(Q,e,h){var a=FC(Q),D={lane:a,action:h,hasEagerState:!1,eagerState:null,next:null};if(lJ(Q))PJ(e,D);else{JJ(Q,e,D);var f=Q.alternate;if(Q.lanes===0&&(f===null||f.lanes===0)&&(f=e.lastRenderedReducer,f!==null))try{var y=e.lastRenderedState,v=f(y,h);if(D.hasEagerState=!0,D.eagerState=v,dg(v,y))return}catch{}finally{}h=Xo(),Q=Yi(Q,a,h),Q!==null&&cJ(Q,e,a)}}function lJ(Q){var e=Q.alternate;return Q===_E||e!==null&&e===_E}function PJ(Q,e){Ie=dB=!0;var h=Q.pending;h===null?e.next=e:(e.next=h.next,h.next=e),Q.pending=e}function JJ(Q,e,h){Qo!==null&&(Q.mode&1)!==0&&(KE&2)===0?(Q=e.interleaved,Q===null?(h.next=h,Tg===null?Tg=[e]:Tg.push(e)):(h.next=Q.next,Q.next=h),e.interleaved=h):(Q=e.pending,Q===null?h.next=h:(h.next=Q.next,Q.next=h),e.pending=h)}function cJ(Q,e,h){if((h&4194240)!==0){var a=e.lanes;a&=Q.pendingLanes,h|=a,e.lanes=h,Oh(Q,h)}}var wB={readContext:xi,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},tT={readContext:xi,useCallback:function(Q,e){return $g().memoizedState=[Q,e===void 0?null:e],Q},useContext:xi,useEffect:as,useImperativeHandle:function(Q,e,h){return h=h!=null?h.concat([Q]):null,UB(4194308,4,hJ.bind(null,e,Q),h)},useLayoutEffect:function(Q,e){return UB(4194308,4,Q,e)},useInsertionEffect:function(Q,e){return UB(4,2,Q,e)},useMemo:function(Q,e){var h=$g();return e=e===void 0?null:e,Q=Q(),h.memoizedState=[Q,e],Q},useReducer:function(Q,e,h){var a=$g();return e=h!==void 0?h(e):e,a.memoizedState=a.baseState=e,Q={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Q,lastRenderedState:e},a.queue=Q,Q=Q.dispatch=QT.bind(null,_E,Q),[a.memoizedState,Q]},useRef:function(Q){var e=$g();return Q={current:Q},e.memoizedState=Q},useState:rs,useDebugValue:ks,useDeferredValue:function(Q){var e=rs(Q),h=e[0],a=e[1];return as(function(){var D=Vi.transition;Vi.transition={};try{a(Q)}finally{Vi.transition=D}},[Q]),h},useTransition:function(){var Q=rs(!1),e=Q[0];return Q=RT.bind(null,Q[1]),$g().memoizedState=Q,[e,Q]},useMutableSource:function(){},useSyncExternalStore:function(Q,e,h){var a=_E,D=$g();if(VE){if(h===void 0)throw Error(I(407));h=h()}else{if(h=e(),Qo===null)throw Error(I(349));(MR&30)!==0||RJ(a,e,h)}D.memoizedState=h;var f={value:h,getSnapshot:e};return D.queue=f,as(eJ.bind(null,a,f,Q),[Q]),a.flags|=2048,Qe(9,QJ.bind(null,a,f,h,e),void 0,null),h},useId:function(){var Q=$g(),e=Qo.identifierPrefix;if(VE){var h=_g,a=Wg;h=(a&~(1<<32-Ig(a)-1)).toString(32)+h,e=":"+e+"R"+h,h=Re++,0<h&&(e+="H"+h.toString(32)),e+=":"}else h=IT++,e=":"+e+"r"+h.toString(32)+":";return Q.memoizedState=e},unstable_isNewReconciler:!1},BT={readContext:xi,useCallback:rJ,useContext:xi,useEffect:ee,useImperativeHandle:sJ,useInsertionEffect:nJ,useLayoutEffect:KJ,useMemo:aJ,useReducer:fB,useRef:BJ,useState:function(){return fB(SI)},useDebugValue:ks,useDeferredValue:function(Q){var e=fB(SI),h=e[0],a=e[1];return ee(function(){var D=Vi.transition;Vi.transition={};try{a(Q)}finally{Vi.transition=D}},[Q]),h},useTransition:function(){var Q=fB(SI)[0],e=pg().memoizedState;return[Q,e]},useMutableSource:CJ,useSyncExternalStore:IJ,useId:kJ,unstable_isNewReconciler:!1},nT={readContext:xi,useCallback:rJ,useContext:xi,useEffect:ee,useImperativeHandle:sJ,useInsertionEffect:nJ,useLayoutEffect:KJ,useMemo:aJ,useReducer:TB,useRef:BJ,useState:function(){return TB(SI)},useDebugValue:ks,useDeferredValue:function(Q){var e=TB(SI),h=e[0],a=e[1];return ee(function(){var D=Vi.transition;Vi.transition={};try{a(Q)}finally{Vi.transition=D}},[Q]),h},useTransition:function(){var Q=TB(SI)[0],e=pg().memoizedState;return[Q,e]},useMutableSource:CJ,useSyncExternalStore:IJ,useId:kJ,unstable_isNewReconciler:!1};function ls(Q,e){try{var h="",a=e;do h+=CT(a),a=a.return;while(a);var D=h}catch(f){D=`
Error generating stack: `+f.message+`
  `+(a.join(" > ")+`

No matching component was found for:
  `)+Q.join(" > ")}return null},E.getPublicRootInstance=function(Q){if(Q=Q.current,!Q.child)return null;switch(Q.child.tag){case 5:return EA(Q.child.stateNode);default:return Q.child.stateNode}},E.injectIntoDevTools=function(Q){if(Q={bundleType:Q.bundleType,version:Q.version,rendererPackageName:Q.rendererPackageName,rendererConfig:Q.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:qT,findFiberByHostInstance:Q.findFiberByHostInstance||MT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")Q=!1;else{var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled||!e.supportsFiber)Q=!0;else{try{KB=e.inject(Q),Sg=e}catch{}Q=!!e.checkDCE}}return Q},E.isAlreadyRendering=function(){return!1},E.observeVisibleRects=function(Q,e,h,a){if(!lE)throw Error(I(363));Q=qs(Q,e);var D=UA(Q,h,a).disconnect;return{disconnect:function(){D()}}},E.registerMutableSourceForHydration=function(Q,e){var h=e._getVersion;h=h(e._source),Q.mutableSourceEagerHydrationData==null?Q.mutableSourceEagerHydrationData=[e,h]:Q.mutableSourceEagerHydrationData.push(e,h)},E.runWithPriority=function(Q,e){var h=dE;try{return dE=Q,e()}finally{dE=h}},E.shouldError=function(){return null},E.shouldSuspend=function(){return!1},E.updateContainer=function(Q,e,h,a){var D=e.current,f=Xo(),y=FC(D);return h=hc(h),e.context===null?e.context=h:e.pendingContext=h,e=Xg(f,y),e.payload={element:Q},a=a===void 0?null:a,a!==null&&(e.callback=a),UC(D,e),Q=Yi(D,y,f),Q!==null&&kB(Q,D,y),y},E};(function(o){o.exports=By})(S6);const ny=hS(S6.exports);var Ok={exports:{}},d6={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(o){function A(w,G){var N=w.length;w.push(G);A:for(;0<N;){var j=N-1>>>1,Z=w[j];if(0<g(Z,G))w[j]=G,w[N]=Z,N=j;else break A}}function E(w){return w.length===0?null:w[0]}function i(w){if(w.length===0)return null;var G=w[0],N=w.pop();if(N!==G){w[0]=N;A:for(var j=0,Z=w.length,sA=Z>>>1;j<sA;){var PA=2*(j+1)-1,NA=w[PA],$=PA+1,xA=w[$];if(0>g(NA,N))$<Z&&0>g(xA,NA)?(w[j]=xA,w[$]=N,j=$):(w[j]=NA,w[PA]=N,j=PA);else if($<Z&&0>g(xA,N))w[j]=xA,w[$]=N,j=$;else break A}}return G}function g(w,G){var N=w.sortIndex-G.sortIndex;return N!==0?N:w.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;o.unstable_now=function(){return C.now()}}else{var I=Date,R=I.now();o.unstable_now=function(){return I.now()-R}}var t=[],B=[],n=1,K=null,s=3,r=!1,l=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(w){for(var G=E(B);G!==null;){if(G.callback===null)i(B);else if(G.startTime<=w)i(B),G.sortIndex=G.expirationTime,A(t,G);else break;G=E(B)}}function S(w){if(k=!1,u(w),!l)if(E(t)!==null)l=!0,EA(T);else{var G=E(B);G!==null&&tA(S,G.startTime-w)}}function T(w,G){l=!1,k&&(k=!1,J(d),d=-1),r=!0;var N=s;try{for(u(G),K=E(t);K!==null&&(!(K.expirationTime>G)||w&&!V());){var j=K.callback;if(typeof j=="function"){K.callback=null,s=K.priorityLevel;var Z=j(K.expirationTime<=G);G=o.unstable_now(),typeof Z=="function"?K.callback=Z:K===E(t)&&i(t),u(G)}else i(t);K=E(t)}if(K!==null)var sA=!0;else{var PA=E(B);PA!==null&&tA(S,PA.startTime-G),sA=!1}return sA}finally{K=null,s=N,r=!1}}var U=!1,F=null,d=-1,p=5,H=-1;function V(){return!(o.unstable_now()-H<p)}function CA(){if(F!==null){var w=o.unstable_now();H=w;var G=!0;try{G=F(!0,w)}finally{G?X():(U=!1,F=null)}}else U=!1}var X;if(typeof c=="function")X=function(){c(CA)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,AA=Y.port2;Y.port1.onmessage=CA,X=function(){AA.postMessage(null)}}else X=function(){P(CA,0)};function EA(w){F=w,U||(U=!0,X())}function tA(w,G){d=P(function(){w(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(w){w.callback=null},o.unstable_continueExecution=function(){l||r||(l=!0,EA(T))},o.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<w?Math.floor(1e3/w):5},o.unstable_getCurrentPriorityLevel=function(){return s},o.unstable_getFirstCallbackNode=function(){return E(t)},o.unstable_next=function(w){switch(s){case 1:case 2:case 3:var G=3;break;default:G=s}var N=s;s=G;try{return w()}finally{s=N}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var N=s;s=w;try{return G()}finally{s=N}},o.unstable_scheduleCallback=function(w,G,N){var j=o.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?j+N:j):N=j,w){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,w={id:n++,callback:G,priorityLevel:w,startTime:N,expirationTime:Z,sortIndex:-1},N>j?(w.sortIndex=N,A(B,w),E(t)===null&&w===E(B)&&(k?(J(d),d=-1):k=!0,tA(S,N-j))):(w.sortIndex=Z,A(t,w),l||r||(l=!0,EA(T))),w},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(w){var G=s;return function(){var N=s;s=G;try{return w.apply(this,arguments)}finally{s=N}}}})(d6);(function(o){o.exports=d6})(Ok);var Lh={exports:{}},zh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class GP extends Pg{constructor(A){super({type:"LineMaterial",uniforms:Uh.clone(Ai.line.uniforms),vertexShader:Ai.line.vertexShader,fragmentShader:Ai.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(E){this.uniforms.diffuse.value=E}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(E){E===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(E){this.uniforms.linewidth.value=E}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(E){Boolean(E)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),E===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(E){this.uniforms.dashScale.value=E}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(E){this.uniforms.dashSize.value=E}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(E){this.uniforms.dashOffset.value=E}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(E){this.uniforms.gapSize.value=E}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(E){this.uniforms.opacity.value=E}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(E){this.uniforms.resolution.value.copy(E)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(E){Boolean(E)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),E===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(A)}}const eS=new M,tS=new M,wo=new DE,Fo=new DE,qg=new DE,ta=new M,Ba=new CE,Vo=new u6,BS=new M,tK=new Vg,BK=new DC,Mg=new DE;let yg,Wk,V6,eR;function nS(o,A,E){return Mg.set(0,0,-A,1).applyMatrix4(o.projectionMatrix),Mg.multiplyScalar(1/Mg.w),Mg.x=eR/E.width,Mg.y=eR/E.height,Mg.applyMatrix4(o.projectionMatrixInverse),Mg.multiplyScalar(1/Mg.w),Math.abs(Math.max(Mg.x,Mg.y))}function Ix(o,A){for(let E=0,i=Wk.count;E<i;E++){Vo.start.fromBufferAttribute(Wk,E),Vo.end.fromBufferAttribute(V6,E);const g=new M,C=new M;yg.distanceSqToSegment(Vo.start,Vo.end,C,g),C.distanceTo(g)<eR*.5&&A.push({point:C,pointOnLine:g,distance:yg.origin.distanceTo(C),object:o,face:null,faceIndex:E,uv:null,uv2:null})}}function Rx(o,A,E){const i=A.projectionMatrix,C=o.material.resolution,I=o.matrixWorld,R=o.geometry,t=R.attributes.instanceStart,B=R.attributes.instanceEnd,n=-A.near;yg.at(1,qg),qg.w=1,qg.applyMatrix4(A.matrixWorldInverse),qg.applyMatrix4(i),qg.multiplyScalar(1/qg.w),qg.x*=C.x/2,qg.y*=C.y/2,qg.z=0,ta.copy(qg),Ba.multiplyMatrices(A.matrixWorldInverse,I);for(let K=0,s=t.count;K<s;K++){if(wo.fromBufferAttribute(t,K),Fo.fromBufferAttribute(B,K),wo.w=1,Fo.w=1,wo.applyMatrix4(Ba),Fo.applyMatrix4(Ba),wo.z>n&&Fo.z>n)continue;if(wo.z>n){const c=wo.z-Fo.z,u=(wo.z-n)/c;wo.lerp(Fo,u)}else if(Fo.z>n){const c=Fo.z-wo.z,u=(Fo.z-n)/c;Fo.lerp(wo,u)}wo.applyMatrix4(i),Fo.applyMatrix4(i),wo.multiplyScalar(1/wo.w),Fo.multiplyScalar(1/Fo.w),wo.x*=C.x/2,wo.y*=C.y/2,Fo.x*=C.x/2,Fo.y*=C.y/2,Vo.start.copy(wo),Vo.start.z=0,Vo.end.copy(Fo),Vo.end.z=0;const l=Vo.closestPointToPointParameter(ta,!0);Vo.at(l,BS);const k=c0.lerp(wo.z,Fo.z,l),P=k>=-1&&k<=1,J=ta.distanceTo(BS)<eR*.5;if(P&&J){Vo.start.fromBufferAttribute(t,K),Vo.end.fromBufferAttribute(B,K),Vo.start.applyMatrix4(I),Vo.end.applyMatrix4(I);const c=new M,u=new M;yg.distanceSqToSegment(Vo.start,Vo.end,u,c),E.push({point:u,pointOnLine:c,distance:yg.origin.distanceTo(u),object:o,face:null,faceIndex:K,uv:null,uv2:null})}}}class Qx extends To{constructor(A=new z6,E=new GP({color:Math.random()*16777215})){super(A,E),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const A=this.geometry,E=A.attributes.instanceStart,i=A.attributes.instanceEnd,g=new Float32Array(2*E.count);for(let I=0,R=0,t=E.count;I<t;I++,R+=2)eS.fromBufferAttribute(E,I),tS.fromBufferAttribute(i,I),g[R]=R===0?0:g[R-1],g[R+1]=g[R]+eS.distanceTo(tS);const C=new Rh(g,2,1);return A.setAttribute("instanceDistanceStart",new fi(C,1,0)),A.setAttribute("instanceDistanceEnd",new fi(C,1,1)),this}raycast(A,E){const i=this.material.worldUnits,g=A.camera;g===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const C=A.params.Line2!==void 0&&A.params.Line2.threshold||0;yg=A.ray;const I=this.matrixWorld,R=this.geometry,t=this.material;eR=t.linewidth+C,Wk=R.attributes.instanceStart,V6=R.attributes.instanceEnd,R.boundingSphere===null&&R.computeBoundingSphere(),BK.copy(R.boundingSphere).applyMatrix4(I);let B;if(i)B=eR*.5;else{const K=Math.max(g.near,BK.distanceToPoint(yg.origin));B=nS(g,K,t.resolution)}if(BK.radius+=B,yg.intersectsSphere(BK)===!1)return;R.boundingBox===null&&R.computeBoundingBox(),tK.copy(R.boundingBox).applyMatrix4(I);let n;if(i)n=eR*.5;else{const K=Math.max(g.near,tK.distanceToPoint(yg.origin));n=nS(g,K,t.resolution)}tK.expandByScalar(n),yg.intersectsBox(tK)!==!1&&(i?Ix(this,E):Rx(this,g,E))}}class ex extends Qx{constructor(A=new v6,E=new GP({color:Math.random()*16777215})){super(A,E),this.isLine2=!0,this.type="Line2"}}const na=TA.exports.forwardRef(function({points:A,color:E="black",vertexColors:i,linewidth:g,lineWidth:C,dashed:I,...R},t){const B=Ng(r=>r.size),[n]=TA.exports.useState(()=>new ex),[K]=TA.exports.useState(()=>new GP),s=TA.exports.useMemo(()=>{const r=new v6,l=A.map(k=>{const P=Array.isArray(k);return k instanceof M?[k.x,k.y,k.z]:k instanceof nA?[k.x,k.y,0]:P&&k.length===3?[k[0],k[1],k[2]]:P&&k.length===2?[k[0],k[1],0]:k});if(r.setPositions(l.flat()),i){const k=i.map(P=>P instanceof MA?P.toArray():P);r.setColors(k.flat())}return r},[A,i]);return TA.exports.useLayoutEffect(()=>{n.computeLineDistances()},[A,n]),TA.exports.useLayoutEffect(()=>{I?K.defines.USE_DASH="":delete K.defines.USE_DASH,K.needsUpdate=!0},[I,K]),TA.exports.useEffect(()=>()=>s.dispose(),[s]),Ag("primitive",{object:n,ref:t,...R,children:[IE("primitive",{object:s,attach:"geometry"}),IE("primitive",{object:K,attach:"material",color:E,vertexColors:Boolean(i),resolution:[B.width,B.height],linewidth:g??C,dashed:I,...R})]})}),tx=TA.exports.forwardRef(({makeDefault:o,camera:A,regress:E,domElement:i,enableDamping:g=!0,onChange:C,onStart:I,onEnd:R,...t},B)=>{const n=Ng(S=>S.invalidate),K=Ng(S=>S.camera),s=Ng(S=>S.gl),r=Ng(S=>S.events),l=Ng(S=>S.set),k=Ng(S=>S.get),P=Ng(S=>S.performance),J=A||K,c=i||r.connected||s.domElement,u=TA.exports.useMemo(()=>new Cx(J),[J]);return Gy(()=>{u.enabled&&u.update()},-1),TA.exports.useEffect(()=>(u.connect(c),()=>void u.dispose()),[c,E,u,n]),TA.exports.useEffect(()=>{const S=T=>{n(),E&&P.regress(),C&&C(T)};return u.addEventListener("change",S),I&&u.addEventListener("start",I),R&&u.addEventListener("end",R),()=>{I&&u.removeEventListener("start",I),R&&u.removeEventListener("end",R),u.removeEventListener("change",S)}},[C,I,R,u,n]),TA.exports.useEffect(()=>{if(o){const S=k().controls;return l({controls:u}),()=>l({controls:S})}},[o,u]),IE("primitive",{ref:B,object:u,enableDamping:g,...t})}),Ka=1,Bx=()=>Ag("group",{children:[IE(na,{points:[[0,0,0],[Ka,0,0]],color:"red"}),IE(na,{points:[[0,0,0],[0,Ka,0]],color:"green"}),IE(na,{points:[[0,0,0],[0,0,Ka]],color:"blue"})]}),nx=()=>{const{planetPositions:o}=TA.exports.useContext(HP);return Ag(bD,{children:[Ag("mesh",{children:[IE("sphereGeometry",{attach:"geometry",args:[ha,32,32]}),IE("meshStandardMaterial",{color:"yellow"})]}),o&&Ag(bD,{children:[Ag("mesh",{position:[o.earth.x,o.earth.y,o.earth.z],children:[IE("sphereGeometry",{attach:"geometry",args:[ha,32,32]}),IE("meshStandardMaterial",{color:"cyan"})]}),Ag("mesh",{position:[o.mars.x,o.mars.y,o.mars.z],children:[IE("sphereGeometry",{attach:"geometry",args:[ha,32,32]}),IE("meshStandardMaterial",{color:"orange"})]})]})]})},Kx=()=>{Ng(A=>A.scene);const o=Ng(A=>A.camera);return TA.exports.useEffect(()=>{console.log("\u2705 UseEffect resetting camera position"),o.translateX(2-o.position.x),o.translateY(1-o.position.y),o.translateZ(2-o.position.z)},[]),Ag("group",{rotation:[-Math.PI/2,0,-Math.PI/2],children:[IE(nx,{}),IE(Bx,{})]})},hx=()=>IE("div",{className:"scene-container",children:Ag(gx,{children:[IE("ambientLight",{}),IE("color",{attach:"background",args:["black"]}),IE(tx,{}),IE(Kx,{})]})}),sx=o=>o.getTime()/864e5+24405875e-1,rx=()=>{const{time:o,isPlaying:A,setIsPlaying:E,speed:i,setSpeed:g}=TA.exports.useContext(HP),[C,I]=TA.exports.useState(!0);return IE("div",{className:"ui-container",children:C?IE("div",{className:"ui-collapsed",onMouseEnter:()=>I(!1),children:"\u{1F680}"}):IE("div",{className:"ui",onMouseLeave:()=>I(!0),children:Ag("div",{className:"vbox",style:{paddingTop:"20pt"},children:[IE("div",{children:o.toDateString()}),IE("div",{children:`playback speed: ${i} days/sec`}),Ag("div",{className:"hbox",children:[IE("a",{onClick:()=>g(R=>Math.max(R-1,-10)),style:{cursor:"pointer"},children:"\u23EA"}),IE("a",{onClick:()=>E(R=>!R),style:{cursor:"pointer"},children:A?"\u23F8\uFE0F":"\u25B6\uFE0F"}),IE("a",{onClick:()=>g(R=>Math.min(R+1,10)),style:{cursor:"pointer"},children:"\u23E9"})]})]})})})},ax=await Ew,KS=20,HP=_T.createContext({}),kx=()=>{const[o,A]=TA.exports.useState(new Date),[E,i]=TA.exports.useState(!1),[g,C]=TA.exports.useState(1),[I,R]=TA.exports.useState({});return TA.exports.useEffect(()=>{const t=ax(sx(o));R(t)},[o]),TA.exports.useEffect(()=>{console.log(`\u{1F6A9} UseEffect starting playback loop with delta: ${KS}ms`);const t=setInterval(()=>{E&&A(B=>new Date(B.getTime()+g*864e5))},KS);return()=>{console.log("\u{1F3C1} UseEffect stopping playback loop"),clearInterval(t)}},[E,g]),Ag(HP.Provider,{value:{time:o,planetPositions:I,isPlaying:E,speed:g,setIsPlaying:i,setSpeed:C},children:[IE(hx,{}),IE(rx,{})]})};const lx=696340,Px=1495978707e-1,ha=lx/Px*5;sa.createRoot(document.getElementById("root")).render(IE(kx,{}));