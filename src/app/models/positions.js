const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config');
// const slug = require('slug');

const Positions = sequelize.define(
    'position',
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

Positions.sync({alter : true}).then(() => {
    console.log('Positions sync successfully');
})

module.exports = Positions;
