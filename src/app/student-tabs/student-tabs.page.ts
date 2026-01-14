import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-student-tabs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon
  ],
  template: `
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/student-tabs/dashboard">
          <ion-icon name="grid-outline"></ion-icon>
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="assignments" href="/student-tabs/assignments">
          <ion-icon name="document-text-outline"></ion-icon>
          <ion-label>Assignments</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="units" href="/student-tabs/units">
          <ion-icon name="book-outline"></ion-icon>
          <ion-label>Units</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="grades" href="/student-tabs/grades">
          <ion-icon name="stats-chart-outline"></ion-icon>
          <ion-label>Grades</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/student-tabs/profile">
          <ion-icon name="person-outline"></ion-icon>
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `
})
export class StudentTabsPage {}
