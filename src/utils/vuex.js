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
    let data = state.data;
    let paths = payload.id.split("-").slice(1);

    paths.forEach(path => {
        data = data.slots.find(s => s.key === path);
    });

    Vue.set(data, payload.key, payload.value)

    state.counter++
}

export const addSlot = (state, payload) => {
    let data = state.data;
    let paths = payload.id.split("-").slice(1);

    paths.forEach(path => {
        data = data.slots.find(s => s.key === path);
    });

    data = data.slots;

    Vue.set(data, data.length, payload.value)

    state.counter++
}

export const removeSlot = (state, payload) => {
    let data = state.data;
    let paths = payload.id.split("-").slice(1);

    const lastNodeKey = paths.pop(); // remove the last id and use the parent of the target node

    paths.forEach(path => {
        data = data.slots.find(s => s.key === path);
    });

    data = data.slots;

    const index = data.findIndex(s => s.key === lastNodeKey);

    if (index > -1) {
        data.splice(index, 1);
        state.counter++
    }
}

export const moveSlot = (state, payload) => {
    let data = state.data;
    let paths = payload.id.split("-").slice(1);

    paths.pop(); // remove the last id and use the parent of the target node

    paths.forEach(path => {
        data = data.slots.find(s => s.key === path);
    });

    data = data.slots;

    const dragIndex = data.findIndex(s => s.key === payload.dragged.key);
    const dropIndex = data.findIndex(s => s.key === payload.dropped.key);

    if (dragIndex > -1 && dropIndex > -1) {
        data.splice(dragIndex, 1);
        data.splice(dropIndex, 0, payload.dragged);
        state.counter++
    }
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
        },
    }
}
