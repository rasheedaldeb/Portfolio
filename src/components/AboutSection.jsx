import { Briefcase, Code, User } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  containerVariants,
  itemVariants,
  iconVariants,
  scrollVariants,
} from "../style";

export const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isRTL = i18n.language === "ar";

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
          {isRTL ? (
            <>{t("nav.about")}</>
          ) : (
            <>
              About <span className="text-primary">Me</span>
            </>
          )}
        </motion.h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isRTL ? "text-right" : "text-left"}`}
        >
          {/* Left column - Text content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h3
              className="text-2xl font-semibold text-primary"
              variants={itemVariants}
            >
              {t("about.subtitle")}
            </motion.h3>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              {t("about.p1")}
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              {t("about.p2")}
            </motion.p>

            <motion.div
              className={`flex flex-col sm:flex-row gap-4 pt-4 ${isRTL ? "justify-start" : "justify-start"}`}
              variants={containerVariants}
            >
              <motion.a
                href="#contact"
                className="cosmic-button inline-block text-center px-8 py-3"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.cta")}
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1V5RP4QjZQ1Y9xJkj5tLlhXP12nB3EWNW/view?usp=drive_link"
                target="blank"
                className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center font-medium"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("about.cv")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Service Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
          >
            {/* Web Development Card */}
            <ServiceCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title={t("about.service1_title")}
              description={t("about.service1_desc")}
            />

            {/* Technical Support Card */}
            <ServiceCard
              icon={<User className="h-6 w-6 text-primary" />}
              title={t("about.service2_title")}
              description={t("about.service2_desc")}
            />

            {/* Project Management Card */}
            <ServiceCard
              icon={<Briefcase className="h-6 w-6 text-primary" />}
              title={t("about.service3_title")}
              description={t("about.service3_desc")}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Helper Sub-component for clean code
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    className="gradient-border p-6 card-hover cursor-pointer"
    variants={itemVariants}
    whileHover="hover"
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-start gap-4">
      <motion.div
        className="p-3 rounded-full bg-primary/10 flex-shrink-0"
        variants={iconVariants}
        whileHover="visible"
        whileTap={{ rotate: 360 }}
      >
        {icon}
      </motion.div>
      <div>
        <motion.h4 className="font-semibold text-lg" variants={itemVariants}>
          {title}
        </motion.h4>
        <motion.p
          className="text-muted-foreground text-sm leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>
      </div>
    </div>
  </motion.div>
);
