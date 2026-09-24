import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { projects } from "../projects";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { containerVariants, itemVariants } from "../style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const ProjectsSection = () => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <motion.section
      id="projects"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl flex flex-col items-center relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-center tracking-tight"
          variants={itemVariants}
        >
          {t("projects.title")}{" "}
          <motion.span
            className="text-primary inline-block"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 16px rgba(99, 102, 241, 0.6)",
            }}
          >
            {t("projects.highlight")}
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-base sm:text-lg"
          variants={itemVariants}
        >
          {t("projects.subtitle")}
        </motion.p>

        {/* Swiper Slider Wrapper */}
        <motion.div
          className="w-full relative md:px-16 px-0"
          variants={itemVariants}
        >
          <div dir="ltr">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              effect="coverflow"
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={false}
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              className="projects-swiper pb-14"
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={project.id}
                  className="w-full sm:w-[380px] md:w-[420px] h-auto"
                >
                  <motion.div
                    className="group bg-card/90 border border-border/60 rounded-3xl overflow-hidden shadow-xl shadow-primary/5 flex flex-col h-full backdrop-blur-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      borderColor: "hsl(var(--primary) / 0.4)",
                      boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.15)",
                    }}
                  >
                    {/* Project Image */}
                    <div className="h-52 overflow-hidden relative">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div
                      className="p-6 flex flex-col flex-grow justify-between text-start"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 text-xs font-medium border border-primary/20 rounded-full bg-primary/10 text-primary">
                            {project.tags}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {t(project.descriptionKey)}
                        </p>
                      </div>

                      {/* Footer Actions / Status */}
                      <div className="flex justify-between items-center pt-4 border-t border-border/40">
                        {project.demoUrl ? (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>
                              {isRTL ? "معاينة المشروع" : "Live Demo"}
                            </span>
                            <ExternalLink size={16} />
                          </motion.a>
                        ) : (
                          <span />
                        )}
                        <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                          {project.inDev ? t("projects.inDev") : ""}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Arrows */}
          <motion.button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-12 h-12 rounded-2xl bg-card/80 border border-border/80 text-foreground hover:bg-primary hover:text-white hover:border-primary shadow-lg backdrop-blur-md lg:flex hidden items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            {isRTL ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
          </motion.button>

          <motion.button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-12 h-12 rounded-2xl bg-card/80 border border-border/80 text-foreground hover:bg-primary hover:text-white hover:border-primary shadow-lg backdrop-blur-md lg:flex hidden items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            {isRTL ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
          </motion.button>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <motion.a
            className="cosmic-button flex items-center gap-2 py-3.5 px-8 rounded-xl font-medium shadow-lg shadow-primary/20"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rasheedaldeb"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("projects.github")}</span>
            <motion.div
              animate={{ x: isRTL ? [0, -4, 0] : [0, 4, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ArrowRight size={18} className={cn(isRTL && "rotate-180")} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};
