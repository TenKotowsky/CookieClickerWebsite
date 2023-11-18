const COOKIETEXT = document.getElementById("cookieText");
const COOKIE = document.getElementById("cookieImage")
const MUSIC = document.getElementById("backgroundMusic")
const TOGGLEMUSIC = document.querySelector(".musicButton")

let cookieClickCounter = 0
let decodedCookie = (document.cookie).split(';')

if (decodedCookie[0].split('=')[1]) {
    cookieClickCounter = Number(decodedCookie[0].split('=')[1])
    COOKIETEXT.textContent = `Cookies: ${cookieClickCounter}`
}

COOKIE.onclick = function(){
    cookieClickCounter += 1
    document.cookie = `cookies=${cookieClickCounter};`
    COOKIETEXT.textContent = `Cookies: ${cookieClickCounter}`
    let sound = new Audio("assets/sounds/click.ogg")
    sound.play()
    setTimeout(() => {
        sound = null
    }, 100)
}

TOGGLEMUSIC.onclick = function(){
    if (MUSIC.volume == 0) {
        TOGGLEMUSIC.src = "assets/images/volume.png"
        MUSIC.volume = 1
    } else {
        TOGGLEMUSIC.src = "assets/images/volume-mute.png"
        MUSIC.volume = 0
    }
}