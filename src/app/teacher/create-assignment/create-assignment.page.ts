import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

import { AssignmentService } from '../../screens/assignment.service';

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './create-assignment.page.html',
  styleUrls: ['./create-assignment.page.scss'],
})
export class CreateAssignmentPage {
  unit = '';
  title = '';
  description = '';
  dueDate = '';

  constructor(
    private assignmentService: AssignmentService,
    private navCtrl: NavController
  ) {}
save(): void {
  console.log('SAVE CLICKED', {
    unit: this.unit,
    title: this.title,
    description: this.description,
    dueDate: this.dueDate,
  });

  this.assignmentService.add({
    unit: this.unit.trim(),
    title: this.title.trim(),
    description: this.description.trim(),
    dueDate: this.dueDate,
    status: 'Draft',
  });

  console.log('AFTER ADD', this.assignmentService.getAll());

  this.navCtrl.navigateBack('/teacher-tabs/assignments');
}

}
