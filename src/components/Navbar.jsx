import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { containerVariants, itemVariants } from "./../style"; // Adjust the import path as needed

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [selectedPage, setSelectedPage] = useState("#hero");

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

  // Animation variants for mobile menu items
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 50 },
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
    exit: { opacity: 0, x: 50, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-5",
        isScrolled && "bg-background/80 backdrop-blur-md shadow-sm",
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          variants={itemVariants}
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">
            <motion.span
              className="text-glow text-foreground inline-block"
              whileHover={{
                textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
              }}
            >
              <span className="font-poppins">RA</span>
            </motion.span>{" "}
            <span className="font-akaya">Rasheed Aldeb</span>
          </span>
        </motion.a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.href}
              variants={itemVariants}
              custom={key}
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
          <motion.div variants={itemVariants}>
            <ThemeToggle />
          </motion.div>
        </div>

        {/* mobile nav button */}
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

        {/* mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed w-full top-0 left-0 h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 md:hidden",
              )}
            >
              <motion.div
                className="flex flex-col space-y-8 text-xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, key) => (
                  <motion.a
                    key={key}
                    href={item.href}
                    custom={key}
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{
                      scale: 1.1,
                      x: 10,
                      color: "var(--primary)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
