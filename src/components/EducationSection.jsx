import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Award,
  GraduationCap,
  ExternalLink,
  Calendar,
  BookOpen,
} from "lucide-react";
import { containerVariants, itemVariants } from "../style";

export const EducationSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const credentials = [
    {
      id: 1,
      type: "learning",
      title: t("education.ragCert"),
      issuer: "Coursera",
      date: t("education.inProgress"),
      verifyUrl: "",
      icon: BookOpen,
      isInProgress: true,
    },
    {
      id: 2,
      type: "cert",
      title: t("education.nodeCert"),
      issuer: t("education.issuer"),
      date: "Jun 2026",
      verifyUrl: "https://coursera.org/verify/FNCD6CQ5QEH4",
      icon: Award,
    },
    {
      id: 3,
      type: "cert",
      title: t("education.expressCert"),
      issuer: t("education.issuer"),
      date: "Jun 2026",
      verifyUrl: "https://coursera.org/verify/XTANIKHXJR6B",
      icon: Award,
    },
    {
      id: 4,
      type: "cert",
      title: t("education.vica"),
      issuer: "Vica Web Solutions",
      date: "2023",
      verifyUrl: "",
      icon: Award,
    },
    {
      id: 5,
      type: "edu",
      title: t("education.degree"),
      issuer: t("education.university"),
      date: "2021",
      verifyUrl: "",
      icon: GraduationCap,
    },
  ];

  return (
    <motion.section
      id="education"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute top-1/3 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-center tracking-tight"
          variants={itemVariants}
        >
          {t("education.title")}{" "}
          <motion.span
            className="text-primary inline-block"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 16px rgba(99, 102, 241, 0.6)",
            }}
          >
            {t("education.highlight")}
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-base sm:text-lg"
          variants={itemVariants}
        >
          {t("education.subtitle")}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {credentials.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className="group bg-card/90 border border-border/60 p-6 rounded-3xl shadow-xl shadow-primary/5 backdrop-blur-xl flex flex-col justify-between transition-all"
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  borderColor: "hsl(var(--primary) / 0.4)",
                  boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.15)",
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent size={24} />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${
                        item.isInProgress
                          ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                          : "bg-secondary text-secondary-foreground border-border/50"
                      }`}
                    >
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.type === "learning"
                      ? isRTL
                        ? "قيد التعلم"
                        : "In Learning"
                      : item.type === "cert"
                        ? t("education.categoryCert")
                        : t("education.categoryEdu")}
                  </span>

                  <h3 className="text-xl font-semibold mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm font-medium">
                    {item.issuer}
                  </p>
                </div>

                {item.verifyUrl && (
                  <div className="mt-6 pt-4 border-t border-border/40 flex justify-end">
                    <motion.a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                      whileHover={{ x: isRTL ? -3 : 3 }}
                    >
                      <span>{t("education.verify")}</span>
                      <ExternalLink size5={14} />
                    </motion.a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
