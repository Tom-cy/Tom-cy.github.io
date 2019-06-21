webpackJsonp([3],{"6f2+":function(e,v,l){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var d={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var e=this;if(!this.isMoving){var v=window.pageYOffset,l=0;this.isMoving=!0,this.interval=setInterval(function(){var d=Math.floor(e.easeInOutQuad(10*l,v,-v,500));d<=e.backPosition?(window.scrollTo(0,e.backPosition),clearInterval(e.interval),e.isMoving=!1):window.scrollTo(0,d),l++},16.7)}},easeInOutQuad:function(e,v,l,d){return(e/=d/2)<1?l/2*e*e+v:-l/2*(--e*(e-2)-1)+v}}},i={render:function(){var e=this.$createElement,v=this._self._c||e;return v("transition",{attrs:{name:this.transitionName}},[v("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[v("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[v("path",{attrs:{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"}})])])])},staticRenderFns:[]};var o={name:"BackToTopDemo",components:{BackToTop:l("VU/8")(d,i,!1,function(e){l("puza")},"data-v-9e9389e8",null).exports},data:function(){return{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},a={render:function(){var e=this.$createElement,v=this._self._c||e;return v("div",{staticClass:"components-container"},[v("aside",[this._v("\n    When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner\n  ")]),this._v(" "),v("aside",[this._v("\n    You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally\n  ")]),this._v(" "),this._m(0),this._v(" "),v("el-tooltip",{attrs:{placement:"top",content:"tooltip"}},[v("back-to-top",{attrs:{"custom-style":this.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},staticRenderFns:[function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("div",{staticClass:"placeholder-container"},[l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")]),e._v(" "),l("div",[e._v("placeholder")])])}]};var _=l("VU/8")(o,a,!1,function(e){l("Ojl5")},"data-v-294b8602",null);v.default=_.exports},Ojl5:function(e,v){},puza:function(e,v){}});
//# sourceMappingURL=3.77a613afdf0471ff51b7.js.map