import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonProgressBar, IonSearchbar, IonIcon, IonBadge,
  IonCard, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone'; // Я удалил IonText отсюда
import { DataService, Unit } from '../../services/data.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonProgressBar, IonSearchbar, IonIcon, IonBadge,
    IonCard, IonCardContent, IonGrid, IonRow, IonCol
  ]
})
export class UnitsPage implements OnInit {
  public units: Unit[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.units = this.dataService.getUnits();
  }
}