import Vue from "vue";
import VueRouter from "vue-router";
// import { auth } from '@/plugins/firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/views/SignIn.vue")
  },
  {
    // :id
    path: "/store-info",
    name: "StoreInfo",
    component: () => import("@/views/StoreInfo.vue")
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
