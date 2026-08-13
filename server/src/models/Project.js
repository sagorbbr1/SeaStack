import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    github: {
      type: String,
      trim: true,
      default: "",
    },

    live: {
      type: String,
      trim: true,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;