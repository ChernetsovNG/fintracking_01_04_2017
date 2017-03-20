import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'my-users',
  templateUrl: 'app/html/users.component.html',
  styleUrls: [ 'app/style/users.component.css' ]
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/user', this.selectedUser.id]);
  }

  add(name: string, email: string) {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    this.userService.create(name, email)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(u => u !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
  }

}
