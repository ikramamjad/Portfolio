(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vm={exports:{}},Rl={},_m={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),bx=Symbol.for("react.portal"),Ax=Symbol.for("react.fragment"),Tx=Symbol.for("react.strict_mode"),Cx=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Px=Symbol.for("react.forward_ref"),Lx=Symbol.for("react.suspense"),Ix=Symbol.for("react.memo"),Dx=Symbol.for("react.lazy"),Ch=Symbol.iterator;function kx(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Em={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||ym}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=Ps.prototype;function vd(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||ym}var _d=vd.prototype=new Mm;_d.constructor=vd;Sm(_d,Ps.prototype);_d.isPureReactComponent=!0;var Rh=Array.isArray,wm=Object.prototype.hasOwnProperty,yd={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Da,type:t,key:s,ref:a,props:r,_owner:yd.current}}function Ux(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nh=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Do(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Da:case bx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ic(a,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Nh,"$&/")+"/"),Do(r,e,n,"",function(c){return c})):r!=null&&(Sd(r)&&(r=Ux(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Nh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Rh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ic(s,o);a+=Do(s,e,n,l,r)}else if(l=kx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ic(s,o++),a+=Do(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ga(t,e,n){if(t==null)return t;var i=[],r=0;return Do(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Fx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},ko={transition:null},Bx={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:ko,ReactCurrentOwner:yd};function Tm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!Sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Ps;We.Fragment=Ax;We.Profiler=Cx;We.PureComponent=vd;We.StrictMode=Tx;We.Suspense=Lx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;We.act=Tm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)wm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Da,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:Nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rx,_context:t},t.Consumer=t};We.createElement=Am;We.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:Px,render:t}};We.isValidElement=Sd;We.lazy=function(t){return{$$typeof:Dx,_payload:{_status:-1,_result:t},_init:Fx}};We.memo=function(t,e){return{$$typeof:Ix,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=ko.transition;ko.transition={};try{t()}finally{ko.transition=e}};We.unstable_act=Tm;We.useCallback=function(t,e){return $t.current.useCallback(t,e)};We.useContext=function(t){return $t.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};We.useEffect=function(t,e){return $t.current.useEffect(t,e)};We.useId=function(){return $t.current.useId()};We.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return $t.current.useMemo(t,e)};We.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};We.useRef=function(t){return $t.current.useRef(t)};We.useState=function(t){return $t.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return $t.current.useTransition()};We.version="18.3.1";_m.exports=We;var _e=_m.exports;const zx=wx(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx=_e,Hx=Symbol.for("react.element"),Vx=Symbol.for("react.fragment"),Gx=Object.prototype.hasOwnProperty,Wx=jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xx={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Gx.call(e,i)&&!Xx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hx,type:t,key:s,ref:a,props:r,_owner:Wx.current}}Rl.Fragment=Vx;Rl.jsx=Cm;Rl.jsxs=Cm;vm.exports=Rl;var u=vm.exports,pu={},Rm={exports:{}},pn={},Nm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,Y){var j=k.length;k.push(Y);e:for(;0<j;){var Z=j-1>>>1,de=k[Z];if(0<r(de,Y))k[Z]=Y,k[j]=de,j=Z;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var Y=k[0],j=k.pop();if(j!==Y){k[0]=j;e:for(var Z=0,de=k.length,Ae=de>>>1;Z<Ae;){var X=2*(Z+1)-1,O=k[X],te=X+1,re=k[te];if(0>r(O,j))te<de&&0>r(re,O)?(k[Z]=re,k[te]=j,Z=te):(k[Z]=O,k[X]=j,Z=X);else if(te<de&&0>r(re,j))k[Z]=re,k[te]=j,Z=te;else break e}}return Y}function r(k,Y){var j=k.sortIndex-Y.sortIndex;return j!==0?j:k.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,m=!1,_=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=k)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(k){if(S=!1,x(k),!_)if(n(l)!==null)_=!0,q(C);else{var Y=n(c);Y!==null&&Q(y,Y.startTime-k)}}function C(k,Y){_=!1,S&&(S=!1,d(R),R=-1),m=!0;var j=f;try{for(x(Y),p=n(l);p!==null&&(!(p.expirationTime>Y)||k&&!P());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,f=p.priorityLevel;var de=Z(p.expirationTime<=Y);Y=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(l)&&i(l),x(Y)}else i(l);p=n(l)}if(p!==null)var Ae=!0;else{var X=n(c);X!==null&&Q(y,X.startTime-Y),Ae=!1}return Ae}finally{p=null,f=j,m=!1}}var b=!1,A=null,R=-1,M=5,E=-1;function P(){return!(t.unstable_now()-E<M)}function z(){if(A!==null){var k=t.unstable_now();E=k;var Y=!0;try{Y=A(!0,k)}finally{Y?B():(b=!1,A=null)}}else b=!1}var B;if(typeof v=="function")B=function(){v(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=z,B=function(){$.postMessage(null)}}else B=function(){g(z,0)};function q(k){A=k,b||(b=!0,B())}function Q(k,Y){R=g(function(){k(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,q(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var j=f;f=Y;try{return k()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,Y){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=f;f=k;try{return Y()}finally{f=j}},t.unstable_scheduleCallback=function(k,Y,j){var Z=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Z+j:Z):j=Z,k){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=j+de,k={id:h++,callback:Y,priorityLevel:k,startTime:j,expirationTime:de,sortIndex:-1},j>Z?(k.sortIndex=j,e(c,k),n(l)===null&&k===n(c)&&(S?(d(R),R=-1):S=!0,Q(y,j-Z))):(k.sortIndex=de,e(l,k),_||m||(_=!0,q(C))),k},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(k){var Y=f;return function(){var j=f;f=Y;try{return k.apply(this,arguments)}finally{f=j}}}})(Pm);Nm.exports=Pm;var qx=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=_e,fn=qx;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lm=new Set,ga={};function Cr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(ga[t]=e,t=0;t<e.length;t++)Lm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ph={},Lh={};function Kx(t){return mu.call(Lh,t)?!0:mu.call(Ph,t)?!1:$x.test(t)?Lh[t]=!0:(Ph[t]=!0,!1)}function Qx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jx(t,e,n,i){if(e===null||typeof e>"u"||Qx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,Md);Ot[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,Md);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,Md);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jx(e,n,r,i)&&(n=null),i||r===null?Kx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Td=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),km=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,rc;function Qs(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var sc=!1;function ac(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function Zx(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function _u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case $r:return"Portal";case gu:return"Profiler";case bd:return"StrictMode";case xu:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dm:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case Ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Td:return e=t.displayName||null,e!==null?e:_u(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return _u(t(e))}catch{}}return null}function ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(e);case 8:return e===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Um(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tv(t){var e=Um(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=tv(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Um(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fm(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function Su(t,e){Fm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||Yo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Js(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function Bm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){nv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(iv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,cs=null,us=null;function Fh(t){if(t=Oa(t)){if(typeof Cu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Dl(e),Cu(t.stateNode,t.type,e))}}function Gm(t){cs?us?us.push(t):us=[t]:cs=t}function Wm(){if(cs){var t=cs,e=us;if(us=cs=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function Xm(t,e){return t(e)}function qm(){}var oc=!1;function Ym(t,e,n){if(oc)return t(e,n);oc=!0;try{return Xm(t,e,n)}finally{oc=!1,(cs!==null||us!==null)&&(qm(),Wm())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=Dl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ru=!1;if(hi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Ru=!1}function rv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ia=!1,$o=null,Ko=!1,Nu=null,sv={onError:function(t){ia=!0,$o=t}};function av(t,e,n,i,r,s,a,o,l){ia=!1,$o=null,rv.apply(sv,arguments)}function ov(t,e,n,i,r,s,a,o,l){if(av.apply(this,arguments),ia){if(ia){var c=$o;ia=!1,$o=null}else throw Error(se(198));Ko||(Ko=!0,Nu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Rr(t)!==t)throw Error(se(188))}function lv(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Km(t){return t=lv(t),t!==null?Qm(t):null}function Qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=fn.unstable_scheduleCallback,zh=fn.unstable_cancelCallback,cv=fn.unstable_shouldYield,uv=fn.unstable_requestPaint,St=fn.unstable_now,dv=fn.unstable_getCurrentPriorityLevel,Rd=fn.unstable_ImmediatePriority,Zm=fn.unstable_UserBlockingPriority,Qo=fn.unstable_NormalPriority,hv=fn.unstable_LowPriority,eg=fn.unstable_IdlePriority,Nl=null,Yn=null;function fv(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:gv,pv=Math.log,mv=Math.LN2;function gv(t){return t>>>=0,t===0?32:31-(pv(t)/mv|0)|0}var Ya=64,$a=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Zs(o):(s&=a,s!==0&&(i=Zs(s)))}else a=n&~r,a!==0?i=Zs(a):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function xv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Un(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=xv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,Pd,rg,sg,ag,Lu=!1,Ka=[],ki=null,Ui=null,Oi=null,_a=new Map,ya=new Map,Ri=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oa(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Sv(t,e,n,i,r){switch(e){case"focusin":return ki=js(ki,t,e,n,i,r),!0;case"dragenter":return Ui=js(Ui,t,e,n,i,r),!0;case"mouseover":return Oi=js(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,js(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,js(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=mr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,ag(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Tu=i,n.target.dispatchEvent(i),Tu=null}else return e=Oa(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hh(t,e,n){Uo(t)&&n.delete(e)}function Ev(){Lu=!1,ki!==null&&Uo(ki)&&(ki=null),Ui!==null&&Uo(Ui)&&(Ui=null),Oi!==null&&Uo(Oi)&&(Oi=null),_a.forEach(Hh),ya.forEach(Hh)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Lu||(Lu=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,Ev)))}function Sa(t){function e(r){return Hs(r,t)}if(0<Ka.length){Hs(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Hs(ki,t),Ui!==null&&Hs(Ui,t),Oi!==null&&Hs(Oi,t),_a.forEach(e),ya.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Ri.shift()}var ds=gi.ReactCurrentBatchConfig,Zo=!0;function Mv(t,e,n,i){var r=tt,s=ds.transition;ds.transition=null;try{tt=1,Ld(t,e,n,i)}finally{tt=r,ds.transition=s}}function wv(t,e,n,i){var r=tt,s=ds.transition;ds.transition=null;try{tt=4,Ld(t,e,n,i)}finally{tt=r,ds.transition=s}}function Ld(t,e,n,i){if(Zo){var r=Iu(t,e,n,i);if(r===null)vc(t,e,i,el,n),jh(t,i);else if(Sv(r,t,e,n,i))i.stopPropagation();else if(jh(t,i),e&4&&-1<yv.indexOf(t)){for(;r!==null;){var s=Oa(r);if(s!==null&&ig(s),s=Iu(t,e,n,i),s===null&&vc(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else vc(t,e,i,null,n)}}var el=null;function Iu(t,e,n,i){if(el=null,t=Cd(i),t=mr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case Rd:return 1;case Zm:return 4;case Qo:case hv:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Li=null,Id=null,Oo=null;function cg(){if(Oo)return Oo;var t,e=Id,n=e.length,i,r="value"in Li?Li.value:Li.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Oo=r.slice(t,1<i?1-i:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function Vh(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:Vh,this.isPropagationStopped=Vh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=mn(Ls),Ua=mt({},Ls,{view:0,detail:0}),bv=mn(Ua),cc,uc,Vs,Pl=mt({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(cc=t.screenX-Vs.screenX,uc=t.screenY-Vs.screenY):uc=cc=0,Vs=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Gh=mn(Pl),Av=mt({},Pl,{dataTransfer:0}),Tv=mn(Av),Cv=mt({},Ua,{relatedTarget:0}),dc=mn(Cv),Rv=mt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=mn(Rv),Pv=mt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=mn(Pv),Iv=mt({},Ls,{data:0}),Wh=mn(Iv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uv[t])?!!e[t]:!1}function kd(){return Ov}var Fv=mt({},Ua,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=mn(Fv),zv=mt({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=mn(zv),jv=mt({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),Hv=mn(jv),Vv=mt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=mn(Vv),Wv=mt({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=mn(Wv),qv=[9,13,27,32],Ud=hi&&"CompositionEvent"in window,ra=null;hi&&"documentMode"in document&&(ra=document.documentMode);var Yv=hi&&"TextEvent"in window&&!ra,ug=hi&&(!Ud||ra&&8<ra&&11>=ra),qh=" ",Yh=!1;function dg(t,e){switch(t){case"keyup":return qv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function $v(t,e){switch(t){case"compositionend":return hg(e);case"keypress":return e.which!==32?null:(Yh=!0,qh);case"textInput":return t=e.data,t===qh&&Yh?null:t;default:return null}}function Kv(t,e){if(Qr)return t==="compositionend"||!Ud&&dg(t,e)?(t=cg(),Oo=Id=Li=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qv[t.type]:e==="textarea"}function fg(t,e,n,i){Gm(i),e=tl(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,Ea=null;function Jv(t){wg(t,0)}function Ll(t){var e=es(t);if(Om(e))return t}function Zv(t,e){if(t==="change")return e}var pg=!1;if(hi){var hc;if(hi){var fc="oninput"in document;if(!fc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),fc=typeof Kh.oninput=="function"}hc=fc}else hc=!1;pg=hc&&(!document.documentMode||9<document.documentMode)}function Qh(){sa&&(sa.detachEvent("onpropertychange",mg),Ea=sa=null)}function mg(t){if(t.propertyName==="value"&&Ll(Ea)){var e=[];fg(e,Ea,t,Cd(t)),Ym(Jv,e)}}function e_(t,e,n){t==="focusin"?(Qh(),sa=e,Ea=n,sa.attachEvent("onpropertychange",mg)):t==="focusout"&&Qh()}function t_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(Ea)}function n_(t,e){if(t==="click")return Ll(e)}function i_(t,e){if(t==="input"||t==="change")return Ll(e)}function r_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:r_;function Ma(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mu.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=Yo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yo(t.document)}return e}function Od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function s_(t){var e=xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&Od(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zh(n,s);var a=Zh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a_=hi&&"documentMode"in document&&11>=document.documentMode,Jr=null,Du=null,aa=null,ku=!1;function ef(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||Jr==null||Jr!==Yo(i)||(i=Jr,"selectionStart"in i&&Od(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Ma(aa,i)||(aa=i,i=tl(Du,"onSelect"),0<i.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},pc={},vg={};hi&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Il(t){if(pc[t])return pc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return pc[t]=e[n];return t}var _g=Il("animationend"),yg=Il("animationiteration"),Sg=Il("animationstart"),Eg=Il("transitionend"),Mg=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Mg.set(t,e),Cr(e,[t])}for(var mc=0;mc<tf.length;mc++){var gc=tf[mc],o_=gc.toLowerCase(),l_=gc[0].toUpperCase()+gc.slice(1);Ki(o_,"on"+l_)}Ki(_g,"onAnimationEnd");Ki(yg,"onAnimationIteration");Ki(Sg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Eg,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function nf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ov(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;nf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;nf(r,o,c),s=l}}}if(Ko)throw t=Nu,Ko=!1,Nu=null,t}function ot(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function xc(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[Za]){t[Za]=!0,Lm.forEach(function(n){n!=="selectionchange"&&(c_.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,xc("selectionchange",!1,e))}}function bg(t,e,n,i){switch(lg(e)){case 1:var r=Mv;break;case 4:r=wv;break;default:r=Ld}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ym(function(){var c=s,h=Cd(n),p=[];e:{var f=Mg.get(t);if(f!==void 0){var m=Dd,_=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":m=Bv;break;case"focusin":_="focus",m=dc;break;case"focusout":_="blur",m=dc;break;case"beforeblur":case"afterblur":m=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Hv;break;case _g:case yg:case Sg:m=Nv;break;case Eg:m=Gv;break;case"scroll":m=bv;break;case"wheel":m=Xv;break;case"copy":case"cut":case"paste":m=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Xh}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=va(v,d),y!=null&&S.push(ba(v,y,x)))),g)break;v=v.return}0<S.length&&(f=new m(f,_,null,n,h),p.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Tu&&(_=n.relatedTarget||n.fromElement)&&(mr(_)||_[fi]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?mr(_):null,_!==null&&(g=Rr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=Gh,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Xh,y="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?f:es(m),x=_==null?f:es(_),f=new S(y,v+"leave",m,n,h),f.target=g,f.relatedTarget=x,y=null,mr(h)===c&&(S=new S(d,v+"enter",_,n,h),S.target=x,S.relatedTarget=g,y=S),g=y,m&&_)t:{for(S=m,d=_,v=0,x=S;x;x=Nr(x))v++;for(x=0,y=d;y;y=Nr(y))x++;for(;0<v-x;)S=Nr(S),v--;for(;0<x-v;)d=Nr(d),x--;for(;v--;){if(S===d||d!==null&&S===d.alternate)break t;S=Nr(S),d=Nr(d)}S=null}else S=null;m!==null&&rf(p,f,m,S,!1),_!==null&&g!==null&&rf(p,g,_,S,!0)}}e:{if(f=c?es(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Zv;else if($h(f))if(pg)C=i_;else{C=t_;var b=e_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=n_);if(C&&(C=C(t,c))){fg(p,C,n,h);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Eu(f,"number",f.value)}switch(b=c?es(c):window,t){case"focusin":($h(b)||b.contentEditable==="true")&&(Jr=b,Du=c,aa=null);break;case"focusout":aa=Du=Jr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,ef(p,n,h);break;case"selectionchange":if(a_)break;case"keydown":case"keyup":ef(p,n,h)}var A;if(Ud)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qr?dg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ug&&n.locale!=="ko"&&(Qr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qr&&(A=cg()):(Li=h,Id="value"in Li?Li.value:Li.textContent,Qr=!0)),b=tl(c,R),0<b.length&&(R=new Wh(R,t,null,n,h),p.push({event:R,listeners:b}),A?R.data=A:(A=hg(n),A!==null&&(R.data=A)))),(A=Yv?$v(t,n):Kv(t,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(h=new Wh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=A))}wg(p,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(ba(t,s,r)),s=va(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=va(n,s),l!=null&&a.unshift(ba(n,l,o))):r||(l=va(n,s),l!=null&&a.push(ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var u_=/\r\n?/g,d_=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(u_,`
`).replace(d_,"")}function eo(t,e,n){if(e=sf(e),sf(t)!==e&&n)throw Error(se(425))}function nl(){}var Uu=null,Ou=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(t){return af.resolve(null).then(t).catch(p_)}:Bu;function p_(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function of(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Is,Aa="__reactProps$"+Is,fi="__reactContainer$"+Is,zu="__reactEvents$"+Is,m_="__reactListeners$"+Is,g_="__reactHandles$"+Is;function mr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=of(t);t!==null;){if(n=t[Wn])return n;t=of(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[Wn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Dl(t){return t[Aa]||null}var ju=[],ts=-1;function Qi(t){return{current:t}}function ct(t){0>ts||(t.current=ju[ts],ju[ts]=null,ts--)}function at(t,e){ts++,ju[ts]=t.current,t.current=e}var Xi={},Vt=Qi(Xi),Zt=Qi(!1),Er=Xi;function _s(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function il(){ct(Zt),ct(Vt)}function lf(t,e,n){if(Vt.current!==Xi)throw Error(se(168));at(Vt,e),at(Zt,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,ev(t)||"Unknown",r));return mt({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Er=Vt.current,at(Vt,t),at(Zt,Zt.current),!0}function cf(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Ag(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,ct(Zt),ct(Vt),at(Vt,t)):ct(Zt),at(Zt,n)}var ai=null,kl=!1,yc=!1;function Tg(t){ai===null?ai=[t]:ai.push(t)}function x_(t){kl=!0,Tg(t)}function Ji(){if(!yc&&ai!==null){yc=!0;var t=0,e=tt;try{var n=ai;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,kl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Jm(Rd,Ji),r}finally{tt=e,yc=!1}}return null}var ns=[],is=0,sl=null,al=0,yn=[],Sn=0,Mr=null,li=1,ci="";function lr(t,e){ns[is++]=al,ns[is++]=sl,sl=t,al=e}function Cg(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Mr,Mr=t;var i=li;t=ci;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Un(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Fd(t){t.return!==null&&(lr(t,1),Cg(t,1,0))}function Bd(t){for(;t===sl;)sl=ns[--is],ns[is]=null,al=ns[--is],ns[is]=null;for(;t===Mr;)Mr=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var hn=null,dn=null,dt=!1,Dn=null;function Rg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(dt){var e=dn;if(e){var n=e;if(!uf(t,e)){if(Hu(t))throw Error(se(418));e=Fi(n.nextSibling);var i=hn;e&&uf(t,e)?Rg(i,n):(t.flags=t.flags&-4097|2,dt=!1,hn=t)}}else{if(Hu(t))throw Error(se(418));t.flags=t.flags&-4097|2,dt=!1,hn=t}}}function df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function to(t){if(t!==hn)return!1;if(!dt)return df(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=dn)){if(Hu(t))throw Ng(),Error(se(418));for(;e;)Rg(t,e),e=Fi(e.nextSibling)}if(df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Fi(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=dn;t;)t=Fi(t.nextSibling)}function ys(){dn=hn=null,dt=!1}function zd(t){Dn===null?Dn=[t]:Dn.push(t)}var v_=gi.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hf(t){var e=t._init;return e(t._payload)}function Pg(t){function e(d,v){if(t){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Hi(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,x,y){return v===null||v.tag!==6?(v=Tc(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var C=x.type;return C===Kr?h(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ti&&hf(C)===v.type)?(y=r(v,x.props),y.ref=Gs(d,v,x),y.return=d,y):(y=Wo(x.type,x.key,x.props,null,d.mode,y),y.ref=Gs(d,v,x),y.return=d,y)}function c(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Cc(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function h(d,v,x,y,C){return v===null||v.tag!==7?(v=Sr(x,d.mode,y,C),v.return=d,v):(v=r(v,x),v.return=d,v)}function p(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Tc(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return x=Wo(v.type,v.key,v.props,null,d.mode,x),x.ref=Gs(d,null,v),x.return=d,x;case $r:return v=Cc(v,d.mode,x),v.return=d,v;case Ti:var y=v._init;return p(d,y(v._payload),x)}if(Js(v)||Bs(v))return v=Sr(v,d.mode,x,null),v.return=d,v;no(d,v)}return null}function f(d,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return x.key===C?l(d,v,x,y):null;case $r:return x.key===C?c(d,v,x,y):null;case Ti:return C=x._init,f(d,v,C(x._payload),y)}if(Js(x)||Bs(x))return C!==null?null:h(d,v,x,y,null);no(d,x)}return null}function m(d,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,o(v,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wa:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,C);case $r:return d=d.get(y.key===null?x:y.key)||null,c(v,d,y,C);case Ti:var b=y._init;return m(d,v,x,b(y._payload),C)}if(Js(y)||Bs(y))return d=d.get(x)||null,h(v,d,y,C,null);no(v,y)}return null}function _(d,v,x,y){for(var C=null,b=null,A=v,R=v=0,M=null;A!==null&&R<x.length;R++){A.index>R?(M=A,A=null):M=A.sibling;var E=f(d,A,x[R],y);if(E===null){A===null&&(A=M);break}t&&A&&E.alternate===null&&e(d,A),v=s(E,v,R),b===null?C=E:b.sibling=E,b=E,A=M}if(R===x.length)return n(d,A),dt&&lr(d,R),C;if(A===null){for(;R<x.length;R++)A=p(d,x[R],y),A!==null&&(v=s(A,v,R),b===null?C=A:b.sibling=A,b=A);return dt&&lr(d,R),C}for(A=i(d,A);R<x.length;R++)M=m(A,d,R,x[R],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),v=s(M,v,R),b===null?C=M:b.sibling=M,b=M);return t&&A.forEach(function(P){return e(d,P)}),dt&&lr(d,R),C}function S(d,v,x,y){var C=Bs(x);if(typeof C!="function")throw Error(se(150));if(x=C.call(x),x==null)throw Error(se(151));for(var b=C=null,A=v,R=v=0,M=null,E=x.next();A!==null&&!E.done;R++,E=x.next()){A.index>R?(M=A,A=null):M=A.sibling;var P=f(d,A,E.value,y);if(P===null){A===null&&(A=M);break}t&&A&&P.alternate===null&&e(d,A),v=s(P,v,R),b===null?C=P:b.sibling=P,b=P,A=M}if(E.done)return n(d,A),dt&&lr(d,R),C;if(A===null){for(;!E.done;R++,E=x.next())E=p(d,E.value,y),E!==null&&(v=s(E,v,R),b===null?C=E:b.sibling=E,b=E);return dt&&lr(d,R),C}for(A=i(d,A);!E.done;R++,E=x.next())E=m(A,d,R,E.value,y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?R:E.key),v=s(E,v,R),b===null?C=E:b.sibling=E,b=E);return t&&A.forEach(function(z){return e(d,z)}),dt&&lr(d,R),C}function g(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Kr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:e:{for(var C=x.key,b=v;b!==null;){if(b.key===C){if(C=x.type,C===Kr){if(b.tag===7){n(d,b.sibling),v=r(b,x.props.children),v.return=d,d=v;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ti&&hf(C)===b.type){n(d,b.sibling),v=r(b,x.props),v.ref=Gs(d,b,x),v.return=d,d=v;break e}n(d,b);break}else e(d,b);b=b.sibling}x.type===Kr?(v=Sr(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=Wo(x.type,x.key,x.props,null,d.mode,y),y.ref=Gs(d,v,x),y.return=d,d=y)}return a(d);case $r:e:{for(b=x.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Cc(x,d.mode,y),v.return=d,d=v}return a(d);case Ti:return b=x._init,g(d,v,b(x._payload),y)}if(Js(x))return _(d,v,x,y);if(Bs(x))return S(d,v,x,y);no(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,x),v.return=d,d=v):(n(d,v),v=Tc(x,d.mode,y),v.return=d,d=v),a(d)):n(d,v)}return g}var Ss=Pg(!0),Lg=Pg(!1),ol=Qi(null),ll=null,rs=null,jd=null;function Hd(){jd=rs=ll=null}function Vd(t){var e=ol.current;ct(ol),t._currentValue=e}function Gu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){ll=t,jd=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(jd!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(ll===null)throw Error(se(308));rs=t,ll.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var gr=null;function Gd(t){gr===null?gr=[t]:gr.push(t)}function Ig(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function Wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nd(t,n)}}function ff(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=mt({},p,f);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=p}}function pf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Fa={},$n=Qi(Fa),Ta=Qi(Fa),Ca=Qi(Fa);function xr(t){if(t===Fa)throw Error(se(174));return t}function Xd(t,e){switch(at(Ca,e),at(Ta,t),at($n,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wu(e,t)}ct($n),at($n,e)}function Es(){ct($n),ct(Ta),ct(Ca)}function kg(t){xr(Ca.current);var e=xr($n.current),n=wu(e,t.type);e!==n&&(at(Ta,t),at($n,n))}function qd(t){Ta.current===t&&(ct($n),ct(Ta))}var ht=Qi(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function Yd(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var zo=gi.ReactCurrentDispatcher,Ec=gi.ReactCurrentBatchConfig,wr=0,ft=null,wt=null,Nt=null,dl=!1,oa=!1,Ra=0,__=0;function Ft(){throw Error(se(321))}function $d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Kd(t,e,n,i,r,s){if(wr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zo.current=t===null||t.memoizedState===null?M_:w_,t=n(i,r),oa){s=0;do{if(oa=!1,Ra=0,25<=s)throw Error(se(301));s+=1,Nt=wt=null,e.updateQueue=null,zo.current=b_,t=n(i,r)}while(oa)}if(zo.current=hl,e=wt!==null&&wt.next!==null,wr=0,Nt=wt=ft=null,dl=!1,e)throw Error(se(300));return t}function Qd(){var t=Ra!==0;return Ra=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function An(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?ft.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(se(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Na(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=An(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((wr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,ft.lanes|=h,br|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Bn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=An(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Bn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ug(){}function Og(t,e){var n=ft,i=An(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Jd(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Bg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(se(349));wr&30||Fg(n,e,r)}return r}function Fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,i){e.value=n,e.getSnapshot=i,jg(e)&&Hg(t)}function zg(t,e,n){return n(function(){jg(e)&&Hg(t)})}function jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Hg(t){var e=pi(t,1);e!==null&&On(e,t,1,-1)}function mf(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=E_.bind(null,ft,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vg(){return An().memoizedState}function jo(t,e,n,i){var r=jn();ft.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function Ul(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&$d(i,a.deps)){r.memoizedState=Pa(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function gf(t,e){return jo(8390656,8,t,e)}function Jd(t,e){return Ul(2048,8,t,e)}function Gg(t,e){return Ul(4,2,t,e)}function Wg(t,e){return Ul(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,Xg.bind(null,e,t),n)}function Zd(){}function Yg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$d(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $g(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$d(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return wr&21?(Bn(n,e)||(n=tg(),ft.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function y_(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{tt=n,Ec.transition=i}}function Qg(){return An().memoizedState}function S_(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jg(t))Zg(e,n);else if(n=Ig(t,e,n,i),n!==null){var r=Yt();On(n,t,i,r),e0(n,e,i)}}function E_(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jg(t))Zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var l=e.interleaved;l===null?(r.next=r,Gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ig(t,e,r,i),n!==null&&(r=Yt(),On(n,t,i,r),e0(n,e,i))}}function Jg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Zg(t,e){oa=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nd(t,n)}}var hl={readContext:bn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},M_={readContext:bn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=S_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:mf,useDebugValue:Zd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=mf(!1),e=t[0];return t=y_.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=jn();if(dt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Lt===null)throw Error(se(349));wr&30||Fg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gf(zg.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,Bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Lt.identifierPrefix;if(dt){var n=ci,i=li;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=__++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},w_={readContext:bn,useCallback:Yg,useContext:bn,useEffect:Jd,useImperativeHandle:qg,useInsertionEffect:Gg,useLayoutEffect:Wg,useMemo:$g,useReducer:Mc,useRef:Vg,useState:function(){return Mc(Na)},useDebugValue:Zd,useDeferredValue:function(t){var e=An();return Kg(e,wt.memoizedState,t)},useTransition:function(){var t=Mc(Na)[0],e=An().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Og,useId:Qg,unstable_isNewReconciler:!1},b_={readContext:bn,useCallback:Yg,useContext:bn,useEffect:Jd,useImperativeHandle:qg,useInsertionEffect:Gg,useLayoutEffect:Wg,useMemo:$g,useReducer:wc,useRef:Vg,useState:function(){return wc(Na)},useDebugValue:Zd,useDeferredValue:function(t){var e=An();return wt===null?e.memoizedState=t:Kg(e,wt.memoizedState,t)},useTransition:function(){var t=wc(Na)[0],e=An().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Og,useId:Qg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=ji(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(On(e,t,r,i),Bo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=ji(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(On(e,t,r,i),Bo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=ji(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(On(e,t,i,n),Bo(e,t,i))}};function xf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function t0(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=en(e)?Er:Vt.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Xu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=en(e)?Er:Vt.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=Zx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var A_=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,id=i),qu(t,e)},n}function i0(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function _f(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new A_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=z_.bind(null,t,e,n),e.then(t,t))}function yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var T_=gi.ReactCurrentOwner,Jt=!1;function qt(t,e,n,i){e.child=t===null?Lg(e,null,n,i):Ss(e,t.child,n,i)}function Ef(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=Kd(t,e,n,i,s,r),n=Qd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(dt&&n&&Fd(e),e.flags|=1,qt(t,e,i,r),e.child)}function Mf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Yu(t,e,n,i,r)}function s0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(as,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(as,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(as,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(as,cn),cn|=i;return qt(t,e,r,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yu(t,e,n,i,r){var s=en(n)?Er:Vt.current;return s=_s(e,s),hs(e,r),n=Kd(t,e,n,i,s,r),i=Qd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(dt&&i&&Fd(e),e.flags|=1,qt(t,e,n,r),e.child)}function wf(t,e,n,i,r){if(en(n)){var s=!0;rl(e)}else s=!1;if(hs(e,r),e.stateNode===null)Ho(t,e),t0(e,n,i),Xu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=en(n)?Er:Vt.current,c=_s(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&vf(e,a,i,c),Ci=!1;var f=e.memoizedState;a.state=f,cl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Zt.current||Ci?(typeof h=="function"&&(Wu(e,n,h,i),l=e.memoizedState),(o=Ci||xf(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Dg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=en(n)?Er:Vt.current,l=_s(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&vf(e,a,i,l),Ci=!1,f=e.memoizedState,a.state=f,cl(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||Zt.current||Ci?(typeof m=="function"&&(Wu(e,n,m,i),_=e.memoizedState),(c=Ci||xf(e,n,c,i,f,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return $u(t,e,n,i,s,r)}function $u(t,e,n,i,r,s){a0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&cf(e,n,!1),mi(t,e,s);i=e.stateNode,T_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):qt(t,e,o,s),e.memoizedState=i.state,r&&cf(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?lf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lf(t,e.context,!1),Xd(t,e.containerInfo)}function bf(t,e,n,i,r){return ys(),zd(r),e.flags|=256,qt(t,e,n,i),e.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(ht,r&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=zl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Ku,t):eh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return C_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ku,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function eh(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,i){return i!==null&&zd(i),Ss(e,t.child,null,n),t=eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function C_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=bc(Error(se(422))),io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Qu(a),e.memoizedState=Ku,s);if(!(e.mode&1))return io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=bc(s,i,void 0),io(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),On(i,t,r,-1))}return ah(),i=bc(Error(se(421))),io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=j_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Fi(r.nextSibling),hn=e,dt=!0,Dn=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Mr,li=t.id,ci=t.overflow,Mr=e),e=eh(e,i.children),e.flags|=4096,e)}function Af(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gu(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Af(t,n,e);else if(t.tag===19)Af(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R_(t,e,n){switch(e.tag){case 3:o0(e),ys();break;case 5:kg(e);break;case 1:en(e.type)&&rl(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(at(ht,ht.current&1),t=mi(t,e,n),t!==null?t.sibling:null);at(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return mi(t,e,n)}var u0,Ju,d0,h0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ju=function(){};d0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr($n.current);var s=null;switch(n){case"input":r=yu(t,r),i=yu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Mu(t,r),i=Mu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}bu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function N_(t,e,n){var i=e.pendingProps;switch(Bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return en(e.type)&&il(),Bt(e),null;case 3:return i=e.stateNode,Es(),ct(Zt),ct(Vt),Yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(ad(Dn),Dn=null))),Ju(t,e),Bt(e),null;case 5:qd(e);var r=xr(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)d0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Bt(e),null}if(t=xr($n.current),to(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)ot(ea[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Dh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Uh(i,s),ot("invalid",i)}bu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&eo(i.textContent,o,t),r=["children",""+o]):ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":Xa(i),kh(i,s,!0);break;case"textarea":Xa(i),Oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Wn]=e,t[Aa]=i,u0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Au(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)ot(ea[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Dh(t,i),r=yu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Uh(t,i),r=Mu(t,i),ot("invalid",t);break;default:r=i}bu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&wd(t,s,l,a))}switch(n){case"input":Xa(t),kh(t,i,!1);break;case"textarea":Xa(t),Oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)h0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=xr(Ca.current),xr($n.current),to(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&dn!==null&&e.mode&1&&!(e.flags&128))Ng(),ys(),e.flags|=98560,s=!1;else if(s=to(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Wn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Dn!==null&&(ad(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?bt===0&&(bt=3):ah())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Es(),Ju(t,e),t===null&&wa(e.stateNode.containerInfo),Bt(e),null;case 10:return Vd(e.type._context),Bt(e),null;case 17:return en(e.type)&&il(),Bt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ws(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ul(t),a!==null){for(e.flags|=128,Ws(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>ws&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Bt(e),null}else 2*St()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ht.current,at(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function P_(t,e){switch(Bd(e),e.tag){case 1:return en(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ct(Zt),ct(Vt),Yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return Es(),null;case 10:return Vd(e.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var ro=!1,Ht=!1,L_=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Zu(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Tf=!1;function I_(t,e){if(Uu=Zo,t=xg(),Od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},Zo=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,g=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ln(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){_t(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Tf,Tf=!1,_}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Aa],delete e[zu],delete e[m_],delete e[g_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var It=null,In=!1;function _i(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Ht||ss(n,e);case 6:var i=It,r=In;It=null,_i(t,e,n),It=i,In=r,It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),Sa(t)):_c(It,n.stateNode));break;case 4:i=It,r=In,It=n.stateNode.containerInfo,In=!0,_i(t,e,n),It=i,In=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Zu(n,e,a),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Ht&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,_i(t,e,n),Ht=i):_i(t,e,n);break;default:_i(t,e,n)}}function Rf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L_),e.forEach(function(i){var r=H_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:It=o.stateNode,In=!1;break e;case 3:It=o.stateNode.containerInfo,In=!0;break e;case 4:It=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(It===null)throw Error(se(160));m0(s,a,r),It=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),zn(t),i&4){try{la(3,t,t.return),Fl(3,t)}catch(S){_t(t,t.return,S)}try{la(5,t,t.return)}catch(S){_t(t,t.return,S)}}break;case 1:Cn(e,t),zn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(Cn(e,t),zn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(S){_t(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Fm(r,s),Au(o,a);var c=Au(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?Vm(r,p):h==="dangerouslySetInnerHTML"?jm(r,p):h==="children"?xa(r,p):wd(r,h,p,c)}switch(o){case"input":Su(r,s);break;case"textarea":Bm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ls(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(S){_t(t,t.return,S)}}break;case 6:if(Cn(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){_t(t,t.return,S)}}break;case 3:if(Cn(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(S){_t(t,t.return,S)}break;case 4:Cn(e,t),zn(t);break;case 13:Cn(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ih=St())),i&4&&Rf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||h,Cn(e,t),Ht=c):Cn(e,t),zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ge=t,h=t.child;h!==null;){for(p=ge=h;ge!==null;){switch(f=ge,m=f.child,f.tag){case 0:case 11:case 14:case 15:la(4,f,f.return);break;case 1:ss(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){_t(i,n,S)}}break;case 5:ss(f,f.return);break;case 22:if(f.memoizedState!==null){Pf(p);continue}}m!==null?(m.return=f,ge=m):Pf(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Hm("display",a))}catch(S){_t(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){_t(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cn(e,t),zn(t),i&4&&Rf(t);break;case 21:break;default:Cn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=Cf(t);nd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Cf(t);td(t,o,a);break;default:throw Error(se(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function D_(t,e,n){ge=t,x0(t)}function x0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ro;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ht;o=ro;var c=Ht;if(ro=a,(Ht=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Lf(r):l!==null?(l.return=a,ge=l):Lf(r);for(;s!==null;)ge=s,x0(s),s=s.sibling;ge=r,ro=o,Ht=c}Nf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Nf(t)}}function Nf(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Sa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Ht||e.flags&512&&ed(e)}catch(f){_t(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Pf(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Lf(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{ed(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{ed(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var k_=Math.ceil,fl=gi.ReactCurrentDispatcher,th=gi.ReactCurrentOwner,wn=gi.ReactCurrentBatchConfig,$e=0,Lt=null,Mt=null,kt=0,cn=0,as=Qi(0),bt=0,La=null,br=0,Bl=0,nh=0,ca=null,Qt=null,ih=0,ws=1/0,si=null,pl=!1,id=null,zi=null,so=!1,Ii=null,ml=0,ua=0,rd=null,Vo=-1,Go=0;function Yt(){return $e&6?St():Vo!==-1?Vo:Vo=St()}function ji(t){return t.mode&1?$e&2&&kt!==0?kt&-kt:v_.transition!==null?(Go===0&&(Go=tg()),Go):(t=tt,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function On(t,e,n,i){if(50<ua)throw ua=0,rd=null,Error(se(185));ka(t,n,i),(!($e&2)||t!==Lt)&&(t===Lt&&(!($e&2)&&(Bl|=n),bt===4&&Ni(t,kt)),tn(t,i),n===1&&$e===0&&!(e.mode&1)&&(ws=St()+500,kl&&Ji()))}function tn(t,e){var n=t.callbackNode;vv(t,e);var i=Jo(t,t===Lt?kt:0);if(i===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?x_(If.bind(null,t)):Tg(If.bind(null,t)),f_(function(){!($e&6)&&Ji()}),n=null;else{switch(ng(i)){case 1:n=Rd;break;case 4:n=Zm;break;case 16:n=Qo;break;case 536870912:n=eg;break;default:n=Qo}n=b0(n,v0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v0(t,e){if(Vo=-1,Go=0,$e&6)throw Error(se(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=Jo(t,t===Lt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=$e;$e|=2;var s=y0();(Lt!==t||kt!==e)&&(si=null,ws=St()+500,yr(t,e));do try{F_();break}catch(o){_0(t,o)}while(!0);Hd(),fl.current=s,$e=r,Mt!==null?e=0:(Lt=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=Pu(t),r!==0&&(i=r,e=sd(t,r))),e===1)throw n=La,yr(t,0),Ni(t,i),tn(t,St()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!U_(r)&&(e=gl(t,i),e===2&&(s=Pu(t),s!==0&&(i=s,e=sd(t,s))),e===1))throw n=La,yr(t,0),Ni(t,i),tn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:cr(t,Qt,si);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=ih+500-St(),10<e)){if(Jo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bu(cr.bind(null,t,Qt,si),e);break}cr(t,Qt,si);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Un(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*k_(i/1960))-i,10<i){t.timeoutHandle=Bu(cr.bind(null,t,Qt,si),i);break}cr(t,Qt,si);break;case 5:cr(t,Qt,si);break;default:throw Error(se(329))}}}return tn(t,St()),t.callbackNode===n?v0.bind(null,t):null}function sd(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&ad(e)),t}function ad(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function U_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~nh,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function If(t){if($e&6)throw Error(se(327));fs();var e=Jo(t,0);if(!(e&1))return tn(t,St()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=Pu(t);i!==0&&(e=i,n=sd(t,i))}if(n===1)throw n=La,yr(t,0),Ni(t,e),tn(t,St()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Qt,si),tn(t,St()),null}function rh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(ws=St()+500,kl&&Ji())}}function Ar(t){Ii!==null&&Ii.tag===0&&!($e&6)&&fs();var e=$e;$e|=1;var n=wn.transition,i=tt;try{if(wn.transition=null,tt=1,t)return t()}finally{tt=i,wn.transition=n,$e=e,!($e&6)&&Ji()}}function sh(){cn=as.current,ct(as)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:Es(),ct(Zt),ct(Vt),Yd();break;case 5:qd(i);break;case 4:Es();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:Vd(i.type._context);break;case 22:case 23:sh()}n=n.return}if(Lt=t,Mt=t=Hi(t.current,null),kt=cn=e,bt=0,La=null,nh=Bl=br=0,Qt=ca=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}gr=null}return t}function _0(t,e){do{var n=Mt;try{if(Hd(),zo.current=hl,dl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(wr=0,Nt=wt=ft=null,oa=!1,Ra=0,th.current=null,n===null||n.return===null){bt=1,La=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=yf(a);if(m!==null){m.flags&=-257,Sf(m,a,o,s,e),m.mode&1&&_f(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){_f(s,c,e),ah();break e}l=Error(se(426))}}else if(dt&&o.mode&1){var g=yf(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Sf(g,a,o,s,e),zd(Ms(l,o));break e}}s=l=Ms(l,o),bt!==4&&(bt=2),ca===null?ca=[s]:ca.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=n0(s,l,e);ff(s,d);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zi===null||!zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=i0(s,o,e);ff(s,y);break e}}s=s.return}while(s!==null)}E0(n)}catch(C){e=C,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function y0(){var t=fl.current;return fl.current=hl,t===null?hl:t}function ah(){(bt===0||bt===3||bt===2)&&(bt=4),Lt===null||!(br&268435455)&&!(Bl&268435455)||Ni(Lt,kt)}function gl(t,e){var n=$e;$e|=2;var i=y0();(Lt!==t||kt!==e)&&(si=null,yr(t,e));do try{O_();break}catch(r){_0(t,r)}while(!0);if(Hd(),$e=n,fl.current=i,Mt!==null)throw Error(se(261));return Lt=null,kt=0,bt}function O_(){for(;Mt!==null;)S0(Mt)}function F_(){for(;Mt!==null&&!cv();)S0(Mt)}function S0(t){var e=w0(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?E0(t):Mt=e,th.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=P_(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Mt=null;return}}else if(n=N_(n,e,cn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);bt===0&&(bt=5)}function cr(t,e,n){var i=tt,r=wn.transition;try{wn.transition=null,tt=1,B_(t,e,n,i)}finally{wn.transition=r,tt=i}return null}function B_(t,e,n,i){do fs();while(Ii!==null);if($e&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_v(t,s),t===Lt&&(Mt=Lt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,b0(Qo,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=tt;tt=1;var o=$e;$e|=4,th.current=null,I_(t,n),g0(n,t),s_(Ou),Zo=!!Uu,Ou=Uu=null,t.current=n,D_(n),uv(),$e=o,tt=a,wn.transition=s}else t.current=n;if(so&&(so=!1,Ii=t,ml=r),s=t.pendingLanes,s===0&&(zi=null),fv(n.stateNode),tn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=id,id=null,t;return ml&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===rd?ua++:(ua=0,rd=t):ua=0,Ji(),null}function fs(){if(Ii!==null){var t=ng(ml),e=wn.transition,n=tt;try{if(wn.transition=null,tt=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,ml=0,$e&6)throw Error(se(331));var r=$e;for($e|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var h=ge;switch(h.tag){case 0:case 11:case 15:la(8,h,s)}var p=h.child;if(p!==null)p.return=h,ge=p;else for(;ge!==null;){h=ge;var f=h.sibling,m=h.return;if(f0(h),h===c){ge=null;break}if(f!==null){f.return=m,ge=f;break}ge=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){a=ge;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ge=x;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fl(9,o)}}catch(C){_t(o,o.return,C)}if(o===a){ge=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ge=y;break e}ge=o.return}}if($e=r,Ji(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Nl,t)}catch{}i=!0}return i}finally{tt=n,wn.transition=e}}return!1}function Df(t,e,n){e=Ms(n,e),e=n0(t,e,1),t=Bi(t,e,1),e=Yt(),t!==null&&(ka(t,1,e),tn(t,e))}function _t(t,e,n){if(t.tag===3)Df(t,t,n);else for(;e!==null;){if(e.tag===3){Df(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=Ms(n,t),t=i0(e,t,1),e=Bi(e,t,1),t=Yt(),e!==null&&(ka(e,1,t),tn(e,t));break}}e=e.return}}function z_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>St()-ih?yr(t,0):nh|=n),tn(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Yt();t=pi(t,e),t!==null&&(ka(t,e,n),tn(t,n))}function j_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function H_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),M0(t,n)}var w0;w0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,R_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,dt&&e.flags&1048576&&Cg(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=_s(e,Vt.current);hs(e,n),r=Kd(null,e,i,t,r,n);var s=Qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wd(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,Xu(e,i,t,n),e=$u(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Fd(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=G_(i),t=Ln(i,t),r){case 0:e=Yu(null,e,i,t,n);break e;case 1:e=wf(null,e,i,t,n);break e;case 11:e=Ef(null,e,i,t,n);break e;case 14:e=Mf(null,e,i,Ln(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),wf(t,e,i,r,n);case 3:e:{if(o0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dg(t,e),cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(se(423)),e),e=bf(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(se(424)),e),e=bf(t,e,i,n,r);break e}else for(dn=Fi(e.stateNode.containerInfo.firstChild),hn=e,dt=!0,Dn=null,n=Lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=mi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return kg(e),t===null&&Vu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Fu(i,r)?a=null:s!==null&&Fu(i,s)&&(e.flags|=32),a0(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return l0(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ef(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(ol,i._currentValue),i._currentValue=a,s!==null)if(Bn(s.value,a)){if(s.children===r.children&&!Zt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Gu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=bn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),Mf(t,e,i,r,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ho(t,e),e.tag=1,en(i)?(t=!0,rl(e)):t=!1,hs(e,n),t0(e,i,r),Xu(e,i,r,n),$u(null,e,i,!0,t,n);case 19:return c0(t,e,n);case 22:return s0(t,e,n)}throw Error(se(156,e.tag))};function b0(t,e){return Jm(t,e)}function V_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new V_(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G_(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ad)return 11;if(t===Td)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Kr:return Sr(n.children,r,s,e);case bd:a=8,r|=8;break;case gu:return t=En(12,n,e,r|2),t.elementType=gu,t.lanes=s,t;case xu:return t=En(13,n,e,r),t.elementType=xu,t.lanes=s,t;case vu:return t=En(19,n,e,r),t.elementType=vu,t.lanes=s,t;case km:return zl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:a=10;break e;case Dm:a=9;break e;case Ad:a=11;break e;case Td:a=14;break e;case Ti:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=En(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function zl(t,e,n,i){return t=En(22,t,i,e),t.elementType=km,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function W_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lh(t,e,n,i,r,s,a,o,l){return t=new W_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(s),t}function X_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return Xi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(en(n))return Ag(t,n,e)}return e}function T0(t,e,n,i,r,s,a,o,l){return t=lh(n,i,!0,t,r,s,a,o,l),t.context=A0(null),n=t.current,i=Yt(),r=ji(n),s=di(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,ka(t,r,i),tn(t,i),t}function jl(t,e,n,i){var r=e.current,s=Yt(),a=ji(r);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(On(t,r,a,s),Bo(t,r,a)),a}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ch(t,e){kf(t,e),(t=t.alternate)&&kf(t,e)}function q_(){return null}var C0=typeof reportError=="function"?reportError:function(t){console.error(t)};function uh(t){this._internalRoot=t}Hl.prototype.render=uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));jl(t,e,null,null)};Hl.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){jl(null,t,null,null)}),e[fi]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&og(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function Y_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xl(a);s.call(c)}}var a=T0(e,i,t,0,null,!1,!1,"",Uf);return t._reactRootContainer=a,t[fi]=a.current,wa(t.nodeType===8?t.parentNode:t),Ar(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=xl(l);o.call(c)}}var l=lh(t,0,!1,null,null,!1,!1,"",Uf);return t._reactRootContainer=l,t[fi]=l.current,wa(t.nodeType===8?t.parentNode:t),Ar(function(){jl(e,l,n,i)}),l}function Gl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=xl(a);o.call(l)}}jl(e,a,t,r)}else a=Y_(n,e,t,r,i);return xl(a)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Nd(e,n|1),tn(e,St()),!($e&6)&&(ws=St()+500,Ji()))}break;case 13:Ar(function(){var i=pi(t,1);if(i!==null){var r=Yt();On(i,t,1,r)}}),ch(t,1)}};Pd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Yt();On(e,t,134217728,n)}ch(t,134217728)}};rg=function(t){if(t.tag===13){var e=ji(t),n=pi(t,e);if(n!==null){var i=Yt();On(n,t,e,i)}ch(t,e)}};sg=function(){return tt};ag=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Cu=function(t,e,n){switch(e){case"input":if(Su(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dl(i);if(!r)throw Error(se(90));Om(i),Su(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Xm=rh;qm=Ar;var $_={usingClientEntryPoint:!1,Events:[Oa,es,Dl,Gm,Wm,rh]},Xs={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K_={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Nl=ao.inject(K_),Yn=ao}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$_;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error(se(200));return X_(t,e,null,n)};pn.createRoot=function(t,e){if(!dh(t))throw Error(se(299));var n=!1,i="",r=C0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lh(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,wa(t.nodeType===8?t.parentNode:t),new uh(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Ar(t)};pn.hydrate=function(t,e,n){if(!Vl(e))throw Error(se(200));return Gl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!dh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=C0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=T0(e,null,t,1,n??null,r,!1,s,a),t[fi]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hl(e)};pn.render=function(t,e,n){if(!Vl(e))throw Error(se(200));return Gl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(se(40));return t._reactRootContainer?(Ar(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};pn.unstable_batchedUpdates=rh;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Gl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(t){console.error(t)}}R0(),Rm.exports=pn;var Q_=Rm.exports,Of=Q_;pu.createRoot=Of.createRoot,pu.hydrateRoot=Of.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="165",J_=0,Ff=1,Z_=2,N0=1,ey=2,ri=3,qi=0,nn=1,oi=2,Vi=0,ps=1,Bf=2,zf=3,jf=4,ty=5,hr=100,ny=101,iy=102,ry=103,sy=104,ay=200,oy=201,ly=202,cy=203,od=204,ld=205,uy=206,dy=207,hy=208,fy=209,py=210,my=211,gy=212,xy=213,vy=214,_y=0,yy=1,Sy=2,vl=3,Ey=4,My=5,wy=6,by=7,P0=0,Ay=1,Ty=2,Gi=0,Cy=1,Ry=2,Ny=3,Py=4,Ly=5,Iy=6,Dy=7,L0=300,bs=301,As=302,cd=303,ud=304,Wl=306,dd=1e3,vr=1001,hd=1002,Mn=1003,ky=1004,oo=1005,kn=1006,Rc=1007,_r=1008,Yi=1009,Uy=1010,Oy=1011,_l=1012,I0=1013,Ts=1014,Di=1015,Xl=1016,D0=1017,k0=1018,Cs=1020,Fy=35902,By=1021,zy=1022,qn=1023,jy=1024,Hy=1025,ms=1026,Rs=1027,Vy=1028,U0=1029,Gy=1030,O0=1031,F0=1033,Nc=33776,Pc=33777,Lc=33778,Ic=33779,Hf=35840,Vf=35841,Gf=35842,Wf=35843,Xf=36196,qf=37492,Yf=37496,$f=37808,Kf=37809,Qf=37810,Jf=37811,Zf=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,sp=37818,ap=37819,op=37820,lp=37821,Dc=36492,cp=36494,up=36495,Wy=36283,dp=36284,hp=36285,fp=36286,Xy=3200,qy=3201,B0=0,Yy=1,Pi="",Hn="srgb",Zi="srgb-linear",fh="display-p3",ql="display-p3-linear",yl="linear",lt="srgb",Sl="rec709",El="p3",Pr=7680,pp=519,$y=512,Ky=513,Qy=514,z0=515,Jy=516,Zy=517,eS=518,tS=519,mp=35044,gp="300 es",ui=2e3,Ml=2001;class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xp=1234567;const da=Math.PI/180,Ia=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Dt(t,e,n){return Math.max(e,Math.min(n,t))}function ph(t,e){return(t%e+e)%e}function nS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function iS(t,e,n){return t!==e?(n-t)/(e-t):0}function ha(t,e,n){return(1-n)*t+n*e}function rS(t,e,n,i){return ha(t,e,1-Math.exp(-n*i))}function sS(t,e=1){return e-Math.abs(ph(t,e*2)-e)}function aS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function oS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function lS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cS(t,e){return t+Math.random()*(e-t)}function uS(t){return t*(.5-Math.random())}function dS(t){t!==void 0&&(xp=t);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hS(t){return t*da}function fS(t){return t*Ia}function pS(t){return(t&t-1)===0&&t!==0}function mS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function gS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),p=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*p,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*p,o*c);break;case"ZXZ":t.set(l*p,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vp={DEG2RAD:da,RAD2DEG:Ia,generateUUID:ks,clamp:Dt,euclideanModulo:ph,mapLinear:nS,inverseLerp:iS,lerp:ha,damp:rS,pingpong:sS,smoothstep:aS,smootherstep:oS,randInt:lS,randFloat:cS,randFloatSpread:uS,seededRandom:dS,degToRad:hS,radToDeg:fS,isPowerOfTwo:pS,ceilPowerOfTwo:mS,floorPowerOfTwo:gS,setQuaternionFromProperEuler:xS,normalize:Wt,denormalize:Yr};class Ee{constructor(e=0,n=0){Ee.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],_=i[8],S=r[0],g=r[3],d=r[6],v=r[1],x=r[4],y=r[7],C=r[2],b=r[5],A=r[8];return s[0]=a*S+o*v+l*C,s[3]=a*g+o*x+l*b,s[6]=a*d+o*y+l*A,s[1]=c*S+h*v+p*C,s[4]=c*g+h*x+p*b,s[7]=c*d+h*y+p*A,s[2]=f*S+m*v+_*C,s[5]=f*g+m*x+_*b,s[8]=f*d+m*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(kc.makeScale(e,n)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new je;function j0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vS(){const t=wl("canvas");return t.style.display="block",t}const _p={};function H0(t){t in _p||(_p[t]=!0,console.warn(t))}function _S(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const yp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[Zi]:{transfer:yl,primaries:Sl,toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:lt,primaries:Sl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ql]:{transfer:yl,primaries:El,toReference:t=>t.applyMatrix3(Sp),fromReference:t=>t.applyMatrix3(yp)},[fh]:{transfer:lt,primaries:El,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sp),fromReference:t=>t.applyMatrix3(yp).convertLinearToSRGB()}},yS=new Set([Zi,ql]),et={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!yS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=lo[e].toReference,r=lo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return lo[t].primaries},getTransfer:function(t){return t===Pi?yl:lo[t].transfer}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class SS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=wl("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class V0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?SS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MS=0;class rn extends Ds{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=vr,r=vr,s=kn,a=_r,o=qn,l=Yi,c=rn.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ks(),this.name="",this.source=new V0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=L0;rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],_=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(m+1)/2,C=(d+1)/2,b=(h+f)/4,A=(p+S)/4,R=(_+g)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(p-S)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wS extends Ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends wS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(p!==S||l!==f||c!==m||h!==_){let g=1-o;const d=l*f+c*m+h*_+p*S,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,d*v);g=Math.sin(g*b)/C,o=Math.sin(o*b)/C}const y=o*v;if(l=l*g+f*y,c=c*g+m*y,h=h*g+_*y,p=p*g+S*y,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=C,c*=C,h*=C,p*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+h*p+l*m-c*f,e[n+1]=l*_+h*f+c*p-o*m,e[n+2]=c*_+h*m+o*f-l*p,e[n+3]=h*_-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p+f*m*_;break;case"YZX":this._x=f*h*p+c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p-f*m*_;break;case"XZY":this._x=f*h*p-c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new D,Ep=new Ba;class za{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),uo.subVectors(this.max,qs),Ir.subVectors(e.a,qs),Dr.subVectors(e.b,qs),kr.subVectors(e.c,qs),yi.subVectors(Dr,Ir),Si.subVectors(kr,Dr),tr.subVectors(Ir,kr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-tr.z,tr.y,yi.z,0,-yi.x,Si.z,0,-Si.x,tr.z,0,-tr.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-tr.y,tr.x,0];return!Bc(n,Ir,Dr,kr,uo)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Ir,Dr,kr,uo))?!1:(ho.crossVectors(yi,Si),n=[ho.x,ho.y,ho.z],Bc(n,Ir,Dr,kr,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,co=new za,Ir=new D,Dr=new D,kr=new D,yi=new D,Si=new D,tr=new D,qs=new D,uo=new D,ho=new D,nr=new D;function Bc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),h=i.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const AS=new za,Ys=new D,zc=new D;class Yl{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(zc)),this.expandByPoint(Ys.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new D,jc=new D,fo=new D,Ei=new D,Hc=new D,po=new D,Vc=new D;class W0{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jc.copy(e).add(n).multiplyScalar(.5),fo.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fo),o=Ei.dot(this.direction),l=-Ei.dot(fo),c=Ei.lengthSq(),h=Math.abs(1-a*a);let p,f,m,_;if(h>0)if(p=a*l-o,f=a*o-l,_=s*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(jc).addScaledVector(fo,f),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Hc.subVectors(n,e),po.subVectors(i,e),Vc.crossVectors(Hc,po);let a=this.direction.dot(Vc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(po.crossVectors(Ei,po));if(l<0)return null;const c=o*this.direction.dot(Hc.cross(Ei));if(c<0||l+c>a)return null;const h=-o*Ei.dot(Vc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,l,c,h,p,f,m,_,S,g){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,m,_,S,g)}set(e,n,i,r,s,a,o,l,c,h,p,f,m,_,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=_,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+_*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,_=c*h,S=c*p;n[0]=f+S*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=S+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,_=c*h,S=c*p;n[0]=f-S*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=S-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=_*c-m,n[8]=f*c+S,n[1]=l*p,n[5]=S*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=S-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+_,n[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+S,n[5]=a*h,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*h,n[10]=S*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TS,e,CS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),mo.crossVectors(on,Mi),r[0]=Mi.x,r[4]=mo.x,r[8]=on.x,r[1]=Mi.y,r[5]=mo.y,r[9]=on.y,r[2]=Mi.z,r[6]=mo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],_=i[2],S=i[6],g=i[10],d=i[14],v=i[3],x=i[7],y=i[11],C=i[15],b=r[0],A=r[4],R=r[8],M=r[12],E=r[1],P=r[5],z=r[9],B=r[13],W=r[2],$=r[6],q=r[10],Q=r[14],k=r[3],Y=r[7],j=r[11],Z=r[15];return s[0]=a*b+o*E+l*W+c*k,s[4]=a*A+o*P+l*$+c*Y,s[8]=a*R+o*z+l*q+c*j,s[12]=a*M+o*B+l*Q+c*Z,s[1]=h*b+p*E+f*W+m*k,s[5]=h*A+p*P+f*$+m*Y,s[9]=h*R+p*z+f*q+m*j,s[13]=h*M+p*B+f*Q+m*Z,s[2]=_*b+S*E+g*W+d*k,s[6]=_*A+S*P+g*$+d*Y,s[10]=_*R+S*z+g*q+d*j,s[14]=_*M+S*B+g*Q+d*Z,s[3]=v*b+x*E+y*W+C*k,s[7]=v*A+x*P+y*$+C*Y,s[11]=v*R+x*z+y*q+C*j,s[15]=v*M+x*B+y*Q+C*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],S=e[7],g=e[11],d=e[15];return _*(+s*l*p-r*c*p-s*o*f+i*c*f+r*o*m-i*l*m)+S*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+g*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*h-i*c*h)+d*(-r*o*h-n*l*p+n*o*f+r*a*p-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],S=e[13],g=e[14],d=e[15],v=p*g*c-S*f*c+S*l*m-o*g*m-p*l*d+o*f*d,x=_*f*c-h*g*c-_*l*m+a*g*m+h*l*d-a*f*d,y=h*S*c-_*p*c+_*o*m-a*S*m-h*o*d+a*p*d,C=_*p*l-h*S*l-_*o*f+a*S*f+h*o*g-a*p*g,b=n*v+i*x+r*y+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(S*f*s-p*g*s-S*r*m+i*g*m+p*r*d-i*f*d)*A,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*d+i*l*d)*A,e[3]=(p*l*s-o*f*s-p*r*c+i*f*c+o*r*m-i*l*m)*A,e[4]=x*A,e[5]=(h*g*s-_*f*s+_*r*m-n*g*m-h*r*d+n*f*d)*A,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*d-n*l*d)*A,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*m+n*l*m)*A,e[8]=y*A,e[9]=(_*p*s-h*S*s-_*i*m+n*S*m+h*i*d-n*p*d)*A,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*d+n*o*d)*A,e[11]=(h*o*s-a*p*s-h*i*c+n*p*c+a*i*m-n*o*m)*A,e[12]=C*A,e[13]=(h*S*r-_*p*r+_*i*f-n*S*f-h*i*g+n*p*g)*A,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*g-n*o*g)*A,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,_=s*p,S=a*h,g=a*p,d=o*p,v=l*c,x=l*h,y=l*p,C=i.x,b=i.y,A=i.z;return r[0]=(1-(S+d))*C,r[1]=(m+y)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(m-y)*b,r[5]=(1-(f+d))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(_+x)*A,r[9]=(g-v)*A,r[10]=(1-(f+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const a=Ur.set(r[4],r[5],r[6]).length(),o=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,h=1/a,p=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=p,Nn.elements[9]*=p,Nn.elements[10]*=p,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===ui)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ml)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*c,m=(i+r)*h;let _,S;if(o===ui)_=(a+s)*p,S=-2*p;else if(o===Ml)_=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new D,Nn=new pt,TS=new D(0,0,0),CS=new D(1,1,1),Mi=new D,mo=new D,on=new D,Mp=new pt,wp=new Ba;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";let X0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},RS=0;const bp=new D,Or=new Ba,ei=new pt,go=new D,$s=new D,NS=new D,PS=new Ba,Ap=new D(1,0,0),Tp=new D(0,1,0),Cp=new D(0,0,1),Rp={type:"added"},LS={type:"removed"},Fr={type:"childadded",child:null},Gc={type:"childremoved",child:null};class Ut extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new D,n=new Kn,i=new Ba,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new je}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,n){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?go.copy(e):go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt($s,go,this.up):ei.lookAt(go,$s,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LS),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,NS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new D,ti=new D,Wc=new D,ni=new D,Br=new D,zr=new D,Np=new D,Xc=new D,qc=new D,Yc=new D;class Xn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ti.subVectors(i,n),Wc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(Wc),c=ti.dot(ti),h=ti.dot(Wc),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ti.subVectors(e,n),Pn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Br.subVectors(r,i),zr.subVectors(s,i),Xc.subVectors(e,i);const l=Br.dot(Xc),c=zr.dot(Xc);if(l<=0&&c<=0)return n.copy(i);qc.subVectors(e,r);const h=Br.dot(qc),p=zr.dot(qc);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Br,a);Yc.subVectors(e,s);const m=Br.dot(Yc),_=zr.dot(Yc);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(zr,o);const g=h*_-m*p;if(g<=0&&p-h>=0&&m-_>=0)return Np.subVectors(s,r),o=(p-h)/(p-h+(m-_)),n.copy(r).addScaledVector(Np,o);const d=1/(g+S+f);return a=S*d,o=f*d,n.copy(i).addScaledVector(Br,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=ph(e,1),n=Dt(n,0,1),i=Dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$c(a,s,e+1/3),this.g=$c(a,s,e),this.b=$c(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=q0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return et.fromWorkingColorSpace(jt.copy(this),e),Math.round(Dt(jt.r*255,0,255))*65536+Math.round(Dt(jt.g*255,0,255))*256+Math.round(Dt(jt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Hn){et.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(xo);const i=ha(wi.h,xo.h,n),r=ha(wi.s,xo.s,n),s=ha(wi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ke;Ke.NAMES=q0;let IS=0;class Us extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=ps,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $l extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,vo=new Ee;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return H0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class Y0 extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $0 extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yt extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DS=0;const _n=new pt,Kc=new Ut,jr=new D,ln=new za,Ks=new za,Rt=new D;class sn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?$0:Y0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(ln.min,Ks.min),ln.expandByPoint(Rt),Rt.addVectors(ln.max,Ks.max),ln.expandByPoint(Rt)):(ln.expandByPoint(Ks.min),ln.expandByPoint(Ks.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),Rt.add(jr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,p=new D,f=new Ee,m=new Ee,_=new Ee,S=new D,g=new D;function d(R,M,E){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),p.fromBufferAttribute(i,E),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),h.sub(c),p.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(P),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(S),o[M].add(S),o[E].add(S),l[R].add(g),l[M].add(g),l[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const E=v[R],P=E.start,z=E.count;for(let B=P,W=P+z;B<W;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new D,y=new D,C=new D,b=new D;function A(R){C.fromBufferAttribute(r,R),b.copy(C);const M=o[R];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(b,M);const P=y.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,M=v.length;R<M;++R){const E=v[R],P=E.start,z=E.count;for(let B=P,W=P+z;B<W;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,p=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new Fn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new pt,ir=new W0,_o=new Yl,Lp=new D,Hr=new D,Vr=new D,Gr=new D,Qc=new D,yo=new D,So=new Ee,Eo=new Ee,Mo=new Ee,Ip=new D,Dp=new D,kp=new D,wo=new D,bo=new D;class Qe extends Ut{constructor(e=new sn,n=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Qc.fromBufferAttribute(p,e),a?yo.addScaledVector(Qc,h):yo.addScaledVector(Qc.sub(n),h))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(_o.containsPoint(ir.origin)===!1&&(ir.intersectSphere(_o,Lp)===null||ir.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Pp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const g=f[_],d=a[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,C=x;y<C;y+=3){const b=o.getX(y),A=o.getX(y+1),R=o.getX(y+2);r=Ao(this,d,e,i,c,h,p,b,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);r=Ao(this,a,e,i,c,h,p,v,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const g=f[_],d=a[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,C=x;y<C;y+=3){const b=y,A=y+1,R=y+2;r=Ao(this,d,e,i,c,h,p,b,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const v=g,x=g+1,y=g+2;r=Ao(this,a,e,i,c,h,p,v,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function kS(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bo);return c<n.near||c>n.far?null:{distance:c,point:bo.clone(),object:t}}function Ao(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Hr),t.getVertexPosition(l,Vr),t.getVertexPosition(c,Gr);const h=kS(t,e,n,i,Hr,Vr,Gr,wo);if(h){r&&(So.fromBufferAttribute(r,o),Eo.fromBufferAttribute(r,l),Mo.fromBufferAttribute(r,c),h.uv=Xn.getInterpolation(wo,Hr,Vr,Gr,So,Eo,Mo,new Ee)),s&&(So.fromBufferAttribute(s,o),Eo.fromBufferAttribute(s,l),Mo.fromBufferAttribute(s,c),h.uv1=Xn.getInterpolation(wo,Hr,Vr,Gr,So,Eo,Mo,new Ee)),a&&(Ip.fromBufferAttribute(a,o),Dp.fromBufferAttribute(a,l),kp.fromBufferAttribute(a,c),h.normal=Xn.getInterpolation(wo,Hr,Vr,Gr,Ip,Dp,kp,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};Xn.getNormal(Hr,Vr,Gr,p.normal),h.face=p}return h}class Os extends sn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2));function _(S,g,d,v,x,y,C,b,A,R,M){const E=y/A,P=C/R,z=y/2,B=C/2,W=b/2,$=A+1,q=R+1;let Q=0,k=0;const Y=new D;for(let j=0;j<q;j++){const Z=j*P-B;for(let de=0;de<$;de++){const Ae=de*E-z;Y[S]=Ae*v,Y[g]=Z*x,Y[d]=W,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[g]=0,Y[d]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(de/A),p.push(1-j/R),Q+=1}}for(let j=0;j<R;j++)for(let Z=0;Z<A;Z++){const de=f+Z+$*j,Ae=f+Z+$*(j+1),X=f+(Z+1)+$*(j+1),O=f+(Z+1)+$*j;l.push(de,Ae,O),l.push(Ae,X,O),k+=6}o.addGroup(m,k,M),m+=k,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function US(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function K0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const OS={clone:Ns,merge:Xt};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=US(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q0 extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new D,Up=new Ee,Op=new Ee;class un extends Q0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,Up,Op),n.subVectors(Op,Up)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(da*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class zS extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new un(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new un(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new un(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new un(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new un(Wr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class J0 extends rn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new J0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Os(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Vi});s.uniforms.tEquirect.value=n;const a=new Qe(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=kn),new zS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Jc=new D,HS=new D,VS=new je;class ur{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(HS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VS.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Yl,To=new D;class mh{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],f=r[7],m=r[8],_=r[9],S=r[10],g=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,g-m,y-d).normalize(),i[1].setComponents(l+s,f+c,g+m,y+d).normalize(),i[2].setComponents(l+a,f+h,g+_,y+v).normalize(),i[3].setComponents(l-a,f-h,g-_,y-v).normalize(),i[4].setComponents(l-o,f-p,g-S,y-x).normalize(),n===ui)i[5].setComponents(l+o,f+p,g+S,y+x).normalize();else if(n===Ml)i[5].setComponents(o,p,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GS(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),p.count===-1&&f.length===0&&t.bufferSubData(c,0,h),f.length!==0){for(let m=0,_=f.length;m<_;m++){const S=f[m];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Kl extends sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,m=[],_=[],S=[],g=[];for(let d=0;d<h;d++){const v=d*f-a;for(let x=0;x<c;x++){const y=x*p-s;_.push(y,-v,0),S.push(0,0,1),g.push(x/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+c*d,y=v+c*(d+1),C=v+1+c*(d+1),b=v+1+c*d;m.push(x,y,b),m.push(y,C,b)}this.setIndex(m),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var WS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,t1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r1=`#ifdef USE_IRIDESCENCE
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
#endif`,s1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,p1=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,g1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,M1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,O1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,G1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ME=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,RE=`float getShadowMask() {
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
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BE=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,QE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,JE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ZE=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cM=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fM=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EM=`uniform float rotation;
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
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:WS,alphahash_pars_fragment:XS,alphamap_fragment:qS,alphamap_pars_fragment:YS,alphatest_fragment:$S,alphatest_pars_fragment:KS,aomap_fragment:QS,aomap_pars_fragment:JS,batching_pars_vertex:ZS,batching_vertex:e1,begin_vertex:t1,beginnormal_vertex:n1,bsdfs:i1,iridescence_fragment:r1,bumpmap_pars_fragment:s1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:l1,clipping_planes_vertex:c1,color_fragment:u1,color_pars_fragment:d1,color_pars_vertex:h1,color_vertex:f1,common:p1,cube_uv_reflection_fragment:m1,defaultnormal_vertex:g1,displacementmap_pars_vertex:x1,displacementmap_vertex:v1,emissivemap_fragment:_1,emissivemap_pars_fragment:y1,colorspace_fragment:S1,colorspace_pars_fragment:E1,envmap_fragment:M1,envmap_common_pars_fragment:w1,envmap_pars_fragment:b1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:O1,envmap_vertex:T1,fog_vertex:C1,fog_pars_vertex:R1,fog_fragment:N1,fog_pars_fragment:P1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:I1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:k1,lights_pars_begin:U1,lights_toon_fragment:F1,lights_toon_pars_fragment:B1,lights_phong_fragment:z1,lights_phong_pars_fragment:j1,lights_physical_fragment:H1,lights_physical_pars_fragment:V1,lights_fragment_begin:G1,lights_fragment_maps:W1,lights_fragment_end:X1,logdepthbuf_fragment:q1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:K1,map_fragment:Q1,map_pars_fragment:J1,map_particle_fragment:Z1,map_particle_pars_fragment:eE,metalnessmap_fragment:tE,metalnessmap_pars_fragment:nE,morphinstance_vertex:iE,morphcolor_vertex:rE,morphnormal_vertex:sE,morphtarget_pars_vertex:aE,morphtarget_vertex:oE,normal_fragment_begin:lE,normal_fragment_maps:cE,normal_pars_fragment:uE,normal_pars_vertex:dE,normal_vertex:hE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:pE,clearcoat_normal_fragment_maps:mE,clearcoat_pars_fragment:gE,iridescence_pars_fragment:xE,opaque_fragment:vE,packing:_E,premultiplied_alpha_fragment:yE,project_vertex:SE,dithering_fragment:EE,dithering_pars_fragment:ME,roughnessmap_fragment:wE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:AE,shadowmap_pars_vertex:TE,shadowmap_vertex:CE,shadowmask_pars_fragment:RE,skinbase_vertex:NE,skinning_pars_vertex:PE,skinning_vertex:LE,skinnormal_vertex:IE,specularmap_fragment:DE,specularmap_pars_fragment:kE,tonemapping_fragment:UE,tonemapping_pars_fragment:OE,transmission_fragment:FE,transmission_pars_fragment:BE,uv_pars_fragment:zE,uv_pars_vertex:jE,uv_vertex:HE,worldpos_vertex:VE,background_vert:GE,background_frag:WE,backgroundCube_vert:XE,backgroundCube_frag:qE,cube_vert:YE,cube_frag:$E,depth_vert:KE,depth_frag:QE,distanceRGBA_vert:JE,distanceRGBA_frag:ZE,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:lM,meshmatcap_frag:cM,meshnormal_vert:uM,meshnormal_frag:dM,meshphong_vert:hM,meshphong_frag:fM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:xM,points_vert:vM,points_frag:_M,shadow_vert:yM,shadow_frag:SM,sprite_vert:EM,sprite_frag:MM},ue={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Vn={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Vn.physical={uniforms:Xt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Co={r:0,b:0,g:0},sr=new Kn,wM=new pt;function bM(t,e,n,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,h,p=null,f=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function S(v){let x=!1;const y=_(v);y===null?d(o,l):y&&y.isColor&&(d(y,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Wl)?(h===void 0&&(h=new Qe(new Os(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ns(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),sr.copy(x.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(sr)),h.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,(p!==y||f!==y.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=y,f=y.version,m=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Qe(new Kl(2,2),new $i({name:"BackgroundMaterial",uniforms:Ns(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||f!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=y,f=y.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,x){v.getRGB(Co,K0(t)),i.buffers.color.setClear(Co.r,Co.g,Co.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:S,addToRenderList:g}}function AM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(E,P,z,B,W){let $=!1;const q=p(B,z,P);s!==q&&(s=q,c(s.object)),$=m(E,B,z,W),$&&_(E,B,z,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(E,P,z,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function h(E){return t.deleteVertexArray(E)}function p(E,P,z){const B=z.wireframe===!0;let W=i[E.id];W===void 0&&(W={},i[E.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let q=$[B];return q===void 0&&(q=f(l()),$[B]=q),q}function f(E){const P=[],z=[],B=[];for(let W=0;W<n;W++)P[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:B,object:E,attributes:{},index:null}}function m(E,P,z,B){const W=s.attributes,$=P.attributes;let q=0;const Q=z.getAttributes();for(const k in Q)if(Q[k].location>=0){const j=W[k];let Z=$[k];if(Z===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor)),j===void 0||j.attribute!==Z||Z&&j.data!==Z.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function _(E,P,z,B){const W={},$=P.attributes;let q=0;const Q=z.getAttributes();for(const k in Q)if(Q[k].location>=0){let j=$[k];j===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(j=E.instanceColor));const Z={};Z.attribute=j,j&&j.data&&(Z.data=j.data),W[k]=Z,q++}s.attributes=W,s.attributesNum=q,s.index=B}function S(){const E=s.newAttributes;for(let P=0,z=E.length;P<z;P++)E[P]=0}function g(E){d(E,0)}function d(E,P){const z=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;z[E]=1,B[E]===0&&(t.enableVertexAttribArray(E),B[E]=1),W[E]!==P&&(t.vertexAttribDivisor(E,P),W[E]=P)}function v(){const E=s.newAttributes,P=s.enabledAttributes;for(let z=0,B=P.length;z<B;z++)P[z]!==E[z]&&(t.disableVertexAttribArray(z),P[z]=0)}function x(E,P,z,B,W,$,q){q===!0?t.vertexAttribIPointer(E,P,z,W,$):t.vertexAttribPointer(E,P,z,B,W,$)}function y(E,P,z,B){S();const W=B.attributes,$=z.getAttributes(),q=P.defaultAttributeValues;for(const Q in $){const k=$[Q];if(k.location>=0){let Y=W[Q];if(Y===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor)),Y!==void 0){const j=Y.normalized,Z=Y.itemSize,de=e.get(Y);if(de===void 0)continue;const Ae=de.buffer,X=de.type,O=de.bytesPerElement,te=X===t.INT||X===t.UNSIGNED_INT||Y.gpuType===I0;if(Y.isInterleavedBufferAttribute){const re=Y.data,Re=re.stride,Pe=Y.offset;if(re.isInstancedInterleavedBuffer){for(let Xe=0;Xe<k.locationSize;Xe++)d(k.location+Xe,re.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Xe=0;Xe<k.locationSize;Xe++)g(k.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let Xe=0;Xe<k.locationSize;Xe++)x(k.location+Xe,Z/k.locationSize,X,j,Re*O,(Pe+Z/k.locationSize*Xe)*O,te)}else{if(Y.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)d(k.location+re,Y.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let re=0;re<k.locationSize;re++)g(k.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let re=0;re<k.locationSize;re++)x(k.location+re,Z/k.locationSize,X,j,Z*O,Z/k.locationSize*re*O,te)}}else if(q!==void 0){const j=q[Q];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(k.location,j);break;case 3:t.vertexAttrib3fv(k.location,j);break;case 4:t.vertexAttrib4fv(k.location,j);break;default:t.vertexAttrib1fv(k.location,j)}}}}v()}function C(){R();for(const E in i){const P=i[E];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}delete i[E.id]}function A(E){for(const P in i){const z=i[P];if(z[E.id]===void 0)continue;const B=z[E.id];for(const W in B)h(B[W].object),delete B[W];delete z[E.id]}}function R(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function TM(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function o(c,h,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<p;m++)this.render(c[m],h[m]);else{f.multiDrawArraysWEBGL(i,c,0,h,0,p);let m=0;for(let _=0;_<p;_++)m+=h[_];n.update(m,i,1)}}function l(c,h,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let _=0;for(let S=0;S<p;S++)_+=h[S];for(let S=0;S<f.length;S++)n.update(_,i,f[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==qn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const A=b===Xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Yi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Di&&!A)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function RM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=h(_,f,x,m);for(let C=0;C!==x;++C)y[C]=n[C];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,_){const S=p!==null?p.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const d=m+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=m;x!==S;++x,y+=4)a.copy(p[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function NM(t){let e=new WeakMap;function n(a,o){return o===cd?a.mapping=bs:o===ud&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cd||o===ud)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ex extends Q0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,Fp=[.125,.215,.35,.446,.526,.582],fr=20,Zc=new ex,Bp=new Ke;let eu=null,tu=0,nu=0,iu=!1;const dr=(1+Math.sqrt(5))/2,qr=1/dr,zp=[new D(-dr,qr,0),new D(dr,qr,0),new D(-qr,0,dr),new D(qr,0,dr),new D(0,dr,-qr),new D(0,dr,qr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eu,tu,nu),this._renderer.xr.enabled=iu,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Xl,format:qn,colorSpace:Zi,depthBuffer:!1},r=Hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(s)),this._blurMaterial=LM(s,e,n)}return r}_compileMaterial(e){const n=new Qe(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const o=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Bp),h.toneMapping=Gi,h.autoClear=!1;const m=new $l({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Qe(new Os,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(Bp),S=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Ro(r,v*x,d>2?x:0,x,x),h.setRenderTarget(r),S&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zp[(r-s-1)%zp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Qe(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),S=s/_,g=isFinite(s)?1+Math.floor(h*S):fr;g>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fr}`);const d=[];let v=0;for(let A=0;A<fr;++A){const R=A/S,M=Math.exp(-R*R/2);d.push(M),A===0?v+=M:A<g&&(v+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-os?r-x+os:0),b=4*(this._cubeSize-y);Ro(n,C,b,3*y,2*y),l.setRenderTarget(n),l.render(p,Zc)}}function PM(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+Fp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-os?l=Fp[a-t+os-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,_=6,S=3,g=2,d=1,v=new Float32Array(S*_*m),x=new Float32Array(g*_*m),y=new Float32Array(d*_*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,R=b>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(M,S*_*b),x.set(f,g*_*b);const E=[b,b,b,b,b,b];y.set(E,d*_*b)}const C=new sn;C.setAttribute("position",new Fn(v,S)),C.setAttribute("uv",new Fn(x,g)),C.setAttribute("faceIndex",new Fn(y,d)),e.push(C),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hp(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LM(t,e,n){const i=new Float32Array(fr),r=new D(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Vp(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Gp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function IM(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===cd||l===ud,h=l===bs||l===As;if(c||h){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new jp(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new jp(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function DM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&H0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kM(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const S=f.morphAttributes[_];for(let g=0,d=S.length;g<d;g++)e.remove(S[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const S=m[_];for(let g=0,d=S.length;g<d;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,_=p.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],b=v[x+1],A=v[x+2];f.push(C,b,b,A,A,C)}}else if(_!==void 0){const v=_.array;S=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,b=x+1,A=x+2;f.push(C,b,b,A,A,C)}}else return;const g=new(j0(f)?$0:Y0)(f,1);g.version=S;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function UM(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function h(f,m,_){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<_;g++)this.render(f[g]/a,m[g]);else{S.multiDrawElementsWEBGL(i,m,0,s,f,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];n.update(g,i,1)}}function p(f,m,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,S,0,_);let d=0;for(let v=0;v<_;v++)d+=m[v];for(let v=0;v<S.length;v++)n.update(d,i,S[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function OM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FM(t,e,n){const i=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let C=o.attributes.position.count*y,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*p),R=new G0(A,C,b,p);R.type=Di,R.needsUpdate=!0;const M=y*4;for(let P=0;P<p;P++){const z=d[P],B=v[P],W=x[P],$=C*b*4*P;for(let q=0;q<z.count;q++){const Q=q*M;_===!0&&(r.fromBufferAttribute(z,q),A[$+Q+0]=r.x,A[$+Q+1]=r.y,A[$+Q+2]=r.z,A[$+Q+3]=0),S===!0&&(r.fromBufferAttribute(B,q),A[$+Q+4]=r.x,A[$+Q+5]=r.y,A[$+Q+6]=r.z,A[$+Q+7]=0),g===!0&&(r.fromBufferAttribute(W,q),A[$+Q+8]=r.x,A[$+Q+9]=r.y,A[$+Q+10]=r.z,A[$+Q+11]=W.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new Ee(C,b)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class tx extends rn{constructor(e,n,i,r,s,a,o,l,c,h=ms){if(h!==ms&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ms&&(i=Ts),i===void 0&&h===Rs&&(i=Cs),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const nx=new rn,ix=new tx(1,1);ix.compareFunction=z0;const rx=new G0,sx=new bS,ax=new J0,Wp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),$p=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=Xp[e];n===void 0&&(n=new Int32Array(e),Xp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function VM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function GM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(At(n,i))return;$p.set(i),t.uniformMatrix2fv(this.addr,!1,$p),Tt(n,i)}}function WM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(At(n,i))return;Yp.set(i),t.uniformMatrix3fv(this.addr,!1,Yp),Tt(n,i)}}function XM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(At(n,i))return;qp.set(i),t.uniformMatrix4fv(this.addr,!1,qp),Tt(n,i)}}function qM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function $M(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function KM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function QM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function ZM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?ix:nx;n.setTexture2D(e||s,r)}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sx,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ax,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rx,r)}function sw(t){switch(t){case 5126:return zM;case 35664:return jM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return QM;case 36294:return JM;case 36295:return ZM;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function aw(t,e){t.uniform1fv(this.addr,e)}function ow(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function lw(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function cw(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function uw(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dw(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hw(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fw(t,e){t.uniform1iv(this.addr,e)}function pw(t,e){t.uniform2iv(this.addr,e)}function mw(t,e){t.uniform3iv(this.addr,e)}function gw(t,e){t.uniform4iv(this.addr,e)}function xw(t,e){t.uniform1uiv(this.addr,e)}function vw(t,e){t.uniform2uiv(this.addr,e)}function _w(t,e){t.uniform3uiv(this.addr,e)}function yw(t,e){t.uniform4uiv(this.addr,e)}function Sw(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||nx,s[a])}function Ew(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||sx,s[a])}function Mw(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ax,s[a])}function ww(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||rx,s[a])}function bw(t){switch(t){case 5126:return aw;case 35664:return ow;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return dw;case 35676:return hw;case 5124:case 35670:return fw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return xw;case 36294:return vw;case 36295:return _w;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return ww}}class Aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sw(n.type)}}class Tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bw(n.type)}}class Cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function Kp(t,e){t.seq.push(e),t.map[e.id]=e}function Rw(t,e,n){const i=t.name,r=i.length;for(ru.lastIndex=0;;){const s=ru.exec(i),a=ru.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Kp(n,c===void 0?new Aw(o,t,e):new Tw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Cw(o),Kp(n,p)),n=p}}}class Xo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Rw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Nw=37297;let Pw=0;function Lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Iw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===El&&n===Sl?i="LinearDisplayP3ToLinearSRGB":e===Sl&&n===El&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case ql:return[i,"LinearTransferOETF"];case Hn:case fh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Jp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Lw(t.getShaderSource(e),a)}else return r}function Dw(t,e){const n=Iw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kw(t,e){let n;switch(e){case Cy:n="Linear";break;case Ry:n="Reinhard";break;case Ny:n="OptimizedCineon";break;case Py:n="ACESFilmic";break;case Iy:n="AgX";break;case Dy:n="Neutral";break;case Ly:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Ow(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ta(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(t){return t.replace(Bw,jw)}const zw=new Map;function jw(t,e){let n=ze[e];if(n===void 0){const i=zw.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fd(n)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(t){return t.replace(Hw,Vw)}function Vw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ey?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Ww(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case As:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function qw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ay:e="ENVMAP_BLENDING_MIX";break;case Ty:e="ENVMAP_BLENDING_ADD";break}return e}function Yw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $w(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Gw(n),c=Ww(n),h=Xw(n),p=qw(n),f=Yw(n),m=Uw(n),_=Ow(s),S=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ta).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(g=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Gi?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Dw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),a=fd(a),a=Zp(a,n),a=em(a,n),o=fd(o),o=Zp(o,n),o=em(o,n),a=tm(a),o=tm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+g+a,y=v+d+o,C=Qp(r,r.VERTEX_SHADER,x),b=Qp(r,r.FRAGMENT_SHADER,y);r.attachShader(S,C),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(b).trim();let $=!0,q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,b);else{const Q=Jp(r,C,"vertex"),k=Jp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Q+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||W==="")&&(q=!1);q&&(P.diagnostics={runnable:$,programLog:z,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:d}})}r.deleteShader(C),r.deleteShader(b),R=new Xo(r,S),M=Fw(r,S)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(S,Nw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}let Kw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Jw(e),n.set(e,i)),i}}class Jw{constructor(e){this.id=Kw++,this.code=e,this.usedTimes=0}}function Zw(t,e,n,i,r,s,a){const o=new X0,l=new Qw,c=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,P,z,B){const W=z.fog,$=B.geometry,q=M.isMeshStandardMaterial?z.environment:null,Q=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),k=Q&&Q.mapping===Wl?Q.image.height:null,Y=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const j=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Z=j!==void 0?j.length:0;let de=0;$.morphAttributes.position!==void 0&&(de=1),$.morphAttributes.normal!==void 0&&(de=2),$.morphAttributes.color!==void 0&&(de=3);let Ae,X,O,te;if(Y){const Ye=Vn[Y];Ae=Ye.vertexShader,X=Ye.fragmentShader}else Ae=M.vertexShader,X=M.fragmentShader,l.update(M),O=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const re=t.getRenderTarget(),Re=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Xe=!!M.map,I=!!M.matcap,Ge=!!Q,He=!!M.aoMap,rt=!!M.lightMap,be=!!M.bumpMap,qe=!!M.normalMap,Oe=!!M.displacementMap,Ie=!!M.emissiveMap,gt=!!M.metalnessMap,N=!!M.roughnessMap,w=M.anisotropy>0,V=M.clearcoat>0,ee=M.dispersion>0,ne=M.iridescence>0,ie=M.sheen>0,Me=M.transmission>0,he=w&&!!M.anisotropyMap,ce=V&&!!M.clearcoatMap,De=V&&!!M.clearcoatNormalMap,ae=V&&!!M.clearcoatRoughnessMap,ye=ne&&!!M.iridescenceMap,Fe=ne&&!!M.iridescenceThicknessMap,Te=ie&&!!M.sheenColorMap,fe=ie&&!!M.sheenRoughnessMap,ke=!!M.specularMap,Ue=!!M.specularColorMap,st=!!M.specularIntensityMap,L=Me&&!!M.transmissionMap,pe=Me&&!!M.thicknessMap,K=!!M.gradientMap,J=!!M.alphaMap,oe=M.alphaTest>0,xe=!!M.alphaHash,Be=!!M.extensions;let nt=Gi;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(nt=t.toneMapping);const ut={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Ae,fragmentShader:X,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Zi,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:I,envMap:Ge,envMapMode:Ge&&Q.mapping,envMapCubeUVHeight:k,aoMap:He,lightMap:rt,bumpMap:be,normalMap:qe,displacementMap:f&&Oe,emissiveMap:Ie,normalMapObjectSpace:qe&&M.normalMapType===Yy,normalMapTangentSpace:qe&&M.normalMapType===B0,metalnessMap:gt,roughnessMap:N,anisotropy:w,anisotropyMap:he,clearcoat:V,clearcoatMap:ce,clearcoatNormalMap:De,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:ne,iridescenceMap:ye,iridescenceThicknessMap:Fe,sheen:ie,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:ke,specularColorMap:Ue,specularIntensityMap:st,transmission:Me,transmissionMap:L,thicknessMap:pe,gradientMap:K,opaque:M.transparent===!1&&M.blending===ps&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:oe,alphaHash:xe,combine:M.combine,mapUv:Xe&&S(M.map.channel),aoMapUv:He&&S(M.aoMap.channel),lightMapUv:rt&&S(M.lightMap.channel),bumpMapUv:be&&S(M.bumpMap.channel),normalMapUv:qe&&S(M.normalMap.channel),displacementMapUv:Oe&&S(M.displacementMap.channel),emissiveMapUv:Ie&&S(M.emissiveMap.channel),metalnessMapUv:gt&&S(M.metalnessMap.channel),roughnessMapUv:N&&S(M.roughnessMap.channel),anisotropyMapUv:he&&S(M.anisotropyMap.channel),clearcoatMapUv:ce&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&S(M.sheenRoughnessMap.channel),specularMapUv:ke&&S(M.specularMap.channel),specularColorMapUv:Ue&&S(M.specularColorMap.channel),specularIntensityMapUv:st&&S(M.specularIntensityMap.channel),transmissionMapUv:L&&S(M.transmissionMap.channel),thicknessMapUv:pe&&S(M.thicknessMap.channel),alphaMapUv:J&&S(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(qe||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Xe||J),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Be&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)E.push(P),E.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(E,M),x(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),M.push(o.mask)}function y(M){const E=_[M.type];let P;if(E){const z=Vn[E];P=OS.clone(z.uniforms)}else P=M.uniforms;return P}function C(M,E){let P;for(let z=0,B=h.length;z<B;z++){const W=h[z];if(W.cacheKey===E){P=W,++P.usedTimes;break}}return P===void 0&&(P=new $w(t,E,M,s),h.push(P)),P}function b(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function eb(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function tb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,_,S,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:_,renderOrder:p.renderOrder,z:S,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=S,d.group=g),e++,d}function o(p,f,m,_,S,g){const d=a(p,f,m,_,S,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,f,m,_,S,g){const d=a(p,f,m,_,S,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,f){n.length>1&&n.sort(p||tb),i.length>1&&i.sort(f||im),r.length>1&&r.sort(f||im)}function h(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function nb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new rm,t.set(i,[a])):r>=s.length?(a=new rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ib(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ke};break;case"SpotLight":n={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function rb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sb=0;function ab(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ob(t){const e=new ib,n=rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new pt,a=new pt;function o(c){let h=0,p=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,_=0,S=0,g=0,d=0,v=0,x=0,y=0,C=0,b=0,A=0;c.sort(ab);for(let M=0,E=c.length;M<E;M++){const P=c[M],z=P.color,B=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*B,p+=z.g*B,f+=z.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],B);A++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,k=n.get(P);k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=P.shadow.matrix,v++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(z).multiplyScalar(B),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[S]=q;const Q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[S]=Q.matrix,P.castShadow){const k=n.get(P);k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.spotShadow[S]=k,i.spotShadowMap[S]=$,y++}S++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(z).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,k=n.get(P);k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[d]=q,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==S||R.rectAreaLength!==g||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,R.directionalLength=m,R.pointLength=_,R.spotLength=S,R.rectAreaLength=g,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=A,i.version=sb++)}function l(c,h){let p=0,f=0,m=0,_=0,S=0;const g=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const x=c[d];if(x.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(x.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function sm(t){const e=new ob(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function lb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sm(t),e.set(r,[o])):s>=a.length?(o=new sm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class cb extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ub extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
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
}`;function fb(t,e,n){let i=new mh;const r=new Ee,s=new Ee,a=new Pt,o=new cb({depthPacking:qy}),l=new ub,c={},h=n.maxTextureSize,p={[qi]:nn,[nn]:qi,[oi]:oi},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:db,fragmentShader:hb}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Qe(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let d=this.type;this.render=function(b,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=d!==ri&&this.type===ri,W=d===ri&&this.type!==ri;for(let $=0,q=b.length;$<q;$++){const Q=b[$],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Y=k.getFrameExtents();if(r.multiply(Y),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,k.mapSize.y=s.y)),k.map===null||B===!0||W===!0){const Z=this.type!==ri?{minFilter:Mn,magFilter:Mn}:{};k.map!==null&&k.map.dispose(),k.map=new Tr(r.x,r.y,Z),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const j=k.getViewportCount();for(let Z=0;Z<j;Z++){const de=k.getViewport(Z);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),z.viewport(a),k.updateMatrices(Q,Z),i=k.getFrustum(),y(A,R,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===ri&&v(k,R),k.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(M,E,P)};function v(b,A){const R=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,R,f,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,R,m,S,null)}function x(b,A,R,M){let E=null;const P=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=R.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=E.uuid,B=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let $=W[B];$===void 0&&($=E.clone(),W[B]=$,A.addEventListener("dispose",C)),E=$}if(E.visible=A.visible,E.wireframe=A.wireframe,M===ri?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:p[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=t.properties.get(E);z.light=R}return E}function y(b,A,R,M,E){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const B=e.update(b),W=b.material;if(Array.isArray(W)){const $=B.groups;for(let q=0,Q=$.length;q<Q;q++){const k=$[q],Y=W[k.materialIndex];if(Y&&Y.visible){const j=x(b,Y,M,E);b.onBeforeShadow(t,b,A,R,B,j,k),t.renderBufferDirect(R,null,B,j,b,k),b.onAfterShadow(t,b,A,R,B,j,k)}}}else if(W.visible){const $=x(b,W,M,E);b.onBeforeShadow(t,b,A,R,B,$,null),t.renderBufferDirect(R,null,B,$,b,null),b.onAfterShadow(t,b,A,R,B,$,null)}}const z=b.children;for(let B=0,W=z.length;B<W;B++)y(z[B],A,R,M,E)}function C(b){b.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function pb(t){function e(){let L=!1;const pe=new Pt;let K=null;const J=new Pt(0,0,0,0);return{setMask:function(oe){K!==oe&&!L&&(t.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){L=oe},setClear:function(oe,xe,Be,nt,ut){ut===!0&&(oe*=nt,xe*=nt,Be*=nt),pe.set(oe,xe,Be,nt),J.equals(pe)===!1&&(t.clearColor(oe,xe,Be,nt),J.copy(pe))},reset:function(){L=!1,K=null,J.set(-1,0,0,0)}}}function n(){let L=!1,pe=null,K=null,J=null;return{setTest:function(oe){oe?te(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(oe){pe!==oe&&!L&&(t.depthMask(oe),pe=oe)},setFunc:function(oe){if(K!==oe){switch(oe){case _y:t.depthFunc(t.NEVER);break;case yy:t.depthFunc(t.ALWAYS);break;case Sy:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case Ey:t.depthFunc(t.EQUAL);break;case My:t.depthFunc(t.GEQUAL);break;case wy:t.depthFunc(t.GREATER);break;case by:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=oe}},setLocked:function(oe){L=oe},setClear:function(oe){J!==oe&&(t.clearDepth(oe),J=oe)},reset:function(){L=!1,pe=null,K=null,J=null}}}function i(){let L=!1,pe=null,K=null,J=null,oe=null,xe=null,Be=null,nt=null,ut=null;return{setTest:function(Ye){L||(Ye?te(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(Ye){pe!==Ye&&!L&&(t.stencilMask(Ye),pe=Ye)},setFunc:function(Ye,gn,xn){(K!==Ye||J!==gn||oe!==xn)&&(t.stencilFunc(Ye,gn,xn),K=Ye,J=gn,oe=xn)},setOp:function(Ye,gn,xn){(xe!==Ye||Be!==gn||nt!==xn)&&(t.stencilOp(Ye,gn,xn),xe=Ye,Be=gn,nt=xn)},setLocked:function(Ye){L=Ye},setClear:function(Ye){ut!==Ye&&(t.clearStencil(Ye),ut=Ye)},reset:function(){L=!1,pe=null,K=null,J=null,oe=null,xe=null,Be=null,nt=null,ut=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,f=[],m=null,_=!1,S=null,g=null,d=null,v=null,x=null,y=null,C=null,b=new Ke(0,0,0),A=0,R=!1,M=null,E=null,P=null,z=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=q>=2);let k=null,Y={};const j=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),de=new Pt().fromArray(j),Ae=new Pt().fromArray(Z);function X(L,pe,K,J){const oe=new Uint8Array(4),xe=t.createTexture();t.bindTexture(L,xe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<K;Be++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(pe+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return xe}const O={};O[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),te(t.DEPTH_TEST),s.setFunc(vl),be(!1),qe(Ff),te(t.CULL_FACE),He(Vi);function te(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function re(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function Re(L,pe){return h[L]!==pe?(t.bindFramebuffer(L,pe),h[L]=pe,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Pe(L,pe){let K=f,J=!1;if(L){K=p.get(pe),K===void 0&&(K=[],p.set(pe,K));const oe=L.textures;if(K.length!==oe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Be=oe.length;xe<Be;xe++)K[xe]=t.COLOR_ATTACHMENT0+xe;K.length=oe.length,J=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,J=!0);J&&t.drawBuffers(K)}function Xe(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const I={[hr]:t.FUNC_ADD,[ny]:t.FUNC_SUBTRACT,[iy]:t.FUNC_REVERSE_SUBTRACT};I[ry]=t.MIN,I[sy]=t.MAX;const Ge={[ay]:t.ZERO,[oy]:t.ONE,[ly]:t.SRC_COLOR,[od]:t.SRC_ALPHA,[py]:t.SRC_ALPHA_SATURATE,[hy]:t.DST_COLOR,[uy]:t.DST_ALPHA,[cy]:t.ONE_MINUS_SRC_COLOR,[ld]:t.ONE_MINUS_SRC_ALPHA,[fy]:t.ONE_MINUS_DST_COLOR,[dy]:t.ONE_MINUS_DST_ALPHA,[my]:t.CONSTANT_COLOR,[gy]:t.ONE_MINUS_CONSTANT_COLOR,[xy]:t.CONSTANT_ALPHA,[vy]:t.ONE_MINUS_CONSTANT_ALPHA};function He(L,pe,K,J,oe,xe,Be,nt,ut,Ye){if(L===Vi){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(te(t.BLEND),_=!0),L!==ty){if(L!==S||Ye!==R){if((g!==hr||x!==hr)&&(t.blendEquation(t.FUNC_ADD),g=hr,x=hr),Ye)switch(L){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bf:t.blendFunc(t.ONE,t.ONE);break;case zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}d=null,v=null,y=null,C=null,b.set(0,0,0),A=0,S=L,R=Ye}return}oe=oe||pe,xe=xe||K,Be=Be||J,(pe!==g||oe!==x)&&(t.blendEquationSeparate(I[pe],I[oe]),g=pe,x=oe),(K!==d||J!==v||xe!==y||Be!==C)&&(t.blendFuncSeparate(Ge[K],Ge[J],Ge[xe],Ge[Be]),d=K,v=J,y=xe,C=Be),(nt.equals(b)===!1||ut!==A)&&(t.blendColor(nt.r,nt.g,nt.b,ut),b.copy(nt),A=ut),S=L,R=!1}function rt(L,pe){L.side===oi?re(t.CULL_FACE):te(t.CULL_FACE);let K=L.side===nn;pe&&(K=!K),be(K),L.blending===ps&&L.transparent===!1?He(Vi):He(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(L){M!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),M=L)}function qe(L){L!==J_?(te(t.CULL_FACE),L!==E&&(L===Ff?t.cullFace(t.BACK):L===Z_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),E=L}function Oe(L){L!==P&&($&&t.lineWidth(L),P=L)}function Ie(L,pe,K){L?(te(t.POLYGON_OFFSET_FILL),(z!==pe||B!==K)&&(t.polygonOffset(pe,K),z=pe,B=K)):re(t.POLYGON_OFFSET_FILL)}function gt(L){L?te(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function N(L){L===void 0&&(L=t.TEXTURE0+W-1),k!==L&&(t.activeTexture(L),k=L)}function w(L,pe,K){K===void 0&&(k===null?K=t.TEXTURE0+W-1:K=k);let J=Y[K];J===void 0&&(J={type:void 0,texture:void 0},Y[K]=J),(J.type!==L||J.texture!==pe)&&(k!==K&&(t.activeTexture(K),k=K),t.bindTexture(L,pe||O[L]),J.type=L,J.texture=pe)}function V(){const L=Y[k];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){de.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function fe(L){Ae.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ae.copy(L))}function ke(L,pe){let K=l.get(pe);K===void 0&&(K=new WeakMap,l.set(pe,K));let J=K.get(L);J===void 0&&(J=t.getUniformBlockIndex(pe,L.name),K.set(L,J))}function Ue(L,pe){const J=l.get(pe).get(L);o.get(pe)!==J&&(t.uniformBlockBinding(pe,J,L.__bindingPointIndex),o.set(pe,J))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,Y={},h={},p=new WeakMap,f=[],m=null,_=!1,S=null,g=null,d=null,v=null,x=null,y=null,C=null,b=new Ke(0,0,0),A=0,R=!1,M=null,E=null,P=null,z=null,B=null,de.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:te,disable:re,bindFramebuffer:Re,drawBuffers:Pe,useProgram:Xe,setBlending:He,setMaterial:rt,setFlipSided:be,setCullFace:qe,setLineWidth:Oe,setPolygonOffset:Ie,setScissorTest:gt,activeTexture:N,bindTexture:w,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:ye,texImage3D:Fe,updateUBOMapping:ke,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:ae,texSubImage2D:ie,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:ce,scissor:Te,viewport:fe,reset:st}}function mb(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,w){return m?new OffscreenCanvas(N,w):wl("canvas")}function S(N,w,V){let ee=1;const ne=gt(N);if((ne.width>V||ne.height>V)&&(ee=V/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ie=Math.floor(ee*ne.width),Me=Math.floor(ee*ne.height);p===void 0&&(p=_(ie,Me));const he=w?_(ie,Me):p;return he.width=ie,he.height=Me,he.getContext("2d").drawImage(N,0,0,ie,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ie+"x"+Me+")."),he}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==Mn&&N.minFilter!==kn}function d(N){t.generateMipmap(N)}function v(N,w,V,ee,ne=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ie=w;if(w===t.RED&&(V===t.FLOAT&&(ie=t.R32F),V===t.HALF_FLOAT&&(ie=t.R16F),V===t.UNSIGNED_BYTE&&(ie=t.R8)),w===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ie=t.R8UI),V===t.UNSIGNED_SHORT&&(ie=t.R16UI),V===t.UNSIGNED_INT&&(ie=t.R32UI),V===t.BYTE&&(ie=t.R8I),V===t.SHORT&&(ie=t.R16I),V===t.INT&&(ie=t.R32I)),w===t.RG&&(V===t.FLOAT&&(ie=t.RG32F),V===t.HALF_FLOAT&&(ie=t.RG16F),V===t.UNSIGNED_BYTE&&(ie=t.RG8)),w===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ie=t.RG8UI),V===t.UNSIGNED_SHORT&&(ie=t.RG16UI),V===t.UNSIGNED_INT&&(ie=t.RG32UI),V===t.BYTE&&(ie=t.RG8I),V===t.SHORT&&(ie=t.RG16I),V===t.INT&&(ie=t.RG32I)),w===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),w===t.RGBA){const Me=ne?yl:et.getTransfer(ee);V===t.FLOAT&&(ie=t.RGBA32F),V===t.HALF_FLOAT&&(ie=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ie=Me===lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(N,w){let V;return N?w===null||w===Ts||w===Cs?V=t.DEPTH24_STENCIL8:w===Di?V=t.DEPTH32F_STENCIL8:w===_l&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ts||w===Cs?V=t.DEPTH_COMPONENT24:w===Di?V=t.DEPTH_COMPONENT32F:w===_l&&(V=t.DEPTH_COMPONENT16),V}function y(N,w){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mn&&N.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function C(N){const w=N.target;w.removeEventListener("dispose",C),A(w),w.isVideoTexture&&h.delete(w)}function b(N){const w=N.target;w.removeEventListener("dispose",b),M(w)}function A(N){const w=i.get(N);if(w.__webglInit===void 0)return;const V=N.source,ee=f.get(V);if(ee){const ne=ee[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(N),Object.keys(ee).length===0&&f.delete(V)}i.remove(N)}function R(N){const w=i.get(N);t.deleteTexture(w.__webglTexture);const V=N.source,ee=f.get(V);delete ee[w.__cacheKey],a.memory.textures--}function M(N){const w=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ne=0;ne<w.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[ee]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=N.textures;for(let ee=0,ne=V.length;ee<ne;ee++){const ie=i.get(V[ee]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(V[ee])}i.remove(N)}let E=0;function P(){E=0}function z(){const N=E;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),E+=1,N}function B(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function W(N,w){const V=i.get(N);if(N.isVideoTexture&&Oe(N),N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){const ee=N.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,N,w);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function $(N,w){const V=i.get(N);if(N.version>0&&V.__version!==N.version){Ae(V,N,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function q(N,w){const V=i.get(N);if(N.version>0&&V.__version!==N.version){Ae(V,N,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function Q(N,w){const V=i.get(N);if(N.version>0&&V.__version!==N.version){X(V,N,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const k={[dd]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[hd]:t.MIRRORED_REPEAT},Y={[Mn]:t.NEAREST,[ky]:t.NEAREST_MIPMAP_NEAREST,[oo]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},j={[$y]:t.NEVER,[tS]:t.ALWAYS,[Ky]:t.LESS,[z0]:t.LEQUAL,[Qy]:t.EQUAL,[eS]:t.GEQUAL,[Jy]:t.GREATER,[Zy]:t.NOTEQUAL};function Z(N,w){if(w.type===Di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===Rc||w.magFilter===oo||w.magFilter===_r||w.minFilter===kn||w.minFilter===Rc||w.minFilter===oo||w.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,k[w.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,k[w.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,k[w.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Y[w.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==oo&&w.minFilter!==_r||w.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function de(N,w){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",C));const ee=w.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const ie=B(w);if(ie!==N.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[ie].usedTimes++;const Me=ne[N.__cacheKey];Me!==void 0&&(ne[N.__cacheKey].usedTimes--,Me.usedTimes===0&&R(w)),N.__cacheKey=ie,N.__webglTexture=ne[ie].texture}return V}function Ae(N,w,V){let ee=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=de(N,w),ie=w.source;n.bindTexture(ee,N.__webglTexture,t.TEXTURE0+V);const Me=i.get(ie);if(ie.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const he=et.getPrimaries(et.workingColorSpace),ce=w.colorSpace===Pi?null:et.getPrimaries(w.colorSpace),De=w.colorSpace===Pi||he===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ae=S(w.image,!1,r.maxTextureSize);ae=Ie(w,ae);const ye=s.convert(w.format,w.colorSpace),Fe=s.convert(w.type);let Te=v(w.internalFormat,ye,Fe,w.colorSpace,w.isVideoTexture);Z(ee,w);let fe;const ke=w.mipmaps,Ue=w.isVideoTexture!==!0,st=Me.__version===void 0||ne===!0,L=ie.dataReady,pe=y(w,ae);if(w.isDepthTexture)Te=x(w.format===Rs,w.type),st&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Te,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Te,ae.width,ae.height,0,ye,Fe,null));else if(w.isDataTexture)if(ke.length>0){Ue&&st&&n.texStorage2D(t.TEXTURE_2D,pe,Te,ke[0].width,ke[0].height);for(let K=0,J=ke.length;K<J;K++)fe=ke[K],Ue?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,fe.width,fe.height,ye,Fe,fe.data):n.texImage2D(t.TEXTURE_2D,K,Te,fe.width,fe.height,0,ye,Fe,fe.data);w.generateMipmaps=!1}else Ue?(st&&n.texStorage2D(t.TEXTURE_2D,pe,Te,ae.width,ae.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,ye,Fe,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ae.width,ae.height,0,ye,Fe,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Te,ke[0].width,ke[0].height,ae.depth);for(let K=0,J=ke.length;K<J;K++)if(fe=ke[K],w.format!==qn)if(ye!==null)if(Ue){if(L)if(w.layerUpdates.size>0){for(const oe of w.layerUpdates){const xe=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,oe,fe.width,fe.height,1,ye,fe.data.slice(xe*oe,xe*(oe+1)),0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,fe.width,fe.height,ae.depth,ye,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Te,fe.width,fe.height,ae.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,fe.width,fe.height,ae.depth,ye,Fe,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Te,fe.width,fe.height,ae.depth,0,ye,Fe,fe.data)}else{Ue&&st&&n.texStorage2D(t.TEXTURE_2D,pe,Te,ke[0].width,ke[0].height);for(let K=0,J=ke.length;K<J;K++)fe=ke[K],w.format!==qn?ye!==null?Ue?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,fe.width,fe.height,ye,Fe,fe.data):n.texImage2D(t.TEXTURE_2D,K,Te,fe.width,fe.height,0,ye,Fe,fe.data)}else if(w.isDataArrayTexture)if(Ue){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Te,ae.width,ae.height,ae.depth),L)if(w.layerUpdates.size>0){let K;switch(Fe){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:K=1;break;case t.LUMINANCE:K=1;break;case t.LUMINANCE_ALPHA:K=2;break;case t.RGB:K=3;break;case t.RGBA:K=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:K=1;break;default:throw new Error(`Unknown texel size for type ${Fe}.`)}const J=ae.width*ae.height*K;for(const oe of w.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,ye,Fe,ae.data.slice(J*oe,J*(oe+1)));w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ye,Fe,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,ye,Fe,ae.data);else if(w.isData3DTexture)Ue?(st&&n.texStorage3D(t.TEXTURE_3D,pe,Te,ae.width,ae.height,ae.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ye,Fe,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,ye,Fe,ae.data);else if(w.isFramebufferTexture){if(st)if(Ue)n.texStorage2D(t.TEXTURE_2D,pe,Te,ae.width,ae.height);else{let K=ae.width,J=ae.height;for(let oe=0;oe<pe;oe++)n.texImage2D(t.TEXTURE_2D,oe,Te,K,J,0,ye,Fe,null),K>>=1,J>>=1}}else if(ke.length>0){if(Ue&&st){const K=gt(ke[0]);n.texStorage2D(t.TEXTURE_2D,pe,Te,K.width,K.height)}for(let K=0,J=ke.length;K<J;K++)fe=ke[K],Ue?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye,Fe,fe):n.texImage2D(t.TEXTURE_2D,K,Te,ye,Fe,fe);w.generateMipmaps=!1}else if(Ue){if(st){const K=gt(ae);n.texStorage2D(t.TEXTURE_2D,pe,Te,K.width,K.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Fe,ae)}else n.texImage2D(t.TEXTURE_2D,0,Te,ye,Fe,ae);g(w)&&d(ee),Me.__version=ie.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function X(N,w,V){if(w.image.length!==6)return;const ee=de(N,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+V);const ie=i.get(ne);if(ne.version!==ie.__version||ee===!0){n.activeTexture(t.TEXTURE0+V);const Me=et.getPrimaries(et.workingColorSpace),he=w.colorSpace===Pi?null:et.getPrimaries(w.colorSpace),ce=w.colorSpace===Pi||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!De&&!ae?ye[J]=S(w.image[J],!0,r.maxCubemapSize):ye[J]=ae?w.image[J].image:w.image[J],ye[J]=Ie(w,ye[J]);const Fe=ye[0],Te=s.convert(w.format,w.colorSpace),fe=s.convert(w.type),ke=v(w.internalFormat,Te,fe,w.colorSpace),Ue=w.isVideoTexture!==!0,st=ie.__version===void 0||ee===!0,L=ne.dataReady;let pe=y(w,Fe);Z(t.TEXTURE_CUBE_MAP,w);let K;if(De){Ue&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ke,Fe.width,Fe.height);for(let J=0;J<6;J++){K=ye[J].mipmaps;for(let oe=0;oe<K.length;oe++){const xe=K[oe];w.format!==qn?Te!==null?Ue?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,xe.width,xe.height,Te,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,ke,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,xe.width,xe.height,Te,fe,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,ke,xe.width,xe.height,0,Te,fe,xe.data)}}}else{if(K=w.mipmaps,Ue&&st){K.length>0&&pe++;const J=gt(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ke,J.width,J.height)}for(let J=0;J<6;J++)if(ae){Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Te,fe,ye[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,ye[J].width,ye[J].height,0,Te,fe,ye[J].data);for(let oe=0;oe<K.length;oe++){const Be=K[oe].image[J].image;Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Be.width,Be.height,Te,fe,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,ke,Be.width,Be.height,0,Te,fe,Be.data)}}else{Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,fe,ye[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Te,fe,ye[J]);for(let oe=0;oe<K.length;oe++){const xe=K[oe];Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Te,fe,xe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,ke,Te,fe,xe.image[J])}}}g(w)&&d(t.TEXTURE_CUBE_MAP),ie.__version=ne.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function O(N,w,V,ee,ne,ie){const Me=s.convert(V.format,V.colorSpace),he=s.convert(V.type),ce=v(V.internalFormat,Me,he,V.colorSpace);if(!i.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>ie),ye=Math.max(1,w.height>>ie);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ie,ce,ae,ye,w.depth,0,Me,he,null):n.texImage2D(ne,ie,ce,ae,ye,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),qe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(V).__webglTexture,0,be(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(V).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(N,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,N),w.depthBuffer){const ee=w.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,ie=x(w.stencilBuffer,ne),Me=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=be(w);qe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ie,w.width,w.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ie,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,N)}else{const ee=w.textures;for(let ne=0;ne<ee.length;ne++){const ie=ee[ne],Me=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),ce=v(ie.internalFormat,Me,he,ie.colorSpace),De=be(w);V&&qe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ce,w.width,w.height):qe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,ce,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ce,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ne=be(w);if(w.depthTexture.format===ms)qe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(w.depthTexture.format===Rs)qe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Re(N){const w=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");re(w.__webglFramebuffer,N)}else if(V){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=t.createRenderbuffer(),te(w.__webglDepthbuffer[ee],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),te(w.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(N,w,V){const ee=i.get(N);w!==void 0&&O(ee.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Re(N)}function Xe(N){const w=N.texture,V=i.get(N),ee=i.get(w);N.addEventListener("dispose",b);const ne=N.textures,ie=N.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,a.memory.textures++),ie){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let ce=0;ce<w.mipmaps.length;ce++)V.__webglFramebuffer[he][ce]=t.createFramebuffer()}else V.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)V.__webglFramebuffer[he]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Me)for(let he=0,ce=ne.length;he<ce;he++){const De=i.get(ne[he]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&qe(N)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const ce=ne[he];V.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const De=s.convert(ce.format,ce.colorSpace),ae=s.convert(ce.type),ye=v(ce.internalFormat,De,ae,ce.colorSpace,N.isXRRenderTarget===!0),Fe=be(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ye,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,V.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),te(V.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Z(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)O(V.__webglFramebuffer[he][ce],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ce);else O(V.__webglFramebuffer[he],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let he=0,ce=ne.length;he<ce;he++){const De=ne[he],ae=i.get(De);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),Z(t.TEXTURE_2D,De),O(V.__webglFramebuffer,N,De,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),g(De)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ee.__webglTexture),Z(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)O(V.__webglFramebuffer[ce],N,w,t.COLOR_ATTACHMENT0,he,ce);else O(V.__webglFramebuffer,N,w,t.COLOR_ATTACHMENT0,he,0);g(w)&&d(he),n.unbindTexture()}N.depthBuffer&&Re(N)}function I(N){const w=N.textures;for(let V=0,ee=w.length;V<ee;V++){const ne=w[V];if(g(ne)){const ie=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ne).__webglTexture;n.bindTexture(ie,Me),d(ie),n.unbindTexture()}}}const Ge=[],He=[];function rt(N){if(N.samples>0){if(qe(N)===!1){const w=N.textures,V=N.width,ee=N.height;let ne=t.COLOR_BUFFER_BIT;const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(N),he=w.length>1;if(he)for(let ce=0;ce<w.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const De=i.get(w[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,V,ee,0,0,V,ee,ne,t.NEAREST),l===!0&&(Ge.length=0,He.length=0,Ge.push(t.COLOR_ATTACHMENT0+ce),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ge.push(ie),He.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ce=0;ce<w.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const De=i.get(w[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const w=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function be(N){return Math.min(r.maxSamples,N.samples)}function qe(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Oe(N){const w=a.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function Ie(N,w){const V=N.colorSpace,ee=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==Zi&&V!==Pi&&(et.getTransfer(V)===lt?(ee!==qn||ne!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function gt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=Pe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=O,this.useMultisampledRTT=qe}function gb(t,e){function n(i,r=Pi){let s;const a=et.getTransfer(r);if(i===Yi)return t.UNSIGNED_BYTE;if(i===D0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===k0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Fy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Uy)return t.BYTE;if(i===Oy)return t.SHORT;if(i===_l)return t.UNSIGNED_SHORT;if(i===I0)return t.INT;if(i===Ts)return t.UNSIGNED_INT;if(i===Di)return t.FLOAT;if(i===Xl)return t.HALF_FLOAT;if(i===By)return t.ALPHA;if(i===zy)return t.RGB;if(i===qn)return t.RGBA;if(i===jy)return t.LUMINANCE;if(i===Hy)return t.LUMINANCE_ALPHA;if(i===ms)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===Vy)return t.RED;if(i===U0)return t.RED_INTEGER;if(i===Gy)return t.RG;if(i===O0)return t.RG_INTEGER;if(i===F0)return t.RGBA_INTEGER;if(i===Nc||i===Pc||i===Lc||i===Ic)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===Vf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===qf||i===Yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xf||i===qf)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$f||i===Kf||i===Qf||i===Jf||i===Zf||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===ap||i===op||i===lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$f)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ep)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ap)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dc||i===cp||i===up)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Dc)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===up)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wy||i===dp||i===hp||i===fp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class xb extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vb={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:_b,fragmentShader:yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qe(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Eb extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,_=null;const S=new Sb,g=n.getContextAttributes();let d=null,v=null;const x=[],y=[],C=new Ee;let b=null;const A=new un;A.layers.enable(1),A.viewport=new Pt;const R=new un;R.layers.enable(2),R.viewport=new Pt;const M=[A,R],E=new xb;E.layers.enable(1),E.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let O=x[X];return O===void 0&&(O=new su,x[X]=O),O.getTargetRaySpace()},this.getControllerGrip=function(X){let O=x[X];return O===void 0&&(O=new su,x[X]=O),O.getGripSpace()},this.getHand=function(X){let O=x[X];return O===void 0&&(O=new su,x[X]=O),O.getHandSpace()};function B(X){const O=y.indexOf(X.inputSource);if(O===-1)return;const te=x[O];te!==void 0&&(te.update(X.inputSource,X.frame,c||a),te.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<x.length;X++){const O=y[X];O!==null&&(y[X]=null,x[X].disconnect(O))}P=null,z=null,S.reset(),e.setRenderTarget(d),m=null,f=null,p=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const O={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Tr(m.framebufferWidth,m.framebufferHeight,{format:qn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let O=null,te=null,re=null;g.depth&&(re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=g.stencil?Rs:ms,te=g.stencil?Cs:Ts);const Re={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Tr(f.textureWidth,f.textureHeight,{format:qn,type:Yi,depthTexture:new tx(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(X){for(let O=0;O<X.removed.length;O++){const te=X.removed[O],re=y.indexOf(te);re>=0&&(y[re]=null,x[re].disconnect(te))}for(let O=0;O<X.added.length;O++){const te=X.added[O];let re=y.indexOf(te);if(re===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=y.length){y.push(te),re=Pe;break}else if(y[Pe]===null){y[Pe]=te,re=Pe;break}if(re===-1)break}const Re=x[re];Re&&Re.connect(te)}}const q=new D,Q=new D;function k(X,O,te){q.setFromMatrixPosition(O.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const re=q.distanceTo(Q),Re=O.projectionMatrix.elements,Pe=te.projectionMatrix.elements,Xe=Re[14]/(Re[10]-1),I=Re[14]/(Re[10]+1),Ge=(Re[9]+1)/Re[5],He=(Re[9]-1)/Re[5],rt=(Re[8]-1)/Re[0],be=(Pe[8]+1)/Pe[0],qe=Xe*rt,Oe=Xe*be,Ie=re/(-rt+be),gt=Ie*-rt;O.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(gt),X.translateZ(Ie),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const N=Xe+Ie,w=I+Ie,V=qe-gt,ee=Oe+(re-gt),ne=Ge*I/w*N,ie=He*I/w*N;X.projectionMatrix.makePerspective(V,ee,ne,ie,N,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,O){O===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(O.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;S.texture!==null&&(X.near=S.depthNear,X.far=S.depthFar),E.near=R.near=A.near=X.near,E.far=R.far=A.far=X.far,(P!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,z=E.far,A.near=P,A.far=z,R.near=P,R.far=z,A.updateProjectionMatrix(),R.updateProjectionMatrix(),X.updateProjectionMatrix());const O=X.parent,te=E.cameras;Y(E,O);for(let re=0;re<te.length;re++)Y(te[re],O);te.length===2?k(E,A,R):E.projectionMatrix.copy(A.projectionMatrix),j(X,E,O)};function j(X,O,te){te===null?X.matrix.copy(O.matrixWorld):(X.matrix.copy(te.matrixWorld),X.matrix.invert(),X.matrix.multiply(O.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let Z=null;function de(X,O){if(h=O.getViewerPose(c||a),_=O,h!==null){const te=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let re=!1;te.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Pe=0;Pe<te.length;Pe++){const Xe=te[Pe];let I=null;if(m!==null)I=m.getViewport(Xe);else{const He=p.getViewSubImage(f,Xe);I=He.viewport,Pe===0&&(e.setRenderTargetTextures(v,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(v))}let Ge=M[Pe];Ge===void 0&&(Ge=new un,Ge.layers.enable(Pe),Ge.viewport=new Pt,M[Pe]=Ge),Ge.matrix.fromArray(Xe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Xe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(I.x,I.y,I.width,I.height),Pe===0&&(E.matrix.copy(Ge.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(Ge)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Pe=p.getDepthInformation(te[0]);Pe&&Pe.isValid&&Pe.texture&&S.init(e,Pe,r.renderState)}}for(let te=0;te<x.length;te++){const re=y[te],Re=x[te];re!==null&&Re!==void 0&&Re.update(re,O,c||a)}Z&&Z(X,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const Ae=new Z0;Ae.setAnimationLoop(de),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}const ar=new Kn,Mb=new pt;function wb(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,K0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===nn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===nn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(ar)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(_(v),y=h(v),r[v.id]=y,v.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(v,C);const b=e.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function h(v){const x=p();v.__bindingPointIndex=x;const y=t.createBuffer(),C=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,A=y.length;b<A;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,E=R.length;M<E;M++){const P=R[M];if(m(P,b,M,C)===!0){const z=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<B.length;$++){const q=B[$],Q=S(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,z+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,y,C){const b=v.value,A=x+"_"+y;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const R=C[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return C[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function _(v){const x=v.uniforms;let y=0;const C=16;for(let A=0,R=x.length;A<R;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,P=M.length;E<P;E++){const z=M[E],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=B.length;W<$;W++){const q=B[W],Q=S(q),k=y%C;k!==0&&C-k<Q.boundary&&(y+=C-k),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Q.storage}}}const b=y%C;return b>0&&(y+=C-b),v.__size=y,v.__cache={},this}function S(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class ox{constructor(e={}){const{canvas:n=vS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let S=null,g=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let y=!1,C=0,b=0,A=null,R=-1,M=null;const E=new Pt,P=new Pt;let z=null;const B=new Ke(0);let W=0,$=n.width,q=n.height,Q=1,k=null,Y=null;const j=new Pt(0,0,$,q),Z=new Pt(0,0,$,q);let de=!1;const Ae=new mh;let X=!1,O=!1;const te=new pt,re=new D,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Xe(){return A===null?Q:1}let I=i;function Ge(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",J,!1),I===null){const U="webgl2";if(I=Ge(U,T),I===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,rt,be,qe,Oe,Ie,gt,N,w,V,ee,ne,ie,Me,he,ce,De,ae,ye,Fe,Te,fe,ke,Ue;function st(){He=new DM(I),He.init(),fe=new gb(I,He),rt=new CM(I,He,e,fe),be=new pb(I),qe=new OM(I),Oe=new eb,Ie=new mb(I,He,be,Oe,rt,fe,qe),gt=new NM(x),N=new IM(x),w=new GS(I),ke=new AM(I,w),V=new kM(I,w,qe,ke),ee=new BM(I,V,w,qe),ye=new FM(I,rt,Ie),ce=new RM(Oe),ne=new Zw(x,gt,N,He,rt,ke,ce),ie=new wb(x,Oe),Me=new nb,he=new lb(He),ae=new bM(x,gt,N,be,ee,f,l),De=new fb(x,ee,rt),Ue=new bb(I,qe,rt,be),Fe=new TM(I,He,qe),Te=new UM(I,He,qe),qe.programs=ne.programs,x.capabilities=rt,x.extensions=He,x.properties=Oe,x.renderLists=Me,x.shadowMap=De,x.state=be,x.info=qe}st();const L=new Eb(x,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize($,q,!1))},this.getSize=function(T){return T.set($,q)},this.setSize=function(T,U,H=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,q=U,n.width=Math.floor(T*Q),n.height=Math.floor(U*Q),H===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set($*Q,q*Q).floor()},this.setDrawingBufferSize=function(T,U,H){$=T,q=U,Q=H,n.width=Math.floor(T*H),n.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,U,H,G){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,H,G),be.viewport(E.copy(j).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,U,H,G){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,U,H,G),be.scissor(P.copy(Z).multiplyScalar(Q).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){be.setScissorTest(de=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,U=!0,H=!0){let G=0;if(T){let F=!1;if(A!==null){const le=A.texture.format;F=le===F0||le===O0||le===U0}if(F){const le=A.texture.type,me=le===Yi||le===Ts||le===_l||le===Cs||le===D0||le===k0,ve=ae.getClearColor(),Se=ae.getClearAlpha(),Ne=ve.r,Le=ve.g,Ce=ve.b;me?(m[0]=Ne,m[1]=Le,m[2]=Ce,m[3]=Se,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ne,_[1]=Le,_[2]=Ce,_[3]=Se,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),H&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",J,!1),Me.dispose(),he.dispose(),Oe.dispose(),gt.dispose(),N.dispose(),ee.dispose(),ke.dispose(),Ue.dispose(),ne.dispose(),L.dispose(),L.removeEventListener("sessionstart",gn),L.removeEventListener("sessionend",xn),Tn.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=qe.autoReset,U=De.enabled,H=De.autoUpdate,G=De.needsUpdate,F=De.type;st(),qe.autoReset=T,De.enabled=U,De.autoUpdate=H,De.needsUpdate=G,De.type=F}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const U=T.target;U.removeEventListener("dispose",oe),xe(U)}function xe(T){Be(T),Oe.remove(T)}function Be(T){const U=Oe.get(T).programs;U!==void 0&&(U.forEach(function(H){ne.releaseProgram(H)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,G,F,le){U===null&&(U=Re);const me=F.isMesh&&F.matrixWorld.determinant()<0,ve=yx(T,U,H,G,F);be.setMaterial(G,me);let Se=H.index,Ne=1;if(G.wireframe===!0){if(Se=V.getWireframeAttribute(H),Se===void 0)return;Ne=2}const Le=H.drawRange,Ce=H.attributes.position;let Je=Le.start*Ne,xt=(Le.start+Le.count)*Ne;le!==null&&(Je=Math.max(Je,le.start*Ne),xt=Math.min(xt,(le.start+le.count)*Ne)),Se!==null?(Je=Math.max(Je,0),xt=Math.min(xt,Se.count)):Ce!=null&&(Je=Math.max(Je,0),xt=Math.min(xt,Ce.count));const vt=xt-Je;if(vt<0||vt===1/0)return;ke.setup(F,G,ve,H,Se);let an,Ze=Fe;if(Se!==null&&(an=w.get(Se),Ze=Te,Ze.setIndex(an)),F.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*Xe()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(F.isLine){let we=G.linewidth;we===void 0&&(we=1),be.setLineWidth(we*Xe()),F.isLineSegments?Ze.setMode(I.LINES):F.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else F.isPoints?Ze.setMode(I.POINTS):F.isSprite&&Ze.setMode(I.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?Ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Ze.renderInstances(Je,vt,F.count);else if(H.isInstancedBufferGeometry){const we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Gt=Math.min(H.instanceCount,we);Ze.renderInstances(Je,vt,Gt)}else Ze.render(Je,vt)};function nt(T,U,H){T.transparent===!0&&T.side===oi&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Ha(T,U,H),T.side=qi,T.needsUpdate=!0,Ha(T,U,H),T.side=oi):Ha(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),g=he.get(H),g.init(U),v.push(g),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),T!==H&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const G=new Set;return T.traverse(function(F){const le=F.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const ve=le[me];nt(ve,H,F),G.add(ve)}else nt(le,H,F),G.add(le)}),v.pop(),g=null,G},this.compileAsync=function(T,U,H=null){const G=this.compile(T,U,H);return new Promise(F=>{function le(){if(G.forEach(function(me){Oe.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){F(T);return}setTimeout(le,10)}He.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ut=null;function Ye(T){ut&&ut(T)}function gn(){Tn.stop()}function xn(){Tn.start()}const Tn=new Z0;Tn.setAnimationLoop(Ye),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(T){ut=T,L.setAnimationLoop(T),T===null?Tn.stop():Tn.start()},L.addEventListener("sessionstart",gn),L.addEventListener("sessionend",xn),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,A),g=he.get(T,v.length),g.init(U),v.push(g),te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ae.setFromProjectionMatrix(te),O=this.localClippingEnabled,X=ce.init(this.clippingPlanes,O),S=Me.get(T,d.length),S.init(),d.push(S),L.enabled===!0&&L.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Zl(le,U,-1/0,x.sortObjects)}Zl(T,U,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(k,Y),Pe=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Pe&&ae.addToRenderList(S,T),this.info.render.frame++,X===!0&&ce.beginShadows();const H=g.state.shadowsArray;De.render(H,T,U),X===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=S.opaque,F=S.transmissive;if(g.setupLights(),U.isArrayCamera){const le=U.cameras;if(F.length>0)for(let me=0,ve=le.length;me<ve;me++){const Se=le[me];Mh(G,F,T,Se)}Pe&&ae.render(T);for(let me=0,ve=le.length;me<ve;me++){const Se=le[me];Eh(S,T,Se,Se.viewport)}}else F.length>0&&Mh(G,F,T,U),Pe&&ae.render(T),Eh(S,T,U);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(x,T,U),ke.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?(g=v[v.length-1],X===!0&&ce.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Zl(T,U,H,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ae.intersectsSprite(T)){G&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const me=ee.update(T),ve=T.material;ve.visible&&S.push(T,me,ve,H,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ae.intersectsObject(T))){const me=ee.update(T),ve=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),re.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),re.copy(me.boundingSphere.center)),re.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(ve)){const Se=me.groups;for(let Ne=0,Le=Se.length;Ne<Le;Ne++){const Ce=Se[Ne],Je=ve[Ce.materialIndex];Je&&Je.visible&&S.push(T,me,Je,H,re.z,Ce)}}else ve.visible&&S.push(T,me,ve,H,re.z,null)}}const le=T.children;for(let me=0,ve=le.length;me<ve;me++)Zl(le[me],U,H,G)}function Eh(T,U,H,G){const F=T.opaque,le=T.transmissive,me=T.transparent;g.setupLightsView(H),X===!0&&ce.setGlobalState(x.clippingPlanes,H),G&&be.viewport(E.copy(G)),F.length>0&&ja(F,U,H),le.length>0&&ja(le,U,H),me.length>0&&ja(me,U,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Mh(T,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new Tr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Xl:Yi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const le=g.state.transmissionRenderTarget[G.id],me=G.viewport||E;le.setSize(me.z,me.w);const ve=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),Pe?ae.render(H):x.clear();const Se=x.toneMapping;x.toneMapping=Gi;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),X===!0&&ce.setGlobalState(x.clippingPlanes,G),ja(T,H,G),Ie.updateMultisampleRenderTarget(le),Ie.updateRenderTargetMipmap(le),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ce=0,Je=U.length;Ce<Je;Ce++){const xt=U[Ce],vt=xt.object,an=xt.geometry,Ze=xt.material,we=xt.group;if(Ze.side===oi&&vt.layers.test(G.layers)){const Gt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,wh(vt,H,G,an,Ze,we),Ze.side=Gt,Ze.needsUpdate=!0,Le=!0}}Le===!0&&(Ie.updateMultisampleRenderTarget(le),Ie.updateRenderTargetMipmap(le))}x.setRenderTarget(ve),x.setClearColor(B,W),Ne!==void 0&&(G.viewport=Ne),x.toneMapping=Se}function ja(T,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,le=T.length;F<le;F++){const me=T[F],ve=me.object,Se=me.geometry,Ne=G===null?me.material:G,Le=me.group;ve.layers.test(H.layers)&&wh(ve,U,H,Se,Ne,Le)}}function wh(T,U,H,G,F,le){T.onBeforeRender(x,U,H,G,F,le),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,U,H,G,T,le),F.transparent===!0&&F.side===oi&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,x.renderBufferDirect(H,U,G,F,T,le),F.side=qi,F.needsUpdate=!0,x.renderBufferDirect(H,U,G,F,T,le),F.side=oi):x.renderBufferDirect(H,U,G,F,T,le),T.onAfterRender(x,U,H,G,F,le)}function Ha(T,U,H){U.isScene!==!0&&(U=Re);const G=Oe.get(T),F=g.state.lights,le=g.state.shadowsArray,me=F.state.version,ve=ne.getParameters(T,F.state,le,U,H),Se=ne.getProgramCacheKey(ve);let Ne=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?N:gt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",oe),Ne=new Map,G.programs=Ne);let Le=Ne.get(Se);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===me)return Ah(T,ve),Le}else ve.uniforms=ne.getUniforms(T),T.onBuild(H,ve,x),T.onBeforeCompile(ve,x),Le=ne.acquireProgram(ve,Se),Ne.set(Se,Le),G.uniforms=ve.uniforms;const Ce=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=ce.uniform),Ah(T,ve),G.needsLights=Ex(T),G.lightsStateVersion=me,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function bh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Xo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ah(T,U){const H=Oe.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function yx(T,U,H,G,F){U.isScene!==!0&&(U=Re),Ie.resetTextureUnits();const le=U.fog,me=G.isMeshStandardMaterial?U.environment:null,ve=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zi,Se=(G.isMeshStandardMaterial?N:gt).get(G.envMap||me),Ne=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,xt=!!H.morphAttributes.color;let vt=Gi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(vt=x.toneMapping);const an=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ze=an!==void 0?an.length:0,we=Oe.get(G),Gt=g.state.lights;if(X===!0&&(O===!0||T!==M)){const vn=T===M&&G.id===R;ce.setState(G,T,vn)}let it=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Gt.state.version||we.outputColorSpace!==ve||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==Se||G.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ce.numPlanes||we.numIntersection!==ce.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Le||we.morphTargets!==Ce||we.morphNormals!==Je||we.morphColors!==xt||we.toneMapping!==vt||we.morphTargetsCount!==Ze)&&(it=!0):(it=!0,we.__version=G.version);let Qn=we.currentProgram;it===!0&&(Qn=Ha(G,U,F));let Va=!1,er=!1,ec=!1;const Ct=Qn.getUniforms(),vi=we.uniforms;if(be.useProgram(Qn.program)&&(Va=!0,er=!0,ec=!0),G.id!==R&&(R=G.id,er=!0),Va||M!==T){Ct.setValue(I,"projectionMatrix",T.projectionMatrix),Ct.setValue(I,"viewMatrix",T.matrixWorldInverse);const vn=Ct.map.cameraPosition;vn!==void 0&&vn.setValue(I,re.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,er=!0,ec=!0)}if(F.isSkinnedMesh){Ct.setOptional(I,F,"bindMatrix"),Ct.setOptional(I,F,"bindMatrixInverse");const vn=F.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ct.setValue(I,"boneTexture",vn.boneTexture,Ie))}F.isBatchedMesh&&(Ct.setOptional(I,F,"batchingTexture"),Ct.setValue(I,"batchingTexture",F._matricesTexture,Ie),Ct.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",F._colorsTexture,Ie));const tc=H.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&ye.update(F,H,Qn),(er||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,Ct.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(vi.envMap.value=Se,vi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(vi.envMapIntensity.value=U.environmentIntensity),er&&(Ct.setValue(I,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Sx(vi,ec),le&&G.fog===!0&&ie.refreshFogUniforms(vi,le),ie.refreshMaterialUniforms(vi,G,Q,q,g.state.transmissionRenderTarget[T.id]),Xo.upload(I,bh(we),vi,Ie)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xo.upload(I,bh(we),vi,Ie),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ct.setValue(I,"center",F.center),Ct.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(I,"normalMatrix",F.normalMatrix),Ct.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const vn=G.uniformsGroups;for(let nc=0,Mx=vn.length;nc<Mx;nc++){const Th=vn[nc];Ue.update(Th,Qn),Ue.bind(Th,Qn)}}return Qn}function Sx(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ex(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,H){Oe.get(T.texture).__webglTexture=U,Oe.get(T.depthTexture).__webglTexture=H;const G=Oe.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=Oe.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){A=T,C=U,b=H;let G=!0,F=null,le=!1,me=!1;if(T){const Se=Oe.get(T);Se.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Se.__webglFramebuffer===void 0?Ie.setupRenderTarget(T):Se.__hasExternalTextures&&Ie.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Le=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][H]:F=Le[U],le=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?F=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[H]:F=Le,E.copy(T.viewport),P.copy(T.scissor),z=T.scissorTest}else E.copy(j).multiplyScalar(Q).floor(),P.copy(Z).multiplyScalar(Q).floor(),z=de;if(be.bindFramebuffer(I.FRAMEBUFFER,F)&&G&&be.drawBuffers(T,F),be.viewport(E),be.scissor(P),be.setScissorTest(z),le){const Se=Oe.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,H)}else if(me){const Se=Oe.get(T.texture),Ne=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.__webglTexture,H||0,Ne)}R=-1},this.readRenderTargetPixels=function(T,U,H,G,F,le,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){be.bindFramebuffer(I.FRAMEBUFFER,ve);try{const Se=T.texture,Ne=Se.format,Le=Se.type;if(!rt.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&H>=0&&H<=T.height-F&&I.readPixels(U,H,G,F,fe.convert(Ne),fe.convert(Le),le)}finally{const Se=A!==null?Oe.get(A).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,U,H,G,F,le,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){be.bindFramebuffer(I.FRAMEBUFFER,ve);try{const Se=T.texture,Ne=Se.format,Le=Se.type;if(!rt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-G&&H>=0&&H<=T.height-F){const Ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(U,H,G,F,fe.convert(Ne),fe.convert(Le),0),I.flush();const Je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await _S(I,Je,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le)}finally{I.deleteBuffer(Ce),I.deleteSync(Je)}return le}}finally{const Se=A!==null?Oe.get(A).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(T,U=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(T.image.width*G),le=Math.floor(T.image.height*G),me=U!==null?U.x:0,ve=U!==null?U.y:0;Ie.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,me,ve,F,le),be.unbindTexture()},this.copyTextureToTexture=function(T,U,H=null,G=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let le,me,ve,Se,Ne,Le;H!==null?(le=H.max.x-H.min.x,me=H.max.y-H.min.y,ve=H.min.x,Se=H.min.y):(le=T.image.width,me=T.image.height,ve=0,Se=0),G!==null?(Ne=G.x,Le=G.y):(Ne=0,Le=0);const Ce=fe.convert(U.format),Je=fe.convert(U.type);Ie.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const xt=I.getParameter(I.UNPACK_ROW_LENGTH),vt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Ze=I.getParameter(I.UNPACK_SKIP_ROWS),we=I.getParameter(I.UNPACK_SKIP_IMAGES),Gt=T.isCompressedTexture?T.mipmaps[F]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,Se),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Ne,Le,le,me,Ce,Je,Gt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Ne,Le,Gt.width,Gt.height,Ce,Gt.data):I.texSubImage2D(I.TEXTURE_2D,F,Ne,Le,Ce,Je,Gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,we),F===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H=null,G=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0);let le,me,ve,Se,Ne,Le,Ce,Je,xt;const vt=T.isCompressedTexture?T.mipmaps[F]:T.image;H!==null?(le=H.max.x-H.min.x,me=H.max.y-H.min.y,ve=H.max.z-H.min.z,Se=H.min.x,Ne=H.min.y,Le=H.min.z):(le=vt.width,me=vt.height,ve=vt.depth,Se=0,Ne=0,Le=0),G!==null?(Ce=G.x,Je=G.y,xt=G.z):(Ce=0,Je=0,xt=0);const an=fe.convert(U.format),Ze=fe.convert(U.type);let we;if(U.isData3DTexture)Ie.setTexture3D(U,0),we=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ie.setTexture2DArray(U,0),we=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Gt=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qn=I.getParameter(I.UNPACK_SKIP_PIXELS),Va=I.getParameter(I.UNPACK_SKIP_ROWS),er=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(we,F,Ce,Je,xt,le,me,ve,an,Ze,vt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(we,F,Ce,Je,xt,le,me,ve,an,vt.data):I.texSubImage3D(we,F,Ce,Je,xt,le,me,ve,an,Ze,vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Va),I.pixelStorei(I.UNPACK_SKIP_IMAGES,er),F===0&&U.generateMipmaps&&I.generateMipmap(we),be.unbindTexture()},this.initRenderTarget=function(T){Oe.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,be.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===fh?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===ql?"display-p3":"srgb"}}class lx extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cx extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const am=new pt,pd=new W0,No=new Yl,Po=new D;class Ab extends Ut{constructor(e=new sn,n=new cx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;am.copy(r).invert(),pd.copy(e.ray).applyMatrix4(am);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,S=m;_<S;_++){const g=c.getX(_);Po.fromBufferAttribute(p,g),om(Po,g,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=f,S=m;_<S;_++)Po.fromBufferAttribute(p,_),om(Po,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function om(t,e,n,i,r,s,a){const o=pd.distanceSqToPoint(t);if(o<n){const l=new D;pd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Ee:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],a=[],o=new D,l=new pt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Dt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Dt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xh extends xi{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new Ee){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*p+this.aX,c=f*p+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tb extends xh{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,p){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Lo=new D,au=new vh,ou=new vh,lu=new vh;class ux extends xi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Lo.subVectors(r[0],r[1]).add(r[0]),c=Lo);const p=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Lo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(p),m),S=Math.pow(p.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(h),m);S<1e-4&&(S=1),_<1e-4&&(_=S),g<1e-4&&(g=S),au.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,_,S,g),ou.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,_,S,g),lu.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,_,S,g)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),ou.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),lu.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(au.calc(l),ou.calc(l),lu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lm(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function Cb(t,e){const n=1-t;return n*n*e}function Rb(t,e){return 2*(1-t)*t*e}function Nb(t,e){return t*t*e}function fa(t,e,n,i){return Cb(t,e)+Rb(t,n)+Nb(t,i)}function Pb(t,e){const n=1-t;return n*n*n*e}function Lb(t,e){const n=1-t;return 3*n*n*t*e}function Ib(t,e){return 3*(1-t)*t*t*e}function Db(t,e){return t*t*t*e}function pa(t,e,n,i,r){return Pb(t,e)+Lb(t,n)+Ib(t,i)+Db(t,r)}class kb extends xi{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(pa(e,r.x,s.x,a.x,o.x),pa(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ub extends xi{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(pa(e,r.x,s.x,a.x,o.x),pa(e,r.y,s.y,a.y,o.y),pa(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ob extends xi{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fb extends xi{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bb extends xi{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(fa(e,r.x,s.x,a.x),fa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends xi{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(fa(e,r.x,s.x,a.x),fa(e,r.y,s.y,a.y),fa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zb extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(lm(o,l.x,c.x,h.x,p.x),lm(o,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var jb=Object.freeze({__proto__:null,ArcCurve:Tb,CatmullRomCurve3:ux,CubicBezierCurve:kb,CubicBezierCurve3:Ub,EllipseCurve:xh,LineCurve:Ob,LineCurve3:Fb,QuadraticBezierCurve:Bb,QuadraticBezierCurve3:_h,SplineCurve:zb});class xs extends sn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let _=0;const S=[],g=i/2;let d=0;v(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(m,2));function v(){const y=new D,C=new D;let b=0;const A=(n-e)/i;for(let R=0;R<=s;R++){const M=[],E=R/s,P=E*(n-e)+e;for(let z=0;z<=r;z++){const B=z/r,W=B*l+o,$=Math.sin(W),q=Math.cos(W);C.x=P*$,C.y=-E*i+g,C.z=P*q,p.push(C.x,C.y,C.z),y.set($,A,q).normalize(),f.push(y.x,y.y,y.z),m.push(B,1-E),M.push(_++)}S.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const E=S[M][R],P=S[M+1][R],z=S[M+1][R+1],B=S[M][R+1];h.push(E,P,B),h.push(P,z,B),b+=6}c.addGroup(d,b,0),d+=b}function x(y){const C=_,b=new Ee,A=new D;let R=0;const M=y===!0?e:n,E=y===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,g*E,0),f.push(0,E,0),m.push(.5,.5),_++;const P=_;for(let z=0;z<=r;z++){const W=z/r*l+o,$=Math.cos(W),q=Math.sin(W);A.x=M*q,A.y=g*E,A.z=M*$,p.push(A.x,A.y,A.z),f.push(0,E,0),b.x=$*.5+.5,b.y=q*.5*E+.5,m.push(b.x,b.y),_++}for(let z=0;z<r;z++){const B=C+z,W=P+z;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),R+=3}c.addGroup(d,R,y===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bl extends xs{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new bl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yh extends sn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new D,y=new D,C=new D;for(let b=0;b<n.length;b+=3)m(n[b+0],x),m(n[b+1],y),m(n[b+2],C),l(x,y,C,v)}function l(v,x,y,C){const b=C+1,A=[];for(let R=0;R<=b;R++){A[R]=[];const M=v.clone().lerp(y,R/b),E=x.clone().lerp(y,R/b),P=b-R;for(let z=0;z<=P;z++)z===0&&R===b?A[R][z]=M:A[R][z]=M.clone().lerp(E,z/P)}for(let R=0;R<b;R++)for(let M=0;M<2*(b-R)-1;M++){const E=Math.floor(M/2);M%2===0?(f(A[R][E+1]),f(A[R+1][E]),f(A[R][E])):(f(A[R][E+1]),f(A[R+1][E+1]),f(A[R+1][E]))}}function c(v){const x=new D;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new D;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=g(v)/2/Math.PI+.5,C=d(v)/Math.PI+.5;a.push(y,1-C)}_(),p()}function p(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],C=a[v+4],b=Math.max(x,y,C),A=Math.min(x,y,C);b>.9&&A<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function m(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const v=new D,x=new D,y=new D,C=new D,b=new Ee,A=new Ee,R=new Ee;for(let M=0,E=0;M<s.length;M+=9,E+=6){v.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),b.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),R.set(a[E+4],a[E+5]),C.copy(v).add(x).add(y).divideScalar(3);const P=g(C);S(b,E+0,v,P),S(A,E+2,x,P),S(R,E+4,y,P)}}function S(v,x,y,C){C<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.vertices,e.indices,e.radius,e.details)}}class Sh extends yh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Sh(e.radius,e.detail)}}class pr extends sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new D,f=new D,m=[],_=[],S=[],g=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let y=0;d===0&&a===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const b=C/n;p.x=-e*Math.cos(r+b*s)*Math.sin(a+x*o),p.y=e*Math.cos(a+x*o),p.z=e*Math.sin(r+b*s)*Math.sin(a+x*o),_.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),g.push(b+y,1-x),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const x=h[d][v+1],y=h[d][v],C=h[d+1][v],b=h[d+1][v+1];(d!==0||a>0)&&m.push(x,y,b),(d!==i-1||l<Math.PI)&&m.push(y,C,b)}this.setIndex(m),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Al extends sn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new D,p=new D,f=new D;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const S=_/r*s,g=m/i*Math.PI*2;p.x=(e+n*Math.cos(g))*Math.cos(S),p.y=(e+n*Math.cos(g))*Math.sin(S),p.z=n*Math.sin(g),o.push(p.x,p.y,p.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),f.subVectors(p,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const S=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,d=(r+1)*(m-1)+_,v=(r+1)*m+_;a.push(S,g,v),a.push(g,d,v)}this.setIndex(a),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tl extends sn{constructor(e=new _h(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new Ee;let h=new D;const p=[],f=[],m=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(m,2));function S(){for(let x=0;x<n;x++)g(x);g(s===!1?n:0),v(),d()}function g(x){h=e.getPointAt(x/n,h);const y=a.normals[x],C=a.binormals[x];for(let b=0;b<=r;b++){const A=b/r*Math.PI*2,R=Math.sin(A),M=-Math.cos(A);l.x=M*y.x+R*C.x,l.y=M*y.y+R*C.y,l.z=M*y.z+R*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let x=1;x<=n;x++)for(let y=1;y<=r;y++){const C=(r+1)*(x-1)+(y-1),b=(r+1)*x+(y-1),A=(r+1)*x+y,R=(r+1)*(x-1)+y;_.push(C,b,R),_.push(b,A,R)}}function v(){for(let x=0;x<=n;x++)for(let y=0;y<=r;y++)c.x=x/n,c.y=y/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Tl(new jb[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ii extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dx extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const cu=new pt,cm=new D,um=new D;class Hb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(cm),um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(um),n.updateMatrixWorld(),cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vb extends Hb{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uu extends dx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Vb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gb extends dx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class hx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=dm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function dm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);function Wb(){const t=_e.useRef(null);return _e.useEffect(()=>{const e=t.current;if(!e)return;const n=new lx,i=new un(45,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=24;const r=new ox({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Sh(7,1),a=new $l({color:11837550,wireframe:!0,transparent:!0,opacity:.22}),o=new Qe(s,a);n.add(o);const l=350,c=new Float32Array(l*3);for(let b=0;b<l*3;b++)c[b]=(Math.random()-.5)*22;const h=new sn;h.setAttribute("position",new Fn(c,3));const p=new cx({size:.035,color:16777215,transparent:!0,opacity:.4}),f=new Ab(h,p);n.add(f);let m=0,_=0,S=0,g=0;const d=b=>{m=(b.clientX/window.innerWidth-.5)*2,_=(b.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",d);const v=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",v);const x=new hx;let y;const C=()=>{y=requestAnimationFrame(C);const b=x.getElapsedTime();S+=(m-S)*.05,g+=(_-g)*.05,o.rotation.x=b*.08+g*.4,o.rotation.y=b*.12+S*.4,f.rotation.y=-b*.03,f.rotation.x=-b*.02,r.render(n,i)};return C(),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("resize",v),cancelAnimationFrame(y),s.dispose(),a.dispose(),h.dispose(),p.dispose(),r.dispose()}},[]),u.jsx("canvas",{ref:t,id:"webgl-canvas",className:"fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"})}function Xb({className:t="w-full h-full",isSpeaking:e=!1}){const n=_e.useRef(null),i=_e.useRef(e);return _e.useEffect(()=>{i.current=e},[e]),_e.useEffect(()=>{const r=n.current;if(!r)return;const s=r.parentElement.clientWidth||300,a=r.parentElement.clientHeight||300,o=new lx,l=new un(36,s/a,.1,100);l.position.set(0,.15,4.4);const c=new ox({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});c.setSize(s,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2));const h=new Gb(16777215,1.3);o.add(h);const p=new uu(16774374,2.2);p.position.set(4,6,5),o.add(p);const f=new uu(11837550,3.5);f.position.set(-4,3,-3),o.add(f);const m=new uu(8490232,1.2);m.position.set(0,-3,3),o.add(m);const _=new Gn;o.add(_);const S=new Gn;_.add(S);const g=new xs(.85,1.2,1.2,32),d=new ii({color:1250067,roughness:.8,metalness:.1}),v=new Qe(g,d);v.position.set(0,-1.2,0),S.add(v);const x=new Al(.55,.05,16,32),y=new ii({color:11837550,roughness:.25,metalness:.9,emissive:11837550,emissiveIntensity:.25}),C=new Qe(x,y);C.rotation.x=Math.PI/2,C.position.set(0,-.6,0),S.add(C);const b=new xs(.24,.28,.5,24),A=new ii({color:16502965,roughness:.55,metalness:.05}),R=new Qe(b,A);R.position.set(0,-.38,0),S.add(R);const M=new Gn;M.position.set(0,.2,0),_.add(M);const E=new pr(.72,32,32);E.scale(.95,1.15,1);const P=new Qe(E,A);M.add(P);const z=new Gn;M.add(z);const B=new ii({color:1579044,roughness:.4,metalness:.3}),W=new ii({color:11837550,roughness:.3,metalness:.7,emissive:11837550,emissiveIntensity:.35}),$=new pr(.76,32,32);$.scale(.98,1.18,1.02);const q=new Qe($,B);q.position.set(0,.08,-.05),z.add(q);const Q=new bl(.18,.5,6);[[0,.95,.2,-.3,0,.1,!0],[-.32,.88,.15,-.25,0,-.4,!1],[.32,.88,.15,-.25,0,.4,!1],[-.45,.65,.3,-.1,0,-.6,!0],[.45,.65,.3,-.1,0,.6,!0],[0,.92,-.25,.4,0,0,!1],[-.35,.8,-.25,.3,0,-.3,!1],[.35,.8,-.25,.3,0,.3,!1],[-.2,.82,.42,-.45,0,-.15,!0],[.2,.82,.42,-.45,0,.15,!0]].forEach(([xe,Be,nt,ut,Ye,gn,xn])=>{const Tn=new Qe(Q,xn?W:B);Tn.position.set(xe,Be,nt),Tn.rotation.set(ut,Ye,gn),z.add(Tn)});const Y=new Gn;Y.position.set(0,.12,.66),M.add(Y);const j=new pr(.13,20,20);j.scale(1.2,.9,.5);const Z=new ii({color:16777215,roughness:.1}),de=new Qe(j,Z);de.position.set(-.25,0,0),Y.add(de);const Ae=new Qe(j,Z);Ae.position.set(.25,0,0),Y.add(Ae);const X=new pr(.065,16,16);X.scale(1,1,.4);const O=new ii({color:526344,roughness:.1,metalness:.8}),te=new Qe(X,O);te.position.set(-.25,0,.05),Y.add(te);const re=new Qe(X,O);re.position.set(.25,0,.05),Y.add(re);const Re=new pr(.02,8,8),Pe=new $l({color:16777215}),Xe=new Qe(Re,Pe);Xe.position.set(-.23,.02,.08),Y.add(Xe);const I=new Qe(Re,Pe);I.position.set(.27,.02,.08),Y.add(I);const Ge=new Os(.24,.035,.02),He=new ii({color:1579044,roughness:.4}),rt=new Qe(Ge,He);rt.position.set(-.25,.18,.68),rt.rotation.z=-.1,M.add(rt);const be=new Qe(Ge,He);be.position.set(.25,.18,.68),be.rotation.z=.1,M.add(be);const qe=new bl(.05,.14,4),Oe=new Qe(qe,A);Oe.position.set(0,-.05,.72),Oe.rotation.x=-Math.PI/8,M.add(Oe);const Ie=new _h(new D(-.16,-.22,.68),new D(0,-.26,.7),new D(.16,-.22,.68)),gt=new Tl(Ie,16,.018,8,!1),N=new ii({color:9124410,roughness:.3}),w=new Qe(gt,N);M.add(w);const V=new Gn;M.add(V);const ne=new xh(0,0,.78,.92,0,Math.PI,!1,0).getPoints(32).map(xe=>new D(xe.x,xe.y+.15,0)),ie=new ux(ne),Me=new Tl(ie,32,.045,8,!1),he=new Qe(Me,d);V.add(he);const ce=new xs(.28,.28,.2,24);ce.rotateZ(Math.PI/2);const De=new Qe(ce,d);De.position.set(-.76,.15,0),V.add(De);const ae=new Qe(ce,d);ae.position.set(.76,.15,0),V.add(ae);const ye=new Al(.2,.025,16,32);ye.rotateY(Math.PI/2);const Fe=new Qe(ye,y);Fe.position.set(-.86,.15,0),V.add(Fe);const Te=new Qe(ye,y);Te.position.set(.86,.15,0),V.add(Te);let fe=0,ke=0,Ue=0,st=0;const L=xe=>{const Be=xe.clientX/window.innerWidth*2-1,nt=-(xe.clientY/window.innerHeight)*2+1;fe=Be,ke=nt};window.addEventListener("mousemove",L);const pe=()=>{if(!r||!r.parentElement)return;const xe=r.parentElement.clientWidth,Be=r.parentElement.clientHeight||xe;l.aspect=xe/Be,l.updateProjectionMatrix(),c.setSize(xe,Be)};window.addEventListener("resize",pe);const K=new hx;let J;const oe=()=>{J=requestAnimationFrame(oe);const xe=K.getElapsedTime();Ue+=(fe-Ue)*.08,st+=(ke-st)*.08,M.rotation.y=Ue*.75,M.rotation.x=-st*.45,M.rotation.z=-Ue*.12,S.rotation.y=Ue*.25,S.rotation.x=-st*.1;const Be=vp.clamp(Ue*.04,-.04,.04),nt=vp.clamp(st*.03,-.03,.03);if(te.position.x=-.25+Be,te.position.y=nt,re.position.x=.25+Be,re.position.y=nt,_.position.y=Math.sin(xe*2.2)*.05,_.rotation.y=Math.sin(xe*1.2)*.02,i.current){const ut=Math.abs(Math.sin(xe*16));w.scale.y=1+ut*.85,w.scale.x=1-ut*.15;const Ye=.25+ut*.75;Fe.material.emissiveIntensity=Ye,Te.material.emissiveIntensity=Ye,M.position.y=.2+Math.sin(xe*10)*.025}else w.scale.set(1,1,1),Fe.material.emissiveIntensity=.25,Te.material.emissiveIntensity=.25,M.position.y=.2;c.render(o,l)};return oe(),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("resize",pe),cancelAnimationFrame(J),o.clear(),c.dispose()}},[]),u.jsx("div",{className:`relative ${t} flex items-center justify-center overflow-hidden pointer-events-none`,children:u.jsx("canvas",{ref:n,className:"w-full h-full"})})}/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fx=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=_e.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>_e.createElement("svg",{ref:l,...Yb,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:fx("lucide",r),...o},[...a.map(([c,h])=>_e.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(t,e)=>{const n=_e.forwardRef(({className:i,...r},s)=>_e.createElement($b,{ref:s,iconNode:e,className:fx(`lucide-${qb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=Ve("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=Ve("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=Ve("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=Ve("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=Ve("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=Ve("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=Ve("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=Ve("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Ve("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=Ve("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=Ve("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=Ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=Ve("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=Ve("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=Ve("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=Ve("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Ve("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=Ve("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=Ve("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=Ve("OctagonAlert",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=Ve("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=Ve("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=Ve("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=Ve("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=Ve("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=Ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Ve("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Ve("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=Ve("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=Ve("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=Ve("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=Ve("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=Ve("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Ve("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Ve("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Ve("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),hu=[{code:"en-US",name:"English (US)",flag:"🇺🇸",native:"English"},{code:"ur-PK",name:"Urdu (Pakistan)",flag:"🇵🇰",native:"اردو"},{code:"es-ES",name:"Spanish (Español)",flag:"🇪🇸",native:"Español"},{code:"de-DE",name:"German (Deutsch)",flag:"🇩🇪",native:"Deutsch"},{code:"fr-FR",name:"French (Français)",flag:"🇫🇷",native:"Français"},{code:"ar-SA",name:"Arabic (العربية)",flag:"🇸🇦",native:"العربية"},{code:"ja-JP",name:"Japanese (日本語)",flag:"🇯🇵",native:"日本語"},{code:"zh-CN",name:"Chinese (中文)",flag:"🇨🇳",native:"简体中文"}],Io={"en-US":"Hi there! 🪄 I'm Ikram's AI Twin. Ask me anything about Ikram's work at Cuboid & WebMantis, his full-stack skills, projects, or how to collaborate with him!","ur-PK":"السلام علیکم! 🪄 میں اکرام امجد کا اے آئی ٹوئن ہوں۔ آپ مجھ سے اکرام کے کام، مہارتوں، پراجیکٹس اور تعلیمی پس منظر کے بارے میں کچھ بھی پوچھ سکتے ہیں!","es-ES":"¡Hola! 🪄 Soy el gemelo de IA de Ikram. Pregúntame sobre su trabajo en Cuboid y WebMantis, sus habilidades full-stack o cómo colaborar con él.","de-DE":"Hallo! 🪄 Ich bin Ikrams KI-Zwilling. Frag mich alles über Ikrams Arbeit bei Cuboid & WebMantis, seine Full-Stack-Fähigkeiten oder Projekte.","fr-FR":"Bonjour ! 🪄 Je suis le jumeau IA d'Ikram. Posez-moi des questions sur son travail chez Cuboid & WebMantis, ses compétences full-stack ou ses projets.","ar-SA":"مرحباً! 🪄 أنا التوأم الذكي لإكرام أمجد. اسألني عن خبراته في Cuboid وWebMantis، مهاراته البرمجية، أو مشاريعه السابقة.","ja-JP":"こんにちは！🪄 イクラムのAIツインです。CuboidやWebMantisでの開発経験、フルスタック技術、プロジェクトについて何でも聞いてください！","zh-CN":"你好！🪄 我是Ikram的AI分身。欢迎询问关于Ikram在Cuboid和WebMantis的全栈开发经验、技术栈以及项目作品！"},xm={"en-US":["Introduce Ikram to me","What did Ikram build at Cuboid & WebMantis?","What is his full tech stack?","What are his certifications & education?","How can I hire or contact Ikram?"],"ur-PK":["اکرام کا تعارف کروائیں","کیوبائیڈ اور ویب مینٹس میں اکرام کا کیا کام ہے؟","اکرام کی ٹیکنیکل مہارتیں کیا ہیں؟","اکرام کی تعلیم اور سرٹیفیکیشنز کیا ہیں؟","اکرام سے کیسے رابطہ کیا جا سکتا ہے؟"],"es-ES":["Presenta a Ikram","¿Qué construyó Ikram en Cuboid y WebMantis?","¿Cuál es su stack tecnológico?","¿Cuáles son sus certificaciones?","¿Cómo puedo contactar a Ikram?"],"de-DE":["Stelle Ikram vor","Was hat Ikram bei Cuboid & WebMantis gebaut?","Welche Technologien beherrscht er?","Welche Zertifikate hat er?","Wie kann ich Ikram kontaktieren?"],"fr-FR":["Présentez Ikram","Qu'a développé Ikram chez Cuboid & WebMantis ?","Quelles sont ses compétences techniques ?","Quelles sont ses certifications ?","Comment contacter Ikram ?"],"ar-SA":["عرّفني بإكرام","ماذا أنجز إكرام في Cuboid وWebMantis؟","ما هي التقنيات التي يتقنها؟","ما هي شهاداته الأكاديمية؟","كيف يمكنني التواصل مع إكرام؟"],"ja-JP":["イクラムの自己紹介をして","CuboidとWebMantisで何を作りましたか？","主な技術スタックは何ですか？","資格や学歴を教えてください","連絡先や採用について教えて"],"zh-CN":["请介绍一下Ikram","Ikram在Cuboid和WebMantis做了什么？","他的核心技术栈是什么？","他的学历与认证有哪些？","如何联系或聘用Ikram？"]},fu={intro:{"en-US":"Ikram Amjad is a Computer Engineer and Full-Stack Developer based in Islamabad, Pakistan. He has a degree in Electrical & Computer Engineering from COMSATS Abbottabad and currently holds two active production engineering roles: Full-Stack Engineer at Cuboid Incorporation and Back End Developer at WebMantis. He specializes in scalable Node.js architectures, React & Angular full-stack applications, PostgreSQL/MongoDB database design, Redis caching, AWS cloud systems, and Prompt Engineering!","ur-PK":"اکرام امجد اسلام آباد، پاکستان سے تعلق رکھنے والے ایک کمپیوٹر انجینئر اور فل اسٹیک ڈویلپر ہیں۔ انہوں نے کامسیٹس ایبٹ آباد سے الیکٹریکل اینڈ کمپیوٹر انجینئرنگ میں ڈگری حاصل کی ہے۔ فی الوقت وہ کیوبائیڈ انکارپوریشن میں بطور فل اسٹیک انجینئر اور ویب مینٹس میں بیک اینڈ ڈویلپر کام کر رہے ہیں۔ وہ نوڈ جے ایس، ری ایکٹ، اینگولر، پوسٹگری ایس کیو ایل، مونگو ڈی بی، ریڈیس کیشنگ، اے ڈبلیو ایس کلاؤڈ اور پرامپٹ انجینئرنگ میں گہری مہارت رکھتے ہیں۔","es-ES":"Ikram Amjad es un ingeniero informático y desarrollador Full-Stack radicado en Islamabad, Pakistán. Graduado de COMSATS Abbottabad, actualmente trabaja activamente como Full-Stack Engineer en Cuboid Incorporation y Back End Developer en WebMantis, especializándose en Node.js, React, PostgreSQL, MongoDB, Redis y AWS.","de-DE":"Ikram Amjad ist ein Computeringenieur und Full-Stack-Entwickler aus Islamabad, Pakistan. Er hat an der COMSATS Abbottabad studiert und arbeitet derzeit als Full-Stack-Ingenieur bei Cuboid Incorporation und als Backend-Entwickler bei WebMantis mit Fokus auf Node.js, React, PostgreSQL und AWS.","fr-FR":"Ikram Amjad est un ingénieur en informatique et développeur Full-Stack basé à Islamabad, au Pakistan. Diplômé de COMSATS Abbottabad, il travaille actuellement chez Cuboid Incorporation et WebMantis, spécialisé dans Node.js, React, PostgreSQL, MongoDB et AWS.","ar-SA":"إكرام أمجد هو مهندس حاسوب ومطور Full-Stack مقيم في إسلام آباد، باكستان. تخرج من جامعة COMSATS، ويعمل حالياً كمهندس Full-Stack في Cuboid ومطور Backend في WebMantis، متمرس في Node.js، React، قواعد البيانات وAWS.","ja-JP":"イクラム・アムジャド（Ikram Amjad）は、パキスタンのイスラマバードを拠点とするコンピュータエンジニア兼フルスタック開発者です。COMSATSアボッタバードを卒業し、現在はCuboid IncのフルスタックエンジニアおよびWebMantisのバックエンド開発者として活躍しています。","zh-CN":"Ikram Amjad是一名常驻巴基斯坦伊斯兰堡的计算机工程师兼全栈开发人员。毕业于COMSATS大学，目前在Cuboid担任全栈工程师并在WebMantis担任后端开发人员，擅长Node.js、React、PostgreSQL和AWS云架构。"},experience_cuboid:{"en-US":"At Cuboid Incorporation (Dec 2025 – Present), Ikram serves as a Full Stack Engineer. He architects enterprise web platforms uniting responsive React.js and Angular.js client frontends with relational data modeling in PostgreSQL and flexible document stores in MongoDB. He also engineered secure JWT role-based access control (RBAC) and high-concurrency REST endpoints.","ur-PK":"کیوبائیڈ انکارپوریشن (دسمبر 2025 تا حال) میں اکرام فل اسٹیک انجینئر کے طور پر کام کر رہے ہیں۔ وہ ری ایکٹ اور اینگولر فرنٹ اینڈز کو پوسٹگری ایس کیو ایل اور مونگو ڈی بی کے ساتھ جوڑنے والے پیچیدہ ویب پلیٹ فارمز بناتے ہیں، جن میں محفوظ لاگ ان اور تیز ترین ڈیٹا پروسیسنگ شامل ہے۔","es-ES":"En Cuboid Incorporation, Ikram trabaja como ingeniero Full-Stack creando aplicaciones web empresariales con React, Angular, Node.js, PostgreSQL y MongoDB.","de-DE":"Bei Cuboid Incorporation arbeitet Ikram als Full-Stack-Ingenieur und entwickelt Enterprise-Webplattformen mit React, Angular, PostgreSQL und Node.js.","fr-FR":"Chez Cuboid Incorporation, Ikram conçoit des plateformes d'entreprise de bout en bout avec React, Angular, PostgreSQL et Node.js.","ar-SA":"في Cuboid Incorporation، يعمل إكرام كمهندس Full-Stack يقوم ببناء منصات ويب متكاملة باستخدام React وAngular وNode.js وPostgreSQL.","ja-JP":"Cuboid Incorporationでは、フルスタックエンジニアとしてReact、Angular、Node.js、PostgreSQLを活用したエンタープライズWeb基盤を構築しています。","zh-CN":"在Cuboid Incorporation，Ikram担任全栈工程师，利用React、Angular、Node.js和PostgreSQL构建企业级全栈Web平台。"},experience_webmantis:{"en-US":"At WebMantis (Aug 2024 – Present), Ikram is a Back End Developer. He constructs high-throughput server-side APIs with Node.js and Express.js, architects Redis in-memory caching and message queue tiers to reduce database latency by over 65%, and designs automated LLM prompt engineering pipelines for intelligent agent workflows.","ur-PK":"ویب مینٹس (اگست 2024 تا حال) میں اکرام بیک اینڈ ڈویلپر ہیں۔ وہ نوڈ جے ایس اور ایکسپریس میں ہائی تھرو پٹ اے پی آئیز بناتے ہیں، ریڈیس کیشنگ کے ذریعے ڈیٹا بیس کی رفتار میں 65 فیصد سے زیادہ اضافہ کرتے ہیں اور مصنوعی ذہانت کے جدید پرامپٹ سسٹمز ڈیزائن کرتے ہیں۔","es-ES":"En WebMantis, Ikram es desarrollador Backend, optimizando APIs en Node.js, implementando colas y caché con Redis e integrando flujos de inteligencia artificial.","de-DE":"Bei WebMantis ist Ikram Backend-Entwickler, zuständig für Node.js-APIs, Redis-Caching-Systeme und KI-Prompt-Engineering.","fr-FR":"Chez WebMantis, Ikram est développeur backend, optimisant les API Node.js, les systèmes de cache Redis et les intégrations d'IA.","ar-SA":"في WebMantis، يعمل إكرام كمطور Backend يقوم بتطوير واجهات برمجة التطبيقات بنظام Node.js وتحسين الأداء باستخدام Redis والذكاء الاصطناعي.","ja-JP":"WebMantisではバックエンド開発者として、Node.js APIの構築、Redisによるキャッシュ最適化、プロンプトエンジニアリングを行っています。","zh-CN":"在WebMantis，Ikram担任后端开发人员，主导Node.js API开发、Redis队列与缓存架构，以及大语言模型提示工程管道。"},skills:{"en-US":`Ikram's core technical toolkit spans:
• **Frontend**: React.js, Angular.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js / WebGL
• **Backend**: Node.js, Express.js, PHP & Laravel, RESTful API design, Microservices
• **Databases & Cache**: MongoDB, PostgreSQL, MySQL, Redis (caching & queues)
• **Cloud & AI**: AWS (S3, Lambda serverless), Prompt Engineering, AWS & Oracle AI Foundations
• **Tools**: Git, Postman, Linux, Vite`,"ur-PK":`اکرام کے تکنیکی اوزار میں شامل ہیں:
• **فرنٹ اینڈ**: ری ایکٹ، اینگولر، ٹیل ونڈ سی ایس ایس، تھری جے ایس (3D WebGL)
• **بیک اینڈ**: نوڈ جے ایس، ایکسپریس، پی ایچ پی و لاراول، ریسٹ فل سروسز
• **ڈیٹا بیسز**: مونگو ڈی بی، پوسٹگری ایس کیو ایل، مائی ایس کیو ایل، ریڈیس کیشے
• **کلاؤڈ اور اے آئی**: اے ڈبلیو ایس (S3، لیمبڈا)، پرامپٹ انجینئرنگ، اوریکل اور ایمیزون سرٹیفیکیشنز`,"es-ES":"Las habilidades de Ikram incluyen React.js, Angular.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS (S3 y Lambda) y Prompt Engineering.","de-DE":"Ikrams Fähigkeiten umfassen React.js, Angular.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS (S3, Lambda) und Prompt Engineering.","fr-FR":"Les compétences d'Ikram comprennent React.js, Angular.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS et l'ingénierie de prompts.","ar-SA":"تتضمن مهارات إكرام: React.js، Angular.js، Node.js، Express، PostgreSQL، MongoDB، Redis، AWS، وهندسة الأوامر (Prompt Engineering).","ja-JP":"主な技術スタックは、React.js、Angular.js、Node.js、Express、PostgreSQL、MongoDB、Redis、AWS（S3/Lambda）、プロンプトエンジニアリングです。","zh-CN":"Ikram的核心技能包括：React.js、Angular.js、Node.js、Express、PostgreSQL、MongoDB、Redis、AWS无服务器云服务及提示词工程。"},projects:{"en-US":`Ikram has 4 key featured production projects:
1. **Cuboid Enterprise Platform**: Multi-database full-stack web application with React, Angular, PostgreSQL, and Node.js.
2. **WebMantis AI Engine**: High-concurrency server-side pipeline with Redis queues and dynamic prompt engineering.
3. **CloudFlow AWS Microservices**: Event-driven serverless file processing with AWS S3, Lambda, and Redis pub/sub.
4. **IEEE Project Command Center**: Event orchestration portal built during his tenure as Project Manager at IEEE COMSATS.`,"ur-PK":`اکرام کے نمایاں پراجیکٹس میں شامل ہیں:
1. **کیوبائیڈ انٹرپرائز سوئیٹ**: فل اسٹیک ایپلی کیشن (ری ایکٹ، اینگولر، پوسٹگری اور مونگو ڈی بی)
2. **ویب مینٹس اے آئی انجن**: نوڈ جے ایس اور ریڈیس پر مبنی ہائی پرفارمنس بیک اینڈ
3. **کلاؤڈ فلو اے ڈبلیو ایس پائپ لائن**: سرورلیس مائیکرو سروسز (AWS S3، Lambda)
4. **آئی ٹرپل ای پراجیکٹ کمانڈ سینٹر**: کیمپس مینیجمنٹ سسٹم جو انہوں نے بطور پراجیکٹ مینیجر بنایا۔`,"es-ES":"Sus proyectos destacados incluyen la plataforma Cuboid Enterprise, el motor de IA de WebMantis, la arquitectura serverless CloudFlow en AWS y el portal de proyectos de IEEE COMSATS.","de-DE":"Zu seinen Projekten gehören die Cuboid Enterprise Suite, die WebMantis AI Engine, CloudFlow AWS Microservices und das IEEE COMSATS Portal.","fr-FR":"Ses projets incluent la suite Cuboid Enterprise, le moteur IA WebMantis, CloudFlow AWS Microservices et le portail IEEE COMSATS.","ar-SA":"من أبرز مشاريعه: منصة Cuboid Enterprise، محرك الذكاء الاصطناعي WebMantis، وخدمات CloudFlow السحابية على AWS، ومنظومة IEEE COMSATS.","ja-JP":"代表的なプロジェクトには、Cuboid Enterprise Suite、WebMantis AI Engine、CloudFlow AWSマイクロサービス、IEEE COMSATS管理システムがあります。","zh-CN":"代表项目包括：Cuboid企业级全栈平台、WebMantis高并发AI引擎、CloudFlow AWS微服务架构，以及IEEE COMSATS项目调度中心。"},education_certifications:{"en-US":`Ikram graduated with an Electrical & Computer Engineering degree from COMSATS Institute of Information Technology Abbottabad (2020–2024). In addition, he holds:
• **AWS Machine Learning & Cloud Foundations Certified**
• **Oracle AI & Cloud Foundations Certified**
• **Prompt Engineering Specialist**
• Former **Project Manager at IEEE COMSATS**.`,"ur-PK":`اکرام نے کامسیٹس ایبٹ آباد سے الیکٹریکل اینڈ کمپیوٹر انجینئرنگ میں ڈگری مکمل کی ہے۔ اس کے علاوہ ان کے پاس درج ذیل تصدیق شدہ سرٹیفیکیشنز ہیں:
• **اے ڈبلیو ایس مشین لرننگ و کلاؤڈ فاؤنڈیشنز**
• **اوریکل اے آئی و کلاؤڈ فاؤنڈیشنز**
• **پرامپٹ انجینئرنگ اسپیشلسٹ**
• سابق **پراجیکٹ مینیجر، آئی ٹرپل ای کامسیٹس**۔`,"es-ES":"Ikram se graduó en Ingeniería Eléctrica e Informática en COMSATS Abbottabad. Cuenta con certificaciones oficiales de AWS y Oracle en Inteligencia Artificial y Cloud, además de ser especialista en Prompt Engineering.","de-DE":"Ikram absolvierte sein Studium der Computer- und Elektrotechnik an der COMSATS Abbottabad. Er ist von AWS und Oracle für Cloud & KI zertifiziert.","fr-FR":"Ikram est diplômé en génie électrique et informatique de COMSATS Abbottabad. Il détient des certifications AWS et Oracle en IA et Cloud.","ar-SA":"تخرج إكرام بدرجة هندسة الحاسوب والكهرباء من جامعة COMSATS، ويحمل شهادات معتمدة من AWS وOracle في الذكاء الاصطناعي والسحابة.","ja-JP":"COMSATSアボッタバード校で電気・コンピュータ工学の学位を取得。AWSおよびOracleのAI・クラウド認定資格を保持しています。","zh-CN":"Ikram拥有COMSATS大学电气与计算机工程学士学位，并持有AWS及Oracle官方人工智能与云计算认证。"},contact:{"en-US":`You can easily reach out to Ikram directly:
• **Email**: [ikramamjad10@gmail.com](mailto:ikramamjad10@gmail.com)
• **LinkedIn**: [linkedin.com/in/ikram-amjad-8963b4195](https://www.linkedin.com/in/ikram-amjad-8963b4195)
• **GitHub**: [github.com/ikram-amjad](https://github.com/ikram-amjad)
• **Location**: Islamabad, Pakistan
He responds promptly within 24 hours!`,"ur-PK":`آپ اکرام سے باآسانی رابطہ کر سکتے ہیں:
• **ای میل**: ikramamjad10@gmail.com
• **لنکڈ اِن**: linkedin.com/in/ikram-amjad-8963b4195
• **گٹ ہب**: github.com/ikram-amjad
• **مقام**: اسلام آباد، پاکستان
وہ عموماً 24 گھنٹوں کے اندر جواب دیتے ہیں!`,"es-ES":"Puedes contactar a Ikram por correo en ikramamjad10@gmail.com, en LinkedIn (linkedin.com/in/ikram-amjad-8963b4195) o en GitHub (github.com/ikram-amjad).","de-DE":"Du kannst Ikram per E-Mail unter ikramamjad10@gmail.com, auf LinkedIn oder auf GitHub erreichen. Standort: Islamabad, Pakistan.","fr-FR":"Vous pouvez contacter Ikram par e-mail à ikramamjad10@gmail.com, via LinkedIn ou GitHub. Il est basé à Islamabad, Pakistan.","ar-SA":"يمكنك التواصل مع إكرام عبر البريد: ikramamjad10@gmail.com، أو من خلال LinkedIn وGitHub. مقره إسلام آباد، باكستان.","ja-JP":"イクラムへのご連絡はメール（ikramamjad10@gmail.com）、LinkedIn、またはGitHubからお気軽にどうぞ！","zh-CN":"欢迎通过邮箱 ikramamjad10@gmail.com、领英或GitHub与Ikram直接取得联系！"},fallback:{"en-US":"That's an interesting question! As Ikram's AI Twin, I can tell you all about his full-stack work with React and Node.js, his active engineering roles at Cuboid & WebMantis, his cloud projects with AWS & Redis, or his degree from COMSATS. Feel free to ask about any specific project, skill, or how to get in touch!","ur-PK":"بہت شکریہ! اکرام کے اے آئی ٹوئن کے طور پر، میں آپ کو ان کی فل اسٹیک مہارتوں، کیوبائیڈ اور ویب مینٹس میں کام، کامسیٹس کی ڈگری اور پراجیکٹس کے بارے میں بتا سکتا ہوں۔ آپ کسی بھی خاص مہارت یا رابطے کے بارے میں پوچھ سکتے ہیں!","es-ES":"¡Gracias por tu pregunta! Puedo contarte sobre el trabajo de Ikram con React y Node.js, sus roles en Cuboid y WebMantis, sus proyectos en AWS o cómo contactarlo.","de-DE":"Danke für deine Frage! Als Ikrams KI-Zwilling kann ich dir alles über seine Projekte bei Cuboid & WebMantis, seinen Tech-Stack oder Kontaktmöglichkeiten erzählen.","fr-FR":"Merci pour votre question ! Je peux vous renseigner sur les réalisations d'Ikram avec React et Node.js, ses rôles chez Cuboid & WebMantis, ou ses coordonnées.","ar-SA":"شكراً لسؤالك! بصفتي التوأم الذكي لإكرام، يمكنني إخبارك بكل ما يخص مهاراته البرمجية، مشاريعه في Cuboid وWebMantis، أو كيفية التواصل معه.","ja-JP":"ご質問ありがとうございます！イクラムのフルスタック開発実績、CuboidやWebMantisでの役割、技術スタックや連絡先について何でもお答えできます。","zh-CN":"感谢提问！作为Ikram的AI分身，我可以向你介绍他在React和Node.js开发、Cuboid与WebMantis的任职经历、AWS云项目或联系方式。"}};class gA{matchIntent(e){const n=e.toLowerCase().trim();return n.includes("who are you")||n.includes("who is ikram")||n.includes("introduce")||n.includes("about")||n.includes("tell me about")||n.includes("تعارف")||n.includes("کون ہو")||n.includes("présente")||n.includes("wer bist")||n.includes("quién eres")||n.includes("自己紹介")||n.includes("介绍")?"intro":n.includes("cuboid")||n.includes("کیوبائیڈ")?"experience_cuboid":n.includes("webmantis")||n.includes("mantis")||n.includes("ویب مینٹس")?"experience_webmantis":n.includes("experience")||n.includes("work")||n.includes("roles")||n.includes("company")||n.includes("job")||n.includes("تجربہ")||n.includes("کام")?"experience_cuboid":n.includes("skill")||n.includes("stack")||n.includes("tech")||n.includes("node")||n.includes("react")||n.includes("database")||n.includes("redis")||n.includes("aws")||n.includes("مهارت")||n.includes("fähigkeiten")||n.includes("habilidades")||n.includes("compétences")||n.includes("技術")||n.includes("技能")?"skills":n.includes("project")||n.includes("built")||n.includes("portfolio")||n.includes("cloudflow")||n.includes("engine")||n.includes("پراجیکٹ")||n.includes("منظومة")||n.includes("projekte")||n.includes("proyectos")||n.includes("projets")||n.includes("プロジェクト")||n.includes("项目")?"projects":n.includes("education")||n.includes("degree")||n.includes("university")||n.includes("comsats")||n.includes("certif")||n.includes("oracle")||n.includes("تعلیم")||n.includes("سرٹیفیکیشن")||n.includes("ausbildung")||n.includes("estudios")||n.includes("études")||n.includes("学歴")||n.includes("学历")?"education_certifications":n.includes("contact")||n.includes("hire")||n.includes("email")||n.includes("linkedin")||n.includes("github")||n.includes("reach")||n.includes("location")||n.includes("رابطہ")||n.includes("ای میل")||n.includes("kontakt")||n.includes("contacto")||n.includes("連絡")||n.includes("联系")?"contact":"fallback"}async generateResponse(e,n="en-US",i=null){if(i&&i.startsWith("AIza"))try{const a=await this.queryGeminiLive(e,n,i);if(a)return a}catch(a){console.warn("Live API call fallback to local knowledge engine:",a)}const r=this.matchIntent(e),s=fu[r]||fu.fallback;return s[n]||s["en-US"]||fu.fallback["en-US"]}async queryGeminiLive(e,n,i){var o,l,c,h,p;const r=`You are the AI Twin of Ikram Amjad, a Computer Engineer and Full-Stack Developer based in Islamabad, Pakistan. 
Ikram works as a Full-Stack Engineer at Cuboid Incorporation and Back End Developer at WebMantis. He graduated from COMSATS Abbottabad. 
Core stack: React, Angular, Node.js, Express, MongoDB, PostgreSQL, Redis, AWS (S3, Lambda), Prompt Engineering. 
Email: ikramamjad10@gmail.com, LinkedIn: https://www.linkedin.com/in/ikram-amjad-8963b4195, GitHub: https://github.com/ikram-amjad.
Answer warmly, accurately, and concisely in language: ${n}.`,s=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${i}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:`${r}

User Question: ${e}`}]}]})});if(!s.ok)throw new Error(`Gemini HTTP error: ${s.status}`);const a=await s.json();return(p=(h=(c=(l=(o=a==null?void 0:a.candidates)==null?void 0:o[0])==null?void 0:l.content)==null?void 0:c.parts)==null?void 0:h[0])==null?void 0:p.text}}const xA=new gA;class vA{constructor(){this.synth=typeof window<"u"?window.speechSynthesis:null,this.voices=[],this.recognition=null,this.isListening=!1,typeof window<"u"&&(this.initVoices(),this.synth&&this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.initVoices()))}initVoices(){this.synth&&(this.voices=this.synth.getVoices())}getVoicesForLang(e){(!this.voices||this.voices.length===0)&&this.initVoices();const n=e.split("-")[0].toLowerCase();return this.voices.filter(i=>i.lang.toLowerCase().startsWith(n))}speak({text:e,lang:n="en-US",rate:i=1,pitch:r=1,onStart:s,onEnd:a,onError:o}){if(!this.synth){o&&o(new Error("Speech synthesis not supported in this browser."));return}this.synth.cancel();const l=e.replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/https?:\/\/\S+/g,"").replace(/[[\]()↗]/g," ").trim();if(!l){a&&a();return}const c=new SpeechSynthesisUtterance(l);c.lang=n,c.rate=Math.max(.7,Math.min(1.5,i)),c.pitch=Math.max(.7,Math.min(1.3,r));const h=this.getVoicesForLang(n);if(h.length>0){const p=h.find(f=>f.name.toLowerCase().includes("natural")||f.name.toLowerCase().includes("google")||f.name.toLowerCase().includes("premium"));c.voice=p||h[0]}c.onstart=()=>{s&&s()},c.onend=()=>{a&&a()},c.onerror=p=>{p.error!=="canceled"&&p.error!=="interrupted"&&o&&o(p),a&&a()};try{this.synth.speak(c)}catch(p){o&&o(p),a&&a()}}stop(){this.synth&&this.synth.cancel()}isRecognitionSupported(){return typeof window<"u"&&(!!window.SpeechRecognition||!!window.webkitSpeechRecognition)}startListening({lang:e="en-US",onResult:n,onError:i,onEnd:r}){if(!this.isRecognitionSupported()){i&&i(new Error("Speech recognition not supported in this browser."));return}this.stop();const s=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new s,this.recognition.lang=e,this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.onstart=()=>{this.isListening=!0},this.recognition.onresult=a=>{const o=a.results[0][0].transcript;n&&n(o)},this.recognition.onerror=a=>{this.isListening=!1,i&&i(a)},this.recognition.onend=()=>{this.isListening=!1,r&&r()};try{this.recognition.start()}catch(a){this.isListening=!1,i&&i(a)}}stopListening(){if(this.recognition&&this.isListening){try{this.recognition.stop()}catch{}this.isListening=!1}}}const Ai=new vA,or={email:"ikramamjad10@gmail.com",linkedin:"https://www.linkedin.com/in/ikram-amjad-8963b4195"},_A=[{id:"mantis-ai-engine",title:"WebMantis AI & Backend Engine",category:"Backend & AI",badge:"Production System",description:"High-throughput server-side architecture powering dynamic AI prompt engineering pipelines and automated agent workflows.",longDescription:"Developed at WebMantis, this robust backend system leverages Node.js, Express, and Redis queues to process concurrent LLM interactions with optimized prompt templates, sub-second latency caching, and automated fallback logic.",tech:["Node.js","Express.js","MongoDB","Redis","AWS Lambda","Prompt Engineering"],highlights:["Engineered high-concurrency Node.js REST API with Redis queue caching","Integrated AWS S3 and Lambda for scalable serverless asset pipelines","Implemented comprehensive Postman API test automation suite"],liveUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",githubUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",color:"#00F0FF",stats:{latency:"<35ms",caching:"Redis Tier",status:"Active Production"}},{id:"cuboid-fullstack-suite",title:"Cuboid Full Stack Enterprise Platform",category:"Full Stack",badge:"Flagship Architecture",description:"End-to-end full-stack web application orchestrating multi-database connectivity (PostgreSQL & MongoDB) with dynamic React & Angular interfaces.",longDescription:"Architected at Cuboid Incorporation, this platform provides seamless real-time enterprise operations. It couples robust relational data modeling in PostgreSQL with fast MERN stack frontend modules, secure JWT authentication, and automated error logging.",tech:["React.js","Angular.js","Node.js","PostgreSQL","MongoDB","Tailwind CSS"],highlights:["Dual database integration uniting MongoDB flexibility with PostgreSQL relational rigor","Modular frontend components built with React.js and Angular.js","Enterprise authentication with role-based access control (RBAC)"],liveUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",githubUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",color:"#8B5CF6",stats:{uptime:"99.9%",db:"PostgreSQL & Mongo",scale:"Enterprise"}},{id:"aws-redis-pipeline",title:"CloudFlow AWS & Redis Microservices",category:"Cloud & DevOps",badge:"Cloud Architecture",description:"Distributed cloud microservice pipeline combining AWS S3, Lambda serverless executions, and Redis pub/sub queues for automated background jobs.",longDescription:"A specialized cloud infrastructure setup demonstrating optimal serverless patterns. It processes user file uploads directly to AWS S3, invokes asynchronous Lambda workers, and uses Redis key-value storage for instantaneous distributed state coordination.",tech:["AWS (S3, Lambda)","Redis","Node.js","RESTful APIs","Postman"],highlights:["Serverless event-driven architecture triggered by AWS S3 events","Redis caching layer reducing database read load by over 65%","Thoroughly verified and benchmarked using automated Postman collection runs"],liveUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",githubUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",color:"#39FF14",stats:{cloud:"AWS Serverless",queues:"Redis Pub/Sub",load:"-65% DB"}},{id:"ieee-project-manager-suite",title:"IEEE COMSATS Project Command Center",category:"Full Stack & Management",badge:"Leadership & Tech",description:"Centralized project management and event dispatch portal developed to organize technical initiatives, student teams, and engineering competitions.",longDescription:"Built during my tenure as Project Manager at IEEE COMSATS. Enabled team coordinators to assign deliverables, track engineering milestones, register participants, and publish real-time notifications to community members.",tech:["MERN Stack","Express.js","MongoDB","React.js","PHP / Laravel"],highlights:["Spearheaded technical development while leading a multidisciplinary team as Project Manager","Managed registration and logistics for large-scale campus technology events","Implemented automated email notifications and attendee tracking"],liveUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",githubUrl:"https://www.linkedin.com/in/ikram-amjad-8963b4195",color:"#FF007F",stats:{role:"Project Manager",impact:"IEEE Community",stack:"MERN"}}],yA=[{year:"DEC 2025 — PRESENT",role:"Full Stack Engineer",company:"Cuboid Incorporation",location:"Abbottabad District, Pakistan",period:"December 2025 — Present",type:"Full-Time",description:"Architecting end-to-end full-stack applications, designing scalable backend endpoints, and integrating modern React & Angular frontend modules with high-efficiency databases.",skills:["Full Stack","React.js","Angular.js","Node.js","PostgreSQL","MongoDB"],achievements:["Engineered comprehensive full-stack features connecting frontend views with secure REST microservices","Designed optimized PostgreSQL relational models and MongoDB schemas for high-speed retrieval","Collaborated on seamless integration of modern prompt engineering and UI workflows"]},{year:"AUG 2024 — PRESENT",role:"Back End Developer",company:"WebMantis",location:"Islamabad, Pakistan",period:"August 2024 — Present",type:"Full-Time",description:"Developing scalable, efficient, and reliable server-side applications with strong emphasis on prompt engineering, Redis caching, AWS cloud integration, and microservices.",skills:["Node.js","Express.js","MongoDB","Redis","AWS (S3, Lambda)","Prompt Engineering"],achievements:["Constructed reliable backend APIs with Node.js and Express for core product features","Architected Redis caching and queue systems for accelerated response times","Implemented cloud file processing pipelines utilizing AWS S3 and serverless Lambda functions","Pioneered prompt engineering workflows integrating cutting-edge LLM capabilities"]},{year:"MAR 2023 — AUG 2025",role:"Site Engineer",company:"FULMEN ENGINEERING (PVT) LTD",location:"Pakistan",period:"March 2023 — August 2025",type:"Full-Time",description:"Coordinated technical site operations, engineering system verifications, cross-functional execution, and adherence to rigorous safety and design specifications.",skills:["Site Engineering","Systems Operations","Technical Coordination","Quality Control"],achievements:["Managed on-site technical compliance across extensive engineering installations","Supervised technical personnel and bridged communication between engineering teams and stakeholders","Resolved complex on-site technical bottlenecks ensuring timely milestones delivery"]},{year:"JUL 2022 — APR 2024",role:"Sales Manager",company:"Amazon",location:"Pakistan",period:"July 2022 — April 2024",type:"Full-Time",description:"Directed e-commerce operations, analytics-driven growth strategies, client relationships, and inventory performance in high-velocity marketplace environments.",skills:["E-Commerce","Operations","Client Relations","Analytics","Inventory Management"],achievements:["Drove measurable sales growth through data-backed product listing optimization and market analysis","Managed international buyer communications and ensured superior customer satisfaction metrics","Strengthened negotiation, team coordination, and strategic problem-solving skills"]},{year:"PROJECT MANAGER",role:"Project Manager",company:"IEEE COMSATS",location:"COMSATS Abbottabad",period:"Leadership Tenure",type:"Leadership",description:"Led engineering teams and managed student technology initiatives, fostering collaboration, community outreach, and technical event execution.",skills:["Project Management","Leadership","Team Coordination","Public Speaking"],achievements:["Led cross-functional project teams through planning, execution, and delivery phases","Organized major university technical workshops, seminars, and hackathons","Awarded recognition for excellence in student leadership and community service"]},{year:"2020 — 2024",role:"Electrical & Computer Engineering",company:"COMSATS Institute of Information Technology Abbottabad",location:"Abbottabad, Pakistan",period:"January 2020 — July 2024",type:"Education",description:"Completed rigorous bachelor's engineering degree in Electrical and Computer Engineering. Mastered computer systems, software engineering, digital logic, networks, and database design.",skills:["Computer Engineering","Data Structures","Database Systems","Software Architecture","Operating Systems"],achievements:["Comprehensive engineering degree grounding in software, hardware, and algorithms","Active leader in university technical societies including IEEE COMSATS","Earned foundational certifications in AI & Machine Learning from AWS and Oracle"]}];function _x({isOpen:t,onClose:e}){const[n,i]=_e.useState("fullstack");if(!t)return null;const r={fullstack:"Computer Engineer and Full-Stack Developer with production experience architecting end-to-end web applications and high-throughput microservices. Currently engineering full-stack platforms at Cuboid Incorporation (React, Angular, Node.js, PostgreSQL) and backend systems with Redis caching at WebMantis. Proficient in delivering responsive user interfaces, robust RESTful APIs, and scalable database tiers.",backend:"Backend Developer and Computer Engineer specializing in high-concurrency Node.js microservices, in-memory Redis caching and queues, and multi-database architectures (PostgreSQL & MongoDB). Proven record at WebMantis developing prompt engineering workflows and sub-second caching pipelines, complemented by enterprise full-stack development at Cuboid Incorporation.",cloud_ai:"Full-Stack Developer with certified foundations in AWS Cloud and Oracle AI. Hands-on experience architecting serverless cloud workflows utilizing AWS S3 and Lambda, Redis pub/sub queues, and advanced prompt engineering pipelines. B.S. in Electrical & Computer Engineering from COMSATS Institute of Information Technology."},s=()=>{window.print()};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",onClick:a=>{a.target===a.currentTarget&&e()},children:u.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-white/15 rounded-2xl flex flex-col shadow-2xl overflow-hidden",children:[u.jsxs("div",{className:"print:hidden px-6 py-4 bg-[#11131a] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 z-10",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"p-2 rounded-lg bg-[#B4A06E]/15 border border-[#B4A06E]/30 text-[#B4A06E]",children:u.jsx(Cl,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-heading font-medium text-white",children:"Targeted Resume Generator"}),u.jsx("p",{className:"text-[11px] font-mono text-neutral-400",children:"Tailor Ikram's resume to your hiring focus"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 bg-[#080808] p-1 rounded-xl border border-white/10 text-xs font-mono",children:[u.jsx("button",{onClick:()=>i("fullstack"),className:`px-3 py-1.5 rounded-lg transition-colors ${n==="fullstack"?"bg-[#B4A06E] text-black font-semibold":"text-neutral-400 hover:text-white"}`,children:"Full-Stack"}),u.jsx("button",{onClick:()=>i("backend"),className:`px-3 py-1.5 rounded-lg transition-colors ${n==="backend"?"bg-[#B4A06E] text-black font-semibold":"text-neutral-400 hover:text-white"}`,children:"Backend Focus"}),u.jsx("button",{onClick:()=>i("cloud_ai"),className:`px-3 py-1.5 rounded-lg transition-colors ${n==="cloud_ai"?"bg-[#B4A06E] text-black font-semibold":"text-neutral-400 hover:text-white"}`,children:"Cloud & AI"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{onClick:s,className:"px-4 py-2 bg-[#B4A06E] hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded-lg flex items-center gap-1.5 transition-colors shadow-md",title:"Print or save as PDF",children:[u.jsx(cA,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Print / PDF"})]}),u.jsx("button",{onClick:e,className:"p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg border border-white/10 transition-colors",children:u.jsx(Jl,{className:"w-4 h-4"})})]})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-12 bg-white text-slate-900 font-sans leading-relaxed selection:bg-neutral-200",children:[u.jsxs("div",{className:"border-b-2 border-slate-900 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 uppercase",children:"IKRAM AMJAD"}),u.jsx("p",{className:"text-base font-semibold text-slate-700 tracking-wide mt-0.5",children:n==="fullstack"?"Full-Stack Developer":n==="backend"?"Full-Stack & Backend Systems Developer":"Full-Stack Developer • Cloud & AI Systems"})]}),u.jsxs("div",{className:"text-xs font-mono text-slate-600 text-left sm:text-right space-y-0.5",children:[u.jsx("div",{children:"Islamabad, Pakistan"}),u.jsx("div",{children:"ikramamjad10@gmail.com"}),u.jsx("div",{children:"github.com/ikram-amjad"}),u.jsx("div",{children:"linkedin.com/in/ikram-amjad-8963b4195"})]})]}),u.jsxs("div",{className:"mb-6",children:[u.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2",children:"EXECUTIVE PROFILE"}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-800 leading-relaxed font-normal",children:r[n]})]}),u.jsxs("div",{className:"mb-6",children:[u.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2",children:"TECHNICAL COMPETENCIES"}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800",children:[u.jsxs("div",{children:[u.jsx("strong",{className:"font-semibold text-slate-900",children:"Languages & Runtimes:"})," JavaScript (ES6+), Node.js (v22), PHP, HTML5/CSS3"]}),u.jsxs("div",{children:[u.jsx("strong",{className:"font-semibold text-slate-900",children:"Frontend Frameworks:"})," React.js, Angular.js, Tailwind CSS, Three.js"]}),u.jsxs("div",{children:[u.jsx("strong",{className:"font-semibold text-slate-900",children:"Backend & APIs:"})," Express.js, Laravel, RESTful APIs, JWT, Postman"]}),u.jsxs("div",{children:[u.jsx("strong",{className:"font-semibold text-slate-900",children:"Databases & Caching:"})," PostgreSQL (ACID), MongoDB, MySQL, Redis"]}),u.jsxs("div",{children:[u.jsx("strong",{className:"font-semibold text-slate-900",children:"Cloud & DevOps:"})," AWS (S3, Lambda), Git/GitHub CI/CD, Microservices"]}),u.jsxs("div",{children:[u.jsx("strong",{className:"font-semibold text-slate-900",children:"AI & Foundations:"})," Prompt Engineering, LLM Orchestration, AWS & Oracle AI"]})]})]}),u.jsxs("div",{className:"mb-6",children:[u.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-3",children:"PROFESSIONAL APPOINTMENTS"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-baseline",children:[u.jsx("h3",{className:"text-sm font-bold text-slate-900",children:"Full Stack Engineer"}),u.jsx("span",{className:"text-xs font-mono text-slate-600",children:"Dec 2025 — Present"})]}),u.jsx("div",{className:"text-xs font-medium text-slate-700 italic mb-1",children:"Cuboid Incorporation — Abbottabad District, Pakistan"}),u.jsxs("ul",{className:"list-disc list-outside ml-4 text-xs text-slate-700 space-y-1",children:[u.jsx("li",{children:"Architecting end-to-end web applications integrating modular React.js and Angular.js frontends with robust Node.js and Express REST services."}),u.jsx("li",{children:"Designing high-performance PostgreSQL relational schemas and MongoDB collections for transactional reliability and rapid payload retrieval."}),u.jsx("li",{children:"Implementing secure user authentication with cryptographic JSON Web Tokens (JWT) and Role-Based Access Control (RBAC)."})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-baseline",children:[u.jsx("h3",{className:"text-sm font-bold text-slate-900",children:"Back End Developer"}),u.jsx("span",{className:"text-xs font-mono text-slate-600",children:"Aug 2024 — Present"})]}),u.jsx("div",{className:"text-xs font-medium text-slate-700 italic mb-1",children:"WebMantis — Islamabad, Pakistan"}),u.jsxs("ul",{className:"list-disc list-outside ml-4 text-xs text-slate-700 space-y-1",children:[u.jsx("li",{children:"Engineering scalable server-side microservices with Node.js, Express, and Redis in-memory caching tiers to reduce latency under peak concurrency."}),u.jsx("li",{children:"Constructing AI prompt engineering pipelines for dynamic LLM workflows with fallback safeguards and token optimization."}),u.jsx("li",{children:"Integrating AWS S3 and serverless Lambda functions for asynchronous file and asset transformations."})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-baseline",children:[u.jsx("h3",{className:"text-sm font-bold text-slate-900",children:"Site Engineer"}),u.jsx("span",{className:"text-xs font-mono text-slate-600",children:"Mar 2023 — Aug 2025"})]}),u.jsx("div",{className:"text-xs font-medium text-slate-700 italic mb-1",children:"Fulmen Engineering (Pvt) Ltd — Pakistan"}),u.jsx("ul",{className:"list-disc list-outside ml-4 text-xs text-slate-700 space-y-1",children:u.jsx("li",{children:"Supervised rigorous technical operations, quality assurance, and on-site engineering system verifications."})})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2",children:"EDUCATION"}),u.jsxs("div",{className:"text-xs text-slate-800",children:[u.jsx("div",{className:"font-bold text-slate-900",children:"B.S. Electrical & Computer Engineering"}),u.jsx("div",{className:"text-slate-600",children:"COMSATS Institute of Information Technology"}),u.jsx("div",{className:"text-slate-500 font-mono text-[11px] mt-0.5",children:"Jan 2020 — Jul 2024 • Abbottabad, PK"})]})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2",children:"LEADERSHIP & HONORS"}),u.jsxs("div",{className:"text-xs text-slate-800",children:[u.jsx("div",{className:"font-bold text-slate-900",children:"Project Manager — IEEE COMSATS"}),u.jsx("div",{className:"text-slate-600",children:"Led engineering project squads and university technical events"}),u.jsx("div",{className:"text-slate-500 font-mono text-[11px] mt-0.5",children:"Awarded recognition for excellence in student leadership"})]})]})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2",children:"VERIFIED CERTIFICATIONS"}),u.jsxs("div",{className:"flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-800",children:[u.jsxs("div",{children:["• ",u.jsx("strong",{children:"AWS:"})," Machine Learning & Cloud Foundations"]}),u.jsxs("div",{children:["• ",u.jsx("strong",{children:"Oracle:"})," AI & Cloud Enterprise Foundations"]}),u.jsxs("div",{children:["• ",u.jsx("strong",{children:"AI:"})," Prompt Engineering Foundations"]})]})]})]})]})})}function SA({isOpen:t,onClose:e,onSpeakingChange:n}){const[i,r]=_e.useState([]),[s,a]=_e.useState(""),[o,l]=_e.useState("en-US"),[c,h]=_e.useState(!1),[p,f]=_e.useState(!1),[m,_]=_e.useState(!0),[S,g]=_e.useState(1),[d,v]=_e.useState(!1),[x,y]=_e.useState(""),[C,b]=_e.useState(!1),[A,R]=_e.useState(!1),[M,E]=_e.useState(0),[P,z]=_e.useState(!1),B=_e.useRef(null),W=_e.useRef(null),$=_e.useRef(null);_e.useEffect(()=>{const O=localStorage.getItem("ai_twin_lang")||"en-US",te=localStorage.getItem("ai_twin_voice")!=="false",re=parseFloat(localStorage.getItem("ai_twin_rate")||"1.0"),Re=localStorage.getItem("ai_twin_api_key")||"";l(O),_(te),g(re),y(Re),r([{id:"init-1",sender:"ai",text:Io[O]||Io["en-US"],timestamp:new Date}])},[]),_e.useEffect(()=>(A?(E(0),$.current=setInterval(()=>{E(O=>O+1)},1e3)):$.current&&clearInterval($.current),()=>{$.current&&clearInterval($.current)}),[A]);const q=O=>{const te=Math.floor(O/60),re=O%60;return`${String(te).padStart(2,"0")}:${String(re).padStart(2,"0")}`},Q=O=>{l(O),localStorage.setItem("ai_twin_lang",O),Ai.stop(),f(!1),n&&n(!1);const te=Io[O]||Io["en-US"];r(re=>[...re,{id:`lang-change-${Date.now()}`,sender:"ai",text:te,timestamp:new Date}]),m&&k(te,O)};_e.useEffect(()=>{var O;(O=B.current)==null||O.scrollIntoView({behavior:"smooth"})},[i,C]),_e.useEffect(()=>{t?setTimeout(()=>{var O;return(O=W.current)==null?void 0:O.focus()},200):(Ai.stop(),Ai.stopListening(),f(!1),h(!1),R(!1),n&&n(!1))},[t,n]);const k=(O,te=o)=>{m&&Ai.speak({text:O,lang:te,rate:S,onStart:()=>{f(!0),n&&n(!0)},onEnd:()=>{f(!1),n&&n(!1)},onError:()=>{f(!1),n&&n(!1)}})},Y=()=>{Ai.stop(),f(!1),n&&n(!1)},j=async O=>{const te=O||s;if(!te.trim())return;const re={id:`user-${Date.now()}`,sender:"user",text:te.trim(),timestamp:new Date};r(Re=>[...Re,re]),a(""),b(!0);try{const Re=await xA.generateResponse(te,o,x);setTimeout(()=>{b(!1),r(Pe=>[...Pe,{id:`ai-${Date.now()}`,sender:"ai",text:Re,timestamp:new Date}]),m&&k(Re,o)},350)}catch{b(!1),r(Pe=>[...Pe,{id:`ai-${Date.now()}`,sender:"ai",text:"I experienced an error generating the response. Please ask again!",timestamp:new Date}])}},Z=()=>{if(c)Ai.stopListening(),h(!1);else{if(!Ai.isRecognitionSupported()){alert("Speech recognition is not supported in this browser. Please try Chrome, Edge, or Safari.");return}Y(),h(!0),Ai.startListening({lang:o,onResult:O=>{h(!1),O&&j(O)},onError:O=>{console.warn("Speech recognition error:",O),h(!1)},onEnd:()=>{h(!1)}})}};if(!t)return null;const de=hu.find(O=>O.code===o)||hu[0],Ae=xm[o]||xm["en-US"],X=[...i].reverse().find(O=>O.sender==="ai");return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",onClick:O=>{O.target===O.currentTarget&&(Y(),e())},children:u.jsxs("div",{className:`relative w-full transition-all duration-300 ${A?"max-w-3xl h-[88vh] max-h-[760px]":"max-w-2xl h-[92vh] max-h-[720px]"} bg-[#0c0d12] border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden`,children:[u.jsxs("div",{className:"px-5 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#11131a]/90 backdrop-blur-sm z-20",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"relative flex items-center justify-center w-8 h-8 rounded-xl bg-[#B4A06E]/15 border border-[#B4A06E]/30 text-[#B4A06E]",children:[u.jsx(ma,{className:"w-4 h-4 animate-spin-slow"}),p&&u.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B4A06E] animate-ping"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"font-heading font-medium text-sm text-white tracking-wide",children:"Ikram's AI Twin"}),u.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#B4A06E]/15 text-[#B4A06E] border border-[#B4A06E]/30",children:[de.flag," ",de.native]})]}),u.jsx("p",{className:"text-[11px] font-mono text-neutral-400",children:A?"Voice Call Mode • Direct Audio Link":"Voiced Interactive Resume & Experience"})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{onClick:()=>{Y(),R(!A)},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${A?"bg-emerald-500/20 border-emerald-500/40 text-emerald-400":"bg-white/[0.03] border-white/10 text-[#B4A06E] hover:border-[#B4A06E]"}`,title:A?"Switch to Text Chat Mode":"Start Live Voice Call",children:[A?u.jsx(gm,{className:"w-3.5 h-3.5"}):u.jsx(oA,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:A?"End Call":"Voice Call"})]}),u.jsxs("button",{onClick:()=>z(!0),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#B4A06E]/15 border border-[#B4A06E]/30 text-[#B4A06E] text-xs font-mono hover:bg-[#B4A06E] hover:text-black transition-colors",title:"Generate targeted printable resume",children:[u.jsx(Cl,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Resume"})]}),p&&u.jsxs("button",{onClick:Y,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#B4A06E]/15 border border-[#B4A06E]/40 text-[#B4A06E] text-xs font-mono animate-pulse",title:"Stop voice output",children:[u.jsxs("div",{className:"flex items-center gap-0.5 h-3",children:[u.jsx("span",{className:"w-0.5 h-3 bg-[#B4A06E] animate-bounce",style:{animationDelay:"0ms"}}),u.jsx("span",{className:"w-0.5 h-2 bg-[#B4A06E] animate-bounce",style:{animationDelay:"150ms"}}),u.jsx("span",{className:"w-0.5 h-3.5 bg-[#B4A06E] animate-bounce",style:{animationDelay:"300ms"}})]}),u.jsx("span",{children:"Mute"})]}),u.jsx("button",{onClick:()=>{const O=!m;_(O),localStorage.setItem("ai_twin_voice",String(O)),O||Y()},className:`p-2 rounded-xl border transition-colors ${m?"border-[#B4A06E]/40 text-[#B4A06E] bg-[#B4A06E]/10":"border-white/10 text-neutral-500 hover:text-white"}`,title:m?"Voice Enabled":"Voice Muted",children:m?u.jsx(gd,{className:"w-4 h-4"}):u.jsx(vx,{className:"w-4 h-4"})}),u.jsx("button",{onClick:()=>v(!d),className:`p-2 rounded-xl border transition-colors ${d?"border-[#B4A06E] text-[#B4A06E] bg-[#B4A06E]/10":"border-white/10 text-neutral-400 hover:text-white"}`,title:"AI Twin Settings & Language",children:u.jsx(hA,{className:"w-4 h-4"})}),u.jsx("button",{onClick:()=>{Y(),e()},className:"p-2 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors",children:u.jsx(Jl,{className:"w-4 h-4"})})]})]}),d&&u.jsxs("div",{className:"p-5 border-b border-white/10 bg-[#12141d] z-20 space-y-4 animate-in slide-in-from-top-2 duration-200",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"text-xs font-mono uppercase tracking-widest text-[#B4A06E] flex items-center gap-1.5",children:[u.jsx(sA,{className:"w-3.5 h-3.5"}),"Select Voice & Language"]}),u.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:"Responds & speaks in this language"})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:hu.map(O=>u.jsxs("button",{onClick:()=>Q(O.code),className:`px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between border transition-all ${o===O.code?"bg-[#B4A06E] text-black font-semibold border-[#B4A06E]":"bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/30"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5 truncate",children:[u.jsx("span",{children:O.flag}),u.jsx("span",{className:"truncate",children:O.native})]}),o===O.code&&u.jsx(md,{className:"w-3.5 h-3.5 shrink-0"})]},O.code))}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-[11px] font-mono text-neutral-400 mb-1",children:["Speech Speed (",S,"x)"]}),u.jsx("input",{type:"range",min:"0.8",max:"1.3",step:"0.1",value:S,onChange:O=>{const te=parseFloat(O.target.value);g(te),localStorage.setItem("ai_twin_rate",String(te))},className:"w-full accent-[#B4A06E]"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] font-mono text-neutral-400 mb-1",children:"Gemini API Key (Optional Live LLM)"}),u.jsx("input",{type:"password",value:x,onChange:O=>{y(O.target.value),localStorage.setItem("ai_twin_api_key",O.target.value)},placeholder:"AIzaSy... (optional)",className:"w-full px-3 py-1.5 bg-[#080808] border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-[#B4A06E]"})]})]})]}),A?u.jsxs("div",{className:"flex-1 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-b from-[#0b0d14] via-[#08090d] to-[#050608] relative overflow-hidden",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-neutral-400 z-10 pb-4 border-b border-white/5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"}),u.jsx("span",{className:"text-white font-medium tracking-wider",children:"LIVE CALL // CONNECTED"})]}),u.jsx("div",{className:"text-center font-bold text-[#B4A06E] text-sm tracking-widest",children:q(M)}),u.jsx("div",{className:"text-neutral-500 text-[11px]",children:"Web Speech Audio • Encrypted"})]}),u.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center my-6 relative z-10",children:[u.jsxs("div",{className:"relative flex items-center justify-center",children:[u.jsx("div",{className:`absolute w-56 h-56 rounded-full border border-[#B4A06E]/20 transition-transform duration-700 ${p?"scale-125 animate-pulse":"scale-100 opacity-40"}`}),u.jsx("div",{className:`absolute w-44 h-44 rounded-full border border-[#B4A06E]/30 transition-transform duration-500 ${p?"scale-110":"scale-95 opacity-50"}`}),u.jsx("div",{className:`absolute w-32 h-32 rounded-full border border-white/10 ${c?"border-red-500/50 scale-110 animate-ping":""}`}),u.jsxs("div",{className:`w-28 h-28 rounded-full flex flex-col items-center justify-center border shadow-2xl transition-all duration-300 ${p?"bg-[#B4A06E] border-[#B4A06E] text-black shadow-[#B4A06E]/40 scale-105":c?"bg-red-500/20 border-red-500 text-red-400 shadow-red-500/30 animate-pulse":"bg-[#151722] border-white/20 text-[#B4A06E]"}`,children:[c?u.jsx(du,{className:"w-8 h-8 animate-bounce"}):p?u.jsx(uA,{className:"w-8 h-8 animate-spin-slow"}):u.jsx(qo,{className:"w-8 h-8"}),u.jsx("span",{className:"text-[10px] font-mono font-bold mt-1 tracking-wider uppercase",children:p?"Speaking":c?"Listening":"Ready"})]})]}),u.jsx("div",{className:"mt-8 max-w-xl text-center px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-300 font-sans leading-relaxed",children:c?u.jsx("span",{className:"text-red-400 font-mono animate-pulse",children:"Listening to your voice... Speak your question now."}):X?u.jsxs("span",{className:"line-clamp-3",children:['"',X.text,'"']}):u.jsxs("span",{className:"text-neutral-500 font-mono",children:["Tap the microphone below or ask a question in ",de.native,"."]})})]}),u.jsxs("div",{className:"flex flex-col items-center gap-4 pt-4 border-t border-white/5 z-10",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("button",{onClick:Z,className:`w-14 h-14 rounded-full flex items-center justify-center border shadow-xl transition-all ${c?"bg-red-500 border-red-400 text-white animate-pulse scale-110 shadow-red-500/40":"bg-white/10 hover:bg-white/20 border-white/20 text-white"}`,title:c?"Stop listening":"Speak to AI Twin",children:c?u.jsx(mm,{className:"w-6 h-6"}):u.jsx(du,{className:"w-6 h-6 text-[#B4A06E]"})}),u.jsx("button",{onClick:()=>{Y(),R(!1)},className:"w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 border border-red-400/40 text-white flex items-center justify-center shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95",title:"End Call and return to chat",children:u.jsx(gm,{className:"w-6 h-6"})})]}),u.jsx("div",{className:"text-[11px] font-mono text-neutral-500",children:c?"Listening... Speak clearly":"Tap the Gold Mic to speak • Tap Red to end"})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-sans text-sm",children:[i.map(O=>u.jsxs("div",{className:`flex gap-3 ${O.sender==="user"?"justify-end":"justify-start"}`,children:[O.sender==="ai"&&u.jsx("div",{className:"w-7 h-7 rounded-xl bg-[#B4A06E]/20 border border-[#B4A06E]/40 text-[#B4A06E] flex items-center justify-center shrink-0 mt-0.5",children:u.jsx(qo,{className:"w-4 h-4"})}),u.jsxs("div",{className:`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 leading-relaxed whitespace-pre-line ${O.sender==="user"?"bg-[#B4A06E] text-black font-medium rounded-tr-none shadow-md":"bg-[#151722] border border-white/[0.08] text-neutral-200 rounded-tl-none"}`,children:[O.text,O.sender==="ai"&&u.jsxs("div",{className:"mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between",children:[u.jsxs("button",{onClick:()=>k(O.text,o),className:"text-[10px] font-mono text-neutral-400 hover:text-[#B4A06E] flex items-center gap-1 transition-colors",children:[u.jsx(gd,{className:"w-3 h-3"}),u.jsx("span",{children:"Replay Voice"})]}),u.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:new Date(O.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})]},O.id)),C&&u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-7 h-7 rounded-xl bg-[#B4A06E]/20 border border-[#B4A06E]/40 text-[#B4A06E] flex items-center justify-center shrink-0",children:u.jsx(qo,{className:"w-4 h-4"})}),u.jsxs("div",{className:"px-4 py-3 rounded-2xl bg-[#151722] border border-white/[0.08] flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#B4A06E] animate-bounce",style:{animationDelay:"0ms"}}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#B4A06E] animate-bounce",style:{animationDelay:"150ms"}}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#B4A06E] animate-bounce",style:{animationDelay:"300ms"}})]})]}),u.jsx("div",{ref:B})]}),u.jsxs("div",{className:"px-4 py-2 bg-[#0e1017] border-t border-white/[0.06] overflow-x-auto flex items-center gap-2 no-scrollbar",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-[#B4A06E] shrink-0",children:"Suggested:"}),Ae.map((O,te)=>u.jsx("button",{onClick:()=>j(O),className:"px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#B4A06E]/15 border border-white/10 hover:border-[#B4A06E]/40 text-xs font-mono text-neutral-300 hover:text-[#B4A06E] whitespace-nowrap transition-colors",children:O},te))]}),u.jsxs("div",{className:"p-3 sm:p-4 bg-[#11131a] border-t border-white/[0.08]",children:[u.jsxs("form",{onSubmit:O=>{O.preventDefault(),j()},className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:Z,className:`p-3 rounded-xl border transition-all flex items-center justify-center shrink-0 ${c?"bg-red-500/20 border-red-500 text-red-400 animate-pulse":"bg-white/[0.04] border-white/10 text-[#B4A06E] hover:border-[#B4A06E]"}`,title:c?"Listening... Click to stop":"Speak your question (Microphone)",children:c?u.jsx(mm,{className:"w-4 h-4"}):u.jsx(du,{className:"w-4 h-4"})}),u.jsx("input",{ref:W,type:"text",value:s,onChange:O=>a(O.target.value),placeholder:c?"Listening to your voice...":o==="ur-PK"?"اکرام کے کام یا مہارتوں کے بارے میں پوچھیں...":"Ask Ikram's AI Twin anything...",className:"flex-1 bg-[#080808] border border-white/10 px-4 py-3 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B4A06E] font-sans"}),u.jsx("button",{type:"submit",disabled:!s.trim(),className:"p-3 rounded-xl bg-[#B4A06E] hover:bg-white text-black font-semibold transition-colors disabled:opacity-30 shrink-0",title:"Send Message",children:u.jsx(gx,{className:"w-4 h-4"})})]}),c&&u.jsxs("div",{className:"mt-2 text-center text-xs font-mono text-red-400 animate-pulse flex items-center justify-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),u.jsx("span",{children:"Listening to your voice... Speak now"})]})]})]})]})}),u.jsx(_x,{isOpen:P,onClose:()=>z(!1)})]})}function EA({project:t,onClose:e}){if(_e.useEffect(()=>{const r=s=>{s.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e]),!t)return null;const n={"mantis-ai-engine":{bottleneck:"Repetitive LLM prompt evaluations and heavy payload transformations caused CPU spikes, token inflation, and unacceptable 2.4s latency under high concurrency.",architecture:"Engineered an asynchronous caching proxy in Node.js and Express. Implemented SHA-256 prompt hashing in Redis to serve identical queries in <35ms, while offloading long-running inference jobs to serverless AWS Lambda workers via Redis BullMQ queues.",metrics:[{label:"Latency Reduction",value:"98.5%",detail:"From 2,400ms down to 35ms"},{label:"Cache Hit Rate",value:"84.2%",detail:"Redis in-memory tier"},{label:"Availability",value:"99.95%",detail:"Zero dropped async jobs"}],diagram:[{stage:"Client Ingestion",tech:"React / REST API",desc:"OpenAPI verified bearer tokens"},{stage:"In-Memory Cache",tech:"Redis Hash Store",desc:"Sub-5ms prompt cache hit"},{stage:"Async Queue",tech:"BullMQ / Node.js",desc:"Worker thread concurrency"},{stage:"Serverless Execution",tech:"AWS Lambda & LLM",desc:"Isolated microservice worker"}]},"cuboid-fullstack-suite":{bottleneck:"Enterprise clients required strict ACID consistency for financial audit trails, while simultaneously logging high-frequency unstructured telemetry without database lock contention.",architecture:"Architected a dual-database persistence tier: PostgreSQL handles relational financial records with strict foreign keys and transactional locks, while MongoDB ingests polymorphic activity logs. Built modular React and Angular modules authenticated via cryptographic JWTs and RBAC.",metrics:[{label:"Query Speed",value:"<45ms",detail:"Optimized indexed joins"},{label:"ACID Consistency",value:"100%",detail:"Zero orphaned transactions"},{label:"Modular Views",value:"50+",detail:"React & Angular components"}],diagram:[{stage:"Client Interface",tech:"React & Angular",desc:"Role-based component routing"},{stage:"Auth Gateway",tech:"JWT / RBAC Tier",desc:"Zero-trust session validation"},{stage:"Relational Engine",tech:"PostgreSQL DB",desc:"ACID transactional schemas"},{stage:"Document Engine",tech:"MongoDB Cluster",desc:"Polymorphic event telemetry"}]},"aws-redis-pipeline":{bottleneck:"Direct multipart file uploads to backend application servers exhausted server memory and blocked the event loop, causing heavy degradation during peak upload hours.",architecture:"Restructured the file upload pipeline to use AWS S3 pre-signed direct URLs, offloading file bandwidth entirely from backend servers. Integrated Redis pub/sub queues to trigger downstream asynchronous AWS Lambda image and document processing workers.",metrics:[{label:"DB Read Load",value:"-65%",detail:"Absorbed by Redis memory"},{label:"Server Memory",value:"-40%",detail:"Direct S3 presigned transfers"},{label:"Queue Throughput",value:"1,200/s",detail:"Redis pub/sub events"}],diagram:[{stage:"Presigned Dispatch",tech:"AWS S3 Direct",desc:"Zero server memory overhead"},{stage:"Event Emission",tech:"S3 Event Bridge",desc:"Triggers backend listener"},{stage:"Fast Queue",tech:"Redis Pub/Sub",desc:"Real-time task distribution"},{stage:"Worker Execution",tech:"AWS Lambda",desc:"Serverless processing"}]},"ieee-project-manager-suite":{bottleneck:"Managing 500+ simultaneous university event registrations and committee task handoffs caused severe database connection pooling bottlenecks and delayed notifications.",architecture:"Built a centralized MERN management dashboard with indexed MongoDB collections, Node.js connection pooling, and automated transactional emails with rate-limiting queues. Spearheaded project roadmap as Project Manager at IEEE COMSATS.",metrics:[{label:"Registrations",value:"500+",detail:"Zero server degradation"},{label:"Task Delivery",value:"100%",detail:"Milestone completion rate"},{label:"Uptime",value:"99.9%",detail:"Campus event duration"}],diagram:[{stage:"Public Portal",tech:"React.js Frontend",desc:"Responsive attendee registration"},{stage:"API Server",tech:"Node & Express",desc:"Connection pooling & validation"},{stage:"Document Store",tech:"MongoDB Indexing",desc:"Rapid attendee profile lookups"},{stage:"Dispatch Engine",tech:"Transactional Queue",desc:"Rate-limited event notifications"}]}},i=n[t.id]||n["mantis-ai-engine"];return u.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300",onClick:r=>{r.target===r.currentTarget&&e()},children:u.jsxs("div",{className:"relative w-full max-w-2xl h-full bg-[#0a0c12] border-l border-white/15 flex flex-col shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300",children:[u.jsxs("div",{className:"sticky top-0 z-30 px-6 py-5 bg-[#0a0c12]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#B4A06E]/15 text-[#B4A06E] border border-[#B4A06E]/30",children:t.category}),u.jsx("span",{className:"text-xs font-mono text-neutral-400",children:t.badge})]}),u.jsx("button",{onClick:e,className:"p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/5",title:"Close Drawer (Esc)",children:u.jsx(Jl,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"p-6 sm:p-8 space-y-8 flex-1",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-1",children:"01 // DEEP DIVE ARCHITECTURE"}),u.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-tight text-white mb-4",children:t.title}),u.jsx("p",{className:"text-sm text-neutral-300 font-light leading-relaxed",children:t.longDescription||t.description})]}),u.jsxs("div",{className:"border border-white/10 bg-[#0e1017] p-4 rounded-xl",children:[u.jsxs("span",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-3 flex items-center gap-2",children:[u.jsx(Kb,{className:"w-3.5 h-3.5 text-[#B4A06E]"}),"BENCHMARKED PRODUCTION METRICS"]}),u.jsx("div",{className:"grid grid-cols-3 gap-3 text-center",children:i.metrics.map((r,s)=>u.jsxs("div",{className:"p-3 bg-white/[0.02] border border-white/5 rounded-lg",children:[u.jsx("span",{className:"text-xs font-mono text-neutral-500 block mb-0.5",children:r.label}),u.jsx("span",{className:"text-xl sm:text-2xl font-mono text-[#B4A06E] font-medium block",children:r.value}),u.jsx("span",{className:"text-[10px] text-neutral-400 block mt-0.5",children:r.detail})]},s))})]}),u.jsxs("div",{className:"border-t border-white/10 pt-6",children:[u.jsxs("span",{className:"text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-2 flex items-center gap-2",children:[u.jsx(xd,{className:"w-3.5 h-3.5"}),"02 // THE TECHNICAL BOTTLENECK"]}),u.jsx("p",{className:"text-sm text-neutral-300 font-light leading-relaxed bg-[#12141d] p-4 border border-white/5 rounded-lg",children:i.bottleneck})]}),u.jsxs("div",{className:"border-t border-white/10 pt-6",children:[u.jsxs("span",{className:"text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-2 flex items-center gap-2",children:[u.jsx(xx,{className:"w-3.5 h-3.5"}),"03 // ARCHITECTURAL SOLUTION"]}),u.jsx("p",{className:"text-sm text-neutral-300 font-light leading-relaxed mb-4",children:i.architecture}),u.jsxs("div",{className:"space-y-2 pt-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-500 uppercase tracking-wider block",children:"Component Pipeline:"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:i.diagram.map((r,s)=>u.jsxs("div",{className:"p-3 bg-[#0e1017] border border-white/10 rounded-lg",children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-xs font-mono text-white font-medium",children:r.stage}),u.jsxs("span",{className:"text-[10px] font-mono text-[#B4A06E]",children:["#",s+1]})]}),u.jsx("span",{className:"text-[11px] font-mono text-neutral-400 block mb-1",children:r.tech}),u.jsx("span",{className:"text-[10px] text-neutral-500 font-light block",children:r.desc})]},s))})]})]}),t.highlights&&u.jsxs("div",{className:"border-t border-white/10 pt-6",children:[u.jsxs("span",{className:"text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-3 flex items-center gap-2",children:[u.jsx(eA,{className:"w-3.5 h-3.5"}),"04 // PRODUCTION DELIVERABLES"]}),u.jsx("ul",{className:"space-y-2 text-xs text-neutral-300 font-light",children:t.highlights.map((r,s)=>u.jsxs("li",{className:"flex items-start gap-2.5 p-2 rounded bg-white/[0.02]",children:[u.jsx("span",{className:"text-[#B4A06E] font-mono shrink-0",children:"▹"}),u.jsx("span",{children:r})]},s))})]}),u.jsxs("div",{className:"border-t border-white/10 pt-6",children:[u.jsxs("span",{className:"text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-3 flex items-center gap-2",children:[u.jsx(px,{className:"w-3.5 h-3.5"}),"05 // SYSTEM TECHNOLOGIES"]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(r=>u.jsx("span",{className:"px-3 py-1 bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 rounded",children:r},r))})]})]}),u.jsxs("div",{className:"sticky bottom-0 p-6 bg-[#0a0c12]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"https://github.com/ikram-amjad",target:"_blank",rel:"noopener noreferrer",className:"flex-1 px-4 py-3 bg-[#B4A06E] hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors",children:[u.jsx(rA,{className:"w-4 h-4"}),u.jsx("span",{children:"GitHub Repository ↗"})]}),u.jsxs("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 px-4 py-3 bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors",children:[u.jsx(nA,{className:"w-4 h-4"}),u.jsx("span",{children:"Verified Credentials ↗"})]})]})]})})}function MA(){const[t,e]=_e.useState("topology"),[n,i]=_e.useState("cache_hit"),[r,s]=_e.useState(!1),[a,o]=_e.useState(null),[l,c]=_e.useState(null),[h,p]=_e.useState(null),[f,m]=_e.useState(!0),[_,S]=_e.useState(!1),[g,d]=_e.useState(null),[v,x]=_e.useState("flash_sale"),[y,C]=_e.useState({redisCache:!0,dbPool:50,rateLimiter:"strict",computeWorker:"lambda"}),[b,A]=_e.useState(!1),[R,M]=_e.useState(null),[E,P]=_e.useState({latency:"1.8ms",p99:"3.2ms",throughput:"4,850 req/s",cacheHitRate:"94.2%",status:"SYSTEM HEALTHY"}),[z,B]=_e.useState([{time:"INIT",text:"Telemetry initialized. Ready for topology packet tracing & architect game.",type:"info"}]),W=(j=520,Z="sine",de=.08,Ae=.03)=>{if(f)try{const X=window.AudioContext||window.webkitAudioContext;if(!X)return;const O=new X,te=O.createOscillator(),re=O.createGain();te.type=Z,te.frequency.setValueAtTime(j,O.currentTime),re.gain.setValueAtTime(Ae,O.currentTime),re.gain.exponentialRampToValueAtTime(1e-4,O.currentTime+de),te.connect(re),re.connect(O.destination),te.start(),te.stop(O.currentTime+de)}catch{}},$=[{id:"client",label:"React Client",sublabel:"SPA Frontend",type:"Client Runtime",icon:hm,color:"#38BDF8",role:"Dispatches signed requests, handles optimistic UI state updates & render caching.",specs:{runtime:"React 18 + Vite",protocol:"HTTP/2 • TLS 1.3",stateEngine:"Zustand / TanStack Query",cacheStrategy:"Stale-While-Revalidate"},codeSnippet:`// React Query Client with optimistic cache updates
const { data, isLoading } = useQuery({
  queryKey: ['products', productId],
  queryFn: () => api.get(\`/api/v1/products/\${productId}\`),
  staleTime: 1000 * 60 * 5, // 5 min client cache
});`},{id:"gateway",label:"API Gateway",sublabel:"Edge Proxy & WAF",type:"Edge Security",icon:xd,color:"#F59E0B",role:"Enforces rate limits, validates cryptographic JWT bearer tokens & sanitizes payloads.",specs:{layer:"Reverse Proxy & Edge WAF",rateLimit:"1,000 req/min per IP",crypto:"RS256 Signature Verification",compression:"Brotli / Gzip"},codeSnippet:`// Edge Rate Limiter (Token Bucket Algorithm)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1000, // 1000 req per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "429 Too Many Requests" }
});`},{id:"node",label:"Node.js Core",sublabel:"Express Microservice",type:"Compute Engine",icon:xx,color:"#10B981",role:"Non-blocking event loop orchestrating business logic, cache lookups & worker queues.",specs:{runtime:"Node.js v22.12 LTS",framework:"Express.js + Async Middleware",concurrency:"Single-thread Non-blocking Loop",clustering:"PM2 4-core worker cluster"},codeSnippet:`// Controller with Redis Cache-Aside & DB Fallback
async function getProduct(req, res) {
  const { id } = req.params;
  const cached = await redis.get(\`prod:\${id}\`);
  if (cached) return res.json(JSON.parse(cached));
  
  const product = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  await redis.setex(\`prod:\${id}\`, 3600, JSON.stringify(product.rows[0]));
  return res.json(product.rows[0]);
}`},{id:"redis",label:"Redis Cache",sublabel:"In-Memory Tier",type:"Sub-Millisecond Tier",icon:px,color:"#EF4444",role:"In-memory key-value store and BullMQ job queues preventing database overload.",specs:{version:"Redis v7.2 Enterprise",dataStructures:"Hashes, Sets, BullMQ Queues",evictionPolicy:"volatile-lru",persistence:"AOF + RDB Snapshots"},codeSnippet:`// Redis BullMQ Async Job Producer (WebMantis)
import { Queue } from 'bullmq';
const aiQueue = new Queue('ai-eval-queue', { connection: redisConfig });

await aiQueue.add('evaluate-prompt', {
  templateId: 'arch_v1',
  timestamp: Date.now()
}, { removeOnComplete: true, attempts: 3 });`},{id:"db",label:"PostgreSQL DB",sublabel:"Relational ACID Engine",type:"Persistent Storage",icon:fm,color:"#6366F1",role:"Source of truth for relational transactions, foreign keys, row locks and audit logs.",specs:{engine:"PostgreSQL 16 Engine",isolation:"READ COMMITTED",indexing:"B-Tree & GIN (JSONB)",pooler:"PgBouncer (Max 50 conns)"},codeSnippet:`// Strict ACID Multi-Table Transaction (Cuboid Platform)
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('INSERT INTO orders (user_id, total) VALUES ($1, $2)', [uid, sum]);
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [sum, uid]);
  await client.query('COMMIT');
} catch (e) {
  await client.query('ROLLBACK');
  throw e;
} finally { client.release(); }`},{id:"lambda",label:"AWS Lambda",sublabel:"Serverless Worker",type:"Async AI Worker",icon:hm,color:"#EC4899",role:"Serverless ephemeral workers executing heavy LLM prompt evaluation and background jobs.",specs:{platform:"AWS Lambda + Node.js 20",memory:"512 MB ARM64 Graviton3",coldStartTime:"<45ms",queueConsumer:"Redis BullMQ Dispatcher"},codeSnippet:`// AWS Lambda Serverless Worker Function
export const handler = async (event) => {
  const { prompt, model } = JSON.parse(event.body);
  const result = await evaluatePromptWithSafeguards(prompt);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "success", tokens: result.tokenCount })
  };
};`}],q=[{id:"cache_hit",badge:"SPEED TEST",title:"01 // REDIS CACHE HIT",desc:"Sub-2ms in-memory cache hit bypassing primary database disk reads.",expectedLatency:"1.8ms",expectedThroughput:"4,850 req/s",path:[{node:"client",edge:"edge-client-gw",msg:"Client dispatches GET /api/v1/products/8941"},{node:"gateway",edge:"edge-gw-node",msg:"Edge Gateway validates JWT bearer token in 0.4ms"},{node:"node",edge:"edge-node-redis",msg:'Node.js Express queries Redis key "cache:prod:8941"'},{node:"redis",edge:"edge-redis-node",msg:"⚡ CACHE HIT: Payload returned from memory in 0.5ms"},{node:"node",edge:"edge-node-client",msg:"Node.js writes HTTP/2 200 OK stream to client"},{node:"client",edge:null,msg:"✓ Complete roundtrip delivered to client in 1.8ms."}],spans:[{name:"GET /api/v1/products/8941",service:"Client",duration:"1.8ms",width:"100%",offset:"0%",color:"#38BDF8",status:"200"},{name:"Gateway: JWT Auth & Rate Limit",service:"API Gateway",duration:"0.4ms",width:"22%",offset:"10%",color:"#F59E0B",status:"OK"},{name:"Express: Controller Execution",service:"Node.js",duration:"0.3ms",width:"16%",offset:"32%",color:"#10B981",status:"OK"},{name:"Redis: GET cache:prod:8941",service:"Redis Cache",duration:"0.5ms",width:"28%",offset:"48%",color:"#EF4444",status:"HIT"},{name:"Response Delivery & Decompression",service:"Client",duration:"0.6ms",width:"33%",offset:"67%",color:"#38BDF8",status:"OK"}]},{id:"cache_miss",badge:"CACHE MISS & HYDRATION",title:"02 // CACHE MISS ➔ DB FALLBACK",desc:"Cache missed. Queries PostgreSQL disk with B-Tree index, then hydrates Redis for subsequent reads.",expectedLatency:"24.6ms",expectedThroughput:"920 req/s",path:[{node:"client",edge:"edge-client-gw",msg:"Client dispatches GET /api/v1/analytics/report"},{node:"gateway",edge:"edge-gw-node",msg:"Gateway passes through to Node.js backend"},{node:"node",edge:"edge-node-redis",msg:'Node.js checks Redis key "report:2026"'},{node:"redis",edge:"edge-node-db",msg:"⚠️ CACHE MISS: Key not found in RAM. Invoking DB fallback."},{node:"db",edge:"edge-db-node",msg:"PostgreSQL executes indexed B-tree scan (18.2ms)"},{node:"node",edge:"edge-node-redis",msg:"Node.js writes-through fetched payload to Redis (1hr TTL)"},{node:"client",edge:null,msg:"✓ 200 OK: Data delivered & cache warmed (24.6ms)."}],spans:[{name:"GET /api/v1/analytics/report",service:"Client",duration:"24.6ms",width:"100%",offset:"0%",color:"#38BDF8",status:"200"},{name:"Gateway: Reverse Proxy Auth",service:"API Gateway",duration:"0.6ms",width:"8%",offset:"3%",color:"#F59E0B",status:"OK"},{name:"Redis: GET report:2026",service:"Redis Cache",duration:"0.6ms",width:"8%",offset:"11%",color:"#EF4444",status:"MISS"},{name:"PostgreSQL: B-Tree Index Scan",service:"PostgreSQL",duration:"18.2ms",width:"74%",offset:"19%",color:"#6366F1",status:"OK"},{name:"Redis: SETEX report:2026 3600",service:"Redis Cache",duration:"1.2ms",width:"10%",offset:"85%",color:"#EF4444",status:"OK"}]},{id:"db_write",badge:"ACID TRANSACTION",title:"03 // POSTGRESQL ACID TRANSACTION",desc:"Executes BEGIN...COMMIT multi-table transaction with strict locks, followed by cache invalidation.",expectedLatency:"38.4ms",expectedThroughput:"680 req/s",path:[{node:"client",edge:"edge-client-gw",msg:"Client dispatches POST /api/v1/orders"},{node:"gateway",edge:"edge-gw-node",msg:"Payload schema validated against OpenAPI contract"},{node:"node",edge:"edge-node-db",msg:"Node.js begins BEGIN PostgreSQL transaction"},{node:"db",edge:"edge-db-node",msg:"Rows inserted with foreign key checks & committed"},{node:"node",edge:"edge-node-redis",msg:'Redis invalidates stale cache key "order:user:12"'},{node:"client",edge:null,msg:"✓ 201 Created: Transaction committed in 38.4ms."}],spans:[{name:"POST /api/v1/orders",service:"Client",duration:"38.4ms",width:"100%",offset:"0%",color:"#38BDF8",status:"201"},{name:"Gateway: Schema Validation",service:"API Gateway",duration:"0.8ms",width:"6%",offset:"2%",color:"#F59E0B",status:"OK"},{name:"Node.js: BEGIN Transaction",service:"Node.js",duration:"1.1ms",width:"8%",offset:"8%",color:"#10B981",status:"OK"},{name:"PostgreSQL: INSERT + COMMIT Locks",service:"PostgreSQL",duration:"32.4ms",width:"78%",offset:"16%",color:"#6366F1",status:"COMMIT"},{name:"Redis: DEL order:user:12 (Invalidate)",service:"Redis Cache",duration:"0.9ms",width:"7%",offset:"90%",color:"#EF4444",status:"OK"}]},{id:"ai_queue",badge:"ASYNC WORKER",title:"04 // ASYNC AI PROMPT PIPELINE",desc:"Offloads heavy LLM token inference via BullMQ queues to AWS Lambda serverless workers.",expectedLatency:"14.2ms (Queued)",expectedThroughput:"2,600 req/s",path:[{node:"client",edge:"edge-client-gw",msg:"Client dispatches POST /api/v1/ai/prompt-eval"},{node:"gateway",edge:"edge-gw-node",msg:"Gateway authorizes job dispatch"},{node:"node",edge:"edge-node-redis",msg:"Node.js pushes job to Redis BullMQ queue"},{node:"redis",edge:"edge-node-lambda",msg:"Queue event triggers AWS Lambda serverless execution"},{node:"lambda",edge:"edge-lambda-node",msg:"Lambda completes LLM token processing in 140ms"},{node:"client",edge:null,msg:"✓ 202 Accepted: Asynchronous job pipeline completed (14.2ms)."}],spans:[{name:"POST /api/v1/ai/prompt-eval",service:"Client",duration:"14.2ms",width:"100%",offset:"0%",color:"#38BDF8",status:"202"},{name:"Gateway: Authorize Job",service:"API Gateway",duration:"0.5ms",width:"12%",offset:"4%",color:"#F59E0B",status:"OK"},{name:"BullMQ: Push Job #4928 to Redis",service:"Redis Cache",duration:"1.4ms",width:"22%",offset:"16%",color:"#EF4444",status:"ENQUEUED"},{name:"Client ACK: Job Accepted for Processing",service:"Client",duration:"1.1ms",width:"18%",offset:"38%",color:"#38BDF8",status:"202"},{name:"AWS Lambda: Ephemeral Worker Execution",service:"AWS Lambda",duration:"140ms (Async)",width:"60%",offset:"56%",color:"#EC4899",status:"ASYNC"}]}],Q=q.find(j=>j.id===n)||q[0],k=()=>{if(r||b)return;s(!0),B([]),o(null),c(null);const j=Q.path;let Z=0;W(600,"triangle",.1,.05);const de=setInterval(()=>{if(Z<j.length){const Ae=j[Z];o(Ae.node),c(Ae.edge),W(440+Z*95,"sine",.07,.04),B(X=>[...X,{time:new Date().toLocaleTimeString(),text:Ae.msg,type:Ae.msg.includes("HIT")?"success":Ae.msg.includes("MISS")?"warning":"info"}]),Z++}else{clearInterval(de),s(!1),c(null),W(880,"sine",.15,.05);const Ae=_?(parseFloat(Q.expectedLatency)+120).toFixed(1)+"ms":Q.expectedLatency;P({latency:Ae,p99:(parseFloat(Ae)*1.5).toFixed(1)+"ms",throughput:Q.expectedThroughput,cacheHitRate:n==="cache_miss"?"65.2%":"94.2%",status:"TRANSMISSION COMPLETE"})}},_?900:560)},Y=()=>{if(b)return;A(!0),M(null),B([{time:new Date().toLocaleTimeString(),text:"🚨 SURGE TRIGGERED: Injecting 50,000 req/s into your architecture...",type:"warning"}]),W(380,"sawtooth",.2,.04);let j=0;const Z=setInterval(()=>{j+=20,W(400+j*8,"sine",.06,.03),j>=100&&(clearInterval(Z),A(!1),v==="flash_sale"?y.redisCache?y.rateLimiter==="off"?(W(300,"square",.3,.05),M({passed:!1,uptime:"74.5%",latency:"820ms",status:"EDGE EXHAUSTION // DDOS DEGRADED",score:"68 / 100",diagnosis:"Without edge rate limiting, rogue scrapers saturated network bandwidth before requests reached the application layer.",recommendation:"Enable Strict Token Bucket Rate Limiting at the API Gateway."})):(W(880,"sine",.3,.07),M({passed:!0,uptime:"99.99%",latency:"3.4ms",status:"🏆 SENIOR ARCHITECT RANK // ZERO DOWNTIME ACHIEVED",score:"98 / 100",diagnosis:"Redis absorbed 94.2% of read queries in memory (<1ms). The API Gateway throttled malicious spikes, while PostgreSQL smoothly handled transactional order commits.",recommendation:"Production-ready architecture: Verified for tier-1 enterprise scale."}),B(de=>[...de,{time:new Date().toLocaleTimeString(),text:"✓ 99.99% UPTIME ACHIEVED: 50,000 req/s absorbed with zero dropped packets.",type:"success"}])):(W(220,"sawtooth",.4,.08),M({passed:!1,uptime:"38.2%",latency:"4,850ms",status:"DATABASE LOCK CONTENTION // 504 GATEWAY TIMEOUT",score:"42 / 100",diagnosis:"Database CPU reached 100% under 50,000 un-cached read requests. Disabling Redis forced all traffic to PostgreSQL disk seek, exhausting connection pools.",recommendation:"Enable Redis in-memory cache to absorb 92%+ of repetitive read operations."}),B(de=>[...de,{time:new Date().toLocaleTimeString(),text:"❌ OUTAGE: PostgreSQL connection pool exhausted (504 Gateway Timeout).",type:"warning"}])):v==="db_exhaust"?y.dbPool<50?(W(220,"sawtooth",.3,.06),M({passed:!1,uptime:"52.1%",latency:"2,400ms",status:"POOL STARVATION // CONNECTION TIMEOUT",score:"54 / 100",diagnosis:"A 15-connection pool was too small for concurrent analytical queries, causing incoming requests to queue in memory until HTTP sockets timed out.",recommendation:"Increase connection pool to 50+ with PgBouncer transaction-mode pooling."})):(W(880,"sine",.3,.07),M({passed:!0,uptime:"99.95%",latency:"14.8ms",status:"🏆 SENIOR ARCHITECT RANK // ACID CONSISTENT",score:"96 / 100",diagnosis:"PgBouncer connection pooler gracefully queued and executed all concurrent transactional queries without lock contention.",recommendation:"Optimal database pool configuration."})):v==="ai_burst"&&(y.computeWorker==="direct"?(W(220,"sawtooth",.3,.06),M({passed:!1,uptime:"45.0%",latency:"3,800ms",status:"EVENT LOOP BLOCK // CPU SATURATED",score:"48 / 100",diagnosis:"Processing heavy LLM token inference synchronously on the main Node.js web server completely blocked the event loop for all incoming users.",recommendation:"Offload long-running AI inference to asynchronous AWS Lambda workers via Redis BullMQ queues."})):(W(880,"sine",.3,.07),M({passed:!0,uptime:"99.99%",latency:"8.2ms (Queue Ack)",status:"🏆 SENIOR ARCHITECT RANK // SERVERLESS OFFLOAD SUCCESS",score:"99 / 100",diagnosis:"BullMQ pushed 10,000 prompt jobs into Redis in 8ms, while ephemeral AWS Lambda workers scaled horizontally to process inference in parallel.",recommendation:"Elite event-driven serverless design."}))))},150)};return _e.useEffect(()=>{B([{time:new Date().toLocaleTimeString(),text:`Loaded scenario: ${Q.title}. Press "RUN PACKET TRACE" to observe.`,type:"info"}]),P({latency:Q.expectedLatency,p99:(parseFloat(Q.expectedLatency)*1.5).toFixed(1)+"ms",throughput:Q.expectedThroughput,cacheHitRate:"94.2%",status:"STANDBY"}),o(null),c(null)},[n]),u.jsx("section",{id:"architecture",className:"relative z-10 px-6 sm:px-10 md:px-14 py-28 border-t border-white/10 bg-[#07080b]",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-10 pb-6 border-b border-white/[0.08]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#B4A06E]/20 text-[#B4A06E] border border-[#B4A06E]/40",children:"02 // SYSTEM DESIGN LAB"}),u.jsx("span",{className:"text-xs font-mono text-neutral-400",children:"Interactive Topology & Architect Sandbox"})]}),u.jsx("h2",{className:"text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white",children:"SYSTEM ARCHITECTURE LAB"})]}),u.jsxs("div",{className:"mt-4 lg:mt-0 flex flex-wrap items-center gap-3",children:[u.jsxs("div",{className:"flex items-center bg-[#0d0f16] p-1 rounded-xl border border-white/10 text-xs font-mono",children:[u.jsxs("button",{onClick:()=>e("topology"),className:`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${t==="topology"?"bg-[#B4A06E] text-black font-semibold shadow-md":"text-neutral-400 hover:text-white"}`,children:[u.jsx(mx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"TOPOLOGY & TRACING"})]}),u.jsxs("button",{onClick:()=>e("game"),className:`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${t==="game"?"bg-[#B4A06E] text-black font-semibold shadow-md":"text-neutral-400 hover:text-white"}`,children:[u.jsx(pm,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"ARCHITECT GAME 🎮"})]})]}),u.jsxs("button",{onClick:()=>m(!f),className:`px-3 py-2 rounded-xl text-xs font-mono border transition-all flex items-center gap-1.5 ${f?"bg-[#B4A06E]/20 border-[#B4A06E] text-[#B4A06E]":"bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white"}`,title:f?"Sound enabled":"Sound muted",children:[f?u.jsx(gd,{className:"w-3.5 h-3.5"}):u.jsx(vx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"SFX: ON":"SFX: OFF"})]})]})]}),t==="topology"&&u.jsxs("div",{className:"space-y-8 animate-in fade-in duration-300",children:[u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5",children:q.map(j=>{const Z=n===j.id;return u.jsxs("button",{onClick:()=>{r||i(j.id)},disabled:r,className:`p-5 text-left border rounded-2xl transition-all relative overflow-hidden group ${Z?"bg-[#121522] border-[#B4A06E] shadow-xl shadow-[#B4A06E]/10":"bg-[#0a0c12] border-white/10 hover:border-white/30 text-neutral-400"} disabled:opacity-50`,children:[Z&&u.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-[#B4A06E]"}),u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${Z?"bg-[#B4A06E]/20 text-[#B4A06E]":"bg-white/5 text-neutral-400"}`,children:j.badge}),u.jsxs("span",{className:"text-xs font-mono text-neutral-500",children:["~",j.expectedLatency]})]}),u.jsx("h3",{className:"text-sm font-mono font-medium text-white mb-1 group-hover:text-[#B4A06E] transition-colors",children:j.title}),u.jsx("p",{className:"text-xs text-neutral-300 font-light leading-relaxed line-clamp-2",children:j.desc})]},j.id)})}),u.jsxs("div",{className:"bg-[#090b10] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[u.jsx("button",{onClick:k,disabled:r,className:"px-6 py-3 bg-[#B4A06E] hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#B4A06E]/20 active:scale-95 disabled:opacity-50 rounded-xl",children:r?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin"}),u.jsx("span",{children:"TRACING PACKET..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(lA,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"RUN PACKET TRACE"})]})}),u.jsxs("button",{onClick:()=>S(!_),className:`px-4 py-3 rounded-xl text-xs font-mono border transition-all flex items-center gap-1.5 ${_?"bg-amber-500/20 border-amber-500 text-amber-400":"bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white"}`,title:"Simulates network jitter",children:[u.jsx(pA,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:_?"CHAOS: ACTIVE (+120ms)":"INJECT JITTER"})]}),u.jsx("button",{onClick:()=>{B([{time:new Date().toLocaleTimeString(),text:"Pipeline reset.",type:"info"}]),o(null),c(null)},disabled:r,className:"p-3 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors rounded-xl",title:"Reset simulation state",children:u.jsx(dA,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"flex items-center gap-6 font-mono text-xs",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-neutral-500 block text-[10px]",children:"ROUNDTRIP"}),u.jsx("span",{className:"text-[#B4A06E] font-bold text-sm",children:E.latency})]}),u.jsxs("div",{className:"hidden sm:block",children:[u.jsx("span",{className:"text-neutral-500 block text-[10px]",children:"P99 LATENCY"}),u.jsx("span",{className:"text-white font-semibold",children:E.p99})]}),u.jsxs("div",{className:"hidden md:block",children:[u.jsx("span",{className:"text-neutral-500 block text-[10px]",children:"THROUGHPUT"}),u.jsx("span",{className:"text-neutral-300 font-semibold",children:E.throughput})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-neutral-500 block text-[10px]",children:"CACHE HIT"}),u.jsx("span",{className:"text-emerald-400 font-bold",children:E.cacheHitRate})]})]})]}),u.jsx("div",{className:"relative",children:u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5",children:$.map(j=>{const Z=j.icon,de=a===j.id,Ae=(h==null?void 0:h.id)===j.id;return u.jsxs("div",{onClick:()=>{p(j),W(700,"triangle",.05,.03)},className:`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-between text-center relative select-none min-h-[195px] ${de?"bg-[#B4A06E]/20 border-[#B4A06E] scale-105 shadow-2xl shadow-[#B4A06E]/20":Ae?"bg-[#151928] border-white/60 shadow-xl":"bg-[#0d0f16] border-white/10 hover:border-[#B4A06E]/50 hover:bg-[#11131c]"}`,children:[de&&u.jsxs("span",{className:"absolute top-2.5 right-2.5 flex h-2.5 w-2.5",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4A06E] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B4A06E]"})]}),u.jsx("div",{className:`p-3.5 rounded-2xl mb-3 transition-colors ${de?"bg-[#B4A06E] text-black shadow-lg shadow-[#B4A06E]/40":"bg-white/[0.04] text-neutral-300"}`,children:u.jsx(Z,{className:"w-6 h-6"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono text-white font-medium block",children:j.label}),u.jsx("span",{className:"text-[10px] font-mono text-neutral-400 block mt-0.5",children:j.sublabel})]}),u.jsxs("div",{className:"mt-3 w-full pt-2 border-t border-white/5 flex items-center justify-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),u.jsx("span",{className:"text-[9px] font-mono text-neutral-400 uppercase tracking-wider",children:de?"Processing":"Click to Inspect"})]})]},j.id)})})}),u.jsxs("div",{className:"bg-[#06070a] border border-white/10 rounded-2xl p-5 space-y-4 font-mono text-xs",children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/5 text-neutral-400 text-[11px]",children:[u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx(Jb,{className:"w-3.5 h-3.5 text-[#B4A06E]"}),u.jsx("span",{children:"DISTRIBUTED REQUEST TRACE // WATERFALL SPANS"})]}),u.jsx("span",{className:"text-neutral-500 text-[10px]",children:"OpenTelemetry Trace ID: 4bf92f3577b34da6"})]}),u.jsx("div",{className:"space-y-2.5 pt-1",children:Q.spans.map((j,Z)=>u.jsxs("div",{className:"space-y-1",children:[u.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[u.jsx("span",{className:"text-neutral-300 font-medium truncate max-w-xs sm:max-w-md",children:j.name}),u.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 font-mono",children:j.service}),u.jsx("span",{className:"text-[#B4A06E] font-semibold",children:j.duration})]})]}),u.jsx("div",{className:"w-full bg-white/[0.04] h-2.5 rounded-full overflow-hidden relative",children:u.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:j.width,marginLeft:j.offset,backgroundColor:j.color}})})]},Z))})]}),h&&u.jsxs("div",{className:"p-6 bg-[#0f121b] border border-[#B4A06E]/40 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 relative",children:[u.jsx("button",{onClick:()=>p(null),className:"absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors",title:"Close Inspector",children:u.jsx(Jl,{className:"w-4 h-4"})}),u.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[u.jsx("div",{className:"p-3 rounded-xl bg-[#B4A06E]/20 text-[#B4A06E] border border-[#B4A06E]/40 shrink-0",children:u.jsx(h.icon,{className:"w-6 h-6"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h4",{className:"text-lg font-mono font-medium text-white",children:h.label}),u.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-neutral-300",children:h.type})]}),u.jsx("p",{className:"text-xs text-neutral-300 font-light mt-1 max-w-2xl leading-relaxed",children:h.role})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 mb-4 border-t border-white/10 text-xs font-mono",children:Object.entries(h.specs).map(([j,Z])=>u.jsxs("div",{className:"p-3 bg-[#08090d] border border-white/5 rounded-xl",children:[u.jsx("span",{className:"text-neutral-500 block text-[10px] uppercase",children:j}),u.jsx("span",{className:"text-neutral-200 font-medium",children:Z})]},j))}),u.jsxs("div",{className:"pt-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-[#B4A06E] uppercase tracking-wider block mb-2",children:"Production Engineering Snippet:"}),u.jsx("pre",{className:"p-3.5 bg-[#06070a] border border-white/10 rounded-xl text-neutral-300 text-[11px] font-mono overflow-x-auto leading-relaxed",children:h.codeSnippet})]})]}),u.jsxs("div",{className:"bg-[#06070a] border border-white/[0.08] rounded-2xl p-4 sm:p-5 font-mono text-xs space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/5 text-neutral-500 text-[11px]",children:[u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx(fA,{className:"w-3.5 h-3.5 text-[#B4A06E]"}),u.jsx("span",{children:"SYSTEM EXECUTION STREAM"})]}),u.jsx("span",{className:"text-neutral-400 text-[10px]",children:"TLS 1.3 • MUTUAL AUTH"})]}),u.jsx("div",{className:"max-h-32 overflow-y-auto space-y-2 pt-1 text-neutral-300 pr-2",children:z.map((j,Z)=>u.jsxs("div",{className:"flex items-start gap-2.5 leading-relaxed",children:[u.jsxs("span",{className:"text-neutral-600 shrink-0 text-[11px]",children:["[",j.time,"]"]}),u.jsx("span",{className:`shrink-0 font-bold ${j.type==="success"?"text-emerald-400":j.type==="warning"?"text-amber-400":"text-[#B4A06E]"}`,children:j.type==="success"?"✓":j.type==="warning"?"⚡":"▹"}),u.jsx("span",{className:`${j.type==="success"?"text-emerald-300":j.type==="warning"?"text-amber-200":"text-neutral-300"}`,children:j.text})]},Z))})]})]})]}),t==="game"&&u.jsxs("div",{className:"bg-[#090b10] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden animate-in fade-in duration-300",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-white/10",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"text-xs font-mono uppercase tracking-widest text-[#B4A06E] flex items-center gap-2",children:[u.jsx(pm,{className:"w-4 h-4"}),"ARCHITECT SURVIVAL CHALLENGE // CAN YOUR STACK SURVIVE?"]}),u.jsx("h3",{className:"text-2xl sm:text-3xl font-light text-white mt-1",children:"PRODUCTION TRAFFIC SIMULATOR"})]}),u.jsx("div",{className:"text-xs font-mono text-neutral-400 max-w-sm font-light",children:"Configure your caching, connection pools, and worker layers, then launch a 50,000 req/s stress surge to see if your system stays up."})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3",children:"1. Select Crisis Scenario:"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[u.jsxs("button",{onClick:()=>x("flash_sale"),className:`p-4 rounded-xl border text-left transition-all ${v==="flash_sale"?"bg-[#151928] border-[#B4A06E] text-white":"bg-[#0c0e14] border-white/10 text-neutral-400 hover:border-white/30"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-[#B4A06E]",children:"CRISIS #01"}),u.jsx(iA,{className:"w-3.5 h-3.5 text-amber-500"})]}),u.jsx("h4",{className:"text-sm font-medium text-white mb-1",children:"50K Flash Sale Spike"}),u.jsx("p",{className:"text-xs text-neutral-400 font-light",children:"Huge flood of repetitive product and inventory reads hitting the frontend."})]}),u.jsxs("button",{onClick:()=>x("db_exhaust"),className:`p-4 rounded-xl border text-left transition-all ${v==="db_exhaust"?"bg-[#151928] border-[#B4A06E] text-white":"bg-[#0c0e14] border-white/10 text-neutral-400 hover:border-white/30"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-[#B4A06E]",children:"CRISIS #02"}),u.jsx(fm,{className:"w-3.5 h-3.5 text-indigo-400"})]}),u.jsx("h4",{className:"text-sm font-medium text-white mb-1",children:"Database Pool Storm"}),u.jsx("p",{className:"text-xs text-neutral-400 font-light",children:"Concurrent complex relational transactions competing for database connections."})]}),u.jsxs("button",{onClick:()=>x("ai_burst"),className:`p-4 rounded-xl border text-left transition-all ${v==="ai_burst"?"bg-[#151928] border-[#B4A06E] text-white":"bg-[#0c0e14] border-white/10 text-neutral-400 hover:border-white/30"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-[#B4A06E]",children:"CRISIS #03"}),u.jsx(ma,{className:"w-3.5 h-3.5 text-pink-400"})]}),u.jsx("h4",{className:"text-sm font-medium text-white mb-1",children:"GenAI Token Ingestion Burst"}),u.jsx("p",{className:"text-xs text-neutral-400 font-light",children:"10,000 users dispatching heavy multi-token LLM prompt evaluations at once."})]})]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3",children:"2. Tune Your System Levers:"}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[u.jsxs("div",{className:"p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-500 uppercase block",children:"In-Memory Cache"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:()=>C({...y,redisCache:!0}),className:`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${y.redisCache?"bg-[#B4A06E] text-black":"bg-white/5 text-neutral-400"}`,children:"REDIS ON"}),u.jsx("button",{onClick:()=>C({...y,redisCache:!1}),className:`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${y.redisCache?"bg-white/5 text-neutral-400":"bg-red-500 text-white"}`,children:"OFF"})]})]}),u.jsxs("div",{className:"p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-500 uppercase block",children:"Gateway Rate Limiter"}),u.jsxs("div",{className:"flex gap-1.5",children:[u.jsx("button",{onClick:()=>C({...y,rateLimiter:"strict"}),className:`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${y.rateLimiter==="strict"?"bg-[#B4A06E] text-black":"bg-white/5 text-neutral-400"}`,children:"STRICT"}),u.jsx("button",{onClick:()=>C({...y,rateLimiter:"off"}),className:`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${y.rateLimiter==="off"?"bg-red-500 text-white":"bg-white/5 text-neutral-400"}`,children:"OFF"})]})]}),u.jsxs("div",{className:"p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-500 uppercase block",children:"DB Pool Size"}),u.jsxs("div",{className:"flex gap-1.5",children:[u.jsx("button",{onClick:()=>C({...y,dbPool:15}),className:`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${y.dbPool===15?"bg-[#B4A06E] text-black":"bg-white/5 text-neutral-400"}`,children:"15"}),u.jsx("button",{onClick:()=>C({...y,dbPool:50}),className:`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${y.dbPool===50?"bg-[#B4A06E] text-black":"bg-white/5 text-neutral-400"}`,children:"50"}),u.jsx("button",{onClick:()=>C({...y,dbPool:100}),className:`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${y.dbPool===100?"bg-[#B4A06E] text-black":"bg-white/5 text-neutral-400"}`,children:"100"})]})]}),u.jsxs("div",{className:"p-4 bg-[#0c0e14] border border-white/10 rounded-xl space-y-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-500 uppercase block",children:"AI Execution Worker"}),u.jsxs("div",{className:"flex gap-1.5",children:[u.jsx("button",{onClick:()=>C({...y,computeWorker:"lambda"}),className:`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${y.computeWorker==="lambda"?"bg-[#B4A06E] text-black":"bg-white/5 text-neutral-400"}`,children:"LAMBDA QUEUE"}),u.jsx("button",{onClick:()=>C({...y,computeWorker:"direct"}),className:`flex-1 py-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${y.computeWorker==="direct"?"bg-red-500 text-white":"bg-white/5 text-neutral-400"}`,children:"DIRECT SERVER"})]})]})]})]}),u.jsx("div",{className:"flex justify-center pt-2",children:u.jsx("button",{onClick:Y,disabled:b,className:"px-8 py-4 bg-[#B4A06E] hover:bg-white text-black font-mono text-sm uppercase tracking-widest font-bold rounded-2xl flex items-center gap-3 shadow-xl shadow-[#B4A06E]/20 transition-all active:scale-95 disabled:opacity-50",children:b?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"}),u.jsx("span",{children:"SIMULATING 50,000 REQ/S SURGE..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(xd,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"LAUNCH ARCHITECT STRESS SURGE ⚡"})]})})}),R&&u.jsxs("div",{className:`p-6 sm:p-8 rounded-2xl border transition-all animate-in fade-in duration-300 ${R.passed?"bg-emerald-950/20 border-emerald-500/50 shadow-2xl shadow-emerald-500/10":"bg-red-950/20 border-red-500/50 shadow-2xl shadow-red-500/10"}`,children:[u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 pb-4 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`p-3 rounded-xl ${R.passed?"bg-emerald-500 text-black":"bg-red-500 text-white"}`,children:R.passed?u.jsx(mA,{className:"w-6 h-6"}):u.jsx(aA,{className:"w-6 h-6"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-xl font-mono font-bold text-white",children:R.status}),u.jsxs("p",{className:"text-xs font-mono text-neutral-400 mt-0.5",children:["Architect Score: ",R.score]})]})]}),u.jsxs("div",{className:"flex items-center gap-6 font-mono text-xs",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-neutral-500 block text-[10px]",children:"UPTIME"}),u.jsx("span",{className:`font-bold text-base ${R.passed?"text-emerald-400":"text-red-400"}`,children:R.uptime})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-neutral-500 block text-[10px]",children:"P99 LATENCY"}),u.jsx("span",{className:"font-bold text-base text-white",children:R.latency})]})]})]}),u.jsxs("div",{className:"space-y-2 text-xs font-sans leading-relaxed",children:[u.jsxs("div",{className:"text-neutral-200",children:[u.jsx("strong",{className:"text-white font-mono uppercase",children:"Diagnosis:"})," ",R.diagnosis]}),u.jsxs("div",{className:"text-neutral-300",children:[u.jsx("strong",{className:"text-[#B4A06E] font-mono uppercase",children:"Engineering Recommendation:"})," ",R.recommendation]})]})]})]})]})})}function wA(){const[t,e]=_e.useState({name:"",email:"",message:""}),[n,i]=_e.useState(!1),[r,s]=_e.useState(null),[a,o]=_e.useState(""),[l,c]=_e.useState(!1),[h,p]=_e.useState(!1),[f,m]=_e.useState(!1),[_,S]=_e.useState(null),[g,d]=_e.useState(!1),v=async C=>{if(C.preventDefault(),!(!t.name||!t.email||!t.message)){i(!0),s(null),o("");try{const A=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"d578807a-c27a-4666-b51c-78612c562f43",name:t.name,email:t.email,message:t.message,subject:`Portfolio Inquiry from ${t.name}`,from_name:`${t.name} (Portfolio Visitor)`})})).json();if(A.success)s("success"),o("TRANSMISSION DISPATCHED: Your inquiry has been delivered directly to Ikram Amjad."),e({name:"",email:"",message:""}),setTimeout(()=>s(null),6e3);else throw new Error(A.message||"Submission failed")}catch(b){console.warn("Transmission error:",b),s("error"),o("Transmission failed. Please check your connection or contact ikramamjad10@gmail.com directly."),setTimeout(()=>s(null),6e3)}finally{i(!1)}}},x=()=>{navigator.clipboard.writeText(or.email),c(!0),setTimeout(()=>c(!1),2e3)},y="https://github.com/ikram-amjad";return u.jsxs("div",{className:"relative bg-[#080808] text-white min-h-screen selection:bg-[#B4A06E] selection:text-black font-sans",children:[u.jsx(Wb,{}),u.jsx("div",{className:"grid-column-guide left-[12%]"}),u.jsx("div",{className:"grid-column-guide left-[34%]"}),u.jsx("div",{className:"grid-column-guide left-[58%]"}),u.jsx("div",{className:"grid-column-guide left-[88%]"}),u.jsxs("header",{className:"fixed top-0 left-0 w-full z-20 px-8 md:px-14 py-6 flex justify-between items-center text-[11px] uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-md bg-[#080808]/80 border-b border-white/[0.04]",children:[u.jsx("a",{href:"#hero",className:"font-mono text-white tracking-widest hover:text-[#B4A06E] transition-colors",children:"/ IKRAM AMJAD /"}),u.jsxs("nav",{className:"hidden lg:flex gap-8 text-[11px]",children:[u.jsx("a",{href:"#work",className:"hover:text-white transition-colors duration-200",children:"Selected Work"}),u.jsx("a",{href:"#architecture",className:"hover:text-white transition-colors duration-200",children:"Architecture Lab"}),u.jsx("a",{href:"#matrix",className:"hover:text-white transition-colors duration-200",children:"Capability Index"}),u.jsx("a",{href:"#experience",className:"hover:text-white transition-colors duration-200",children:"Experience"}),u.jsx("a",{href:"#contact",className:"hover:text-white transition-colors duration-200",children:"Contact"})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>d(!0),className:"hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-[11px] tracking-wider hover:border-[#B4A06E] hover:text-white transition-all",children:[u.jsx(Cl,{className:"w-3 h-3 text-[#B4A06E]"}),u.jsx("span",{children:"RESUME"})]}),u.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4A06E]/15 border border-[#B4A06E]/40 text-[#B4A06E] font-mono text-[11px] tracking-wider hover:bg-[#B4A06E] hover:text-black transition-all font-semibold",children:[u.jsx(ma,{className:"w-3 h-3 animate-spin-slow"}),u.jsx("span",{children:"AI TWIN 🪄"})]}),u.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"hidden md:inline font-mono text-xs text-neutral-300 hover:text-[#B4A06E] transition-colors tracking-widest",children:"GITHUB ↗"})]})]}),u.jsx("section",{id:"hero",className:"relative z-10 min-h-screen w-full flex flex-col justify-center px-8 md:px-14 pt-32 pb-16",children:u.jsxs("div",{className:"max-w-7xl mx-auto w-full",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/[0.06]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"text-xs uppercase tracking-[0.25em] text-[#B4A06E] font-mono mb-3 flex items-center gap-2.5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#B4A06E] animate-pulse"}),u.jsx("span",{children:"Full-Stack Developer"})]}),u.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-none",children:["IKRAM ",u.jsx("span",{className:"text-[#B4A06E] font-normal",children:"AMJAD"})]}),u.jsx("h2",{className:"text-lg md:text-2xl font-mono text-neutral-300 font-light tracking-tight mt-4",children:"Computer Engineer • Full-Stack Developer"})]}),u.jsxs("div",{onClick:()=>p(!0),className:"group cursor-pointer flex flex-col items-center shrink-0 self-center md:self-end transition-transform hover:scale-105",title:"Click to talk with Ikram's AI Twin",children:[u.jsx("div",{className:"w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72",children:u.jsx(Xb,{isSpeaking:f})}),u.jsxs("div",{className:"mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11131a] border border-[#B4A06E]/30 group-hover:border-[#B4A06E] text-[11px] font-mono text-[#B4A06E] shadow-md transition-colors",children:[u.jsx(ma,{className:"w-3 h-3 animate-spin-slow"}),u.jsx("span",{children:f?"Speaking with you...":"Talk to my AI Twin 🪄"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-8 space-y-6",children:[u.jsxs("p",{className:"text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed",children:["I am a ",u.jsx("span",{className:"text-white font-medium",children:"Computer Engineer"})," and ",u.jsx("span",{className:"text-white font-medium",children:"Full-Stack Developer"})," with hands-on experience building scalable, efficient, and responsive web applications and server-side microservices."]}),u.jsxs("p",{className:"text-sm text-neutral-400 font-light leading-relaxed",children:["Currently working across two active engineering appointments: architecting end-to-end full-stack applications with React, Angular, Node.js, and PostgreSQL at ",u.jsx("span",{className:"text-white font-normal",children:"Cuboid Incorporation"}),", and developing robust backend systems, Redis caching tiers, and prompt engineering pipelines at ",u.jsx("span",{className:"text-white font-normal",children:"WebMantis"}),"."]}),u.jsxs("p",{className:"text-sm text-neutral-400 font-light leading-relaxed",children:["Graduated with an Electrical & Computer Engineering degree from ",u.jsx("span",{className:"text-white font-normal",children:"COMSATS Institute of Information Technology Abbottabad"}),". Former Project Manager at ",u.jsx("span",{className:"text-white font-normal",children:"IEEE COMSATS"}),", holding foundational certifications in AI and Machine Learning from AWS and Oracle."]}),u.jsxs("div",{className:"flex flex-wrap gap-3.5 pt-2",children:[u.jsxs("button",{onClick:()=>p(!0),className:"px-6 py-3.5 bg-gradient-to-r from-[#B4A06E] to-[#cfbe94] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#B4A06E]/20 active:scale-95",children:[u.jsx(ma,{className:"w-4 h-4 animate-spin-slow"}),u.jsx("span",{children:"Talk to My AI Twin 🪄"})]}),u.jsx("a",{href:"#work",className:"px-5 py-3.5 bg-white/[0.04] border border-white/10 hover:border-white text-white font-mono text-xs uppercase tracking-widest font-semibold transition-colors duration-200",children:"Selected Work ↗"}),u.jsxs("a",{href:"#architecture",className:"px-5 py-3.5 bg-white/[0.04] border border-white/10 hover:border-[#B4A06E] hover:text-[#B4A06E] text-neutral-200 font-mono text-xs uppercase tracking-widest font-semibold transition-colors duration-200 flex items-center gap-1.5",children:[u.jsx(mx,{className:"w-3.5 h-3.5 text-[#B4A06E]"}),u.jsx("span",{children:"Architecture Lab ↗"})]}),u.jsxs("button",{onClick:()=>d(!0),className:"px-5 py-3.5 border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5",children:[u.jsx(Cl,{className:"w-3.5 h-3.5 text-[#B4A06E]"}),u.jsx("span",{children:"Targeted Resume ↗"})]}),u.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-3.5 border border-[#B4A06E] text-[#B4A06E] font-mono text-xs uppercase tracking-widest hover:bg-[#B4A06E] hover:text-black transition-colors duration-200 flex items-center gap-1.5",children:"GitHub Profile ↗"}),u.jsx("a",{href:or.linkedin,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-3.5 border border-neutral-800 text-neutral-300 font-mono text-xs uppercase tracking-widest hover:border-white hover:text-white transition-colors duration-200 flex items-center gap-1.5",children:"LinkedIn Profile ↗"})]})]}),u.jsxs("div",{className:"lg:col-span-4 space-y-4 pt-1",children:[u.jsxs("div",{className:"border-t border-neutral-800 pt-3",children:[u.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1",children:"ACADEMIC DEGREE"}),u.jsx("span",{className:"text-sm font-light text-neutral-200",children:"Electrical & Computer Eng — COMSATS"})]}),u.jsxs("div",{className:"border-t border-neutral-800 pt-3",children:[u.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1",children:"ACTIVE APPOINTMENTS"}),u.jsx("span",{className:"text-sm font-light text-neutral-200",children:"Cuboid Inc & WebMantis"})]}),u.jsxs("div",{className:"border-t border-neutral-800 pt-3",children:[u.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1",children:"CORE SPECIALIZATION"}),u.jsx("span",{className:"text-sm font-light text-neutral-200",children:"React • Node.js • PostgreSQL • Redis • AWS"})]}),u.jsxs("div",{className:"border-t border-neutral-800 pt-3",children:[u.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1",children:"BASE LOCATION"}),u.jsx("span",{className:"text-sm font-light text-[#B4A06E]",children:"Islamabad, Pakistan"})]})]})]})]})}),u.jsx("section",{id:"work",className:"relative z-10 min-h-screen px-8 md:px-14 py-28 border-t border-white/10",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B4A06E] font-mono",children:"01 // Selected Work"}),u.jsx("h2",{className:"text-4xl md:text-6xl font-light tracking-tighter mt-2",children:"MY WORK & PROJECTS"})]}),u.jsxs("div",{className:"mt-4 md:mt-0 flex flex-col md:items-end gap-1",children:[u.jsx("p",{className:"text-sm text-neutral-400 max-w-xs font-light",children:"Click any project for deep-dive technical architecture, bottlenecks, and benchmarks."}),u.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-mono text-[#B4A06E] hover:underline",children:"View All on GitHub ↗"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:_A.map((C,b)=>u.jsxs("div",{onClick:()=>S(C),className:"glass-card p-8 flex flex-col justify-between rounded-none group hover:border-[#B4A06E]/80 transition-all duration-300 min-h-[420px] cursor-pointer relative",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("span",{className:"text-xs font-mono text-neutral-500",children:["#",String(b+1).padStart(3,"0")]}),u.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B4A06E] font-mono",children:C.category})]}),u.jsxs("h3",{className:"text-2xl sm:text-3xl font-light mb-3 text-white group-hover:text-[#B4A06E] transition-colors flex items-center justify-between",children:[u.jsx("span",{children:C.title}),u.jsx(Qb,{className:"w-5 h-5 text-neutral-500 group-hover:text-[#B4A06E] transition-colors shrink-0"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4",children:C.longDescription||C.description}),C.highlights&&u.jsx("ul",{className:"space-y-1.5 mb-6 text-xs text-neutral-400 font-light",children:C.highlights.map((A,R)=>u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx("span",{className:"text-[#B4A06E] font-mono",children:"▹"}),u.jsx("span",{children:A})]},R))}),u.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:C.tech.map(A=>u.jsx("span",{className:"px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300",children:A},A))})]}),u.jsxs("div",{className:"pt-6 mt-6 border-t border-neutral-800/80 flex justify-between items-center text-xs font-mono text-neutral-400",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsxs("button",{onClick:A=>{A.stopPropagation(),S(C)},className:"text-[#B4A06E] hover:underline flex items-center gap-1 font-medium",children:[u.jsx("span",{children:"Case Study"})," ↗"]}),u.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",onClick:A=>A.stopPropagation(),className:"hover:text-white transition-colors",children:"GitHub ↗"})]}),u.jsx("span",{className:"text-neutral-500",children:C.badge})]})]},C.id||b))})]})}),u.jsx(MA,{}),u.jsx("section",{id:"matrix",className:"relative z-10 px-8 md:px-14 py-28 border-t border-white/10",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B4A06E] font-mono",children:"03 // Technical Index"}),u.jsx("h2",{className:"text-4xl md:text-6xl font-light tracking-tighter mt-2",children:"CAPABILITY MATRIX"})]}),u.jsx("p",{className:"text-sm text-neutral-400 max-w-xs mt-4 md:mt-0 font-light",children:"Systematic inventory of client runtimes, backend frameworks, database systems, and AI tooling."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[u.jsxs("div",{className:"border-t border-neutral-800 pt-6",children:[u.jsx("span",{className:"text-xs font-mono text-[#B4A06E] block mb-3",children:"01 / FULL-STACK & FRONTEND"}),u.jsxs("ul",{className:"space-y-2 text-sm text-neutral-300 font-light",children:[u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"React.js"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"SPA / Hooks"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Angular.js"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Framework"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"JavaScript (ES6+)"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Async/Await"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Tailwind CSS"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Utility"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Three.js / WebGL"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Interactive 3D"})]})]})]}),u.jsxs("div",{className:"border-t border-neutral-800 pt-6",children:[u.jsx("span",{className:"text-xs font-mono text-[#B4A06E] block mb-3",children:"02 / BACKEND & APIS"}),u.jsxs("ul",{className:"space-y-2 text-sm text-neutral-300 font-light",children:[u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Node.js"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"v22 Core"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Express.js"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"REST API"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"PHP & Laravel"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"MVC Architecture"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"RESTful Services"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Postman"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"JWT & RBAC"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Auth Tier"})]})]})]}),u.jsxs("div",{className:"border-t border-neutral-800 pt-6",children:[u.jsx("span",{className:"text-xs font-mono text-[#B4A06E] block mb-3",children:"03 / DATABASE & CACHING"}),u.jsxs("ul",{className:"space-y-2 text-sm text-neutral-300 font-light",children:[u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"MongoDB"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"MERN Stack"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"PostgreSQL"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Relational SQL"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"MySQL"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"RDBMS"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Redis"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Queues & Caching"})]})]})]}),u.jsxs("div",{className:"border-t border-neutral-800 pt-6",children:[u.jsx("span",{className:"text-xs font-mono text-[#B4A06E] block mb-3",children:"04 / CLOUD, AI & TOOLS"}),u.jsxs("ul",{className:"space-y-2 text-sm text-neutral-300 font-light",children:[u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"AWS (S3, Lambda)"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Serverless"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Prompt Engineering"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"LLM Workflows"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"AWS & Oracle AI"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"Certified"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"Git & GitHub"})," ",u.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"CI/CD"})]})]})]})]})]})}),u.jsx("section",{id:"experience",className:"relative z-10 px-8 md:px-14 py-28 border-t border-white/10",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B4A06E] font-mono",children:"04 // Experience"}),u.jsx("h2",{className:"text-4xl md:text-6xl font-light tracking-tighter mt-2",children:"TRAJECTORY"})]}),u.jsx("p",{className:"text-sm text-neutral-400 max-w-xs mt-4 md:mt-0 font-light",children:"Chronological track record of engineering appointments and leadership tenures."})]}),u.jsx("div",{className:"divide-y divide-neutral-800/80",children:yA.map((C,b)=>u.jsxs("div",{className:"py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-white/[0.01] transition-colors",children:[u.jsx("div",{className:"md:col-span-3 text-xs font-mono text-neutral-500",children:C.period}),u.jsxs("div",{className:"md:col-span-4",children:[u.jsx("h3",{className:"text-xl font-light text-white group-hover:text-[#B4A06E] transition-colors",children:C.role}),u.jsxs("span",{className:"text-xs font-mono text-neutral-400 block mt-1",children:[C.company," ",C.location?`— ${C.location}`:""]})]}),u.jsx("div",{className:"md:col-span-5 text-xs text-neutral-400 leading-relaxed font-light",children:C.description})]},b))})]})}),u.jsx("section",{id:"contact",className:"relative z-10 px-8 md:px-14 py-28 border-t border-white/10",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs uppercase tracking-widest text-[#B4A06E] font-mono",children:"05 // Contact"}),u.jsx("h2",{className:"text-4xl md:text-6xl font-light tracking-tighter mt-2",children:"INITIATE DIALOGUE"})]}),u.jsx("p",{className:"text-sm text-neutral-400 max-w-xs mt-4 md:mt-0 font-light",children:"Available for full-stack web applications, scalable backend microservices, and technical collaborations."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12",children:[u.jsxs("div",{className:"md:col-span-5 space-y-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2",children:"GITHUB PROFILE"}),u.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"text-lg md:text-xl font-light text-white hover:text-[#B4A06E] transition-colors font-mono block",children:"github.com/ikram-amjad ↗"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2",children:"ELECTRONIC MAIL"}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("a",{href:`mailto:${or.email}`,className:"text-lg md:text-xl font-light text-white hover:text-[#B4A06E] transition-colors font-mono",children:or.email}),u.jsxs("button",{onClick:x,className:"p-1.5 rounded bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors text-xs font-mono flex items-center gap-1",title:"Copy Email Address",children:[l?u.jsx(md,{className:"w-3.5 h-3.5 text-[#B4A06E]"}):u.jsx(tA,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:l?"Copied":"Copy"})]})]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2",children:"VERIFIED NETWORK"}),u.jsx("a",{href:or.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-sm font-mono text-neutral-400 hover:text-white transition-colors block",children:"linkedin.com/in/ikram-amjad-8963b4195 ↗"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2",children:"LOCATION BASE"}),u.jsx("span",{className:"text-sm text-neutral-300 font-light",children:"Islamabad, Pakistan"})]})]}),u.jsx("div",{className:"md:col-span-7",children:u.jsxs("form",{onSubmit:v,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2",children:"NAME"}),u.jsx("input",{type:"text",required:!0,value:t.name,onChange:C=>e({...t,name:C.target.value}),className:"w-full bg-[#131313] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B4A06E] font-mono",placeholder:"Jane Doe"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2",children:"EMAIL"}),u.jsx("input",{type:"email",required:!0,value:t.email,onChange:C=>e({...t,email:C.target.value}),className:"w-full bg-[#131313] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B4A06E] font-mono",placeholder:"jane@company.com"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2",children:"MESSAGE"}),u.jsx("textarea",{rows:"4",required:!0,value:t.message,onChange:C=>e({...t,message:C.target.value}),className:"w-full bg-[#131313] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B4A06E] font-mono resize-none",placeholder:"Project requirements or collaboration scope..."})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:n,className:"px-8 py-3.5 bg-[#B4A06E] text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50",children:n?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin"}),u.jsx("span",{children:"TRANSMITTING QUERY..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(gx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"DISPATCH INQUIRY ↗"})]})})}),r==="success"&&u.jsxs("div",{className:"p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300 flex items-start gap-2.5 animate-in fade-in",children:[u.jsx(md,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),u.jsx("span",{children:a})]}),r==="error"&&u.jsxs("div",{className:"p-4 bg-red-950/30 border border-red-500/40 rounded-xl text-xs font-mono text-red-300 flex items-start gap-2.5 animate-in fade-in",children:[u.jsx(Zb,{className:"w-4 h-4 text-red-400 shrink-0 mt-0.5"}),u.jsx("span",{children:a})]})]})})]})]})}),u.jsxs("footer",{className:"relative z-10 px-8 md:px-14 py-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-neutral-600 gap-4",children:[u.jsx("div",{children:"COORDINATES: 33.6844° N, 73.0479° E (ISLAMABAD)"}),u.jsxs("div",{className:"flex items-center gap-6",children:[u.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"GITHUB"}),u.jsx("a",{href:or.linkedin,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"LINKEDIN"}),u.jsx("a",{href:`mailto:${or.email}`,className:"hover:text-white transition-colors",children:"EMAIL"})]}),u.jsx("div",{className:"text-neutral-400",children:"© 2026 IKRAM AMJAD — FULL-STACK DEVELOPER"})]}),u.jsxs("button",{onClick:()=>p(!0),className:"fixed bottom-6 right-6 z-40 px-4 py-3 bg-[#11131a]/95 hover:bg-[#181a24] border border-[#B4A06E]/50 hover:border-[#B4A06E] text-white rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md group transition-all duration-300 hover:scale-105 active:scale-95",title:"Talk with Ikram's AI Twin",children:[u.jsxs("div",{className:"relative flex items-center justify-center w-8 h-8 rounded-full bg-[#B4A06E]/20 text-[#B4A06E] border border-[#B4A06E]/40",children:[u.jsx(qo,{className:"w-4 h-4"}),u.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#B4A06E] animate-ping"})]}),u.jsxs("div",{className:"text-left font-mono pr-1",children:[u.jsx("span",{className:"block text-xs font-semibold text-white group-hover:text-[#B4A06E] transition-colors",children:"AI Twin"}),u.jsx("span",{className:"block text-[10px] text-neutral-400",children:"Voice & Text Chat"})]})]}),u.jsx(SA,{isOpen:h,onClose:()=>p(!1),onSpeakingChange:m}),u.jsx(EA,{project:_,onClose:()=>S(null)}),u.jsx(_x,{isOpen:g,onClose:()=>d(!1)})]})}pu.createRoot(document.getElementById("root")).render(u.jsx(zx.StrictMode,{children:u.jsx(wA,{})}));
