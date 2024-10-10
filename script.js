const btn_up = document.querySelector('#btn_up')
const btn_left = document.querySelector('#btn_left')
const btn_stop = document.querySelector('#btn_stop')
const btn_right = document.querySelector('#btn_right')
const btn_down = document.querySelector('#btn_down')
const carro = document.querySelector('#carro')
const botoes = document.querySelector('#botoes')

let anima = null
let larguraTela = 0
let alturaTela = 0
let tamCarro = 0

const init = () => {
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.top = '0px'
    carro.style.width = '50px'
    carro.style.height = ' 50px'
    botoes.style.height = '200px'
    tamCarro = parseInt(carro.style.width)
    larguraTela = window.innerWidth - tamCarro
    alturaTela = window.innerHeight - tamCarro - parseInt(botoes.style.height)
}

const moverHorizontal = (dir) => {
    if(parseInt(carro.style.left) >= larguraTela) {
        dir = -1
    }else if(parseInt(carro.style.left) <= 0) {
        dir = 1
    }

    carro.style.left = `${parseInt(carro.style.left) + (10*dir)}px`

    anima = setTimeout(moverHorizontal, 20, dir)
}

const moverVertical = (dir) => {
    if(parseInt(carro.style.top) >= alturaTela) {
        dir = -1
    }else if(parseInt(carro.style.top) <= 0) {
        dir = 1
    }

    carro.style.top = `${parseInt(carro.style.top) + (10*dir)}px`

    anima = setTimeout(moverVertical, 20, dir)
}

btn_up.addEventListener('click', () => {
    clearInterval(anima)
    moverVertical(-1)
})

btn_left.addEventListener('click', () => {
        clearInterval(anima)
        moverHorizontal(-1)
})

btn_stop.addEventListener('click', () => {
    clearInterval(anima)
})

btn_right.addEventListener('click', () => {
    clearInterval(anima)
    moverHorizontal(1)
})

btn_down.addEventListener('click', () => {
    clearInterval(anima)
    moverVertical(1)
})

window.onload = init()