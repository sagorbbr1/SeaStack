import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-[32px]
        border border-slate-200
        bg-white/70
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
        backdrop-blur-xl

        dark:border-slate-700
        dark:bg-slate-900/70
        dark:shadow-black/20
      "
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6">
        <Input
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6">
        <Textarea
          label="Your Message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          py-4
          font-semibold
          text-white
          shadow-lg
          transition
          hover:shadow-blue-500/40
        "
      >
        <FaPaperPlane />
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="
          peer
          h-14
          w-full
          rounded-xl
          border
          border-slate-300
          bg-transparent
          px-4
          text-slate-900
          outline-none
          transition
          focus:border-blue-500

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:placeholder:text-slate-500
          dark:focus:border-cyan-400
        "
      />

      <label
        className="
          absolute
          left-4
          top-4
          bg-white
          px-1
          text-slate-500
          transition-all
          duration-200

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base

          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-blue-600

          peer-[:not(:placeholder-shown)]:-top-2
          peer-[:not(:placeholder-shown)]:text-xs

          dark:bg-slate-900
          dark:text-slate-400
          dark:peer-focus:text-cyan-400
        "
      >
        {label}
      </label>
    </div>
  );
}

function Textarea({
  label,
  name,
  value,
  onChange,
  rows,
}) {
  return (
    <div className="relative">
      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="
          peer
          w-full
          rounded-xl
          border
          border-slate-300
          bg-transparent
          px-4
          py-4
          text-slate-900
          outline-none
          transition
          focus:border-blue-500

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:placeholder:text-slate-500
          dark:focus:border-cyan-400
        "
      />

      <label
        className="
          absolute
          left-4
          top-4
          bg-white
          px-1
          text-slate-500
          transition-all
          duration-200

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base

          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-blue-600

          peer-[:not(:placeholder-shown)]:-top-2
          peer-[:not(:placeholder-shown)]:text-xs

          dark:bg-slate-900
          dark:text-slate-400
          dark:peer-focus:text-cyan-400
        "
      >
        {label}
      </label>
    </div>
  );
}