import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./Components/Experience/Experience";
import Testimonial from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
   <Navbar/>
   <Intro/>
   <Services/>
   <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
