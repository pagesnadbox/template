import Vue from 'vue'
import EventEmitter from 'eventemitter3';

import App from './App.vue'
import { Store } from './store'
import vuetify from './plugins/vuetify';

import { EventBus, events } from "./utils/eventBus";
import ImagesService from "./services/ImagesService"

import './plugins'

Vue.config.productionTip = false

let store

class API extends EventEmitter {

    static get events() {
        return events;
    }

    get store() {
        return store
    }

    async init({ imageService, config = {}, plugins = [], preventMount = false } = {}) {
        store = Store({ modules: config, plugins })

        Vue.prototype.$action = (action, value) => EventBus.$emit(events.SETTINGS_ACTION, { key: action, value });
        Vue.prototype.$imageService = imageService || ImagesService.getInstance();;

        this.app = new Vue({
            vuetify,
            store,
            render: h => h(App),
        })

        if (!preventMount) {
            this.app.$mount('#app');
        }

        this._attachEvents();
    }

    setConfig(config = {}) {
        store.dispatch(`config/setData`, config.app);
    }

    replaceConfig(state) {
        store.replaceState({
            ...state,
            settings: store.state.settings
        })
    }

    action(payload) {
        store.dispatch(payload.key, payload.value);
    }

    _attachEvents() {
        Object.keys(API.events).forEach(key => {
            EventBus.$on(API.events[key], (data) => this.emit(API.events[key], data));
        });
    }
}

export default API;
