// Header hide-on-scroll functionality
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const heroSection = document.querySelector('#home'); // your hero section ID
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  let lastScrollY = window.scrollY;
  let prevScrollPos = window.pageYOffset;

  // --- Mobile Menu Toggle ---
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      navMenu.classList.remove('show');
    }
  });

  window.addEventListener('scroll', () => {
    // Close menu if scrolling
    if (navMenu.classList.contains('show')) {
      if (Math.abs(window.scrollY - lastScrollY) > 10) {
        navMenu.classList.remove('show');
      }
    }
    lastScrollY = window.scrollY;

    // --- Header Show/Hide Based on Hero Section ---
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < heroBottom) {
      // Inside hero section → keep header visible
      header.style.top = '0';
    } else {
      // Past hero section → hide on scroll down, show on scroll up
      if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
      } else {
        header.style.top = '-100px';
      }
    }

    prevScrollPos = currentScrollPos;
  });
});


// Placeholder log
console.log('Elaris Healthcare website script loaded.');

// Leadership and Compliance
  const tabs = document.querySelectorAll('.tab-btn');
  const slides = document.querySelectorAll('.topic-slide');
  let currentIndex = 0;
  let autoSwitchTimer;

  function showSlide(index) {
    tabs.forEach(btn => btn.classList.remove('is-current'));
    slides.forEach(slide => slide.classList.remove('is-active'));

    tabs[index].classList.add('is-current');
    slides[index].classList.add('is-active');
    currentIndex = index;
  }

  function autoSwitch() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSwitch() {
    stopAutoSwitch(); // clear existing timer if any
    autoSwitchTimer = setInterval(autoSwitch, 8000); // 8 seconds
  }

  function stopAutoSwitch() {
    clearInterval(autoSwitchTimer);
  }

  // Setup initial auto switch
  startAutoSwitch();

  // Tab click handlers
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      showSlide(index);
      startAutoSwitch(); // restart timer when user manually switches
    });
  });


//services
// Reveal each service card on scroll
// Intersection Observer for scroll reveal
const cards = document.querySelectorAll('.service-card');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px' });

cards.forEach(card => {
  io.observe(card);
  card.setAttribute('tabindex', '0');
});

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });



// Reveal closing statement
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      obs.unobserve(e.target);
    }
  });
}, { rootMargin: "0px 0px -10% 0px" });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

//Why Choose Us
window.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll('.reveal-up');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  revealItems.forEach(item => observer.observe(item));
});

//***-----------------Who We Help------------ */

document.addEventListener("DOMContentLoaded", () => {
  const helpItems = document.querySelectorAll(".help-item");
  const tooltipBox = document.getElementById("tooltipBox");

  let currentItem = null;
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  helpItems.forEach(item => {
    // Only for mobile: click behavior
    if (isTouchDevice) {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const desc = item.getAttribute("data-tooltip");

        if (currentItem === item) {
          tooltipBox.style.display = "none";
          currentItem = null;
          return;
        }

        currentItem = item;
        tooltipBox.innerText = desc;
        tooltipBox.style.display = "block";

        const rect = item.getBoundingClientRect();
        const boxWidth = tooltipBox.offsetWidth;
        const boxHeight = tooltipBox.offsetHeight;

        const left = rect.left + rect.width / 2 - boxWidth / 2;
        const top = rect.top + window.scrollY - boxHeight - 12;

        tooltipBox.style.left = `${left}px`;
        tooltipBox.style.top = `${top}px`;
      });
    } else {
      // Only for desktop: hover behavior
      item.addEventListener("mouseenter", () => {
        const desc = item.getAttribute("data-tooltip");
        tooltipBox.innerText = desc;
        tooltipBox.style.display = "block";

        const rect = item.getBoundingClientRect();
        const boxWidth = tooltipBox.offsetWidth;
        const boxHeight = tooltipBox.offsetHeight;

        const left = rect.left + rect.width / 2 - boxWidth / 2;
        const top = rect.top + window.scrollY - boxHeight - 12;

        tooltipBox.style.left = `${left}px`;
        tooltipBox.style.top = `${top}px`;
      });

      item.addEventListener("mouseleave", () => {
        tooltipBox.style.display = "none";
      });
    }
  });

  // Global events for mobile
  if (isTouchDevice) {
    document.addEventListener("click", () => {
      tooltipBox.style.display = "none";
      currentItem = null;
    });

    window.addEventListener("scroll", () => {
      tooltipBox.style.display = "none";
      currentItem = null;
    });
  }
});

///*********Contact Us */

  // Open Modal
 // Get elements
// Modal elements
const modal = document.getElementById('contactModal');
const openModalBtn = document.querySelector('.payer-btn');
const closeModalBtn = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

// Open modal
openModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close when clicking outside the dialog
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Handle form submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! We will get back to you shortly.');
  modal.classList.remove('show');
  contactForm.reset();
});


// Contact nav link behavior
document.querySelector('.contact-nav').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Smooth scroll to payer-expertise section
  const target = document.getElementById('payer-expertise');
  target.scrollIntoView({ behavior: 'smooth' });
  
  // After scrolling, open modal
  setTimeout(() => {
    modal.classList.add('show');
  }, 800); // delay to match scroll speed
});


