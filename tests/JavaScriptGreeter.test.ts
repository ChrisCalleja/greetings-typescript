import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter Class", () => {
  test("the greeting property is set by the constructor", () => {
    const greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the greet method returns the appropriate string", () => {
    const greeter = new JavaScriptGreeter("Hi");
    expect(greeter.greet("Meagan")).toBe("console.log('Hi, Meagan')");
  });
});
