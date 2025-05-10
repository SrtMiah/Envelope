// Captura os elementos do DOM (HTML)
const openBtn = document.getElementById('openBtn'); // Botão "Abrir"
const closeBtn = document.getElementById('closeBtn'); // Botão "Fechar"
const lidOne = document.querySelector('.lid.one'); // Tampa superior
const letter = document.querySelector('.letter'); // A carta

// Quando clica em "Abrir"
openBtn.addEventListener('click', () => {
  lidOne.style.transform = 'rotateX(-120deg)'; // Abre a tampa
  letter.style.transform = 'translateY(0)';    // Puxa a carta para cima
  openBtn.style.display = 'none';              // Esconde o botão abrir
  closeBtn.style.display = 'inline-block';     // Mostra o botão fechar
});

// Quando clica em "Fechar"
closeBtn.addEventListener('click', () => {
  lidOne.style.transform = 'rotateX(0deg)';     // Fecha a tampa
  letter.style.transform = 'translateY(100%)';  // Esconde a carta de novo
  closeBtn.style.display = 'none';              // Esconde botão fechar
  openBtn.style.display = 'inline-block';       // Mostra botão abrir
});