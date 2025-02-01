const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'ciao';
function hashingprova(){var test = bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
console.log(test)
})}


//REQUIRE IS NOT DEFINED