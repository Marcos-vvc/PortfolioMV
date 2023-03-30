import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  width: 1100px;

  .title-h2 {
    font-family: "Poppins", sans-serif;
    font-size: 50px;
    font-weight: 800;
    font-style: normal;
    color: #ffce53;
  }

  a {
    text-decoration: none;
    color: #d6dffc;
  }

  .flip-card {
    background-color: transparent;
    width: 250px;
    height: 300px;
    perspective: 1000px;
    font-family: "Poppins", sans-serif;

  
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid #ffce53;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: rgb(83, 217, 255);
    background: radial-gradient(
      circle,
      rgba(83, 217, 255, 1) 0%,
      rgba(83, 131, 255, 1) 50%,
      rgba(121, 83, 255, 1) 100%
    );
    color: #d6dffc;
  }

  .flip-card-back {
    background: rgb(83, 217, 255);
    background: radial-gradient(
      circle,
      rgba(83, 217, 255, 1) 0%,
      rgba(83, 131, 255, 1) 50%,
      rgba(121, 83, 255, 1) 100%
    );
    color: black;
    transform: rotateY(180deg);
  }
`;

export const Content = styled.div`
  display: flex;
  min-height: 50vh;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 896px){
      display: flex;
      flex-direction: column;
    }
`;
