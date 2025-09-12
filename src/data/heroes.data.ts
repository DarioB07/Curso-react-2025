export interface Hero {
    id: number
    name: string
    owner: Owner
}

//type Owner = 'DC' | 'Marvel' //es mejor crear tipos para cuando tengo valores especificos que quiero introducir

export enum Owner {     //enumeraciones
    DC = 'DC',
    Marvel = 'Marvel',
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.DC,
  },

  {
    id: 6,
    name: 'Green Lantern',
    owner: Owner.DC,
  },
];

console.log(heroes)

//export default heroes    Una forma de exportar, pero preferiblemente usar export como arriba forma independiente