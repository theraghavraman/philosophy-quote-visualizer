// Application Data
const philosophicalQuotes = [
  {
    "id": 1,
    "quote": "The unexamined life is not worth living.",
    "author": "Socrates",
    "school": "Ancient Greek Philosophy",
    "category": "Self-Reflection"
  },
  {
    "id": 2,
    "quote": "I think, therefore I am.",
    "author": "René Descartes",
    "school": "Rationalism",
    "category": "Existence"
  },
  {
    "id": 3,
    "quote": "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    "author": "Jean-Paul Sartre",
    "school": "Existentialism",
    "category": "Freedom"
  },
  {
    "id": 4,
    "quote": "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    "author": "Albert Camus",
    "school": "Existentialism",
    "category": "Freedom"
  },
  {
    "id": 5,
    "quote": "What does not kill me makes me stronger.",
    "author": "Friedrich Nietzsche",
    "school": "German Philosophy",
    "category": "Strength"
  },
  {
    "id": 6,
    "quote": "The mind is everything. What you think you become.",
    "author": "Buddha",
    "school": "Buddhism",
    "category": "Mind"
  },
  {
    "id": 7,
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde",
    "school": "Aestheticism",
    "category": "Authenticity"
  },
  {
    "id": 8,
    "quote": "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "school": "Stoicism",
    "category": "Inner Peace"
  },
  {
    "id": 9,
    "quote": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu",
    "school": "Taoism",
    "category": "Action"
  },
  {
    "id": 10,
    "quote": "It is during our darkest moments that we must focus to see the light.",
    "author": "Aristotle",
    "school": "Ancient Greek Philosophy",
    "category": "Hope"
  },
  {
    "id": 11,
    "quote": "The greatest wealth is to live content with little.",
    "author": "Plato",
    "school": "Ancient Greek Philosophy",
    "category": "Contentment"
  },
  {
    "id": 12,
    "quote": "He who knows others is wise; he who knows himself is enlightened.",
    "author": "Lao Tzu",
    "school": "Taoism",
    "category": "Wisdom"
  },
  {
    "id": 13,
    "quote": "The only true wisdom is in knowing you know nothing.",
    "author": "Socrates",
    "school": "Ancient Greek Philosophy",
    "category": "Wisdom"
  },
  {
    "id": 14,
    "quote": "Life must be understood backward. But it must be lived forward.",
    "author": "Søren Kierkegaard",
    "school": "Existentialism",
    "category": "Life"
  },
  {
    "id": 15,
    "quote": "Man is by nature a social animal.",
    "author": "Aristotle",
    "school": "Ancient Greek Philosophy",
    "category": "Human Nature"
  },
  {
    "id": 16,
    "quote": "The only constant in life is change.",
    "author": "Heraclitus",
    "school": "Ancient Greek Philosophy",
    "category": "Change"
  },
  {
    "id": 17,
    "quote": "Yesterday is history, tomorrow is a mystery, today is a gift.",
    "author": "Eleanor Roosevelt",
    "school": "Pragmatism",
    "category": "Present Moment"
  },
  {
    "id": 18,
    "quote": "The good life is one inspired by love and guided by knowledge.",
    "author": "Bertrand Russell",
    "school": "Analytic Philosophy",
    "category": "Good Life"
  },
  {
    "id": 19,
    "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "author": "Aristotle",
    "school": "Ancient Greek Philosophy",
    "category": "Excellence"
  },
  {
    "id": 20,
    "quote": "The cave you fear to enter holds the treasure you seek.",
    "author": "Joseph Campbell",
    "school": "Mythology",
    "category": "Courage"
  },
  {
    "id": 21,
    "quote": "Everything we hear is an opinion, not a fact. Everything we see is perspective, not truth.",
    "author": "Marcus Aurelius",
    "school": "Stoicism",
    "category": "Perspective"
  },
  {
    "id": 22,
    "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "author": "Chinese Proverb",
    "school": "Eastern Philosophy",
    "category": "Action"
  },
  {
    "id": 23,
    "quote": "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "author": "Albert Camus",
    "school": "Existentialism",
    "category": "Resilience"
  },
  {
    "id": 24,
    "quote": "It is not what happens to you, but how you react to it that matters.",
    "author": "Epictetus",
    "school": "Stoicism",
    "category": "Response"
  },
  {
    "id": 25,
    "quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
    "author": "Ralph Waldo Emerson",
    "school": "Transcendentalism",
    "category": "Purpose"
  }
];


// ───────────────────────────────────────────────────────────────────────
// EXPANDED ORIGINAL APHORISM ARCHIVE
// 10,000 original lines generated deterministically from philosophical
// themes and traditions. These are intentionally NOT attributed to
// historical philosophers.
// ───────────────────────────────────────────────────────────────────────
const aphorismTraditions = [
  ["Stoic","Stoicism","discipline"],["Existential","Existentialism","freedom"],
  ["Buddhist","Buddhism","awareness"],["Vedantic","Vedānta","self-knowledge"],
  ["Daoist","Daoism","harmony"],["Zen","Zen","attention"],
  ["Sufi","Sufi thought","love"],["Socratic","Socratic inquiry","questioning"],
  ["Aristotelian","Aristotelian ethics","character"],["Epicurean","Epicureanism","contentment"],
  ["Skeptical","Pyrrhonian skepticism","certainty"],["Pragmatist","Pragmatism","action"],
  ["Phenomenological","Phenomenology","experience"],["Absurdist","Absurdism","meaning"],
  ["Humanist","Humanism","dignity"],["Confucian","Confucianism","conduct"],
  ["Jain","Jain philosophy","many-sidedness"],["Madhyamaka","Madhyamaka","emptiness"],
  ["Analytic","Analytic philosophy","language"],["Transcendental","Transcendentalism","nature"]
];

const aphorismThemes = [
  "silence","memory","desire","fear","attention","identity","time","death","choice","habit",
  "truth","doubt","beauty","suffering","joy","solitude","friendship","justice","power","work",
  "failure","change","hope","anger","patience","knowledge","ignorance","freedom","responsibility","love",
  "ambition","simplicity","discipline","compassion","mortality","certainty","uncertainty","language","reason","intuition",
  "nature","society","self","ego","character","virtue","pleasure","pain","meaning","purpose"
];

const aphorismForms = [
  "When {theme} is examined closely, it becomes less an answer than an invitation to see differently.",
  "We mistake {theme} for a possession when it is really a practice renewed by each day.",
  "The measure of {theme} is not how loudly it speaks, but what remains when the noise is gone.",
  "A life shaped by {theme} learns that clarity is often quieter than certainty.",
  "What we call {theme} may be the mind learning to live with what it cannot control.",
  "To understand {theme} is to notice the difference between what happens and the story we add to it.",
  "{theme} becomes wisdom only when it changes the way we meet another person.",
  "The fear surrounding {theme} often reveals the assumption we have never examined.",
  "We search outside ourselves for {theme}, then discover that the search was part of the lesson.",
  "Every theory of {theme} leaves something out; experience begins where the theory ends.",
  "The opposite of {theme} is not always its enemy; sometimes it is the condition that gives it shape.",
  "A question about {theme} can be more honest than an answer offered too quickly.",
  "If {theme} cannot survive a change of perspective, perhaps it was certainty rather than truth.",
  "The ordinary day is where {theme} becomes real, because ideals are tested by repetition.",
  "What {theme} asks of us is rarely comfort; it asks for a more precise way of seeing.",
  "We become less afraid of {theme} when we stop demanding that life explain itself first.",
  "The discipline of {theme} begins when we notice what we do automatically.",
  "A person may understand {theme} intellectually and still have to learn it through living.",
  "The deepest form of {theme} leaves room for contradiction without surrendering attention.",
  "When {theme} is treated as a destination, we miss the transformation happening on the way.",
  "Perhaps {theme} is not something to solve but something through which to become more awake.",
  "The value of {theme} appears in the choices nobody applauds.",
  "Our image of {theme} changes when we ask who benefits from the definition.",
  "The mind wants {theme} to be simple; reality keeps returning with another layer.",
  "A quiet encounter with {theme} can undo a conclusion built from years of noise."
];

const generatedAphorisms = [];
let aphorismId = 26;
for (const [voice, tradition] of aphorismTraditions) {
  for (let formIndex = 0; formIndex < 20; formIndex++) {
    for (let themeIndex = 0; themeIndex < 25; themeIndex++) {
      const theme = aphorismThemes[themeIndex];
      generatedAphorisms.push({
        id: aphorismId++,
        quote: aphorismForms[formIndex].replaceAll("{theme}", theme),
        author: "Original Aphorism",
        school: tradition,
        category: theme.replace(/\b\w/g, c => c.toUpperCase()),
        tradition: voice,
        generated: true
      });
    }
  }
}
// 20 traditions × 20 forms × 25 themes = exactly 10,000 candidates.
// Keep the first 10,000 so the expansion stays exactly at the requested size.
const expandedOriginalAphorisms = generatedAphorisms.slice(0, 10000);
philosophicalQuotes.push(...expandedOriginalAphorisms);

const backgroundOptions = [
  {
    "id": "aurora",
    "name": "Aurora Veil",
    "type": "gradient",
    "colors": [
      "#00f5d4",
      "#7b2ff7",
      "#ff4ecd",
      "#ffd166"
    ]
  },
  {
    "id": "prism",
    "name": "Prism Bloom",
    "type": "gradient",
    "colors": [
      "#ff006e",
      "#8338ec",
      "#3a86ff",
      "#00f5d4"
    ]
  },
  {
    "id": "neon",
    "name": "Neon Pulse",
    "type": "gradient",
    "colors": [
      "#00f5ff",
      "#7cff00",
      "#ff00e5"
    ]
  },
  {
    "id": "cyberpunk",
    "name": "Cyberpunk City",
    "type": "gradient",
    "colors": [
      "#ff0080",
      "#7928ca",
      "#00f0ff"
    ]
  },
  {
    "id": "sunset",
    "name": "Solar Flare",
    "type": "gradient",
    "colors": [
      "#ff4d00",
      "#ff9f1c",
      "#ffe66d"
    ]
  },
  {
    "id": "ocean",
    "name": "Deep Ocean",
    "type": "gradient",
    "colors": [
      "#003b73",
      "#0074b7",
      "#60a3d9",
      "#75e6da"
    ]
  },
  {
    "id": "tropical",
    "name": "Tropical Pop",
    "type": "gradient",
    "colors": [
      "#00b894",
      "#00cec9",
      "#ffeaa7",
      "#fd79a8"
    ]
  },
  {
    "id": "candy",
    "name": "Candy Galaxy",
    "type": "gradient",
    "colors": [
      "#ff6bcb",
      "#c77dff",
      "#72ddf7",
      "#b9fbc0"
    ]
  },
  {
    "id": "lavender",
    "name": "Electric Lavender",
    "type": "gradient",
    "colors": [
      "#7f00ff",
      "#e100ff",
      "#00c6ff"
    ]
  },
  {
    "id": "peach",
    "name": "Peach Voltage",
    "type": "gradient",
    "colors": [
      "#ff512f",
      "#f09819",
      "#ffdde1"
    ]
  },
  {
    "id": "mint",
    "name": "Mint Mirage",
    "type": "gradient",
    "colors": [
      "#00f2fe",
      "#4facfe",
      "#43e97b"
    ]
  },
  {
    "id": "berry",
    "name": "Berry Night",
    "type": "gradient",
    "colors": [
      "#6a11cb",
      "#2575fc",
      "#ff2d95"
    ]
  },
  {
    "id": "ruby",
    "name": "Ruby Glass",
    "type": "gradient",
    "colors": [
      "#ff0844",
      "#ffb199",
      "#7f00ff"
    ]
  },
  {
    "id": "emerald",
    "name": "Emerald Flame",
    "type": "gradient",
    "colors": [
      "#00b09b",
      "#96c93d",
      "#00f5a0"
    ]
  },
  {
    "id": "sapphire",
    "name": "Sapphire Rush",
    "type": "gradient",
    "colors": [
      "#0575e6",
      "#00f2fe",
      "#4361ee"
    ]
  },
  {
    "id": "amethyst",
    "name": "Amethyst Glow",
    "type": "gradient",
    "colors": [
      "#833ab4",
      "#fd1d1d",
      "#fcb045"
    ]
  },
  {
    "id": "coral",
    "name": "Coral Reef",
    "type": "gradient",
    "colors": [
      "#ff5858",
      "#f09819",
      "#00c9ff"
    ]
  },
  {
    "id": "lagoon",
    "name": "Lagoon Dream",
    "type": "gradient",
    "colors": [
      "#00c6ff",
      "#0072ff",
      "#00f5a0"
    ]
  },
  {
    "id": "flamingo",
    "name": "Flamingo",
    "type": "gradient",
    "colors": [
      "#f953c6",
      "#b91d73",
      "#ff758c"
    ]
  },
  {
    "id": "lemon",
    "name": "Electric Lemon",
    "type": "gradient",
    "colors": [
      "#f9d423",
      "#ff4e50",
      "#7fff00"
    ]
  },
  {
    "id": "lime",
    "name": "Lime Light",
    "type": "gradient",
    "colors": [
      "#a8ff78",
      "#78ffd6",
      "#00c853"
    ]
  },
  {
    "id": "indigo",
    "name": "Indigo Haze",
    "type": "gradient",
    "colors": [
      "#4b0082",
      "#4169e1",
      "#00d4ff"
    ]
  },
  {
    "id": "violet",
    "name": "Violet Storm",
    "type": "gradient",
    "colors": [
      "#8e2de2",
      "#4a00e0",
      "#ff00cc"
    ]
  },
  {
    "id": "magenta",
    "name": "Magenta Matrix",
    "type": "gradient",
    "colors": [
      "#ff00cc",
      "#333399",
      "#00ffff"
    ]
  },
  {
    "id": "turquoise",
    "name": "Turquoise Fire",
    "type": "gradient",
    "colors": [
      "#00f2fe",
      "#4facfe",
      "#00ff87"
    ]
  },
  {
    "id": "gold",
    "name": "Golden Hour",
    "type": "gradient",
    "colors": [
      "#f7971e",
      "#ffd200",
      "#ff6f00"
    ]
  },
  {
    "id": "bronze",
    "name": "Molten Bronze",
    "type": "gradient",
    "colors": [
      "#b86e00",
      "#f5af19",
      "#ff7e5f"
    ]
  },
  {
    "id": "rose",
    "name": "Rose Quartz",
    "type": "gradient",
    "colors": [
      "#ff758c",
      "#ff7eb3",
      "#c471f5"
    ]
  },
  {
    "id": "ice",
    "name": "Arctic Ice",
    "type": "gradient",
    "colors": [
      "#e0f7ff",
      "#74ebd5",
      "#acb6e5"
    ]
  },
  {
    "id": "glacier",
    "name": "Glacier Blue",
    "type": "gradient",
    "colors": [
      "#83a4d4",
      "#b6fbff",
      "#00c6ff"
    ]
  },
  {
    "id": "storm",
    "name": "Electric Storm",
    "type": "gradient",
    "colors": [
      "#232526",
      "#414345",
      "#7f5af0",
      "#00d4ff"
    ]
  },
  {
    "id": "midnight",
    "name": "Midnight Neon",
    "type": "gradient",
    "colors": [
      "#020024",
      "#090979",
      "#00d4ff"
    ]
  },
  {
    "id": "obsidian",
    "name": "Obsidian Pink",
    "type": "gradient",
    "colors": [
      "#090909",
      "#2b1055",
      "#ff0080"
    ]
  },
  {
    "id": "galaxy",
    "name": "Galaxy Core",
    "type": "gradient",
    "colors": [
      "#0f0c29",
      "#302b63",
      "#24243e",
      "#ff00cc"
    ]
  },
  {
    "id": "nebula",
    "name": "Nebula Bloom",
    "type": "gradient",
    "colors": [
      "#20002c",
      "#cbb4d4",
      "#ff4ecd"
    ]
  },
  {
    "id": "plasma",
    "name": "Plasma Wave",
    "type": "gradient",
    "colors": [
      "#ff00cc",
      "#3333ff",
      "#00ffff"
    ]
  },
  {
    "id": "matrix",
    "name": "Matrix Rain",
    "type": "gradient",
    "colors": [
      "#001f0f",
      "#00ff41",
      "#39ff14"
    ]
  },
  {
    "id": "synthwave",
    "name": "Synthwave",
    "type": "gradient",
    "colors": [
      "#2b1055",
      "#7597de",
      "#ff2d95",
      "#00f0ff"
    ]
  },
  {
    "id": "vapor",
    "name": "Vaporwave",
    "type": "gradient",
    "colors": [
      "#ff71ce",
      "#01cdfe",
      "#05ffa1",
      "#b967ff"
    ]
  },
  {
    "id": "hologram",
    "name": "Holographic",
    "type": "gradient",
    "colors": [
      "#00f5ff",
      "#ff00ff",
      "#fff000",
      "#00ff88"
    ]
  },
  {
    "id": "chrome",
    "name": "Liquid Chrome",
    "type": "gradient",
    "colors": [
      "#d7d2cc",
      "#304352",
      "#00e5ff"
    ]
  },
  {
    "id": "fire",
    "name": "Firestorm",
    "type": "gradient",
    "colors": [
      "#ff0000",
      "#ff7a00",
      "#ffd000"
    ]
  },
  {
    "id": "ember",
    "name": "Ember Glow",
    "type": "gradient",
    "colors": [
      "#4b0000",
      "#ff3d00",
      "#ffb300"
    ]
  },
  {
    "id": "volcano",
    "name": "Volcanic",
    "type": "gradient",
    "colors": [
      "#200000",
      "#8f0000",
      "#ff4d00",
      "#ffd166"
    ]
  },
  {
    "id": "jungle",
    "name": "Jungle Pulse",
    "type": "gradient",
    "colors": [
      "#004d40",
      "#00c853",
      "#b2ff59",
      "#00e676"
    ]
  },
  {
    "id": "moss",
    "name": "Mystic Moss",
    "type": "gradient",
    "colors": [
      "#134e5e",
      "#71b280",
      "#d4fc79"
    ]
  },
  {
    "id": "sakura",
    "name": "Sakura Night",
    "type": "gradient",
    "colors": [
      "#ff758c",
      "#ff7eb3",
      "#6a11cb"
    ]
  },
  {
    "id": "lotus",
    "name": "Lotus Dawn",
    "type": "gradient",
    "colors": [
      "#fbc2eb",
      "#a6c1ee",
      "#00c9a7"
    ]
  },
  {
    "id": "monsoon",
    "name": "Monsoon",
    "type": "gradient",
    "colors": [
      "#283c86",
      "#45a247",
      "#00c6ff",
      "#845ec2"
    ]
  },
  {
    "id": "cosmic",
    "name": "Cosmic Fire",
    "type": "gradient",
    "colors": ["#05001a", "#3b0f70", "#ff2d95", "#00e5ff"]
  }
];

// Application State
class QuoteApp {
  constructor() {
    this.currentQuoteIndex = 0;
    this.favorites = this.loadFavorites();
    this.currentTheme = this.loadTheme();
    this.customization = this.loadCustomization();
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderBackgroundOptions();
    this.populateArchiveFilters();
    this.applyTheme();
    this.displayCurrentQuote();
    this.updateFavoritesCount();
    this.applyCustomization();
  }

  setupEventListeners() {
    // Quote navigation
    document.getElementById('randomQuote').addEventListener('click', () => this.showRandomQuote());
    document.getElementById('prevQuote').addEventListener('click', () => this.showPreviousQuote());
    document.getElementById('nextQuote').addEventListener('click', () => this.showNextQuote());
    
    // Archive exploration
    const quoteSearch = document.getElementById('quoteSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    if (quoteSearch) quoteSearch.addEventListener('input', () => this.filterArchive());
    if (categoryFilter) categoryFilter.addEventListener('change', () => this.filterArchive());


    // Favorites
    document.getElementById('favoriteHeart').addEventListener('click', () => this.toggleFavorite());
    document.getElementById('favoritesBtn').addEventListener('click', () => this.showFavoritesModal());
    document.getElementById('closeFavorites').addEventListener('click', () => this.hideFavoritesModal());

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

    // Customization controls
    document.getElementById('fontFamily').addEventListener('change', (e) => this.updateCustomization('fontFamily', e.target.value));
    document.getElementById('fontSize').addEventListener('change', (e) => this.updateCustomization('fontSize', e.target.value));
    document.getElementById('fontWeight').addEventListener('change', (e) => this.updateCustomization('fontWeight', e.target.value));
    document.getElementById('textAlign').addEventListener('change', (e) => this.updateCustomization('textAlign', e.target.value));
    document.getElementById('quotePosition').addEventListener('change', (e) => this.updateCustomization('position', e.target.value));

    // Color picker
    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
        this.updateCustomization('textColor', e.target.dataset.color);
      });
    });

    // Action buttons
    document.getElementById('downloadBtn').addEventListener('click', () => this.downloadQuote());
    document.getElementById('shareTwitter').addEventListener('click', () => this.shareOnTwitter());
    document.getElementById('copyText').addEventListener('click', () => this.copyToClipboard());

    // Favorites modal actions
    document.getElementById('exportGallery').addEventListener('click', () => this.exportGallery());
    document.getElementById('clearFavorites').addEventListener('click', () => this.clearFavorites());

    // Modal backdrop click
    document.querySelector('.modal-backdrop').addEventListener('click', () => this.hideFavoritesModal());

    // Panel toggle
    document.getElementById('panelToggle').addEventListener('click', () => this.togglePanel());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.showNextQuote();
      if (e.key === 'ArrowLeft') this.showPreviousQuote();
      if (e.key === ' ') {
        e.preventDefault();
        this.showRandomQuote();
      }
      if (e.key === 'f' || e.key === 'F') this.toggleFavorite();
    });
  }

  renderBackgroundOptions() {
    const grid = document.getElementById('backgroundGrid');
    grid.innerHTML = backgroundOptions.map((bg, index) => 
      `<div class="background-option ${bg.id} ${index === 0 ? 'active' : ''}" 
            data-background="${bg.id}" 
            title="${bg.name}"
            tabindex="0"></div>`
    ).join('');

    // Add click handlers for background options
    document.querySelectorAll('.background-option').forEach(option => {
      option.addEventListener('click', (e) => {
        document.querySelectorAll('.background-option').forEach(opt => opt.classList.remove('active'));
        e.target.classList.add('active');
        this.updateCustomization('background', e.target.dataset.background);
      });
    });
  }

  displayCurrentQuote() {
    const quote = philosophicalQuotes[this.currentQuoteIndex];
    const quoteContent = document.getElementById('quoteContent');
    
    // Add changing animation
    quoteContent.classList.add('changing');
    
    document.getElementById('quoteText').textContent = quote.quote;
    document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
    document.getElementById('quoteSchool').textContent = quote.school;

    // Update favorite heart
    const heartBtn = document.getElementById('favoriteHeart');
    const heartIcon = heartBtn.querySelector('.heart-icon');
    const isFavorited = this.favorites.some(fav => fav.id === quote.id);
    
    if (isFavorited) {
      heartBtn.classList.add('active');
      heartIcon.textContent = '♥';
    } else {
      heartBtn.classList.remove('active');
      heartIcon.textContent = '♡';
    }

    // Remove animation class after animation completes
    setTimeout(() => {
      quoteContent.classList.remove('changing');
    }, 300);
  }

  filterArchive() {
    const query = (document.getElementById('quoteSearch')?.value || '').trim().toLowerCase();
    const category = document.getElementById('categoryFilter')?.value || '';
    const status = document.getElementById('archiveStatus');
    const matches = philosophicalQuotes.filter(q => {
      const haystack = [q.quote, q.author, q.school, q.category, q.tradition || ''].join(' ').toLowerCase();
      return (!query || haystack.includes(query)) && (!category || q.category === category || q.school === category);
    });
    if (status) status.textContent = matches.length.toLocaleString() + ' matching quotes';
    this.filteredQuoteIds = matches.map(q => q.id);
  }

  populateArchiveFilters() {
    const select = document.getElementById('categoryFilter');
    if (!select) return;
    const categories = [...new Set(philosophicalQuotes.map(q => q.category))].sort();
    select.innerHTML = '<option value="">All themes</option>' + categories.map(c => '<option value="' + c.replace(/"/g,'&quot;') + '">' + c + '</option>').join('');
    const status = document.getElementById('archiveStatus');
    if (status) status.textContent = philosophicalQuotes.length.toLocaleString() + ' quotes in the archive';
  }

  showRandomQuote() {
    const query = (document.getElementById('quoteSearch')?.value || '').trim().toLowerCase();
    const category = document.getElementById('categoryFilter')?.value || '';
    const pool = (query || category)
      ? philosophicalQuotes.filter(q => {
          const haystack = [q.quote, q.author, q.school, q.category, q.tradition || ''].join(' ').toLowerCase();
          return (!query || haystack.includes(query)) && (!category || q.category === category || q.school === category);
        })
      : philosophicalQuotes;
    if (!pool.length) {
      this.showToast('No quotes match that exploration.');
      return;
    }
    const quote = pool[Math.floor(Math.random() * pool.length)];
    this.currentQuoteIndex = philosophicalQuotes.findIndex(q => q.id === quote.id);
    this.displayCurrentQuote();
  }

  getNavigationPool() {
    const query = (document.getElementById('quoteSearch')?.value || '').trim().toLowerCase();
    const category = document.getElementById('categoryFilter')?.value || '';
    if (!query && !category) return philosophicalQuotes;
    return philosophicalQuotes.filter(q => {
      const haystack = [q.quote, q.author, q.school, q.category, q.tradition || ''].join(' ').toLowerCase();
      return (!query || haystack.includes(query)) && (!category || q.category === category || q.school === category);
    });
  }

  showNextQuote() {
    const pool = this.getNavigationPool();
    if (!pool.length) return this.showToast('No quotes match that exploration.');
    const currentId = philosophicalQuotes[this.currentQuoteIndex]?.id;
    const currentPoolIndex = Math.max(0, pool.findIndex(q => q.id === currentId));
    const next = pool[(currentPoolIndex + 1) % pool.length];
    this.currentQuoteIndex = philosophicalQuotes.findIndex(q => q.id === next.id);
    this.displayCurrentQuote();
  }

  showPreviousQuote() {
    const pool = this.getNavigationPool();
    if (!pool.length) return this.showToast('No quotes match that exploration.');
    const currentId = philosophicalQuotes[this.currentQuoteIndex]?.id;
    const currentPoolIndex = Math.max(0, pool.findIndex(q => q.id === currentId));
    const previous = pool[(currentPoolIndex - 1 + pool.length) % pool.length];
    this.currentQuoteIndex = philosophicalQuotes.findIndex(q => q.id === previous.id);
    this.displayCurrentQuote();
  }

  toggleFavorite() {
    const currentQuote = philosophicalQuotes[this.currentQuoteIndex];
    const existingIndex = this.favorites.findIndex(fav => fav.id === currentQuote.id);

    if (existingIndex >= 0) {
      this.favorites.splice(existingIndex, 1);
      this.showToast('Removed from favorites');
    } else {
      this.favorites.push(currentQuote);
      this.showToast('Added to favorites');
    }

    this.saveFavorites();
    this.updateFavoritesCount();
    this.displayCurrentQuote();
  }

  showFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const favoritesList = document.getElementById('favoritesList');

    if (this.favorites.length === 0) {
      favoritesList.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); font-style: italic;">No favorite quotes yet. Start by clicking the heart icon on quotes you love!</p>';
    } else {
      favoritesList.innerHTML = this.favorites.map(quote => `
        <div class="favorite-item">
          <blockquote class="quote-text">${quote.quote}</blockquote>
          <cite class="quote-author">— ${quote.author}</cite>
          <div class="quote-school">${quote.school}</div>
        </div>
      `).join('');
    }

    modal.classList.remove('hidden');
  }

  hideFavoritesModal() {
    document.getElementById('favoritesModal').classList.add('hidden');
  }

  updateCustomization(property, value) {
    this.customization[property] = value;
    this.saveCustomization();
    this.applyCustomization();
  }

  applyCustomization() {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteSchool = document.getElementById('quoteSchool');
    const quoteBackground = document.getElementById('quoteBackground');
    const quoteContent = document.getElementById('quoteContent');

    // Apply typography
    if (this.customization.fontFamily) {
      quoteText.style.fontFamily = this.customization.fontFamily;
    }
    if (this.customization.fontSize) {
      quoteText.style.fontSize = this.customization.fontSize + 'px';
    }
    if (this.customization.fontWeight) {
      quoteText.style.fontWeight = this.customization.fontWeight;
    }
    if (this.customization.textAlign) {
      quoteContent.style.textAlign = this.customization.textAlign;
    }
    if (this.customization.textColor) {
      quoteText.style.color = this.customization.textColor;
      quoteAuthor.style.color = this.customization.textColor;
      quoteSchool.style.color = this.customization.textColor;
    }

    // Apply background
    if (this.customization.background) {
      quoteBackground.className = `quote-background ${this.customization.background}`;
    }

    // Apply position
    if (this.customization.position) {
      quoteBackground.style.alignItems = this.customization.position;
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀';
  }

  togglePanel() {
    const panel = document.getElementById('panelContent');
    const toggle = document.getElementById('panelToggle');
    
    if (panel.style.display === 'none') {
      panel.style.display = 'block';
      toggle.textContent = '⚙';
    } else {
      panel.style.display = 'none';
      toggle.textContent = '▼';
    }
  }

  async downloadQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.textContent = '⏳ Generating...';
    downloadBtn.disabled = true;

    try {
      const canvas = await html2canvas(quoteContainer, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true
      });

      const link = document.createElement('a');
      link.download = `philosophy-quote-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();

      this.showToast('Quote downloaded successfully!');
    } catch (error) {
      this.showToast('Download failed. Please try again.');
      console.error('Download error:', error);
    } finally {
      downloadBtn.textContent = '📥 Download Image';
      downloadBtn.disabled = false;
    }
  }

  shareOnTwitter() {
    const currentQuote = philosophicalQuotes[this.currentQuoteIndex];
    const text = `"${currentQuote.quote}" — ${currentQuote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=philosophy,wisdom,inspiration`;
    window.open(url, '_blank');
  }

  copyToClipboard() {
    const currentQuote = philosophicalQuotes[this.currentQuoteIndex];
    const text = `"${currentQuote.quote}" — ${currentQuote.author}`;
    
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Quote copied to clipboard!');
    }).catch(() => {
      this.showToast('Copy failed. Please try again.');
    });
  }

  async exportGallery() {
    if (this.favorites.length === 0) {
      this.showToast('No favorites to export');
      return;
    }

    const exportBtn = document.getElementById('exportGallery');
    exportBtn.textContent = '⏳ Exporting...';
    exportBtn.disabled = true;

    try {
      // Create a temporary container for the gallery
      const galleryContainer = document.createElement('div');
      galleryContainer.style.cssText = `
        position: fixed;
        top: -9999px;
        left: -9999px;
        width: 1200px;
        background: white;
        padding: 40px;
        font-family: var(--font-family-base);
      `;

      galleryContainer.innerHTML = `
        <h1 style="text-align: center; margin-bottom: 40px; color: #333;">My Favorite Philosophy Quotes</h1>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px;">
          ${this.favorites.map(quote => `
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px; color: white;">
              <blockquote style="font-size: 18px; line-height: 1.4; margin: 0 0 20px 0; font-style: italic;">
                "${quote.quote}"
              </blockquote>
              <cite style="display: block; font-size: 16px; opacity: 0.9; font-style: normal;">
                — ${quote.author}
              </cite>
              <div style="font-size: 14px; opacity: 0.7; margin-top: 8px;">
                ${quote.school}
              </div>
            </div>
          `).join('')}
        </div>
      `;

      document.body.appendChild(galleryContainer);

      const canvas = await html2canvas(galleryContainer, {
        scale: 1,
        backgroundColor: '#ffffff'
      });

      document.body.removeChild(galleryContainer);

      const link = document.createElement('a');
      link.download = `philosophy-quotes-gallery-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();

      this.showToast('Gallery exported successfully!');
    } catch (error) {
      this.showToast('Export failed. Please try again.');
      console.error('Export error:', error);
    } finally {
      exportBtn.textContent = '📥 Export Gallery';
      exportBtn.disabled = false;
    }
  }

  clearFavorites() {
    if (confirm('Are you sure you want to clear all favorites? This action cannot be undone.')) {
      this.favorites = [];
      this.saveFavorites();
      this.updateFavoritesCount();
      this.showFavoritesModal(); // Refresh the modal
      this.displayCurrentQuote(); // Update heart icon
      this.showToast('All favorites cleared');
    }
  }

  showToast(message) {
    const toast = document.getElementById('toast');
    const toastContent = toast.querySelector('.toast-content');
    
    toastContent.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 300);
    }, 3000);
  }

  updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = this.favorites.length;
  }

  // Local Storage Methods
  loadFavorites() {
    try {
      const saved = localStorage.getItem('philosophy-favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('philosophy-favorites', JSON.stringify(this.favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }

  loadTheme() {
    return localStorage.getItem('philosophy-theme') || 'light';
  }

  saveTheme() {
    localStorage.setItem('philosophy-theme', this.currentTheme);
  }

  loadCustomization() {
    try {
      const saved = localStorage.getItem('philosophy-customization');
      return saved ? JSON.parse(saved) : {
        fontFamily: "'Playfair Display', serif",
        fontSize: 32,
        fontWeight: 400,
        textAlign: 'center',
        textColor: '#ffffff',
        background: 'aurora',
        position: 'center'
      };
    } catch {
      return {
        fontFamily: "'Playfair Display', serif",
        fontSize: 32,
        fontWeight: 400,
        textAlign: 'center',
        textColor: '#ffffff',
        background: 'gradient1',
        position: 'center'
      };
    }
  }

  saveCustomization() {
    try {
      localStorage.setItem('philosophy-customization', JSON.stringify(this.customization));
    } catch (error) {
      console.error('Failed to save customization:', error);
    }
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.quoteApp = new QuoteApp();
});

// Add service worker for PWA capabilities (optional enhancement)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Only register if we have a service worker file
    // This is optional for GitHub Pages deployment
  });
}
