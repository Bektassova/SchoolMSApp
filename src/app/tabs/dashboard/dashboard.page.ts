import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ДОБАВЛЕНО: Добавили 'Assignment' в список импорта
import { DataService, Announcement, Unit, Assignment } from '../../services/data.service';

import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
  IonGrid, IonRow, IonCol, IonListHeader, IonLabel, 
  IonItem, IonIcon, IonBadge, IonButtons, IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonGrid, IonRow, IonCol, 
    IonListHeader, IonLabel, IonItem, IonIcon, 
    IonBadge, IonButtons, IonButton
  ]
})
export class DashboardPage implements OnInit {
  public announcements: Announcement[] = [];
  public units: Unit[] = [];
  public stats: any;
  public pendingTasks: Assignment[] = [];

  constructor(private dataService: DataService) { }

  // ТЕПЕРЬ ТУТ ТОЛЬКО ОДИН ngOnInit
  ngOnInit() {
    // 1. Загружаем объявления
    this.announcements = this.dataService.getAnnouncements();
    
    // 2. Загружаем предметы
    this.units = this.dataService.getUnits();
    
    // 3. Загружаем статистику (GPA/Attendance)
    this.stats = this.dataService.studentStats;
    
    // 4. Загружаем задания
    this.pendingTasks = this.dataService.getAssignments();
  }
}