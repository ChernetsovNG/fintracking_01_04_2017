"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                id: 100000,
                name: 'User',
                email: 'user@gmail.com',
                enabled: true,
                registered: new Date("March 10, 2016 10:13:00"),
                roles: ['ROLE_USER']
            },
            {
                id: 100001,
                name: 'Admin',
                email: 'admin@gmail.com',
                enabled: true,
                registered: new Date("February 4, 2016 10:13:00"),
                roles: ['ROLE_USER', 'ROLE_ADMIN']
            },
            {
                id: 100002,
                name: "N_Chernetsov",
                email: 'n.chernetsov86@gmail.com',
                enabled: true,
                registered: new Date("October 10, 2004 15:50:59"),
                roles: ['ROLE_USER', 'ROLE_ADMIN']
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map