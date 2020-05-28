	
	
	
	
	
	
	
//% color="#EE6A50" weight=10 icon="\uf085" block="myservo"
namespace myservo {
	
	/**
	 * 舵机
	 */

    //% blockId=actuator_servo block="actuator_servo %pin|angle %angle"  group="舵机"
    //% angle.min=0  angle.max=180
    //% weight=70
    export function actuator_servo(pin: AnalogPin, angle: number): void {

        let increment = 1
        pins.servoWritePin(pin, angle)
        angle = angle + increment
        if (angle == 0)
            increment = 1
        else if (angle == 180)
            increment = -1
    
        basic.pause(100)
    }
}
