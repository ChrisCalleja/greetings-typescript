class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greet(name: string) {
    return `${this.greeting}, ${name}`;
  }
}
// let hello: Greeter = new Greeter("hello");
// let whatsup: Greeter = new Greeter("whats up");
// console.log(hello.greet("James"));
// console.log(hello.greet("Chris"));
// console.log(whatsup.greet("Chris"));

export { Greeter };
