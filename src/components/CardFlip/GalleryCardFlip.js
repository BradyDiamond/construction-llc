

import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { PropTypes } from 'prop-types';
import { Container, CardA, CardB, Img, Img2, Img3, TextBefore, TextFlipped, Popout} from './CardFlip.elements';
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
  // write a function to remove the class of "hidden" on the gallery div

  function showGallery() {
    document.getElementById("gallery").classList.remove("hidden");
  }

  function hideGallery() {
    document.getElementById("gallery").classList.add("hidden");
  }


    return (
        <>
        <Container>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
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
              <div id="gallery" className="hidden">
                <Gallery />  
              </div>                                                         
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