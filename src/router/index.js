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
    component: () => import("@/views/Consumer/Account.vue"),
    children: [
      {
        path: "",
        name: "ProfileForm",
        component: () => import("@/views/Consumer/ProfileForm.vue")
      },
      {
        path: "/order-list",
        name: "Orders",
        component: () => import("@/views/Consumer/Orders.vue")
      },
      {
        path: "/order-list/:id",
        name: "Order",
        component: () => import("@/views/Consumer/Order.vue")
      },
      {
        path: "/address",
        name: "Address",
        component: () => import("@/views/Consumer/Address.vue")
      },
      {
        path: "/payment",
        name: "Payment",
        component: () => import("@/views/Consumer/Payment.vue")
      },
      {
        path: "/notify",
        name: "Notify",
        component: () => import("@/views/Consumer/Notify.vue")
      },
      {
        path: "/followed",
        name: "FollowedStore",
        component: () => import("@/views/Consumer/FollowedStore.vue")
      }
    ]
  },
  // consumer page mobile
  {
    path: "/mobile/account",
    component: () => import("@/views/ConsumerMobile/ConsumerMobilePage.vue"),
    children: [
      {
        path: "/",
        name: "AccountMobile",
        component: () => import("@/views/ConsumerMobile/Account.vue")
      },
      {
        path: "orders",
        name: "OrdersMobile",
        component: () => import("@/views/ConsumerMobile/Orders.vue")
      },
      {
        path: "profile",
        name: "ProfileMobile",
        component: () => import("@/views/ConsumerMobile/Profile.vue")
      },
      {
        path: "address",
        name: "AddressMobile",
        component: () => import("@/views/ConsumerMobile/Address.vue")
      },
      {
        path: "add-address",
        name: "NewAddressForm",
        component: () => import("@/views/ConsumerMobile/NewAddressForm.vue")
      },
      {
        path: "payment",
        name: "PaymentMobile",
        component: () => import("@/views/ConsumerMobile/Payment.vue")
      },
      {
        path: "add-payment/:method",
        name: "NewPaymentForm",
        component: () => import("@/views/ConsumerMobile/NewPaymentForm.vue")
      },
      {
        path: "notify",
        name: "NotifyMobile",
        component: () => import("@/views/ConsumerMobile/Notify.vue")
      },
      {
        path: "followed",
        name: "FollowedStoreMobile",
        component: () => import("@/views/ConsumerMobile/Followed.vue")
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
