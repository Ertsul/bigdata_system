import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    alwaysShow: true,
    component: () => import(/* webpackChunkName: "Header" */ '../components/Header.vue'),
    children: [{
      path: 'workBranch',
      name: 'WorkBranch',
      meta: {
        title: '工作台',
      },
      component: () => import(/* webpackChunkName: "workBranch" */ '../views/WorkBranch.vue'),
    }, {
      path: 'activityManager',
      name: 'ActivityManager',
      meta: {
        title: '活动管理',
      },
      component: () => import(/* webpackChunkName: "activityManager" */ '../views/ActivityManager.vue'),
      children: [{
        path: 'activityList',
        name: 'ActivityList',
        meta: {
          title: '活动列表',
        },
        component: () => import(/* webpackChunkName: "activityList" */ '../views/ActivityList.vue'),
      }, {
        path: 'tagsManager',
        name: 'TagsManager',
        meta: {
          title: '标签库管理',
        },
        component: () => import(/* webpackChunkName: "tagsManager" */ '../views/TagsManager.vue'),
      }, {
        path: 'userGroupsManager',
        name: 'UserGroupsManager',
        meta: {
          title: '用户群管理',
        },
        component: () => import(/* webpackChunkName: "userGroupsManager" */ '../views/UserGroupsManager.vue'),
      }]
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
