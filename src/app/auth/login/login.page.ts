import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

 async login() {


  // 2) Логи, чтобы увидеть что реально в полях
  console.log('EMAIL RAW:', JSON.stringify(this.email));
  console.log('PASS RAW:', JSON.stringify(this.password));

  // 3) Проверка demo-юзера
  const user = this.authService.login(this.email, this.password);

  if (!user) {
    const alertBox = await this.alertCtrl.create({
      header: 'Demo login failed',
      message: `User not found.\nTry: student@test.com / 123456`,
      buttons: ['OK'],
    });
    await alertBox.present();
    return;
  }

  // 4) Переход
  if (user.role === 'student') {
    this.navCtrl.navigateRoot('/student-tabs/dashboard');
    return;
  }

  if (user.role === 'teacher') {
    this.navCtrl.navigateRoot('/teacher-tabs/dashboard');
    return;
  }

  this.navCtrl.navigateRoot('/auth/login');
}

}
