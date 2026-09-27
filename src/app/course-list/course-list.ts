import { Component } from '@angular/core';
import { Course } from '../Shared/Models/course';
import { CourseListItem } from '../course-list-item/course-list-item';

@Component({
  imports: [CourseListItem],
  selector: 'app-course-list',
  styleUrl: './course-list.css',
  templateUrl: './course-list.html',
})
export class CourseList {

  courses: Course[] = [
      {
        id: 1,
        title: 'Foundational Angular',
        description: 'React is a library created by Meta',
        price: 100,
        hasNewCourses: false,
        soldOut: true,
        type: "Foundational"
      },
      {
        id: 2,
        title: 'Intermediate Angular',
        description: 'Angular is a framework maintained by Google',
        price: 200,
        hasNewCourses: true,
        soldOut: true,
        type: "Intermediate"
      },
      {
        id: 3,
        title: 'Foundational TypeScript',
        description: 'TypeScript is a superset type-safe language that is very popular.',
        price: 300,
        hasNewCourses: true,
        soldOut: true,
        type: "Foundational"
      },
      {
        id: 4,
        title: 'Advanced TypeScript',
        description: 'Generics, Intersection Types and more.',
        price: 400,
        hasNewCourses: true,
        soldOut: true,
        type: "Advanced"
      },
    ];

}
