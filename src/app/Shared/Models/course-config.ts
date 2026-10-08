import {InjectionToken} from "@angular/core";

export interface CourseConfig {
    apiBaseURL: string,
    defaultCategory: string
}

export const COURSE_CONFIG = new InjectionToken<CourseConfig>('course.config');
