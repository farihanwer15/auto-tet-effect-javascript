const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'First we feel,then we fall!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 20
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 500 / e.target.value)