
var countDownDate = new Date("July 8, 2019 24:00:00").getTime();
  
var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("dias").innerHTML = days;
document.getElementById("horas").innerHTML = hours;
document.getElementById("minutos").innerHTML = minutes;
document.getElementById("segundos").innerHTML = seconds;

if (distance < 0) {
  clearInterval(x);
  document.getElementById("fecha").innerHTML = "BIENVENIDOS A NUESTRO NUEVO WEBSITE";
}
}, 1000);