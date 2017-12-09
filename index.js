function generatePassword() {
  return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}

function checkPassword(password) {
  if(password == senhaGerada) {
    return true;
  } else {
    return false;
  }
}

function resetarSenha() {
  senhaGerada = generatePassword();
  return senhaGerada;
}

function quebrarSenha() {
  tentativas = [];
  senhaEncontrada = false;

  while(senhaEncontrada != true) {
    senhaTentada = generatePassword();
    while(tentativas.indexOf(senhaTentada) > -1) {
      senhaTentada = generatePassword();
    }

    senhaEncontrada = checkPassword(senhaTentada);  
    tentativas.push(senhaTentada);
  }

  return tentativas[tentativas.length-1];
}

var senhaGerada = generatePassword();
