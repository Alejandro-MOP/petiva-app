const Sequelize = require('sequelize');
const db = require('../config/db');

const Cliente = db.define('Cliente', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
	nombre: {
		type: Sequelize.STRING(30),
		allowNull: false,
	},
	fecha_nacimiento: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	num_telefono: {
		type: Sequelize.STRING(10),
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING(10),
		allowNull: false,
	},
});

module.exports = Cliente;
