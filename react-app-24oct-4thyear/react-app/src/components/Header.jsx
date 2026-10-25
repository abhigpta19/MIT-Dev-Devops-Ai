import "./Header.css";
function Header({state})
{
    alert("header component");
    
    return <div className="header-container">
        <div style={{backgroundColor: (state==="home")?"aqua":"white"}}>Home</div>
        <div style={{backgroundColor: (state==="about"?"aqua":"white")}}>About</div>
        <div style={{backgroundColor: (state==="contact")?"aqua":"white"}}>Contact</div>
    </div>
}

export default Header;