const photoBtn = document.getElementById('photo-btn');
const landingPage = document.getElementById('landing-page');
const greetingPage = document.getElementById('greeting-page');

photoBtn.addEventListener('click', () => {
  landingPage.classList.add('hidden');
  greetingPage.classList.remove('hidden');
});
