let valor1=3;
let valor2="3";
let valor3=3;

if(valor1==valor2 && valor2==valor3){ //o operador && é utilizado para verificar se todas as condições são verdadeiras
    console.log('os valores são iguais\n resultado');
}else if(valor1==valor2 || valor2==valor3){// o operador || é utilizado para verificar se pelo menos uma das condições é verdadeira
    console.log('alguns valores são iguais\nresultado');
}