// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = 
    document.body.classList.contains('dark') 
    ? 'Change Theme ☀️' 
    : 'Change Theme 🌗';
});

// Say hi button
const hiBtn = document.getElementById('hiBtn');
hiBtn.addEventListener('click', () => {
  alert("Hey there! Thanks for stopping by. - Rizan ✌️");
});
