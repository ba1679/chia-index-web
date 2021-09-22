(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d86920"],{"13b3":function(t,e,i){},3860:function(t,e,i){"use strict";var s=i("604c");e["a"]=s["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}})},"3e35":function(t,e,i){"use strict";var s=i("5530"),n=i("9d65"),r=i("4e82"),o=i("c3f0"),a=i("80d2"),c=i("58df"),l=Object(c["a"])(n["a"],Object(r["a"])("windowGroup","v-window-item","v-window")),h=l.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(a["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(a["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),u=i("adda"),d=i("1c87"),f=Object(c["a"])(h,d["a"]);e["a"]=f.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(u["a"],{staticClass:"v-carousel__item",props:Object(s["a"])(Object(s["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(a["o"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}})},"5e66":function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("63b7"),i("f665")),r=i("afdd"),o=i("9d26"),a=i("37c6"),c=i("3860"),l=i("80d2"),h=i("d9bd");e["a"]=n["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:n["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],s=0;s<e;s++){var n=this.$createElement(r["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(o["a"],{props:{size:18}},this.delimiterIcon)]);i.push(n)}return this.$createElement(c["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(a["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=n["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(l["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"608c":function(t,e,i){},"63b7":function(t,e,i){},"7eed":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"my-2",attrs:{flat:"",rounded:"false",elevation:"1"}},[i("v-card-title",[i("v-icon",{attrs:{color:t.hot?"pink":"red"}},[t._v(t._s(t.icon))]),t._v(t._s(t.$t("__"+t.title+"_store"))+" ")],1),i("v-divider"),t.isMobile?[i("v-card-text",[i("v-row",t._l(6,(function(e){return i("v-col",{key:e,attrs:{cols:"12"}},[i("v-card",{staticClass:"ma-1 mt-2 relative",attrs:{link:""},on:{click:t.toStoreInfo}},[t.hot?i("div",{staticClass:"store-badge"},[t._v(" TOP "+t._s(e)+" ")]):t._e(),i("v-img",{attrs:{contain:"",src:"https://picsum.photos/id/55/200"}}),i("v-card-title",{staticClass:"text-h5-1 primary--text pb-0"},[t._v(" 店家名稱 ")]),i("v-card-text",{staticClass:"pb-0"},[i("v-divider")],1),i("v-card-text",[t._v(" 店家簡介dolor sit amet consectetur, adipisicing elit. ")]),i("v-card-text",{staticClass:"text-left py-0"},[i("v-icon",{attrs:{small:""}},[t._v("mdi-account-group")]),t._v(" "),i("span",[t._v("1200 位粉絲")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"store-btn",attrs:{outlined:"",link:"",color:"primary"}},[t._v(t._s(t.$t("__shop_now"))+" "),i("v-icon",{staticClass:"icon-transition"},[t._v("mdi-arrow-right")])],1)],1)],1)],1)})),1)],1)]:[i("v-slide-group",{staticClass:"pa-2",attrs:{"show-arrows":""}},t._l(6,(function(e){return i("v-slide-item",{key:e,staticClass:"mr-2"},[i("v-card",{staticClass:"ma-1 mt-2 relative",attrs:{link:"","max-width":"250"},on:{click:t.toStoreInfo}},[t.hot?i("div",{staticClass:"store-badge"},[t._v(" TOP "+t._s(e)+" ")]):t._e(),i("v-img",{attrs:{contain:"",src:"https://picsum.photos/id/55/200"}}),i("v-card-title",{staticClass:"text-h5-1 primary--text pb-0"},[t._v(" 店家名稱 ")]),i("v-card-text",{staticClass:"pb-0"},[i("v-divider")],1),i("v-card-text",[t._v(" 店家簡介dolor sit amet consectetur, adipisicing elit. ")]),i("v-card-text",{staticClass:"text-left py-0"},[i("v-icon",{attrs:{small:""}},[t._v("mdi-account-group")]),t._v(" "),i("span",[t._v("1200 位粉絲")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"store-btn",attrs:{outlined:"",link:"",color:"primary"}},[t._v(t._s(t.$t("__shop_now"))+" "),i("v-icon",{staticClass:"icon-transition"},[t._v("mdi-arrow-right")])],1)],1)],1)],1)})),1)]],2)},n=[],r=i("5530"),o=i("2f62"),a={name:"StoreCard",computed:Object(r["a"])({},Object(o["b"])({isMobile:"isMobile"})),props:{title:{type:String},storeData:{type:Array},icon:{type:String},hot:{type:Boolean,default:!1}},methods:{toStoreInfo:function(){this.$emit("toStoreInfo")}}},c=a,l=(i("ec77"),i("2877")),h=i("6544"),u=i.n(h),d=i("8336"),f=i("b0af"),v=i("99d9"),p=i("62ad"),m=i("ce7e"),g=i("132d"),w=i("adda"),b=i("0fd9"),x=i("7efd"),y=i("ade3"),C=i("4e82"),_=i("58df"),$=i("d9bd"),O=i("2b0e"),T=O["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(y["a"])({},this.activeClass,this.isActive)}),t):(Object($["c"])("v-item should only contain a single element",this),t)):(Object($["c"])("v-item is missing a default scopedSlot",this),null);var t}}),I=(Object(_["a"])(T,Object(C["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(_["a"])(T,Object(C["a"])("slideGroup")).extend({name:"v-slide-item"})),S=i("2fa4"),A=Object(l["a"])(c,s,n,!1,null,"69bd4ecd",null);e["a"]=A.exports;u()(A,{VBtn:d["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:p["a"],VDivider:m["a"],VIcon:g["a"],VImg:w["a"],VRow:b["a"],VSlideGroup:x["b"],VSlideItem:I,VSpacer:S["a"]})},"7efd":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var s=i("5530"),n=(i("caad"),i("99af"),i("fb6a"),i("608c"),i("9d26")),r=i("0789"),o=i("604c"),a=i("e4cd"),c=i("dc22"),l=i("c3f0"),h=i("58df"),u=Object(h["a"])(o["a"],a["a"]).extend({name:"base-slide-group",directives:{Resize:c["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(n["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(r["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,r=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,s){var n=t.clientWidth,r=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var o=e.wrapper+s,a=n+r,c=.4*n;return r<=s?s=Math.max(r-c,0):o<=a&&(s=Math.min(s-(o-a-c),e.content-e.wrapper)),i?-s:s},calculateCenteredOffset:function(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var r=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var o=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=u.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},a523:function(t,e,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var s=i("2b0e");function n(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var s=i.props,n=i.data,r=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));a.length&&(n.staticClass+=" ".concat(a.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,r)}})}var r=i("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,s=e.props,n=e.data,o=e.children,a=n.attrs;return a&&(n.attrs={},i=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(i||[])}),o)}})},a67b:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"my-2",attrs:{flat:"",rounded:"false",elevation:"1"}},[i("v-card-title",[i("v-icon",{attrs:{color:"orange"}},[t._v("mdi-new-box")]),t._v(t._s(t.$t("__good_items")))],1),i("v-divider"),i("v-container",{attrs:{fluid:""}},[i("v-row",t._l(6,(function(e){return i("v-col",{key:e,attrs:{sm:"6",md:"3",lg:"2"}},[i("v-card",{attrs:{link:""}},[i("v-img",{attrs:{contain:"",src:"https://picsum.photos/200"}}),i("v-card-title",[t._v(" 商品"+t._s(e)+" ")]),i("v-card-text",{staticClass:"d-flex justify-space-around pa-0"},[i("p",{staticClass:"primary--text"},[t._v(t._s(t.$t("__store")))]),i("p",{staticClass:"grey--text"},[t._v("店家名稱")])])],1)],1)})),1)],1)],1)},n=[],r={name:"ItemCard"},o=r,a=i("2877"),c=i("6544"),l=i.n(c),h=i("b0af"),u=i("99d9"),d=i("62ad"),f=i("a523"),v=i("ce7e"),p=i("132d"),m=i("adda"),g=i("0fd9"),w=Object(a["a"])(o,s,n,!1,null,null,null);e["a"]=w.exports;l()(w,{VCard:h["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:d["a"],VContainer:f["a"],VDivider:v["a"],VIcon:p["a"],VImg:m["a"],VRow:g["a"]})},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},ebba:function(t,e,i){},ec77:function(t,e,i){"use strict";i("ebba")},f665:function(t,e,i){"use strict";var s=i("5530"),n=(i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),r=i("afdd"),o=i("9d26"),a=i("604c");e["a"]=a["a"].extend({name:"v-window",directives:{Touch:n["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(s["a"])(Object(s["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var s,n=this,a={click:function(t){t.stopPropagation(),n.changedByDelimiters=!0,i()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},l=null!=(s=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:a,attrs:c}))?s:[this.$createElement(r["a"],{props:{icon:!0},attrs:c,on:a},[this.$createElement(o["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},l)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){var n=this.genIcon("next",s,this.next);n&&t.push(n)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var s=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:s})}return t("div",i,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-72d86920.1107f3e4.js.map