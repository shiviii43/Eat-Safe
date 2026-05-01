import Background from '../images/background.png'
import PageTitle from '../components/PageTitle'
import Card1 from '../components/Card1';
import AIbrain from '../images/AIbrain.png'
import ShieldLeaf from '../images/shieldLeaf.png'

function Home() {
  const title = "Know What's Safe For YOU";
  const paragraph = "Enter any processed food product and your health conditions. We'll analyse the ingredients using AI and tell you what's safe for you."
  
  return (
    <div>
      <div className="w-full min-h-70" style={{ backgroundImage: `url(${Background})`}}>
        <PageTitle title={title} paragraph ={paragraph}/>
      </div>
      <div>
        <span className="flex justify-center m-2" >How it Works</span>
      </div>
      <div className="bg-green-100">
        <div>
          <img className="h-10" src={ShieldLeaf}/>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home