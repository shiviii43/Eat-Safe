import Logo from '../images/Favicon.png'
import Instagram from '../images/insta.png'
import Gmail from '../images/gmail.png'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedIn.png'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className="bg-gray-900 flex justify-between mt-3">            
            <Link className="flex" to="/">
                <img  className="h-10 m-5 mr-3 rounded-3xl" src={Logo} alt="Logo"/>
                <h1 className=" text-amber-50 my-7 text-xl">Eat <span className="text-green-500 text-xl">Safe</span></h1>
            </Link>
            <div className="flex my-7 mx-10">
                <a href="https://www.instagram.com/shivanshharbola_/" target='_blank'><img className="h-5 ml-3" src={Instagram}/></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivanshharbola190259@gmail.com" target="_blank"><img className="h-5 ml-4 pt-1" src={Gmail}/></a>
                <a href="https://github.com/shiviii43" target="_blank"><img  className="h-5 ml-4" src={Github}/></a>
                <a href="" target="_blank"><img className="h-5 ml-4"src={LinkedIn}/></a>
            </div>
        </div>
    )
}
export default Footer;