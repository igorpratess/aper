const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const data = require('../config/config.json');
const dbDev = data.development;
const sequelize = new Sequelize(dbDev.database, dbDev.username, dbDev.password, {
    host: dbDev.host,
    dialect: dbDev.dialect
});
const Items = require('../models/items')(sequelize, DataTypes);

async function createItemFound(req, res) {
    let { location, typeItem, name, date, description, itemType, userId, images } = req.body;
    console.log(req.body)
    console.log(userId)

    await Items.create({
        location: location,
        typeItem: typeItem,
        name: name,
        date: date,
        description: description,
        itemType: itemType,
        images: images,
        userId: userId
    });

    res.status(201).send('Item dos Achados criado!');
}

async function getItems(req, res) {
    console.log(req.params)
    let items = await Items.findAll({
        where: {
            itemType: req.params.type
        }
    });
    res.status(200).send(items);
}

module.exports = { createItemFound, getItems };