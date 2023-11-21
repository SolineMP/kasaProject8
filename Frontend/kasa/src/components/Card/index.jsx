import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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
    <div>
        {data.map((property) =>
            <React.Fragment key={property.id}>
                <div onClick={() => handlePage(property.id)} >
                    <img src={`${property.cover}`}  alt="Appartement proposé par l'application Kasa" />
                    <p>{property.title}</p>
                </div>
            </React.Fragment>
        )}
    </div>
  )
}

export default Card;