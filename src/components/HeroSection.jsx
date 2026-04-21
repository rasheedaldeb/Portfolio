import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Assuming you use i18next
import {
  containerVariants,
  imageVariants,
  itemVariants,
  nameVariants,
  scrollVariants,
} from "../style";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-0 relative z-10 max-w-6xl w-full">
        <motion.div
          className="container max-w-2xl text-center md:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              variants={containerVariants}
            >
              <motion.span className="inline-block" variants={itemVariants}>
                {t("hero.greeting")}
              </motion.span>
              <motion.span
                className="text-primary inline-block ml-2"
                variants={nameVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {t("hero.name")}
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-foreground/80"
              variants={itemVariants}
            >
              {t("hero.role")}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="cosmic-button inline-block"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.cta")}
              </motion.a>

              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("nav.projects")}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about-img relative flex flex-col items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.img
            src="/img/WhatsApp Image 2026-02-20 at 8.08.12 PM-Photoroom.png"
            alt="Rasheed Aldeb"
            className="rounded-md w-64 md:w-80 lg:w-96 cursor-pointer z-20 shadow-2xl"
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
            whileHover={{
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        variants={scrollVariants}
        animate="animate"
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.span
          className="text-sm text-muted-foreground mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {t("hero.scroll")}
        </motion.span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
