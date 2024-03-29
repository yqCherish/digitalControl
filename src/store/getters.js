const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  secondMenus: state => state.menu.secondMenu,
  settingNavState: state => state.menu.setting_nav,
  psdState: state => state.menu.psd_dialog,
  logoutState: state => state.menu.logout_dialog,
  identityState: state => state.user.identity
}
export default getters
