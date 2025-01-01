var scores = {
    human: 0,
    computer: 0
}
var rules = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' }
}
var choices = Object.keys(rules)

function playGame() {
    [...Array(5)].forEach(() => {
        playRound()
    });

    console.log("Game over")

    if (scores.human > scores.computer) {
        console.log(`You won; ${scores.human} to ${scores.computer}`)
    } else if (scores.computer > scores.human) {
        console.log(`You lose; ${scores.human} to ${scores.computer}`)
    } else {
        console.log(`You tied; ${scores.human} to ${scores.computer}`)
    }
}

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    
    if (doesBeat(computerChoice, humanChoice)) {
        console.log(`You lose; ${computerChoice} beats ${humanChoice}`)
        scores.computer++
    } else if (doesBeat(humanChoice, computerChoice)) {
        console.log(`You win; ${humanChoice} beats ${computerChoice}`)
        scores.human++
    } else {
        console.log(`You tied; ${humanChoice} vs ${computerChoice}`)
    }
}

function doesBeat(first, second) {
    return (rules[first].beats == second)
}

function getComputerChoice() {
    return choices[random(0,2)]
}

function getHumanChoice() {
    let choice = prompt("enter your choice") 
    console.assert("invalid choice", choices.includes(choice))
    return choice.toLowerCase()  
}

function random(min, max) {
    return Math.floor((min + Math.random() * (max - min + 1)))
}
