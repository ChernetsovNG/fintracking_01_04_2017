System.register(["angular2/core", "angular2/http", "angular2/router", "rxjs/Rx", "./exception.service", "../shared/config", "./profile.service"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, Rx_1, exception_service_1, config_1, profile_service_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (exception_service_1_1) {
                exception_service_1 = exception_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            let AuthService = class AuthService {
                constructor(http, router, profileService, exceptionService) {
                    this.http = http;
                    this.router = router;
                    this.profileService = profileService;
                    this.exceptionService = exceptionService;
                    this._authenticatedAs = null;
                }
                login(token) {
                    let headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    let options = new http_1.RequestOptions({
                        headers: headers
                    });
                    this.http.post(config_1.basePath + config_1.loginPath, "username=" + token.login +
                        "&password=" + token.password, options).map(res => {
                        return res;
                    }).subscribe(res => {
                        this.router.navigate(["Users"]);
                    }, error => {
                        this.exceptionService.onError(error);
                    });
                }
                get authenticatedAs() {
                    return this._authenticatedAs;
                }
                set authenticatedAs(value) {
                    this._authenticatedAs = value;
                }
                hasAdminRole() {
                    return this._authenticatedAs.roles.includes("ROLE_ADMIN");
                }
                logout() {
                    this.http.get(config_1.basePath + "/logout").subscribe();
                    this._authenticatedAs = null;
                }
                isAuthenticated() {
                    if (this._authenticatedAs == null) {
                        return this.profileService.getOwnProfile().map(res => {
                            this._authenticatedAs = res.json();
                            return true;
                        }).catch((error) => {
                            this._authenticatedAs = null;
                            this.exceptionService.onError(error);
                            return Rx_1.Observable.of(false);
                        });
                    }
                    else {
                        return Rx_1.Observable.of(true);
                    }
                }
            };
            AuthService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, router_1.Router, profile_service_1.ProfileService, exception_service_1.ExceptionService])
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map