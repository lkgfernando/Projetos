/*function minhaFuncao(i,j){

    console.log("Hello Word " + i + " " + j)
}


minhaFuncao('Fernando','Jose')

var fazerSuco = (i,j,y) => {
    console.log(`Seu suco será de ${i} com ${j}  é ${(y == true ? 'cremoso' : 'Aguado')}`)
}

fazerSuco('Laranja', 'Couve', true)
*/

const cincoCentavos = 0.05
const dezCentavos = 0.10
const vintecincoCentavos = 0.25
const cinquentaCentavos = 0.50
const umReal = 1.00
const doisReais = 2.00
const cincoReais = 5.00
const dezReais = 10.00
const vinteReais = 20.00
const cinquentaReais = 50.00
const cemReais = 100.00

const troco = (a, b, c, d, e, f, g, h, i, j, k) => {
    let total_troco = 0
    let cincoCent = a * cincoCentavos
    let dezCent = b * dezCentavos
    let vintecincoCent = c * vintecincoCentavos
    let cinquentaCent = d * cinquentaCentavos
    let umRel = e * umReal
    let doisRel = f * doisReais
    let cincoRel = g * cincoReais
    let dezRel = h * dezReais
    let vinteRel = i * vinteReais
    let cinquentaRel = j * cinquentaReais
    let cemRel = k * cemReais
    console.log('Cinco Centavos: R$' + cincoCent)
    console.log('Dez Centavos: R$' + dezCent)
    console.log('Vinte e Cinco Centvavos: R$' + vintecincoCent)
    console.log('Cinquenta Centavos: R$' + cinquentaCent)
    console.log('Um Real: R$' + umRel)
    console.log('Dois Reais: R$' + doisRel)
    console.log('Cinco Reais: R$' + cincoRel)
    console.log('Dez Reais: R$' + dezRel)
    console.log('Vinte Reais: R$' + vinteRel)
    console.log('Cinquenta Reais: R$' + cinquentaRel)
    console.log('Cem Reais: R$' + cemRel)

    total_troco = (cincoCent + dezCent + vintecincoCent + cinquentaCent +
        umRel + doisRel + cincoRel + dezRel + vinteRel + cinquentaRel + cemRel)
    console.log("Total do Caixa: R$" + total_troco)

    

}


troco(5, 2, 10, 5, 8, 6, 4, 0, 5, 5, 8)