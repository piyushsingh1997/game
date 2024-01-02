let computerChoise = document.getElementById('computer-choice');
let userChoice = document.getElementById('user-choice');
let result = document.getElementById('result');
let possibleChoices = document.querySelectorAll('button');

let user
let computer
let res

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
user = e.target.id
userChoice.innerHTML = user
generateComputerChoice()
getResult()

}))

function generateComputerChoice(){

    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1)
    {
        computer = "Scissors"
    }
    if(randomNumber === 2)
    {
        computer = "Rock"
    }
    if(randomNumber === 3)
    {
        computer = "Paper"

    }

    computerChoise.innerHTML = computer;
}

function getResult(){

    if(computer === user)
    {
        res = 'Its a draw!'
    }
    if(computer === 'Rock' && user === 'paper')
    {
        res = 'You lost!'
    }
    
    if(computer === 'Rock' && user === 'Scissors')
    {
        res = 'You lost!'
    }
    if(computer === 'Rock' && user === 'paper')
    {
        res = 'You Win!'
    }
    
    if(computer === 'Paper' && user === 'Scissors')
    {
        res = 'You won!'
    }
    
    if(computer === 'Paper' && user === 'rock')
    {
        res = 'You lose!'
    }
    if(computer === 'Scissors' && user === 'rock')
    {
        res = 'You won!'
    }
    if(computer === 'Scissors' && user === 'paper')
    {
        res = 'You lose!'
    }

    result.innerHTML = res
}