import { MainContainer } from "./AppStyled";
import Header from "./components/Header/header";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Portifolio from "./components/Portfolio/portfolio";
import SocialMedia from "./components/SideBar/socialMedia";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <MainContainer>
      <Header />
      <Intro />
      <About />
      <Portifolio />
      <SocialMedia />
      <Contact />
      <Footer />
    </MainContainer>
  );
};

export default App;
