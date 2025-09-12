const myArray: number[] = [1,2,3,4,5,6,] //Simepre cuando se cree una arreglo debemos colocarle
                                        // el tipo de dato, ya sea :number, :string

const myArray2 = structuredClone(myArray)

myArray2.push(7)

console.log(myArray, myArray2)