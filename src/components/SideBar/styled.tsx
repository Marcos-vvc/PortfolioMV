import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  gap: 15px;
  margin-left: 10px;

  img {
    width: 40px;
    height: 100px;
  }
`;

export const Git = styled.div`
  cursor: pointer;

  :hover {
    transition: 0.3s;
    transform: scale(1.3);
  }
`;

export const Linkedin = styled.div`
  cursor: pointer;
  :hover {
    transition: 0.3s;
    transform: scale(1.3);
  }
`;

export const Social = styled.div`
  cursor: pointer;

  :hover {
    transition: 0.3s;
    transform: scale(1.3);
  }
`;

export const Whats = styled.div`
  cursor: pointer;

  :hover {
    transition: 0.3s;
    transform: scale(1.3);
  }
`;
