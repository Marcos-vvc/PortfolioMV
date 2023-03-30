import { Main, BackGround } from "./styled";
import EmailButton from "../../components/Email/email";

const Contact: React.FC = () => {
  return (
    <Main id="Contact">
      <BackGround>
        <h1>Contato</h1>
        <p>
          Gostou do meu trabalho? Fico feliz em saber! Se quiser entrar em
          contato comigo, envie um e-mail. <br />
          No mais, fiquem à vontade para me conhecer melhor e tirar suas dúvidas
          comigo, estarei sempre à disposição!
        </p>
        <EmailButton email="marcos-dido@hotmail.com" />
      </BackGround>
    </Main>
  );
};

export default Contact;
