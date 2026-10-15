let texto_digitado=prompt("Digite um texto");
let confirmacao=confirm("Você deseja ver o texto digitado");
/*
if(confirmacao==true){
alert('O texto digitado foi: ${texto_digitado}');
}else{
    alert("Você não quis ver o texto digitado.");
}
//usar quando quizer trabalhar com numeros.
// number é usado quando queremos converter o valor digitdo em número, caso seja necessário.
switch(idade){
  
    case 18:
        alert("Você tem 18 anos.");
        break;
        case 19:
            alert("Você tem 19 anos.");
            break;

}
            */
           while(idade<18){
            alert("Você é menor de idade.");
            idade++;
            //idade=idade+1
           }
           alert("Você é maior de idade.");
//let i
           for(let i=0;i<10;i++){
            alert('Contagem: ${i}')

           }