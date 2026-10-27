import React from 'react'

function Animal({name,img,desc, diet, isBird}) {

    let color = null;

    if(diet === "herb")
        color = "green";
    else if(diet === "omni")
        color="yellow";
    else
        color = "red";
    
  return (
    <div style={{backgroundColor:color, display:"flex", flexDirection:"column", alignItems:"center", width: 600}}>
        <h1>{isBird?"Bird":"Animal"} Blog: {name}</h1>
        <img src={img} alt={name} style={{maxWidth: "80%"}}/>
        <p>{desc}</p>
    </div>
  )
}

export default Animal;