const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/database'); 
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            len: [10, 15] 
        }
    },
    bus_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'users', 
    timestamps: false 
});

module.exports = User;
