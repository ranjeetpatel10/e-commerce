import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = signal(false);

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      const userData = JSON.stringify({ username, password });
      document.cookie = `auth=${encodeURIComponent(userData)}; path=/`;
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.isLoggedIn.set(false);
  }

  checkLogin(): void {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const authCookie = cookies.find(c => c.startsWith('auth='));
    this.isLoggedIn.set(!!authCookie);
  }
}
