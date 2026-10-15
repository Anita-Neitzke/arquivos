
let usuario = "gabriel"
let tipoUsuario = 2;
let ativo = true;
let tentativas = 1;



switch (tipoUsuario) {
  case 1:
    tipoUsuario = "Administrador";
    break;
  case 2:
    tipoUsuario = "Professor";
    break;
  case 3:
    tipoUsuario = "Aluno";
    break;
  default:
    tipoUsuario = "Tipo de usuário inválido";
}

if (ativo == false) {
  situacao = "Usuário bloqueado";
} else if (tentativas > 3) {
  situacao = "Quantidade máxima de tentativas atingidas";
} else{
  situacao = "Aceso permitido";
}

console.log(`Usuário: ${usuario}`);
console.log(`Tipo: ${tipoUsuario}`);
console.log(`Ativo: ${ativo}`);
console.log(`Tentativas: ${tentativas}`);
console.log(`Situação: ${situacao}`);