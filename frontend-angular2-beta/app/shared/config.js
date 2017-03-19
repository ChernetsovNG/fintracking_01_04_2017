System.register(["angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var basePath, loginPath, mealPath, profilePath, registerPath, usersPath, i18nPath, headers, reqOptions, reqOptionsJson;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("basePath", basePath = '/fintracking');
            exports_1("loginPath", loginPath = "/spring_security_check");
            exports_1("mealPath", mealPath = '/rest/profile/meals');
            exports_1("profilePath", profilePath = '/rest/profile');
            exports_1("registerPath", registerPath = '/register');
            exports_1("usersPath", usersPath = '/rest/admin/users');
            exports_1("i18nPath", i18nPath = '/i18n');
            exports_1("headers", headers = new http_1.Headers({
                'Content-Type': 'application/json'
            }));
            exports_1("reqOptions", reqOptions = new http_1.RequestOptions({}));
            exports_1("reqOptionsJson", reqOptionsJson = new http_1.RequestOptions({
                headers: headers
            }));
        }
    }
});
//# sourceMappingURL=config.js.map