import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("the greeting property is set by the constructor", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the tagName property is set by the constructor", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello", "div");
    expect(greeter.tagName).toBe("div");
  });
  test("the tagName property has a default value of h1", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greeter.tagName).toBe("h1");
  });
  test("the greet method returns an appropriate string", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greeter.greet("Mitch")).toBe("<h1>Hello, Mitch</h1>");
  });
});
