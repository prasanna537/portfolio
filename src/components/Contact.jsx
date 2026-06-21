import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
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
            className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80
              text-stone-200 text-sm placeholder:text-stone-600
              focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-900/10
              transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80
              text-stone-200 text-sm placeholder:text-stone-600
              focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-900/10
              transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80
              text-stone-200 text-sm placeholder:text-stone-600 resize-none
              focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-900/10
              transition-all duration-300"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              hover:shadow-lg hover:shadow-purple-500/25
              transition-all duration-300 hover:scale-[1.02]"
          >
            <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
