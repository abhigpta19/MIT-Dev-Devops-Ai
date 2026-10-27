import React from 'react'
import AppLayout from './layouts/AppLayout'
import Animal from './components/Animal'
import catImg from "./images/cat.jpeg";
import dogImg from "./images/dog.jpeg";
import owlImg from "./images/owl.jpeg";
import tigerImg from "./images/tiger.jpeg";
import horseImg from "./images/horse.jpeg";



// const obj = {name: "abhi", year: 4, phone: "1234"};

// const name = obj.name;
// const year = obj.year;
// const phone = obj.phone;

// const {name,year,phone} = {...obj};

// const animalArr = [
//   {key:1, name:"cat", img:catImg, desc:"this is a funny cat", diet: "omni", isBird: false},
//   {key:2, name:"dog", img:dogImg, desc:"this is a funny cat", diet: "omni", isBird: false},
//   {key:3, name:"owl", img:owlImg, desc:"this is a funny cat", diet: "omni", isBird: true},
//   {key:4, name:"tiger", img:tigerImg, desc:"this is a funny cat", diet: "carb", isBird: false},
//   {key:5, name:"horse", img:horseImg, desc:"this is a funny cat", diet: "herb", isBird: false}
// ]

//rendering list

// const animalCompArray = [
//   <Animal name="cat" img={catImg} desc="this is a funny cat" diet="omni" isBird={false}/>,
//   <Animal name="dog" img={dogImg} desc="this is a funny dog" diet="omni" isBird={false}/>,
//   <Animal name="owl" img={owlImg} desc="this is a funny owl" diet="omni" isBird={true}/>,
//   <Animal name="tiger" img={tigerImg} desc="this is a funny tiger" diet="carb" isBird={false}/>,
//   <Animal name="horse" img={horseImg} desc="this is a funny horse" diet="herb" isBird={false}/>
// ]

// function App() {
//   return (
//     <div>
//       {/* {animalArr.map(val=>{
//         return (<Animal key={val.id} name={val.name} img={val.img} desc={val.desc} diet={val.diet} isBird={val.isBird}/>)
//       })} */}
//       {
//         animalArr.map(val=>(<Animal {...val}/>))
//       }
//     </div>
//   )
// }


// function App()
// {
//   console.log("app is rendered");
//   // alert("app is rendered");
//   // const state = {
//   //   count: 1,
//   //   color : "aqua"
//   // };

//   // let count = 1;
//   // let color = "aqua";

//   // let countState = React.useState(1);

//   // const value  = countState[0];
//   // const changeFn = countState[1];

//   const [count, setCount] = React.useState(1);
//   const [color, setColor] = React.useState("aqua");


//   function fn(e)
//   {
//     console.log("button clicked");
//     setCount(count+1);
//   }

//   function changeColor(newColor)
//   {
//     setColor(newColor);
//   }
//   function fn2()
//   {
//     changeColor("red");
//   }

//   return <div style={{backgroundColor: color}}>
//     <h1>{count}</h1>
//     <button onClick={fn}>click me</button>
//     <button onClick={()=>changeColor(color==="red"?"aqua":"red")}>change {color==="red"?"aqua":"red"}</button>
//   </div>
// }

function App()
{
  return <AppLayout/>
}

export default App
