import { useContext } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemContext";
const About = () => {
  const { mode2 } = useContext(ThemeContext);
  return (
    // start  About page
    <div
      id="about"
      className="about flex flex-col items-center
        px-10 md:px-16 pt-20 md:flex-row md:justify-around gap-6 "
    >
      {/* about image */}
      <div className="about-img max-w-screen rounded-md flex flex-col items-center gap-3">
        <img
          src="/images/rasheed.jpg"
          alt=""
          className=" rounded-md lg:max-w-sm "
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
        />
      </div>
      {/* information about me */}
      <div
        className={`about-info ${mode2} md:max-w-xl flex flex-col items-start gap-10 md:gap-5 lg:gap-10 text-primery`}
      >
        <div className="top flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold  lg:text-5xl md:text-3xl">
            I am Rasheed{" "}
            <span className={` ${mode2} text-secondery`}>Aldeb</span>
          </h1>
          <h3 className="text-xl font-bold lg:text-2xl md:text-xl">
            {" "}
            Web designer and <span>Frontend Developer</span>
          </h3>
        </div>
        <p className={`${mode2} text-primery leading-7 lg:text-2xl`}>
          I design and develop moderen websites and web applecations, web
          services and online stores. My passion is to become a professinal web
          developer.
        </p>
        <button className="cv-contact">
          <a href="/Rasheed-cv.pdf" download="Rasheed-CV">
            Download Cv <i className="fa-solid fa-download"></i>
          </a>
        </button>
        <div
          className="social flex justify-around items-center  text-2xl "
          style={{ width: "264px", height: "72px" }}
        >
          {/* // social media */}
          <Link to="https://www.linkedin.com/in/rasheed-aldeb-a3aa68259">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="https://www.facebook.com/rashed.aldeb.16">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="https://github.com/rasheedaldeb">
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link to="https://x.com/RasheedAld75756">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
    // end About page
  );
};

export default About;
