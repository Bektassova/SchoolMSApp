import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonIcon, IonList, IonItem, IonLabel, IonNote
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, createOutline, trashOutline } from 'ionicons/icons';

type TeacherAssignment = {
  id: number;
  title: string;
  unit: string;
  dueDate: string;
};

@Component({
  selector: 'app-teacher-assignments',
  standalone: true,
  templateUrl: './teacher-assignments.page.html',
  styleUrls: ['./teacher-assignments.page.scss'],
  imports: [
    CommonModule, RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonNote
  ],
})
export class TeacherAssignmentsPage {
  assignments: TeacherAssignment[] = [
    { id: 1, title: 'Marketing Report', unit: 'Marketing', dueDate: '2026-01-31' },
    { id: 2, title: 'Accounting Essay', unit: 'Accountancy', dueDate: '2026-02-01' },
  ];

  constructor() {
    addIcons({ addCircleOutline, createOutline, trashOutline });
  }

  delete(id: number) {
    this.assignments = this.assignments.filter(a => a.id !== id);
  }
}
