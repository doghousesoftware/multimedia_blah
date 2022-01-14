let onoff = 0
let lightSet = 0
function lights (num: number) {
    if (num == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (num == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (num == 3) {
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (num == 4) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (num == 5) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (num == 6) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (num == 7) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    onoff = 1
    servos.P0.run(20)
})
function off (num: number) {
    if (num == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (num == 2) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (num == 3) {
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else if (num == 4) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (num == 5) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (num == 6) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (num == 7) {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
input.onButtonPressed(Button.B, function () {
    servos.P0.stop()
    onoff = 0
})
basic.forever(function () {
    while (onoff == 1) {
        off(lightSet)
        basic.pause(500)
        lightSet = randint(1, 7)
        lights(lightSet)
        basic.pause(2000)
    }
})
