const { DataTypes} = require("sequelize")
const {sequelize} = require('../config/db.config');
const Positions = require('./positions');
const Permissions = require('./permissions');
// const slug = require('slug');

const RelationPosPer = sequelize.define(
    'relation_pos_per',
    {
        id : {
            type : DataTypes.STRING,
            primaryKey : true
        },
        position_id :{
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        permission_id :{
            type : DataTypes.INTEGER,
            allowNull : false,
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

RelationPosPer.belongsTo(Positions, {
    foreignKey : 'position_id'
});

RelationPosPer.belongsTo(Permissions, {
    foreignKey : 'permission_id'
});


RelationPosPer.removeAttribute('positionId');
RelationPosPer.removeAttribute('permissionId');

RelationPosPer.sync({alter : true}).then(() => {
    console.log('RelationPosPer sync successfully');
})

module.exports = RelationPosPer;
