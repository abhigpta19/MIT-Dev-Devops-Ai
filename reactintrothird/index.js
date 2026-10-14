
// {/* <h1>hello world</h1> */}

// const h1babel = (<h1>Hello</h1>);
// // const h1react = React.createElement("h1",null,"Hello")

// // console.log(JSON.stringify(h1babel) === JSON.stringify(h1react));


// {/* <h1 id="head1" class="headings">hello world</h1> */}

// const attributes = {
//     id: "head1",
//     className: "headings"
// }

// const ele = React.createElement("h1",attributes,"hello world");


// {/* <div id="div1" class="box" arg="xyz">hello</div> */}

// const div1 = React.createElement("div",{id: "div1", className: "box", arg:"xyz"},"hello");


// {/* <div class="container">
//     <div class="box">box 1</div>
// </div> */}

// const innerEle = React.createElement("div",{className: "box"},"box 1");

// const outerEle = React.createElement("div",{className: "container"}, innerEle);


// {/* <div class="container">
//     <div className="box">box1</div>
//     <div className="box">box2</div>
//     <div className="box">box3</div>
// </div> */}

// // React.createElement(
// //     "div",
// //     {className: "container"},
// //     [React.createElement("div",{className:"box"},"box1"), React.createElement("div",{className:"box"},"box2"), React.createElement("div",{className:"box"},"box3")]
// // )

// const box1 = React.createElement("div",{className:"box"},"box 1");
// const box2 = React.createElement("div",{className:"box"},"box 2");
// const box3 = React.createElement("div",{className:"box"},"box 3");

// const cont = React.createElement("div",{className:"container"},[box1,box2,box3]);

// //jsx
// const outer = (<div className="outer">
//     <div id="first">
//         <h1>heading</h1>
//         <p>paragraph</p>
//     </div>
//     <div className="container">
//         <div>box1</div>
//         <div>box2</div>
//     </div>
// </div>);

// // const first = React.createElement("div", {id: "first"},
// //     [React.createElement("h1",null,"heading"), React.createElement("p",null,"paragraph")]);

// // const box11 = React.createElement("div",null,"box 1");
// // const box22 = React.createElement("div",null,"box 2");

// // const container = React.createElement("div",{className:"container"},[box11,box22]);

// // const outer = React.createElement("div",{className:"outer"},[first, container]);



// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);





// const header = (<div className="header">
//     <div>Home</div>
//     <div>About</div>
//     <div>Contact</div>
// </div>);

// const footer = (<h1>this is a footer</h1>);

// const home = (<h1>Home</h1>);


// // const val = 100; 
// // const ele = (<div>This is my div with {val}</div>);

// const page = (<div>
//     {header}
//     {home}
//     {footer}
// </div>)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(page);



function Header()
{
    return (<h1>this is a header</h1>);
}

function Footer()
{
    return (<h1>this is a footer</h1>);
}

function Home()
{
    return (<h1>this is a home component</h1>);
}

function Contact()
{
    return (<h1>this is contact component</h1>);
}

function About()
{
    return (<h1>this is about component</h1>);
}

function NotFound()
{
    return (<h1>404 not found</h1>);
}

function Page()
{
    const pageName = "aboutasfasd";

    let MiddleSection = null;
    if(pageName === "home")
    {
        MiddleSection = Home;
    }
    else if(pageName === "about")
    {
        MiddleSection = About;
    }
    else if(pageName === "contact")
    {
        MiddleSection = Contact;
    }
    else
    {
        MiddleSection = NotFound;
    }

    return (<>
        <Header/>
        <MiddleSection/>
        <Footer/>
    </>);
}

// function AboutPage()
// {
//     return (<>
//         <Header/>
//         <About/>
//         <Footer/>
//     </>);
// }

// function ContactPage()
// {
//     return (<>
//         <Header/>
//         <Contact/>
//         <Footer/>
//     </>);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page/>);