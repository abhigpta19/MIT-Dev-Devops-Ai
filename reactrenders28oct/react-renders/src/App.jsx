import React, { useState } from 'react'

function Counter1({count1,setCount1})
{
console.log("counter 1 rendered")
  // const [count1, setCount1] = useState(0);

  
  return <div style={{border: "2px solid black"}}>
    <h1>this is my conter1 : {count1}</h1>
    <button onClick={()=>setCount1(count1+1)}>Click</button>
  </div>
}


function Counter2({count2,setCount2})
{
 console.log("counter 2 rendered");
  // const [count2, setCount2] = useState(0);
 
  return <div style={{border: "2px solid black"}}>
    <h1>this is my counter 2 : {count2} </h1>
    <button onClick={()=>setCount2(count2+1)}>Click</button>
  </div>
}

function App() {
  console.log("app rendered")
  const [count, setCount] = useState(0);
  const [isComponentA, changeComp] = useState(true);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div style={{border: "2px solid black", padding: 20}}>
      <h1>app component : {count}</h1>
      {isComponentA?<Counter1 count1={count1} setCount1={setCount1}/>:<Counter2 count2={count2} setCount2={setCount2}/>}
      <button onClick={()=>setCount(count+1)}>Click</button>
      <button onClick={()=>changeComp(!isComponentA)}>toggle</button>
    </div>
  )
}

export default App
