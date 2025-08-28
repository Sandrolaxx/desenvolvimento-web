function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

function calcularAreaQuadrado(lado) {
    return lado * lado;
}

console.log(calcularAreaRetangulo(5, 10)); // 50
console.log(calcularAreaQuadrado(4)); // 16

const funcVariavel = () => {
    console.log("Função armazenada em variável");
};

funcVariavel();
