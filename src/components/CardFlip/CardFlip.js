
import "./CardFlip.css";
import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { PropTypes } from 'prop-types';


const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);

  };

    return (
      <div className="cards">        
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div onClick={handleClick} className="card">
            <div className="card-body">        
              <img className='card-img'src={props.img} alt="" /> 
              <div className="card-text"> 
                {props.text}
              </div> 
            </div>
          </div>         
          <div onClick={handleClick}  className="card-flipped">
            <div className="card-body-flipped">
              <img className='card-img'src={props.img2} alt="" /> 
              <div className="card-flipped-text">
                {props.textFlipped}            
              </div>   
            </div>
          </div>        
        </ReactCardFlip>
      </div> 
    )
  }

  CardFlip.propTypes = {
    text: PropTypes.string,
    textFlipped: PropTypes.string,
    textFlippedOuter: PropTypes.string,
    img: PropTypes.string,
    img2: PropTypes.string,
  };
  


export default CardFlip;