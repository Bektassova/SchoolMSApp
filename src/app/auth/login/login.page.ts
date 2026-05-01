import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  // We use 'email' variable to bind to the username field in the UI
  email = ''; 
  password = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController // Added to show a spinner during the request
  ) {}

  async login() {
    // 1. Show a loading spinner so the user knows something is happening
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating...',
    });
    await loading.present();

    console.log('Attempting login for:', this.email);

    // 2. Call the updated AuthService
    // Since it returns an Observable, we must .subscribe() to get the result
    this.authService.login(this.email, this.password).subscribe({
      next: async (response: any) => {
        await loading.dismiss();

        if (response && response.status === 'success') {
          const user = response.user;
          console.log('Login successful! User role:', user.role);

          // 3. Navigate based on the real role from the Database
         if (user.role.toLowerCase() === 'student') {
  console.log('Navigating to Student Dashboard...');
  this.navCtrl.navigateRoot('/student-tabs/dashboard');
} else if (user.role.toLowerCase() === 'teacher' || user.role.toLowerCase() === 'admin') {
  console.log('Navigating to Teacher Section...');
  this.navCtrl.navigateRoot('/teacher-tabs/assignments');
} else {
  console.warn('Unknown role:', user.role);
}
        } else {
          // If server returns error status
          this.showError('Login Failed', response.message || 'Invalid credentials');
        }
      },
      error: async (err) => {
        await loading.dismiss();
        console.error('Network or Server error:', err);
        this.showError('Server Error', 'Could not connect to the API. Check MAMP and URL.');
      }
    });
  }

  // Helper method to show alerts
  async showError(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}