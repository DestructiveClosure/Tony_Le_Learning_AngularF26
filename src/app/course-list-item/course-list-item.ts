import { Component, input, output } from '@angular/core';
import { Course } from '../Shared/Models/course';
import { CourseEvent } from '../Shared/Models/course-event';



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
    first = input.required<boolean>();
    last = input.required<boolean>();
    even = input.required<boolean>();
    odd = input.required<boolean>();
    index = input.required<number>();
    count = input.required<number>();
    clicked = output<CourseEvent>();

    toggle(): void{
      this.clicked.emit(this.course());
    }
}
