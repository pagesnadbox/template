import EventEmitter from "eventemitter3";

const builderOrigin = window.com.template.cfg.builderOrigin;
export default class Adapter extends EventEmitter {
    init() {
        window.addEventListener("message", this.onMessage.bind(this))

        return this;
    }

    onMessage(event) {
        if (event.origin !== builderOrigin) {
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