import Logo from "../images/Logo.png"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="flex justify-between rounded-2xl ">
            <div className="h-25" >
                <Link to="/">
                    <img className="h-20 ml-7 my-2 "src={Logo} alt="EatSafe"/>
                </Link>
            </div>
            <div className="mx-15 my-auto">
                <Link className="text-xl mr-3" to="/">Home</Link>
                <Link className="ml-4 text-xl mr-3" to="/about">About</Link>
                <Link className="ml-4 text-xl mr-3" to="/contact">Contact</Link>
                <Link className="ml-4 text-xl mr-3" to="/guide">User Guide</Link>
            </div>
        </div>
    )
}

export default Header;