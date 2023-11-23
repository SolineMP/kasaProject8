import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Accordion.css' 

function Accordion({ title, txt }) {

    const [isActive, setIsActive] = useState(false)
    
    const handleShow = event => {
        setIsActive(current => !current)
    }

    return (
        <div className="accordion__total"> 
                <div className="accordion__title">
                    <h3>{title}</h3>
                    <FontAwesomeIcon icon={faChevronUp} onClick={handleShow} className={`${isActive ? 'isActive' : 'hideContent'} accordion__icon`} />
                    <FontAwesomeIcon icon={faChevronDown} onClick={handleShow} className={`${isActive ? 'hideContent' : 'isActive'} accordion__icon`} />
                </div>
                <div className="test">  
                    <p className={`${isActive ? 'isActive' : 'hideContent'} accordion__text`}>{txt}</p>
                </div>
        </div>
    )
}

export default Accordion