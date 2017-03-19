System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ErrorModel;
    return {
        setters:[],
        execute: function() {
            class ErrorModel {
                constructor(summary, detail) {
                    this.severity = 'error';
                    this.summary = summary;
                    this.detail = detail;
                }
            }
            exports_1("ErrorModel", ErrorModel);
        }
    }
});
//# sourceMappingURL=error.model.js.map