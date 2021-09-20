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
      path: 'supervise-manage',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      title: '巡查计划管理',
      children: [{
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '指标管理计划表'
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
        title: '任务管理计划列表'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '待办任务'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '已办任务'
      }]
    },
    {
      path: 'supervise-manage',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      title: '巡查结果管理',
      children: [{
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '巡查结果列表'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '巡查结果统计分析'
      }]
    },
    {
      path: 'supervise-manage',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      title: '巡查档案管理',
      children: [{
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '任务管理计划列表'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '档案分析'
      }]
    },
    {
      path: 'supervise-manage',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      title: '联系群众',
      children: [{
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '联系群众管理列表'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '联系群众须知'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '电话联系信息'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '待处理'
      }, {
        path: 'supervise-manage',
        component: () => import('@/views/table/dynamic-table/index'),
        title: '已处理'
      }]
    }
  ]
}
export default tableRouter
