/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const superviseRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: 'Nested Routes',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'Menu 2' }
    }
  ]
}

export default superviseRouter
