import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Важно для [disabled] и *ngIf
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButton, IonIcon, AlertController 
} from '@ionic/angular/standalone'; 
import { addIcons } from 'ionicons'; 
import { cloudUploadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-student-submission',
  templateUrl: './student-submission.page.html',
  standalone: true, // Говорим Angular, что это самостоятельный компонент
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonIcon
  ]
})
export class StudentSubmissionPage {
  selectedFileName: string | null = null;

  constructor(private alertCtrl: AlertController) {
    addIcons({ cloudUploadOutline });
  }

  selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    };
    input.click();
  }

  async submitWork() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: `File "${this.selectedFileName}" submitted!`,
      buttons: ['OK']
    });
    await alert.present();
    this.selectedFileName = null;
  }
}