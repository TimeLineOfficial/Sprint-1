/**
 * Navigation & Mobile Hamburger Menu Controller
 */

export function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.c-nav__link');

  if (!navToggle || !navMenu) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : navMenu.classList.contains('c-nav__menu--open');
    const newState = !isOpen;

    navMenu.classList.toggle('c-nav__menu--open', newState);
    navToggle.setAttribute('aria-expanded', newState.toString());
    
    // Prevent background body scroll when mobile menu is active
    if (window.innerWidth < 768) {
      document.body.style.overflow = newState ? 'hidden' : '';
    }
  }

  navToggle.addEventListener('click', () => toggleMenu());

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        toggleMenu(false);
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      navMenu.classList.remove('c-nav__menu--open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}
