let lautstärke = 0
basic.showString("hi!")
basic.forever(function () {
    lautstärke = input.soundLevel()
    if (lautstärke < 50) {
        basic.setLedColors(0x00ff00, 0x000000, 0x000000)
    } else if (lautstärke < 90) {
        basic.setLedColors(0x00ff00, 0xff8000, 0x000000)
    } else if (lautstärke > 90) {
        basic.setLedColors(0x00ff00, 0xff8000, 0xff0000)
    } else {
        basic.showString("Fehler")
    }
})
