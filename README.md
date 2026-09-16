# Interactive GSAP Custom Cursor

A lightweight interactive custom cursor built with vanilla HTML, CSS, and GSAP. The cursor follows pointer movement with an elastic easing effect and transforms dynamically into an enlarged reaction badge when hovering over an interactive media card.

---

## Features

* **Smooth Follow Physics:** Uses GSAP's `back.out` easing to give the cursor a reactive, trailing snap effect.
* **Interactive Hover States:** Automatically scales up 2.5x and renders an emoji badge (`❤️`) on target hover.
* **Vanilla Stack:** Zero framework dependencies or build steps required.

---

## Tech Stack

* **HTML5:** Semantic document layout.
* **CSS3:** Fullscreen flex centering, custom cursor sizing, and overlay positioning.
* **JavaScript:** DOM event listeners for pointer tracking.
* **GSAP 3:** Greensock animation library for tweening position and scale.

---

## Project Structure

```text
├── index.html   # Main markup and CDN script imports
├── index.css    # Layout, pointer-event boundaries, and styling
└── index.js     # Mouse tracking and GSAP animation logic
