// console.log("A");

// function test() {
//     console.log("B");
// }

// console.log("C");
// test();
// console.log("D");


// JS --> single threaded synchorous





// function one() {
//     two();
// }

// function two() {
//     three();
// }

// function three() {
//     console.log("Hello");
// }

// one();



// let name = "Abhishek";

// function greet() {
//     let message = "Hello";
//     debugger;
//     console.log(message);
// }

// greet();



// let name = "Global";

// function outer() {
//     let name = "Outer";

//     function inner() {
//         let name = "Inner";

//         console.log(name);
//     }

//     inner();
// }

// outer();





// let x = "global";

// function a() {
//     let x = "a";

//     function b() {
//         console.log(x);
//     }

//     return b;
// }

// const fn = a();

// function c() {
//     let x = "c";
//     fn();
// }

// c();



function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const c1 = counter();

c1();
c1();
c1();


// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const a = counter();
// const b = counter();

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());



// function test() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x);
// }

// test();




// console.log(a);
// var a = 10;