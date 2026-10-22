// const h1 = (<h1>hello world</h1>); 

// // // const h1 = document.createElement("h1");
// // // h1.innerText = "hello world";

// // const h1react = React.createElement("h1",null,"helloworld");


// const divBabel = (<div id="div1" className="box" att="xyz">hello</div>)

// // const attributes = {
// //     id : "div1",
// //     className: "box",
// //     att: "xyz"
// // }

// // const divReact = React.createElement("div",attributes,"hello");

// // {/* <div class="container">
// //     <div class="box">Box</div>
// // </div> */}

// // const inner = React.createElement("div",{className: "box"},"Box");
// // const outer = React.createElement("div",{className: "container"}, inner);


// const container = (<div id="container">
//     <div className="box">box1</div>
//     <div className="box">box2</div>
//     <div className="box">box3</div>
// </div>);

// // const b1 = React.createElement("div",{className: "box"}, "box1");
// // const b2 = React.createElement("div",{className: "box"}, "box2");
// // const b3 = React.createElement("div",{className: "box"}, "box3");

// // const container = React.createElement("div",{id:"container"},[b1,b2,b3]);



// const nested = (<div className="nested">
//     <div id="first">
//         <h1>Heading</h1>
//         <p>Paragraph</p>
//     </div>
//     <div className="second">
//         <div>box1</div>
//         <div>box2</div>
//     </div>
// </div> );

// // const first = React.createElement("div",{id:"first"},
// //     [React.createElement("h1",null,"Heading"), React.createElement("p",null,"Paragraph")]
// // );

// // const second = React.createElement("div", {className: "second"},
// //     [React.createElement("div",null,"box1"), React.createElement("div",null,"box2")]
// // )

// // const nested = React.createElement("div", {className:"nested"},[first, second]);


// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);







// // const ele = React.createElement("h1",{id:"head"},"helloworld from react");

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // setTimeout(()=>{
// //     root.render(ele)
// // },5000);


// const header = (<div className="header">
//     <div>Home</div>
//     <div>Contact</div>
//     <div>About</div>
// </div>)

function Header()
{
    return (<div className="header">
        <div>Home</div>
        <div>ABout</div>
        <div>Contact</div>
    </div>);
}

// const footer = (<h1>this is a footer</h1>)

function Footer()
{
    return (<h1>this is a footer</h1>);
}

// const home = (<h1>this is my home</h1>);

function Home()
{
    return (<h1>this is my home</h1>);
}

// const about = (<h1>this is my about</h1>);

function About()
{
    return (<h1>this is my about</h1>);
}

// const contact = (<h1>this is my contact</h1>)
function Contact()
{
    return (<h1>this is my contact</h1>);
}



// const homePage = (<div>
//     <Header/>
//     <Home/>
//     <Footer/>
// </div>);


function Page()
{
    const type="about";

    let MiddleSection=null;

    if(type === "home")
        MiddleSection = Home;
    else if(type === "about")
        MiddleSection = About;
    else
        MiddleSection = Contact;


    return (<>
     <Header/>
     <MiddleSection/>
     <Footer/>
    </>)
}

// function HomePage()
// {
//     return (
//         <>
//             <Header/>
//             <Home/>
//             <Footer/>
//         </>
//     )
// }

// function AboutPage()
// {
//     return (
//         <>
//             <Header/>
//             <About/>
//             <Footer/>
//         </>
//     )
// }

// function ContactPage()
// {
//     return (
//         <>
//             <Header/>
//             <Contact/>
//             <Footer/>
//         </>
//     )
// }

// const aboutPage = (<div>
//     {header}
//     {about}
//     {footer}
// </div>);




// const val = 100; 
// const ele = (<h1>this is a heading with {val}</h1>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);



