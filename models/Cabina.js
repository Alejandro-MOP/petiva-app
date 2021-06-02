const Sequelize = require('sequelize');
const db = require('../config/db');

const Cabina = db.define('Cabina', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
	nombre: {
		type: Sequelize.STRING(30),
		allowNull: false,
	},
});

module.exports = Cabina;
