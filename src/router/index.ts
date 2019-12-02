import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history',
});

// 跳转之前
router.beforeEach((to, from, next) => {
  next();
});

// 跳转之后
// router.afterEach(() => {});

export default router;
