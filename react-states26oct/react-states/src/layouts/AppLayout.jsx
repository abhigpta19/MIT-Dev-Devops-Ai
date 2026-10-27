import {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import MainPannel from '../components/MainPannel'

function AppLayout() {

    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("light");

    const lightTheme = {
        color: "black",
        backgroundColor: "white"
    }

    const darkTheme = {
        color: "white",
        backgroundColor: "black"
    }

  return (
    <div style={theme==="light"?lightTheme:darkTheme}>
      <Header page={page} theme={theme} setPage={setPage} setTheme={setTheme}/>
      <div style={{display: "flex"}}>
        <div style={{border: `2px solid ${theme==="dark"?"white":"black"}`, height:"80vh", width:"20vw"}}>
            <Sidebar page={page}/>
        </div>
        <div style={{border: `2px solid ${theme==="dark"?"white":"black"}`, height:"80vh", width:"80vw"}}>
            <MainPannel page={page}/>
        </div>    
      </div>
      
      <Footer theme={theme}/>
    </div>
  )
}

export default AppLayout
