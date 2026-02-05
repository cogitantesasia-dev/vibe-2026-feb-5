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
          border: none; /* Remove border for gradient to show fully */
          border-radius: 5px;
          background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3); /* Rainbow gradient */
          color: white; /* Ensure text is visible on rainbow background */
          transition: opacity 0.3s;
          background-size: 200% auto; /* For animation effect */
          animation: rainbow-button-gradient 5s linear infinite; /* Animation */
        }
        button:hover {
          opacity: 0.8;
        }
        /* Keyframes for rainbow button gradient animation */
        @keyframes rainbow-button-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        #prediction {
          margin-top: 20px;
          font-size: 5.4em; /* 3 times bigger than 1.8em */
          font-weight: bold;
        }
        .rainbow-text {
          background-image: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rainbow-text-gradient 5s linear infinite; /* Animation */
          background-size: 200% auto; /* For animation effect */
        }
        /* Keyframes for rainbow text gradient animation */
        @keyframes rainbow-text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
    // Clear previous rainbow effect
    predictionContainer.classList.remove('rainbow-text');

    const randomIndex = Math.floor(Math.random() * this.teams.length);
    const predictedTeam = this.teams[randomIndex];
    predictionContainer.textContent = predictedTeam;

    // Apply rainbow effect if Arsenal is predicted
    if (predictedTeam === 'Arsenal') {
      predictionContainer.classList.add('rainbow-text');
    }

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
      // Trigger "dogs running across the screen" if Manchester United is predicted
      runDogsAnimation();
    }
  }
}

function runDogsAnimation() {
  const numberOfDogs = 7;
  const dogEmojis = ['🐶', '🐕', '🐩', '🦮', '🐾']; // Different dog emojis for variety

  for (let i = 0; i < numberOfDogs; i++) {
    const dog = document.createElement('span');
    dog.textContent = dogEmojis[Math.floor(Math.random() * dogEmojis.length)];
    dog.classList.add('running-dog');
    
    // Randomize starting position and size
    dog.style.top = `${Math.random() * 80 + 10}vh`; // 10% to 90% of viewport height
    dog.style.fontSize = `${Math.random() * 2 + 1.5}em`; // 1.5em to 3.5em
    dog.style.animationDelay = `${Math.random() * 3}s`; // Stagger animation start
    dog.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5s to 10s animation duration

    document.body.appendChild(dog);

    // Remove the dog after its animation finishes
    dog.addEventListener('animationend', () => {
      dog.remove();
    });
  }
}

customElements.define('epl-predictor', EPLPredictor);

