export type Report = {
  id: string,
  name: string,
  purchases: Array<Purchase>,
}

export type Purchase = {
  id: number, 
  category: string,
  expense: string,
  date: string,
  price: number,
}