// 1. Create the main card
const card = document.createElement("div");

card.style.width = "300px";
card.style.padding = "20px";
card.style.border = "1px solid #ccc";
card.style.borderRadius = "12px";
card.style.fontFamily = "Arial";

// 2. Create heading
const heading = document.createElement("h2");
heading.innerText = "Abhishek Gupta";

// 3. Create description
const description = document.createElement("p");
description.innerText = "Software Engineer & Full Stack Developer";

// 4. Create skills
const skills = document.createElement("p");
skills.innerText = "Skills: JavaScript, React, Node.js, Go";

// 5. Create button
const button = document.createElement("button");
button.innerText = "Follow";

button.style.padding = "10px 20px";
button.style.cursor = "pointer";

// 6. Add click event
button.addEventListener("click", () => {
    button.innerText = "Following";
    button.disabled = true;
});

// 7. Put everything inside the card
card.appendChild(heading);
card.appendChild(description);
card.appendChild(skills);
card.appendChild(button);

// 8. Put the card on the webpage
document.body.appendChild(card);