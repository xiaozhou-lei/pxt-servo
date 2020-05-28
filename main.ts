basic.forever(function () {
    servos.actuator_servo(AnalogPin.P2, 90)
    basic.pause(1000)
    servos.actuator_servo(AnalogPin.P2, 0)
    basic.pause(1000)
})
