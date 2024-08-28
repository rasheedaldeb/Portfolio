/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./NavBar.css";
import { ThemeContext } from "../../Context/ThemContext";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = ({ menu, change }) => {
  const [scrol, setscrol] = useState(false);
  const [show, setshow] = useState(false);
  const { mode, mode2 } = useContext(ThemeContext);
  const changeNav = () => {
    if (show == false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  const changBgColor = () => {
    if (window.scrollY >= 60) {
      setscrol(true);
    } else {
      setscrol(false);
    }
  };
  window.addEventListener("scroll", changBgColor);
  const changHtml = () => {
    document.getElementsByTagName("html")[0].className = `${mode}`;
  };
  changHtml();
  return (
    <>
      <nav
        className={
          scrol
            ? ` ${mode2} flex items-center justify-between md:px-16 px-8 py-2.5 fixed h-20 z-20 scrol-nav`
            : ` ${mode2} flex items-center justify-between md:px-16 px-8 py-2.5 fixed  h-20 z-10`
        }
        style={{ width: "100vw", transition: "0.3s all" }}
      >
        <img
          src={`/images/rasheed-logo-${mode}.png`}
          className="logo"
          alt="logo"
          width={170}
        />
        <ul
          className={` ${mode2} nav-list flex gap-12 text-primery text-lg font-bold`}
        >
          {/* maping to get the items from the array */}
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={mode2}>
                  {item.link}
                </Link>
              </li>
            );
          })}
          {/* start normal nav */}
        </ul>
        <button onClick={change} className="w-14 h-14">
          <img
            src={`/images/${mode}.svg`}
            alt=""
            className="text-primery"
            width={30}
          />
        </button>
        <button
          onClick={() => changeNav()}
          className="mobile-bar"
          style={{ display: "none" }}
        >
          <i
            className={
              show
                ? `fa-solid fa-xmark text-2xl`
                : `fa-solid fa-bars-staggered text-2xl`
            }
          ></i>
        </button>
      </nav>
      {/* end normal nav */}
      {/* start mobil nav */}
      <div
        className={
          show
            ? " mobile flex justify-center items-center transition-all"
            : "mobile flex justify-center items-center transition-all trans"
        }
      >
        <div
          className={` ${mode} ${mode2} mobile-nav w-mobil fixed z-20 top-1/4 h-mobil flex flex-col
        justify-center items-center rounded-xl border-2 border-primery bg-white ${mode} ${mode2} `}
        >
          <ul
            className={` ${mode2} mobile-list flex flex-col gap-4 items-center text-xl text-primery  font-bold `}
          >
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.link}</Link>
                </li>
              );
            })}
          </ul>
          <button className="pt-3" onClick={change}>
            <img src={`/images/${mode} (2).svg`} alt="" width={30} />
          </button>
        </div>
      </div>
      {/* end mobil nav */}
    </>
  );
};

export default NavBar;
