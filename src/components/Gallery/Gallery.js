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


function Gallery() {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: 'New Windows installed on side of house'
    },
    {
      id: 2,
      imgSrc: Img2
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
    <br></br>
    <div className={model? "model open" : "model" }>
      <img src={tempimgSrc} />
      <div className="modelClose">
        <i className="fa-solid fa-xmark fa-2xl" onClick={()=> setModel(false)} /> 
      </div> 
    </div> 

    <div className="gallery">
      {data.map((item, index)=> {
        return( 
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)} >
            <img src={item.imgSrc} style ={{width: '100%' }}/>
          </div>
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