(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769fe9a2"],{"378b":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"user-account-mobile"},[i("v-sheet",{staticClass:"mb-3",attrs:{color:"primary lighten-1"}},[i("v-card",{staticClass:"profile-card mx-auto",attrs:{width:"90%",flat:""}},[i("div",{staticClass:"d-flex flex-no-wrap"},[i("v-avatar",{staticClass:"ma-3 rounded-circle",attrs:{size:"100",tile:""}},[i("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/75.jpg"}})],1),i("div",[i("v-card-title",[t._v("Alex")]),i("v-card-subtitle",[t._v("alex@email.com")])],1)],1)])],1),i("v-card",{staticClass:"order",attrs:{flat:""}},[i("v-card-title",{on:{click:t.toOrders}},[i("v-icon",{staticClass:"mr-3",attrs:{color:"primary"}},[t._v(" mdi-clipboard-list-outline ")]),t._v(" 我的訂單 "),i("v-icon",{staticClass:"ml-auto",attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1),i("v-card-text",{staticClass:"d-flex justify-space-around"},t._l(t.orderStatus,(function(a){return i("div",{key:a.icon,staticClass:"d-flex flex-column"},[i("v-icon",{attrs:{large:""}},[t._v(t._s(a.icon))]),i("div",[t._v(t._s(a.status))])],1)})),0)],1),i("v-card",{staticClass:"profile mt-5",attrs:{flat:""}},[i("v-card-title",[i("v-icon",{staticClass:"mr-3",attrs:{color:"primary"}},[t._v(" mdi-account-circle-outline ")]),t._v(" 個人設定 ")],1),i("v-card-text",{staticClass:"d-flex justify-space-around"},t._l(t.profileSetting,(function(a){return i("div",{key:a.icon,staticClass:"d-flex flex-column",on:{click:function(i){return t.toPage(a.to)}}},[i("v-icon",{attrs:{large:"",color:a.color}},[t._v(t._s(a.icon))]),i("div",[t._v(t._s(a.title))])],1)})),0)],1),i("v-card",{staticClass:"other-info mt-5",attrs:{flat:""}},[i("v-card-text",{staticClass:"d-flex justify-space-around"},t._l(t.otherInfo,(function(a){return i("div",{key:a.icon,staticClass:"d-flex flex-column",on:{click:function(i){return t.toPage(a.to)}}},[i("v-icon",{attrs:{large:"",color:a.color}},[t._v(t._s(a.icon))]),i("div",[t._v(t._s(a.title))])],1)})),0)],1)],1)},o=[],r={name:"AccountMobile",data:function(){return{orderStatus:[{icon:"mdi-wallet-outline",status:"待付款"},{icon:"mdi-timetable",status:"待出貨"},{icon:"mdi-truck-fast-outline",status:"待收貨"},{icon:"mdi-checkbox-marked-circle-outline",status:"已完成"}],profileSetting:[{icon:"mdi-account-edit-outline",title:"帳號資訊",color:"green",to:{name:"ProfileMobile"}},{icon:"mdi-map-marker-radius-outline",title:"收件地址",color:"orange",to:{name:"AddressMobile"}},{icon:"mdi-cash-lock",title:"支付管理",color:"red lighten-2",to:{name:"PaymentMobile"}}],otherInfo:[{icon:"mdi-bell-ring-outline",title:"通知",color:"primary",to:{name:"NotifyMobile"}},{icon:"mdi-store",title:"關注店家",color:"orange",to:{name:"FollowedStoreMobile"}}]}},methods:{toOrders:function(){this.$router.push({name:"OrdersMobile"})},toPage:function(t){this.$router.push(t)}}},c=r,s=(i("4caf"),i("2877")),l=i("6544"),n=i.n(l),d=i("8212"),u=i("b0af"),f=i("99d9"),m=i("132d"),v=i("adda"),p=i("8dd9"),_=Object(s["a"])(c,e,o,!1,null,"31d7755a",null);a["default"]=_.exports;n()(_,{VAvatar:d["a"],VCard:u["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VIcon:m["a"],VImg:v["a"],VSheet:p["a"]})},"4caf":function(t,a,i){"use strict";i("cffc")},cffc:function(t,a,i){}}]);
//# sourceMappingURL=chunk-769fe9a2.d7a3f69a.js.map