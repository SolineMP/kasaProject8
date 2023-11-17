import firstBanner from '../../assets/firstBanner.png'
import Card from '../../components/Card'
import Banner from '../../components/Banner'

function Home() {
  return (
    <div>
      <h1> Page d'accueil</h1>
      <Banner bannerName={firstBanner} />
      <Card />
    </div>
  )
}

export default Home
