import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPannel from '../components/MainPannel'
import Sidebar from '../components/Sidebar'

function AppLayout({state}) 
{
    alert("this is my app layout");
    // let MainPannel = null;

    // if(state === "home")
    //     MainPannel=Home;
    // else if(state === "about")
    //     MainPannel = About;
    // else if(state === "contact")
    //     MainPannel = Contact;
    // else
    //     MainPannel = NotFound;

  return (
    <div>
      <Header state={state}/>
      <div style={{display:"flex"}}>
        <Sidebar state={state}/>
        <div style={{border:"2px solid black", height:"80vh", width:" 70vw"}}>
            <MainPannel state={state}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout
