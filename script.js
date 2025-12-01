
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.scroll-bg').style.transform = 
    `translateY(${scrollY * -0.2}px)`;
});


const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

if(track && next && prev){
  next.addEventListener('click', () => {
    track.scrollBy({ left: 420, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -420, behavior: 'smooth' });
  });
}


const bg = document.querySelector('.scroll-bg');
const sections = document.querySelectorAll('.section');

function syncBackgroundToSections() {
  const totalHeight = sections.length * window.innerHeight;
  bg.style.height = (totalHeight + 0.6*window.innerHeight) + "px";
  document.body.style.minHeight = totalHeight + "px";
}

window.addEventListener("load", syncBackgroundToSections);
window.addEventListener("resize", syncBackgroundToSections);



const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-img"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active"); // 👈 animate on scroll UP too
      }
    });
  },
  {
    threshold: 0.25
  }
);

reveals.forEach((el) => observer.observe(el));


