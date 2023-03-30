import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 1200px;
`;

export const Text = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  width: 60%;

  h1 {
    font-size: 50px;
    font-weight: 800;
    font-style: normal;
    color: #ffce53;
  }
  p {
    color: #d6dffc;
  }
  h2 {
    font-size: 25px;
    font-weight: 800;
    font-style: normal;
    color: #ffce53;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    font-size: 15px;
  }
`;

export const Skill = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 170px);

  P {
    color: #d6dffc;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
    display: grid;
    grid-template-columns: repeat(3, 130px);
  }
`;
export const Photo = styled.div`
  margin-right: 30px;
  margin-top: 130px;
  position: relative;
  width: 290px;
  height: 454px;

  .border {
    width: 100%;
    height: 100%;
    border: 3px solid #ffce53;
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 40px 0 40px 0;
    transition: 0.3s;
  }

  :hover .border {
    transition: 0.3s;
    top: 20px;
    right: 20px;
  }

  .IMG {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffce53;
    width: 290px;
    height: 454px;
    border-radius: 40px 0 40px 0;
    opacity: 0.4;
    z-index: 15;
    transition: 0.3s;
  }

  :hover .IMG {
    opacity: 0;
    transition: 0.3s;
  }

  img {
    z-index: 10;
    width: 290px;
    height: 454px;
    border-radius: 40px 0 40px 0;
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
    display: none;
  }
`;
