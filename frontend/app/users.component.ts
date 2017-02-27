import {Component} from 'angular2/core';

import {NavbarComponent} from './navbar.component';

@Component({
    template: `
        <h1>Users</h1>
    `,
    directives: [NavbarComponent]
})
export class UsersComponent {
}