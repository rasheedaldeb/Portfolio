/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemContext";
const Education = ({ cards }) => {
  const { mode2, mode3 } = useContext(ThemeContext);
  return (
    <div
      id="educat"
      className={` ${mode2} pt-10 flex flex-col items-center
        gap-10 md:gap-14 md:pt-16 text-primery`}
    >
      <h1 className="text-2xl font-bold  md:text-5xl">
        Education and{" "}
        <span className={` ${mode2} text-secondery`}>Courses</span>
      </h1>
      <div
        className="education-cards text-primery px-3 flex flex-col gap-10 md:flex-row
        flex-wrap justify-center items-center"
      >
        {cards.map((item, index) => {
          return (
            <div
              className={` ${mode3} ${mode2} card p-7 rounded-lg flex flex-col items-start gap-3 md:gap-5`}
              style={{ maxWidth: "400px" }}
              key={index}
            >
              <h2 className="text-xl font-bold  md:text-2xl">{item.course}</h2>
              <h3 className="font-bold  md:text-lg">{item.detail}</h3>
              <p className=" md:text-lg md:leading-8">{item.subtitle}</p>
              <p className="">
                Damascus:{" "}
                <span
                  className="bg-secondery p-2 rounded"
                  style={{ color: "#fff" }}
                >
                  {item.date}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
