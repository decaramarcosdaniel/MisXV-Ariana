
//BOTON FLOTANTE

const btn = document.getElementById("btnMusica");
const audio = document.getElementById("musica");

let reproduciendo = false;

btn.addEventListener("click", async () => {
  try {
    if (reproduciendo) {
      audio.pause();
      btn.textContent = "▶";
    } else {
      await audio.play(); // importante usar await
      btn.textContent = "⏸";
    }

    reproduciendo = !reproduciendo;

  } catch (error) {
    alert("Error al reproducir el audio: " + error.message);
  }
});

window.addEventListener("load", async () => {
  const estado = localStorage.getItem("musicaActiva");


});