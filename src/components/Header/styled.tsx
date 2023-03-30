import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  height: fit-content;
  font-family: "Poppins", sans-serif;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  overflow: hidden;
  margin-bottom: 20px;

  p {
    color: #ffce53;
    font-size: 24px;
    cursor: pointer;
    z-index: 15;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 15px;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const ImgAvatar = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  overflow: hidden;

  img {
    width: 60px;
    height: 65px;
  }

  @media screen and (max-width: 425px) {
    img {
      width: 40px;
      height: 45px;
    }
  }
`;
export const Options = styled.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 425px) {
    gap: 20px;
  }
`;
