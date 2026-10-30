import React, { useState } from 'react'

// function App() {
//   console.log("app is rendered");

//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("aqua");

//   function handleClick()
//   {
//     // setCount(count+1);
//     // setCount(count+1);
//     // setCount(count+1);

//     // setCount(function(prev){return prev+1});
//     setCount(prev=>prev+1);
//     setCount(prev=>prev+1);
//     setCount(prev=>prev+1);


//     setColor("red");
//     setColor("yellow");
//   }

//   return (
//     <div style={{border: "2px solid black", backgroundColor: color}}>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

function Counter1()
{
  console.log("counter 1 rendered");

  const [count1, setCount1] = useState(0);

  return (<div style={{border:"2px solid black", padding: 10, margin: 10}}>
    <h1>this is counter1: {count1}</h1>
    <button onClick={()=>setCount1(count1+1)}>Click</button>
  </div>)
}

function Counter2()
{
  console.log("counter 2 rendered");
  const[count2, setCount2] = useState(0);

  return (<div style={{border:"2px solid black", padding: 10, margin: 10}}>
    <h1>this is counter2 : {count2}</h1>
    <button onClick={()=>setCount2(count2+1)}>CLick</button>
  </div>)
}

function App()
{
  console.log("app rendered");
  const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  return (<div style={{border:"2px solid black", padding: 10}}>
    <h1>App Component: {count}</h1>
    <Counter1/>
    <Counter2/>
    <button onClick={()=>setCount(count+1)}>Click</button>
  </div>)
}

export default App
