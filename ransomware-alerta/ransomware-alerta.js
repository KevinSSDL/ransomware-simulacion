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

// Función para redirigir
const handleInteraction = () => {
  clearInterval(addInterval);
  window.location.href = '../ransomware/ransomware.html'; // Cambia esta URL si es necesario
};

// Escuchar teclas (PC)
document.body.addEventListener('keydown', handleInteraction);

// Escuchar toques (móvil)
document.body.addEventListener('touchstart', handleInteraction);

// Escuchar clics (PC y algunos móviles)
document.body.addEventListener('click', handleInteraction);

