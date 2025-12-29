import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  // Components used in profile.page.html
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonAvatar, // New component
  IonList,
  IonListHeader,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle // New component
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    // Imports added to the component
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonAvatar,
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
    IonLabel,
    IonToggle
  ]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}