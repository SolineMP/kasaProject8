import firstBanner from '../../assets/firstBanner.png'
import Card from '../../components/Card'

function Home() {
  return (
    <div>
      <h1> Page d'accueil</h1>
      <img src={firstBanner} alt="bannière du site Kasa" />
      <Card />
    </div>
  )
}

export default Home
