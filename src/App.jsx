import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/Services";
import MyWork from "./components/work/MyWork";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
