def BACK():
    motor.motor_control2(motor.MotorChannel.E, motor.MotorShaftDirection.LOW, 255)
    motor.motor_control2(motor.MotorChannel.F, motor.MotorShaftDirection.HIGH, 255)
def LEFT():
    motor.motor_control2(motor.MotorChannel.E, motor.MotorShaftDirection.HIGH, 220)
    motor.motor_control2(motor.MotorChannel.F, motor.MotorShaftDirection.HIGH, 220)
def STOP():
    motor.motor_stop1(motor.MotorChannel.E)
    motor.motor_stop1(motor.MotorChannel.F)
    motor.motor_stop1(motor.MotorChannel.G)
    motor.continuous_servo(motor.ServoChannel.P1, motor.SvconShaft.STOP)
def RIGHT():
    motor.motor_control2(motor.MotorChannel.E, motor.MotorShaftDirection.LOW, 220)
    motor.motor_control2(motor.MotorChannel.F, motor.MotorShaftDirection.LOW, 220)
def FRONT():
    motor.motor_control2(motor.MotorChannel.E, motor.MotorShaftDirection.HIGH, 255)
    motor.motor_control2(motor.MotorChannel.F, motor.MotorShaftDirection.LOW, 255)
# เมื่อได้รับข้อความทาง radio

def on_received_string(receivedString):
    # ข้ามข้อความที่ไม่ใช่คำสั่งควบคุม เช่น buttonState:nostate
    if receivedString.index_of("buttonState:") == 690:
        return
    if receivedString == "FRONT":
        FRONT()
    elif receivedString == "BACK":
        BACK()
    elif receivedString == "LEFT":
        LEFT()
    elif receivedString == "RIGHT":
        RIGHT()
    elif receivedString == "OUT":
        motor.motor_control2(motor.MotorChannel.G, motor.MotorShaftDirection.HIGH, 255)
    elif receivedString == "IN":
        motor.motor_control2(motor.MotorChannel.G, motor.MotorShaftDirection.LOW, 255)
    elif receivedString == "UP":
        motor.continuous_servo(motor.ServoChannel.P1, motor.SvconShaft.RIGHT)
    elif receivedString == "DOWN":
        motor.continuous_servo(motor.ServoChannel.P1, motor.SvconShaft.LEFT)
    elif receivedString == "STOP":
        STOP()
radio.on_received_string(on_received_string)

radio.set_group(69)
radio.set_transmit_power(7)
radio.set_frequency_band(69)
basic.show_icon(IconNames.HEART)