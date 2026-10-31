import React, { useState, useEffect, useLayoutEffect } from 'react'
import { jsx } from 'react/jsx-runtime';

function Comp1()
{
  console.log("comp 1 rendered");
  const [count1, setCount1] = useState(0);

  //  function fn()
  // {
  //   alert("comp 1 is unmounting")
  // }

  // useEffect(function(){
  //   alert("comp 1 mounted")

  //   return fn;
  // },[]);

  useEffect(function(){
    alert(`the value of count 1 is updated ${count1}`)
    return ()=>{
      alert(`the value of count 1 is cleared ${count1}`)
    }
  },[count1]);

  useEffect(()=>{
    alert("comp1 mounter");
    return ()=>{
      alert("comp 1 unmounted");
    }
  },[])

  return (<div style={{border: "2px solid black", margin: 10, padding: 10}}>
    <h1>Comp 1: {count1}</h1>
    <button onClick={()=>setCount1(count1+1)}>Click</button>
  </div>)
}


function Comp2()
{
  console.log("comp 2 rendered");

  const [count2, setCount2] = useState(0);

  function fn()
  {
    alert("comp 2 is unmounting")
  }

  useEffect(function(){
    alert(`the value of count 2 is updated ${count2}`)

    return ()=>{
      alert(`the value of count 2 is cleared ${count2}`)
    }
  },[count2]);

  useEffect(function(){
    alert("comp 2 mounted")

    return fn;
  },[]);

  return (<div style={{border: "2px solid black", margin: 10, padding: 10}}>
    <h1>Comp 2 : {count2}</h1>
    <button onClick={()=>setCount2(count2+1)}>click</button>
  </div>)
}

// function App() {
//   console.log("app rendered");
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(true);

//   useEffect(function(){
//     alert("count is updated with value " + count);

//     return ()=>{
//       alert("count is cleared with value " + count);
//     }
//   },[count])

//   useEffect(function(){
//     alert("app mounted")

//     return ()=>{
//       alert("app is unmounted")
//     }
//   },[]);
//   // const [count1, setCount1] = useState(0);
//   // const [count2, setCount2] = useState(0);

//   return (
//     <div style={{border: "2px solid black", margin: 10, padding: 10}}>
//       <h1>App Component: {count}</h1>
//       {toggle?<Comp1/>:<Comp2/>}
//       <button onClick={()=>setCount(count+1)}>Click</button>
//       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//     </div>
//   )
// }

// function App()
// {
//   console.log("app render");

//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("red");

//   function fn1()
//   {
//     console.log("on count change only")
//   }

//   function fn2()
//   {
//     console.log("on color changte only")
//   }

//   function fn3()
//   {
//     console.log("on change both count and color");
//   }

//   useEffect(fn1 ,[count]);
//   useEffect(fn2, [color]);
//   useEffect(fn3,[count,color]);

  
  

//   return (
//     <div style={{backgroundColor: color}}>
//         <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Click</button>
//     <button onClick={()=>setColor(color==="red"?"green":"red")}>Change COlor</button>
//     </div>
    
//   )
// }

function App()
{
  function fn1()
  {
    alert("this is inside useeffect");
  }

  useEffect(fn1);


  function fn2()
  {
    alert("this is inside use Layout effect");
  }

  useLayoutEffect(fn2);

  function fn3()
  {
    alert("this is inside fn3");
  }

  fn3();

  return (
    <h1> app component</h1>
  );
}

export default App
