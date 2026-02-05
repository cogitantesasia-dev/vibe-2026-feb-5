// Theme toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  } else {
    // Default to day mode if no preference is saved
    body.setAttribute('data-theme', 'day');
  }

  themeToggleButton.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-theme');
    let newTheme = currentTheme === 'day' ? 'night' : 'day';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
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
  }
}

customElements.define('epl-predictor', EPLPredictor);

