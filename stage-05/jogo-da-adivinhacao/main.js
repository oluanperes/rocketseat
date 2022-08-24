// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randonNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
enterKey()

// funções
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão (formulario por padrão, usa o botão para submeter(enviar) o formulario)
  const inputNumber = document.querySelector('#inputNumber')
  
  if (Number(inputNumber.value) == randonNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enterKey() {
  document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
  
      handleResetClick()
    }
  })
}

