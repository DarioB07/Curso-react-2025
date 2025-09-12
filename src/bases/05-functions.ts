function greet (name: string):string { //Funcion normal
    return `${name}`
}

const greet2 = (name: string): string => `Hola ${name}`//Arrow function/funcion de flecha simplificada sin return
    

const message2 = greet2('Daff')
const message = greet('Te amo mucho Mariluz feita')

console.log(message2, message)


//function tipo number

function number(num: number): number { //funcion normal
    return num
}

const mesaggeNum = number(123)

const number2 = (num: number): number => { //Arrow function
    return num
}

const mesaggeNum2 = number2(456)

console.log(mesaggeNum, mesaggeNum2)



interface User { //Interface colocandole el tipo string
    uid: string,
    username: string
    age: number
}
function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El-papi2',
        age: 123
    }
}

const user = getUser()
console.log(user)


const getUser2 = () => {
    return {
        uid: 'qBC-123',
        username: '-papi2'
    }
}

const getUser3 = () => ({ // Arrow function, simplificada sin return para un objeto
        uid: 'qBC-123',
        username: '-papi2'
})

const user3 = getUser3()
const user2 = getUser2()
console.log(user2, user3)



const myNumbers: number[] = [1,2,3,4,5]//funcion larga
 myNumbers.forEach(function (value){
    console.log(value)
    })

    myNumbers.forEach((value) => { //Aroow function
        console.log({value})
    })

    myNumbers.forEach(console.log)