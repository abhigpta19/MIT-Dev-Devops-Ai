import React from 'react'

function Animal({name, img, desc, diet, isBird, width}) {

    let color = null;

    if(diet === "herb")
        color="green";
    else if(diet === "omni")
        color="yellow";
    else
        color = "red";

    const blogStyle = {
        display: "flex",
        flexDirection: "column",
        width: width,
        border: "2px solid black",
        alignItems: "center",
        backgroundColor: color
    }

  return (
    <div style={blogStyle}> 
      <h1>{isBird?"Bird":"Animal"} Blog: {name}</h1>
      <img src={img} style={{maxWidth: "80%"}}/>
      <h4>{desc}</h4>
    </div>
  )
}

export default Animal;