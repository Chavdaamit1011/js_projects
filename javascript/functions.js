// variable hoisting===================
// console.log(a)
// var a=10

//function hoisting===========
// test()
// function test(){
//     console.log("test")
// }

//function expression===========
// X()
// let x=function(){
//     console.log("hello")
// }

//iife(imidaite invoked function expression)============
// (function hello(a){
//     console.log(a)
// }(10))

//arrow function(shortand type of create a function)===========
// let sum=(a,b)=>{
//     return a+b
// }
// console.log(sum(10,20))

//recursion function==============================
// let c=1
// function inc(){
//     console.log(c)
//     c++
//     if(c<=5){
//         inc()
//     }
// }
// inc()

// nested function=======================
// function outer(){
//     function inner(){
//         console.log("this is inner function")
//     }
//     return inner
// }
// let ans = outer()
// ans()

//rest parameter==============(.....)=spred operator=====
// let test=(a,b,...c)=>{
//     console.log(a,b,c)
// }
// test(1,2,3,4)

// function data(a,b,c,d){
//     console.log(a,b,c,d)
// }
// let arr=[10,20,30,40]
// data(...arr)

//multiple parameters===================
// function sum(a,b=10){
//     console.log(a+b)
// }
// sum(1)
// sum(1,2)
// sum(1,2,3)


//pompt practice==========================
// let a=prompt("hello")
// let b=prompt("hwy")
// let sum=(Number(a)+Number(b))
// console.log(sum);

  let a=prompt("Enter the A:")
        console.log(a)

        let b=prompt("Enter the B:")
        console.log(b)

        // let sign=prompt(" Enter the sign...+,-,*,/:")
        // console.log(sign)

        let sum=(Number(a)+Number(b))

        console.log(sum)