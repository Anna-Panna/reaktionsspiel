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
    if (Zufall == 1) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        punkte += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
function anzeige () {
    Zufall = randint(0, 1)
    if (Zufall == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
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
let Zufall = 0
let punkte = 0
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
    anzeige()
    if (leben == 1) {
        basic.setLedColors(0xff0000, 0xffffff, 0xffffff)
    }
    anzeige()
})
