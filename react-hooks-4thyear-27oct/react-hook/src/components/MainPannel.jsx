import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function MainPannel({page}) {
  if(page=="home")
    return <Home/>;

  if(page=="contact")
    return <Contact/>

  if(page =="about")
    return <About/>;

  return (<h1>404 not found</h1>);
}

export default MainPannel
