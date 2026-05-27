import Background from '../images/background.png'
import PageTitle from '../components/PageTitle'
import Card2 from '../components/Card2'
import ShieldLeaf from '../images/shieldLeaf.png'
import OpenAI from '../images/OpenAI_Logo.png'
import Tick from '../images/Tick.png'
import Heart from '../images/Heart.png'
import Keyboard from '../images/Keyboard.png'
import AIChip from '../images/AIchip.png'
import Magnifier from '../images/Magnifier.png'
import Notebook from '../images/Notebook.png'
import { faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import API from "../api/axiosInstance"

function Home() {
  const title = "Know What's Safe For YOU";
  const paragraph = "Enter any processed food product and your health conditions. We'll analyse the ingredients using AI and tell you what's safe for you."
  
  const cards2 = [
    {
      image:Keyboard,
      title:"Enter Product",
      description:"Type the name of any processed food product."
    },
    {
      image:AIChip,
      title:"AI Finds Ingredients",
      description:"OpenAI API extracts the ingredients list."
    },
    {
      image:Magnifier,
      title:"Analyze and Check Risks",
      description:"We check for allergens, harmful additives & disease impact."
    },
    {
      image:Notebook,
      title:"Get Safety Insights",
      description:"Receive your personalized safety report and suggestions."
    }
  ]

  const [productName,setProductName] = useState("")
  const [diseaseName,setDiseaseName] = useState("")

  const handleSubmit = async () => {
    try{
      const response = await API.post(
          "/v1/examine-product",{
            productName: productName,
            diseaseName : [diseaseName]
          }
      )
      console.log(response.data)
    }catch(e){
      console.log("Axios Error:",e)
    }
      
  }

  return (
    <div className="mb-2">
      <div className="w-full min-h-1/2 pb-37 pt-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})`}}>
        <PageTitle title={title} paragraph ={paragraph}/>

        <div className="bg-white rounded-2xl h-auto w-100 mx-20 p-3 shadow-md hover:shadow-green-700 hover:shadow-md hover:scale-101">
          <p className="text-base font-semibold pl-1" >Enter the Product's name</p>
          <input className="w-full border border-gray-300 rounded-lg px-3 my-2 text-base py-1" 
            type='text' 
            placeholder="E.g. Maggie, Oreo"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            />
          <p className="text-base font-semibold pl-1">Add any disease or allergy(optional)</p>
          <input className="w-full border border-gray-300 rounded-lg px-3 py-1 mt-1 mb-2 text-base " 
          type='text'
          placeholder="E.g. Lactose Intolerance"
          value={diseaseName}
          onChange={(e) => setDiseaseName(e.target.value)}
          />      
          <button className=" bg-green-600 rounded-xl text-white py-1 px-5 w-full text-base hover:scale-102 " onClick={handleSubmit}><FontAwesomeIcon className="mr-2" icon={faWandMagicSparkles}/>Analyze Food</button>
        </div>

      </div>

      <div className="flex justify-center">
        <div className="h-px w-1/3 bg-black/50 my-auto mx-5"></div>
        <span className="flex justify-center m-2" >Working</span>
        <div className="h-px w-1/3 bg-black my-auto mx-5"></div>
      </div>

      <div className="flex justify-center">
      {
        cards2.map((card,index)=>(
          <Card2 key={index}{...card}/>
        ))
      }
      </div>

      <div className="bg-green-100 flex justify-between w-270 mx-auto p-4 rounded-2xl ">
        <div className="flex">
          <img className="h-10 m-2 my-auto" src={ShieldLeaf}/>
          <div>
            <h1>Your Health. Our Priority</h1>
            <p className="text-gray-600">Make informed choices. Eat Safe. Live Healthy.</p>
          </div>
        </div>

        <div className="flex divide-x divide-gray-300 ">
          <div className="flex mr-2.5 pr-3">
            <img className="h-7 my-auto m-2" src={OpenAI}/>
            <div>
              <h1>AI Powered</h1>
              <p className="text-gray-500 text-sm">by OpenAI </p>
            </div>
          </div>
          <div className="flex mr-2.5 pr-3">
            <img className="h-7 my-auto m-2" src={Tick}/>
            <div>
              <h1>Trusted by</h1>
              <p className="text-gray-500 text-sm">Food Lovers</p>
            </div>
          </div>
          <div className="flex mr-2.5 pr-3">
            <img className="h-7 my-auto m-2" src={Heart}/>
            <div>
              <h1>Built for</h1>
              <p className="text-gray-500 text-sm">Your Health</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home