<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    const { icon, title, link } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title' class='node-title'>{(title)}</span>)
    }
    link && vnodes.push(<i class={['el-icon-arrow-right', 'sub-el-icon']} />)
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
.node-title {
  color: #111111;
  font-weight: 400;
}
.is-active .node-title {
  color: #1890ff;
}
.el-icon-arrow-right {
  position: absolute;
  right: 10px;
  line-height: 58px;
  height: 56px;
}
</style>
