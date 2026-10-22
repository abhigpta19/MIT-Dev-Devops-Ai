import BaseLayout from "./layout/BaseLayout.jsx";
import catImg from "./cat.jpeg";
import dogImg from "./dog.jpeg";
import owlImg from "./owl.jpeg";
import gImg from "./giraffe.jpeg";
import Animal from "./components/Animal.jsx";

function App(){
  return (<>
    <Animal name="cat" des="this is a cat" img={catImg} width={500} back="red"/>
    <Animal name="dog" des="this is a dog" img={dogImg} width={600} back="blue"/>
    <Animal name="owl" des="this is an owl" img={owlImg} width={500} back="green"/>
    <Animal name="giraffe" des="this is a giraffe" img={gImg} width={700} back="pink"/>
  </>);
}

export default App;