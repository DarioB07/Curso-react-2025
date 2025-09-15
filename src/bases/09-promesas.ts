const myPromise = new Promise<string>((/*resolve*/reject) => {
    setTimeout(() => { //Tarea asincrona
        //resolve(100)
        reject('se perdio')
    }, 2000)
})

myPromise.then((myMoney) => {
    console.log(`tengo mi dinero ${myMoney}`)
}).catch((reason) => {
    console.warn(reason)
}).finally(() => {
    console.log('Nada que hacer')
})