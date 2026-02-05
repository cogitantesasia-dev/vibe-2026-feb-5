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
- **Solid Background Color**: (Previously implemented, but now replaced) The application previously featured a solid light grey background color.
- **Football Field Background**: (Previously implemented, but now replaced) The application previously featured a football field image as its background.
- **Chalet Green Background Color**: The application now features a solid Chalet Green background color (#5A6E41).
- **Two-Column Layout (1:4 Ratio)**: The screen is split into two columns. The left column (1 unit) displays a league selection menu, and the right column (4 units) contains the main predictor application.
- **League Selection Menu**: A menu in the left column allows users to choose between English, Spanish, and Italian football leagues.
- **League Dates Display**: Each league button in the menu now displays the season dates.
- **Fixed Predict Winner Section**: The "Predict Winner" button and prediction display are now fixed to the top of the right column.
- **Flag-Themed League Buttons**: The league selection buttons are styled with colors representing the respective country flags.
- **Rainbow Predict Button**: The "Predict Winner" button now has a continuously animating rainbow gradient background.
- **Rainbow Arsenal Prediction**: When "Arsenal" is predicted, the winner's text will display a continuously animating rainbow gradient.
- **Enlarged Winner Font**: The font size of the predicted winning team has been increased by 3 times.
- **Theme Toggle Icon**: The theme toggle button has been replaced with an SVG icon that changes between a sun and moon depending on the current theme.

### Features
- Predicts a random Premier League winner from a predefined list of teams.
- A "Predict Winner" button to generate a new prediction.
- **Confetti Animation**: Triggers a confetti animation when "Liverpool" is predicted as the winner.
- **Dynamic League Prediction**: The predictor now fetches winners from the selected league (English, Spanish, or Italian), updated dynamically on menu button clicks.
- **User Feedback Form**: A modal form allows users to submit feedback (Name, Email, Message) via Formspree, triggered by a button at the bottom of the right column.
- **'Poop Rain' Animation**: (Previously implemented, but now replaced) Triggers a humorous "poop rain" animation when "Manchester United" is predicted as the winner.
- **'Dogs Running' Animation**: Triggers an animation of dogs running across the screen when "Manchester United" is predicted as the winner.

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

## Current Task: Change 'Poop Rain' to 'Dogs Running' Animation for Manchester United

### Plan
1.  **Modify `main.js`**: (Completed) Removed the "poop rain" logic and implemented JavaScript to create and animate dog emojis across the screen.
2.  **Modify `style.css`**: (Completed) Added CSS for the `.running-dog` class and `@keyframes` animation to facilitate the dog animation.

## Current Task: Change Background to Solid Color

### Plan
1.  **Modify `style.css`**: (Completed) Changed the `body` background from the pastel gradient to a solid light grey color (#f0f0f0).

## Current Task: Add Rainbow Effects to Button and Arsenal Prediction

### Plan
1.  **Modify `main.js`**: (Completed) Updated the shadow DOM styles for the "Predict Winner" button to include a rainbow gradient background with animation. Also added a `rainbow-text` class for text, and implemented logic in `predictWinner` to apply this class to the prediction text if "Arsenal" is the winner.

## Current Task: Increase Font Size of Winning Team

### Plan
1.  **Modify `main.js`**: (Completed) Updated the shadow DOM styles for the `#prediction` element to increase its `font-size` by 3 times.

## Current Task: Change Background to Football Field

### Plan
1.  **Manual Image Download**: User needs to manually download a football field image (e.g., `football-field.jpg`) and place it in the `assets/images/` directory.
2.  **Modify `style.css`**: (Completed) Changed the `body` background from the solid color to a football field image, covering the viewport and centered.

## Current Task: Change Background to Chalet Green

### Plan
1.  **Modify `style.css`**: (Completed) Changed the `body` background from the football field image to a solid Chalet Green background color (#5A6E41).

## Current Task: Split Screen and Add League Menu

### Plan
1.  **Modify `index.html`**: (Completed) Introduced a `main-layout` container with `left-column` for the menu and `right-column` for the predictor. Added menu items for English, Spanish, and Italian leagues.
2.  **Modify `style.css`**: (Completed) Implemented CSS Grid for a 1:4 column layout. Styled the `left-column` and the league selection menu. Adjusted positioning of the theme toggle button.

## Current Task: Display League Dates and Dynamic Prediction

### Plan
1.  **Modify `index.html`**: (Completed) Added example season dates below each league name in the menu buttons.
2.  **Modify `main.js`**: (Completed)
    *   Renamed `EPLPredictor` to `LeaguePredictor`.
    *   Refactored `LeaguePredictor` to store team lists for English, Spanish, and Italian leagues.
    *   Added `setLeague` method to `LeaguePredictor` to update the active league and clear predictions.
    *   Implemented event listeners for league selection buttons to dynamically update the `LeaguePredictor`'s active league.
    *   Updated conditional animations (confetti, dogs running) to check for `this.activeLeague === 'english'`.

## Current Task: Fix Predict Winner Button to Top and Style League Buttons with Flag Colors

### Plan
1.  **Modify `main.js`**: (Completed) Modified the `LeaguePredictor`'s shadow DOM styles to use `position: sticky` for the prediction area, ensuring it stays at the top.
2.  **Modify `style.css`**: (Completed) Added specific background and border colors for each league button (`english`, `spanish`, `italian`) to reflect their country's flag colors. Adjusted hover and active states accordingly.

## Current Task: Add User Feedback Form

### Plan
1.  **Modify `index.html`**: (Completed) Added a "Give Feedback" button to the bottom of the right column and a modal HTML structure for the feedback form.
2.  **Modify `style.css`**: (Completed) Styled the feedback button and the modal (backdrop, content, form elements, close button).
3.  **Modify `main.js`**: (Completed) Implemented JavaScript logic to open/close the modal, handle form submission using `fetch` to Formspree, and display status messages.