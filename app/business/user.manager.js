'use strict';

const userDAO = require('../dao/user.dao');
function createUser(userData)
{
    userData.createDate = new Date();
    console.log(userData);
    userDAO.save(userData);
}
function query()
{
    return userDAO.getAll();
}
module.exports = {
    query, createUser
};
