const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularRank(heroName, heroXP) {
  let heroLevel;
  if (heroXP < 1000) {
    heroLevel = 'Ferro';
  } else if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = 'Bronze';
  } else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = 'Prata';
  } else if (heroXP >= 5001 && heroXP <= 7000) {
    heroLevel = 'Ouro';
  } else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = 'Platina';
  } else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = 'Ascendente';
  } else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = 'Imortal';
  } else if (heroXP >= 10001) {
    heroLevel = 'Radiante';
  }
  return heroLevel;
}

rl.question("Digite o nome do herói: ", (heroName) => {
  rl.question("Digite a quantidade de XP deste herói: ", (heroXP) => {
    const heroLevel = calcularRank(heroName, parseFloat(heroXP));
    console.log(`O Herói de nome **${heroName}** está no nível de **${heroLevel}**.`);
    rl.close();
  });
});