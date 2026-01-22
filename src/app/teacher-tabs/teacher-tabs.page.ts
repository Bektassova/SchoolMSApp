import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-teacher-tabs',
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

    <ion-tab-button tab="assignments">
      <ion-icon name="document-text-outline"></ion-icon>
      <ion-label>My Assignments</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="create-assignment">
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-label>Create</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="submissions">
      <ion-icon name="file-tray-full-outline"></ion-icon>
      <ion-label>Submissions</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="profile">
      <ion-icon name="person-outline"></ion-icon>
      <ion-label>Profile</ion-label>
    </ion-tab-button>

  </ion-tab-bar>
</ion-tabs>

  `
})
export class TeacherTabsPage {}
