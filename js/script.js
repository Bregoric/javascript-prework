const playGame = function(playerInput) {
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień'
        } else if (argMoveId == 2) {
            return 'papier'
        } else if (argMoveId == 3) {
            return 'nożyce'
        } else printMessage('Nie znam ruchu o id ' + argMoveId + '.')
        return 'nieznany ruch'
    }
    let computerMove = getMoveName(randomNumber)
    let playerMove = getMoveName(playerInput)
    const displayResult = function(argComputerMove, argPlayerMove) {
        printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove)
        if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis')
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis')
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis')
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz')
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywa komputer')
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz')
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Wygrywa komputer')
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygtywasz')
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz')
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz')
        } else if (argComputerMove == 'nieznany ruch' || argPlayerMove == 'nieznany ruch') {
            printMessage('Błąd gry - nieznany ruch')
        } else printMessage('Błąd gry')
    }
    console.log('Gracz wpisał: ' + playerInput)
    console.log('Wylosowana liczba to: ' + randomNumber)
    displayResult(computerMove, playerMove)
}
const playRock = document.getElementById('play-rock')
const playPaper = document.getElementById('play-paper')
const playScissors = document.getElementById('play-scissors')

playRock.addEventListener('click', function() {
    playGame(1)
})
playPaper.addEventListener('click', function() {
    playGame(2)
})
playScissors.addEventListener('click', function() {
    playGame(3)
})