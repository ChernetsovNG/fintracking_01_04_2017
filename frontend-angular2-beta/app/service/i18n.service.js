System.register(["angular2/http", "angular2/core", "../model/i18n.enum", "rxjs/Rx", "../shared/config"], function(exports_1, context_1) {
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
    var http_1, core_1, i18n_enum_1, Rx_1, config_1;
    var I18nService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (i18n_enum_1_1) {
                i18n_enum_1 = i18n_enum_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            let I18nService = class I18nService {
                constructor(http) {
                    this.http = http;
                    this.cachedMessages = null;
                    this.activeLocale = null;
                }
                getMessage(key) {
                    if (this.cachedMessages) {
                        return this.cachedMessages[key];
                    }
                }
                reloadLocale(locale) {
                    this.activeLocale = locale;
                    this.http.get(config_1.basePath + config_1.i18nPath + '/' + i18n_enum_1.I18Enum[locale]).subscribe(res => {
                        this.cachedMessages = res.json();
                    });
                }
                getCurrentLocale() {
                    return i18n_enum_1.I18Enum[this.activeLocale];
                }
                initMessages(locale) {
                    this.activeLocale = locale;
                    return new Promise((resolve, reject) => {
                        this.http.get(config_1.basePath + config_1.i18nPath + '/' + i18n_enum_1.I18Enum[locale]).map(res => res.json()).catch((error) => {
                            reject(false);
                            return Rx_1.Observable.throw(error.json().error || 'Server error');
                        }).subscribe((callResult) => {
                            this.cachedMessages = callResult;
                            resolve(true);
                        });
                    });
                }
            };
            I18nService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], I18nService);
            exports_1("I18nService", I18nService);
        }
    }
});
//# sourceMappingURL=i18n.service.js.map