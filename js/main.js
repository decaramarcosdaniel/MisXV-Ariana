// CARGA DATOS

document.getElementById("titulo").textContent = evento.titulo;
document.getElementById("nombre").textContent = evento.nombre;
document.getElementById("fecha").textContent = evento.fechaTexto;
document.getElementById("lugar").textContent = evento.lugar;
document.getElementById("mapa").href = evento.mapa;
document.getElementById("whatsapp").href = evento.whatsapp;


// MUSICA

let audio = new Audio(evento.musica);
let activo = false;

function entrar(){
document.querySelector(".welcome").style.display="none";
audio.play();
activo = true;
}

function toggleMusic(){
if(activo){
audio.pause();
}else{
audio.play();
}
activo = !activo;
}


// CONTADOR

const target = new Date(evento.fecha).getTime();

setInterval(()=>{

let now = new Date().getTime();
let diff = target - now;

let dias = Math.floor(diff/(1000*60*60*24));
let horas = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
let min = Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById("countdown").innerHTML =
`${dias}d ${horas}h ${min}m`;

},1000);