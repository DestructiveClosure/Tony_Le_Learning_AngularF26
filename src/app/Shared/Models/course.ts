let uuid: string = self.crypto.randomUUID();

export interface Course {
  id: number | typeof uuid,
  title: string,
  description: string,
  price: number,
  hasNewCourses?: boolean,
  soldOut: true,
}

/*

export interface Course{
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

 */
