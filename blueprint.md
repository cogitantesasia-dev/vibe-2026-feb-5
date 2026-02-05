# Premier League Winner Predictor

## Overview

A simple web application that predicts a random winner for the English Premier League.

## Project Outline

### Style and Design
- A central card with a button to trigger the prediction.
- The predicted winner is displayed below the button.
- A clean and simple design.
- **Day and Night Mode**: The application will support both day and night themes, allowing users to toggle between them.

### Features
- Predicts a random Premier League winner from a predefined list of teams.
- A "Predict Winner" button to generate a new prediction.
- **Theme Toggle**: A button to switch between day and night modes, with the preference saved locally.

## Current Task: Add Day and Night Mode

### Plan
1.  **Create `style.css`**: (Completed) Created `style.css` with CSS variables for day and night themes and basic styling.
2.  **Modify `index.html`:** (Completed)
    *   Added a theme toggle button.
    *   Ensured the `body` tag can accept a `data-theme` attribute.
    *   Replaced `<toto-generator>` with `<epl-predictor>`.
3.  **Modify `main.js`:** (Completed)
    *   Added JavaScript logic to handle the click event on the toggle button.
    *   Toggled the `data-theme` attribute on the `body` element.
    *   Stored the user's theme preference in `localStorage`.
    *   Applied the stored theme on page load.
    *   Renamed `TotoGenerator` to `EPLPredictor` and updated the custom element definition and logic to predict EPL winners.