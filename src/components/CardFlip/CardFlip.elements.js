import styled from "styled-components";


export const Container = styled.div`
transition: all 0.6s ease-in-out;
padding: 20px 0px;
background: #3888C7;
img {
  width: 40vw;
  height: 40vw;
}
@media screen and (max-width: 720px) {
}
`;

export const CardA = styled.div`
  align-items: left;

`;

export const CardB = styled.div` {
  align-items: left;         
`;

export const Img = styled.img`
  margin-left: 6vw;  
  color: rgba(0, 0, 0, 0.55);
  height: 200%;
  width: 200%;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
}
`;

export const TextBefore = styled.div`

  display: flex;
  justify-content: right; 
  text-align: center;
  font-size: 15vw;
  font-weight: bold;
  position: relative;
  margin top: 10vw;
  margin-right: 6vw;
  color: white;
  text-shadow: 12px 12px 14px #000000;
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

