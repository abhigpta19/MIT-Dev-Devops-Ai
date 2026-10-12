
{/* <div>this is a div</div> */}

// React.createElement('div',null,"this is a div");


{/* <h1>this is a heading</h1> */}

const reactHeading = React.createElement("h1", null, "this is a heading in react");

const rootDom = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootDom);

// reactRoot.render(reactHeading);