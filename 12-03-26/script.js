// console.log(0.1 + 0.2 == 0.3)
// console.log(0.1 + 0.2 !== 0.3)
// console.log("b" + "a" + + "a" + "a")
// var a = 2
// if (a = 0) {
//     console.log("Hello World")
// }
// else {
//     console.log("not hello")
// }
// if (a) {
//     console.log("Hello World")
// }
// else {
//     console.log("not hello")
// }
// if (true + false) {
//     console.log("True")
// }
// else {
//     console.log("False")
// }
// console.log(1 / 0)
// console.log(-1 / 0)
// var a = 0;
// var b = 10;
// console.log(a && b)
// console.log(a || b)
// console.log(a ?? b)
// var a = null
// var a
// var b = 10
// console.log(a ?? b)
// var a = 5
// var b = 7
// console.log(a & b)
// console.log(a | b)
// console.log(a ^ b)
// console.log(~a) {Here the negation converts it to 32 bit and the formula is n=-(n+1)}
// if(true){
//     console.log("hello")
// }
// var num = 4
// if (num % 2 == 0) {
//     console.log(num + " is a even number")
// }
// else {
//     console.log(num + "is a odd number")
// }

// var a = 7
// var b = 6
// var c = 12
// if (a > b) {
//     if (a > c) {
//         console.log(`${a} is the biggest of three numbers`)
//     }
//     else {
//         console.log(`${c} is the biggest of three numbers`)
//     }
// }
// else {
//     if (b > c) {
//         console.log(`${b} is the biggest of three numbers`)
//     }
//     else {
//         console.log(`${c} is the biggest of three numbers`)
//     }
// }
// var day = 0
// if (day == 0)
//     console.log("Sunday")
// else if (day == 1)
//     console.log("Monday")
// else if (day == 2)
//     console.log("Tuesday")
// else if (day == 3)
//     console.log("Wednesday")
// else if (day == 4)
//     console.log("Thursday")
// else if (day == 5)
//     console.log("Friday")
// else if (day == 6)
//     console.log("Saturday")
// else {
//     console.log("Only 0 to 6 entries are allowed")
// }
// var day = 0
// switch (day) {
//     case 0: console.log("Sunday")
//         break;
//     case 1: console.log("Monday")
//         break;
//     case 2: console.log("Tuesday")
//         break;
//     case 3: console.log("Wednesday")
//         break;
//     case 4: console.log("Thursday")
//         break;
//     case 5: console.log("Friday")
//         break;
//     case 6: console.log("Saturday")
//         break;
//     default: console.log("Mr / Ms intelligent only 0 to 6 entries are allowed")
// }
// var day = "0"
// switch (day) {
//     case 0: console.log("Sunday")
//         break;
//     case 1: console.log("Monday")
//         break;
//     case 2: console.log("Tuesday")
//         break;
//     case 3: console.log("Wednesday")
//         break;
//     case 4: console.log("Thursday")
//         break;
//     case 5: console.log("Friday")
//         break;
//     case 6: console.log("Saturday")
//         break;
//     default: console.log("Mr / Ms intelligent only 0 to 6 entries are allowed")
// }
// if (" ") {
//     console.log("A")
// }
// else {
//     console.log("B")
// }
// if (0) { #Empty string value
//     console.log("A")
// }
// else if ("0") {
//     console.log("B")
// }
// else
//     console.log("C")
// console.log(true===true) #true
// console.log(true==true) #true
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(NaN != NaN)
// console.log(NaN == NaN)
// console.log(!!"hello")
// console.log(!!"")
// console.log(!!0)
// console.log({} == {}) #false
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// for (let i = 0, j = 10; i <= 10; i++, j--) {
//     console.log(`${i} ${j}`)
// }
// let i = 0, j = 10
// for (; ;) {
//     console.log(`${i} ${j}`)
//     i++, j--
//     if (i > 5) break
// }
// for (let i = 0; i <= 10; i++) {
// if (i % 2 == 0) {
//     console.log(i)
// }
// (or) console.log(i % 2 == 0 && i)
// }
// for (let i = 1900; i <= 2000; i++) {
//     if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
//         console.log(i + "is a leap year")
//     }
// }
// var num = 7
// isPrime = true
// for (let i = 2; i < num; i++)
//     if (num % i == 0) {
//         isPrime = false
//         break
//     }
// if (isPrime && num > 1)
//     console.log("Prime number")
// else
//     console.log("Not a prime number")
// var num = 999
// isPrime = true
// if (num % 2 == 0 || num % 3 == 0) {
//     isPrime = false
// }
// for (let i = 5; i < num; i += 6) {
//     if (num % i == 0 || num % (i + 2) == 0) {
//         isPrime = false
//         break
//     }
// }
// if (isPrime && num > 1)
//     console.log("Prime number")
// else
//     console.log("Not a prime number")
// var num = 7
// var count = 0
// for (let i = 1; i < num; i++)
//     if (num % i == 0) {
//         count++
//     }
// if (count == 2)
//     console.log("Prime number")
// else
//     console.log("Not a prime ")