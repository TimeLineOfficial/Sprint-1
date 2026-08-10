/**
 * Interactive Features, Pricing Switcher, & Animated Dashboard Widgets
 */

export function initInteractions() {
  initPricingToggle();
  initDashboardAnimation();
  initNewsletterValidation();
}

function initPricingToggle() {
  const monthlyBtn = document.getElementById('pricing-monthly');
  const annualBtn = document.getElementById('pricing-annual');
  const priceAmounts = document.querySelectorAll('.c-pricing-card__amount');
  const pricePeriods = document.querySelectorAll('.c-pricing-card__period');

  if (!monthlyBtn || !annualBtn) return;

  const prices = {
    monthly: ['29', '79', '199'],
    annual: ['24', '64', '159']
  };

  function setBilling(type) {
    if (type === 'annual') {
      annualBtn.classList.add('c-pricing__toggle-btn--active');
      monthlyBtn.classList.remove('c-pricing__toggle-btn--active');
      annualBtn.setAttribute('aria-pressed', 'true');
      monthlyBtn.setAttribute('aria-pressed', 'false');
    } else {
      monthlyBtn.classList.add('c-pricing__toggle-btn--active');
      annualBtn.classList.remove('c-pricing__toggle-btn--active');
      monthlyBtn.setAttribute('aria-pressed', 'true');
      annualBtn.setAttribute('aria-pressed', 'false');
    }

    priceAmounts.forEach((el, index) => {
      if (prices[type][index]) {
        // Quick subtle fade transition
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent = prices[type][index];
          el.style.opacity = '1';
        }, 150);
      }
    });

    pricePeriods.forEach(el => {
      el.textContent = type === 'annual' ? '/mo billed annually' : '/month';
    });
  }

  monthlyBtn.addEventListener('click', () => setBilling('monthly'));
  annualBtn.addEventListener('click', () => setBilling('annual'));
}

function initDashboardAnimation() {
  const activeUsersElem = document.getElementById('metric-active-users');
  const conversionElem = document.getElementById('metric-conversion');
  const roiElem = document.getElementById('metric-roi');

  if (!activeUsersElem) return;

  // Real-time subtle simulated metric pulse
  setInterval(() => {
    const currentUsers = parseInt(activeUsersElem.textContent.replace(/,/g, ''), 10);
    const variation = Math.floor(Math.random() * 15) - 7;
    const newUsers = Math.max(12400, currentUsers + variation);
    activeUsersElem.textContent = newUsers.toLocaleString();
  }, 3500);
}

function initNewsletterValidation() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  
  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (email && email.includes('@')) {
      alert(`Thank you for subscribing! Confirmation sent to ${email}`);
      input.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}
