/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

import modulesFn from './modules'

Vue.use(Vuex)

let store

export const Store = ({ modules = {}, plugins = [] } = {}) => {
  if (!store) {
    store = new Vuex.Store({
      modules: modulesFn(modules),
      plugins,
    })
  }

  return store
}
