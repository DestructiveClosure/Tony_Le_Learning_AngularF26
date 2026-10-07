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
  private DEBUG = true;
  // Q7.
  private courseServ = inject(CourseService);

  protected courses = this.courseServ.courses;

  protected courseCount = this.courseServ.courseCount;
  // Ensuring there is a discount if user purchases bundle
  protected discount = .85;
  // Used the filteredCourse and made cards to represent them
  filteredCourse = computed(() =>
    this.courses().filter(course => course.type === 'Advanced'));
  // Chain computed off another computed value
  // Used the length inn the Featured Cards on the top of the application
  filteredCourseLength = computed(() => this.filteredCourse().length);
  
  // ***Bonus Mark***
  // Using this computed value to show a bundle option for the app for a discounted price
  filteredCourseCost = computed(() => this.filteredCourse().reduce((acc, curVal) => acc + curVal.price, 0));
  

  

  constructor() {
    if(this.DEBUG){
      console.log(`===From the LIST===`)
      console.log(`Filtered Courses Full Cost: `, this.filteredCourseCost());
    }
    // Creating the effect Q11.
    effect(() => {
      console.log('Course count:\n' + this.courseCount());
      console.log('Filtered Course:\n', this.filteredCourse());
    });
  }

  onCourseRemove(course: CourseEvent): void {
    // this.removeSingleCourse(course.id);
    if(this.DEBUG){
      console.log("=============================\n")
      console.log(`Course ID: ${course.id}\nCourse Action: ${course.action}`)
      console.log("=============================\n")
    }
    this.courseServ.removeCourse(course.id);
  }

  onPurchase(): void{
    alert("Bundle purchased successfully.")
  }


}
