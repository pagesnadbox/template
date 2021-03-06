import { getDefaultModule } from '@/utils/vuex'

const defaultModule = getDefaultModule()

const stateFn = (options) => ({
    data: options.config,
    counter: 0
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
        },
    }
}
