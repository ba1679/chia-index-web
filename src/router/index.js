import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "",
        name: "SalesHome",
        component: () => import("@/views/CategoriesHome/SalesHome.vue")
      },
      {
        path: "catering-home",
        name: "CateringHome",
        component: () => import("@/views/CategoriesHome/CateringHome.vue")
      },
      {
        path: "service-home",
        name: "ServiceHome",
        component: () => import("@/views/CategoriesHome/ServiceHome.vue")
      }
    ]
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/views/SignIn.vue")
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("@/views/Pricing/Pricing.vue")
  },
  {
    path: "/user-account",
    component: () => import("@/views/User/UserAccount.vue"),
    children: [
      {
        path: "",
        name: "UserProfileForm",
        component: () => import("@/views/User/UserProfileForm.vue")
      },
      {
        path: "/order-list",
        name: "UserOrders",
        component: () => import("@/views/User/UserOrders.vue")
      },
      {
        path: "/order-list/:id",
        name: "Order",
        component: () => import("@/views/User/Order.vue")
      },
      {
        path: "/address",
        name: "UserAddress",
        component: () => import("@/views/User/UserAddress.vue")
      },
      {
        path: "/payment",
        name: "UserPayment",
        component: () => import("@/views/User/UserPayment.vue")
      }
    ]
  },
  // consumer page mobile
  {
    path: "/mobile/user-account",
    component: () => import("@/views/UserMobile/UserMobilePage.vue"),
    children: [
      {
        path: "/",
        name: "userAccountMobile",
        component: () => import("@/views/UserMobile/UserAccountMobile.vue")
      },
      {
        path: "orders",
        name: "UserOrdersMobile",
        component: () => import("@/views/UserMobile/UserOrdersMobile.vue")
      },
      {
        path: "profile-setting",
        name: "UserProfileSetting",
        component: () => import("@/views/UserMobile/UserProfileSetting.vue")
      },
      {
        path: "address-setting",
        name: "UserAddressSetting",
        component: () => import("@/views/UserMobile/UserAddressSetting.vue")
      },
      {
        path: "payment-setting",
        name: "UserPaymentSetting",
        component: () => import("@/views/UserMobile/UserPaymentSetting.vue")
      }
    ]
  },
  {
    path: "/sales-store/:id",
    name: "SalesStoreInfo",
    component: () => import("@/views/StoreInfo/SalesStoreInfo.vue")
  },
  {
    path: "/catering-store/:id",
    name: "CateringStoreInfo",
    component: () => import("@/views/StoreInfo/CateringStoreInfo.vue")
  },
  {
    path: "/service-store/:id",
    name: "ServiceStoreInfo",
    component: () => import("@/views/StoreInfo/ServiceStoreInfo.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// router.beforeEach((to, from, next) => {
//   const currentUser = auth.currentUser
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!currentUser) {
//       next({ name: 'SignIn', query: { redirect: to.fullPath } });
//       return
//     }
//   }
//   next();
// });

export default router;
