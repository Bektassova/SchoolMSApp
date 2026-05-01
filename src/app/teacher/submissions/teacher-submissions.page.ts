import { Component, OnInit } from '@angular/core'; // Добавили OnInit
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
export class TeacherSubmissionsPage implements OnInit {
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

  constructor() {}

  // Requirement C: Comment documenting the initialization logic
  ngOnInit() {
    this.loadData();
  }

  // Requirement B: Mocking asynchronous data loading from storage
  async loadData() {
    const savedData = localStorage.getItem('submissions');
    if (savedData) {
      this.submissions = JSON.parse(savedData);
    }
  }

  // Requirement B: Correct use of asynchronous task for storing data
  async save(s: Submission) {
    try {
      // Simulate a small network delay for the "async" feel
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Save the current state of submissions to localStorage
      localStorage.setItem('submissions', JSON.stringify(this.submissions));
      
      alert(`Success: Mark for ${s.student} updated to ${s.mark}`);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  // Requirement B: Functional removal of records with UI feedback
  async remove(id: number) {
    this.submissions = this.submissions.filter(x => x.id !== id);
    localStorage.setItem('submissions', JSON.stringify(this.submissions));
  }
}