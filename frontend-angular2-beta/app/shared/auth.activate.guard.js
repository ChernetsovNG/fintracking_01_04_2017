System.register(["angular2/router", "../service/auth.service", "angular2/core"], function(exports_1, context_1) {
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
    var router_1, auth_service_1, core_1;
    var AuthActivateGuard;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let AuthActivateGuard = class AuthActivateGuard {
                constructor(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                canActivate(route, state) {
                    return this.authService.isAuthenticated().map(res => {
                        if (!res) {
                            this.router.navigate(["login"]);
                        }
                        return res;
                    });
                }
            };
            AuthActivateGuard = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
            ], AuthActivateGuard);
            exports_1("AuthActivateGuard", AuthActivateGuard);
        }
    }
});
//# sourceMappingURL=auth.activate.guard.js.map