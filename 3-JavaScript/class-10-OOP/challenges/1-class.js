// crie uma classe "Animal" com as características raça(race) e nome(name), depois crie uma classe "Dog" que herde os atributos da classe pai "Animal" e tenha o método "action". Passe os valores via argumento quando criar o objeto.

class Animal {
    constructor(race, name) {
      this.race = race;
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(race, name) {
      super(race, name);
    }
  
    action() {
      return `${this.name} está latindo!`;
    }
  }
  
let myDog = new Dog("Labrador", "Astra");

console.log("Raça:", myDog.race);
console.log("Nome:", myDog.name);

console.log(myDog.action());
