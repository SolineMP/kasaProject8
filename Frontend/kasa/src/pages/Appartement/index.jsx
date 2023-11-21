import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ButtonTag from "../../components/ButtonTag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Accordion from "../../components/Accordion/Accordion.jsx"
import Carroussel from "../../components/Carroussel";


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
        <li key={equipment}>{equipment}</li>
      ));
    

      return (
            <div>
                    <div>
                        <div>
                            <Carroussel images={data.pictures} cover={data.cover} />
                        </div>
                        <div>
                            <h1>{data.title}</h1>
                            <h3>{data.location}</h3>
                        </div>
                        <div>
                            <ButtonTag valueTag={tagArray} />
                        </div>
                        <Host valueHost={hostObj} />
                        <Rate valueRate={rating}/>
                        <Accordion title="Description" txt={description} /> 
                        <Accordion title="Équipements" txt={equipmentsList} />
                    </div>
            </div>
        )    
}

export default Appartement