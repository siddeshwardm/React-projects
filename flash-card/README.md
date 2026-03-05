# Flash Card (React + Vite)

A simple flashcard web app for practicing JavaScript fundamentals. It shows one question at a time, lets you flip to reveal the answer, and tracks your progress as you move through the deck.

## Overview

- **Deck size:** 20 JavaScript Q&A cards
- **Interaction:** Show/Hide Answer (flip animation)
- **Navigation:** Previous/Next buttons
- **Progress:** Progress bar with percent and `current of total`

## Tech Stack

- React
- Vite
- Plain CSS

## Getting Started

### Prerequisites

- Node.js 18+ recommended

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL printed by Vite (commonly `http://127.0.0.1:5173/`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project Structure

```text
src/
	components/
		Flashcard.jsx
		Navigation.jsx
		ProgressBar.jsx
	data/
		flashcards.jsx
	App.jsx
	App.css
	main.jsx
```

## Customizing the Deck

Edit `src/data/flashcards.jsx` to add/remove flashcards. Each entry is:

```js
{
	question: "...",
	answer: "..."
}
```

## Notes

- The flashcard keeps a consistent size before/after flipping.
- The flip state resets when moving to a different card.

