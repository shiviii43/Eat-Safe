import Logo from '../images/favicon.png'
import Instagram from '../images/insta.png'
import Gmail from '../images/gmail.png'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedIn.png'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className="bg-gray-900 flex justify-between">            
            <Link className="flex" to="/">
                <img  className="h-15 my-auto ml-15 mr-3 rounded-3xl" src={Logo} alt="Logo"/>
                <h1 className=" text-amber-50 my-7 text-2xl">Eat <span className="text-green-500 text-2xl">Safe</span></h1>
            </Link>
            <div className="flex my-auto mr-15">
                <a href="https://www.instagram.com/shivanshharbola_/" target='_blank'><img className="h-7 ml-5" src={Instagram}/></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivanshharbola190259@gmail.com" target="_blank"><img className="h-7 ml-5 pt-0.5" src={Gmail}/></a>
                <a href="https://github.com/shiviii43" target="_blank"><img  className="h-7 ml-5" src={Github}/></a>
                <a href="https://www.linkedin.com/in/shivanshharbola19/" target="_blank"><img className="h-7 ml-5"src={LinkedIn}/></a>
            </div>
        </div>
    )
}
export default Footer;