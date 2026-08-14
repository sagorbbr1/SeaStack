import express from "express";

import {
  createBlog,
  getBlogs,
  getAllBlogs,
  getBlogBySlug,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();


// Public
router.get("/", getBlogs);

router.get("/slug/:slug", getBlogBySlug);


// Admin
router.get("/admin/all", protect, getAllBlogs);

router.get("/admin/:id", protect, getBlog);

router.post("/", protect, createBlog);

router.put("/:id", protect, updateBlog);

router.delete("/:id", protect, deleteBlog);


export default router;