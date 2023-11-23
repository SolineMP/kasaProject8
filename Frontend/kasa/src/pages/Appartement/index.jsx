import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ButtonTag from "../../components/ButtonTag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Accordion from "../../components/Accordion/Accordion.jsx"
import Carroussel from "../../components/Carroussel";
import './appartement.css';


function Appartement() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        fetch(`http://localhost:8080/api/properties/${id}`)
        .then(response => response.json())
        .then((data) => {
            setData(data)
        })
        .catch(error => navigate("*"));
    }, []);

    
    const tagArray = data.tags 
    const hostObj = data.host
    const rating = data.rating
    const description = data.description
    const equipments = data.equipments 
    const equipmentsList = equipments?.map((equipment) => (
        <li className="accordion__property_equip" key={equipment}>{equipment}</li>
      ));
    

      return (
            <div className="mainContent">
                    <div>
                        <section>
                            <Carroussel images={data.pictures} cover={data.cover} />
                        </section>
                        <section className="iddentification">
                            <article className="iddentification__main">
                                <div className="iddentification__main--title">
                                    <h1 className="iddentification__main--titleBig">{data.title}</h1>
                                    <h3 className="iddentification__main--titleSmall">{data.location}</h3>
                                </div>
                                <div>
                                    <ButtonTag valueTag={tagArray} />
                                </div>
                            </article>
                            <article className="iddentification__aside">
                                <Host valueHost={hostObj} />
                                <Rate valueRate={rating}/>
                            </article>
                        </section>
                        <section className="description">
                            <div className="accordion__property"> 
                            <Accordion title="Description" txt={description} /> 
                            </div>
                            <div className="accordion__property">
                            <Accordion title="Équipements" txt={equipmentsList} />
                            </div>
                        </section>
                    </div>
            </div>
        )    
}

export default Appartement