

import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { PropTypes } from 'prop-types';
import { Container, CardA, CardB, Img, Img2, Img3, TextBefore, TextFlipped, Popout} from './CardFlip.elements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from '../Gallery/Gallery';


const GalleryCardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  

  
  const handleClick = () => {
    setIsFlipped(!isFlipped);

  };

 

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
            <span onClick={handleClick} className='gal-back-btn'>X</span>   
                <Gallery />                                                           
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