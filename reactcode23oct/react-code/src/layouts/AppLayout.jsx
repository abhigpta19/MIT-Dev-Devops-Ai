import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import MainPannel from '../components/MainPannel';
import Home from '../components/Home';
import Contact from '../components/Contact';
import About from '../components/About';

// function AppLayout({state}) {
//     alert("this is my app layout");
//     // let MainSection = null;

//     // if(state==="home")
//     //     MainSection = Home;
//     // else if(state === "contact")
//     //     MainSection = Contact;
//     // else if(state === "about")
//     //     MainSection = About;
//     // else
//     //     MainSection = MainPannel;

//   return (
//     <div style={{display: "flex", flexDirection:"column"}}>
//       <Header state={state}/>
//       <div style={{display: "flex"}}>
//         <Sidebar/>
//         <MainPannel state={state}/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default AppLayout


function AppLayout({children}) {

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <Header/>
      <div style={{display: "flex"}}>
        <Sidebar/>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout
