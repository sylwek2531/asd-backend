'use strict';
const userEndpoint = require('./user.endpoint');
module.exports = function (server)
{
    userEndpoint(server)
};
