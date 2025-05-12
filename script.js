const input = document.getElementById('searchInput');

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const query = input.value.trim().toLowerCase();
    if (query === 'descargar musica gratis') {
      // Redirige a la página de resultados (ajusta el nombre del archivo si es necesario)
      window.location.href = "resultados/resultados.html";
    }
  }
});
