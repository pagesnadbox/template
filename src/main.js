import "./publicPath";
import Engine from "./Engine";
import Adapter from "./Adapter";
import Vue from "vue";

const engine = new Engine();
const adapter = new Adapter().init();

adapter.on("message", (event) => {
    engine[event.message](event.data)
})

engine.on("message", (event) => {
    adapter.postMessage(event)
})

Vue.config.performance = true

window.API = window.API || {};
window.API.Engine = Engine;

