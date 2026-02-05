// Theme toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const iconPlaceholder = document.getElementById('icon-placeholder');
  const body = document.body;

  const sunIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `;

  const moonIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;

  const updateIcon = (theme) => {
    if (theme === 'day') {
      iconPlaceholder.innerHTML = moonIcon; // Show moon for day mode (click to switch to night)
    } else {
      iconPlaceholder.innerHTML = sunIcon; // Show sun for night mode (click to switch to day)
    }
  };

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
  } else {
    // Default to day mode if no preference is saved
    body.setAttribute('data-theme', 'day');
    updateIcon('day');
  }

  themeToggleButton.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-theme');
    let newTheme = currentTheme === 'day' ? 'night' : 'day';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });
});

class EPLPredictor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
          font-family: sans-serif;
          margin-top: 50px;
          color: var(--text-color); /* Use CSS variable for text color */
        }
        button {
          padding: 10px 20px;
          font-size: 1.2em;
          cursor: pointer;
          border: 1px solid var(--button-background); /* Use CSS variable */
          border-radius: 5px;
          background-color: var(--button-background); /* Use CSS variable */
          color: var(--button-text); /* Use CSS variable */
          transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }
        button:hover {
          opacity: 0.9;
        }
        #prediction {
          margin-top: 20px;
          font-size: 1.8em;
          font-weight: bold;
        }
      </style>
      <div>
        <button id="predict-btn">Predict Winner</button>
        <div id="prediction"></div>
      </div>
    `;
    this.teams = [
      "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton",
      "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool",
      "Luton Town", "Manchester City", "Manchester United", "Newcastle United",
      "Nottingham Forest", "Sheffield United", "Tottenham Hotspur", "West Ham United",
      "Wolverhampton Wanderers", "Burnley"
    ];
  }

  connectedCallback() {
    this.shadowRoot.getElementById('predict-btn').addEventListener('click', () => this.predictWinner());
  }

  predictWinner() {
    const predictionContainer = this.shadowRoot.getElementById('prediction');
    const randomIndex = Math.floor(Math.random() * this.teams.length);
    const predictedTeam = this.teams[randomIndex];
    predictionContainer.textContent = predictedTeam;

    // Trigger confetti if Liverpool is predicted
    if (predictedTeam === 'Liverpool') {
      if (window.confetti) {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else if (predictedTeam === 'Manchester United') {
      // Trigger "poop rain" if Manchester United is predicted
      if (window.confetti) {
        window.confetti({
          particleCount: 70, // Slightly fewer particles
          spread: 80, // Wider spread
          origin: { y: 0 }, // Start from the top
          gravity: 0.8, // Fall faster
          ticks: 200, // Longer animation duration
          shapes: ['text'],
          shapeOptions: {
            text: ['💩'] // Poop emoji
          },
          scalar: 2 // Make emoji bigger
        });
      }
    }
  }
}

customElements.define('epl-predictor', EPLPredictor);

