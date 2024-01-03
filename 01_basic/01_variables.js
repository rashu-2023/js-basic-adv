const accountId = 144553
let accountEmail = "abc@example.com"
var accountPassword = "12345" // not used much now. because it has issue of scope. forget var is something. use only let

/*
Prefer not to use var, because of issue of block scope and functional scope.
*/
accountCity = "Banglore" // this is a bad way to do this but yes possible.

let accountState;

// accountId = 5
accountEmail = "abcabc"
accountPassword = "234534636"
accountCity = "Jaipur"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])