import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initInteractions } from './interactions.js';

// Initialize theme immediately
initTheme();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initInteractions();

  console.log('🚀 Corporate Brand Landing Page initialized successfully!');
});
