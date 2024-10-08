import { useEffect, useState } from "react";
import NavBar from "./assets/Components/NavBar/NavBar";
import Hero from "./assets/Components/Hero/Hero";
import About from "./assets/Components/About/About";
import Skills from "./assets/Components/Skills/Skills";
import Education from "./assets/Components/Education/Education";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Certification from "./assets/Components/Certification/Certification";
import Contact from "./assets/Components/Contact/Contact";
import Footer from "./assets/Components/Footer/Footer";
import { ThemeContext } from "./assets/Context/ThemContext";
import GetInTouch from "./assets/Components/GetInTutch/GetInTouch";
const getValueFromLocalStorage = () => {
  const value = localStorage.getItem("them");
  return value ? JSON.parse(value) : "light";
};
const getValueFromLocalStorage2 = () => {
  const value = localStorage.getItem("them2");
  return value ? JSON.parse(value) : "light2";
};
const getValueFromLocalStorage3 = () => {
  const value = localStorage.getItem("them3");
  return value ? JSON.parse(value) : "light3";
};
function App() {
  const [mode, setmode] = useState(getValueFromLocalStorage);
  const [mode2, setmode2] = useState(getValueFromLocalStorage2);
  const [mode3, setmode3] = useState(getValueFromLocalStorage3);
  useEffect(() => {
    localStorage.setItem("them", JSON.stringify(mode));
    localStorage.setItem("them2", JSON.stringify(mode2));
    localStorage.setItem("them3", JSON.stringify(mode3));
  }, [mode, mode2]);
  const contextValue = { mode, mode2, mode3 };
  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        <NavBar
          change={() => {
            setmode(mode == "dark" ? "light" : "dark");
            setmode2(mode2 == "dark2" ? "light2" : "dark2");
            setmode3(mode3 == "dark3" ? "light3" : "dark3");
          }}
          menu={[
            { link: "Home", path: "#hero" },
            { link: "About", path: "#about" },
            { link: "Skills", path: "#skills" },
            { link: "Education", path: "#educat" },
            { link: "Portfolio", path: "#portfolio" },
            { link: "Contact", path: "#contact" },
          ]}
        />
        <Hero />
        <About />
        <Skills />
        <Education
          cards={[
            {
              course: "Frontend Basices",
              detail: "Syrian Computer Society",
              subtitle:
                "HTML,CSS,JS and jQuary training for frontend development basices technologies.",
              date: "Jul 2023 - Aug 2023",
            },
            {
              course: "Full Frontend Development",
              detail: "Vica Web Solutions",
              subtitle:
                "Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.",
              date: "Nov 2023 - Mar 2024",
            },
            {
              course: "CompTIA A+",
              detail: "New Horizons Center",
              subtitle:
                "Coputer and laptops maintenance hardware and software,IT technical support basices.",
              date: "Dec 2023 - Feb 2023",
            },
            {
              course: "CompTIA N+",
              detail: "New Horizons Center",
              subtitle:
                " maintain, troubleshoot, and support a network, and understand basices networking technologies, such as TCP/IP.",
              date: "Jan 2023 - Mar 2023",
            },
            {
              course: "Diploma in English language",
              detail: "National Geographic Learning",
              subtitle:
                "More than 13 English as a second language courses from beginning to advanced.",
              date: "Dec 2019 - Sep 2023",
            },
            {
              course: "IT Technical Support Training",
              detail: "Damascus University",
              subtitle:
                "provided technical support for customers and emploees, fix hardware and software issues in computers, network and printers.",
              date: "Jan 2023 - Sep 2023",
            },
          ]}
        />
        <Portfolio />
        <Certification
          images={[
            "/images/4.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
            "/images/1.jpg",
          ]}
        />
        <GetInTouch />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
