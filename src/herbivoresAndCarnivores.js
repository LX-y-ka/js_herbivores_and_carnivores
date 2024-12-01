'use strict';

class Animal {
  // write your code here
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (!(herbivore instanceof Herbivore)) {
      return;
    }

    if (herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
