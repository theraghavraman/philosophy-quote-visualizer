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

const backgroundOptions = [
  {
    "id": "gradient1",
    "name": "Cosmic Dreams",
    "type": "gradient",
    "colors": ["#667eea", "#764ba2"]
  },
  {
    "id": "gradient2",
    "name": "Ocean Sunset",
    "type": "gradient",
    "colors": ["#ff9a9e", "#fecfef", "#fecfef"]
  },
  {
    "id": "gradient3",
    "name": "Forest Mist",
    "type": "gradient",
    "colors": ["#a8edea", "#fed6e3"]
  },
  {
    "id": "gradient4",
    "name": "Aurora",
    "type": "gradient",
    "colors": ["#d299c2", "#fef9d7"]
  },
  {
    "id": "gradient5",
    "name": "Desert Sky",
    "type": "gradient",
    "colors": ["#ffecd2", "#fcb69f"]
  },
  {
    "id": "gradient6",
    "name": "Midnight",
    "type": "gradient",
    "colors": ["#2c3e50", "#3498db"]
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

  showRandomQuote() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * philosophicalQuotes.length);
    } while (newIndex === this.currentQuoteIndex && philosophicalQuotes.length > 1);
    
    this.currentQuoteIndex = newIndex;
    this.displayCurrentQuote();
  }

  showNextQuote() {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % philosophicalQuotes.length;
    this.displayCurrentQuote();
  }

  showPreviousQuote() {
    this.currentQuoteIndex = this.currentQuoteIndex === 0 
      ? philosophicalQuotes.length - 1 
      : this.currentQuoteIndex - 1;
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
        background: 'gradient1',
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
