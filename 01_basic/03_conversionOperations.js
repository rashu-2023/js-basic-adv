let score = "33"

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

// inm javascript the string like "33ab" will also get converted to number as there is not strict checking here.

/*
"33" -> 33
"33ab" -> NaN
true -> 1; false -> 0
*/

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)