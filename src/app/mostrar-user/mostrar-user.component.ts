import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types'; 

@Component({
  selector: 'app-mostrar-user',
  templateUrl: './mostrar-user.component.html',
  styleUrls: ['./mostrar-user.component.scss']
})
export class MostrarUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
