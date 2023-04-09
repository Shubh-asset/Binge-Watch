// Script for the Get Started button
const emailInput = document.getElementById('email');
const getStartedButton = document.getElementById('get-started');

getStartedButton.addEventListener('click', () => {
  alert(`Thank you for signing up with ${emailInput.value}!`);
});

// Script for the FAQ dropdown
const dropdown = document.getElementsByClassName('dropdown')[0];
const dropdownContent = document.getElementsByClassName('dropdown-content')[0];

dropdown.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
}
