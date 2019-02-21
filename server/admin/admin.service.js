                                    

const db = require('../_helpers/db');
const Role = db.Role;
const Item = db.Item;



module.exports = {
    createRole,
    addMenuItem,
    getRole,
    getMenuItem
  

};


async function createRole(userParam) {
    // validate
    if (await Role.findOne({ role: userParam.role })) {
        throw 'Role "' + userParam.role + '" is already added';
    }

    const role = new Role(userParam);

  

    // save role
    await role.save();
}

async function getRole() {
    return await Role.find();
}

async function getMenuItem() {
    return await Item.find();
}




async function addMenuItem(userParam) {
    // validate
    if (await Item.findOne({ name: userParam.name })) {
        throw ' Menu Item "' + userParam.name + '" is already added';
    }

    const item = new Item(userParam);

  

    // save menuItem
    await item.save();
}

