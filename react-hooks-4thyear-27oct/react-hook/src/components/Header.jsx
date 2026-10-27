import React from 'react'

function Header({page,theme,setPage, setTheme}) {

    function changePage(pageName)
    {
        setPage(pageName)
    }

    function changeTheme()
    {
        if(theme === "light")
        {
            setTheme("dark");
            return;
        }

        setTheme("light");
    }
  return (
    <div  style={{border:`2px solid ${theme==="dark"?"white":"black"}`, display:"flex",justifyContent:"space-between", fontSize: 40}}>
    <div onClick={()=>changePage("home")}  style={{backgroundColor: page==="home"?"aqua":`${theme==="dark"?"black":"white"}`}}>Home</div>
    <div onClick={()=>changePage("about")} style={{backgroundColor: page==="about"?"aqua":`${theme==="dark"?"black":"white"}`}}>ABout</div>
    <div onClick={()=>changePage("contact")} style={{backgroundColor: page==="contact"?"aqua":`${theme==="dark"?"black":"white"}`}}>Contact</div>
    <button onClick={changeTheme}>Change Mode</button>
    </div>
  )
}

export default Header
