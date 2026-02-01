import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonListHeader,
  IonToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonListHeader,
    IonToggle
  ]
})
export class ProfilePage implements OnInit {

  photo: string | null = null;

  teacher = {
    fullName: 'Alex Johnson',
    role: 'Student',
    username: 'alex.johnson',
    email: 'alex@example.com',
    dob: '2003-04-12',
    userId: '009876'
  };

  ngOnInit(): void {
    this.photo = localStorage.getItem('profilePhoto_student');
  }

  onPhotoSelected(event: any): void {
    const file = event?.target?.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.photo = reader.result as string;
      localStorage.setItem('profilePhoto_student', this.photo);
    };
    reader.readAsDataURL(file);
  }

 logout(): void {
  alert('logout click works'); // <-- TEST
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userRole');
  window.location.href = '/';
}

}
