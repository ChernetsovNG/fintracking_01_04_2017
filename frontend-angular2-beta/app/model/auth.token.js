System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Token;
    return {
        setters:[],
        execute: function() {
            class Token {
                constructor(login, password) {
                    this.login = login;
                    this.password = password;
                }
            }
            exports_1("Token", Token);
        }
    }
});
//# sourceMappingURL=auth.token.js.map