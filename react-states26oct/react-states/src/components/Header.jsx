import React from 'react'

function Header({page,theme, setPage, setTheme}) {

    function handleChangeTheme()
    {
        if(theme==="dark")
        {
            setTheme("light");
            return;
        }

        setTheme("dark");
    }

  return (
    <div style={{border: `2px solid ${theme==="dark"?"white":"black"}`, display:"flex", justifyContent:"space-between"}}>
      <div style={{backgroundColor:page==="home"?"aqua":`${theme==="dark"?"black":"white"}`}}
      onClick={()=>setPage("home")}
      >Home
      </div>
      <div style={{backgroundColor:page==="about"?"aqua":`${theme==="dark"?"black":"white"}`}}
      onClick={()=>setPage("about")}
      >About
      </div>
      <div style={{backgroundColor:page==="contact"?"aqua":`${theme==="dark"?"black":"white"}`}}
      onClick={()=>setPage("contact")}
      >Contact
      </div>
      <button onClick={handleChangeTheme}>Change To {theme==="dark"?"light":"dark"}</button>
    </div>
  )
}

export default Header
