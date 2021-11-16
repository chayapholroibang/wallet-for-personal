radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        coin += -1
        basic.showLeds(`
            . . . # .
            . . . # .
            # . . # .
            . # . # .
            . . # . .
            `)
        radio.sendNumber(2)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . # .
            . . . # .
            # . . # .
            . # . # .
            . . # . .
            `)
        coin += 1
    } else if (receivedNumber == 0) {
    	
    }
})
let coin = 0
