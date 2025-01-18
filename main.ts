function とめる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function みぎて (数値: number) {
    servos.P1.setAngle(60 - 数値)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("R")
        みぎにまわる(100)
    } else if (receivedNumber == 1) {
        basic.showString("L")
        ひだりにまわる(100)
    } else if (receivedNumber == 2) {
        basic.showString("F")
        まえにすすむ()
        basic.pause(200)
        とめる()
    } else if (receivedNumber == 3) {
        basic.showString("B")
        うしろにすすむ()
        basic.pause(200)
        とめる()
    } else if (receivedNumber == 4) {
        basic.showString("！")
        みぎてをふる(2)
        ひだりてをふる(2)
    } else if (receivedNumber == 5) {
        basic.showString("RH")
        みぎて(0)
    } else if (receivedNumber == 6) {
        basic.showString("LH")
        ひだりて(0)
    } else {
        basic.showString("S")
        とめる()
    }
})
function ひだりて (数値: number) {
    servos.P2.setAngle(120 - 数値)
}
function うしろにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function まえにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
input.onButtonPressed(Button.A, function () {
    うしろにすすむ()
})
function みぎにまわる (じかん: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(じかん)
    とめる()
}
input.onButtonPressed(Button.B, function () {
    まえにすすむ()
})
function ひだりてをふる (かいすう: number) {
    for (let index = 0; index < かいすう; index++) {
        ひだりて(-30)
        basic.pause(200)
        ひだりて(30)
        basic.pause(200)
    }
}
function ひだりにまわる (じかん: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(じかん)
    とめる()
}
function みぎてをふる (かいすう: number) {
    for (let index = 0; index < かいすう; index++) {
        みぎて(-30)
        basic.pause(200)
        みぎて(30)
        basic.pause(200)
    }
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
