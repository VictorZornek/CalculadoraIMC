// variavéis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')



form.onsubmit = function(event) {
    event.preventDefault() // para a página não ser recarregada ao clicar no botão de calcular IMC

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalWrapper.classList.add('open')
    modalMessage.innerText = message
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}