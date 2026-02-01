# School Management Mobile Application

A comprehensive mobile application for students to manage their academic life, built with **Ionic Framework** and **Angular (Standalone Components)**.

## Project Overview
This application provides a centralized hub for students to track their units, assignments, grades, and personal academic profile.

## Key Modules & Features

### 1. Dashboard (Main Hub)
* **Overview Screen:** Created a central dashboard with quick-access cards for GPA, credits, and current standing.
* **Navigation:** Integrated a Tab-based navigation system (Dashboard, Units, Assignments, Grades, Profile).

### 2. Units Module (Academic Structure)
* **Units List:** A comprehensive list of enrolled courses (e.g., Programming I, Mechanics).
* **Detailed Unit View:** For each unit, we implemented a sub-navigation system including:
    * **Overview:** General course description.
    * **Syllabus:** Course curriculum and weekly schedule.
    * **Assignments:** Unit-specific tasks.
    * **Grades:** Specific performance tracking for each unit.

### 3. Assignments Management (Task Tracking)
* **Status Filtering:** Implemented a segmented control system to filter tasks by **Upcoming**, **Overdue**, and **Completed**.
* **Priority System:** Visual indicators (badges) for urgent tasks and deadlines.
* **Dynamic Data:** Real-time filtering logic based on due dates.

### 4. Grades & Performance
* **Academic Summary:** Created a "Grades Review" section for Semester 1.
* **Performance Metrics:** Displays Overall GPA, total credits earned, and a summary based on completed units.
* **Detailed Scores:** A breakdown of individual unit grades to track academic progress.

### 5. Student Profile
* **Identity Management:** A dedicated profile page for the student (e.g., Alex Johnson).
* **Academic Info:** Includes student ID, course year, and contact information.

## Technical Implementation
* **Architecture:** Migrated to **Angular Standalone Components** for better performance and modularity.
* **Routing:** Configured complex nested routes in `tabs.routes.ts` to handle sub-pages like `unit-detail`.
* **Services:** Centralized data management using Angular Services to ensure data consistency across all screens.
* **UI Components:** Leveraged Ionic components such as `ion-segment`, `ion-card`, `ion-badge`, and `ion-tabs`.

29 December 2025:
## Key Features Implemented:

### 1. Migration to Standalone Components
* Refactored the `Assignments` page logic to use the modern Angular Standalone standard.
* Removed dependency on `tabs.module.ts` by directly importing `IonicModule`, `CommonModule`, and `FormsModule` into the component metadata.

### 2. Segmented Assignment Filtering
* Implemented a **Segmented Control** UI to switch between three different views:
    * **Upcoming:** Current pending assignments.
    * **Overdue:** Assignments past their deadline.
    * **Done:** Completed tasks.
* Developed dynamic filtering logic using `[ngSwitch]` and Angular Pipes (`date`) to manage assignment status in real-time.

### 3. Routing & Navigation Fixes
* Resolved critical path resolution errors in `tabs.routes.ts`.
* Corrected relative file imports (`./` vs `../`) to ensure proper component loading.
* Fixed "Application bundle generation" failures by troubleshooting the Angular compiler and build process.

### 4. UI/UX Enhancements
* Integrated `ion-badge` for priority signaling.
* Styled the se 2025

30 December 2025
### 5. Interactive Timetable Module
* **Dynamic Weekly Schedule:** Developed a fully functional timetable that allows students to switch between days (Monday to Friday) using a segmented control.
* **Conditional UI Logic:** Implemented a "Smart Button" feature:
    * The system automatically detects if a class is "Online" based on the room data.
    * Only for online classes, a **"Join Online Class"** button appears, providing a direct link to virtual meetings.
* **Custom Styling:** Applied custom CSS to ensure a professional, narrow button design with centered icons and text for better mobile UX.
* **Data Management:** Organized weekly data into a JSON-like object structure for easy updates and scalability.

### 6. Dashboard Integration
* **Navigation Shortcut:** Added a "Quick Access" card to the Dashboard.
* **Inter-page Routing:** Implemented a direct link to the Timetable using `routerLink`, improving user flow between modules.
* **Empty State Handling:** Implemented "Empty State" UI patterns. The app displays friendly feedback (e.g., "No more classes today") instead of a blank screen when no data is available for the current time.
Debugging & Architecture Notes

During development of the Ionic Angular mobile application, several critical architectural and interaction issues were discovered and successfully resolved.

This section documents the major problems and the applied solutions.

🔐 Authentication System (Student Login)

Originally, the application did not support real role-based login and student access.
A demo authentication system was implemented to allow proper role routing.

Implemented:

AuthService with demo users (student / teacher / admin)

Real login logic with email/password verification

Session storage via localStorage

Role-based redirection:

/student-tabs/...

/teacher-tabs/...

Standalone LoginPage fully reconfigured with FormsModule, IonicModule, and routing fixes

# Student Tabs Architecture

A full Student Tabs navigation system was created and structured:

student-tabs.page.ts

student-tabs.page.html

Tab navigation for:

Dashboard

Assignments

Units

Grades

Profile

Proper Ionic <ion-tabs> + <ion-router-outlet> integration

Child routing configured in app.routes.ts

This enabled real tab-based navigation for the student role.

# Critical Ionic Click-Blocking Bug (Major Fix)

A severe Ionic layout bug was discovered:

A ghost ion-router-outlet overlay layer was rendered above the page content, fully blocking all click/touch interactions inside:

Dashboard

Assignments

Units

Timetable
while Tabs navigation remained functional.

This made the UI appear normal, but completely non-interactive.

Root cause

Ionic rendered a hydrated ion-router-outlet as a full-screen overlay with position: absolute, intercepting all pointer events.

Final Solution (Global Fix)

Applied a targeted CSS fix to neutralize the invisible overlay while preserving routing:
/* Kill ghost router-outlet overlay */
ion-router-outlet.hydrated {
  pointer-events: none !important;
}

/* Allow real page content to receive clicks */
ion-router-outlet.hydrated > * {
  pointer-events: auto !important;
}
Added to: src/global.scss

This instantly restored full click functionality across all routed pages.

# Result

Login fully functional

Student Tabs fully interactive

Dashboard widgets clickable

Assignments, Units, Timetable restored
## Teacher Module (Demo) — implemented

Added a basic Teacher area with role-based access and navigation.

### What was done
- Enabled demo login for teacher (`teacher@test.com` / `123456`) via `AuthService`.
- Implemented `TeacherTabsPage` as an Ionic Tabs container with:
  - My Assignments
  - Create Assignment
  - Submissions
  - Profile (placeholder)
- Created standalone Teacher pages (demo UI + sample data):
  - `TeacherAssignmentsPage` (list, delete demo items, open submissions)
  - `CreateAssignmentPage` (form, demo save)
  - `TeacherSubmissionsPage` (marks + feedback, delete demo)
  - `TeacherProfilePage` (temporary placeholder)
- Updated routing (`app.routes.ts`) with `teacher-tabs` children routes:
  - `/teacher-tabs/assignments`
  - `/teacher-tabs/create-assignment`
  - `/teacher-tabs/submissions`
  - `/teacher-tabs/profile`
  - default redirect to assignments

### Notes
- This is a demo implementation (no API yet). Data is hardcoded and will be connected to backend later.

## Teacher Profile — implemented (Demo)

Teacher Profile page was initially empty. It has now been implemented as a standalone page with demo data and basic account actions.

### What was done
- Added `TeacherProfilePage` UI (card with teacher details + settings/actions list).
- Displayed demo fields:
  - Username
  - Full Name
  - Email
  - Date of Birth
  - User ID
  - Role (Lecturer)
- Added basic account actions (demo buttons):
  - Personal Information
  - Change Password
  - Push Notifications
  - Log Out (demo handler)

### Fix applied
- Resolved Angular build error `NG2008: Could not find stylesheet file` by creating the missing file:
  - `src/app/teacher/profile/teacher-profile.page.scss`

Implemented Features
1. Assignment Service (In-Memory Storage)

AssignmentService stores assignments in memory

No backend is used at this stage

Each assignment has the following structure:

id

unit

title

description

dueDate

status (Draft | Published)

Assignments are created with status Draft by default.

2. Create Assignment (Teacher)

Teachers can create a new assignment using the Create Assignment page.

Implemented fields:

Unit (select)

Assignment title

Description

Due date

Assignment file (UI only)

When the Create Assignment button is clicked:

the assignment is saved via AssignmentService

status is set to Draft

the teacher is redirected to My Assignments

3. My Assignments (Teacher)

Displays all assignments created by the teacher

Shows:

assignment title

unit

current status (Draft / Published)

Draft assignments are visible only to the teacher

 Important Technical Notes

Assignments are stored in memory, so data is reset on page reload

ngModel is used to bind form inputs to component variables

Ionic lifecycle handling ensures assignments are refreshed when navigating back

Status Draft means:

assignment is saved

assignment is not yet published for students

Current Status

✔ Assignment creation works
✔ Assignments are saved correctly
✔ Assignments are displayed in My Assignments
✔ Draft status is shown correctly
Updates & Improvements

Added Publish functionality for teacher assignments

assignments can be switched from Draft to Published

Implemented assignment lifecycle:

Draft → visible only to the teacher

Published → ready for student view

Improved My Assignments page:

assignment list refreshes correctly when navigating back

Ionic lifecycle (ionViewWillEnter) is used instead of ngOnInit

Added localStorage persistence:

assignments no longer disappear on page reload

data is preserved when switching between Teacher and Student views

Assignment delete functionality added (Teacher side)

Logout functionality was implemented for the Teacher profile, allowing the user to securely exit the session and return to the application’s start (login) screen.
Profile photo spacing was adjusted by adding a small top margin, so the avatar now sits slightly below the name for a cleaner, more balanced layout.
Bottom tab spacing was fine-tuned to prevent long labels like “Assignments” from visually sticking to neighboring tabs.
Student logout was fixed by replacing the routerLink-based list item with a click handler that clears auth data and redirects to the start page.

The “Join Online Class” button opens a demo online

Added teacher profile photo upload using a localStorage-backed preview and a “Choose photo” button.