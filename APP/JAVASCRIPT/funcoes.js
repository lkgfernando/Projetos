let calc = (x1, x2, op) => {
    return eval(`${x1} ${op} ${x2}`)
}


console.log(calc(5,6, '*'))


let agora = new Date()

console.log(agora.toLocaleDateString('pt-BR'))