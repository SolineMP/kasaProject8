import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rate(props) {
    const rating = props.valueRate
    return (
        <div className='iddentification__aside--rate'>
            {
            [...Array(5)].map((icon, i) => {
                i ++
                return <FontAwesomeIcon key={Math.random()} icon={faStar} color={ i <= rating ? "#FF6060" : "#D3D3D3"}/>
                }) 
            }                                                                     
        </div>
    )
}

export default Rate
