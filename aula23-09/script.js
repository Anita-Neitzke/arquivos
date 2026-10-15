//seleciolar o botão
let botaoAtualizar = document.querySelector("#atualizar");
//pegamos o botãp e armazenamos na vareavel botaoAtualizar

//criar um evento quando o botão for pressionado
botaoAtualizar.addEventListener("click", atualizarPerfil)
//o botão vai ficar esperando um click e quando houver um click chama a função atualizarPerfil

function atualizarPerfil(){
    let campoNome=document.querySelector("#nome");
    let campoProfissao=document.querySelector("#profissão");
    let campoCidade=document.querySelector("#cidade");
    let campoDescrcao=document.querySelector("#descrição");
    //localizando os campos do formulario e armazenado ele nas variaveis

    let nomePerfil=document.querySelector("#nomePerfil");
    let profissaoPerfil=document.querySelector("#profissãoPerfil");
    let cidadePerfil=document.querySelector("#cidadePerfil");
    let descricaoPerfil=document.querySelector("#descricaoPerfil");

    if(campoNome.value==""){
        nomePerfil.innerText="informe um nome";
    }else{
        nomePerfil.innerText=campoNome.value;
    }
    profissaoPerfil.innerText=campoProfissao.value;
    cidadePerfil.innerText=campoCidade.value;
    descricaoPerfil.innerText=campoDescrcao.value;
}