let produto = "teclado";
let preco = 150;
let quantidade = 3;
let promocao = true;

let total = preco * quantidade;
let desconto = 0;


if (total >= 400 && promocao==true) {
    desconto = total * 0.15;
} else if (total >= 200 || promocao==true) {
    desconto = total * 0.10;
}

let valorFinal = total - desconto;

console.log(`produto ${produto} \n `);
console.log(`quantidade ${quantidade}`)
console.log(`valor sem desconto ${total}`)
console.log(`desconto ${desconto}`)
console.log(`valor final ${valorFinal}`)

