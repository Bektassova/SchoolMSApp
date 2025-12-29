import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonBackButton, 
  IonButtons,
  IonSegment, // <<< ADDED
  IonSegmentButton, // <<< ADDED
  IonLabel, // <<< ADDED
  IonList, // <<< ADDED for future content
  IonItem // <<< ADDED for future content
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.page.html',
  styleUrls: ['./unit-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonBackButton, 
    IonButtons,
    IonSegment, // <<< ADDED
    IonSegmentButton, // <<< ADDED
    IonLabel, // <<< ADDED
    IonList, // <<< ADDED
    IonItem // <<< ADDED
  ]
})
export class UnitDetailPage implements OnInit { 
  
  public unitId: string | null = null;
  public activeSegment: string = 'overview'; // <<< ADDED: Default to overview

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.unitId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  // Method to change the active segment when a tab is clicked
  segmentChanged(event: any) {
    this.activeSegment = event.detail.value;
  }
}