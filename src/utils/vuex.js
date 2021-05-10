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
        data = data.slots[path];
    });

    Vue.set(data, payload.key, payload.value)

    state.counter++
}

export const addSlot = (state, payload) => {
    let data = state.data;
    let paths = payload.id.split("-").slice(1);

    paths.forEach(path => {
        data = data.slots[path];
    });

    if (!data.slots) {
        Vue.set(data, "slots", {})
    }

    data = data.slots;

    Vue.set(data, payload.key, payload.value)

    state.counter++
}

export const removeSlot = (state, payload) => {
    let data = state.data;
    let paths = payload.id.split("-").slice(1);
    
    const lastNodeKey = paths.pop(); // remove the last id and use the parent of the target node

    paths.forEach(path => {
        data = data.slots[path];
    });

    data = data.slots;

    delete data[lastNodeKey]
    state.counter++
}

export const getDefaultModule = () => {
    return {
        mutations: {
            SET_DATA: set("data"),
            SET_PROP: setProp,
            ADD_SLOT: addSlot,
            REMOVE_SLOT: removeSlot,
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
        },
        getters: {
        },
    }
}
