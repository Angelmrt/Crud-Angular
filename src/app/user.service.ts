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


/*

./types.ts 
../types.ts => cd ..


*/



}
