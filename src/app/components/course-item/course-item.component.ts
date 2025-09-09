import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Course } from '../../models/course.model'


@Component({
    selector: 'course-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './course-item.component.html',
    styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
    @Input({ required: true }) course!: Course;

    @Output() edit = new EventEmitter<Course>();
    @Output() toggleActive = new EventEmitter<Course>();
    @Output() delete = new EventEmitter<Course>();
}