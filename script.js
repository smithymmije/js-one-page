/* Navegação suave para links internos */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  /* Destacar item ativo ao rolar (tanto menu lateral quanto inferior) */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.side-nav a, .bottom-nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.clientHeight;
      if (pageYOffset >= secTop - 60) current = sec.getAttribute('id');
    });
  
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active-circle', isActive);
  
      /* Ajusta a cor do ícone no menu lateral */
      if (link.closest('.side-nav')) {
        link.style.color = isActive ? '#fff' : '#666768';
      }
  
      /* Ajusta a cor do ícone no menu inferior */
      if (link.closest('.bottom-nav')) {
        link.style.color = isActive ? '#00c6ff' : '#fff';
      }
    });
  });
  
  /* Typewriter */
  const words = ["Designer", "Photographer", "Freelancer"];
  const el = document.getElementById('typewriter');
  
  let wordIndex = 0;
  let charIndex = 0;
  let forward = true;
  
  function typeLoop() {
    const current = words[wordIndex];
  
    if (forward) {
      if (charIndex < current.length) {
        el.textContent += current[charIndex++];
        setTimeout(typeLoop, 120);
      } else {
        setTimeout(() => { forward = false; typeLoop(); }, 1500);
      }
    } else {
      if (charIndex > 0) {
        el.textContent = current.substring(0, --charIndex);
        setTimeout(typeLoop, 60);
      } else {
        forward = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeLoop, 200);
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', typeLoop);