const fruits = ["🍌", "🍎", "🍇", "🍓"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
}

if("2" == 2) {
    console.log("São iguais 1");
}

if("2" === 2) {
    console.log("São iguais 2");
}