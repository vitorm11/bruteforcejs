function gerarSenha() {
  return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}

function verificarSenha(senhaInformada) {
  if(senhaInformada == senhaGerada) {
    return true;
  } else {
    return false;
  }
}

function resetarSenha() {
  senhaGerada = gerarSenha();
  return senhaGerada;
}

function quebrarSenha() {
  tentativas = [];
  senhaEncontrada = false;

  while(senhaEncontrada != true) {
    senhaTentada = gerarSenha();
    while(tentativas.indexOf(senhaTentada) > -1) {
      senhaTentada = gerarSenha();
    }

    senhaEncontrada = verificarSenha(senhaTentada);  
    tentativas.push(senhaTentada);
  }

  return tentativas[tentativas.length-1];
}

var senhaGerada = gerarSenha();
