import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonNote
} from '@ionic/angular/standalone';

type Submission = {
  id: number;
  unit: string;
  assignment: string;
  student: string;
  email: string;
  fileName: string;
  mark: number | null;
  feedback: string;
};

@Component({
  selector: 'app-teacher-submissions',
  standalone: true,
  templateUrl: './teacher-submissions.page.html',
  styleUrls: ['./teacher-submissions.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonNote
  ],
})
export class TeacherSubmissionsPage {
  submissions: Submission[] = [
    {
      id: 1,
      unit: 'Mathematics',
      assignment: 'Algebraic Thinking and Applications',
      student: 'Alim Alibek',
      email: 'alim@gmail.com',
      fileName: 'report.png',
      mark: 25,
      feedback: 'Keep up the good work!',
    },
    {
      id: 2,
      unit: 'UI Design',
      assignment: 'Creating clear, simple, and user-friendly interface designs',
      student: 'Alim Alibek',
      email: 'alim@gmail.com',
      fileName: 'No file',
      mark: 21,
      feedback: '',
    },
  ];

  save(s: Submission) {
    alert(`Saved mark=${s.mark} for ${s.student}`);
  }

  remove(id: number) {
    this.submissions = this.submissions.filter(x => x.id !== id);
  }
}
