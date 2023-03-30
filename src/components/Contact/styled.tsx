import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 1100px;

  h1 {
    font-size: 50px;
    font-weight: 800;
    font-style: normal;
    color: #03045e;

    @media screen and (min-device-width: 320px) and (max-device-width: 896px){
      font-size: 35px;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    color: #03045e;

    @media screen and (min-device-width: 320px) and (max-device-width: 896px){
      font-size: 14px;
      text-align: center;
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 896px){
    width: 70%;
    font-size: 15px;
  }
`;

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 45vh;
  width: 98%;

  background-color: #d4e0ff;

  @media screen and (min-device-width: 320px) and (max-device-width: 896px){}
`;
