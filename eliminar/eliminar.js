// Reproducir el sonido de eliminación durante 5 segundos
const deleteSound = document.getElementById('deleteSound');
deleteSound.play();

// Después de 5 segundos, ocultar todo el contenido para una pantalla totalmente negra
setTimeout(() => {
  const content = document.getElementById('content');
  if (content) {
    content.style.display = 'none';  // Ocultar el contenido
  }
}, 5000);  // 5 segundos para que dure el sonido

