import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent,
  IonItem, IonLabel, IonInput, IonTextarea,
  IonSelect, IonSelectOption,
  IonDatetime,
  IonButton,
  IonRow, IonCol,
  IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  templateUrl: './create-assignment.page.html',
  styleUrls: ['./create-assignment.page.scss'],
  imports: [
  CommonModule,
  FormsModule,
  RouterModule,

  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,

  IonCard,
  IonCardContent,

  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,

  IonDatetime,

  IonButton,
  IonRow,
  IonCol,
  IonNote
]
,
})
export class CreateAssignmentPage {
  unit = '';
  title = '';
  description = '';
  dueDate = '';

  units = ['Marketing', 'Accountancy', 'CS101', 'Math'];

  save() {
    // demo: later you can connect API / DB
    alert(`Created: ${this.title} (${this.unit})`);
  }
}
