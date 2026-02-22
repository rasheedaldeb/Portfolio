import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  nameVariants,
  scrollVariants,
} from "../style";

export const HeroSection = () => {
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

      <div className="flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0 relative z-10">
        <motion.div
          className="container max-w-4xl mx-auto text-center z-10"
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
                Hi, I'm
              </motion.span>
              <motion.span
                className="text-primary inline-block ml-2"
                variants={nameVariants}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                Rasheed
              </motion.span>
              <motion.span
                className="text-gradient ml-2 inline-block"
                variants={nameVariants}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(236, 72, 153, 0.6)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                Aldeb
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              I Create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </motion.p>

            <motion.div
              className="pt-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="#projects"
                className="cosmic-button inline-block"
                whileHover={{
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about-img max-w-screen rounded-md flex flex-col items-center gap-3"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.img
            src="/img/WhatsApp Image 2026-02-20 at 8.08.12 PM-Photoroom.png"
            alt="Rasheed Aldeb"
            className="rounded-md lg:max-w-sm cursor-pointer"
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
            whileHover={{
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />
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
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
