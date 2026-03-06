# Weather Web App

A simple weather app built with React + Vite + Tailwind. It fetches current conditions and the next 24 hours of forecast using the Visual Crossing Timeline API.

## Features

- Current weather: temperature, wind speed, rain chance, condition
- Next 24 hours forecast (horizontal scroll)
- Search by city / location string
- Uses browser geolocation on first load (if permitted)
- Loading spinner while fetching

## Tech Stack

- React (Vite)
- Tailwind CSS
- Axios
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- A Visual Crossing Weather API key

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`).

## Configuration (API Key)

This project calls the Visual Crossing Timeline endpoint:

`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}?unitGroup=metric&key={API_KEY}&contentType=json`

In the current code, the API key is defined in the app source. For production (and to avoid committing keys), prefer an environment variable.

### Recommended: move key to `.env`

1) Create a `.env` file in the project root (you can copy from `.env.example`):

```bash
VITE_VISUAL_CROSSING_API_KEY=your_key_here
```

2) The app reads it via `import.meta.env.VITE_VISUAL_CROSSING_API_KEY`.

Note: Vite only exposes variables prefixed with `VITE_` to the browser.

## Usage Notes

- On first load the app requests geolocation. If you deny it, you can still search by typing a location (e.g., `London`, `New York`, `19.0760,72.8777`).
- If a location can’t be resolved by the API, the app shows an alert.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project Structure

```
src/
	components/
		HourlyForecast.jsx
		Loader.jsx
		SearchBar.jsx
		WeatherCard.jsx
	App.jsx
	main.jsx
```

## Deployment

This is a standard Vite app. You can deploy the `dist/` output to any static host.

```bash
npm run build
```
