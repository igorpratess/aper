'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ItemsFounds', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            location: {
                type: Sequelize.STRING
            },
            typeItem: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            images: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ItemsFounds');
    }
};