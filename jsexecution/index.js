

console.log(a1);
var a1 = 10;
var a2 = 20;
console.log(a2);

fn();
function fn()
{
    var a = 1;
    var b = 2;
    console.log(a+b);
}




// var x = 10;
// var x = 20;
// console.log(x);


// var x = 10;
// console.log(x);
// console.log(y);
// var y= 20;

// fn();

// function fn()
// {
//     console.log(x,y);
//     var x= 1;
//     var y = 2;
// }










// // // // // console.log("start");
// // // // // var a1 = 10;
// // // // // console.log(a1);
// // // // // console.log(a2);
// // // // // var a2 =20;

// // // // // function fn(){
// // // // //     var b1 = 10;
// // // // //     var b2 = 20;

// // // // //     return b1*b2;
// // // // // }

// // // // // console.log(fn());
// // // // // console.log("end");




// // // // //gec --> x=10,fn3={...fn2}    fn1, fn4
// // // // //fn4--> x=30
// // // // //fn3 --> cl(x)

// // // // var x = 10;

// // // // function f1()
// // // // {
// // // //     var x=25;
// // // //     console.log(x);
// // // // }

// // // // f1();




// // // // function f1()
// // // // {
// // // //     var x = 10;

// // // //     var f2 = function()
// // // //     {
// // // //         console.log(x);
// // // //     }

// // // //     return f2;
// // // // }

// // // // var fn = f1();
// // // // x=100;
// // // // fn();


// // // var a = 10;
// // // var b = 20;

// // // function af1()
// // // {
// // //     var a = 100;

// // //     function af2()
// // //     {
// // //         var b = 200;
// // //         var c = 300;

// // //         function af3()
// // //         {
// // //             var c = 300;
// // //             console.log(a+b+c);
// // //         }

// // //         return af3;
// // //     }
    
// // //    return af2();
// // // }


// // // var fn = af1();
// // // fn();



// // function counter() {
// //     var count = 0;

// //     return function () {
// //         count++;
// //         console.log(count);
// //     };
// // }

// // var c1 = counter();
// // var c2 = counter();

// // c1();
// // c2();
// // c1();
// // c1();
// // c2();
// // c2();


// // once function

// function makePayment()
// {
//     var isPay = false;
//     function pay()
//     {
//         if(isPay)
//             return;

//         console.log("Making Payment");
//         isPay=true;
//     }

//     return pay;
// }

// var fn = makePayment();
// fn();
// fn();
// fn();


// var let const;



// Hoisting

// console.log(a);
// let a = 10;


// var a = 10;

// function fn()
// {
    
//     console.log(a);
//     var a = 20;
// }

// fn();
// console.log(a);

// let a = 10;
// let a = 20;


// const x = 10;

// if(true)
// {
//     const x = 20;
//     console.log(x);
// }

// console.log(x);

// var x = 10;

// function fn()
// {
//     var x = 20;
//     console.log(x);
// }


// fn()
// console.log(x);





// let const

//50nlines
// console.log(a);
// let a =10;
//50 lihne


// let x = 10;
// { 
//     let x = 20;
//     {
       
//         console.log(x);
//         let x = 30;
//     }

//     console.log(x);
// }


// console.log(x);


// let x = 10;

// {
//     var x = 20;
//     console.log(x);
// }

// console.log(x);


// let x = 10;
// var x = 20;


// let a = 10;

// function fn(){
//     var a = 20;

//     if(true)
//     {
//         let a = 30;
//         console.log(a);
//     }

//     console.log(a);
// }

// fn();




// let x = 100;

// {
//     console.log(x);

//     let x = 200;
// }


// const a = 10;
// a = 20;

// const a ={
//     name: "Abhishek",
//     class: "1A"
// }

// a.name = "xyz";

// console.log(a);

// let x = 10;     
// let y = x;


// let a = {
//     name: "Abhi"
// };    


// let b = a;    
// b.name = "xyz";

// console.log(a);
// console.log(b);



// const user = [1,2,3]

// user = [10,2,3];

// console.log(user);



// let x = 10;

// {
//     let x = 20;

//     console.log(x);
// }

// console.log(x);



// var x = 10;

// {
//     let x = 20;

//     console.log(x);
// }

// console.log(x);



// var a = 10;

// {
//     var a = 20;
//     let b = 30;
// }

// console.log(a);
// console.log(b);



// var x = 10;
// let y = 20;

// console.log(window.x);
// console.log(window.y);




// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");


// function outer() {
//     let x = 10;

//     setTimeout(() => {
//         console.log(x);
//     }, 1000);
// }

// outer();



// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


// var x = 10;

// var f1 = function(){
//     x++;
//     console.log(x);
// }


// var f2 = function(){
//     x++;
//     console.log(x);
// }


// f1();
// f1();
// f2();
// f2();

// console.log(x);



// function fn()
// {
//     var count = 0;

//     function f()
//     {
//         count++;
//         console.log(count);
//     }

//     return f;
// }


// var f1 = fn();
// var f2 = fn();


// f1();
// f1();
// f2();
// f2();

// var d = new Date();
// console.log(d)
// console.log(typeof d)

// var k = JSON.parse(JSON.stringify(d));
// console.log(k)
// console.log(typeof k)


// function fn()
// {
//     console.log("hello");
// }

// console.log(fn)
// console.log(typeof fn)

// var x = JSON.parse(JSON.stringify(fn))

// console.log(x)
// console.log(typeof x)


// const obj = {
//     a: 1,
//     b: {
//         c:3,
//         d: {
//             name: "hola"
//         }
//     }
// }

// console.log(obj)
// console.log(typeof obj)

// const o2 = JSON.parse(JSON.stringify(obj));
// const o2 = structuredClone(obj)

// console.log(o2)
// console.log(typeof o2)


// const student1 = {
//     name: "Abhi",
//     year: 2,
//     section : "A",
//     address: {
//         city: "Moradabad",
//         state: "UP"
//     }
// }

// const student2 = {
//     name: "xyz",
//     year: 2,
//     section : "A"
// }


// function copying(o1,o2)
// {
//     o1.name=o2.name;
//     o1.year=o2.year;
//     o1.section=o2.section;
// }

// const student2 = {...student1};
// // copying(student2,student1);  // student2=studen1
// student2.name="xyz";
// student2.address.city="Rampur";

// console.log(student1)
// console.log(student2);


// const student2 = {
//     name: "Abhi",
//     year: "2",
//     phoneNo: "1234"
// }

// console.log(student1.year === student2.year)