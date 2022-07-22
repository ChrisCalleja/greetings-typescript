import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the greet function correctly works", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greet("Chris")).toBe("Hello, Chris");
  });
  test("the greet function correctly works", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greet("Emily")).toBe("Hello, Emily");
  });
});
