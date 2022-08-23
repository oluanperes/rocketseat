alert("Vamos fazer cálculos entre dois números.")
let firstNumber = Number(prompt("Digite o primeiro número:"))
let secondNumber = Number(prompt("Digite o segundo número:"))

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = firstNumber / secondNumber
let restDiv = firstNumber % secondNumber


alert(`
  Segue resultados dos cálculos:
  ${firstNumber} + ${secondNumber} = ${sum}
  ${firstNumber} - ${secondNumber} = ${sub}
  ${firstNumber} * ${secondNumber} = ${mult}
  ${firstNumber} / ${secondNumber} = ${div}
  O resto da divisão de ${firstNumber} por ${secondNumber} é ${restDiv}
`)

if (firstNumber == secondNumber) {
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes.")
}

if (sum%2 == 0) {
  alert(`
    Por titulo de curiosidade o resultado da soma é de um número par
  `)
} else {
  alert(`
    Por titulo de curiosidade o resultado da soma é de um número impar
  `)
}