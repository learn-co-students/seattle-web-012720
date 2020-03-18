// const mario = {
//   name: "Mario",
//   moves: [],
//   vocalRange: 2,
//   instrument: "trumpet"
// };

// function Character(name, range, instrument) { //use key value pairs tomorrow (note to John)
//   this.name = name;
//   this.moves = [];
//   this.vocalRange = range;
//   this.instrument = instrument;
// }

// Character.prototype.sayHello = function(greeting) {
//   return `${greeting}, ${this.name}`
// }

class Character {
  constructor(name, range, instrument) {
    this.name = name;
    this.vocalRange = range;
    this.instrument = instrument;
    Character.allCharacters.push(this)
  }
  static allCharacters = [];

  static getCharacters() {
    return Character.allCharacters;
  }

  getName = function() {
    return this.name
  }

  moves = [];
  sayHello = function() {
    return `It's a me ${this.name}`
  }
  reportMoves = function() {
    return this.moves.length;
  }
  addMove = function(move) {
    if (!this.moves.includes(move)) {
      this.moves.push(move)
    }
  }
}

//4 Pillars Of OO
//Encapsulation: Keep everything in objects
//Abstraction: Use those encapsulated methods
//Inheritance: Use base classes with generic behavior to help define subclasses, with specific behaviors
  //Abstract non-instantiable base class
//Polymorphism: Objects can be treated as if they are many different types, based on context

class BadCharacter extends Character {
  constructor(name, range, instrument) {
    super(name, 1, instrument);
    this.addMove("evil laugh");
    BadCharacter.baddies.push(this)
  }

  static getCharacters = function() {
    return BadCharacter.baddies;
  }
  static baddies = [];
  isGood = false;
  sayHello = function() {
    return `heh heh heh, I'm the evil ${this.name}`
  }
}

class GoodCharacter extends Character {
  save() {
    GoodCharacter.allGoodies.push(this)
  }
  isGood = true;
  beGood = function() {
    return "I am a good character"
  }
  static allGoodies = [];
  static getGoodCharacters() {
    // return Character.getCharacters().filter(charcter => charcter.isGood)
    return GoodCharacter.allGoodies;
  }
}

const mario = new GoodCharacter("Mario", 2, "trumpet");
const kirby = new GoodCharacter("Kirby", 4, "harpsichord");
const waluigi = new BadCharacter("Waluigi", 234, "drums")
console.log(new GoodCharacter("Mega Man", 2, "guitar"));

document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("characters");
  // Character.getCharacters().forEach(character => {
  //   const newListItem = document.createElement("li");
  //   newListItem.textContent = character.getName();
  //   list.appendChild(newListItem)
  // })
    GoodCharacter.getGoodCharacters().forEach(character => {
      const newListItem = document.createElement("li");
      newListItem.textContent = character.getName();
      list.appendChild(newListItem);
    });

})
