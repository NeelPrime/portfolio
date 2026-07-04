// ========================================
// HAMBURGER MENU TOGGLE
// ========================================

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", isOpen.toString());
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ========================================
// TYPING ANIMATION
// ========================================

function initTypingEffect() {
  const element = document.getElementById("typing-text");
  if (!element) return;

  const phrases = [
    "Full Stack Developer",
    "Cloud Solutions Architect",
    "React & Java Specialist",
    "Problem Solver",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      element.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      element.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Start after a brief delay
  setTimeout(type, 1000);
}

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ========================================
// STICKY NAV SHRINK ON SCROLL
// ========================================

function initNavShrink() {
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const hamburgerNav = document.getElementById("hamburger-nav");
        const desktopNav = document.getElementById("desktop-nav");

        if (scrollTop > 100) {
          hamburgerNav.style.height = "10vh";
          desktopNav.style.height = "12vh";
        } else {
          hamburgerNav.style.height = "16vh";
          desktopNav.style.height = "16vh";
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ========================================
// BACK TO TOP BUTTON
// ========================================

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========================================
// CONTACT FORM HANDLING
// ========================================

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const btn = form.querySelector(".form-btn");
    btn.textContent = "Sending...";
    btn.disabled = true;

    // If using Formspree placeholder, show a message
    if (form.action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      btn.textContent = "✓ Please set up Formspree first";
      setTimeout(() => {
        btn.textContent = "Send Message";
        btn.disabled = false;
      }, 3000);
    }
  });
}

// ========================================
// INITIALIZE EVERYTHING
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initTypingEffect();
  initActiveNav();
  initNavShrink();
  initBackToTop();
  initContactForm();
});
