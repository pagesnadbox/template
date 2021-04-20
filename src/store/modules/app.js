import { getDefaultModule } from '@/utils/vuex'
import { set, setProp } from '@/utils/vuex'
import Vue from 'vue'

const defaultModule = getDefaultModule()

const stateFn = (options) => ({
    data: options.app,
})

export default (options) => {
    const state = stateFn(options)
    return {
        namespaced: true,
        state,
        mutations: {
            ...defaultModule.mutations,
        },
        actions: {
            ...defaultModule.actions,
        },
        getters: {
            ...defaultModule.getters,
            itemsFormatted: (state, getters) => getters.items.filter((s) => !s.hidden),
            itemsFormattedKeyOnly: (state, getters) => getters.itemsFormatted.map((s) => s.key),
        },
    }
}
