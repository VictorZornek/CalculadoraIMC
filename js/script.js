// importações de módulos
import { Modal } from "./modal.js"
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber } from "./utils.js"

// variavéis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


form.onsubmit = function(event) {
    event.preventDefault() // para a página não ser recarregada ao clicar no botão de calcular IMC

    const weight = inputWeight.value
    const height = inputHeight.value


    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()


    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}


function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}