import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/loggedOut/Home.vue";
import Dashboard from "../views/loggedIn/dashboard/Dashboard.vue";
import Login from "../views/loggedOut/Login.vue";
import Register from "../views/loggedOut/Register.vue";
import Error404 from "../views/errors/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/loggedOut/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/loggedOut/Register.vue")
  },
  {
    path: "/user",
    name: "user",
    meta: {
        requiresAuth: true
            },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/loggedIn/User.vue"),
    children: [{
      path: 'account',
      components: {
        default: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/loggedIn/account/Account.vue"),
      }
    },
    {
      path: 'dashboard',
      components: {
        default: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/loggedIn/dashboard/Dashboard.vue"),
      }
    }]
  },
  { path: "*", component: Error404 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//Add extra parts to make it if the user is logged in to not go to login or register
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('token') == null){
            next()
        }
        else{
            next({ name: 'dashboard'})
        }
    }else {
        next()
    }
})


export default router;
