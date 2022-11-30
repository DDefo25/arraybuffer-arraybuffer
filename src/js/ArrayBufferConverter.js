import getBuffer from "./getBuffer";

export default class ArrayBufferConverter {
    constructor() {
        this.buffer = undefined;
    }

    load(buffer) {
        this.buffer = new Uint16Array(buffer);
    }

    toString() {
        if (this.buffer === undefined) {
            throw new Error("Данные в буффер не загружены");
        }
        return String.fromCharCode(...this.buffer);
    }
}
