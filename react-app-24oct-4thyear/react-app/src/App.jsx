// function Comp({color, text})
// {
//   // console.log(props);

//   const divStyle = {
//     border: "2px solid black",
//     backgroundColor: color
//   };

//   return (<div style={divStyle}>
//   <h1>My custom componet</h1>
//   <p>{text}</p>
//   </div>);
// }

// function App()
// {
//   // alert("this is my app component");

//   return (<>
//   <h1>this is my heading</h1>
//   <Comp color="red" text="radom text"/>
//   <Comp color="blue" text="radom text 2"/>
//   <Comp color="green" text="random text 3"/>
//   <p>this is my paragraph</p>
//   <button>this is my button</button>
//   </>)
// }]



// const obj = {name: "abhi", year: 4};

// // const name = obj.name;
// // const year = obj.year;

// const {name, year} = {...obj};


import Animal from "./components/Animal";
import catImg from "./cat.jpeg";
import dogImg from "./dog.jpeg";
import tigerImg from "./tiger.jpeg";
import owlImg from "./owl.jpeg";
import horseImg from "./horse.jpeg";
import AppLayout from "./layouts/AppLayout";


const animalObjList = [
  {id: 1, name: "cat", img: catImg, desc: "this is my cat", diet: "omni", isBird: false, width: 500},
  {id: 2,name: "dog", img: dogImg, desc: "this is my dog", diet: "omni", isBird: false, width: 500},
  {id: 3,name: "owl", img: owlImg, desc: "this is my owl", diet: "omni", isBird: true, width: 500},
  {id: 4,name: "tiger", img: tigerImg, desc: "this is my tiger", diet: "carni", isBird: false, width: 500},
  {id: 5,name: "horse", img: horseImg, desc: "this is my horse", diet: "herb", isBird: false, width: 500}
]

const animalCompList = [
  <Animal name="cat" img={catImg} desc="this is the cat it is funny" diet="omni" width={600} isBird={false}/>,
  <Animal name="dog" img={dogImg} desc="this is a dog" diet="omni" width={700} isBird={false}/>,

  <Animal name="owl" img={owlImg} desc="this is a owl" diet="omni" width={900} isBird={true}/>,

  <Animal name="tiger" img={tigerImg} desc="this is a tiger" diet="carni" width={800} isBird={false}/>,

  <Animal name="horse" img={horseImg} desc="this is a horse" diet="herb" width={700} isBird={false}/>
]

// function App()
// {
//   return (<>
//   <Animal name="cat" img={catImg} desc="this is the cat it is funny" diet="omni" width={600} isBird={false}/>
//   <Animal name="dog" img={dogImg} desc="this is a dog" diet="omni" width={700} isBird={false}/>

//   <Animal name="owl" img={owlImg} desc="this is a owl" diet="omni" width={900} isBird={true}/>

//   <Animal name="tiger" img={tigerImg} desc="this is a tiger" diet="carni" width={800} isBird={false}/>

//   <Animal name="horse" img={horseImg} desc="this is a horse" diet="herb" width={700} isBird={false}/>

//   </>);
// }


// function App()
// {
//   return (<>
//   {/* {animalObjList.map((val,idx)=>{
//     return (<Animal name={val.name} img={val.img} desc={val.desc} diet={val.diet} isBird={val.isBird} width={val.width}/>)
//   })} */}
//   {
//     animalObjList.map(val=>(<Animal key={val.id} {...val}/>))
//   }
//   </>)
// }


function App()
{
  alert("this is my app component");
  return (<>
  <AppLayout state="contact"/>
  </>)
}

export default App;