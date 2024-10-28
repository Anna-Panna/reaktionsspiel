input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Zufall == 1) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        leben += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Zufall == 2) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        leben += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
function anzeige () {
    Zufall = randint(1, 2)
    if (Zufall == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    }
    if (Zufall == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
function gameover () {
    basic.showString("Game over")
    basic.showString("Punkte:" + punkte)
}
let Zufall = 0
let punkte = 0
punkte = 0
let leben = 3
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
    if (leben == 3) {
        basic.setLedColors(0xff0000, 0x00ff00, 0xff00ff)
    }
    anzeige()
    if (leben == 2) {
        basic.setLedColors(0xff0000, 0x00ff00, 0xffffff)
    }
    if (leben == 1) {
        basic.setLedColors(0xff0000, 0xffffff, 0xffffff)
    }
    anzeige()
    if (leben == 0) {
        basic.turnRgbLedOff()
        gameover()
    }
})
