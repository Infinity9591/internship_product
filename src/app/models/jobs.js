const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config')
const DetailAccJob = require('./detail_acc_job')
// const slug = require('slug');

const Jobs = sequelize.define(
    'job',
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true
        },
        name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.STRING,
            allowNull : false
        },
        note : {
            type : DataTypes.TEXT,
            allowNull : null
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

// Jobs.hasMany(DetailAccJob);

Jobs.sync({alter : true}).then(() => {
    console.log('Jobs sync successfully');
})

module.exports = Jobs;
