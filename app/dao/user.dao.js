'use strict';
let sequence = 0;
const users = [{
    id: sequence++, firstName: 'Herzy'
}];
function getAll()
{
    return users
}
function save(user)
{
    user.id = sequence++;
    users.push(user)
}
module.exports = {
    getAll, save
};
