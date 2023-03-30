import { ContainerHeader, ImgAvatar, Options } from "./styled";
import Avatar from "../../assets/Avatar.png";

const Header = () => {
  return (
    <ContainerHeader>
      <ImgAvatar>
        <img src={Avatar} />
      </ImgAvatar>
      <Options>
        <a href="#Inicio">
          <p>Inicio</p>
        </a>
        <a href="#About">
          <p>Sobre</p>
        </a>
        <a href="#Portfolio">
          <p>Portfolio</p>
        </a>
        <a href="#Contact">
          <p>Contato</p>
        </a>
      </Options>
    </ContainerHeader>
  );
};

export default Header;
