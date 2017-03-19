import { Component, Input } from '@angular/core';
import { User } from "../model/user";

@Component({
  selector: 'user-detail',
  template: `
    <div *ngIf="user">
        <h2>{{user.name}} details</h2>
        <div><label>id: </label>{{user.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="user.name" placeholder="name">
        </div>
        <div>
            <label>email: </label>{{user.email}}
        </div>
        <div>
            <label>enabled: </label>{{user.enabled}}
        </div>
        <div>
            <label>registered: </label>{{user.registered}}
        </div>
        <div>
            <label>roles: </label>{{user.roles}}
        </div>
    </div> 
  `
})
export class UserDetailComponent {
  @Input() user: User;
}
