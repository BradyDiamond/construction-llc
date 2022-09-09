import React from "react";
import './Gallery.css';
import { useState } from "react";
import Img1 from './Images/contractors1.jpg';
import Img2 from './Images/contractors2.jpg';
import Img3 from './Images/contractors3.jpg';
import Img4 from './Images/contractors4.jpg';
import Img5 from './Images/contractors5.jpg';
import Img6 from './Images/contractors6.jpg';
import Img7 from './Images/contractors7.jpg';
import Img8 from './Images/contractors8.jpg';
import Img9 from './Images/contractors9.jpg';
import Img10 from './Images/contractors10.jpg';
import Img11 from './Images/contractors11.jpg';
import Img12 from './Images/contractors12.jpg';
import { Card } from "react-bootstrap";


function Gallery() {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
      description: 'Contractors Photo',
    },
    {
      id: 2,
      imgSrc: Img2,
      description: 'Glass installment in Kitcken',
    },
    {
      id: 3,
      imgSrc: Img3
    },
    {
      id: 4,
      imgSrc: Img4
    },
    {
      id: 5,
      imgSrc: Img5
    },
    {
      id: 6,
      imgSrc: Img6
    },
    {
      id: 7,
      imgSrc: Img7
    },
    {
      id: 8,
      imgSrc: Img8
    },
    {
      id: 9,
      imgSrc: Img9
    },
    {
      id: 10,
      imgSrc: Img10
    },
    {
      id: 11,
      imgSrc: Img11
    },
    {
      id: 12,
      imgSrc: Img12
    },
    
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);

  }

  return (
    <>
    <h1>Test Gallery</h1>
    <div className={model? "model open" : "model" }>
      <img src={tempimgSrc} />
      <div className="modelClose" >
        <i class="fa-solid fa-xmark fa-2xl" onClick={()=> setModel(false)} /> 
      </div> 
    </div> 

    <div className="gallery">
      {data.map((item, index)=> {
        return( 
          <Card>
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)} >
            <img className="galleryImage" src={item.imgSrc} style ={{width: '100%' }}/>
            <div className="description">
            <p>{item.description}</p>
            </div>
          </div>
          </Card>
        )
      })}
    </div>
    {/* <div>
      <div style={{ padding: '300px 0px', background: 'gray'}}>
      </div>
    </div> */}
    
    </>
  )
    
  
}
  
  
export default Gallery;