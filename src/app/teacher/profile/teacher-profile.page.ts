import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Teacher Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Profile page (demo).</p>
    </ion-content>
  `,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TeacherProfilePage {}
