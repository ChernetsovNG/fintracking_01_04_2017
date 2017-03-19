System.register(["rxjs/Rx", "../model/error.model", "angular2/core", "./i18n.service"], function(exports_1, context_1) {
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
    var Rx_1, error_model_1, core_1, i18n_service_1;
    var ExceptionService;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (error_model_1_1) {
                error_model_1 = error_model_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (i18n_service_1_1) {
                i18n_service_1 = i18n_service_1_1;
            }],
        execute: function() {
            let ExceptionService = class ExceptionService {
                constructor(i18Service) {
                    this.i18Service = i18Service;
                    this._errorStream = new Rx_1.Subject();
                }
                get errorStream() {
                    return this._errorStream;
                }
                onError(e) {
                    let error;
                    try {
                        error = e.json();
                    }
                    catch (e) {
                        console.log("Parsing error object was failed", e);
                    }
                    let errorModel = null;
                    if (error) {
                        if (error.cause === 'BadCredentialsException') {
                            errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.login'), null);
                        }
                        else if (error.cause === 'DisabledException') {
                            errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.disabled'), null);
                        }
                        else if (error.cause === 'DataIntegrityViolationException') {
                            errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.duplicate_email'), null);
                        }
                        else if (error.cause === 'InsufficientAuthenticationException') {
                            errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.sessionExpired'), null);
                        }
                    }
                    if (!errorModel) {
                        errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.unavailable'), null);
                    }
                    this._errorStream.next(errorModel);
                    console.log(e);
                }
            };
            ExceptionService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [i18n_service_1.I18nService])
            ], ExceptionService);
            exports_1("ExceptionService", ExceptionService);
        }
    }
});
//# sourceMappingURL=exception.service.js.map