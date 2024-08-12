const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config')
const Accounts = require("./accounts");
// const slug = require('slug');

const Users = sequelize.define(
    'user',
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true
        },
        name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        birthday : {
            type : DataTypes.DATE,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        phone_number : {
            type : DataTypes.STRING(11),
            allowNull : false
        },
        address : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        account_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
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

Users.belongsTo(Accounts, {
    foreignKey : 'account_id'
});

Users.removeAttribute('accountId');

Users.sync({alter : true}).then(() => {
    console.log('Users sync successfully');
})

module.exports = Users;
