const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
  rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
    let resultado = calcularRank(parseFloat(vitorias), parseFloat(derrotas));
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
    rl.close();
  });
});

function calcularRank(vitorias, derrotas) {
  // Calcular o saldo de vitórias
  let saldoVitorias = vitorias - derrotas;
  
  // Determinar o nível do jogador
  let nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  
  // Retornar o resultado
  return {
    saldoVitorias: saldoVitorias,
    nivel: nivel
  };
}
