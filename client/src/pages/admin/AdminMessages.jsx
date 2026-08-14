import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRotateRight,
  FaCheck,
  FaEnvelope,
  FaEnvelopeOpen,
  FaReply,
  FaTrash,
  FaXmark,
} from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState("");
  const [error, setError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const getToken = () => {
    return localStorage.getItem("adminToken");
  };

  // ==========================================
  // FETCH MESSAGES
  // ==========================================

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const token = getToken();

      const response = await fetch(`${API}/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch messages.");
      }

      setMessages(result.data || []);
    } catch (error) {
      console.error("Fetch messages error:", error);
      setError(error.message || "Failed to load messages.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  // ==========================================
  // UPDATE STATUS
  // ==========================================

  const updateStatus = async (id, status) => {
    try {
      setActionLoading(id);

      const token = getToken();

      const response = await fetch(
        `${API}/contact/${id}/${status}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update message.");
      }

      setMessages((prev) =>
        prev.map((message) =>
          message._id === id ? result.data : message
        )
      );

      setSelectedMessage((prev) =>
        prev?._id === id ? result.data : prev
      );
    } catch (error) {
      console.error("Update status error:", error);
      setError(error.message || "Failed to update message.");
    } finally {
      setActionLoading("");
    }
  };

  // ==========================================
  // DELETE MESSAGE
  // ==========================================

  const deleteMessage = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmed) return;

    try {
      setActionLoading(id);

      const token = getToken();

      const response = await fetch(`${API}/contact/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete message.");
      }

      setMessages((prev) =>
        prev.filter((message) => message._id !== id)
      );

      setSelectedMessage(null);
    } catch (error) {
      console.error("Delete message error:", error);
      setError(error.message || "Failed to delete message.");
    } finally {
      setActionLoading("");
    }
  };

  // ==========================================
  // OPEN MESSAGE
  // ==========================================

  const openMessage = async (message) => {
    setSelectedMessage(message);

    // Automatically mark unread message as read
    if (message.status === "unread") {
      await updateStatus(message._id, "read");
    }
  };

  // ==========================================
  // STATUS STYLE
  // ==========================================

  const getStatusStyle = (status) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400";

      case "read":
        return "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400";

      case "replied":
        return "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400";

      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Inbox
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            Messages
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Manage messages received through your portfolio.
          </p>
        </div>

        <button
          onClick={fetchMessages}
          disabled={loading}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:border-blue-500
            hover:text-blue-600
            disabled:cursor-not-allowed
            disabled:opacity-50

            dark:border-slate-800
            dark:bg-slate-900
            dark:text-slate-300
          "
        >
          <FaArrowRotateRight
            className={loading ? "animate-spin" : ""}
          />

          Refresh
        </button>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          <span>{error}</span>

          <button
            onClick={() => setError("")}
            className="ml-4"
          >
            <FaXmark />
          </button>
        </div>
      )}

      {/* Loading */}

      {loading ? (
        <LoadingState />
      ) : messages.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <MessageCard
              key={message._id}
              message={message}
              index={index}
              actionLoading={actionLoading}
              onOpen={openMessage}
              onDelete={deleteMessage}
              onStatusChange={updateStatus}
              getStatusStyle={getStatusStyle}
            />
          ))}
        </div>
      )}

      {/* Message Modal */}

      {selectedMessage && (
        <MessageModal
          message={selectedMessage}
          actionLoading={actionLoading}
          onClose={() => setSelectedMessage(null)}
          onDelete={deleteMessage}
          onStatusChange={updateStatus}
          getStatusStyle={getStatusStyle}
        />
      )}
    </div>
  );
};

// ==========================================
// MESSAGE CARD
// ==========================================

const MessageCard = ({
  message,
  index,
  actionLoading,
  onOpen,
  onDelete,
  onStatusChange,
  getStatusStyle,
}) => {
  const isLoading = actionLoading === message._id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      className={`
        rounded-3xl
        border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg

        dark:bg-slate-900

        ${
          message.status === "unread"
            ? "border-blue-200 dark:border-blue-500/30"
            : "border-slate-200 dark:border-slate-800"
        }
      `}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <button
          onClick={() => onOpen(message)}
          className="min-w-0 flex-1 text-left"
        >
          <div className="flex items-start gap-4">
            <div
              className={`
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl

                ${
                  message.status === "unread"
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                }
              `}
            >
              {message.status === "unread" ? (
                <FaEnvelope />
              ) : (
                <FaEnvelopeOpen />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="truncate font-bold text-slate-900 dark:text-white">
                  {message.name}
                </h2>

                <span
                  className={`
                    rounded-full
                    px-2.5
                    py-1
                    text-[11px]
                    font-bold
                    uppercase
                  ${getStatusStyle(message.status)}
                `}
                >
                  {message.status}
                </span>
              </div>

              <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">
                {message.email}
              </p>

              <h3 className="mt-3 truncate font-semibold text-slate-800 dark:text-slate-200">
                {message.subject}
              </h3>

              <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {message.message}
              </p>
            </div>
          </div>
        </button>

        {/* Actions */}

        <div className="flex shrink-0 flex-wrap items-center gap-2 lg:w-auto">
          {message.status === "unread" && (
            <button
              onClick={() =>
                onStatusChange(message._id, "read")
              }
              disabled={isLoading}
              title="Mark as read"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
                transition
                hover:bg-blue-600
                hover:text-white
                disabled:opacity-50

                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              <FaCheck />
            </button>
          )}

          {message.status !== "replied" && (
            <button
              onClick={() =>
                onStatusChange(message._id, "replied")
              }
              disabled={isLoading}
              title="Mark as replied"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-green-50
                text-green-600
                transition
                hover:bg-green-600
                hover:text-white
                disabled:opacity-50

                dark:bg-green-500/10
                dark:text-green-400
              "
            >
              <FaReply />
            </button>
          )}

          <button
            onClick={() => onDelete(message._id)}
            disabled={isLoading}
            title="Delete"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-red-50
              text-red-500
              transition
              hover:bg-red-500
              hover:text-white
              disabled:opacity-50

              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Date */}

      <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
        <p className="text-xs text-slate-400">
          {formatDate(message.createdAt)}
        </p>
      </div>
    </motion.div>
  );
};

// ==========================================
// MESSAGE MODAL
// ==========================================

const MessageModal = ({
  message,
  actionLoading,
  onClose,
  onDelete,
  onStatusChange,
  getStatusStyle,
}) => {
  const isLoading = actionLoading === message._id;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-slate-950/60
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="
          max-h-[90vh]
          w-full
          max-w-2xl
          overflow-y-auto
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-2xl

          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        {/* Modal Header */}

        <div className="flex items-start justify-between border-b border-slate-200 p-6 dark:border-slate-800">
          <div>
            <span
              className={`
                inline-block
                rounded-full
                px-3
                py-1
                text-xs
                font-bold
                uppercase
                ${getStatusStyle(message.status)}
              `}
            >
              {message.status}
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
              {message.subject}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-slate-100
              text-slate-500
              transition
              hover:bg-slate-200
              hover:text-slate-900

              dark:bg-slate-800
              dark:hover:bg-slate-700
              dark:hover:text-white
            "
          >
            <FaXmark />
          </button>
        </div>

        {/* Modal Content */}

        <div className="space-y-6 p-6">
          {/* Sender */}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Name
              </p>

              <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                {message.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email
              </p>

              <a
                href={`mailto:${message.email}`}
                className="mt-1 block break-all font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                {message.email}
              </a>
            </div>
          </div>

          {/* Message */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Message
            </p>

            <div
              className="
                mt-2
                whitespace-pre-wrap
                rounded-2xl
                bg-slate-50
                p-5
                text-sm
                leading-7
                text-slate-700

                dark:bg-slate-950
                dark:text-slate-300
              "
            >
              {message.message}
            </div>
          </div>

          {/* Date */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Received
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {formatDate(message.createdAt)}
            </p>
          </div>
        </div>

        {/* Modal Footer */}

        <div className="flex flex-wrap gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
          {message.status === "unread" && (
            <button
              onClick={() =>
                onStatusChange(message._id, "read")
              }
              disabled={isLoading}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:opacity-50
              "
            >
              <FaCheck />
              Mark as Read
            </button>
          )}

          {message.status !== "replied" && (
            <button
              onClick={() =>
                onStatusChange(message._id, "replied")
              }
              disabled={isLoading}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-green-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-green-700
                disabled:opacity-50
              "
            >
              <FaReply />
              Mark as Replied
            </button>
          )}

          <a
            href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(
              message.subject
            )}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              px-4
              py-2.5
              text-sm
              font-semibold
              text-slate-700
              transition
              hover:border-blue-500
              hover:text-blue-600

              dark:border-slate-700
              dark:text-slate-300
            "
          >
            <FaReply />
            Reply
          </a>

          <button
            onClick={() => onDelete(message._id)}
            disabled={isLoading}
            className="
              ml-auto
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-red-200
              px-4
              py-2.5
              text-sm
              font-semibold
              text-red-600
              transition
              hover:bg-red-500
              hover:text-white
              disabled:opacity-50

              dark:border-red-500/20
              dark:text-red-400
            "
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// LOADING
// ==========================================

const LoadingState = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="
            animate-pulse
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6

            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />

            <div className="flex-1">
              <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="mt-3 h-3 w-56 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="mt-4 h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ==========================================
// EMPTY
// ==========================================

const EmptyState = () => {
  return (
    <div
      className="
        flex
        min-h-[400px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-6
        text-center

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          text-slate-400

          dark:bg-slate-800
        "
      >
        <FaEnvelope size={24} />
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
        No messages yet
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
        Messages submitted through your portfolio contact form
        will appear here.
      </p>
    </div>
  );
};

// ==========================================
// DATE FORMAT
// ==========================================

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

export default AdminMessages;