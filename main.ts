radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        basic.showString("You win")
    } else {
        Yours = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    Mine = Hand.shift()
    basic.showNumber(Mine)
    radio.sendNumber(Mine)
})
input.onButtonPressed(Button.B, function () {
    Mine = 0
    Yours = 0
    game.setScore(0)
    basic.clearScreen()
})
let Mine = 0
let Yours = 0
let Hand: number[] = []
for (let index = 0; index <= 9; index++) {
    Hand.push(randint(1, 10))
}
basic.forever(function () {
    if (Yours != 0 && Mine != 0) {
        if (Mine > Yours) {
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
            Hand.push(Mine)
            Hand.push(Yours)
        } else if (Mine < Yours) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Asleep)
            Hand.push(Mine)
        }
        Mine = 0
        Yours = 0
        basic.pause(500)
        basic.showNumber(game.score())
    }
    if (Hand.length < 1) {
        basic.showString("You lose")
        radio.sendNumber(12)
    }
})
