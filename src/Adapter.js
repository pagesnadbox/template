import EventEmitter from "eventemitter3";

export default class Adapter extends EventEmitter {
    init() {
        window.addEventListener("message", this.onMessage.bind(this))

        return this;
    }

    onMessage(event) {
        if (event.origin !== window.location.origin) {
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