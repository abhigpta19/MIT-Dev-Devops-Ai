// var a = 1;

// function fn1()
// {
//     var a = 10;
//     var b = 20;
//     function fn2()
//     {
//         var b = 50;
//         function fn3()
//         {
//             var c = 100;
//             console.log(a+b+c);
//         }

//         return fn3;
//     }

//     return fn2;
// }

// var fn2_copy = fn1();
// var fn3_copy = fn2_copy();

// console.log(fn3_copy);
// fn3_copy();



// // var c = 1;
// // function fn(a,b){
// //     return a+b+c;
// // }

// // fn(2,2)=4
// // fn(2,2)=5;


// function fn()
// {
//     var paid = false;

//     function payment()
//     {
//         if(paid)
//             return;

//         console.log("Payment Successful ");
//         paid=true;
//     }

//     return payment;
// }


// var f = fn();

// f();
// f();
// f();



// function fn()
// {
//     var count = 0;

//     function inc()
//     {
//         count++;
//         console.log(count);
//     }

//     return inc;
// }

// var f1 = fn();
// var f2 = fn();

// f1()
// f1()
// f2()
// f1()
// f2()
// f2()


// var count = 0;

// function inc()
// {
//     count++;
//     console.log(count);
// }

// const f1 = inc;
// const f2 = inc;

// f1()
// f1()
// f2()
// f2()



// var x = 10;
// var x = 20;
// console.log(x);


// var x = 10;

// if(true)
// {
//     var x = 20;
//     console.log(x);
// }

// console.log(x);


// var x = 10;

// function fn()
// {
//     var x = 20;
//     console.log(x);
// }

// fn();
// console.log(x);

//let const