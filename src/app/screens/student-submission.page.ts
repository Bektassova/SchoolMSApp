import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-student-submission',
  templateUrl: './student-submission.page.html',
  styleUrls: ['./student-submission.page.scss'], // если создашь файл стилей
})
export class StudentSubmissionPage {
  selectedFileName: string | null = null;

  constructor(private alertCtrl: AlertController) {}

  selectFile() {
    // Имитация выбора файла для демо-версии
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
      message: `File "${this.selectedFileName}" has been submitted (Demo Mode).`,
      buttons: ['OK']
    });

    await alert.present();
    this.selectedFileName = null; // сброс после отправки
  }
}