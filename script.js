const whatsappNumber = '5511999999999'; // Número fictício informado para publicação temporária.
const whatsappMessage = 'Olá, Ariele! Conheci seu site e gostaria de conversar sobre acompanhamento psicológico infantil.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
document.querySelectorAll('[data-whatsapp]').forEach((link) => { link.href = whatsappUrl; });
const whatsappIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.26-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.57 0 11.93-5.35 11.94-11.93a11.85 11.85 0 0 0-3.48-8.43ZM12.06 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.24-.38a9.87 9.87 0 0 1-1.52-5.24c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c-.01 5.45-4.45 9.87-9.89 9.87Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z"/></svg>';
document.querySelectorAll('.wa-icon, .floating-whatsapp span:first-child').forEach((icon) => { icon.innerHTML = whatsappIcon; });
document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); instance.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}
const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
