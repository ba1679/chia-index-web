(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3e1a"],{"5f3f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"bg-white h-100 px-5"},[a("v-tabs",{attrs:{"fixed-tabs":""}},t._l(t.tabList,(function(e){return a("v-tab",{key:e},[t._v(t._s(e))])})),1),a("v-text-field",{staticClass:"mt-5",attrs:{dense:"",filled:"","prepend-inner-icon":"mdi-card-search",label:"您可以透過賣家名稱、訂單編號、商品名稱搜尋"}}),t._l(t.orderData,(function(e){return a("v-card",{key:e.id,staticClass:"mb-3",attrs:{flat:"",outlined:"",link:""},on:{click:function(a){return t.toOrder(e.id)}}},[a("v-card-title",{staticClass:"justify-space-between"},[a("div",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-store")]),t._v(" "+t._s(e.storeName)+" ")],1),a("div",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-truck-check ")]),t._v(" "+t._s(e.status)+" ")],1)]),a("v-divider"),t._l(e.items,(function(e){return a("v-card-text",{key:e.id,staticClass:"d-flex justify-space-between align-center"},[a("v-img",{attrs:{src:e.photoUrl,"max-width":"100px"}}),a("p",{staticClass:"text-left text-subtitle-1"},[t._v(t._s(e.name))]),a("p",{staticClass:"text-subtitle-1"},[t._v("x"+t._s(e.qty))]),a("p",{staticClass:"text-subtitle-1"},[t._v("$"+t._s(e.price))])],1)})),a("v-divider"),a("div",{staticClass:"d-flex justify-end px-3"},[a("p",{staticClass:"text-subtitle-1"},[a("v-icon",{attrs:{color:"orange"}},[t._v("mdi-cash-usd-outline")]),t._v("總金額: "),a("span",{staticClass:"text-h6 orange--text"},[t._v("$"+t._s(e.totalPrice))])],1)]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{color:"primary"}},[t._v("聯絡店家")]),a("v-btn",{attrs:{color:"primary",outlined:""}},[t._v("查看店家")])],1)],2)}))],2)},i=[],r={name:"UserPurchaseLists",data:function(){return{tabList:["全部","待付款","待出貨","待收貨","完成","已取消"],orderData:[{id:"123465789",storeName:"123店家",status:"完成",items:[{id:"1111",name:"商品一",photoUrl:"https://lorempixel.com/400/400/",qty:3,price:10},{id:"22222",name:"商品二",photoUrl:"https://lorempixel.com/500/500/",qty:10,price:20}],totalPrice:230},{id:"223456875",storeName:"555店家",status:"完成",items:[{id:"1111",name:"商品1",photoUrl:"https://lorempixel.com/800/400/",qty:3,price:10},{id:"22222",name:"商品2",photoUrl:"https://lorempixel.com/700/500/",qty:10,price:20}],totalPrice:230}]}},methods:{toOrder:function(t){this.$router.push({name:"Order",params:{id:t}})}}},c=r,n=a("2877"),o=a("6544"),l=a.n(o),d=a("8336"),p=a("b0af"),u=a("99d9"),v=a("a523"),m=a("ce7e"),f=a("132d"),_=a("adda"),x=a("71a3"),h=a("fe57"),b=a("8654"),C=Object(n["a"])(c,s,i,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:d["a"],VCard:p["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VContainer:v["a"],VDivider:m["a"],VIcon:f["a"],VImg:_["a"],VTab:x["a"],VTabs:h["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0d3e1a.a094882c.js.map