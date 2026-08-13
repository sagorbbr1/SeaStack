import express from "express";

import {
  createContact,
  getContacts,
  getContactStats,
  markAsRead,
  markAsReplied,
  deleteContact,
} from "../controllers/contactController.js";

import contactLimiter from "../middleware/rateLimiter.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

router.post("/", contactLimiter, createContact);

// ==========================================
// ADMIN
// ==========================================

// Get contact statistics
router.get("/stats", protect, getContactStats);

// Get all contacts
router.get("/", protect, getContacts);

// Mark contact as read
router.patch("/:id/read", protect, markAsRead);

// Mark contact as replied
router.patch("/:id/replied", protect, markAsReplied);

// Delete contact
router.delete("/:id", protect, deleteContact);

export default router;