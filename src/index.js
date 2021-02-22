const colorPairs = [
  ['ad182b', 'd19ca6'],
  ['edaab2', '5f543f'],
  ['d19ca6', 'ae530c'],
  ['acbbb8', 'b5934c'],
  ['b46427', 'c2cccb']
];
let currentColor = 0;

function initApp() {
  let colorInterval = setInterval(changeColor, 9000);
}

function changeColor() {
  if (currentColor == colorPairs.length - 1) currentColor = 0;
  else currentColor++;
  
  document.body.style.setProperty('--primary-color', `#${colorPairs[currentColor][0]}`);
  document.body.style.setProperty('--secondary-color', `#${colorPairs[currentColor][1]}`);
}

initApp();
