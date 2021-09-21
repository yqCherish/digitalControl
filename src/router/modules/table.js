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
      path: 'key-manage',
      component: () => import('@/views/supervise/parentContainer'),
      name: 'DynamicTable',
      title: '巡查指标库',
      children: [{
        path: 'key-manage-list',
        name: 'keyManageList',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '指标管理列表'
      }, {
        path: 'key-problem-set',
        name: 'keyProblem',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '指标问题程度配置'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '指标分值配置'
      }]
    },
    {
      path: 'supervise-plan-manage',
      component: () => import('@/views/supervise/parentContainer'),
      name: 'planManage',
      title: '巡查计划管理',
      children: [{
        path: 'plan-manage-list',
        name: 'planManageList',
        component: () => import('@/views/supervise/planManage/planList'),
        title: '指标管理计划'
      }]
    },
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
      path: 'supervise-patrol-manage',
      component: () => import('@/views/supervise/parentContainer'),
      name: 'patrolResults',
      title: '巡查结果管理',
      children: [{
        path: 'patrol-manage-list',
        name: 'patrolResultsList',
        component: () => import('@/views/supervise/patrolResults/resultList'),
        title: '巡查结果管理'
      }, {
        path: 'patrolResultsList',
        component: () => import('@/views/supervise/patrolResults/resultList'),
        title: '统计分析'
      }]
    },
    {
      path: 'supervise-archives-manage',
      component: () => import('@/views/supervise/parentContainer'),
      name: 'patrolArchives',
      title: '巡查档案管理',
      children: [{
        path: 'patrol-archives-list',
        name: 'patrolArchivesList',
        component: () => import('@/views/supervise/patrolArchives/archivesList'),
        title: '巡查档案管理'
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
