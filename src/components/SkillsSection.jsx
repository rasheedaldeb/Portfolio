import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  categoryButtonVariants,
  containerVariants,
  itemVariants,
  percentageVariants,
  scrollVariants,
  skillBarVariants,
  skillCardVariants,
} from "../style"; // Adjust import path
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiMui,
  SiPrime,
  SiPrisma,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiMysql, DiPostgresql } from "react-icons/di";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: (
      <div className="flex items-center gap-3">
        {" "}
        <FaHtml5 /> <FaCss3 />
      </div>
    ),
  },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJs /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact /> },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <RiTailwindCssFill />,
  },
  { name: "Bootstrap", level: 95, category: "frontend", icon: <FaBootstrap /> },
  { name: "MUI", level: 70, category: "frontend", icon: <SiMui /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <RiNextjsFill /> },
  {
    name: "Socket.io",
    level: 70,
    category: "frontend",
    icon: <SiSocketdotio />,
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: (
      <div className="flex items-center gap-3">
        <FaGitAlt /> <FaGithub />
      </div>
    ),
  },
  { name: "Figma", level: 85, category: "tools", icon: <FaFigma /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscode /> },
  { name: "WordPress", level: 60, category: "tools", icon: <FaWordpress /> },
  {
    name: "Redux Toolkit",
    level: 65,
    category: "frontend",
    icon: <SiRedux />,
  },
  {
    name: "MySQL",
    level: 70,
    category: "backend",
    icon: <DiMysql />,
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend",
    icon: <DiPostgresql />,
  },
  {
    name: "Prisma",
    level: 75,
    category: "backend",
    icon: <SiPrisma />,
  },
];

const categories = ["all", "frontend", "tools", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isChanging, setIsChanging] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsChanging(false);
    }, 300);
  };

  return (
    <motion.section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        variants={scrollVariants}
        animate="animate"
        custom={0}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        variants={scrollVariants}
        animate="animate"
        custom={1}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          My{" "}
          <motion.span
            className="text-primary inline-block"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
            }}
          >
            Skills
          </motion.span>
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              custom={index}
              variants={categoryButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize relative overflow-hidden",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {activeCategory === category && (
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillCardVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-card p-6 rounded-lg shadow-xs card-hover relative overflow-hidden group"
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="text-left mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="text-2xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      {skill.icon}
                    </motion.span>
                    <motion.h3
                      className="font-semibold text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {skill.name}
                    </motion.h3>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden relative">
                  <motion.div
                    className="bg-primary h-2 rounded-full origin-left relative"
                    variants={skillBarVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Percentage with counter animation */}
                <motion.div
                  className="text-right mt-1 relative z-10"
                  variants={percentageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span
                    className="text-sm text-muted-foreground inline-block"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    }}
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>

                {/* Decorative corner */}
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100"
                  initial={{ rotate: 45, scale: 0 }}
                  whileHover={{ rotate: 0, scale: 1 }}
                >
                  <div className="w-full h-full bg-primary/10 rounded-tl-3xl" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {[
            { label: "Total Skills", value: skills.length },
            {
              label: "Frontend",
              value: skills.filter((s) => s.category === "frontend").length,
            },
            {
              label: "Tools",
              value: skills.filter((s) => s.category === "tools").length,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-card rounded-lg w-full"
              variants={itemVariants}
              custom={index}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
