import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TimetablePage {
  selectedDay: string = 'monday';

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

  constructor() {}

  openOnlineClass() {
    console.log('Opening Zoom/Teams link...');
    window.open('https://teams.microsoft.com', '_blank');
  }
}