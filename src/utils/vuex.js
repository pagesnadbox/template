import Vue from 'vue'

export const set = (property, preState) => {
    return (state, payload) => {
        if (preState) {
            Vue.set(preState, property, payload)
        } else {
            Vue.set(state, property, payload)
        }
    }
}

export const toggle = property => state => (state[property] = !state[property])

export const setProp = (state, payload) => {
    state.data[payload.id] = {
        ...state.data[payload.id],
        [payload.key]: payload.value
    }
}

export const getDefaultModule = () => {
    return {
        mutations: {
            SET_DATA: set("data"),
            SET_PROP: setProp,
        },
        actions: {
            setData({ commit }, payload) {
                commit('SET_DATA', payload)
            },
            setProp({ commit }, payload) {
                commit('SET_PROP', payload)
            },
        },
        getters: {
            getComponent: (state) => (id) => {
                return state.data[id] || {}
            }
        },
    }
}
