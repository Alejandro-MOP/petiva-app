const Sequelize = require('sequelize');
const db = require('../config/db');

const Asesora = db.define('Asesora', {
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

module.exports = Asesora;
