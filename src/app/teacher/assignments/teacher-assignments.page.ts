import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonBadge
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, sendOutline } from 'ionicons/icons';

import { AssignmentService, Assignment } from '../../screens/assignment.service';

@Component({
  selector: 'app-teacher-assignments',
  standalone: true,
  templateUrl: './teacher-assignments.page.html',
  styleUrls: ['./teacher-assignments.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonBadge
  ],
})
export class TeacherAssignmentsPage {
  // Teacher view: list of assignments
  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) {
    // Register icons used in the template
    addIcons({
      addCircleOutline,
      trashOutline,
      sendOutline
    });
  }

  // Ionic lifecycle: runs every time you enter this page
  ionViewWillEnter(): void {
    this.refresh();
  }

  // Draft -> Published
  publish(id: number): void {
    this.assignmentService.publish(id);
    this.refresh();
  }

  // Delete assignment (remove from service so it doesn't come back)
  delete(id: number): void {
    this.assignmentService.remove(id);
    this.refresh();
  }

  private refresh(): void {
    this.assignments = this.assignmentService.getAll();
  }
}
