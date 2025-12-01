
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.scroll-bg').style.transform = 
    `translateY(${scrollY * -0.2}px)`;
});
