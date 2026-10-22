import React from 'react'

function Animal({name,img,des, width, back}) {
  return (
    <div style={{border: "2px solid black", display: "flex", flexDirection: "column", width: width, margin: 10, padding: 10, alignItems: "center", backgroundColor: back}}>
      <h1>{name}</h1>
      <img src={img} style={{maxWidth: "80%"}}/>
      <p>{des}</p>
    </div>
  )
}

export default Animal
