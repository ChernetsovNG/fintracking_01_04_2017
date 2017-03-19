System.register(['angular2/core', 'angular2/router', '../../service/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let UsersComponent = class UsersComponent {
                constructor(_service) {
                    this._service = _service;
                }
                ngOnInit() {
                    this._service.getUsers()
                        .subscribe(users => this.users = users);
                }
                deleteUser(user) {
                    if (confirm("Are you sure you want to delete " + user.name + "?")) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1);
                        this._service.deleteUser(user.id)
                            .subscribe(null, err => {
                            alert("Could not delete the user.");
                            this.users.splice(index, 0, user);
                        });
                    }
                }
            };
            UsersComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/html/users.component.html',
                    providers: [user_service_1.UserService],
                    directives: [router_1.RouterLink]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], UsersComponent);
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map