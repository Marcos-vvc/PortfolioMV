import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 85vh;
  width: 1200px;
  align-items: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 60vh;
  width: 90%;
  align-items: center;
  background-color: #d4e0ff;
  border-radius: 10px;

  @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
    min-height: 40vh;
    width: 95%;
  }
`;
export const IntoImg = styled.div`
  height: fit-content;
  position: relative;

  .Photo {
    position: absolute;
    top: 30px;
    left: 55px;
    scale: 1.2;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  /* text-align: left; */
  margin-left: 100px;
  flex-direction: column;
  width: 60%;
  font-family: "Poppins", sans-serif;
  color: #03045e;

  h1 {
    margin: 0;
    font-size: 50px;
    font-weight: 800;

    @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
      font-size: 25px;
      font-weight: 800;     
      justify-content: center;
      align-items: center;
    }
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 28px;

    @media screen and (min-device-width: 320px) and (max-device-width: 896px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      margin-right: 58px;
    }
  }

 
`;

export const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  height: 2.5rem;
  width: 8rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  :hover::before {
    transform: scaleX(1);
  }
  .button-content {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(255, 194, 40, 1) 10.8%,
      rgba(50, 97, 241, 1) 94.3%
    );
    transition: all 0.475s;
  }
`;
