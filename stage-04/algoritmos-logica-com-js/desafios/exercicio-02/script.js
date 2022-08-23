let average = 7

const students = [
{
  name: "Luan",
  firstTest: 7,
  secondTest: 9,
},
{
  name: "Leticia",
  firstTest: 8,
  secondTest: 9,
},
{
  name: "João",
  firstTest: 4,
  secondTest: 5,
},
{
  name: "Maria",
  firstTest: 3,
  secondTest: 2,
},
]

// criação da função para cálculo da média
function calcAverageStudents(student) {
  return (student.firstTest + student.secondTest) / 2
}

//execução
for (let student of students) {
  let resultAverageStudents = calcAverageStudents(student)

  if (resultAverageStudents >= average) {
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${resultAverageStudents}\n
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `)
  } else {
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${resultAverageStudents}\n
      Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }
}