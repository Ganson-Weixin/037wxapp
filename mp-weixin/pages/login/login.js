(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"1c27":function(t,n,e){},"5cbc":function(t,n,e){"use strict";var i=e("1c27"),s=e.n(i);s.a},"5e46":function(t,n,e){"use strict";e.r(n);var i=e("c110"),s=e("ba02");for(var o in s)"default"!==o&&function(t){e.d(n,t,(function(){return s[t]}))}(o);e("5cbc");var a,r=e("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"87da124e",null,!1,i["a"],a);n["default"]=u.exports},a53e:function(t,n,e){"use strict";(function(t){e("9981"),e("921b");i(e("66fd"));var n=i(e("5e46"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ba02:function(t,n,e){"use strict";e.r(n);var i=e("ff52"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=s.a},c110:function(t,n,e){"use strict";var i,s=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},ff52:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("a34a")),s=o(e("fb83"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,s,o,a){try{var r=t[o](a),u=r.value}catch(c){return void e(c)}r.done?n(u):Promise.resolve(u).then(i,s)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(i,s){var o=t.apply(n,e);function r(t){a(o,i,s,r,u,"next",t)}function u(t){a(o,i,s,r,u,"throw",t)}r(void 0)}))}}var u={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","yonghu","mendian"],index:0}},onLoad:function(){var t=["请选择登录用户类型"],n=s.default.list();this.menuList=n;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&t.push(this.menuList[e].roleName);this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(n){t.setStorageSync("loginTable",n),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var n=r(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.optionsValues[this.index]){n.next=3;break}return this.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:return n.next=5,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 5:return e=n.sent,t.setStorageSync("token",e.token),t.setStorageSync("nickname",this.username),t.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),n.next=11,this.$api.session("".concat(this.optionsValues[this.index]));case 11:e=n.sent,t.setStorageSync("userid",e.data.id),t.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 15:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value}}};n.default=u}).call(this,e("543d")["default"])}},[["a53e","common/runtime","common/vendor"]]]);