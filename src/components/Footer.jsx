import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [showScrollTop, setShowScrollTop] = useState(false);

  // مراقبة التمرير لإظهار أو إخفاء الزر الطافي
  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* الفوتر الطبيعي في أسفل الصفحة */}
      <footer
        dir={isRTL ? "rtl" : "ltr"}
        className="py-10 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-xl relative border-t border-border/60 mt-12"
      >
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()} Rasheed.co. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground">
            {isRTL
              ? "صُمم وعُرض بكل احترافية"
              : "Crafted with passion & precision"}
          </p>
        </div>
      </footer>

      {/* زر السكرول الطافي على الشاشة */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-6 ${
              isRTL ? "left-6" : "right-6"
            } z-50 p-3.5 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 border border-primary/20 backdrop-blur-md hover:bg-primary/90 transition-all group flex items-center justify-center`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={20}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
