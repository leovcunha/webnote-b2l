webpackJsonp([0],[,function(t,e){t.exports=function(t,e,n,s,a){var r,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),s&&(c._scopeId=s);var i;if(a?(i=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=i):n&&(i=n),i){var l=c.functional,f=l?c.render:c.beforeCreate;l?c.render=function(t,e){return i.call(e),f(t,e)}:c.beforeCreate=f?[].concat(f,i):[i]}return{esModule:r,exports:o,options:c}}},,,function(t,e,n){function s(t){n(43)}var a=n(1)(n(44),n(45),s,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}n(37),n(38);var a=n(5),r=s(a),o=n(2),u=s(o),c=n(39),i=s(c),l=n(59),f=s(l),d=n(63),_=s(d);r.default.use(u.default),new r.default({el:"#app",router:i.default,components:{headerview:f.default,footerview:_.default},data:function(){return{}},mounted:function(){}})},function(t,e){},function(t,e){},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=s(a),o=n(40),u=s(o),c=n(47),i=s(c),l=n(51),f=s(l),d=n(55),_=s(d),p=[{path:"/",components:{default:u.default,nav:i.default}},{path:"/newuser",components:{default:f.default,nav:i.default}},{path:"/about",components:{default:_.default,nav:i.default}}];e.default=new r.default({routes:p,linkActiveClass:"is-active",mode:"history"})},function(t,e,n){function s(t){n(41)}var a=n(1)(n(42),n(46),s,null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),r=s(a),o=n(4),u=s(o);e.default={name:"app",components:{Card:u.default},data:function(){return{users:[],errors:[]}},created:function(){var t=this;r.default.get("/users").then(function(e){t.users=e.data}).catch(function(e){t.errors.push(e)})}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-component"},[n("p",[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-component",attrs:{id:"app"}},[t.users&&t.users.length?n("div",{staticClass:"row center-xs center-s center-md center-lg"},t._l(t.users,function(e){return n("div",{key:e.name,staticClass:"col-xs-12 col-sm-8 col-md-6 col-lg-4"},[n("card",{staticClass:"card-content"},[n("h2",[t._v("Title")]),t._v(" "),n("h3",[t._v("Date")]),t._v("\n\t\t\t\t\t"+t._s(e.name)+" | "+t._s(e.email)+"\n\t\t\t\t\t"),n("div",[t._v("dafaasd fsa fsd fsaf afdfas\n\t\t\t\t\t\tfdasfsdafdasfds\n\t\t\t\t\t\tfsdfasfsa\n\t\t\t\t\t\tfdsfdas\n\t\t\t\t\t\tfdsf\n\t\t\t\t\t\tsaf\n\t\t\t\t\t\tdasf\n\t\t\t\t\t\tsdfs\n\t\t\t\t\t\tfsaf\n\t\t\t\t\t\tasf\n\t\t\t\t\t\tfafs\n\t\t\t\t\t\tdfdsf\n\t\t\t\t\t\tsaf\n\t\t\t\t\t\tsf\n\t\t\t\t\t\tsdfsd\n\t\t\t\t\t\tf\n\t\t\t\t\t")])])],1)})):t._e(),t._v(" "),t.errors&&t.errors.length?n("div",{staticClass:"row"},t._l(t.errors,function(e){return n("card",{key:e,staticClass:"col-xs-12 col-sm-8 col-md-6 col-lg-4 center"},[t._v("\n\t\t\t\t"+t._s(e.message)+"\n\t\t\t")])})):t._e()])},staticRenderFns:[]}},function(t,e,n){function s(t){n(48)}var a=n(1)(n(49),n(50),s,null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-component"},[n("ul",{staticClass:"nav-component__ul"},[n("router-link",{staticClass:"nav-component__li",attrs:{to:"/",exact:"",tag:"li"}},[n("a",{staticClass:"nav-component__a"},[t._v("Home")])]),t._v(" "),n("router-link",{staticClass:"nav-component__li",attrs:{to:"/about",tag:"li"}},[n("a",{staticClass:"nav-component__a"},[t._v("About")])]),t._v(" "),n("router-link",{staticClass:"nav-component__li",attrs:{to:"/newuser",tag:"li"}},[n("a",{staticClass:"nav-component__a"},[t._v("Add User")])])],1)])},staticRenderFns:[]}},function(t,e,n){function s(t){n(52)}var a=n(1)(n(53),n(54),s,null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={name:"about",components:{Card:a.default},data:function(){return{message:"message for about page"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-user-component"},[n("card",{staticClass:"card-content"},[n("form",{staticClass:"new-user-form",attrs:{action:"/user/new",method:"post"}},[t._v("\n\t\t\tName:"),n("br"),t._v(" "),n("input",{attrs:{type:"text",name:"name",value:"name"}}),n("br"),t._v("\n\t\t\tEmail:"),n("br"),t._v(" "),n("input",{attrs:{type:"email",name:"email",value:"email"}}),n("br"),n("br"),t._v(" "),n("input",{attrs:{type:"submit",value:"Submit"}})])])],1)},staticRenderFns:[]}},function(t,e,n){function s(t){n(56)}var a=n(1)(n(57),n(58),s,null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={name:"about",components:{Card:a.default},data:function(){return{message:"message for about page"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-component"},[n("card",{staticClass:"card-content"},[t._v("This is about Page")])],1)},staticRenderFns:[]}},function(t,e,n){function s(t){n(60)}var a=n(1)(n(61),n(62),s,null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"header-component"},[t._v("\n\tNotes\n")])},staticRenderFns:[]}},function(t,e,n){function s(t){n(64)}var a=n(1)(n(65),n(66),s,null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"footer-component"},[t._v("\n\tCopyright 2017\n")])},staticRenderFns:[]}}],[36]);
//# sourceMappingURL=main.2306e552a0a1ae1b86a0.js.map