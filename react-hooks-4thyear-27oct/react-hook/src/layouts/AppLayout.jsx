import React,{useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainPannel from '../components/MainPannel'
import Footer from '../components/Footer'

function AppLayout() {

    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("dark");

    const darkStyle = {
        color: "white",
        backgroundColor: "black"
    }

    const lightStyle = {
        color: "black",
        backgroundColor: "white"
    }
  return (
    <div style={theme==="dark"?darkStyle:lightStyle}>
      <Header page={page} theme={theme} setPage={setPage} setTheme={setTheme}/>
      <div style={{display: "flex"}}>
        <div style={{border:`2px solid ${theme==="dark"?"white":"black"}`, height:"80vh", width: "20vw"}}>
            <Sidebar page={page}/>
        </div>
        <div style={{border:`2px solid ${theme==="dark"?"white":"black"}`, height:"80vh", width: "80vw"}}>
            <MainPannel page={page}/>
        </div>
      </div>
      <Footer theme={theme}/>
    </div>
  )
}

export default AppLayout
