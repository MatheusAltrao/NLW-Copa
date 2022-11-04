function createGame(player1, hour, player2) {
  return `
  
  <li>
      <img src="assets/flags/${player1}.svg" alt="">
      <strong>${hour}</strong>
       <img src="assets/flags/${player2}.svg" alt="">
  </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}


const app = document.getElementById("cards").innerHTML = createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
  createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland')) +
  createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))
  ;

/* buttons */


const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')

const body = document.querySelector('body')

yellow.addEventListener('click', () => {
  body.classList.remove('blue')
  body.classList.remove('green')

  blue.classList.remove('clicked')
  green.classList.remove('clicked')

  yellow.classList.add('clicked')
})


green.addEventListener('click', () => {
  body.classList.remove('blue')
  body.classList.remove('yellow')
  body.classList.add('green')

  blue.classList.remove('clicked')
  yellow.classList.remove('clicked')

  green.classList.add('clicked')
})


blue.addEventListener('click', () => {
  body.classList.remove('yellow')
  body.classList.remove('green')
  body.classList.add('blue')

  green.classList.remove('clicked')
  yellow.classList.remove('clicked')

  blue.classList.add('clicked')
})