import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}
// let howdy: JavaScriptGreeter = new JavaScriptGreeter("howdy");

// console.log(howdy.greet("Milo"));

export { JavaScriptGreeter };
