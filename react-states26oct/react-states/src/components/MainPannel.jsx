import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

function MainPannel({page}) {
  
    if(page === "home")
        return <Home/>;

    if(page === "contact")
        return <Contact/>;

    if(page === "about")
        return <About/>;

    return <NotFound/>;
}

export default MainPannel
