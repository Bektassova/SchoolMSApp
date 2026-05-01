import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular'; // For navigation — для перехода
import { AuthService } from '../../services/auth.service'; // For user data — для данных

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
  user: any = null; // Stores real user data — хранит данные из базы

  constructor(
    private authService: AuthService, // Connect service — подключаем сервис
    private navCtrl: NavController     // Connect router — подключаем роутер
  ) {}

  ngOnInit(): void {
    // 1. Get saved photo — берем фото из памяти
    this.photo = localStorage.getItem('profilePhoto_student');
    
    // 2. Get real user from Database session — берем Максима из базы
    this.user = this.authService.getCurrentUser();
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
    // 1. Clear session — удаляем данные из памяти
    this.authService.logout();
    
    // 2. Go back to login — возвращаемся на страницу входа
    this.navCtrl.navigateRoot('/auth/login');
  }
}