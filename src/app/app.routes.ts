import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },

  {
    path: 'auth/login',
    loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'auth/forgot-password',
    loadComponent: () => import('./auth/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
  },
  {
    path: 'auth/reset-password',
    loadComponent: () => import('./auth/reset-password/reset-password.page').then(m => m.ResetPasswordPage),
  },

  // ===================== STUDENT =====================
  {
    path: 'student-tabs',
    loadComponent: () => import('./student-tabs/student-tabs.page').then(m => m.StudentTabsPage),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',
        loadComponent: () => import('./tabs/dashboard/dashboard.page').then(m => m.DashboardPage),
      },
      {
        path: 'timetable',
        loadComponent: () => import('./timetable/timetable.page').then(m => m.TimetablePage),
      },
      {
        path: 'assignments',
        loadComponent: () => import('./tabs/assignments/assignments.page').then(m => m.AssignmentsPage),
      },
      {
        path: 'units',
        loadComponent: () => import('./tabs/units/units.page').then(m => m.UnitsPage),
      },
      {
        path: 'grades',
        loadComponent: () => import('./tabs/grades/grades.page').then(m => m.GradesPage),
      },
      {
        path: 'profile',
        loadComponent: () => import('./tabs/profile/profile.page').then(m => m.ProfilePage),
      },
    ],
  },

  // ===================== TEACHER =====================
  {
    path: 'teacher-tabs',
    loadComponent: () => import('./teacher-tabs/teacher-tabs.page').then(m => m.TeacherTabsPage),
    children: [
      { path: '', redirectTo: 'assignments', pathMatch: 'full' },

      {
        path: 'assignments',
        loadComponent: () =>
          import('./teacher/assignments/teacher-assignments.page')
            .then(m => m.TeacherAssignmentsPage),
      },
      {
        path: 'create-assignment',
        loadComponent: () =>
          import('./teacher/create-assignment/create-assignment.page')
            .then(m => m.CreateAssignmentPage),
      },
      {
        path: 'submissions',
        loadComponent: () =>
          import('./teacher/submissions/teacher-submissions.page')
            .then(m => m.TeacherSubmissionsPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./teacher/profile/teacher-profile.page')
            .then(m => m.TeacherProfilePage),
      },
    ],
  },

  // ===================== COMMON =====================
  {
    path: 'timetable',
    loadComponent: () => import('./timetable/timetable.page').then(m => m.TimetablePage),
  },
  {
    path: 'admin/user-management',
    loadComponent: () => import('./admin/user-management/user-management.page').then(m => m.UserManagementPage),
  },
  {
    path: 'unit-detail/:id',
    loadComponent: () => import('./unit-detail/unit-detail.page').then(m => m.UnitDetailPage),
  },
  {
    path: 'student-submission',
    loadComponent: () => import('./screens/student-submission.page').then(m => m.StudentSubmissionPage),
  },
];
