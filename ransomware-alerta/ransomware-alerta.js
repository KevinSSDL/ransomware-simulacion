const cifradoScreen = document.getElementById('cifradoScreen');

let skeletonCount = 0;
const maxSkeletons = 10;

// Función para agregar un esqueleto nuevo
function addSkeleton() {
  if (skeletonCount >= maxSkeletons) {
    clearInterval(addInterval);
    return;
  }
  const skel = document.createElement('div');
  skel.className = 'skeleton';
  skel.textContent = '☠️';
  cifradoScreen.appendChild(skel);
  skeletonCount++;
}

// Agregar esqueletos uno por uno cada 500ms
const addInterval = setInterval(addSkeleton, 500);

// Función para redirigir al presionar cualquier tecla
const handleKeyPress = () => {
  clearInterval(addInterval);
  window.location.href = '../ransomware/ransomware.html';// Cambia esta URL según necesites
};

// Escuchar el evento de presionar cualquier tecla
document.body.addEventListener('keydown', handleKeyPress);
