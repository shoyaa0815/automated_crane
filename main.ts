function autoBlue_back () {
    Gigotools.ddmmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    1
    )
    Gigotools.ddmmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    1
    )
    basic.pause(3300)
    Stop()
    pins.servoWritePin(AnalogPin.P8, 130)
    basic.pause(550)
    Stop()
    motor.continuousServo(motor.ServoChannel.P12, motor.SvconShaft.Left)
    basic.pause(1300)
    Stop()
    motor.continuousServo(motor.ServoChannel.P12, motor.SvconShaft.Right)
    basic.pause(1300)
    Stop()
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        pins.servoWritePin(AnalogPin.P8, 80)
        basic.pause(500)
    }
    Stop()
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        Gigotools.ddmmotor(
        AnalogPin.P8,
        255,
        DigitalPin.P1,
        0
        )
        Gigotools.ddmmotor(
        AnalogPin.P2,
        255,
        DigitalPin.P12,
        0
        )
        basic.pause(300)
    }
    Stop()
    basic.pause(300)
    basic.showIcon(IconNames.Yes)
    radio.sendString("task")
}
function autoRed_back () {
    Gigotools.ddmmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    1
    )
    Gigotools.ddmmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    1
    )
    basic.pause(700)
    Stop()
    pins.servoWritePin(AnalogPin.P8, 150)
    basic.pause(100)
    Stop()
    motor.continuousServo(motor.ServoChannel.P12, motor.SvconShaft.Left)
    basic.pause(1400)
    Stop()
    motor.continuousServo(motor.ServoChannel.P12, motor.SvconShaft.Right)
    basic.pause(1350)
    Stop()
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        pins.servoWritePin(AnalogPin.P8, 80)
        basic.pause(500)
    }
    Stop()
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        Gigotools.ddmmotor(
        AnalogPin.P8,
        255,
        DigitalPin.P1,
        0
        )
        Gigotools.ddmmotor(
        AnalogPin.P2,
        255,
        DigitalPin.P12,
        0
        )
        basic.pause(300)
    }
    Stop()
    basic.pause(300)
    basic.showIcon(IconNames.Yes)
    radio.sendString("task")
}
function autoGreen_back () {
    Gigotools.ddmmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    1
    )
    Gigotools.ddmmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    1
    )
    basic.pause(1700)
    Stop()
    pins.servoWritePin(AnalogPin.P8, 150)
    basic.pause(500)
    Stop()
    motor.continuousServo(motor.ServoChannel.P12, motor.SvconShaft.Left)
    basic.pause(1400)
    Stop()
    motor.continuousServo(motor.ServoChannel.P12, motor.SvconShaft.Right)
    basic.pause(1200)
    Stop()
    while (pins.digitalReadPin(DigitalPin.P14) == 1) {
        pins.servoWritePin(AnalogPin.P8, 80)
        basic.pause(500)
    }
    Stop()
    while (pins.digitalReadPin(DigitalPin.P16) == 1) {
        Gigotools.ddmmotor(
        AnalogPin.P8,
        255,
        DigitalPin.P1,
        0
        )
        Gigotools.ddmmotor(
        AnalogPin.P2,
        255,
        DigitalPin.P12,
        0
        )
        basic.pause(300)
    }
    Stop()
    basic.pause(300)
    basic.showIcon(IconNames.Yes)
    radio.sendString("task")
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "redtoauto") {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . . #
            `)
        autoRed_back()
    } else if (receivedString == "bluetoauto") {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
        autoBlue_back()
    } else if (receivedString == "greentoauto") {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            `)
        autoGreen_back()
    }
})
function setup () {
	
}
function Stop () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
radio.setGroup(24)
radio.setTransmitPower(7)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
basic.showLeds(`
    . # # # .
    # . . . .
    . # # # .
    . . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        autoRed_back()
        basic.pause(500)
        autoGreen_back()
        basic.pause(500)
        autoBlue_back()
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("task")
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
