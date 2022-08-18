import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from '@/store/modules/catagtory'
import newlist from '@/store/modules/newlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    catagtory:state=>state.catagtory.catagtory,
    currentCatagtory:state=>state.catagtory.currentCatagtory,
    currentList: state => state.newlist.allData[state.catagtory.currentCatagtory] || []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    catagtory,
    newlist
  }
})
