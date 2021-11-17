const options = {
  short: ['R', 'P', 'S'],
  value: ['Rock', 'Paper', 'Scissors']
}

let challengerOption
let isCorrectValue
let playAgain = true
let wins = 0
let ties = 0
let losses = 0
let scoreBoard = []

function startGame() {
  do {
    challengerOption = prompt('Ready!? ... Rock, Paper or Scissors?: (type R for Rock, P for Paper or S for Scissors)')

    const random = Math.floor(Math.random() * options.short.length)
    const computerOption = options.short[random]
    const computerValue = options.value[random]

    if(challengerOption === null) break

    if (options.short.includes(challengerOption)) {
      if (challengerOption === 'R' && computerOption === 'S' || challengerOption === 'P' && computerOption === 'R' || challengerOption === 'S' && computerOption === 'P') {
        wins++
        alert(`Your opponent chose ${computerValue}. You won!`)
        playAgain = confirm('Wanna play again?')
      } else if (challengerOption === 'R' && computerOption === 'R' || challengerOption === 'P' && computerOption === 'P' || challengerOption === 'S' && computerOption === 'S') {
        ties++
        alert(`Your opponent chose ${computerValue}. Tied!`)
        playAgain = confirm('Wanna play again?')
      } else {
        losses++
        alert(`Your opponent chose ${computerValue}. You lost!`)
        playAgain = confirm('Wanna play again?')
      }
  
      alert(`Score board \nWins: ${wins}\nTies: ${ties}\nLosses: ${losses}`)
    } else {
      alert('That is not a correct option for the game, please type R for Rock, P for Paper or S for Scissors.')
      break
    }
  } while (playAgain)
}

startGame()