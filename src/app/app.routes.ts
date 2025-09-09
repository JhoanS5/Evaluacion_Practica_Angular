import { Routes } from '@angular/router';
import { CoursesPage } from './pages/courses/courses-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CoursesPage,
    },
    {
        path: '**', redirectTo: ''
    },
];
