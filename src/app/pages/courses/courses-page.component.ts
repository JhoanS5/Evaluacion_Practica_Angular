import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Course, Level } from '../../models/course.model';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { RequiredAsteriskDirective } from '../../directives/required-asterisk.directive';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'courses-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseItemComponent, RequiredAsteriskDirective],
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPage implements OnInit {
  courses: Course[] = [];
  editingCourse: Course | null = null; // curso que estamos editando
  formModel: Partial<Course> = {}; // modelo temporal para el formulario
  levels: Level[] = ['Beginner', 'Intermediate', 'Advanced'];

  // Filtros
  filterCategory: string = '';
  filterLevel: Level | '' = '';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.courses = this.storage.getCourses();
  }

  private updateStorage() {
    this.storage.saveCourses(this.courses);
  }

  // --- Métodos de formulario ---
  onSubmit(form: NgForm) {
    if (form.invalid) return;

    if (this.editingCourse) {
      // Editar curso existente
      this.courses = this.courses.map(c =>
        c.id === this.editingCourse?.id ? { ...this.formModel, id: c.id, active: c.active } as Course : c
      );
      this.editingCourse = null;
    } else {
      // Crear curso nuevo
      const newCourse: Course = {
        ...(this.formModel as Course),
        id: crypto.randomUUID(),
        active: true,
      };
      this.courses.push(newCourse);
    }

    this.updateStorage();
    form.resetForm();
    this.formModel = {};
  }

  onEdit(course: Course) {
    this.editingCourse = course;
    this.formModel = { ...course }; // copiamos valores al form
  }

  onToggleActive(course: Course) {
    this.courses = this.courses.map(c =>
      c.id === course.id ? { ...c, active: !c.active } : c
    );
    this.updateStorage();
  }

  onDelete(course: Course) {
    this.courses = this.courses.filter(c => c.id !== course.id);
    this.updateStorage();
  }

  onCancel(form: NgForm) {
    form.resetForm();
    this.editingCourse = null;
    this.formModel = {};
  }

  // --- Métodos de filtros ---
  get filteredCourses(): Course[] {
    return this.courses.filter(c => {
      const byCategory = this.filterCategory ? c.category.toLowerCase().includes(this.filterCategory.toLowerCase()) : true;
      const byLevel = this.filterLevel ? c.level === this.filterLevel : true;
      return byCategory && byLevel;
    });
  }

  get activeCount(): number {
    return this.filteredCourses.filter(c => c.active).length;
  }

  clearFilters() {
    this.filterCategory = '';
    this.filterLevel = '';
  }
}
