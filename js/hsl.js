const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.getElementById('main');

btn.addEventListener('click', function () {
  const hsl = `hsl(${randomNumber()},${randomPercent()}%,${randomPercent()}%)`;
  main.style.backgroundColor = hsl;
  color.textContent = hsl;
  color.style.color = hsl;
});

function randomNumber() {
  return Math.floor(Math.random() * 359);
}
function randomPercent() {
  return Math.floor(Math.random() * 101);
}
