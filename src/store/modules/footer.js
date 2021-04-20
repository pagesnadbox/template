import { getDefaultModule } from '@/utils/vuex'

const defaultModule = getDefaultModule()

const stateFn = (options) => ({
    data: options.footer,
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
        },
    }
}
