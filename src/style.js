// Animation variants for container
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for items
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Animation for the name with gradient effect
export const nameVariants = {
  hidden: { scale: 0.8, opacity: 0, rotateX: -90 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.5,
    },
  },
};

// Animation for the image
export const imageVariants = {
  hidden: { scale: 0, rotate: -180, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

// Floating animation for the scroll indicator
export const scrollVariants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Mobile menu item animation
export const mobileMenuItemVariants = {
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

// Mobile menu container animation
export const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

// Icon rotation animation
export const iconVariants = {
  hidden: { rotate: -90, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
  exit: { rotate: 90, opacity: 0 },
};
// New animation variants specific for skills
export const skillCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: 90,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 30px -10px rgba(99, 102, 241, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const skillBarVariants = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: (level) => ({
    width: `${level}%`,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.34, 1.56, 0.64, 1], // Custom bounce ease
      delay: 0.3,
    },
  }),
};

export const categoryButtonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.1,
    y: -2,
    boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.4)",
  },
  tap: { scale: 0.95 },
};

export const percentageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 1.2,
    },
  },
};

export const contactCardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.02,
    x: 10,
    boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const socialIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.5 + i * 0.1,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  tap: { scale: 0.9 },
};

export const formFieldVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.3 + i * 0.1,
    },
  }),
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

export const floatingVariants = {
  animate: (i) => ({
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};
