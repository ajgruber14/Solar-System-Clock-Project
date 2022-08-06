setInterval(setClock, 1000)

const seconds = document.querySelector('[data-seconds]')
const minutes = document.querySelector('[data-minutes]')
const hours   = document.querySelector('[data-hours]')

function setClock() {
    const currentDate  = new Date
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio   = (minutesRatio + currentDate.getHours()) / 12

    setRotation(seconds, secondsRatio)
    setRotation(minutes, minutesRatio)
    setRotation(hours,   hoursRatio )
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()