/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/system',
  component: Layout,
  name: 'System',
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '组织管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '组织管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '岗位管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '岗位管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '菜单管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '菜单管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '权限管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '权限管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '账户管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '账户管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '届轮+检查领导组织/检查执行组',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '届次管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '字典管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '字典管理'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '系统通知',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '系统通知'
      }]
    },{
      path: '/',
      component: () => import('@/views/supervise/parentContainer'),
      title: '日志管理',
      children: [{
        path: 'key-manage-list',
        name: 'organization-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '日志管理'
      }]
    },
  ]
}
export default tableRouter
