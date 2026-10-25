import "./Header.css"
function Header({state})
{   
    alert("this is my header");
    return (
    <div className="header-container">
        <div className="header-item" style={{backgroundColor: state==="home"?"aqua":"white"}}>Home</div>
        <div className="header-item" style={{backgroundColor: state==="about"?"aqua":"white"}}>About</div>
        <div className="header-item" style={{backgroundColor: state==="contact"?"aqua":"white"}}>Contacts</div>
    </div>)
}

export default Header;