(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9612:function(t,r,n){var e=n(2118),o=n(6909),i=n(8138),u=n(4174),a=n(7942);function c(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}c.prototype.clear=e,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},235:function(t,r,n){var e=n(3945),o=n(1846),i=n(8028),u=n(2344),a=n(4769);function c(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}c.prototype.clear=e,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},326:function(t,r,n){var e=n(8761)(n(7772),"Map");t.exports=e},6738:function(t,r,n){var e=n(2411),o=n(6417),i=n(6928),u=n(9493),a=n(4150);function c(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}c.prototype.clear=e,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},857:function(t,r,n){var e=n(7772).Symbol;t.exports=e},343:function(t){t.exports=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}},91:function(t,r,n){var e=n(3940),o=n(1225),i=Object.prototype.hasOwnProperty;t.exports=function(t,r,n){var u=t[r];i.call(t,r)&&o(u,n)&&(void 0!==n||r in t)||e(t,r,n)}},2218:function(t,r,n){var e=n(1225);t.exports=function(t,r){for(var n=t.length;n--;)if(e(t[n][0],r))return n;return-1}},3940:function(t,r,n){var e=n(3043);t.exports=function(t,r,n){"__proto__"==r&&e?e(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n}},3366:function(t,r,n){var e=n(857),o=n(2107),i=n(7157),u=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},6840:function(t,r,n){var e=n(1049),o=n(7394),i=n(9259),u=n(7035),a=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?p:a).test(u(t))}},2857:function(t,r,n){var e=n(91),o=n(7297),i=n(9045),u=n(9259),a=n(3812);t.exports=function(t,r,n,c){if(!u(t))return t;for(var s=-1,l=(r=o(r,t)).length,f=l-1,p=t;null!=p&&++s<l;){var d=a(r[s]),v=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(s!=f){var h=p[d];void 0===(v=c?c(h,d,p):void 0)&&(v=u(h)?h:i(r[s+1])?[]:{})}e(p,d,v),p=p[d]}return t}},1054:function(t,r,n){var e=n(857),o=n(343),i=n(6152),u=n(4795),a=e?e.prototype:void 0,c=a?a.toString:void 0;t.exports=function t(r){if("string"==typeof r)return r;if(i(r))return o(r,t)+"";if(u(r))return c?c.call(r):"";var n=r+"";return"0"==n&&1/r==-Infinity?"-0":n}},7297:function(t,r,n){var e=n(6152),o=n(1401),i=n(4452),u=n(6188);t.exports=function(t,r){return e(t)?t:o(t,r)?[t]:i(u(t))}},4019:function(t,r,n){var e=n(7772)["__core-js_shared__"];t.exports=e},3043:function(t,r,n){var e=n(8761),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(r){}}();t.exports=o},1242:function(t,r,n){var e="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=e},7937:function(t,r,n){var e=n(8304);t.exports=function(t,r){var n=t.__data__;return e(r)?n["string"==typeof r?"string":"hash"]:n.map}},8761:function(t,r,n){var e=n(6840),o=n(8109);t.exports=function(t,r){var n=o(t,r);return e(n)?n:void 0}},2107:function(t,r,n){var e=n(857),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=e?e.toStringTag:void 0;t.exports=function(t){var r=i.call(t,a),n=t[a];try{t[a]=void 0;var e=!0}catch(c){}var o=u.call(t);return e&&(r?t[a]=n:delete t[a]),o}},8109:function(t){t.exports=function(t,r){return null==t?void 0:t[r]}},2118:function(t,r,n){var e=n(9191);t.exports=function(){this.__data__=e?e(null):{},this.size=0}},6909:function(t){t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},8138:function(t,r,n){var e=n(9191),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(e){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(r,t)?r[t]:void 0}},4174:function(t,r,n){var e=n(9191),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return e?void 0!==r[t]:o.call(r,t)}},7942:function(t,r,n){var e=n(9191);t.exports=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=e&&void 0===r?"__lodash_hash_undefined__":r,this}},9045:function(t){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&r.test(t))&&t>-1&&t%1==0&&t<n}},1401:function(t,r,n){var e=n(6152),o=n(4795),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,r){if(e(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(u.test(t)||!i.test(t)||null!=r&&t in Object(r))}},8304:function(t){t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},7394:function(t,r,n){var e=n(4019),o=function(){var t=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},3945:function(t){t.exports=function(){this.__data__=[],this.size=0}},1846:function(t,r,n){var e=n(2218),o=Array.prototype.splice;t.exports=function(t){var r=this.__data__,n=e(r,t);return!(n<0)&&(n==r.length-1?r.pop():o.call(r,n,1),--this.size,!0)}},8028:function(t,r,n){var e=n(2218);t.exports=function(t){var r=this.__data__,n=e(r,t);return n<0?void 0:r[n][1]}},2344:function(t,r,n){var e=n(2218);t.exports=function(t){return e(this.__data__,t)>-1}},4769:function(t,r,n){var e=n(2218);t.exports=function(t,r){var n=this.__data__,o=e(n,t);return o<0?(++this.size,n.push([t,r])):n[o][1]=r,this}},2411:function(t,r,n){var e=n(9612),o=n(235),i=n(326);t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(i||o),string:new e}}},6417:function(t,r,n){var e=n(7937);t.exports=function(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}},6928:function(t,r,n){var e=n(7937);t.exports=function(t){return e(this,t).get(t)}},9493:function(t,r,n){var e=n(7937);t.exports=function(t){return e(this,t).has(t)}},4150:function(t,r,n){var e=n(7937);t.exports=function(t,r){var n=e(this,t),o=n.size;return n.set(t,r),this.size+=n.size==o?0:1,this}},7777:function(t,r,n){var e=n(733);t.exports=function(t){var r=e(t,(function(t){return 500===n.size&&n.clear(),t})),n=r.cache;return r}},9191:function(t,r,n){var e=n(8761)(Object,"create");t.exports=e},7157:function(t){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},7772:function(t,r,n){var e=n(1242),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},4452:function(t,r,n){var e=n(7777),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=e((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(o,(function(t,n,e,o){r.push(e?o.replace(i,"$1"):n||t)})),r}));t.exports=u},3812:function(t,r,n){var e=n(4795);t.exports=function(t){if("string"==typeof t||e(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},7035:function(t){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},1225:function(t){t.exports=function(t,r){return t===r||t!==t&&r!==r}},6152:function(t){var r=Array.isArray;t.exports=r},1049:function(t,r,n){var e=n(3366),o=n(9259);t.exports=function(t){if(!o(t))return!1;var r=e(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},9259:function(t){t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},5125:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},4795:function(t,r,n){var e=n(3366),o=n(5125);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},733:function(t,r,n){var e=n(6738);function o(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return n.cache=i.set(o,u)||i,u};return n.cache=new(o.Cache||e),n}o.Cache=e,t.exports=o},6765:function(t,r,n){var e=n(2857);t.exports=function(t,r,n){return null==t?t:e(t,r,n)}},6188:function(t,r,n){var e=n(1054);t.exports=function(t){return null==t?"":e(t)}},7373:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(8428)}])},1534:function(t,r,n){"use strict";var e=n(2322),o=n(2784),i=n(6897),u=n(5665),a=n(2197),c=n(5801),s=n(5186),l=n(932),f=n(7550),p=n(422),d=n(5873),v=n(4117),h=n(5073),y=n(8675),x=n(5632);function _(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function b(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return _(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=[{name:"Entrenamiento",path:"/"},{name:"Perfil",path:"/profile"},{name:"Salir",path:"/logout"}];r.Z=function(t){var r=t.title,n=t.children,_=(0,x.useRouter)(),m=b(o.useState(!1),2),w=m[0],j=m[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z,{position:"static",sx:{mb:2},children:(0,e.jsxs)(u.Z,{children:[(0,e.jsx)(a.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:r}),(0,e.jsx)(c.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return j(!0)},children:(0,e.jsx)(s.xXU,{})})]})}),(0,e.jsx)(l.ZP,{anchor:"right",open:w,onClose:function(){return j(!1)},children:(0,e.jsx)(f.Z,{sx:{width:250},role:"presentation",onClick:function(){return j(!1)},onKeyDown:function(){return j(!1)},children:(0,e.jsx)(p.Z,{children:g.map((function(t,r){return(0,e.jsx)(d.ZP,{disablePadding:!0,children:(0,e.jsx)(v.Z,{onClick:function(){return _.push(t.path)},children:(0,e.jsx)(h.Z,{primary:t.name})})},"nav-".concat(r))}))})})}),(0,e.jsx)(y.Z,{children:n})]})}},8428:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return F}});var e=n(2322),o=n(4776),i=n.n(o),u=n(2784),a=n(9506),c=n(7527),s=n(7501),l=n(5801),f=n(6765),p=n.n(f),d=n(5469),v=n(5186),h=function(t){var r=t.label,n=t.value,o=t.setter,i=t.field,f=t.type,h=(0,u.useState)(!1),y=h[0],x=h[1];return(0,e.jsxs)(a.Z,{fullWidth:!0,variant:"outlined",children:[(0,e.jsx)(c.Z,{htmlFor:"component-outlined",children:r}),(0,e.jsx)(s.Z,{type:y?"text":f,value:n,onChange:function(t){return r=t.target.value,void o((function(t){var n=JSON.parse(JSON.stringify(t));return p()(n,i,r),n}));var r},label:r,endAdornment:"password"===f&&(0,e.jsx)(d.Z,{position:"end",children:(0,e.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){x((function(t){return!t}))},onMouseDown:function(t){return t.preventDefault()},edge:"end",children:y?(0,e.jsx)(v.wqE,{}):(0,e.jsx)(v.t2l,{})})})})]})},y=n(7550),x=n(2048),_=n(3927),b=n(2966),g=n(2197),m=function(t){var r=t.title,n=t.children;return(0,e.jsxs)(_.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:2},children:[(0,e.jsx)(g.Z,{variant:"h5",children:r}),n&&(0,e.jsx)(_.Z,{direction:"row",spacing:2,children:n})]})},w=n(558),j=n(5163),C=n(8769),O=n(8229),S=n(7274),Z=n(5832),P=n(6675);function A(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function E(t,r,n,e,o,i,u){try{var a=t[i](u),c=a.value}catch(s){return void n(s)}a.done?r(c):Promise.resolve(c).then(e,o)}function I(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return A(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(){var t,r,n=(t=["\n    mutation ChangePassword($input: ChangePasswordInput!) {\n        changePassword(input: $input) {\n            userId\n        }\n    }"],r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}})));return k=function(){return n},n}var z=(0,w.Ps)(k()),N={passwordCurrent:"",passwordNew:"",passwordConfirm:""},$=function(){var t=I(function(t,r){var n=(0,P.x)(null===r||void 0===r?void 0:r.client);(0,S.Vp)(t,S.n_.Mutation);var e=(0,u.useState)({called:!1,loading:!1,client:n}),o=e[0],i=e[1],a=(0,u.useRef)({result:o,mutationId:0,isMounted:!0,client:n,mutation:t,options:r});Object.assign(a.current,{client:n,options:r,mutation:t});var c=(0,u.useCallback)((function(t){void 0===t&&(t={});var r=a.current,n=r.client,e=r.options,o=r.mutation,u=(0,j.pi)((0,j.pi)({},e),{mutation:o});a.current.result.loading||u.ignoreResults||i(a.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:n});var c=++a.current.mutationId,s=(0,C.J)(u,t);return n.mutate(s).then((function(r){var e,o,u,l=r.data,f=r.errors,p=f&&f.length>0?new Z.c({graphQLErrors:f}):void 0;if(c===a.current.mutationId&&!s.ignoreResults){var d={called:!0,loading:!1,data:l,error:p,client:n};a.current.isMounted&&!(0,O.D)(a.current.result,d)&&i(a.current.result=d)}return null===(o=null===(e=a.current.options)||void 0===e?void 0:e.onCompleted)||void 0===o||o.call(e,r.data),null===(u=t.onCompleted)||void 0===u||u.call(t,r.data),r})).catch((function(r){var e,o,u,l;if(c===a.current.mutationId&&a.current.isMounted){var f={loading:!1,error:r,data:void 0,called:!0,client:n};(0,O.D)(a.current.result,f)||i(a.current.result=f)}if((null===(e=a.current.options)||void 0===e?void 0:e.onError)||s.onError)return null===(u=null===(o=a.current.options)||void 0===o?void 0:o.onError)||void 0===u||u.call(o,r),null===(l=t.onError)||void 0===l||l.call(t,r),{data:void 0,errors:r};throw r}))}),[]),s=(0,u.useCallback)((function(){i({called:!1,loading:!1,client:n})}),[]);return(0,u.useEffect)((function(){return a.current.isMounted=!0,function(){a.current.isMounted=!1}}),[]),[c,(0,j.pi)({reset:s},o)]}(z),2),r=t[0],n=t[1],o=(0,u.useState)(N),a=o[0],c=o[1],s=function(){var t,e=(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({variables:{input:{passwordConfirm:a.passwordConfirm,passwordNew:a.passwordNew,passwordOld:a.passwordCurrent}}});case 2:if(n.error){t.next=4;break}return t.abrupt("return");case 4:c(N);case 5:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var i=t.apply(r,n);function u(t){E(i,e,o,u,a,"next",t)}function a(t){E(i,e,o,u,a,"throw",t)}u(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(m,{title:"Cambiar contrase\xf1a",children:(0,e.jsx)(x.Z,{variant:"outlined",onClick:s,disabled:n.loading,children:"Cambiar"})}),(0,e.jsxs)(_.Z,{spacing:2,children:[n.error&&(0,e.jsx)(b.Z,{severity:"warning",children:n.error.message}),(0,e.jsx)(h,{type:"password",value:a.passwordCurrent,label:"Contrase\xf1a actual",field:"passwordCurrent",setter:c}),(0,e.jsx)(h,{type:"password",value:a.passwordNew,label:"Nueva contrase\xf1a",field:"passwordNew",setter:c}),(0,e.jsx)(h,{type:"password",value:a.passwordConfirm,label:"Confirmar contrase\xf1a",field:"passwordConfirm",setter:c})]})]})},M=n(1534),F=function(){return(0,e.jsx)(M.Z,{title:"Perfil",children:(0,e.jsx)($,{})})}}},function(t){t.O(0,[424,800,446,966,641,774,888,179],(function(){return r=7373,t(t.s=r);var r}));var r=t.O();_N_E=r}]);