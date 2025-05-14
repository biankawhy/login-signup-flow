///Le password matchano
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
//////Hashing password
const argon2 = require('argon2');

async function hashPassword() {
  const password = 'mia_password_sicura';

  try {
    // Genera hash
    const hash = await argon2.hash(password);
    console.log('Hash generato:', hash);

    // Verifica la password
    const match = await argon2.verify(hash, password);

    if (match) {
      console.log('Password corretta!');
    } else {
      console.log('Password errata!');
    }

  } catch (err) {
    console.error('Errore:', err);
  }
}





