class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}
const cat = new Cat("Whiskers", "female");
const dog = new Dog("Rover", "male");
const bird = new Bird("Polly", "male");

console.log(cat.speak()); // Whiskers says meow!
console.log(dog.speak()); // Rover says woof!
console.log(bird.speak()); // It's me! Polly, the parrot!
