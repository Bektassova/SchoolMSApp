import { Injectable } from '@angular/core';

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'low'; // Нужно для вашего Dashboard HTML
}

export interface Unit {
  id: string;
  code: string;
  name: string;
  lecturer: string;
  semester: number;
  progress: number;
  icon: string;   
  status: string;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: Date;
  status: 'upcoming' | 'overdue' | 'completed';
  priority: boolean;
  unitCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Данные статистики, которые запрашивает ваш Dashboard
  public studentStats = {
    gpa: '3.8',
    credits: 45,
    attendance: '92%'
  };

  private units: Unit[] = [
    { 
      id: '1', 
      code: 'CS 101', 
      name: 'Introduction to Programming', 
      lecturer: 'Dr. Alan Turing',
      semester: 1,
      progress: 0.7,
      icon: 'code-slash-outline',
      status: 'Enrolled'
    },
    { 
      id: '2', 
      code: 'MATH 205', 
      name: 'Calculus II', 
      lecturer: 'Dr. Sarah Smith',
      semester: 2,
      progress: 0.4,
      icon: 'calculator-outline',
      status: 'Enrolled'
    }
  ];

  private assignments: Assignment[] = [
    {
      id: 'a1',
      title: 'Python Basics Quiz',
      dueDate: new Date('2025-12-30T23:59:00'),
      status: 'upcoming',
      priority: true,
      unitCode: 'CS 101'
    },
    {
      id: 'a2',
      title: 'Calculus Assignment 2',
      dueDate: new Date('2025-12-28T10:00:00'),
      status: 'overdue',
      priority: false,
      unitCode: 'MATH 205'
    }
  ];

  private announcements: Announcement[] = [
    { 
      id: 1, 
      title: 'Welcome back!', 
      content: 'New semester starts today. Check your schedule.', 
      date: '2025-12-29',
      priority: 'high'
    }
  ];

  constructor() { }

  getUnits() {
    return this.units;
  }

  getUnitById(id: string) {
    return this.units.find(u => u.id === id);
  }

  getAssignments() {
    return this.assignments;
  }

  getAnnouncements() {
    return this.announcements;
  }
}