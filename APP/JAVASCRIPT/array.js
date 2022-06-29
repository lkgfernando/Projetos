
let numbers = [1,2,3,4]

let pessoas = [
    { nome: 'Aluno 1' },
    { nome: 'Aluno 2' },
    { nome: 'Aluno 3' }
]

console.log('Antes: ', pessoas)

pessoas.push({ nome:'Fernando' })
pessoas.push({ nome:'Kauan' })

console.log('Depois', pessoas)

pessoas.forEach(el => {
    console.log(`Olá aluno ${el.nome}` )
})