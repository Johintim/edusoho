!function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/static-dist/",o(o.s=22)}([function(t,n,e){t.exports=!e(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(15),o=e(16),i=e(18),u=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var o=e(8);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o(t,r.key,r)}}t.exports=function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}},function(t,n,e){t.exports=e(9)},function(t,n,e){e(10);var r=e(3).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(11);r(r.S+r.F*!e(0),"Object",{defineProperty:e(4).f})},function(t,n,e){var y=e(2),h=e(3),m=e(12),b=e(14),w=e(20),g="prototype",x=function(t,n,e){var r,o,i,u=t&x.F,a=t&x.G,f=t&x.S,c=t&x.P,l=t&x.B,s=t&x.W,p=a?h:h[n]||(h[n]={}),d=p[g],v=a?y:f?y[n]:(y[n]||{})[g];for(r in a&&(e=n),e)(o=!u&&v&&void 0!==v[r])&&w(p,r)||(i=o?v[r]:e[r],p[r]=a&&"function"!=typeof v[r]?e[r]:l&&o?m(i,y):s&&v[r]==i?function(r){function t(t,n,e){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,n)}return new r(t,n,e)}return r.apply(this,arguments)}return t[g]=r[g],t}(i):c&&"function"==typeof i?m(Function.call,i):i,c&&((p.virtual||(p.virtual={}))[r]=i,t&x.R&&d&&!d[r]&&b(d,r,i)))};x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,t.exports=x},function(t,n,e){var i=e(13);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,n){return r.call(o,t,n)};case 3:return function(t,n,e){return r.call(o,t,n,e)}}return function(){return r.apply(o,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(4),o=e(19);t.exports=e(0)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(0)&&!e(5)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var o=e(1);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},,function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return a});var r=e(6),o=e.n(r),i=e(7),u=e.n(i),a=function(){function t(){o()(this,t),this._init()}return u()(t,[{key:"_init",value:function(){var n=this;this._inItStep2form(),window.ltc.on("getActivity",function(t){window.ltc.emit("returnActivity",{valid:n.validator.form(),data:n._serializeArray($("#step2-form"))})}),window.ltc.on("getValidate",function(t){window.ltc.emit("returnValidate",{valid:n.validator.form()})})}},{key:"_inItStep2form",value:function(){var t,n,e,r=$("#step2-form");this.validator=r.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},content:"required"}}),t=$('[name="content"]'),n=this.validator,(e=CKEDITOR.replace("text-content-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#text-content-field").data("imageUploadUrl"),filebrowserFlashUploadUrl:$("#text-content-field").data("flashUploadUrl"),allowedContent:!0,height:300})).on("change",function(){console.log("change"),t.val(e.getData()),n&&n.form()}),e.on("blur",function(){console.log("blur"),t.val(e.getData()),n&&n.form()})}},{key:"_serializeArray",value:function(t){var n={},e=t.serializeArray();return $.each(e,function(){n[this.name]?(n[this.name].push||(n[this.name]=[n[this.name]]),n[this.name].push(this.value||"")):n[this.name]=this.value||""}),n}}]),t}();new a}]);