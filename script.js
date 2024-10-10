const btn_up = document.querySelector('#btn_up')
const btn_left = document.querySelector('#btn_left')
const btn_stop = document.querySelector('#btn_stop')
const btn_right = document.querySelector('#btn_right')
const btn_down = document.querySelector('#btn_down')
const caixa = document.querySelector('#caixa')
const botoes = document.querySelector('#botoes')

let anima = null
let larguraTela = 0
let alturaTela = 0
let tamCaixa = 0

const init = () => {
    caixa.style.position = 'relative'
    caixa.style.left = '0px'
    caixa.style.top = '0px'
    caixa.style.width = '50px'
    caixa.style.height = ' 50px'
    botoes.style.height = '200px'
    tamCaixa = parseInt(caixa.style.width)
    larguraTela = window.innerWidth - tamCaixa
    alturaTela = window.innerHeight - tamCaixa - parseInt(botoes.style.height)
}

const moverHorizontal = (dir) => {
    if(parseInt(caixa.style.left) >= larguraTela) {
        dir = -1
    }else if(parseInt(caixa.style.left) <= 0) {
        dir = 1
    }

    caixa.style.left = `${parseInt(caixa.style.left) + (10*dir)}px`

    anima = setTimeout(moverHorizontal, 20, dir)
}

const moverVertical = (dir) => {
    if(parseInt(caixa.style.top) >= alturaTela) {
        dir = -1
    }else if(parseInt(caixa.style.top) <= 0) {
        dir = 1
    }

    caixa.style.top = `${parseInt(caixa.style.top) + (10*dir)}px`

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