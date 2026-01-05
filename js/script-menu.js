const submitEmail = document.getElementById('submit-email');
submitEmail.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Inscription à la newsletter réussie ! Merci pour votre engagement.');
  modalForm.style.display = 'none';
});

const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav');
burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});
