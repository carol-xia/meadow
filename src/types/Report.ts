export type Report = {
  id: string,
  name: string,
  purchases: Array<string>, //array of purchase ids
}

export type Purchase = {
  id: string,
  reportId: string,
  category: string,
  expense: string,
  date: string,
  price: number,
}