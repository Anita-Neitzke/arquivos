function executarSistemaEventos() {

    let cidade = prompt("Digite o nome da cidade:", "Santa Cruz do Sul");

    let participantesInput = prompt(
        "Digite o número de participantes:",
        "100"
    );

    let participantes = Number(participantesInput);

    let precoIngressoInput = prompt(
        "Digite o preço do ingresso:",
        "30"
    );

    let precoIngresso = Number(precoIngressoInput);

    let conceitoEvento = prompt(
        "Digite o conceito do evento:\nA - Excelente\nB - Bom\nC - Regular",
        "A"
    );

    let eventos = prompt(
        "Digite qual festa: \nA - Festival de Música,\nB - Feira Gastronômica,\nC - Festa Municipal"
    );

    let totalEventos = eventos.length;

    let textoRelatorio = `Cidade: ${cidade}\n`;
    textoRelatorio += `Participantes: ${participantes}\n`;
    textoRelatorio += `Preço do Ingresso: R$ ${precoIngresso.toFixed(2)}\n`;
    textoRelatorio += `Total de Eventos: ${totalEventos}\n\n`;

    let statusParticipacao = (participantes <= 200)
        ? "Público Adequado"
        : "Grande Público";

    textoRelatorio += `Status: ${statusParticipacao}\n\n`;

    textoRelatorio += `Eventos da Cidade\n`;

    for (let i = 0; i < eventos.length; i++) {

        let conceitoTexto;

        switch (conceitoEvento) {
            case "A":
                conceitoTexto = "Excelente";
                break;

            case "B":
                conceitoTexto = "Bom";
                break;

            case "C":
                conceitoTexto = "Regular";
                break;

            default:
                conceitoTexto = "Insatisfatório";
        }

        let mensagemStatus;

        if (participantes > 500) {
            mensagemStatus = "Evento de Grande Porte";
        } else if (participantes >= 100) {
            mensagemStatus = "Evento Confirmado";
        } else if (participantes >= 50) {
            mensagemStatus = "Evento em Preparação";
        } else {
            mensagemStatus = "Evento de Pequeno Porte";
        }

        textoRelatorio +=
            `* ${eventos[i]} -> ` +
            `Avaliação: ${conceitoTexto} | ` +
            `Situação: ${mensagemStatus}\n`;
    }

    textoRelatorio += `\nHistórico de Eventos\n`;

    let historicoEventos = [
        ["Festival de Música", 25.0, 30.0],
        ["Feira Gastronômica", 35.0, 40.0],
        ["Festa Municipal", 20.0, 25.0]
    ];

    for (let linha = 0; linha < historicoEventos.length; linha++) {

        let eventoNome = historicoEventos[linha][0];
        let ingresso1 = historicoEventos[linha][1];
        let ingresso2 = historicoEventos[linha][2];

        textoRelatorio +=
            `* ${eventoNome} ` +
            `Ingresso 1: R$ ${ingresso1.toFixed(2)} | ` +
            `Ingresso 2: R$ ${ingresso2.toFixed(2)}\n`;
    }

    alert(textoRelatorio);
}

executarSistemaEventos();