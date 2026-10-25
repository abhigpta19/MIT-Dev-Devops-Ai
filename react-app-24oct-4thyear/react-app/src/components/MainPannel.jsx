import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";

//conditional rendering
function MainPannel({state}) {

    if(state === "home")
    {
        return <Home/>;
    }

    if(state=== "about")
    {
        return <About/>;
    }

    if(state === "contact")
    {
        return <Contact/>;
    }

    return <NotFound/>;
}

export default MainPannel
