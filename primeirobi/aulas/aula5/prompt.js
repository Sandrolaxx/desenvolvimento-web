const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Insira o valor do pedido?`, valor1 => {
    rl.question(`Insira o valor percentual gorjeta?`, valor2 => {
        console.log(`O valor total é: 
                ${Number(valor1) + (Number(valor1) * (Number(valor2) / 100))}`);
        rl.close();
    });
});