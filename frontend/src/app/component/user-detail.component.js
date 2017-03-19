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
var user_1 = require("../model/user");
var UserDetailComponent = (function () {
    function UserDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            template: "\n    <div *ngIf=\"user\">\n        <h2>{{user.name}} details</h2>\n        <div><label>id: </label>{{user.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"user.name\" placeholder=\"name\">\n        </div>\n        <div>\n            <label>email: </label>{{user.email}}\n        </div>\n        <div>\n            <label>enabled: </label>{{user.enabled}}\n        </div>\n        <div>\n            <label>registered: </label>{{user.registered}}\n        </div>\n        <div>\n            <label>roles: </label>{{user.roles}}\n        </div>\n    </div> \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map