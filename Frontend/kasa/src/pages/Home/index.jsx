import firstBanner from '../../assets/firstBanner.png'
import Card from '../../components/Card'
import Banner from '../../components/Banner'

function Home() {
  return (
    <div>
      <Banner bannerName={firstBanner} text="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  )
}

export default Home
