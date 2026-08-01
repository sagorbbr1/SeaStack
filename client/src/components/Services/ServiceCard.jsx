import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-blue-500
        dark:hover:shadow-blue-950/30
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-blue-600
          transition
          group-hover:bg-blue-600
          group-hover:text-white

          dark:bg-slate-800
          dark:text-blue-400
          dark:group-hover:bg-blue-600
          dark:group-hover:text-white
        "
      >
        <Icon size={28} />
      </div>

      {/* Title */}
      <h3
        className="
          mt-8
          text-2xl
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-7
          text-slate-600

          dark:text-slate-400
        "
      >
        {service.description}
      </p>

      {/* Read More */}
      <button
        className="
          mt-8
          flex
          items-center
          gap-2
          font-semibold
          text-blue-600
          transition
          group-hover:gap-3

          dark:text-blue-400
        "
      >
        Learn More
        <FaArrowRight />
      </button>
    </motion.div>
  );
};

export default ServiceCard;