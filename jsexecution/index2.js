

// console.log(a1);
// var a1 = 10;
// var a2 = 20;
// console.log(a2);

// fn();
// function fn()
// {
//     var a = 1;
//     var b = 2;
//     console.log(a+b);
// }




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










// console.log("start");
// var a1 = 10;
// console.log(a1);
// console.log(a2);
// var a2 =20;

// function fn(){
//     var b1 = 10;
//     var b2 = 20;

//     return b1*b2;
// }

// console.log(fn());
// console.log("end");






// //gec --> x=10,fn3={...fn2}    fn1, fn4
// //fn4--> x=30
// //fn3 --> cl(x)

// var x = 10;

// function f1()
// {
//     var x=25;
//     console.log(x);
// }

// f1();





// function f1()
// {
//     var x = 10;

//     var f2 = function()
//     {
//         console.log(x);
//     }

//     return f2;
// }

// var fn = f1();
// x=100;
// fn();






// var a = 10;
// var b = 20;

// function af1()
// {
//     var a = 100;
//     function af2()
//     {
//         var b = 200;
//         var c = 300;
//         function af3()
//         {
//             var c = 300;
//             console.log(a+b+c);
//         }
//         return af3;
//     }
//    return af2();
// }
// var fn = af1();
// fn();





// function counter() {
//     var count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// var c1 = counter();
// var c2 = counter();
// c1();
// c2();
// c1();
// c1();
// c2();
// c2();






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


// let count = 0;

// function f1()
// {
//     count++;
//     console.log(count);
// }

// function f2()
// {
//     count++;
//     console.log(count);
// }


// f1();
// f1();
// f2();
// f2();


// function fn()
// {
//     let count = 0;

//     function inc()
//     {
//         count++;
//         console.log(count);
//     }

//     return inc;
// }


// let fn1 = fn();
// let fn2 = fn();

// fn1();
// fn1();
// fn2();
// fn2();

// let c= 4;


// function fn(a,b){
//     return a+b+c;
// }

// console.log(f(1,2));


// function copy(o1,o2)
// {
//     o1.name = o2.name;
//     o1.phone = o2.phone;
//     o1.gpa = o2.gpa;
// }


// const s1 = {name: "abc", phone: "123", gpa: ["9.2","8.8"]};

// const s2 = {...s1};

// copy(s2,s1);
// s2.name = "xyz";
// s2.gpa[1]="5.6";

// console.log(s1,s2);


// function fn({name,rollno,phone})
// {
//     // const n = obj.name;
//     // const ph = obj.phone;
//     // const rn = obj.rollno;
//     // const {name,phone,rollno} = obj;

//     console.log("name : ", name);
//     console.log("roll no : ", rollno);
//     console.log("phone : ", phone);
// }

// const obj1 = {
//     name: "abhi",
//     rollno: 1,
//     phone : "123"
// }

// const obj2 = {...obj1,phone:"987"};
// console.log(obj2);
// const {phone} = obj1;
// console.log(phone);


// const arr = [1,2,3];

// const a = arr[0];
// const b = arr[1];

// const [a,b,c,d] = arr;
// console.log(a,b,c,d);


// spread operator and destructuring

// const s1 = {
//     name:"abc", 
//     phone: "123", 
//     address : {
//         city: "Noida",
//         state: "UP"
//     }
// }

// const s2 = s1; // wrong
// const s2 = JSON.parse(JSON.stringify(s1));
// const s2 = structuredClone(s1);

// const s1str = JSON.stringify(s1);
// // console.log(typeof s1str);
// const s2str = s1str;

// const s2 = JSON.parse(s2str);
// s2.address.city="Moradabad"
// console.log(s2);




// const s2 = {...s1,name:"xyz",address:{...s1.address}};
// s2.address.city = "Moradabad";

// console.log(s1,s2);


// function add(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function operation(a,b,fn)
// {
//     let ans = fn(a,b)
//     console.log(ans)
// }

// operation(2, 4, add);

// operation(5 , 2 , function(a,b){
//     return a-b;
// })


//map, filter , reduce, find , some
//foreach
// let a = 10;
// function fn()
// {
//     console.log(a);
// }
// setTimeout(fn,1000);






// for(var i=1;i<=5;i++)
// {
//     function fn(x)
//     {
//         setTimeout(function(){
//             console.log(x);
//         },1000*x);
//     }

//     fn(i);
// }
    

