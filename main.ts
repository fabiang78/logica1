basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(1000)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("¡BOOOO!")
        basic.pause(1000)
        basic.clearScreen()
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showNumber(1)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showNumber(0)
    }
})
