import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SiCursor } from "@icons-pack/react-simple-icons";
import { Sparkles } from "lucide-react";
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
      <div className="flex items-center gap-2">
        <FaHtml5 className="text-orange-500" />
        <FaCss3 className="text-blue-500" />
      </div>
    ),
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <RiTailwindCssFill className="text-teal-400" />,
  },
  {
    name: "Bootstrap",
    level: 95,
    category: "frontend",
    icon: <FaBootstrap className="text-purple-600" />,
  },
  {
    name: "MUI",
    level: 75,
    category: "frontend",
    icon: <SiMui className="text-blue-500" />,
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
    icon: <RiNextjsFill className="text-foreground" />,
  },
  {
    name: "Socket.io",
    level: 70,
    category: "frontend",
    icon: <SiSocketdotio className="text-foreground" />,
  },

  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: (
      <div className="flex items-center gap-2">
        <FaGitAlt className="text-orange-600" />
        <FaGithub className="text-foreground" />
      </div>
    ),
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",
    icon: <FaFigma className="text-pink-500" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <VscVscode className="text-blue-500" />,
  },
  {
    name: "GitHub Copilot",
    level: 80,
    category: "tools",
    icon: <SiGithubcopilot className="text-foreground" />,
  },
  {
    name: "Gemini",
    level: 90,
    category: "tools",
    icon: <SiGooglegemini className="text-blue-400" />,
  },
  {
    name: "Cursor",
    level: 95,
    category: "tools",
    icon: <SiCursor className="text-foreground" />,
  },
  {
    name: "WordPress",
    level: 60,
    category: "tools",
    icon: <FaWordpress className="text-blue-600" />,
  },

  {
    name: "Redux Toolkit",
    level: 70,
    category: "frontend",
    icon: <SiRedux className="text-purple-500" />,
  },
  {
    name: "Node.js",
    level: 75,
    category: "backend",
    icon: <SiNodedotjs className="text-green-600" />,
  },
  {
    name: "Express.js",
    level: 75,
    category: "backend",
    icon: <SiExpress className="text-foreground" />,
  },
  {
    name: "MySQL",
    level: 85,
    category: "backend",
    icon: <DiMysql className="text-blue-500" />,
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "backend",
    icon: <DiPostgresql className="text-blue-400" />,
  },
  {
    name: "Prisma",
    level: 80,
    category: "backend",
    icon: <SiPrisma className="text-teal-500" />,
  },
  {
    name: "Drizzle",
    level: 70,
    category: "backend",
    icon: <SiDrizzle className="text-green-500" />,
  },
  {
    name: "MongoDB",
    level: 60,
    category: "backend",
    icon: <SiMongodb className="text-green-500" />,
  },
  {
    name: "Mongoose",
    level: 65,
    category: "backend",
    icon: <SiMongoose className="text-red-500" />,
  },
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
    setActiveCategory(category);
  };

  return (
    <motion.section
      id="skills"
      dir={isRTL ? "rtl" : "ltr"}
      className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Glows */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        variants={scrollVariants}
        animate="animate"
        custom={0}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        variants={scrollVariants}
        animate="animate"
        custom={1}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>{isRTL ? "المهارات التقنية" : "Expertise"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("skills.title")}
          </h2>

          <p className="text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
            {isRTL
              ? "الأدوات والتقنيات التي أستخدمها لبناء تطبيقات ويب حديثة ومتكاملة"
              : "Technologies and tools I use to build modern, scalable web applications"}
          </p>
        </motion.div>

        {/* Categories Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize relative overflow-hidden border shadow-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card text-foreground/80 hover:bg-secondary border-border/60",
              )}
            >
              {activeCategory === category && (
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.2,
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
                className="bg-card/80 hover:bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/40 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-secondary/80 h-2 rounded-full overflow-hidden relative">
                  <motion.div
                    className="bg-gradient-to-r from-primary/80 to-primary h-2 rounded-full origin-left"
                    variants={skillBarVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Cards */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
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
              className="text-center p-6 bg-card/80 border border-border/40 rounded-2xl shadow-lg backdrop-blur-xl hover:border-primary/30 transition-all group"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
