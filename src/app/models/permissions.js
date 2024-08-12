const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config');
// const slug = require('slug');

const Permissions = sequelize.define(
    'permission',
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true
        },
        name :{
            type : DataTypes.STRING,
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

Permissions.sync({alter : true}).then(() => {
    console.log('Permissions sync successfully');
})

module.exports = Permissions;
