const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config')
// const slug = require('slug');

const Departments = sequelize.define(
    'department',
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

Departments.sync({alter : true}).then(() => {
    console.log('Departments sync successfully');
})

module.exports = Departments;
