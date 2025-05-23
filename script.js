document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const lidOne = document.querySelector('.lid.one');
  const letter = document.querySelector('.letter');

  openBtn.addEventListener('click', () => {
    console.log("Botão Abrir clicado!");
    lidOne.style.transform = 'rotateX(-120deg)';
    setTimeout(() => {
      letter.style.transform = 'translateY(0)';
    }, 300);
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  });

  closeBtn.addEventListener('click', () => {
    console.log("Botão Fechar clicado!");
    letter.style.transform = 'translateY(100%)';
    setTimeout(() => {
      lidOne.style.transform = 'rotateX(0deg)';
    }, 300);
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
  });
});