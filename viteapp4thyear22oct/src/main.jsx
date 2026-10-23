import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const ele = React.createElement("h1",{className:"red"},"Hello this is from react");

// const ele  = <h1 className="red">Hello this is from reacrt</h1>

// function App()
// {
//     return <h1>this is my app component</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);