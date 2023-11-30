import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './carroussel.css'



function Carroussel({ images, cover }) {     
    const [current, setCurrent] = useState(0);
        
    const handleLeftClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        } else {
            setCurrent(images.length - 1);
        }
    }

    const handleRightClick = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    }
     
    return (
        <div className="carroussel">
            <img src={images !== undefined ? images[current] : cover } alt="appartement" className="carroussel__img"/>
            { images?.length > 1 ?  
                <div>
                    <FontAwesomeIcon onClick={handleLeftClick} icon={faChevronLeft} className="carroussel__icon carroussel__icon--left"></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={handleRightClick} icon={faChevronRight} className="carroussel__icon carroussel__icon--right"></FontAwesomeIcon>
                    <p className="carroussel__text">{current + 1}/{images.length}</p>
                </div>
            : "" }
        </div>
      );

}

export default Carroussel 