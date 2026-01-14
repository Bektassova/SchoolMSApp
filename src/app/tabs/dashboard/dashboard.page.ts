import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { DataService, Announcement, Unit, Assignment } from '../../services/data.service';

import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonListHeader, IonLabel,
  IonItem, IonIcon, IonBadge, IonButtons, IonButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { calendarOutline, timeOutline, checkmarkDoneOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonGrid, IonRow, IonCol,
    IonListHeader, IonLabel,
    IonItem, IonIcon, IonBadge,
    IonButtons, IonButton
  ]
})
export class DashboardPage implements OnInit {

  announcements: Announcement[] = [];
  units: Unit[] = [];
  stats: any = null;
  pendingTasks: Assignment[] = [];

  schedule: any = {
    monday: [
      { time: '09:00 - 10:30', subject: 'Programming I', room: 'Lab 102', type: 'Lecture' },
      { time: '11:00 - 12:30', subject: 'Mathematics', room: 'Room 305', type: 'Seminar' }
    ],
    tuesday: [
      { time: '10:00 - 11:30', subject: 'Web Development', room: 'Online', type: 'Workshop' },
      { time: '13:00 - 14:30', subject: 'Logic & Algorithms', room: 'Room 201', type: 'Lecture' }
    ],
    wednesday: [
      { time: '09:00 - 12:00', subject: 'Software Project', room: 'Lab 105', type: 'Practical' },
      { time: '14:00 - 15:30', subject: 'Database Systems', room: 'Room 402', type: 'Lecture' }
    ],
    thursday: [
      { time: '09:00 - 10:30', subject: 'User Interface Design', room: 'Online', type: 'Lecture' },
      { time: '11:00 - 12:30', subject: 'UI Design Lab', room: 'Lab 202', type: 'Practical' }
    ],
    friday: [
      { time: '10:00 - 13:00', subject: 'Mobile App Dev', room: 'Lab 108', type: 'Workshop' },
      { time: '15:00 - 16:30', subject: 'Professional Practice', room: 'Room 101', type: 'Seminar' }
    ]
  };

  constructor(private dataService: DataService, private router: Router) {
    addIcons({ calendarOutline, timeOutline, checkmarkDoneOutline });
  }

  ngOnInit() {
    this.announcements = this.dataService.getAnnouncements();
    this.units = this.dataService.getUnits();
    this.stats = this.dataService.studentStats;
    this.pendingTasks = this.dataService.getAssignments();
  }

  goTimetable() {

    this.router.navigateByUrl('/student-tabs/timetable');
  }

  getNextClass() {
    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayName = days[now.getDay()];
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const todayClasses = this.schedule[todayName] || [];

    return todayClasses.find((lesson: any) => {
      // берём НАЧАЛО интервала, например "09:00" из "09:00 - 10:30"
      const start = String(lesson.time).split(' - ')[0];
      const [h, m] = start.split(':').map(Number);
      return (h * 60 + m) > currentTime;
    });
  }
}
