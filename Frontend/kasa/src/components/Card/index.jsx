import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./card.css"


function Card() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then((data) => {
          setData(data)
    })
      .catch(error => navigate('*'));
  }, []);
  
  const handlePage = (id) => {
    navigate(`/appartement/${id}`)
  }

  return (
    <div className='proprety__grid'>
        {data.map((property) =>
            <React.Fragment key={property.id}>
                <div className='proprety__grid--card' onClick={() => handlePage(property.id)} >
                    <img className='proprety__grid--img'  src={`${property.cover}`}  alt="Appartement proposé par l'application Kasa" />
                    <p className='proprety__grid--title'>{property.title}</p>
                </div>
            </React.Fragment>
        )}
    </div>
  )
}

export default Card;