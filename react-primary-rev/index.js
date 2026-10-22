
// const reactEle = React.createElement("h1",null,"Hello World from react");

// const reactEle = (<h1>Hello World</h1>);

// const header = (<div>
//     <div>Home</div>
//     <div>ABout</div>
//     <div>Contact</div>
// </div>);   //header element

function Header()
{
    return (<div>
    <div>Home</div>
    <div>ABout</div>
    <div>Contact</div>
</div>);
}

// const footer = (<h1>this is a footer</h1>);

const Footer = ()=>{
    return (<h1>this is a footer</h1>);
}

// const home = (<h1>this is home element</h1>);

const Home = ()=>(<h1>this is home</h1>);


// const homePage = (<div>
//     {Header()}
//     {Home()}
//     {Footer()}
// </div>)

// const HomePage = function(){
//     return (<>
//        {Header()}
//        <Header/>
//        <Header></Header>
//         <Home/>
//         <Footer/>
//     </>)
// }

function Comp({val, color, headingColor,width})
{

    // props = {color: "red", value: 99};

    const styles ={
        border : "2px solid black",
        backgroundColor : color,
        width: width
    }

    return (
        <div style={styles}>
            <h1 style={{color: headingColor}}>this is a heading</h1>
            <p>this is a paragraph</p>
            <h2>{val}</h2>
        </div>
    )
}



const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Comp val="1024" color="yellow" headingColor="blue" width={150}/>);