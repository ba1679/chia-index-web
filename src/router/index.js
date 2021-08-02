import Vue from "vue";
import VueRouter from "vue-router";
// import { auth } from '@/plugins/firebase'

Vue.use(VueRouter);

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
        path: "/food-home",
        name: "FoodHome",
        component: () => import("@/views/CategoriesHome/FoodHome.vue")
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
    // :id
    path: "/sales-store-info",
    name: "SalesStoreInfo",
    component: () => import("@/views/StoreInfo/SalesStoreInfo.vue")
  },
  {
    // :id
    path: "/food-store-info",
    name: "FoodStoreInfo",
    component: () => import("@/views/StoreInfo/FoodStoreInfo.vue")
  },
  {
    // :id
    path: "/service-store-info",
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
  // base: process.env.BASE_URL,
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
