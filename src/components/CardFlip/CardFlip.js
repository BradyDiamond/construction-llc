

import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { PropTypes } from 'prop-types';
import { Container, CardA, CardB, Img, TextBefore, TextFlipped, Popout} from './CardFlip.elements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  

  
  const handleClick = () => {
    setIsFlipped(!isFlipped);

  };

    return (
  
         <>
        <Container>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Row >
            <CardA onClick={handleClick}>  
              <Col-6>
                <Img src={props.img} alt="" />
              </Col-6>
              <Col-6>
                <TextBefore>  
                  {props.text}
                  
                </TextBefore>  
              </Col-6>                 
            </CardA>  
          </Row>
        

          <Row>
            <CardB onClick={handleClick} >  
              <Col-6>  
                <Img src={props.img2} alt="" />  
              </Col-6>  
              <Col-6>
                <TextFlipped>               
                  {props.textFlipped0}<br/>
                  {props.textFlipped1}<br/>
                  {props.textFlipped2}<br/>
                  {props.textFlipped3}<br/>
                  {props.textFlipped4}<br/>  
                  {props.textFlipped5}<br/>  
                  {props.textFlipped6}
                </TextFlipped>          
              </Col-6>                                                                        
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
  };
  


export default CardFlip;