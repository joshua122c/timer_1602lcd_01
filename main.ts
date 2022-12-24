input.onPinPressed(TouchPin.P1, function () {
    sensors.i2cLcdDisplay_Control(Item._on)
    sensors.i2cLcdShowNumber(2, 1, 0)
})
sensors.i2cLcdInit(39)
let ds = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ds.DateTime(
2022,
12,
24,
6,
23,
34,
0
)
basic.forever(function () {
    sensors.i2cLcdShowString(1, 1, "" + ds.getYear() + "/" + ds.getMonth() + "/" + ds.getDay())
    sensors.i2cLcdShowString(2, 1, "" + ds.getHour() + "/" + ds.getMinute() + "/" + ds.getSecond())
})
