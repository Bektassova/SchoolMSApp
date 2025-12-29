import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  // All components used in grades.page.html
  IonCard,
  IonCardHeader, // <--- This was one of the missing ones causing the error
  IonCardTitle, // <--- This was another missing one
  IonCardSubtitle,
  IonCardContent,
  IonListHeader,
  IonLabel,
  IonItem,
  IonIcon,
  IonBadge
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    // All imported components must be listed here
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonListHeader,
    IonLabel,
    IonItem,
    IonIcon,
    IonBadge
  ]
})
export class GradesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}