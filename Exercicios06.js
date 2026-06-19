//Mostra uma regressiva de 1 em 1 apartir de 30 até 0 e mostra os numeros na sequencia divisiveis por 4:
for (let i = 30; i >= 1; i--) {
  if (i % 4 === 0) {
    process.stdout.write(`[${i}] `);
  } else {
    process.stdout.write(`${i} `);
  }
}
