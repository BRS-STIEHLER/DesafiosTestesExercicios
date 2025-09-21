const Hero = require('./hero');

const mago = new Hero('Gandalf', 1000, 'mago');
const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
const monge = new Hero('Shaolin', 45, 'monge');
const ninja = new Hero('Naruto', 16, 'ninja');

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();