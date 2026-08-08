import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
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
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/10

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:focus:border-cyan-400
          dark:focus:ring-cyan-400/10
        "
      />

      <label
        htmlFor={name}
        className="
          pointer-events-none
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
        id={name}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        required
        maxLength={500}
        placeholder=" "
        className="
          peer
          w-full
          resize-none
          rounded-xl
          border
          border-slate-300
          bg-transparent
          px-4
          py-4
          text-slate-900
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/10

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:focus:border-cyan-400
          dark:focus:ring-cyan-400/10
        "
      />

      <label
        htmlFor={name}
        className="
          pointer-events-none
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

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
     await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      setStatus({
        type: "success",
        message: "Message sent successfully 🚀",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setStatus({
        type: "error",
        message: "Failed to send message.",
      });
    } finally {
      setLoading(false);
    }
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
        border
        border-slate-200
        bg-white/70
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
        backdrop-blur-xl

        dark:border-slate-700
        dark:bg-slate-900/70
      "
    >
      {status.message && (
        <div
          className={`mb-6 rounded-xl px-4 py-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          {status.message}
        </div>
      )}

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

        <div className="mt-2 flex justify-end">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {form.message.length}/500
          </span>
        </div>
      </div>

            <motion.button
        type="submit"
        disabled={loading}
        whileHover={!loading ? { scale: 1.02 } : {}}
        whileTap={!loading ? { scale: 0.98 } : {}}
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
          via-sky-500
          to-cyan-500
          py-4
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:shadow-blue-500/40
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        <FaPaperPlane
          className={loading ? "animate-pulse" : ""}
        />

        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;