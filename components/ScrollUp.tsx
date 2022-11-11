import React, { useState, useEffect } from "react";
import { CgScrollV } from "react-icons/cg";
import { useTheme } from "next-themes";

export default function ScrollUp() {
  const [backToTheTop, setBackToTheTop] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTheTop(true);
      } else {
        setBackToTheTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTheTop && (
        <div
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "5px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              background: theme === "dark" ? "#FFBC00" : "#4169E1",
              padding: "0.5rem",
              borderRadius: "4px",
              border: 0,
            }}
          >
            <span className="text-white dark:text-black">
              <CgScrollV size={25} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
