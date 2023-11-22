import Banner from '../../components/Banner'
import Accordion from '../../components/Accordion/Accordion'
import secondBanner from '../../assets/secondBanner.png'

function About() {
    const factsAbout = [ 
        {id : 1, title : "Fiabilité", txt : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."  },
        {id : 2, title : "Respect", txt : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        {id : 3, title : "Service", txt : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
        {id : 4, title : "Sécurité", txt : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
    ]

    return (
        <div>
            <div>
                <Banner bannerName={secondBanner} />
            </div>
            <div className='accordion'>
                {factsAbout.map((factAbout) => <Accordion key={factAbout.id} title={factAbout.title} txt={factAbout.txt} /> )}
            </div>
        </div>
    )
    
  }
  
  export default About;