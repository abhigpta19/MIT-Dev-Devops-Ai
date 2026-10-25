import Home from "./components/Home";
import AppLayout from "./layouts/AppLayout";
import About from "./components/About";

function Button()
{
  return <button>this is my button</button>
}

function Comp({children})
{
  console.log(children);
  return (
    <>
    <h1>this is my component</h1>
    <p>this is the descipttion</p>
    {children}
    <h1>my component ends</h1>
    </>
  )
}

function App(){
  // alert("this is my app component");
  return (
    <>
      
      <AppLayout>
        <About/>
      </AppLayout>
    </>
  )
}

export default App;