// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/srceen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Srceen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Setting',
    },
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    name: 'Layout',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'Setting',
        },
      },
    ],
  },
  {
    path: '/user',
    component: () => import('@/views/layout/index.vue'),
    name: 'User',
    meta: {
      title: '用户管理',
      hidden: false,
      icon: 'Setting',
    },
    redirect: '/user/user',
    children: [
      {
        path: '/user/user',
        component: () => import('@/views/user/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户信息',
          hidden: false,
          icon: 'Setting',
        },
      },
      {
        path: '/user/role',
        component: () => import('@/views/user/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色信息',
          hidden: false,
          icon: 'Setting',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: '',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任何',
      hidden: true,
      icon: '',
    },
  },
]
