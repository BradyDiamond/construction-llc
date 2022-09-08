

import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { PropTypes } from 'prop-types';
import { Container, CardA, CardB, Img, Img2, Img3, TextBefore, TextFlipped, Popout} from './CardFlip.elements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdBackspace } from 'react-icons/md';


const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  

  
  const handleClick = () => {
    setIsFlipped(!isFlipped);

  };

  const handleZoom = () => {
    setIsZoomed(!setIsZoomed);

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
        

          <Row>
            <CardB onClick={handleClick} >  
              <Col>  
                <Img2 src={props.img2} alt="" />
                <Img3 src={props.img3} alt="" /> 
                    
              </Col>  
              <Col>
                <TextFlipped>               
                  {props.textFlipped0}<br/>
                  {props.textFlipped1}<br/>
                  {props.textFlipped2}<br/>
                  {props.textFlipped3}<br/>
                  {props.textFlipped4}<br/>  
                  {props.textFlipped5}<br/>  
                  {props.textFlipped6}<br/>
                  <span className='back-btn'>X</span> 
                  
                </TextFlipped>       
                
              </Col>                                                                        
            </CardB>  
          </Row>    
        </ReactCardFlip>
      </Container>
    </>
  
    )
  }

  CardFlip.propTypes = {
    text: PropTypes.string,
    textFlipped0: PropTypes.string,
    textFlipped1: PropTypes.string,
    textFlipped2: PropTypes.string,
    textFlipped3: PropTypes.string,
    textFlipped4: PropTypes.string,
    textFlipped5: PropTypes.string,
    textFlipped6: PropTypes.string,
    textFlippedOuter: PropTypes.string,
    img: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
  };
  


export default CardFlip;