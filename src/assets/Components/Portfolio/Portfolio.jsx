/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemContext";
import { data } from "../../../../portfolioData";
// eslint-disable-next-line react/prop-types
const Portfolio = () => {
  const { mode2 } = useContext(ThemeContext);
  const [currentPage, setcurrentPage] = useState(1);
  const cardPerPage = 4;
  const lastIndex = currentPage * cardPerPage;
  const firstIndex = lastIndex - cardPerPage;
  const cards = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / cardPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  console.log(numbers);
  const nextPage = () => {
    if (currentPage !== nPage) {
      setcurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setcurrentPage(id);
  };
  return (
    <div
      id="portfolio"
      className={` ${mode2} portfolio flex flex-col justify-center items-center
        gap-10 pt-10 md:pt-16 px-8  text-primery transition-all`}
    >
      <h1 className="text-2xl font-bold md:text-5xl">Portfolio</h1>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              className=" hover:bg-primery hover:text-[white] flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              onClick={prevPage}
            >
              Prev
            </a>
          </li>
          {numbers.map((n, i) => {
            return (
              <li key={i}>
                <a
                  className="hover:bg-primery hover:text-[white]  flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a
              className=" hover:bg-primery hover:text-[white] flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div className="portfolio-cards flex flex-col gap-8 md:flex-row flex-wrap justify-center relative">
        {cards.map((item, index) => {
          return (
            <div
              key={index}
              className="portfolio-card cursor-pointer relative"
              style={{ maxWidth: "600px" }}
            >
              <img
                src={item.photo}
                alt=""
                className="rounded-md"
                style={{ width: "100%" }}
              />
              <div
                className="overlay absolute top-0 left-2/4 -translate-x-2/4 z-10 flex flex-col 
                        items-center justify-center gap-10
                        rounded-md"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(68 89 100 / 65%)",
                }}
              >
                <div
                  className="overlay-content absolute flex flex-col justify-center items-center gap-10 "
                  style={{ width: "50%" }}
                >
                  <h3 className="text-2xl font-bold text-hover md:text-4xl align-middle">
                    {item.title}
                  </h3>
                  <div className="buttons flex gap-16">
                    <button className="border-2 border-hover hover:bg-hover hover:text-secondery">
                      <Link to={item.github} target="blank">
                        <i className="fa-solid fa-plus text-xl text-hover min-w-full hover:text-secondery "></i>
                      </Link>
                    </button>
                    <button className="border-2 border-hover hover:bg-hover">
                      <Link to={item.url} target="blank">
                        <i
                          className="fa-solid fa-paperclip
                            text-xl text-hover hover:text-secondery min-w-full"
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
