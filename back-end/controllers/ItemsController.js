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
    let { location, typeItem, name, date, description, itemType, userId, ownerUserId, images } = req.body;

    await Items.create({
        location: location,
        typeItem: typeItem,
        name: name,
        date: date,
        description: description,
        itemType: itemType,
        images: images,
        userId: userId,
        ownerUserId: ownerUserId
    });

    res.status(201).send('Item dos Achados criado!');
}

async function getItems(req, res) {
    let items = await Items.findAll({
        where: {
            itemType: req.params.type
        }
    });
    res.status(200).send(items);
}

async function updateItem(req, res) {
    console.log(req.params.id)
    let item = await Items.findOne({
        where: {
            id: req.params.id
        }
    }).then((item) => {
        if (item) {
            item.update({
                ownerUserId: req.body.ownerUserId
            }).catch(function () { })
        }
    });

    res.status(200).send(item);
}

module.exports = { createItemFound, getItems, updateItem };