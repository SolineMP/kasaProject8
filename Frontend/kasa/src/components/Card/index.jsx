import React, { useState, useEffect } from 'react';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then((data) => {
          console.log(data)
          setData(data)
    })
      .catch(error => console.error(error));
  }, []);


  return (
    <div>
        {data.map((property) =>
            <React.Fragment key={property.id}>
                <div>
                    <img src={`${property.cover}`}  alt="Appartement proposé par l'application Kasa" />
                    <p>{property.title}</p>
                </div>
            </React.Fragment>
        )}
    </div>
  )
}

export default Card;