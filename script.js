const btn_up = document.querySelector('#btn_up')
const btn_left = document.querySelector('#btn_left')
const btn_stop = document.querySelector('#btn_stop')
const btn_right = document.querySelector('#btn_right')
const btn_down = document.querySelector('#btn_down')
const carro = document.querySelector('#carro')
const botoes = document.querySelector('#botoes')

const init = () => {
    carro.style.position = 'relative'
    carro.style.left = '500px'
    carro.style.top = '100px'
}

let anima = null

const moverHorizontal = (dir) => {
    if(parseInt(carro.style.left) == 10 || (parseInt(carro.style.left) == window.innerWidth - carro.offsetWidth - 7 - 10)){
        clearInterval(anima)
    }
    carro.style.left = `${parseInt(carro.style.left) + (10*dir)}px`
}

const moverVertical = (dir) => {
    if(parseInt(carro.style.top) == 10 || parseInt(carro.style.top) == 350){
        clearInterval(anima)
    }
    carro.style.top = `${parseInt(carro.style.top) + (10*dir)}px`
}

btn_up.addEventListener('click', () => {
    clearInterval(anima)
    anima = setInterval(moverVertical, 100, -1)
})

btn_left.addEventListener('click', () => {
        clearInterval(anima)
        anima = setInterval(moverHorizontal, 100, -1)
})

btn_stop.addEventListener('click', () => {
    clearInterval(anima)
})

btn_right.addEventListener('click', () => {
    clearInterval(anima)
    anima = setInterval(moverHorizontal, 100, 1)
})

btn_down.addEventListener('click', () => {
    clearInterval(anima)
    anima = setInterval(moverVertical, 100, 1)
})

window.onload = init()