import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../projects";
export const ProjectsSection = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const cardPerPage = 3;
  const lastIndex = currentPage * cardPerPage;
  const firstIndex = lastIndex - cardPerPage;
  const cards = projects.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(projects.length / cardPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {project.tags}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation example" className="mt-10">
          <ul className="inline-flex  text-base h-10 bg-background ">
            <li>
              <a
                className=" hover:bg-primery  flex items-center justify-center px-4 h-10 ms-0 leading-tight text-foreground border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                onClick={prevPage}
              >
                Prev
              </a>
            </li>
            {numbers.map((n, i) => {
              return (
                <li key={i}>
                  <a
                    className={
                      currentPage == n
                        ? "hover:bg-primery bg-foreground   flex items-center justify-center px-4 h-10 leading-tight text-background border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                        : "hover:bg-primery   flex items-center justify-center px-4 h-10 leading-tight text-foreground border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                    }
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a
                className=" hover:bg-primery  flex items-center justify-center px-4 h-10 leading-tight text-foreground border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                onClick={nextPage}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rasheedaldeb"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
