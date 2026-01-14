console.log('AUTH SERVICE REAL FILE LOADED ✅');

import { Injectable } from '@angular/core';

export type Role = 'student' | 'teacher' | 'admin';

export interface DemoUser {
  email: string;
  password: string;
  role: Role;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private users: DemoUser[] = [
    { email: 'student@test.com', password: '123456', role: 'student', name: 'Student Demo' },
    { email: 'teacher@test.com', password: '123456', role: 'teacher', name: 'Teacher Demo' },
    { email: 'admin@test.com',   password: '123456', role: 'admin',   name: 'Admin Demo' },
  ];

  login(email: string, password: string): DemoUser | null {
    const e = (email || '').trim();
    const p = (password || '').trim();

    const u = this.users.find(x => x.email === e && x.password === p);
    if (!u) return null;

    localStorage.setItem('demo_user', JSON.stringify(u));
    return u;
  }

  getCurrentUser(): DemoUser | null {
    const raw = localStorage.getItem('demo_user');
    return raw ? (JSON.parse(raw) as DemoUser) : null;
  }

  logout(): void {
    localStorage.removeItem('demo_user');
  }
}
