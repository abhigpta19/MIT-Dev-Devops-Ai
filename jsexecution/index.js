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


// let a = 10;

// if(true)
// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);


// console.log(a);
// let a = 10;
// let const



// let a= 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);


// function operation(a,b,fn)
// {
//     let ans = fn(a,b);
//     console.log(ans);
// }

// function add(a,b)
// {
//     return a+b;
// }

// function multiply(a,b)
// {
//     return a*b;
// }

// operation(2,4,add);
// operation(2,4,multiply);



//map filter reduce

// function fn1(){
//     console.log("hello1")
// }
// function fn2(){
//     console.log("hello2")
// }
// function fn3(){
//     console.log("hello3")
// }


// console.log("hi")
// setTimeout(fn1,0);
// setTimeout(fn2,0);
// setTimeout(fn3,0);
// console.log("end");




// for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000*i)
// }


// function func()
// {
//     var a = 0;

//     function fn()
//     {
//         a++;
//         console.log(a);
//     }

//     return fn;
// }

// var f1 = func();
// var f2 = func();

// f1()
// f1()
// f2()
// f2()



// browser--> js engine, clock Time, callback queue

// for(var i=1;i<=5;i++)
// {
//    function fn(x)
//    {
//         setTimeout(function(){
//             console.log(x);
//         },x*1000);
//    }

//    fn(i);
// }

// let name = "ABhi";
// let rollno = 2;
// let phone = "1234";

// let a = 10;
// let b = a;
// b = b + 5;
// console.log(a,b);




// let s1 = 

// let s2 = s1;
// s2.name = "xyz";
// console.log(s1,s2);



// let arr = ["Abhi", 12, "1234"]
// let arr2 = arr;
// arr2[1]=100;
// console.log(arr,arr2);


// 100
// {
//     name: "xyz",
//     roll:  12,
//     phone : "1234"
// }
// 0x1 0x2 0x3.   ...0x100

//foreach for in



// function copying(s1,s2)
// {
//     s2.name=s1.name;
//     s2.batch=s1.batch;
//     s2.hod = s1.hod;
// }

// let o1 = {
//     name : "Abhi",
//     batch: "AI",
//     hod : "xyz"
// }

// let o2 = {};
// copying(o1,o2);

// let o2= {...o1};
// o2.name="xyz";

// console.log(o1,o2);



// let arr = [1,2 ,3,4]

// let arr2 = [...arr];


// f1ots().  -->  JSON.stringify

// f2sto(). --> JSON.parse


// let s1= {
//     name: "Abhi",
//     roll: 1,
//     address: {
//         locality: "MIT",
//         city: {
//             area: "MB",
//             pincode: "123456"
//         }
//     }
// }


//let s2 = s1; wrong
//let s2={...s1} shallow copy

// let s2 = JSON.parse(JSON.stringify(s1)); //deep copy
// let s2 = structuredClone(s1);

// s2.address.city.area="Noida";

// console.log(s1,s2);


//map, filter, reduce, some ,find
//foreach for-in


function report(s1)
{
    // const name = s1.name;
    // const roll = s1.roll;
    const {name,roll} = s1;
    // const phy = s1.marks.phy;
    // const chem = s1.marks.chem;
    // const maths = s1.marks.maths;
    const {phy,chem,maths} = s1.marks;

    const percent = ((phy+chem+maths)/300)*100.00;
    console.log(`Hi! ${name} and roll no ${roll} your percentage is ${percent}`);

}


let s1 = {
    name: "Abhi",
    roll: 1,
    marks: {
        phy: 80,
        chem: 70,
        maths: 90
    }
}

report(s1);

// let name = "abhi";
// let batch = "AI";
// // let str = name + " belongs to " + batch;
// let str = `${name} belongs to ${batch}`;


// console.log(str);


//delete
//rest
//destructuring in array




