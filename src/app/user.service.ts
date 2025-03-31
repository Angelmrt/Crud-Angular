import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './types'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private jsonUrl = 'assets/users.json';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.jsonUrl}/${id}`);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.jsonUrl, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.jsonUrl}/${user.id}`, user);
  }

}
