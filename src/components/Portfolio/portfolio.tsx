import { Content, Main } from "./styled";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <Main id="Portfolio">
      <h2 className="title-h2">Projetos</h2>
      <Content>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">PROJETO FRONTEND</p>
            </div>
            <div className="flip-card-back">
              <p className="title">
                GITHUB <BsGithub />
              </p>
              <a href="https://github.com/Marcos-vvc/LabEddit" target="_blank">
                <p>Link</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">PROJETO FRONTEND</p>
            </div>
            <div className="flip-card-back">
              <p className="title">
                GITHUB <BsGithub />
              </p>
              <a
                href="https://github.com/Marcos-vvc/Astromatch"
                target="_blank"
              >
                <p>Link</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">PROJETO BACKEND</p>
            </div>
            <div className="flip-card-back">
              <p className="title">
                GITHUB <BsGithub />
              </p>
              <a
                href="https://github.com/Marcos-vvc/teste_nestjs"
                target="_blank"
              >
                <p>Link</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">PROJETO FULLSTACK</p>
            </div>
            <div className="flip-card-back">
              <p className="title">
                GITHUB <BsGithub />
              </p>
              <a
                href="https://github.com/Marcos-vvc/desafio-sharenergy-2023-01"
                target="_blank"
              >
                <p>Link</p>
              </a>
            </div>
          </div>
        </div>
      </Content>
    </Main>
  );
};

export default Portfolio;
