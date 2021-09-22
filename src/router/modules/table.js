/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/supervise',
  component: Layout,
  name: 'Supervise',
  meta: {
    title: '监督整改',
    icon: 'table'
  },
  children: [
    {
      path: 'supervise-task-manage',
      component: () => import('@/views/supervise/parentContainer'),
      name: 'taskManage',
      title: '巡查任务管理',
      children: [{
        path: 'task-manage-list',
        name: 'taskManageList',
        component: () => import('@/views/supervise/taskManage/planList'),
        title: '进行中任务'
      }, {
        path: 'finished-list',
        name: 'finishList',
        component: () => import('@/views/supervise/taskManage/finishedList/index'),
        title: '已结束任务'
      }]
    },
    {
      path: 'supervise-contact-manage',
      component: () => import('@/views/supervise/parentContainer'),
      name: 'contactMasses',
      title: '联系群众',
      children: [{
        path: 'contact-masses-list',
        name: 'contactMassesList',
        component: () => import('@/views/supervise/contactMasses/massesList'),
        title: '联系群众'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '问卷调查'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '联系群众须知'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '联系信息配置'
      }]
    }
  ]
}
export default tableRouter
