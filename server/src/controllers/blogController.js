import Blog from "../models/Blog.js";

const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      tags,
      published,
    } = req.body;

    if (!title || !slug || !excerpt || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, excerpt and content are required.",
      });
    }

    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      return res.status(409).json({
        success: false,
        message: "A blog with this slug already exists.",
      });
    }

    const blog = await Blog.create({
      title: title.trim(),
      slug: slug.trim().toLowerCase(),
      excerpt: excerpt.trim(),
      content,
      image: image?.trim() || "",
      category: category?.trim() || "General",
      tags: Array.isArray(tags) ? tags : [],
      published: Boolean(published),
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      data: blog,
    });
  } catch (error) {
    console.error("Create blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create blog.",
    });
  }
};


// Public blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Get blogs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs.",
    });
  }
};


// Admin - all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Get all blogs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs.",
    });
  }
};


// Single public blog
const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      published: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Get blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog.",
    });
  }
};


// Admin - single blog
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Get blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog.",
    });
  }
};


const updateBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      tags,
      published,
    } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    // Check slug collision
    if (slug && slug !== blog.slug) {
      const existingBlog = await Blog.findOne({
        slug,
        _id: { $ne: req.params.id },
      });

      if (existingBlog) {
        return res.status(409).json({
          success: false,
          message: "A blog with this slug already exists.",
        });
      }
    }

    blog.title = title?.trim() ?? blog.title;
    blog.slug = slug?.trim().toLowerCase() ?? blog.slug;
    blog.excerpt = excerpt?.trim() ?? blog.excerpt;
    blog.content = content ?? blog.content;
    blog.image = image?.trim() ?? blog.image;
    blog.category = category?.trim() ?? blog.category;
    blog.tags = Array.isArray(tags) ? tags : blog.tags;
    blog.published =
      typeof published === "boolean"
        ? published
        : blog.published;

    await blog.save();

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
      data: blog,
    });
  } catch (error) {
    console.error("Update blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update blog.",
    });
  }
};


const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully.",
    });
  } catch (error) {
    console.error("Delete blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete blog.",
    });
  }
};


export {
  createBlog,
  getBlogs,
  getAllBlogs,
  getBlogBySlug,
  getBlog,
  updateBlog,
  deleteBlog,
};