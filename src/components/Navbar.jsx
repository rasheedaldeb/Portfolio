// src/components/Navbar.js (or .tsx)
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { containerVariants, itemVariants } from "./../style";
import { useLanguage } from "../context/LanguageContext";

const navItemsKeys = ["home", "about", "skills", "projects", "contact"];
const navItemsHrefMap = {
  home: "#hero",
  about: "#about",
  skills: "#skills",
  projects: "#projects",
  contact: "#contact",
};

export const Navbar = () => {
  const { t, changeLanguage, currentLanguage, isLoaded, direction } =
    useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changBgColor = () => {
    if (window.scrollY >= 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changBgColor);
    return () => window.removeEventListener("scroll", changBgColor);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Create localized nav items with useMemo for performance
  const localizedNavItems = useMemo(() => {
    if (!isLoaded) return [];
    return navItemsKeys.map((key) => ({
      name: t(`nav.${key}`, { defaultValue: key }),
      href: navItemsHrefMap[key],
    }));
  }, [t, currentLanguage, isLoaded]);

  // Animation variants for mobile menu items (RTL aware)
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: direction === "rtl" ? -50 : 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    exit: {
      opacity: 0,
      x: direction === "rtl" ? -50 : 50,
      transition: { duration: 0.2 },
    },
  };

  // Language Switcher Component (toggles between EN and AR)
  // eslint-disable-next-line react/prop-types
  const LanguageSwitcher = ({ isMobile = false }) => {
    // Toggle between 'en' and 'ar'
    const nextLang = currentLanguage === "en" ? "ar" : "en";
    const displayName = nextLang === "ar" ? "العربية" : "EN";

    return (
      <button
        onClick={() => changeLanguage(nextLang)}
        className={cn(
          "transition-colors duration-300 font-bold cursor-pointer",
          isMobile
            ? "text-2xl text-foreground/80 hover:text-primary"
            : "text-lg text-foreground/80 hover:text-primary relative px-2 py-1",
        )}
        aria-label={`Change language to ${nextLang === "ar" ? "Arabic" : "English"}`}
      >
        {displayName}
        {!isMobile && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 transition-all duration-300" />
        )}
      </button>
    );
  };

  // Show loading state while translations are loading
  if (!isLoaded) {
    return (
      <nav className="fixed w-full z-40 transition-all duration-300 py-5 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            <span className="font-poppins">RA</span>
            <span className="font-akaya"> Rasheed Aldeb</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-16 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"
              ></div>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-5",
        isScrolled && "bg-background/80 backdrop-blur-md shadow-sm",
      )}
      dir={direction}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          variants={itemVariants}
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <motion.span
              className="text-glow text-foreground inline-block"
              whileHover={{
                textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
              }}
            >
              <span className="font-poppins">RA</span>
            </motion.span>
            <span className="font-akaya">Rasheed Aldeb</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {localizedNavItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              variants={itemVariants}
              custom={index}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg font-bold relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}

          {/* Theme Toggle and Language Switcher */}
          <div className="flex items-center gap-4">
            <motion.div variants={itemVariants}>
              <ThemeToggle />
            </motion.div>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 relative"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                x: direction === "rtl" ? "-100%" : "100%",
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "rtl" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed w-full top-0 left-0 h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 md:hidden",
              )}
            >
              <motion.div
                className="flex flex-col space-y-6 text-xl items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {localizedNavItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    custom={index}
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-3xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{
                      scale: 1.1,
                      x: direction === "rtl" ? -10 : 10,
                      color: "var(--primary)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile Theme and Language Switchers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 mt-8"
              >
                <ThemeToggle />
                <LanguageSwitcher />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
