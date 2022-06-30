const colors = [
  'green',
  'red',
  'yellow',
  'pink',
  'blue',
  'lightblue',
  'lightred',
  'skyblue',
  'grey',
  'orange',
  'orangered',
  'lightgreen',
  'purple',
  'brown',
  'yellowgreen',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.getElementById('main');

btn.addEventListener('click', function () {
  // get random number 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  main.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
