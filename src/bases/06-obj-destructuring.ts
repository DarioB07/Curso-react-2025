const person = {
    name: 'Dario',
    age: 22,
    key: 'Iroman'
}

const {name: iromanName,age,key} = person

console.log({iromanName, age, key})


interface Hero {
    name: string
    age: number
    key: string
    rank?: string
}

const useContext = ({key, name, age, rank = 'Sin rango'}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
}

const {rank, keyName, user,} = useContext(person)

const {name} = user
console.log({rank, keyName, name})

