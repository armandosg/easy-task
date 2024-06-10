import { Component, inject } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { NewUserData } from './user/user.model';
import { UsersService } from './user/users.service';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NewUserComponent,
    DeleteUserComponent,
  ],
})
export class AppComponent {
  selectedUserId?: string;
  showNewUserDialog: boolean = false;
  showDeleteUserDialog: boolean = false;
  usersService = inject(UsersService);

  get selectedUser() {
    if (this.selectedUserId) {
      return this.usersService.getUserById(this.selectedUserId);
    } else {
      return undefined;
    }
  }

  get users() {
    return this.usersService.getAllUsers();
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onStartNewUser() {
    this.showNewUserDialog = true;
  }

  onAddUser(newUser: NewUserData) {
    this.usersService.addUser(newUser);
    this.showNewUserDialog = false;
  }

  onCloseNewUserDialog() {
    this.showNewUserDialog = false;
  }

  onDeleteUser() {
    this.showDeleteUserDialog = true;
  }

  onCloseDeleteUserDialog() {
    this.showDeleteUserDialog = false;
  }

  onConfirmDeleteUser() {
    if (this.selectedUserId) {
      this.usersService.removeUser(this.selectedUserId);
    }
    this.showDeleteUserDialog = false;
  }
}
