import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

// --------------------------------------------------------------
// Animation variants
// --------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    y: -6,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// --------------------------------------------------------------
// Main Component
// --------------------------------------------------------------
const Experience = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "experience",
  });

  const rawExperiences = t("items", { returnObjects: true });

  const experiences = Array.isArray(rawExperiences) ? rawExperiences : [];
  const isRTL = i18n.language === "ar";

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 overflow-hidden bg-background"
      ref={ref}
      dir={isRTL ? "rtl" : "ltr"} // ✅ RTL support
    >
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-foreground">{t("title")}</span>
          </h2>

          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto font-poppins">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {experiences?.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="h-full"
            >
              <motion.div
                variants={cardHover}
                className="relative h-full flex flex-col justify-between bg-card rounded-2xl p-6 md:p-8 border border-border/40 backdrop-blur-sm shadow-xl transition-all"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <span className="text-lg text-primary font-semibold block">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-foreground/60 mt-0.5">
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-poppins text-foreground/70 bg-background/50 px-3 py-1 rounded-full border border-border/30">
                      <Calendar size={13} className="text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-foreground mb-4">
                    {exp.role}
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground/80 font-poppins text-sm md:text-base leading-relaxed"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="pt-4 border-t border-border/30 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
