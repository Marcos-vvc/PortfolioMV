import Abstracts from "../../assets/Abstracts.png";
import Minha from "../../assets/Minha.png";
import { Content, IntoImg, Main, StyledButton, Text } from "./styled";

const Intro = () => {
  return (
    <Main id="Inicio">
      <Content>
        <Text>
          <p>Olá, eu sou o Marcos,</p>
          <h1>Desenvolvedor FullStack</h1>
          <StyledButton>
            <a
              href="https://drive.google.com/file/d/1y1MkU-OhOscjtR9mrg0-ip-CppE5XhqZ/view?usp=share_link"
              target="_blank"
            >
              <span className="button-content">Currículo</span>
            </a>
          </StyledButton>
        </Text>
        <IntoImg>
          <img src={Abstracts} />
          <img className="Photo" src={Minha} />
        </IntoImg>
      </Content>
    </Main>
  );
};

export default Intro;
