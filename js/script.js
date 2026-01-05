const swiper = new Swiper('.card-wrapper', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const submitEmail = document.getElementById('submit-email');
submitEmail.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Inscription à la newsletter réussie ! Merci pour votre engagement.');
  modalForm.style.display = 'none';
});
