const state = {
  secondMenu: null,
  collapse: false
}

const mutations = {
  ADD_SECOND_MENU: (state, menus) => {
    state.secondMenu = menus
  },
  CLEAR_SECOND_MENU: (state) => {
    state.secondMenu = null
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
