import { Routes } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { PageNotFound } from './Components/page-not-found/page-not-found';
import { App } from './app';
import { CourseListItem } from './course-list-item/course-list-item';

export const routes: Routes = [
  { path: '', component: App},
  { path: 'courses', component: CourseList },
  { path: '**', component: PageNotFound}
];
