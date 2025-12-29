import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'units',
        loadComponent: () => import('./units/units.page').then(m => m.UnitsPage),
      },
    {
        path: 'units/:id',
        // Мы выходим из tabs (../) и сразу заходим в unit-detail
        loadComponent: () => import('../unit-detail/unit-detail.page').then(m => m.UnitDetailPage),
      },
      // Добавляем Dashboard
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage),
      },
      // Добавляем Assignments
    {
        path: 'assignments',
        loadComponent: () => import('./assignments/assignments.page').then(m => m.AssignmentsPage),
      },
      {
        path: 'timetable',
        loadComponent: () => import('../timetable/timetable.page').then(m => m.TimetablePage),
      },
      {
        path: 'grades',
        loadComponent: () => import('./grades/grades.page').then(m => m.GradesPage),
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'units',
        pathMatch: 'full',
      },
    ],
  },
];