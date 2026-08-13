import Contact from "../models/Contact.js";
import validator from "validator";
import sendContactEmail from "../utils/sendEmail.js";

// ==========================================
// CREATE CONTACT - PUBLIC
// ==========================================

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Clean input
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // Name validation
    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters.",
      });
    }

    // Email validation
    if (!validator.isEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Subject validation
    if (cleanSubject.length < 3 || cleanSubject.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Subject must be between 3 and 200 characters.",
      });
    }

    // Message validation
    if (cleanMessage.length < 10 || cleanMessage.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Message must be between 10 and 500 characters.",
      });
    }

    // Save contact
    const contact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      status: "unread",
    });

    // Send email notification
    await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Create contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

// ==========================================
// GET ALL CONTACTS - ADMIN
// ==========================================

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("Get contacts error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contacts.",
    });
  }
};

// ==========================================
// GET CONTACT STATS - ADMIN
// ==========================================

const getContactStats = async (req, res) => {
  try {
    const total = await Contact.countDocuments();

    const unread = await Contact.countDocuments({
      status: "unread",
    });

    const read = await Contact.countDocuments({
      status: "read",
    });

    const replied = await Contact.countDocuments({
      status: "replied",
    });

    return res.status(200).json({
      success: true,
      data: {
        total,
        unread,
        read,
        replied,
      },
    });
  } catch (error) {
    console.error("Get contact stats error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contact statistics.",
    });
  }
};

// ==========================================
// MARK AS READ - ADMIN
// ==========================================

const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status: "read" },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message marked as read.",
      data: contact,
    });
  } catch (error) {
    console.error("Mark as read error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update message.",
    });
  }
};

// ==========================================
// MARK AS REPLIED - ADMIN
// ==========================================

const markAsReplied = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status: "replied" },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message marked as replied.",
      data: contact,
    });
  } catch (error) {
    console.error("Mark as replied error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update message.",
    });
  }
};

// ==========================================
// DELETE CONTACT - ADMIN
// ==========================================

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error("Delete contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete contact.",
    });
  }
};

export {
  createContact,
  getContacts,
  getContactStats,
  markAsRead,
  markAsReplied,
  deleteContact,
};