// Whole-script mode syntax
// added ECMA script 5

'use strict'
//variable
//let (add in ES6)

let name = 'dean';
console.log(name);
name = 'hello';
console.log(name);

//var는 사용하지말고 let을 쓰지마 (LET mutable data type)
//var hoising (move declaration from bottom to top)
//has no block scope


//constants
//값은 선언과 동시에
//favor immutable data type always for a few reasons"
//-- security
//-- thread safety
//-- reduce human mistakes 

// 4.variable types
// primitive, single item : number,string,null, undifiedn,symbol
// Object,box container
//funtion, first-class function

//number - speicla numberic values : infinity,-infinity,NaN
const infinity = 1/0;
const negativeInfinity = -1 /0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//javscript number는  //over (-2**53~ 2**53)
//bitInt (faily new, don't use it yet)
const bitInt = 123456789012345678901234567890n;
console.log(`value: ${bitInt}, type ${typeof bitInt}`);
Number.MAX_SAFE_INTEGER;



//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+ brendan;
console.log(`vlaue: ${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`vlue : ${helloBob}, type : ${typeof helloBob}`);

