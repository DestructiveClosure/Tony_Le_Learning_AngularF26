import { Service, signal } from '@angular/core';
import { Course } from '../Shared/Models/course';

@Service()
export class CourseService {
    private courseList = signal<Course[]>([
        {
        id: 1,
        title: 'Foundational Angular',
        description: 'React is a library created by Meta',
        price: 100,
        hasNewCourses: false,
        soldOut: true,
        type: "Foundational",
        action: 'favourited',
        img: './angular.png'
      },
      {
        id: 2,
        title: 'Intermediate Angular',
        description: 'Angular is a framework maintained by Google',
        price: 200,
        hasNewCourses: true,
        soldOut: true,
        type: "Intermediate",
        action: 'favourited',
        img: './realDevelopment.png'
      },
      {
        id: 3,
        title: 'Foundational TypeScript',
        description: 'TypeScript is a superset type-safe language that is very popular.',
        price: 300,
        hasNewCourses: true,
        soldOut: true,
        type: "Foundational",
        action: 'opened',
        img: './realDevelopmentTypeScript.png'
      },
      {
        id: 4,
        title: 'Advanced TypeScript',
        description: 'Generics, Intersection Types and more.',
        price: 400,
        hasNewCourses: true,
        soldOut: true,
        type: "Advanced",
        action: 'opened',
        img: './realDevelopmentTypeScript2.png',
      },
    ]);

    courses = this.courseList.asReadonly();
  

    addCourse(c: Course): void {
        this.courseList.update((oldArr) => [...oldArr, c]);
    }
}
