class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack;
    switch (this.type) {
      case 'mago':
        attack = 'usou magia';
        break;
      case 'guerreiro':
        attack = 'usou carabina';
        break;
      case 'monge':
        attack = 'usou espada';
        break;
      case 'ninja':
        attack = 'usou sandah';
        break;
      default:
        attack = 'não possui ataque definido';
    }
    console.log(`O ${this.type} atacou usando ${attack}.`);
  }
}

module.exports = Hero;