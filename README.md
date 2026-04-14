# 🔦 Ray Casting

A 2D ray casting simulation built with [p5.js](https://p5js.org/). The project visualizes how rays emanate from a light source (particle) and interact with boundary walls — a foundational concept behind rendering engines, shadow systems, and games like Wolfenstein 3D.

---

## 🖥️ Demo

> Open `index.html` in a browser after setting up the project (see [Getting Started](#-getting-started)).

---

## ✨ Features

- Real-time 2D ray casting from a moving particle
- Dynamic intersection detection between rays and boundary walls
- Smooth rendering using the p5.js canvas API
- Modular code structure (`ray.js`, `particle.js`, `module.js`, `sketch.js`)

---

## 📁 Project Structure

```
Ray-casting-/
├── index.html       # Entry point — loads p5.js and all scripts
├── sketch.js        # Main p5.js sketch (setup & draw loop)
├── particle.js      # Particle (light source) logic
├── ray.js           # Ray definition and intersection math
├── module.js        # Boundary walls / scene objects
├── style.css        # Canvas styling
└── jsconfig.json    # JS project configuration
```

---

## 🚀 Getting Started

### Option 1 — Using VS Code + p5.vscode (Recommended)

1. Install the **p5.vscode** extension in Visual Studio Code.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Type and select **"Create p5.js Project"**.
4. Copy the project files into the generated folder.
5. Click **"Go Live"** (Live Server) to run the sketch in your browser.

### Option 2 — Open Directly in Browser

1. Clone or download this repository:
   ```bash
   git clone https://github.com/darshvarshney18-lang/Ray-casting-.git
   ```
2. Open `index.html` directly in any modern web browser.

> **Note:** Some browsers may block local ES module loading. Use a local server (e.g., VS Code Live Server or `npx serve .`) for best results.

---

## 🧠 How It Works

1. **Boundaries** — Line segments are placed on the canvas to act as walls.
2. **Particle** — A light-source object that sits at the mouse cursor position (or center of canvas).
3. **Rays** — The particle casts rays in all directions. Each ray is tested against every boundary using line-segment intersection math.
4. **Rendering** — The shortest intersection point for each ray is drawn, producing the classic "torch light" effect.

---

## 🛠️ Built With

- [p5.js](https://p5js.org/) — Creative coding library for canvas rendering
- Vanilla JavaScript (ES Modules)
- HTML5 / CSS3

---

## 📜 License

This project is open source. Feel free to use, modify, and learn from it.

---

## 🙌 Acknowledgements

Inspired by [The Coding Train](https://thecodingtrain.com/) — Daniel Shiffman's ray casting tutorial series.
