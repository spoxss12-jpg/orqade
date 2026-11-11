
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function JungleRunner({ onClose }) {
  const mountRef = useRef(null);
  const startGameRef = useRef(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("ready");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#07150f");
    scene.fog = new THREE.Fog("#07150f", 25, 90);

    const camera = new THREE.PerspectiveCamera(
      65,
      mount.clientWidth / mount.clientHeight,
      0.1,
      150
    );
    camera.position.set(0, 6, 10);
    camera.lookAt(0, 1, -12);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight("#c5f5d9", "#14251b", 2));

    const sunlight = new THREE.DirectionalLight("#ffffff", 2.5);
    sunlight.position.set(-5, 12, 5);
    sunlight.castShadow = true;
    scene.add(sunlight);

    const green = new THREE.MeshStandardMaterial({ color: "#174b30" });
    const roadMaterial = new THREE.MeshStandardMaterial({
      color: "#33352d",
      roughness: 1,
    });
    const gold = new THREE.MeshStandardMaterial({
      color: "#ffd43b",
      metalness: 0.7,
      roughness: 0.25,
      emissive: "#6b4300",
    });

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 140),
      green
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.08, -45);
    scene.add(ground);

    const road = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 120),
      roadMaterial
    );
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0, -43);
    road.receiveShadow = true;
    scene.add(road);

    const laneMarkers = [];
    for (const x of [-1.5, 1.5]) {
      for (let i = 0; i < 15; i++) {
        const marker = new THREE.Mesh(
          new THREE.BoxGeometry(0.07, 0.025, 2.5),
          new THREE.MeshStandardMaterial({ color: "#d5c9a0" })
        );
        marker.position.set(x, 0.025, -85 + i * 7);
        scene.add(marker);
        laneMarkers.push(marker);
      }
    }

    // Jungle trees
    const trees = [];
    for (let i = 0; i < 32; i++) {
      for (const side of [-1, 1]) {
        const tree = new THREE.Group();

        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.22, 0.35, 3, 7),
          new THREE.MeshStandardMaterial({ color: "#70452b" })
        );
        trunk.position.y = 1.5;
        tree.add(trunk);

        const leaves = new THREE.Mesh(
          new THREE.ConeGeometry(1.35, 3.2, 7),
          new THREE.MeshStandardMaterial({
            color: i % 2 ? "#176b37" : "#238447",
          })
        );
        leaves.position.y = 3.5;
        tree.add(leaves);

        tree.position.set(side * (7 + Math.random() * 5), 0, -90 + i * 5);
        scene.add(tree);
        trees.push(tree);
      }
    }

    // Player character
    const player = new THREE.Group();

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 1.05, 0.45),
      new THREE.MeshStandardMaterial({
        color: "#8b5cf6",
        roughness: 0.5,
      })
    );
    body.position.y = 1.15;
    body.castShadow = true;
    player.add(body);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 16, 16),
      new THREE.MeshStandardMaterial({ color: "#e8b991" })
    );
    head.position.y = 1.95;
    player.add(head);

    const legs = [];
    for (const x of [-0.2, 0.2]) {
      const leg = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.7, 0.28),
        new THREE.MeshStandardMaterial({ color: "#202b49" })
      );
      leg.position.set(x, 0.38, 0);
      player.add(leg);
      legs.push(leg);
    }

    player.position.set(0, 0, 0);
    scene.add(player);

    const lanes = [-2.2, 0, 2.2];
    let currentLane = 1;
    let jumpTime = 0;
    let slideTime = 0;
    let speed = 15;
    let spawnTimer = 0;
    let scoreValue = 0;
    let uiTimer = 0;
    let running = false;
    let gameOver = false;

    const objects = [];
    const clock = new THREE.Clock();

    function moveLeft() {
      currentLane = Math.max(0, currentLane - 1);
    }

    function moveRight() {
      currentLane = Math.min(2, currentLane + 1);
    }

    function jump() {
      if (running && jumpTime <= 0 && slideTime <= 0) {
        jumpTime = 0.75;
      }
    }

    function slide() {
      if (running && slideTime <= 0 && jumpTime <= 0) {
        slideTime = 0.65;
      }
    }

    function spawnObstacle() {
      const lane = Math.floor(Math.random() * 3);
      const type = Math.random() > 0.5 ? "jump" : "slide";
      const group = new THREE.Group();

      if (type === "jump") {
        const block = new THREE.Mesh(
          new THREE.BoxGeometry(1.15, 1.4, 1),
          new THREE.MeshStandardMaterial({ color: "#b84b31" })
        );
        block.position.y = 0.7;
        block.castShadow = true;
        group.add(block);
      } else {
        const barMaterial = new THREE.MeshStandardMaterial({
          color: "#e0a52e",
        });

        for (const x of [-0.48, 0.48]) {
          const post = new THREE.Mesh(
            new THREE.BoxGeometry(0.16, 2, 0.2),
            barMaterial
          );
          post.position.set(x, 1, 0);
          group.add(post);
        }

        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(1.15, 0.2, 0.25),
          barMaterial
        );
        bar.position.y = 1.8;
        group.add(bar);
      }

      group.position.set(lanes[lane], 0, -48);
      scene.add(group);
      objects.push({ group, type, lane, kind: "obstacle", collected: false });
    }

    function spawnCoins() {
      const lane = Math.floor(Math.random() * 3);

      for (let i = 0; i < 4; i++) {
        const coin = new THREE.Mesh(
          new THREE.TorusGeometry(0.35, 0.11, 8, 18),
          gold
        );
        coin.position.set(lanes[lane], 1.15, -48 - i * 1.8);
        scene.add(coin);
        objects.push({
          group: coin,
          kind: "coin",
          collected: false,
        });
      }
    }

    function clearObjects() {
      objects.forEach((item) => scene.remove(item.group));
      objects.length = 0;
    }

    function startGame() {
      clearObjects();
      currentLane = 1;
      player.position.set(0, 0, 0);
      player.scale.y = 1;
      jumpTime = 0;
      slideTime = 0;
      speed = 15;
      spawnTimer = 0;
      scoreValue = 0;
      uiTimer = 0;
      gameOver = false;
      running = true;
      setScore(0);
      setStatus("playing");
      clock.getDelta();
    }

    startGameRef.current = startGame;

    function handleKey(event) {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        moveLeft();
      }
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        moveRight();
      }
      if (event.key === "ArrowUp" || event.key.toLowerCase() === "w" || event.key === " ") {
        event.preventDefault();
        jump();
      }
      if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
        slide();
      }
    }

    window.addEventListener("keydown", handleKey);

    let touchStartX = 0;
    let touchStartY = 0;

    function touchStart(event) {
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
    }

    function touchEnd(event) {
      const dx = event.changedTouches[0].clientX - touchStartX;
      const dy = event.changedTouches[0].clientY - touchStartY;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 30) moveRight();
        if (dx < -30) moveLeft();
      } else {
        if (dy < -30) jump();
        if (dy > 30) slide();
      }
    }

    renderer.domElement.addEventListener("touchstart", touchStart);
    renderer.domElement.addEventListener("touchend", touchEnd);

    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);

      // Move the jungle and road markings
      if (running) {
        speed = Math.min(27, speed + delta * 0.12);
        scoreValue += delta * 4;
        spawnTimer += delta;

        player.position.x +=
          (lanes[currentLane] - player.position.x) * Math.min(1, delta * 12);

        if (jumpTime > 0) {
          jumpTime -= delta;
          player.position.y = Math.sin((1 - jumpTime / 0.75) * Math.PI) * 2.3;
        } else {
          player.position.y = 0;
        }

        if (slideTime > 0) {
          slideTime -= delta;
          player.scale.y = 0.5;
        } else {
          player.scale.y = 1;
        }

        legs.forEach((leg, index) => {
          leg.rotation.x = Math.sin(performance.now() * 0.012 + index * Math.PI) * 0.5;
        });

        laneMarkers.forEach((marker) => {
          marker.position.z += speed * delta;
          if (marker.position.z > 10) marker.position.z -= 105;
        });

        trees.forEach((tree) => {
          tree.position.z += speed * delta;
          if (tree.position.z > 12) tree.position.z -= 160;
        });

        if (spawnTimer > 1.1) {
          spawnTimer = 0;
          if (Math.random() > 0.35) spawnObstacle();
          else spawnCoins();
        }

        for (let i = objects.length - 1; i >= 0; i--) {
          const item = objects[i];
          item.group.position.z += speed * delta;

          if (item.kind === "coin") {
            item.group.rotation.y += delta * 4;

            const close =
              Math.abs(item.group.position.z) < 1.0 &&
              Math.abs(item.group.position.x - player.position.x) < 0.9;

            if (close && !item.collected) {
              item.collected = true;
              scoreValue += 10;
              scene.remove(item.group);
              objects.splice(i, 1);
              continue;
            }
          } else {
            const close =
              Math.abs(item.group.position.z) < 0.8 &&
              Math.abs(item.group.position.x - player.position.x) < 0.85;

            if (close) {
              const avoided =
                item.type === "jump"
                  ? jumpTime > 0.12
                  : slideTime > 0.12;

              if (!avoided) {
                running = false;
                gameOver = true;
                setStatus("over");
              }
            }
          }

          if (item.group.position.z > 12) {
            scene.remove(item.group);
            objects.splice(i, 1);
          }
        }

        uiTimer += delta;
        if (uiTimer > 0.15) {
          uiTimer = 0;
          setScore(Math.floor(scoreValue));
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    function resize() {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("touchstart", touchStart);
      renderer.domElement.removeEventListener("touchend", touchEnd);
      clearObjects();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const start = () => startGameRef.current?.();

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 10000,
      background: "#07150f",
      color: "white",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "#101d17",
        borderBottom: "1px solid #294334",
      }}>
        <div>
          <strong style={{ color: "#a3f66b", letterSpacing: 2 }}>
            ORQADE ORIGINAL
          </strong>
          <div style={{ fontSize: 20, fontWeight: 900, marginTop: 4 }}>
            JUNGLE RUNNER
          </div>
        </div>
        <button onClick={onClose} style={buttonStyle}>
          ✕ CLOSE
        </button>
      </header>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 12,
        background: "#14251b",
      }}>
        <div>SCORE <strong style={{ color: "#a3f66b" }}>{score}</strong></div>
        <div>MODE <strong>{status === "playing" ? "RUNNING" : status === "over" ? "GAME OVER" : "READY"}</strong></div>
        <div>CONTROL <strong>SWIPE / WASD</strong></div>
      </div>

      <div ref={mountRef} style={{
        flex: 1,
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        touchAction: "none",
      }}>
        {status !== "playing" && (
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 20,
            background: "rgba(3,12,8,0.68)",
          }}>
            <div style={{ fontSize: 42, fontWeight: 900, color: "#a3f66b" }}>
              {status === "over" ? "RUN OVER!" : "THE JUNGLE AWAITS"}
            </div>
            <p style={{ maxWidth: 400, lineHeight: 1.6 }}>
              Dodge barriers, slide under gates and collect golden coins.
              Use arrow keys or swipe on mobile.
            </p>
            <button onClick={start} style={{
              ...buttonStyle,
              background: "#a3f66b",
              color: "#102014",
              padding: "15px 30px",
              fontSize: 16,
              fontWeight: 900,
            }}>
              {status === "over" ? "RUN AGAIN ↻" : "START RUN ▶"}
            </button>
          </div>
        )}
      </div>

      <footer style={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        padding: 12,
        background: "#101d17",
        flexWrap: "wrap",
      }}>
        <button onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }))} style={buttonStyle}>← LEFT</button>
        <button onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }))} style={buttonStyle}>↑ JUMP</button>
        <button onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }))} style={buttonStyle}>↓ SLIDE</button>
        <button onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }))} style={buttonStyle}>RIGHT →</button>
      </footer>
    </div>
  );
}

const buttonStyle = {
  background: "#263c2e",
  color: "white",
  border: "1px solid #52745c",
  borderRadius: 8,
  padding: "10px 14px",
  cursor: "pointer",
  fontWeight: 700,
};
