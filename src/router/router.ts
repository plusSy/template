/**
 * @description 路由参数
 * meta 可配置参数
 * @params {string} icon 页面icon
 * @params {boolean} keepAlive 是否缓存页面
 * @params {string} title 页面标题
*/
export default [
  {
    path: '*',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'index',
    },
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/hello/hello.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'hello',
    },
  },
];
