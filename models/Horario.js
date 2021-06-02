const Sequelize = require('sequelize');
const db = require('../config/db');

const Horario = db.define('Horario', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
	inicio: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	fin: {
		type: Sequelize.DATE,
		allowNull: false,
	},
});

module.exports = Horario;
