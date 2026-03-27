//CONTADOR

const fechaEvento = new Date("2026-10-10 21:00:00").getTime();

const actualizarContador = () => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) return;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
};

setInterval(actualizarContador, 1000);
actualizarContador();

//GALERIA DE FOTOS

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let index = 0;

function getVisibleSlides() {
  return window.innerWidth >= 768 ? 3 : 1;
}

function getMaxIndex() {
  return slides.length - getVisibleSlides();
}

// Crear dots
function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i <= getMaxIndex(); i++) {
    const dot = document.createElement('span');
    if (i === index) dot.classList.add('active');

    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });

    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  const dots = document.querySelectorAll('.dots span');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Auto-play
setInterval(() => {
  index++;
  if (index > getMaxIndex()) index = 0;
  updateCarousel();
}, 3000);

// Recalcular en resize
window.addEventListener('resize', () => {
  index = 0;
  createDots();
  updateCarousel();
});

// Init
createDots();
updateCarousel()


//FUNCION INGRESAR A OTRA PAGINA

function irPagina() {
  localStorage.setItem("musicaActiva", "true"); 
}

//BOTON FLOTANTE

