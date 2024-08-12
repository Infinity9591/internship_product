const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config')
const Positions = require("./positions");
const Departments = require("./departments");
// const slug = require('slug');

const Accounts = sequelize.define(
    'account',
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true
        },
        username :{
            type : DataTypes.STRING,
            allowNull : false
        },
        password_hash : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        position_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        department_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        // slug : {
        //     type : DataTypes.STRING,
        // }
    }, {
        timestamps : false,
        createdAt : false,
        updatedAt : false,
        freezeTableName: true,
    }
)

// Accounts.hasOne(Users);

Accounts.belongsTo(Positions, {
    foreignKey : 'position_id'
})

Accounts.belongsTo(Departments, {
    foreignKey : 'department_id'
})

Accounts.removeAttribute('positionId');
Accounts.removeAttribute('departmentId');

Accounts.sync({alter : true}).then(() => {
    console.log('Accounts sync successfully');
})

module.exports = Accounts;
