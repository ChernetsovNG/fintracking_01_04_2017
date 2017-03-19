System.register(["angular2/core", 'angular2/common', 'angular2/router', "../../service/auth.service"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, auth_service_1;
    var EntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let EntryComponent = class EntryComponent {
                constructor(_formBuilder, _router, _routeParams, _authService) {
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._authService = _authService;
                }
                ngOnInit() {
                    this.loginForm = this._formBuilder.group({
                        login: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                }
            };
            EntryComponent = __decorate([
                core_1.Component({
                    templateUrl: '../../html/entry.html'
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, auth_service_1.AuthService])
            ], EntryComponent);
            exports_1("EntryComponent", EntryComponent);
        }
    }
});
//# sourceMappingURL=entry.component.js.map