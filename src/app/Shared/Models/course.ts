export interface Course {
  id: number,
  title: string,
  description: string,
  price: number | string,
  hasNewLocations?: false,
  soldOut: true
}
