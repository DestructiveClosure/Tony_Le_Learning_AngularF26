import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Course} from './Shared/Models/course';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TonyLeLearningAngularF26');
  name: string = 'Tony';
  height: number = 5.11;

  courses: Course[] = [
    {
      id: 1,
      title: 'Advanced React',
      description: 'React is a library created by Meta',
      price: 100,
      hasNewLocations: false,
      soldOut: true,
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Angular is a framework maintained by Microsofts',
      price: 200,
      hasNewLocations: true,
      soldOut: true,
    },
  ];

  courseInfo(course: string): void {
    alert(`The course you are taking is ${course}`);
  }
}
