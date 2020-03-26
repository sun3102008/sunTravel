import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

//使用try catch
let defaultCity = '北京'

try {
  if (localStorage.city ) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

const state = {
  city: defaultCity
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
