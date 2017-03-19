"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var USERS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FinTracking';
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Users</h2>\n    <ul class=\"users\">\n        <li *ngFor=\"let user of users\" \n        [class.selected]=\"user === selectedUser\"\n        (click)=\"onSelect(user)\">\n            <span class=\"badge\">{{user.id}}</span> {{user.name}}\n        </li>\n    </ul>\n    <user-detail [user]=\"selectedUser\"></user-detail> \n  ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .users {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .users li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .users li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .users li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .users .text {\n    position: relative;\n    top: -3px;\n  }\n  .users .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map