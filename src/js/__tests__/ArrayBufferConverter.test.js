import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

test("method toString", () => {
    const expectings = "{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}";
    const conv = new ArrayBufferConverter();
    conv.load(getBuffer());
    const result = conv.toString();
    expect(result).toBe(expectings);
});

test("throw Error", () => {
    const expectings = new Error("Данные в буффер не загружены");
    const convLoaded = new ArrayBufferConverter();
    const toString = () => {
        convLoaded.toString();
    };
    expect(toString).toThrow(expectings);
});
