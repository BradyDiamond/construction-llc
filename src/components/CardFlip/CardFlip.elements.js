import styled from "styled-components";


export const Container = styled.div`
margin-right: -5vw;
z-index: 1;
position: relative;
&:hover {transform: scale(1.009);}
cursor: pointer;
padding: 0px 0px;
background: #3888C7;
img {
  width: 35vw;
  height: 35vw;
  transform-style: preserve-3d;
  box-shadow: 12px 12px 14px #000000;
  overflow-x: hidden;

`;

export const CardA = styled.div`
  align-items: left;
  pointer: finger;

`;

export const CardB = styled.div` {
  align-items: left;         
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
  margin-right: -7.5vw;  
  color: rgba(0, 0, 0, 0.55);
  height: 220%;
  width: 220%;
  text-decoration: none;
  cursor: pointer;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  position: fixed;
  margin-top: 3vh;
  pointer: cursor;

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
  
`;  

export const TextFlipped = styled.div`
  display: flex;
  position: relative;
  text-align: right;
  font-size: 3.3vw;
  font-weight: bold;
  justify-content: right;
  margin-right: 2.9vw;
  margin-top: 6vh;
 
  
`;  

