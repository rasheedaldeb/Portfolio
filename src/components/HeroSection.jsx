import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  nameVariants,
  scrollVariants,
} from "../style";

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-background"
    >
      {/* Animated Background Gradients & Glows */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex justify-between items-center flex-col lg:flex-row gap-12 lg:gap-8 relative z-10 max-w-7xl w-full my-auto">
        {/* Left Content Column */}
        <motion.div
          className="container max-w-3xl text-center lg:text-start z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex justify-center lg:justify-start w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium shadow-sm">
              <Sparkles size={16} />
              <span>
                {isRTL
                  ? "مرحباً بك في موقعي الشخصي"
                  : "Welcome to my portfolio"}
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
            variants={containerVariants}
          >
            <motion.span className="inline-block" variants={itemVariants}>
              {t("hero.greeting")}
            </motion.span>
            <motion.span
              className="text-primary inline-block mx-2.5 drop-shadow-sm"
              variants={nameVariants}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 16px rgba(99, 102, 241, 0.6)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {t("hero.name")}
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-primary/90"
            variants={itemVariants}
          >
            {t("hero.role")}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="cosmic-button inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-full shadow-lg shadow-primary/25"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {t("hero.cta")}
            </motion.a>

            <motion.a
              href="#projects"
              className="px-8 py-3.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300 font-medium shadow-sm text-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("nav.projects")}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          className="about-img relative flex flex-col items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="relative p-3 rounded-3xl bg-card/60 border border-border/50 backdrop-blur-2xl shadow-2xl shadow-primary/10 group">
            <motion.img
              src="/img/WhatsApp Image 2026-02-20 at 8.08.12 PM-Photoroom.png"
              alt="Rasheed Aldeb"
              className="rounded-2xl w-64 sm:w-72 md:w-80 lg:w-96 object-cover cursor-pointer z-20"
              style={{
                clipPath:
                  "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
              }}
              whileHover={{
                filter: "brightness(1.1) contrast(1.1)",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl rounded-full -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        variants={scrollVariants}
        animate="animate"
        whileHover={{ scale: 1.15 }}
        onClick={() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.span
          className="text-xs sm:text-sm text-muted-foreground mb-1.5 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {t("hero.scroll")}
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary shadow-sm"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
