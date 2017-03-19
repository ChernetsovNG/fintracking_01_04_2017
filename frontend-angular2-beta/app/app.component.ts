import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './component/navbar.component';
import {HomeComponent} from './component/home.component';
import {UsersComponent} from './component/user/users.component';
import {PostsComponent} from './component/posts.component';
import {UserFormComponent} from './component/user/user-form.component';
import {NotFoundComponent} from './component/not-found.component';
import {EntryComponent} from "./component/auth/entry.component";
import {AuthActivateGuard} from "./shared/auth.activate.guard";

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { paht: '/login', name: 'Login', component: EntryComponent },
    { path: '/users', name: 'Users', component: UsersComponent, canActivate: [AuthActivateGuard] },
    { path: '/users/:id', name: 'EditUser', component: UserFormComponent},
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [UsersComponent]
})
export class AppComponent { 
}