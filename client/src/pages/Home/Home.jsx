import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;