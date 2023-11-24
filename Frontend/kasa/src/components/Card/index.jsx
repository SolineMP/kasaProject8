import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./card.css"
import Error from "../Error"


function Card() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties`)
    .then((response) => {
      // 1. check response.ok
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response); // 2. reject instead of throw
    })
    .then((data) => {
      // all good, token is ready
      setData(data)
    })
    .catch((response) => {
      console.log(response.status, response.statusText);
      // 3. get error messages, if any
      response.json().then((data) => {
        navigate('*') ;
      })
    });
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