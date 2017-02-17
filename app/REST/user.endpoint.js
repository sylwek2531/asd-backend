'use strict';
var id = 1;
const users = [{id : id++, name: "Andrzej"}];

module.exports = function (server)
{
    server.route({
        method: 'GET', path: '/api/user', handler: function (request, reply)
        {
            reply({
                result: users
            })
        }
    });
    server.route({
        method: 'POST', path: '/api/user', handler: function (request, reply)
        {
            users.push({id: id++, name: request.payload.name});
            reply({

                result: users
            })
        }
    });
};
