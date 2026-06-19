//Solicita um numero e conta de 1 em 1 até chegar no numero recebido
//(Lembre-se de instalar o prompt-sync(npm install prompt-sync))

prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Insira o numero inteiro ou positivo: "));

let contador = 1;
while (contador <= num1) {
  console.log("Contagem: ", contador);
  contador++;
}
console.log("FIM");
