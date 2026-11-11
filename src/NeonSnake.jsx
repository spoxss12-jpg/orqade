
import { useEffect, useRef, useState } from "react";
import "./NeonSnake.css";

const SIZE = 20;
const START_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];

const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

function randomFood(snake) {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * SIZE),
      y: Math.floor(Math.random() * SIZE),
    };
  } while (snake.some((part) => part.x === food.x && part.y === food.y));
  return food;
}

export default function NeonSnake({ onClose }) {
  const [snake, setSnake] = useState(START_SNAKE);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const direction = useRef({ x: 1, y: 0 });
  const nextDirection = useRef({ x: 1, y: 0 });

  const restart = () => {
    setSnake(START_SNAKE);
    setFood(randomFood(START_SNAKE));
    setScore(0);
    setGameOver(false);
    direction.current = { x: 1, y: 0 };
    nextDirection.current = { x: 1, y: 0 };
    setRunning(true);
  };

  useEffect(() => {
    const handleKey = (event) => {
      const next = DIRECTIONS[event.key] || DIRECTIONS[event.key.toLowerCase()];
      if (!next) return;
      event.preventDefault();

      const current = direction.current;
      if (next.x + current.x === 0 && next.y + current.y === 0) return;
      nextDirection.current = next;
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (!running || gameOver) return;

    const timer = setInterval(() => {
      direction.current = nextDirection.current;

      setSnake((previous) => {
        const head = {
          x: previous[0].x + direction.current.x,
          y: previous[0].y + direction.current.y,
        };

        const eating = head.x === food.x && head.y === food.y;
        const body = eating ? previous : previous.slice(0, -1);

        const hitWall =
          head.x < 0 || head.x >= SIZE || head.y < 0 || head.y >= SIZE;
        const hitBody = body.some(
          (part) => part.x === head.x && part.y === head.y
        );

        if (hitWall || hitBody) {
          setRunning(false);
          setGameOver(true);
          return previous;
        }

        const updated = [head, ...previous];
        if (!eating) updated.pop();

        if (eating) {
          setScore((value) => value + 10);
          setFood(randomFood(updated));
        }

        return updated;
      });
    }, 140);

    return () => clearInterval(timer);
  }, [running, gameOver, food]);

  const changeDirection = (next) => {
    const current = direction.current;
    if (next.x + current.x === 0 && next.y + current.y === 0) return;
    nextDirection.current = next;
  };

  return (
    <div className="snake-overlay">
      <div className="snake-panel">
        <div className="snake-top">
          <div>
            <span className="snake-label">ORQADE ORIGINAL</span>
            <h1>NEON SNAKE<span>.</span></h1>
          </div>
          <button className="snake-close" onClick={onClose}>✕</button>
        </div>

        <div className="snake-stats">
          <div><span>SCORE</span><strong>{score}</strong></div>
          <div><span>BEST THIS RUN</span><strong>{score}</strong></div>
          <div><span>SIZE</span><strong>{snake.length}</strong></div>
        </div>

        <div className="snake-board">
          {Array.from({ length: SIZE * SIZE }, (_, index) => {
            const x = index % SIZE;
            const y = Math.floor(index / SIZE);
            const isSnake = snake.some((part) => part.x === x && part.y === y);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                className={[
                  "snake-cell",
                  isSnake ? "snake-body" : "",
                  isHead ? "snake-head" : "",
                  isFood ? "snake-food" : "",
                ].join(" ")}
              />
            );
          })}

          {!running && (
            <div className="snake-message">
              <h2>{gameOver ? "GAME OVER" : "READY TO PLAY?"}</h2>
              <p>
                {gameOver
                  ? `You scored ${score} points. Try again!`
                  : "Collect the glowing food. Avoid the walls and yourself."}
              </p>
              <button onClick={restart}>
                {gameOver ? "PLAY AGAIN" : "START GAME"} ↗
              </button>
            </div>
          )}
        </div>

        <div className="snake-controls">
          <p>USE ARROW KEYS OR WASD TO MOVE</p>
          <div className="snake-pad">
            <button onClick={() => changeDirection({ x: 0, y: -1 })}>↑</button>
            <div>
              <button onClick={() => changeDirection({ x: -1, y: 0 })}>←</button>
              <button onClick={() => changeDirection({ x: 0, y: 1 })}>↓</button>
              <button onClick={() => changeDirection({ x: 1, y: 0 })}>→</button>
            </div>
          </div>
        </div>

        <div className="snake-bottom">
          <span>✳ ORQADE ARCADE</span>
          <button onClick={restart}>RESTART ↻</button>
        </div>
      </div>
    </div>
  );
}
