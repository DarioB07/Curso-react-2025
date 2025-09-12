const characterName = ['Goku', 'Vegueta', 'Trunks']

const [, , trunks] = characterName  //Las llaves [] es para desestructurar arreglos, y las comas ,
                                    //son para descartar a goku, vegueta y solo que aparezca trunks

console.log({trunks})



const returnsArrayFn = () => {
    return ['ABC', 123] as const
}

const [letters, numbers] = returnsArrayFn()

console.log(letters, numbers)



//TAREA

const useState1 = (value: string) => {
    return [value,(newValue: string) => {
        console.log(newValue)
    }] as const
}

const [name1, setName1] = useState1('goku')
console.log(name1)
setName1('Vugueta')

const useState = (inicial: string) => {
    return [inicial, (newValue: string) => {
        console.log(newValue)
    }] as const
}

const [name, setName] = useState('Dario')
console.log(name)
setName('goku')