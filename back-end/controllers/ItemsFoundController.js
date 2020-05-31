const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const data = require('../config/config.json');
const dbDev = data.development;
const sequelize = new Sequelize(dbDev.database, dbDev.username, dbDev.password, {
    host: dbDev.host,
    dialect: dbDev.dialect
});
const ItemsFound = require('../models/itemsfound')(sequelize, DataTypes);

async function createItemFound(req, res) {
    let { location, typeItem, name, date, description, images } = req.body;

    await ItemsFound.create({
        location: location,
        typeItem: typeItem,
        name: name,
        date: date,
        description: description,
        images: images
    });

    res.status(201).send('Item dos Achados criado!');
}

async function getItems(req, res) {
    let items = await ItemsFound.findAll();
    res.status(200).send(items);
}

module.exports = { createItemFound, getItems };