import { set } from '@/utils/vuex'

const stateFn = (options) => ({
    drawer: null,
})

export default (options) => {
    const state = stateFn(options)
    return {
        namespaced: true,
        state,
        mutations: {
            SET_DRAWER: set("drawer"),
        },
        actions: {
            setDrawerModel({ commit }, payload) {
                commit("SET_DRAWER", payload)
            }
        },
        getters: {

        },
    }
}
