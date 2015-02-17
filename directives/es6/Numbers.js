var octal = 0o71;
console.log(octal);

var binnum = 0b11001;
console.log(binnum);

console.log(Number.parseInt("3"));

console.log(Number.parseFloat("3.45"));

console.log(Number.isFinite("3.45")); //false doesn't take string

console.log(Number.isFinite(3.45)); //true

console.log(Number.isNaN("NaN")) //false doesn't take string

console.log(Number.isNaN(NaN)) //true 

console.log(Number.isInteger(1)) //true 

console.log(Number.isInteger(1.0)) //true 

console.log(Number.isInteger(1.0213)) //false 

console.log(Number.MAX_SAFE_INTEGER) //9007199254740991 (one less than maximum number) Math.pow(2,53)

console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991 (one more than min number)

console.log(Math.pow(2,53))

console.log(Number.isSafeInteger(9007199254740991)) //true
console.log(Number.isSafeInteger(9007199254740992)) //false