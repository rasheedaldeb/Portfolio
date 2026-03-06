import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

// --------------------------------------------------------------
// Data parsed from your resume (April 2025)
// --------------------------------------------------------------
const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Freelancer",
    location: "Remote",
    period: "2024 - Present",
    description: [
      "Develop and deliver custom web applications for international clients across various industries, ensuring responsive design and optimal user experience.",
      "Architect and implement full-stack solutions using React.js and Next.js, resulting in 40% faster load times and improved SEO rankings.",
      "Collaborate directly with clients to translate business requirements into technical specifications, delivering projects 100% on time and within budget.",
      "Provide ongoing maintenance and technical support, achieving 99.9% client satisfaction through regular updates and performance monitoring.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Client Communication",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Eli-Syr",
    location: "On Site / Syria",
    period: "Aug2025 – Oct 2025",
    description: [
      "Built responsive, user-focused interfaces using React and modern CSS frameworks.",
      "Improved UI consistency and performance across multiple product modules.",
      "Collaborated with designers and backend teams to deliver optimized user experiences.",
    ],
    skills: ["React", "Next.js", "Team Collaboration"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "OFT (Own Financial Tactics)",
    location: "Remote",
    period: "Oct2024 – Mar2025",
    description: [
      "Enhanced website performance, achieving a 30% speed improvement through code optimization.",
      "Developed reusable UI components and improved site structure for better SEO.",
      "Implemented efficient data handling and improved user engagement metrics.",
    ],
    skills: ["React.js", "WordPress", "Technical Support"],
  },
  {
    id: 4,
    role: "Frontend Developer Trainee",
    company: "MasterCoders Software Solution",
    location: "Syria",
    period: "2023 (6 months)",
    description: [
      "Built user-facing components using React.js with clean, modular architecture.",
      "Improved UI/UX through responsive layouts and intuitive interactions.",
    ],
    skills: ["React", "Modular Architecture", "UI/UX"],
  },
];

// --------------------------------------------------------------
// Animation variants
// --------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 }, // keep it subtle
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: { scale: 1, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 40px -15px rgba(139, 92, 246, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// --------------------------------------------------------------
// Main Component
// --------------------------------------------------------------
const Experience = () => {
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
    >
      {/* Background subtle cosmic elements — optional, matching your site's vibe */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div> */}

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-foreground">Work </span>
            <span className="text-primary ">Experience</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto font-poppins">
            Building digital solutions with modern web development technologies
          </p>
        </motion.div>

        {/* Timeline cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative"
            >
              {/* Timeline connector line (except last) */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 md:left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-transparent" />
              )}

              <motion.div
                variants={cardHover}
                className="relative bg-card rounded-2xl p-6 md:p-8 border border-border/40 backdrop-blur-sm shadow-xl transition-colors"
              >
                {/* Decorative left accent */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-primary rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon / date column */}
                  <div className="flex md:flex-col items-start md:items-center gap-3 md:gap-2 min-w-[120px]">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-sm font-poppins text-foreground/70 bg-background/50 px-3 py-1 rounded-full">
                      <Calendar size={14} className="text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-poppins font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg text-primary font-medium">
                        {exp.company}
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="flex items-center gap-1 text-sm text-foreground/60">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground/80 font-poppins text-sm md:text-base"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skill chips */}
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
