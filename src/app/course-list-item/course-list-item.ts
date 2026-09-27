import { Component, input } from '@angular/core';
import { Course } from '../Shared/Models/course';

@Component({
  imports: [],
  selector: 'app-course-list-item',
  styleUrl: './course-list-item.css',
  templateUrl: './course-list-item.html',
})
export class CourseListItem {
    // Two-way data binding
    // Since every item must be provided, use input.required<IContent>()
    course = input.required<Course>();
}
