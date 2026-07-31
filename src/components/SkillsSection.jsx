import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SiCursor } from "@icons-pack/react-simple-icons";
import {
  categoryButtonVariants,
  containerVariants,
  itemVariants,
  scrollVariants,
  skillBarVariants,
  skillCardVariants,
} from "../style";

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
  SiDrizzle,
  SiExpress,
  SiGithubcopilot,
  SiGooglegemini,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNodedotjs,
  SiPrisma,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiMysql, DiPostgresql } from "react-icons/di";

// --------------------------------------------------------------
// Skills Data
// --------------------------------------------------------------
const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: (
      <div className="flex items-center gap-3">
        <FaHtml5 />
        <FaCss3 />
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
  { name: "MUI", level: 75, category: "frontend", icon: <SiMui /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <RiNextjsFill /> },
  {
    name: "Socket.io",
    level: 70,
    category: "frontend",
    icon: <SiSocketdotio />,
  },

  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: (
      <div className="flex items-center gap-3">
        <FaGitAlt />
        <FaGithub />
      </div>
    ),
  },
  { name: "Figma", level: 85, category: "tools", icon: <FaFigma /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscode /> },
  {
    name: "GitHub Copilot",
    level: 80,
    category: "tools",
    icon: <SiGithubcopilot />,
  },
  { name: "Gemini", level: 90, category: "tools", icon: <SiGooglegemini /> },
  { name: "Cursor", level: 95, category: "tools", icon: <SiCursor /> },
  { name: "WordPress", level: 60, category: "tools", icon: <FaWordpress /> },

  { name: "Redux Toolkit", level: 70, category: "frontend", icon: <SiRedux /> },
  { name: "Node.js", level: 75, category: "backend", icon: <SiNodedotjs /> },
  { name: "Express.js", level: 75, category: "backend", icon: <SiExpress /> },
  { name: "MySQL", level: 85, category: "backend", icon: <DiMysql /> },
  {
    name: "PostgreSQL",
    level: 80,
    category: "backend",
    icon: <DiPostgresql />,
  },
  { name: "Prisma", level: 80, category: "backend", icon: <SiPrisma /> },
  { name: "Drizzle", level: 70, category: "backend", icon: <SiDrizzle /> },
  { name: "MongoDB", level: 60, category: "backend", icon: <SiMongodb /> },
  { name: "Mongoose", level: 65, category: "backend", icon: <SiMongoose /> },
];

const categories = ["all", "frontend", "tools", "backend"];

// --------------------------------------------------------------
// Component
// --------------------------------------------------------------
export const SkillsSection = () => {
  const { t, i18n } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");

  const isRTL = i18n.language === "ar";

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // ✅ instant & reliable
  };

  return (
    <motion.section
      id="skills"
      dir={isRTL ? "rtl" : "ltr"}
      className="scroll-mt-24 py-24 px-4 relative bg-secondary/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background */}
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

      {/* Particles */}
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
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          {t("skills.title")}
        </motion.h2>

        {/* Categories */}
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

              {t(`skills.categories.${category}`)}
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="text-left mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <motion.span className="text-2xl">{skill.icon}</motion.span>

                    <motion.h3 className="font-semibold text-lg">
                      {skill.name}
                    </motion.h3>
                  </div>
                </div>

                {/* Progress */}
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden relative">
                  <motion.div
                    className="bg-primary h-2 rounded-full origin-left"
                    variants={skillBarVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate="visible"
                  />
                </div>

                {/* Percentage */}
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {[
            { label: t("skills.stats.total"), value: skills.length },
            {
              label: t("skills.stats.frontend"),
              value: skills.filter((s) => s.category === "frontend").length,
            },
            {
              label: t("skills.stats.tools"),
              value: skills.filter((s) => s.category === "tools").length,
            },
            {
              label: t("skills.stats.backend"),
              value: skills.filter((s) => s.category === "backend").length,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-card rounded-lg w-full"
              variants={itemVariants}
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
