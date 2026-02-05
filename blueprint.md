# Premier League Winner Predictor

## Overview

A simple web application that predicts a random winner for the English Premier League.

## Project Outline

### Style and Design
- A central card with a button to trigger the prediction.
- The predicted winner is displayed below the button.
- A clean and simple design.
- **Day and Night Mode**: The application will support both day and night themes, allowing users to toggle between them.
- **Singapore Flag Background**: A Singapore flag image will be used as the background for the application, scaled to cover the entire viewport.
- **Theme Toggle Icon**: The theme toggle button has been replaced with an SVG icon that changes between a sun and moon depending on the current theme.

### Features
- Predicts a random Premier League winner from a predefined list of teams.
- A "Predict Winner" button to generate a new prediction.
- **Theme Toggle**: An icon to switch between day and night modes, with the preference saved locally.

## Current Task: Change Toggle Button to Icon

### Plan
1.  **Modify `index.html`**: (Completed) Replaced the text content of the toggle button with a `<span>` for the SVG icon and added an ID to the button.
2.  **Modify `main.js`**: (Completed) Added SVG icon strings for sun and moon, and implemented logic to dynamically insert the correct icon based on the current theme.
3.  **Modify `style.css`**: (Completed) Adjusted the styling of the `.theme-toggle-button` to properly display the SVG icon (removed padding, added flex properties, set width/height).