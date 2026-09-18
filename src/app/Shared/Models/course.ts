let uuid: string = self.crypto.randomUUID();

export interface Course {
  id: number | typeof uuid,
  title: string,
  description: string,
  price: number,
  hasNewLocations?: boolean,
  soldOut: true,
}
