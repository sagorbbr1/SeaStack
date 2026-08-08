import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const handleEnter = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select"
      );

      setHover(!!target);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleEnter);
    document.documentElement.addEventListener(
      "mouseleave",
      handleLeave
    );

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleEnter);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleLeave
      );
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <div
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          hidden
          h-10
          w-10
          rounded-full
          border
          transition-[width,height,background-color,border-color,opacity]
          duration-300
          ease-out
          lg:block

          ${visible ? "opacity-100" : "opacity-0"}

          ${
            hover
              ? `
                h-14
                w-14
                border-blue-500
                bg-blue-500/10
              `
              : `
                border-blue-400/60
                bg-blue-500/5
              `
          }
        `}
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Inner Dot */}
      <div
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100000]
          hidden
          h-2.5
          w-2.5
          rounded-full
          bg-blue-500
          shadow-[0_0_18px_rgba(59,130,246,0.8)]
          transition-transform
          duration-200
          ease-out
          lg:block

          ${visible ? "opacity-100" : "opacity-0"}

          ${hover ? "scale-0" : "scale-100"}
        `}
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;