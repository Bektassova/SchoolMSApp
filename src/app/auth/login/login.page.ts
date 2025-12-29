import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added for navigation

// The rest of the necessary standalone imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

// We add the Router as a private variable here.
constructor(private router: Router) { }

  ngOnInit() {
  }
login() {
  this.router.navigateByUrl('/tabs/units');
}
}
