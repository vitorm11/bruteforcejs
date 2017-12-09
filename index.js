function generatePassword() {
  return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}

function checkPassword(password) {
  if(password == generatedPassword) {
    return true;
  } else {
    return false;
  }
}

function resetPassword() {
  generatedPassword = generatePassword();
  return generatedPassword;
}

function breakPassword() {
  attempts = [];
  passwordFound = false;

  while(passwordFound != true) {
    attemptedPassword = generatePassword();
    while(attempts.indexOf(attemptedPassword) > -1) {
      attemptedPassword = generatePassword();
    }

    passwordFound = checkPassword(attemptedPassword);  
    attempts.push(attemptedPassword);
  }

  return attempts[attempts.length-1];
}

var generatedPassword = generatePassword();
