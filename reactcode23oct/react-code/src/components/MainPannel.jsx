import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

//conditional rendering

function MainPannel({state}) {
  if(state === "home")
    return <Home/>;

  if(state === "contact")
    return <Contact/>;

  if(state === "about")
    return <About/>;

  return (<div style={{border: "2px solid black", height:"80vh", width: "65vw"}}>
    <h1>404 not found</h1>
  </div>);
}

export default MainPannel
