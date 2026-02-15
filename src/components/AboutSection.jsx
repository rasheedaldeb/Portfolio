import { Briefcase, Code, User } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  containerVariants,
  itemVariants,
  iconVariants,
  scrollVariants,
} from "../style"; // Adjust import path

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="about"
      className="py-24 px-4 relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        variants={scrollVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        variants={scrollVariants}
        animate="animate"
        custom={1}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h3
              className="text-2xl font-semibold"
              variants={itemVariants}
            >
              Passionate Web Developer & Tech Creator
            </motion.h3>

            <motion.p className="text-muted-foreground" variants={itemVariants}>
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </motion.p>

            <motion.p className="text-muted-foreground" variants={itemVariants}>
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              variants={containerVariants}
            >
              <motion.a
                href="#contact"
                className="cosmic-button inline-block text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1HNvbSLMrZAX0dR1hly90MV57_yOIMnL0/view?usp=drive_open"
                target="blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
          >
            {/* Web Development Card */}
            <motion.div
              className="gradient-border p-6 card-hover cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  variants={iconVariants}
                  whileHover="visible"
                  whileTap={{ rotate: 360 }}
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <motion.h4
                    className="font-semibold text-lg"
                    variants={itemVariants}
                  >
                    Web Development
                  </motion.h4>
                  <motion.p
                    className="text-muted-foreground"
                    variants={itemVariants}
                  >
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Technical Support Card */}
            <motion.div
              className="gradient-border p-6 card-hover cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  variants={iconVariants}
                  whileHover="visible"
                  whileTap={{ rotate: 360 }}
                >
                  <User className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <motion.h4
                    className="font-semibold text-lg"
                    variants={itemVariants}
                  >
                    Technical Support
                  </motion.h4>
                  <motion.p
                    className="text-muted-foreground"
                    variants={itemVariants}
                  >
                    Providing technical support for customers and companies.
                    Solve technical issues in websites and devices.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Project Management Card */}
            <motion.div
              className="gradient-border p-6 card-hover cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  variants={iconVariants}
                  whileHover="visible"
                  whileTap={{ rotate: 360 }}
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <motion.h4
                    className="font-semibold text-lg"
                    variants={itemVariants}
                  >
                    Project Management
                  </motion.h4>
                  <motion.p
                    className="text-muted-foreground"
                    variants={itemVariants}
                  >
                    Leading projects from conception to completion with agile
                    methodologies.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
