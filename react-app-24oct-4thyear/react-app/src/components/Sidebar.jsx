import React from 'react'

function Sidebar({state}) {
    alert("sidebar");
  return (
    <div  style={{border: "2px solid black", height: "80vh", width:"30vw"}}>
      <h1>this is my sidebar with {state} content</h1>
    </div>
  )
}

export default Sidebar
