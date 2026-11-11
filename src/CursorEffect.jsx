
import { useEffect, useState } from "react";
import "./CursorEffect.css";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hover = (e) => {
      setActive(
        !!e.target.closest(
          "a, button, .game-card, input, [role='button']"
        )
      );
    };

    const leave = () => {
      setVisible(false);
      setActive(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("pointerover", hover);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("pointerover", hover);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className={`cursor-effect ${visible ? "visible" : ""} ${active ? "active" : ""}`}>
      <div
        className="cursor-glow"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="cursor-dot"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}
