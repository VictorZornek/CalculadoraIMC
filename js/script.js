import { Modal } from "./modal.js"

// variavéis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(event) {
    event.preventDefault() // para a página não ser recarregada ao clicar no botão de calcular IMC

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}



function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}