import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import Linha from "../../assets/Linha.png";
import { ContainerContact, Git, Line, Linkedin, Social, Whats } from "./styled";

const SocialMedia = () => {
  return (
    <ContainerContact>
      <Line>
        <Git>
          <Link to={`https://github.com/Marcos-vvc`} target="_blank">
            <BsGithub style={{ color: "#FFCE53" }} />
          </Link>
        </Git>
        <Linkedin>
          <Link
            to={`https://www.linkedin.com/in/marcos-vinicius-080659117/`}
            target="_blank"
          >
            <BsLinkedin style={{ color: "#FFCE53" }} />
          </Link>
        </Linkedin>
        <Social>
          <Link to={`https://www.instagram.com/marcos.vvc/`} target="_blank">
            <BsInstagram style={{ color: "#FFCE53" }} />
          </Link>
        </Social>
        <Whats>
          <Link to={`https://api.whatsapp.com/send?phone=5561982743366`} target="_blank">
            <BsWhatsapp style={{ color: "#FFCE53" }} />
          </Link>
        </Whats>
        <img src={Linha} />
      </Line>
    </ContainerContact>
  );
};

export default SocialMedia;
