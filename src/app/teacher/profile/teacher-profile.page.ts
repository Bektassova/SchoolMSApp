import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonButton, IonAvatar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  personOutline,
  mailOutline,
  calendarOutline,
  idCardOutline,
  logOutOutline,
  settingsOutline,
  lockClosedOutline,
  notificationsOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  templateUrl: './teacher-profile.page.html',
  styleUrls: ['./teacher-profile.page.scss'],
  imports: [IonAvatar, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonButton
  ]
})
export class TeacherProfilePage {

  teacher = {
    fullName: 'Vincent Magro',
    role: 'Teacher',
    username: 'vincmag',
    email: 'vincmag@gmail.com',
    dob: '1969-06-09',
    userId: 'T-0001'
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

  // Profile photo (teacher)
photo: string | null = null;

ngOnInit(): void {
  this.photo = localStorage.getItem('profilePhoto_teacher');
}

onPhotoSelected(event: any): void {
  const file: File | undefined = event?.target?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    this.photo = reader.result as string;
    localStorage.setItem('profilePhoto_teacher', this.photo);
  };
  reader.readAsDataURL(file);
}


  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    window.location.href = '/';
  }
}
