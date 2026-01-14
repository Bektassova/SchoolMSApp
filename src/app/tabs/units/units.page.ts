import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardContent,
  IonItem, IonLabel, IonIcon, IonBadge, IonProgressBar, IonSearchbar
} from '@ionic/angular/standalone'; // Я удалил IonText отсюда
import { DataService, Unit } from '../../services/data.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardContent,
    IonItem, IonLabel, IonIcon, IonBadge, IonProgressBar, IonSearchbar
  ],
})
export class UnitsPage implements OnInit {
  public units: Unit[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.units = this.dataService.getUnits();
  }
}