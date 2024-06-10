import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import type { NewUserData } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users = DUMMY_USERS;

  constructor() {
    const users = localStorage.getItem('users');

    if (users) {
      this.users = JSON.parse(users);
    }
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  addUser(newUser: NewUserData) {
    this.users.unshift({
      id: new Date().getTime().toString(),
      avatar: 'user-1.jpg',
      name: newUser.name,
    });
    this.saveUsers();
  }

  removeUser(userId: string) {
    this.users = this.users.filter((user) => user.id !== userId);
    this.saveUsers();
  }

  getAllUsers() {
    return this.users;
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
