document.getElementById('mostrarImagen').addEventListener('click', () => {
  const imagen = document.getElementById('imagen');
  const musica = document.getElementById('musica');
  
  // Mostrar la imagen lentamente
  imagen.style.display = 'block';
  setTimeout(() => {
    imagen.style.opacity = '1';
  }, 100);
  
  // Reproducir la música
  musica.play();
});
