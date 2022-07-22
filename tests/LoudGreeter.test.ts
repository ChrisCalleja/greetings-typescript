import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("the greeting property is set by the constructor", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("calling the greet method without addVolume", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greet("Mitch")).toBe("Hello, Mitch!!");
  });
  test("calling the greet method after calling addVolume once", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    expect(greeter.greet("Mitch")).toBe("Hello, Mitch!!!");
  });
  test("calling the greet method after calling addVolume once", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Mitch")).toBe("Hello, Mitch!!!!!");
  });
});
