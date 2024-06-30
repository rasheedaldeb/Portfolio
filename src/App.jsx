import React, { useEffect, useState } from "react"
import NavBar from "./assets/Components/NavBar/NavBar"
import Hero from "./assets/Components/Hero/Hero"
import About from "./assets/Components/About/About"
import Skills from "./assets/Components/Skills/Skills"
import Education from "./assets/Components/Education/Education"
import Portfolio from "./assets/Components/Portfolio/Portfolio"
import Certification from "./assets/Components/Certification/Certification"
import Contact from "./assets/Components/Contact/Contact"
import Footer from "./assets/Components/Footer/Footer"
import { ThemeContext } from "./assets/Context/ThemContext"
import GetInTouch from "./assets/Components/GetInTutch/GetInTouch"
const getValueFromLocalStorage = ()=>{
  const value=localStorage.getItem("them")
  return value ? JSON.parse(value) : "light"
}
const getValueFromLocalStorage2 = ()=>{
  const value = localStorage.getItem("them2")
  return value ? JSON.parse(value) : "light2"
}
const getValueFromLocalStorage3 = ()=>{
  const value = localStorage.getItem("them3")
  return value ? JSON.parse(value) : "light3"
}
function App() {
  const [mode, setmode] = useState(getValueFromLocalStorage)
  const [mode2, setmode2] = useState(getValueFromLocalStorage2)
  const [mode3, setmode3] = useState(getValueFromLocalStorage3)
  useEffect(()=>{
    localStorage.setItem("them" , JSON.stringify(mode))
    localStorage.setItem("them2", JSON.stringify(mode2))
    localStorage.setItem("them3", JSON.stringify(mode3))
  },[mode, mode2])
  const contextValue = {mode , mode2, mode3}
  return (
    <>
    <ThemeContext.Provider value={contextValue}>
    <NavBar change={()=>{
      setmode(mode == "dark" ? "light" : "dark" )
      setmode2(mode2=="dark2" ? "light2" : "dark2")
      setmode3(mode3 == "dark3" ? "light3" : "dark3")
    }}
    menu={[{link: "Home", path: "#hero"},
      {link: "About", path:"#about"},
      {link: "Skills", path: "#skills"},
      {link: "Education" , path: "#educat"},
      {link: "Portfolio", path: "#portfolio"},
      {link: "Contact", path: "#contact"}
    ]}/>
    <Hero/>
    <About/>
    <Skills/>
    <Education  cards={[{course: "Frontend Basices", detail: "Syrian Computer Society", subtitle: "HTML,CSS,JS and jQuary training for frontend development basices technologies.",
      date:"May 2022 - Jun 2022"
    },
      {course:"Full Frontend Development", detail:"Vica Web Solutions", subtitle: "Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.",
        date:"Nov 2023 - Mar 2024"
      },
      {course:"CompTIA A+", detail:"New Horizons Center", subtitle:"Coputer and laptops maintenance hardware and software,IT technical support basices.",
        date:"Feb 2021 - Apr 2021"
      },
      {course:"CompTIA N+", detail:"New Horizons Center", subtitle:" maintain, troubleshoot, and support a network, and understand basices networking technologies, such as TCP/IP.",
        date:"Apr 2021 - Jun 2021"
      },
      {course:"Diploma in English language", detail:"National Geographic Learning", subtitle:"More than 13 English as a second language courses from beginning to advanced.",
        date:"Dec 2019 - Jan 2021"
      },
      {course:"IT Technical Support Training", detail:"Damascus University", subtitle:"provided technical support for customers and emploees, fix hardware and software issues in computers, network and printers.",
        date:"Jan 2023 - Sep 2023"
      }
    ]}/>
    <Portfolio projects={[{photo:"/images/book.png", title:"B-Book", url:"https://books-website-coral.vercel.app/", github:"https://github.com/rasheedaldeb/books-website"},
      {photo:"/images/travel.png", title:"Travel", url:"https://rasheedaldeb.github.io/react-travel-website/", github:"https://github.com/rasheedaldeb/react-travel-website"},
      {photo:"/images/food.png", title:"Food Store", url:"https://rasheedaldeb.github.io/food-multipages/", github:"https://github.com/rasheedaldeb/food-multipages"},
      {photo:"/images/shopping.png", title:"Shopping", url:"https://rasheedaldeb.github.io/shoping-cart/", github:"https://github.com/rasheedaldeb/shoping-cart"},
      {photo:"/images/ecommerc.png", title:"Ecommerce", url:"https://e-commerce-two-kohl.vercel.app/", github:"https://github.com/rasheedaldeb/E-commerce"},
      {photo:"/images/snapshot.png", title:"SnapShot", url:"https://rasheedaldeb.github.io/snapshot/", github:"https://github.com/rasheedaldeb/snapshot"},
      {photo:"/images/rentup.png", title:"RentUp", url:"https://rasheedaldeb.github.io/RenteUp/", github:"https://github.com/rasheedaldeb/RenteUp"},
      {photo:"/images/graphberry.png", title:"GraphBerry", url:"https://rasheedaldeb.github.io/Graphberry/", github:"https://github.com/rasheedaldeb/Graphberry"},
      {photo:"/images/fernuture.png", title:"Furniture", url:"https://rasheedaldeb.github.io/Furniture-page/", github:"https://github.com/rasheedaldeb/Furniture-page"}
    ]}/>
    <Certification images={["/images/4.jpg", "/images/2.jpg", "/images/3.jpg", "/images/1.jpg"]}/>
    <GetInTouch/>
    <Contact/>
    <Footer/>
    </ThemeContext.Provider>
    </>
  )
}

export default App
