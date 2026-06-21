import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

const CONTACT_CARDS = [
  {
    icon: FiMapPin,
    label: "Location",
    value: CONTACT.address,
    href: null,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: CONTACT.phoneNo,
    href: `tel:${CONTACT.phoneNo}`,
  },
  {
    icon: FiMail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setSubmitStatus("missing_key");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="pb-20 w-full">
      {/* Gradient accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-16" />

      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-16 text-center text-4xl text-white font-bold tracking-tight"
      >
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Cards */}
        <div className="flex flex-col gap-4">
          {CONTACT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const Wrapper = card.href ? "a" : "div";
            const wrapperProps = card.href
              ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="flex items-center gap-4 p-5 bg-slate-900/30 border border-slate-800/80 rounded-2xl
                    hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/10
                    transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20
                    flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    <Icon className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                      {card.label}
                    </p>
                    <p className="text-stone-300 text-sm group-hover:text-white transition-colors duration-300">
                      {card.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80
              text-stone-200 text-sm placeholder:text-stone-600
              focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-900/10
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80
              text-stone-200 text-sm placeholder:text-stone-600
              focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-900/10
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80
              text-stone-200 text-sm placeholder:text-stone-600 resize-none
              focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-900/10
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              hover:shadow-lg hover:shadow-purple-500/25
              disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
              transition-all duration-300 hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <FiLoader className="animate-spin text-base" />
            ) : (
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
            >
              <FiCheckCircle className="text-lg flex-shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}

          {submitStatus === "missing_key" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-1 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <FiAlertCircle className="text-lg flex-shrink-0 text-amber-400" />
                <span className="font-semibold text-white">Setup Required</span>
              </div>
              <p className="text-xs text-stone-300 ml-7">
                Please get a free access key from <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">web3forms.com</a> and add it as <code className="bg-slate-900/80 px-1 py-0.5 rounded text-pink-400 font-mono">VITE_WEB3FORMS_KEY</code> in your <code className="bg-slate-900/80 px-1 py-0.5 rounded text-pink-400 font-mono">.env</code> file.
              </p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
            >
              <FiAlertCircle className="text-lg flex-shrink-0" />
              <span>Something went wrong. Please try again or email directly.</span>
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
