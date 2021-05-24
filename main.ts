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
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else if (num == 5) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else if (num == 6) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    } else if (num == 7) {
        pins.digitalWritePin(DigitalPin.P7, 1)
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
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else if (num == 5) {
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (num == 6) {
        pins.digitalWritePin(DigitalPin.P6, 0)
    } else if (num == 7) {
        pins.digitalWritePin(DigitalPin.P7, 0)
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
