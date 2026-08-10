/**
 * Theme Manager Module (Dark / Light Mode)
 * Supports system preferences & persistent localStorage state
 */

const THEME_KEY = 'corporate_brand_theme';

export function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  
  // Determine initial theme
  const storedTheme = localStorage.getItem(THEME_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Apply initial theme
  applyTheme(initialTheme);

  if (toggleBtn) {
    // Remove old listeners by replacing or directly setting onclick
    toggleBtn.onclick = (e) => {
      e.preventDefault();
      const currentActiveTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentActiveTheme === 'dark' ? 'light' : 'dark';
      
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    };
  }

  // Listen for OS system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  // Set data-theme on html root element
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;

  const toggleBtn = document.getElementById('theme-toggle');
  
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    toggleBtn.setAttribute('title', `Current mode: ${theme}`);

    const sunIcon = toggleBtn.querySelector('.c-theme-icon--sun');
    const moonIcon = toggleBtn.querySelector('.c-theme-icon--moon');
    
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
      }
    }
  }
}
