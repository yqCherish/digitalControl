<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}" @click="_link2Page(onlyOneChild)">
        <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
      </el-menu-item>
    </template>
    <template v-else :index="resolvePath(item.path)">
      <el-menu-item :index="resolvePath(item.path)" :class="{'submenu-title-noDropdown':!isNest}" @click="showSecondItem(item)">
        <item v-if="item.meta" :link="true" :icon="item.meta&&item.meta.icon" :title="item.meta&&item.meta.title" />
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
import { mapGetters } from 'vuex'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters([
      'secondMenus'
    ])
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    // this.onlyOneChild = null
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      // this.$store.commit('app/TOGGLE_SIDEBAR');
      return path.resolve(this.basePath, routePath)
    },
    showSecondItem(item) {
      console.log('item', item)
      this.$store.commit('menu/ADD_SECOND_MENU', item)
      console.log('secondMenus', this.secondMenus)
    },
    _link2Page(item) {
      this.$store.commit('app/TOGGLE_SIDEBAR')
      this.$store.commit('menu/CLEAR_SECOND_MENU')
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>
