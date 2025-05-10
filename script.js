// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');   // Botão "Abrir"
  const closeBtn = document.getElementById('closeBtn'); // Botão "Fechar"
  const lidOne = document.querySelector('.lid.one');    // Tampa superior
  const letter = document.querySelector('.letter');     // Carta

  // Ação ao clicar em "Abrir"
  openBtn.addEventListener('click', () => {
    lidOne.style.transform = 'rotateX(-120deg)';  // Abre a tampa
    letter.style.transform = 'translateY(0)';     // Mostra a carta
    openBtn.style.display = 'none';               // Esconde botão abrir
    closeBtn.style.display = 'inline-block';      // Mostra botão fechar
  });

  // Ação ao clicar em "Fechar"
  closeBtn.addEventListener('click', () => {
    lidOne.style.transform = 'rotateX(0deg)';       // Fecha a tampa
    letter.style.transform = 'translateY(100%)';    // Esconde a carta
    closeBtn.style.display = 'none';                // Esconde botão fechar
    openBtn.style.display = 'inline-block';         // Mostra botão abrir
  });
});