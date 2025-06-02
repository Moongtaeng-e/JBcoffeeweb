// 1. Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// 2. Product modal popup
const products = document.querySelectorAll('.product');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

products.forEach(product => {
  product.addEventListener('click', () => {
    const text = product.getAttribute('data-product');
    modalText.textContent = `${text}에 대한 더 많은 정보를 곧 만나보세요.`;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 3. Hero slider (simple background image slideshow)
const hero = document.querySelector('.hero');
const images = [
  'images/ai-hero-image.jpg',
  'images/ai-cafe-interior.jpg',
  'images/ai-brand-image.jpg'
];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url('${images[current]}')`;
}, 6000);
