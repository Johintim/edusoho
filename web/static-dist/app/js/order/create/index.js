!function(u){function e(e){for(var o,t,r=e[0],n=e[1],a=e[2],i=0,c=[];i<r.length;i++)t=r[i],Object.prototype.hasOwnProperty.call(s,t)&&s[t]&&c.push(s[t][0]),s[t]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(u[o]=n[o]);for(p&&p(e);c.length;)c.shift()();return d.push.apply(d,a||[]),l()}function l(){for(var e,o=0;o<d.length;o++){for(var t=d[o],r=!0,n=1;n<t.length;n++){var a=t[n];0!==s[a]&&(r=!1)}r&&(d.splice(o--,1),e=i(i.s=t[0]))}return e}var t={},s={214:0},d=[];function i(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return u[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=u,i.c=t,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(o,e){if(1&e&&(o=i(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)i.d(t,r,function(e){return o[e]}.bind(null,r));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var n=0;n<o.length;n++)e(o[n]);var p=r;d.push([632,0]),l()}({10:function(e,o){e.exports=jQuery},632:function(e,o,t){"use strict";t.r(o);var r=t(0),n=t.n(r),a=t(1),i=t.n(a),c=t(9),u=t.n(c),l=t(6),s=t.n(l),d=(t(5),{divition:function(e,o){return Math.round(Math.round(1e3*e)/Math.round(1e3*o)*1e3)/1e3},multiple:function(e,o){return Math.round(Math.round(100*e)*Math.round(100*o))/1e4},subtract:function(e,o){return Math.round(Math.round(1e3*e)-Math.round(1e3*o))/1e3},moneyFormatFloor:function(e){var o=e+"";return o=s()(Math.round(1e3*o)),(o=10*s()(o/10)/1e3).toFixed(2)},moneyFormatCeil:function(e){var o=e+"",t=(o=u()(o).toFixed(3)).length;return"0"===o.substr(t-1,1)?this.moneyFormatFloor(o):this.moneyFormatFloor(u()(o)+.01)}});new(function(){function o(e){n()(this,o),this.element=$(e.element),this.submitBtn="#order-create-btn",this.validator=null,this.coinSetting=JSON.parse(this.element.find(".js-coin-setting ").text()),this.init()}return i()(o,[{key:"init",value:function(){this.initEvent(),this.validator=this.element.validate({currentDom:this.submitBtn});var e=$("#coupon-select").val();""!=e&&($('[role="coupon-code-input"]').val(e),$('button[role="coupon-use"]').trigger("click"));var o=u()($('[role="total-price"]').text());if(0<$('[role="coinNum"]').length){var t=$('[role="coinNum"]').val();if(isNaN(t)||t<=0?($(this).val("0.00"),this.coinPriceZero()):this.showPayPassword(),"RMB"==this.coinSetting.price_type){var r=d.divition(t,this.coinSetting.cash_rate);o<r&&(r=o),$('[role="cash-discount"]').text(d.moneyFormatFloor(r)),o=d.subtract(o,r)}else $('[role="cash-discount"]').text(d.moneyFormatFloor(t)),o=d.subtract(o,t)}else $('[role="cash-discount"]').text("0.00");if(this.shouldPay(o),0<$("#js-order-create-sms-btn").length){var n=this;$("#js-order-create-sms-btn").click(function(e){var o=$("#coinPayAmount").val();if(o&&0<o.length&&!isNaN(o)&&0<o&&0<$("#js-order-create-sms-btn").length){if($("#payPassword").trigger("change"),0<$('[role="password-input"]').find('span[class="text-danger"]').length&&e.stopPropagation(),n.validator&&n.validator.form()){var t=$(this),r=t.data("url");$(t.attr("data-target")).modal().load(r)}}else e.stopPropagation(),$("#order-create-form").submit()})}}},{key:"initEvent",value:function(){var o=this,e=this.element;e.on("blur",'[role="coinNum"]',function(e){return o.coinNumEvent(e)}),e.on("click","#coupon-code-btn",function(e){return o.couponCodeEvent(e)}),e.on("click",'[role="cancel-coupon"]',function(e){return o.couponCancelEvent(e)}),e.on("click",'button[role="coupon-use"]',function(e){return o.couponUseEvent(e)}),e.on("change","#coupon-select",function(e){return o.couponSelectEvent(e)}),e.on("click",this.submitBtn,function(e){return o.formSubmitEvent(e)})}},{key:"formSubmitEvent",value:function(){this.validator&&this.validator.form()&&this.element.submit()}},{key:"couponSelectEvent",value:function(e){var o=$(e.currentTarget).children("option:selected");if(""==o.data("code"))return $("[role=no-use-coupon-code]").show(),void $('[role="cancel-coupon"]').trigger("click");$("[role=no-use-coupon-code]").hide(),$('[role="coupon-code-input"]').val(o.data("code")),$('button[role="coupon-use"]').trigger("click"),$('[role="code-notify"]').removeClass("alert-success")}},{key:"couponUseEvent",value:function(){var e={},o=$('[role="coupon-code-input"]');if(e.code=o.val(),""!=e.code){e.targetType=o.data("targetType"),e.targetId=o.data("targetId");var t=u()($('[role="total-price"]').text());e.amount=t;var r=this;$.post("/"+e.targetType+"/"+e.targetId+"/coupon/check",e,function(e){$('[role="code-notify"]').css("display","inline-block"),"no"==e.useable?($("[role=no-use-coupon-code]").show(),$('[role="code-notify"]').removeClass("alert-success").addClass("alert-danger").html(Translator.trans("order.create.useless_hint"))):"yes"==e.useable&&($("[role=no-use-coupon-code]").hide(),"discount"==e.type?$('[role="code-notify"]').removeClass("alert-danger").addClass("alert-success").text(Translator.trans("order.create.use_discount_coupon_hint",{rate:e.rate})):$('[role="code-notify"]').removeClass("alert-danger").addClass("alert-success").text(Translator.trans("order.create.use_price_coupon_hint",{rate:e.rate})),$('[role="coupon-price"]').find("[role='price']").text(d.moneyFormatFloor(e.decreaseAmount)),$('[role="coupon-code-verified"]').val(o.val())),r.conculatePrice()})}else $('[role="coupon-price-input"]').find("[role='price']").text("0.00")}},{key:"couponCancelEvent",value:function(){if(""!=$("#coupon-select").val()){var e=$("#coupon-select").val();$('[role="coupon-code-input"]').val(e),$('button[role="coupon-use"]').trigger("click")}$('[role="coupon-code"]').hide(),$("#coupon-code-btn").show(),$('[role="null-coupon-code"]').show(),$('[role="code-notify"]').hide(),$('[role="coupon-price"]').find("[role='price']").text("0.00"),$('[role="code-notify"]').text(""),$('[role="coupon-code"]').val(""),$(this).hide(),$('[role="coupon-code-verified"]').val(""),$('[role="coupon-code-input"]').val(""),this.conculatePrice()}},{key:"coinNumEvent",value:function(e){var o=$(e.currentTarget),t=o.val();t=Math.round(100*t)/100,o.val(t),isNaN(t)||t<=0?(o.val("0.00"),this.coinPriceZero()):this.showPayPassword(),this.conculatePrice()}},{key:"couponCodeEvent",value:function(e){var o=$(e.currentTarget);$('[role="coupon-price"]').find("[role='price']").text("0.00"),$('[role="code-notify"]').text("").removeClass("alert-success"),$('[role="coupon-code"]').val(""),$('[role="cancel-coupon"]').hide(),$('[role="coupon-code-verified"]').val(""),$('[role="coupon-code-input"]').val(""),this.conculatePrice(),$('[role="coupon-code"]').show(),$('[role="coupon-code-input"]').focus(),$('[role="cancel-coupon"]').show(),$('[role="null-coupon-code"]').hide(),o.hide()}},{key:"afterCouponPay",value:function(e){var o=$('[role="coupon-price"]').find("[role='price']").text();return""!=$.trim(o)&&!isNaN(o)||(o=0),e<o&&(o=e),e=d.subtract(e,o)}},{key:"afterCoinPay",value:function(e){var o=$('[role="accountCash"]').text();if(""==o||isNaN(o)||0==u()(o))return this.coinPriceZero(),0;var t=Math.round(1e3*o)>Math.round(1e3*e)?e:o;if("RMB"==this.coinSetting.price_type){var r=u()($('[role="total-price"]').text()),n=Math.round(100*d.moneyFormatFloor(d.divition(t,this.coinSetting.cash_rate)))/100;r<n&&(n=r),$('[role="cash-discount"]').text(d.moneyFormatFloor(n))}else $('[role="cash-discount"]').text(d.moneyFormatFloor(t));return t}},{key:"getMaxCoinCanPay",value:function(e){var o=u()($('[role="maxCoin"]').text()),t=e<o?e:o,r=$('[role="accountCash"]');if(0<r.length){var n=u()(100*r.text())/100;t=t<n?t:n}return t}},{key:"shouldPay",value:function(e){if(e=Math.round(1e3*e)/1e3,"RMB"==this.coinSetting.price_type)e=d.moneyFormatCeil(e),$('[role="pay-rmb"]').text(e),$('input[name="shouldPayMoney"]').val(e);else{var o=d.moneyFormatCeil(d.divition(e,this.coinSetting.cash_rate)),t=Math.round(100*o)/100;$('[role="pay-coin"]').text(e),$('[role="pay-rmb"]').text(t),$('input[name="shouldPayMoney"]').val(t)}}},{key:"conculatePrice",value:function(){var e=u()($('[role="total-price"]').text()),o=0,t=$('[role="cash-discount"]').text(),r=$('[role="coinNum"]').val();switch(e=this.afterCouponPay(e),this.coinSetting.cash_model){case"none":e=0<=e?e:0,this.shouldPay(e);break;case"deduction":o=d.multiple(e,this.coinSetting.cash_rate),o=d.moneyFormatCeil(o);var n=this.getMaxCoinCanPay(o);n<=u()(r)&&(r=n),$('[role="coinNum"]').val(r),0==r&&this.coinPriceZero(),r&&0<$('[name="payPassword"]').length?(r=this.afterCoinPay(r),e=d.subtract(e,t)):($('[role="coinNum"]').val(0),$('[role="cash-discount"]').text("0.00")),e=0<=e?e:0,this.shouldPay(e);break;case"currency":(o=e)<=u()(r)&&(r=o),$('[role="coinNum"]').val(r),0==r&&this.coinPriceZero(),r&&0<$('[name="payPassword"]').length?(r=this.afterCoinPay(r),e=d.subtract(e,t)):($('[role="coinNum"]').val(0),$('[role="cash-discount"]').text("0.00")),e=0<=e?e:0,this.shouldPay(e)}}},{key:"coinPriceZero",value:function(){$('[role="coinNum"]').val(0),$('[role="cash-discount"]').data("defaultValue"),$("[role='password-input']").hide(),$('[name="payPassword"]').rules("remove","required es_remote")}},{key:"showPayPassword",value:function(){$("[role='password-input']").show(),$('[name="payPassword"]').rules("add",{required:!0,es_remote:!0})}}]),o}())({element:"#order-create-form"})}});