const countries = [
    'United States of America', 'Iran', 'Ukraine', 'United Kingdom of England', 'Ireland',
    'Egypt', 'Chad', 'Japan', 'China', 'Russia', 'Poland', 'Mongolia', 'Mexico', 'Canada'
]

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getColor(num) {
  if (isPrime(num)) return '#E74C3C';  // red
  if (num % 2 !== 0) return '#F39C12'; // yellow
  return '#006B54';                    // Siena green, hehe
}

const container = document.getElementById('number-container');

console.log(document.getElementById('number-container'));

for (let i = 0; i <= 101; i++) {
  //Create a new <div> element
  const box = document.createElement('div');

  // Give it the CSS class for styling
  box.classList.add('number-box');

  box.textContent = i;

  box.style.backgroundColor = getColor(i);

  container.appendChild(box);
}

