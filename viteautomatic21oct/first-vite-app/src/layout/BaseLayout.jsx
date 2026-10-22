import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import NotFound from '../components/NotFound'

function BaseLayout({pageName}) 
{
    let MiddleSection = null;
    if(pageName === "home")
        MiddleSection = Home;
    else if(pageName === "about")
        MiddleSection = About;
    else if(pageName === "contact")
        MiddleSection = Contact;
    else
        MiddleSection = NotFound;

  return (
    <div>
      <Header/>
      <MiddleSection/>
      <Footer/>
    </div>
  )
}

export default BaseLayout;