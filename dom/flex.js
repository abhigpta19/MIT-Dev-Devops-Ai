const div1 = document.createElement("div");
const heading = document.createElement("h1");
heading.innerText = "this is a heading";
const p = document.createElement("p");
p.innerText = "this is a paragraph";

div1.append(heading);
div1.append(p);

document.body.append(div1);