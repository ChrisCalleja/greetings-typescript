import { Greeter } from "./Greeter";

class LoudGreeter extends Greeter {
  private extra: string = "!!";
  // constructor(greeting: string) {
  //   super(greeting);
  //   this.extra = extra;
  // }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
  addVolume(): void {
    this.extra += "!";
  }
}

export { LoudGreeter };
