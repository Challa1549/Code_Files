// console.log(3>2>1)
// console.log(1<2<3)
// let i
// for (i = 0; i < 5; i++);
// console.log(i)
// console.log("5" - - "2")
// var i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }
// var num = 1234
// var count = 0, sum = 0
// while (num != 0) {
//     num = parseInt(num / 10)
//     count++
// }
// while (num != 0) {
//     sum += num % 10
//     num = parseInt(num / 10)
// }
// var num = 1230
// var count = 0, last = ""
// while (num != 0) {
//     last += num % 10
//     num = parseInt(num / 10)
// }
// console.log("Reverse of a given number is: " + last)
// var num = 121
// var copy = num
// var count = 0, sum = " "
// while (num != 0) {
//     sum += num % 10
//     num = parseInt(num / 10)
// }
// console.log(sum == copy ? "It's a palindrome" : "It's not a palindrome")
// var num = 153
// var copy = num
// var count = 0, sum = 0
// while (num != 0) {
//     num = parseInt(num / 10)
//     count++
// }
// num = copy
// while (num != 0) {
//     sum += (num % 10) ** count
//     num = parseInt(num / 10)
// }
// console.log(sum == copy ? "It's an Armstrong number" : "It's not an Armstrong number")
// var i = 0
// do{
//     console.log(i)
//     i++
// }
// while(i<=10)
// var arr = [1, 2, 3, 4, 5]
// for (let i in arr) {
//     if (i % 2 == 0) console.log(i)
//     console.log(i % 2 == 0 ? i : "")
// }
// var arr = [109, 120, 155, 233, 289, 298, 258, 930, 1549]
// let big = arr[0]
// for (let i of arr) {
//     if (big < i)
//         big = i
// }
// console.log("The biggest / largest of all the numbers is: " + big)
// var arr = [109, 120, 155, 233, 289, 298, 258, 930, 1549]
// let small = arr[0]
// for (let i of arr) {
//     if (small > i)
//         small = i
// }
// console.log("The smallest number of all the numbers is: " + small)
// var arr = [5, 7, 8]
// console.log(arr + 1)
// arr = [1, 2, 3]
// arr[7] = 45
// console.log(arr)
// console.log(arr.length)
// var arr = [5, 7, 8, true, "challa", null, 53.78, undefined]
// console.log(arr)
// console.log(arr + 1)
// console.log(arr * 2)
// var arr = ["Iron man", "Thor", "Captain America", "Hulk", "Spider Man"]
// var [hero1, hero2, ...RestOthers] = arr
// console.log(hero1)
// console.log(hero2)
// console.log(RestOthers)
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(5, 7))
// function sum(...a) {
//     return a.reduce((acc, i) => acc + i)
// }
// console.log(sum(5, 7, 8, 9, 34, 56, 78, 98, 88))
// var arr = [12, 1, 3]
// var b = []
// console.log(typeof arr)
// console.log([] == [])
// var marvel = ["Iron man", "Captain America ", "Thor", "Black Panther", "Hulk", "Thanos", "Thor"]
// console.log("Original Array: " + marvel)
// marvel.pop()
// marvel.push("Sreedhar Reddy Challa")
// marvel.shift()
// marvel.unshift("Sreedhar Reddy Challa")
// delete marvel[2]
// marvel.splice(1, 2, "Sreedhar Reddy Challa")
// marvel.splice(1, 0, "Sreedhar Reddy Challa", "Sreedhar Reddy Challa 2.0")
// marvel.splice(1,2)
// var favheroes = marvel.slice(1, 4)
// console.log(favheroes)
// console.log("Modified : " + marvel)
// var index = marvel.indexOf("Thor")
// var index = marvel.lastIndexOf("Thor")
// var index = marvel.indexOf("Sreedhar Reddy Challa")
// var lastindex = marvel.lastIndexOf("Sreedhar Reddy Challa")
// console.log(index)
// console.log(lastindex)
// var favs = marvel.sort()
// var favs = marvel.sort().reverse()
// console.log(favs)
// var nums = [44, 552, 34, 3535, 33, 5, 66677, 7543, 666, 32]
// var sorted = nums.sort((a, b) => a - b)
// var sorted = nums.sort((a, b) => b - a )
// var changed = marvel.join('*')
// var changed = marvel.join('   ')
// var changed = marvel.concat(nums).reverse()
// console.log(changed)