import { TestBed } from '@angular/core/testing';
import { MockCourseService } from './mock-course-service';

describe('MockCourseService', () => {
  let service: MockCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
