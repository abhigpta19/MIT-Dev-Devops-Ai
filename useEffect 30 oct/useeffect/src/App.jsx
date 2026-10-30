import React, { useState, useEffect, useLayoutEffect } from 'react'

function Comp1()
{

  const [count, setCount] = useState(0);

  function f1()
  {
    alert("comp 1 mounted");
  }

  function f2()
  {
    alert("comp1 un mounted");
  }

  useEffect(function(){
    f1();

    return f2;
  },[])


  useEffect(()=>{
    alert(`comp 1 count updated ${count}`);

    return ()=>{
      alert(`comp 1 cleanup function inside count useeffect ${count}`);
    }
  },[count])

  console.log("conmp 1 rendered");
  return (<div style={{border:"2px solid black", margin: 10, padding: 10}}>
    <h1>this is component 1 : {count} </h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
  </div>)
}

function Comp2()
{
  const [count, setCount] = useState(0);

  // function f1()
  // {
  //   alert("comp 2 mounted");
  // }

  // function f2()
  // {
  //   alert("comp2 un mounted");
  // }

  // useEffect(function(){
  //   f1();

  //   return f2;
  // },[])


  useEffect(()=>{
    alert("component 2 is mounted");

    return ()=>{
      alert("component 2 ummounted");
    }
  },[])

  useEffect(()=>{
    alert(`comp 2 count updated ${count}`);

    return ()=>{
      alert(`comp 2 cleanup function inside count useeffect ${count}`);
    }
  },[count])

  console.log("comp 2 rendered");
  return (<div style={{border:"2px solid black", margin: 10, padding: 10}}>
    <h1>this is component 2: {count} </h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
  </div>)
}

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(()=>{
    alert("appis mounting");
  },[])

  return (
    <div style={{border:"2px solid black", margin: 10, padding: 10}}>
      <h1>App Component : {count}</h1>
      {toggle?<Comp1/>:<Comp2/>}
      <button onClick={()=>setCount(count+1)}>Click</button>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  )
}



// function App()
// {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("red");

//   // function fn1()
//   // {
//   //   console.log("this is my use effect on count");
//   // }

//   // function fn2()
//   // {
//   //   console.log("this is my use effect on color");
//   // }

//   // function fn3()
//   // {
//   //   console.log("this is my use effect on both count and color");
//   // }

//   // useEffect(fn1)  //every render
//   // useEffect(fn1,[]);  //first render

//   // useEffect(fn1,[count]);  //first render and when count changes
//   // useEffect(fn2,[color]);  //first render and when color changes
//   // useEffect(fn3,[count,color]);  //first render and when either count or color changes

//   useEffect(fn, []);

//   return (<div style={{border:"2px solid black", margin: 10, padding: 10, backgroundColor: color}}>
//     <h1>app: {count} </h1>
//     <button onClick={()=>setCount(count+1)}>click</button>
//     <button onClick={()=>setColor(color==="red"?"green":"red")}>change color</button>
//   </div>)
// }

export default App
