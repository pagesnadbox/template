import "./publicPath";
import Engine from "./Engine";
import Vue from "vue";

// new Engine();
Vue.config.performance = true

window.API = window.API || {};
window.API.Engine = Engine;

