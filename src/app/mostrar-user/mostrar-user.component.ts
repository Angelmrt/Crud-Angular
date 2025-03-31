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
    this.loadUsers();
  }

  loadUsers(): void {
    this.userservice.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addNewUser(): void {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000), // Simulación de ID aleatorio
      name: 'Nuevo Usuario',
      email: 'nuevo@example.com',
      phone: '123456789',
      role: 'Usuario'
    };

    this.userservice.addUser(newUser).subscribe(() => {
      this.loadUsers();
    });
  }

  editUser(user: User): void {
    const updatedUser = { ...user, name: user.name + ' (editado)' };
    this.userservice.updateUser(updatedUser).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userservice.deleteUser(id).subscribe(() => {
        this.loadUsers();
      });
    }
  }
}

