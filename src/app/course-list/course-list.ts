import { Component, inject, effect, computed } from '@angular/core';
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
  /**
   * Comment from Matt
   * Your braces here cause the results to get thrown away
   * Youre treating it as an expression and in reality its a ststement so the curly
   * brackets you have do let the expression run - however immedatly get thrown away and make
   * the whole statment return false
   *
   * Your OLD way
   *
   *   filteredCourse = computed(() =>
   *       this.courses().filter((course) => { course.type === "Advanced"; }));
   *
   *       working way below
   */
  filteredCourse = computed(() =>
    this.courses().filter(course => course.type === 'Advanced'));

  protected removeSingleCourse = this.courseServ.removeCourse;

  constructor() {
    console.log(`Removed Single Course:\n`, this.removeSingleCourse);
    effect(() => {
      console.log('Course count:\n' + this.courseCount());
      console.log('Filtered Course:\n', this.filteredCourse());
    });
  }

  onCourseOpen(course: CourseEvent): void {
    console.log('===============\n');
    console.log('ID: ' + course.id + '\nACTION: ' + course.action);
    console.log('===============\n');
  }
}
