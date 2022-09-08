import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
margin-right: -5vw;
z-index: 1;
position: relative;
// &:hover {transform: scale(1.039);}
// transition: transform 0.3s ease-in-out;
cursor: pointer;
padding: 0px 0px;
background: #3888C7;
img {
  width: 35vw;
  height: 35vw;
  transform-style: preserve-3d;
  box-shadow: 12px 12px 14px #000000;
 

}

`;

export const CardA = styled.div`
  align-items: left;
  pointer: finger;
  overflow: hidden;
`;

export const CardB = styled.div` {
  align-items: left;       
  overflow: hidden;  
`;

export const Img = styled.img`
  transition: transform .2s; 
  margin-left:5vw;  
  color: rgba(0, 0, 0, 0.55);
  height: 200%;
  width: 200%;
  cursor: pointer;
  border-radius:50%;
  position: fixed;
  margin-top: -10vh;
  overflow: none;
  flex-direction: center;
}
`;

export const Img2 = styled.img`
  margin-left: 7.5vw;  
  color: rgba(0, 0, 0, 0.55);
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  position: fixed;
  margin-top:1vh;
  overflow: none;
  box-shadow: none;
  transform: rotateY(180deg);
  mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
}
`;
export const Img3 = styled.img`
  margin-left:20vw;  
  color: rgba(0, 0, 0, 0.55);
  transform: scale(2.5);
  text-decoration: none;
  cursor: pointer;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  position: fixed;
  margin-top: 3vh;

}
`;

export const TextBefore = styled.div`
  transition: transform .2s; 
  width: 100%;
  display: flex;
  justify-content: center; 
  text-align: center;
  font-size: 15vw;
  font-weight: bold;
  position: relative;
  margin top: 10vw;
  // margin-right: 6vw;
  color: white;
  text-shadow: 12px 12px 14px #000000;
  object-fit: cover;
  flex-direction: center;
  padding: 0px 0px;
  &:hover {transform: scale(1.09);}
  font-family: 'Kanit', sans-serif;

`;  

export const TextFlipped = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  text-align: left;
  font-size: 3.1vw;
  font-weight: bold;
  // justify-content: right;
  margin-left: 2.9vw;
  margin-top:5vh;
  background: transparent;
  color: white;
  text-shadow: 12px 12px 14px #000000;
   font-family: 'Kanit', sans-serif;
  
  
`;  

//  function to stop page from exceeding 100vw
export const Page = styled.div` {                                             
  width: 100vw;
  overflow-x: hidden;

`;

  
  
