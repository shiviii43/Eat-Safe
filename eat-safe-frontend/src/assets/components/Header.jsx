import Logo from "../images/Logo.png"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="flex justify-between">
            <div className="h-10">
                <Link to="/">
                    <img className="h-18 ml-5 mt-2"src={Logo} alt="EatSafe"/>
                </Link>
            </div>
            <div className="mx-10 my-5">
                <Link  to="/">Home</Link>
                <Link className="ml-4" to="/about">About</Link>
                <Link className="ml-4" to="/contact">Contact</Link>
                <Link className="ml-4" to="/guide">User Guide</Link>
            </div>
        </div>
    )
}

export default Header;