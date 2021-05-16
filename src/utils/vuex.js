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
    Vue.set(state.data, payload.key, payload.value)
}

export const addSlot = (state, payload) => {
    const id = payload.id
    const parentId = payload.parentId

    state.data[id] = payload;
    state.data[parentId].slots.push(id)
}

export const removeSlot = (state, payload) => {
    const id = payload.id
    const parentId = payload.parentId
    const parent = state.data[parentId];

    const slotIndex = parent.slots.indexOf(id)

    if (slotIndex > -1) {
        parent.slots.splice(slotIndex, 1)
    }
    delete state.data[id]
}

export const moveSlot = (state, payload) => {
  const id = payload.item.id;
  const to = state.data[payload.to];

  if (!payload.copy) {
    const parentId = payload.item.parentId
    const parent = state.data[parentId];
    const slotIndex = parent.slots.indexOf(id)

    if (slotIndex > -1) {
      parent.slots.splice(slotIndex, 1)
    }
  }

  to.slots.push(id)
}

export const getDefaultModule = () => {
    return {
        mutations: {
            SET_DATA: set("data"),
            SET_PROP: setProp,
            ADD_SLOT: addSlot,
            REMOVE_SLOT: removeSlot,
            MOVE_SLOT: moveSlot,
        },
        actions: {
            setData({ commit }, payload) {
                commit('SET_DATA', payload)
            },
            setProp({ commit }, payload) {
                commit('SET_PROP', payload)
            },
            addSlot({ commit }, payload) {
                commit('ADD_SLOT', payload)
            },
            removeSlot({ commit }, payload) {
                commit('REMOVE_SLOT', payload)
            },
            moveSlot({ commit }, payload) {
                commit('MOVE_SLOT', payload)
            },
        },
        getters: {
            getComponent: (state) => (id) => {
                return state.data[id] || {}
            }
        },
    }
}
