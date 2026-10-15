let verdadeiro = true; // true = verdadeiro
let falso = false; //false= falso
let decimal = 3.13;
let indeiro = 10
let texto = 'ola';

//console.log(typeof verdadeiro);

if (texto == 'ola') {
    console.log(texto);
} else {
    console.log("texto diferente");
}

let opcao = Number(prompt('selecione uma opção de 1 - 3:'));
switch (opcao) {
    case 1:
        console.log('opção 1');
        break;
    case 2:
        console.log('opção 2');
        break;
    case 3:
        console.log('opção 3');
        break;
    default:
        console.log('opção invalida')
}