import React from 'react'

function Footer({theme}) {
  return (
    <div  style={{border: `2px solid ${theme==="dark"?"white":"black"}`}}>
      <h1>this is my footer</h1>
    </div>
  )
}

export default Footer
