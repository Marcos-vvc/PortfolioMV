import { Main, Photo, Skill, Text } from "./styled";
import Foto2 from "../../assets/Foto2.jpeg";

const About = () => {
  return (
    <Main id="About">
      <Photo>
        <div className="border"></div>
        <div className="IMG"></div>
        <img src={Foto2} />
      </Photo>
      <Text>
        <h1>Sobre</h1> 
        <p>
          Olá, <br /> Meu nome é Marcos, sou formado em Técnico em Secretariado
          pela Faculdade Processus de Brasília e, além disso, tenho formação em
          Desenvolvimento Full-Stack pelo bootcamp da Labenu. Possuo grande
          experiência na área administrativa, tendo trabalhado em algumas
          empresas, sempre buscando agregar valor aos projetos em que participo.
          <br />
          Em paralelo a minha carreira administrativa, sempre mantive uma forte
          paixão por tecnologia e programação. Buscando ampliar meus
          conhecimentos e habilidades, decidi ingressar na área de
          desenvolvimento de software, onde posso combinar minha expertise em
          gestão de projetos com minhas habilidades técnicas.
        </p>
        <h2>Habilidades:</h2>
        <Skill>
          <p>➣ React.js/ Next.js </p>
          <p>➣ HTML</p>
          <p>➣ Typescript</p>
          <p>➣ Javascript</p>
          <p>➣ Node.js</p>
          <p>➣ CSS</p>
          <p>➣ Express</p>
          <p>➣ Nest.js</p>
          <p>➣ Prisma.CLI</p>
        </Skill>
      </Text>
    </Main>
  );
};

export default About;
