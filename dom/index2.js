// ===============================
// 1. Create Main Container
// ===============================

const card = document.createElement("div");

card.style.width = "320px";
card.style.padding = "24px";
card.style.borderRadius = "16px";
card.style.backgroundColor = "#f5f5f5";
card.style.fontFamily = "Arial";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";


// ===============================
// 2. Create Header
// ===============================

const header = document.createElement("div");

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";


// ===============================
// 3. Create Name
// ===============================

const name = document.createElement("h2");

name.innerText = "Abhishek Gupta";
name.style.margin = "0";


// ===============================
// 4. Create Status
// ===============================

const status = document.createElement("span");

status.innerText = "● Online";
status.style.fontSize = "12px";


// Put name + status inside header
header.append(name, status);


// ===============================
// 5. Create Description
// ===============================

const description = document.createElement("p");

description.innerText =
    "Software Engineer & CSE Graduate. I love building products and teaching developers.";

description.style.lineHeight = "1.5";
description.style.color = "#555";


// ===============================
// 6. Create Skills Container
// ===============================

const skillsContainer = document.createElement("div");

skillsContainer.style.display = "flex";
skillsContainer.style.justifyContent = "space-between";
skillsContainer.style.marginTop = "20px";


// ===============================
// 7. Create Skills
// ===============================

const skills = ["JavaScript", "React", "Node.js", "Go"];

skills.forEach((skill) => {

    const skillElement = document.createElement("span");

    skillElement.innerText = skill;

    skillElement.style.padding = "6px 8px";
    skillElement.style.borderRadius = "6px";
    skillElement.style.backgroundColor = "white";
    skillElement.style.fontSize = "11px";

    skillsContainer.append(skillElement);
});


// ===============================
// 8. Create Button Container
// ===============================

const buttonContainer = document.createElement("div");

buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-between";
buttonContainer.style.marginTop = "25px";


// ===============================
// 9. Create Buttons
// ===============================

const githubButton = document.createElement("button");

githubButton.innerText = "GitHub";

const contactButton = document.createElement("button");

contactButton.innerText = "Contact";


// Style buttons
githubButton.style.padding = "8px 16px";
contactButton.style.padding = "8px 16px";

githubButton.style.border = "none";
contactButton.style.border = "none";

githubButton.style.borderRadius = "8px";
contactButton.style.borderRadius = "8px";

githubButton.style.cursor = "pointer";
contactButton.style.cursor = "pointer";


// Put buttons inside container
buttonContainer.append(
    githubButton,
    contactButton
);


// ===============================
// 10. Assemble Everything
// ===============================

card.append(
    header,
    description,
    skillsContainer,
    buttonContainer
);


// ===============================
// 11. Put Card on Page
// ===============================

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";

document.body.append(card);