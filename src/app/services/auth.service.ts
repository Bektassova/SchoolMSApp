import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Server API endpoint URL
  private apiUrl = 'http://localhost:8888/lms-rest-api/endpoints/auth.php';

  constructor(private http: HttpClient) {}

  /**
   * Sends login credentials to the server
   * @param username string
   * @param password string
   * @returns Observable with server response
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      username: username,
      password: password
    }).pipe(
      tap((response: any) => {
        // If authentication is successful, store user data in local storage
        if (response && response.status === 'success') {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
      })
    );
  }

  /**
   * Retrieves the stored user data from local storage
   */
  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Removes user data and logs out
   */
  logout() {
    localStorage.removeItem('currentUser');
  }
}