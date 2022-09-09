import React from "react";
import './Gallery.css';
import { useState } from "react";
import Img1 from './Images/contractors1.jpg';
import Img2 from './Images/contractors2.jpg';
import Img3 from './Images/contractors3.jpg';
import Img4 from './Images/contractors4.jpg';

function Gallery() {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
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
    }
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);

  }

  return (
    <>
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
    
    </>
  )
    
  
}
  
  
export default Gallery;