// Captura os botões e elementos visuais do envelope e carta
const openBtn = document.getElementById('openBtn'); // Botão "Open"
const closeBtn = document.getElementById('closeBtn'); // Botão "Close"
const lidOne = document.querySelector('.lid.one'); // Tampa do envelope (parte superior)
const letter = document.querySelector('.letter'); // Carta que aparece de dentro do envelope

// Quando o botão "Open" for clicado...
openBtn.addEventListener('click', () => {
  // Inclina a tampa superior para "abrir" o envelope
  lidOne.style.transform = 'rotateX(-120deg)';
  
  // Move a carta para cima, para fora do envelope
  letter.style.transform = 'translateY(0)';

  // Esconde o botão "Open"
  openBtn.style.display = 'none';

  // Mostra o botão "Close"
  closeBtn.style.display = 'inline-block';
});

// Quando o botão "Close" for clicado...
closeBtn.addEventListener('click', () => {
  // Reposiciona a tampa na posição original (fechada)
  lidOne.style.transform = 'rotateX(0deg)';
  
  // Desce a carta de volta para dentro do envelope
  letter.style.transform = 'translateY(100%)';

  // Esconde o botão "Close"
  closeBtn.style.display = 'none';

  // Mostra novamente o botão "Open"
  openBtn.style.display = 'inline-block';
});