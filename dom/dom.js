// const body = document.body;
// const div1 = body.children[0];
// const h1 = div1.children[0];

// const h1 = document.getElementById("head1");
// h1.innerText = "js editor";
// h1.style.color="blue";

// document.title = "hehe";

// // const box2 = document.getElementById("box2");
// // box2.style.backgroundColor = "red";

// const box = document.getElementsByClassName("box");
// box[1].style.backgroundColor="blue";

const container = document.getElementsByClassName("container")[0];
container.style.display="flex";
container.style.width = "1000px";
container.style.border = "2px solid black";


const footerDiv = document.createElement("div");
footerDiv.innerText = "this is a footer";


const div4 = document.createElement("div");
div4.innerText = "box 4";
container.append(div4);

div4.classList.add("box");
div4.classList.add("redback");



function toggleColor(e)
{
    console.log(e);
    div4.classList.toggle("redback");
}

function sayHello(e)
{
    console.log(e.target.value);
}

const inputarea = document.getElementById("inputarea");
inputarea.addEventListener("keyup",sayHello);





// document.removeEventListener

//querySelector get
//append appendChild. children childNodes sibling innerText innerhtml ancesstor
//attributes. 




