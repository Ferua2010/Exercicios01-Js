// Verifica se a contagem será crescente ou decrescente.
// Se o valor inicial for menor que o final, soma o incremento.
// Caso contrário, subtrai o incremento até chegar ao valor final.
let inicio = 3;
let fim = 10;
let incremento = 2;

let resultado = "Contagem: ";

if (inicio < fim) {
  // Contagem crescente
  for (let i = inicio; i <= fim; i += incremento) {
    resultado += i + " ";
  }
} else {
  // Contagem decrescente
  for (let i = inicio; i >= fim; i -= incremento) {
    resultado += i + " ";
  }
}

console.log(resultado);
console.log("FIM");
