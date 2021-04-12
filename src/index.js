const colorPairs = [
  ['ad182b', 'd19ca6'],
  ['edaab2', '5f543f'],
  ['d19ca6', 'ae530c'],
  ['acbbb8', 'b5934c'],
  ['b46427', 'c2cccb'],
];
let currentColor = 0;

function initApp() {
  setTimeout(() => setColorPair(getRandomInt(5)), 300);
  const colorInterval = setInterval(cycleColor, 20000);
}

function setColorPair(index) {
  currentColor = index;
  document.body.style.setProperty('--color-font', `#${colorPairs[index][0]}`);
  document.body.style.setProperty('--color-background', `#${colorPairs[index][1]}`);
}

function cycleColor(e) {
  if (currentColor == colorPairs.length - 1) currentColor = 0;
  else currentColor++;

  document.body.style.setProperty('--color-font', `#${colorPairs[currentColor][0]}`);
  document.body.style.setProperty('--color-background', `#${colorPairs[currentColor][1]}`);
}

initApp();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
