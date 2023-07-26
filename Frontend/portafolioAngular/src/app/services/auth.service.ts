import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { User } from '../auth/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost:8000/api/';
  loggedIn = new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;



  constructor(private http: HttpClient) {
    console.log("Servicio de Autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'register/', user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login/', { email, password })
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
        console.log(data);
    
        return data;
      }));
  }

  // login(user: User): Observable<User> {
  //   return this.http.post<any>(`${this.baseUrl}auth/login/`, user)
  //     .pipe(map(data => {
  //       localStorage.setItem('currentUser', JSON.stringify(data));
  //       this.currentUserSubject.next(data);
  //       this.loggedIn.next(true);
  //       console.log(data);

  //       return data;
  //     }));
  // }

  getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/');
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'logout/', {});
  }

  get UserAuthenticate(): User {
    return this.currentUserSubject.value;
  }

  get isAuthenticate(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
