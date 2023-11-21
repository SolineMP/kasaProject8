import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'



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
        <div>
            <img src={images !== undefined ? images[current] : cover } alt="appartement"/>
            { images?.length > 1 ?  
                <div>
                    <FontAwesomeIcon onClick={handleLeftClick} icon={faChevronLeft}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={handleRightClick} icon={faChevronRight}></FontAwesomeIcon>
                </div>
            : "" }
        </div>
      );

}

export default Carroussel 