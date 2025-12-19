const submitContactBtn = document.getElementById('submit-btn');


submitContactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Votre message a bien été envoyé. Merci de nous avoir contactés!');
  modalForm.style.display = 'none';
  document.getElementById('event').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
});
