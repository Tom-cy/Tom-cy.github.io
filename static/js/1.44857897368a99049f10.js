webpackJsonp([1],{"4xAr":function(t,e){},"5Fp8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new(i("7+uW").default),s={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,n.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[i("i",{staticClass:"el-icon-menu"})]),t._v(" "),i("div",{staticClass:"logo"},[t._v("智能管理系统")]),t._v(" "),i("div",{staticClass:"header-right"},[i("div",{staticClass:"header-user-con"},[i("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[i("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[i("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),i("div",{staticClass:"btn-bell"},[i("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[i("router-link",{attrs:{to:"/CRMinformation"}},[i("svg-icon",{attrs:{"class-name":"info-icon","icon-class":"info"}})],1)],1),t._v(" "),t.message?i("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._v(" "),t._m(0),t._v(" "),i("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),i("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("a",{attrs:{href:"#",target:"_blank"}},[i("el-dropdown-item",[t._v("账号资料设置")])],1),t._v(" "),i("a",{attrs:{href:"#",target:"_blank"}},[i("el-dropdown-item",[t._v("进入企业后台")])],1),t._v(" "),i("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avator"},[e("img",{attrs:{src:i("LOA1")}})])}]};var a={data:function(){return{collapse:!1,items:[{icon:"el-icon-s-home",index:"Home",title:"首页"},{icon:"el-icon-s-order",index:"1",title:"报表样式大全",subs:[{index:"bao1",title:"报表1"},{index:"bao2",title:"报表2"},{index:"bao3",title:"报表3"}]},{icon:"el-icon-rank",index:"2",title:"组件间通信",subs:[{index:"zujian1",title:"组件1"},{index:"zujian2",title:"组件2"},{index:"zujian3",title:"组件3"}]},{icon:"el-icon-message-solid",index:"403",title:"CRM提醒"},{icon:"el-icon-pie-chart",index:"CRMinformation",title:"CRM信息"},{icon:"el-icon-s-platform",index:"databoard",title:"数据看板"},{icon:"el-icon-s-order",index:"dataAnalysis",title:"数据分析",subs:[{index:"Report",title:"报表"},{index:"Permission",title:"报表文件"},{index:"Subscription",title:"可移动的dialog"},{index:"Reportlog",title:"报表日志"},{index:"Statisticalindicator",title:"el-table分页"}]},{icon:"el-icon-pie-chart",index:"market",title:"组件",subs:[{index:"Activity",title:"富文本编辑器"},{index:"Sale",title:"Markdown"},{index:"Clue",title:"可拖拽看板"},{index:"zujian",title:"小组件"},{index:"backtotop",title:"返回顶部"}]},{icon:"el-icon-rank",index:"client",title:"客户及商机管理",subs:[{index:"Aims",title:"目标"},{index:"Targetcompletion",title:"目标完成情况"},{index:"Client_son",title:"客户"},{index:"Highseas",title:"公海"},{index:"Contact",title:"联系人"},{index:"Business",title:"商机"},{index:"Quotation",title:"报价单"},{index:"Quotationdetails",title:"报价单明细"}]},{icon:"el-icon-rank",index:"Order",title:"订单及回款管理",subs:[{index:"Contract",title:"合同"},{index:"Salesorder",title:"销售订单"},{index:"Paymentplan",title:"回款计划"},{index:"Payment",title:"回款"},{index:"Paymentdetail",title:"回款明细"},{index:"Billingapplication",title:"开票申请"},{index:"Pricelist",title:"价目表"},{index:"Priceindicatesfine",title:"价目表明细"},{index:"Returnform",title:"退货单"},{index:"Refund",title:"退款"}]},{icon:"el-icon-rank",index:"product",title:"产品管理",subs:[{index:"Specification",title:"规格"},{index:"SpecificationValue",title:"规格值"},{index:"Commodity",title:"商品"},{index:"product_son",title:"产品"}]},{icon:"el-icon-rank",index:"service",title:"服务及工单管理",subs:[{index:"Servicemanagement",title:"服务管理"},{index:"Workorder",title:"工单"}]},{icon:"el-icon-s-custom",index:"myObject",title:"todoList"},{icon:"el-icon-s-marketing",index:"shopping",title:"购物车"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e})}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[i("i",{class:e.icon}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.subs,function(e,n){return i("el-menu-item",{key:n,attrs:{index:e.index}},[t._v(t._s(e.title))])})],2):i("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]})],2)]:[i("el-menu-item",{key:e.index,attrs:{index:e.index}},[i("i",{class:e.icon}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},staticRenderFns:[]};var c={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],i=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];i?e.path===this.$route.fullPath&&this.$router.push(i.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){this.tagsList.some(function(e){return e.path===t.fullPath})||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),n.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),n.$on("close_current_tags",function(){for(var e=0,i=t.tagsList.length;e<i;e++){if(t.tagsList[e].path===t.$route.fullPath){e<i-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}})}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showTags?i("div",{staticClass:"tags"},[i("ul",t._l(t.tagsList,function(e,n){return i("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[i("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),i("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[i("i",{staticClass:"el-icon-close"})])],1)}),0),t._v(" "),i("div",{staticClass:"tags-close-box"},[i("el-dropdown",{on:{command:t.handleTags}},[i("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var u={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:i("VU/8")(s,l,!1,function(t){i("g6GT")},"data-v-98631ee6",null).exports,vSidebar:i("VU/8")(a,o,!1,function(t){i("iQR9")},"data-v-76cad5da",null).exports,vTags:i("VU/8")(c,r,!1,function(t){i("4xAr")},null,null).exports},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e}),n.$on("tags",function(e){for(var i=[],n=0,s=e.length;n<s;n++)e[n].name&&i.push(e[n].name);t.tagsList=i})}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]},m=i("VU/8")(u,d,!1,null,null,null);e.default=m.exports},LOA1:function(t,e,i){t.exports=i.p+"static/img/1.a20ae13.png"},g6GT:function(t,e){},iQR9:function(t,e){}});
//# sourceMappingURL=1.44857897368a99049f10.js.map