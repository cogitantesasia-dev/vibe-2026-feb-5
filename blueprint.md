# Premier League Winner Predictor

## Overview

A simple web application that predicts a random winner for the English Premier League.

## Project Outline

### Style and Design
- A central card with a button to trigger the prediction.
- The predicted winner is displayed below the button.
- A clean and simple design.
- **Day and Night Mode**: The application will support both day and night themes, allowing users to toggle between them.
- **Singapore Flag Background**: (Previously implemented, but now replaced) A Singapore flag image was intended to be used as the background.
- **Pastel Gradient Background**: The application now features a linear gradient background from a light pastel pink (#fce4ec) to a light pastel blue (#e3f2fd), replacing the previous red gradient.
- **Theme Toggle Icon**: The theme toggle button has been replaced with an SVG icon that changes between a sun and moon depending on the current theme.

### Features
- Predicts a random Premier League winner from a predefined list of teams.
- A "Predict Winner" button to generate a new prediction.
- **Confetti Animation**: Triggers a confetti animation when "Liverpool" is predicted as the winner.
- **'Poop Rain' Animation**: Triggers a humorous "poop rain" animation when "Manchester United" is predicted as the winner.

## Current Task: Change Toggle Button to Icon

### Plan
1.  **Modify `index.html`**: (Completed) Replaced the text content of the toggle button with a `<span>` for the SVG icon and added an ID to the button.
2.  **Modify `main.js`**: (Completed) Added SVG icon strings for sun and moon, and implemented logic to dynamically insert the correct icon based on the current theme.
3.  **Modify `style.css`**: (Completed) Adjusted the styling of the `.theme-toggle-button` to properly display the SVG icon (removed padding, added flex properties, set width/height).

## Current Task: Change Background to Red Gradient

### Plan
1.  **Modify `style.css`**: (Completed) Changed the `body` background from the Singapore flag image and theme-based color to a linear gradient from red to dark red.

## Current Task: Change Background to Pastel Gradient

### Plan
1.  **Modify `style.css`**: (Completed) Changed the `body` background from the red gradient to a linear gradient from light pastel pink (#fce4ec) to light pastel blue (#e3f2fd).

## Current Task: Add Confetti Animation for Liverpool

### Plan
1.  **Modify `index.html`**: (Completed) Added the `canvas-confetti` CDN script.
2.  **Modify `main.js`**: (Completed) Implemented logic to trigger a confetti animation when "Liverpool" is predicted.

## Current Task: Add 'Poop Rain' Animation for Manchester United

### Plan
1.  **Modify `main.js`**: (Completed) Implemented logic to trigger a "poop rain" animation when "Manchester United" is predicted.