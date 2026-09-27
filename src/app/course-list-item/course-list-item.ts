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
    clicked = output<CourseEvent>();

    toggle(): void{
      this.clicked.emit(this.course());
    }
}
