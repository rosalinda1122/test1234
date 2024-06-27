const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timeoutId;
startButton.addEventListener('click', () => {
  // Wyłącz przycisk "Start"
  startButton.disabled = true;
  // Rozpocznij zmianę koloru tła
  changeBackgroundColor();
});
stopButton.addEventListener('click', () => {
  // Wyczyść timeout, aby zatrzymać zmianę koloru
  clearTimeout(timeoutId);
  // Włącz przycisk "Start"
  startButton.disabled = false;
});
function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  timeoutId = setTimeout(changeBackgroundColor, 1000);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

 

