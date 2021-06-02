const Sequelize = require('sequelize');
const db = require('../config/db');

const Zonas = db.define('Zonas', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
	zona: {
		type: Sequelize.STRING(30),
		allowNull: false,
	},
});

module.exports = Zonas;
