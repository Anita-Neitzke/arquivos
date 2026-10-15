
let nome = document.getElementById("nome");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");

let visualizar = document.getElementById("visualizar");
let publicar = document.getElementById("publicar");

let previewAssunto = document.getElementById("previewAssunto");
let previewMensagem = document.getElementById("previewMensagem");
let previewAutor = document.getElementById("previewAutor");

let recados = document.getElementById("recados");
let erro = document.getElementById("erro");

function visualizarRecado() {
    let nomeValor = nome.value.trim();
    let assuntoValor = assunto.value.trim();
    let mensagemValor = mensagem.value.trim();

    if (
        nomeValor === "" ||
        assuntoValor === "" ||
        mensagemValor === ""
    ) {
        erro.innerText = "Preencha todos os campos para visualizar o recado.";
        return;
    }

    erro.innerText = "";

    previewAssunto.innerText = assuntoValor;
    previewMensagem.innerText = mensagemValor;
    previewAutor.innerText = "Autor: " + nomeValor;
}
function publicarRecado() {
    let nomeValor = nome.value.trim();
    let assuntoValor = assunto.value.trim();
    let mensagemValor = mensagem.value.trim();

    if (
        nomeValor === "" ||
        assuntoValor === "" ||
        mensagemValor === ""
    ) {
        erro.innerText = "Preencha todos os campos antes de publicar.";
        return;
    }

    erro.innerText = "";

    let novoRecado = document.createElement("div");
    novoRecado.classList.add("recado");

    let novoAssunto = document.createElement("h3");
    novoAssunto.innerText = assuntoValor;

    let novaMensagem = document.createElement("p");
    novaMensagem.classList.add("mensagem");
    novaMensagem.innerText = mensagemValor;

    let novoAutor = document.createElement("p");
    novoAutor.classList.add("autor");
    novoAutor.innerText = "Publicado por: " + nomeValor;

    novoRecado.appendChild(novoAssunto);
    novoRecado.appendChild(novaMensagem);
    novoRecado.appendChild(novoAutor);

    recados.appendChild(novoRecado);

    nome.value = "";
    assunto.value = "";
    mensagem.value = "";

    previewAssunto.innerText = "Assunto";
    previewMensagem.innerText = "Sua mensagem aparecerá aqui.";
    previewAutor.innerText = "Autor";
}
visualizar.addEventListener("click", visualizarRecado);
publicar.addEventListener("click", publicarRecado);