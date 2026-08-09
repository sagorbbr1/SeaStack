import rateLimit from "express-rate-limit";

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 5,

  message: {
    success: false,
    message:
      "Too many messages sent. Please try again after 15 minutes.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

export default contactLimiter;