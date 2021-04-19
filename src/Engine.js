import Vue from 'vue'
import App from './App.vue'
import { Store } from './store'
import vuetify from './plugins/vuetify';

import { EventBus, events } from "./utils/eventBus";
import EventEmitter from 'eventemitter3';

import './plugins'

Vue.config.productionTip = false

let store

class API extends EventEmitter {

    static get events() {
        return events;
    }

    async init({ config = {}, plugins = {}, preventMount = false } = {}) {
        store = Store({ modules: config, plugins })

        Vue.prototype.$action = (action, value) => EventBus.$emit(events.SETTINGS_ACTION, { key: action, value });

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

    setConfig(config) {
        [
            "app",
            "hero",
            "themeFeatures",
            "features",
            "affiliates",
            "social",
            "footer"
        ].forEach((key) => {
            store.dispatch(`${key}/setData`, config[key]);
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
