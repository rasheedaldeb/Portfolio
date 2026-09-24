import { Briefcase, Code, User, Sparkles } from "lucide-react";
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isRTL = i18n.language === "ar";

  return (
    <motion.section
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4 shadow-sm">
            <Sparkles size={16} />
            <span>{isRTL ? "تعرف علي أكثر" : "Get to know me"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {isRTL ? (
              <>{t("nav.about")}</>
            ) : (
              <>
                About <span className="text-primary">Me</span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="lg:col-span-6 space-y-6 bg-card/80 hover:bg-card backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-border/50 shadow-xl transition-all duration-300"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-primary leading-tight"
              variants={itemVariants}
            >
              {t("about.subtitle")}
            </motion.h3>

            <motion.p
              className="text-foreground/80 leading-relaxed text-base sm:text-lg"
              variants={itemVariants}
            >
              {t("about.p1")}
            </motion.p>

            <motion.p
              className="text-foreground/70 leading-relaxed text-sm sm:text-base"
              variants={itemVariants}
            >
              {t("about.p2")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={containerVariants}
            >
              <motion.a
                href="#contact"
                className="cosmic-button inline-flex items-center justify-center text-center px-8 py-3.5 font-medium rounded-full shadow-lg shadow-primary/25"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("hero.cta")}
              </motion.a>

              <motion.a
                href="https://portfolio-black-five-83.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 transition-colors duration-300 text-center font-medium shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("about.cv")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Service Cards */}
          <motion.div
            className="lg:col-span-6 grid grid-cols-1 gap-5"
            variants={containerVariants}
          >
            <ServiceCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title={t("about.service1_title")}
              description={t("about.service1_desc")}
            />

            <ServiceCard
              icon={<User className="h-6 w-6 text-primary" />}
              title={t("about.service2_title")}
              description={t("about.service2_desc")}
            />

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
    className="bg-card/80 hover:bg-card p-6 sm:p-7 rounded-2xl border border-border/50 hover:border-primary/40 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer group"
    variants={itemVariants}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-start gap-4">
      <motion.div
        className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/25 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm"
        variants={iconVariants}
      >
        {icon}
      </motion.div>
      <div>
        <motion.h4
          className="font-semibold text-lg sm:text-xl text-foreground mb-1.5 group-hover:text-primary transition-colors"
          variants={itemVariants}
        >
          {title}
        </motion.h4>
        <motion.p
          className="text-foreground/70 text-sm sm:text-base leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>
      </div>
    </div>
  </motion.div>
);
