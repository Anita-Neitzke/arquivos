let nota = 8;
let ano = "primeiro ano";

if (nota >= 7) {
    console.log("Você foi aprovado.");

    if (ano == "primeiro ano") {
        console.log("Você foi aprovado para o segundo ano.");
    } else if (ano == "segundo ano") {
        console.log("Você foi aprovado para o terceiro ano.");
    } else if (ano == "terceiro ano") {
        console.log("Você se formou.");
    }

} else if (nota >= 5 && nota < 7) {
    console.log("Você está de recuperação.");

} else {
    console.log("Você foi reprovado.");
}