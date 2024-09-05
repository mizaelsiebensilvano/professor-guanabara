// var vel = 55.5
// 	console.log(`A velocidade do meu carro é ${vel} km/h`) 
//         if (vel > 60) {
// 	console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
//     } else {
//     console.log(`Dirija sempre usando o cinto de segurança.`)
// }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

// var país = 'Brasil'
//     console.log(`Vivendo em ${país}`)  
//     if (país === 'Brasil') {
//         console.log(`Você é Brasileiro!`)
//     } else if (país != 'Brasil') {
//         console.log(`Você é estrangeiro!`)
//     }

// var idade = 22
//     if(idade < 18) {
//         console.log(`Menor de idade.`)
//     } else if(idade > 18) {
//         console.log(`Maior de idade.`)
//     }

// function verificarIdade(idade){
//     if(idade < 18){
//         return 'Menor de idade'
//     } else if(idade === 18) {
//         return 'Você tem 18 anos'
//     } else {
//         return 'Maior de idade'
//     }
// }

// console.log(verificarIdade(15))
// console.log(verificarIdade(18))
// console.log(verificarIdade(22))

// function verificarRua(rua) {
//     if (rua <= 5) {
//         return 'Rua Vereador Carlos Hirakawa'
//     } else if (rua >= 6 && <= ) {
//         return 'Rua Governador Adhemar de Barros'
//     } else if (rua >= 10) {
//         return 'Rua Governador Lucas Nogueira Garces'
//     }
// }

// console.log(verificarRua(3))
// console.log(verificarRua(8))
// console.log(verificarRua(15))

var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
       break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('[ERRO! Dia inválido')
        break
    }

    








