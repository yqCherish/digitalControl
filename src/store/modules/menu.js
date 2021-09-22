const state = {
  secondMenu: null,
  collapse: false,
  setting_nav: false,
  psd_dialog: false,
  logout_dialog: false
}

const mutations = {
  ADD_SECOND_MENU: (state, menus) => {
    state.secondMenu = menus
  },
  CLEAR_SECOND_MENU: (state) => {
    state.secondMenu = null
  },
  SETTING_NAV: (state) => {
    state.setting_nav = !state.setting_nav;
  },
  PSD_DIALOG: (state, status) => {
    state.psd_dialog = status;
  },
  LOG_OUT_DIALOG: (state, status) => {
    state.logout_dialog = status;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
