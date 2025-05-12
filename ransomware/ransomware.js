let timeLeft = 120;
const correctCode = "1234-ABCD"; // Clave educativa ficticia
const alarmSound = document.getElementById('alarmSound'); // Obtener el reproductor de audio

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateCountdown() {
  if (timeLeft <= 0) {
    document.getElementById('countdown').textContent = '00:00';
    clearInterval(timerId);
    alarmSound.pause();  // Detener el sonido cuando el tiempo se agota
    alarmSound.currentTime = 0;
    window.location.href = '../eliminar/eliminar.html'; // Redirigir al eliminar archivos
    return;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('countdown').textContent = `${pad(minutes)}:${pad(seconds)}`;
  timeLeft--;
}

const timerId = setInterval(updateCountdown, 1000);
updateCountdown();

// Manejador del formulario
document.getElementById('payment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('codeInput').value.trim();
  const feedback = document.getElementById('feedback');

  if (input === correctCode) {
    feedback.style.color = "#00ff00";
    feedback.textContent = "¡Clave válida! Archivos restaurados.";
    clearInterval(timerId);
    document.getElementById('countdown').textContent = "RECUPERADO";
    alarmSound.pause();  // Detener el sonido cuando se ingresa la clave correcta
    alarmSound.currentTime = 0;
  } else {
    feedback.style.color = "#ff5555";
    feedback.textContent = "Clave incorrecta. Tiempo reducido.";
    timeLeft = Math.max(0, timeLeft - 15);  // Reducir 15 segundos si la clave es incorrecta
  }
});




