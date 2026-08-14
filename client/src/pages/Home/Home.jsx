import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import useScrollSpy from "../../hooks/useScrollSpy";
import Skills from "../../components/Skills/Skills";
import Blog from "../../components/Blog/Blog";

const Home = () => {
   useScrollSpy();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;