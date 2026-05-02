import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Добавили для связи с PHP
import { Observable } from 'rxjs';

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'low';
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

  // URL of my PHP- My PHP проекта в MAMP 
  private apiUrl = 'http://localhost/lms-rest-api'; 

  public studentStats = {
    gpa: '3.8',
    credits: 45,
    attendance: '92%'
  };

  constructor(private http: HttpClient) { } // Внедряем HttpClient

  // ---  The New Metod for the Timetable-НОВЫЙ МЕТОД ДЛЯ РАСПИСАНИЯ ---
  getStudentTimetable(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_timetable.php?student_id=${userId}`);
  }

  // Эти методы пока оставляем как есть, чтобы Dashboard не сломался, 
  // но позже мы их тоже переделаем на получение данных из MySQL
  getUnits() {
    return [
      { id: '1', code: 'CS 101', name: 'Introduction to Programming', lecturer: 'Dr. Alan Turing', semester: 1, progress: 0.7, icon: 'code-slash-outline', status: 'Enrolled' }
    ];
  }

  getAssignments() {
    return [];
  }

  getAnnouncements() {
    return [
      { id: 1, title: 'Welcome!', content: 'Check your new schedule.', date: '2026-05-01', priority: 'high' }
    ];
  }
}