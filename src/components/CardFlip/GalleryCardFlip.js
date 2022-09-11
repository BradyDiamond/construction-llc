

import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { PropTypes } from 'prop-types';
import { Container, CardA, CardB, Img,TextBefore} from './CardFlip.elements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from '../Gallery/Gallery';
import "../Gallery/Gallery.css";


const GalleryCardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);


  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
    showGallery();
    
  };
  const handleClose = () => {   
    setIsFlipped(!isFlipped);
    hideGallery();
  };


  function showGallery() {
    document.getElementById("gallery-card").classList.remove("hidden");
    document.getElementById("gallery-card").classList.add("visible");
  }

  function hideGallery() {
    document.getElementById("gallery-card").classList.remove("visible");
    document.getElementById("gallery-card").classList.add("hidden");
  }



    return (
        <>
        <Container>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={.00006}>
          <Row >
            <CardA onClick={handleClick}>  
              <Col>
                <Img src={props.img} alt="" />
              </Col>
              <Col>
                <TextBefore>  
                  {props.text}                   
                </TextBefore>  
              </Col>                 
            </CardA>  
          </Row>
      
            <CardB >
              <div onClick={handleClose}  className='gal-back-btn'>X</div>    
              <div id='gallery-card' className="hidden">
                <Gallery  />  
              </div>   
              <div onClick={handleClose}  className='gal-back-btn'>X</div> 
                                                              
            </CardB>  
          
        </ReactCardFlip>
      </Container>
    </>
  
    )
  }

  GalleryCardFlip.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,

  };
  


export default GalleryCardFlip;