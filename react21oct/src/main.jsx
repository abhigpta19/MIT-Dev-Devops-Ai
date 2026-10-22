import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"

// const ele = React.createElement("h1",null,"this is the react element from main file");
// const ele = <h1>this is jsx inside main</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);