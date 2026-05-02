import { Link } from 'react-router-dom'
import Shield from '../images/shieldLeaf.png'
import Maggie from '../images/Maggie.png'

function Result(){
    return(
        <>
            <Link to="/">
                <span className="">Back to Home</span>
            </Link>

            <div>
                <img className="h-30" src={Maggie}/>
            </div>

            <div className="bg-green-100 flex justify-center p-2">
                <img className="h-7 my-auto mx-3" src={Shield}/>
                <div>
                    <p className=" text-sm"><span className="font-bold">Disclaimer: </span> Our analysis is AI-generated and for informational purpose only.</p>
                    <p className='text-sm'>It is not a substitute for professional medical advice.</p>
                </div>
            </div>
        </>
    )
}

export default Result