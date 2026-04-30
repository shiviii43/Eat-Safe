import Background from '../images/background.png'
import PageTitle from '../components/PageTitle'

function Home() {
  const title = "Know What's Safe For YOU";
  const paragraph = "Enter any processed food product and your health conditions. We'll analyse the ingredients using AI and tell you what's safe for you."
  
  return (
    <div className="" style={{ backgroundImage: `url(${Background})`}}>
      <PageTitle title={title} paragraph ={paragraph}/>
    </div>
  )
}

export default Home