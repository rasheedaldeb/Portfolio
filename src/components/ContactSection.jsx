import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  contactCardVariants,
  containerVariants,
  floatingVariants,
  formFieldVariants,
  itemVariants,
  socialIconVariants,
} from "../style";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name,
      email,
      phone,
      message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: t("contact.toastSuccessTitle"),
          description: t("contact.toastSuccessDesc"),
        });
        setName("");
        setEmail("");
        setPhone(""); // ✅ reset
        setMessage("");
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: t("contact.toastErrorTitle"),
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        custom={0}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        custom={1}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        custom={2}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          {t("contact.title")}
          <motion.span
            className="text-primary inline-block"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
            }}
          >
            {t("contact.titleHighlight")}
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {t("contact.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h3
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              {t("contact.infoTitle")}
            </motion.h3>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-start space-x-4"
                variants={contactCardVariants}
                custom={0}
                whileHover="hover"
              >
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Mail className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h4
                    className="font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {t("contact.email")}
                  </motion.h4>
                  <motion.a
                    href="mailto:rasheedaldeb@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  >
                    rasheedaldeb@gmail.com
                  </motion.a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start space-x-4"
                variants={contactCardVariants}
                custom={1}
                whileHover="hover"
              >
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Phone className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h4
                    className="font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {t("contact.phone")}
                  </motion.h4>
                  <motion.a
                    href="https://wa.me/+963937071349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  >
                    +963 (937) 07-1349
                  </motion.a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-start space-x-4"
                variants={contactCardVariants}
                custom={2}
                whileHover="hover"
              >
                <motion.div
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <MapPin className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h4
                    className="font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {t("contact.location")}
                  </motion.h4>
                  <motion.p
                    className="text-muted-foreground"
                    whileHover={{ x: 5 }}
                  >
                    Bab Sharqi - Damascus, Syria
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div className="pt-8" variants={itemVariants}>
              <motion.h4
                className="font-medium mb-4 text-center md:text-left"
                variants={itemVariants}
              >
                {t("contact.connectTitle")}
              </motion.h4>
              <motion.div
                className="flex space-x-4 justify-center md:justify-start"
                variants={containerVariants}
              >
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/rasheed-aldeb-a3aa68259",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/RasheedAld75756",
                    label: "Twitter",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/rashedaldeb/",
                    label: "Instagram",
                  },
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/rashed.aldeb.16",
                    label: "Facebook",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    variants={socialIconVariants}
                    custom={index}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-card p-8 rounded-lg shadow-xs"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.2)",
            }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              {t("contact.send")}
            </motion.h3>

            <motion.form
              className="space-y-6"
              ref={form}
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              {/* Name Field */}
              <motion.div
                variants={formFieldVariants}
                custom={0}
                whileFocus="focus"
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.name")}
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="user_name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                variants={formFieldVariants}
                custom={1}
                whileFocus="focus"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.Email")}
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="user_email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              <motion.div
                variants={formFieldVariants}
                custom={2}
                whileFocus="focus"
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.phone")}
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="+123456789"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              {/* Message Field */}
              <motion.div
                variants={formFieldVariants}
                custom={2}
                whileFocus="focus"
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.message")}
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={formFieldVariants} custom={3}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 relative overflow-hidden",
                    isSubmitting && "opacity-70 cursor-not-allowed",
                  )}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px -5px rgba(99, 102, 241, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.send")}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <Send size={16} />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Success Animation (optional) */}
              <AnimatePresence>
                {!isSubmitting && !name && !email && !message && (
                  <motion.p
                    className="text-sm text-muted-foreground text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {t("contact.footerMessage")}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
