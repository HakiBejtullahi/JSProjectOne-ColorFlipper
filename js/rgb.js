const btn = document.getElementById('btn');
const main = document.getElementById('main');
const color = document.querySelector('.color');
function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

btn.addEventListener('click', function () {
  const rgb = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  main.style.backgroundColor = rgb;
  color.textContent = rgb;
  color.style.color = rgb;
});
