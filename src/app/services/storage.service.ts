import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly STORAGE_KEY = 'courses';

  getCourses(): Course[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveCourses(courses: Course[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
  }
}
