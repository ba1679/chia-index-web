(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6564dae"],{"0bc6":function(t,a,e){},"2a73":function(t,a,e){"use strict";e("5db2")},"2b9d":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-sheet",{staticClass:"pa-2 d-flex align-center",class:{"justify-space-between":t.actionText}},[e("router-link",{attrs:{to:t.backPath}},[e("v-icon",[t._v("mdi-chevron-left")]),t._v(" 回上頁 ")],1),e("div",{staticClass:"text-h6 ml-5"},[t._v(" "+t._s(t.title)+" ")]),t.actionText?e("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.action}},[t._v(t._s(t.actionText))]):t._e()],1),e("v-divider")],1)},i=[],r={name:"MobileTopBar",props:{title:{type:String},backPath:{type:Object},actionText:{type:String}},methods:{action:function(){this.$emit("action")}}},s=r,o=(e("2a73"),e("2877")),c=e("6544"),d=e.n(c),l=e("8336"),u=e("ce7e"),f=e("132d"),v=e("8dd9"),p=Object(o["a"])(s,n,i,!1,null,"4d8eb1d3",null);a["a"]=p.exports;d()(p,{VBtn:l["a"],VDivider:u["a"],VIcon:f["a"],VSheet:v["a"]})},"37b1":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("MobileTopBar",{attrs:{title:"帳號資訊設定",backPath:{name:"AccountMobile"},actionText:"儲存"},on:{action:t.save}}),e("v-container",[e("div",{staticClass:"d-flex flex-column align-center"},[e("v-img",{staticClass:"rounded-circle",attrs:{src:"https://randomuser.me/api/portraits/men/51.jpg","max-width":"150px"}}),e("v-btn",{staticClass:"mt-3",attrs:{outlined:""}},[t._v("上傳圖片")])],1),e("v-divider",{staticClass:"my-3"}),t._l(t.profileInputLabels,(function(a){return e("v-row",{key:a,attrs:{align:"start"}},[e("v-col",{attrs:{cols:"4"}},[e("v-subheader",[t._v(t._s(a))])],1),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{outlined:"",dense:""}})],1)],1)}))],2)],1)},i=[],r=e("2b9d"),s={name:"UserProfileSetting",components:{MobileTopBar:r["a"]},data:function(){return{profileInputLabels:["使用者帳號","姓名","Email","電話"]}},methods:{save:function(){}}},o=s,c=e("2877"),d=e("6544"),l=e.n(d),u=e("8336"),f=e("62ad"),v=e("a523"),p=e("ce7e"),b=e("adda"),m=e("0fd9"),h=e("e0c7"),g=e("8654"),x=Object(c["a"])(o,n,i,!1,null,null,null);a["default"]=x.exports;l()(x,{VBtn:u["a"],VCol:f["a"],VContainer:v["a"],VDivider:p["a"],VImg:b["a"],VRow:m["a"],VSubheader:h["a"],VTextField:g["a"]})},"5db2":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var n=e("2b0e");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,i=e.data,r=e.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),a(n.tag,i,r)}})}var r=e("d9f7");a["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,i=a.data,s=a.children,o=i.attrs;return o&&(i.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),s)}})},e0c7:function(t,a,e){"use strict";var n=e("5530"),i=(e("0bc6"),e("7560")),r=e("58df");a["a"]=Object(r["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(n["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-a6564dae.767465d8.js.map