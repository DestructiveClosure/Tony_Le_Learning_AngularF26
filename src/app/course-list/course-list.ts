import { Component, inject, effect, computed, signal } from '@angular/core';
import { Course } from '../Shared/Models/course';
import { CourseListItem } from '../course-list-item/course-list-item';
import { CourseEvent } from '../Shared/Models/course-event';
import { createStructuredContentOutput } from '@angular/cli/src/commands/mcp/utils';
import { CourseService } from '../services/course-service';


@Component({
  imports: [CourseListItem],
  selector: 'app-course-list',
  styleUrl: './course-list.css',
  templateUrl: './course-list.html',
})
export class CourseList {
  private courseServ = inject(CourseService);

  protected courses = this.courseServ.courses;

  protected courseCount = this.courseServ.courseCount;
  protected discount = 50.01;

  filteredCourse = computed(() =>
    this.courses().filter(course => course.type === 'Advanced'));
  filteredCourseLength = computed(() => this.filteredCourse().length);
  filteredCourseCost = computed(() => this.filteredCourse().reduce((acc, curVal) => acc + curVal.price, 0));
  

  // Initializing the removeSingleCourse method to use
  protected removeSingleCourse = this.courseServ.removeCourse;

  constructor() {
    console.log(`===From the LIST===`)
    console.log(`Removed Single Course:\n`, this.removeSingleCourse);
    console.log(`Filtered Courses Full Cost: `, this.filteredCourseCost())
    effect(() => {
      console.log('Course count:\n' + this.courseCount());
      console.log('Filtered Course:\n', this.filteredCourse());
    });
  }

  onCourseRemove(course: CourseEvent): void {
    // this.removeSingleCourse(course.id);
    console.log("=============================\n")
    console.log(`Course ID: ${course.id}\nCourse Action: ${course.action}`)
    console.log("=============================\n")
    this.removeSingleCourse(course.id);
  }


}
