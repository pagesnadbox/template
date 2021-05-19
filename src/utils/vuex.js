import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid';

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

export const addSlot = (state, payload) => {
    const id = uuidv4();
    const parentId = payload.parentId

    Vue.set(state.data, id, { ...payload, id })
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

    if (payload.slots?.length) {
        payload.slots.forEach(s => {
            removeSlot(state, state.data[s])
        })
    }

    Vue.delete(state.data, id);
}

export const moveSlot = (state, payload) => {
    const id = payload.item.id;
    const to = state.data[payload.to];
    const parentId = payload.item.parentId

    if (!payload.copy) {
        const parent = state.data[parentId];
        const slotIndex = parent.slots.indexOf(id)

        if (slotIndex > -1) {
            parent.slots = parent.slots.filter(function (slotId) {
                return slotId !== id;
            });
        }
    }

    to.slots = [
        ...to.slots,
        id
    ]
    setProp(state, { id, key: "parentId", value: to.id })
}

export const changePosition = (state, payload) => {
    const id = payload.item.id;
    const to = payload.to;
    const parentId = payload.item.parentId;
    const parent = state.data[parentId];

    const toIndex = parent.slots.indexOf(to);
    const fromIndex = parent.slots.indexOf(id);

    const slots = [...parent.slots]

    if (fromIndex > -1 && toIndex > -1) {
        slots.splice(fromIndex, 1);
        slots.splice(toIndex, 0, id);
        parent.slots = [...slots]
    }
}

export const copy = (state, payload) => {
    let item = JSON.parse(JSON.stringify(state.data[payload.id]));
    let id = uuidv4();
    let slots = []

    if (item.slots.length) {
        slots = item.slots.map((s) => {
            const item = copy(state, { id: s, parentId: id })
            return item.id
        })
    }

    item = {
        ...item,
        id,
        parentId: payload.parentId,
        slots
    }

    Vue.set(state.data, id, item)

    return item
}

export const copySlot = (state, payload) => {
    const item = copy(state, payload)
    const parent = state.data[payload.parentId];
    const index = parent.slots.indexOf(payload.id);

    const slots = [...parent.slots]
    slots.splice(index, 0, item.id)
    parent.slots = [...slots]
}

export const getDefaultModule = () => {
    return {
        mutations: {
            SET_DATA: set("data"),
            SET_PROP: setProp,
            ADD_SLOT: addSlot,
            REMOVE_SLOT: removeSlot,
            MOVE_SLOT: moveSlot,
            COPY_SLOT: copySlot,
            CHANGE_POSITION: changePosition,
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
            changePosition({ commit }, payload) {
                commit('CHANGE_POSITION', payload)
            },
            copySlot({ commit }, payload) {
                commit('COPY_SLOT', payload)
            },
        },
        getters: {
            getComponent: (state) => (id) => {
                return state.data[id] || {}
            }
        },
    }
}
