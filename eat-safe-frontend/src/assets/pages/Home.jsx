import Background from '../images/background.png'
import PageTitle from '../components/PageTitle'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import AIbrain from '../images/AIbrain.png'
import Shield from '../images/shield.png'
import ShieldLeaf from '../images/shieldLeaf.png'
import OpenAI from '../images/OpenAI_Logo.png'
import GrowthChart from '../images/growthChart.png'
import Leaf from '../images/leaf.png'
import Tick from '../images/Tick.png'
import Heart from '../images/Heart.png'
import Keyboard from '../images/Keyboard.png'
import AIChip from '../images/AIchip.png'
import Magnifier from '../images/Magnifier.png'
import Notebook from '../images/Notebook.png'
import { faWandMagicSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  const title = "Know What's Safe For YOU";
  const paragraph = "Enter any processed food product and your health conditions. We'll analyse the ingredients using AI and tell you what's safe for you."
  
  const cards1 = [
    {
      image:AIbrain,
      title:"AI Ingredient Extraction",
      description:"We find the ingredients of the processed food using OpenAI."
    },
    {
      image:Shield,
      title:"Allery and Disease Detection",
      description:"We check ingredients against your health conditions."
    },
    {
      image:GrowthChart,
      title:"Smart Risk Analysis",
      description:"We analyse risk, additives, and nutritional impact."
    },
    {
      image:Leaf,
      title:"Healthier Recommendations",
      description:"We suggest better and safer alternatives for you. "
    }
  ]
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


  return (
    <div>
      <div className="w-full min-h-115 py-10 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${Background})`}}>
        <PageTitle title={title} paragraph ={paragraph}/>

        <div className="bg-white rounded-2xl h-auto w-100 mx-12 p-2 shadow-md hover:shadow-green-700 hover:shadow-md hover:scale-101">
          <input className="w-full border border-gray-300 rounded-lg px-3 my-1 text-xs py-1" placeholder="Enter Product name (e.g. Maggie, Oreo, Protien Bar)"></input>
          <p className="text-xs font-semibold pl-1">Add any disease or allergy(optional)</p>
          <input className="w-full border border-gray-300 rounded-lg px-3 py-1 mt-1 mb-2 text-xs "></input>        
          <button className=" bg-green-600 rounded-xl text-white py-1 px-5 w-full text-sm hover:scale-102 " ><FontAwesomeIcon className="mr-1" icon={faWandMagicSparkles}/>Analyze Food</button>
        </div>

      </div>

      <div className="flex justify-center">
      {cards1.map((card,index) => (
        <Card1 key={index} {...card}/>
      ))}
      </div>

      <div>
        <span className="flex justify-center m-2" >How it Works</span>
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