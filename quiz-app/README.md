# Quiz App (React + Vite)

A simple, polished quiz application built with React and Vite. It starts with an intro screen, then walks through multiple-choice questions, highlights correct/wrong selections, and shows a final results summary.

## Overview

- **Questions:** 15 web-development themed multiple-choice questions
- **Flow:** Start → Answer questions → Results summary
- **Feedback:** Correct/wrong option styling after selection
- **UI:** Dark gradient background + glassy card layout

## Tech Stack

- React
- Vite
- CSS (custom theme)

## Project Structure

```
quiz-app/
	public/
	src/
		components/
			QuestionCard.jsx
			ResultScreen.jsx
			StartScreen.jsx
			Timer.jsx
		data/
			questions.js
		App.css
		App.jsx
		index.css
		main.jsx
```

## Getting Started

### Requirements

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run (Dev)

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Customization

### Edit / Add Questions

Update the question list in `src/data/questions.js`.

Each item uses this shape:

```js
{
	id: 1,
	question: "...",
	options: ["...", "...", "...", "..."],
	answer: "..."
}
```

### Try Snowfall Effect

```bash
npm install react-snowfall
```

### Change Theme Colors

The theme uses CSS variables defined in `src/index.css` (background + palette) and component styles in `src/App.css` (card/buttons).

## Notes

- `src/components/Timer.jsx` exists but is not currently wired into the quiz flow.
