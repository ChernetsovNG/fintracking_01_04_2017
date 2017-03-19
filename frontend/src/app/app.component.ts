import { Component } from '@angular/core';

import { User } from './model/user';
import { UserDetailComponent } from './component/user-detail.component';

const USERS: User[] = [
  {
    id: 100000,
    name: 'User',
    email: 'user@gmail.com',
    enabled: true,
    registered: new Date("March 10, 2016 10:13:00"),
    roles: ['ROLE_USER']
  },
  {
    id: 100001,
    name: 'Admin',
    email: 'admin@gmail.com',
    enabled: true,
    registered: new Date("February 4, 2016 10:13:00"),
    roles: ['ROLE_USER', 'ROLE_ADMIN']
  },
  {
    id: 100002,
    name: "N_Chernetsov",
    email: 'n.chernetsov86@gmail.com',
    enabled: true,
    registered: new Date("October 10, 2004 15:50:59"),
    roles: ['ROLE_USER', 'ROLE_ADMIN']
  }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Users</h2>
    <ul class="users">
        <li *ngFor="let user of users" 
        [class.selected]="user === selectedUser"
        (click)="onSelect(user)">
            <span class="badge">{{user.id}}</span> {{user.name}}
        </li>
    </ul>
    <user-detail [user]="selectedUser"></user-detail> 
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .users {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .users li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .users li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .users li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .users .text {
    position: relative;
    top: -3px;
  }
  .users .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]
})
export class AppComponent  {
  title = 'FinTracking';

  users = USERS;

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
