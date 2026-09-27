<div align="center">

# 🖱️ Interactive GSAP Custom Cursor

A lightweight interactive custom cursor built with vanilla HTML, CSS, and GSAP. The cursor follows pointer movement with an elastic easing effect and transforms dynamically into an enlarged reaction badge when hovering over an interactive media card.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

This is a small, focused experiment in custom cursor design — replacing the default pointer with a GSAP-animated dot that trails the mouse with a springy, elastic snap, then morphs into a heart-emoji reaction badge on hover over interactive media.

## ✨ Features

- 🌀 **Smooth Follow Physics** — uses GSAP's `back.out` easing to give the cursor a reactive, trailing snap effect
- ❤️ **Interactive Hover States** — automatically scales up 2.5x and renders an emoji badge (`❤️`) on target hover
- ⚡ **Vanilla Stack** — zero framework dependencies or build steps required

## 🚀 Getting Started

### Prerequisites

Just a web browser. No installation or build step required.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/gsap-custom-cursor.git

# Navigate into the project directory
cd gsap-custom-cursor

# Open the page directly
open index.html        # macOS
start index.html         # Windows
xdg-open index.html       # Linux
```

Or serve it with any static file server:

```bash
npx serve .
```

Then visit the local address it prints (e.g. `http://localhost:3000`).

## 📁 Project Structure

```
├── index.html   # Main markup and CDN script imports
├── index.css    # Layout, pointer-event boundaries, and styling
└── index.js     # Mouse tracking and GSAP animation logic
```

## 🧠 How It Works

1. A `mousemove` event listener tracks the pointer's position across the viewport.
2. GSAP tweens the custom cursor element's `x`/`y` position toward the pointer using `back.out` easing, producing a springy, trailing follow effect rather than a rigid 1:1 movement.
3. A `mouseenter`/`mouseleave` listener on the interactive media card triggers a second GSAP tween that scales the cursor up 2.5x and fades in the `❤️` emoji badge.
4. Leaving the hover target reverses the animation, scaling the cursor back down to its default state.

## 🛠️ Tech Stack

| Layer      | Technology                                            |
|------------|-----------------------------------------------------------|
| Structure  | HTML5 — semantic document layout                            |
| Styling    | CSS3 — fullscreen flex centering, custom cursor sizing, and overlay positioning |
| Logic      | JavaScript — DOM event listeners for pointer tracking        |
| Animation  | [GSAP 3](https://gsap.com/) — Greensock animation library for tweening position and scale |

## 🗺️ Possible Improvements

- [ ] Add support for multiple hover states/badges depending on target type
- [ ] Add touch-device fallback (hide custom cursor, restore native pointer)
- [ ] Debounce/throttle pointer tracking for lower-end devices
- [ ] Add a trailing particle or blur effect behind the cursor
- [ ] Package as a reusable, drop-in script/module

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/gsap-custom-cursor/issues) or open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 🖱️ and GSAP
</div>
