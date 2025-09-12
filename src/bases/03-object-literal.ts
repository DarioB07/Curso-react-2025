interface Person {
    firstName: string,
    lastName: string,
    age: number,
    adress: Adress
}

interface Adress {
    city: 'new york',
    postalCode: 'abc123'
}

const iromen: Person = {
    firstName: 'Dario',
    lastName: 'Burbano',
    age: 22,
    adress: {
        city: 'new york',
        postalCode: 'abc123'
    }
}



console.log(iromen)

// const spiderman = structuredClone(iromen) //Esta estructura structuredClone nos ayuda a clonar el objeto, 
//                                           //y se puede modificar el valor

// spiderman.firstName = 'Daniel'
// spiderman.lastName = 'Hernandez'
// spiderman.age = 23
// spiderman.adress.city = 'san jose'
// spiderman.adress.postalCode = '1234'

// console.log(iromen, spiderman)