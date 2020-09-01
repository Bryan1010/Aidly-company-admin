import {
  actions as loginActions
} from './login'

export const state = () => ({
  drawer: true
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, {
    req
  }) {
    await loginActions.nuxtServerInit({
      commit
    }, {
      req
    })
  }
}
