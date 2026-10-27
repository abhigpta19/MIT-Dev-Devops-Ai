import React,{useState} from 'react'
import AppLayout from './layouts/AppLayout'


// function App() {
//   console.log("the app is rendered")
  
//   const [value, setValue] = useState(1);
//   const [color, setColor] = useState("aqua");

//   function fn()
//   {
//     console.log("button is clicked")
//     setValue(value+1);
//   }

//   function fn2()
//   {
//     if(color==="red")
//     {
//       setColor("aqua");
//       return;
//     }

//     setColor("red");
//   }

  

//   return (
//     <div style={{backgroundColor: color}}>
//       <h1>{value}</h1>
//       <button onClick={fn}>Click me</button>
//       <button onClick={fn2}>Change color</button>
//     </div>
//   )
// }

function App()
{
  return <AppLayout/>;
}

export default App
