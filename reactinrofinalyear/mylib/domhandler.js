const root = document.getElementById("root");

function addTag(tagName, tagText)
{
    const ele = document.createElement(tagName);
    ele.innerText = tagText;
    root.append(ele);
}

function removeRecent(id)
{
    const rootChd = root.children;
    const rem = rootChd[id];
    rem.remove();
}