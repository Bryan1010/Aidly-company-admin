import CookieParser from "cookieparser";

export const state = () => ({
  user: {
    email: '',
    password: ''
  },
  auth: null
})

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  setRRAuth(state, authObj) {
    if (authObj === null) {
      state.auth = ''

    } else {
      state.auth = authObj
    }
  },
  logout(state) {
    state.auth = ''

  },
  auth_request(state) {
    state.status = 'loading'
  }
}

export const getters = {
  get(state) {
    return state.auth
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, {
    req
  }) {
    // const auth = null
    // const user = null
    console.log(req);
    if (req.headers.cookie) {
      const parsed = CookieParser.parse(req.headers.cookie)
      try {
        // eslint-disable-next-line no-console
        // console.log(axios)
        if (parsed.auth) {
          const user = await this.$axios.$post('/user/login', {
            _id: parsed.auth
          }).data;
          // auth = JSON.parse(parsed.auth)
          // user = await helpers.reauth(auth)
          // eslint-disable-next-line no-console
          console.log(user.data)
          commit('login/setRRAuth', user.auth_token)
          return user.data
        }
      } catch (err) {
        // No valid cookie found
      }
    }
    // commit('login/setRRAuth', user)
    // commit('setAuth', auth)
    // this.$sentry.captureException(new Error('example'))
  }
  // login({commit},user)
}

export const helpers = {
  async reauth(userID) {

    this.$axios.setToken(userID, 'Bearer')
    // const user = await this.$axios.$post('/user/login', {
    //   _id: userID
    // })
    // eslint-disable-next-line no-console
    console.log(user + 'a')
    // store.commit('login/setRRAuth', user.data)
    return user.data
  }
}
