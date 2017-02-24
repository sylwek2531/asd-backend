'use strict';
const userManager = require('../business/user.manager');
const joiSchema = require('../joi.schema');
var id = 1;

const users = [{id: id++, name: "Andrzej"}];

module.exports = function (server)
{
    server.route({
        method: 'GET', path: '/api/user', handler: function (request, reply)
        {
            const users = userManager.query();
            reply(users);
        }
    });
    server.route({
        method: 'POST', path: '/api/user', config: {
            validate: {payload: joiSchema.post}
        }, handler: function (request, reply)
        {
            userManager.createUser(request.payload);
            reply();
        }
    });
};
