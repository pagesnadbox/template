import EventEmitter from "eventemitter3";

const builderOrigin = window.com.template.cfg.builderOrigin
    .replace("{host}", window.location.hostname)
    .replace("{protocol}", window.location.protocol)
    .replace("{port}", window.location.port ? `:${window.location.port}` : "")

export default class Adapter extends EventEmitter {
    init() {
        window.addEventListener("message", this.onMessage.bind(this))

        return this;
    }

    onMessage(event) {
        if (!event.origin.startsWith(builderOrigin)) {
            return;
        }

        if (event.data.message) {
            this.emit("message", event.data)
        }
    }

    postMessage(data) {
        window.parent.postMessage(data, '*');
    }
}