import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Redirect the root path to the Login page
    redirectTo: 'auth/login', 
    pathMatch: 'full',
  },

  // AUTH PAGES (These are correct)
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./auth/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'auth/forgot-password',
    loadComponent: () =>
      import('./auth/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
  },
  {
    path: 'auth/reset-password',
    loadComponent: () =>
      import('./auth/reset-password/reset-password.page').then(m => m.ResetPasswordPage),
  },

  // TABS (This is correct, it points to the TABS structure)
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes), // <-- This points to the new file we will edit
  },

  // OTHER PAGES (These are correct, as they are not part of the tabs bar)
  {
    path: 'timetable',
    loadComponent: () =>
      import('./timetable/timetable.page').then(m => m.TimetablePage),
  },
  {
    path: 'admin/user-management',
    loadComponent: () =>
      import('./admin/user-management/user-management.page').then(m => m.UserManagementPage),
  },
  {
    path: 'unit-detail/:id', // <-- INSERT THIS NEW ROUTE HERE
    loadComponent: () => import('./unit-detail/unit-detail.page').then( m => m.UnitDetailPage)
  },
  {
    path: 'student-submission',
    loadComponent: () => 
      import('./screens/student-submission.page').then(m => m.StudentSubmissionPage),
  },
];
