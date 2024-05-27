const a = 1

const person = {}

person.name = 'Mizael'

person.age = 23

console.log(person)

const car = {
    rodas: 4,
    portas: 4
}

car['cor'] = 'vermelho'

console.log(car)

const nomePropriedade = 'rodas'

car[nomePropriedade] = 5

console.log(car)

console.log(car[nomePropriedade])

Object.defineProperty(car, "motor", {
    value: 2.0,
    writable: false,
})

console.log(car)

car.motor = 3

console.log(car)