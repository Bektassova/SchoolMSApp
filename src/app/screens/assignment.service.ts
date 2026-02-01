import { Injectable } from '@angular/core';

export type AssignmentStatus = 'Draft' | 'Published';

export interface Assignment {
  id: number;
  unit: string;
  title: string;
  description: string;
  dueDate: string;
  status: AssignmentStatus;
}

@Injectable({ providedIn: 'root' })
export class AssignmentService {
  private assignments: Assignment[] = [];
  private idCounter = 1;

  constructor() {
    // Load data from localStorage on service creation
    const stored = localStorage.getItem('assignments');
    if (stored) {
      this.assignments = JSON.parse(stored);
      this.idCounter =
        this.assignments.length > 0
          ? Math.max(...this.assignments.map(a => a.id)) + 1
          : 1;
    }
  }

  getAll(): Assignment[] {
    return this.assignments;
  }

  add(assignment: Omit<Assignment, 'id'>) {
    this.assignments.push({
      id: this.idCounter++,
      ...assignment,
      status: assignment.status ?? 'Draft',
    });
    this.saveToStorage();
  }

  // Publish assignment by id
  publish(id: number) {
    const a = this.assignments.find(x => x.id === id);
    if (a) {
      a.status = 'Published';
      this.saveToStorage();
    }
  }

  // Remove assignment by id
  remove(id: number): void {
    this.assignments = this.assignments.filter(a => a.id !== id);
    this.saveToStorage();
  }

  // Save assignments to localStorage
  private saveToStorage(): void {
    localStorage.setItem('assignments', JSON.stringify(this.assignments));
  }
}
