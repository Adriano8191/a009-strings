const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const novaFrase = frase.replaceAll('verde','rosa') 
const novaFrase1 = frase.replaceAll('azul','laranja')

console.log(novaFrase1)

const fraseMaiuscula = 'mas não deixe o gato sair'
const fraseMaiusculaFeite = fraseMaiuscula.toUpperCase()
const novaFraseFinal = (`'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${fraseMaiusculaFeite}"`)
console.log(novaFraseFinal)
