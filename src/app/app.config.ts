import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { COURSE_CONFIG } from './Shared/Models/course-config';
import { CourseService } from './services/course-service';
import { MockCourseService } from './services/mock-course-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: COURSE_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'all'
      }
    },
    {
      provide: CourseService,
      useClass: MockCourseService
    }
  ]
};
