import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DataService, Assignment } from '../../services/data.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html', // Проверьте, что этот файл рядом
  styleUrls: ['./assignments.page.scss'],
  standalone: true,
   imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class AssignmentsPage implements OnInit {
  selectedSegment: string = 'upcoming';

  upcomingAssignments: Assignment[] = [];
  overdueAssignments: Assignment[] = [];
  completedAssignments: Assignment[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadAssignments();
  }

  loadAssignments() {
    const all = this.dataService.getAssignments();
    this.upcomingAssignments = all.filter(a => a.status === 'upcoming');
    this.overdueAssignments = all.filter(a => a.status === 'overdue');
    this.completedAssignments = all.filter(a => a.status === 'completed');
  }
}