let uuid: string = self.crypto.randomUUID();

export interface Course {
  id: number,
  title: string,
  description: string,
  price: number,
  hasNewCourses?: boolean,
  soldOut: true,
  type?: string,
  action?: 'opened' | 'favourited',
  img?: string,
}
