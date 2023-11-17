import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Accordion.css' 

function Accordion(props) {

    const [isActive, setIsActive] = useState(false)
    
    const handleShow = event => {
        setIsActive(current => !current)
    }

    return (
        <div> 
                <div>
                    <h3>{props.factAbout.title}</h3>
                    <FontAwesomeIcon icon={faChevronUp} onClick={handleShow} className={`${isActive ? 'isActive' : 'hideContent'}`} />
                    <FontAwesomeIcon icon={faChevronDown} onClick={handleShow} className={`${isActive ? 'hideContent' : 'isActive'}`} />
                </div>
                <div>  
                    <p className={`${isActive ? 'isActive' : 'hideContent'}`}>{props.factAbout.paragraph}</p>
                </div>
        </div>
    )
}

export default Accordion