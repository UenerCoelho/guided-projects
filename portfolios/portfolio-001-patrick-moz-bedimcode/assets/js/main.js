/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*** Menu Show ***/
// Validate if constant exist
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*** Menu Hidden ***/
// Validate if constant exist
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  // When the scroll os greater than 50 viewport height, add the blur-Header class to the header tag
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEmail = e => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      'service_8bnu9ga',
      'template_m76po5x',
      '#contact-form',
      'Ab3zP3LU4qFTCvbpT'
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },

      () => {
        // Show error message
        contactForm.textContent = 'Message not sent (service error) ❌';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  reset: true // Animation repeat
});

sr.reveal(
  `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: 'bottom' });
sr.reveal(`.about__data, .skills__data`, { origin: 'left' });
sr.reveal(`.about__image, .skills__content`, { origin: 'right' });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
