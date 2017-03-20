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
var router_1 = require('@angular/router');
var user_service_1 = require('../service/user.service');
var UsersComponent = (function () {
    function UsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/user', this.selectedUser.id]);
    };
    UsersComponent.prototype.add = function (name, email) {
        var _this = this;
        name = name.trim();
        email = email.trim();
        if (!name) {
            return;
        }
        this.userService.create(name, email)
            .then(function (user) {
            _this.users.push(user);
            _this.selectedUser = null;
        });
    };
    UsersComponent.prototype.delete = function (user) {
        var _this = this;
        this.userService
            .delete(user.id)
            .then(function () {
            _this.users = _this.users.filter(function (u) { return u !== user; });
            if (_this.selectedUser === user) {
                _this.selectedUser = null;
            }
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'my-users',
            templateUrl: 'app/html/users.component.html',
            styleUrls: ['app/style/users.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map