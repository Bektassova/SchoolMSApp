import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonLabel, IonIcon, IonList, IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personOutline, mailOutline, calendarOutline,
  idCardOutline, logOutOutline, settingsOutline,
  lockClosedOutline, notificationsOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  templateUrl: './teacher-profile.page.html',
  styleUrls: ['./teacher-profile.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonIcon, IonList, IonButton
  ],
})
export class TeacherProfilePage {
  teacher = {
    username: 'alicejohnson',
    fullName: 'Alice Johnson',
    email: 'alice.johnson@gmail.com',
    dob: '1975-03-02',
    userId: '25',
    role: 'Lecturer',
  };

  constructor() {
    addIcons({
      personOutline,
      mailOutline,
      calendarOutline,
      idCardOutline,
      logOutOutline,
      settingsOutline,
      lockClosedOutline,
      notificationsOutline
    });
  }

  logout() {
    alert('Logout (demo)');
  }
}
