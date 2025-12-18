const modalMap = document.querySelector('.modal-container-map');
const loc1 = document.getElementById('loc1');
const loc2 = document.getElementById('loc2');
const loc3 = document.getElementById('loc3');
const loc4 = document.getElementById('loc4');
const loc5 = document.getElementById('loc5');
const closeBtn = document.querySelectorAll('.close');
const map = document.querySelector('.map');
const map1 ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8815212523!2d2.2977650125119675!3d48.84139857121027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6703e69cbeb37%3A0x7d55edaf016048be!2sMairie%20du%2015%E1%B5%89%20arrondissement%20de%20Paris!5e0!3m2!1sfr!2sfr!4v1766076730778!5m2!1sfr!2sfr';
const map2 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.807320275875!2d2.380180612513863!3d48.8809495712157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dc6143ed387%3A0xf26bed6076959491!2sParc%20des%20Buttes-Chaumont!5e0!3m2!1sfr!2sfr!4v1766079230969!5m2!1sfr!2sfr';
const map3 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10507.144691537806!2d2.3438901210749807!3d48.82414113932452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67227b9b3423f%3A0xe433839100d5a152!2sM%C3%A9diath%C3%A8que%20Jean-Pierre%20Melville!5e0!3m2!1sfr!2sfr!4v1766079268106!5m2!1sfr!2sfr';
const map4 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4317286722967!2d2.340557912512355!3d48.8499772712114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671ddedaafbcd%3A0x9fb179759d80231a!2sLe%20Champo%20-%20Espace%20Jacques%20Tati!5e0!3m2!1sfr!2sfr!4v1766079305874!5m2!1sfr!2sfr';
const map5 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42006.91386587946!2d2.301842293961052!3d48.849969872584076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d55f4ec3877%3A0x6caa79cad251d3c8!2sJardin%20sur%20le%20Toit!5e0!3m2!1sfr!2sfr!4v1766080043159!5m2!1sfr!2sfr';


loc1.addEventListener('click', () => {
  modalMap.style.display = 'block';
  map.setAttribute('src', map1);
});

loc2.addEventListener('click', () => {
  modalMap.style.display = 'block';
  map.setAttribute('src', map2);
});

loc3.addEventListener('click', () => {
  modalMap.style.display = 'block';
  map.setAttribute('src', map3);
});

loc4.addEventListener('click', () => {
  modalMap.style.display = 'block';
  map.setAttribute('src', map4);
});

loc5.addEventListener('click', () => {
  modalMap.style.display = 'block';
  map.setAttribute('src', map5);
});


closeBtn.forEach(element => {
  element.addEventListener('click', () => {
    map.setAttribute('src', '');
    modalMap.style.display = 'none';

  });
});



// FORM MODAL
const submitBtn = document.getElementById('submit');
const closeFormBtn = document.querySelectorAll('.close-form');
const inscription = document.querySelectorAll('.inscription');
const modalForm = document.querySelector('.modal-container-form');

inscription.forEach(button => {
  button.addEventListener('click', () => {
    modalForm.style.display = 'block';
  });
});

closeFormBtn.forEach(element => {
  element.addEventListener('click', () => {
    modalForm.style.display = 'none';
    document.getElementById('event').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Inscription réussie ! Merci pour votre engagement.');
  modalForm.style.display = 'none';
  document.getElementById('event').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
});
