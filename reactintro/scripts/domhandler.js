const root = document.getElementById("root");

function createTag(tagName, text)
{
    const element = document.createElement(tagName);
    element.innerText = text;
    root.appendChild(element);
}

function deleteRecent()
{
    const allEle = root.children;
    const lastEle = allEle[allEle.length-1];
    lastEle.remove();
}